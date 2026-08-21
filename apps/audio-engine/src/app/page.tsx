import { AutoRefresh } from "@/components/AutoRefresh";
import { prisma } from "@/lib/prisma";
import { computeSeverity } from "@/lib/detection-service";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Mic, Activity, Webhook, Settings, Volume2, ShieldAlert, Radio } from "lucide-react";
import { SimulateDetection } from "./SimulateDetection";
import { LiveMicrophoneListener } from "@/components/LiveMicrophoneListener";

export const dynamic = "force-dynamic";

function getSeverityBadge(severity: string) {
  switch (severity) {
    case "CRITICAL":
      return <Badge className="bg-red-500 hover:bg-red-600 text-white border-none font-semibold">CRITICAL</Badge>;
    case "HIGH":
      return <Badge className="bg-orange-500 hover:bg-orange-600 text-white border-none font-semibold">HIGH</Badge>;
    case "MEDIUM":
      return <Badge className="bg-amber-500 hover:bg-amber-600 text-white border-none font-semibold">MEDIUM</Badge>;
    default:
      return <Badge variant="secondary">LOW</Badge>;
  }
}

export default async function AudioEngineDashboard() {
  const events = await prisma.audioDetectionEvent.findMany({
    orderBy: { createdAt: "desc" },
    take: 20,
  });
  const webhooks = await prisma.audioWebhook.findMany();
  const config = await prisma.audioConfiguration.findFirst();
  const keywords = await prisma.audioKeyword.findMany();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      <AutoRefresh interval={3000} />
      <header className="flex items-center justify-between px-8 py-4 bg-slate-900 text-slate-50 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400">
            <Volume2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Audio Distress Detection</h1>
            <p className="text-xs text-slate-400">Autonomous Microphone Surveillance & SCER Dispatch Engine</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium flex items-center gap-2">
            Engine Status: {process.env.GROQ_API_KEY || process.env.GEMINI_API_KEY ? (
              <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white">READY</Badge>
            ) : (
              <Badge className="bg-orange-500 hover:bg-orange-600 text-white border-none">DEGRADED</Badge>
            )}
          </span>
        </div>
      </header>

      <main className="flex-1 p-6 md:p-8 space-y-6 max-w-7xl mx-auto w-full">
        {/* Top Feature: Autonomous Real-Time Live Microphone Listener */}
        <LiveMicrophoneListener keywords={keywords} />

        {/* Bottom Section: Configuration/Simulator & Detection History */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Simulation & Configuration */}
          <div className="space-y-6">
            {/* Fallback Simulator for Manual Testing */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                  <Radio className="w-4 h-4 text-red-500" /> Manual Hardware Simulator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-500 mb-3">
                  Fallback trigger for testing pipeline and database persistence without microphone audio.
                </p>
                <SimulateDetection keywords={keywords} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                  <Settings className="w-4 h-4 text-slate-600" /> Engine Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="font-medium text-slate-700">Privacy Mode</span>
                  <Badge variant="secondary" className="font-normal text-[11px]">No Raw Audio Stored</Badge>
                </div>
                <div className="flex justify-between items-start py-1 border-b border-slate-100">
                  <span className="font-medium text-slate-700">Active Keywords</span>
                  <div className="flex flex-wrap gap-1 justify-end max-w-[60%]">
                    {keywords.map((k) => (
                      <Badge key={k.id} variant="outline" className="text-[11px] bg-slate-50">
                        {k.keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-medium text-slate-700">Pipeline Mode</span>
                  <span className="text-[11px] text-slate-500 font-mono">Live WebSpeech + SQLite</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                  <Webhook className="w-4 h-4 text-indigo-500" /> SCER Dispatch Webhooks
                </CardTitle>
              </CardHeader>
              <CardContent>
                {webhooks.length > 0 ? (
                  <ul className="space-y-2 text-xs text-slate-600 break-all font-mono">
                    {webhooks.map((w) => (
                      <li key={w.id} className="p-2.5 bg-slate-100 rounded-md border border-slate-200 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                        <span>{w.url}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-slate-500">No active webhooks configured.</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Detection History */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="h-full flex flex-col shadow-sm">
              <CardHeader className="pb-3 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-base font-semibold">
                    <Activity className="w-4 h-4 text-blue-600" /> Real-time Detection History
                  </CardTitle>
                  <span className="text-xs text-slate-500">
                    Showing latest {events.length} records
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-50/75 text-xs">
                      <TableHead className="font-semibold text-slate-700">Time</TableHead>
                      <TableHead className="font-semibold text-slate-700">Detected Intent</TableHead>
                      <TableHead className="font-semibold text-slate-700">Type / Lang</TableHead>
                      <TableHead className="font-semibold text-slate-700">Confidence</TableHead>
                      <TableHead className="font-semibold text-slate-700">Severity</TableHead>
                      <TableHead className="font-semibold text-slate-700">Status</TableHead>
                      <TableHead className="font-semibold text-slate-700">Source</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {events.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-12 text-slate-500">
                          <ShieldAlert className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                          <p className="font-medium">No distress events recorded yet</p>
                          <p className="text-xs text-slate-400 mt-1">
                            Start live microphone monitoring or trigger manual simulation
                          </p>
                        </TableCell>
                      </TableRow>
                    )}
                    {events.map((event) => {
                      const severity = computeSeverity(event.keyword, event.confidence);
                      const confidencePercent = (event.confidence * 100).toFixed(1);

                      return (
                        <TableRow key={event.id} className="hover:bg-slate-50/50 text-xs">
                          <TableCell className="text-slate-500 font-mono whitespace-nowrap">
                            {new Date(event.createdAt).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                              second: "2-digit",
                            })}
                          </TableCell>
                          <TableCell className="font-bold text-slate-900">
                            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200" title={event.keyword}>
                              {event.keyword.length > 20 ? event.keyword.substring(0, 20) + "..." : event.keyword}
                            </span>
                          </TableCell>
                          <TableCell className="text-slate-600 font-mono text-[11px]">
                            {event.emergencyType || "DISTRESS"} 
                            {event.language ? ` (${event.language})` : ""}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1.5">
                              {event.confidence > 0 ? (
                                <>
                                  <span className="font-semibold">{confidencePercent}%</span>
                                  <div className="w-12 bg-slate-200 rounded-full h-1.5 hidden sm:block">
                                    <div
                                      className="bg-blue-600 h-1.5 rounded-full"
                                      style={{ width: `${Math.min(100, Math.max(10, Number(confidencePercent)))}%` }}
                                    />
                                  </div>
                                </>
                              ) : (
                                <span className="font-semibold text-slate-500">N/A</span>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>{getSeverityBadge(severity)}</TableCell>
                          <TableCell>
                            <Badge variant="default" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 shadow-none border-emerald-200 border text-[11px]">
                              Dispatched
                            </Badge>
                          </TableCell>
                          <TableCell className="text-slate-500 font-mono text-[11px]">
                            {event.keyword.includes(",") || event.confidence < 0.93 ? "AUDIO_ENGINE_MIC" : "AUDIO_ENGINE"}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
