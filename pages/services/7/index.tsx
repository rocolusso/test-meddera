import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Contacts from '@/components/contacts';
import maskaLica from '@/public/assets/img/services/maska_lica.png';
import pintea from '@/public/assets/img/pintea.png';
import BurgerMenu from '@/components/burgerMenu';

function Service7() {
  return (
        <>

            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta httpEquiv="content-language" content="ru" />

                <title>Альгинатная маска – Увлажнение, лифтинг и сияние кожи</title>
                <meta
                  name="description"
                  content="Узнайте, как альгинатная маска из бурых морских водорослей
                  помогает глубоко увлажнить, подтянуть и успокоить кожу.
                  Подходит для любого типа кожи и улучшает её текстуру, тон и упругость."
                />

                <meta property="og:title" content="Альгинатная маска – Увлажнение, лифтинг и сияние кожи" />
                <meta
                  property="og:description"
                  content="Узнайте, как альгинатная маска из бурых морских водорослей
                  помогает глубоко увлажнить, подтянуть и успокоить кожу.
                  Подходит для любого типа кожи и улучшает её текстуру, тон и упругость."
                />

                <meta name="twitter:title" content="Альгинатная маска – Увлажнение, лифтинг и сияние кожи" />
                <meta
                  name="twitter:description"
                  content="Узнайте, как альгинатная маска из бурых морских водорослей
                  помогает глубоко увлажнить, подтянуть и успокоить кожу.
                  Подходит для любого типа кожи и улучшает её текстуру, тон и упругость."
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
                        <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Альгинатная маска</p>
                    </div>
                    <div className="flex justify-center">
                        <Image
                          className="hover:scale-110 duration-500"
                          src={maskaLica}
                          alt="biorevit"
                          width={600}
                          height={500}
                          priority
                        />
                    </div>
                    <div>
                        <p className="max-w-[1000px] mx-auto py-10 px-5">
                            Альгинатная маска — эффективное средство ухода за кожей, изготовленное на основе альгинатов,
                            которые получают из бурых морских водорослей. Благодаря высокому содержанию минералов и
                            микроэлементов альгинатные маски обладают мощным увлажняющим, подтягивающим и успокаивающим
                            действием. Маска наносится на лицо в виде густой смеси и застывает, образуя плотный слой,
                            который помогает активным веществам глубже проникать в кожу. В зависимости от состава,
                            альгинатные маски могут дополнительно осветлять пигментацию, улучшать текстуру кожи и
                            способствовать устранению воспалений. После процедуры кожа выглядит свежей, увлажненной и
                            упругой, а её тон становится более ровным и сияющим. Альгинатные маски идеально подходят для
                            любого типа кожи и часто используются в завершении профессиональных уходов, усиливая эффект
                            от
                            других процедур.
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
                            <h1>Альгинатная маска</h1>
                            <h2>Что такое альгинатная маска?</h2>
                            <h2>Преимущества альгинатной маски</h2>
                            <h3>Увлажнение и питание кожи</h3>
                        </div>

                        <div>
                            <h3>Лифтинг-эффект</h3>
                            <h3>Устранение воспалений и улучшение текстуры</h3>
                            <h2>Кому подходит альгинатная маска?</h2>
                            <h2>Как использовать альгинатную маску?</h2>
                            <h2>Результаты после применения</h2>
                        </div>

                    </div>
                </div>

            </div>
        </>
  );
}

export default Service7;
