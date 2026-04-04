'use client';

import dynamic from 'next/dynamic';

const DynamicContacts = dynamic(() => import('@/components/Сontacts'), {
  ssr: false,
  loading: () => (
    <div className="min-h-[24rem] w-full" aria-busy="true" aria-label="Se încarcă formularul" />
  ),
});

export default function ContactsDynamicWrapperRo({ hideHeading = false }: { hideHeading?: boolean } = {}) {
  return <DynamicContacts locale="ro" hideHeading={hideHeading} />;
}
