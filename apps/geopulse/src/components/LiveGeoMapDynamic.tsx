"use client";

import dynamic from "next/dynamic";

const LiveGeoMapComponent = dynamic(
  () => import("./LiveGeoMap").then((mod) => mod.LiveGeoMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-[560px] w-full rounded-2xl bg-[#040811] flex items-center justify-center border border-white/[0.08] text-slate-500 text-xs">
        Loading Satellite Map Radar...
      </div>
    ),
  }
);

export default LiveGeoMapComponent;
