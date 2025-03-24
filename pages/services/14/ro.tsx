import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Contacts from '@/components/contacts';
import botoks from '@/public/assets/img/services/botoks.png';
import pintea from '@/public/assets/img/pintea.png';
import BurgerMenu from '@/components/burgerMenu';

function Service13() {
  return (
        <div>
            <div
              className="sticky top-0 left-0 backdrop-blur-2xl   header container mx-auto sm:pt-10   bg-white z-40"
            >
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
                              href="/ro/#about"
                              className="hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105"
                            >
                                Despre mine
                            </Link>
                            <Link
                              href="/ro/#services"
                              className="hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105"
                            >
                                Servicii
                            </Link>
                            <Link
                              href="/ro/#contacts"
                              className="hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105"
                            >
                                Contacte
                            </Link>
                        </nav>

                        <div className="hidden sm:block">
                            <Link
                              href="/"
                              className="underline border border-black  hover:bg-black
                              hover:underline hover:text-white p-5 duration-300 hover:scale-105"
                            >
                                RU
                            </Link>
                        </div>

                    </div>

                    <BurgerMenu locale="ro" />

                </div>
            </div>
            <div className="container mx-auto">
                <div className="py-10 px-5">
                    <h1 className="text-[1.5rem] sm:text-[3rem] sm:text-center">Terapie antirid Botox</h1>
                </div>
                <div className="flex justify-center">
                    <Image
                      className="hover:scale-110 duration-500"
                      src={botoks}
                      alt="biorevit"
                      width={600}
                      height={500}
                      priority
                    />
                </div>
                <div>
                    <p className="max-w-[1000px] mx-auto py-10 px-5">
                        Terapie antirid Botox este o procedură cosmetologică prin care, cu ajutorul injecțiilor cu toxină botulinică
                        (botox), se blochează temporar impulsurile nervoase, relaxând mușchii, ceea ce permite reducerea
                        intensității ridurilor și liniilor de pe față. Botoxul este deosebit de eficient în eliminarea
                        ridurilor mimice de pe frunte, din jurul ochilor (laba gâștei), precum și între sprâncene
                        (ridurile punții nasului). Procedura durează doar 15-30 de minute și nu necesită o perioadă
                        lungă de recuperare, iar rezultatul devine vizibil după câteva zile și se menține timp de 4-6
                        luni. Botoxul ajută nu doar la netezirea ridurilor, ci și la prevenirea apariției unor noi
                        riduri, îmbunătățind aspectul general al pielii.
                    </p>
                </div>
            </div>
            <Contacts locale="ru" />
        </div>
  );
}

export default Service13;
