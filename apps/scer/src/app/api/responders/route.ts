import { NextResponse } from "next/server";
import { db as prisma } from "@scer/db-scer";
import { handleCorsOptions, jsonWithCors } from "@/lib/cors";

export async function OPTIONS() {
  return handleCorsOptions();
}

export async function GET() {
  try {
    const responders = await prisma.responder.findMany({
      orderBy: { createdAt: "desc" },
    });
    return jsonWithCors(responders);
  } catch (error) {
    return jsonWithCors({ error: "Failed to fetch responders" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const responder = await prisma.responder.create({
      data: {
        name: data.name,
        email: data.email || `${data.name.toLowerCase().replace(/\s+/g, ".")}@campus.edu`,
        phone: data.phone || "+1 (555) 019-2831",
        status: data.status || "AVAILABLE",
        skills: JSON.stringify(data.skills || ["First Aid", "Rapid Response"]),
        availability: true,
      },
    });

    return jsonWithCors({ success: true, responder });
  } catch (error) {
    console.error("Failed to create responder:", error);
    return jsonWithCors({ error: "Failed to create responder" }, { status: 500 });
  }
}
