import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { ControllerNavbar } from "@scer/ui";
import { getSession } from "@scer/db-scer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SCER - GeoPulse Spatial Intelligence",
  description: "Dynamic Isochrone and Spatial Telemetry Engine",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  const initialUser = session
    ? {
        name: session.name,
        role: session.role,
        isRootController: session.isRootController,
      }
    : null;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#050a12] text-white">
        <ControllerNavbar
          currentApp="geopulse"
          activePath="/geopulse"
          initialUser={initialUser}
        />
        {children}
      </body>
    </html>
  );
}
