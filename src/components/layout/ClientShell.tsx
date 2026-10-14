"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ReactNode } from "react";

const CursorGlow = dynamic(
  () => import("@/components/layout/CursorGlow").then((mod) => mod.CursorGlow),
  { ssr: false },
);

interface ClientShellProps {
  children: ReactNode;
}

function DeferredCursorGlow() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Skip decorative glow on coarse pointers (phones) — saves main-thread work
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const enable = () => setReady(true);

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(enable, { timeout: 4000 });
    } else {
      timeoutId = setTimeout(enable, 2000);
    }

    return () => {
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  if (!ready) return null;
  return <CursorGlow />;
}

export function ClientShell({ children }: ClientShellProps) {
  return (
    <>
      <DeferredCursorGlow />
      {children}
    </>
  );
}
