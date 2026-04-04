import React from 'react';

import HeaderNew from '@/components/new-ui/HeaderNew';
import FooterNew from '@/components/new-ui/FooterNew';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';
import ContactsIndexSeoContent from '@/components/new-ui/ContactsIndexSeoContent';
import { contactsPageJsonLd } from '@/lib/jsonld/contacts-page';
import { OG_SITE_NAME } from '@/lib/site-og';

const canonical = 'https://meddera.md/ro/contacts';
const ruUrl = 'https://meddera.md/contacts';

const PAGE_TITLE = 'Contacte clinica Meddera Bălți — programare și adresă | Meddera';
const PAGE_DESC =
  'Contacte clinica Meddera la Bălți: str. Ștefan cel Mare, 13, telefon, formular de programare, program cu programare prealabilă, hartă.';
const OG_IMAGE = 'https://meddera.md/assets/img/img_contacts.jpg';

const jsonLd = contactsPageJsonLd({
  pageUrl: canonical,
  locale: 'ro',
  pageName: PAGE_TITLE,
  description: PAGE_DESC,
  breadcrumbItems: [
    { name: 'Acasă', item: 'https://meddera.md/ro' },
    { name: 'Contacte', item: canonical },
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
        alt: 'Contacte clinica Meddera, Bălți',
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

export default function ContactsPageRo() {
  return (
    <>
      <script
        type="application/ld+json"
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeaderNew locale="ro" />
      <main className="border-b border-border/40 bg-gradient-to-b from-muted/20 via-background to-background">
        <ContactsIndexSeoContent locale="ro" />
      </main>

      <ContactsDynamicWrapperRo hideHeading />

      <FooterNew locale="ro" />
    </>
  );
}
