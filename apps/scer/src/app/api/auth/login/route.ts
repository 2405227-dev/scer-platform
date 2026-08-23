import { NextResponse } from "next/server";
import { db as prisma } from "@scer/db-scer";
import {
  verifyPassword,
  createSessionToken,
  ensureDefaultAccounts,
  AUTH_COOKIE_NAME,
} from "@/lib/auth";
import { handleCorsOptions, jsonWithCors } from "@/lib/cors";

export async function OPTIONS() {
  return handleCorsOptions();
}

export async function POST(req: Request) {
  try {
    await ensureDefaultAccounts();

    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return jsonWithCors(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!user) {
      return jsonWithCors(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    if (!user.isActive) {
      return jsonWithCors(
        { error: "Account has been disabled. Please contact the administrator." },
        { status: 403 }
      );
    }

    const isValid = verifyPassword(password, user.passwordHash);
    if (!isValid) {
      return jsonWithCors(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const token = createSessionToken({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      isRootController: user.isRootController,
      isActive: user.isActive,
      mustChangePassword: user.mustChangePassword,
    });

    const responseData = {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        isRootController: user.isRootController,
        isActive: user.isActive,
        isTempPassword: user.isTempPassword,
        mustChangePassword: user.mustChangePassword,
        department: user.department,
      },
      token,
      redirectUrl: user.mustChangePassword
        ? "/change-password"
        : user.role === "USER"
        ? "/user"
        : "/command",
    };

    const response = jsonWithCors(responseData);
    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: token,
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error: any) {
    console.error("[AUTH] Login error:", error);
    return jsonWithCors({ error: error?.message || "Internal login error", details: String(error) }, { status: 500 });
  }
}
