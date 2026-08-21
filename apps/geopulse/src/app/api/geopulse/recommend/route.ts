import { NextResponse } from "next/server";
import { prisma } from "@scer/db-geopulse";
import { rankResponders } from "@/lib/geo-engine";
import { ResponderItem } from "@/types/geopulse";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Support both the GeoPulse standard schema and the legacy SCER Audio webhook schema
    let incidentId: string | undefined = body.incidentId;
    let latitude: number = typeof body.latitude === "number" ? body.latitude : 20.2961;
    let longitude: number = typeof body.longitude === "number" ? body.longitude : 85.8245;
    let type: string = body.type || body.incidentType || "GENERAL_EMERGENCY";
    let severity: string = (body.severity || "MEDIUM").toUpperCase();
    let requiredCapability: string = body.requiredCapability || type;
    let location: string = body.location || body.incidentLocation || "Campus Location";

    // If an incidentId is provided, attempt to fetch latest incident from DB
    if (incidentId) {
      const existingIncident = await prisma.geoIncident.findUnique({
        where: { id: incidentId },
        include: { assignments: true },
      });
      if (existingIncident) {
        latitude = existingIncident.latitude;
        longitude = existingIncident.longitude;
        type = existingIncident.type;
        severity = existingIncident.severity;
        requiredCapability = existingIncident.requiredCapability;
        location = existingIncident.location;
      }
    }

    // Fetch all active responders with capabilities and active assignments
    const rawResponders = await prisma.geoResource.findMany({
      include: {
        capabilities: true,
        assignments: {
          where: {
            status: { in: ["DISPATCHED", "EN_ROUTE", "ON_SCENE"] },
          },
        },
      },
    });

    if (rawResponders.length === 0) {
      return NextResponse.json(
        {
          error: "No responders found in the geospatial registry.",
          incidentId,
          recommendation: null,
          alternatives: [],
        },
        { status: 404 }
      );
    }

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
      capabilities: r.capabilities.map((c) => ({ id: c.id, name: c.name })),
      assignments: r.assignments.map((a) => ({
        id: a.id,
        incidentId: a.incidentId,
        responderId: a.responderId,
        distanceKm: a.distanceKm,
        estimatedTimeMinutes: a.estimatedTimeMinutes,
        status: a.status,
        assignedAt: a.assignedAt,
        completedAt: a.completedAt,
      })),
    }));

    // Run the multi-factor ranking algorithm
    const rankingResult = rankResponders(
      {
        id: incidentId,
        latitude,
        longitude,
        type,
        severity,
        requiredCapability,
        location,
      },
      responders
    );

    // Save recommendation audit log in DB
    if (rankingResult.recommendation) {
      try {
        await prisma.geoRecommendation.create({
          data: {
            incidentId: incidentId || null,
            responderId: rankingResult.recommendation.responder.id,
            score: rankingResult.recommendation.score,
            distanceKm: rankingResult.recommendation.distanceKm,
            etaMinutes: rankingResult.recommendation.etaMinutes,
            breakdownJson: JSON.stringify(rankingResult.recommendation.breakdown),
            reasoning: rankingResult.recommendation.reasoning,
          },
        });
      } catch (dbErr) {
        console.error("Failed to store recommendation log:", dbErr);
      }
    }

    // Provide rich response with backward compatibility for SCER callers
    const top = rankingResult.recommendation;
    return NextResponse.json({
      incidentId,
      recommendedResource: top ? top.responder.name : null, // for SCER audio webhook compatibility
      recommendation: top
        ? {
            responderId: top.responder.id,
            responderName: top.responder.name,
            responderType: top.responder.type,
            responderStatus: top.responder.status,
            distanceKm: top.distanceKm,
            etaMinutes: top.etaMinutes,
            etaFormatted: top.etaFormatted,
            score: top.score,
            reasoning: top.reasoning,
            breakdown: top.breakdown,
            capabilities: top.responder.capabilities,
          }
        : null,
      alternatives: rankingResult.alternatives.map((alt) => ({
        responderId: alt.responder.id,
        responderName: alt.responder.name,
        responderType: alt.responder.type,
        responderStatus: alt.responder.status,
        distanceKm: alt.distanceKm,
        etaMinutes: alt.etaMinutes,
        etaFormatted: alt.etaFormatted,
        score: alt.score,
        reasoning: alt.reasoning,
        breakdown: alt.breakdown,
        capabilities: alt.responder.capabilities,
      })),
      evaluatedCount: rankingResult.evaluatedCount,
      generatedAt: rankingResult.generatedAt,
      // legacy fields for compatibility
      score: top?.score || 0,
      eta: top?.etaFormatted || "N/A",
      distance: top ? `${top.distanceKm} km` : "N/A",
      reasoning: top?.reasoning || "No recommendation available",
    });
  } catch (error) {
    console.error("Error in /api/geopulse/recommend:", error);
    return NextResponse.json(
      { error: "Internal error processing responder recommendation" },
      { status: 500 }
    );
  }
}
