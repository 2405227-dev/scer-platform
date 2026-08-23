"use client";

import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  Radio,
  MapPinned,
  BellRing,
  Menu,
  X,
  LayoutDashboard,
  Zap,
} from "lucide-react";

interface ModuleNavbarProps {
  currentModule?: "audio" | "geo" | "notification" | "live-response";
}

const modules = [
  {
    id: "scer",
    label: "Command",
    href: "http://localhost:3000/command",
    icon: LayoutDashboard,
    dot: "bg-red-400",
  },
  {
    id: "live-response",
    label: "Live Response",
    href: "http://localhost:3004",
    icon: Zap,
    dot: "bg-cyan-400",
  },
  {
    id: "audio",
    label: "Audio Engine",
    href: "http://localhost:3001",
    icon: Radio,
    dot: "bg-sky-400",
  },
  {
    id: "geo",
    label: "GeoPulse",
    href: "http://localhost:3002",
    icon: MapPinned,
    dot: "bg-emerald-400",
  },
  {
    id: "notification",
    label: "Smart Notify",
    href: "http://localhost:3003",
    icon: BellRing,
    dot: "bg-violet-400",
  },
];

export function ModuleNavbar({ currentModule = "audio" }: ModuleNavbarProps) {
  const [open, setOpen] = useState(false);
  const [canGoBack, setCanGoBack] = useState(true);

  const handleBack = () => {
    if (typeof window !== "undefined") {
      if (document.referrer && document.referrer.startsWith("http://localhost")) {
        window.history.back();
      } else {
        window.location.href = "http://localhost:3000";
      }
    }
  };

  const handleForward = () => {
    if (typeof window !== "undefined") {
      window.history.forward();
    }
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[9999] px-3 pt-3 sm:px-5">
        <div className="mx-auto max-w-[1450px]">
          <div className="relative flex h-[62px] items-center rounded-[22px] border border-white/[0.08] bg-[#07101b]/90 px-3 shadow-[0_20px_80px_rgba(0,0,0,.4)] backdrop-blur-2xl sm:px-4">
            
            {/* BACK / FORWARD NAVIGATION BUTTONS */}
            <div className="flex items-center gap-1.5 mr-2">
              <button
                onClick={handleBack}
                title="Go Back (Command Center / Previous Page)"
                className="group flex items-center gap-1.5 rounded-xl border border-white/[0.12] bg-white/[0.05] px-2.5 py-1.5 text-xs font-semibold text-slate-200 shadow-sm transition hover:border-white/[0.25] hover:bg-white/[0.12] hover:text-white active:scale-95"
              >
                <ChevronLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
                <span className="hidden sm:inline text-[11px] font-bold">Back</span>
              </button>

              <button
                onClick={handleForward}
                title="Go Forward"
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition hover:border-white/[0.2] hover:bg-white/[0.08] hover:text-white active:scale-95"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* SEPARATOR */}
            <div className="h-5 w-[1px] bg-white/[0.1] mr-3 hidden sm:block" />

            {/* LOGO / BRANDING */}
            <a
              href="http://localhost:3000"
              className="group flex items-center gap-2.5"
              title="Return to SCER Command Center"
            >
              <div className="relative grid h-9 w-9 place-items-center rounded-xl border border-sky-400/20 bg-sky-400/[0.08]">
                <Radio className="h-[18px] w-[18px] text-sky-300 transition group-hover:scale-110" />
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-[#07101b]" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[12px] font-black tracking-[0.15em] text-white">
                    AUDIO ENGINE
                  </span>
                  <span className="rounded-md bg-sky-500/20 px-1.5 py-0.5 text-[8px] font-black uppercase text-sky-300 border border-sky-500/30">
                    Port 3001
                  </span>
                </div>
                <div className="text-[7px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  SCER Module Network
                </div>
              </div>
            </a>

            {/* QUICK RETURN TO COMMAND CENTER BUTTON */}
            <div className="hidden md:flex items-center ml-4">
              <a
                href="http://localhost:3000"
                className="flex items-center gap-1.5 rounded-lg border border-red-500/30 bg-red-500/10 px-2.5 py-1 text-[10px] font-bold text-red-300 transition hover:bg-red-500/20 hover:text-white"
              >
                <ShieldAlert className="h-3 w-3" />
                <span>Command Center</span>
              </a>
            </div>

            {/* RIGHT MODULE SWITCHER */}
            <div className="ml-auto hidden items-center gap-2 lg:flex">
              <div className="flex items-center gap-0.5 rounded-xl border border-white/[0.07] bg-white/[0.025] p-1">
                {modules.map((module) => {
                  const Icon = module.icon;
                  const isActive = module.id === "audio";

                  return (
                    <a
                      key={module.href}
                      href={module.href}
                      className={`group flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[9px] font-black uppercase tracking-wider transition ${
                        isActive
                          ? "bg-white/[0.12] text-white border border-white/[0.15] shadow-inner"
                          : "text-slate-500 hover:bg-white/[0.06] hover:text-slate-200"
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${module.dot}`} />
                      <Icon className="h-3.5 w-3.5" />
                      {module.label}
                    </a>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.035] px-3 py-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[8px] font-black uppercase tracking-wider text-emerald-300">
                  Live
                </span>
              </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen((value) => !value)}
              className="ml-auto grid h-9 w-9 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-slate-300 lg:hidden"
              aria-label="Open navigation"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          {/* MOBILE DROPDOWN */}
          {open && (
            <div className="mt-2 rounded-2xl border border-white/[0.08] bg-[#07101b]/95 p-3 shadow-2xl backdrop-blur-2xl lg:hidden">
              <div className="flex items-center gap-2 mb-3">
                <button
                  onClick={handleBack}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.08] py-2.5 text-xs font-bold text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </button>
                <button
                  onClick={handleForward}
                  className="flex items-center justify-center w-10 rounded-xl border border-white/[0.08] bg-white/[0.04] py-2.5 text-xs font-bold text-slate-300"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <a
                  href="http://localhost:3000"
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-red-500/30 bg-red-500/15 py-2.5 text-xs font-bold text-red-300"
                >
                  <ShieldAlert className="h-4 w-4" />
                  Command
                </a>
              </div>

              <div className="h-px bg-white/[0.06] my-2" />

              <div className="grid grid-cols-2 gap-1.5">
                {modules.map((module) => {
                  const Icon = module.icon;
                  const isActive = module.id === "audio";

                  return (
                    <a
                      key={module.href}
                      href={module.href}
                      className={`flex items-center gap-2 rounded-xl p-2.5 text-[10px] font-bold uppercase tracking-wider ${
                        isActive
                          ? "bg-white/[0.12] text-white"
                          : "text-slate-400 hover:bg-white/[0.05]"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {module.label}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* NAVBAR SPACING */}
      <div className="h-[78px]" />
    </>
  );
}
