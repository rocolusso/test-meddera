import React from 'react';
import Image from "next/image";
import massageLica from "@/public/assets/img/services/massage_lica.png";
import Contacts from "@/components/contacts";
import Link from "next/link";
import pintea from "@/public/assets/img/pintea.png";
import BurgerMenu from "@/components/burgerMenu";
import Head from "next/head";

const Service4
= () => {
    return (
        <>

            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta httpEquiv="content-language" content="ro"/>

                <title>Masaj facial – Beneficii, tehnici și efecte asupra pielii</title>
                <meta
                    name="description"
                    content="Descoperă beneficiile masajului facial: îmbunătățirea circulației, tonusului pielii, prevenirea semnelor îmbătrânirii. Tehnici variate pentru nevoile tale."
                />


                <meta property="og:title" content="Masaj facial – Beneficii, tehnici și efecte asupra pielii"/>
                <meta property="og:description"
                      content="Descoperă beneficiile masajului facial: îmbunătățirea circulației, tonusului pielii, prevenirea semnelor îmbătrânirii. Tehnici variate pentru nevoile tale."/>



                <meta name="twitter:title" content="Masaj facial – Beneficii, tehnici și efecte asupra pielii"/>
                <meta name="twitter:description"
                      content="Descoperă beneficiile masajului facial: îmbunătățirea circulației, tonusului pielii, prevenirea semnelor îmbătrânirii. Tehnici variate pentru nevoile tale."/>

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
                        <p className={'text-[1.5rem] sm:text-[3rem] sm:text-center'}>Masaj facial</p>
                    </div>
                    <div className={'flex justify-center'}>
                        <Image
                            className={''}
                            src={massageLica}
                            alt="biorevit"
                            width={600}
                            height={500}
                            priority
                        />
                    </div>
                    <div>
                        <p className={'max-w-[1000px] mx-auto py-10 px-5'}>
                            Masajul facial este o procedură care ajută la îmbunătățirea circulației sanguine, stimulează
                            producția de colagen și elastină și îmbunătățește tonusul pielii. Datorită acțiunii delicate
                            asupra mușchilor feței, masajul ajută la reducerea tensiunii, diminuarea edemelor și
                            creșterea
                            elasticității pielii, făcând-o mai fermă și mai strălucitoare. Există diferite tehnici de
                            masaj,
                            cum ar fi masajul clasic, drenajul limfatic, masajul sculptural, fiecare dintre acestea
                            abordând
                            nevoi specifice și fiind selectate în funcție de necesitățile pacientului. Ședințele
                            regulate de
                            masaj facial contribuie la prevenirea schimbărilor legate de vârstă și îmbunătățesc aspectul
                            general al pielii. O abordare profesională asigură nu doar un efect estetic, ci și relaxare,
                            ceea ce contribuie la o stare generală de bine.
                        </p>
                    </div>
                </div>
                <Contacts locale={'ro'}/>


                <div className={'seo-block bg-gray-400'}>
                    <div style={{fontSize: "8px"}}
                         className={'container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 '}>
                        <div>
                            <h1>Masaj facial</h1>
                            <h2>Beneficiile masajului facial</h2>
                            <h2>Tehnicile masajului facial</h2>
                            <h2>Cum să alegi tehnica potrivită de masaj</h2>
                        </div>

                        <div>
                            <h3>Îmbunătățirea circulației și a tonusului pielii</h3>
                            <h3>Reducerea tensiunii și a edemelor</h3>
                            <h3>Masaj facial clasic</h3>
                            <h3>Masaj limfatic</h3>
                            <h3>Masaj sculptural</h3>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
};

export default Service4;