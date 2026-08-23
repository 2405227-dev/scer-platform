"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ShieldAlert, ArrowRight, Lock } from "lucide-react";

interface LandingNavbarProps {
  sessionUser?: {
    name?: string;
    role?: string;
    isRootController?: boolean;
  } | null;
  portalHref: string;
  portalLabel: string;
}

const navItems = [
  { id: "overview", label: "Platform Overview" },
  { id: "portals", label: "Portals" },
  { id: "engines", label: "Micro-Engines" },
  { id: "architecture", label: "Architecture" },
];

export function scrollToSection(id: string) {
  if (typeof window === "undefined") return;

  const element = document.getElementById(id);
  if (!element) return;

  const navbar = document.querySelector("[data-landing-navbar]");
  const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;

  const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;

  window.history.pushState(null, "", `#${id}`);

  window.scrollTo({
    top: Math.max(0, top),
    behavior: "smooth",
  });
}

export function scrollToTop() {
  if (typeof window === "undefined") return;

  if (window.location.hash) {
    window.history.pushState(null, "", window.location.pathname);
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export function LandingNavbar({
  sessionUser,
  portalHref,
  portalLabel,
}: LandingNavbarProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // Check initial hash on mount
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        scrollToSection(id);
      }, 150);
    }
  }, []);

  useEffect(() => {
    const sectionIds = ["overview", "portals", "engines", "architecture"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: 0.05,
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToTop();
  };

  return (
    <div
      data-landing-navbar
      className="fixed top-0 left-0 right-0 z-[9999] px-4 pt-3 sm:px-6"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex h-[66px] items-center justify-between rounded-[22px] border border-white/[0.08] bg-[#07111e]/90 px-4 shadow-[0_20px_80px_rgba(0,0,0,.65)] backdrop-blur-2xl sm:px-6">
          
          {/* BRAND LOGO - Scrolls to top */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            aria-label="Scroll to top"
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

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3 text-xs font-bold">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={(e) => handleNavClick(e, item.id)}
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

          {/* ACTION / AUTH BUTTON */}
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
                  className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition active:scale-95"
                >
                  <span>{sessionUser.role === "USER" ? "Emergency Portal" : "Command Center"}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-cyan-500/25 transition hover:from-cyan-400 hover:to-blue-500 active:scale-95"
              >
                <Lock className="h-3.5 w-3.5" />
                <span>Sign In</span>
              </Link>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
