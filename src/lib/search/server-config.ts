import { SEARCH_UI_ENABLED } from './config';

/** Server half of the search switch (see ./config.ts). Read at runtime, never sent to the browser. */
export function isSearchServerEnabled(): boolean {
  return process.env.SEARCH_ENABLED === 'true';
}

let warned = false;

/** One console warning when the two flags disagree, so a half-enabled search does not go unnoticed. */
export function warnOnSearchFlagMismatch(): void {
  if (warned || SEARCH_UI_ENABLED === isSearchServerEnabled()) return;
  warned = true;
  // eslint-disable-next-line no-console
  console.warn(
    `[search] NEXT_PUBLIC_SEARCH_ENABLED=${String(SEARCH_UI_ENABLED)} but SEARCH_ENABLED=${String(isSearchServerEnabled())}: `
      + 'search is only on when both are "true". NEXT_PUBLIC_SEARCH_ENABLED is baked in at build time, redeploy after changing it.',
  );
}
