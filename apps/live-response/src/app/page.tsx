import { db as prisma } from "@scer/db-scer";
import { LiveResponseClient } from "@/components/LiveResponseClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function LiveResponsePage() {
  let incidents: any[] = [];
  let responders: any[] = [];

  try {
    incidents = await prisma.incident.findMany({
      orderBy: [
        { priority: "desc" },
        { createdAt: "desc" },
      ],
      include: {
        responder: true,
        timeline: {
          orderBy: { createdAt: "desc" },
          take: 5,
        },
        messages: {
          orderBy: { createdAt: "asc" },
        },
      },
    });

    responders = await prisma.responder.findMany({
      orderBy: { name: "asc" },
    });
  } catch (err) {
    console.error("Failed to load initial live response data from db:", err);
  }

  return (
    <LiveResponseClient
      initialIncidents={JSON.parse(JSON.stringify(incidents))}
      initialResponders={JSON.parse(JSON.stringify(responders))}
    />
  );
}
