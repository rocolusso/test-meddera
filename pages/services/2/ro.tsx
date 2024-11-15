import React from 'react';
import Image from "next/image";
import consultderm from "@/public/assets/img/services/consult-derm.png";
import Contacts from "@/components/contacts";
import Link from "next/link";
import pintea from "@/public/assets/img/pintea.png";

const Service2
= () => {
    return (
        <div>
            <div className={'sticky top-0 left-0 backdrop-blur-2xl   header container mx-auto pt-10   bg-white z-40'}>
                <div className={'flex gap-5 items-center border p-5 backdrop-blur-2xl rounded-3xl shadow-2xl z-50'}>
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
                    <div>
                        <Link href={'/services/2'}>
                            {
                                'RU'
                            }
                        </Link>
                    </div>
                </div>
            </div>


            <div className={'container mx-auto'}>
                <div className={'py-10 px-5'}>
                    <h1 className={'text-[1.5rem] sm:text-[3rem] sm:text-center bold'}>Consultația dermatologică</h1>
                </div>
                <div className={'flex justify-center'}>
                    <Image
                        className={''}
                        src={consultderm}
                        alt="biorevit"
                        width={600}
                        height={500}
                        priority
                    />
                </div>
                <div>
                    <p className={'max-w-[1000px] mx-auto py-10 px-5'}>
                        Consultația dermatologică este o vizită specializată la medicul dermatolog, în cadrul căreia se
                        realizează o evaluare completă a stării pielii. În timpul consultației, medicul analizează
                        simptomele care îl îngrijorează pe pacient, identifică posibilele cauze ale afecțiunilor
                        cutanate și elaborează un plan de tratament individualizat. Dermatologul poate recomanda analize
                        necesare și investigații instrumentale pentru un diagnostic precis. Consultația include
                        recomandări pentru îngrijirea pielii și stilul de viață, care ajută la prevenirea dezvoltării
                        afecțiunilor cutanate. Abordarea profesională permite depistarea și tratarea la timp a unor
                        probleme precum eczema, psoriazisul, acneea, infecțiile fungice și reacțiile alergice, menținând
                        sănătatea pielii pe termen lung.
                    </p>
                </div>
            </div>
            <Contacts locale={'ro'}/>
        </div>
    );
};

export default Service2;