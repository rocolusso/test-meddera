import React from 'react';

import imgAddress from './../public/assets/img/img_contacts.jpg'

import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineRateReview } from "react-icons/md";

import Image from 'next/image'
import Link from "next/link";

const Contacts = ({locale}:{locale:string}) => {
    const date = new Date();
    const currentYear = date.getFullYear()

    const addReview =()=>{
        window.location.href ='https://g.page/r/CZIarfL1QQwNEBM/review'
    }

    const callPhone = () => {
        window.location.href ='tel:+37379944150'
    }
    return (
        <div className={'contacts mt-10'} id={'contacts'}>
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




                            <button
                                className='max-w-[90vw] rounded w-full uppercase font-bold bg-black text-white hover:bg-green-400 duration-300 text-[20px] p-5'
                                onClick={callPhone}
                            >
                                <div className={'flex gap-5 items-center justify-center'}>
                                    < FaPhoneVolume size={'32px'} className={''}/>
                                    <div>
                                        +37379944150
                                    </div>
                                </div>
                            </button>


                            <button
                                className='max-w-[90vw] rounded w-full uppercase font-bold bg-black text-white hover:bg-green-400 duration-300 text-[20px] p-5'
                                onClick={addReview}
                            >
                                <div className={'flex gap-5 items-center justify-center'}>
                                    < MdOutlineRateReview size={'45px'}/>
                                    <div>
                                        {locale === "ru" ? "Оставить отзыв" : "Lasă un comentariu"}
                                    </div>
                                </div>
                            </button>


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
                                title={'contact map'}
                                className={'max-w-[100%] gmap_iframe'}
                                width="2000"
                                height="450"
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=B%C4%83l%C8%9Bi%20MD,%20Strada%20%C8%98tefan%20cel%20Mare%2013,%20MD-3100,%20%D0%9C%D0%BE%D0%BB%D0%B4%D0%BE%D0%B2%D0%B0+(%D0%94%D0%B5%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%20%D0%91%D0%B5%D0%BB%D1%8C%D1%86%D1%8B%20%7C%20Meddera%20%7C%20%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%20%D0%9F%D1%8B%D0%BD%D1%82%D1%8F%20%7C%20Dermatolog%20Balti%20%7C%20Ecaterina%20Pinteaness%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
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