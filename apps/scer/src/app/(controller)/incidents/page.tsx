import { db as prisma } from "@scer/db-scer";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { IncidentsClient } from "./IncidentsClient";

export const dynamic = "force-dynamic";

export default async function IncidentsPage() {
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

  const incidents = await prisma.incident.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <IncidentsClient initialIncidents={incidents} />;
}
