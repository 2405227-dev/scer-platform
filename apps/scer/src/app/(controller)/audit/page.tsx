import { db as prisma } from "@scer/db-scer";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { AuditClient } from "./AuditClient";

export const dynamic = "force-dynamic";

export default async function AuditPage() {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  if (session.mustChangePassword) {
    redirect("/change-password");
  }
  if (session.role === "USER") {
    redirect("/user");
  }

  const logs = await prisma.auditLog.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  const dummyLogs =
    logs.length > 0
      ? logs.map((l) => ({
          id: l.id,
          timestamp: l.timestamp.toISOString(),
          actor: l.actor,
          action: l.action,
          description: l.description,
        }))
      : [
          {
            id: "1",
            timestamp: new Date().toISOString(),
            actor: "Audio Engine",
            action: "DISTRESS_KEYWORD_DETECTED",
            description: "Acoustic sensor array identified 'HELP' at Block C (96% confidence)",
          },
          {
            id: "2",
            timestamp: new Date(Date.now() - 2500).toISOString(),
            actor: "GeoPulse",
            action: "OPTIMAL_ROUTE_CALCULATED",
            description: "Spatial AI selected Medical Team 1 with estimated arrival time of 2.4 min",
          },
          {
            id: "3",
            timestamp: new Date(Date.now() - 4000).toISOString(),
            actor: "Smart Notification",
            action: "EMERGENCY_DISPATCH_SENT",
            description: "Multi-channel push & radio paging broadcast to Medical Team 1",
          },
        ];

  return <AuditClient initialLogs={dummyLogs} />;
}
