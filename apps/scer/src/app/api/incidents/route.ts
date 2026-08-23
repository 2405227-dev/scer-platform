import { NextResponse } from "next/server";
import { db as prisma, publish } from "@scer/db-scer";
import { handleCorsOptions, jsonWithCors } from "@/lib/cors";
import { dispatchIncidentToTelegram } from "@/lib/telegram";

export async function OPTIONS() {
  return handleCorsOptions();
}

import { extractSessionFromRequest } from "@/lib/auth";

export async function GET(req: Request) {
  try {
    const session = await extractSessionFromRequest(req);
    const { searchParams } = new URL(req.url);
    const requestedReporterId = searchParams.get("reporterId");

    const where: Record<string, any> = {};

    // SERVER-SIDE DATA ISOLATION:
    // If the authenticated user is a USER, strictly force where.reporterId to their own userId
    if (session && session.role === "USER") {
      where.reporterId = session.userId;
    } else if (requestedReporterId) {
      where.reporterId = requestedReporterId;
    }

    const incidents = await prisma.incident.findMany({
      where,
      orderBy: { createdAt: "desc" },
      include: {
        responder: true,
        timeline: {
          orderBy: { createdAt: "desc" },
          take: 5,
        },
        messages: {
          orderBy: { createdAt: "asc" },
        },
      },
    });
    return jsonWithCors(incidents);
  } catch (error) {
    return jsonWithCors({ error: "Failed to fetch incidents" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    let org = await prisma.organization.findFirst();
    if (!org) {
      org = await prisma.organization.create({
        data: { name: "Campus Emergency Command", type: "Campus" },
      });
    }

    const incident = await prisma.incident.create({
      data: {
        organizationId: data.organizationId || org.id,
        type: data.type || "General Emergency",
        severity: data.severity || "MEDIUM",
        status: data.status || "pending",
        location: data.location || "Central Campus",
        description: data.description || "Reported via Dispatch Portal",
        reporterName: data.reporterName || "Student Reporter",
        reporterId: data.reporterId || null,
        assignedTo: data.assignedTo || null,
        assignedToName: data.assignedToName || null,
        telegramChatId: data.telegramChatId || data.reporterTelegramChatId || null,
        telegramMessageId: data.telegramMessageId || null,
        location_lat: data.location_lat != null ? parseFloat(data.location_lat) : null,
        location_lon: data.location_lon != null ? parseFloat(data.location_lon) : null,
        priority: data.severity === "CRITICAL" ? 3 : data.severity === "HIGH" ? 2 : 1,
      },
    });

    // Create initial student message in message ledger if description provided
    if (incident.description) {
      await prisma.incidentMessage.create({
        data: {
          incidentId: incident.id,
          senderType: "STUDENT",
          senderName: incident.reporterName || "Student",
          content: incident.description,
        },
      }).catch(() => null);
    }

    // Publish event so SSE broadcasts live
    publish({
      id: `evt-${Date.now()}`,
      type: "incident.created",
      timestamp: new Date(),
      source: "dispatch-portal",
      incidentId: incident.id,
      severity: incident.severity as any,
      data: {
        type: incident.type,
        location: incident.location,
        description: incident.description,
        reporterName: incident.reporterName,
      },
    });

    // Dispatch incident alert to connected responder Telegram accounts
    dispatchIncidentToTelegram(incident.id).catch((err) =>
      console.error("Failed to dispatch incident to Telegram:", err)
    );

    return jsonWithCors({ success: true, incident });
  } catch (error) {
    console.error("Failed to create incident:", error);
    return jsonWithCors({ error: "Failed to create incident" }, { status: 500 });
  }
}
