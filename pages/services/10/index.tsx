import React from 'react';
import Image from "next/image";
import Contacts from "@/components/contacts";
import dermapen from "@/public/assets/img/services/dermapen.png";
import Link from "next/link";
import pintea from "@/public/assets/img/pintea.png";
import BurgerMenu from "@/components/burgerMenu";

const Service10
= () => {
    return (
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
            <div className={'container mx-auto'}>
                <div className={'py-10 px-5'}>
                    <h1 className={'text-[1.5rem] sm:text-[3rem] sm:text-center'}>Дермапен</h1>
                </div>
                <div className={'flex justify-center'}>
                    <Image
                        className={'hover:scale-110 duration-500'}
                        src={dermapen}
                        alt="biorevit"
                        width={600}
                        height={500}
                        priority
                    />
                </div>
                <div>
                    <p className={'max-w-[1000px] mx-auto py-10 px-5'}>
                        Дермапен — это косметологическая процедура, основанная на микронидлинге, при котором с помощью
                        устройства с множеством мелких игл создаются микроскопические повреждения на коже. Это
                        стимулирует естественные процессы регенерации и выработку коллагена, что способствует улучшению
                        текстуры кожи, сокращению пор, уменьшению морщин и борьбе с постакне, рубцами и растяжками.
                        Дермапен позволяет улучшить тонус кожи, выровнять её цвет и сделать более упругой. Процедура
                        безопасна и эффективна, не требует длительного восстановления и подходит для всех типов кожи.
                        Результаты становятся заметными уже после нескольких сеансов.
                    </p>
                </div>
            </div>
            <Contacts locale={'ru'}/>
        </div>
    );
};

export default Service10;