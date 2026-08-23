import { NextResponse } from "next/server";
import crypto from "crypto";
import { db as prisma } from "@scer/db-scer";
import {
  hashPassword,
  extractSessionFromRequest,
  ensureDefaultAccounts,
} from "@/lib/auth";
import { handleCorsOptions, jsonWithCors } from "@/lib/cors";

export async function OPTIONS() {
  return handleCorsOptions();
}

// GET /api/admin/users - List all users (Root Controller only)
export async function GET(req: Request) {
  try {
    await ensureDefaultAccounts();

    const session = await extractSessionFromRequest(req);
    if (!session || !session.isRootController) {
      return jsonWithCors(
        { error: "Access denied. Root Controller privileges required." },
        { status: 403 }
      );
    }

    const users = await prisma.user.findMany({
      orderBy: [
        { isRootController: "desc" },
        { role: "desc" },
        { createdAt: "desc" },
      ],
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isRootController: true,
        isActive: true,
        isTempPassword: true,
        mustChangePassword: true,
        phone: true,
        department: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return jsonWithCors({ users });
  } catch (error: any) {
    console.error("[ADMIN] List users error:", error);
    return jsonWithCors({ error: "Failed to fetch users" }, { status: 500 });
  }
}

// POST /api/admin/users - Create new User or Normal Controller (Root Controller only)
export async function POST(req: Request) {
  try {
    await ensureDefaultAccounts();

    const session = await extractSessionFromRequest(req);
    if (!session || !session.isRootController) {
      return jsonWithCors(
        { error: "Access denied. Root Controller privileges required." },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { name, email, role = "USER", phone, department } = body;

    if (!name || !email) {
      return jsonWithCors({ error: "Name and email are required." }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const existing = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existing) {
      return jsonWithCors({ error: `User with email '${normalizedEmail}' already exists.` }, { status: 400 });
    }

    let org = await prisma.organization.findFirst();
    if (!org) {
      org = await prisma.organization.create({
        data: { name: "Campus Emergency Command", type: "Campus" },
      });
    }

    // Generate secure temporary password
    const randomHex = crypto.randomBytes(3).toString("hex").toUpperCase();
    const tempPassword = `SCER-${randomHex}!`;
    const passwordHash = hashPassword(tempPassword);

    // Only allow USER or CONTROLLER (isRootController is strictly false)
    const validRole = role === "CONTROLLER" ? "CONTROLLER" : "USER";

    const newUser = await prisma.user.create({
      data: {
        organizationId: org.id,
        name: name.trim(),
        email: normalizedEmail,
        passwordHash,
        role: validRole,
        isRootController: false, // Strict: Never create additional Root Controllers
        isActive: true,
        isTempPassword: true,
        mustChangePassword: true,
        phone: phone || null,
        department: department || (validRole === "USER" ? "Student Affairs" : "Emergency Response Unit"),
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isRootController: true,
        isActive: true,
        isTempPassword: true,
        mustChangePassword: true,
        phone: true,
        department: true,
        createdAt: true,
      },
    });

    return jsonWithCors({
      success: true,
      message: `Account created successfully for ${newUser.name}. Temporary password generated.`,
      user: newUser,
      tempPassword,
    });
  } catch (error: any) {
    console.error("[ADMIN] Create user error:", error);
    return jsonWithCors({ error: "Failed to create user" }, { status: 500 });
  }
}
