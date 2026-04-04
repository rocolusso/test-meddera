import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, FileText } from 'lucide-react';

import { FOOTER_RECENT_ARTICLE_COUNT, getLatestArticles } from '@/blog-data/registry';
import { servicesLinksRo, servicesLinksRu } from '@/lib/db-content';
import { FaMapLocationDot, FaPhoneVolume } from 'react-icons/fa6';

import { cn } from '@/lib/utils';

type FooterHeadingProps = {
  eyebrow: string;
  title: string;
  className?: string;
};

function FooterHeading({ eyebrow, title, className }: FooterHeadingProps) {
  return (
    <div className={cn('mb-5 sm:mb-6', className)}>
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">{eyebrow}</p>
      <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
      <div className="mt-3 flex items-center gap-2" aria-hidden>
        <span className="h-px w-10 shrink-0 bg-brand-gold" />
        <span className="h-px max-w-24 flex-1 bg-gradient-to-r from-brand-gold/55 to-transparent" />
      </div>
    </div>
  );
}

function FooterNew({ locale }: { locale: string }) {
  const date = new Date();
  const currentYear = date.getFullYear();
  const isRu = locale === 'ru';
  const services = isRu ? servicesLinksRu : servicesLinksRo;
  const latestArticles = getLatestArticles(FOOTER_RECENT_ARTICLE_COUNT);
  const homeHref = isRu ? '/' : '/ro';
  const mapHref = isRu ? '/contacts#lazy-map' : '/ro/contacts#lazy-map';

  return (
    <footer className="relative border-t border-border/80 bg-background">
      {/* Верхняя декоративная линия */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/45 to-transparent"
        aria-hidden
      />

      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -right-32 top-0 size-[420px] rounded-full bg-brand-gold/[0.045] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-0 size-[320px] rounded-full bg-muted-foreground/[0.04] blur-3xl"
          aria-hidden
        />

        <div className="relative border-b border-border/50 bg-gradient-to-b from-muted/25 via-background to-muted/15">
          <div className="container mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-16 lg:px-6 lg:py-20">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12 xl:gap-16">
              {/* Услуги — прежняя вёрстка */}
              <div className="min-w-0 lg:col-span-6 xl:col-span-7">
                <div className="mb-6 flex flex-col gap-2 sm:mb-8">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                    {isRu ? 'Направления' : 'Servicii'}
                  </span>
                  <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {isRu ? 'Услуги' : 'Servicii'}
                  </h2>
                  <div className="h-px w-12 bg-brand-gold/70" aria-hidden />
                </div>
                <ul className="grid grid-cols-1 gap-x-6 gap-y-0.5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                  {services.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={service.url}
                        className="group flex rounded-lg px-2 py-2.5 text-sm leading-snug text-foreground transition-colors hover:bg-accent/70 hover:text-brand-gold sm:px-3 sm:py-2"
                      >
                        <span className="border-b border-transparent pb-px transition-colors group-hover:border-brand-gold/50">
                          {service.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Навигация + контакты — прежняя вёрстка */}
              <div className="grid min-w-0 grid-cols-1 gap-12 sm:grid-cols-2 lg:col-span-6 lg:gap-10 xl:col-span-5">
                <div className="min-w-0">
                  <div className="mb-6 flex flex-col gap-2 sm:mb-8">
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                      {isRu ? 'Разделы' : 'Secțiuni'}
                    </span>
                    <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      {isRu ? 'Главная' : 'Acasă'}
                    </h2>
                    <div className="h-px w-12 bg-brand-gold/70" aria-hidden />
                  </div>
                  <nav aria-label={isRu ? 'Основная навигация' : 'Navigare principală'}>
                    <ul className="flex flex-col gap-1">
                      <li>
                        <Link
                          href={homeHref}
                          className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent/70 hover:text-brand-gold"
                        >
                          {isRu ? 'Главная' : 'Acasă'}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={isRu ? '/about' : '/ro/about'}
                          className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent/70 hover:text-brand-gold"
                        >
                          {isRu ? 'Обо мне' : 'Despre mine'}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={isRu ? '/services' : '/ro/services'}
                          className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent/70 hover:text-brand-gold"
                        >
                          {isRu ? 'Услуги' : 'Servicii'}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={isRu ? '/blog' : '/ro/blog'}
                          className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent/70 hover:text-brand-gold"
                        >
                          {isRu ? 'Блог' : 'Blog'}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={isRu ? '/contacts' : '/ro/contacts'}
                          className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent/70 hover:text-brand-gold"
                        >
                          {isRu ? 'Контакты' : 'Contacte'}
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="min-w-0">
                  <div className="mb-6 flex flex-col gap-2 sm:mb-8">
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                      {isRu ? 'Связь' : 'Contact'}
                    </span>
                    <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      {isRu ? 'Контакты' : 'Contacte'}
                    </h2>
                    <div className="h-px w-12 bg-brand-gold/70" aria-hidden />
                  </div>
                  <ul className="flex min-w-0 flex-col divide-y divide-border/70">
                    <li className="min-w-0 py-4 first:pt-0 lg:py-5">
                      <Link
                        href={mapHref}
                        className="group -mx-1 flex min-w-0 items-start gap-3.5 rounded-lg px-1 py-1 text-foreground transition-colors hover:text-brand-gold sm:items-center"
                      >
                        <span
                          className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-muted/45 text-brand-gold transition-colors group-hover:bg-muted group-hover:text-brand-gold sm:mt-0"
                          aria-hidden
                        >
                          <FaMapLocationDot className="size-[18px] opacity-90" />
                        </span>
                        <span className="min-w-0 flex-1 break-words text-left text-xs font-medium uppercase leading-relaxed tracking-wide text-foreground/95 sm:text-sm sm:font-semibold sm:normal-case sm:tracking-normal">
                          Balti, Stefan Cel Mare, 13
                        </span>
                      </Link>
                    </li>
                    <li className="min-w-0 py-4 lg:py-5">
                      <Link
                        href="tel:+37368550030"
                        className="group -mx-1 flex min-w-0 items-center gap-3.5 rounded-lg px-1 py-1 text-foreground transition-colors hover:text-brand-gold"
                      >
                        <span
                          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted/45 text-brand-gold transition-colors group-hover:bg-muted"
                          aria-hidden
                        >
                          <FaPhoneVolume className="size-[17px] opacity-90" />
                        </span>
                        <span className="min-w-0 flex-1 text-left text-sm font-semibold tabular-nums text-foreground/95 sm:text-base">
                          +37368550030
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Блог */}
            <div className="mt-14 border-t border-border/60 pt-12 sm:mt-16 sm:pt-14">
              <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
                <FooterHeading
                  eyebrow={isRu ? 'Блог' : 'Blog'}
                  title={isRu ? 'Свежие материалы' : 'Materiale recente'}
                  className="mb-0"
                />
                <Link
                  href={isRu ? '/blog' : '/ro/blog'}
                  className="group inline-flex items-center gap-2 self-start rounded-full border border-border/70 bg-card/50 px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-brand-gold/50 hover:bg-accent/50 hover:text-brand-gold sm:self-auto"
                >
                  {isRu ? 'Все публикации' : 'Toate articolele'}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {latestArticles.map((post) => {
                  const href = isRu ? `/blog/${post.slugRu}` : `/ro/blog/${post.slugRo}`;
                  const title = isRu ? post.titleRu : post.titleRo;
                  return (
                    <li key={post.id}>
                      <Link
                        href={href}
                        className="group relative flex gap-3 rounded-xl border border-border/55 bg-card/40 p-4 shadow-sm ring-1 ring-border/20 transition-all hover:-translate-y-0.5 hover:border-brand-gold/35 hover:bg-card/70 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                      >
                        <span
                          className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold ring-1 ring-brand-gold/15 transition-colors group-hover:bg-brand-gold/15"
                          aria-hidden
                        >
                          <FileText className="size-4 opacity-90" strokeWidth={1.75} />
                        </span>
                        <span className="min-w-0 flex-1 pr-6 text-sm font-medium leading-snug text-foreground/95 transition-colors group-hover:text-brand-gold">
                          <span className="line-clamp-3">{title}</span>
                        </span>
                        <ArrowUpRight
                          className="absolute right-3 top-3 size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-70"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя полоса */}
      <div className="relative bg-foreground py-8 text-primary-foreground sm:py-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/15 to-transparent" aria-hidden />
        <div className="container mx-auto max-w-6xl px-4 sm:px-5">
          <div className="flex flex-col items-center justify-center gap-1 text-center">
            <Link
              href={homeHref}
              className="text-sm text-primary-foreground/95 transition-opacity hover:opacity-90 sm:text-base"
            >
              {`© Meddera | Ecaterina Pintea | 2018 - ${currentYear}`}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterNew;
