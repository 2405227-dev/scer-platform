"use client";

import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  CandidateRanking,
  IncidentItem,
  ResponderItem,
  ZoneItem,
} from "@/types/geopulse";
import { calculateETA, calculateHaversineDistanceKm } from "@/lib/geo-engine";
import {
  Crosshair,
  Layers,
  MapPin,
  Maximize2,
  Navigation,
  Shield,
  Siren,
  Zap,
} from "lucide-react";

interface GeoPulseMapClientProps {
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

export default function GeoPulseMapClient({
  incidents,
  responders,
  zones = [],
  selectedIncident,
  onSelectIncident,
  selectedResponder,
  onSelectResponder,
  topRecommendation,
  onDispatch,
  className = "h-full w-full",
}: GeoPulseMapClientProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layerGroupRef = useRef<L.LayerGroup | null>(null);
  const [showZones, setShowZones] = useState(true);
  const [mapReady, setMapReady] = useState(false);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapRef.current) return;

    // Default center around smart campus coordinates
    const defaultCenter: [number, number] = [20.2961, 85.8245];

    const map = L.map(mapContainerRef.current, {
      center: defaultCenter,
      zoom: 15,
      zoomControl: false,
      attributionControl: true,
    });

    // Dark high-contrast emergency operations map tile layer
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png",
      {
        subdomains: "abcd",
        maxZoom: 20,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      }
    ).addTo(map);

    // Add custom zoom control in bottom right
    L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(map);

    const layerGroup = L.layerGroup().addTo(map);
    layerGroupRef.current = layerGroup;
    mapRef.current = map;
    setMapReady(true);

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Update Markers, Zones, and Routes whenever state changes
  useEffect(() => {
    if (!mapRef.current || !layerGroupRef.current) return;

    const layerGroup = layerGroupRef.current;
    layerGroup.clearLayers();
    const map = mapRef.current;

    // 1. Render Response Zones if enabled
    if (showZones && zones && zones.length > 0) {
      zones.forEach((zone) => {
        let color = "#3b82f6";
        let fillColor = "#1d4ed8";
        if (zone.type === "HIGH_RISK" || zone.type === "CRITICAL") {
          color = "#ef4444";
          fillColor = "#b91c1c";
        } else if (zone.type === "SAFE") {
          color = "#10b981";
          fillColor = "#047857";
        } else if (zone.type === "SERVICE") {
          color = "#06b6d4";
          fillColor = "#0891b2";
        }

        const circle = L.circle([zone.latitude, zone.longitude], {
          radius: zone.radiusMeters || 200,
          color,
          fillColor,
          fillOpacity: 0.08,
          weight: 1.5,
          dashArray: "4, 6",
        });

        circle.bindTooltip(
          `<div class="text-[10px] font-bold tracking-wider uppercase text-slate-300">${zone.name} <span class="text-slate-400">(${zone.type})</span></div>`,
          { permanent: false, direction: "center", className: "bg-slate-900/90 text-white border-0 px-2 py-1 rounded" }
        );

        circle.addTo(layerGroup);
      });
    }

    // 2. Render Incident Markers
    incidents.forEach((inc) => {
      const isSelected = selectedIncident?.id === inc.id;
      const isCritical = inc.severity === "CRITICAL";
      const isHigh = inc.severity === "HIGH";
      const isResolved = inc.status === "RESOLVED" || inc.status === "CLOSED";

      let badgeBg = "bg-amber-500";
      let borderGlow = "border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.5)]";
      let pulseRing = "";

      if (isResolved) {
        badgeBg = "bg-emerald-500";
        borderGlow = "border-emerald-400";
      } else if (isCritical) {
        badgeBg = "bg-red-600";
        borderGlow = "border-red-400 shadow-[0_0_25px_rgba(239,68,68,0.8)]";
        pulseRing = `<div class="absolute -inset-2 rounded-full border-2 border-red-500 animate-pulse-radar"></div>`;
      } else if (isHigh) {
        badgeBg = "bg-orange-500";
        borderGlow = "border-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.6)]";
        pulseRing = `<div class="absolute -inset-1.5 rounded-full border border-orange-400/60 animate-pulse-glow"></div>`;
      }

      const selectedHalo = isSelected
        ? `<div class="absolute -inset-3.5 rounded-full border-2 border-emerald-400 bg-emerald-400/10"></div>`
        : "";

      const iconHtml = `
        <div class="relative flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110">
          ${pulseRing}
          ${selectedHalo}
          <div class="relative flex items-center justify-center w-8 h-8 rounded-full ${badgeBg} border-2 ${borderGlow} text-white shadow-xl">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              ${
                isResolved
                  ? '<polyline points="20 6 9 17 4 12"></polyline>'
                  : isCritical
                  ? '<path d="M12 9v4"></path><path d="M12 17h.01"></path><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>'
                  : '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'
              }
            </svg>
          </div>
          <div class="absolute -bottom-5 whitespace-nowrap bg-slate-950/90 border border-white/10 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider ${
            isCritical ? "text-red-400" : "text-slate-300"
          } shadow-md backdrop-blur-sm">
            ${inc.severity}
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: iconHtml,
        className: "incident-marker-custom",
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      const marker = L.marker([inc.latitude, inc.longitude], {
        icon: customIcon,
        zIndexOffset: isCritical ? 1000 : 500,
      });

      marker.on("click", () => {
        onSelectIncident(inc);
      });

      marker.bindTooltip(
        `<div class="p-1">
          <div class="font-bold text-xs text-white">${inc.title || inc.type}</div>
          <div class="text-[10px] text-slate-400 mt-0.5">${inc.location}</div>
          <div class="text-[9px] font-black text-emerald-400 mt-1 uppercase tracking-wider">Status: ${inc.status}</div>
        </div>`,
        { direction: "top", offset: [0, -18], className: "bg-slate-900 border border-white/10 rounded-lg text-white" }
      );

      marker.addTo(layerGroup);
    });

    // 3. Render Responder Markers
    responders.forEach((resp) => {
      const isSelected = selectedResponder?.id === resp.id;
      const isTopMatch = topRecommendation?.responder.id === resp.id;

      // Status indicator color
      let statusColor = "#10b981"; // AVAILABLE = green
      let statusLabel = "AVAILABLE";
      if (resp.status === "BUSY") {
        statusColor = "#f59e0b";
        statusLabel = "BUSY";
      } else if (resp.status === "EN_ROUTE") {
        statusColor = "#06b6d4";
        statusLabel = "EN_ROUTE";
      } else if (resp.status === "ON_SCENE") {
        statusColor = "#a855f7";
        statusLabel = "ON_SCENE";
      } else if (resp.status === "OFFLINE") {
        statusColor = "#64748b";
        statusLabel = "OFFLINE";
      }

      // Type Icon & Color
      let typeBg = "bg-slate-800";
      let typeIconPath =
        '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>'; // Shield

      const typeUpper = (resp.type || "").toUpperCase();
      if (typeUpper.includes("MEDICAL")) {
        typeBg = "bg-red-950/80 border-red-500/50 text-red-300";
        typeIconPath =
          '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 7v6"></path><path d="M9 10h6"></path>';
      } else if (typeUpper.includes("FIRE")) {
        typeBg = "bg-orange-950/80 border-orange-500/50 text-orange-300";
        typeIconPath =
          '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>';
      } else if (typeUpper.includes("SECURITY")) {
        typeBg = "bg-blue-950/80 border-blue-500/50 text-blue-300";
        typeIconPath =
          '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>';
      } else {
        typeBg = "bg-violet-950/80 border-violet-500/50 text-violet-300";
        typeIconPath =
          '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14"></path>';
      }

      // Dynamic distance to selected incident
      let distanceBadge = "";
      if (selectedIncident) {
        const dist = calculateHaversineDistanceKm(
          selectedIncident.latitude,
          selectedIncident.longitude,
          resp.latitude,
          resp.longitude
        );
        distanceBadge = `<span class="text-emerald-400 font-mono text-[9px] font-bold">(${dist} km)</span>`;
      }

      const topMatchGlow = isTopMatch
        ? `<div class="absolute -inset-2.5 rounded-full border-2 border-emerald-400 animate-pulse"></div>`
        : "";

      const respIconHtml = `
        <div class="relative flex flex-col items-center cursor-pointer transition-all duration-200 hover:scale-110">
          ${topMatchGlow}
          <div class="relative flex items-center justify-center w-7 h-7 rounded-xl ${typeBg} border shadow-lg backdrop-blur-md">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              ${typeIconPath}
            </svg>
            <span class="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-slate-900 shadow-sm" style="background-color: ${statusColor}"></span>
          </div>
          <div class="mt-1 whitespace-nowrap bg-slate-900/90 border border-white/10 px-1.5 py-0.5 rounded text-[8px] font-bold text-slate-200 shadow-sm flex items-center gap-1">
            <span>${resp.name.replace("Unit", "U.").replace("Patrol", "P.")}</span>
            ${distanceBadge}
          </div>
        </div>
      `;

      const customRespIcon = L.divIcon({
        html: respIconHtml,
        className: "responder-marker-custom",
        iconSize: [28, 44],
        iconAnchor: [14, 22],
      });

      const marker = L.marker([resp.latitude, resp.longitude], {
        icon: customRespIcon,
        zIndexOffset: isTopMatch ? 900 : isSelected ? 800 : 300,
      });

      marker.on("click", () => {
        onSelectResponder(resp);
      });

      // Interactive Popup for Responder
      const distToInc = selectedIncident
        ? calculateHaversineDistanceKm(
            selectedIncident.latitude,
            selectedIncident.longitude,
            resp.latitude,
            resp.longitude
          )
        : null;

      const etaCalc = distToInc
        ? calculateETA(distToInc, resp.speedKmH)
        : null;

      const isDispatchable =
        selectedIncident &&
        resp.status !== "OFFLINE" &&
        selectedIncident.status !== "RESOLVED" &&
        selectedIncident.status !== "CLOSED";

      const popupContent = document.createElement("div");
      popupContent.className = "p-4 min-w-[240px] text-slate-100";
      popupContent.innerHTML = `
        <div class="flex items-center justify-between gap-2 border-b border-white/10 pb-2 mb-3">
          <div class="font-black text-sm text-white">${resp.name}</div>
          <span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider" style="background-color: ${statusColor}20; color: ${statusColor}; border: 1px solid ${statusColor}40">
            ${statusLabel}
          </span>
        </div>
        <div class="space-y-1.5 text-xs text-slate-300">
          <div class="flex justify-between">
            <span class="text-slate-500 text-[10px] uppercase tracking-wider font-bold">Type</span>
            <span class="font-semibold text-slate-200">${resp.type}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500 text-[10px] uppercase tracking-wider font-bold">Base Speed</span>
            <span class="font-mono text-slate-200">${resp.speedKmH || 30} km/h</span>
          </div>
          ${
            distToInc !== null
              ? `
            <div class="flex justify-between border-t border-white/5 pt-1.5">
              <span class="text-slate-500 text-[10px] uppercase tracking-wider font-bold">Distance</span>
              <span class="font-mono font-bold text-emerald-400">${distToInc} km</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500 text-[10px] uppercase tracking-wider font-bold">Estimated ETA</span>
              <span class="font-mono font-bold text-emerald-400">${etaCalc?.formatted}</span>
            </div>
            `
              : ""
          }
          <div class="mt-2 pt-2 border-t border-white/10">
            <div class="text-[9px] uppercase font-bold text-slate-500 tracking-wider mb-1">Capabilities</div>
            <div class="flex flex-wrap gap-1">
              ${resp.capabilities
                .map(
                  (c) =>
                    `<span class="bg-slate-800 border border-white/5 text-[9px] px-1.5 py-0.5 rounded text-slate-300">${c.name}</span>`
                )
                .join("")}
            </div>
          </div>
        </div>
        ${
          isDispatchable && onDispatch
            ? `
          <button id="btn-dispatch-${resp.id}" class="mt-4 w-full bg-emerald-500 hover:bg-emerald-600 active:scale-98 text-slate-950 font-black text-xs py-2 px-3 rounded-lg transition shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-1.5">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
            Dispatch to ${selectedIncident.title?.slice(0, 15) || "Incident"}
          </button>
          `
            : ""
        }
      `;

      // Attach button listener after popup opens
      marker.bindPopup(popupContent);
      marker.on("popupopen", () => {
        const btn = document.getElementById(`btn-dispatch-${resp.id}`);
        if (btn && onDispatch && selectedIncident) {
          btn.onclick = () => {
            onDispatch(selectedIncident.id, resp.id);
            marker.closePopup();
          };
        }
      });

      marker.addTo(layerGroup);
    });

    // 4. Render Route Polyline between selected Incident and Top/Assigned Responder
    const targetResponder =
      (selectedIncident?.assignedResponderId
        ? responders.find((r) => r.id === selectedIncident.assignedResponderId)
        : null) || topRecommendation?.responder;

    if (selectedIncident && targetResponder) {
      const latlngs: [number, number][] = [
        [selectedIncident.latitude, selectedIncident.longitude],
        [targetResponder.latitude, targetResponder.longitude],
      ];

      const polyline = L.polyline(latlngs, {
        color: "#10b981",
        weight: 3,
        opacity: 0.85,
        dashArray: "8, 10",
      });

      polyline.addTo(layerGroup);

      // Midpoint badge showing distance and ETA
      const midLat = (selectedIncident.latitude + targetResponder.latitude) / 2;
      const midLng = (selectedIncident.longitude + targetResponder.longitude) / 2;

      const dist = calculateHaversineDistanceKm(
        selectedIncident.latitude,
        selectedIncident.longitude,
        targetResponder.latitude,
        targetResponder.longitude
      );
      const eta = calculateETA(dist, targetResponder.speedKmH);

      const routeBadgeHtml = `
        <div class="bg-emerald-950/90 border border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.3)] text-emerald-300 font-mono text-[9px] font-black px-2 py-0.5 rounded-full flex items-center gap-1.5 backdrop-blur-md">
          <span>${dist} km</span>
          <span class="text-emerald-500">•</span>
          <span>~${eta.formatted}</span>
        </div>
      `;

      const routeBadgeIcon = L.divIcon({
        html: routeBadgeHtml,
        className: "route-midpoint-custom",
        iconSize: [110, 20],
        iconAnchor: [55, 10],
      });

      L.marker([midLat, midLng], {
        icon: routeBadgeIcon,
        interactive: false,
      }).addTo(layerGroup);
    }
  }, [
    incidents,
    responders,
    zones,
    selectedIncident,
    selectedResponder,
    topRecommendation,
    showZones,
    onSelectIncident,
    onSelectResponder,
    onDispatch,
  ]);

  // Center on selected incident smoothly
  useEffect(() => {
    if (!mapRef.current || !selectedIncident) return;
    mapRef.current.flyTo(
      [selectedIncident.latitude, selectedIncident.longitude],
      16,
      { duration: 0.8 }
    );
  }, [selectedIncident]);

  // Controls helper functions
  const handleRecenter = () => {
    if (!mapRef.current) return;
    if (selectedIncident) {
      mapRef.current.flyTo(
        [selectedIncident.latitude, selectedIncident.longitude],
        16,
        { duration: 0.8 }
      );
    } else {
      mapRef.current.flyTo([20.2961, 85.8245], 15, { duration: 0.8 });
    }
  };

  const handleFitAll = () => {
    if (!mapRef.current) return;
    const allCoords: [number, number][] = [
      ...incidents.map((i) => [i.latitude, i.longitude] as [number, number]),
      ...responders.map((r) => [r.latitude, r.longitude] as [number, number]),
    ];
    if (allCoords.length > 0) {
      const bounds = L.latLngBounds(allCoords);
      mapRef.current.fitBounds(bounds, { padding: [40, 40] });
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#070d18] shadow-2xl ${className}`}>
      {/* Map Container */}
      <div ref={mapContainerRef} className="h-full w-full" />

      {/* Top Floating Map Controls Bar */}
      <div className="absolute top-4 left-4 right-4 z-[400] pointer-events-none flex items-center justify-between gap-3">
        {/* Map Title Tag */}
        <div className="pointer-events-auto flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[#081220]/90 px-3.5 py-2 shadow-2xl backdrop-blur-xl">
          <div className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
            Geospatial Radar
          </span>
          <span className="text-slate-600">/</span>
          <span className="text-[10px] font-bold text-slate-400">
            {incidents.filter((i) => i.status !== "RESOLVED").length} Active Incidents • {responders.filter((r) => r.status === "AVAILABLE").length} Available Units
          </span>
        </div>

        {/* Layer / Action Toggles */}
        <div className="pointer-events-auto flex items-center gap-1.5 rounded-2xl border border-white/10 bg-[#081220]/90 p-1.5 shadow-2xl backdrop-blur-xl">
          <button
            onClick={() => setShowZones(!showZones)}
            title="Toggle Response Zones"
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[10px] font-bold transition ${
              showZones
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Zones</span>
          </button>

          <button
            onClick={handleRecenter}
            title="Recenter Map"
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition"
          >
            <Crosshair className="w-4 h-4" />
          </button>

          <button
            onClick={handleFitAll}
            title="Fit All Units & Incidents"
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Floating Legend */}
      <div className="absolute bottom-4 left-4 z-[400] pointer-events-auto flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-[#081220]/90 px-3 py-2 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-400">
          <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
          <span>Critical</span>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-400">
          <span className="h-2 w-2 rounded-full bg-orange-500" />
          <span>High/Active</span>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span>Unit Available</span>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-400">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          <span>En Route</span>
        </div>
      </div>
    </div>
  );
}
