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
  Crosshair,
  Navigation,
  Loader2,
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

// Real-world KIIT Campus 6 Coordinates (Bhubaneswar, Odisha, India)
const CAMPUS_CENTER: [number, number] = [20.3530, 85.8202];

const CAMPUS_SECTOR_POLYGONS = [
  {
    id: "sec-academic",
    name: "KIIT Campus 6 Academic Quad & Convention Center",
    code: "KIIT-C6-ACAD",
    coords: [
      [20.3542, 85.8192],
      [20.3542, 85.8212],
      [20.3526, 85.8212],
      [20.3526, 85.8192],
    ] as [number, number][],
    color: "#10b981",
  },
  {
    id: "sec-sports",
    name: "Campus 6 Sports Arena & Chintan Lawn",
    code: "KIIT-C6-SPORTS",
    coords: [
      [20.3545, 85.8212],
      [20.3545, 85.8230],
      [20.3522, 85.8230],
      [20.3522, 85.8212],
    ] as [number, number][],
    color: "#38bdf8",
  },
  {
    id: "sec-gate6",
    name: "Campus 6 Security Hub & Main Gate 6",
    code: "KIIT-C6-GATE6",
    coords: [
      [20.3552, 85.8192],
      [20.3552, 85.8212],
      [20.3542, 85.8212],
      [20.3542, 85.8192],
    ] as [number, number][],
    color: "#a855f7",
  },
  {
    id: "sec-hostel",
    name: "Campus 6 Hostels & Residential Enclave",
    code: "KIIT-C6-HOSTEL",
    coords: [
      [20.3524, 85.8170],
      [20.3524, 85.8192],
      [20.3506, 85.8192],
      [20.3506, 85.8170],
    ] as [number, number][],
    color: "#f59e0b",
  },
  {
    id: "sec-utility",
    name: "Campus 6 Substation & Heavy Vault",
    code: "KIIT-C6-VAULT",
    coords: [
      [20.3552, 85.8175],
      [20.3552, 85.8192],
      [20.3538, 85.8192],
      [20.3538, 85.8175],
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
  const userLocationLayerRef = useRef<any>(null);

  const [activeLayer, setActiveLayer] = useState<"dark" | "satellite" | "street">("street");
  const [filter, setFilter] = useState<"ALL" | "CRITICAL" | "ACTIVE" | "RESOLVED">("ALL");
  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null);

  // Live User GPS Location (Google Maps style)
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number; accuracy: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  const handleLocateMe = () => {
    if (typeof window === "undefined" || !navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      return;
    }

    setIsLocating(true);
    setLocationError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude, accuracy } = pos.coords;
        setUserLocation({ lat: latitude, lng: longitude, accuracy: Math.round(accuracy) });
        setIsLocating(false);

        if (mapInstanceRef.current) {
          const L = require("leaflet");

          // Remove previous user marker layer if exists
          if (userLocationLayerRef.current) {
            mapInstanceRef.current.removeLayer(userLocationLayerRef.current);
          }

          const userGroup = L.layerGroup().addTo(mapInstanceRef.current);

          // Accuracy Circle (Google Maps style)
          L.circle([latitude, longitude], {
            radius: Math.max(accuracy, 10),
            color: "#3b82f6",
            fillColor: "#3b82f6",
            fillOpacity: 0.18,
            weight: 1.5,
          }).addTo(userGroup);

          // Pulsing User Location Beacon
          const userIcon = L.divIcon({
            className: "user-live-gps-marker",
            html: `
              <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px;">
                <div style="position: absolute; width: 28px; height: 28px; border-radius: 9999px; background-color: rgba(59, 130, 246, 0.4); animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
                <div style="position: relative; width: 14px; height: 14px; border-radius: 9999px; background-color: #2563eb; border: 2.5px solid #ffffff; box-shadow: 0 0 10px rgba(37, 99, 235, 0.8);"></div>
              </div>
            `,
            iconSize: [32, 32],
            iconAnchor: [16, 16],
          });

          const marker = L.marker([latitude, longitude], { icon: userIcon }).addTo(userGroup);
          marker.bindPopup(`
            <div style="font-family: sans-serif; padding: 4px;">
              <strong style="color: #2563eb;">📍 You Are Here (Live GPS)</strong><br/>
              <span style="font-size: 11px; color: #475569;">Coords: ${latitude.toFixed(5)}°, ${longitude.toFixed(5)}°</span><br/>
              <span style="font-size: 10px; color: #16a34a;">Accuracy: ±${Math.round(accuracy)}m (Locked)</span>
            </div>
          `);

          userLocationLayerRef.current = userGroup;

          // Smooth flyTo like Google Maps
          mapInstanceRef.current.flyTo([latitude, longitude], 17, {
            duration: 1.6,
          });
        }
      },
      (err) => {
        setIsLocating(false);
        setLocationError(err.message || "Unable to acquire GPS location.");
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

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
    if (typeof window === "undefined" || !mapContainerRef.current) return;

    if (mapInstanceRef.current) {
      try {
        mapInstanceRef.current.remove();
      } catch (e) {}
      mapInstanceRef.current = null;
    }

    if ((mapContainerRef.current as any)._leaflet_id) {
      (mapContainerRef.current as any)._leaflet_id = null;
    }

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

    setTimeout(() => {
      try {
        map.invalidateSize();
      } catch (e) {}
    }, 150);

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
      try {
        map.remove();
      } catch (e) {}
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

          {/* GOOGLE MAPS STYLE LOCATE ME BUTTON */}
          <button
            onClick={handleLocateMe}
            disabled={isLocating}
            title="Use My Live Location (Google Maps)"
            className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-[10px] font-bold transition cursor-pointer ${
              userLocation
                ? "bg-blue-600/30 text-blue-300 border border-blue-500/50 shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                : "bg-blue-500/15 text-blue-400 border border-blue-500/30 hover:bg-blue-500/25 hover:text-white"
            }`}
          >
            {isLocating ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Crosshair className="h-3.5 w-3.5 animate-pulse" />
            )}
            <span className="hidden sm:inline">
              {isLocating ? "Acquiring..." : userLocation ? "My GPS Active" : "Locate Me"}
            </span>
          </button>

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

      {/* LIVE USER GPS STATUS PILL (IF LOCATED) */}
      {userLocation && (
        <div className="absolute top-16 left-4 z-[999] pointer-events-auto flex items-center gap-2 rounded-2xl border border-blue-500/40 bg-[#07101b]/95 px-3 py-1.5 shadow-xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
          <div className="text-[10px] text-white">
            <span className="font-bold text-blue-400">Live GPS: </span>
            <span className="font-mono">{userLocation.lat.toFixed(5)}° N, {userLocation.lng.toFixed(5)}° E</span>
            <span className="text-slate-400 ml-1">(±{userLocation.accuracy}m)</span>
          </div>
          <button
            onClick={() => {
              mapInstanceRef.current?.flyTo([userLocation.lat, userLocation.lng], 17, { duration: 1.2 });
            }}
            className="rounded-md bg-blue-500/20 px-1.5 py-0.5 text-[8.5px] font-black text-blue-300 uppercase hover:bg-blue-500/40 cursor-pointer"
          >
            Re-Center
          </button>
        </div>
      )}

      {locationError && (
        <div className="absolute top-16 left-4 z-[999] pointer-events-auto rounded-2xl border border-red-500/40 bg-[#12080c]/95 px-3 py-1.5 text-[10px] text-red-300 shadow-xl backdrop-blur-xl">
          ⚠️ {locationError}
        </div>
      )}

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
