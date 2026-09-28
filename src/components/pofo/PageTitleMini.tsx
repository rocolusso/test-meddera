import React from 'react';
import Link from 'next/link';

export type Breadcrumb = { href?: string; label: string };

type Props = {
  title: React.ReactNode;
  breadcrumbs?: Breadcrumb[];
  breadcrumbsLabel?: string;
};

/** Pofo "page title mini version": light strip, uppercase h1 left, breadcrumbs right. */
export default function PageTitleMini({ title, breadcrumbs, breadcrumbsLabel = 'Breadcrumb' }: Props) {
  return (
    <section className="bg-pofo-light-gray py-[35px]">
      <div className="pofo-container flex flex-col items-center gap-2.5 md:flex-row md:justify-between md:gap-8">
        <h1 className="alt-font text-balance text-center text-[20px] font-semibold uppercase leading-[26px] text-pofo-heading md:text-left">
          {title}
        </h1>
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <nav aria-label={breadcrumbsLabel} className="alt-font shrink-0 text-[12px] uppercase leading-5 text-pofo-text">
            <ol className="flex flex-wrap items-center justify-center gap-x-2 md:justify-end">
              {breadcrumbs.map((b, i) => (
                <li key={`${b.label}-${i}`} className="flex items-center gap-x-2">
                  {i > 0 ? <span aria-hidden>/</span> : null}
                  {b.href ? (
                    <Link href={b.href} className="transition-colors hover:text-accent-text">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-pofo-heading">{b.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
      </div>
    </section>
  );
}
