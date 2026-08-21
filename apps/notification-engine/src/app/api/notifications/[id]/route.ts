import { NextResponse } from "next/server";
import { PrismaClient } from "@scer/db-notification";

const prisma = new PrismaClient();

// PATCH /api/notifications/[id]
// Mark a single notification as read
export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { userId } = body;

    if (!userId) {
      return NextResponse.json({ error: "userId is required" }, { status: 400 });
    }

    const updateResult = await prisma.notification.updateMany({
      where: { id, userId },
      data: { isRead: true },
    });

    if (updateResult.count === 0) {
      return NextResponse.json({ error: "Notification not found or unauthorized" }, { status: 404 });
    }

    const notification = await prisma.notification.findUnique({ where: { id } });
    return NextResponse.json({ success: true, notification });
  } catch (error: any) {
    console.error("PATCH /api/notifications/[id] error:", error);
    return NextResponse.json({ error: "Failed to update notification", details: error.message }, { status: 500 });
  }
}

// DELETE /api/notifications/[id]
// Delete a specific notification
export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    
    // We can also require userId for DELETE if ownership validation is needed.
    const body = await req.json().catch(() => ({})); 
    const { userId } = body;

    if (!userId) {
      return NextResponse.json({ error: "userId is required" }, { status: 400 });
    }

    const deleteResult = await prisma.notification.deleteMany({
      where: { id, userId },
    });

    if (deleteResult.count === 0) {
      return NextResponse.json({ error: "Notification not found or unauthorized" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Notification deleted" });
  } catch (error: unknown) {
    console.error("DELETE /api/notifications/[id] error:", error);
    return NextResponse.json({ error: "Failed to delete notification" }, { status: 500 });
  }
}
