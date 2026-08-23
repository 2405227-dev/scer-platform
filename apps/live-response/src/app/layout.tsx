import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ModuleNavbar } from "@/components/ModuleNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SCER Live Response Center - Responder Dashboard",
  description: "Dedicated real-time responder coordination dashboard for campus emergency incident command",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050a12] text-white">
        <ModuleNavbar currentModule="live-response" />
        {children}
      </body>
    </html>
  );
}
