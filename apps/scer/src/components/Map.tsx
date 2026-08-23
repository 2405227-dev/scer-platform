"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import {
  ShieldAlert,
  AlertTriangle,
  Radio,
  MapPin,
  Layers,
  ZoomIn,
  ZoomOut,
  Maximize2,
  CheckCircle2,
  Clock,
  UserCheck,
  Flame,
  Activity,
  Compass,
} from "lucide-react";

interface Incident {
  id: string;
  type: string;
  severity: string;
  status: string;
  location?: string;
  description?: string;
  assignedTo?: string;
  responderId?: string;
  createdAt: string | Date;
  location_lat?: number;
  location_lon?: number;
}

// Real-world Campus Coordinates (Center around Metropolitan University Campus)
const CAMPUS_CENTER: [number, number] = [40.7580, -73.9855];

const CAMPUS_SECTOR_POLYGONS = [
  {
    id: "sec-north",
    name: "North Gate Sector",
    code: "SEC-N",
    coords: [
      [40.7610, -73.9880],
      [40.7610, -73.9840],
      [40.7595, -73.9840],
      [40.7595, -73.9880],
    ] as [number, number][],
    color: "#38bdf8",
  },
  {
    id: "sec-academic",
    name: "Block C (Academic Quad)",
    code: "SEC-C",
    coords: [
      [40.7595, -73.9880],
      [40.7595, -73.9840],
      [40.7570, -73.9840],
      [40.7570, -73.9880],
    ] as [number, number][],
    color: "#10b981",
  },
  {
    id: "sec-hub",
    name: "Central Command & Security Hub",
    code: "SEC-HUB",
    coords: [
      [40.7570, -73.9870],
      [40.7570, -73.9840],
      [40.7555, -73.9840],
      [40.7555, -73.9870],
    ] as [number, number][],
    color: "#a855f7",
  },
  {
    id: "sec-east",
    name: "East Sports & Athletic Arena",
    code: "SEC-E",
    coords: [
      [40.7600, -73.9840],
      [40.7600, -73.9810],
      [40.7565, -73.9810],
      [40.7565, -73.9840],
    ] as [number, number][],
    color: "#38bdf8",
  },
  {
    id: "sec-hostel",
    name: "Hostel Zone & Residential",
    code: "SEC-H",
    coords: [
      [40.7590, -73.9910],
      [40.7590, -73.9880],
      [40.7560, -73.9880],
      [40.7560, -73.9910],
    ] as [number, number][],
    color: "#f59e0b",
  },
  {
    id: "sec-utility",
    name: "Power Utility & Storage Vault",
    code: "SEC-W",
    coords: [
      [40.7610, -73.9910],
      [40.7610, -73.9880],
      [40.7590, -73.9880],
      [40.7590, -73.9910],
    ] as [number, number][],
    color: "#ef4444",
  },
];

const TILE_LAYERS = {
  dark: {
    name: "Dark Tactical",
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; OpenStreetMap',
  },
  satellite: {
    name: "Satellite HD",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: '&copy; <a href="https://www.esri.com/">Esri</a>, Earthstar Geographics',
  },
  street: {
    name: "Street Map",
    url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; OpenStreetMap',
  },
};

