import React from 'react';

import AboutNew from '@/components/new-ui/AboutNew';
import AboutIndexSeoContent from '@/components/new-ui/AboutIndexSeoContent';
import HeaderNew from '@/components/new-ui/HeaderNew';
import FooterNew from '@/components/new-ui/FooterNew';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import { aboutPageJsonLd } from '@/lib/jsonld/about-page';
import { OG_SITE_NAME } from '@/lib/site-og';

const canonical = 'https://meddera.md/about';
const roUrl = 'https://meddera.md/ro/about';

const PAGE_TITLE = 'Обо мне — Екатерина Пынтя, дерматолог-косметолог в Бельцах | Meddera';
const PAGE_DESC =
  'Биография, образование и специализация Екатерины Пынтя — врача-дерматовенеролога и косметолога, основателя клиники Meddera в Бельцах. Опыт более 11 лет.';
const OG_IMAGE = 'https://meddera.md/assets/img/about_2k.jpg';

const aboutJsonLd = aboutPageJsonLd({
  pageUrl: canonical,
  locale: 'ru',
  pageName: PAGE_TITLE,
  description: PAGE_DESC,
  imageUrl: OG_IMAGE,
  breadcrumbItems: [
    { name: 'Главная', item: 'https://meddera.md/' },
    { name: 'Обо мне', item: canonical },
  ],
});

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical,
    languages: {
      ru: canonical,
      ro: roUrl,
      'x-default': canonical,
    },
  },
  title: PAGE_TITLE,
  description: PAGE_DESC,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: canonical,
    type: 'website',
    locale: 'ru_MD',
    siteName: OG_SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя — дерматолог-косметолог, клиника Meddera, Бельцы',
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

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <HeaderNew locale="ru" />
      <main className="border-b border-border/40 bg-gradient-to-b from-muted/20 via-background to-background">
        <AboutNew locale="ru" titleAs="h1" />
        <AboutIndexSeoContent locale="ru" />
      </main>

      <ContactsDynamicWrapperRu />

      <FooterNew locale="ru" />
    </>
  );
}
