
import { NextResponse } from "next/server";
import { PrismaClient } from "@scer/db-scer";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    if (payload.event === "audio.distress.detected") {
      const org = await prisma.organization.findFirst();
      if (!org) return NextResponse.json({ error: "No org" }, { status: 400 });

      // 1. Create incident
      const incident = await prisma.incident.create({
        data: {
          organizationId: org.id,
          type: "Audio Distress",
          severity: "CRITICAL",
          status: "REPORTED",
          location: payload.data.location || "Unknown",
          description: `Detected keyword: ${payload.data.keyword} with ${payload.data.confidence * 100}% confidence`,
        }
      });

      // 2. Call GeoPulse for recommendation
      let recommendedResponder = null;
      try {
        const geoReq = await fetch("http://localhost:3002/api/geopulse/recommend", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            incidentLocation: incident.location,
            incidentType: incident.type,
            severity: incident.severity
          })
        });
        
        if (geoReq.ok) {
          const geoRes = await geoReq.json();
          recommendedResponder = geoRes.recommendedResource;
        }
      } catch (err) {
        console.log("GeoPulse unavailable, fallback to manual");
      }

      // 3. Assign responder if found
      if (recommendedResponder) {
        await prisma.incident.update({
          where: { id: incident.id },
          data: { status: "ASSIGNED" }
        });

        // 4. Call Notification Engine
        try {
          await fetch("http://localhost:3003/api/notify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              eventType: "INCIDENT_ASSIGNED",
              severity: "CRITICAL",
              recipient: recommendedResponder,
              message: `You have been assigned to ${incident.type} at ${incident.location}`
            })
          });
        } catch (err) {
          console.log("Notification Engine unavailable");
        }
      }

      return NextResponse.json({ success: true, incidentId: incident.id });
    }

    return NextResponse.json({ ignored: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to process webhook" }, { status: 500 });
  }
}

