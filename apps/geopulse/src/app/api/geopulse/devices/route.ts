import { NextResponse } from "next/server";
import { geoEngine } from "@/lib/geoEngine";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(geoEngine.getSnapshot());
}
