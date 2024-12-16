import React from 'react';
import Image from "next/image";
import chistkaLica from "@/public/assets/img/services/chistka_lica.png";
import Contacts from "@/components/contacts";
import Link from "next/link";
import pintea from "@/public/assets/img/pintea.png";
import BurgerMenu from "@/components/burgerMenu";
import Head from "next/head";

const Service3
= () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta http-equiv="content-language" content="ro"/>

                <title>Curățarea Feței: Tipuri și Beneficii ale Procedurii Cosmetice</title>
                <meta
                    name="description"
                    content="Curățarea feței — o procedură pentru curățarea profundă a pielii și îmbunătățirea texturii și culorii acesteia. Descoperă curățarea mecanică, ultrasonică și combinată pentru o piele perfectă."
                />


                <meta property="og:title" content="Curățarea Feței: Tipuri și Beneficii ale Procedurii Cosmetice"/>
                <meta property="og:description"
                      content="Curățarea feței — o procedură pentru curățarea profundă a pielii și îmbunătățirea texturii și culorii acesteia. Descoperă curățarea mecanică, ultrasonică și combinată pentru o piele perfectă."/>



                <meta name="twitter:title" content="Curățarea Feței: Tipuri și Beneficii ale Procedurii Cosmetice"/>
                <meta name="twitter:description"
                      content="Curățarea feței — o procedură pentru curățarea profundă a pielii și îmbunătățirea texturii și culorii acesteia. Descoperă curățarea mecanică, ultrasonică și combinată pentru o piele perfectă."/>

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
                        <h1 className={'text-[1.5rem] sm:text-[3rem] sm:text-center'}>Curățirea feței</h1>
                    </div>
                    <div className={'flex justify-center'}>
                        <Image
                            className={''}
                            src={chistkaLica}
                            alt="biorevit"
                            width={600}
                            height={500}
                            priority
                        />
                    </div>
                    <div>
                        <p className={'max-w-[1000px] mx-auto py-10 px-5'}>
                            Curățirea feței este o procedură cosmetică menită să ofere o curățare profundă a pielii și
                            să
                            îmbunătățească textura și culoarea acesteia. Procedura ajută la eliminarea impurităților,
                            excesului de sebum și a celulelor moarte, contribuind astfel la micșorarea porilor și la
                            reducerea riscului de inflamații.

                            Există mai multe tipuri de curățare, inclusiv mecanică, cu ultrasunete și combinată,
                            alegerea
                            acestora depinzând de starea pielii și de nevoile sale. După o consultație, medicul
                            selectează
                            metoda optimă și efectuează procedura, luând în considerare toate particularitățile pielii
                            pacientului.
                        </p>
                    </div>
                </div>
                <Contacts locale={'ro'}/>

                <div className={'seo-block bg-gray-400'}>
                    <div style={{fontSize: "8px"}}
                         className={'container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 '}>
                        <div>
                            <h1>Curățarea feței</h1>
                            <h2>Ce este curățarea feței?</h2>
                            <h2>Beneficiile procedurii</h2>
                            <h2>Tipuri de curățare a feței</h2>
                        </div>

                        <div>
                            <h3>Curățarea mecanică</h3>
                            <h3>Curățarea ultrasonică</h3>
                            <h3>Curățarea combinată</h3>
                        </div>

                        <div>
                            <h2>Cum să alegi metoda potrivită?</h2>
                            <h2>Etapele procedurii</h2>
                            <h2>Recomandări pentru îngrijirea pielii după curățare</h2>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
};

export default Service3;