
import { NextResponse } from "next/server";
import { db as prisma } from "@scer/db-notification";

export async function POST(req: Request) {
  try {
    const { eventType, severity, recipient, message } = await req.json();

    // The Engine runs its internal logic and stores the notification
    const notification = await prisma.notification.create({
      data: {
        message: `To ${recipient}: ${message} [${severity}]`,
        status: "DELIVERED",
        recipientEmail: recipient,
        severity: severity
      }
    });

    return NextResponse.json({ success: true, notificationId: notification.id, status: "DELIVERED" });
  } catch (error: any) {
    return NextResponse.json({ error: "Failed to dispatch", details: error?.message || String(error) }, { status: 500 });
  }
}

