import React from 'react';

import { cn } from '@/lib/utils';

type HomeSeoShellProps = {
  ariaLabel: string;
  eyebrow: string;
  title: string;
  intro: React.ReactNode;
  children: React.ReactNode;
};

export function HomeSeoShell({ ariaLabel, eyebrow, title, intro, children }: HomeSeoShellProps) {
  return (
    <section
      aria-label={ariaLabel}
      className="relative overflow-hidden border-t border-border/50 bg-gradient-to-b from-muted/25 via-background to-muted/20"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/45 to-transparent"
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-24 top-24 size-[min(55vw,28rem)] rounded-full bg-brand-gold/[0.06] blur-3xl md:-right-16 md:top-32" aria-hidden />
      <div className="pointer-events-none absolute -left-20 bottom-20 size-[min(50vw,22rem)] rounded-full bg-muted-foreground/[0.04] blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-5 md:py-20 lg:px-8">
        <header className="mb-10 text-center md:mb-14 md:text-left">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">{eyebrow}</p>
          <h1 className="mt-3 font-heading text-[clamp(1.5rem,4vw,2.35rem)] font-semibold leading-tight tracking-tight text-foreground">
            {title}
          </h1>
          <div className="mx-auto mt-5 h-px w-14 bg-brand-gold/75 md:mx-0" aria-hidden />
          <div className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:mx-0 [&_strong]:font-semibold [&_strong]:text-foreground">
            {intro}
          </div>
        </header>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">{children}</div>
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
    <div
      className={cn(
        'group rounded-2xl border border-border/60 bg-card/45 p-5 shadow-sm ring-1 ring-border/25 backdrop-blur-[1px] transition-colors duration-300 sm:p-6 md:p-7',
        'hover:border-border hover:bg-card/60 hover:shadow-md hover:ring-border/40',
        className,
      )}
    >
      <div className="mb-1 flex items-start gap-3">
        <span
          className="mt-2.5 h-1 w-8 shrink-0 rounded-full bg-gradient-to-r from-brand-gold/90 to-brand-gold/40 opacity-90 transition-opacity group-hover:opacity-100"
          aria-hidden
        />
        <h2 className="font-heading text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl">
          {title}
        </h2>
      </div>
      <div className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base [&_p+p]:mt-3 [&_p]:text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground">
        {children}
      </div>
    </div>
  );
}

export function HomeSeoBulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((text, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed sm:text-base">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-gold/85 shadow-[0_0_0_3px] shadow-brand-gold/15" aria-hidden />
          <span className="text-muted-foreground">{text}</span>
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

export function HomeSeoFeatureCard({ title, children }: HomeSeoFeatureCardProps) {
  return (
    <div className="rounded-xl border border-border/50 bg-muted/20 p-4 transition-colors hover:bg-muted/35 sm:p-5">
      <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
