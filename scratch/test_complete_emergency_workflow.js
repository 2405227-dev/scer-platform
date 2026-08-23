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

async function runTest() {
  console.log("==================================================");
  console.log("🚀 TESTING COMPLETE END-TO-END EMERGENCY WORKFLOW");
  console.log("==================================================\n");

  // STEP 1: VOICE EMERGENCY CREATION
  console.log("STEP 1: Triggering Voice Emergency from Audio Engine...");
  const audioResponse = await makeRequest('http://localhost:3000/api/webhooks/audio', 'POST', {
    event: 'audio.distress.detected',
    data: {
      keyword: 'FIRE',
      location: 'Science Complex - Lab 402',
      confidence: 0.98,
      transcript: 'Fire and smoke detected in chemistry lab! Evacuate immediately!'
    }
  });

  console.log("-> Audio Webhook Response:", audioResponse.data);
  const incidentId = audioResponse.data.incidentId;
  if (!incidentId) {
    console.error("❌ Failed: No incident ID returned from audio webhook.");
    process.exit(1);
  }
  console.log(`✅ Incident created with ID: ${incidentId}, Status: ${audioResponse.data.status}\n`);

  // STEP 2: VERIFY INCIDENT IN PENDING
  console.log("STEP 2: Verifying Incident appears in Response Team Pending list...");
  const responseTeamRes = await makeRequest('http://localhost:3000/api/response-team', 'GET');
  const foundIncident = (responseTeamRes.data.incidents || []).find(i => i.id === incidentId);
  if (!foundIncident) {
    console.error("❌ Failed: Incident not found in /api/response-team");
    process.exit(1);
  }
  console.log(`✅ Incident found in database! Type: "${foundIncident.type}", Status: "${foundIncident.status}"\n`);

  // STEP 3: ACCEPT INCIDENT ON WEBSITE (localhost:3004)
  console.log("STEP 3: Simulating Web Action: Responder clicks ACCEPT INCIDENT...");
  const acceptRes = await makeRequest(`http://localhost:3000/api/incidents/${incidentId}/status`, 'POST', {
    status: 'accepted',
    assignedTo: 'resp-1',
    assignedToName: 'Capt. Marcus Vance (Campus Security Alpha)'
  });
  console.log("-> Status Update Response:", acceptRes.data);
  const updatedStatus = acceptRes.data.incident ? acceptRes.data.incident.status : acceptRes.data.status;
  if (updatedStatus !== 'accepted') {
    console.error("❌ Failed: Incident status was not updated to accepted.");
    process.exit(1);
  }
  console.log(`✅ Incident successfully accepted! Status: ${updatedStatus}, Assigned to: ${acceptRes.data.incident?.assignedToName || acceptRes.data.assignedToName}\n`);

  // STEP 4: SIMULATE TELEGRAM RESOLVE BUTTON CLICK (callback_query)
  console.log("STEP 4: Simulating Responder clicking [ ✅ MARK AS RESOLVED ] in Telegram...");
  const callbackUpdate = {
    update_id: 99999,
    callback_query: {
      id: "cb_test_query_001",
      from: {
        id: 123456789,
        is_bot: false,
        first_name: "Marcus",
        last_name: "Vance",
        username: "MarcusVance"
      },
      message: {
        message_id: 42,
        chat: {
          id: 123456789,
          type: "private"
        },
        text: `✅ INCIDENT ACCEPTED\n\nEmergency #${incidentId} is now ACTIVE.`
      },
      data: `resolve:${incidentId}`
    }
  };

  const webhookRes = await makeRequest('http://localhost:3000/api/telegram/webhook', 'POST', callbackUpdate);
  console.log("-> Telegram Webhook Callback Response:", webhookRes.data);
  if (!webhookRes.data.handled || webhookRes.data.action !== 'callback_incident_resolved') {
    console.error("❌ Failed: Telegram callback query was not handled properly.");
    process.exit(1);
  }
  console.log(`✅ Callback query processed: action = ${webhookRes.data.action}\n`);

  // STEP 5: VERIFY FINAL INCIDENT STATE IN DATABASE / API
  console.log("STEP 5: Verifying final incident state in Database...");
  const finalResponseTeamRes = await makeRequest('http://localhost:3000/api/response-team?status=ALL', 'GET');
  const finalIncident = (finalResponseTeamRes.data.incidents || []).find(i => i.id === incidentId);
  if (!finalIncident) {
    console.error("❌ Failed: Incident not found in /api/response-team");
    process.exit(1);
  }

  console.log("-> Final Incident Details:", {
    id: finalIncident.id,
    type: finalIncident.type,
    status: finalIncident.status,
    assignedToName: finalIncident.assignedToName,
    resolvedBy: finalIncident.resolvedBy,
    resolvedAt: finalIncident.resolvedAt
  });

  if (finalIncident.status === 'resolved') {
    console.log("\n==================================================");
    console.log("🎉 ALL TESTS PASSED! FULL WORKFLOW VERIFIED 100%");
    console.log("==================================================");
  } else {
    console.error(`❌ Final status is ${finalIncident.status}, expected 'resolved'`);
    process.exit(1);
  }
}

runTest().catch(console.error);
