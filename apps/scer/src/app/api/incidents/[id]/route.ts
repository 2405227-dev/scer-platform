import { NextResponse } from "next/server";
import { db as prisma, publish } from "@scer/db-scer";
import { handleCorsOptions, jsonWithCors } from "@/lib/cors";

export async function OPTIONS() {
  return handleCorsOptions();
}

// GET /api/incidents/[id]
export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const incident = await prisma.incident.findUnique({
      where: { id: resolvedParams.id },
      include: {
        responder: true,
        timeline: {
          orderBy: { createdAt: "desc" },
        },
        messages: {
          orderBy: { createdAt: "asc" },
        },
      },
    });

    if (!incident) {
      return jsonWithCors({ error: "Incident not found" }, { status: 404 });
    }

    return jsonWithCors(incident);
  } catch (error: any) {
    console.error("Failed to fetch incident:", error);
    return jsonWithCors({ error: "Failed to fetch incident" }, { status: 500 });
  }
}

// PATCH /api/incidents/[id]
export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const data = await req.json();

    const updateData: Record<string, any> = {};
    if (data.status) updateData.status = data.status.toLowerCase();
    if (data.assignedTo) updateData.assignedTo = data.assignedTo;
    if (data.assignedToName) updateData.assignedToName = data.assignedToName;
    if (data.severity) updateData.severity = data.severity;
    if (data.location) updateData.location = data.location;
    if (data.resolvedBy) {
      updateData.resolvedBy = data.resolvedBy;
      updateData.resolvedAt = new Date();
    }
    if (data.status?.toLowerCase() === "resolved" && !updateData.resolvedAt) {
      updateData.resolvedAt = new Date();
      updateData.resolvedBy = data.resolvedBy || "Controller";
    }

    const incident = await prisma.incident.update({
      where: { id: resolvedParams.id },
      data: updateData,
    });

    // Publish event
    publish({
      id: `evt-${Date.now()}`,
      type: "incident.updated",
      timestamp: new Date(),
      source: "dispatch-portal",
      incidentId: incident.id,
      severity: incident.severity as any,
      data: {
        status: incident.status,
        assignedTo: incident.assignedTo,
        assignedToName: incident.assignedToName,
      },
    });

    return jsonWithCors(incident);
  } catch (error: any) {
    console.error("Failed to update incident:", error);
    return jsonWithCors({ error: "Failed to update incident" }, { status: 500 });
  }
}
