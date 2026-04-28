import React from 'react';

import HeaderNew from '@/components/new-ui/HeaderNew';
import FooterNew from '@/components/new-ui/FooterNew';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import ContactsIndexSeoContent from '@/components/new-ui/ContactsIndexSeoContent';
import { contactsPageJsonLd } from '@/lib/jsonld/contacts-page';
import { OG_SITE_NAME } from '@/lib/site-og';

const canonical = 'https://meddera.md/contacts';
const roUrl = 'https://meddera.md/ro/contacts';

const PAGE_TITLE = 'Контакты клиники Meddera в Бельцах — запись и адрес | Meddera';
const PAGE_DESC =
  'Контакты клиники Meddera в Бельцах: ул. Штефан чел Маре, 13, телефон, форма записи на консультацию, часы работы по предварительной записи, карта.';
const OG_IMAGE = 'https://meddera.md/assets/img/img_contacts.jpg';

const jsonLd = contactsPageJsonLd({
  pageUrl: canonical,
  locale: 'ru',
  pageName: PAGE_TITLE,
  description: PAGE_DESC,
  breadcrumbItems: [
    { name: 'Главная', item: 'https://meddera.md/' },
    { name: 'Контакты', item: canonical },
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
        alt: 'Контакты клиники Meddera, Бельцы',
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

export default function ContactsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeaderNew locale="ru" />
      <main className="border-b border-border/40 bg-gradient-to-b from-muted/20 via-background to-background">
        <ContactsIndexSeoContent locale="ru" />
      </main>

      <ContactsDynamicWrapperRu hideHeading />

      <FooterNew locale="ru" />
    </>
  );
}
