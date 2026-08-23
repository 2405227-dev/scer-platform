import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { UserPortalClient } from "./UserPortalClient";

export const dynamic = "force-dynamic";

export default async function UserPortalPage() {
  const session = await getSession();

  // If not logged in, redirect to login
  if (!session) {
    redirect("/login");
  }

  // If must change password, redirect to change-password
  if (session.mustChangePassword) {
    redirect("/change-password");
  }

  // EXCLUSIVELY FOR role === "USER":
  // If a Normal Controller or Root Controller visits /user, redirect to /command
  if (session.role !== "USER") {
    redirect("/command");
  }

  return <UserPortalClient initialUser={session} />;
}
