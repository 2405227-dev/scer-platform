"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NotificationBell } from "./NotificationBell";

import {
  Activity,
  BellRing,
  Command,
  MapPinned,
  Menu,
  Radio,
  ShieldAlert,
  X,
} from "lucide-react";

const navItems = [
  { label: "Command", href: "/" },
  { label: "Incidents", href: "/incidents" },
  { label: "Responders", href: "/responders" },
  { label: "Resources", href: "/resources" },
  { label: "Intelligence", href: "/analytics" },
  { label: "Audit", href: "/audit" },
];

const modules = [
  {
    label: "Audio",
    href: "http://localhost:3001",
    icon: Radio,
    dot: "bg-sky-400",
  },
  {
    label: "Geo",
    href: "http://localhost:3002",
    icon: MapPinned,
    dot: "bg-emerald-400",
  },
  {
    label: "Notify",
    href: "http://localhost:3003",
    icon: BellRing,
    dot: "bg-violet-400",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[9999] px-3 pt-3 sm:px-5">
        <div className="mx-auto max-w-[1450px]">
          <div className="relative flex h-[62px] items-center rounded-[22px] border border-white/[0.08] bg-[#07101b]/85 px-3 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl sm:px-4">

            {/* LOGO */}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-2.5"
            >
              <div className="relative grid h-9 w-9 place-items-center rounded-xl border border-red-400/20 bg-red-400/[0.08]">
                <ShieldAlert className="h-[18px] w-[18px] text-red-300 transition group-hover:scale-110" />

                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-[#07101b]" />
              </div>

              <div className="hidden sm:block">
                <div className="text-[12px] font-black tracking-[0.2em] text-white">
                  SCER
                </div>

                <div className="text-[7px] font-bold uppercase tracking-[0.14em] text-slate-600">
                  Emergency Intelligence
                </div>
              </div>
            </Link>

            {/* CENTER NAV */}
            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
              {navItems.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative rounded-xl px-3 py-2 text-[10px] font-bold transition-all duration-300 ${active
                        ? "bg-white/[0.08] text-white"
                        : "text-slate-500 hover:bg-white/[0.04] hover:text-slate-200"
                      }`}
                  >
                    {item.label}

                    {active && (
                      <span className="absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-red-400" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT */}
            <div className="ml-auto hidden items-center gap-2 lg:flex">
              <div className="flex items-center gap-0.5 rounded-xl border border-white/[0.07] bg-white/[0.025] p-1">
                {modules.map((module) => {
                  const Icon = module.icon;

                  return (
                    <a
                      key={module.href}
                      href={module.href}
                      className="group flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-[8px] font-black uppercase tracking-wider text-slate-600 transition hover:bg-white/[0.06] hover:text-white"
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${module.dot}`}
                      />

                      <Icon className="h-3 w-3" />

                      {module.label}
                    </a>
                  );
                })}
              </div>

              {/* NOTIFICATION BELL */}
              <NotificationBell />

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

            {/* MOBILE */}
            <button
              onClick={() => setOpen((value) => !value)}
              className="ml-auto grid h-9 w-9 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-slate-300 lg:hidden"
              aria-label="Open navigation"
            >
              {open ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>

          {open && (
            <div className="mt-2 rounded-2xl border border-white/[0.08] bg-[#07101b]/95 p-2 shadow-2xl backdrop-blur-2xl lg:hidden">
              {navItems.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-3 py-3 text-xs font-bold ${active
                        ? "bg-white/[0.07] text-white"
                        : "text-slate-500"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="my-2 h-px bg-white/[0.06]" />

              {/* MOBILE NOTIFICATION */}
              <div className="flex items-center justify-between px-3 py-3">
                <span className="text-xs font-bold text-slate-400">
                  Notifications
                </span>
                <NotificationBell />
              </div>

              <div className="my-2 h-px bg-white/[0.06]" />

              <div className="grid grid-cols-3 gap-1">
                {modules.map((module) => {
                  const Icon = module.icon;

                  return (
                    <a
                      key={module.href}
                      href={module.href}
                      className="flex flex-col items-center gap-1 rounded-xl py-3 text-[8px] font-black uppercase tracking-wider text-slate-500"
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

      {/* NAVBAR SPACE */}
      <div className="h-[82px]" />
    </>
  );
}