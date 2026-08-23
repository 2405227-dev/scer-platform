import { NextResponse } from "next/server";
import { db as prisma } from "@scer/db-scer";
import { extractSessionFromRequest, ensureDefaultAccounts } from "@/lib/auth";
import { handleCorsOptions, jsonWithCors } from "@/lib/cors";

export async function OPTIONS() {
  return handleCorsOptions();
}

export async function GET(req: Request) {
  try {
    await ensureDefaultAccounts();

    const session = await extractSessionFromRequest(req);
    if (!session || !session.isActive) {
      return jsonWithCors({ authenticated: false, user: null }, { status: 200 });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isRootController: true,
        isActive: true,
        isTempPassword: true,
        mustChangePassword: true,
        department: true,
        phone: true,
        createdAt: true,
      },
    });

    if (!user || !user.isActive) {
      return jsonWithCors({ authenticated: false, user: null }, { status: 200 });
    }

    return jsonWithCors({
      authenticated: true,
      user,
    });
  } catch (error: any) {
    console.error("[AUTH] Me route error:", error);
    return jsonWithCors({ error: "Failed to fetch session" }, { status: 500 });
  }
}
