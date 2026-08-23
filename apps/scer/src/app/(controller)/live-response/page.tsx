import { db } from "@scer/db-scer";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { LiveResponseClient, LiveIncident } from "./LiveResponseClient";

export const dynamic = "force-dynamic";

export default async function LiveResponsePage() {
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

  const rawIncidents = await db.incident.findMany({
    orderBy: { createdAt: "desc" },
  });

  const formattedIncidents: LiveIncident[] = rawIncidents.map((i) => ({
    id: i.id,
    type: i.type,
    severity: i.severity,
    status: i.status,
    location: i.location,
    description: i.description,
    assignedTo: i.assignedTo,
    reporterName: i.reporterName,
    reporterId: i.reporterId,
    createdAt: i.createdAt.toISOString(),
    location_lat: i.location_lat,
    location_lon: i.location_lon,
  }));

  return <LiveResponseClient initialIncidents={formattedIncidents} />;
}
