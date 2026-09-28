import React from 'react';
import Image from 'next/image';

import aboutImg from '../../../public/assets/img/about_2k.jpg';
import { aboutCopy } from '@/lib/about-content';
import SectionReveal from '@/components/new-ui/SectionReveal';

function TextList({ items }: { items: string[] }) {
  return (
    <ul className="pofo-list-dash space-y-3.5">
      {items.map((text, i) => (
        <li key={i}>
          <p
            className={`text-[14px] leading-[24px] text-muted-foreground sm:text-[15px] sm:leading-[26px] ${text.includes('\n') ? 'whitespace-pre-line' : ''}`}
          >
            {text}
          </p>
        </li>
      ))}
    </ul>
  );
}

/** Pofo h5-style section title (Montserrat 600). */
const sectionTitleClass =
  'alt-font text-[26px] font-semibold leading-[32px] text-pofo-heading md:text-[32px] md:leading-[40px] lg:text-[36px] lg:leading-[44px]';

function AboutNew({
  locale,
  titleAs = 'h2',
}: {
  locale: string;
  /** На отдельной странице `/about` и `/ro/about` используйте `h1` для SEO */
  titleAs?: 'h1' | 'h2';
}) {
  const loc = locale === 'ro' ? 'ro' : 'ru';
  const c = aboutCopy[loc];
  const specHeadingClass =
    'alt-font text-center text-[22px] font-semibold leading-[30px] text-pofo-heading sm:text-[26px] sm:leading-[34px] lg:text-left';

  return (
    <section className="hero__about scroll-mt-28 bg-background" id="about">
      <div className="pofo-container section-y">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-[70px]">
          {/* Photo: stays the LCP element, therefore never animated. */}
          {/* Mobile: shows first (order-1). Desktop: mirrors pre-redesign layout — text left, photo right (order-2). */}
          <aside className="relative order-1 mx-auto w-full max-w-md lg:sticky lg:top-28 lg:order-2 lg:max-w-none">
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-4 -right-4 hidden h-full w-full border border-deep-pink sm:block lg:-bottom-6 lg:-right-6"
            />
            <div className="relative aspect-[4/5] overflow-hidden bg-muted lg:aspect-[3/4]">
              <Image
                src={aboutImg}
                alt={c.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                fetchPriority="high"
              />
            </div>
          </aside>

          <div className="order-2 space-y-10 lg:order-1 lg:space-y-12">
            <header className="text-center lg:text-left">
              <p className="eyebrow mb-3">{c.badge}</p>
              {titleAs === 'h1' ? (
                <h1 className={sectionTitleClass}>{c.sectionTitle}</h1>
              ) : (
                <h2 className={sectionTitleClass}>{c.sectionTitle}</h2>
              )}
              <p className="alt-font mt-5 text-[18px] font-semibold uppercase leading-[26px] tracking-[1px] text-pofo-heading">
                {c.name}
              </p>
              <span aria-hidden className="mx-auto mt-5 block h-px w-[100px] bg-deep-pink lg:mx-0" />
            </header>

            <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
              <TextList items={c.bioColumns[0]} />
              <TextList items={c.bioColumns[1]} />
            </div>
          </div>
        </div>

        <SectionReveal className="mt-14 bg-pofo-light-gray px-6 py-10 sm:px-10 md:mt-20 md:py-14 lg:px-14">
          <div className="space-y-8">
            {titleAs === 'h1' ? (
              <h2 className={specHeadingClass}>{c.specializationTitle}</h2>
            ) : (
              <h3 className={specHeadingClass}>{c.specializationTitle}</h3>
            )}
            <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
              <TextList items={c.specColumns[0]} />
              <TextList items={c.specColumns[1]} />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export default AboutNew;
