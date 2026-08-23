import { NextResponse } from "next/server";
import { publish, Event, db as prisma } from "@scer/db-scer";

export async function POST(req: Request) {
  try {
    const event: Event = await req.json();

    // 1. Publish to real-time event bus (which pushes to SSE clients)
    publish(event);

    // 2. Persist important events in DB
    if (event.type === "incident.created") {
      // For demo, ensure org exists
      let org = await prisma.organization.findFirst({ where: { id: "org-default" } });
      if (!org) {
        org = await prisma.organization.create({ data: { id: "org-default", name: "Default Org", type: "Demo" }});
      }
      
      await prisma.incident.create({
        data: {
          id: event.incidentId || event.id,
          organizationId: "org-default",
          type: event.data?.type || "General",
          severity: event.severity || "MEDIUM",
          status: "OPEN",
          location: event.data?.location || "Unknown",
          description: event.data?.keyword ? `Keyword detected: ${event.data.keyword}` : "Incident created",
          location_lat: event.data?.latitude,
          location_lon: event.data?.longitude
        }
      });
    } else if (event.type === "detection.audio.alert") {
      // Need incident first or just save as event
      // We'll skip incidentEvent creation for now unless we know incidentId exists, 
      // or we can auto-create incident.
      
      let org = await prisma.organization.findFirst({ where: { id: "org-default" } });
      if (!org) {
        org = await prisma.organization.create({ data: { id: "org-default", name: "Default Org", type: "Demo" }});
      }
      
      const incidentId = event.incidentId || `inc-${Date.now()}`;
      await prisma.incident.upsert({
        where: { id: incidentId },
        update: {},
        create: {
          id: incidentId,
          organizationId: "org-default",
          type: "Audio Alert",
          severity: event.severity || "MEDIUM",
          status: "OPEN",
          location: event.data?.location || "Unknown",
          description: `Auto-generated incident from audio alert: ${event.data?.keyword || "unknown"}`,
          location_lat: event.data?.latitude,
          location_lon: event.data?.longitude
        }
      });

      await prisma.incidentEvent.create({
        data: {
          id: event.id,
          incidentId: incidentId,
          type: "detection.audio",
          data: JSON.stringify(event.data)
        }
      });
    }

    return NextResponse.json({ success: true }, { headers: { "Access-Control-Allow-Origin": "*" } });
  } catch (err: any) {
    console.error("Error processing event:", err);
    return NextResponse.json({ error: "Failed to process event" }, { status: 500, headers: { "Access-Control-Allow-Origin": "*" } });
  }
}
export async function OPTIONS() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
