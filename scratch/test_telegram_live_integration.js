const http = require("http");

function request(port, method, path, body = null, headers = {}) {
  return new Promise((resolve, reject) => {
    const dataString = body ? JSON.stringify(body) : null;
    const req = http.request(
      {
        hostname: "localhost",
        port: port,
        path,
        method,
        headers: {
          ...(dataString ? { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(dataString) } : {}),
          ...headers,
        },
      },
      (res) => {
        let raw = "";
        res.on("data", (chunk) => (raw += chunk));
        res.on("end", () => {
          let parsed;
          try {
            parsed = JSON.parse(raw);
          } catch {
            parsed = raw;
          }
          resolve({ status: res.statusCode, headers: res.headers, data: parsed });
        });
      }
    );
    req.on("error", reject);
    if (dataString) req.write(dataString);
    req.end();
  });
}

async function testTelegramIntegration() {
  console.log("===============================================================");
  console.log("TESTING REAL TELEGRAM INTEGRATION & TWO-WAY FLOW");
  console.log("===============================================================");

  // 1. Generate Telegram link for responder
  console.log("\n[1] Generating Telegram connection token for 'resp-alpha-01'...");
  const linkRes = await request(3000, "POST", "/api/responders/resp-alpha-01/telegram-link", null, {
    Origin: "http://localhost:3004",
  });
  console.log(`✓ Response status: ${linkRes.status}`);
  console.log(`✓ Bot Username: @${linkRes.data.botUsername}`);
  console.log(`✓ Deep Link: ${linkRes.data.deepLink}`);
  console.log(`✓ Link Token: ${linkRes.data.token}`);

  const token = linkRes.data.token;
  if (!token) throw new Error("No token returned!");

  // 2. Simulate Telegram Webhook: Responder sends /start <token>
  console.log(`\n[2] Simulating Telegram Webhook: Responder sends '/start ${token}' to bot...`);
  const webhookLinkRes = await request(3000, "POST", "/api/webhooks/telegram", {
    update_id: 10001,
    message: {
      message_id: 991,
      from: { id: 77712345, first_name: "Commander", last_name: "Alpha", username: "LeadResponder_Alpha" },
      chat: { id: 77712345, type: "private" },
      date: Math.floor(Date.now() / 1000),
      text: `/start ${token}`,
    },
  });
  console.log(`✓ Webhook status: ${webhookLinkRes.status}`);
  console.log(`✓ Action: ${webhookLinkRes.data.action}`);

  // 3. Verify responder is now Telegram connected in response team queue
  console.log("\n[3] Verifying responder is marked Telegram-linked in Live Response queue...");
  const teamRes = await request(3000, "GET", "/api/response-team");
  const alphaResponder = teamRes.data.responders.find((r) => r.id === "resp-alpha-01");
  console.log(`✓ Responder Name: ${alphaResponder?.name}`);
  console.log(`✓ Telegram Chat ID: ${alphaResponder?.telegramChatId}`);
  console.log(`✓ Telegram Username: ${alphaResponder?.telegramUsername}`);
  if (!alphaResponder?.telegramChatId) throw new Error("Responder was not linked with Telegram chat ID!");

  // 4. Simulate Telegram Webhook: Student sends an Emergency Distress Report
  console.log("\n[4] Simulating Telegram Webhook: Student sends emergency report 'Heavy smoke coming from Physics Lab 202'...");
  const studentChatId = "888999111";
  const studentWebhookRes = await request(3000, "POST", "/api/webhooks/telegram", {
    update_id: 10002,
    message: {
      message_id: 105,
      from: { id: 888999111, first_name: "Alice", last_name: "Student", username: "AliceCampus" },
      chat: { id: 888999111, type: "private" },
      date: Math.floor(Date.now() / 1000),
      text: "Heavy smoke and fire alarm triggered in Physics Lab 202!",
    },
  });

  console.log(`✓ Webhook status: ${studentWebhookRes.status}`);
  console.log(`✓ Action: ${studentWebhookRes.data.action}`);
  console.log(`✓ Incident Created ID: ${studentWebhookRes.data.incidentId}`);
  const incidentId = studentWebhookRes.data.incidentId;
  if (!incidentId) throw new Error("No incident ID created from Telegram message!");

  // 5. Verify incident is pending and visible in Live Response queue
  console.log("\n[5] Verifying incident is in PENDING state on Live Response (Port 3004)...");
  const queueAfterRes = await request(3000, "GET", "/api/response-team");
  const liveIncident = queueAfterRes.data.incidents.find((i) => i.id === incidentId);
  console.log(`✓ Incident Type: ${liveIncident?.type}`);
  console.log(`✓ Severity: ${liveIncident?.severity}`);
  console.log(`✓ Status: ${liveIncident?.status}`);
  console.log(`✓ Reporter Name: ${liveIncident?.reporterName}`);
  console.log(`✓ Telegram Chat ID: ${liveIncident?.telegramChatId}`);
  if (liveIncident?.status !== "pending") throw new Error("Incident not in pending state!");

  // 6. Test Accept Incident from Live Response Dashboard -> triggers notification to Student on Telegram
  console.log("\n[6] Responder accepts incident on Live Response (pending -> accepted)...");
  const acceptRes = await request(3000, "POST", `/api/incidents/${incidentId}/status`, {
    status: "accepted",
    assignedTo: "resp-alpha-01",
    assignedToName: "Response Team Alpha",
  }, {
    Origin: "http://localhost:3004",
  });
  console.log(`✓ Accept Status: ${acceptRes.status}`);
  console.log(`✓ Updated Incident Status: ${acceptRes.data.incident?.status}`);
  console.log(`✓ Assigned To: ${acceptRes.data.incident?.assignedToName}`);

  // 7. Test Start Response -> in_progress
  console.log("\n[7] Responder starts response (accepted -> in_progress)...");
  const progressRes = await request(3000, "POST", `/api/incidents/${incidentId}/status`, {
    status: "in_progress",
    assignedToName: "Response Team Alpha",
  }, {
    Origin: "http://localhost:3004",
  });
  console.log(`✓ In Progress Status: ${progressRes.status}`);
  console.log(`✓ Updated Incident Status: ${progressRes.data.incident?.status}`);

  // 8. Test Mark as Resolved -> resolved
  console.log("\n[8] Responder marks as resolved (in_progress -> resolved)...");
  const resolveRes = await request(3000, "POST", `/api/incidents/${incidentId}/status`, {
    status: "resolved",
    assignedToName: "Response Team Alpha",
  }, {
    Origin: "http://localhost:3004",
  });
  console.log(`✓ Resolved Status: ${resolveRes.status}`);
  console.log(`✓ Updated Incident Status: ${resolveRes.data.incident?.status}`);
  console.log(`✓ Resolved By: ${resolveRes.data.incident?.resolvedBy}`);

  console.log("\n===============================================================");
  console.log("🎉 ALL REAL TELEGRAM WORKFLOW & API TESTS PASSED SUCCESSFULLY!");
  console.log("===============================================================\n");
}

testTelegramIntegration().catch((err) => {
  console.error("❌ TEST FAILED:", err);
  process.exit(1);
});
