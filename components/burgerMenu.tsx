import React, { useEffect } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import { BsArrowRightCircle } from 'react-icons/bs';

import { TfiClose } from 'react-icons/tfi';
import Link from 'next/link';
import { useRouter } from 'next/router';

function BurgerMenu({ locale }:{locale:string}) {
  const [isOpen, setIsOpen] = React.useState(false);

  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
        <div>
            <button type="button" className="pl-5 py-5" onClick={() => setIsOpen(!isOpen)}>
                {
                    !isOpen && (
                        <div className="block sm:hidden  border rounded p-2 ">
                          <HiOutlineMenuAlt3 size="48px" />
                        </div>
                    )
                }
                {
                    isOpen
                    && (
                        <div className="block sm:hidden  border rounded p-2 ">
                          <TfiClose size="48px" />
                        </div>
                    )
                }
            </button>

            {
                isOpen && locale === 'ru' && (
                <div className="absolute top-32 border left-0 flex justify-center bg-white z-50 w-full duration-300 ">
                    <div className="h-[500px] flex  flex-col  justify-center">
                        <button
                          type="button"
                          onClick={() => {
                            router.push('/#about', '/#about', { locale: false });
                            setIsOpen(false);
                          }}
                          className="flex items-center"
                        >
                            <p className="uppercase font-bold p-5 text-[2rem] underline">Обо мне</p>
                            <div>
                                <BsArrowRightCircle size="25px" />
                            </div>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            router.push('/#services', '/#services', { locale: false });
                            setIsOpen(false);
                          }}
                          className="flex items-center"
                        >
                            <p className="uppercase font-bold p-5 text-[2rem] underline">Услуги</p>
                            <div>
                                <BsArrowRightCircle size="25px" />
                            </div>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            router.push('/#contacts', '/#contacts', { locale: false });
                            setIsOpen(false);
                          }}
                          className="flex items-center"
                        >
                            <p className="uppercase font-bold p-5 text-[2rem] underline">Контакты</p>
                            <div>
                                <BsArrowRightCircle size="25px" />
                            </div>
                        </button>

                        <div className="mt-10 flex justify-center">
                            <Link
                              href="/ro"
                              className="underline border border-black  hover:bg-black
                              hover:underline hover:text-white p-5 duration-300 hover:scale-105"
                            >
                                RO
                            </Link>
                        </div>

                    </div>
                </div>
                )
}

            {
                isOpen && locale === 'ro' && (
                <div className="absolute top-32 border left-0 flex justify-center bg-white z-50 w-full duration-300 ">
                    <div className="h-[500px] flex  flex-col  justify-center">
                        <button
                          type="button"
                          onClick={() => {
                            router.push('/ro#about', '/ro#about', { locale: false });
                            setIsOpen(false);
                          }}
                          className="flex items-center"
                        >
                            <p className="uppercase font-bold p-5 text-[2rem] underline">Despre mine</p>
                            <div>
                                <BsArrowRightCircle size="25px" />
                            </div>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            router.push('/ro#services', '/ro#services', { locale: false });
                            setIsOpen(false);
                          }}
                          className="flex items-center"
                        >
                            <p className="uppercase font-bold p-5 text-[2rem] underline">Servicii</p>
                            <div>
                                <BsArrowRightCircle size="25px" />
                            </div>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            router.push('/ro#contacts', '/ro#contacts', { locale: false });
                            setIsOpen(false);
                          }}
                          className="flex items-center"
                        >
                            <p className="uppercase font-bold p-5 text-[2rem] underline">Contacte</p>
                            <div>
                                <BsArrowRightCircle size="25px" />
                            </div>
                        </button>

                        <div className="mt-10 flex justify-center">
                            <Link
                              href="/"
                              className="underline border border-black  hover:bg-black hover:underline
                              hover:text-white p-5 duration-300 hover:scale-105"
                            >
                                RU
                            </Link>
                        </div>

                    </div>
                </div>
                )
}

        </div>
  );
}

export default BurgerMenu;
