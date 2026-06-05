"use client";

import dynamic from "next/dynamic";
import { PageTransition } from "@/components/layout/PageTransition";
import { type ReactNode } from "react";

const CursorGlow = dynamic(
  () => import("@/components/layout/CursorGlow").then((mod) => mod.CursorGlow),
  { ssr: false },
);

interface ClientShellProps {
  children: ReactNode;
}

export function ClientShell({ children }: ClientShellProps) {
  return (
    <>
      <CursorGlow />
      <PageTransition>
        <div className="relative z-10 flex min-h-full flex-col">{children}</div>
      </PageTransition>
    </>
  );
}
