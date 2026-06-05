import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "ghost" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-accent-primary to-accent-secondary text-white border border-accent-primary hover:shadow-[0_0_24px_color-mix(in_srgb,var(--accent-glow)_45%,transparent)] hover:scale-[1.02]",
  ghost:
    "bg-transparent text-text-primary border border-border hover:border-accent-primary hover:text-accent-secondary hover:shadow-[0_0_16px_color-mix(in_srgb,var(--accent-glow)_30%,transparent)] hover:scale-[1.02]",
  outline:
    "bg-bg-secondary text-text-primary border border-border-accent hover:border-accent-primary hover:scale-[1.02]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);

Button.displayName = "Button";
