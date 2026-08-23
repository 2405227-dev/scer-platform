import { ControllerNavbar } from "@scer/ui";
import { getSession } from "@/lib/auth";
import { RouteScrollReset } from "@/components/ScrollToTop";

export default async function ControllerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  const initialUser = session
    ? {
        name: session.name,
        role: session.role,
        isRootController: session.isRootController,
      }
    : null;

  return (
    <>
      <ControllerNavbar currentApp="scer" initialUser={initialUser} />
      {/* Resets scroll to y=0 on every route change — pathname-based so it fires
          exactly once per navigation, not on session updates or re-renders */}
      <RouteScrollReset />
      {/* Page shell — every controller route inherits this exact baseline */}
      <div className="min-h-[calc(100vh-78px)] bg-[#050a12] text-white">
        {children}
      </div>
    </>
  );
}
