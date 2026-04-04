import React from 'react';
import type { Metadata } from 'next';

import AboutNew from '@/components/new-ui/AboutNew';
import HeaderNew from '@/components/new-ui/HeaderNew';
import HeroNew from '@/components/new-ui/HeroNew';
import FooterNew from '@/components/new-ui/FooterNew';

import ServicesNew from '@/components/new-ui/ServicesNew';
import HomeSeoContentRu from '@/components/new-ui/HomeSeoContentRu';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import { webPageJsonLd } from '@/lib/jsonld/web-page';
import { blogSocialMetadata } from '@/lib/site-og';

const canonical = 'https://meddera.md/';
const HOME_TITLE = 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах';
const HOME_DESCRIPTION = `Екатерина Пынтя – опытный дерматолог-косметолог в Бельцах.
  Клиника Meddera: дерматология, косметология,
  удаление образований, ботокс, филлеры, мезотерапия.`;

const jsonLd = webPageJsonLd({
  pageUrl: canonical,
  name: HOME_TITLE,
  description: HOME_DESCRIPTION.replace(/\s+/g, ' ').trim(),
  inLanguage: 'ru-MD',
  breadcrumbItems: [{ name: 'Главная', item: canonical }],
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical,
    languages: {
      ru: canonical,
      ro: 'https://meddera.md/ro',
      'x-default': canonical,
    },
  },
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  ...blogSocialMetadata({
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: canonical,
    locale: 'ru_MD',
    type: 'website',
    imageUrl: 'https://meddera.md/assets/img/baner5.jpg',
    imageAlt: HOME_TITLE,
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
      <HeaderNew locale="ru" />
      <HeroNew />

      <main>
        <HomeSeoContentRu />
        <AboutNew locale="ru" />
        <ServicesNew locale="ru" />
      </main>

      <ContactsDynamicWrapperRu />
      <FooterNew locale="ru" />
    </>
  );
}
