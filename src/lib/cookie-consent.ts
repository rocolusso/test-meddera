'use client';

import { useSyncExternalStore } from 'react';

const CONSENT_KEY = 'cookies-consent-accepted';

/** `unknown` only on the server and during hydration; the banner and the dock decide after that. */
export type CookieConsent = 'unknown' | 'pending' | 'accepted';

const listeners = new Set<() => void>();
// Used when localStorage is blocked, so "Принять" still closes the banner for this visit.
let acceptedInMemory = false;

function read(): CookieConsent {
  if (acceptedInMemory) return 'accepted';
  try {
    return window.localStorage.getItem(CONSENT_KEY) === 'true' ? 'accepted' : 'pending';
  } catch {
    return 'pending';
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener('storage', listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('storage', listener);
  };
}

export function acceptCookies(): void {
  acceptedInMemory = true;
  try {
    window.localStorage.setItem(CONSENT_KEY, 'true');
  } catch {
    // keep the in-memory flag only
  }
  listeners.forEach((listener) => listener());
}

export function useCookieConsent(): CookieConsent {
  return useSyncExternalStore(subscribe, read, () => 'unknown');
}
