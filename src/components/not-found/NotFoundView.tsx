import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import HeaderNew from '@/components/new-ui/HeaderNew';
import FooterNew from '@/components/new-ui/FooterNew';
import SectionHeading from '@/components/pofo/SectionHeading';
import { getAllHubs, blogPathRo, blogPathRu } from '@/blog-data/registry';
import { servicesLinksRo, servicesLinksRu } from '@/lib/db-content';
import { isGoogleReviewsEnabled } from '@/lib/google-reviews/config';
import { getNavLinks } from '@/lib/nav-links';
import { SEARCH_UI_ENABLED } from '@/lib/search/config';
import { SERVICE_SLUGS } from '@/lib/service-slugs';

import clinicPhoto from '../../../public/assets/img/img_contacts.jpg';

import { NOT_FOUND_COPY, type NotFoundLocale } from './copy';
import NotFoundTracker from './NotFoundTracker';

type MapLink = { href: string; label: string };

/** Hub title without the brand suffix and the part after the colon: "Ботокс в Бельцах". */
function shortHubTitle(title: string): string {
  return title.split('|')[0].split(':')[0].trim();
}

function siteMap(locale: NotFoundLocale) {
  const sections: MapLink[] = getNavLinks(isGoogleReviewsEnabled()).map((l) => ({ href: l.href[locale], label: l.label[locale] }));

  const known = new Set<string>(SERVICE_SLUGS);
  const services: MapLink[] = (locale === 'ru' ? servicesLinksRu : servicesLinksRo)
    .filter((s) => known.has(s.url.split('/').pop() ?? ''))
    .map((s) => ({ href: s.url, label: s.title }));

  const hubs: MapLink[] = getAllHubs().map((h) =>
    locale === 'ru'
      ? { href: blogPathRu(h.slugRu), label: shortHubTitle(h.titleRu) }
      : { href: blogPathRo(h.slugRo), label: shortHubTitle(h.titleRo) },
  );

  return { sections, services, hubs };
}

/** Pofo list-style-3: thin pink dash in front of every link. */
function LinkList({ links, columns = 1 }: { links: MapLink[]; columns?: 1 | 2 }) {
  return (
    <ul className={columns === 2 ? 'grid gap-x-8 gap-y-2.5 sm:grid-cols-2' : 'space-y-2.5'}>
      {links.map((l) => (
        <li
          key={l.href}
          className="relative pl-[22px] text-[15px] leading-[24px] before:absolute before:left-0 before:top-[12px] before:h-px before:w-2.5 before:bg-deep-pink before:content-['']"
        >
          <Link href={l.href} className="text-pofo-heading transition-colors duration-200 hover:text-deep-pink">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="alt-font mb-5 text-[13px] font-semibold uppercase tracking-[1px] text-pofo-heading">{children}</h3>
  );
}

/**
 * 404 page (PLAN 404L-01), built after Pofo 404.html: a dark photo block with a translucent card ("404", heading,
 * search, buttons), then a site map for navigation. Header and footer are the site's own.
 * The photo block stays dark in both themes; the site map follows the theme tokens.
 */
export default function NotFoundView({ locale }: { locale: NotFoundLocale }) {
  const t = NOT_FOUND_COPY[locale];
  const { sections, services, hubs } = siteMap(locale);
  const blogHref = locale === 'ru' ? '/blog' : '/ro/blog';

  return (
    <>
      <HeaderNew locale={locale} />

      <main className="bg-background" data-page-not-found="">
        <section className="relative isolate overflow-hidden">
          <Image
            src={clinicPhoto}
            alt=""
            fill
            sizes="100vw"
            className="-z-20 object-cover object-center"
            placeholder="blur"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-[#1c1c1c]/80 dark:bg-[#0b0b0b]/88" />

          <div className="pofo-container flex min-h-[560px] items-center justify-center py-16 md:min-h-[640px] md:py-24">
            <div className="w-full max-w-[640px] bg-black/45 px-6 py-10 text-center sm:px-12 sm:py-14 md:px-16">
              <span className="alt-font block text-[96px] font-semibold leading-none text-white sm:text-[130px]" aria-hidden>
                {t.code}
              </span>
              <h1 className="alt-font mt-6 text-[14px] font-semibold uppercase tracking-[1px] text-deep-pink sm:mt-8">
                {t.heading}
              </h1>
              <p className="mx-auto mt-3 max-w-[420px] text-[15px] leading-[26px] text-[#cfcfcf] sm:text-[16px] sm:leading-[28px]">
                {t.text}
              </p>

              {SEARCH_UI_ENABLED ? (
                <form
                  action={locale === 'ru' ? '/search' : '/ro/search'}
                  method="get"
                  role="search"
                  className="mx-auto mt-8 flex max-w-[460px] bg-white sm:mt-10"
                >
                  <label htmlFor="not-found-q" className="sr-only">
                    {t.searchLabel}
                  </label>
                  <input
                    id="not-found-q"
                    name="q"
                    type="search"
                    maxLength={100}
                    placeholder={t.searchPlaceholder}
                    className="h-[52px] min-w-0 flex-1 bg-white px-5 text-[15px] text-[#232323] placeholder:text-[#8c8c8c] focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label={t.searchButton}
                    className="flex h-[52px] w-[56px] shrink-0 items-center justify-center bg-white text-[#6f6f6f] transition-colors hover:text-deep-pink"
                  >
                    <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </form>
              ) : null}

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row">
                <Link
                  href={locale === 'ru' ? '/' : '/ro'}
                  className="alt-font inline-flex h-11 items-center justify-center rounded-[4px] border-2 border-white px-6 text-[12px] font-semibold uppercase tracking-[1px] text-white transition-colors hover:bg-white hover:text-[#232323]"
                >
                  <svg aria-hidden viewBox="0 0 24 24" className="mr-2 size-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t.home}
                </Link>
                <button
                  type="button"
                  data-open-quiz=""
                  data-cta-source="not_found"
                  className="alt-font inline-flex h-11 items-center justify-center rounded-[4px] border-2 border-deep-pink bg-deep-pink px-6 text-[12px] font-semibold uppercase tracking-[1px] text-white transition-colors hover:bg-transparent"
                >
                  {t.book}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="pofo-container section-y">
          <SectionHeading eyebrow={t.mapEyebrow} title={t.mapTitle} separator />
          <p className="mx-auto mt-4 max-w-xl text-center text-[15px] leading-[26px] text-muted-foreground">{t.mapText}</p>

          <nav aria-label={t.mapTitle} className="mt-12 grid gap-12 md:grid-cols-[1fr_2fr_1.2fr] md:gap-10">
            <div>
              <ColumnTitle>{t.sections}</ColumnTitle>
              <LinkList links={sections} />
            </div>
            <div>
              <ColumnTitle>{t.services}</ColumnTitle>
              <LinkList links={services} columns={2} />
            </div>
            <div>
              <ColumnTitle>{t.blog}</ColumnTitle>
              <LinkList links={[...hubs, { href: blogHref, label: t.allArticles }]} />
            </div>
          </nav>
        </section>
      </main>

      <FooterNew locale={locale} />
      <NotFoundTracker />
    </>
  );
}
