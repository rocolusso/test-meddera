import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, FileText } from 'lucide-react';

import { FOOTER_RECENT_ARTICLE_COUNT, getLatestArticles } from '@/blog-data/registry';
import { servicesLinksRo, servicesLinksRu } from '@/lib/db-content';
import { getBlogClusterImage } from '@/lib/blog-cluster-image';
import { NAV_LINKS, toNavLocale } from '@/lib/nav-links';
import { FaMapLocationDot, FaPhoneVolume } from 'react-icons/fa6';

import { cn } from '@/lib/utils';

/** Logo variant with white lettering (dark footer). */
const LOGO_LIGHT_SRC = '/assets/img/pintea_logo_light.svg';

/** Pofo widget-title: small uppercase gray Montserrat. */
function WidgetTitle({ eyebrow, title, className }: { eyebrow: string; title: string; className?: string }) {
  return (
    <div className={cn('mb-6', className)}>
      <p className="alt-font text-[11px] font-semibold uppercase leading-4 tracking-[1px] text-[#939393]">{eyebrow}</p>
      <h2 className="alt-font mt-2 text-[13px] font-semibold uppercase leading-5 tracking-[0.5px] text-[#b7b7b7]">
        {title}
      </h2>
    </div>
  );
}

const footerLinkClass =
  'text-[13px] leading-[22px] text-[#939393] transition-colors hover:text-white';

function FooterNew({ locale }: { locale: string }) {
  const date = new Date();
  const currentYear = date.getFullYear();
  const isRu = locale === 'ru';
  const loc = toNavLocale(locale);
  const services = isRu ? servicesLinksRu : servicesLinksRo;
  const latestArticles = getLatestArticles(FOOTER_RECENT_ARTICLE_COUNT);
  const homeHref = isRu ? '/' : '/ro';
  const mapHref = isRu ? '/contacts#lazy-map' : '/ro/contacts#lazy-map';

  return (
    /* Pofo footer-classic-dark (same in light and dark theme). */
    <footer className="relative bg-pofo-dark text-[#939393]">
      {/* Top strip with logo */}
      <div className="bg-pofo-darker py-[30px] md:py-[50px]">
        <div className="pofo-container flex justify-center">
          <Link href={homeHref} className="block w-[200px] transition-opacity hover:opacity-80 md:w-[240px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO_LIGHT_SRC}
              alt={isRu ? 'Meddera — логотип клиники' : 'Meddera — logo clinica'}
              width={300}
              height={68}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          </Link>
        </div>
      </div>

      {/* Widget area */}
      <div className="pofo-container pt-[50px] pb-[30px] md:pt-[70px]">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[30px]">
          {/* Услуги */}
          <div className="min-w-0 sm:col-span-2">
            <WidgetTitle eyebrow={isRu ? 'Направления' : 'Servicii'} title={isRu ? 'Услуги' : 'Servicii'} />
            <ul className="grid grid-cols-1 gap-x-[30px] gap-y-2 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.id}>
                  {/* Native <a>: footer link, below the fold — instant SPA transition isn't needed here, */}
                  {/* skipping next/link drops these from the client hydration payload. */}
                  <a href={service.url} className={footerLinkClass}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Разделы */}
          <div className="min-w-0">
            <WidgetTitle eyebrow={isRu ? 'Разделы' : 'Secțiuni'} title={isRu ? 'Главная' : 'Acasă'} />
            <nav aria-label={isRu ? 'Основная навигация' : 'Navigare principală'}>
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((item) => (
                  <li key={item.key}>
                    <Link href={item.href[loc]} className={footerLinkClass}>
                      {item.label[loc]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Контакты */}
          <div className="min-w-0">
            <WidgetTitle eyebrow={isRu ? 'Связь' : 'Contact'} title={isRu ? 'Контакты' : 'Contacte'} />
            <ul className="flex min-w-0 flex-col divide-y divide-pofo-line">
              <li className="min-w-0 pb-4">
                <Link
                  href={mapHref}
                  className="group flex min-w-0 items-center gap-3.5 text-[#b7b7b7] transition-colors hover:text-white"
                >
                  <span
                    className="flex size-9 shrink-0 items-center justify-center rounded-full bg-deep-pink text-white"
                    aria-hidden
                  >
                    <FaMapLocationDot className="size-[15px]" />
                  </span>
                  <span className="min-w-0 flex-1 break-words text-left text-[13px] leading-[22px]">
                    Balti, Stefan Cel Mare, 13
                  </span>
                </Link>
              </li>
              <li className="min-w-0 pt-4">
                <Link
                  href="tel:+37368550030"
                  className="group flex min-w-0 items-center gap-3.5 text-[#b7b7b7] transition-colors hover:text-white"
                >
                  <span
                    className="flex size-9 shrink-0 items-center justify-center rounded-full bg-deep-pink text-white"
                    aria-hidden
                  >
                    <FaPhoneVolume className="size-[14px]" />
                  </span>
                  <span className="alt-font min-w-0 flex-1 text-left text-[14px] font-semibold tabular-nums">
                    +37368550030
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Блог — latest-post widget */}
        <div className="mt-[50px] border-t border-pofo-line pt-[50px]">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <WidgetTitle
              eyebrow={isRu ? 'Блог' : 'Blog'}
              title={isRu ? 'Свежие материалы' : 'Materiale recente'}
              className="mb-0"
            />
            <Link
              href={isRu ? '/blog' : '/ro/blog'}
              className="alt-font group inline-flex items-center gap-1.5 self-start border-b border-current pb-0.5 text-[11px] font-semibold uppercase tracking-[0.5px] text-[#b7b7b7] transition-colors hover:text-white sm:self-auto"
            >
              {isRu ? 'Все публикации' : 'Toate articolele'}
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <ul className="grid grid-cols-1 gap-x-[30px] sm:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((post) => {
              const href = isRu ? `/blog/${post.slugRu}` : `/ro/blog/${post.slugRo}`;
              const title = isRu ? post.titleRu : post.titleRo;
              const thumb = getBlogClusterImage(post.clusterId);
              return (
                <li key={post.id} className="border-b border-pofo-line py-[15px]">
                  {/* Native <a>: footer link, below the fold — instant SPA transition isn't needed here, */}
                  {/* skipping next/link drops these from the client hydration payload. */}
                  <a href={href} className="group flex gap-4">
                    <span className="relative flex size-[60px] shrink-0 items-center justify-center overflow-hidden bg-[#232323] text-deep-pink" aria-hidden>
                      {thumb ? (
                        <Image src={thumb} alt="" fill sizes="60px" className="object-cover transition-opacity group-hover:opacity-70" />
                      ) : (
                        <FileText className="size-5" strokeWidth={1.5} />
                      )}
                    </span>
                    <span className="min-w-0 flex-1 self-center text-[13px] leading-[20px] text-[#939393] transition-colors group-hover:text-white">
                      <span className="line-clamp-3">{title}</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Нижняя полоса */}
      <div className="bg-pofo-darker py-6">
        <div className="pofo-container text-center">
          <Link
            href={homeHref}
            className="text-[12px] leading-5 text-[#939393] transition-colors hover:text-white"
          >
            {`© Meddera | Ecaterina Pintea | 2018 - ${currentYear}`}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default FooterNew;
