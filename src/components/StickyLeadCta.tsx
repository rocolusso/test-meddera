'use client';

import { usePathname } from 'next/navigation';

import BookCtaButton from '@/components/cta/BookCtaButton';
import { getLocaleFromPath } from '@/components/lead/leadFormConstants';

/**
 * Desktop (≥md) floating "Записаться онлайн" with the doctor's photo. On phones the same
 * button lives in BottomDock. The quiz itself is opened and rendered by LeadQuizHost.
 */
export default function StickyLeadCta() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);

  return (
    <div className="fixed bottom-24 left-4 z-[1000] hidden sm:left-6 md:block">
      <BookCtaButton locale={locale} variant="pill" source="float_book" id="primaryCta" />
    </div>
  );
}
