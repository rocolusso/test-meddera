'use client';

import React from 'react';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { getAlternateLocaleHref } from '@/lib/locale-switch';

const navBtnClass =
  'h-10 rounded-full border-border bg-transparent px-4 text-sm font-medium text-foreground shadow-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring';

function NavigationLinks({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const loc = locale === 'ru' ? 'ru' : 'ro';
  const localeSwitchHref = getAlternateLocaleHref(pathname, searchParams, loc);

  return (
    <div className="hidden min-w-0 flex-1 items-center justify-end gap-2 sm:flex md:gap-3">
      <NavigationMenu className="max-w-none">
        <NavigationMenuList className="flex flex-wrap items-center justify-end gap-1.5 md:gap-2">
          <NavigationMenuItem>
            <Button
              className={navBtnClass}
              variant="outline"
              size="sm"
              onClick={() => router.push(locale === 'ru' ? '/' : '/ro')}
            >
              {locale === 'ru' ? 'Главная' : 'Acasă'}
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              className={navBtnClass}
              variant="outline"
              size="sm"
              onClick={() => router.push(locale === 'ru' ? '/about' : '/ro/about')}
            >
              {locale === 'ru' ? 'Обо мне' : 'Despre mine'}
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              className={navBtnClass}
              variant="outline"
              size="sm"
              onClick={() => router.push(locale === 'ru' ? '/services' : '/ro/services')}
            >
              {locale === 'ru' ? 'Услуги' : 'Servicii'}
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              className={navBtnClass}
              variant="outline"
              size="sm"
              onClick={() => router.push(locale === 'ru' ? '/blog' : '/ro/blog')}
            >
              {locale === 'ru' ? 'Блог' : 'Blog'}
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              className={navBtnClass}
              variant="outline"
              size="sm"
              onClick={() => router.push(locale === 'ru' ? '/contacts' : '/ro/contacts')}
            >
              {locale === 'ru' ? 'Контакты' : 'Contacte'}
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Link
        href={localeSwitchHref}
        className="inline-flex h-10 shrink-0 items-center justify-center rounded-full border border-border px-3.5 text-xs font-semibold tracking-wider text-foreground transition-colors hover:border-ring hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label="locale-btn"
      >
        {locale === 'ru' ? 'RO' : 'RU'}
      </Link>
    </div>
  );
}

export default NavigationLinks;
