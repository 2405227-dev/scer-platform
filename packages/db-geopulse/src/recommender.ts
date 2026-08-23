import { db as prisma } from '../index';
import { publish } from '../../db-scer/src/events';

export interface ResourceScore {
  resourceId: string;
  score: number;
  breakdown: {
    capabilityMatch: number;
    distanceScore: number;
    availabilityScore: number;
    responseTimeScore: number;
  };
}

export class ResourceRecommender {
  async findBestResources(incident: {
    type: string;
    location_lat: number;
    location_lon: number;
    severity: string;
  }): Promise<ResourceScore[]> {
    const resources = await prisma.geoResource.findMany({
      include: { capabilities: true },
      where: { status: 'AVAILABLE' },
    });

    if (resources.length === 0) {
      console.log('No available resources found');
      return [];
    }

    const scores: ResourceScore[] = resources.map((resource) => {
      const breakdown = {
        capabilityMatch: this.calculateCapabilityMatch(resource.capabilities, incident.type),
        distanceScore: this.calculateDistanceScore(
          resource.location_lat,
          resource.location_lon,
          incident.location_lat,
          incident.location_lon
        ),
        availabilityScore: resource.status === 'AVAILABLE' ? 100 : 0,
        responseTimeScore: this.calculateResponseTimeScore(incident.severity),
      };

      const score = (breakdown.capabilityMatch * 0.4 + breakdown.distanceScore * 0.3 + breakdown.availabilityScore * 0.2 + breakdown.responseTimeScore * 0.1);

      return {
        resourceId: resource.id,
        score,
        breakdown,
      };
    });

    // Sort by score descending
    scores.sort((a, b) => b.score - a.score);

    return scores.slice(0, 5); // Return top 5
  }

  async assignResource(resourceId: string, incidentId: string, eta: number): Promise<void> {
    const resource = await prisma.geoResource.update({
      where: { id: resourceId },
      data: {
        status: 'DISPATCHED',
        activeIncidentId: incidentId,
      },
    });

    // Create dispatch route
    const incident = await prisma.incident.findUniqueOrThrow({
      where: { id: incidentId },
    });

    await prisma.dispatchRoute.create({
      data: {
        resourceId,
        destLat: incident.location_lat || 0,
        destLon: incident.location_lon || 0,
        distance: this.calculateDistance(
          resource.location_lat,
          resource.location_lon,
          incident.location_lat || 0,
          incident.location_lon || 0
        ),
        eta,
        status: 'ACTIVE',
      },
    });

    publish({
      id: `event-${Date.now()}`,
      type: 'resource.available',
      timestamp: new Date(),
      source: 'geopulse',
      data: {
        resourceId,
        incidentId,
        eta,
        status: 'DISPATCHED',
      },
      severity: (incident.severity as any),
      incidentId,
    });
  }

  async updateResourceLocation(resourceId: string, lat: number, lon: number): Promise<void> {
    await prisma.geoResource.update({
      where: { id: resourceId },
      data: {
        location_lat: lat,
        location_lon: lon,
      },
    });

    publish({
      id: `event-${Date.now()}`,
      type: 'responder.location.updated',
      timestamp: new Date(),
      source: 'geopulse',
      data: { resourceId, location: { lat, lon } },
    });
  }

  private calculateCapabilityMatch(capabilities: any[], incidentType: string): number {
    const normalized = incidentType.toLowerCase();
    const matches = capabilities.filter((c) => c.name.toLowerCase().includes(normalized) || normalized.includes(c.name.toLowerCase()));

    return Math.min(100, (matches.length / Math.max(capabilities.length, 1)) * 100 + 30);
  }

  private calculateDistanceScore(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const distance = this.calculateDistance(lat1, lon1, lat2, lon2);
    // Score decreases with distance: 0km=100, 5km=50, 10km=0
    return Math.max(0, 100 - distance * 10);
  }

  private calculateResponseTimeScore(severity: string): number {
    const weights = {
      CRITICAL: 100,
      HIGH: 75,
      MEDIUM: 50,
      LOW: 25,
    };
    return (weights as any)[severity] || 50;
  }

  private calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
}

export const resourceRecommender = new ResourceRecommender();
