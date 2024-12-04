import React from 'react';
import Image from "next/image";

import ava from './../../../public/assets/img/ads/ads_photo.png'
import Link from "next/link";
import Head from "next/head";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Contacts from "@/components/contacts";

const GoogleWhitePage = () => {
    const date = new Date();
    const currentYear = date.getFullYear()


    const event = ({ action, category, label, value }: any) => {
        (window as any).gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    };

    const callPhone = () => {
        event({
            action: 'qualify_lead',
            category: 'beauty',
            label: 'Call from g-ads white-page-1',
            value: 'Tesla',
        });
        window.location.href = 'tel:+37379944150';
    };

    const redirectToBlack = () => {
        event({
            action: 'search',
            category: 'beauty',
            label: 'Transfer to main',
            value: 'Click',
        });
        window.location.href = '/';
    };



    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <title>Екатерина Пынтя</title>
                <meta name="description" content="Дерматокосметолг"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="preconnect" href="https://www.googletagmanager.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
            </Head>
            <div className={' '}

                 style={{background: "linear-gradient(rgb(45, 46, 46) 0%, rgb(0, 0, 0) 100%) rgb(45, 46, 46)"}}

            >
                <div className={'container mx-auto z-10'}>
                    <div style={{padding: '60px 0px 8px'}} className={'photo-block flex justify-center'}>
                        <div className={'flex justify-center flex-col'}>
                            <div className={'flex justify-center'}>
                                <Image
                                    style={{borderRadius: "50%"}}
                                    src={ava}
                                    alt={'Екатерина Пынтя'}
                                    width={100}
                                    height={100}
                                    priority
                                />
                            </div>
                            <div className={'text-white text-center'}>
                                <h1 className={'text-[24px] mt-4 font-bold'}>Екатерина Пынтя</h1>
                                <p>Дерматокосметолг</p>
                            </div>
                            <div className={'mt-2 container mx-auto'}>


                                <div
                                    className={'flex justify-center  max-w-[500px] min-w-[315px]'}>
                                    {/*<Link*/}
                                    {/*    className={' text-white text-center '}*/}
                                    {/*    href={'/'}*/}
                                    {/*>*/}
                                    {/*    Перейти на сайт*/}
                                    {/*</Link>*/}

                                    <button
                                        style={{borderRadius: "14px"}}
                                        className="animated-stripe   heartbeat uppercase  font-bold bg-green-400 text-white text-center inline-block px-10 py-6 w-full rounded-md hover:bg-green-700 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                                        onClick={redirectToBlack}
                                    >
                                        <div className={'flex gap-5 items-center justify-center'}>
                                            <div>
                                                Перейти на сайт
                                            </div>
                                            <FaArrowRight className={' heartbeat'} size={20}/>
                                        </div>
                                    </button>
                                </div>


                                <div
                                    // style={{
                                    //     borderRadius: "14px",
                                    //     backgroundColor: "rgba(255, 255, 255, 0.05)",
                                    // }}
                                    className={'mt-2   flex justify-center  max-w-[500px] min-w-[315px]'}>
                                    {/*<Link*/}
                                    {/*    className={' text-white text-center font-bold'}*/}
                                    {/*    href={'tel:+37379944150'}*/}
                                    {/*>*/}
                                    {/*    Позвонить*/}
                                    {/*</Link>*/}
                                    <button
                                        style={{
                                            borderRadius: "14px",
                                            // backgroundColor: "rgba(255, 255, 255, 0.05)",
                                        }}
                                        className="animated-flash-pulse  gap-2 border-[1px] border-white uppercase  font-bold  text-white text-center inline-block px-10 py-6 w-full rounded-md"

                                        onClick={callPhone}
                                    >
                                        <div className={'flex gap-5 items-center justify-center'}>
                                            <div>
                                                Позвонить
                                            </div>
                                            <FaPhoneVolume className={' heartbeat'} size={20}/>
                                        </div>

                                    </button>
                                </div>

                                {/*<div>*/}
                                {/*    <button className={'btn-shine rounded border border-white'}>Позвонить</button>*/}
                                {/*</div>*/}

                                <div className={'mt-6 flex justify-center'}>
                                    <div className="heart ">
                                        <div className="heartbeat">❤️</div>
                                        <div className="heartecho">❤️</div>
                                    </div>
                                </div>


                            </div>

                            {/*<Contacts locale={'ru'}/>*/}

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
                        <div
                            className={'container mx-auto  text-center flex flex-col max-w-[400px]  p-5  text-white'}>

                                <p>{`© Meddera | Ecaterina Pintea | 2018 - ${currentYear}`}</p>


                            <div className={' my-10 '}>

                                    <p>{`Website by Alex`}</p>

                            </div>
                        </div>
                    </div>


                </div>


            </div>


        </>
    );
};

export default GoogleWhitePage;