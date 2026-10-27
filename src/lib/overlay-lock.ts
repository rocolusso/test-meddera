'use client';

import { useEffect } from 'react';

/**
 * Counts open full-screen overlays (lead quiz, search panel, burger menu) so that
 * nothing else (for example the scroll teaser) opens on top of them.
 */
let openOverlays = 0;
const listeners = new Set<() => void>();

function setOpenOverlays(next: number): void {
  if (next === openOverlays) return;
  const wasOpen = openOverlays > 0;
  openOverlays = next;
  if (wasOpen !== next > 0) listeners.forEach((listener) => listener());
}

export function isAnyOverlayOpen(): boolean {
  return openOverlays > 0;
}

/** For useSyncExternalStore: notified only when "some overlay is open" flips. */
export function subscribeOverlayLock(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Call with `true` while the overlay is open; the lock is released on close and on unmount. */
export function useOverlayLock(open: boolean): void {
  useEffect(() => {
    if (!open) return undefined;
    setOpenOverlays(openOverlays + 1);
    return () => {
      setOpenOverlays(Math.max(0, openOverlays - 1));
    };
  }, [open]);
}
