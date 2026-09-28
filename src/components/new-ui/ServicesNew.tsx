import React from 'react';
import { servicesLinksRo, servicesLinksRu, type ServiceLink } from '@/lib/db-content';
import Link from 'next/link';
import Image from 'next/image';

import SectionHeading from '@/components/pofo/SectionHeading';
import SectionReveal from '@/components/new-ui/SectionReveal';

type Locale = 'ru' | 'ro';

/** Pofo blog-post-style1 card: dark image well, zoom + fade on hover, title, thin rule. */
function ServiceCard({ service, locale }: { service: ServiceLink; locale: Locale }) {
  const alt =
    locale === 'ro'
      ? `${service.title} — Meddera, Bălți`
      : `${service.title} в Бельцах. Дерматолог Бельцы`;

  return (
    <article className="group flex h-full flex-col text-center sm:text-left">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted transition-colors duration-300 group-hover:bg-[#232323]">
        <Link href={service.url} className="absolute inset-0 block">
          <Image
            className="object-cover transition-[transform,opacity] duration-300 ease-out group-hover:scale-110 group-hover:opacity-60 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            src={service.imageUrl}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </Link>
      </div>
      <div className="flex flex-1 flex-col pt-6">
        <Link
          href={service.url}
          className="alt-font text-[16px] font-semibold leading-[23px] text-pofo-heading transition-colors duration-200 hover:text-deep-pink group-hover:text-deep-pink"
        >
          {service.title}
        </Link>
        <span aria-hidden className="mt-5 block h-px w-full bg-border" />
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

  return (
    <section
      className="services__block scroll-mt-28 bg-background"
      id={titleAs === 'h1' ? 'services-index' : 'services'}
    >
      <div className="pofo-container section-y">
        <SectionHeading
          as={titleAs}
          separator
          className="mx-auto max-w-3xl"
          title={
            loc === 'ru'
              ? 'Услуги клиники Meddera в Бельцах'
              : 'Servicii clinica Meddera în Bălți'
          }
        />

        <ul className="mt-12 grid list-none grid-cols-1 gap-x-[30px] gap-y-12 sm:mt-14 sm:grid-cols-2 md:mt-[70px] md:grid-cols-3">
          {items.map((service, i) => (
            <SectionReveal
              key={service.id}
              as="li"
              delay={([0, 200, 400] as const)[i % 3]}
            >
              <ServiceCard service={service} locale={loc} />
            </SectionReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ServicesNew;
