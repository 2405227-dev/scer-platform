import { NextResponse } from "next/server";
import { handleTelegramWebhookUpdate } from "@/lib/telegram";
import { handleCorsOptions, jsonWithCors } from "@/lib/cors";

export async function OPTIONS() {
  return handleCorsOptions();
}

export async function POST(req: Request) {
  try {
    const secretHeader = req.headers.get("x-telegram-bot-api-secret-token");
    const configuredSecret = process.env.TELEGRAM_WEBHOOK_SECRET;

    if (configuredSecret && secretHeader && secretHeader !== configuredSecret) {
      return jsonWithCors({ error: "Unauthorized webhook signature" }, { status: 401 });
    }

    const update = await req.json();
    const result = await handleTelegramWebhookUpdate(update);

    return jsonWithCors({ ok: true, ...result });
  } catch (error: any) {
    console.error("Telegram webhook handling error:", error);
    return jsonWithCors({ error: "Internal webhook error", details: error.message }, { status: 500 });
  }
}

export async function GET() {
  return jsonWithCors({
    status: "active",
    service: "SCER Telegram Two-Way Response Gateway",
    timestamp: new Date().toISOString(),
  });
}
