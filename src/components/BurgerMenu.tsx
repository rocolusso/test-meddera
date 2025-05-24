'use client';

import React from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import { BsArrowRightCircle } from 'react-icons/bs';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function BurgerMenu({ locale }:{locale:string}) {
  const [isOpen, setIsOpen] = React.useState(false);

  const router = useRouter();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div>
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div aria-label="burger-btn-trigger" className="pl-5 py-5" onClick={() => setIsOpen(!isOpen)}>
              <div className="block sm:hidden  border rounded p-2 ">
                <HiOutlineMenuAlt3 size="48px" />
              </div>
            </div>
          </div>
        </DropdownMenuTrigger>

        {
            isOpen && locale === 'ru' && (
            <DropdownMenuContent>

              <DropdownMenuItem>
                <button
                  type="button"
                  onClick={() => {
                    router.push('/#about');
                    setIsOpen(false);
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
                    router.push('/#services');
                    setIsOpen(false);
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
                    router.push('/#contacts');
                    setIsOpen(false);
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
                <div className=" flex justify-center w-full">
                  <Link
                    href="/ro"
                    className="underline border border-black  hover:bg-black
                                    hover:underline hover:text-white p-5 duration-300 hover:scale-105"
                  >
                    RO
                  </Link>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
            )
        }

        {
            isOpen && locale === 'ro' && (
            <DropdownMenuContent>

              <DropdownMenuItem>
                <button
                  type="button"
                  onClick={() => {
                    router.push('/ro#about');
                    setIsOpen(false);
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
                    router.push('/ro#services');
                    setIsOpen(false);
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
                    router.push('/ro#contacts');
                    setIsOpen(false);
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
                <div className=" flex justify-center w-full">
                  <Link
                    href="/"
                    className="underline border border-black  hover:bg-black hover:underline
                                    hover:text-white p-5 duration-300 hover:scale-105"
                  >
                    RU
                  </Link>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
            )
        }

      </DropdownMenu>

    </div>
  );
}

export default BurgerMenu;
