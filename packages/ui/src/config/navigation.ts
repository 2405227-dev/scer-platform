export const SCER_CONTROLLER_URL =
  process.env.NEXT_PUBLIC_SCER_URL ||
  process.env.NEXT_PUBLIC_SCER_API_URL ||
  process.env.NEXT_PUBLIC_CONTROLLER_APP_URL ||
  "http://localhost:3000";

export const GEOPULSE_URL =
  process.env.NEXT_PUBLIC_GEOPULSE_URL ||
  "http://localhost:3002";

export const LIVE_RESPONSE_URL =
  process.env.NEXT_PUBLIC_LIVE_RESPONSE_URL ||
  "http://localhost:3004";

export interface ControllerNavItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export function getControllerNavItems(
  baseUrl: string = SCER_CONTROLLER_URL,
  geoUrl: string = GEOPULSE_URL,
  isRootController: boolean = false
): ControllerNavItem[] {
  const baseItems: ControllerNavItem[] = [
    { id: "command", label: "Command", href: `${baseUrl}/command` },
    { id: "incidents", label: "Incidents", href: `${baseUrl}/incidents` },
    { id: "responders", label: "Responders", href: `${baseUrl}/responders` },
    { id: "geopulse", label: "GeoPulse", href: geoUrl, isExternal: true },
    { id: "analytics", label: "Analytics", href: `${baseUrl}/analytics` },
    { id: "audit", label: "Audit", href: `${baseUrl}/audit` },
  ];

  if (isRootController) {
    return [
      ...baseItems.slice(0, 5), // Command, Incidents, Responders, GeoPulse, Analytics
      { id: "accounts", label: "Accounts", href: `${baseUrl}/accounts` },
      ...baseItems.slice(5), // Audit
    ];
  }

  return baseItems;
}
