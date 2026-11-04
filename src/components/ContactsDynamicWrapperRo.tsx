'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

import { ContactsFormLoadingSkeleton } from '@/components/ContactsFormLoadingSkeleton';

const LOADING_MSG = 'Se încarcă formularul';

const DynamicContacts = dynamic(() => import('@/components/Сontacts'), {
  ssr: false,
  loading: () => <ContactsFormLoadingSkeleton message={LOADING_MSG} />,
});

export default function ContactsDynamicWrapperRo({
  hideHeading = false,
  hideMap = false,
}: { hideHeading?: boolean; hideMap?: boolean } = {}) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = sentinelRef.current;
    if (!target) return undefined;

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

  return <DynamicContacts locale="ro" hideHeading={hideHeading} hideMap={hideMap} />;
}
