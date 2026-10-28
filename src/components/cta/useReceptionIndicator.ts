'use client';

import { useSyncExternalStore } from 'react';

import { getReceptionIndicator } from '@/lib/contact-reception-schedule';
import { INDICATORS_CTA_LOGIC_ENABLED } from '@/lib/cta/indicators-config';

/** What the call-to-action buttons show: a green dot ('open') or a red one ('closed'). */
export type CtaReceptionState = 'open' | 'closed';

/**
 * State of the dot and the animations on the CTA buttons.
 *
 * Logic off (NEXT_PUBLIC_INDICATORS_CTA_LOGIC_ENABLED is not "true"): always 'open', on the server
 * too, so the green dot is already in the HTML and the animation never stops.
 *
 * Logic on: the reception state in the clinic's time zone (see getReceptionIndicator), re-read once
 * a minute and when the tab becomes visible again. A day off counts as 'closed': red dot, no pulse.
 * `null` on the server and during hydration, so the first client render matches the server HTML and
 * the dot appears right after it.
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
  if (!INDICATORS_CTA_LOGIC_ENABLED) return () => {};
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

const getSnapshot = (): CtaReceptionState | null => {
  if (!INDICATORS_CTA_LOGIC_ENABLED) return 'open';
  return getReceptionIndicator(new Date()) === 'open' ? 'open' : 'closed';
};
const getServerSnapshot = (): CtaReceptionState | null => (INDICATORS_CTA_LOGIC_ENABLED ? null : 'open');

export function useReceptionIndicator(): CtaReceptionState | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
