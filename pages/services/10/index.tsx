import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Contacts from '@/components/contacts';
import dermapen from '@/public/assets/img/services/dermapen.png';
import pintea from '@/public/assets/img/pintea.png';
import BurgerMenu from '@/components/burgerMenu';

function Service10() {
  return (

        <>

            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta httpEquiv="content-language" content="ru" />

                <title>Дермапен: Косметологическая процедура для омоложения и ухода за кожей</title>
                <meta
                  name="description"
                  content="Узнайте, как процедура Дермапен помогает улучшить текстуру кожи,
                   сократить поры, уменьшить морщины и избавиться от постакне.
                   Эффективное омоложение без длительного восстановления."
                />

                <meta
                  property="og:title"
                  content="Дермапен: Косметологическая процедура
                для омоложения и ухода за кожей"
                />
                <meta
                  property="og:description"
                  content="Узнайте, как процедура Дермапен помогает улучшить текстуру кожи,
                  сократить поры, уменьшить морщины и избавиться от постакне.
                  Эффективное омоложение без длительного восстановления."
                />

                <meta
                  name="twitter:title"
                  content="Дермапен: Косметологическая
                процедура для омоложения и ухода за кожей"
                />
                <meta
                  name="twitter:description"
                  content="Узнайте, как процедура Дермапен помогает улучшить текстуру кожи,
                  сократить поры, уменьшить морщины и избавиться от постакне.
                  Эффективное омоложение без длительного восстановления."
                />

            </Head>

            <div>
                <div
                  className="header sticky top-0 left-0 backdrop-blur-2xl
                  header container mx-auto sm:pt-10   bg-white z-40"
                >
                    <div
                      className="flex gap-5 items-center border p-5 backdrop-blur-2xl
                      sm:rounded-3xl sm:shadow-2xl z-50"
                    >
                        <Link href="/">
                            <div className="max-w-[300px]">
                                <Image
                                  src={pintea}
                                  alt="pintea"
                                  width={1000}
                                  height={20}
                                  priority
                                />
                            </div>
                        </Link>
                        <div className="flex justify-between items-center sm:w-full">
                            <nav className="hidden sm:flex ml-20  gap-10 uppercase underline font-bold text-xl">
                                <Link
                                  href="/#about"
                                  className="hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105"
                                >
                                    Обо мне
                                </Link>
                                <Link
                                  href="/#services"
                                  className="hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105"
                                >
                                    Услуги
                                </Link>
                                <Link
                                  href="/#contacts"
                                  className="hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105"
                                >
                                    Контакты
                                </Link>
                            </nav>

                            <div className="hidden sm:block">
                                <Link
                                  href="/ro"
                                  className="underline border border-black hover:bg-black hover:underline
                                  hover:text-white p-5 duration-300 hover:scale-105"
                                >
                                    RO
                                </Link>
                            </div>
                        </div>

                        <BurgerMenu locale="ru" />

                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="py-10 px-5">
                        <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Дермапен</p>
                    </div>
                    <div className="flex justify-center">
                        <Image
                          className="hover:scale-110 duration-500"
                          src={dermapen}
                          alt="biorevit"
                          width={600}
                          height={500}
                          priority
                        />
                    </div>
                    <div>
                        <p className="max-w-[1000px] mx-auto py-10 px-5">
                            Дермапен — это косметологическая процедура, основанная на микронидлинге, при котором с
                            помощью
                            устройства с множеством мелких игл создаются микроскопические повреждения на коже. Это
                            стимулирует естественные процессы регенерации и выработку коллагена, что способствует
                            улучшению
                            текстуры кожи, сокращению пор, уменьшению морщин и борьбе с постакне, рубцами и растяжками.
                            Дермапен позволяет улучшить тонус кожи, выровнять её цвет и сделать более упругой. Процедура
                            безопасна и эффективна, не требует длительного восстановления и подходит для всех типов
                            кожи.
                            Результаты становятся заметными уже после нескольких сеансов.
                        </p>
                    </div>
                </div>
                <Contacts locale="ru" />

                <div className="seo-block bg-gray-400">
                    <div
                      style={{ fontSize: '8px' }}
                      className="container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 "
                    >
                        <div>
                            <h1>Дермапен</h1>
                            <h2>Что такое процедура Дермапен?</h2>
                            <h3>Основные принципы процедуры</h3>
                            <h3>Преимущества использования Дермапена</h3>
                            <h3>Какие проблемы решает Дермапен?</h3>
                            <h3>Подходит ли Дермапен для всех типов кожи?</h3>

                            <h2>Результаты после процедуры Дермапен</h2>
                            <h3>Улучшение текстуры кожи</h3>
                            <h3>Сокращение пор и устранение морщин</h3>
                            <h3>Борьба с постакне, рубцами и растяжками</h3>
                        </div>

                        <div>
                        <h2>Преимущества процедуры Дермапен</h2>
                            <h3>Безопасность и отсутствие длительного восстановления</h3>
                            <h3>Эффективность уже после нескольких сеансов</h3>
                        </div>

                    </div>
                </div>

            </div>
        </>
  );
}

export default Service10;
