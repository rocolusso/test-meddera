import React from 'react';

import imgAddress from './../public/assets/img/img_contacts.jpg'

import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";

import Image from 'next/image'
import Link from "next/link";

const Contacts = ({locale}:{locale:string}) => {
    const date = new Date();
    const currentYear = date.getFullYear()
    return (
        <div className={'contacts bg-black mt-10'} id={'contacts'}>
            <div className={'container mx-auto'}>
                <div className={'mx-auto flex justify-center py-10'}>
                    <h2 className={'text-[36px] uppercase underline border py-5 px-10  border-black hover:bg-green-400 duration-300 hover:scale-105'}>{locale === "ru" ? "Контакты" : "Contacte"}</h2>
                </div>


                <div className={'grid grid-cols-1 sm:grid-cols-2 sm:gap-10'}>

                    <div
                        className={'form w-full mx-auto flex flex-col justify-center  sm:px-5 py-5  sm:p-10  rounded-3xl'}>

                        <div>
                            <Image
                                className={'w-full sm:rounded-2xl'}
                                src={imgAddress}
                                alt={'address'}
                                width={400}
                                height={400}
                            />
                        </div>

                        <div className={'mt-10 flex flex-col gap-5 items-center'}>
                            <div className={'flex items-center'}>
                                <div>
                                    <FaMapLocationDot size={'32px'}/>
                                </div>
                                <p className={'ml-5 font-bold uppercase text-[18px]'}>Balti, Stefan Cel Mare, 13</p>
                            </div>
                            <div className={'flex items-center hover:bg-green-400 text-white bg-black duration-300 rounded p-5'}>
                                <div>
                                    < FaPhoneVolume size={'32px'}/>
                                </div>
                                <Link href={'tel:+37379944150'}  className={'ml-5 font-bold uppercase text-[18px]'}>+37379944150</Link>
                            </div>
                        </div>
                    </div>

                    <div
                        className={'form w-full mx-auto flex flex-col justify-center  px-5 py-5  sm:p-10 shadow-2xl rounded-3xl'}>
                        <div className={'mx-auto flex justify-center mb-10'}>
                            <p className={'text-[32px] uppercase   duration-300 '}>{locale === "ru" ? "Обратная связь" : "Feedback"}</p>
                        </div>
                        <input className={'px-5 py-3 border border-black rounded mb-5'}
                               placeholder={locale === "ru" ? "Имя" : "Nume"}/>
                        <input className={'px-5 py-3 border border-black rounded mb-5'}
                               placeholder={locale === "ru" ? "Телефон" : "Telefon"}/>
                        <textarea className={'px-5 py-3 border border-black resize-none h-[150px] rounded mb-5'}
                                  placeholder={locale === "ru" ? "Cообщение" : "Mesaj"}/>
                        <button
                            className='rounded border border-black uppercase font-bold bg-black text-white hover:bg-green-400 duration-300 text-[20px]  p-5'>
                            {locale === "ru" ? "Отправить сообщение" : "Trimite mesaj"}
                        </button>
                    </div>

                </div>

            </div>

            <div className={'mx-auto mt-10'}>
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe frameBorder="0" scrolling="no"
                                className={'max-w-[100%] gmap_iframe'}
                                width="2000"
                                height="450"
                                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Дерматолог Бельцы Екатерина Пынтя Dermatolog Balti Meddera Ecaterina Pintea Magnific Nord Incomed&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>
            </div>
            <div className={'footer_bottom bg-black'}>
                <div className={'container mx-auto  text-center flex flex-col max-w-[400px]  p-5  text-white'}>
                    <Link href={'/'}>
                        <p>{`© Meddera | Ecaterina Pintea | 2018 - ${currentYear}`}</p>
                    </Link>

                    <div className={' my-10 '}>
                        <Link href={'/'}>
                            <p>{`Website by Alex`}</p>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contacts;