import React from 'react';
import Image from "next/image";
import Contacts from "@/components/contacts";
import terapiyaProtivPigment from "@/public/assets/img/services/terapiya-protiv-pigm.png";
import Link from "next/link";
import pintea from "@/public/assets/img/pintea.png";
import BurgerMenu from "@/components/burgerMenu";
import Head from "next/head";

const Service9
= () => {
    return (

        <>

            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta httpEquiv="content-language" content="ro"/>

                <title>Terapie împotriva pigmentării: Soluția pentru un ton uniform și luminos al pielii</title>
                <meta
                    name="description"
                    content="Află cum terapia împotriva pigmentării ajută la iluminarea și eliminarea petelor pigmentare, a semnelor de îmbătrânire și a leziunilor solare. Obține o piele uniformă și strălucitoare!"
                />


                <meta property="og:title" content="Terapie împotriva pigmentării: Soluția pentru un ton uniform și luminos al pielii"/>
                <meta property="og:description"
                      content="Află cum terapia împotriva pigmentării ajută la iluminarea și eliminarea petelor pigmentare, a semnelor de îmbătrânire și a leziunilor solare. Obține o piele uniformă și strălucitoare!"/>



                <meta name="twitter:title" content="Terapie împotriva pigmentării: Soluția pentru un ton uniform și luminos al pielii"/>
                <meta name="twitter:description"
                      content="Află cum terapia împotriva pigmentării ajută la iluminarea și eliminarea petelor pigmentare, a semnelor de îmbătrânire și a leziunilor solare. Obține o piele uniformă și strălucitoare!"/>

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
                        <p className={'text-[1.5rem] sm:text-[3rem] sm:text-center'}>Terapie antipigmentară</p>
                    </div>
                    <div className={'flex justify-center'}>
                        <Image
                            className={'hover:scale-110 duration-500'}
                            src={terapiyaProtivPigment}
                            alt="biorevit"
                            width={600}
                            height={500}
                            priority
                        />
                    </div>
                    <div>
                        <p className={'max-w-[1000px] mx-auto py-10 px-5'}>
                            Terapie antipigmentară este o procedură cosmetologică destinată iluminării
                            și eliminării petelor pigmentare, hiperpigmentației. În timpul procedurii,
                            se utilizează peelinguri și produse speciale de iluminare,
                            care blochează producția de melanina și contribuie la
                            distribuirea uniformă a acesteia în piele. Procedura este
                            potrivită pentru tratarea fotoîmbătrînirii, cronoîmbătrînrii,
                            petelor de vârstă, a leziunilor cauzate de soare, precum și a hiperpigmentației
                            post-inflamatorii. Realizarea regulată a acestor proceduri ajută la
                            îmbunătățirea semnificativă a culorii tenului și la obținerea
                            unei pielii mai netede și strălucitoare.
                        </p>
                    </div>
                </div>
                <Contacts locale={'ro'}/>


                <div className={'seo-block bg-gray-400'}>
                    <div style={{fontSize: "8px"}}
                         className={'container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 '}>
                        <div>
                            <h1>Terapie împotriva pigmentării</h1>
                            <h2>Ce este terapia împotriva pigmentării?</h2>
                            <h3>Iluminarea petelor pigmentare și a neregularităților tonului pielii</h3>
                            <h2>Ce probleme rezolvă această procedură?</h2>
                            <h3>Pete de îmbătrânire și leziuni solare</h3>
                            <h3>Hiperpigmentare post-inflamatorie</h3>
                            <h2>Cum se desfășoară procedura?</h2>
                            <h3>Utilizarea peelingurilor și a produselor de iluminare</h3>
                            <h3>Blocarea producției de melanină</h3>
                        </div>

                        <div>
                            <h2>Beneficiile procedurilor regulate</h2>
                            <h3>Îmbunătățirea culorii pielii</h3>
                            <h3>Un ton uniform și luminos</h3>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
};

export default Service9;