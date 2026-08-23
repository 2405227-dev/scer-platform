import { NextResponse } from "next/server";
import { createResponderTelegramLinkToken } from "@/lib/telegram";
import { db as prisma } from "@scer/db-scer";
import { handleCorsOptions, jsonWithCors } from "@/lib/cors";

export async function OPTIONS() {
  return handleCorsOptions();
}

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const linkData = await createResponderTelegramLinkToken(resolvedParams.id);
    return jsonWithCors({ success: true, ...linkData });
  } catch (error: any) {
    console.error("Failed to create telegram link token:", error);
    return jsonWithCors({ error: "Failed to generate link token" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    await prisma.responder.update({
      where: { id: resolvedParams.id },
      data: {
        telegramChatId: null,
        telegramUsername: null,
        telegramConnectedAt: null,
        telegramLinkToken: null,
      },
    });
    return jsonWithCors({ success: true, message: "Telegram account unlinked" });
  } catch (error) {
    return jsonWithCors({ error: "Failed to unlink Telegram" }, { status: 500 });
  }
}
