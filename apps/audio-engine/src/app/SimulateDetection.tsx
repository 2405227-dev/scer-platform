
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function SimulateDetection({ keywords }: { keywords: any[] }) {
  const [loading, setLoading] = useState(false);

  const handleSimulate = async () => {
    setLoading(true);
    await fetch("/api/simulate", { method: "POST" });
    setLoading(false);
    window.location.reload();
  };

  return (
    <Button 
      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold h-12" 
      onClick={handleSimulate}
      disabled={loading}
    >
      {loading ? "Detecting..." : "Simulate \"HELP\""}
    </Button>
  );
}

