"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

interface LazyMountProps {
  children: ReactNode;
  /** Minimum height reserved before mount to limit layout shift */
  minHeight?: string;
  /** Root margin for IntersectionObserver (preload before fully visible) */
  rootMargin?: string;
  className?: string;
}

/**
 * Defers mounting (and thus dynamic import resolution) until near viewport.
 * Use around next/dynamic client islands so their JS is not in the critical path.
 */
export function LazyMount({
  children,
  minHeight = "20rem",
  rootMargin = "200px 0px",
  className,
}: LazyMountProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      className={className}
      style={show ? undefined : { minHeight }}
    >
      {show ? children : null}
    </div>
  );
}
