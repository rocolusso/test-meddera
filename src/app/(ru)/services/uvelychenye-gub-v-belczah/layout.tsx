import React from 'react';

import { JsonLd } from '@/components/JsonLd';
import { siteGraph } from '@/lib/schema/graph';

/** Shared site entities for this page; the page itself (content, metadata, own markup) is unchanged. */
export default function LayoutWithSiteEntities({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={siteGraph('ru')} />
      {children}
    </>
  );
}