export default function SCERRealMap({ incidents = [] }: { incidents: Incident[] }) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const tileLayerRef = useRef<any>(null);
  const markersLayerRef = useRef<any>(null);
  const polygonsLayerRef = useRef<any>(null);

  const [activeLayer, setActiveLayer] = useState<"dark" | "satellite" | "street">("dark");
  const [filter, setFilter] = useState<"ALL" | "CRITICAL" | "ACTIVE" | "RESOLVED">("ALL");
  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null);

  // Filtered incidents
  const filteredIncidents = useMemo(() => {
    return incidents.filter((inc) => {
      if (filter === "CRITICAL") return inc.severity === "CRITICAL";
      if (filter === "ACTIVE") return inc.status !== "RESOLVED" && inc.status !== "CLOSED";
      if (filter === "RESOLVED") return inc.status === "RESOLVED" || inc.status === "CLOSED";
      return true;
    });
  }, [incidents, filter]);

  const criticalCount = useMemo(
    () => incidents.filter((i) => i.severity === "CRITICAL").length,
    [incidents]
  );

  // Initialize Real Leaflet Map
  useEffect(() => {
    if (typeof window === "undefined" || !mapContainerRef.current || mapInstanceRef.current) return;

    let L: any;
    try {
      L = require("leaflet");
    } catch (e) {
      return;
    }

    const map = L.map(mapContainerRef.current, {
      center: CAMPUS_CENTER,
      zoom: 16,
      zoomControl: false,
      attributionControl: false,
    });

    // Add Tile Layer
    const tileConfig = TILE_LAYERS[activeLayer];
    const tileLayer = L.tileLayer(tileConfig.url, {
      maxZoom: 19,
      subdomains: "abcd",
    }).addTo(map);

    tileLayerRef.current = tileLayer;

    // Polygons layer for campus sectors
    const polygonsGroup = L.layerGroup().addTo(map);
    CAMPUS_SECTOR_POLYGONS.forEach((sec) => {
      const polygon = L.polygon(sec.coords, {
        color: sec.color,
        fillColor: sec.color,
        fillOpacity: 0.12,
        weight: 1.5,
        dashArray: "4, 4",
      }).addTo(polygonsGroup);

      polygon.bindTooltip(`<b>${sec.name}</b> (${sec.code})`, {
        permanent: false,
        direction: "center",
        className: "leaflet-sector-tooltip",
      });
    });
    polygonsLayerRef.current = polygonsGroup;

    // Markers layer
    const markersGroup = L.layerGroup().addTo(map);
    markersLayerRef.current = markersGroup;

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Tile Layer when layer switch changed
  useEffect(() => {
    if (!mapInstanceRef.current || !tileLayerRef.current) return;
    const L = require("leaflet");

    mapInstanceRef.current.removeLayer(tileLayerRef.current);
    const tileConfig = TILE_LAYERS[activeLayer];
    const newTileLayer = L.tileLayer(tileConfig.url, {
      maxZoom: 19,
      subdomains: "abcd",
    }).addTo(mapInstanceRef.current);

    tileLayerRef.current = newTileLayer;
  }, [activeLayer]);

  // Update Markers on filtered incidents change
  useEffect(() => {
    if (!mapInstanceRef.current || !markersLayerRef.current) return;
    const L = require("leaflet");

    markersLayerRef.current.clearLayers();

    filteredIncidents.forEach((incident, index) => {
      const isCritical = incident.severity === "CRITICAL";
      const isResolved = incident.status === "RESOLVED" || incident.status === "CLOSED";

      const markerColor = isCritical
        ? "#ef4444"
        : isResolved
        ? "#10b981"
        : incident.severity === "HIGH"
        ? "#f97316"
        : "#38bdf8";

      // Determine lat/lon
      let lat = incident.location_lat;
      let lon = incident.location_lon;

      if (!lat || !lon) {
        // Deterministic offset based on incident ID
        const hash = incident.id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
        const sector = CAMPUS_SECTOR_POLYGONS[hash % CAMPUS_SECTOR_POLYGONS.length];
        const centerLat = (sector.coords[0][0] + sector.coords[2][0]) / 2;
        const centerLon = (sector.coords[0][1] + sector.coords[2][1]) / 2;
        const offsetLat = (((hash * 17) % 30) - 15) * 0.00008;
        const offsetLon = (((hash * 29) % 30) - 15) * 0.00008;
        lat = centerLat + offsetLat;
        lon = centerLon + offsetLon;
      }

      // Pulsing HTML DivIcon
      const customIcon = L.divIcon({
        className: "custom-pulsing-marker",
        html: `
          <div style="position: relative; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; transform: translate(-50%, -50%);">
            ${
              !isResolved
                ? `<div style="position: absolute; width: 28px; height: 28px; border-radius: 50%; background: ${markerColor}; opacity: 0.35; animation: ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>`
                : ""
            }
            <div style="position: relative; width: 14px; height: 14px; border-radius: 50%; background: ${markerColor}; border: 2.5px solid #050a12; box-shadow: 0 0 10px ${markerColor};"></div>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      const marker = L.marker([lat, lon], { icon: customIcon }).addTo(markersLayerRef.current);

      marker.on("click", () => {
        setSelectedIncident(incident);
      });
    });
  }, [filteredIncidents]);

  return (
    <div className="relative h-full w-full select-none overflow-hidden rounded-2xl bg-[#050a12] text-white border border-white/[0.08] shadow-2xl">
      {/* REAL LEAFLET MAP CONTAINER */}
      <div ref={mapContainerRef} className="h-full w-full z-0" />

      {/* TOP FLOATING CONTROLS & HUD */}
      <div className="absolute left-3 right-3 top-3 flex flex-wrap items-center justify-between gap-2 pointer-events-none z-[1000]">
        {/* LIVE STATUS CHIP */}
        <div className="pointer-events-auto flex items-center gap-2 rounded-xl border border-white/[0.15] bg-[#07101b]/90 px-3 py-1.5 shadow-xl backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-200">
            Live Geographic Satellite Map
          </span>
          <span className="h-3 w-[1px] bg-white/[0.1]" />
          <span className="text-[9px] font-bold text-sky-400">
            {filteredIncidents.length} Active Targets
          </span>
        </div>

        {/* FILTER CHIPS */}
        <div className="pointer-events-auto flex items-center gap-1 rounded-xl border border-white/[0.12] bg-[#07101b]/90 p-1 backdrop-blur-md shadow-xl">
          {(["ALL", "CRITICAL", "ACTIVE", "RESOLVED"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setFilter(mode)}
              className={`rounded-lg px-2.5 py-1 text-[9px] font-black uppercase tracking-wider transition ${
                filter === mode
                  ? "bg-white/[0.18] text-white shadow"
                  : "text-slate-400 hover:bg-white/[0.06] hover:text-slate-200"
              }`}
            >
              {mode}
              {mode === "CRITICAL" && criticalCount > 0 && (
                <span className="ml-1 rounded bg-red-500/30 px-1 py-0.2 text-[8px] text-red-300 font-extrabold">
                  {criticalCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* TILE LAYER SWITCHER & ZOOM */}
        <div className="pointer-events-auto flex items-center gap-1 rounded-xl border border-white/[0.12] bg-[#07101b]/90 p-1 backdrop-blur-md shadow-xl">
          {(["dark", "satellite", "street"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setActiveLayer(type)}
              className={`rounded-lg px-2 py-1 text-[9px] font-bold uppercase transition ${
                activeLayer === type
                  ? "bg-sky-500/25 text-sky-300 border border-sky-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {TILE_LAYERS[type].name.split(" ")[0]}
            </button>
          ))}

          <span className="h-3 w-[1px] bg-white/[0.1] mx-0.5" />

          <button
            onClick={() => mapInstanceRef.current?.zoomIn()}
            title="Zoom In"
            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-white/[0.08] hover:text-white"
          >
            <ZoomIn className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => mapInstanceRef.current?.zoomOut()}
            title="Zoom Out"
            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-white/[0.08] hover:text-white"
          >
            <ZoomOut className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => {
              mapInstanceRef.current?.setView(CAMPUS_CENTER, 16);
              setSelectedIncident(null);
            }}
            title="Reset Campus View"
            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-white/[0.08] hover:text-white"
          >
            <Compass className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* SELECTED INCIDENT POPUP CARD */}
      {selectedIncident && (
        <div className="absolute bottom-4 right-4 z-[1000] w-80 rounded-2xl border border-white/[0.18] bg-[#07101b]/95 p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  selectedIncident.severity === "CRITICAL"
                    ? "bg-red-400 shadow-[0_0_10px_rgba(248,113,113,.8)]"
                    : selectedIncident.status === "RESOLVED"
                    ? "bg-emerald-400"
                    : "bg-orange-400"
                }`}
              />
              <span className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                {selectedIncident.id}
              </span>
            </div>

            <button
              onClick={() => setSelectedIncident(null)}
              className="rounded-lg p-1 text-slate-500 hover:bg-white/[0.08] hover:text-white text-xs"
            >
              ✕
            </button>
          </div>

          <div className="mt-2">
            <h4 className="text-base font-black text-white">{selectedIncident.type}</h4>
            <p className="mt-1 text-xs text-slate-400 line-clamp-2">
              {selectedIncident.description || "No specific incident description provided."}
            </p>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 text-[10px]">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2">
              <div className="text-slate-500 font-bold uppercase">Sector / Loc</div>
              <div className="mt-0.5 font-bold text-slate-200 truncate">
                {selectedIncident.location || "Campus Central"}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2">
              <div className="text-slate-500 font-bold uppercase">Status</div>
              <div className="mt-0.5 font-bold text-emerald-400 uppercase">
                {selectedIncident.status}
              </div>
            </div>
          </div>

          {selectedIncident.assignedTo && (
            <div className="mt-2 flex items-center gap-1.5 text-[10px] text-slate-400 bg-white/[0.02] p-2 rounded-xl border border-white/[0.06]">
              <UserCheck className="h-3 w-3 text-sky-400" />
              <span>
                Assigned: <strong className="text-white">{selectedIncident.assignedTo}</strong>
              </span>
            </div>
          )}

          <div className="mt-3 flex items-center gap-2">
            <a
              href="/incidents"
              className="flex-1 rounded-xl bg-white/[0.08] py-2 text-center text-[10px] font-bold text-white transition hover:bg-white/[0.15]"
            >
              Full Incident File →
            </a>
          </div>
        </div>
      )}

      {/* BOTTOM LEFT REAL MAP LEGEND */}
      <div className="absolute bottom-3 left-3 hidden md:flex items-center gap-3 rounded-xl border border-white/[0.12] bg-[#07101b]/90 px-3 py-1.5 backdrop-blur-md text-[9px] font-bold text-slate-300 z-[1000] shadow-xl">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,.8)]" />
          <span>Critical Alert</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-orange-400" />
          <span>High / Medium</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span>Resolved</span>
        </div>
      </div>
    </div>
  );
}
