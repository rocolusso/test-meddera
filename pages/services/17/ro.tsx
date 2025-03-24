import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Contacts from '@/components/contacts';
import lipolitiki from '@/public/assets/img/services/lipolitiki.png';
import pintea from '@/public/assets/img/pintea.png';
import BurgerMenu from '@/components/burgerMenu';

function Service17() {
  return (
        <div>
            <div
              className="sticky top-0 left-0 backdrop-blur-2xl header container mx-auto sm:pt-10 bg-white z-40"
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
                              className="underline border border-black hover:bg-black hover:underline
                               hover:text-white p-5 duration-300 hover:scale-105"
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
                    <h1 className="text-[1.5rem] sm:text-[3rem] sm:text-center">Lipolitice</h1>
                </div>
                <div className="flex justify-center">
                    <Image
                      className="hover:scale-110 duration-500"
                      src={lipolitiki}
                      alt="biorevit"
                      width={600}
                      height={500}
                      priority
                    />
                </div>
                <div>
                    <p className="max-w-[1000px] mx-auto py-10 px-5">
                        Lipolitice sunt o procedură destinată reducerii depozitelor localizate de grăsime
                        și îmbunătățirii contururilor corpului și feței. Lipoliticii sunt preparate care conțin
                        substanțe active ce ajută la descompunerea grăsimii și eliminarea acesteia din organism,
                        contribuind astfel la reducerea volumelor în zonele problematice. Administrarea lipoliticilor
                        poate fi utilizată pentru corectarea unor zone precum bărbia (cutele bărbiei), zona abdominală,
                        coapsele, fesele și partea interioară a brațelor. Procedura nu necesită intervenție chirurgicală
                        și permite obținerea unui efect natural și de lungă durată, fiind de obicei necesare mai multe
                        ședințe pentru a atinge rezultatele optime. Lipoliticii contribuie la îmbunătățirea
                        contururilor, ridicarea pielii și la uniformizarea generală a siluetei.
                    </p>
                </div>
            </div>
            <Contacts locale="ro" />
        </div>
  );
}

export default Service17;
