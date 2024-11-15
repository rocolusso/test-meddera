import React from 'react';
import Image from "next/image";
import chistkaLica from "@/public/assets/img/services/chistka_lica.png";
import Contacts from "@/components/contacts";
import Link from "next/link";
import pintea from "@/public/assets/img/pintea.png";
import BurgerMenu from "@/components/burgerMenu";

const Service3
= () => {
    return (
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
                    <h1 className={'text-[1.5rem] sm:text-[3rem] sm:text-center'}>Curățarea feței</h1>
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
                        Curățarea feței este o procedură cosmetică menită să ofere o curățare profundă a pielii și să
                        îmbunătățească textura și culoarea acesteia. Procedura ajută la eliminarea impurităților,
                        excesului de sebum și a celulelor moarte, contribuind astfel la micșorarea porilor și la
                        reducerea riscului de inflamații.

                        Există mai multe tipuri de curățare, inclusiv mecanică, cu ultrasunete și combinată, alegerea
                        acestora depinzând de starea pielii și de nevoile sale. După o consultație, medicul selectează
                        metoda optimă și efectuează procedura, luând în considerare toate particularitățile pielii
                        pacientului.
                    </p>
                </div>
            </div>
            <Contacts locale={'ro'}/>
        </div>
    );
};

export default Service3;