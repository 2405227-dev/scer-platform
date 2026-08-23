"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ShieldAlert,
  Lock,
  Mail,
  ArrowRight,
  Eye,
  EyeOff,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || "Login failed. Please verify credentials.");
        setLoading(false);
        return;
      }

      if (data.user.mustChangePassword) {
        router.push("/change-password");
      } else if (data.user.role === "USER") {
        router.push("/user");
      } else {
        router.push("/command");
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred during login.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050a12] text-white flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden selection:bg-cyan-500 selection:text-black">
      {/* BACKGROUND AMBIENCE */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[15%] top-[-10%] h-[550px] w-[550px] rounded-full bg-cyan-500/[0.04] blur-[150px]" />
        <div className="absolute right-[-10%] top-[20%] h-[600px] w-[600px] rounded-full bg-red-600/[0.035] blur-[160px]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="relative z-10 w-full max-w-md my-auto">
        {/* LOGO & TITLE */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-3xl border border-red-500/30 bg-red-500/10 shadow-[0_0_35px_rgba(239,68,68,0.25)] mb-4">
            <ShieldAlert className="h-8 w-8 text-red-400" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            SCER Platform Access
          </h1>
          <p className="mt-1.5 text-xs text-slate-400 max-w-xs mx-auto">
            Smart Campus Emergency Response System. Sign in to access your designated role portal.
          </p>
        </div>

        {/* LOGIN CARD */}
        <div className="rounded-3xl border border-white/[0.08] bg-[#07111e]/90 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl">
          {error && (
            <div className="mb-5 rounded-2xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-300 flex items-center gap-2.5 animate-in fade-in">
              <ShieldAlert className="h-4 w-4 shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@scer.campus"
                  required
                  className="w-full rounded-2xl border border-white/[0.1] bg-white/[0.03] pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 outline-none focus:border-cyan-400 focus:bg-white/[0.06] transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  className="w-full rounded-2xl border border-white/[0.1] bg-white/[0.03] pl-10 pr-10 py-3 text-xs text-white placeholder-slate-500 outline-none focus:border-cyan-400 focus:bg-white/[0.06] transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full !mt-6 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-3.5 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-cyan-500/25 transition hover:from-cyan-400 hover:to-blue-500 active:scale-95 disabled:opacity-50"
            >
              {loading ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <span>Sign In to Portal</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
