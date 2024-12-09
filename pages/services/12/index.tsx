import React from 'react';
import Image from "next/image";
import Contacts from "@/components/contacts";
import mezovolos from "@/public/assets/img/services/mezovolos.png";
import Link from "next/link";
import pintea from "@/public/assets/img/pintea.png";
import BurgerMenu from "@/components/burgerMenu";

const Service12
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
                    <h1 className={'text-[1.5rem] sm:text-[3rem] sm:text-center'}>Мезотерапия для волос</h1>
                </div>
                <div className={'flex justify-center'}>
                    <Image
                        className={'hover:scale-110 duration-500'}
                        src={mezovolos}
                        alt="biorevit"
                        width={600}
                        height={500}
                        priority
                    />
                </div>
                <div>
                    <p className={'max-w-[1000px] mx-auto py-10 px-5'}>
                        Мезотерапия для волос — это процедура, направленная на улучшение состояния волос и кожи головы.
                        В ходе процедуры под кожу вводятся специальные коктейли, содержащие витамины, минералы,
                        аминокислоты и другие активные вещества, которые стимулируют рост волос, укрепляют фолликулы и
                        улучшают микроциркуляцию в коже головы. Мезотерапия эффективно борется с такими проблемами, как
                        выпадение волос, истончение волос, себорейный дерматит и нарушения роста. Процедура помогает
                        восстановить здоровье волос, улучшить их густоту и текстуру.
                    </p>
                </div>
            </div>
            <Contacts locale={'ru'}/>
        </div>
    );
};

export default Service12;