import React from 'react';
import Image from "next/image";
import Contacts from "@/components/contacts";
import mezolica from "@/public/assets/img/services/mezolica.png";
import Link from "next/link";
import pintea from "@/public/assets/img/pintea.png";
import BurgerMenu from "@/components/burgerMenu";
import Head from "next/head";

const Service11
= () => {
    return (
        <>

            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta httpEquiv="content-language" content="ro"/>

                <title>Mezoterapie facială: Reîntinerire și îmbunătățirea aspectului</title>
                <meta
                    name="description"
                    content="Descoperă totul despre procedura de mezoterapie facială! Introducerea substanțelor active în straturile profunde ale pielii ajută la eliminarea uscăciunii, ridurilor, pigmentării și redă pielii elasticitatea, prospețimea și strălucirea."
                />


                <meta property="og:title" content="Mezoterapie facială: Reîntinerire și îmbunătățirea aspectului"/>
                <meta property="og:description"
                      content="Descoperă totul despre procedura de mezoterapie facială! Introducerea substanțelor active în straturile profunde ale pielii ajută la eliminarea uscăciunii, ridurilor, pigmentării și redă pielii elasticitatea, prospețimea și strălucirea."/>



                <meta name="twitter:title" content="Mezoterapie facială: Reîntinerire și îmbunătățirea aspectului"/>
                <meta name="twitter:description"
                      content="Descoperă totul despre procedura de mezoterapie facială! Introducerea substanțelor active în straturile profunde ale pielii ajută la eliminarea uscăciunii, ridurilor, pigmentării și redă pielii elasticitatea, prospețimea și strălucirea."/>

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
                        <p className={'text-[1.5rem] sm:text-[3rem] sm:text-center'}>Mezoterapia facială</p>
                    </div>
                    <div className={'flex justify-center'}>
                        <Image
                            className={'hover:scale-110 duration-500'}
                            src={mezolica}
                            alt="biorevit"
                            width={600}
                            height={500}
                            priority
                        />
                    </div>
                    <div>
                        <p className={'max-w-[1000px] mx-auto py-10 px-5'}>
                            Mezoterapia facială este o procedură cosmetică prin care se introduc în straturile adânci
                            ale
                            pielii cocktailuri de vitamine, aminoacizi, acid hialuronic și alte substanțe active cu
                            ajutorul
                            unor ace foarte fine. Această tehnică ajută la rezolvarea multor probleme, precum
                            uscăciunea,
                            culoarea ternă a tenului, pierderea elasticității, ridurile și pigmentația. Mezoterapia
                            stimulează procesele metabolice, îmbunătățește microcirculația și hidratarea pielii,
                            restabilește structura și tonusul acesteia. Procedura nu necesită o perioadă lungă de
                            recuperare, iar rezultatele se observă după câteva ședințe, oferind pielii un aspect
                            proaspăt și
                            strălucitor. Mezoterapia este potrivită pentru toate tipurile de piele și este eficientă
                            pentru
                            reîntinerire și îmbunătățirea aspectului exterior.
                        </p>
                    </div>
                </div>
                <Contacts locale={'ro'}/>


                <div className={'seo-block bg-gray-400'}>
                    <div style={{fontSize: "8px"}}
                         className={'container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 '}>
                        <div>
                            <h1>Mezoterapie facială</h1>
                            <h2>Ce este mezoterapia facială?</h2>
                            <h3>Principalele componente ale cocktailurilor de mezoterapie</h3>
                            <h3>Beneficiile mezoterapiei</h3>
                            <h2>Ce probleme rezolvă mezoterapia?</h2>
                            <h3>Uscăciunea și culoarea ternă a pielii</h3>

                            <h3>Pierderea fermității și apariția ridurilor</h3>
                            <h3>Pigmentarea și refacerea structurii pielii</h3>
                        </div>

                        <div>
                            <h2>Eficiența și rezultatele procedurii</h2>
                            <h3>Când devine vizibil efectul?</h3>
                            <h3>Cui i se potrivește mezoterapia facială?</h3>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
};

export default Service11;