import React from 'react';

import Script from 'next/script';
import { headers } from 'next/headers';

import './globals.css';
// import GoogleAnalytics from '@/components/GoogleAnalytics';

import DeferredGoogleTagManager from '@/components/DeferredGoogleTagManager';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get('x-nonce') ?? undefined;
  const isVercel = process.env.VERCEL === '1';
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

  const microsoftClarity = `
  (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "w2ch4v2j05");
  `;
  return (
    <html
      lang="ru"
      data-scroll-behavior="smooth"
      style={{ overflowX: 'hidden' }}
    >
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-language" content="ru" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.clarity.ms" crossOrigin="" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" crossOrigin="" />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="rXIslMFNaqfd12QEhlizeQ"
          strategy="lazyOnload"
          nonce={nonce}
        />
        <script
          type="application/ld+json"
          nonce={nonce}
          /* eslint-disable-next-line react/no-danger */
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          nonce={nonce}
          /* eslint-disable-next-line react/no-danger */
          dangerouslySetInnerHTML={{ __html: microsoftClarity }}
        />
      </head>
      {/* <GoogleAnalytics /> */}
      {isVercel ? <Analytics /> : null}
      {isVercel ? <SpeedInsights /> : null}
      <DeferredGoogleTagManager nonce={nonce} />
      <body>
        {children}
      </body>
    </html>
  );
}
