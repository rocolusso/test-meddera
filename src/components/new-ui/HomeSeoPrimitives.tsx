import React from 'react';

import { cn } from '@/lib/utils';
import SectionReveal from '@/components/new-ui/SectionReveal';

type HomeSeoShellProps = {
  ariaLabel: string;
  eyebrow: string;
  title: string;
  intro: React.ReactNode;
  children: React.ReactNode;
};

export function HomeSeoShell({ ariaLabel, eyebrow, title, intro, children }: HomeSeoShellProps) {
  return (
    <section aria-label={ariaLabel} className="relative bg-pofo-light-gray">
      <div className="pofo-container section-y">
        <header className="mb-10 text-center md:mb-[70px]">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="alt-font mt-2.5 text-[24px] font-semibold leading-[30px] text-pofo-heading md:text-[32px] md:leading-[40px]">
            {title}
          </h1>
          <span aria-hidden className="mx-auto mt-5 block h-px w-[100px] bg-deep-pink" />
          <div className="mx-auto mt-6 max-w-3xl text-pretty text-[15px] leading-[26px] text-muted-foreground sm:text-[16px] sm:leading-[28px] [&_strong]:font-semibold [&_strong]:text-pofo-heading">
            {intro}
          </div>
        </header>

        <div className="grid gap-[30px] md:grid-cols-2">{children}</div>
      </div>
    </section>
  );
}

type HomeSeoPanelProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function HomeSeoPanel({ title, children, className }: HomeSeoPanelProps) {
  return (
    <SectionReveal className={cn('h-full', className)}>
      <div
        className={cn(
          'group h-full bg-background p-[30px] shadow-pofo transition-shadow duration-300 md:p-[50px]',
          'hover:shadow-pofo-lg',
        )}
      >
        <h2 className="alt-font text-[18px] font-semibold leading-[26px] text-pofo-heading">
          {title}
        </h2>
        <span aria-hidden className="mt-4 block h-px w-10 bg-deep-pink transition-[width] duration-300 group-hover:w-16" />
        <div className="mt-5 text-[14px] leading-[24px] text-muted-foreground sm:text-[15px] sm:leading-[26px] [&_p+p]:mt-3 [&_p]:text-muted-foreground [&_strong]:font-semibold [&_strong]:text-pofo-heading">
          {children}
        </div>
      </div>
    </SectionReveal>
  );
}

export function HomeSeoBulletList({ items }: { items: string[] }) {
  return (
    <ul className="pofo-list-dash space-y-2.5">
      {items.map((text, i) => (
        <li key={i} className="text-[14px] leading-[24px] text-muted-foreground sm:text-[15px] sm:leading-[26px]">
          {text}
        </li>
      ))}
    </ul>
  );
}

type HomeSeoFeatureGridProps = {
  children: React.ReactNode;
};

/** Сетка из 4 мини-карточек (например «De ce Meddera»). */
export function HomeSeoFeatureGrid({ children }: HomeSeoFeatureGridProps) {
  return (
    <div className="mt-5 grid gap-4 sm:grid-cols-2">{children}</div>
  );
}

type HomeSeoFeatureCardProps = {
  title: string;
  children: React.ReactNode;
};

/** Pofo feature-box motif: thin frame, pink top bar grows on hover. */
export function HomeSeoFeatureCard({ title, children }: HomeSeoFeatureCardProps) {
  return (
    <div className="group relative border border-border p-5 transition-colors hover:border-transparent hover:bg-pofo-light-gray">
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-deep-pink transition-transform duration-500 group-hover:scale-x-100"
      />
      <h3 className="alt-font text-[15px] font-semibold leading-[22px] text-pofo-heading">{title}</h3>
      <p className="mt-2 text-[14px] leading-[24px] text-muted-foreground">{children}</p>
    </div>
  );
}
