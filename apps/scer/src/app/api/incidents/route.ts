
import { NextResponse } from "next/server";
import { PrismaClient } from "@scer/db-scer";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const incidents = await prisma.incident.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(incidents);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch incidents" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const incident = await prisma.incident.create({
      data: {
        organizationId: data.organizationId,
        type: data.type,
        severity: data.severity,
        status: "REPORTED",
        location: data.location,
        description: data.description,
      }
    });
    return NextResponse.json(incident);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create incident" }, { status: 500 });
  }
}

