import { BackToTop } from "@/components/layout/BackToTop";
import { socialLinks as socialUrls } from "@/data/social";
import { cn } from "@/lib/utils";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const socialLinks = [
  { icon: FaGithub, href: socialUrls.github, label: "GitHub" },
  { icon: FaLinkedin, href: socialUrls.linkedin, label: "LinkedIn" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-bg-primary py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <p className="font-mono text-sm text-text-secondary">
          Built with Next.js & ♥ — {year}
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className={cn(
                "flex h-10 w-10 items-center justify-center border border-border text-text-secondary transition-all duration-300",
                "hover:border-accent-primary hover:text-accent-secondary hover:shadow-[0_0_16px_color-mix(in_srgb,var(--accent-glow)_35%,transparent)]",
              )}
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>

        <p className="text-xs text-text-muted">
          Designed & Developed by Zain Raza
        </p>
      </div>
      <BackToTop />
    </footer>
  );
}
