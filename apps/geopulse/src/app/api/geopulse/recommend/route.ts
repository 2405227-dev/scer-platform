
import { NextResponse } from "next/server";
import { PrismaClient } from "@scer/db-geopulse";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { incidentLocation, incidentType, severity } = await req.json();

    // Fetch resources and their capabilities
    const resources = await prisma.geoResource.findMany({
      include: { capabilities: true }
    });

    if (resources.length === 0) {
      return NextResponse.json({ error: "No resources available" }, { status: 404 });
    }

    // Advanced Ranking Algorithm Simulation
    let bestResource = null;
    let highestScore = -1;
    let bestMetrics = {};

    for (const res of resources) {
      // Mock calculation based on prompt
      const capabilityMatch = res.capabilities.some(c => c.name.toLowerCase().includes(incidentType.toLowerCase()) || incidentType.includes(c.name)) ? 35 : 10;
      
      // Randomize slightly for the demo
      const etaScore = Math.floor(Math.random() * 20) + 10; // Max 30
      const distScore = Math.floor(Math.random() * 15) + 5; // Max 20
      const workloadScore = 10;
      const zoneCompatibility = 5;

      const totalScore = capabilityMatch + etaScore + distScore + workloadScore + zoneCompatibility;

      if (totalScore > highestScore) {
        highestScore = totalScore;
        bestResource = res;
        bestMetrics = {
          capabilityMatch,
          etaScore,
          distScore,
          workloadScore,
          zoneCompatibility
        };
      }
    }

    // Save recommendation to audit in GeoPulse DB
    await prisma.geoRecommendation.create({
      data: { score: highestScore }
    });

    return NextResponse.json({
      recommendedResource: bestResource?.name,
      score: highestScore,
      eta: "4m 12s",
      distance: "1.2 km",
      reasoning: "Required capability ? Fast practical ETA ? Low workload ? Available ? Zone compatible",
      breakdown: bestMetrics
    });
  } catch (error) {
    return NextResponse.json({ error: "Recommendation failed" }, { status: 500 });
  }
}

