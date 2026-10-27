'use client';

import { useSyncExternalStore } from 'react';

import { getReceptionIndicator, type ReceptionIndicator } from '@/lib/contact-reception-schedule';

/**
 * Reception state in the clinic's time zone (see getReceptionIndicator), re-read once a minute and
 * when the tab becomes visible again. `null` on the server and during hydration, so the first
 * client render matches the server HTML and the dot appears right after it.
 */
const listeners = new Set<() => void>();
let timer: ReturnType<typeof setInterval> | undefined;

function notify() {
  listeners.forEach((listener) => listener());
}

function onVisibility() {
  if (document.visibilityState === 'visible') notify();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (listeners.size === 1) {
    timer = setInterval(notify, 60_000);
    document.addEventListener('visibilitychange', onVisibility);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      if (timer) clearInterval(timer);
      timer = undefined;
      document.removeEventListener('visibilitychange', onVisibility);
    }
  };
}

const getSnapshot = (): ReceptionIndicator | null => getReceptionIndicator(new Date());
const getServerSnapshot = (): ReceptionIndicator | null => null;

export function useReceptionIndicator(): ReceptionIndicator | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
