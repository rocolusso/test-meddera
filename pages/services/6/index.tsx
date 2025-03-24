import React from 'react';
import Image from "next/image";
import pilling from "@/public/assets/img/services/pilling.png";
import Contacts from "@/components/contacts";
import Link from "next/link";
import pintea from "@/public/assets/img/pintea.png";
import BurgerMenu from "@/components/burgerMenu";
import Head from "next/head";

const Service6
= () => {
    return (
        <>

            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta httpEquiv="content-language" content="ru"/>

                <title>Пилинг: Виды и Преимущества для Вашей Кожи</title>
                <meta
                    name="description"
                    content="Узнайте всё о процедуре пилинга: виды, преимущества, и как она помогает улучшить состояние кожи. Профессиональный подход для сияющей и здоровой кожи."
                />


                <meta property="og:title" content="Пилинг: Виды и Преимущества для Вашей Кожи"/>
                <meta property="og:description"
                      content="Узнайте всё о процедуре пилинга: виды, преимущества, и как она помогает улучшить состояние кожи. Профессиональный подход для сияющей и здоровой кожи."/>



                <meta name="twitter:title" content="Пилинг: Виды и Преимущества для Вашей Кожи"/>
                <meta name="twitter:description"
                      content="Узнайте всё о процедуре пилинга: виды, преимущества, и как она помогает улучшить состояние кожи. Профессиональный подход для сияющей и здоровой кожи."/>

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
                        <p className={'text-[1.5rem] sm:text-[3rem] sm:text-center'}>Пилинг</p>
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
                            Пилинг — косметологическая процедура, направленная на обновление и улучшение состояния кожи
                            путем удаления ороговевших клеток с её поверхности. Существует несколько видов пилингов:
                            химический, механический, , каждый из которых подходит для решения различных проблем, таких
                            как
                            тусклый цвет лица, расширенные поры, пигментация, мелкие морщины и неровности текстуры.
                            Процедура стимулирует клеточное обновление, что помогает улучшить цвет и тонус кожи, делая
                            её
                            более гладкой и сияющей. Профессиональный пилинг, выполненный с учетом типа и состояния
                            кожи,
                            позволяет не только освежить её, но и снизить выраженность возрастных изменений.
                        </p>

                    </div>
                </div>
                <Contacts locale={'ru'}/>


                <div className={'seo-block bg-gray-400'}>
                    <div style={{fontSize: "8px"}}
                         className={'container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 '}>
                        <div>
                            <h1>Пилинг</h1>
                            <h2>Что такое пилинг?</h2>
                            <h2>Основные виды пилинга</h2>
                            <h2>Преимущества профессионального пилинга</h2>
                        </div>

                        <div>
                            <h3>Химический пилинг</h3>
                            <h3>Механический пилинг</h3>
                            <h3>Решаемые проблемы кожи</h3>
                            <h3>Как пилинг улучшает состояние кожи?</h3>
                            <h3>Почему важен профессиональный подход?</h3>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
};

export default Service6;