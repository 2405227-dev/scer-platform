"use client";

import dynamic from "next/dynamic";
import { CandidateRanking, IncidentItem, ResponderItem, ZoneItem } from "@/types/geopulse";
import { Loader2, MapPin } from "lucide-react";

const GeoPulseMapClient = dynamic(
  () => import("./GeoPulseMapClient"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[500px] w-full flex-col items-center justify-center rounded-[24px] border border-white/[0.08] bg-[#070d18] text-slate-400">
        <div className="flex items-center gap-3">
          <Loader2 className="h-6 w-6 animate-spin text-emerald-400" />
          <span className="text-sm font-bold tracking-wider uppercase text-slate-300">
            Initializing Geospatial Map Engine...
          </span>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Loading coordinate projections and live GPS telemetry
        </p>
      </div>
    ),
  }
);

interface GeoPulseMapProps {
  incidents: IncidentItem[];
  responders: ResponderItem[];
  zones?: ZoneItem[];
  selectedIncident: IncidentItem | null;
  onSelectIncident: (incident: IncidentItem) => void;
  selectedResponder: ResponderItem | null;
  onSelectResponder: (responder: ResponderItem) => void;
  topRecommendation: CandidateRanking | null;
  onDispatch?: (incidentId: string, responderId: string) => void;
  className?: string;
}

export default function GeoPulseMap(props: GeoPulseMapProps) {
  return <GeoPulseMapClient {...props} />;
}
