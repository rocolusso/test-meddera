import React from 'react';
import Link from 'next/link';

import { servicesLinksRo, servicesLinksRu } from '@/lib/db-content';
import { FaMapLocationDot, FaPhoneVolume } from 'react-icons/fa6';

function FooterNew({ locale }: {locale: string}) {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer>
      <div className="footer__sitemap container mx-auto p-5 my-20 border-t border-b border-gray-400 ">
        <div className="grid grid-cols-1 sm:grid-cols-2">

          <div>
            <p className="font-heading mt-2 text-3xl leading-8 font-semibold
                                  tracking-tight text-gray-900 sm:text-4xl"
            >
              {locale === 'ru' ? 'Услуги' : 'Servicii'}
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3">
              {
                locale === 'ru' && servicesLinksRu.map((service) => (
                  <div key={service.id} className="overflow-hidden ">

                    <div className=" hover:scale-105 duration-300 hover:bg-green-400
                      hover:text-white transition  ease-in-out"
                    >
                      <Link
                        href={service.url}
                        className="px-6 py-4 underline text-sm  inline-block w-full h-full"
                      >
                        {service.title}
                      </Link>
                    </div>
                  </div>
                ))
                }
              {
                  locale === 'ro' && servicesLinksRo.map((service) => (
                    <div key={service.id} className="overflow-hidden ">

                      <div className=" hover:scale-105 duration-300 hover:bg-green-400
                      hover:text-white transition  ease-in-out"
                      >
                        <Link
                          href={service.url}
                          className="px-6 py-4 underline text-sm  inline-block w-full h-full"
                        >
                          {service.title}
                        </Link>
                      </div>
                    </div>
                  ))
              }
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="w-fit">
              <p className="font-heading mt-2 text-3xl leading-8 font-semibold
                                  tracking-tight text-gray-900 sm:text-4xl"
              >
                {locale === 'ru' ? 'Главная' : 'Acasă'}
              </p>
              <div>
                <ul>
                  <li>
                    <div className=" hover:scale-105 duration-300 hover:bg-green-400
                      hover:text-white transition  ease-in-out"
                    >
                      <Link
                        href={locale === 'ru' ? '/#about' : '/ro/#about'}
                        className="px-6 py-4 underline text-sm  inline-block w-full h-full"
                      >
                        {locale === 'ru' ? 'Обо мне' : 'Despre mine'}
                      </Link>
                    </div>

                  </li>
                  <li>
                    <div className=" hover:scale-105 duration-300 hover:bg-green-400
                      hover:text-white transition  ease-in-out"
                    >
                      <Link
                        href={locale === 'ru' ? '/#services' : '/ro/#services'}
                        className="px-6 py-4 underline text-sm  inline-block w-full h-full"
                      >
                        {locale === 'ru' ? 'Услуги' : 'Servicii'}
                      </Link>
                    </div>

                  </li>
                  <li>
                    <div className=" hover:scale-105 duration-300 hover:bg-green-400
                      hover:text-white transition  ease-in-out"
                    >
                      <Link
                        href={locale === 'ru' ? '/#contacts' : '/ro/#contacts'}
                        className="px-6 py-4 underline text-sm  inline-block w-full h-full"
                      >
                        {locale === 'ru' ? 'Контакты' : 'Contacte'}
                      </Link>
                    </div>

                  </li>
                </ul>
              </div>
            </div>
            <div className="w-fit">
              <p className="font-heading mt-2 text-3xl leading-8 font-semibold
                                  tracking-tight text-gray-900 sm:text-4xl"
              >
                {locale === 'ru' ? 'Контакты' : 'Contacte'}
              </p>
              <div className="mt-10">
                <ul className="flex items-start gap-5 flex-col">
                  <li>
                    <div className="flex gap-2 items-center justify-center hover:scale-105 duration-300">
                      <Link href="/#lazy-map" className=" font-bold uppercase text-xs sm:text-sm flex items-center gap-2">
                        <div>
                          <FaMapLocationDot size="24px" />
                        </div>
                        <p className=" font-bold uppercase text-xs sm:text-sm">Balti, Stefan Cel Mare, 13</p>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center justify-center hover:scale-105 duration-300">
                      <Link href="tel:+37368550030" className=" font-bold uppercase text-xs sm:text-sm flex gap-2">
                        <div>
                          <FaPhoneVolume size="22px" className="" />
                        </div>
                        <p>+37368550030</p>
                      </Link>
                    </div>

                  </li>

                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="footer_bottom bg-black py-10">
        <div className="container mx-auto  text-center flex flex-col max-w-[400px]  p-5  text-white">
          <Link href="/">
            <p>{`© Meddera | Ecaterina Pintea | 2018 - ${currentYear}`}</p>
          </Link>

          {/* <div className=" my-10 "> */}
          {/*  <Link href="/"> */}
          {/*    <p>Website by Alex</p> */}
          {/*  </Link> */}
          {/* </div> */}
        </div>
      </div>
    </footer>
  );
}

export default FooterNew;
