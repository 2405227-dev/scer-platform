import { NextResponse } from "next/server";
import { db as prisma } from "@scer/db-scer";
import { handleCorsOptions, jsonWithCors } from "@/lib/cors";

export async function OPTIONS() {
  return handleCorsOptions();
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const responderId = searchParams.get("responderId");
    const status = searchParams.get("status");

    const where: Record<string, any> = {};

    if (responderId && responderId !== "ALL") {
      where.assignedTo = responderId;
    }

    if (status && status !== "ALL") {
      if (status === "ACTIVE") {
        where.status = { in: ["accepted", "in_progress", "IN_PROGRESS", "ACKNOWLEDGED"] };
      } else if (status === "PENDING") {
        where.status = { in: ["pending", "REPORTED", "NEW"] };
      } else if (status === "RESOLVED") {
        where.status = { in: ["resolved", "RESOLVED", "CLOSED"] };
      } else {
        where.status = status;
      }
    }

    const incidents = await prisma.incident.findMany({
      where,
      include: {
        responder: true,
        timeline: {
          orderBy: { createdAt: "desc" },
          take: 5,
        },
        messages: {
          orderBy: { createdAt: "asc" },
        },
      },
    });

    // Sort by severity rank (CRITICAL -> HIGH -> MEDIUM -> LOW) then createdAt desc
    const getSeverityRank = (sev?: string) => {
      const s = (sev || "").toUpperCase();
      if (s === "CRITICAL") return 1;
      if (s === "HIGH") return 2;
      if (s === "MEDIUM") return 3;
      if (s === "LOW") return 4;
      return 5;
    };

    const sortedIncidents = incidents.sort((a, b) => {
      const rankDiff = getSeverityRank(a.severity) - getSeverityRank(b.severity);
      if (rankDiff !== 0) return rankDiff;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    const responders = await prisma.responder.findMany({
      orderBy: { name: "asc" },
    });

    return jsonWithCors({ incidents: sortedIncidents, responders });
  } catch (error) {
    console.error("Failed to fetch response team data:", error);
    return jsonWithCors({ error: "Failed to fetch response team data" }, { status: 500 });
  }
}
