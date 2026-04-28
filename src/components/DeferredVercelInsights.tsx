'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

/**
 * Vercel Analytics + Speed Insights are valuable but their JS payload competes
 * with hydration-critical work. Defer them until the browser is idle (or until
 * the first user interaction, whichever comes first) to keep TBT/FCP healthy
 * while still capturing real-user metrics.
 *
 * Timeout 3200ms gives Insights enough time to capture the LCP cycle on slow
 * connections without blocking the initial paint.
 */

const Analytics = dynamic(
  () => import('@vercel/analytics/react').then((mod) => mod.Analytics),
  { ssr: false }
);

const SpeedInsights = dynamic(
  () => import('@vercel/speed-insights/next').then((mod) => mod.SpeedInsights),
  { ssr: false }
);

export default function DeferredVercelInsights() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let idleId: number | undefined;
    let fallbackId: number | undefined;
    let interactionHandler: (() => void) | undefined;

    const cleanupInteraction = () => {
      if (!interactionHandler) return;
      window.removeEventListener('pointerdown', interactionHandler, true);
      window.removeEventListener('keydown', interactionHandler, true);
      window.removeEventListener('touchstart', interactionHandler, true);
      interactionHandler = undefined;
    };

    const run = () => {
      cleanupInteraction();
      setReady(true);
    };

    interactionHandler = () => run();
    window.addEventListener('pointerdown', interactionHandler, true);
    window.addEventListener('keydown', interactionHandler, true);
    window.addEventListener('touchstart', interactionHandler, true);

    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(run, { timeout: 3200 });
    } else {
      fallbackId = window.setTimeout(run, 3200);
    }

    return () => {
      cleanupInteraction();
      if (idleId != null && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId);
      }
      if (fallbackId != null) {
        window.clearTimeout(fallbackId);
      }
    };
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
