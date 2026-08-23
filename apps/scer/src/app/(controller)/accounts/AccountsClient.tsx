"use client";

import { useState, useEffect } from "react";
import {
  Users,
  UserPlus,
  KeyRound,
  Shield,
  ShieldAlert,
  Trash2,
  Copy,
  Check,
  RefreshCw,
  Search,
  CheckCircle2,
  AlertCircle,
  X,
  Lock,
  UserX,
  UserCheck,
  Ban,
} from "lucide-react";

interface AccountsClientProps {
  currentUser: {
    userId: string;
    email: string;
    name: string;
    role: string;
    isRootController?: boolean;
  };
}

export function AccountsClient({ currentUser }: AccountsClientProps) {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"USER" | "CONTROLLER">("USER");
  const [department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

  // Created credentials modal
  const [createdResult, setCreatedResult] = useState<{
    name: string;
    email: string;
    tempPassword: string;
    role: string;
  } | null>(null);

  const [copied, setCopied] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/users");
      if (res.ok) {
        const data = await res.json();
        setUsers(data.users || []);
      }
    } catch (err) {
      console.error("Failed to load users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setCreateError("Name and Email are required.");
      return;
    }

    setCreating(true);
    setCreateError(null);

    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          role,
          department: department.trim() || undefined,
          phone: phone.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setCreateError(data.error || "Failed to create user.");
        setCreating(false);
        return;
      }

      // Show temporary credentials modal
      setCreatedResult({
        name: data.user.name,
        email: data.user.email,
        tempPassword: data.tempPassword,
        role: data.user.role,
      });

      // Reset form
      setName("");
      setEmail("");
      setDepartment("");
      setPhone("");
      setShowCreateModal(false);

      await fetchUsers();
    } catch (err: any) {
      setCreateError(err.message || "An unexpected error occurred.");
    } finally {
      setCreating(false);
    }
  };

  const handleToggleActive = async (userId: string, userName: string, currentActive: boolean) => {
    const action = currentActive ? "disable" : "enable";
    if (!confirm(`Are you sure you want to ${action} the account for ${userName}?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: !currentActive }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        await fetchUsers();
      } else {
        alert(data.error || `Failed to ${action} user.`);
      }
    } catch (err) {
      alert(`Error updating user status.`);
    }
  };

  const handleResetPassword = async (userId: string, userName: string) => {
    if (!confirm(`Are you sure you want to reset the password for ${userName}? A new temporary password will be generated.`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/users/${userId}`, { method: "POST" });
      const data = await res.json();

      if (res.ok && data.success) {
        setCreatedResult({
          name: userName,
          email: "Account Reset",
          tempPassword: data.tempPassword,
          role: "UPDATED",
        });
        await fetchUsers();
      } else {
        alert(data.error || "Failed to reset password.");
      }
    } catch (err) {
      alert("Error resetting password.");
    }
  };

  const handleDeleteUser = async (userId: string, userName: string) => {
    if (!confirm(`Are you sure you want to permanently delete the account for ${userName}?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/users/${userId}`, { method: "DELETE" });
      const data = await res.json();

      if (res.ok && data.success) {
        await fetchUsers();
      } else {
        alert(data.error || "Failed to delete user.");
      }
    } catch (err) {
      alert("Error deleting user.");
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase()) ||
      (u.department && u.department.toLowerCase().includes(search.toLowerCase()))
  );

  return (
      <main className="relative z-10 mx-auto max-w-[1700px] px-4 pb-10 pt-5 sm:px-6 lg:px-8 space-y-6">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl border border-red-500/30 bg-red-500/10">
                <Users className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
                  Account Management
                  <span className="rounded-lg bg-red-500/20 px-2 py-0.5 text-[9px] font-black uppercase text-red-300 border border-red-500/30">
                    Root Controller Only
                  </span>
                </h1>
                <p className="text-xs text-slate-400">
                  Create Users and Normal Controllers, issue temporary credentials, enable/disable access, and manage security.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={fetchUsers}
              className="p-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] transition"
              title="Refresh List"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            </button>

            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-red-500 to-rose-600 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-red-500/25 transition hover:from-red-400 hover:to-rose-500 active:scale-95"
            >
              <UserPlus className="h-4 w-4" />
              <span>Create Account</span>
            </button>
          </div>
        </div>

        {/* SEARCH & FILTER BAR */}
        <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#07111e]/80 p-3">
          <Search className="h-4 w-4 text-slate-500 ml-2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search accounts by name, email, department, or role..."
            className="w-full bg-transparent text-xs text-white placeholder-slate-500 outline-none"
          />
        </div>

        {/* USERS TABLE */}
        <div className="rounded-3xl border border-white/[0.08] bg-[#07111e]/90 overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.02] text-[10px] font-black uppercase tracking-wider text-slate-400">
                  <th className="py-4 px-6">User / Name</th>
                  <th className="py-4 px-6">Email Address</th>
                  <th className="py-4 px-6">Role & Permissions</th>
                  <th className="py-4 px-6">Account Status</th>
                  <th className="py-4 px-6">Password Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {loading && users.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-500">
                      Loading user database...
                    </td>
                  </tr>
                ) : filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-500">
                      No accounts matched your search criteria.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((u) => {
                    const isRoot = u.isRootController;
                    const isController = u.role === "CONTROLLER" && !u.isRootController;
                    const isUser = u.role === "USER";
                    const isActive = u.isActive !== false;

                    return (
                      <tr key={u.id} className={`hover:bg-white/[0.02] transition ${!isActive ? "opacity-60 bg-red-950/10" : ""}`}>
                        <td className="py-4 px-6">
                          <div className="font-bold text-white flex items-center gap-2">
                            {isRoot ? (
                              <ShieldAlert className="h-4 w-4 text-red-400 shrink-0" />
                            ) : isController ? (
                              <Shield className="h-4 w-4 text-cyan-400 shrink-0" />
                            ) : (
                              <div className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                            )}
                            <span>{u.name}</span>
                          </div>
                          <div className="text-[10px] font-mono text-slate-500">
                            {u.department || (isUser ? "Student" : "Controller Team")}
                          </div>
                        </td>

                        <td className="py-4 px-6 font-mono text-slate-300">{u.email}</td>

                        <td className="py-4 px-6">
                          {isRoot ? (
                            <span className="rounded-lg px-2.5 py-1 text-[9px] font-black uppercase tracking-wider bg-red-500/20 text-red-300 border border-red-500/40">
                              ROOT CONTROLLER
                            </span>
                          ) : isController ? (
                            <span className="rounded-lg px-2.5 py-1 text-[9px] font-black uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                              NORMAL CONTROLLER
                            </span>
                          ) : (
                            <span className="rounded-lg px-2.5 py-1 text-[9px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                              USER (STUDENT)
                            </span>
                          )}
                        </td>

                        <td className="py-4 px-6">
                          {isActive ? (
                            <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20 font-bold">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              Active
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 text-[10px] text-red-400 bg-red-500/10 px-2.5 py-1 rounded-lg border border-red-500/20 font-bold">
                              <Ban className="h-3 w-3" />
                              Disabled
                            </span>
                          )}
                        </td>

                        <td className="py-4 px-6">
                          {u.mustChangePassword ? (
                            <span className="inline-flex items-center gap-1 text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20 font-bold">
                              <KeyRound className="h-3 w-3" />
                              Temp Password
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[10px] text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/[0.08]">
                              <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                              Permanent
                            </span>
                          )}
                        </td>

                        <td className="py-4 px-6 text-right space-x-1.5 whitespace-nowrap">
                          {/* DISABLE / ENABLE BUTTON (Not available on Root Controller) */}
                          {!isRoot && (
                            <button
                              onClick={() => handleToggleActive(u.id, u.name, isActive)}
                              title={isActive ? "Disable Account" : "Enable Account"}
                              className={`inline-flex items-center gap-1 rounded-xl border px-2.5 py-1.5 text-[10px] font-bold transition ${
                                isActive
                                  ? "border-amber-500/30 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20"
                                  : "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
                              }`}
                            >
                              {isActive ? <UserX className="h-3 w-3" /> : <UserCheck className="h-3 w-3" />}
                              <span>{isActive ? "Disable" : "Enable"}</span>
                            </button>
                          )}

                          {/* RESET PASSWORD */}
                          {!isRoot && (
                            <button
                              onClick={() => handleResetPassword(u.id, u.name)}
                              title="Reset to Temporary Password"
                              className="inline-flex items-center gap-1 rounded-xl border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-[10px] font-bold text-slate-300 hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-amber-300 transition"
                            >
                              <KeyRound className="h-3 w-3" />
                              <span>Reset</span>
                            </button>
                          )}

                          {/* DELETE ACCOUNT */}
                          {!isRoot ? (
                            <button
                              onClick={() => handleDeleteUser(u.id, u.name)}
                              title="Delete Account"
                              className="inline-flex items-center gap-1 rounded-xl border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-[10px] font-bold text-slate-400 hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-300 transition"
                            >
                              <Trash2 className="h-3 w-3" />
                            </button>
                          ) : (
                            <span className="text-[10px] font-mono text-slate-600 italic">
                              Protected Root
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* MODAL 1: CREATE USER / NORMAL CONTROLLER MODAL */}
        {showCreateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="w-full max-w-md rounded-3xl border border-white/[0.1] bg-[#07111e] p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.08]">
                <h3 className="text-base font-black text-white flex items-center gap-2">
                  <UserPlus className="h-5 w-5 text-red-400" />
                  <span>Create Account (User / Controller)</span>
                </h3>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="text-slate-400 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {createError && (
                <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-300 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{createError}</span>
                </div>
              )}

              <form onSubmit={handleCreateUser} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-400 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Jordan Smith"
                    required
                    className="w-full rounded-xl border border-white/[0.1] bg-white/[0.03] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-red-400"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. jordan@scer.campus"
                    required
                    className="w-full rounded-xl border border-white/[0.1] bg-white/[0.03] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-red-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-400 mb-1">
                      Account Role
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value as any)}
                      className="w-full rounded-xl border border-white/[0.1] bg-white/[0.03] px-3 py-2.5 text-xs text-white outline-none focus:border-red-400"
                    >
                      <option value="USER" className="bg-[#0b1626] text-white">
                        User
                      </option>
                      <option value="CONTROLLER" className="bg-[#0b1626] text-white">
                        Controller
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-400 mb-1">
                      Department / Block
                    </label>
                    <input
                      type="text"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      placeholder="e.g. Science Complex"
                      className="w-full rounded-xl border border-white/[0.1] bg-white/[0.03] px-3 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-red-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-400 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +1 555-0199"
                    className="w-full rounded-xl border border-white/[0.1] bg-white/[0.03] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-red-400"
                  />
                </div>

                <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-[10px] text-amber-200">
                  <p className="font-bold flex items-center gap-1 mb-0.5">
                    <KeyRound className="h-3 w-3" />
                    Auto-Generated Temporary Password
                  </p>
                  A temporary password will be created and displayed once. The user will be required to change it on their first login.
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="px-4 py-2.5 rounded-xl border border-white/[0.1] text-xs font-bold text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={creating}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-red-500 text-xs font-black text-white shadow-lg hover:bg-red-400 disabled:opacity-50"
                  >
                    {creating ? "Creating..." : "Generate Account"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL 2: DISPLAY GENERATED TEMPORARY PASSWORD */}
        {createdResult && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="w-full max-w-md rounded-3xl border border-emerald-500/40 bg-[#07111e] p-6 shadow-2xl text-center">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 mb-3">
                <CheckCircle2 className="h-7 w-7 text-emerald-400" />
              </div>

              <h3 className="text-lg font-black text-white">Temporary Credentials Generated</h3>
              <p className="text-xs text-slate-400 mt-1">
                Account created for <strong className="text-white">{createdResult.name}</strong> ({createdResult.role})
              </p>

              <div className="my-5 rounded-2xl border border-white/[0.1] bg-black/40 p-4 text-left space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 font-bold uppercase text-[9px]">Email:</span>
                  <span className="font-mono text-slate-200">{createdResult.email}</span>
                </div>

                <div className="flex justify-between text-xs items-center pt-2 border-t border-white/[0.06]">
                  <span className="text-slate-500 font-bold uppercase text-[9px]">Temporary Password:</span>
                  <span className="font-mono font-bold text-amber-400 text-sm bg-amber-400/10 px-2 py-0.5 rounded">
                    {createdResult.tempPassword}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(
                      `Email: ${createdResult.email}\nTemporary Password: ${createdResult.tempPassword}\nLogin URL: http://localhost:3000/login`
                    )
                  }
                  className="flex-1 flex items-center justify-center gap-2 rounded-2xl border border-red-500/40 bg-red-500/10 py-3 text-xs font-bold text-red-300 hover:bg-red-500/20"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  <span>{copied ? "Copied to Clipboard!" : "Copy Login Info"}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setCreatedResult(null)}
                className="w-full rounded-2xl bg-white/[0.08] py-2.5 text-xs font-bold text-slate-300 hover:bg-white/[0.15]"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </main>
  );
}
