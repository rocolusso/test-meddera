'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function FacebookPixelPageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Initial PageView is sent by bootstrap code.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    let cancelled = false;

    /**
     * Defer SPA PageView slightly so queued fbevents modules can finish registering.
     * Prevents intermittent `__fbeventsModules[e] is not a function` when `fbq` runs too soon.
     */
    const timer = window.setTimeout(() => {
      if (cancelled) return;
      try {
        if (typeof window.fbq === 'function') {
          window.fbq('track', 'PageView');
        }
      } catch {
        /* ignore — blockers / duplicate loaders */
      }
    }, 50);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [pathname, searchParams]);

  return null;
}
