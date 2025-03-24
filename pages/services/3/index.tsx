import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import chistkaLica from '@/public/assets/img/services/chistka_lica.png';
import Contacts from '@/components/contacts';
import pintea from '@/public/assets/img/pintea.png';
import BurgerMenu from '@/components/burgerMenu';

function Service3() {
  return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta httpEquiv="content-language" content="ru" />

                <title>Чистка лица: Виды и Польза Косметологической Процедуры</title>
                <meta
                  name="description"
                  content="Чистка лица — глубокое очищение кожи, улучшение её текстуры и цвета.
                  Узнайте о механической, ультразвуковой и комбинированной чистке для идеальной кожи."
                />

                <meta property="og:title" content="Чистка лица: Виды и Польза Косметологической Процедуры" />
                <meta
                  property="og:description"
                  content="Чистка лица — глубокое очищение кожи, улучшение её
                  текстуры и цвета. Узнайте о механической, ультразвуковой и
                  комбинированной чистке для идеальной кожи."
                />

                <meta name="twitter:title" content="Чистка лица: Виды и Польза Косметологической Процедуры" />
                <meta
                  name="twitter:description"
                  content="Чистка лица — глубокое очищение кожи, улучшение её текстуры и цвета.
                  Узнайте о механической, ультразвуковой и комбинированной чистке для идеальной кожи."
                />

            </Head>
            <div>
                <div
                  className="header sticky top-0 left-0 backdrop-blur-2xl
                  header container mx-auto sm:pt-10   bg-white z-40"
                >
                    <div
                      className="flex gap-5 items-center border p-5 backdrop-blur-2xl sm:rounded-3xl sm:shadow-2xl z-50"
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
                                  className="underline border border-black  hover:bg-black
                                  hover:underline hover:text-white p-5 duration-300 hover:scale-105"
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
                        <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Чистка лица</p>
                    </div>
                    <div className="flex justify-center">
                        <Image
                          className=""
                          src={chistkaLica}
                          alt="biorevit"
                          width={600}
                          height={500}
                          priority
                        />
                    </div>
                    <div>
                        <p className="max-w-[1000px] mx-auto py-10 px-5">
                            Чистка лица — косметологическая процедура, направленная на глубокое очищение кожи и
                            улучшение её
                            текстуры и цвета. Процедура помогает удалить загрязнения, избыток кожного сала и ороговевшие
                            клетки, что способствует сокращению пор и снижению риска воспалений. Существует несколько
                            видов
                            чистки, включая механическую, ультразвуковую, комбинированную, выбор которых зависит от
                            состояния кожи и её потребностей. После консультации врач подбирает оптимальный метод и
                            выполняет процедуру с учетом всех особенностей кожи пациента.
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
                            <h1>Чистка лица</h1>
                            <h2>Что такое чистка лица?</h2>
                            <h2>Преимущества процедуры</h2>
                            <h2>Виды чистки лица</h2>
                        </div>

                        <div>
                            <h3>Механическая чистка</h3>
                            <h3>Ультразвуковая чистка</h3>
                            <h3>Комбинированная чистка</h3>
                        </div>

                        <div>
                            <h2>Как выбрать подходящий метод?</h2>
                            <h2>Этапы проведения процедуры</h2>
                            <h2>Рекомендации по уходу после чистки</h2>
                        </div>

                    </div>
                </div>

            </div>
        </>
  );
}

export default Service3;
