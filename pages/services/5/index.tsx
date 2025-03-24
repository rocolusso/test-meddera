import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import karboksiterapiya from '@/public/assets/img/services/karbiksiterapiya.png';
import Contacts from '@/components/contacts';
import pintea from '@/public/assets/img/pintea.png';
import BurgerMenu from '@/components/burgerMenu';

function Service5() {
  return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta httpEquiv="content-language" content="ru" />

                <title>Карбокситерапия: Уход за кожей без инъекций для упругости и сияния</title>
                <meta
                  name="description"
                  content="Карбокситерапия — современная процедура без инъекций,
                  которая улучшает тонус и упругость кожи, уменьшает морщины,
                  пигментацию и акне. Подходит для всех типов кожи."
                />

                <meta
                  property="og:title"
                  content="Карбокситерапия:
                Уход за кожей без инъекций для упругости и сияния"
                />
                <meta
                  property="og:description"
                  content="Карбокситерапия — современная процедура без инъекций,
                  которая улучшает тонус и упругость кожи, уменьшает морщины,
                  пигментацию и акне. Подходит для всех типов кожи."
                />

                <meta
                  name="twitter:title"
                  content="Карбокситерапия: Уход за
                кожей без инъекций для упругости и сияния"
                />
                <meta
                  name="twitter:description"
                  content="Карбокситерапия — современная процедура без инъекций,
                  которая улучшает тонус и упругость кожи, уменьшает морщины, пигментацию и акне.
                  Подходит для всех типов кожи."
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
                                  className="underline border border-black hover:bg-black
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
                        <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Карбокситерапия</p>
                    </div>
                    <div className="flex justify-center">
                        <Image
                          className=""
                          src={karboksiterapiya}
                          alt="biorevit"
                          width={600}
                          height={500}
                          priority
                        />
                    </div>
                    <div>
                        <p className="max-w-[1000px] mx-auto py-10 px-5">
                            Карбокситерапия — это процедура, направленная на улучшение состояния кожи с помощью
                            насыщения её
                            углекислым газом, без инъекций и нарушений целостности кожи. Во время процедуры на лицо
                            наносится специальный гель, который активизирует процессы микроциркуляции и стимулирует
                            приток
                            кислорода к клеткам. Это улучшает тонус кожи, повышает её упругость, уменьшает выраженность
                            морщин и пигментации, а также помогает в борьбе с акне и постакне. Карбокситерапия подходит
                            для
                            всех типов кожи и может быть использована как самостоятельная процедура или в сочетании с
                            другими уходами.
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
                            <h1>Карбокситерапия</h1>
                            <h2>Что такое карбокситерапия?</h2>
                            <h3>Преимущества процедуры</h3>
                            <h3>Как проходит процедура</h3>
                        </div>

                        <div>
                            <h2>Показания к проведению</h2>
                            <h3>Для кого подходит карбокситерапия</h3>
                            <h2>Результаты и эффект</h2>
                            <h3>Борьба с морщинами и пигментацией</h3>
                            <h3>Улучшение тонуса и упругости кожи</h3>
                        </div>

                    </div>
                </div>

            </div>
        </>
  );
}

export default Service5;
