'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { getAlternateLocalePath } from '@/lib/locale-switch';

type Props = {
  locale: 'ru' | 'ro';
  className: string;
  ariaLabel: string;
};

const SEARCH_PATHS = new Set(['/search', '/ro/search']);

export default function LocaleSwitchLink({ locale, className, ariaLabel }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const href = getAlternateLocalePath(pathname ?? '/', locale);

  // The search page keeps its query when the language changes. Read at click time, so the
  // header does not depend on useSearchParams and static pages stay static.
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!pathname || !SEARCH_PATHS.has(pathname.replace(/\/+$/, ''))) return;
    const q = new URLSearchParams(window.location.search).get('q');
    if (!q) return;
    e.preventDefault();
    router.push(`${href}?q=${encodeURIComponent(q)}`);
  };

  return (
    <Link href={href} className={className} aria-label={ariaLabel} onClick={onClick}>
      {locale === 'ru' ? 'RO' : 'RU'}
    </Link>
  );
}
