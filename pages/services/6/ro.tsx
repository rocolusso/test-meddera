import React from 'react';
import Image from "next/image";
import pilling from "@/public/assets/img/services/pilling.png";
import Contacts from "@/components/contacts";
import Link from "next/link";
import pintea from "@/public/assets/img/pintea.png";
import BurgerMenu from "@/components/burgerMenu";
import Head from "next/head";

const Service6
= () => {
    return (
        <>

            <Head>
                <meta charSet="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta http-equiv="content-language" content="ro"/>

                <title>Peeling: Tipuri și Beneficii pentru Pielea Ta</title>
                <meta
                    name="description"
                    content="Descoperă totul despre procedura de peeling: tipuri, beneficii și cum ajută la îmbunătățirea stării pielii. Abordare profesională pentru o piele sănătoasă și strălucitoare."
                />


                <meta property="og:title" content="Peeling: Tipuri și Beneficii pentru Pielea Ta"/>
                <meta property="og:description"
                      content="Descoperă totul despre procedura de peeling: tipuri, beneficii și cum ajută la îmbunătățirea stării pielii. Abordare profesională pentru o piele sănătoasă și strălucitoare."/>



                <meta name="twitter:title" content="Peeling: Tipuri și Beneficii pentru Pielea Ta"/>
                <meta name="twitter:description"
                      content="Descoperă totul despre procedura de peeling: tipuri, beneficii și cum ajută la îmbunătățirea stării pielii. Abordare profesională pentru o piele sănătoasă și strălucitoare."/>

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
                        <p className={'text-[1.5rem] sm:text-[3rem] sm:text-center'}>Peelingul</p>
                    </div>
                    <div className={'flex justify-center'}>
                        <Image
                            className={''}
                            src={pilling}
                            alt="biorevit"
                            width={600}
                            height={500}
                            priority
                        />
                    </div>
                    <div>
                        <p className={'max-w-[1000px] mx-auto py-10 px-5'}>
                            Peelingul este o procedură cosmetică menită să reînnoiască și să îmbunătățească
                            starea pielii prin îndepărtarea celulelor moarte de pe suprafața acesteia. Există mai
                            multe tipuri de peelinguri: chimic, mecanic, fiecare fiind potrivit pentru rezolvarea
                            diverselor
                            probleme, cum ar fi tenul problematic, porii dilatați, pigmentarea, ridurile fine și
                            neregularitățile
                            texturii. Procedura stimulează reînnoirea celulară, ceea ce ajută la îmbunătățirea culorii
                            și tonusului
                            pielii, făcând-o mai netedă și radiantă. Un peeling profesional, realizat ținând cont de
                            tipul și
                            starea pielii, nu doar că reîmprospătează aspectul acesteia, ci și reduce vizibilitatea
                            semnelor de îmbătrânire.
                        </p>
                    </div>
                </div>
                <Contacts locale={'ro'}/>


                <div className={'seo-block bg-gray-400'}>
                    <div style={{fontSize: "8px"}}
                         className={'container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 '}>
                        <div>
                            <h1>Peeling</h1>
                            <h2>Ce este peelingul?</h2>
                            <h2>Principalele tipuri de peeling</h2>
                            <h2>Beneficiile peelingului profesional</h2>
                        </div>

                        <div>
                            <h3>Peeling chimic</h3>
                            <h3>Peeling mecanic</h3>
                            <h3>Probleme ale pielii care pot fi rezolvate</h3>
                            <h3>Cum îmbunătățește peelingul starea pielii?</h3>
                            <h3>De ce este importantă o abordare profesională?</h3>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
};

export default Service6;