import { AutoRefresh } from "@/components/AutoRefresh";

import { PrismaClient } from "@scer/db-notification";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bell, ArrowRight, ShieldAlert, CheckCircle2 } from "lucide-react";

const prisma = new PrismaClient();
export const dynamic = "force-dynamic";

export default async function NotificationDashboard() {
  const notifications = await prisma.notification.findMany({ orderBy: { createdAt: "desc" }, take: 5 });
  const rules = await prisma.notificationRule.findMany();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      <AutoRefresh />
      <header className="flex items-center justify-between px-8 py-4 bg-slate-900 text-slate-50 shadow-sm">
        <div className="flex items-center gap-3">
          <Bell className="w-6 h-6 text-purple-400" />
          <h1 className="text-xl font-bold tracking-tight">Smart Notification Engine</h1>
        </div>
      </header>

      <main className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto w-full">
        {/* Left Column: Notification Rule Builder */}
        <div className="space-y-6">
          <Card className="h-full border-purple-100">
            <CardHeader className="bg-purple-50 border-b border-purple-100">
              <CardTitle className="flex items-center gap-2 text-purple-800">
                <ShieldAlert className="w-5 h-5" /> Notification Rule Builder
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {rules.map((rule) => (
                  <div key={rule.id} className="p-4 border rounded-md shadow-sm bg-white">
                    <div className="flex flex-col gap-2">
                      <div className="text-xs font-semibold text-slate-500 tracking-wider">IF</div>
                      <Badge variant="outline" className="w-fit text-sm">{rule.condition}</Badge>
                      <div className="text-xs font-semibold text-slate-500 tracking-wider">THEN</div>
                      <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-purple-50 p-2 rounded border border-purple-100">
                        <ArrowRight className="w-4 h-4 text-purple-400" />
                        {rule.action}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Notification Log */}
        <div className="space-y-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle2 className="w-5 h-5 text-purple-600" /> Dispatch Log
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {notifications.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center py-8 text-slate-500">No notifications dispatched.</TableCell>
                    </TableRow>
                  ) : notifications.map(notif => (
                    <TableRow key={notif.id}>
                      <TableCell className="text-xs text-slate-500">{new Date(notif.createdAt).toLocaleTimeString()}</TableCell>
                      <TableCell className="font-medium text-sm">{notif.message}</TableCell>
                      <TableCell>
                        <Badge variant="default" className="bg-purple-100 text-purple-700 shadow-none border-none hover:bg-purple-100">
                          {notif.status}
                        </Badge>
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

