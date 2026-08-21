import { prisma } from "@scer/db-geopulse";
import GeoPulseDashboardClient from "@/components/GeoPulseDashboardClient";
import { IncidentItem, ResponderItem, ZoneItem } from "@/types/geopulse";

export const dynamic = "force-dynamic";

export default async function GeoPulsePage() {
  const [rawIncidents, rawResponders, rawZones] = await Promise.all([
    prisma.geoIncident.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        assignments: {
          include: { responder: true },
          orderBy: { assignedAt: "desc" },
        },
        recommendations: {
          orderBy: { createdAt: "desc" },
          take: 3,
        },
      },
    }),
    prisma.geoResource.findMany({
      include: {
        capabilities: true,
        assignments: {
          include: { incident: true },
          orderBy: { assignedAt: "desc" },
        },
      },
      orderBy: [{ status: "asc" }, { name: "asc" }],
    }),
    prisma.geoZone.findMany(),
  ]);

  const incidents: IncidentItem[] = rawIncidents.map((i) => ({
    id: i.id,
    externalId: i.externalId,
    title: i.title,
    type: i.type,
    severity: i.severity,
    status: i.status,
    location: i.location,
    latitude: i.latitude,
    longitude: i.longitude,
    requiredCapability: i.requiredCapability,
    description: i.description,
    assignedResponderId: i.assignedResponderId,
    createdAt: i.createdAt.toISOString(),
    updatedAt: i.updatedAt?.toISOString(),
    assignments: i.assignments.map((a) => ({
      id: a.id,
      incidentId: a.incidentId,
      responderId: a.responderId,
      distanceKm: a.distanceKm,
      estimatedTimeMinutes: a.estimatedTimeMinutes,
      status: a.status,
      assignedAt: a.assignedAt.toISOString(),
      completedAt: a.completedAt ? a.completedAt.toISOString() : null,
    })),
    recommendations: i.recommendations.map((r) => ({
      id: r.id,
      incidentId: r.incidentId,
      responderId: r.responderId,
      score: r.score,
      distanceKm: r.distanceKm,
      etaMinutes: r.etaMinutes,
      breakdownJson: r.breakdownJson,
      reasoning: r.reasoning,
      createdAt: r.createdAt.toISOString(),
    })),
  }));

  const responders: ResponderItem[] = rawResponders.map((r) => ({
    id: r.id,
    name: r.name,
    type: r.type,
    status: r.status,
    latitude: r.latitude,
    longitude: r.longitude,
    phone: r.phone,
    speedKmH: r.speedKmH,
    currentAssignmentId: r.currentAssignmentId,
    createdAt: r.createdAt.toISOString(),
    updatedAt: r.updatedAt?.toISOString(),
    capabilities: r.capabilities.map((c) => ({
      id: c.id,
      name: c.name,
      geoResourceId: c.geoResourceId,
    })),
    assignments: r.assignments.map((a) => ({
      id: a.id,
      incidentId: a.incidentId,
      responderId: a.responderId,
      distanceKm: a.distanceKm,
      estimatedTimeMinutes: a.estimatedTimeMinutes,
      status: a.status,
      assignedAt: a.assignedAt.toISOString(),
      completedAt: a.completedAt ? a.completedAt.toISOString() : null,
    })),
  }));

  const zones: ZoneItem[] = rawZones.map((z) => ({
    id: z.id,
    name: z.name,
    type: z.type,
    latitude: z.latitude,
    longitude: z.longitude,
    radiusMeters: z.radiusMeters,
  }));

  return (
    <GeoPulseDashboardClient
      initialIncidents={incidents}
      initialResponders={responders}
      initialZones={zones}
    />
  );
}