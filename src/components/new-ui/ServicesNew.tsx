import React from 'react';
import { servicesLinksRo, servicesLinksRu, type ServiceLink } from '@/lib/db-content';
import Link from 'next/link';
import Image from 'next/image';

type Locale = 'ru' | 'ro';

function ServiceCard({ service, locale }: { service: ServiceLink; locale: Locale }) {
  const alt =
    locale === 'ro'
      ? `${service.title} — Meddera, Bălți`
      : `${service.title} в Бельцах. Дерматолог Бельцы`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm ring-1 ring-border/30 transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/40">
        <Link href={service.url} className="absolute inset-0 block">
          <Image
            className="object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
            src={service.imageUrl}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
          <span
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-0"
            aria-hidden
          />
        </Link>
      </div>
      <div className="flex flex-1 flex-col border-t border-border/60 bg-card/80 backdrop-blur-[2px] transition-colors duration-300 group-hover:bg-muted/30">
        <Link
          href={service.url}
          className="flex flex-1 items-center px-5 py-4 text-base font-semibold leading-snug tracking-tight text-foreground transition-colors duration-200 sm:px-6 sm:py-5 sm:text-lg sm:leading-snug group-hover:text-brand-gold"
        >
          {service.title}
        </Link>
      </div>
    </article>
  );
}

function ServicesNew({
  locale,
  titleAs = 'h2',
}: {
  locale: string;
  /** На отдельной странице `/services` используйте `h1` для SEO. */
  titleAs?: 'h1' | 'h2';
}) {
  const loc: Locale = locale === 'ro' ? 'ro' : 'ru';
  const items = loc === 'ro' ? servicesLinksRo : servicesLinksRu;
  const TitleTag = titleAs;

  return (
    <section
      className="services__block scroll-mt-28"
      id={titleAs === 'h1' ? 'services-index' : 'services'}
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 md:py-24 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <TitleTag className="px-2 text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-tight tracking-tight text-foreground">
            {loc === 'ru'
              ? 'Услуги клиники Meddera в Бельцах'
              : 'Servicii clinica Meddera în Bălți'}
          </TitleTag>
          <div className="mx-auto mt-5 h-px w-14 bg-border sm:mt-6" aria-hidden />
        </header>

        <ul className="mt-12 grid list-none grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-2 sm:gap-9 md:mt-16 md:grid-cols-3 md:gap-10">
          {items.map((service) => (
            <li key={service.id}>
              <ServiceCard service={service} locale={loc} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ServicesNew;
