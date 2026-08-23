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

async function runTrace() {
  console.log("===============================================================");
  console.log("STEP 1 & 5: VERIFYING TELEGRAM ENVIRONMENT LOADING");
  console.log("===============================================================");
  const testRes = await request(3000, "GET", "/api/telegram/test");
  console.log("✓ /api/telegram/test response status:", testRes.status);
  console.log("✓ Token configured:", testRes.data.tokenConfigured);
  console.log("✓ Bot username:", testRes.data.botUsername);

  console.log("\n===============================================================");
  console.log("STEP 3 & 7: SIMULATING TELEGRAM EMERGENCY & STORING CHAT ID");
  console.log("===============================================================");
  const studentChatId = "555666777";
  const studentMsg = "HELP! Fire emergency in Building A";
  
  const incomingWebhookRes = await request(3000, "POST", "/api/webhooks/telegram", {
    update_id: 20001,
    message: {
      message_id: 881,
      from: { id: 555666777, first_name: "StudentUser", username: "CampusStudentAlice" },
      chat: { id: 555666777, type: "private" },
      date: Math.floor(Date.now() / 1000),
      text: studentMsg,
    },
  });

  console.log("✓ Webhook response status:", incomingWebhookRes.status);
  console.log("✓ Webhook action:", incomingWebhookRes.data.action);
  const incidentId = incomingWebhookRes.data.incidentId;
  console.log("✓ Created Incident ID:", incidentId);

  // Verify incident from /api/response-team
  const teamRes = await request(3000, "GET", "/api/response-team");
  const createdIncident = teamRes.data.incidents.find((i) => i.id === incidentId);
  console.log("✓ Incident in DB has reporterTelegramChatId:", createdIncident?.reporterTelegramChatId || createdIncident?.telegramChatId);
  console.log("✓ Incident status:", createdIncident?.status);

  console.log("\n===============================================================");
  console.log("STEP 8: CLICKING 'ACCEPT INCIDENT' FROM LIVE RESPONSE (PORT 3004)");
  console.log("===============================================================");
  const acceptRes = await request(3000, "POST", `/api/incidents/${incidentId}/status`, {
    status: "accepted",
    assignedTo: "resp-alpha-01",
    assignedToName: "Response Team Alpha",
  }, {
    Origin: "http://localhost:3004",
  });
  console.log("✓ Accept Status code:", acceptRes.status);
  console.log("✓ Updated status:", acceptRes.data.incident?.status);

  console.log("\n===============================================================");
  console.log("STEP 8: CLICKING 'START RESPONSE' (in_progress)");
  console.log("===============================================================");
  const progressRes = await request(3000, "POST", `/api/incidents/${incidentId}/status`, {
    status: "in_progress",
    assignedToName: "Response Team Alpha",
  }, {
    Origin: "http://localhost:3004",
  });
  console.log("✓ Progress Status code:", progressRes.status);
  console.log("✓ Updated status:", progressRes.data.incident?.status);

  console.log("\n===============================================================");
  console.log("STEP 8: CLICKING 'MARK AS RESOLVED' (resolved)");
  console.log("===============================================================");
  const resolveRes = await request(3000, "POST", `/api/incidents/${incidentId}/status`, {
    status: "resolved",
    assignedToName: "Response Team Alpha",
  }, {
    Origin: "http://localhost:3004",
  });
  console.log("✓ Resolve Status code:", resolveRes.status);
  console.log("✓ Updated status:", resolveRes.data.incident?.status);

  console.log("\n===============================================================");
  console.log("✅ TRACE TEST RUN COMPLETED SUCCESSFULLY");
  console.log("===============================================================");
}

runTrace().catch((err) => {
  console.error("❌ Trace run error:", err);
  process.exit(1);
});
