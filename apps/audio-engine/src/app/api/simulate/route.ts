
import { NextResponse } from "next/server";
import { processDistressDetection } from "@/lib/detection-service";

export const dynamic = "force-dynamic";

export async function POST() {
  try {
    const result = await processDistressDetection({
      keyword: "HELP",
      location: "North Gate - Sector A",
      source: "AUDIO_ENGINE_SIMULATOR",
    });

    return NextResponse.json({ success: true, event: result.detection, emergencyEvent: result.emergencyEvent });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to simulate detection";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}


