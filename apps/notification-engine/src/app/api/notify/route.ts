
import { NextResponse } from "next/server";
import { PrismaClient } from "@scer/db-notification";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { eventType, severity, recipient, message } = await req.json();

    // The Engine runs its internal logic and stores the notification
    const notification = await prisma.notification.create({
      data: {
        message: `To ${recipient}: ${message} [${severity}]`,
        status: "DELIVERED"
      }
    });

    return NextResponse.json({ success: true, notificationId: notification.id, status: "DELIVERED" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to dispatch" }, { status: 500 });
  }
}

