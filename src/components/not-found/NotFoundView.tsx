import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaMapLocationDot, FaPhoneVolume } from 'react-icons/fa6';

import HeaderNew from '@/components/new-ui/HeaderNew';
import FooterNew from '@/components/new-ui/FooterNew';
import { getAllHubs, blogPathRo, blogPathRu } from '@/blog-data/registry';
import { RECEPTION_SCHEDULE_COPY } from '@/lib/contact-reception-schedule';
import { servicesLinksRo, servicesLinksRu } from '@/lib/db-content';
import { isGoogleReviewsEnabled } from '@/lib/google-reviews/config';
import { getNavLinks } from '@/lib/nav-links';
import { SEARCH_UI_ENABLED } from '@/lib/search/config';
import { SERVICE_SLUGS } from '@/lib/service-slugs';

import clinicPhoto from '../../../public/assets/img/img_contacts.jpg';

import { NOT_FOUND_COPY, type NotFoundLocale } from './copy';
import MissingPath from './MissingPath';
import NotFoundSuggestions, { type SuggestionCandidate } from './NotFoundSuggestions';
import NotFoundTracker from './NotFoundTracker';
import { slugWords } from './suggest-words';

interface MapLink { href: string; label: string }

const PHONE_HREF = 'tel:+37368550030';
const PHONE_LABEL = '+373 68 550 030';

/** Hub title without the brand suffix and the part after the colon: "Ботокс в Бельцах". */
function shortHubTitle(title: string): string {
  return title.split('|')[0].split(':')[0].trim();
}

function siteMap(locale: NotFoundLocale) {
  const sections: MapLink[] = getNavLinks(isGoogleReviewsEnabled())
    .map((l) => ({ href: l.href[locale], label: l.label[locale] }));

  const known = new Set<string>(SERVICE_SLUGS);
  const serviceLinks = (locale === 'ru' ? servicesLinksRu : servicesLinksRo)
    .filter((s) => known.has(s.url.split('/').pop() ?? ''));
  const services: MapLink[] = serviceLinks.map((s) => ({ href: s.url, label: s.title }));

  const allHubs = getAllHubs();
  const hubs: MapLink[] = allHubs.map((h) => (locale === 'ru'
    ? { href: blogPathRu(h.slugRu), label: shortHubTitle(h.titleRu) }
    : { href: blogPathRo(h.slugRo), label: shortHubTitle(h.titleRo) }));

  const candidates: SuggestionCandidate[] = [
    ...serviceLinks.map((s) => ({
      href: s.url,
      label: s.title,
      kind: 'service' as const,
      keys: slugWords(s.url.split('/').pop() ?? ''),
    })),
    ...allHubs.map((h, i) => ({
      href: hubs[i].href,
      label: hubs[i].label,
      kind: 'article' as const,
      keys: slugWords(`${h.slugRu}-${h.slugRo}`),
    })),
  ];

  return { sections, services, hubs, candidates };
}

