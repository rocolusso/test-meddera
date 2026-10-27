'use client';

import dynamic from 'next/dynamic';

const loadSearchPanel = () => import('./SearchPanel');

/** The panel and everything it needs are fetched only when someone opens the search. */
export const LazySearchPanel = dynamic(loadSearchPanel, { ssr: false });

/** Warms the chunk up (hover, focus, burger opened) so the first click does not wait for the network. */
export function preloadSearchPanel() {
  loadSearchPanel().catch(() => {});
}
