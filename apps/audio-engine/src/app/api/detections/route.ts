import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { processDistressDetection, computeSeverity, DistressSeverity } from "@/lib/detection-service";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    let body: Record<string, unknown> = {};
    try {
      const text = await req.text();
      if (text.trim().length > 0) {
        body = JSON.parse(text);
      }
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON in request body." },
        { status: 400 }
      );
    }

    const keyword = typeof body.keyword === "string" ? body.keyword : undefined;
    const confidence = typeof body.confidence === "number" ? body.confidence : undefined;
    const location = typeof body.location === "string" ? body.location : undefined;
    const source = typeof body.source === "string" ? body.source : undefined;
    const transcript = typeof body.transcript === "string" ? body.transcript : undefined;
    const severity =
      typeof body.severity === "string" &&
      ["CRITICAL", "HIGH", "MEDIUM", "LOW"].includes(body.severity)
        ? (body.severity as DistressSeverity)
        : undefined;

    const result = await processDistressDetection({
      keyword,
      confidence,
      location,
      source,
      transcript,
      severity,
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Internal server error occurred.";
    const status = message.includes("DISABLED")
      ? 403
      : message.includes("is not in the active distress keyword") || message.includes("Confidence must be")
      ? 400
      : 500;

    return NextResponse.json(
      {
        success: false,
        error: message,
      },
      { status }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = Math.min(Math.max(parseInt(searchParams.get("limit") || "20", 10), 1), 100);

    const detections = await prisma.audioDetectionEvent.findMany({
      orderBy: { createdAt: "desc" },
      take: limit,
    });

    const enrichedDetections = detections.map((det) => ({
      ...det,
      severity: computeSeverity(det.keyword, det.confidence),
      status: "DISPATCHED",
      source: "AUDIO_ENGINE",
    }));

    return NextResponse.json({
      success: true,
      detections: enrichedDetections,
      count: enrichedDetections.length,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to retrieve detection history.",
      },
      { status: 500 }
    );
  }
}
