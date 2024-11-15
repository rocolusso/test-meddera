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
                        <Link href={'/#about'}
                              className={'hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105'}>
                            Обо мне
                        </Link>
                        <Link href={'/#services'}
                              className={'hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105'}>
                            Услуги
                        </Link>
                        <Link href={'/#contacts'}
                              className={'hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105'}>
                            Контакты
                        </Link>
                    </nav>
                    <div>
                        <Link href={'/services/2/ro'}>
                            {
                                'RO'
                            }
                        </Link>
                    </div>
                </div>
            </div>


            <div className={'container mx-auto'}>
                <div className={'py-10 px-5'}>
                    <h1 className={'text-[1.5rem] sm:text-[3rem] sm:text-center bold'}>Дерматологическая
                        консультация</h1>
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
                        Дерматологическая консультация — это специализированный прием у врача-дерматолога, на котором
                        проводится комплексная оценка состояния кожи. Во время консультации врач анализирует беспокоящие
                        пациента симптомы, выявляет возможные причины кожных заболеваний и разрабатывает индивидуальный
                        план лечения. Дерматолог может назначить необходимые анализы и инструментальные исследования для
                        точного диагноза. Консультация включает рекомендации по уходу за кожей и образу жизни, которые
                        помогут предотвратить развитие кожных заболеваний. Профессиональный подход позволяет
                        своевременно выявить и лечить такие проблемы, как экзема, псориаз, акне, грибковые инфекции и
                        аллергические реакции, сохраняя здоровье кожи надолго.
                    </p>
                </div>
            </div>
            <Contacts locale={'ru'}/>
        </div>
    );
};

export default Service2;