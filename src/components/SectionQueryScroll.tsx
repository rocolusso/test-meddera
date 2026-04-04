'use client';

import { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function SectionQueryScroll() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const section = searchParams.get('section');
    if (!section) return;

    // Услуги — отдельный маршрут; старые ссылки ?section=services с главной ведут на /services.
    if (section === 'services') {
      const onHome = pathname === '/' || pathname === '/ro';
      if (onHome) {
        router.replace(pathname === '/ro' ? '/ro/services' : '/services');
        return;
      }
    }

    if (section === 'contacts') {
      const onHome = pathname === '/' || pathname === '/ro';
      if (onHome) {
        router.replace(pathname === '/ro' ? '/ro/contacts' : '/contacts');
        return;
      }
    }

    // Keep it predictable: allow only simple ids we actually use.
    if (!/^[a-z0-9-]+$/i.test(section)) return;

    // Give the page a moment to render the target section.
    const id = section;
    const t = window.setTimeout(() => scrollToId(id), 0);
    return () => window.clearTimeout(t);
  }, [searchParams, pathname, router]);

  return null;
}
