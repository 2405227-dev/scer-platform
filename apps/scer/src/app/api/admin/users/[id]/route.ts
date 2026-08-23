import { NextResponse } from "next/server";
import crypto from "crypto";
import { db as prisma } from "@scer/db-scer";
import { hashPassword, extractSessionFromRequest } from "@/lib/auth";
import { handleCorsOptions, jsonWithCors } from "@/lib/cors";

export async function OPTIONS() {
  return handleCorsOptions();
}

// DELETE /api/admin/users/[id] - Root Controller only
export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const session = await extractSessionFromRequest(req);
    if (!session || !session.isRootController) {
      return jsonWithCors(
        { error: "Access denied. Root Controller privileges required." },
        { status: 403 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: resolvedParams.id },
    });

    if (!user) {
      return jsonWithCors({ error: "User not found" }, { status: 404 });
    }

    // SERVER-SIDE PROTECTION: Prevent deletion of Root Controller
    if (user.isRootController) {
      return jsonWithCors(
        { error: "Security Violation: The Root Controller account cannot be deleted." },
        { status: 403 }
      );
    }

    await prisma.user.delete({
      where: { id: resolvedParams.id },
    });

    return jsonWithCors({ success: true, message: `Account ${user.name} deleted successfully.` });
  } catch (error: any) {
    console.error("[ADMIN] Delete user error:", error);
    return jsonWithCors({ error: "Failed to delete user" }, { status: 500 });
  }
}

// POST /api/admin/users/[id] - Reset user password to temporary password (Root Controller only)
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const session = await extractSessionFromRequest(req);
    if (!session || !session.isRootController) {
      return jsonWithCors(
        { error: "Access denied. Root Controller privileges required." },
        { status: 403 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: resolvedParams.id },
    });

    if (!user) {
      return jsonWithCors({ error: "User not found" }, { status: 404 });
    }

    if (user.isRootController && session.userId !== user.id) {
      return jsonWithCors(
        { error: "Security Violation: Cannot reset the Root Controller through this method." },
        { status: 403 }
      );
    }

    // Generate new temporary password
    const randomHex = crypto.randomBytes(3).toString("hex").toUpperCase();
    const tempPassword = `SCER-${randomHex}!`;
    const passwordHash = hashPassword(tempPassword);

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordHash,
        isTempPassword: true,
        mustChangePassword: true,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isRootController: true,
      },
    });

    return jsonWithCors({
      success: true,
      message: `Password for ${updatedUser.name} reset to temporary password.`,
      tempPassword,
    });
  } catch (error: any) {
    console.error("[ADMIN] Reset password error:", error);
    return jsonWithCors({ error: "Failed to reset password" }, { status: 500 });
  }
}

// PATCH /api/admin/users/[id] - Enable / Disable account (Root Controller only)
export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const session = await extractSessionFromRequest(req);
    if (!session || !session.isRootController) {
      return jsonWithCors(
        { error: "Access denied. Root Controller privileges required." },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { isActive } = body;

    if (typeof isActive !== "boolean") {
      return jsonWithCors({ error: "isActive boolean field is required." }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: resolvedParams.id },
    });

    if (!user) {
      return jsonWithCors({ error: "User not found" }, { status: 404 });
    }

    // SERVER-SIDE PROTECTION: Prevent disabling Root Controller
    if (user.isRootController && !isActive) {
      return jsonWithCors(
        { error: "Security Violation: The Root Controller account cannot be disabled." },
        { status: 403 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { isActive },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isRootController: true,
        isActive: true,
      },
    });

    return jsonWithCors({
      success: true,
      message: `Account for ${updatedUser.name} ${isActive ? "enabled" : "disabled"} successfully.`,
      user: updatedUser,
    });
  } catch (error: any) {
    console.error("[ADMIN] Toggle user active error:", error);
    return jsonWithCors({ error: "Failed to update account status" }, { status: 500 });
  }
}
