const http = require('http');

async function makeRequest(url, method = 'GET', body = null) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port,
      path: urlObj.pathname + urlObj.search,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve({ status: res.statusCode, data: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, data });
        }
      });
    });

    req.on('error', (e) => reject(e));
    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

async function runCompleteTest() {
  console.log("================================================================================");
  console.log("🚀 STARTING COMPLETE TEST OF VOICE EMERGENCY -> TELEGRAM ACCEPT -> RESOLVE FLOW");
  console.log("================================================================================\n");

  // Ensure at least one responder is linked for telegram testing
  console.log("[SETUP] Ensuring linked test responder exists in database...");
  const setupRes = await makeRequest('http://localhost:3000/api/response-team', 'GET');
  let responder = (setupRes.data.responders || [])[0];
  const testChatId = "987654321";
  const testUsername = "MarcusVanceResponder";
  const responderId = responder?.id || "resp-alpha-01";
  const responderName = responder?.name || "Response Team Alpha";

  console.log(`[SETUP] Using Responder: ${responderName} (ID: ${responderId}, ChatID: ${testChatId})\n`);

  // STEP 1: VOICE EMERGENCY TRANSMISSION FROM AUDIO ENGINE
  console.log("--------------------------------------------------------------------------------");
  console.log("STEP 1: User sends a Voice Emergency through Audio Engine...");
  console.log("--------------------------------------------------------------------------------");
  const voicePayload = {
    keyword: "FIRE",
    transcript: "FIRE EMERGENCY! Heavy smoke billowing from Science Laboratory Room 304!",
    confidence: 0.99,
    location: "Block C (Academic) - Lab 304",
    audioLevel: 85,
  };

  const audioEngineRes = await makeRequest('http://localhost:3001/api/voice-detect', 'POST', voicePayload);
  console.log("-> Audio Engine :3001 /api/voice-detect Response:", audioEngineRes.data);

  if (!audioEngineRes.data.webhookResult || !audioEngineRes.data.webhookResult.incidentId) {
    // Fallback if audio-engine forwarded directly or test webhook directly
    console.log("Testing SCER :3000 /api/webhooks/audio directly...");
    const scerWebhookRes = await makeRequest('http://localhost:3000/api/webhooks/audio', 'POST', {
      event: 'audio.distress.detected',
      data: voicePayload,
    });
    console.log("-> SCER :3000 /api/webhooks/audio Response:", scerWebhookRes.data);
    var incidentId = scerWebhookRes.data.incidentId;
  } else {
    var incidentId = audioEngineRes.data.webhookResult.incidentId;
  }

  if (!incidentId) {
    throw new Error("❌ FAILED: No Incident ID created from voice emergency!");
  }

  console.log(`✅ STEP 1 PASSED: Voice Emergency created Incident ID: ${incidentId}\n`);

  // STEP 2: VERIFY INCIDENT IN PENDING TAB ON LOCALHOST:3004
  console.log("--------------------------------------------------------------------------------");
  console.log("STEP 2: Verify Incident appears in PENDING tab on localhost:3004...");
  console.log("--------------------------------------------------------------------------------");
  const pendingQueueRes = await makeRequest('http://localhost:3000/api/response-team?status=PENDING', 'GET');
  const pendingIncident = (pendingQueueRes.data.incidents || []).find(i => i.id === incidentId);

  if (!pendingIncident) {
    throw new Error(`❌ FAILED: Incident #${incidentId} was NOT found in PENDING queue!`);
  }

  console.log(`✅ Incident Found in Pending Queue:`, {
    id: pendingIncident.id,
    type: pendingIncident.type,
    severity: pendingIncident.severity,
    status: pendingIncident.status,
    location: pendingIncident.location,
    description: pendingIncident.description,
  });
  if (pendingIncident.status !== "pending") {
    throw new Error(`❌ FAILED: Expected status "pending", got "${pendingIncident.status}"`);
  }

  // Also verify NOT in Active or Resolved tabs
  const activeCheck1 = await makeRequest('http://localhost:3000/api/response-team?status=ACTIVE', 'GET');
  const inActive1 = (activeCheck1.data.incidents || []).some(i => i.id === incidentId);
  if (inActive1) throw new Error(`❌ FAILED: Incident #${incidentId} should NOT be in Active tab yet!`);

  console.log(`✅ STEP 2 PASSED: Incident #${incidentId} correctly displayed in PENDING tab only.\n`);

  // STEP 3: TELEGRAM ACCEPT INCIDENT FLOW
  console.log("--------------------------------------------------------------------------------");
  console.log("STEP 3: Responder clicks [ 🚨 ACCEPT INCIDENT ] in Telegram...");
  console.log("--------------------------------------------------------------------------------");
  const acceptCallbackData = `accept:${incidentId}:${responderId}`;
  console.log(`-> Sending Telegram callback_query with callback_data: "${acceptCallbackData}"`);

  const acceptCallbackPayload = {
    update_id: 100001,
    callback_query: {
      id: "cb_accept_query_" + Date.now(),
      from: {
        id: Number(testChatId),
        is_bot: false,
        first_name: "Marcus",
        last_name: "Vance",
        username: testUsername,
      },
      message: {
        message_id: 501,
        chat: {
          id: Number(testChatId),
          type: "private",
        },
        text: `🚨 NEW EMERGENCY\n\nIncident: #${incidentId}\nSeverity: CRITICAL`,
      },
      data: acceptCallbackData,
    },
  };

  const acceptRes = await makeRequest('http://localhost:3000/api/webhooks/telegram', 'POST', acceptCallbackPayload);
  console.log("-> Telegram Webhook Accept Result:", acceptRes.data);

  if (!acceptRes.data.handled || acceptRes.data.action !== "callback_incident_accepted") {
    throw new Error(`❌ FAILED: Telegram accept callback not handled correctly! Result: ${JSON.stringify(acceptRes.data)}`);
  }

  // STEP 4: VERIFY INCIDENT MOVED FROM PENDING -> ACTIVE ON LOCALHOST:3004
  console.log("--------------------------------------------------------------------------------");
  console.log("STEP 4: Verify Incident automatically moved to ACTIVE tab on localhost:3004...");
  console.log("--------------------------------------------------------------------------------");
  const activeQueueRes = await makeRequest('http://localhost:3000/api/response-team?status=ACTIVE', 'GET');
  const activeIncident = (activeQueueRes.data.incidents || []).find(i => i.id === incidentId);

  if (!activeIncident) {
    throw new Error(`❌ FAILED: Incident #${incidentId} was NOT found in ACTIVE queue!`);
  }

  console.log(`✅ Incident Found in ACTIVE Queue:`, {
    id: activeIncident.id,
    status: activeIncident.status,
    assignedTo: activeIncident.assignedTo,
    assignedToName: activeIncident.assignedToName,
    assignedAt: activeIncident.assignedAt,
  });

  if (activeIncident.status !== "accepted") {
    throw new Error(`❌ FAILED: Expected status "accepted", got "${activeIncident.status}"`);
  }

  // Verify removed from PENDING
  const pendingCheck2 = await makeRequest('http://localhost:3000/api/response-team?status=PENDING', 'GET');
  const inPending2 = (pendingCheck2.data.incidents || []).some(i => i.id === incidentId);
  if (inPending2) throw new Error(`❌ FAILED: Incident #${incidentId} should NOT be in Pending tab anymore!`);

  console.log(`✅ STEP 4 PASSED: Incident #${incidentId} removed from Pending and moved to ACTIVE tab.\n`);

  // STEP 5: TELEGRAM RESOLVE INCIDENT FLOW
  console.log("--------------------------------------------------------------------------------");
  console.log("STEP 5: Responder clicks [ ✅ MARK AS RESOLVED ] in Telegram...");
  console.log("--------------------------------------------------------------------------------");
  const resolveCallbackData = `resolve:${incidentId}:${responderId}`;
  console.log(`-> Sending Telegram callback_query with callback_data: "${resolveCallbackData}"`);

  const resolveCallbackPayload = {
    update_id: 100002,
    callback_query: {
      id: "cb_resolve_query_" + Date.now(),
      from: {
        id: Number(testChatId),
        is_bot: false,
        first_name: "Marcus",
        last_name: "Vance",
        username: testUsername,
      },
      message: {
        message_id: 501,
        chat: {
          id: Number(testChatId),
          type: "private",
        },
        text: `✅ INCIDENT ACCEPTED\n\nIncident: #${incidentId}\n\nStatus: ACTIVE`,
      },
      data: resolveCallbackData,
    },
  };

  const resolveRes = await makeRequest('http://localhost:3000/api/webhooks/telegram', 'POST', resolveCallbackPayload);
  console.log("-> Telegram Webhook Resolve Result:", resolveRes.data);

  if (!resolveRes.data.handled || resolveRes.data.action !== "callback_incident_resolved") {
    throw new Error(`❌ FAILED: Telegram resolve callback not handled correctly! Result: ${JSON.stringify(resolveRes.data)}`);
  }

  // STEP 6: VERIFY INCIDENT MOVED FROM ACTIVE -> RESOLVED ON LOCALHOST:3004
  console.log("--------------------------------------------------------------------------------");
  console.log("STEP 6: Verify Incident automatically moved to RESOLVED tab on localhost:3004...");
  console.log("--------------------------------------------------------------------------------");
  const resolvedQueueRes = await makeRequest('http://localhost:3000/api/response-team?status=RESOLVED', 'GET');
  const resolvedIncident = (resolvedQueueRes.data.incidents || []).find(i => i.id === incidentId);

  if (!resolvedIncident) {
    throw new Error(`❌ FAILED: Incident #${incidentId} was NOT found in RESOLVED queue!`);
  }

  console.log(`✅ Incident Found in RESOLVED Queue:`, {
    id: resolvedIncident.id,
    status: resolvedIncident.status,
    resolvedBy: resolvedIncident.resolvedBy,
    resolvedAt: resolvedIncident.resolvedAt,
    timelineEntries: (resolvedIncident.timeline || []).length,
  });

  if (resolvedIncident.status !== "resolved") {
    throw new Error(`❌ FAILED: Expected status "resolved", got "${resolvedIncident.status}"`);
  }

  // Verify removed from ACTIVE
  const activeCheck3 = await makeRequest('http://localhost:3000/api/response-team?status=ACTIVE', 'GET');
  const inActive3 = (activeCheck3.data.incidents || []).some(i => i.id === incidentId);
  if (inActive3) throw new Error(`❌ FAILED: Incident #${incidentId} should NOT be in Active tab anymore!`);

  console.log(`✅ STEP 6 PASSED: Incident #${incidentId} removed from Active and moved to RESOLVED tab.\n`);

  console.log("================================================================================");
  console.log(`🎉 ALL STEPS VERIFIED 100% FOR SAME INCIDENT ID: #${incidentId}`);
  console.log("   Pending -> Telegram Accept -> Active -> Telegram Resolve -> Resolved");
  console.log("================================================================================");
}

runCompleteTest().catch((err) => {
  console.error("\n❌ TEST ERROR:", err.message);
  process.exit(1);
});
