'use client';

import { useSyncExternalStore } from 'react';

const noopSubscribe = () => () => {};
const getPath = () => {
  const raw = window.location.pathname;
  try {
    return decodeURI(raw);
  } catch {
    return raw;
  }
};
const getServerPath = () => null;

/**
 * Pathname the browser shows. The 404 page is static (proxy.ts rewrites unknown URLs to it), so the real address
 * exists only on the client: null on the server and during hydration, then the path.
 */
export function useLocationPath(): string | null {
  return useSyncExternalStore(noopSubscribe, getPath, getServerPath);
}
