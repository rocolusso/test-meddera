import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { headers } from 'next/headers';

export const metadata: Metadata = {
  metadataBase: new URL('https://meddera.md'),
};

import './globals.css';
// import GoogleAnalytics from '@/components/GoogleAnalytics';

import { getThemeBootstrapScript } from '@/lib/theme-inline-script';
import DeferredClarity from '@/components/DeferredClarity';
import DeferredCookiesPolicy from '@/components/DeferredCookiesPolicy';
import DeferredGoogleTagManager from '@/components/DeferredGoogleTagManager';
import SectionQueryScroll from '@/components/SectionQueryScroll';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const reqHeaders = await headers();
  const pathname = reqHeaders.get('x-pathname') ?? '/';
  const normalizedPath = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/';
  const origin = 'https://meddera.md';

  const alternates = (() => {
    // Only emit alternates when we know both RU and RO exist.
    if (normalizedPath === '/') {
      return { ru: `${origin}/`, ro: `${origin}/ro` };
    }
    if (normalizedPath === '/ro') {
      return { ru: `${origin}/`, ro: `${origin}/ro` };
    }

    // Services use suffix `/ro`.
    if (normalizedPath.startsWith('/services/')) {
      if (normalizedPath.endsWith('/ro')) {
        const ruPath = normalizedPath.replace(/\/ro$/, '');
        return { ru: `${origin}${ruPath}`, ro: `${origin}${normalizedPath}` };
      }
      return { ru: `${origin}${normalizedPath}`, ro: `${origin}${normalizedPath}/ro` };
    }

    return null;
  })();

  // RO locale: `/ro`, `/ro/blog`, `/ro/...`, and services mirror `.../ro` (not `/ro/...` prefix).
  const isRoLocale =
    normalizedPath === '/ro' ||
    normalizedPath.startsWith('/ro/') ||
    (normalizedPath.length > 1 && normalizedPath.endsWith('/ro'));
  const htmlLang = isRoLocale ? 'ro' : 'ru';
  const isVercel = process.env.VERCEL === '1';
  /** Preview/dev deployments skip Vercel Analytics / Speed Insights to reduce main-thread JS. */
  const showVercelInsights = isVercel && process.env.VERCEL_ENV === 'production';
  const clinicAddress = {
    '@type': 'PostalAddress' as const,
    streetAddress: 'Strada Stefan Cel Mare 13',
    addressLocality: 'Bălți',
    postalCode: 'MD-3100',
    addressCountry: 'MD',
  };

  const physicianId = `${origin}/#physician`;
  const clinicId = `${origin}/#clinic`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Physician',
        '@id': physicianId,
        name: 'Дерматолог Бельци Екатерина Пынтя',
        image: 'https://meddera.md/assets/img/about_2k.jpg',
        url: 'https://meddera.md/',
        telephone: '+373-68-550-030',
        address: clinicAddress,
        medicalSpecialty: 'https://schema.org/Dermatology',
      },
      {
        '@type': 'MedicalClinic',
        '@id': clinicId,
        name: 'Meddera Beauty Clinic',
        image: 'https://meddera.md/assets/img/img_contacts.jpg',
        url: 'https://meddera.md/',
        telephone: '+373-68-550-030',
        priceRange: '$$',
        address: clinicAddress,
      },
    ],
  };

  return (
    <html
      lang={htmlLang}
      style={{ overflowX: 'hidden' }}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-language" content={htmlLang} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{ __html: getThemeBootstrapScript() }}
        />
        {alternates ? (
          <>
            <link rel="alternate" hrefLang="ru" href={alternates.ru} />
            <link rel="alternate" hrefLang="ro" href={alternates.ro} />
            <link rel="alternate" hrefLang="x-default" href={alternates.ru} />
          </>
        ) : null}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.clarity.ms" crossOrigin="" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" crossOrigin="" />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="rXIslMFNaqfd12QEhlizeQ"
          strategy="lazyOnload"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SectionQueryScroll />
        {children}
        {showVercelInsights ? <Analytics /> : null}
        {showVercelInsights ? <SpeedInsights /> : null}
        <DeferredGoogleTagManager />
        <DeferredClarity />
        <DeferredCookiesPolicy />
      </body>
    </html>
  );
}
