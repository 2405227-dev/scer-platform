
import { PrismaClient } from "@scer/db-scer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

export default async function ResourcesPage() {
  const resources = await prisma.resource.findMany({
    orderBy: { name: "asc" }
  });

  return (
    <div className="flex-1 p-8 bg-neutral-50 dark:bg-neutral-950">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Resources</h1>
          <p className="text-neutral-500">Manage physical resources and equipment across the campus.</p>
        </div>
        <Button>Add Resource</Button>
      </div>

      <div className="bg-white border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Added Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resources.map((resource) => (
              <TableRow key={resource.id}>
                <TableCell className="font-medium">{resource.name}</TableCell>
                <TableCell>{resource.type}</TableCell>
                <TableCell className="text-neutral-500">{new Date(resource.createdAt).toLocaleDateString()}</TableCell>
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

