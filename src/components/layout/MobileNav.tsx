"use client";

import { siteConfig } from "@/data/site";
import { scrollToSection } from "@/lib/utils";
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

export function MobileNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
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
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    closeMobileMenu();
    window.setTimeout(() => {
      if (isHome) {
        scrollToSection(id);
      } else {
        router.push(`/#${id}`);
      }
    }, 200);
  };

  return (
    <>
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center text-text-primary touch-manipulation lg:hidden"
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {mobileOpen && (
        <div className="mobile-nav-panel absolute inset-x-0 top-full z-[60] border-t border-border bg-bg-secondary lg:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block cursor-pointer py-3 font-mono text-sm text-text-secondary touch-manipulation active:text-accent-primary"
              >
                {link.label}
              </a>
            ))}
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
        </div>
      )}
    </>
  );
}
