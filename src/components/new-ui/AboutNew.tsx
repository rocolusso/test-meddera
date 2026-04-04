import React from 'react';
import Image from 'next/image';

import aboutImg from '../../../public/assets/img/about_2k.jpg';
import { aboutCopy } from '@/lib/about-content';

function TextList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((text, i) => (
        <li key={i}>
          <p
            className={`list-icon text-[14px] leading-relaxed text-muted-foreground sm:text-[15px] ${text.includes('\n') ? 'whitespace-pre-line' : ''}`}
          >
            {text}
          </p>
        </li>
      ))}
    </ul>
  );
}

const sectionTitleClass =
  'text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-tight tracking-tight text-foreground';

function AboutNew({
  locale,
  titleAs = 'h2',
}: {
  locale: string;
  /** На отдельной странице `/about` и `/ro/about` используйте `h1` для SEO. */
  titleAs?: 'h1' | 'h2';
}) {
  const loc = locale === 'ro' ? 'ro' : 'ru';
  const c = aboutCopy[loc];
  const specHeadingClass =
    'font-heading text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-left';

  return (
    <section className="hero__about scroll-mt-28 border-b border-border/40 bg-gradient-to-b from-muted/15 via-background to-background" id="about">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_min(340px,38vw)] lg:items-start lg:gap-12 xl:grid-cols-[minmax(0,1fr)_min(400px,36vw)] xl:gap-16">
          <div className="order-2 space-y-10 lg:order-1 lg:space-y-12">
            <header className="text-center lg:text-left">
              {titleAs === 'h1' ? (
                <h1 className={sectionTitleClass}>{c.sectionTitle}</h1>
              ) : (
                <h2 className={sectionTitleClass}>{c.sectionTitle}</h2>
              )}
              <div className="mx-auto mt-4 h-px w-16 bg-border lg:mx-0" aria-hidden />
            </header>

            <div className="space-y-5 text-center lg:text-left">
              <p className="title-font inline-block rounded-full border border-border/60 bg-muted/50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-foreground">
                {c.badge}
              </p>
              <p className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {c.name}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
              <div className="rounded-2xl border border-border/50 bg-card/60 p-5 shadow-sm sm:p-6">
                <TextList items={c.bioColumns[0]} />
              </div>
              <div className="rounded-2xl border border-border/50 bg-card/60 p-5 shadow-sm sm:p-6">
                <TextList items={c.bioColumns[1]} />
              </div>
            </div>

            <div className="space-y-6 pt-2">
              {titleAs === 'h1' ? (
                <h2 className={specHeadingClass}>{c.specializationTitle}</h2>
              ) : (
                <h3 className={specHeadingClass}>{c.specializationTitle}</h3>
              )}
              <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                <div className="rounded-2xl border border-border/50 bg-muted/25 p-5 sm:p-6">
                  <TextList items={c.specColumns[0]} />
                </div>
                <div className="rounded-2xl border border-border/50 bg-muted/25 p-5 sm:p-6">
                  <TextList items={c.specColumns[1]} />
                </div>
              </div>
            </div>
          </div>

          <aside className="order-1 mb-10 lg:sticky lg:top-28 lg:order-2 lg:mb-0 lg:self-start">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-2xl bg-muted shadow-lg ring-1 ring-border/40 lg:max-w-none lg:aspect-[3/4]">
              <Image
                src={aboutImg}
                alt={c.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 38vw"
                priority
                fetchPriority="high"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default AboutNew;
