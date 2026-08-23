"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  ArrowRight,
  Lock,
  ArrowUp,
  ChevronLeft,
} from "lucide-react";
import { HeroSection } from "./HeroSection";
import { PlatformOverviewSection } from "./PlatformOverviewSection";
import { PortalsSection } from "./PortalsSection";
import { MicroEnginesSection } from "./MicroEnginesSection";
import { ArchitectureSection } from "./ArchitectureSection";

interface LandingClientProps {
  sessionUser?: {
    name?: string;
    role?: string;
    isRootController?: boolean;
  } | null;
  portalHref: string;
  portalLabel: string;
}

type SectionType = "home" | "overview" | "portals" | "engines" | "architecture";

const navItems = [
  { id: "overview", label: "Platform Overview" },
  { id: "portals", label: "Portals" },
  { id: "engines", label: "Micro-Engines" },
  { id: "architecture", label: "Architecture" },
];

export function LandingClient({
  sessionUser,
  portalHref,
  portalLabel,
}: LandingClientProps) {
  const [activeSection, setActiveSection] = useState<SectionType>("home");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Read initial hash on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (["overview", "portals", "engines", "architecture"].includes(hash)) {
        setActiveSection(hash as SectionType);
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    }
  }, []);

  // Listen to popstate (back/forward in browser)
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace("#", "");
      if (["overview", "portals", "engines", "architecture"].includes(hash)) {
        setActiveSection(hash as SectionType);
      } else {
        setActiveSection("home");
      }
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Scroll listener for floating Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 || activeSection !== "home") {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const switchSection = (section: SectionType) => {
    setActiveSection(section);
    if (section === "home") {
      window.history.pushState(null, "", window.location.pathname);
    } else {
      window.history.pushState(null, "", `#${section}`);
    }
    // Always start directly at the top of the selected section
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    switchSection("home");
  };

  const handleBackToTop = () => {
    if (activeSection !== "home") {
      switchSection("home");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#040811] text-white selection:bg-cyan-500 selection:text-black">
      {/* BACKGROUND AMBIENT GLOWS */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-10%] h-[700px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-600/[0.07] blur-[170px]" />
        <div className="absolute right-[-10%] top-[25%] h-[550px] w-[550px] rounded-full bg-red-600/[0.04] blur-[160px]" />
        <div className="absolute left-[-10%] bottom-[15%] h-[600px] w-[600px] rounded-full bg-emerald-600/[0.04] blur-[160px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      {/* FIXED NAVBAR */}
      <header
        data-landing-navbar
        className="fixed top-0 left-0 right-0 z-[9999] px-4 pt-3 sm:px-6"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="flex h-[66px] items-center justify-between rounded-[22px] border border-white/[0.08] bg-[#07111e]/90 px-4 shadow-[0_20px_80px_rgba(0,0,0,.65)] backdrop-blur-2xl sm:px-6">
            
            {/* BRAND LOGO - Returns to Home view */}
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
              aria-label="Return to Home"
            >
              <div className="relative grid h-10 w-10 place-items-center rounded-xl border border-red-500/30 bg-red-500/10 shadow-[0_0_25px_rgba(239,68,68,0.2)] transition group-hover:scale-105">
                <ShieldAlert className="h-5 w-5 text-red-400" />
                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#07111e]" />
              </div>
              <div>
                <div className="text-sm font-black tracking-[0.2em] text-white">SCER</div>
                <div className="text-[8px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  Smart Campus Emergency Response
                </div>
              </div>
            </button>

            {/* NAV LINKS - Switches active section */}
            <nav className="hidden md:flex items-center gap-2 lg:gap-3 text-xs font-bold">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => switchSection(item.id as SectionType)}
                    className={`px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-cyan-300 bg-cyan-500/15 shadow-[0_0_15px_rgba(6,182,212,0.25)] border border-cyan-500/30"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* ACTION / AUTH BUTTON - Navigates to /login or portal */}
            <div className="flex items-center gap-3">
              {sessionUser ? (
                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex flex-col items-end">
                    <span className="text-[11px] font-bold text-slate-200">{sessionUser.name}</span>
                    <span className="text-[8px] font-mono text-cyan-300">
                      {sessionUser.role === "USER"
                        ? "USER ACCOUNT"
                        : sessionUser.isRootController
                        ? "ROOT CONTROLLER"
                        : "CONTROLLER"}
                    </span>
                  </div>
                  <Link
                    href={portalHref}
                    className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition active:scale-95 cursor-pointer"
                  >
                    <span>{sessionUser.role === "USER" ? "Emergency Portal" : "Command Center"}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-cyan-500/25 transition hover:from-cyan-400 hover:to-blue-500 active:scale-95 cursor-pointer"
                >
                  <Lock className="h-3.5 w-3.5" />
                  <span>Sign In</span>
                </Link>
              )}
            </div>

          </div>
        </div>
      </header>

      {/* ACTIVE SECTION CONTAINER - Starts cleanly below the fixed navbar */}
      <main className="relative z-10 mx-auto max-w-[1440px] px-4 pt-28 pb-24 sm:px-6 lg:px-8 min-h-[calc(100vh-80px)]">
        {activeSection === "home" && (
          <HeroSection
            portalHref={portalHref}
            portalLabel={portalLabel}
            onExplore={() => switchSection("overview")}
            onNavigate={(sec) => switchSection(sec as SectionType)}
          />
        )}

        {activeSection === "overview" && (
          <PlatformOverviewSection
            portalHref={portalHref}
            portalLabel={portalLabel}
            onBackToHome={() => switchSection("home")}
          />
        )}

        {activeSection === "portals" && (
          <PortalsSection
            portalHref={portalHref}
            portalLabel={portalLabel}
            onBackToHome={() => switchSection("home")}
          />
        )}

        {activeSection === "engines" && (
          <MicroEnginesSection
            portalHref={portalHref}
            portalLabel={portalLabel}
            onBackToHome={() => switchSection("home")}
          />
        )}

        {activeSection === "architecture" && (
          <ArchitectureSection
            portalHref={portalHref}
            portalLabel={portalLabel}
            onBackToHome={() => switchSection("home")}
          />
        )}
      </main>

      {/* FLOATING BACK TO TOP / HOME BUTTON */}
      <button
        onClick={handleBackToTop}
        aria-label="Back to top / home"
        title="Return to Home"
        className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.12] bg-[#07111e]/90 text-slate-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-950/40 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] active:scale-95 cursor-pointer ${
          showBackToTop
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-4 w-4" />
      </button>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] bg-[#03060c] py-8 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-[1440px] px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-red-400" />
            <span className="font-bold text-slate-400">SCER Platform</span>
            <span>— Smart Campus Emergency Response System</span>
          </div>
          <div>All systems operational • Connected to MongoDB Atlas</div>
        </div>
      </footer>
    </div>
  );
}
