import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Contacts from '@/components/contacts';
import terapiyaProtivPigment from '@/public/assets/img/services/terapiya-protiv-pigm.png';
import pintea from '@/public/assets/img/pintea.png';
import BurgerMenu from '@/components/burgerMenu';

function Service9() {
  return (

        <>

            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta httpEquiv="content-language" content="ru" />

                <title>Терапия против пигментации: Решение для ровного и сияющего тона кожи</title>
                <meta
                  name="description"
                  content="Узнайте, как терапия против пигментации помогает осветлить и устранить
                  пигментные пятна, возрастные изменения и солнечные повреждения.
                  Сделайте кожу ровной и сияющей!"
                />

                <meta
                  property="og:title"
                  content="Терапия против пигментации:
                Решение для ровного и сияющего тона кожи"
                />
                <meta
                  property="og:description"
                  content="Узнайте, как терапия против пигментации помогает осветлить и устранить
                  пигментные пятна, возрастные изменения и солнечные повреждения.
                  Сделайте кожу ровной и сияющей!"
                />

                <meta
                  name="twitter:title"
                  content="Терапия против пигментации:
                Решение для ровного и сияющего тона кожи"
                />
                <meta
                  name="twitter:description"
                  content="Узнайте, как терапия против пигментации помогает осветлить и устранить
                  пигментные пятна, возрастные изменения и солнечные повреждения.
                  Сделайте кожу ровной и сияющей!"
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
                            <nav className="hidden sm:flex ml-20  gap-10 uppercase
                            underline font-bold text-xl"
                            >
                                <Link
                                  href="/#about"
                                  className="hover:bg-black hover:underline hover:text-white
                                  p-5 duration-300 hover:scale-105"
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
                                  className="underline border border-black  hover:bg-black hover:underline
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
                        <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Терапия против пигментации</p>
                    </div>
                    <div className="flex justify-center">
                        <Image
                          className="hover:scale-110 duration-500"
                          src={terapiyaProtivPigment}
                          alt="biorevit"
                          width={600}
                          height={500}
                          priority
                        />
                    </div>
                    <div>
                        <p className="max-w-[1000px] mx-auto py-10 px-5">
                            Терапия против пигментации — это косметологическая процедура, направленная на осветление и
                            устранение пигментных пятен, гиперпигментации и неровности тона кожи. В ходе процедуры
                            используются пилинги, специальные осветляющие средства, которые блокируют выработку меланина
                            и
                            способствуют его равномерному распределению в коже. Процедура подходит для лечения
                            возрастных
                            пятен, солнечных повреждений, а также поствоспалительной гиперпигментации. Регулярное
                            проведение
                            таких процедур помогает значительно улучшить цвет лица и сделать кожу более ровной и
                            сияющей.
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
                            <h1>Терапия против пигментации</h1>
                            <h2>Что такое терапия против пигментации?</h2>
                            <h3>Осветление пигментных пятен и неровностей тона</h3>
                            <h2>Какие проблемы решает процедура?</h2>
                            <h3>Возрастные пятна и солнечные повреждения</h3>
                            <h3>Поствоспалительная гиперпигментация</h3>
                            <h2>Как проходит процедура?</h2>
                            <h3>Использование пилингов и осветляющих средств</h3>
                            <h3>Блокировка выработки меланина</h3>
                        </div>

                        <div>
                            <h2>Преимущества регулярных процедур</h2>
                            <h3>Улучшение цвета лица</h3>
                            <h3>Ровный и сияющий тон кожи</h3>
                        </div>

                    </div>
                </div>

            </div>
        </>
  );
}

export default Service9;
