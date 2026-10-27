'use client';

import { useEffect } from 'react';

/**
 * Counts open full-screen overlays (lead quiz, search panel, burger menu) so that
 * nothing else (for example the scroll teaser) opens on top of them.
 */
let openOverlays = 0;

export function isAnyOverlayOpen(): boolean {
  return openOverlays > 0;
}

/** Call with `true` while the overlay is open; the lock is released on close and on unmount. */
export function useOverlayLock(open: boolean): void {
  useEffect(() => {
    if (!open) return undefined;
    openOverlays += 1;
    return () => {
      openOverlays = Math.max(0, openOverlays - 1);
    };
  }, [open]);
}
