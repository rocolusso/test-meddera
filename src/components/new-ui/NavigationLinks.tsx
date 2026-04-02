'use client';

import React from 'react';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

function NavigationLinks({ locale }: { locale: string }) {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center sm:w-full">
      <NavigationMenu className="  rounded-md hidden sm:block">
        <NavigationMenuList className="gap-2">
          <NavigationMenuItem>

            <Button
              className="underline bg-transparent hover:scale-105 hover:bg-green-400 hover:text-white hover:border-transparent border border-gray-400 duration-300"
              variant="outline"
              size="lg"
              onClick={() => router.push(locale === 'ru' ? '/?section=about' : '/ro?section=about')}
            >
              {locale === 'ru' ? 'Обо мне' : 'Despre mine'}
            </Button>

          </NavigationMenuItem>
          <NavigationMenuItem>

            <Button
              className="underline bg-transparent hover:scale-105 hover:bg-green-400 hover:text-white hover:border-transparent border border-gray-400 duration-300"
              variant="outline"
              size="lg"
              onClick={() => router.push(locale === 'ru' ? '/?section=services' : '/ro?section=services')}
            >
              {locale === 'ru' ? 'Услуги' : 'Servicii'}
            </Button>

          </NavigationMenuItem>
          <NavigationMenuItem>

            <Button
              className="underline bg-transparent hover:scale-105 hover:bg-green-400 hover:text-white hover:border-transparent border border-gray-400 duration-300"
              variant="outline"
              size="lg"
              onClick={() => router.push(locale === 'ru' ? '/?section=contacts' : '/ro?section=contacts')}
            >
              {locale === 'ru' ? 'Контакты' : 'Contacte'}
            </Button>

          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="hidden sm:block">
        <Link
          href={locale === 'ru' ? '/ro' : '/'}
          className="underline p-3 rounded-2xl hover:scale-105 hover:bg-green-400 hover:text-white hover:border-transparent border border-gray-400 duration-300"
          aria-label="locale-btn"
        >
          {locale === 'ru' ? 'RO' : 'RU'}
        </Link>

      </div>
    </div>
  );
}

export default NavigationLinks;
