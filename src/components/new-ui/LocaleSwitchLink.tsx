'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { getAlternateLocaleHref } from '@/lib/locale-switch';

type Props = {
  locale: 'ru' | 'ro';
  className: string;
  ariaLabel: string;
};

export default function LocaleSwitchLink({ locale, className, ariaLabel }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const href = getAlternateLocaleHref(pathname ?? '/', searchParams, locale);

  return (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {locale === 'ru' ? 'RO' : 'RU'}
    </Link>
  );
}
