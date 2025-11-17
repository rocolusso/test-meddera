import React from 'react';

import './globals.css';
// import GoogleAnalytics from '@/components/GoogleAnalytics';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleTagManager } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Дерматолог Бельци Екатерина Пынтя',
    image: 'https://meddera.md/assets/img/about_2k.jpg',
    jobTitle: 'Dermatolog',
    worksFor: {
      '@type': 'MedicalClinic',
      name: 'Meddera Beauty Clinic',
      image: 'https://meddera.md/assets/img/img_contacts.jpg',
      url: 'https://meddera.md/',
      telephone: '+373-68-550-030',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Strada Stefan Cel Mare 13',
        addressLocality: 'Вălti',
        postalCode: 'MD-3100',
        addressCountry: 'MD',
      },
    },
    priceRange: '$$',
    url: 'https://meddera.md/',
    medicalSpecialty: 'Дерматология',
    telephone: '+373-68-550-030',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Strada Stefan Cel Mare 13',
      addressLocality: 'Вălti',
      postalCode: 'MD-3100',
      addressCountry: 'MD',
    },
  };
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-language" content="ru" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="rXIslMFNaqfd12QEhlizeQ" async />
        <script
          type="application/ld+json"
          /* eslint-disable-next-line react/no-danger */
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          src="/api/cache/ahrefs"
          defer
        />
        <script
          src="/api/cache/google/maps1"
          defer
        />
        <script
          src="/api/cache/google/maps2"
          defer
        />
        <script
          src="/api/cache/github"
          defer
        />
      </head>
      {/* <GoogleAnalytics /> */}
      <Analytics />
      <SpeedInsights />
      <GoogleTagManager gtmId="GTM-KFCP3D5F" />
      <body>
        {children}
      </body>
    </html>
  );
}
