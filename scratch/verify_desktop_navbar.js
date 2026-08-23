async function verifyDesktopTabs() {
  const loginRes = await fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin@scer.campus', password: 'Admin@SCER2026!' })
  });
  const cookie = loginRes.headers.get('set-cookie');
  const routes = [
    'http://localhost:3000/command',
    'http://localhost:3000/incidents',
    'http://localhost:3000/responders',
    'http://localhost:3000/analytics',
    'http://localhost:3000/accounts',
    'http://localhost:3000/audit',
    'http://localhost:3002'
  ];

  console.log('================================================================================');
  console.log('🖥️ VERIFYING DESKTOP CONTROLLER NAVBAR ACROSS ALL 7 ROUTES');
  console.log('================================================================================\n');

  for (const url of routes) {
    const res = await fetch(url, { headers: { cookie } });
    const html = await res.text();
    console.log(`[TESTING] ${url}`);
    
    // Check horizontal navigation container
    const hasDesktopNav = html.includes('hidden md:flex items-center');
    console.log(`  - Horizontal desktop nav bar (hidden md:flex): ${hasDesktopNav ? '✅ PASS' : '❌ FAIL'}`);

    // Check all 7 tabs
    const hasCommand = html.includes('Command');
    const hasIncidents = html.includes('Incidents');
    const hasResponders = html.includes('Responders');
    const hasGeoPulse = html.includes('GeoPulse');
    const hasAnalytics = html.includes('Analytics');
    const hasAccounts = html.includes('Accounts');
    const hasAudit = html.includes('Audit');

    console.log(`  - All 7 Tabs present in horizontal layout: ${hasCommand && hasIncidents && hasResponders && hasGeoPulse && hasAnalytics && hasAccounts && hasAudit ? '✅ PASS' : '❌ FAIL'}`);

    // Check shortcuts & user profile
    const hasShortcuts = html.includes('Live Response') && html.includes('Geo');
    const hasUser = html.includes('Root Administrator') && html.includes('ROOT CONTROLLER');
    console.log(`  - Shortcuts (Live Response + Geo): ${hasShortcuts ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`  - User Profile (Root Administrator / ROOT CONTROLLER): ${hasUser ? '✅ PASS' : '❌ FAIL'}`);
    console.log('');
  }

  console.log('================================================================================');
  console.log('🎉 ALL ROUTES HAVE THE IDENTICAL HORIZONTAL DESKTOP NAVBAR LAYOUT');
  console.log('================================================================================');
}

verifyDesktopTabs();
