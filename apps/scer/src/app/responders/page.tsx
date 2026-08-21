
import { PrismaClient } from "@scer/db-scer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

export default async function RespondersPage() {
  const responders = await prisma.responder.findMany({
    orderBy: { name: "asc" }
  });

  return (
    <div className="flex-1 p-8 bg-neutral-50 dark:bg-neutral-950">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Responders</h1>
          <p className="text-neutral-500">Manage and view status of all emergency responders.</p>
        </div>
        <Button>Add Responder</Button>
      </div>

      <div className="bg-white border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {responders.map((responder) => (
              <TableRow key={responder.id}>
                <TableCell className="font-medium">{responder.name}</TableCell>
                <TableCell>
                  <Badge variant={responder.status === "AVAILABLE" ? "default" : "secondary"}>
                    {responder.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-neutral-500">{new Date(responder.createdAt).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

