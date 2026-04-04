'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function SectionQueryScroll() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get('section');
    if (!section) return;

    // Keep it predictable: allow only simple ids we actually use.
    if (!/^[a-z0-9-]+$/i.test(section)) return;

    // Give the page a moment to render the target section.
    const id = section;
    const t = window.setTimeout(() => scrollToId(id), 0);
    return () => window.clearTimeout(t);
  }, [searchParams]);

  return null;
}

