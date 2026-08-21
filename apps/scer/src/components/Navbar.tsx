
import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex items-center gap-6 px-6 py-3 bg-white dark:bg-neutral-900 border-b">
      <Link href="/" className="flex items-center gap-2 mr-6 text-red-600">
        <ShieldAlert className="w-6 h-6" />
        <span className="font-bold tracking-tight text-neutral-900 dark:text-white">SCER</span>
      </Link>
      <Link href="/" className="text-sm font-medium hover:text-red-600 transition-colors">Command Center</Link>
      <Link href="/incidents" className="text-sm font-medium hover:text-red-600 transition-colors">Incidents</Link>
      <Link href="/responders" className="text-sm font-medium hover:text-red-600 transition-colors">Responders</Link>
      <Link href="/resources" className="text-sm font-medium hover:text-red-600 transition-colors">Resources</Link>
      <Link href="/analytics" className="text-sm font-medium hover:text-red-600 transition-colors">Intelligence</Link>
      <Link href="/audit" className="text-sm font-medium hover:text-red-600 transition-colors">Audit</Link>
      <div className="flex-1" />
      <div className="text-sm font-medium text-neutral-500">Admin</div>
    </nav>
  );
}

