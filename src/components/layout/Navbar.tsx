import { DeferredMobileNav } from "@/components/layout/DeferredMobileNav";
import { siteConfig } from "@/data/site";
import Link from "next/link";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-bg-primary/90 supports-[backdrop-filter]:bg-bg-primary/75 supports-[backdrop-filter]:backdrop-blur-md">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-mono text-sm text-text-primary sm:text-base"
        >
          {"> Zain Raza"}
          <span className="cursor-blink text-terminal-green">_</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link cursor-pointer font-mono text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-border inline-flex items-center justify-center border border-border-accent bg-bg-secondary px-4 py-2 font-mono text-xs text-text-primary transition-all duration-300 hover:scale-[1.02] hover:border-accent-primary"
          >
            Resume
          </a>
        </div>

        <DeferredMobileNav />
      </nav>
    </header>
  );
}
