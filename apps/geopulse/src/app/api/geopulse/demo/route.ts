import { NextResponse } from "next/server";
import { geoEngine } from "@/lib/geoEngine";

export const dynamic = "force-dynamic";

export async function POST() {
  const result = geoEngine.startLiveDemo();
  return NextResponse.json({ success: true, ...result });
}
