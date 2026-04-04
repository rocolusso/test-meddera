import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import BurgerMenu from '@/components/BurgerMenu';
import pintea from '../../../../public/assets/img/cert/pintea.svg';
import Certificate from '@/components/Сertificate';
import Contacts from '@/components/Сontacts';

function Page() {
  const certificatNumber = '63343633';
  const userName = 'Ecaterina Pintea';
  const service = 'Процедура Увеличение губ';
  const price = '2500';
  const currency = 'MDL';
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <div>
        <div
          className="header fixed inset-x-0 top-0 z-40 w-full bg-white/95 pt-[env(safe-area-inset-top,0px)] backdrop-blur-2xl"
        >
          <div className="container mx-auto px-4 sm:pt-10">
            <div
              className="flex gap-5 items-center border p-5 backdrop-blur-2xl sm:rounded-3xl sm:shadow-2xl z-50"
            >
              <Link href="/">
                <div className="max-w-[300px]">
                  <Image
                    src={pintea}
                    alt="pintea"
                    width={1000}
                    height={20}
                    priority
                  />
                </div>
              </Link>
              <div className="flex justify-between items-center sm:w-full">
                <nav className="hidden sm:flex ml-20  gap-10 uppercase underline font-bold text-xl">
                  <Link
                    href="/about"
                    className="hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105"
                  >
                    Обо мне
                  </Link>
                  <Link
                    href="/services"
                    className="hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105"
                  >
                    Услуги
                  </Link>
                  <Link
                    href="/?section=contacts"
                    className="hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105"
                  >
                    Контакты
                  </Link>
                </nav>
                <div className="hidden sm:block">
                  <Link
                    href="/ro"
                    className="underline border border-black
                                  hover:bg-black hover:underline hover:text-white
                                  p-5 duration-300 hover:scale-105"
                  >
                    RO
                  </Link>
                </div>
              </div>
              <BurgerMenu locale="ru" />
            </div>
          </div>
        </div>
        <div
          aria-hidden
          className="shrink-0 [height:calc(7rem+env(safe-area-inset-top,0px))] sm:[height:calc(11rem+env(safe-area-inset-top,0px))]"
        />

        <Certificate
          certificatNumber={certificatNumber}
          userName={userName}
          serviceName={service}
          price={price}
          currency={currency}
        />

        <Contacts locale="ru" />

      </div>

    </div>
  );
}

export default Page;