/** Pofo list-style-3: thin pink dash in front of every link. */
function LinkList({ links, className }: { links: MapLink[]; className?: string }) {
  return (
    <ul className={className ?? 'space-y-2.5'}>
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

function ColumnTitle({ children, count }: { children: React.ReactNode; count?: number }) {
  return (
    <h3 className="alt-font mb-5 flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[1px] text-pofo-heading">
      {children}
      {count ? <span className="text-[12px] font-medium text-muted-foreground">{count}</span> : null}
    </h3>
  );
}

function ContactRow({ icon, href, title, hint, strong }: {
  icon: React.ReactNode;
  href?: string;
  title: string;
  hint: string;
  strong?: boolean;
}) {
  const body = (
    <>
      <span aria-hidden className="flex size-8 shrink-0 items-center justify-center rounded-full bg-deep-pink text-white">
        {icon}
      </span>
      <span className="min-w-0 text-[14px] leading-[22px] text-pofo-heading">
        <span className={strong ? 'alt-font font-semibold tabular-nums' : undefined}>{title}</span>
        <span className="block text-[13px] text-muted-foreground">{hint}</span>
      </span>
    </>
  );
  return (
    <li>
      {href ? (
        <Link href={href} className="flex items-start gap-3 transition-colors hover:[&>span:last-child>span:first-child]:text-deep-pink">
          {body}
        </Link>
      ) : (
        <div className="flex items-start gap-3">{body}</div>
      )}
    </li>
  );
}

/**
 * 404 page (PLAN 404L-01), built after Pofo 404.html. A compact dark photo strip (15–30% of the screen height)
 * with "404", the missing address, search and buttons; right under it the "did you mean" links and the site map,
 * so navigation is visible on the first screen. Header and footer are the site's own.
 * The photo strip stays dark in both themes; the rest follows the theme tokens.
 */
export default function NotFoundView({ locale }: { locale: NotFoundLocale }) {
  const t = NOT_FOUND_COPY[locale];
  const isRu = locale === 'ru';
  const { sections, services, hubs, candidates } = siteMap(locale);
  const blogHref = isRu ? '/blog' : '/ro/blog';
  const mapHref = isRu ? '/contacts#lazy-map' : '/ro/contacts#lazy-map';
  const schedule = RECEPTION_SCHEDULE_COPY[locale];
  const scheduleTitle = schedule.hoursFooter.split('·')[0].trim();

  return (
    <>
      <HeaderNew locale={locale} />

      <main className="bg-background" data-page-not-found="">
        <section className="relative isolate flex min-h-[15svh] items-center overflow-hidden py-5 md:h-[24svh] md:max-h-[30svh] md:min-h-[180px] md:py-0">
          <Image
            src={clinicPhoto}
            alt=""
            fill
            sizes="100vw"
            className="-z-20 object-cover object-center"
            placeholder="blur"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-[#1c1c1c]/85 dark:bg-[#0b0b0b]/88" />

          <div className="pofo-container flex flex-col gap-3.5 text-white md:flex-row md:items-center md:gap-8 lg:gap-10">
            <div className="flex min-w-0 flex-1 items-center gap-4 md:gap-8 lg:gap-10">
              <span
                aria-hidden
                className="alt-font shrink-0 border-r border-white/20 pr-4 text-[54px] font-semibold leading-none tracking-[-1px] md:pr-8 md:text-[88px] lg:pr-10 lg:text-[112px] lg:tracking-[-2px]"
              >
                {t.code}
              </span>
              <div className="min-w-0">
                <h1 className="alt-font text-[13px] font-semibold uppercase tracking-[1px] text-deep-pink md:text-[14px]">
                  {t.heading}
                </h1>
                <p className="mt-1 max-w-[440px] text-[13px] leading-[20px] text-[#cfcfcf] md:mt-2 md:text-[15px] md:leading-[24px]">
                  <MissingPath fallback={t.text} before={t.pathBefore} after={t.pathAfter} />
                </p>
              </div>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3 md:w-[340px] lg:w-[400px]">
              {SEARCH_UI_ENABLED ? (
                <form
                  action={isRu ? '/search' : '/ro/search'}
                  method="get"
                  role="search"
                  className="hidden h-[46px] bg-white md:flex"
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
                    className="min-w-0 flex-1 bg-white px-[18px] text-[15px] text-[#232323] placeholder:text-[#8c8c8c] focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label={t.searchButton}
                    className="flex w-[50px] shrink-0 items-center justify-center bg-white text-[#6f6f6f] transition-colors hover:text-deep-pink"
                  >
                    <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </form>
              ) : null}

              <div className="flex gap-2.5">
                <Link
                  href={isRu ? '/' : '/ro'}
                  className="alt-font inline-flex h-10 flex-1 items-center justify-center whitespace-nowrap rounded-[4px] border-2 border-white px-3 text-[10.5px] font-semibold uppercase tracking-[1px] text-white transition-colors hover:bg-white hover:text-[#232323] md:h-[42px] md:text-[11px]"
                >
                  <svg aria-hidden viewBox="0 0 24 24" className="mr-1.5 size-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t.home}
                </Link>
                <button
                  type="button"
                  data-open-quiz=""
                  data-cta-source="not_found"
                  className="alt-font inline-flex h-10 flex-1 items-center justify-center whitespace-nowrap rounded-[4px] border-2 border-deep-pink bg-deep-pink px-3 text-[10.5px] font-semibold uppercase tracking-[1px] text-white transition-colors hover:bg-transparent md:h-[42px] md:text-[11px]"
                >
                  {t.book}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="pofo-container pb-14 pt-7 md:pb-[72px] md:pt-12">
          <NotFoundSuggestions
            candidates={candidates}
            title={t.suggestTitle}
            serviceLabel={t.suggestService}
            articleLabel={t.suggestArticle}
          />

          <div className="mb-[26px] border-b border-border pb-[18px] md:mb-[34px] md:flex md:items-end md:justify-between md:gap-5">
            <div>
              <div className="eyebrow">{t.mapEyebrow}</div>
              <h2 className="alt-font text-[22px] font-semibold leading-[30px] text-pofo-heading md:text-[28px] md:leading-[36px]">
                {t.mapTitle}
              </h2>
            </div>
            <p className="mt-1.5 max-w-[360px] text-[14px] leading-[22px] text-muted-foreground md:mt-0 md:text-right">
              {t.mapText}
            </p>
          </div>

          <nav
            aria-label={t.mapTitle}
            className="grid grid-cols-1 gap-[30px] max-md:[&>div:not(:last-child)]:border-b max-md:[&>div:not(:last-child)]:border-border max-md:[&>div:not(:last-child)]:pb-[26px] md:grid-cols-2 md:gap-x-7 md:gap-y-9 lg:grid-cols-[1fr_2fr_1.3fr_1.2fr] lg:gap-10"
          >
            <div>
              <ColumnTitle>{t.sections}</ColumnTitle>
              <LinkList links={sections} className="grid grid-cols-2 gap-x-5 gap-y-2.5 md:grid-cols-1" />
            </div>
            <div>
              <ColumnTitle count={services.length}>{t.services}</ColumnTitle>
              <LinkList links={services} className="grid gap-x-7 gap-y-2.5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2" />
            </div>
            <div>
              <ColumnTitle>{t.blog}</ColumnTitle>
              <LinkList links={[...hubs, { href: blogHref, label: t.allArticles }]} />
            </div>
            <div>
              <ColumnTitle>{t.contacts}</ColumnTitle>
              <ul className="space-y-4">
                <ContactRow
                  icon={<FaMapLocationDot className="size-[14px]" />}
                  href={mapHref}
                  title={t.address}
                  hint={t.addressHint}
                />
                <ContactRow
                  icon={<FaPhoneVolume className="size-[13px]" />}
                  href={PHONE_HREF}
                  title={PHONE_LABEL}
                  hint={t.phoneHint}
                  strong
                />
                <ContactRow
                  icon={<FaClock className="size-[13px]" />}
                  title={scheduleTitle}
                  hint={t.scheduleHint}
                />
              </ul>
            </div>
          </nav>
        </section>
      </main>

      <FooterNew locale={locale} />
      <NotFoundTracker />
    </>
  );
}
