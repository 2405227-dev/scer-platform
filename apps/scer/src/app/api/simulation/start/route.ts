import { NextResponse } from "next/server";
import { simulator } from "@scer/db-scer/src/simulator";

export async function POST(req: Request) {
  try {
    const config = await req.json().catch(() => ({}));
    simulator.startSimulation(config);
    return NextResponse.json({ success: true, status: simulator.getStatus() });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
