"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPinned,
  ShieldAlert,
  Zap,
  LogOut,
} from "lucide-react";
import {
  SCER_CONTROLLER_URL,
  GEOPULSE_URL,
  LIVE_RESPONSE_URL,
  getControllerNavItems,
  ControllerNavItem,
} from "../config/navigation";

export interface ControllerNavbarUser {
  name?: string;
  role?: string;
  isRootController?: boolean;
}

export interface ControllerNavbarProps {
  activeRoute?: string;
  activePath?: string;
  currentApp?: "scer" | "geopulse" | "live-response" | "audio" | "notification";
  currentService?: "scer" | "geopulse" | "live-response";
  user?: ControllerNavbarUser | null;
  initialUser?: ControllerNavbarUser | null;
  scerBaseUrl?: string;
  geopulseBaseUrl?: string;
  liveResponseBaseUrl?: string;
}

export function ControllerNavbar({
  activeRoute,
  activePath,
  currentApp = "scer",
  currentService,
  user,
  initialUser,
  scerBaseUrl,
  geopulseBaseUrl,
  liveResponseBaseUrl,
}: ControllerNavbarProps) {
  const pathname = usePathname() || "";
  const effectiveRoute = activeRoute || activePath || pathname;
  const effectiveApp = currentService || currentApp;
  const resolvedInitialUser = user ?? initialUser ?? null;

  const [sessionUser, setSessionUser] = useState<ControllerNavbarUser | null>(resolvedInitialUser);

  const scerUrl = scerBaseUrl || SCER_CONTROLLER_URL;
  const geoUrl = geopulseBaseUrl || GEOPULSE_URL;
  const liveUrl = liveResponseBaseUrl || LIVE_RESPONSE_URL;

  // Hydrate session if not provided via SSR
  useEffect(() => {
    if (resolvedInitialUser) {
      setSessionUser(resolvedInitialUser);
      return;
    }

    fetch(`${scerUrl}/api/auth/me`, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated && data.user) {
          setSessionUser(data.user);
        }
      })
      .catch(() => null);
  }, [scerUrl, resolvedInitialUser]);

  const handleLogout = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await fetch(`${scerUrl}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch {}
    window.location.href = `${scerUrl}/login`;
  };

  const handleBack = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== "undefined") {
      if (document.referrer && document.referrer.startsWith("http://localhost")) {
        window.history.back();
      } else {
        window.location.href = `${scerUrl}/command`;
      }
    }
  };

  const handleForward = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== "undefined") {
      window.history.forward();
    }
  };

  const isRoot = Boolean(sessionUser?.isRootController);
  const navItems = getControllerNavItems(scerUrl, geoUrl, isRoot);

  const isItemActive = (item: ControllerNavItem) => {
    if (effectiveApp === "geopulse" || effectiveRoute === "/geopulse") {
      return item.id === "geopulse";
    }
    if (item.id === "geopulse") return false;
    if (item.id === "command") {
      return effectiveRoute === "/command" || effectiveRoute === "/";
    }
    return effectiveRoute.startsWith(`/${item.id}`);
  };

  const displayName = sessionUser?.name || "Root Administrator";
  const displayRole = isRoot
    ? "ROOT CONTROLLER"
    : (sessionUser?.role || "CONTROLLER");

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[9999] px-3 pt-3 sm:px-5">
        <div className="mx-auto max-w-[1550px]">
          <div className="flex h-[62px] min-h-[62px] w-full items-center rounded-[22px] border border-white/[0.08] bg-[#07101b]/90 px-3 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl sm:px-4">

            {/* ── LEFT SECTION: Back · Forward · Logo · Tabs · Status indicators ── */}
            <div className="flex items-center min-w-0">

              {/* [ Back ] [ > ] */}
              <div className="flex items-center gap-1.5 mr-2 shrink-0">
                <button
                  type="button"
                  onClick={handleBack}
                  title="Go Back"
                  className="group flex h-8 items-center gap-1.5 rounded-xl border border-white/[0.12] bg-white/[0.05] px-2.5 text-xs font-semibold text-slate-200 shadow-sm transition hover:border-white/[0.25] hover:bg-white/[0.12] hover:text-white active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
                  <span className="hidden sm:inline text-[11px] font-bold">Back</span>
                </button>

                <button
                  type="button"
                  onClick={handleForward}
                  title="Go Forward"
                  className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition hover:border-white/[0.2] hover:bg-white/[0.08] hover:text-white active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* Separator */}
              <div className="h-5 w-[1px] bg-white/[0.1] mr-3 hidden sm:block shrink-0" />

              {/* [ SCER Logo + CONTROLLER PORTAL ] */}
              <a
                href={`${scerUrl}/command`}
                className="group flex items-center gap-2.5 mr-2 lg:mr-4 shrink-0"
                title="SCER Controller Portal"
              >
                <div className="relative grid h-9 w-9 place-items-center rounded-xl border border-red-400/20 bg-red-400/[0.08]">
                  <ShieldAlert className="h-[18px] w-[18px] text-red-300 transition group-hover:scale-110" />
                  <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-[#07101b]" />
                </div>
                <div>
                  <div className="text-[12px] font-black tracking-[0.15em] text-white leading-none">SCER</div>
                  <div className="text-[7px] font-bold uppercase tracking-[0.14em] text-slate-500 mt-0.5 leading-none">CONTROLLER PORTAL</div>
                </div>
              </a>

              {/* [ Navigation Tabs ] */}
              <nav className="flex items-center gap-1 xl:gap-1.5 overflow-x-auto py-1 min-w-0">
                {navItems.map((item) => {
                  const active = isItemActive(item);
                  const isLiveResponse = item.id === "live-response";
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = item.href;
                      }}
                      className={`relative inline-flex items-center gap-1.5 justify-center whitespace-nowrap rounded-xl px-3 py-2 text-[11px] font-bold transition-colors leading-none ${
                        active
                          ? "bg-white/[0.09] text-white shadow-sm"
                          : isLiveResponse
                          ? "bg-red-500/10 text-red-300 border border-red-500/20 hover:bg-red-500/20"
                          : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200"
                      }`}
                    >
                      {isLiveResponse && (
                        <span className="relative flex h-2 w-2 shrink-0">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                        </span>
                      )}
                      <span>{item.label}</span>
                      {active && (
                        <span className="absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-red-400 pointer-events-none" />
                      )}
                    </a>
                  );
                })}
              </nav>

              {/* [ LIVE RESPONSE ] [ GEO ] — display-only status indicators */}
              <div className="hidden sm:flex items-center gap-0.5 rounded-xl border border-white/[0.07] bg-white/[0.025] p-1 select-none ml-2 shrink-0">
                <div
                  className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-[9px] font-black uppercase tracking-wider text-slate-400"
                  title="Live Response Engine Status: Active"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <Zap className="h-3 w-3 text-cyan-400" />
                  <span className="hidden lg:inline text-slate-300">LIVE RESPONSE</span>
                </div>
                <div
                  className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-[9px] font-black uppercase tracking-wider text-slate-400"
                  title="GeoPulse Spatial Engine Status: Online"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <MapPinned className="h-3 w-3 text-emerald-400" />
                  <span className="hidden lg:inline text-slate-300">GEO</span>
                </div>
              </div>

            </div>

            {/* ── FLEXIBLE SPACER ── */}
            <div className="flex-1" />

            {/* ── RIGHT SECTION: User info · Sign Out ── */}
            <div className="flex items-center gap-2 shrink-0">
              {sessionUser ? (
                <>
                  {/* User profile */}
                  <div className="flex flex-col items-end justify-center leading-tight select-none pl-2 border-l border-white/[0.08]">
                    <span className="text-[10px] font-bold text-slate-200">{displayName}</span>
                    <span className="text-[7.5px] font-mono font-bold text-cyan-300">{displayRole}</span>
                  </div>
                  {/* Sign Out — absolute final element */}
                  <button
                    type="button"
                    onClick={handleLogout}
                    title="Sign Out"
                    className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-300 transition active:scale-95 cursor-pointer"
                  >
                    <LogOut className="h-3.5 w-3.5" />
                  </button>
                </>
              ) : resolvedInitialUser === undefined ? (
                /* Skeleton — prevents "Sign In" flicker during hydration */
                <div className="flex items-center gap-2 pl-2 border-l border-white/[0.08] animate-pulse">
                  <div className="flex flex-col items-end gap-1">
                    <div className="h-3 w-20 bg-white/10 rounded" />
                    <div className="h-2 w-16 bg-cyan-500/20 rounded" />
                  </div>
                  <div className="h-8 w-8 bg-white/5 rounded-xl" />
                </div>
              ) : (
                <a
                  href={`${scerUrl}/login`}
                  className="rounded-xl border border-white/[0.1] bg-white/[0.05] px-3 py-1.5 text-[10px] font-bold text-slate-200 hover:bg-white/[0.1]"
                >
                  Sign In
                </a>
              )}
            </div>

          </div>
        </div>
      </header>

      {/* NAVBAR SPACING OFFSET */}
      <div className="h-[78px]" />
    </>
  );
}

export { ControllerNavbar as SCERNavbar };
