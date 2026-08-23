import { NextResponse } from "next/server";
import { simulator } from "@scer/db-scer";

export async function POST() {
  try {
    simulator.stopSimulation();
    return NextResponse.json({ success: true, status: simulator.getStatus() });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
