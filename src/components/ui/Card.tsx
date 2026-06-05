import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

export function Card({ className, glow = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "border border-border bg-bg-secondary p-6",
        glow && "card-glow",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
