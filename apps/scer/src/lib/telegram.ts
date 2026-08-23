import { db as prisma } from "@scer/db-scer";
import { publish } from "@scer/db-scer/src/events";
import fs from "fs";
import path from "path";

let cachedToken: string | null = null;
let cachedUsername: string | null = null;

function loadEnvFallback() {
  if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_BOT_USERNAME) return;
  try {
    const candidatePaths = [
      path.resolve(process.cwd(), ".env.local"),
      path.resolve(process.cwd(), "apps/scer/.env.local"),
      path.resolve(process.cwd(), "../apps/scer/.env.local"),
      path.resolve(__dirname, "../../.env.local"),
      path.resolve(__dirname, "../../../apps/scer/.env.local"),
    ];

    for (const envPath of candidatePaths) {
      if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, "utf-8");
        for (const line of content.split("\n")) {
          const match = line.match(/^\s*([\w_]+)\s*=\s*(.*)?\s*$/);
          if (match) {
            const key = match[1];
            let val = (match[2] || "").trim();
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
              val = val.slice(1, -1);
            }
            if (!process.env[key] && val) {
              process.env[key] = val;
            }
            if (key === "TELEGRAM_BOT_TOKEN" && val) cachedToken = val;
            if (key === "TELEGRAM_BOT_USERNAME" && val) cachedUsername = val;
          }
        }
        if (cachedToken) break;
      }
    }
  } catch (err) {
    // ignore
  }
}

export function getTelegramBotToken(): string {
  if (!process.env.TELEGRAM_BOT_TOKEN && !cachedToken) {
    loadEnvFallback();
  }
  return process.env.TELEGRAM_BOT_TOKEN || cachedToken || "";
}

export function getTelegramBotUsername(): string {
  if (!process.env.TELEGRAM_BOT_USERNAME && !cachedUsername) {
    loadEnvFallback();
  }
  const username = process.env.TELEGRAM_BOT_USERNAME || cachedUsername || "SohamSCER_EmergencyBot";
  return username.replace(/^@/, "").trim();
}

export async function sendTelegramMessage(
  chatId: string | number,
  text: string,
  options?: {
    replyToMessageId?: number | string;
    parseMode?: "HTML" | "Markdown" | "MarkdownV2";
    replyMarkup?: any;
  }
): Promise<{ ok: boolean; messageId?: string; error?: string; rawResponse?: any }> {
  const token = getTelegramBotToken();
  if (!token) {
    console.error("[TELEGRAM] Error: TELEGRAM_BOT_TOKEN not configured in apps/scer/.env.local.");
    return { ok: false, error: "TELEGRAM_BOT_TOKEN not configured" };
  }

  try {
    const payload: Record<string, any> = {
      chat_id: String(chatId),
      text: text,
      parse_mode: options?.parseMode || "HTML",
    };

    if (options?.replyToMessageId && !isNaN(Number(options.replyToMessageId))) {
      payload.reply_to_message_id = Number(options.replyToMessageId);
    }

    if (options?.replyMarkup) {
      payload.reply_markup = options.replyMarkup;
    }

    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok || !data.ok) {
      console.error("[TELEGRAM] Telegram sendMessage API Error:", data);
      return { ok: false, error: data.description || "Telegram API Error", rawResponse: data };
    }

    return { ok: true, messageId: String(data.result.message_id), rawResponse: data };
  } catch (error: any) {
    console.error("[TELEGRAM] Exception calling Telegram API:", error.message);
    return { ok: false, error: error.message };
  }
}

export async function answerTelegramCallbackQuery(
  callbackQueryId: string,
  text?: string
): Promise<{ ok: boolean; error?: string }> {
  const token = getTelegramBotToken();
  if (!token) return { ok: false, error: "Token not configured" };

  try {
    const url = `https://api.telegram.org/bot${token}/answerCallbackQuery`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        callback_query_id: callbackQueryId,
        text: text || "Processed",
        show_alert: false,
      }),
    });
    const data = await res.json();
    return { ok: !!data.ok, error: data.description };
  } catch (err: any) {
    return { ok: false, error: err.message };
  }
}

