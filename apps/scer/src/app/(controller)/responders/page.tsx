import { db as prisma } from "@scer/db-scer";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { RespondersClient } from "./RespondersClient";

export const dynamic = "force-dynamic";

export default async function RespondersPage() {
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

  const responders = await prisma.responder.findMany({
    orderBy: { name: "asc" },
  });

  return <RespondersClient initialResponders={responders} />;
}
