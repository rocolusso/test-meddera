'use client';

import React from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import { BsArrowRightCircle } from 'react-icons/bs';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { getAlternateLocaleHref } from '@/lib/locale-switch';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function BurgerMenu({ locale }:{ locale:string }) {
  const [open, setOpen] = React.useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const loc = locale === 'ru' ? 'ru' : 'ro';
  const localeSwitchHref = getAlternateLocaleHref(pathname, searchParams, loc);

  return (
    <div>
      <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            aria-label="burger-btn-trigger"
            className="pl-5 py-5"
          >
            <span className="block sm:hidden border rounded p-2">
              <HiOutlineMenuAlt3 size="48px" />
            </span>
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {locale === 'ru' ? (
            <>
              <DropdownMenuItem>
                <button
                  type="button"
                  onClick={() => {
                    router.push('/about');
                    setOpen(false);
                  }}
                  className="flex items-center"
                >
                  <p className="uppercase font-bold p-5 text-[2rem] underline">Обо мне</p>
                  <div>
                    <BsArrowRightCircle size="25px" />
                  </div>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  type="button"
                  onClick={() => {
                    router.push('/services');
                    setOpen(false);
                  }}
                  className="flex items-center"
                >
                  <p className="uppercase font-bold p-5 text-[2rem] underline">Услуги</p>
                  <div>
                    <BsArrowRightCircle size="25px" />
                  </div>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  type="button"
                  onClick={() => {
                    router.push('/?section=contacts');
                    setOpen(false);
                  }}
                  className="flex items-center"
                >
                  <p className="uppercase font-bold p-5 text-[2rem] underline">Контакты</p>
                  <div>
                    <BsArrowRightCircle size="25px" />
                  </div>
                </button>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex justify-center w-full">
                  <Link
                    href={localeSwitchHref}
                    className="underline rounded-xl border border-black hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105"
                    onClick={() => setOpen(false)}
                  >
                    RO
                  </Link>
                </div>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuItem>
                <button
                  type="button"
                  onClick={() => {
                    router.push('/ro/about');
                    setOpen(false);
                  }}
                  className="flex items-center"
                >
                  <p className="uppercase font-bold p-5 text-[2rem] underline">Despre mine</p>
                  <div>
                    <BsArrowRightCircle size="25px" />
                  </div>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  type="button"
                  onClick={() => {
                    router.push('/ro/services');
                    setOpen(false);
                  }}
                  className="flex items-center"
                >
                  <p className="uppercase font-bold p-5 text-[2rem] underline">Servicii</p>
                  <div>
                    <BsArrowRightCircle size="25px" />
                  </div>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  type="button"
                  onClick={() => {
                    router.push('/ro?section=contacts');
                    setOpen(false);
                  }}
                  className="flex items-center"
                >
                  <p className="uppercase font-bold p-5 text-[2rem] underline">Contacte</p>
                  <div>
                    <BsArrowRightCircle size="25px" />
                  </div>
                </button>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex justify-center w-full">
                  <Link
                    href={localeSwitchHref}
                    className="underline rounded-xl border border-black hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105"
                    onClick={() => setOpen(false)}
                  >
                    RU
                  </Link>
                </div>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

    </div>
  );
}

export default BurgerMenu;
