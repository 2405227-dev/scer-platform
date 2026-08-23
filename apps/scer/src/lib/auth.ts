import crypto from "crypto";
import { cookies } from "next/headers";
import { db as prisma } from "@scer/db-scer";

const AUTH_COOKIE_NAME = "scer_session_token";
const JWT_SECRET = process.env.SCER_JWT_SECRET || "scer_emergency_platform_jwt_secret_key_2026_secure";

// Configurable Root Controller Credentials (via ENV)
const ROOT_EMAIL = (process.env.ROOT_CONTROLLER_EMAIL || "admin@scer.campus").trim().toLowerCase();
const ROOT_PASSWORD = process.env.ROOT_CONTROLLER_PASSWORD || "Admin@SCER2026!";
const ROOT_NAME = process.env.ROOT_CONTROLLER_NAME || "Root Administrator";

export interface SessionPayload {
  userId: string;
  email: string;
  name: string;
  role: "USER" | "CONTROLLER";
  isRootController: boolean;
  isActive: boolean;
  mustChangePassword?: boolean;
  iat: number;
  exp: number;
}

// 1. Password Hashing (PBKDF2 with SHA-512)
export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, storedHash: string): boolean {
  if (!storedHash || !storedHash.includes(":")) return false;
  const [salt, originalHash] = storedHash.split(":");
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
  return hash === originalHash;
}

// 2. Token Creation & Verification (HMAC-SHA256 Signed JSON Token)
export function createSessionToken(user: {
  id: string;
  email: string;
  name: string;
  role: string;
  isRootController?: boolean;
  isActive?: boolean;
  mustChangePassword?: boolean;
}): string {
  const payload: SessionPayload = {
    userId: user.id,
    email: user.email,
    name: user.name,
    role: (user.role === "CONTROLLER" ? "CONTROLLER" : "USER"),
    isRootController: Boolean(user.isRootController),
    isActive: user.isActive !== false,
    mustChangePassword: user.mustChangePassword,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60, // 7 days
  };

  const headerB64 = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = crypto
    .createHmac("sha256", JWT_SECRET)
    .update(`${headerB64}.${payloadB64}`)
    .digest("base64url");

  return `${headerB64}.${payloadB64}.${signature}`;
}

export function verifySessionToken(token: string): SessionPayload | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const [headerB64, payloadB64, signature] = parts;

    const expectedSig = crypto
      .createHmac("sha256", JWT_SECRET)
      .update(`${headerB64}.${payloadB64}`)
      .digest("base64url");

    if (signature !== expectedSig) return null;

    const payload: SessionPayload = JSON.parse(Buffer.from(payloadB64, "base64url").toString("utf-8"));
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return payload;
  } catch (err) {
    return null;
  }
}

// 3. Cookie Session Extraction (Server-side)
export async function getSession(): Promise<SessionPayload | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
    if (!token) return null;
    
    const payload = verifySessionToken(token);
    if (!payload) return null;

    // Check if account is still active in database
    const dbUser = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: { isActive: true, role: true, isRootController: true, mustChangePassword: true },
    });

    if (!dbUser || !dbUser.isActive) {
      return null;
    }

    return {
      ...payload,
      role: dbUser.role as any,
      isRootController: dbUser.isRootController,
      isActive: dbUser.isActive,
      mustChangePassword: dbUser.mustChangePassword,
    };
  } catch {
    return null;
  }
}

export async function extractSessionFromRequest(req: Request): Promise<SessionPayload | null> {
  const cookieHeader = req.headers.get("cookie") || "";
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${AUTH_COOKIE_NAME}=([^;]+)`));
  const token = match ? decodeURIComponent(match[1]) : null;
  if (!token) return null;

  const payload = verifySessionToken(token);
  if (!payload) return null;

  // Verify real-time database active status
  try {
    const dbUser = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: { isActive: true, role: true, isRootController: true, mustChangePassword: true },
    });
    if (!dbUser || !dbUser.isActive) {
      return null;
    }
    return {
      ...payload,
      role: dbUser.role as any,
      isRootController: dbUser.isRootController,
      isActive: dbUser.isActive,
      mustChangePassword: dbUser.mustChangePassword,
    };
  } catch {
    return payload;
  }
}

export { AUTH_COOKIE_NAME };

// 4. Seed Root Controller & Initial Demo Accounts
export async function ensureDefaultAccounts(): Promise<void> {
  try {
    let org = await prisma.organization.findFirst();
    if (!org) {
      org = await prisma.organization.create({
        data: { name: "Campus Emergency Command", type: "Campus" },
      });
    }

    // 1. FIXED PROTECTED ROOT CONTROLLER
    const rootAdmin = await prisma.user.findUnique({
      where: { email: ROOT_EMAIL },
    });

    if (!rootAdmin) {
      await prisma.user.create({
        data: {
          organizationId: org.id,
          name: ROOT_NAME,
          email: ROOT_EMAIL,
          passwordHash: hashPassword(ROOT_PASSWORD),
          role: "CONTROLLER",
          isRootController: true,
          isActive: true,
          isTempPassword: false,
          mustChangePassword: false,
          department: "Central Emergency Command",
        },
      });
    } else {
      // Ensure root controller invariants are always maintained
      if (
        rootAdmin.role !== "CONTROLLER" ||
        !rootAdmin.isRootController ||
        !rootAdmin.isActive
      ) {
        await prisma.user.update({
          where: { id: rootAdmin.id },
          data: {
            role: "CONTROLLER",
            isRootController: true,
            isActive: true,
          },
        });
      }
    }

    // 2. DEMO NORMAL CONTROLLER
    const demoController = await prisma.user.findUnique({
      where: { email: "controller@scer.campus" },
    });

    if (!demoController) {
      await prisma.user.create({
        data: {
          organizationId: org.id,
          name: "Campus Controller",
          email: "controller@scer.campus",
          passwordHash: hashPassword("Controller@SCER2026!"),
          role: "CONTROLLER",
          isRootController: false,
          isActive: true,
          isTempPassword: false,
          mustChangePassword: false,
          department: "Tactical Response Unit",
        },
      });
    }

    // 3. DEMO USER
    const demoUser = await prisma.user.findUnique({
      where: { email: "student@scer.campus" },
    });

    if (!demoUser) {
      await prisma.user.create({
        data: {
          organizationId: org.id,
          name: "Alex Johnson",
          email: "student@scer.campus",
          passwordHash: hashPassword("Student@SCER2026!"),
          role: "USER",
          isRootController: false,
          isActive: true,
          isTempPassword: false,
          mustChangePassword: false,
          department: "Student Affairs - Block C",
        },
      });
    }
  } catch (err) {
    console.error("[AUTH] Error ensuring default accounts:", err);
  }
}
