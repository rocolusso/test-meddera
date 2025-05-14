'use client';

import React, { Suspense } from 'react';

import dynamic from 'next/dynamic';

const DynamicContacts = dynamic(() => import('@/components/Сontacts'), {
  ssr: false, // Only needed if you want to disable SSR for this component
  loading: () => <p>Loading contacts...</p>, // Optional loading fallback
});

function ContactsDynamicWrapperRu() {
  return (
    <Suspense fallback={<p>Loading contacts...</p>}>
      <DynamicContacts locale="ro" />
    </Suspense>
  );
}

export default ContactsDynamicWrapperRu;
