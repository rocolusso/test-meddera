import React from 'react';

import ServicesNew from '@/components/new-ui/ServicesNew';
import HeaderNew from '@/components/new-ui/HeaderNew';
import FooterNew from '@/components/new-ui/FooterNew';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import ServicesIndexSeoContent from '@/components/new-ui/ServicesIndexSeoContent';
import { servicesIndexJsonLd } from '@/lib/jsonld/services-index';
import { OG_SITE_NAME } from '@/lib/site-og';

const canonical = 'https://meddera.md/services';
const roUrl = 'https://meddera.md/ro/services';

const PAGE_TITLE = 'Услуги клиники Meddera в Бельцах — дерматология и косметология | Meddera';
const PAGE_DESC =
  'Полный перечень услуг: консультации дерматолога и дерматокосметолога, чистка лица, пилинг, мезотерапия, ботокс, филлеры, увеличение губ, дермапен и другие процедуры в Бельцах.';
const OG_IMAGE = 'https://meddera.md/assets/img/baner5.jpg';

const jsonLd = servicesIndexJsonLd({
  pageUrl: canonical,
  locale: 'ru',
  pageName: PAGE_TITLE,
  description: PAGE_DESC,
  breadcrumbItems: [
    { name: 'Главная', item: 'https://meddera.md/' },
    { name: 'Услуги', item: canonical },
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
        alt: 'Услуги клиники Meddera, Бельцы',
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

export default function ServicesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeaderNew locale="ru" />
      <main className="border-b border-border/40 bg-gradient-to-b from-muted/20 via-background to-background">
        <ServicesNew locale="ru" titleAs="h1" />
        <ServicesIndexSeoContent locale="ru" />
      </main>

      <ContactsDynamicWrapperRu />

      <FooterNew locale="ru" />
    </>
  );
}
