import { AutoRefresh } from "@/components/AutoRefresh";

import { PrismaClient } from "@scer/db-audio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Mic, Activity, Webhook, Settings, Volume2 } from "lucide-react";
import { SimulateDetection } from "./SimulateDetection";

const prisma = new PrismaClient();
export const dynamic = "force-dynamic";

export default async function AudioEngineDashboard() {
  const events = await prisma.audioDetectionEvent.findMany({
    orderBy: { createdAt: "desc" },
    take: 10
  });
  const webhooks = await prisma.audioWebhook.findMany();
  const config = await prisma.audioConfiguration.findFirst();
  const keywords = await prisma.audioKeyword.findMany();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      <AutoRefresh />
      <header className="flex items-center justify-between px-8 py-4 bg-slate-900 text-slate-50 shadow-sm">
        <div className="flex items-center gap-3">
          <Volume2 className="w-6 h-6 text-blue-400" />
          <h1 className="text-xl font-bold tracking-tight">Audio Distress Engine</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium flex items-center gap-2">
            Status: {config?.isActive ? <Badge className="bg-green-500 hover:bg-green-600">LISTENING</Badge> : <Badge variant="secondary">DISABLED</Badge>}
          </span>
        </div>
      </header>

      <main className="flex-1 p-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
        {/* Left Column: Config & Demo */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Mic className="w-5 h-5" /> Demo Detection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 mb-4">Simulate an audio hardware distress detection event.</p>
              <SimulateDetection keywords={keywords} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Settings className="w-5 h-5" /> Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="font-medium text-slate-700">Privacy Mode</span>
                <Badge variant="secondary">No Raw Audio Stored</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-slate-700">Active Keywords</span>
                <span className="text-slate-500">{keywords.map(k => k.keyword).join(", ")}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Webhook className="w-5 h-5" /> Webhooks
              </CardTitle>
            </CardHeader>
            <CardContent>
              {webhooks.length > 0 ? (
                <ul className="space-y-2 text-sm text-slate-600 break-all">
                  {webhooks.map(w => (
                    <li key={w.id} className="p-2 bg-slate-100 rounded border border-slate-200">{w.url}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-slate-500">No active webhooks.</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column: History */}
        <div className="md:col-span-2 space-y-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Activity className="w-5 h-5" /> Detection History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Keyword</TableHead>
                    <TableHead>Confidence</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {events.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-8 text-slate-500">No events recorded.</TableCell>
                    </TableRow>
                  )}
                  {events.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell className="text-slate-500">{new Date(event.createdAt).toLocaleTimeString()}</TableCell>
                      <TableCell className="font-medium text-slate-900">{event.keyword}</TableCell>
                      <TableCell>{(event.confidence * 100).toFixed(1)}%</TableCell>
                      <TableCell>
                        <Badge variant="default" className="bg-blue-100 text-blue-700 hover:bg-blue-100 shadow-none border-none">Dispatched</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

