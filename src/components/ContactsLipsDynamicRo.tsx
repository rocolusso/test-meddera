'use client';

import dynamic from 'next/dynamic';

import { ContactsFormLoadingSkeleton } from '@/components/ContactsFormLoadingSkeleton';

const DynamicContacts = dynamic(() => import('@/components/СontactsLips'), {
  ssr: false,
  loading: () => <ContactsFormLoadingSkeleton message="Se încarcă formularul" />,
});

export default function ContactsLipsDynamicRo() {
  return <DynamicContacts locale="ro" />;
}
