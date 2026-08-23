"use client";

import { ChevronRight } from "lucide-react";
import { scrollToSection } from "./LandingNavbar";

export function ExploreButton() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection("overview");
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 rounded-2xl border border-white/[0.12] bg-white/[0.04] px-6 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-200 transition hover:border-white/[0.25] hover:bg-white/[0.08] cursor-pointer"
    >
      <span>Explore Platform</span>
      <ChevronRight className="h-4 w-4 text-slate-400" />
    </button>
  );
}
