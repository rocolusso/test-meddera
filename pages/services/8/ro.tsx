import React from 'react';
import Image from "next/image";
import Contacts from "@/components/contacts";
import maskaLica from "@/public/assets/img/services/anti-akne.png";
import Link from "next/link";
import pintea from "@/public/assets/img/pintea.png";
import BurgerMenu from "@/components/burgerMenu";
import Head from "next/head";

const Service8
= () => {
    return (
        <>

            <Head>
                <meta charSet="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta http-equiv="content-language" content="ro"/>

                <title>Terapia anti-acnee: Tratarea inflamațiilor pielii și prevenirea erupțiilor</title>
                <meta
                    name="description"
                    content="Terapia anti-acnee este o procedură individuală pentru tratarea acneei, normalizarea funcționării glandelor sebacee și prevenirea post-acneei. Află mai multe despre metodele de curățare, peeling și hidratare."
                />


                <meta property="og:title" content="Терапия анти-акне: Лечение воспалений кожи и профилактика высыпаний"/>
                <meta property="og:description"
                      content="Terapia anti-acnee este o procedură individuală pentru tratarea acneei, normalizarea funcționării glandelor sebacee și prevenirea post-acneei. Află mai multe despre metodele de curățare, peeling și hidratare."/>



                <meta name="twitter:title" content="Терапия анти-акне: Лечение воспалений кожи и профилактика высыпаний"/>
                <meta name="twitter:description"
                      content="Terapia anti-acnee este o procedură individuală pentru tratarea acneei, normalizarea funcționării glandelor sebacee și prevenirea post-acneei. Află mai multe despre metodele de curățare, peeling și hidratare."/>

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
                        <p className={'text-[1.5rem] sm:text-[3rem] sm:text-center'}>Terapia anti-acnee</p>
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
                            Terapia anti-acnee este o procedură destinată tratării inflamațiilor pielii și prevenției
                            apariției de noi erupții. În cadrul procesului se utilizează metode de curățare, peeling,
                            tratamente antibacteriene și hidratare, care ajută la normalizarea activității glandelor
                            sebacee
                            și la eliminarea impurităților din pori. Este important de menționat că procedura este
                            aleasă
                            individual, în funcție de tipul pielii și stadiul afecțiunii. Ședințele regulate ajută nu
                            doar
                            la eliminarea inflamațiilor, dar și la prevenirea dezvoltării post-acneei și a cicatrizării.
                        </p>
                    </div>
                </div>
                <Contacts locale={'ro'}/>


                <div className={'seo-block bg-gray-400'}>
                    <div style={{fontSize: "8px"}}
                         className={'container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 '}>
                        <div>
                            <h1>Terapia anti-acnee</h1>
                            <h2>Ce este terapia anti-acnee?</h2>
                            <h3>Etapele principale ale procedurii</h3>
                            <ul>
                                <li>Curățarea pielii</li>
                                <li>Peeling</li>
                                <li>Tratament antibacterian</li>
                                <li>Hidratare</li>
                            </ul>
                        </div>

                        <div>
                            <h2>Cui i se potrivește procedura?</h2>
                            <h3>Abordare individuală pentru fiecare client</h3>
                            <h2>Beneficiile ședințelor regulate</h2>
                            <h3>Prevenirea post-acneei și cicatricilor</h3>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
};

export default Service8;