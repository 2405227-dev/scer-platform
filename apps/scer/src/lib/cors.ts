import { NextResponse } from "next/server";

export const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With, X-Telegram-Bot-Api-Secret-Token",
};

export function handleCorsOptions() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export function jsonWithCors(body: any, init?: ResponseInit) {
  const response = NextResponse.json(body, init);
  Object.entries(corsHeaders).forEach(([key, val]) => {
    response.headers.set(key, val);
  });
  return response;
}
