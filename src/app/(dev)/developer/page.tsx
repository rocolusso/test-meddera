import type { Metadata } from 'next';

import DeveloperPage from '@/components/developer/DeveloperPage';
import { DEVELOPER_COPY } from '@/components/developer/copy';

const copy = DEVELOPER_COPY.ru;

/**
 * The page is closed from search engines twice: this robots tag and an X-Robots-Tag header (next.config.ts).
 * It is not listed in sitemap.xml and not disallowed in robots.txt (a disallow would hide the noindex from crawlers).
 */
export const metadata: Metadata = {
  title: copy.metaTitle,
  description: copy.metaDescription,
  robots: { index: false, follow: false },
  openGraph: {
    title: copy.metaTitle,
    description: copy.metaDescription,
    url: 'https://meddera.md/developer',
    type: 'profile',
    images: [{ url: '/assets/img/developer.jpeg', width: 960, height: 960, alt: 'Alexander Shchedrov' }],
  },
  twitter: {
    card: 'summary',
    title: copy.metaTitle,
    description: copy.metaDescription,
    images: ['/assets/img/developer.jpeg'],
  },
};

export default function DeveloperRoute() {
  return <DeveloperPage />;
}
