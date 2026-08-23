import { db as prisma } from '../index';
import { publish } from './events';
import { Event } from './events';

export type IncidentStatus =
  | 'DETECTED'
  | 'REPORTED'
  | 'ASSIGNED'
  | 'ACKNOWLEDGED'
  | 'INVESTIGATING'
  | 'RESOLVED'
  | 'CLOSED'
  | 'CANCELLED';

export type IncidentSeverity = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export class IncidentManager {
  async createFromDetection(data: {
    organizationId: string;
    type: string;
    location: string;
    severity: IncidentSeverity;
    description: string;
    lat?: number;
    lon?: number;
    sourceEventId?: string;
  }): Promise<any> {
    const incident = await prisma.incident.create({
      data: {
        organizationId: data.organizationId,
        type: data.type,
        location: data.location,
        severity: data.severity,
        status: 'DETECTED',
        description: data.description,
        location_lat: data.lat,
        location_lon: data.lon,
        priority: this.calculatePriority(data.severity),
      },
    });

    // Create timeline entry
    await prisma.incidentTimeline.create({
      data: {
        incidentId: incident.id,
        action: 'CREATED',
        actor: 'SYSTEM',
        details: `Incident detected: ${data.type}`,
      },
    });

    // Publish event
    const event: Event = {
      id: `incident-${incident.id}`,
      type: 'incident.created',
      timestamp: new Date(),
      source: 'scer-core',
      data: {
        incidentId: incident.id,
        ...data,
      },
      severity: data.severity,
      incidentId: incident.id,
    };

    publish(event);

    return incident;
  }

  async assignResponder(incidentId: string, responderId: string, assignedBy: string): Promise<void> {
    const incident = await prisma.incident.update({
      where: { id: incidentId },
      data: {
        responderId,
        assignedTo: responderId,
        status: 'ASSIGNED',
      },
    });

    await prisma.incidentTimeline.create({
      data: {
        incidentId,
        action: 'ASSIGNED',
        actor: assignedBy,
        details: `Responder assigned`,
      },
    });

    publish({
      id: `event-${Date.now()}`,
      type: 'incident.assigned',
      timestamp: new Date(),
      source: 'scer-core',
      data: { incidentId, responderId },
      severity: incident.severity as IncidentSeverity,
      incidentId,
      responderId,
    });
  }

  async acknowledgeIncident(incidentId: string, acknowledgedBy: string): Promise<void> {
    const incident = await prisma.incident.update({
      where: { id: incidentId },
      data: {
        status: 'ACKNOWLEDGED',
        acknowledgedAt: new Date(),
      },
    });

    await prisma.incidentTimeline.create({
      data: {
        incidentId,
        action: 'ACKNOWLEDGED',
        actor: acknowledgedBy,
      },
    });

    publish({
      id: `event-${Date.now()}`,
      type: 'incident.acknowledged',
      timestamp: new Date(),
      source: 'scer-core',
      data: { incidentId, acknowledgedBy },
      severity: incident.severity as IncidentSeverity,
      incidentId,
    });
  }

  async updateStatus(incidentId: string, newStatus: IncidentStatus, actor: string): Promise<void> {
    const incident = await prisma.incident.findUniqueOrThrow({
      where: { id: incidentId },
    });

    // Validate state transition
    this.validateStateTransition(incident.status as IncidentStatus, newStatus);

    const updateData: any = { status: newStatus };

    if (newStatus === 'RESOLVED') {
      updateData.resolvedAt = new Date();
      updateData.resolvedBy = actor;
    }

    const updated = await prisma.incident.update({
      where: { id: incidentId },
      data: updateData,
    });

    await prisma.incidentTimeline.create({
      data: {
        incidentId,
        action: 'STATUS_CHANGED',
        actor,
        details: `Status changed from ${incident.status} to ${newStatus}`,
      },
    });

    publish({
      id: `event-${Date.now()}`,
      type: 'incident.updated',
      timestamp: new Date(),
      source: 'scer-core',
      data: {
        incidentId,
        previousStatus: incident.status,
        newStatus,
        actor,
      },
      severity: updated.severity as IncidentSeverity,
      incidentId,
    });
  }

  async resolveIncident(incidentId: string, resolvedBy: string, reason?: string): Promise<void> {
    const incident = await prisma.incident.findUniqueOrThrow({
      where: { id: incidentId },
    });

    await prisma.incident.update({
      where: { id: incidentId },
      data: {
        status: 'RESOLVED',
        resolvedAt: new Date(),
        resolvedBy,
      },
    });

    await prisma.incidentTimeline.create({
      data: {
        incidentId,
        action: 'RESOLVED',
        actor: resolvedBy,
        details: reason || 'Incident resolved',
      },
    });

    publish({
      id: `event-${Date.now()}`,
      type: 'incident.resolved',
      timestamp: new Date(),
      source: 'scer-core',
      data: {
        incidentId,
        resolvedBy,
        reason,
      },
      severity: incident.severity as IncidentSeverity,
      incidentId,
    });
  }

  async getTimeline(incidentId: string): Promise<any[]> {
    return await prisma.incidentTimeline.findMany({
      where: { incidentId },
      orderBy: { createdAt: 'asc' },
    });
  }

  private validateStateTransition(from: IncidentStatus, to: IncidentStatus): void {
    const allowedTransitions: Record<IncidentStatus, IncidentStatus[]> = {
      DETECTED: ['REPORTED', 'ASSIGNED', 'CANCELLED'],
      REPORTED: ['ASSIGNED', 'INVESTIGATING', 'CANCELLED'],
      ASSIGNED: ['ACKNOWLEDGED', 'INVESTIGATING', 'CANCELLED'],
      ACKNOWLEDGED: ['INVESTIGATING', 'RESOLVED'],
      INVESTIGATING: ['RESOLVED', 'CANCELLED'],
      RESOLVED: ['CLOSED', 'REOPENED'],
      CLOSED: [],
      CANCELLED: [],
    };

    if (!allowedTransitions[from]?.includes(to)) {
      throw new Error(`Invalid state transition from ${from} to ${to}`);
    }
  }

  private calculatePriority(severity: IncidentSeverity): number {
    switch (severity) {
      case 'CRITICAL':
        return 1;
      case 'HIGH':
        return 2;
      case 'MEDIUM':
        return 3;
      case 'LOW':
        return 4;
      default:
        return 5;
    }
  }
}

export const incidentManager = new IncidentManager();
