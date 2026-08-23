"use client";

import { useMemo, useRef, useState } from "react";
import {
  FLOOR_CORRIDORS,
  FLOOR_WINGS,
  CAMPUS_FLOORS,
  noteForFloor,
  spacesForFloor,
  type FloorId,
  type FloorSpace,
  type SpaceKind,
} from "@/data/floorplan";
import {
  Layers,
  MapPin,
  ShieldAlert,
  Flame,
  UserCheck,
  Compass,
  Maximize2,
  Navigation,
  Info,
  Activity,
  Radio,
  ArrowRight,
  Shield,
  Siren,
  CheckCircle2,
} from "lucide-react";

const PLAN_SIZE = 100;
const WALL_DEPTH = 2.0;

const KIND_STYLE: Record<SpaceKind, { fill: string; stroke: string; label: string; badge: string }> = {
  room: { fill: "rgba(30, 41, 59, 0.9)", stroke: "#475569", label: "Classrooms & Labs", badge: "bg-slate-700/50 text-slate-300" },
  lecture: { fill: "rgba(167, 139, 250, 0.22)", stroke: "rgba(167, 139, 250, 0.7)", label: "Lecture Theatres", badge: "bg-purple-500/20 text-purple-300" },
  office: { fill: "rgba(56, 189, 248, 0.2)", stroke: "rgba(56, 189, 248, 0.6)", label: "Chambers & Offices", badge: "bg-sky-500/20 text-sky-300" },
  lift: { fill: "rgba(234, 179, 8, 0.25)", stroke: "rgba(234, 179, 8, 0.8)", label: "Elevators / Lifts", badge: "bg-amber-500/20 text-amber-300" },
  stairs: { fill: "rgba(249, 115, 22, 0.28)", stroke: "rgba(249, 115, 22, 0.85)", label: "Fire & Exit Stairs", badge: "bg-orange-500/20 text-orange-300" },
  washroom: { fill: "rgba(100, 116, 139, 0.3)", stroke: "rgba(100, 116, 139, 0.7)", label: "Restrooms", badge: "bg-slate-600/30 text-slate-300" },
  amenity: { fill: "rgba(16, 185, 129, 0.25)", stroke: "rgba(16, 185, 129, 0.75)", label: "Amenities & Commons", badge: "bg-emerald-500/20 text-emerald-300" },
  corridor: { fill: "rgba(15, 23, 42, 0.75)", stroke: "#334155", label: "Main Spine Corridor", badge: "bg-slate-800 text-slate-400" },
};

export interface FloorSelection {
  space: FloorSpace;
  floor: FloorId;
  label: string;
}

export interface ActiveIndoorIncident {
  id: string;
  roomId: string;
  floor: FloorId;
  type: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM";
  victimName: string;
  timestamp: string;
  description: string;
  assignedResponder?: string;
  eta?: string;
}

const DEFAULT_INDOOR_INCIDENTS: ActiveIndoorIncident[] = [
  {
    id: "inc-room-206",
    roomId: "B 206",
    floor: 2,
    type: "Medical Distress (Asthma/Trauma)",
    severity: "CRITICAL",
    victimName: "Sarah Jenkins (Student ID #4092)",
    timestamp: "2 mins ago",
    description: "Voice beacon detected in Systems Lab B 206. Subject collapsed near workbench 4.",
    assignedResponder: "Paramedics Squad Alpha",
    eta: "~90 sec (Entering North Gate Lift 10)",
  },
  {
    id: "inc-room-203",
    roomId: "C 203",
    floor: 2,
    type: "Electrical Smoke / Fire Alarm",
    severity: "HIGH",
    victimName: "Facility Automated Sensor",
    timestamp: "4 mins ago",
    description: "Thermal ionization sensor triggered in Society Office C 203.",
    assignedResponder: "Campus Fire Marshall Quick Unit",
    eta: "~2 mins (Ascending Stairs C)",
  },
  {
    id: "inc-room-101",
    roomId: "A 101",
    floor: 1,
    type: "Security Access Breach",
    severity: "MEDIUM",
    victimName: "Security Sensor Sentry",
    timestamp: "8 mins ago",
    description: "Unauthorized doorway tamper in Ground Wing A.",
    assignedResponder: "Campus Patrol Unit 3",
    eta: "On Scene",
  },
];

