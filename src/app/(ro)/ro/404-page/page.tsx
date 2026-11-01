import type { Metadata } from 'next';

import NotFoundView from '@/components/not-found/NotFoundView';
import { NOT_FOUND_COPY } from '@/components/not-found/copy';

export const metadata: Metadata = {
  title: NOT_FOUND_COPY.ro.metaTitle,
  robots: { index: false, follow: true },
};

/**
 * RO 404 page (PLAN 404L-01). Not linked anywhere: proxy.ts rewrites every unknown RO URL here with status 404,
 * so the visitor keeps the address they typed. Rendered statically.
 */
export default function NotFoundPage() {
  return <NotFoundView locale="ro" />;
}
