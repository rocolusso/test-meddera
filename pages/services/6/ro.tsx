import React from 'react';
import Image from "next/image";
import pilling from "@/public/assets/img/services/pilling.png";
import Contacts from "@/components/contacts";
import Link from "next/link";
import pintea from "@/public/assets/img/pintea.png";
import BurgerMenu from "@/components/burgerMenu";

const Service6
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
                    <h1 className={'text-[1.5rem] sm:text-[3rem] sm:text-center'}>Peelingul</h1>
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
                        multe tipuri de peelinguri: chimic, mecanic, fiecare fiind potrivit pentru rezolvarea diverselor
                        probleme, cum ar fi tenul problematic, porii dilatați, pigmentarea, ridurile fine și neregularitățile
                        texturii. Procedura stimulează reînnoirea celulară, ceea ce ajută la îmbunătățirea culorii și tonusului
                        pielii, făcând-o mai netedă și radiantă. Un peeling profesional, realizat ținând cont de tipul și
                        starea pielii, nu doar că reîmprospătează aspectul acesteia, ci și reduce vizibilitatea
                        semnelor de îmbătrânire.
                    </p>
                </div>
            </div>
            <Contacts locale={'ro'}/>
        </div>
    );
};

export default Service6;