"use client";

import { SCERNavbar, SCERNavbarProps } from "@scer/ui";

export function Navbar(props: Omit<SCERNavbarProps, "currentApp">) {
  return <SCERNavbar currentApp="scer" {...props} />;
}