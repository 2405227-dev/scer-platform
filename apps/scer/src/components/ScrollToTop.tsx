"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Resets window scroll to y=0 whenever the route pathname changes.
 *
 * Mounted inside the shared controller layout so every page navigation
 * automatically starts at the top. Uses [pathname] as the dependency so it
 * fires exactly once per route, not on unrelated re-renders (session updates,
 * live data, etc.).
 *
 * NOTE: scroll-behavior:smooth must NOT be set on <html> or this will animate
 * instead of snap-jumping, causing the visible "page jumps back down" bug.
 * globals.css sets html { scroll-behavior: auto } to prevent this.
 */
export function RouteScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
