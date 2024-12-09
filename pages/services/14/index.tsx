import React from 'react';
import Image from "next/image";
import Contacts from "@/components/contacts";
import botoks from "@/public/assets/img/services/botoks.png";
import Link from "next/link";
import pintea from "@/public/assets/img/pintea.png";
import BurgerMenu from "@/components/burgerMenu";

const Service13
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
                    <h1 className={'text-[1.5rem] sm:text-[3rem] sm:text-center'}>Ботокс</h1>
                </div>
                <div className={'flex justify-center'}>
                    <Image
                        className={'hover:scale-110 duration-500'}
                        src={botoks}
                        alt="biorevit"
                        width={600}
                        height={500}
                        priority
                    />
                </div>
                <div>
                    <p className={'max-w-[1000px] mx-auto py-10 px-5'}>
                        Ботокс — это косметологическая процедура, при которой с помощью инъекций ботулинического токсина
                        (ботокса) временно блокируются нервные импульсы, расслабляя мышцы, что позволяет уменьшить
                        выраженность морщин и линий на лице. Особенно эффективно ботокс используется для устранения
                        мимических морщин на лбу, вокруг глаз (гусиные лапки), а также между бровями (морщины
                        переносицы). Процедура занимает всего 15-30 минут и не требует длительного восстановления, а
                        результат становится заметен через несколько дней и сохраняется до 4-6 месяцев. Ботокс помогает
                        не только разглаживать морщины, но и предотвращать появление новых, улучшая общий внешний вид
                        кожи.
                    </p>
                </div>
            </div>
            <Contacts locale={'ru'}/>
        </div>
    );
};

export default Service13;