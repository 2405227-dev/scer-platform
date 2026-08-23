import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { AccountsClient } from "./AccountsClient";

export const dynamic = "force-dynamic";

export default async function AccountsPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  if (session.mustChangePassword) {
    redirect("/change-password");
  }

  // Only the Root Controller can access Account Management
  if (!session.isRootController) {
    redirect(session.role === "USER" ? "/user" : "/command");
  }

  return <AccountsClient currentUser={session} />;
}
