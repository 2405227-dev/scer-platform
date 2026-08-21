
"use client";

import { useState } from "react";
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";

export default function SCERMap({ incidents }: { incidents: any[] }) {
  const [selectedIncident, setSelectedIncident] = useState<any | null>(null);

  // Read API key from environment, fallback to empty string for safety
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  return (
    <div className="h-full w-full">
      <APIProvider apiKey={API_KEY}>
        <Map
          defaultCenter={{ lat: 37.7749, lng: -122.4194 }} // Default to SF or configure via props
          defaultZoom={13}
          mapId="DEMO_MAP_ID"
          internalUsageAttributionIds={["gmp_git_agentskills_v1"]}
        >
          {incidents.map((incident) => {
            // Mocking a coordinate since the current DB uses text location like "North Gate"
            // For the demo, scatter them around the center.
            // In a real app, you would run Geocoding or have lat/lng in DB.
            const mockLat = 37.7749 + (Math.random() - 0.5) * 0.05;
            const mockLng = -122.4194 + (Math.random() - 0.5) * 0.05;

            const isCritical = incident.severity === "CRITICAL";

            return (
              <AdvancedMarker
                key={incident.id}
                position={{ lat: mockLat, lng: mockLng }}
                onClick={() => setSelectedIncident({ ...incident, lat: mockLat, lng: mockLng })}
              >
                <Pin 
                  background={isCritical ? "#ef4444" : "#3b82f6"} 
                  borderColor={isCritical ? "#991b1b" : "#1d4ed8"}
                  glyphColor={"#ffffff"}
                />
              </AdvancedMarker>
            );
          })}

          {selectedIncident && (
            <InfoWindow
              position={{ lat: selectedIncident.lat, lng: selectedIncident.lng }}
              onCloseClick={() => setSelectedIncident(null)}
            >
              <div className="text-slate-900 p-1">
                <div className="font-semibold text-sm">{selectedIncident.type}</div>
                <div className="text-xs text-slate-600 mb-1">{selectedIncident.location}</div>
                <div className="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 w-fit">
                  {selectedIncident.status}
                </div>
              </div>
            </InfoWindow>
          )}
        </Map>
      </APIProvider>
    </div>
  );
}

