import React from 'react';
import type { Metadata } from 'next';

import HeaderNew from '@/components/new-ui/HeaderNew';
import HeroImagePreload from '@/components/new-ui/HeroImagePreload';
import HeroNew from '@/components/new-ui/HeroNew';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import {
  DynamicAboutNew,
  DynamicFooterNew,
  DynamicHomeSeoContentRu,
  DynamicServicesNew,
} from '@/components/home/HomeBelowFoldDynamic';
import { webPageJsonLd } from '@/lib/jsonld/web-page';
import { blogSocialMetadata } from '@/lib/site-og';

const canonical = 'https://meddera.md/';
const HOME_TITLE = 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах';
const HOME_DESCRIPTION =
  'Екатерина Пынтя — дерматолог-косметолог в Бельцах, клиника Meddera: дерматология, косметология, удаление образований, ботокс, филлеры, мезотерапия.';

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
      <HeroImagePreload />
      <script
        type="application/ld+json"
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeaderNew locale="ru" />
      <HeroNew />

      <main>
        <DynamicHomeSeoContentRu />
        <DynamicAboutNew locale="ru" />
        <DynamicServicesNew locale="ru" />
      </main>

      <ContactsDynamicWrapperRu />
      <DynamicFooterNew locale="ru" />
    </>
  );
}
