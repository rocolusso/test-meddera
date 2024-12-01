import React from 'react';
import Image from "next/image";

import ava from './../../../public/assets/img/ads/ads_photo.png'
import Link from "next/link";
import Head from "next/head";

const GoogleWhitePage = () => {

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
            <div className={'h-screen '}

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
                                    style={{borderRadius: "14px"}}
                                    className={'heartbeat  bg-green-400 px-[24px] py-[16px] flex justify-center  max-w-[500px] min-w-[300px]'}>
                                    {/*<Link*/}
                                    {/*    className={' text-white text-center '}*/}
                                    {/*    href={'/'}*/}
                                    {/*>*/}
                                    {/*    Перейти на сайт*/}
                                    {/*</Link>*/}
                                    <button className={'text-white text-center'} onClick={redirectToBlack}>Перейти на сайт</button>
                                </div>


                                <div
                                    style={{
                                        borderRadius: "14px",
                                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                                    }}
                                    className={'mt-2 bg-green-400 px-[24px] py-[16px] flex justify-center  max-w-[500px] min-w-[300px]'}>
                                    {/*<Link*/}
                                    {/*    className={' text-white text-center font-bold'}*/}
                                    {/*    href={'tel:+37379944150'}*/}
                                    {/*>*/}
                                    {/*    Позвонить*/}
                                    {/*</Link>*/}
                                    <button className={'text-white text-center'} onClick={callPhone}>Позвонить</button>
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
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default GoogleWhitePage;