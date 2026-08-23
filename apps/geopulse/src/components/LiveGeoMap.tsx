"use client";

import { useEffect, useRef, useState } from "react";
import {
  Shield,
  AlertTriangle,
  Flame,
  Zap,
  Battery,
  Gauge,
  Compass,
  ZoomIn,
  ZoomOut,
  MapPin,
  Navigation,
  Crosshair,
  Loader2,
} from "lucide-react";
import { GeoDevice, GeoZone, GEOFENCE_ZONES } from "@/lib/geoEngine";

interface LiveGeoMapProps {
  devices: GeoDevice[];
  zones?: GeoZone[];
  selectedDevice: GeoDevice | null;
  onSelectDevice: (dev: GeoDevice | null) => void;
}

// Real-world KIIT Campus 6 Coordinates (Bhubaneswar, Odisha, India)
const CAMPUS_CENTER: [number, number] = [20.3530, 85.8202];

const TILE_LAYERS = {
  dark: {
    name: "Dark Tactical",
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  },
  satellite: {
    name: "Satellite HD",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  },
  street: {
    name: "Street Map",
    url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
  },
};

export function LiveGeoMap({
  devices = [],
  zones = GEOFENCE_ZONES,
  selectedDevice,
  onSelectDevice,
}: LiveGeoMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const tileLayerRef = useRef<any>(null);
  const markersGroupRef = useRef<any>(null);
  const trailsGroupRef = useRef<any>(null);
  const polygonsGroupRef = useRef<any>(null);
  const userLocationLayerRef = useRef<any>(null);

  const [activeLayer, setActiveLayer] = useState<"dark" | "satellite" | "street">("street");
  const [showTrails, setShowTrails] = useState(true);

  // Live User Location (Google Maps style)
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number; accuracy: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  const handleLocateMe = () => {
    if (typeof window === "undefined" || !navigator.geolocation) {
      setLocationError("Geolocation not supported by browser.");
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
              <strong style="color: #2563eb;">📍 Your Live Location</strong><br/>
              <span style="font-size: 11px; color: #475569;">Coords: ${latitude.toFixed(5)}°, ${longitude.toFixed(5)}°</span><br/>
              <span style="font-size: 10px; color: #16a34a;">GPS Accuracy: ±${Math.round(accuracy)}m (Live Locked)</span>
            </div>
          `);

          userLocationLayerRef.current = userGroup;

          mapInstanceRef.current.flyTo([latitude, longitude], 17, {
            duration: 1.6,
          });
        }
      },
      (err) => {
        setIsLocating(false);
        setLocationError(err.message || "Unable to acquire GPS.");
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  // Initialize Leaflet Map
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

    const tileConfig = TILE_LAYERS[activeLayer];
    const tileLayer = L.tileLayer(tileConfig.url, {
      maxZoom: 19,
      subdomains: "abcd",
    }).addTo(map);

    tileLayerRef.current = tileLayer;

    // Polygons layer for geofence zones
    const polygonsGroup = L.layerGroup().addTo(map);
    const activeZones = zones && zones.length > 0 ? zones : GEOFENCE_ZONES;

    activeZones.forEach((zone) => {
      const coords =
        zone.coords && zone.coords.length > 0
          ? zone.coords
          : [
              [40.7580, -73.9860],
              [40.7580, -73.9840],
              [40.7560, -73.9840],
              [40.7560, -73.9860],
            ];

      const polygon = L.polygon(coords, {
        color: zone.color || "#10b981",
        fillColor: zone.color || "#10b981",
        fillOpacity: zone.type === "RESTRICTED" || zone.type === "EMERGENCY" ? 0.22 : 0.12,
        weight: 2,
        dashArray: zone.type === "RESTRICTED" || zone.type === "EMERGENCY" ? "6, 6" : undefined,
      }).addTo(polygonsGroup);

      polygon.bindTooltip(`<b>${zone.code || "ZONE"}</b>: ${zone.name || "Campus Area"}`, {
        permanent: false,
        direction: "center",
        className: "leaflet-sector-tooltip",
      });
    });
    polygonsGroupRef.current = polygonsGroup;

    // Trails layer
    const trailsGroup = L.layerGroup().addTo(map);
    trailsGroupRef.current = trailsGroup;

    // Markers layer
    const markersGroup = L.layerGroup().addTo(map);
    markersGroupRef.current = markersGroup;

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Tile Layer
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

  // Update Device Markers & Trails
  useEffect(() => {
    if (!mapInstanceRef.current || !markersGroupRef.current || !trailsGroupRef.current) return;
    const L = require("leaflet");

    markersGroupRef.current.clearLayers();
    trailsGroupRef.current.clearLayers();

    // Draw Trails
    if (showTrails && Array.isArray(devices)) {
      devices.forEach((dev) => {
        if (dev.trail && Array.isArray(dev.trail) && dev.trail.length > 1) {
          const latlngs = dev.trail
            .filter((p) => typeof p.lat === "number" && typeof p.lon === "number")
            .map((p) => [p.lat, p.lon]);

          if (latlngs.length > 1) {
            const trailColor =
              dev.status === "BREACH"
                ? "#ef4444"
                : dev.status === "SPEED_ANOMALY"
                ? "#f59e0b"
                : "#38bdf8";

            L.polyline(latlngs, {
              color: trailColor,
              weight: 2.5,
              opacity: 0.6,
              dashArray: "4, 4",
            }).addTo(trailsGroupRef.current);
          }
        }
      });
    }

    // Draw Markers
    if (Array.isArray(devices)) {
      devices.forEach((device) => {
        if (typeof device.lat !== "number" || typeof device.lon !== "number") return;

        const isSelected = selectedDevice?.id === device.id;
        const isBreach = device.status === "BREACH";
        const isSpeedAnomaly = device.status === "SPEED_ANOMALY";
        const isMoving = device.status === "MOVING";

        const markerColor = isBreach
          ? "#ef4444"
          : isSpeedAnomaly
          ? "#f59e0b"
          : isMoving
          ? "#10b981"
          : "#94a3b8";

        const customIcon = L.divIcon({
          className: "custom-device-marker",
          html: `
            <div style="position: relative; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; transform: translate(-50%, -50%);">
              ${
                isBreach || isSpeedAnomaly
                  ? `<div style="position: absolute; width: 36px; height: 36px; border-radius: 50%; background: ${markerColor}; opacity: 0.4; animation: ping 1.4s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>`
                  : ""
              }
              <div style="position: relative; width: 28px; height: 28px; border-radius: 10px; background: #07101b; border: 2px solid ${markerColor}; display: flex; align-items: center; justify-content: center; font-size: 14px; box-shadow: 0 0 12px ${markerColor};">
                ${device.icon || "📍"}
              </div>
              <div style="position: absolute; top: -14px; background: #060c16; border: 1px solid ${markerColor}; border-radius: 4px; padding: 0 4px; font-size: 8px; font-weight: bold; color: #fff; white-space: nowrap;">
                ${device.callsign || device.id} ${device.speed > 0 ? `(${device.speed}k)` : ""}
              </div>
            </div>
          `,
          iconSize: [44, 44],
          iconAnchor: [22, 22],
        });

        const marker = L.marker([device.lat, device.lon], { icon: customIcon }).addTo(
          markersGroupRef.current
        );

        marker.on("click", () => {
          onSelectDevice(device);
        });
      });
    }
  }, [devices, showTrails, selectedDevice]);

  return (
    <div className="relative h-[560px] w-full select-none overflow-hidden rounded-2xl bg-[#050a12] text-white border border-white/[0.08] shadow-2xl">
      {/* REAL LEAFLET MAP CONTAINER */}
      <div ref={mapContainerRef} className="h-full w-full z-0" />

      {/* TOP FLOATING CONTROLS & HUD */}
      <div className="absolute left-3 right-3 top-3 flex flex-wrap items-center justify-between gap-2 pointer-events-none z-[1000]">
        {/* LIVE TRACKING CHIP */}
        <div className="pointer-events-auto flex items-center gap-2 rounded-xl border border-white/[0.15] bg-[#07101b]/90 px-3 py-1.5 shadow-xl backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-200">
            Real GPS Satellite Fleet Radar
          </span>
          <span className="h-3 w-[1px] bg-white/[0.1]" />
          <span className="text-[9px] font-bold text-sky-400">
            {devices.length} Live Units
          </span>
        </div>

        {/* LAYER SWITCHER & ZOOM */}
        <div className="pointer-events-auto flex items-center gap-1 rounded-xl border border-white/[0.12] bg-[#07101b]/90 p-1 backdrop-blur-md shadow-xl">
          {(["dark", "satellite", "street"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setActiveLayer(type)}
              className={`rounded-lg px-2.5 py-1 text-[9px] font-bold uppercase transition ${
                activeLayer === type
                  ? "bg-emerald-500/25 text-emerald-300 border border-emerald-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {TILE_LAYERS[type].name.split(" ")[0]}
            </button>
          ))}

          <span className="h-3 w-[1px] bg-white/[0.1] mx-0.5" />

          <button
            onClick={() => setShowTrails(!showTrails)}
            title="Toggle GPS Breadcrumb Trails"
            className={`rounded-lg px-2 py-1 text-[9px] font-bold uppercase transition ${
              showTrails ? "bg-sky-500/20 text-sky-300" : "text-slate-500 hover:text-slate-300"
            }`}
          >
            Trails
          </button>
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
              onSelectDevice(null);
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

      {/* SELECTED DEVICE INSPECTOR CARD */}
      {selectedDevice && (
        <div className="absolute bottom-4 right-4 z-[1000] w-80 rounded-2xl border border-white/[0.18] bg-[#07101b]/95 p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">{selectedDevice.icon || "📍"}</span>
              <div>
                <h4 className="font-bold text-white text-sm">{selectedDevice.name}</h4>
                <div className="text-[10px] font-mono text-slate-400">
                  {selectedDevice.callsign} • ID: {selectedDevice.id}
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectDevice(null)}
              className="rounded-lg p-1 text-slate-500 hover:bg-white/[0.08] hover:text-white text-xs"
            >
              ✕
            </button>
          </div>

          {selectedDevice.alert && (
            <div className="mt-2.5 rounded-xl border border-red-500/30 bg-red-500/15 p-2.5 text-xs font-bold text-red-200 flex items-center gap-2 animate-pulse">
              <AlertTriangle className="h-4 w-4 shrink-0 text-red-400" />
              <span>{selectedDevice.alert}</span>
            </div>
          )}

          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2">
              <div className="text-slate-500 text-[10px] uppercase font-bold flex items-center gap-1">
                <Gauge className="h-3 w-3 text-sky-400" /> Speed
              </div>
              <div className="mt-0.5 font-bold text-white text-sm">
                {selectedDevice.speed} km/h
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2">
              <div className="text-slate-500 text-[10px] uppercase font-bold flex items-center gap-1">
                <Battery className="h-3 w-3 text-emerald-400" /> Battery
              </div>
              <div className="mt-0.5 font-bold text-emerald-300 text-sm">
                {selectedDevice.battery}%
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2">
              <div className="text-slate-500 text-[10px] uppercase font-bold">Coordinates</div>
              <div className="mt-0.5 font-mono text-[10px] text-slate-300">
                {selectedDevice.lat}, {selectedDevice.lon}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2">
              <div className="text-slate-500 text-[10px] uppercase font-bold">Geofence Zone</div>
              <div className="mt-0.5 text-[10px] font-bold text-sky-300 truncate">
                {selectedDevice.currentZone || "Open Campus"}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM LEFT ZONE LEGEND */}
      <div className="absolute bottom-3 left-3 hidden md:flex items-center gap-3 rounded-xl border border-white/[0.12] bg-[#07101b]/90 px-3 py-1.5 backdrop-blur-md text-[9px] font-bold text-slate-300 z-[1000] shadow-xl">
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span>Safe Zone</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          <span>Event Zone</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span>Restricted Zone</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span>Emergency Zone</span>
        </div>
      </div>
    </div>
  );
}
