'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { getAlternateLocalePath } from '@/lib/locale-switch';

type Props = {
  locale: 'ru' | 'ro';
  className: string;
  ariaLabel: string;
};

export default function LocaleSwitchLink({ locale, className, ariaLabel }: Props) {
  const pathname = usePathname();
  const href = getAlternateLocalePath(pathname ?? '/', locale);

  return (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {locale === 'ru' ? 'RO' : 'RU'}
    </Link>
  );
}
