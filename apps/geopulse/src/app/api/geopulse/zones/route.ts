import { NextResponse } from "next/server";
import { prisma } from "@scer/db-geopulse";

export async function GET() {
  try {
    const zones = await prisma.geoZone.findMany({
      orderBy: { name: "asc" },
    });
    return NextResponse.json(zones);
  } catch (error) {
    console.error("Error fetching zones:", error);
    return NextResponse.json({ error: "Failed to load zones" }, { status: 500 });
  }
}
