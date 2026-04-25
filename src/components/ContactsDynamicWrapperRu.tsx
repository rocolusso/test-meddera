'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

import { ContactsFormLoadingSkeleton } from '@/components/ContactsFormLoadingSkeleton';

const LOADING_MSG = 'Загрузка формы';

const DynamicContacts = dynamic(() => import('@/components/Сontacts'), {
  ssr: false,
  loading: () => <ContactsFormLoadingSkeleton message={LOADING_MSG} />,
});

export default function ContactsDynamicWrapperRu({ hideHeading = false }: { hideHeading?: boolean } = {}) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = sentinelRef.current;
    if (!target) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px 0px' },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (!shouldLoad) {
    return (
      <div ref={sentinelRef}>
        <ContactsFormLoadingSkeleton message={LOADING_MSG} />
      </div>
    );
  }

  return <DynamicContacts locale="ru" hideHeading={hideHeading} />;
}
