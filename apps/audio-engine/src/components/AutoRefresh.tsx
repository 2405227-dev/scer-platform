
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export function AutoRefresh({ interval = 2000 }: { interval?: number }) {
  const router = useRouter();
  useEffect(() => {
    const int = setInterval(() => router.refresh(), interval);
    return () => clearInterval(int);
  }, [router, interval]);
  return null;
}
