import { cn } from "@/lib/utils";
import { type CSSProperties, type ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function RevealOnScroll({
  children,
  className,
  delay = 0,
}: RevealOnScrollProps) {
  return (
    <div
      className={cn("reveal-on-scroll", className)}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}

interface RevealStaggerProps {
  children: ReactNode;
  className?: string;
}

export function RevealStagger({ children, className }: RevealStaggerProps) {
  return <div className={cn("reveal-stagger", className)}>{children}</div>;
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("reveal-item", className)}>{children}</div>;
}
