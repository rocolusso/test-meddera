'use client';

import dynamic from 'next/dynamic';

const DynamicContacts = dynamic(() => import('@/components/Сontacts'), {
  ssr: false,
  loading: () => (
    <div className="min-h-[24rem] w-full" aria-busy="true" aria-label="Загрузка формы" />
  ),
});

export default function ContactsDynamicWrapperRu() {
  return <DynamicContacts locale="ru" />;
}
