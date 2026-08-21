
import { PrismaClient } from "@scer/db-scer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

export default async function IncidentsPage() {
  const incidents = await prisma.incident.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="flex-1 p-8 bg-neutral-50 dark:bg-neutral-950 overflow-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Incident Management</h1>
          <p className="text-neutral-500">View and manage all historical and active incidents.</p>
        </div>
        <Button>Report Incident</Button>
      </div>

      <div className="bg-white border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Time</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {incidents.map((incident) => (
              <TableRow key={incident.id}>
                <TableCell className="font-medium text-xs text-neutral-500">{incident.id}</TableCell>
                <TableCell className="font-medium">{incident.type}</TableCell>
                <TableCell>
                  <Badge variant={incident.severity === "CRITICAL" ? "destructive" : "secondary"}>
                    {incident.severity}
                  </Badge>
                </TableCell>
                <TableCell>{incident.status}</TableCell>
                <TableCell>{incident.location}</TableCell>
                <TableCell className="text-neutral-500">{new Date(incident.createdAt).toLocaleString()}</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

