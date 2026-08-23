"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface BackButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

export function BackButton({
  label = "Back to Command Center",
  href = "/",
  className = "",
}: BackButtonProps) {
  const handleBack = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.history.length > 1 && !href.startsWith("http")) {
      // If user came from within the app, use history back
      // If on main entry, Link will navigate to href
    }
  };

  return (
    <Link
      href={href}
      onClick={handleBack}
      className={`group inline-flex items-center gap-1.5 rounded-xl border border-white/[0.12] bg-[#0c1829]/80 px-3 py-1.5 text-xs font-semibold text-slate-300 shadow-sm backdrop-blur-md transition hover:border-white/[0.25] hover:bg-white/[0.1] hover:text-white active:scale-95 ${className}`}
    >
      <ChevronLeft className="h-3.5 w-3.5 transition group-hover:-translate-x-0.5" />
      <span className="text-[11px] font-bold">{label}</span>
    </Link>
  );
}
