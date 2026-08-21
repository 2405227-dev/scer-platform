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

    const validStatuses = ["AVAILABLE", "BUSY", "OFFLINE", "EN_ROUTE", "ON_SCENE"];
    if (!status || !validStatuses.includes(status.toUpperCase())) {
      return NextResponse.json(
        { error: `Invalid status. Valid values: ${validStatuses.join(", ")}` },
        { status: 400 }
      );
    }

    const newStatus = status.toUpperCase();

    // Fetch existing responder
    const responder = await prisma.geoResource.findUnique({
      where: { id },
    });

    if (!responder) {
      return NextResponse.json(
        { error: `Responder '${id}' not found.` },
        { status: 404 }
      );
    }

    // If changing to AVAILABLE, close out active assignments
    if (newStatus === "AVAILABLE" && responder.currentAssignmentId) {
      try {
        await prisma.geoAssignment.update({
          where: { id: responder.currentAssignmentId },
          data: {
            status: "COMPLETED",
            completedAt: new Date(),
          },
        });
      } catch (err) {
        console.warn("Could not mark assignment completed:", err);
      }
    }

    const updated = await prisma.geoResource.update({
      where: { id },
      data: {
        status: newStatus,
        currentAssignmentId: newStatus === "AVAILABLE" ? null : responder.currentAssignmentId,
      },
      include: { capabilities: true },
    });

    return NextResponse.json({ success: true, responder: updated });
  } catch (error) {
    console.error("Error updating responder status:", error);
    return NextResponse.json(
      { error: "Failed to update responder status" },
      { status: 500 }
    );
  }
}
