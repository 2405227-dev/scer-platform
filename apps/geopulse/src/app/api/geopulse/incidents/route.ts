import { NextResponse } from "next/server";
import { prisma } from "@scer/db-geopulse";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const severity = searchParams.get("severity");
    const status = searchParams.get("status");

    const where: any = {};
    if (severity && severity !== "ALL") {
      where.severity = severity.toUpperCase();
    }
    if (status && status !== "ALL") {
      where.status = status.toUpperCase();
    }

    const incidents = await prisma.geoIncident.findMany({
      where,
      orderBy: { createdAt: "desc" },
      include: {
        assignments: {
          include: {
            responder: true,
          },
          orderBy: { assignedAt: "desc" },
        },
        recommendations: {
          orderBy: { createdAt: "desc" },
          take: 3,
        },
      },
    });

    return NextResponse.json(incidents);
  } catch (error) {
    console.error("Error fetching incidents:", error);
    return NextResponse.json(
      { error: "Failed to fetch incidents" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      title,
      type,
      severity = "MEDIUM",
      location,
      latitude,
      longitude,
      requiredCapability,
      description,
      externalId,
    } = body;

    if (!title || !location || typeof latitude !== "number" || typeof longitude !== "number") {
      return NextResponse.json(
        { error: "title, location, latitude, and longitude are required fields." },
        { status: 400 }
      );
    }

    const incident = await prisma.geoIncident.create({
      data: {
        title,
        type: type || "GENERAL_EMERGENCY",
        severity: severity.toUpperCase(),
        status: "REPORTED",
        location,
        latitude,
        longitude,
        requiredCapability: requiredCapability || type || "GENERAL",
        description: description || null,
        externalId: externalId || null,
      },
    });

    return NextResponse.json(incident, { status: 201 });
  } catch (error) {
    console.error("Error creating incident:", error);
    return NextResponse.json(
      { error: "Failed to create incident" },
      { status: 500 }
    );
  }
}
