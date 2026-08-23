import { LiveEventInjector } from '@scer/db-scer/src/LiveEventInjector';
import { GeoPulseClient } from "@/components/GeoPulseClient";
import { geoEngine } from "@/lib/geoEngine";

export const dynamic = "force-dynamic";

export default async function GeoPulseDashboard() {
  const initialSnapshot = geoEngine.getSnapshot();

  return (
    <>
      <LiveEventInjector />
      <GeoPulseClient initialSnapshot={initialSnapshot} />
    </>
  );
}
