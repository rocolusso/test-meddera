import React from 'react';
import Image from "next/image";
import consultderm from "@/public/assets/img/services/consult-derm.png";
import Contacts from "@/components/contacts";
import Link from "next/link";
import pintea from "@/public/assets/img/pintea.png";
import Head from "next/head";
import BurgerMenu from "@/components/burgerMenu";

const Service2
= () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta http-equiv="content-language" content="ru"/>

                <title>Дерматологическая консультация: Комплексный подход к здоровью кожи</title>
                <meta
                    name="description"
                    content="Профессиональная дерматологическая консультация для диагностики и лечения кожных заболеваний. Индивидуальные рекомендации, анализы и план лечения для здоровья кожи."
                />


                <meta property="og:title" content="Дерматологическая консультация: Комплексный подход к здоровью кожи"/>
                <meta property="og:description"
                      content="Профессиональная дерматологическая консультация для диагностики и лечения кожных заболеваний. Индивидуальные рекомендации, анализы и план лечения для здоровья кожи."/>



                <meta name="twitter:title" content="Дерматологическая консультация: Комплексный подход к здоровью кожи"/>
                <meta name="twitter:description"
                      content="Профессиональная дерматологическая консультация для диагностики и лечения кожных заболеваний. Индивидуальные рекомендации, анализы и план лечения для здоровья кожи."/>

            </Head>
            <div>
                <div
                    className={'header sticky top-0 left-0 backdrop-blur-2xl   header container mx-auto sm:pt-10   bg-white z-40'}>
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


                            <div className={'hidden sm:block'}>
                                <Link href={'/ro'}
                                      className={'underline border border-black  hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105'}>
                                    {
                                        'RO'
                                    }
                                </Link>
                            </div>
                        </div>


                        <BurgerMenu locale={'ru'}/>


                    </div>
                </div>


                <div className={'container mx-auto'}>
                    <div className={'py-10 px-5'}>
                        <p className={'text-[1.5rem] sm:text-[3rem] sm:text-center bold'}>Дерматологическая
                            консультация</p>
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
                            Дерматологическая консультация — это специализированный прием у врача-дерматолога, на
                            котором
                            проводится комплексная оценка состояния кожи. Во время консультации врач анализирует
                            беспокоящие
                            пациента симптомы, выявляет возможные причины кожных заболеваний и разрабатывает
                            индивидуальный
                            план лечения. Дерматолог может назначить необходимые анализы и инструментальные исследования
                            для
                            точного диагноза. Консультация включает рекомендации по уходу за кожей и образу жизни,
                            которые
                            помогут предотвратить развитие кожных заболеваний. Профессиональный подход позволяет
                            своевременно выявить и лечить такие проблемы, как экзема, псориаз, акне, грибковые инфекции
                            и
                            аллергические реакции, сохраняя здоровье кожи надолго.
                        </p>
                    </div>
                </div>
                <Contacts locale={'ru'}/>

                <div className={'seo-block bg-gray-400'}>
                    <div style={{fontSize: "8px"}}
                         className={'container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 '}>
                        <div>
                            <h1>Дерматологическая консультация</h1>
                            <h2>Что включает дерматологическая консультация?</h2>
                            <h2>Преимущества профессионального подхода к уходу за кожей</h2>
                            <h2>Часто встречающиеся кожные проблемы и их лечение</h2>
                        </div>

                        <div>
                            <h3>Оценка состояния кожи</h3>
                            <h3>Назначение анализов и инструментальных исследований</h3>
                            <h3>Разработка индивидуального плана лечения</h3>
                            <h3>Рекомендации по уходу за кожей и образу жизни</h3>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
};

export default Service2;