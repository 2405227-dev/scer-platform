import crypto from "crypto";
import { cookies } from "next/headers";
import { db as prisma } from "../index";

export const AUTH_COOKIE_NAME = "scer_session_token";
const JWT_SECRET = process.env.SCER_JWT_SECRET || "scer_emergency_platform_jwt_secret_key_2026_secure";

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
