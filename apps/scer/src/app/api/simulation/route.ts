import { NextResponse } from "next/server";
import { simulator } from "@scer/db-scer";

export async function GET() {
  return NextResponse.json(simulator.getStatus());
}
