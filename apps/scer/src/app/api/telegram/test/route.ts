import { NextResponse } from "next/server";
import { getTelegramBotToken, getTelegramBotUsername } from "@/lib/telegram";
import { handleCorsOptions, jsonWithCors } from "@/lib/cors";

export async function OPTIONS() {
  return handleCorsOptions();
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const chatId = searchParams.get("chat_id") || searchParams.get("chatId");
  const token = getTelegramBotToken();
  const username = getTelegramBotUsername();

  console.log("[TELEGRAM] Token configured:", Boolean(token));
  console.log("[TELEGRAM] Bot username:", username);

  if (!token) {
    return jsonWithCors(
      {
        success: false,
        error: "TELEGRAM_BOT_TOKEN is not configured in apps/scer/.env.local",
        tokenConfigured: false,
        botUsername: username,
      },
      { status: 500 }
    );
  }

  if (!chatId) {
    return jsonWithCors({
      success: true,
      tokenConfigured: true,
      botUsername: username,
      message: "Pass ?chat_id=<your_telegram_chat_id> to send a live test message",
    });
  }

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: "🧪 SCER Telegram connection test successful",
      }),
    });

    const responseBody = await response.json();
    console.log("[TELEGRAM] API status:", response.status);
    console.log("[TELEGRAM] API result:", responseBody);

    return jsonWithCors({
      success: response.ok && responseBody.ok,
      apiStatus: response.status,
      apiResult: responseBody,
      tokenConfigured: true,
      botUsername: username,
    });
  } catch (error: any) {
    console.error("[TELEGRAM] Direct test error:", error.message);
    return jsonWithCors({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const chatId = body.chat_id || body.chatId;
  const token = getTelegramBotToken();
  const username = getTelegramBotUsername();

  console.log("[TELEGRAM] Token configured:", Boolean(token));
  console.log("[TELEGRAM] Bot username:", username);

  if (!token) {
    return jsonWithCors(
      {
        success: false,
        error: "TELEGRAM_BOT_TOKEN is not configured in apps/scer/.env.local",
      },
      { status: 500 }
    );
  }

  if (!chatId) {
    return jsonWithCors({ error: "chat_id is required in JSON body" }, { status: 400 });
  }

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: body.text || "🧪 SCER Telegram connection test successful",
      }),
    });

    const responseBody = await response.json();
    console.log("[TELEGRAM] API status:", response.status);
    console.log("[TELEGRAM] API result:", responseBody);

    return jsonWithCors({
      success: response.ok && responseBody.ok,
      apiStatus: response.status,
      apiResult: responseBody,
    });
  } catch (error: any) {
    console.error("[TELEGRAM] Direct test error:", error.message);
    return jsonWithCors({ success: false, error: error.message }, { status: 500 });
  }
}
