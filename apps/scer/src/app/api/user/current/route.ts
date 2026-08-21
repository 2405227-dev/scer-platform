import { NextResponse } from "next/server";
import { PrismaClient } from "@scer/db-scer";

const prisma = new PrismaClient();

/**
 * GET /api/user/current
 * Returns the current user (for MVP, returns the first ADMIN user)
 * In production, this would check session/JWT to determine the authenticated user
 */
export async function GET() {
  try {
    // For MVP: fetch the ADMIN user seeded in db-scer
    const adminUser = await prisma.user.findFirst({
      where: { role: "ADMIN" },
    });

    if (!adminUser) {
      return NextResponse.json(
        { error: "No admin user found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ id: adminUser.id, name: adminUser.name, email: adminUser.email, role: adminUser.role });
  } catch (error) {
    console.error("GET /api/user/current error:", error);
    return NextResponse.json({ error: "Failed to fetch current user" }, { status: 500 });
  }
}
