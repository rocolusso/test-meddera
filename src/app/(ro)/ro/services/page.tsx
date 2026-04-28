import React from 'react';

import ServicesNew from '@/components/new-ui/ServicesNew';
import HeaderNew from '@/components/new-ui/HeaderNew';
import FooterNew from '@/components/new-ui/FooterNew';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';
import ServicesIndexSeoContent from '@/components/new-ui/ServicesIndexSeoContent';
import { servicesIndexJsonLd } from '@/lib/jsonld/services-index';
import { OG_SITE_NAME } from '@/lib/site-og';

const canonical = 'https://meddera.md/ro/services';
const ruUrl = 'https://meddera.md/services';

const PAGE_TITLE = 'Servicii Meddera Bălți — dermatologie și cosmetologie | Meddera';
const PAGE_DESC =
  'Servicii Meddera Bălți: dermatolog, dermatocosmetolog, curățare, peeling, mezoterapie, botox, fillere, dermapen. Programări online.';
const OG_IMAGE = 'https://meddera.md/assets/img/baner5.jpg';

const jsonLd = servicesIndexJsonLd({
  pageUrl: canonical,
  locale: 'ro',
  pageName: PAGE_TITLE,
  description: PAGE_DESC,
  breadcrumbItems: [
    { name: 'Acasă', item: 'https://meddera.md/ro' },
    { name: 'Servicii', item: canonical },
  ],
});

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical,
    languages: {
      ru: ruUrl,
      ro: canonical,
      'x-default': ruUrl,
    },
  },
  title: PAGE_TITLE,
  description: PAGE_DESC,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: canonical,
    type: 'website',
    locale: 'ro_MD',
    siteName: OG_SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Servicii clinica Meddera, Bălți',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [OG_IMAGE],
    site: '@your_twitter_handle',
  },
};

export default function ServicesIndexPageRo() {
  return (
    <>
      <script
        type="application/ld+json"
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeaderNew locale="ro" />
      <main className="border-b border-border/40 bg-gradient-to-b from-muted/20 via-background to-background">
        <ServicesNew locale="ro" titleAs="h1" />
        <ServicesIndexSeoContent locale="ro" />
      </main>

      <ContactsDynamicWrapperRo />

      <FooterNew locale="ro" />
    </>
  );
}
