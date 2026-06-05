"use client";

import { Button } from "@/components/ui/Button";
import { cn, scrollToSection } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
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
  }, []);

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

    const doScroll = () => scrollToSection(id);

    if (fromMobile) {
      // Defer until menu closes — fixes iOS/mobile tap + scroll conflicts
      window.setTimeout(doScroll, 200);
    } else {
      doScroll();
    }
  };

  const scrollToContact = (fromMobile = false) => {
    handleNavClick("#contact", fromMobile);
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

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "nav-link font-mono text-sm text-text-secondary transition-colors hover:text-text-primary",
                  activeSection === id && "nav-link-active text-accent-secondary",
                )}
              >
                {link.label}
              </button>
            );
          })}
          <Button
            variant="outline"
            className="gradient-border px-4 py-2 text-xs"
            onClick={() => scrollToContact()}
          >
            Hire Me
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-text-primary touch-manipulation md:hidden"
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
            className="relative z-[60] border-t border-border bg-bg-secondary md:hidden"
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
              <Button
                variant="primary"
                className="mt-2 w-full touch-manipulation"
                onClick={() => scrollToContact(true)}
              >
                Hire Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
