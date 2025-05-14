'use client';

import React from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

function NavigationLinks({ locale }: {locale: string}) {
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
              onClick={() => router.push(locale === 'ru' ? '/#about' : '/ro/#about')}
            >
              {locale === 'ru' ? 'Обо мне' : 'Despre mine'}
            </Button>

          </NavigationMenuItem>
          <NavigationMenuItem>

            <Button
              className="underline bg-transparent hover:scale-105 hover:bg-green-400 hover:text-white hover:border-transparent border border-gray-400 duration-300"
              variant="outline"
              size="lg"
              onClick={() => router.push(locale === 'ru' ? '/#services' : '/ro/#services')}
            >
              {locale === 'ru' ? 'Услуги' : 'Servicii'}
            </Button>

          </NavigationMenuItem>
          <NavigationMenuItem>

            <Button
              className="underline bg-transparent hover:scale-105 hover:bg-green-400 hover:text-white hover:border-transparent border border-gray-400 duration-300"
              variant="outline"
              size="lg"
              onClick={() => router.push(locale === 'ru' ? '/#contacts' : '/ro/#contacts')}
            >
              {locale === 'ru' ? 'Контакты' : 'Contacte'}
            </Button>

          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="hidden sm:block">

        <Button
          className="underline hover:scale-105 hover:bg-green-400 hover:text-white hover:border-transparent border border-gray-400 duration-300"
          aria-label="locale-btn"
          variant="default"
          size="lg"
          onClick={() => router.push(locale === 'ru' ? '/ro' : '/')}
        >
          {locale === 'ru' ? 'RO' : 'RU'}
        </Button>

      </div>
    </div>
  );
}

export default NavigationLinks;
