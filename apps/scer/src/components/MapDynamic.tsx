
"use client";

import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./Map"), { ssr: false });

export default function MapDynamic({ incidents }: { incidents: any[] }) {
  return <MapComponent incidents={incidents} />;
}

