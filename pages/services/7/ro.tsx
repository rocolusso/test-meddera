import React from 'react';
import Image from "next/image";
import Contacts from "@/components/contacts";
import maskaLica from "@/public/assets/img/services/maska_lica.png";
import Link from "next/link";
import pintea from "@/public/assets/img/pintea.png";
import BurgerMenu from "@/components/burgerMenu";
import Head from "next/head";

const Service7
= () => {
    return (
        <>

            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta httpEquiv="content-language" content="ro"/>

                <title>Masca alginată – Hidratare, lifting și strălucirea pielii</title>
                <meta
                    name="description"
                    content="Descoperiți cum masca alginată obținută din alge marine brune ajută la hidratarea profundă, tonifierea și calmarea pielii. Potrivită pentru orice tip de ten, îmbunătățește textura, tonul și elasticitatea pielii."
                />


                <meta property="og:title" content="Masca alginată – Hidratare, lifting și strălucirea pielii"/>
                <meta property="og:description"
                      content="Descoperiți cum masca alginată obținută din alge marine brune ajută la hidratarea profundă, tonifierea și calmarea pielii. Potrivită pentru orice tip de ten, îmbunătățește textura, tonul și elasticitatea pielii."/>



                <meta name="twitter:title" content="Masca alginată – Hidratare, lifting și strălucirea pielii"/>
                <meta name="twitter:description"
                      content="Descoperiți cum masca alginată obținută din alge marine brune ajută la hidratarea profundă, tonifierea și calmarea pielii. Potrivită pentru orice tip de ten, îmbunătățește textura, tonul și elasticitatea pielii."/>

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
                        <p className={'text-[1.5rem] sm:text-[3rem] sm:text-center'}>Masca alginată</p>
                    </div>
                    <div className={'flex justify-center'}>
                        <Image
                            className={'hover:scale-110 duration-500'}
                            src={maskaLica}
                            alt="biorevit"
                            width={600}
                            height={500}
                            priority
                        />
                    </div>
                    <div>
                        <p className={'max-w-[1000px] mx-auto py-10 px-5'}>
                            Mască alginată – un mijloc eficient de îngrijire a pielii,
                            realizat pe bază de alginați, care se obțin din algele marine brune.
                            Datorită conținutului ridicat de minerale și microelemente,
                            măștile alginate au un puternic efect hidratant, de întindere și calmare.
                            Masca se aplică pe față sub formă de amestec dens și se întărește, formând un strat compact,
                            care ajută substanțele active să pătrundă mai adânc în piele. În funcție de compoziție,
                            măștile alginate pot ilumina suplimentar pigmentația, îmbunătăți textura pielii
                            și ajuta la eliminarea inflamațiilor. După procedură, pielea arată proaspătă,
                            hidratată și fermă, iar tonul acesteia devine mai uniform și radiant.
                            Măștile alginate sunt ideale pentru orice tip de piele și sunt
                            frecvent utilizate la finalul tratamentelor profesionale, amplificând efectul altor
                            proceduri.
                        </p>
                    </div>
                </div>
                <Contacts locale={'ro'}/>


                <div className={'seo-block bg-gray-400'}>
                    <div style={{fontSize: "8px"}}
                         className={'container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 '}>
                        <div>
                            <h1>Masca alginată</h1>
                            <h2>Ce este masca alginată?</h2>
                            <h2>Beneficiile măștii alginate</h2>
                            <h3>Hidratare și hrănire a pielii</h3>
                        </div>

                        <div>
                            <h3>Efect de lifting</h3>
                            <h3>Reducerea inflamațiilor și îmbunătățirea texturii</h3>
                            <h2>Pentru cine este potrivită masca alginată?</h2>
                            <h2>Cum se utilizează masca alginată?</h2>
                            <h2>Rezultatele după utilizare</h2>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
};

export default Service7;