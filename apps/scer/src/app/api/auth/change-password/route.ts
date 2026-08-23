import { NextResponse } from "next/server";
import { db as prisma } from "@scer/db-scer";
import {
  hashPassword,
  verifyPassword,
  createSessionToken,
  extractSessionFromRequest,
  AUTH_COOKIE_NAME,
} from "@/lib/auth";
import { handleCorsOptions, jsonWithCors } from "@/lib/cors";

export async function OPTIONS() {
  return handleCorsOptions();
}

export async function POST(req: Request) {
  try {
    const session = await extractSessionFromRequest(req);
    if (!session || !session.isActive) {
      return jsonWithCors({ error: "Unauthorized. Please log in first." }, { status: 401 });
    }

    const body = await req.json();
    const { currentPassword, newPassword } = body;

    if (!newPassword || newPassword.length < 6) {
      return jsonWithCors(
        { error: "New password must be at least 6 characters long." },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: session.userId },
    });

    if (!user || !user.isActive) {
      return jsonWithCors({ error: "User account not found or disabled." }, { status: 404 });
    }

    // If currentPassword provided, verify it
    if (currentPassword) {
      const isValid = verifyPassword(currentPassword, user.passwordHash);
      if (!isValid) {
        return jsonWithCors({ error: "Current password is incorrect." }, { status: 400 });
      }
    }

    const newHash = hashPassword(newPassword);

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordHash: newHash,
        isTempPassword: false,
        mustChangePassword: false,
      },
    });

    // Generate fresh session token with mustChangePassword = false
    const newToken = createSessionToken({
      id: updatedUser.id,
      email: updatedUser.email,
      name: updatedUser.name,
      role: updatedUser.role,
      isRootController: updatedUser.isRootController,
      isActive: updatedUser.isActive,
      mustChangePassword: false,
    });

    const responseData = {
      success: true,
      message: "Password updated successfully!",
      user: {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
        isRootController: updatedUser.isRootController,
        mustChangePassword: false,
      },
      redirectUrl: updatedUser.role === "USER" ? "/user" : "/command",
    };

    const response = jsonWithCors(responseData);
    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: newToken,
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60,
    });

    return response;
  } catch (error: any) {
    console.error("[AUTH] Change password error:", error);
    return jsonWithCors({ error: "Failed to update password" }, { status: 500 });
  }
}
