import React from 'react';
import type { Metadata } from 'next';

import { webPageJsonLd } from '@/lib/jsonld/web-page';
import { blogSocialMetadata } from '@/lib/site-og';

const BLOCKED_URL = 'https://meddera.md/blocked';
const BLOCKED_TITLE = 'Доступ ограничен | Meddera';
const BLOCKED_DESC =
  'Доступ к сайту клиники Meddera с вашего региона ограничен. Страница отображается при блокировке по геолокации.';

const blockedJsonLd = webPageJsonLd({
  pageUrl: BLOCKED_URL,
  name: BLOCKED_TITLE,
  description: BLOCKED_DESC,
  inLanguage: 'ru-MD',
});

export const metadata: Metadata = {
  title: BLOCKED_TITLE,
  description: BLOCKED_DESC,
  robots: { index: false, follow: false },
  alternates: {
    canonical: BLOCKED_URL,
  },
  ...blogSocialMetadata({
    title: BLOCKED_TITLE,
    description: BLOCKED_DESC,
    url: BLOCKED_URL,
    locale: 'ru_MD',
    type: 'website',
  }),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blockedJsonLd) }}
      />
      <div className="container mx-auto flex h-screen flex-col items-center justify-center gap-10">
        <h1 className="text-xl font-bold uppercase">Access Denied</h1>
        <p>We’re sorry, but access to this website is not allowed from your location.</p>
      </div>
    </>
  );
}
