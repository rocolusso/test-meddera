import React from 'react';

import AboutNew from '@/components/new-ui/AboutNew';
import AboutIndexSeoContent from '@/components/new-ui/AboutIndexSeoContent';
import HeaderNew from '@/components/new-ui/HeaderNew';
import FooterNew from '@/components/new-ui/FooterNew';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';
import { aboutPageJsonLd } from '@/lib/jsonld/about-page';
import { OG_SITE_NAME } from '@/lib/site-og';

const canonical = 'https://meddera.md/ro/about';
const ruUrl = 'https://meddera.md/about';

const PAGE_TITLE = 'Despre mine — Ecaterina Pîntea, dermatolog Bălți | Meddera';
const PAGE_DESC =
  'Biografie, studii și specializare: Ecaterina Pîntea — medic dermatovenerolog și cosmetolog, fondatoarea clinicii Meddera din Bălți. Peste 11 ani de experiență.';
const OG_IMAGE = 'https://meddera.md/assets/img/about_2k.jpg';

const aboutJsonLd = aboutPageJsonLd({
  pageUrl: canonical,
  locale: 'ro',
  pageName: PAGE_TITLE,
  description: PAGE_DESC,
  imageUrl: OG_IMAGE,
  breadcrumbItems: [
    { name: 'Acasă', item: 'https://meddera.md/ro' },
    { name: 'Despre mine', item: canonical },
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
        alt: 'Ecaterina Pîntea — dermatolog-cosmetolog, clinica Meddera, Bălți',
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

export default function AboutPageRo() {
  return (
    <>
      <script
        type="application/ld+json"
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <HeaderNew locale="ro" />
      <main className="border-b border-border/40 bg-gradient-to-b from-muted/20 via-background to-background">
        <AboutNew locale="ro" titleAs="h1" />
        <AboutIndexSeoContent locale="ro" />
      </main>

      <ContactsDynamicWrapperRo />

      <FooterNew locale="ro" />
    </>
  );
}
