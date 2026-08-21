
import { NextResponse } from "next/server";
import { PrismaClient } from "@scer/db-scer";
const prisma = new PrismaClient();

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const { status } = await req.json();
    const incident = await prisma.incident.update({
      where: { id: resolvedParams.id },
      data: { status }
    });
    
    // Add audit log
    await prisma.auditLog.create({
      data: {
        actor: "System / Responder",
        action: "Status Updated",
        description: `Incident status changed to ${status}`,
      }
    });

    return NextResponse.json({ success: true, incident });
  } catch (error) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

