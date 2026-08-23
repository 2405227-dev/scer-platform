import { NextResponse } from "next/server";
import { db as prisma, publish } from "@scer/db-scer";
import { sendTelegramMessage } from "@/lib/telegram";
import { handleCorsOptions, jsonWithCors } from "@/lib/cors";

export async function OPTIONS() {
  return handleCorsOptions();
}

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const messages = await prisma.incidentMessage.findMany({
      where: { incidentId: resolvedParams.id },
      orderBy: { createdAt: "asc" },
    });
    return jsonWithCors(messages);
  } catch (error) {
    return jsonWithCors({ error: "Failed to fetch messages" }, { status: 500 });
  }
}

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const body = await req.json();
    const { content, senderName, senderType = "STUDENT", senderId } = body;

    if (!content || !content.trim()) {
      return jsonWithCors({ error: "Message content cannot be empty" }, { status: 400 });
    }

    const incident = await prisma.incident.findUnique({
      where: { id: resolvedParams.id },
      include: { responder: true },
    });

    if (!incident) {
      return jsonWithCors({ error: "Incident not found" }, { status: 404 });
    }

    // Save student message in DB
    const savedMessage = await prisma.incidentMessage.create({
      data: {
        incidentId: incident.id,
        senderType: senderType,
        senderName: senderName || "Student / Reporter",
        senderId: senderId || null,
        content: content.trim(),
      },
    });

    // Forward to responder's Telegram
    const targetChatId = incident.telegramChatId || incident.responder?.telegramChatId;
    if (targetChatId) {
      const telegramNotice = `💬 <b>New Message from Student (${savedMessage.senderName}):</b>\n"${savedMessage.content}"\n\n<i>Reply directly to this message in Telegram to answer.</i>`;
      await sendTelegramMessage(targetChatId, telegramNotice, {
        replyToMessageId: incident.telegramMessageId || undefined,
      }).catch((err) => console.error("Failed to forward student message to Telegram:", err));
    }

    // Broadcast live over SSE
    publish({
      id: `evt-${Date.now()}`,
      type: "incident.updated",
      timestamp: new Date(),
      source: "live-response-portal",
      incidentId: incident.id,
      data: {
        action: "new_message",
        message: savedMessage,
      },
    });

    return jsonWithCors({ success: true, message: savedMessage });
  } catch (error: any) {
    console.error("Failed to send message:", error);
    return jsonWithCors({ error: "Failed to send message", details: error.message }, { status: 500 });
  }
}
