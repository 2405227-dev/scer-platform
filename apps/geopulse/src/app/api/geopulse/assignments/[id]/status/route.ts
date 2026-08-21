import { NextResponse } from "next/server";
import { prisma } from "@scer/db-geopulse";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const { status } = await req.json();

    const validStatuses = [
      "DISPATCHED",
      "ACCEPTED",
      "EN_ROUTE",
      "ON_SCENE",
      "COMPLETED",
      "CANCELLED",
    ];

    if (!status || !validStatuses.includes(status.toUpperCase())) {
      return NextResponse.json(
        { error: `Invalid assignment status. Valid values: ${validStatuses.join(", ")}` },
        { status: 400 }
      );
    }

    const newStatus = status.toUpperCase();

    const assignment = await prisma.geoAssignment.findUnique({
      where: { id },
      include: { responder: true, incident: true },
    });

    if (!assignment) {
      return NextResponse.json(
        { error: `Assignment '${id}' not found.` },
        { status: 404 }
      );
    }

    const now = new Date();
    const updateData: any = { status: newStatus };

    if (newStatus === "ACCEPTED") {
      updateData.acceptedAt = now;
    } else if (newStatus === "ON_SCENE") {
      updateData.arrivedAt = now;
    } else if (newStatus === "COMPLETED" || newStatus === "CANCELLED") {
      updateData.completedAt = now;
    }

    const updatedAssignment = await prisma.geoAssignment.update({
      where: { id },
      data: updateData,
      include: { responder: true, incident: true },
    });

    // Sync responder status
    if (newStatus === "COMPLETED" || newStatus === "CANCELLED") {
      await prisma.geoResource.update({
        where: { id: assignment.responderId },
        data: { status: "AVAILABLE", currentAssignmentId: null },
      });

      if (newStatus === "COMPLETED") {
        await prisma.geoIncident.update({
          where: { id: assignment.incidentId },
          data: { status: "RESOLVED" },
        });
      }
    } else if (newStatus === "ON_SCENE") {
      await prisma.geoResource.update({
        where: { id: assignment.responderId },
        data: { status: "ON_SCENE" },
      });
      await prisma.geoIncident.update({
        where: { id: assignment.incidentId },
        data: { status: "ON_SCENE" },
      });
    } else if (newStatus === "EN_ROUTE" || newStatus === "ACCEPTED" || newStatus === "DISPATCHED") {
      await prisma.geoResource.update({
        where: { id: assignment.responderId },
        data: { status: "EN_ROUTE" },
      });
      await prisma.geoIncident.update({
        where: { id: assignment.incidentId },
        data: { status: "ASSIGNED" },
      });
    }

    // Sync with SCER if externalId exists
    if (assignment.incident.externalId) {
      try {
        let scerStatus = "ASSIGNED";
        if (newStatus === "COMPLETED") scerStatus = "RESOLVED";
        else if (newStatus === "EN_ROUTE") scerStatus = "EN_ROUTE";
        else if (newStatus === "ON_SCENE") scerStatus = "ARRIVED";

        await fetch(`http://localhost:3000/api/incidents/${assignment.incident.externalId}/status`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: scerStatus }),
        });
      } catch (scerErr) {
        console.warn("SCER status sync bypassed:", scerErr);
      }
    }

    return NextResponse.json({
      success: true,
      assignment: updatedAssignment,
    });
  } catch (error) {
    console.error("Error updating assignment status:", error);
    return NextResponse.json(
      { error: "Failed to update assignment status." },
      { status: 500 }
    );
  }
}
