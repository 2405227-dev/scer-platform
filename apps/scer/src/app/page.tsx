import { IncidentActions } from "@/components/IncidentActions";
import { AutoRefresh } from "@/components/AutoRefresh";
import MapDynamic from "@/components/MapDynamic";

import { PrismaClient } from "@scer/db-scer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { AlertCircle, Clock, MapPin, Activity, ShieldAlert, CheckCircle2 } from "lucide-react";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

export default async function CommandCenter() {
  const incidents = await prisma.incident.findMany({
    orderBy: { createdAt: "desc" }
  });

  const activeIncidents = incidents.filter(i => i.status !== "RESOLVED" && i.status !== "CLOSED").length;
  const criticalIncidents = incidents.filter(i => i.severity === "CRITICAL").length;

  return (
    <div className="flex flex-col h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
      <AutoRefresh />
      

      <div className="grid grid-cols-5 gap-4 px-6 py-4 border-b bg-white dark:bg-neutral-900">
        <MetricCard title="ACTIVE INCIDENTS" value={activeIncidents} icon={<Activity className="w-4 h-4" />} />
        <MetricCard title="RESPONDERS ONLINE" value="18" icon={<ShieldAlert className="w-4 h-4" />} />
        <MetricCard title="UNACKNOWLEDGED" value="2" icon={<AlertCircle className="w-4 h-4" />} textClass="text-red-600" />
        <MetricCard title="AVG RESPONSE" value="4m 12s" icon={<Clock className="w-4 h-4" />} />
        <MetricCard title="CRITICAL" value={criticalIncidents} icon={<ShieldAlert className="w-4 h-4 text-red-600" />} textClass="text-red-600" />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 bg-neutral-200 dark:bg-neutral-800 relative">
          <MapDynamic incidents={incidents} />
        </main>

        <aside className="w-[400px] flex flex-col bg-white dark:bg-neutral-900 border-l">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold tracking-tight">LIVE INCIDENTS</h2>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-4 space-y-4">
              {incidents.map((incident) => (
                <IncidentCard key={incident.id} incident={incident} />
              ))}
            </div>
          </ScrollArea>
        </aside>
      </div>
    </div>
  );
}

function MetricCard({ title, value, icon, textClass = "" }: any) {
  return (
    <Card className="shadow-none border-neutral-200">
      <CardContent className="p-4 flex flex-col gap-1">
        <div className="flex items-center justify-between text-neutral-500 text-xs font-medium">
          {title}
          {icon}
        </div>
        <div className={`text-2xl font-bold tracking-tight ${textClass}`}>{value}</div>
      </CardContent>
    </Card>
  );
}

function IncidentCard({ incident }: any) {
  return (
    <Drawer>
      {/* @ts-expect-error */}
<DrawerTrigger asChild>
        <Card className="cursor-pointer hover:border-neutral-400 transition-colors shadow-sm">
          <CardContent className="p-4 flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div className="flex gap-2 items-center">
                <Badge variant={incident.severity === "CRITICAL" ? "destructive" : "secondary"}>
                  {incident.severity}
                </Badge>
                <span className="text-xs text-neutral-500 font-medium truncate w-20">{incident.id}</span>
              </div>
              <span className="text-xs text-neutral-500">{new Date(incident.createdAt).toLocaleTimeString()}</span>
            </div>
            
            <div>
              <h3 className="font-semibold text-neutral-900">{incident.type}</h3>
              <div className="flex items-center gap-1 text-sm text-neutral-500 mt-1">
                <MapPin className="w-3.5 h-3.5" />
                {incident.location}
              </div>
            </div>

            <Separator />

            <div className="flex justify-between items-center text-sm">
              <div className="flex flex-col">
                <span className="text-xs text-neutral-500">Status</span>
                <span className="font-medium">{incident.status}</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-xs text-neutral-500">ETA</span>
                <span className="font-medium">-</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm p-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold">{incident.type}</h2>
          <Badge variant={incident.severity === "CRITICAL" ? "destructive" : "secondary"} className="w-fit">
            {incident.severity}
          </Badge>
          <div className="text-sm space-y-2">
            <p><strong>Location:</strong> {incident.location}</p>
            <p><strong>Status:</strong> {incident.status}</p>
            <p><strong>Description:</strong> {incident.description}</p>
          </div>
          <Separator />
          <IncidentActions incidentId={incident.id} currentStatus={incident.status} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

