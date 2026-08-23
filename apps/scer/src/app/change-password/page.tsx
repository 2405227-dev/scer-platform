"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { KeyRound, Lock, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";

export default function ChangePasswordPage() {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 6) {
      setError("New password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirmation password do not match.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || "Failed to update password.");
        setLoading(false);
        return;
      }

      setSuccess(true);
      setTimeout(() => {
        if (data.redirectUrl) {
          router.push(data.redirectUrl);
        } else {
          router.push(data.user?.role === "USER" ? "/user" : "/command");
        }
      }, 1500);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050a12] text-white flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-3xl border border-amber-500/30 bg-amber-500/10 shadow-[0_0_35px_rgba(245,158,11,0.25)] mb-4">
            <KeyRound className="h-8 w-8 text-amber-400" />
          </div>
          <h1 className="text-2xl font-black tracking-tight text-white">
            Set Your Permanent Password
          </h1>
          <p className="mt-1.5 text-xs text-slate-400 max-w-xs mx-auto">
            You are logged in with a temporary password. Please set a new permanent password to activate your account.
          </p>
        </div>

        <div className="rounded-3xl border border-white/[0.08] bg-[#07111e]/90 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl">
          {error && (
            <div className="mb-5 rounded-2xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-300 flex items-center gap-2.5">
              <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="mb-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs text-emerald-300 flex items-center gap-2.5">
              <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-400" />
              <span>Password updated successfully! Redirecting to your portal...</span>
            </div>
          )}

          <form onSubmit={handleChangePassword} className="space-y-4">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                Current / Temporary Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter temporary password"
                  required
                  className="w-full rounded-2xl border border-white/[0.1] bg-white/[0.03] pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-400 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                New Permanent Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Min 6 characters"
                  required
                  minLength={6}
                  className="w-full rounded-2xl border border-white/[0.1] bg-white/[0.03] pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-400 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                Confirm New Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter new password"
                  required
                  minLength={6}
                  className="w-full rounded-2xl border border-white/[0.1] bg-white/[0.03] pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-400 transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || success}
              className="w-full mt-3 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 p-3.5 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-amber-500/25 transition hover:from-amber-400 hover:to-orange-500 active:scale-95 disabled:opacity-50"
            >
              {loading ? (
                <span>Updating Password...</span>
              ) : (
                <>
                  <span>Save Password & Enter Portal</span>
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
