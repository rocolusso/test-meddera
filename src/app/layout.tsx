import React from 'react';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { getImageProps } from 'next/image';

import {
  HERO_IMAGE_QUALITY,
  HERO_IMAGE_SIZES,
  HERO_IMAGE_SRC,
} from '@/components/new-ui/HeroNew';

export const metadata: Metadata = {
  metadataBase: new URL('https://meddera.md'),
};

import './globals.css';
// import GoogleAnalytics from '@/components/GoogleAnalytics';

import DeferredAhrefs from '@/components/DeferredAhrefs';
import { getThemeBootstrapScript } from '@/lib/theme-inline-script';
import DeferredClarity from '@/components/DeferredClarity';
import DeferredCookiesPolicy from '@/components/DeferredCookiesPolicy';
import DeferredFloatingCallButton from '@/components/DeferredFloatingCallButton';
import DeferredGoogleTagManager from '@/components/DeferredGoogleTagManager';
import DeferredTelClickTracker from '@/components/DeferredTelClickTracker';
import DeferredStickyLeadCta from '@/components/DeferredStickyLeadCta';
import SectionQueryScroll from '@/components/SectionQueryScroll';
import DeferredVercelInsights from '@/components/DeferredVercelInsights';

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
  const enableSectionQueryScroll = normalizedPath === '/' || normalizedPath === '/ro';
  const isHomePage = normalizedPath === '/' || normalizedPath === '/ro';
  /**
   * Preload the hero image on home routes so the browser starts the LCP request
   * before discovering it through the rendered <Image>. Uses the same srcset that
   * next/image will render to avoid double download.
   */
  const heroPreload = isHomePage
    ? (() => {
      const { props: heroProps } = getImageProps({
        src: HERO_IMAGE_SRC,
        alt: '',
        quality: HERO_IMAGE_QUALITY,
        sizes: HERO_IMAGE_SIZES,
        priority: true,
        fill: true,
      });
      return {
        srcSet: heroProps.srcSet,
        sizes: heroProps.sizes,
      };
    })()
    : null;
  const showFloatingCallButton = !normalizedPath.startsWith('/ads');
  const showLeadStickyCta = !normalizedPath.startsWith('/ads');
  const isVercel = process.env.VERCEL === '1';
  const isProductionDeployment =
    process.env.NODE_ENV === 'production' &&
    (isVercel ? process.env.VERCEL_ENV === 'production' : true);
  const isEnabled = (value: string | undefined) =>
    value !== '0' && value !== 'false' && value !== 'off';
  const enableGtm = isProductionDeployment && isEnabled(process.env.NEXT_PUBLIC_ENABLE_GTM);
  const enableClarity = isProductionDeployment && isEnabled(process.env.NEXT_PUBLIC_ENABLE_CLARITY);
  const enableAhrefs = isProductionDeployment && isEnabled(process.env.NEXT_PUBLIC_ENABLE_AHREFS);
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
      <head suppressHydrationWarning>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-language" content={htmlLang} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: getThemeBootstrapScript() }}
        />
        {alternates ? (
          <>
            <link rel="alternate" hrefLang="ru" href={alternates.ru} />
            <link rel="alternate" hrefLang="ro" href={alternates.ro} />
            <link rel="alternate" hrefLang="x-default" href={alternates.ru} />
          </>
        ) : null}
        {heroPreload && heroPreload.srcSet ? (
          <link
            rel="preload"
            as="image"
            // eslint-disable-next-line react/no-unknown-property
            imageSrcSet={heroPreload.srcSet}
            // eslint-disable-next-line react/no-unknown-property
            imageSizes={heroPreload.sizes}
            fetchPriority="high"
          />
        ) : null}
        {enableGtm ? <link rel="dns-prefetch" href="https://www.googletagmanager.com" /> : null}
        {enableClarity ? <link rel="dns-prefetch" href="https://www.clarity.ms" /> : null}
        <link rel="dns-prefetch" href="https://www.google.com" />
        {enableAhrefs ? <link rel="dns-prefetch" href="https://analytics.ahrefs.com" /> : null}
        {enableGtm ? <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" /> : null}
        {enableClarity ? <link rel="preconnect" href="https://www.clarity.ms" crossOrigin="" /> : null}
        {enableAhrefs ? <link rel="preconnect" href="https://analytics.ahrefs.com" crossOrigin="" /> : null}
        <script
          suppressHydrationWarning
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased" suppressHydrationWarning>
        {enableSectionQueryScroll ? <SectionQueryScroll /> : null}
        {children}
        {showVercelInsights ? <DeferredVercelInsights /> : null}
        {enableGtm ? <DeferredGoogleTagManager /> : null}
        {enableClarity ? <DeferredClarity /> : null}
        {enableAhrefs ? <DeferredAhrefs /> : null}
        {showFloatingCallButton ? <DeferredFloatingCallButton /> : null}
        {showLeadStickyCta ? <DeferredStickyLeadCta /> : null}
        <DeferredCookiesPolicy />
        <DeferredTelClickTracker />
      </body>
    </html>
  );
}
