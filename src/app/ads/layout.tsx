import React from 'react';
import type { Metadata } from 'next';

import { webPageJsonLd } from '@/lib/jsonld/web-page';
import { blogSocialMetadata } from '@/lib/site-og';

const ADS_URL = 'https://meddera.md/ads';
const ADS_TITLE = 'Meddera — рекламные страницы';
const ADS_DESC = 'Целевые страницы для рекламных кампаний клиники Meddera.';

const adsJsonLd = webPageJsonLd({
  pageUrl: ADS_URL,
  name: ADS_TITLE,
  description: ADS_DESC,
  inLanguage: 'ru-MD',
});

export const metadata: Metadata = {
  title: ADS_TITLE,
  description: ADS_DESC,
  robots: { index: false, follow: false },
  ...blogSocialMetadata({
    title: ADS_TITLE,
    description: ADS_DESC,
    url: ADS_URL,
    locale: 'ru_MD',
    type: 'website',
  }),
};

export default function AdsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: JSON.stringify(adsJsonLd) }}
      />
      {children}
    </>
  );
}
