
import { NextResponse } from "next/server";
import { db as prisma } from "@scer/db-scer";
import { publish } from "@scer/db-scer/src/events";
import { handleCorsOptions, jsonWithCors } from "@/lib/cors";
import { notifyIncidentStatusChange } from "@/lib/telegram";

export async function OPTIONS() {
  return handleCorsOptions();
}

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const body = await req.json();
    const { status: rawTargetStatus, assignedTo, assignedToName } = body;

    console.log("[STATUS] Request received", {
      incidentId: resolvedParams.id,
      requestedStatus: rawTargetStatus,
      assignedTo,
      assignedToName,
    });

    if (!rawTargetStatus) {
      return jsonWithCors({ error: "Target status is required" }, { status: 400 });
    }

    const currentIncident = await prisma.incident.findUnique({
      where: { id: resolvedParams.id },
    });

    if (!currentIncident) {
      return jsonWithCors({ error: "Incident not found" }, { status: 404 });
    }

    // Normalize statuses for transition validation
    const currentStatus = (currentIncident.status || "pending").toLowerCase();
    const targetStatus = rawTargetStatus.toLowerCase();

    // Define valid state machine transitions: pending -> accepted -> in_progress -> resolved
    const validTransitions: Record<string, string[]> = {
      pending: ["accepted"],
      reported: ["accepted"],
      new: ["accepted"],
      open: ["accepted"],
      assigned: ["in_progress", "accepted"],
      accepted: ["in_progress", "resolved"],
      acknowledged: ["in_progress", "resolved"],
      in_progress: ["resolved"],
      resolved: [], // Terminal state: cannot transition from resolved
      closed: [],
    };

    const allowedNext = validTransitions[currentStatus] || [];
    const isAllowed = allowedNext.includes(targetStatus);

    if (!isAllowed) {
      return jsonWithCors(
        {
          error: `Invalid transition from '${currentIncident.status}' to '${rawTargetStatus}'.`,
          currentStatus: currentIncident.status,
          attemptedStatus: rawTargetStatus,
          allowedNextTransitions: allowedNext,
        },
        { status: 400 }
      );
    }

    const updateData: Record<string, any> = { status: targetStatus };

    if (targetStatus === "accepted") {
      if (assignedTo) updateData.assignedTo = assignedTo;
      if (assignedToName) updateData.assignedToName = assignedToName;
      updateData.assignedAt = new Date();
      updateData.acknowledgedAt = new Date();
    } else if (targetStatus === "in_progress") {
      // Preserve assigned info or update if supplied
      if (assignedTo && !currentIncident.assignedTo) updateData.assignedTo = assignedTo;
      if (assignedToName && !currentIncident.assignedToName) updateData.assignedToName = assignedToName;
    } else if (targetStatus === "resolved") {
      updateData.resolvedAt = new Date();
      updateData.resolvedBy = assignedToName || currentIncident.assignedToName || "Response Team Member";
    }

    const incident = await prisma.incident.update({
      where: { id: resolvedParams.id },
      data: updateData,
    });

    console.log("[STATUS] Incident updated", {
      incidentId: incident.id,
      status: incident.status,
      reporterTelegramChatId: incident.reporterTelegramChatId || incident.telegramChatId,
    });

    const actorName = assignedToName || currentIncident.assignedToName || "Response Team Member";

    // Create IncidentTimeline entry
    await prisma.incidentTimeline.create({
      data: {
        incidentId: incident.id,
        action: `Status: ${targetStatus}`,
        actor: actorName,
        details: `Incident transitioned from ${currentStatus} to ${targetStatus} by ${actorName}`,
      },
    }).catch(() => null);

    // Add audit log
    await prisma.auditLog.create({
      data: {
        actor: actorName,
        action: "Status Updated",
        description: `Incident [${incident.type}] status changed to ${targetStatus}`,
      },
    });

    // Broadcast update live over SSE
    publish({
      id: `evt-${Date.now()}`,
      type: "incident.updated",
      timestamp: new Date(),
      source: "live-response-portal",
      incidentId: incident.id,
      severity: incident.severity as any,
      data: {
        status: incident.status,
        assignedTo: incident.assignedTo,
        assignedToName: incident.assignedToName,
        location: incident.location,
        type: incident.type,
      },
    });

    // Notify Telegram reporter chat
    try {
      const telegramResult = await notifyIncidentStatusChange(
        {
          id: incident.id,
          type: incident.type,
          location: incident.location,
          reporterId: incident.reporterId,
          reporterName: incident.reporterName,
          reporterTelegramChatId: incident.reporterTelegramChatId,
          telegramChatId: incident.telegramChatId || incident.reporterTelegramChatId,
          telegramMessageId: incident.telegramMessageId || incident.reporterTelegramMessageId,
        },
        targetStatus as "accepted" | "in_progress" | "resolved",
        actorName
      );
      if (!telegramResult.ok) {
        console.warn(`[STATUS ROUTE] Telegram notification warning for incident ${incident.id}:`, telegramResult.error);
      }
    } catch (telegramErr) {
      console.error(`[STATUS ROUTE] Failed to send Telegram status notification for incident ${incident.id}:`, telegramErr);
    }

    return jsonWithCors({ success: true, incident });
  } catch (error) {
    console.error("Status update error:", error);
    return jsonWithCors({ error: "Update failed" }, { status: 500 });
  }
}

