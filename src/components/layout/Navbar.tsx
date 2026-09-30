"use client";

import { siteConfig } from "@/data/site";
import { cn, scrollToSection } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("work");
  const prefersReducedMotion = useReducedMotion();
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome || !window.location.hash) return;

    const id = window.location.hash.slice(1);
    const timer = window.setTimeout(() => scrollToSection(id), 150);

    return () => window.clearTimeout(timer);
  }, [isHome, pathname]);

  useEffect(() => {
    if (!isHome) return;

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [isHome]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

  const handleNavClick = (href: string, fromMobile = false) => {
    const id = href.replace("#", "");
    closeMobileMenu();

    const doNavigate = () => {
      if (isHome) {
        scrollToSection(id);
      } else {
        router.push(`/#${id}`);
      }
    };

    if (fromMobile) {
      // Defer until menu closes — fixes iOS/mobile tap + scroll conflicts
      window.setTimeout(doNavigate, 200);
    } else {
      doNavigate();
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-bg-primary/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-mono text-sm text-text-primary sm:text-base"
          onClick={closeMobileMenu}
        >
          {"> Zain Raza"}
          <span className="cursor-blink text-terminal-green">_</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const linkClassName = cn(
              "nav-link font-mono text-sm text-text-secondary transition-colors hover:text-text-primary",
              isHome && activeSection === id && "nav-link-active text-accent-secondary",
            );

            if (!isHome) {
              return (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  className={linkClassName}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className={linkClassName}
              >
                {link.label}
              </button>
            );
          })}
          <Link
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-border inline-flex items-center justify-center border border-border-accent bg-bg-secondary px-4 py-2 font-mono text-xs text-text-primary transition-all duration-300 hover:scale-[1.02] hover:border-accent-primary"
          >
            Resume
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-text-primary touch-manipulation lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="relative z-[60] border-t border-border bg-bg-secondary lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavClick(link.href, true);
                    }}
                    className={cn(
                      "block py-3 font-mono text-sm text-text-secondary touch-manipulation active:text-accent-primary",
                      activeSection === id && "text-accent-secondary",
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
              <Link
                href={siteConfig.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="mt-2 inline-flex w-full items-center justify-center border border-accent-primary bg-gradient-to-r from-accent-primary to-accent-secondary px-6 py-3 font-mono text-sm font-medium text-white touch-manipulation"
              >
                View Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
