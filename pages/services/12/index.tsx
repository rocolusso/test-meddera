import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Contacts from '@/components/contacts';
import mezovolos from '@/public/assets/img/services/mezovolos.png';
import pintea from '@/public/assets/img/pintea.png';
import BurgerMenu from '@/components/burgerMenu';

function Service12() {
  return (

        <>

            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta httpEquiv="content-language" content="ru" />

                <title>Мезотерапия для волос: восстановление густоты и здоровья</title>
                <meta
                  name="description"
                  content="Узнайте о процедуре мезотерапии для волос — эффективное решение проблем
                  выпадения, истончения и других нарушений роста. Стимуляция фолликулов и
                  улучшение микроциркуляции кожи головы."
                />

                <meta property="og:title" content="Мезотерапия для волос: восстановление густоты и здоровья" />
                <meta
                  property="og:description"
                  content="Узнайте о процедуре мезотерапии для волос — эффективное решение
                  проблем выпадения, истончения и других нарушений роста. Стимуляция фолликулов
                  и улучшение микроциркуляции кожи головы."
                />

                <meta name="twitter:title" content="Мезотерапия для волос: восстановление густоты и здоровья" />
                <meta
                  name="twitter:description"
                  content="Узнайте о процедуре мезотерапии для волос — эффективное решение проблем
                  выпадения, истончения и других нарушений роста. Стимуляция фолликулов
                   и улучшение микроциркуляции кожи головы."
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
                        <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Мезотерапия для волос</p>
                    </div>
                    <div className="flex justify-center">
                        <Image
                          className="hover:scale-110 duration-500"
                          src={mezovolos}
                          alt="biorevit"
                          width={600}
                          height={500}
                          priority
                        />
                    </div>
                    <div>
                        <p className="max-w-[1000px] mx-auto py-10 px-5">
                            Мезотерапия для волос — это процедура, направленная на улучшение состояния волос и кожи
                            головы.
                            В ходе процедуры под кожу вводятся специальные коктейли, содержащие витамины, минералы,
                            аминокислоты и другие активные вещества, которые стимулируют рост волос, укрепляют фолликулы
                            и
                            улучшают микроциркуляцию в коже головы. Мезотерапия эффективно борется с такими проблемами,
                            как
                            выпадение волос, истончение волос, себорейный дерматит и нарушения роста. Процедура помогает
                            восстановить здоровье волос, улучшить их густоту и текстуру.
                        </p>
                    </div>
                </div>
                <Contacts locale="ru" />

                <div className="seo-block bg-gray-400">
                    <div
                      style={{ fontSize: '8px' }}
                      className="container justify-center mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 "
                    >
                        <div>
                            <h1>Мезотерапия для волос</h1>
                            <h2>Что такое мезотерапия для волос?</h2>
                            <h2>Преимущества процедуры мезотерапии</h2>
                            <h3>Стимуляция роста волос</h3>
                            <h3>Укрепление волосяных фолликулов</h3>
                            <h3>Борьба с выпадением и истончением</h3>

                        </div>

                        <div>
                            <h2>Какие проблемы решает мезотерапия?</h2>
                            <h3>Выпадение волос</h3>
                            <h3>Истончение волос</h3>
                            <h3>Себорейный дерматит</h3>
                        </div>

                    </div>
                </div>

            </div>
        </>
  );
}

export default Service12;
