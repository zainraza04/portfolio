import { HeroTechStack } from "@/components/sections/HeroTechStack";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/data/site";

const ctaBase =
  "inline-flex cursor-pointer items-center justify-center gap-2 px-6 py-3 font-mono text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary";
const ctaPrimary =
  "border border-accent-primary bg-gradient-to-r from-accent-primary to-accent-secondary text-white hover:scale-[1.02] hover:shadow-[0_0_24px_color-mix(in_srgb,var(--accent-glow)_45%,transparent)]";
const ctaGhost =
  "border border-border bg-transparent text-text-primary hover:scale-[1.02] hover:border-accent-primary hover:text-accent-secondary hover:shadow-[0_0_16px_color-mix(in_srgb,var(--accent-glow)_30%,transparent)]";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col px-4 pt-20 pb-8 sm:px-6 lg:px-8"
    >
      <div className="dot-grid absolute inset-0" aria-hidden="true" />
      <div
        className="scanline-overlay absolute inset-0 opacity-40"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center pb-2 text-center">
        <Badge
          variant="success"
          className="mb-8 max-w-sm gap-2 whitespace-normal px-3 py-1.5 text-left leading-relaxed"
        >
          <span className="pulse-dot inline-block h-2 w-2 shrink-0 rounded-full bg-success" />
          {siteConfig.availability}
        </Badge>

        <p className="mb-5 font-mono text-sm text-accent-secondary sm:text-base">
          <span className="text-accent-primary">{"> "}</span>
          Zain Raza · Full-Stack Developer
        </p>

        <h1 className="hero-lcp mb-6 max-w-4xl text-2xl text-text-primary sm:text-4xl">
          Full-Stack Developer building scalable web products for{" "}
          <span className="gradient-text">startups and businesses.</span>
        </h1>

        <p className="mb-10 max-w-3xl text-base text-text-secondary sm:text-lg">
          I build production-ready applications using Next.js, React, NestJS, and
          TypeScript — from SaaS platforms and customer-facing products to dashboards,
          APIs, and internal tools.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href="#work" className={`${ctaBase} ${ctaPrimary}`}>
            View My Work
          </a>
          <a href="#contact" className={`${ctaBase} ${ctaGhost}`}>
            Discuss a Project
          </a>
        </div>

        <HeroTechStack />

        <div className="mt-5 md:mt-10">
          <a
            href="#work"
            className="scroll-indicator flex flex-col items-center gap-2 text-text-muted transition-colors hover:text-accent-secondary"
            aria-label="Scroll to selected work"
          >
            <span className="font-mono text-xs uppercase tracking-widest">
              scroll
            </span>
            <span className="text-lg leading-none" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
