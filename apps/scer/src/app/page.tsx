import { getSession } from "@/lib/auth";
import { LandingClient } from "@/components/landing/LandingClient";

export const dynamic = "force-dynamic";

export default async function PublicLandingPage() {
  const session = await getSession();

  const portalHref = session
    ? session.role === "USER"
      ? "/user"
      : "/command"
    : "/login";

  const portalLabel = session
    ? session.role === "USER"
      ? "Enter User Portal"
      : "Enter Command Center"
    : "Sign In to Portal";

  return (
    <LandingClient
      sessionUser={
        session
          ? {
              name: session.name,
              role: session.role,
              isRootController: session.isRootController,
            }
          : null
      }
      portalHref={portalHref}
      portalLabel={portalLabel}
    />
  );
}