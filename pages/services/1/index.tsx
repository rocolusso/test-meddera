import React from 'react';
import Image from "next/image";
import consultcosm from "@/public/assets/img/services/consult-cosm.png";
import Contacts from "@/components/contacts";
import Link from "next/link";
import pintea from "@/public/assets/img/pintea.png";
import BurgerMenu from "@/components/burgerMenu";
import Head from "next/head";

const Service1
= () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta httpEquiv="content-language" content="ru"/>

                <title>Консультация у врача-дерматокосметолога: Первый шаг к здоровой коже</title>
                <meta
                    name="description"
                    content="Получите профессиональную консультацию у врача-дерматокосметолога. Диагностика кожи, подбор процедур, рекомендации по уходу и образу жизни для здоровья и красоты вашей кожи."
                />


                <meta property="og:title" content="Консультация у врача-дерматокосметолога: Первый шаг к здоровой коже"/>
                <meta property="og:description"
                      content="Получите профессиональную консультацию у врача-дерматокосметолога. Диагностика кожи, подбор процедур, рекомендации по уходу и образу жизни для здоровья и красоты вашей кожи."/>
                <meta property="og:image:alt" content="Консультация у врача-дерматокосметолога: Первый шаг к здоровой коже"/>


                <meta name="twitter:title" content="Консультация у врача-дерматокосметолога: Первый шаг к здоровой коже"/>
                <meta name="twitter:description"
                      content="Получите профессиональную консультацию у врача-дерматокосметолога. Диагностика кожи, подбор процедур, рекомендации по уходу и образу жизни для здоровья и красоты вашей кожи."/>

            </Head>
            <div>
                <div
                    className={'header sticky top-0 left-0 backdrop-blur-2xl   header container mx-auto sm:pt-10   bg-white z-40'}>
                    <div
                        className={'flex gap-5 items-center border p-5 backdrop-blur-2xl sm:rounded-3xl sm:shadow-2xl z-50'}>
                        <Link href={'/'}>
                            <div className={'max-w-[300px]'}>
                                <Image
                                    // className="dark:invert"
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


                <div className={'container mx-auto '}>
                    <div className={'py-10 px-5'}>
                        <p className={'text-[1.5rem] sm:text-[3rem] sm:text-center'}>Консультация у
                            врача-дерматокосметолога</p>
                    </div>
                    <div className={'flex justify-center'}>
                        <Image
                            className={' '}
                            src={consultcosm}
                            alt="biorevit"
                            width={600}
                            height={500}
                            priority
                        />
                    </div>
                    <div>
                        <p className={'max-w-[1000px] mx-auto py-10 px-5'}>
                            Консультация у врача-дерматокосметолога — это первый и важный шаг к здоровой и красивой
                            коже. Во
                            время приема врач проводит тщательный осмотр кожи, оценивает ее состояние и определяет
                            индивидуальные потребности пациента. На основании диагностики специалист подбирает
                            процедуры,
                            учитывая возраст, тип кожи и желаемый результат. Консультация также включает рекомендации по
                            выбору косметических средств и образу жизни, которые помогут поддерживать здоровье кожи в
                            долгосрочной перспективе. Профессиональный подход дерматокосметолога позволяет предотвратить
                            или
                            устранить проблемы, такие как акне, пигментация, возрастные изменения и другие.
                        </p>
                    </div>
                </div>
                <Contacts locale={'ru'}/>


                <div className={'seo-block bg-gray-400'}>
                    <div style={{fontSize: "8px"}}
                         className={'container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 '}>
                        <div>
                            <h1>Консультация у врача-дерматокосметолога</h1>
                            <h2>Почему важно обратиться к врачу-дерматокосметологу?</h2>
                            <h3>Профессиональный осмотр и диагностика кожи</h3>
                            <h3>Индивидуальный подбор процедур</h3>
                            <h3>Рекомендации по уходу и образу жизни</h3>
                        </div>

                        <div>
                            <h2>Какие проблемы помогает решить дерматокосметолог?</h2>
                            <h3>Лечение акне</h3>
                            <h3>Коррекция пигментации</h3>
                            <h3>Устранение возрастных изменений</h3>
                            <h3>Другие дерматологические проблемы</h3>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
};

export default Service1;