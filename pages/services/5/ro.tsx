import React from 'react';
import Image from "next/image";
import karboksiterapiya from "@/public/assets/img/services/karbiksiterapiya.png";
import Contacts from "@/components/contacts";
import Link from "next/link";
import pintea from "@/public/assets/img/pintea.png";
import BurgerMenu from "@/components/burgerMenu";
import Head from "next/head";

const Service5
= () => {
    return (
        <>


            <Head>
                <meta charSet="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta http-equiv="content-language" content="ro"/>

                <title>Carboxiterapia: Îngrijirea pielii fără injecții pentru fermitate și strălucire</title>
                <meta
                    name="description"
                    content="Carboxiterapia este o procedură modernă, fără injecții, care îmbunătățește tonusul și fermitatea pielii, reduce ridurile, pigmentarea și acneea. Potrivită pentru toate tipurile de piele."
                />


                <meta property="og:title" content="Carboxiterapia: Îngrijirea pielii fără injecții pentru fermitate și strălucire"/>
                <meta property="og:description"
                      content="Carboxiterapia este o procedură modernă, fără injecții, care îmbunătățește tonusul și fermitatea pielii, reduce ridurile, pigmentarea și acneea. Potrivită pentru toate tipurile de piele."/>



                <meta name="twitter:title" content="Carboxiterapia: Îngrijirea pielii fără injecții pentru fermitate și strălucire"/>
                <meta name="twitter:description"
                      content="Carboxiterapia este o procedură modernă, fără injecții, care îmbunătățește tonusul și fermitatea pielii, reduce ridurile, pigmentarea și acneea. Potrivită pentru toate tipurile de piele."/>

            </Head>


            <div>
                <div
                    className={'sticky top-0 left-0 backdrop-blur-2xl   header container mx-auto sm:pt-10   bg-white z-40'}>
                    <div
                        className={'flex gap-5 items-center border p-5 backdrop-blur-2xl sm:rounded-3xl sm:shadow-2xl z-50'}>
                        <Link href={'/'}>
                            <div className={'max-w-[300px]'}>
                                <Image
                                    src={pintea}
                                    alt="pintea"
                                    width={1000}
                                    height={20}
                                    priority
                                />
                            </div>
                        </Link>

                        <div className={'flex justify-between items-center sm:w-full'}>
                            <nav className={'hidden sm:flex ml-20  gap-10 uppercase underline font-bold text-xl'}>
                                <Link href={'/ro/#about'}
                                      className={'hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105'}>
                                    Despre mine
                                </Link>
                                <Link href={'/ro/#services'}
                                      className={'hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105'}>
                                    Servicii
                                </Link>
                                <Link href={'/ro/#contacts'}
                                      className={'hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105'}>
                                    Contacte
                                </Link>
                            </nav>

                            <div className={'hidden sm:block'}>
                                <Link href={'/'}
                                      className={'underline border border-black  hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105'}>
                                    {
                                        'RU'
                                    }
                                </Link>
                            </div>

                        </div>


                        <BurgerMenu locale={'ro'}/>


                    </div>
                </div>
                <div className={'container mx-auto'}>
                    <div className={'py-10 px-5'}>
                        <p className={'text-[1.5rem] sm:text-[3rem] sm:text-center'}>Carboxiterapie</p>
                    </div>
                    <div className={'flex justify-center'}>
                        <Image
                            className={''}
                            src={karboksiterapiya}
                            alt="biorevit"
                            width={600}
                            height={500}
                            priority
                        />
                    </div>
                    <div>
                        <p className={'max-w-[1000px] mx-auto py-10 px-5'}>
                            Carboxiterapia este o procedură destinată îmbunătățirii stării pielii prin saturarea
                            acesteia cu
                            dioxid de carbon, fără injecții și fără a afecta integritatea pielii. În timpul procedurii,
                            pe
                            față se aplică un gel special care activează procesele de microcirculație și stimulează
                            fluxul
                            de oxigen către celule. Acest lucru îmbunătățește tonusul pielii, crește elasticitatea
                            acesteia,
                            reduce vizibilitatea ridurilor și a pigmentării și ajută în combaterea acneei și a semnelor
                            post-acnee. Carboxiterapia este potrivită pentru toate tipurile de piele și poate fi
                            utilizată
                            ca procedură de sine stătătoare sau în combinație cu alte tratamente.
                        </p>
                    </div>
                </div>
                <Contacts locale={'ro'}/>


                <div className={'seo-block bg-gray-400'}>
                    <div style={{fontSize: "8px"}}
                         className={'container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 '}>
                        <div>
                            <h1>Carboxiterapia</h1>
                            <h2>Ce este carboxiterapia?</h2>
                            <h3>Beneficiile procedurii</h3>
                            <h3>Cum se desfășoară procedura</h3>
                        </div>

                        <div>
                            <h2>Indicații pentru carboxiterapie</h2>
                            <h3>Pentru cine este potrivită carboxiterapia</h3>
                            <h2>Rezultate și efecte</h2>
                            <h3>Combaterea ridurilor și pigmentării</h3>
                            <h3>Îmbunătățirea tonusului și fermității pielii</h3>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
};

export default Service5;