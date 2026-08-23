import { db as prisma } from "@scer/db-scer";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { AnalyticsClient } from "./AnalyticsClient";

export const dynamic = "force-dynamic";

export default async function AnalyticsPage() {
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

  const incidents = await prisma.incident.findMany();
  const criticalCount = incidents.filter((i) => i.severity === "CRITICAL").length;
  const totalCount = incidents.length;

  return (
    <AnalyticsClient
      stats={{
        total: totalCount,
        critical: criticalCount,
      }}
    />
  );
}
