import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const groqKey = process.env.GROQ_API_KEY;
  const isConfigured = Boolean(groqKey);
  const selectedModel = process.env.GROQ_MODEL?.trim() || "qwen/qwen3.6-27b";
  
  let models: string[] = [];
  if (isConfigured) {
    try {
      const res = await fetch("https://api.groq.com/openai/v1/models", {
        headers: { Authorization: `Bearer ${groqKey}` }
      });
      if (res.ok) {
        const json = await res.json();
        models = json.data.map((m: any) => m.id);
      }
    } catch (e) {}
  }

  return NextResponse.json({
    provider: "groq",
    configured: isConfigured,
    models,
    selectedModel
  });
}
