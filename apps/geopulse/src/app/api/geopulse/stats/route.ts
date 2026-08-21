import { NextResponse } from "next/server";
import { prisma } from "@scer/db-geopulse";

export async function GET() {
  try {
    const [incidents, responders, zones, assignments] = await Promise.all([
      prisma.geoIncident.findMany(),
      prisma.geoResource.findMany(),
      prisma.geoZone.findMany(),
      prisma.geoAssignment.findMany({
        where: {
          status: { in: ["DISPATCHED", "EN_ROUTE", "ON_SCENE"] },
        },
      }),
    ]);

    const activeIncidents = incidents.filter(
      (i) => i.status !== "RESOLVED" && i.status !== "CLOSED"
    ).length;

    const criticalIncidents = incidents.filter(
      (i) => i.severity === "CRITICAL" && i.status !== "RESOLVED" && i.status !== "CLOSED"
    ).length;

    const availableResponders = responders.filter(
      (r) => r.status === "AVAILABLE"
    ).length;

    const dispatchedResponders = responders.filter(
      (r) => r.status === "EN_ROUTE" || r.status === "DISPATCHED"
    ).length;

    // Calculate average ETA across recent assignments
    let avgEtaFormatted = "3m 45s";
    if (assignments.length > 0) {
      const avgMinutes =
        assignments.reduce((sum, a) => sum + a.estimatedTimeMinutes, 0) /
        assignments.length;
      const mins = Math.floor(avgMinutes);
      const secs = Math.round((avgMinutes - mins) * 60);
      avgEtaFormatted = `${mins}m ${secs.toString().padStart(2, "0")}s`;
    }

    return NextResponse.json({
      activeIncidents,
      criticalIncidents,
      availableResponders,
      dispatchedResponders,
      totalResponders: responders.length,
      avgEtaFormatted,
      activeZones: zones.length,
    });
  } catch (error) {
    console.error("Error computing GeoPulse stats:", error);
    return NextResponse.json(
      { error: "Failed to load GeoPulse stats" },
      { status: 500 }
    );
  }
}
