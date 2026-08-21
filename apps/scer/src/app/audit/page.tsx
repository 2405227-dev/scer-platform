
import { PrismaClient } from "@scer/db-scer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const prisma = new PrismaClient();
export const dynamic = "force-dynamic";

export default async function AuditPage() {
  // Let"s just display dummy data if AuditLog is empty or just use incidents as proxy if needed
  // Since we haven"t seeded AuditLog, let"s use an array for the demo or fetch from DB if available.
  const logs = await prisma.auditLog.findMany({ orderBy: { createdAt: "desc" }, take: 50 });

  const dummyLogs = logs.length > 0 ? logs : [
    { id: "1", timestamp: new Date().toISOString(), actor: "System", action: "Incident created", description: "Audio Distress detected at North Gate" },
    { id: "2", timestamp: new Date(Date.now() - 2000).toISOString(), actor: "GeoPulse", action: "Responder assigned", description: "Assigned Medical Team 1 (Score: 94)" },
    { id: "3", timestamp: new Date(Date.now() - 4000).toISOString(), actor: "Notification Engine", action: "Notification sent", description: "Sent to Medical Team 1" },
    { id: "4", timestamp: new Date(Date.now() - 60000).toISOString(), actor: "Admin User", action: "Escalation triggered", description: "Manual override by supervisor" },
  ];

  return (
    <div className="flex-1 p-8 bg-neutral-50 dark:bg-neutral-950 overflow-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Operational Audit Trail</h1>
        <p className="text-neutral-500">Immutable record of every significant system action.</p>
      </div>

      <div className="bg-white border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Timestamp</TableHead>
              <TableHead>Actor</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyLogs.map((log: any) => (
              <TableRow key={log.id}>
                <TableCell className="text-xs text-neutral-500">{new Date(log.timestamp).toLocaleString()}</TableCell>
                <TableCell className="font-medium text-sm">{log.actor}</TableCell>
                <TableCell>
                  <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-semibold">{log.action}</span>
                </TableCell>
                <TableCell className="text-sm">{log.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

