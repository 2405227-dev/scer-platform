import { NextResponse } from "next/server";
import { db as prisma } from "@scer/db-scer";
import { publish } from "@scer/db-scer/src/events";
import { dispatchIncidentToTelegram } from "@/lib/telegram";

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    if (payload.event === "audio.distress.detected") {
      let org = await prisma.organization.findFirst();
      if (!org) {
        org = await prisma.organization.create({
          data: { name: "Campus Emergency Command", type: "Campus" },
        });
      }

      const keyword = (payload.data.keyword || "HELP").toUpperCase();
      const location = payload.data.location || "Block C (Academic)";
      const confidence = payload.data.confidence || 0.95;
      const transcript = payload.data.transcript || `Acoustic distress triggered: "${keyword}"`;

      // Determine emergency type & target department based on keyword
      let incidentType = "Audio Distress Alert";
      let department = "Campus Police & Security";
      let severity = "CRITICAL";

      if (keyword.includes("FIRE") || keyword.includes("SMOKE") || keyword.includes("BURNING")) {
        incidentType = "Active Fire / Smoke Alarm";
        department = "Campus Fire Station Brigade";
      } else if (keyword.includes("GUNSHOT") || keyword.includes("SHOOTER") || keyword.includes("POLICE") || keyword.includes("INTRUSION")) {
        incidentType = "Active Armed Threat / Security Breach";
        department = "Police Station & SWAT Rapid Team";
      } else if (keyword.includes("HELP") || keyword.includes("MEDICAL") || keyword.includes("AMBULANCE") || keyword.includes("DOCTOR")) {
        incidentType = "Medical Trauma Distress";
        department = "Emergency Hospital & Trauma Paramedics";
      }

      // 1. Create incident in SCER DB with status = "pending"
      const incident = await prisma.incident.create({
        data: {
          organizationId: org.id,
          type: incidentType,
          severity,
          status: "pending",
          location,
          description: transcript,
          reporterName: "SCER Audio Engine (Voice/Acoustic)",
          priority: 1,
        },
      });

      // Create timeline entry
      await prisma.incidentTimeline.create({
        data: {
          incidentId: incident.id,
          action: "Distress Detected via Audio Engine",
          actor: "Audio Engine",
          details: transcript,
        },
      }).catch(() => null);

      // 2. Broadcast to Live Response on Port 3004 via SSE
      publish({
        id: `evt-${Date.now()}`,
        type: "incident.created",
        timestamp: new Date(),
        source: "audio-engine",
        incidentId: incident.id,
        severity: "CRITICAL",
        data: {
          id: incident.id,
          type: incident.type,
          severity: incident.severity,
          status: "pending",
          location: incident.location,
          description: incident.description,
          reporterName: incident.reporterName,
          keyword,
        },
      });

      // 3. Dispatch alert simultaneously to Connected Responder Telegram
      const dispatchResult = await dispatchIncidentToTelegram(incident.id).catch((err) => {
        console.error("[AUDIO WEBHOOK] Telegram dispatch error:", err);
        return null;
      });

      return NextResponse.json({
        success: true,
        incidentId: incident.id,
        status: "pending",
        type: incident.type,
        location: incident.location,
        telegramDispatched: dispatchResult?.dispatched || false,
      });
    }

    return NextResponse.json({ ignored: true });
  } catch (error) {
    console.error("Audio webhook error:", error);
    return NextResponse.json({ error: "Failed to process webhook" }, { status: 500 });
  }
}
