import React from 'react';
import type { Metadata } from 'next';

import AboutNew from '@/components/new-ui/AboutNew';
import HeaderNew from '@/components/new-ui/HeaderNew';
import FooterNew from '@/components/new-ui/FooterNew';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';
import ServicesNew from '@/components/new-ui/ServicesNew';
import HeroNew from '@/components/new-ui/HeroNew';
import HomeSeoContentRo from '@/components/new-ui/HomeSeoContentRo';
import { webPageJsonLd } from '@/lib/jsonld/web-page';
import { blogSocialMetadata } from '@/lib/site-og';

const canonical = 'https://meddera.md/ro';
const RO_HOME_TITLE = 'Dermatolog Bălți - Consultații Dermatologice Profesionale | Meddera';
const RO_HOME_DESCRIPTION =
  'Dermatolog în Bălți — Meddera: consultații pentru acnee, eczeme, psoriazis, alunițe și alte afecțiuni ale pielii. Programări online.';

const jsonLd = webPageJsonLd({
  pageUrl: canonical,
  name: RO_HOME_TITLE,
  description: RO_HOME_DESCRIPTION.replace(/\s+/g, ' ').trim(),
  inLanguage: 'ro-MD',
  breadcrumbItems: [{ name: 'Acasă', item: canonical }],
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical,
    languages: {
      ru: 'https://meddera.md/',
      ro: canonical,
      'x-default': 'https://meddera.md/',
    },
  },
  title: RO_HOME_TITLE,
  description: RO_HOME_DESCRIPTION,
  ...blogSocialMetadata({
    title: RO_HOME_TITLE,
    description: RO_HOME_DESCRIPTION,
    url: canonical,
    locale: 'ro_MD',
    type: 'website',
    imageUrl: 'https://meddera.md/assets/img/baner5.jpg',
    imageAlt: 'Meddera — dermatolog Bălți',
    imageWidth: 1200,
    imageHeight: 630,
  }),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeaderNew locale="ro" />
      <HeroNew />
      <main>
        <HomeSeoContentRo />
        <AboutNew locale="ro" />
        <ServicesNew locale="ro" />
      </main>

      <ContactsDynamicWrapperRo />
      <FooterNew locale="ro" />
    </>
  );
}
