import { AutoRefresh } from "@/components/AutoRefresh";

import { PrismaClient } from "@scer/db-geopulse";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Cpu } from "lucide-react";

const prisma = new PrismaClient();
export const dynamic = "force-dynamic";

export default async function GeoPulseDashboard() {
  const resources = await prisma.geoResource.findMany({ include: { capabilities: true } });
  const recommendations = await prisma.geoRecommendation.findMany({ orderBy: { createdAt: "desc" }, take: 5 });

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      <AutoRefresh />
      <header className="flex items-center justify-between px-8 py-4 bg-slate-900 text-slate-50 shadow-sm">
        <div className="flex items-center gap-3">
          <Navigation className="w-6 h-6 text-emerald-400" />
          <h1 className="text-xl font-bold tracking-tight">GeoPulse Engine</h1>
          <Badge variant="secondary" className="ml-2">Location Intelligence & Routing</Badge>
        </div>
      </header>

      <main className="flex-1 p-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
        {/* Left Column: Intelligence Map Placeholder */}
        <div className="md:col-span-2 space-y-6">
          <Card className="h-full min-h-[500px] flex flex-col border-emerald-100">
            <CardHeader className="bg-emerald-50 border-b border-emerald-100">
              <CardTitle className="flex items-center gap-2 text-emerald-800">
                <MapPin className="w-5 h-5" /> Live Capability Map
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-0 relative bg-emerald-50/50">
               <div className="absolute inset-0 flex flex-col items-center justify-center text-emerald-600/50">
                 <Navigation className="w-16 h-16 mb-4 animate-pulse" />
                 <p className="font-medium">GeoPulse Map Engine Active</p>
                 <p className="text-sm">Tracking {resources.length} active resources</p>
               </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Engine Stats */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Cpu className="w-5 h-5 text-emerald-600" /> Matching Engine
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-slate-100 rounded-md">
                <p className="text-sm text-slate-500 mb-1">Available Resources</p>
                <div className="text-2xl font-bold">{resources.length}</div>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-slate-700">Recent Assignments</h4>
                {recommendations.length > 0 ? recommendations.map(rec => (
                   <div key={rec.id} className="flex items-center justify-between p-2 text-sm border-l-2 border-emerald-500 bg-emerald-50">
                     <span>Score: {rec.score}/100</span>
                     <span className="text-xs text-slate-500">{new Date(rec.createdAt).toLocaleTimeString()}</span>
                   </div>
                )) : (
                  <p className="text-sm text-slate-500">No recommendations generated yet.</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Resource Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {resources.map(res => (
                  <li key={res.id} className="text-sm border-b pb-2 last:border-0">
                    <div className="font-medium">{res.name}</div>
                    <div className="flex gap-1 mt-1 flex-wrap">
                      {res.capabilities.map(cap => (
                        <Badge key={cap.id} variant="secondary" className="text-xs">{cap.name}</Badge>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

