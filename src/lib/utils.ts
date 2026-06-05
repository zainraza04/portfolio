import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAVBAR_OFFSET = 80;

export function scrollToSection(id: string, offset = NAVBAR_OFFSET) {
  const element = document.getElementById(id);
  if (!element) return false;

  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });

  // Re-check intersections after smooth scroll finishes (fixes reveal animations on mobile)
  window.setTimeout(() => {
    window.dispatchEvent(new Event("scroll"));
  }, 600);

  return true;
}
