import React from 'react';
import Image from "next/image";
import massageLica from "@/public/assets/img/services/massage_lica.png";
import Contacts from "@/components/contacts";
import Link from "next/link";
import pintea from "@/public/assets/img/pintea.png";
import BurgerMenu from "@/components/burgerMenu";
import Head from "next/head";

const Service4
= () => {
    return (
        <>

            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta httpEquiv="content-language" content="ru"/>

                <title>Массаж лица – Преимущества, техники и эффект для кожи</title>
                <meta
                    name="description"
                    content="Узнайте о пользе массажа лица: улучшение кровообращения, тонуса кожи, профилактика возрастных изменений. Разные техники для ваших нужд."
                />


                <meta property="og:title" content="Массаж лица – Преимущества, техники и эффект для кожи"/>
                <meta property="og:description"
                      content="Узнайте о пользе массажа лица: улучшение кровообращения, тонуса кожи, профилактика возрастных изменений. Разные техники для ваших нужд."/>



                <meta name="twitter:title" content="Массаж лица – Преимущества, техники и эффект для кожи"/>
                <meta name="twitter:description"
                      content="Узнайте о пользе массажа лица: улучшение кровообращения, тонуса кожи, профилактика возрастных изменений. Разные техники для ваших нужд."/>

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
                                <Link href={'/c#about'}
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
                        <p className={'text-[1.5rem] sm:text-[3rem] sm:text-center'}>Массаж лица</p>
                    </div>
                    <div className={'flex justify-center'}>
                        <Image
                            className={''}
                            src={massageLica}
                            alt="biorevit"
                            width={600}
                            height={500}
                            priority
                        />
                    </div>
                    <div>
                        <p className={'max-w-[1000px] mx-auto py-10 px-5'}>
                            Массаж лица — процедура, которая помогает улучшить кровообращение, стимулирует выработку
                            коллагена и эластина, а также улучшает тонус кожи. Благодаря мягкому воздействию на лицевые
                            мышцы, массаж помогает снять напряжение, уменьшить отеки и повысить упругость кожи, делая её
                            более подтянутой и сияющей. Существуют разные техники массажа, такие как классический,
                            лимфодренажный, скульптурный, каждый из которых решает конкретные задачи и подбирается в
                            зависимости от потребностей пациента. Регулярные сеансы массажа лица способствуют
                            профилактике
                            возрастных изменений и улучшают общий вид кожи. Профессиональный подход обеспечивает не
                            только
                            эстетический эффект, но и расслабление, что способствует общему улучшению самочувствия.
                        </p>
                    </div>
                </div>
                <Contacts locale={'ru'}/>

                <div className={'seo-block bg-gray-400'}>
                    <div style={{fontSize: "8px"}}
                         className={'container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 '}>
                        <div>
                            <h1>Массаж лица</h1>
                            <h2>Преимущества массажа лица</h2>
                            <h2>Техники массажа лица</h2>
                            <h2>Как выбрать подходящую технику массажа</h2>
                        </div>

                        <div>
                            <h3>Улучшение кровообращения и тонуса кожи</h3>
                            <h3>Снятие напряжения и уменьшение отеков</h3>
                            <h3>Классический массаж лица</h3>
                            <h3>Лимфодренажный массаж</h3>
                            <h3>Скульптурный массаж</h3>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
};

export default Service4;