
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function IncidentActions({ incidentId, currentStatus }: { incidentId: string, currentStatus: string }) {
  const [loading, setLoading] = useState(false);

  const getNextStatus = () => {
    switch (currentStatus) {
      case "ASSIGNED": return "EN_ROUTE";
      case "EN_ROUTE": return "ARRIVED";
      case "ARRIVED": return "RESOLVED";
      default: return null;
    }
  };

  const nextStatus = getNextStatus();
  if (!nextStatus) return null;

  const handleAction = async () => {
    setLoading(true);
    await fetch(`/api/incidents/${incidentId}/status`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: nextStatus })
    });
    setLoading(false);
  };

  return (
    <Button className="w-full mt-4" onClick={handleAction} disabled={loading}>
      {loading ? "Updating..." : `Mark as ${nextStatus.replace("_", " ")}`}
    </Button>
  );
}

