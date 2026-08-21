"use client";

import React, { useState } from "react";
import { AlertCircle, Flame, MapPin, Plus, Shield, Siren, Stethoscope, X } from "lucide-react";

interface CreateIncidentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onIncidentCreated: (newIncident: any) => void;
}

export default function CreateIncidentModal({
  isOpen,
  onClose,
  onIncidentCreated,
}: CreateIncidentModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState("Acute Cardiac Distress & Collapse");
  const [type, setType] = useState("MEDICAL_EMERGENCY");
  const [severity, setSeverity] = useState("CRITICAL");
  const [location, setLocation] = useState("Campus 6 - Health Sciences Building Room 204");
  const [latitude, setLatitude] = useState("20.2968");
  const [longitude, setLongitude] = useState("85.8242");
  const [requiredCapability, setRequiredCapability] = useState("MEDICAL");
  const [description, setDescription] = useState(
    "Student suddenly collapsed during laboratory seminar. Breathing shallow, pulse rapid. ALS and automated defibrillator required immediately."
  );

  if (!isOpen) return null;

  const presets = [
    {
      label: "Critical Medical",
      title: "Acute Cardiac Distress & Collapse",
      type: "MEDICAL_EMERGENCY",
      severity: "CRITICAL",
      location: "Campus 6 - Health Sciences Building Room 204",
      lat: 20.2968,
      lng: 85.8242,
      capability: "MEDICAL",
      desc: "Student collapsed with shallow breathing and rapid pulse. ALS medical unit needed immediately.",
    },
    {
      label: "Chemical Fire",
      title: "Solvent Spill & Flash Fire",
      type: "FIRE_HAZARD",
      severity: "HIGH",
      location: "Chemistry Annex Warehouse B",
      lat: 20.2990,
      lng: 85.8265,
      capability: "FIRE",
      desc: "Combustible solvent ignited in chemical storage locker. Containment and suppression required.",
    },
    {
      label: "Perimeter Breach",
      title: "Unauthorized Vehicle & Checkpoint Breach",
      type: "SECURITY_BREACH",
      severity: "MEDIUM",
      location: "North Gate Entrance Gate 4",
      lat: 20.2982,
      lng: 85.8205,
      capability: "SECURITY",
      desc: "Driver bypassed access barrier without visitor authorization. Intercept requested.",
    },
  ];

  const applyPreset = (p: typeof presets[0]) => {
    setTitle(p.title);
    setType(p.type);
    setSeverity(p.severity);
    setLocation(p.location);
    setLatitude(p.lat.toString());
    setLongitude(p.lng.toString());
    setRequiredCapability(p.capability);
    setDescription(p.desc);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const latNum = parseFloat(latitude);
    const lngNum = parseFloat(longitude);

    if (isNaN(latNum) || isNaN(lngNum)) {
      setError("Please provide valid numerical coordinates for Latitude and Longitude.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/geopulse/incidents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          type,
          severity,
          location,
          latitude: latNum,
          longitude: lngNum,
          requiredCapability,
          description,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to create incident");
      }

      const created = await res.json();
      onIncidentCreated(created);
      onClose();
    } catch (err: any) {
      setError(err.message || "Failed to submit incident.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/10 bg-[#081220] shadow-2xl text-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 bg-[#091526]">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
              <Siren className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-black tracking-tight text-white">
                Log New Emergency Incident
              </h2>
              <p className="text-xs text-slate-400">
                Instantly feeds into GeoPulse geospatial dispatch engine
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-white/5 hover:text-white transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Presets */}
        <div className="px-6 pt-4 flex items-center gap-2 overflow-x-auto">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">
            Presets:
          </span>
          {presets.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => applyPreset(p)}
              className="text-[11px] font-bold px-3 py-1 rounded-lg bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-300 border border-white/10 transition"
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-300 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                Incident Title
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                Location Name
              </label>
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                Severity
              </label>
              <select
                value={severity}
                onChange={(e) => setSeverity(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#0c192c] px-3 py-2 text-xs font-bold text-white focus:border-emerald-500 focus:outline-none"
              >
                <option value="CRITICAL">CRITICAL</option>
                <option value="HIGH">HIGH</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="LOW">LOW</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                Category Type
              </label>
              <select
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                  if (e.target.value.includes("MED")) setRequiredCapability("MEDICAL");
                  else if (e.target.value.includes("FIRE")) setRequiredCapability("FIRE");
                  else if (e.target.value.includes("SEC")) setRequiredCapability("SECURITY");
                }}
                className="w-full rounded-xl border border-white/10 bg-[#0c192c] px-3 py-2 text-xs font-bold text-white focus:border-emerald-500 focus:outline-none"
              >
                <option value="MEDICAL_EMERGENCY">Medical Emergency</option>
                <option value="FIRE_HAZARD">Fire Hazard / Chem</option>
                <option value="SECURITY_BREACH">Security Breach</option>
                <option value="STRUCTURAL_HAZARD">Structural Hazard</option>
                <option value="GENERAL_EMERGENCY">General Emergency</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                Required Capability
              </label>
              <select
                value={requiredCapability}
                onChange={(e) => setRequiredCapability(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#0c192c] px-3 py-2 text-xs font-bold text-white focus:border-emerald-500 focus:outline-none"
              >
                <option value="MEDICAL">Medical (ALS / First Aid)</option>
                <option value="FIRE">Fire & Hazmat</option>
                <option value="SECURITY">Tactical Security</option>
                <option value="GENERAL">General Support</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                Latitude (GPS)
              </label>
              <input
                type="text"
                required
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                Longitude (GPS)
              </label>
              <input
                type="text"
                required
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
              Description & Clinical / Threat Notes
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-slate-200 focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-white/10 text-xs font-bold text-slate-300 hover:bg-white/5 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-98 text-slate-950 font-black text-xs transition shadow-lg shadow-emerald-500/20 disabled:opacity-50 flex items-center gap-2"
            >
              {loading ? "Registering..." : "Submit to GeoPulse"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
