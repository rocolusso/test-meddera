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
                <meta http-equiv="content-language" content="ru"/>

                <title>Терапия анти-акне: Лечение воспалений кожи и профилактика высыпаний</title>
                <meta
                    name="description"
                    content="Терапия анти-акне — это индивидуальная процедура для лечения акне, нормализации работы сальных желез и предотвращения постакне. Узнайте больше о методах очищения, пилинга и увлажнения."
                />


                <meta property="og:title" content="Терапия анти-акне: Лечение воспалений кожи и профилактика высыпаний"/>
                <meta property="og:description"
                      content="Терапия анти-акне — это индивидуальная процедура для лечения акне, нормализации работы сальных желез и предотвращения постакне. Узнайте больше о методах очищения, пилинга и увлажнения."/>



                <meta name="twitter:title" content="Терапия анти-акне: Лечение воспалений кожи и профилактика высыпаний"/>
                <meta name="twitter:description"
                      content="Терапия анти-акне — это индивидуальная процедура для лечения акне, нормализации работы сальных желез и предотвращения постакне. Узнайте больше о методах очищения, пилинга и увлажнения."/>

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
                        <p className={'text-[1.5rem] sm:text-[3rem] sm:text-center'}>Терапия анти-акне</p>
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
                            Терапия анти-акне – это процедура направленная на лечение воспалений кожи и профилактику
                            новых
                            высыпаний. В процессе используются методы очищения, пилинга, антибактериальной обработки и
                            увлажнения, что помогает нормализовать работу сальных желез и устранить загрязнения в порах.
                            Важно, что процедура подбирается индивидуально в зависимости от типа кожи и стадии
                            заболевания.
                            Регулярные сеансы помогают не только устранить воспаления, но и предотвратить развитие
                            постакне
                            и рубцевание.
                        </p>
                    </div>
                </div>
                <Contacts locale={'ru'}/>


                <div className={'seo-block bg-gray-400'}>
                    <div style={{fontSize: "8px"}}
                         className={'container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 '}>
                        <div>
                            <h1>Терапия анти-акне</h1>
                            <h2>Что такое терапия анти-акне?</h2>
                            <h3>Основные этапы процедуры</h3>
                            <ul>
                                <li>Очищение кожи</li>
                                <li>Пилинг</li>
                                <li>Антибактериальная обработка</li>
                                <li>Увлажнение</li>
                            </ul>
                        </div>

                        <div>
                            <h2>Кому подходит процедура?</h2>
                            <h3>Индивидуальный подход к каждому клиенту</h3>
                            <h2>Преимущества регулярных сеансов</h2>
                            <h3>Профилактика постакне и рубцевания</h3>
                        </div>

                    </div>
                </div>


            </div>

        </>
    );
};

export default Service8;