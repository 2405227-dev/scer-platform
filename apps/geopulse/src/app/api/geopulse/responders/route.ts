import { NextResponse } from "next/server";
import { prisma } from "@scer/db-geopulse";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const type = searchParams.get("type");

    const where: any = {};
    if (status && status !== "ALL") {
      where.status = status.toUpperCase();
    }
    if (type && type !== "ALL") {
      where.type = type.toUpperCase();
    }

    const responders = await prisma.geoResource.findMany({
      where,
      include: {
        capabilities: true,
        assignments: {
          include: {
            incident: true,
          },
          orderBy: { assignedAt: "desc" },
          take: 3,
        },
      },
      orderBy: [{ status: "asc" }, { name: "asc" }],
    });

    return NextResponse.json(responders);
  } catch (error) {
    console.error("Error fetching responders:", error);
    return NextResponse.json(
      { error: "Failed to fetch responders" },
      { status: 500 }
    );
  }
}
