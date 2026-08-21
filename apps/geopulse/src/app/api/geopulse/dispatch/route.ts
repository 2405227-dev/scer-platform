import { NextResponse } from "next/server";
import { prisma } from "@scer/db-geopulse";
import { calculateETA, calculateHaversineDistanceKm, getDefaultSpeedForType } from "@/lib/geo-engine";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { incidentId, responderId } = body;

    if (!incidentId || !responderId) {
      return NextResponse.json(
        { error: "Both incidentId and responderId are required for dispatch." },
        { status: 400 }
      );
    }

    // 1. Fetch and validate incident
    const incident = await prisma.geoIncident.findUnique({
      where: { id: incidentId },
    });

    if (!incident) {
      return NextResponse.json(
        { error: `Incident with ID '${incidentId}' does not exist.` },
        { status: 404 }
      );
    }

    if (incident.status === "RESOLVED" || incident.status === "CLOSED") {
      return NextResponse.json(
        { error: "Cannot dispatch to an incident that is already resolved or closed." },
        { status: 400 }
      );
    }

    // 2. Fetch and validate responder
    const responder = await prisma.geoResource.findUnique({
      where: { id: responderId },
      include: { capabilities: true },
    });

    if (!responder) {
      return NextResponse.json(
        { error: `Responder unit with ID '${responderId}' not found.` },
        { status: 404 }
      );
    }

    if (responder.status === "OFFLINE") {
      return NextResponse.json(
        { error: `Responder '${responder.name}' is currently OFFLINE and cannot be dispatched.` },
        { status: 400 }
      );
    }

    // 3. Compute real distance & ETA if not provided
    let distanceKm = typeof body.distanceKm === "number" ? body.distanceKm : null;
    let etaMinutes = typeof body.etaMinutes === "number" ? body.etaMinutes : null;

    if (distanceKm === null || distanceKm === undefined) {
      distanceKm = calculateHaversineDistanceKm(
        incident.latitude,
        incident.longitude,
        responder.latitude,
        responder.longitude
      );
    }

    if (etaMinutes === null || etaMinutes === undefined) {
      const speed = responder.speedKmH || getDefaultSpeedForType(responder.type);
      const etaCalc = calculateETA(distanceKm, speed);
      etaMinutes = etaCalc.totalMinutes;
    }

    // 4. Create GeoAssignment record
    const assignment = await prisma.geoAssignment.create({
      data: {
        incidentId: incident.id,
        responderId: responder.id,
        distanceKm,
        estimatedTimeMinutes: etaMinutes,
        status: "DISPATCHED",
      },
    });

    // 5. Update Responder Status -> EN_ROUTE
    const updatedResponder = await prisma.geoResource.update({
      where: { id: responder.id },
      data: {
        status: "EN_ROUTE",
        currentAssignmentId: assignment.id,
      },
      include: { capabilities: true },
    });

    // 6. Update Incident Status -> ASSIGNED
    const updatedIncident = await prisma.geoIncident.update({
      where: { id: incident.id },
      data: {
        status: "ASSIGNED",
        assignedResponderId: responder.id,
      },
    });

    // 7. Trigger Notification Engine (http://localhost:3003/api/notify)
    const notificationPayload = {
      eventType: "EMERGENCY_DISPATCH",
      severity: incident.severity,
      recipient: responder.name,
      message: `[DISPATCH] ${responder.name} assigned to ${incident.type} at ${incident.location}. ETA: ~${etaMinutes} min (Dist: ${distanceKm} km). Assignment ID: ${assignment.id}`,
    };

    try {
      const notifRes = await fetch("http://localhost:3003/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(notificationPayload),
      });
      if (!notifRes.ok) {
        console.warn("Notification Engine returned status:", notifRes.status);
      }
    } catch (notifErr) {
      console.warn("Notification Engine unavailable at http://localhost:3003. Logged locally.", notifErr);
    }

    // 8. If Incident has external SCER reference, sync with SCER Command Center
    if (incident.externalId) {
      try {
        await fetch(`http://localhost:3000/api/incidents/${incident.externalId}/status`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "ASSIGNED" }),
        });
      } catch (scerErr) {
        console.warn("SCER Command Center sync bypassed:", scerErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Responder '${responder.name}' successfully dispatched to incident '${incident.title || incident.id}'.`,
      assignment: {
        id: assignment.id,
        incidentId: assignment.incidentId,
        responderId: assignment.responderId,
        distanceKm: assignment.distanceKm,
        estimatedTimeMinutes: assignment.estimatedTimeMinutes,
        status: assignment.status,
        assignedAt: assignment.assignedAt,
      },
      responder: {
        id: updatedResponder.id,
        name: updatedResponder.name,
        type: updatedResponder.type,
        status: updatedResponder.status,
        latitude: updatedResponder.latitude,
        longitude: updatedResponder.longitude,
      },
      incident: {
        id: updatedIncident.id,
        title: updatedIncident.title,
        type: updatedIncident.type,
        severity: updatedIncident.severity,
        status: updatedIncident.status,
        location: updatedIncident.location,
        assignedResponderId: updatedIncident.assignedResponderId,
      },
    });
  } catch (error) {
    console.error("Error in /api/geopulse/dispatch:", error);
    return NextResponse.json(
      { error: "Internal error processing responder dispatch." },
      { status: 500 }
    );
  }
}
