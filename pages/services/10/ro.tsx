import React from 'react';
import Image from "next/image";
import Contacts from "@/components/contacts";
import dermapen from "@/public/assets/img/services/dermapen.png";
import Link from "next/link";
import pintea from "@/public/assets/img/pintea.png";
import BurgerMenu from "@/components/burgerMenu";
import Head from "next/head";

const Service10
= () => {
    return (

        <>

            <Head>
                <meta charSet="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta http-equiv="content-language" content="ro"/>

                <title>Dermapen: Procedură cosmetică pentru întinerirea și îngrijirea pielii</title>
                <meta
                    name="description"
                    content="Află cum procedura Dermapen ajută la îmbunătățirea texturii pielii, reducerea porilor, diminuarea ridurilor și eliminarea urmelor de acnee. Întinerire eficientă fără perioadă lungă de recuperare."
                />


                <meta property="og:title" content="Dermapen: Procedură cosmetică pentru întinerirea și îngrijirea pielii"/>
                <meta property="og:description"
                      content="Află cum procedura Dermapen ajută la îmbunătățirea texturii pielii, reducerea porilor, diminuarea ridurilor și eliminarea urmelor de acnee. Întinerire eficientă fără perioadă lungă de recuperare."/>



                <meta name="twitter:title" content="Dermapen: Procedură cosmetică pentru întinerirea și îngrijirea pielii"/>
                <meta name="twitter:description"
                      content="Află cum procedura Dermapen ajută la îmbunătățirea texturii pielii, reducerea porilor, diminuarea ridurilor și eliminarea urmelor de acnee. Întinerire eficientă fără perioadă lungă de recuperare."/>

            </Head>

            <div>
                <div
                    className={'sticky top-0 left-0 backdrop-blur-2xl   header container mx-auto sm:pt-10   bg-white z-40'}>
                    <div
                        className={'flex gap-5 items-center border p-5 backdrop-blur-2xl sm:rounded-3xl sm:shadow-2xl z-50'}>
                        <Link href={'/'}>
                            <div className={'max-w-[300px]'}>
                                <Image
                                    // className="dark:invert"
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
                        <p className={'text-[1.5rem] sm:text-[3rem] sm:text-center'}>Dermapen</p>
                    </div>
                    <div className={'flex justify-center'}>
                        <Image
                            className={'hover:scale-110 duration-500'}
                            src={dermapen}
                            alt="biorevit"
                            width={600}
                            height={500}
                            priority
                        />
                    </div>
                    <div>
                        <p className={'max-w-[1000px] mx-auto py-10 px-5'}>
                            Dermapen este o procedură cosmetologică bazată pe micro-needling, prin care, cu ajutorul
                            unui
                            dispozitiv cu multe ace mici, se creează daune microscopice la nivelul pielii. Acest lucru
                            stimulează procesele naturale de regenerare și producția de colagen, ceea ce contribuie la
                            îmbunătățirea texturii pielii, reducerea porilor, diminuarea ridurilor și combaterea
                            post-acneei, cicatricilor și vergeturilor. Dermapen permite îmbunătățirea tonusului pielii,
                            uniformizarea culorii acesteia și o face mai fermă. Procedura este sigură și eficientă, nu
                            necesită o perioadă lungă de recuperare și este potrivită pentru toate tipurile de piele.
                            Rezultatele devin vizibile după câteva ședințe.
                        </p>
                    </div>
                </div>
                <Contacts locale={'ro'}/>


                <div className={'seo-block bg-gray-400'}>
                    <div style={{fontSize: "8px"}}
                         className={'container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 '}>
                        <div>
                            <h1>Dermapen</h1>
                            <h2>Ce este procedura Dermapen?</h2>
                            <h3>Principiile de bază ale procedurii</h3>
                            <h3>Beneficiile utilizării Dermapen</h3>
                            <h3>Ce probleme rezolvă Dermapen?</h3>
                            <h3>Dermapen este potrivit pentru toate tipurile de piele?</h3>

                            <h2>Rezultatele după procedura Dermapen</h2>
                            <h3>Îmbunătățirea texturii pielii</h3>
                            <h3>Reducerea porilor și eliminarea ridurilor</h3>
                            <h3>Combaterea urmelor de acnee, cicatricilor și vergeturilor</h3>
                        </div>

                        <div>
                            <h2>Avantajele procedurii Dermapen</h2>
                            <h3>Siguranță și absența unei perioade lungi de recuperare</h3>
                            <h3>Eficiență vizibilă după câteva ședințe</h3>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
};

export default Service10;