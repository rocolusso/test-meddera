import React from 'react';
import Image from "next/image";
import Contacts from "@/components/contacts";
import uvelichenieGub from "@/public/assets/img/services/uvelicheniegub.png";
import Link from "next/link";
import pintea from "@/public/assets/img/pintea.png";
import BurgerMenu from "@/components/burgerMenu";
import Head from "next/head";

const Service13
= () => {
    return (

        <>

            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta httpEquiv="content-language" content="ru"/>

                <title>Увеличение губ: Естественный объем и выразительность с гиалуроновыми филлерами</title>
                <meta
                    name="description"
                    content="Увеличение губ с использованием гиалуроновой кислоты — это безопасная процедура для создания естественных контуров, улучшения симметрии и увлажнения губ. Результат заметен сразу!"
                />


                <meta property="og:title" content="Увеличение губ: Естественный объем и выразительность с гиалуроновыми филлерами"/>
                <meta property="og:description"
                      content="Увеличение губ с использованием гиалуроновой кислоты — это безопасная процедура для создания естественных контуров, улучшения симметрии и увлажнения губ. Результат заметен сразу!"/>



                <meta name="twitter:title" content="Увеличение губ: Естественный объем и выразительность с гиалуроновыми филлерами"/>
                <meta name="twitter:description"
                      content="Увеличение губ с использованием гиалуроновой кислоты — это безопасная процедура для создания естественных контуров, улучшения симметрии и увлажнения губ. Результат заметен сразу!"/>

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
                        <p className={'text-[1.5rem] sm:text-[3rem] sm:text-center'}>Увеличение губ</p>
                    </div>
                    <div className={'flex justify-center'}>
                        <Image
                            className={'hover:scale-110 duration-500'}
                            src={uvelichenieGub}
                            alt="biorevit"
                            width={600}
                            height={500}
                            priority
                        />
                    </div>
                    <div>
                        <p className={'max-w-[1000px] mx-auto py-10 px-5'}>
                            Увеличение губ — это косметологическая процедура, направленная на коррекцию формы и объема
                            губ с
                            использованием филлеров на основе гиалуроновой кислоты. Врач-дерматокосметолог подбирает
                            нужное
                            количество препарата, что позволяет добиться естественного и гармоничного результата.
                            Процедура
                            безопасна, и результат заметен сразу после выполнения. Процедура помогает создать
                            естественные
                            контуры, улучшить симметрию и увлажнение губ, а также устранить морщины вокруг них.
                            Гиалуроновая
                            кислота, вводимая в ткани губ, придает им объем, делает их более выразительными и сочными.
                        </p>
                    </div>
                </div>
                <Contacts locale={'ru'}/>


                <div className={'seo-block bg-gray-400'}>
                    <div style={{fontSize: "8px"}}
                         className={'container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 '}>
                        <div>
                            <h1>Увеличение губ</h1>
                            <h2>Что такое увеличение губ?</h2>
                            <h3>Естественный объем и гармония формы</h3>
                            <h3>Как работает гиалуроновая кислота?</h3>
                            <h2>Преимущества процедуры</h2>
                            <h3>Коррекция формы и устранение морщин</h3>
                            <h3>Симметрия и увлажнение губ</h3>
                        </div>

                        <div>
                            <h2>Почему это безопасно?</h2>
                            <h3>Мгновенный результат без риска</h3>
                            <h3>Профессиональный подход дерматокосметолога</h3>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
};

export default Service13;