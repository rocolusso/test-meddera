'use client';

import dynamic from 'next/dynamic';

import { ContactsFormLoadingSkeleton } from '@/components/ContactsFormLoadingSkeleton';

const DynamicContacts = dynamic(() => import('@/components/СontactsLips'), {
  ssr: false,
  loading: () => <ContactsFormLoadingSkeleton message="Загрузка формы" />,
});

export default function ContactsLipsDynamicRu() {
  return <DynamicContacts locale="ru" />;
}
