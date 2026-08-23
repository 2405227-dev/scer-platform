/**
 * SCER Telegram Long-Polling Development Gateway
 * 
 * Allows receiving real-time Telegram messages directly during local development
 * on localhost:3000 without requiring ngrok or public HTTPS webhooks.
 * 
 * Usage:
 *   node scripts/telegram-poll.mjs
 */

import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read environment variables from apps/scer/.env.local safely
function loadEnv() {
  const envPath = path.resolve(__dirname, "../apps/scer/.env.local");
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, "utf-8").split("\n");
    for (const line of lines) {
      const match = line.match(/^\s*([\w_]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let val = (match[2] || "").trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

loadEnv();

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const BOT_USERNAME = process.env.TELEGRAM_BOT_USERNAME || "SCER_Emergency_Bot";
const SCER_PORT = process.env.PORT || 3000;

if (!BOT_TOKEN) {
  console.error("❌ ERROR: TELEGRAM_BOT_TOKEN not found in apps/scer/.env.local");
  process.exit(1);
}

console.log("===============================================================");
console.log("🤖 SCER TELEGRAM LOCAL POLLING SERVICE STARTED");
console.log(`Bot: @${BOT_USERNAME.replace(/^@/, "")}`);
console.log(`Target: http://localhost:${SCER_PORT}/api/webhooks/telegram`);
console.log("===============================================================");

let offset = 0;
let isPolling = true;

async function deleteWebhook() {
  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/deleteWebhook?drop_pending_updates=false`);
    const data = await res.json();
    if (data.ok) {
      console.log("✓ Webhook cleared for active long-polling mode.");
    }
  } catch (err) {
    console.error("Warning: could not clear webhook:", err.message);
  }
}

async function forwardUpdateToSCER(update) {
  return new Promise((resolve) => {
    const payload = JSON.stringify(update);
    const req = http.request(
      {
        hostname: "localhost",
        port: SCER_PORT,
        path: "/api/webhooks/telegram",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(payload),
        },
      },
      (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
          resolve({ status: res.statusCode, body });
        });
      }
    );

    req.on("error", (err) => {
      console.error("❌ Error forwarding update to SCER Core:", err.message);
      resolve({ status: 500, error: err.message });
    });

    req.write(payload);
    req.end();
  });
}

async function pollLoop() {
  await deleteWebhook();

  while (isPolling) {
    try {
      const url = `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates?offset=${offset}&timeout=20`;
      const res = await fetch(url);
      const data = await res.json();

      if (data.ok && Array.isArray(data.result)) {
        for (const update of data.result) {
          offset = update.update_id + 1;
          const msg = update.message;
          if (msg) {
            const sender = msg.from?.username ? `@${msg.from.username}` : (msg.from?.first_name || "User");
            console.log(`\n📨 Received Telegram update from ${sender}: "${msg.text || "[Media/Action]"}"`);
            const forwardResult = await forwardUpdateToSCER(update);
            console.log(`↪ Forwarded to SCER :${SCER_PORT} [Status ${forwardResult.status}]`);
          }
        }
      } else if (!data.ok) {
        console.error("Telegram API getUpdates error:", data.description);
        await new Promise((r) => setTimeout(r, 4000));
      }
    } catch (err) {
      console.error("Polling error:", err.message);
      await new Promise((r) => setTimeout(r, 4000));
    }
  }
}

pollLoop();

process.on("SIGINT", () => {
  console.log("\nStopping polling...");
  isPolling = false;
  process.exit(0);
});