export function FloorPlan3D({ className = "" }: { className?: string }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [floor, setFloor] = useState<FloorId>(2);
  const [wing, setWing] = useState<"A" | "B" | "C" | null>(null);
  const [selectedSpace, setSelectedSpace] = useState<FloorSpace | null>(null);
  const [hovered, setHovered] = useState<FloorSpace | null>(null);
  const [incidents, setIncidents] = useState<ActiveIndoorIncident[]>(DEFAULT_INDOOR_INCIDENTS);
  const [selectedIncident, setSelectedIncident] = useState<ActiveIndoorIncident | null>(DEFAULT_INDOOR_INCIDENTS[0]);

  // Orbit rotation values (CSS 3D perspective)
  const [rotateX, setRotateX] = useState(40);
  const [rotateZ, setRotateZ] = useState(-20);
  const [zoomLevel, setZoomLevel] = useState(1.15);
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });

  const spaces = useMemo(() => {
    const list = spacesForFloor(floor);
    return wing ? list.filter((s) => s.wing === wing) : list;
  }, [floor, wing]);

  const activeIncidentsForFloor = useMemo(() => {
    return incidents.filter((inc) => inc.floor === floor);
  }, [incidents, floor]);

  const activeRoomIds = useMemo(() => {
    return new Set(activeIncidentsForFloor.map((i) => i.roomId));
  }, [activeIncidentsForFloor]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMousePosRef.current.x;
    const dy = e.clientY - lastMousePosRef.current.y;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };

    setRotateZ((prev) => prev + dx * 0.25);
    setRotateX((prev) => Math.min(65, Math.max(15, prev - dy * 0.25)));
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handleSelectSpace = (space: FloorSpace) => {
    setSelectedSpace(space);
    const linkedIncident = incidents.find((i) => i.roomId === space.id && i.floor === floor);
    if (linkedIncident) {
      setSelectedIncident(linkedIncident);
    }
  };

  return (
    <div className={`flex flex-col lg:flex-row gap-6 w-full ${className}`}>
      {/* 3D BUILDING CANVAS CONTAINER */}
      <div className="flex-1 rounded-3xl border border-white/[0.1] bg-gradient-to-br from-[#060c18] via-[#040810] to-[#020408] p-5 shadow-2xl backdrop-blur-2xl flex flex-col relative overflow-hidden min-h-[580px]">
        {/* TOP TOOLBAR: FLOOR TABS & WING FILTERS */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4 mb-3 z-30">
          <div className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 shadow-inner">
              <Layers className="h-5 w-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-base font-black text-white">Campus 25 · 3D Indoor Incident Model</h2>
                <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 text-[9px] font-black text-emerald-300 uppercase">
                  Surveyed Precision
                </span>
              </div>
              <p className="text-[10.5px] text-slate-400">
                Exact room-level building extrusions for emergency police & medical responders
              </p>
            </div>
          </div>

          {/* FLOOR SELECTOR BUTTONS */}
          <div className="flex items-center gap-1.5 rounded-2xl border border-white/[0.08] bg-black/40 p-1">
            {CAMPUS_FLOORS.map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  setFloor(f.id);
                  setSelectedSpace(null);
                }}
                className={`rounded-xl px-3 py-1.5 text-xs font-black transition cursor-pointer flex items-center gap-1.5 ${
                  floor === f.id
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/40"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <span>Level {f.id}</span>
                {incidents.some((i) => i.floor === f.id) && (
                  <span className="h-2 w-2 rounded-full bg-red-400 animate-ping" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* SUB-BAR: WING FILTER & ORBIT CONTROLS */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs z-20 mb-2">
          {/* WING TOGGLE */}
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider mr-1">Filter Wing:</span>
            <button
              onClick={() => setWing(null)}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
                wing === null
                  ? "bg-white/[0.12] text-white border border-white/[0.2]"
                  : "text-slate-400 hover:text-white bg-white/[0.02]"
              }`}
            >
              All Wings
            </button>
            {FLOOR_WINGS.map((w) => (
              <button
                key={w.id}
                onClick={() => setWing(w.id)}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
                  wing === w.id
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm"
                    : "text-slate-400 hover:text-white bg-white/[0.02]"
                }`}
              >
                {w.label}
              </button>
            ))}
          </div>

          {/* VIEW CONTROLS */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setRotateX(40);
                setRotateZ(-20);
                setZoomLevel(1.15);
              }}
              title="Reset View Orientation"
              className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[10px] font-bold text-slate-300 hover:text-white hover:bg-white/[0.08] transition cursor-pointer"
            >
              <Compass className="h-3.5 w-3.5 text-purple-400" />
              <span>Reset 3D Orbit</span>
            </button>
            <div className="flex items-center rounded-lg border border-white/[0.08] bg-black/40 p-0.5">
              <button
                onClick={() => setZoomLevel((z) => Math.min(2.0, z + 0.15))}
                className="px-2 py-0.5 text-slate-400 hover:text-white font-bold cursor-pointer"
              >
                +
              </button>
              <span className="text-[10px] text-slate-500 px-1 font-mono">{Math.round(zoomLevel * 100)}%</span>
              <button
                onClick={() => setZoomLevel((z) => Math.max(0.7, z - 0.15))}
                className="px-2 py-0.5 text-slate-400 hover:text-white font-bold cursor-pointer"
              >
                -
              </button>
            </div>
          </div>
        </div>

        {/* 3D INTERACTIVE SVG PERSPECTIVE VIEWPORT */}
        <div
          ref={frameRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="flex-1 w-full flex items-center justify-center relative select-none cursor-grab active:cursor-grabbing overflow-hidden"
          style={{ perspective: 1200 }}
        >
          {/* BACKGROUND AMBIENT GLOW */}
          <div className="absolute h-96 w-96 rounded-full bg-gradient-to-tr from-purple-600/10 via-sky-500/10 to-transparent blur-3xl pointer-events-none" />

          {/* 3D TRANSFORMED SCENE */}
          <div
            style={{
              transform: `rotateX(${rotateX}deg) rotateZ(${rotateZ}deg) scale(${zoomLevel})`,
              transformStyle: "preserve-3d",
              transition: isDraggingRef.current ? "none" : "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className="w-[500px] h-[500px] max-w-[90vw] max-h-[90vw] relative"
          >
            <svg
              viewBox={`-5 -5 ${PLAN_SIZE + 10} ${PLAN_SIZE + 10}`}
              className="w-full h-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)]"
            >
              {/* GROUND FOUNDATION SLAB */}
              <rect
                x={-2}
                y={-2}
                width={PLAN_SIZE + 4}
                height={PLAN_SIZE + 4}
                rx={4}
                fill="rgba(6, 10, 20, 0.95)"
                stroke="rgba(167, 139, 250, 0.25)"
                strokeWidth={0.5}
              />

              {/* GRID GUIDE LINES */}
              {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((pos) => (
                <g key={pos} opacity={0.06} stroke="#38bdf8" strokeWidth={0.2}>
                  <line x1={pos} y1={0} x2={pos} y2={PLAN_SIZE} />
                  <line x1={0} y1={pos} x2={PLAN_SIZE} y2={pos} />
                </g>
              ))}

              {/* CIRCULATION CORRIDORS */}
              {FLOOR_CORRIDORS.map((corridor) => (
                <rect
                  key={corridor.id}
                  x={corridor.x}
                  y={corridor.y}
                  width={corridor.w}
                  height={corridor.h}
                  fill="rgba(167, 139, 250, 0.12)"
                  stroke="rgba(167, 139, 250, 0.35)"
                  strokeWidth={0.2}
                />
              ))}

              {/* ROOMS & SPACES WITH 3D EXTRUDED FACES */}
              {spaces.map((space) => {
                const isSelected = selectedSpace?.id === space.id;
                const hasIncident = activeRoomIds.has(space.id);
                const isHovered = hovered?.id === space.id;
                const style = KIND_STYLE[space.kind];
                const lift = isSelected ? WALL_DEPTH * 2.6 : hasIncident ? WALL_DEPTH * 2.2 : WALL_DEPTH;

                const fillColor = hasIncident
                  ? "rgba(239, 68, 68, 0.55)"
                  : isSelected
                  ? "rgba(167, 139, 250, 0.6)"
                  : isHovered
                  ? "rgba(56, 189, 248, 0.45)"
                  : style.fill;

                const strokeColor = hasIncident
                  ? "#ef4444"
                  : isSelected
                  ? "#c084fc"
                  : isHovered
                  ? "#38bdf8"
                  : style.stroke;

                return (
                  <g
                    key={space.id}
                    onClick={() => handleSelectSpace(space)}
                    onPointerEnter={() => setHovered(space)}
                    onPointerLeave={() => setHovered(null)}
                    className="cursor-pointer transition-all duration-150"
                  >
                    {/* SIDE WALL EXTRUSIONS */}
                    <polygon
                      points={`${space.x},${space.y + space.h} ${space.x + space.w},${space.y + space.h} ${
                        space.x + space.w
                      },${space.y + space.h + lift} ${space.x},${space.y + space.h + lift}`}
                      fill={hasIncident ? "rgba(153, 27, 27, 0.9)" : "rgba(2, 6, 16, 0.85)"}
                    />
                    <polygon
                      points={`${space.x + space.w},${space.y} ${space.x + space.w + lift * 0.4},${
                        space.y + lift * 0.4
                      } ${space.x + space.w + lift * 0.4},${space.y + space.h + lift * 0.4} ${space.x + space.w},${
                        space.y + space.h
                      }`}
                      fill={hasIncident ? "rgba(127, 29, 29, 0.75)" : "rgba(2, 6, 16, 0.65)"}
                    />

                    {/* TOP ROOM FACE */}
                    <rect
                      x={space.x}
                      y={space.y}
                      width={space.w}
                      height={space.h}
                      rx={0.6}
                      fill={fillColor}
                      stroke={strokeColor}
                      strokeWidth={isSelected || hasIncident ? 0.6 : 0.28}
                    />

                    {/* ACTIVE INCIDENT PULSING BEACON */}
                    {hasIncident && (
                      <g transform={`translate(${space.x + space.w / 2}, ${space.y + space.h / 2})`}>
                        <circle r={3.2} fill="#ef4444" opacity={0.3} className="animate-ping" />
                        <circle r={1.6} fill="#ef4444" stroke="#ffffff" strokeWidth={0.4} />
                      </g>
                    )}

                    {/* LABELS FOR LARGER ROOMS */}
                    {space.w >= 6 && space.h >= 5 && (
                      <text
                        x={space.x + space.w / 2}
                        y={space.y + space.h / 2 + 0.8}
                        textAnchor="middle"
                        fontSize={1.7}
                        fontWeight="bold"
                        fill={hasIncident ? "#ffffff" : isSelected ? "#f8fafc" : "#94a3b8"}
                        pointerEvents="none"
                      >
                        {space.label}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* HOVER TOOLTIP FLOATER */}
          {hovered && (
            <div className="absolute bottom-4 left-4 z-40 rounded-2xl border border-white/[0.1] bg-[#0c1527]/95 px-3.5 py-2 shadow-2xl backdrop-blur-xl pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-black text-white">{hovered.id}</span>
                <span className="text-[10px] text-purple-300 font-bold">
                  {KIND_STYLE[hovered.kind].label}
                </span>
                {activeRoomIds.has(hovered.id) && (
                  <span className="rounded bg-red-500/20 px-1.5 py-0.2 text-[8px] font-black text-red-300">
                    DISTRESS ACTIVE
                  </span>
                )}
              </div>
              {hovered.note && <div className="text-[9.5px] text-slate-400 mt-0.5">{hovered.note}</div>}
            </div>
          )}
        </div>

        {/* BOTTOM QUICK LEGEND */}
        <div className="mt-2 pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between text-[10px] text-slate-400 gap-2 z-20">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-purple-500/30 border border-purple-500/70" />
              <span>Lecture Theatres</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-sky-500/30 border border-sky-500/70" />
              <span>Offices & Chambers</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-amber-500/30 border border-amber-500/70" />
              <span>Lifts & Elevators</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-orange-500/30 border border-orange-500/70" />
              <span>Fire Escape Stairs</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
              <span className="font-bold text-red-400">Live Incident Marker</span>
            </span>
          </div>

          <div className="font-mono text-slate-500">
            Drag mouse to rotate 3D view • Click room to pinpoint
          </div>
        </div>
      </div>

      {/* ─── RIGHT PANEL: INDOOR INCIDENT DISPATCH & ROOM NAVIGATION ─── */}
      <div className="w-full lg:w-96 flex flex-col gap-4">
        {/* ACTIVE INDOOR INCIDENTS CARD */}
        <div className="rounded-3xl border border-red-500/40 bg-gradient-to-br from-red-950/40 via-[#10080c]/90 to-[#060810] p-5 shadow-2xl backdrop-blur-2xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-ping" />
              <h3 className="text-xs font-black uppercase tracking-wider text-red-400">
                Indoor Emergency Pinpoint
              </h3>
            </div>
            <span className="rounded-full bg-red-500/20 px-2.5 py-0.5 text-[9px] font-black text-red-300">
              {incidents.length} Active
            </span>
          </div>

          {/* INCIDENT SELECTOR TILES */}
          <div className="space-y-2">
            {incidents.map((inc) => (
              <div
                key={inc.id}
                onClick={() => {
                  setSelectedIncident(inc);
                  setFloor(inc.floor);
                  const s = spacesForFloor(inc.floor).find((sp) => sp.id === inc.roomId);
                  if (s) setSelectedSpace(s);
                }}
                className={`p-3 rounded-2xl border transition cursor-pointer ${
                  selectedIncident?.id === inc.id
                    ? "border-red-500/80 bg-red-500/20 shadow-lg shadow-red-500/20"
                    : "border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="font-mono text-xs font-black text-white">
                    📍 {inc.roomId} (Level {inc.floor})
                  </span>
                  <span className="text-[8px] font-black uppercase bg-red-500/30 text-red-200 px-1.5 py-0.2 rounded">
                    {inc.severity}
                  </span>
                </div>
                <div className="text-[11px] font-bold text-slate-200 mt-1 truncate">{inc.type}</div>
                <div className="text-[9.5px] text-slate-400 mt-0.5 truncate">{inc.victimName}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SELECTED ROOM TACTICAL DISPATCH GUIDANCE */}
        <div className="rounded-3xl border border-white/[0.1] bg-[#070e1c]/90 p-5 shadow-2xl backdrop-blur-2xl space-y-3.5 flex-1">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <div className="flex items-center gap-2">
              <Navigation className="h-4 w-4 text-purple-400" />
              <h3 className="text-xs font-black uppercase tracking-wider text-white">
                Turn-by-Turn Responder Route
              </h3>
            </div>
            {selectedSpace && (
              <span className="font-mono text-xs font-black text-purple-300">
                {selectedSpace.id}
              </span>
            )}
          </div>

          {selectedSpace ? (
            <div className="space-y-3">
              {/* ROOM IDENTITY */}
              <div className="rounded-2xl bg-black/40 p-3.5 border border-white/[0.06] space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Target Location:</span>
                  <strong className="text-white">Campus 25 · Floor {floor} · {selectedSpace.id}</strong>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Wing Classification:</span>
                  <span className="text-purple-300 font-bold">{selectedSpace.wing} Block Wing</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Space Type:</span>
                  <span className="text-slate-300 font-mono">{KIND_STYLE[selectedSpace.kind].label}</span>
                </div>
                {selectedSpace.note && (
                  <div className="text-[10.5px] text-slate-400 italic pt-1 border-t border-white/[0.04]">
                    "{selectedSpace.note}"
                  </div>
                )}
              </div>

              {/* INDOOR POLICE & FIRE ROUTING DIRECTIONS */}
              <div className="space-y-2">
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  Optimal Entry & Ingress Route:
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] p-2.5">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-purple-500/20 text-[10px] font-black text-purple-300 shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <div className="font-bold text-white">Campus Perimeter Entry</div>
                      <div className="text-[10.5px] text-slate-400">
                        Enter via {selectedSpace.wing === "B" ? "North Main Gate" : selectedSpace.wing === "A" ? "South Gate 2" : "East Academic Hub"}.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] p-2.5">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-purple-500/20 text-[10px] font-black text-purple-300 shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <div className="font-bold text-white">Vertical Ascent Path</div>
                      <div className="text-[10.5px] text-slate-400">
                        Ascend to Level {floor} via{" "}
                        <strong className="text-amber-300">
                          {selectedSpace.wing === "B" ? "Lift 10 / Stairs B-W" : selectedSpace.wing === "A" ? "Stairs A-W" : "Lift 16 / Stairs C"}
                        </strong>.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] p-2.5">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-purple-500/20 text-[10px] font-black text-purple-300 shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <div className="font-bold text-white">Direct Door Coordinates</div>
                      <div className="text-[10.5px] text-slate-400">
                        Follow {selectedSpace.wing}-Spine corridor ~{Math.round(selectedSpace.x)}m to Door{" "}
                        <strong className="text-emerald-300">{selectedSpace.id}</strong>.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DISPATCH ACTION BUTTON */}
              <button
                onClick={() => {
                  alert(`Tactical dispatch sent to ${selectedSpace.id} (Level ${floor})! Police & Medical units notified.`);
                }}
                className="w-full rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 py-3 text-xs font-black uppercase tracking-wider text-white shadow-xl shadow-red-600/30 hover:scale-[1.02] active:scale-95 transition cursor-pointer flex items-center justify-center gap-2"
              >
                <Siren className="h-4 w-4" />
                <span>Dispatch Responders to {selectedSpace.id}</span>
              </button>
            </div>
          ) : (
            <div className="py-12 text-center text-xs text-slate-500 space-y-2">
              <MapPin className="h-8 w-8 text-slate-600 mx-auto" />
              <p>Click any room or corridor on the 3D model to generate direct indoor responder navigation.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