export async function editTelegramMessageText(
  chatId: string | number,
  messageId: string | number,
  text: string,
  options?: {
    parseMode?: "HTML" | "Markdown" | "MarkdownV2";
    replyMarkup?: any;
  }
): Promise<{ ok: boolean; error?: string }> {
  const token = getTelegramBotToken();
  if (!token) return { ok: false, error: "Token not configured" };

  try {
    const payload: Record<string, any> = {
      chat_id: String(chatId),
      message_id: Number(messageId),
      text,
      parse_mode: options?.parseMode || "HTML",
    };
    if (options?.replyMarkup) {
      payload.reply_markup = options.replyMarkup;
    }
    const url = `https://api.telegram.org/bot${token}/editMessageText`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    return { ok: !!data.ok, error: data.description };
  } catch (err: any) {
    return { ok: false, error: err.message };
  }
}

export function formatEmergencyTelegramMessage(incident: {
  id: string;
  type?: string;
  severity: string;
  location?: string | null;
  reporterName?: string | null;
  description?: string | null;
  createdAt: Date | string;
}): string {
  const timestamp = incident.createdAt
    ? new Date(incident.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    : new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  return `🚨 <b>NEW EMERGENCY</b>\n\n<b>Incident:</b> <code>#${incident.id}</code>\n<b>Severity:</b> ${incident.severity.toUpperCase()}\n\n<b>Message:</b>\n${incident.description || "Voice emergency detected"}\n\n<b>Received:</b> ${timestamp}`;
}

export async function dispatchIncidentToTelegram(incidentId: string): Promise<{
  dispatched: boolean;
  recipientChatId?: string;
  messageId?: string;
  error?: string;
}> {
  try {
    const incident = await prisma.incident.findUnique({
      where: { id: incidentId },
      include: { responder: true },
    });

    if (!incident) return { dispatched: false, error: "Incident not found" };

    // 1. Check assigned responder chat ID
    let targetChatId = incident.responder?.telegramChatId || incident.telegramChatId;
    let targetResponderId = incident.assignedTo || incident.responder?.id || "";

    if (!targetChatId && incident.assignedTo) {
      const resp = await prisma.responder.findUnique({
        where: { id: incident.assignedTo },
      });
      if (resp?.telegramChatId) {
        targetChatId = resp.telegramChatId;
        targetResponderId = resp.id;
      }
    }

    // 2. If no specific responder assigned yet, find any active connected responder
    if (!targetChatId) {
      const activeConnectedResponder = await prisma.responder.findFirst({
        where: {
          telegramChatId: { not: null },
          availability: true,
        },
      });
      if (activeConnectedResponder?.telegramChatId) {
        targetChatId = activeConnectedResponder.telegramChatId;
        targetResponderId = activeConnectedResponder.id;
      }
    }

    if (!targetChatId) {
      const anyConnectedResponder = await prisma.responder.findFirst({
        where: { telegramChatId: { not: null } },
      });
      if (anyConnectedResponder?.telegramChatId) {
        targetChatId = anyConnectedResponder.telegramChatId;
        targetResponderId = anyConnectedResponder.id;
      }
    }

    if (!targetChatId) {
      console.warn("[TELEGRAM] No responder with linked Telegram chat ID found for dispatch.");
      return { dispatched: false, error: "No responder with linked Telegram chat ID" };
    }

    const messageText = formatEmergencyTelegramMessage(incident);
    const sendResult = await sendTelegramMessage(targetChatId, messageText, {
      replyMarkup: {
        inline_keyboard: [
          [
            {
              text: "🚨 ACCEPT INCIDENT",
              callback_data: `accept:${incident.id}:${targetResponderId}`,
            },
          ],
        ],
      },
    });

    if (sendResult.ok && sendResult.messageId) {
      await prisma.incident.update({
        where: { id: incidentId },
        data: {
          telegramChatId: String(targetChatId),
          telegramMessageId: sendResult.messageId,
        },
      });

      await prisma.incidentMessage.create({
        data: {
          incidentId: incidentId,
          senderType: "SYSTEM",
          senderName: "Telegram Gateway",
          content: `Emergency alert dispatched to Responder Telegram (Chat: ${targetChatId})`,
          telegramMessageId: sendResult.messageId,
        },
      });

      return {
        dispatched: true,
        recipientChatId: String(targetChatId),
        messageId: sendResult.messageId,
      };
    }

    return { dispatched: false, error: sendResult.error };
  } catch (error: any) {
    return { dispatched: false, error: error.message };
  }
}

export async function createResponderTelegramLinkToken(responderId: string): Promise<{
  token: string;
  deepLink: string;
  botUsername: string;
}> {
  const botUsername = getTelegramBotUsername();
  const token = `link_${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

  await prisma.responder.update({
    where: { id: responderId },
    data: { telegramLinkToken: token },
  });

  const deepLink = `https://t.me/${botUsername}?start=${token}`;
  return { token, deepLink, botUsername };
}

export async function notifyIncidentStatusChange(
  incident: {
    id: string;
    type?: string;
    location?: string;
    assignedTo?: string | null;
    assignedToName?: string | null;
    reporterId?: string | null;
    reporterName?: string | null;
    reporterTelegramChatId?: string | null;
    telegramChatId?: string | null;
    telegramMessageId?: string | null;
  },
  newStatus: "accepted" | "in_progress" | "resolved",
  actorName: string
): Promise<{ ok: boolean; messageId?: string; error?: string; rawResponse?: any }> {
  console.log("[TELEGRAM] notifyIncidentStatusChange called", {
    incidentId: incident.id,
    status: newStatus,
    actorName,
    reporterTelegramChatId: incident.reporterTelegramChatId,
    telegramChatId: incident.telegramChatId,
  });

  // Find responder's Telegram Chat ID
  let responderChatId: string | null = null;
  let responderId: string | null = incident.assignedTo || null;

  if (incident.assignedTo) {
    const resp = await prisma.responder.findUnique({
      where: { id: incident.assignedTo },
    });
    if (resp?.telegramChatId) {
      responderChatId = resp.telegramChatId;
      responderId = resp.id;
    }
  }
  if (!responderChatId && incident.telegramChatId) {
    responderChatId = incident.telegramChatId;
  }
  if (!responderChatId) {
    const activeResp = await prisma.responder.findFirst({
      where: { telegramChatId: { not: null } },
    });
    if (activeResp?.telegramChatId) {
      responderChatId = activeResp.telegramChatId;
      responderId = activeResp.id;
    }
  }

  // Handle ACCEPTED transition
  if (newStatus === "accepted") {
    let sendResult: any = { ok: true };

    // Send update to connected responder with MARK AS RESOLVED inline button
    if (responderChatId) {
      console.log("[TELEGRAM] Sending ACCEPTED message with resolve button to responder chat:", responderChatId);
      const responderMsg = `✅ <b>INCIDENT ACCEPTED</b>\n\n<b>Incident:</b> <code>#${incident.id}</code>\n\n<b>Status:</b> ACTIVE`;
      const replyMarkup = {
        inline_keyboard: [
          [
            {
              text: "✅ MARK AS RESOLVED",
              callback_data: `resolve:${incident.id}:${responderId || ""}`,
            },
          ],
        ],
      };

      if (incident.telegramMessageId) {
        sendResult = await editTelegramMessageText(
          responderChatId,
          incident.telegramMessageId,
          responderMsg,
          { replyMarkup }
        ).catch(() => null);
      }

      if (!sendResult || !sendResult.ok) {
        sendResult = await sendTelegramMessage(responderChatId, responderMsg, { replyMarkup });
      }
      console.log("[TELEGRAM] Status notification response:", sendResult);
    } else {
      console.warn("[TELEGRAM] No linked responder chat found for accepted notification.");
    }

    // Also notify student/reporter if separate chat ID exists
    const studentChatId = incident.reporterTelegramChatId;
    if (studentChatId && studentChatId !== responderChatId) {
      await sendTelegramMessage(
        studentChatId,
        `🚨 Your emergency incident has been ACCEPTED by ${actorName}. Response team has been assigned.`,
        { replyToMessageId: incident.telegramMessageId ? Number(incident.telegramMessageId) : undefined }
      ).catch(() => null);
    }

    return sendResult;
  }

  // Handle RESOLVED transition
  if (newStatus === "resolved") {
    const resolvedMsg = `✅ <b>INCIDENT RESOLVED</b>\n\n<b>Incident:</b> <code>#${incident.id}</code>\n\n<b>Status:</b> RESOLVED`;
    let resResult: any = { ok: true };

    if (responderChatId) {
      if (incident.telegramMessageId) {
        resResult = await editTelegramMessageText(
          responderChatId,
          incident.telegramMessageId,
          resolvedMsg,
          { replyMarkup: { inline_keyboard: [] } }
        ).catch(() => null);
      }
      if (!resResult || !resResult.ok) {
        resResult = await sendTelegramMessage(responderChatId, resolvedMsg);
      }
      console.log("[TELEGRAM] Status notification response:", resResult);
    }

    const studentChatId = incident.reporterTelegramChatId;
    if (studentChatId && studentChatId !== responderChatId) {
      await sendTelegramMessage(studentChatId, resolvedMsg).catch(() => null);
    }

    return resResult;
  }

  // Handle IN_PROGRESS transition
  if (newStatus === "in_progress") {
    const progressMsg = `🏃 <b>RESPONSE TEAM EN ROUTE</b>\n\nResponder <b>${actorName}</b> has initiated live tactical response for incident <code>#${incident.id}</code>.`;
    const targetChat = responderChatId || incident.reporterTelegramChatId;
    if (targetChat) {
      return await sendTelegramMessage(targetChat, progressMsg);
    }
  }

  return { ok: true };
}

export async function handleTelegramWebhookUpdate(update: any): Promise<{
  handled: boolean;
  action?: string;
  incidentId?: string;
  replyText?: string;
}> {
  // 1. Handle Callback Query from inline buttons ([ 🚨 ACCEPT INCIDENT ] or [ ✅ MARK AS RESOLVED ])
  if (update.callback_query) {
    const cb = update.callback_query;
    const cbId = cb.id;
    const cbData = cb.data || "";
    const fromUser = cb.from?.username
      ? `@${cb.from.username}`
      : `${cb.from?.first_name || "Responder"} ${cb.from?.last_name || ""}`.trim();
    const chatId = String(cb.message?.chat?.id || "");
    const messageId = cb.message?.message_id;

    console.log("[TELEGRAM] Callback query received", {
      callbackQueryId: cbId,
      data: cbData,
      from: fromUser,
      chatId,
      messageId,
    });

    // A. ACCEPT INCIDENT FLOW: callback_data = "accept:<incidentId>:<responderId>"
    if (cbData.startsWith("accept:") || cbData.startsWith("accept_")) {
      const cleanData = cbData.replace("accept_", "accept:");
      const parts = cleanData.split(":");
      const targetIncidentId = (parts[1] || "").trim();
      const paramResponderId = (parts[2] || "").trim();

      const targetIncident = await prisma.incident.findUnique({
        where: { id: targetIncidentId },
      });

      if (!targetIncident) {
        await answerTelegramCallbackQuery(cbId, "Incident not found");
        return { handled: true, action: "callback_incident_not_found" };
      }

      // Verify responder linked to this Telegram chat
      let responder = await prisma.responder.findFirst({
        where: { telegramChatId: String(chatId) },
      });

      if (!responder && paramResponderId) {
        responder = await prisma.responder.findUnique({
          where: { id: paramResponderId },
        });
      }

      if (!responder) {
        responder = await prisma.responder.findFirst({
          where: { availability: true },
        });
      }

      const responderId = responder?.id || paramResponderId || targetIncident.assignedTo || "resp-alpha-01";
      const responderName = responder?.name || fromUser || "Response Team Member";

      // If responder exists but telegramChatId is missing, link it
      if (responder && !responder.telegramChatId && chatId) {
        await prisma.responder.update({
          where: { id: responder.id },
          data: { telegramChatId: String(chatId), telegramUsername: fromUser },
        }).catch(() => null);
      }

      // Update the SAME incident in the shared database
      const updatedIncident = await prisma.incident.update({
        where: { id: targetIncidentId },
        data: {
          status: "accepted",
          assignedTo: responderId,
          assignedToName: responderName,
          assignedAt: new Date(),
          acknowledgedAt: new Date(),
          telegramChatId: String(chatId),
        },
      });

      // Create IncidentTimeline entry
      await prisma.incidentTimeline.create({
        data: {
          incidentId: targetIncidentId,
          action: "Status: accepted",
          actor: responderName,
          details: `Incident accepted via Telegram by ${responderName}`,
        },
      }).catch(() => null);

      // Add audit log
      await prisma.auditLog.create({
        data: {
          actor: responderName,
          action: "Status Accepted via Telegram",
          description: `Incident [${targetIncident.type}] accepted by ${responderName}`,
        },
      }).catch(() => null);

      // Answer callback query so the Telegram button stops loading
      await answerTelegramCallbackQuery(cbId, "✅ Emergency Incident Accepted!");

      // Broadcast the update using existing SSE/event system
      publish({
        id: `evt-${Date.now()}`,
        type: "incident.updated",
        timestamp: new Date(),
        source: "live-response-portal",
        incidentId: targetIncidentId,
        severity: targetIncident.severity as any,
        data: {
          id: targetIncident.id,
          status: "accepted",
          assignedTo: updatedIncident.assignedTo,
          assignedToName: responderName,
          assignedAt: updatedIncident.assignedAt,
          type: targetIncident.type,
          location: targetIncident.location,
        },
      });

      // Edit the original Telegram message to show Accepted status & [ ✅ MARK AS RESOLVED ] button
      const acceptedMessageText = `✅ <b>INCIDENT ACCEPTED</b>\n\n<b>Incident:</b> <code>#${targetIncident.id}</code>\n\n<b>Status:</b> ACTIVE`;
      const resolveMarkup = {
        inline_keyboard: [
          [
            {
              text: "✅ MARK AS RESOLVED",
              callback_data: `resolve:${targetIncident.id}:${responderId}`,
            },
          ],
        ],
      };

      if (chatId && messageId) {
        await editTelegramMessageText(chatId, messageId, acceptedMessageText, {
          replyMarkup: resolveMarkup,
        }).catch(async (err) => {
          console.warn("[TELEGRAM] editMessageText failed, sending new message:", err);
          await sendTelegramMessage(chatId, acceptedMessageText, { replyMarkup: resolveMarkup });
        });
      } else if (chatId) {
        await sendTelegramMessage(chatId, acceptedMessageText, { replyMarkup: resolveMarkup });
      }

      return {
        handled: true,
        action: "callback_incident_accepted",
        incidentId: targetIncidentId,
      };
    }

    // B. RESOLVE INCIDENT FLOW: callback_data = "resolve:<incidentId>:<responderId>"
    if (cbData.startsWith("resolve:") || cbData.startsWith("resolve_")) {
      const cleanData = cbData.replace("resolve_", "resolve:");
      const parts = cleanData.split(":");
      const targetIncidentId = (parts[1] || "").trim();
      const paramResponderId = (parts[2] || "").trim();

      const targetIncident = await prisma.incident.findUnique({
        where: { id: targetIncidentId },
      });

      if (!targetIncident) {
        await answerTelegramCallbackQuery(cbId, "Incident not found");
        return { handled: true, action: "callback_incident_not_found" };
      }

      // Verify responder
      let responder = await prisma.responder.findFirst({
        where: { telegramChatId: String(chatId) },
      });

      if (!responder && (paramResponderId || targetIncident.assignedTo)) {
        responder = await prisma.responder.findUnique({
          where: { id: paramResponderId || targetIncident.assignedTo || "" },
        });
      }

      const responderName = responder?.name || targetIncident.assignedToName || fromUser || "Response Team Member";

      // Update the SAME incident in shared database
      const updatedIncident = await prisma.incident.update({
        where: { id: targetIncidentId },
        data: {
          status: "resolved",
          resolvedAt: new Date(),
          resolvedBy: responderName,
        },
      });

      // Create IncidentTimeline entry
      await prisma.incidentTimeline.create({
        data: {
          incidentId: targetIncidentId,
          action: "Status: resolved",
          actor: responderName,
          details: `Incident marked as resolved via Telegram by ${responderName}`,
        },
      }).catch(() => null);

      // Add audit log
      await prisma.auditLog.create({
        data: {
          actor: responderName,
          action: "Status Resolved via Telegram",
          description: `Incident [${targetIncident.type}] status changed to resolved`,
        },
      }).catch(() => null);

      // Answer callback query
      await answerTelegramCallbackQuery(cbId, "✅ Emergency marked as Resolved!");

      // Broadcast update live over SSE so localhost:3004 immediately moves it to Resolved tab
      publish({
        id: `evt-${Date.now()}`,
        type: "incident.updated",
        timestamp: new Date(),
        source: "live-response-portal",
        incidentId: targetIncidentId,
        severity: targetIncident.severity as any,
        data: {
          id: targetIncident.id,
          status: "resolved",
          resolvedAt: updatedIncident.resolvedAt,
          resolvedBy: updatedIncident.resolvedBy,
          type: targetIncident.type,
          location: targetIncident.location,
        },
      });

      // Edit the original Telegram message to remove all action buttons
      const resolvedConfirmationText = `✅ <b>INCIDENT RESOLVED</b>\n\n<b>Incident:</b> <code>#${targetIncident.id}</code>\n\n<b>Status:</b> RESOLVED`;
      if (chatId && messageId) {
        await editTelegramMessageText(chatId, messageId, resolvedConfirmationText, {
          replyMarkup: { inline_keyboard: [] },
        }).catch(async () => {
          await sendTelegramMessage(chatId, resolvedConfirmationText);
        });
      } else if (chatId) {
        await sendTelegramMessage(chatId, resolvedConfirmationText);
      }

      return {
        handled: true,
        action: "callback_incident_resolved",
        incidentId: targetIncidentId,
      };
    }
  }

  const message = update.message;
  if (!message) return { handled: false };

  const chatId = String(message.chat.id);
  const text = (message.text || "").trim();
  const telegramUsername = message.from?.username
    ? `@${message.from.username}`
    : `${message.from?.first_name || "Telegram User"} ${message.from?.last_name || ""}`.trim();
  const telegramMsgId = String(message.message_id);

  // 1. Handle Responder Account Linking (/start link_... or /link ...)
  if (text.startsWith("/start link_") || text.startsWith("/link ")) {
    const token = text.replace("/start ", "").replace("/link ", "").trim();

    const responder = await prisma.responder.findFirst({
      where: { telegramLinkToken: token },
    });

    if (responder) {
      await prisma.responder.update({
        where: { id: responder.id },
        data: {
          telegramChatId: chatId,
          telegramUsername: telegramUsername,
          telegramConnectedAt: new Date(),
          telegramLinkToken: null,
        },
      });

      await sendTelegramMessage(
        chatId,
        `✅ <b>SCER Account Successfully Linked!</b>\n\nWelcome, <b>${responder.name}</b>. You will now receive high-priority emergency dispatches directly in this chat and can coordinate live with campus dispatch.`
      );

      publish({
        id: `evt-${Date.now()}`,
        type: "responder.status.changed",
        timestamp: new Date(),
        source: "scer-core",
        data: { responderId: responder.id, telegramConnected: true, telegramUsername },
      });

      return { handled: true, action: "account_linked" };
    } else {
      await sendTelegramMessage(
        chatId,
        `❌ <b>Invalid or expired link code.</b>\nPlease generate a fresh link button from the SCER Response Dashboard at http://localhost:3004.`
      );
      return { handled: true, action: "link_failed" };
    }
  }

  // 2. Check if this is a reply to an existing incident or active conversation
  let targetIncident: any = null;

  if (message.reply_to_message) {
    const replyToMsgId = String(message.reply_to_message.message_id);

    targetIncident = await prisma.incident.findFirst({
      where: {
        OR: [
          { telegramMessageId: replyToMsgId },
          { telegramChatId: chatId },
        ],
      },
      orderBy: { createdAt: "desc" },
    });

    if (!targetIncident) {
      const msgMatch = await prisma.incidentMessage.findFirst({
        where: { telegramMessageId: replyToMsgId },
      });
      if (msgMatch) {
        targetIncident = await prisma.incident.findUnique({
          where: { id: msgMatch.incidentId },
        });
      }
    }
  }

  if (!targetIncident) {
    targetIncident = await prisma.incident.findFirst({
      where: {
        telegramChatId: chatId,
        status: { notIn: ["resolved", "closed", "RESOLVED"] },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  // 3. If there is an active incident, handle commands (/accept, /progress, /resolve) or chat messages
  if (targetIncident) {
    const lowerText = text.toLowerCase();
    const responder = await prisma.responder.findFirst({
      where: { telegramChatId: chatId },
    });
    const responderName = responder?.name || telegramUsername;

    if (lowerText === "/accept") {
      if (
        targetIncident.status === "pending" ||
        targetIncident.status === "reported" ||
        targetIncident.status === "new"
      ) {
        await prisma.incident.update({
          where: { id: targetIncident.id },
          data: {
            status: "accepted",
            assignedTo: responder?.id || targetIncident.assignedTo,
            assignedToName: responderName,
            assignedAt: new Date(),
            acknowledgedAt: new Date(),
          },
        });

        await prisma.incidentTimeline.create({
          data: {
            incidentId: targetIncident.id,
            action: "Status: accepted",
            actor: responderName,
            details: `Incident accepted via Telegram by ${responderName}`,
          },
        });

        publish({
          id: `evt-${Date.now()}`,
          type: "incident.updated",
          timestamp: new Date(),
          source: "live-response-portal",
          incidentId: targetIncident.id,
          severity: targetIncident.severity as any,
          data: { status: "accepted", assignedToName: responderName },
        });

        await sendTelegramMessage(
          chatId,
          `✅ <b>Incident #${targetIncident.id} Accepted!</b>\nYou are now assigned to this incident. Reply with any message to chat with the reporter.`,
          { replyToMessageId: message.message_id }
        );
        return { handled: true, action: "incident_accepted", incidentId: targetIncident.id };
      }
    }

    if (lowerText === "/progress" || lowerText === "/in_progress" || lowerText === "/start") {
      await prisma.incident.update({
        where: { id: targetIncident.id },
        data: { status: "in_progress" },
      });

      publish({
        id: `evt-${Date.now()}`,
        type: "incident.updated",
        timestamp: new Date(),
        source: "live-response-portal",
        incidentId: targetIncident.id,
        severity: targetIncident.severity as any,
        data: { status: "in_progress" },
      });

      await sendTelegramMessage(
        chatId,
        `🏃 <b>Incident #${targetIncident.id} Marked IN PROGRESS.</b>\nLive response is underway.`,
        { replyToMessageId: message.message_id }
      );
      return { handled: true, action: "incident_in_progress", incidentId: targetIncident.id };
    }

    if (lowerText === "/resolve" || lowerText === "/resolved") {
      await prisma.incident.update({
        where: { id: targetIncident.id },
        data: {
          status: "resolved",
          resolvedAt: new Date(),
          resolvedBy: responderName,
        },
      });

      publish({
        id: `evt-${Date.now()}`,
        type: "incident.updated",
        timestamp: new Date(),
        source: "live-response-portal",
        incidentId: targetIncident.id,
        severity: targetIncident.severity as any,
        data: { status: "resolved", resolvedBy: responderName },
      });

      await sendTelegramMessage(
        chatId,
        `🏁 <b>Incident #${targetIncident.id} Fully Resolved!</b>\nThank you for resolving this campus emergency.`,
        { replyToMessageId: message.message_id }
      );
      return { handled: true, action: "incident_resolved", incidentId: targetIncident.id };
    }

    // Save standard two-way chat message
    const isResponderSender = !!responder;
    const savedMsg = await prisma.incidentMessage.create({
      data: {
        incidentId: targetIncident.id,
        senderType: isResponderSender ? "RESPONDER" : "STUDENT",
        senderName: isResponderSender ? responderName : telegramUsername,
        senderId: responder?.id || null,
        content: text,
        telegramMessageId: telegramMsgId,
      },
    });

    publish({
      id: `evt-${Date.now()}`,
      type: "incident.updated",
      timestamp: new Date(),
      source: "live-response-portal",
      incidentId: targetIncident.id,
      data: {
        action: "new_message",
        message: savedMsg,
      },
    });

    await sendTelegramMessage(
      chatId,
      `✓ <i>Delivered to SCER Live Response Center.</i>`,
      { replyToMessageId: message.message_id }
    );

    return { handled: true, action: "message_saved", incidentId: targetIncident.id };
  }

  // 4. If no active incident exists, CREATE A NEW EMERGENCY INCIDENT from Telegram!
  let org = await prisma.organization.findFirst();
  if (!org) {
    org = await prisma.organization.create({
      data: { name: "Campus Emergency Command", type: "Campus" },
    });
  }

  // Infer category and severity from message text
  const lowerMsg = text.toLowerCase();
  let incidentType = "Telegram Emergency Alert";
  let severity = "HIGH";

  if (lowerMsg.includes("fire") || lowerMsg.includes("smoke") || lowerMsg.includes("explosion")) {
    incidentType = "Active Fire / Smoke Alarm";
    severity = "CRITICAL";
  } else if (lowerMsg.includes("medical") || lowerMsg.includes("trauma") || lowerMsg.includes("injury") || lowerMsg.includes("bleeding") || lowerMsg.includes("cardiac") || lowerMsg.includes("unconscious")) {
    incidentType = "Medical Trauma Distress";
    severity = "CRITICAL";
  } else if (lowerMsg.includes("gas") || lowerMsg.includes("leak") || lowerMsg.includes("chemical") || lowerMsg.includes("toxic")) {
    incidentType = "Campus Gas / Hazmat Leak";
    severity = "HIGH";
  } else if (lowerMsg.includes("intruder") || lowerMsg.includes("weapon") || lowerMsg.includes("gun") || lowerMsg.includes("security") || lowerMsg.includes("lockdown")) {
    incidentType = "Security Breach / Intrusion";
    severity = "CRITICAL";
  }

  console.log("[TELEGRAM] Incoming message", {
    chatId,
    username: telegramUsername,
    text,
  });

  const newIncident = await prisma.incident.create({
    data: {
      organizationId: org.id,
      type: incidentType,
      severity: severity,
      status: "pending",
      location: "Reported via Telegram Bot",
      description: text,
      reporterName: telegramUsername,
      reporterTelegramChatId: chatId,
      reporterTelegramMessageId: telegramMsgId,
      telegramChatId: chatId,
      telegramMessageId: telegramMsgId,
      priority: severity === "CRITICAL" ? 1 : severity === "HIGH" ? 2 : 3,
    },
  });

  console.log("[INCIDENT] Created", {
    incidentId: newIncident.id,
    reporterTelegramChatId: newIncident.reporterTelegramChatId,
    status: newIncident.status,
  });

  await prisma.incidentMessage.create({
    data: {
      incidentId: newIncident.id,
      senderType: "STUDENT",
      senderName: telegramUsername,
      content: text,
      telegramMessageId: telegramMsgId,
    },
  });

  await prisma.incidentTimeline.create({
    data: {
      incidentId: newIncident.id,
      action: "Incident Reported via Telegram",
      actor: telegramUsername,
      details: text,
    },
  });

  // Broadcast to Live Response on Port 3004 via SSE
  publish({
    id: `evt-${Date.now()}`,
    type: "incident.created",
    timestamp: new Date(),
    source: "dispatch-portal",
    incidentId: newIncident.id,
    severity: severity as any,
    data: {
      id: newIncident.id,
      type: newIncident.type,
      severity: newIncident.severity,
      status: "pending",
      location: newIncident.location,
      reporterName: telegramUsername,
      description: text,
    },
  });

  await sendTelegramMessage(
    chatId,
    `🚨 <b>SCER Emergency Dispatch Received</b>\n━━━━━━━━━━━━━━━━━━━━\nYour report has been logged with ID <code>#${newIncident.id}</code> and broadcast to on-duty Campus Responders.\n\n⏱ <b>Status:</b> PENDING RESPONDER ACCEPTANCE\n📍 <b>Category:</b> ${incidentType}\n\nPlease stay in a safe location. When a responder accepts your incident, you will be notified here immediately.`,
    { replyToMessageId: message.message_id }
  );

  return { handled: true, action: "incident_created", incidentId: newIncident.id };
}
