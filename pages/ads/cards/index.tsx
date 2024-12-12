import React from 'react';
import Image from "next/image";

import ava from './../../../public/assets/img/ads/ads_photo.png'
import Head from "next/head";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import imgAddress from "@/public/assets/img/img_contacts.jpg";

import cert from './../../../public/assets/img/cert/background.svg'
import {MdPhoneInTalk} from "react-icons/md";


const GoogleWhitePage = () => {
    const date = new Date();
    const currentYear = date.getFullYear()


    // const event = ({ action, category, label, value }: any) => {
    //     (window as any).gtag('event', action, {
    //         event_category: category,
    //         event_label: label,
    //         value: value,
    //     });
    // };

    const callPhone = () => {
        // event({
        //     action: 'qualify_lead',
        //     category: 'beauty',
        //     label: 'Call from g-ads white-page-1',
        //     value: 'Tesla',
        // });

        (window as any).gtag('event', 'Нажатие на кнопку позвонить White /ads/cards vizitki', {
            'action': 'click',
            'target': 'tel:+37368422024',
        });

        window.location.href = 'tel:+37368422024';
    };

    const redirectToBlack = () => {
        // event({
        //     action: 'search',
        //     category: 'beauty',
        //     label: 'Transfer to main',
        //     value: 'Click',
        // });


        (window as any).gtag('event', 'redirect from white /ads/cards vizitki', {
            'action': 'click',
            'target': 'from meddera.md/ads/cards vizitki  meddera.md',
        });


        window.location.href = '/';
    };



    return (
        <>
            <Head>
                <meta name="robots" content="noindex"/>

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
                                <p className={'py-2'}>Дерматокосметолг | Клиника Meddera | Бельцы</p>
                            </div>


                            <div className={'mt-2 container mx-auto py-4'}>
                                <div className={'flex justify-center mx-4  max-w-[500px] min-w-[315px]'}>
                                    <button
                                        style={{borderRadius: "14px"}}
                                        className="go-to-main-btn-white-ads-1    animated-stripe-2  hover:bg-red-700   heartbeat uppercase  font-bold  text-white text-center inline-block px-10 py-6 w-full rounded-md   "
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


                                {/*<div className={'mt-4 mx-4   flex justify-center  max-w-[500px] min-w-[315px]'}>*/}
                                {/*    <button*/}
                                {/*        style={{*/}
                                {/*            borderRadius: "14px",*/}
                                {/*        }}*/}
                                {/*        className="call-btn-white-ads-1        animated-flash-pulse  gap-2 border-[1px] border-white uppercase  font-bold  text-white text-center inline-block px-10 py-6 w-full rounded-md"*/}

                                {/*        onClick={callPhone}*/}
                                {/*    >*/}
                                {/*        <div className={'flex gap-5 items-center justify-center'}>*/}
                                {/*            <div>*/}
                                {/*                Позвонить*/}
                                {/*            </div>*/}
                                {/*            <FaPhoneVolume className={' heartbeat'} size={20}/>*/}
                                {/*        </div>*/}

                                {/*    </button>*/}
                                {/*</div>*/}


                                <div   className={'relative  mx-auto mt-14 mb-32'}>
                                    <button
                                        style={{
                                            top:"50%",
                                            left:"50%",
                                            position:"absolute",
                                            transform:"translate(-50%, -50%)",
                                            zIndex:10,
                                            height:"70px"
                                        }}
                                        onClick={callPhone}
                                        rel="nofollow"
                                        className="btn-call-2 "

                                    >
                                        <div className="btn-call__ico-2  ">
                                            <MdPhoneInTalk size={35}/>
                                        </div>
                                    </button>
                                </div>


                                <div className={'mt-6 flex justify-center'}>
                                    <div className="heart ">
                                        <div className="heartbeat">❤️</div>
                                        <div className="heartecho">❤️</div>
                                    </div>
                                </div>


                            </div>

                            {/*<Contacts locale={'ru'}/>*/}

                            <div>
                                <Image
                                    className={'w-full sm:rounded-2xl'}
                                    src={imgAddress}
                                    alt={'address'}
                                    width={400}
                                    height={400}
                                />
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



                    {/*<div className={'voucher bg-white flex justify-center'}>*/}
                    {/*    <div className={'relative'}>*/}
                    {/*        <div className={'cert-number absolute top-5 left-6 sm:top-11  sm:left-16 text-white '}>*/}
                    {/*            <p className={'text-[10px] sm:text-[1.8rem]'}>67868</p>*/}
                    {/*        </div>*/}
                    {/*        <Image src={cert} alt={'certificate'} width={1000} height={1000}/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


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