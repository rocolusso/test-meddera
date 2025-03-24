import React from 'react';
import Image from "next/image";
import Contacts from "@/components/contacts";
import mezolica from "@/public/assets/img/services/mezolica.png";
import Link from "next/link";
import pintea from "@/public/assets/img/pintea.png";
import BurgerMenu from "@/components/burgerMenu";
import Head from "next/head";

const Service11
= () => {
    return (
        <>

            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta httpEquiv="content-language" content="ru"/>

                <title>Мезотерапия лица: Омоложение и улучшение внешнего вида</title>
                <meta
                    name="description"
                    content="Узнайте всё о процедуре мезотерапии лица! Введение активных веществ в глубокие слои кожи помогает устранить сухость, морщины, пигментацию и вернуть коже упругость, свежесть и сияние."
                />


                <meta property="og:title" content="Мезотерапия лица: Омоложение и улучшение внешнего вида"/>
                <meta property="og:description"
                      content="Узнайте всё о процедуре мезотерапии лица! Введение активных веществ в глубокие слои кожи помогает устранить сухость, морщины, пигментацию и вернуть коже упругость, свежесть и сияние."/>



                <meta name="twitter:title" content="Мезотерапия лица: Омоложение и улучшение внешнего вида"/>
                <meta name="twitter:description"
                      content="Узнайте всё о процедуре мезотерапии лица! Введение активных веществ в глубокие слои кожи помогает устранить сухость, морщины, пигментацию и вернуть коже упругость, свежесть и сияние."/>

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
                        <p className={'text-[1.5rem] sm:text-[3rem] sm:text-center'}>Мезотерапия лица</p>
                    </div>
                    <div className={'flex justify-center'}>
                        <Image
                            className={'hover:scale-110 duration-500'}
                            src={mezolica}
                            alt="biorevit"
                            width={600}
                            height={500}
                            priority
                        />
                    </div>
                    <div>
                        <p className={'max-w-[1000px] mx-auto py-10 px-5'}>
                            Мезотерапия лица —косметологическая процедура, при которой в глубокие слои кожи вводятся
                            коктейли из витаминов, аминокислот, гиалуроновой кислоты и других активных веществ с помощью
                            тончайших игл. Эта техника помогает решить множество проблем, таких как сухость, тусклый
                            цвет
                            лица, потеря упругости, морщины и пигментация. Мезотерапия стимулирует обменные процессы,
                            улучшает микроциркуляцию и увлажнение кожи, восстанавливает её структуру и тонус. Процедура
                            не
                            требует длительного восстановления, а результаты проявляются через несколько сеансов,
                            придавая
                            коже свежий и сияющий вид. Мезотерапия подходит для всех типов кожи и эффективна для
                            омоложения
                            и улучшения внешнего вида.
                        </p>
                    </div>
                </div>
                <Contacts locale={'ru'}/>


                <div className={'seo-block bg-gray-400'}>
                    <div style={{fontSize: "8px"}}
                         className={'container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 '}>
                        <div>
                            <h1>Мезотерапия лица</h1>
                            <h2>Что такое мезотерапия лица?</h2>
                            <h3>Основные компоненты мезотерапевтических коктейлей</h3>
                            <h3>Преимущества мезотерапии</h3>
                            <h2>Какие проблемы решает мезотерапия?</h2>
                            <h3>Сухость и тусклый цвет лица</h3>

                            <h3>Потеря упругости и появление морщин</h3>
                            <h3>Пигментация и восстановление структуры кожи</h3>
                        </div>

                        <div>
                            <h2>Эффективность и результат процедуры</h2>
                            <h3>Когда заметен эффект?</h3>
                            <h3>Кому подходит мезотерапия лица?</h3>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
};

export default Service11;