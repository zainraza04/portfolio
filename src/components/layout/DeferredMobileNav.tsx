"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MobileNav = dynamic(
  () => import("@/components/layout/MobileNav").then((mod) => mod.MobileNav),
  { ssr: false },
);

export function DeferredMobileNav() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const enable = () => setReady(true);

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(enable, { timeout: 1200 });
    } else {
      timeoutId = setTimeout(enable, 1);
    }

    return () => {
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  if (!ready) {
    return (
      <div
        className="h-10 w-10 lg:hidden"
        aria-hidden="true"
      />
    );
  }

  return <MobileNav />;
}
