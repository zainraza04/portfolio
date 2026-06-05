"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, useSyncExternalStore } from "react";

interface TerminalTextProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

function subscribeReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function TerminalText({
  strings,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className,
}: TerminalTextProps) {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const [displayText, setDisplayText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    const currentString = strings[stringIndex] ?? "";

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = currentString.slice(0, displayText.length + 1);
          setDisplayText(next);

          if (next === currentString) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          const next = currentString.slice(0, displayText.length - 1);
          setDisplayText(next);

          if (next === "") {
            setIsDeleting(false);
            setStringIndex((prev) => (prev + 1) % strings.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    stringIndex,
    strings,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    reducedMotion,
  ]);

  const text = reducedMotion ? (strings[0] ?? "") : displayText;

  return (
    <span className={cn("font-mono", className)}>
      {text}
      <span className="cursor-blink text-terminal-green">|</span>
    </span>
  );
}
