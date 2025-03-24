import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Contacts from '@/components/contacts';
import mezovolos from '@/public/assets/img/services/mezovolos.png';
import pintea from '@/public/assets/img/pintea.png';
import BurgerMenu from '@/components/burgerMenu';

function Service12() {
  return (
        <>

            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta httpEquiv="content-language" content="ro" />

                <title>Mezoterapia pentru păr: redobândirea densității și sănătății</title>
                <meta
                  name="description"
                  content="Descoperă procedura de mezoterapie pentru păr — o soluție eficientă
                  pentru căderea, subțierea și alte probleme de creștere.
                  Stimularea foliculilor și îmbunătățirea microcirculației scalpului."
                />

                <meta
                  property="og:title"
                  content="Mezoterapia pentru păr:
                redobândirea densității și sănătății"
                />
                <meta
                  property="og:description"
                  content="Descoperă procedura de mezoterapie pentru păr — o soluție
                  eficientă pentru căderea, subțierea și alte probleme de creștere.
                  Stimularea foliculilor și îmbunătățirea microcirculației scalpului."
                />

                <meta
                  name="twitter:title"
                  content="Mezoterapia pentru păr: redobândirea
                densității și sănătății"
                />
                <meta
                  name="twitter:description"
                  content="Descoperă procedura de mezoterapie pentru păr — o soluție eficientă
                   pentru căderea, subțierea și alte probleme de creștere.
                    Stimularea foliculilor și îmbunătățirea microcirculației scalpului."
                />

            </Head>

            <div>
                <div
                  className="sticky top-0 left-0 backdrop-blur-2xl header container mx-auto sm:pt-10   bg-white z-40"
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
                        <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Mezoterapia pentru păr</p>
                    </div>
                    <div className="flex justify-center">
                        <Image
                          className="hover:scale-110 duration-500"
                          src={mezovolos}
                          alt="biorevit"
                          width={600}
                          height={500}
                          priority
                        />
                    </div>
                    <div>
                        <p className="max-w-[1000px] mx-auto py-10 px-5">
                            Mezoterapia pentru păr este o procedură destinată îmbunătățirii stării părului și scalpului.
                            În
                            cadrul procedurii, se injectează sub piele cocktailuri speciale care conțin vitamine,
                            minerale,
                            aminoacizi și alte substanțe active, care stimulează creșterea părului, întăresc foliculii
                            și
                            îmbunătățesc microcirculația la nivelul scalpului. Mezoterapia combate eficient probleme
                            precum
                            căderea părului, subțierea părului, dermatita seboreică și tulburările de creștere.
                            Procedura
                            ajută la restabilirea sănătății părului, îmbunătățirea densității și texturii acestuia.
                        </p>
                    </div>
                </div>
                <Contacts locale="ro" />

                <div className="seo-block bg-gray-400">
                    <div
                      style={{ fontSize: '8px' }}
                      className="container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 "
                    >
                        <div>
                            <h1>Mezoterapia pentru păr</h1>
                            <h2>Ce este mezoterapia pentru păr?</h2>
                            <h2>Beneficiile procedurii de mezoterapie</h2>
                            <h3>Stimularea creșterii părului</h3>
                            <h3>Întărirea foliculilor de păr</h3>
                            <h3>Combaterea căderii și subțierii părului</h3>

                        </div>

                        <div>
                            <h2>Ce probleme rezolvă mezoterapia?</h2>
                            <h3>Căderea părului</h3>
                            <h3>Subțierea părului</h3>
                            <h3>Dermatita seboreică</h3>
                        </div>

                    </div>
                </div>

            </div>
        </>
  );
}

export default Service12;
