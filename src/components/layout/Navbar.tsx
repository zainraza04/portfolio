"use client";

import { Button } from "@/components/ui/Button";
import { cn, scrollToSection } from "@/lib/utils";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

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

  // Track scroll past hero for stronger blur
  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById("hero");
      const heroHeight = heroEl?.offsetHeight ?? window.innerHeight;
      setScrolledPastHero(window.scrollY > heroHeight * 0.7);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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

    const doNavigate = () => {
      if (isHome) {
        scrollToSection(id);
      } else {
        router.push(`/#${id}`);
      }
    };

    if (fromMobile) {
      window.setTimeout(doNavigate, 200);
    } else {
      doNavigate();
    }
  };

  const scrollToContact = (fromMobile = false) => {
    handleNavClick("#contact", fromMobile);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolledPastHero
          ? "border-b border-accent-primary/20 bg-bg-primary/95 backdrop-blur-xl"
          : "border-b border-border/50 bg-bg-primary/80 backdrop-blur-md",
      )}
    >
      {/* Scroll progress bar */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-x-0 top-0 h-[2px] bg-linear-to-r from-accent-primary to-accent-secondary"
          style={{ scaleX, transformOrigin: "left", zIndex: 51 }}
        />
      )}

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-mono text-sm text-text-primary sm:text-base"
          onClick={closeMobileMenu}
        >
          {"> Zain Raza"}
          <span className="cursor-blink text-terminal-green">_</span>
        </Link>

        <LayoutGroup>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = isHome && activeSection === id;
              const linkClassName = cn(
                "nav-link relative font-mono text-sm transition-colors",
                isActive
                  ? "text-accent-secondary"
                  : "text-text-secondary hover:text-text-primary",
              );

              const pill = isActive && !prefersReducedMotion ? (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute -bottom-1.5 left-0 right-0 h-[3px] rounded-full bg-accent-primary/80"
                  style={{
                    boxShadow: "0 0 8px var(--accent-secondary), 0 0 16px var(--accent-primary)",
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              ) : null;

              if (!isHome) {
                return (
                  <Link
                    key={link.href}
                    href={`/${link.href}`}
                    className={linkClassName}
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                    {pill}
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
                  {pill}
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
        </LayoutGroup>

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
            className="relative z-60 border-t border-border bg-bg-secondary md:hidden"
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
