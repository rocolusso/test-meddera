import React from 'react';
import Head from "next/head";
import Image from "next/image";
import numBack from "@/public/assets/img/cert/num_back.svg";
import pintea from "@/public/assets/img/cert/pintea.svg";
import medderaCert from "@/public/assets/img/cert/meddera-logo.svg";
import priceBack from "@/public/assets/img/cert/price_back.svg";
import cert from "@/public/assets/img/cert/back1.svg";


const Certificate = ({certificatNumber,userName,serviceName,price,currency}:{
    certificatNumber:string,userName:string,serviceName:string,price:string,currency:string
}) => {

    return (
        <>

            <Head>
                <title>Client Certificate</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Corinthia:wght@400;700&display=swap"
                      rel="stylesheet"/>
            </Head>


            <div>


                <div className={'certificate  mx-2 my-10 bg-white flex justify-center '}>
                    <div className={'relative'}>

                        <div className={'cert-number absolute top-30 left-30 '}>
                            <div className={'relative'}>
                                <div className={'absolute top-4 left-5'}>
                                    <p className={'text-[12px] text-[#CAAE7C]'}>{certificatNumber}</p>
                                </div>
                                <Image src={numBack} alt={'certificate'} width={100} height={200}/>
                            </div>
                        </div>

                        <div style={{
                            position: "absolute",
                            top: -5,
                            right: 10,
                        }} className={'pintea-logo '}>
                            <div className={'relative block sm:hidden'}>
                                <Image src={pintea} alt={'certificate'} width={120} height={200}/>
                            </div>
                        </div>

                        <div style={{
                            position: "absolute",
                            top: -5,
                            right: 10,
                        }} className={'pintea-logo '}>
                            <div className={'relative hidden sm:block'}>
                                <Image src={pintea} alt={'certificate'} width={250} height={200}/>
                            </div>
                        </div>

                        <div style={{
                            position: "absolute",
                            bottom: -5,
                            left: 0,
                        }} className={'meddera-logo  block sm:hidden'}>
                            <div className={'relative'}>
                                <Image src={medderaCert} alt={'certificate'} width={120} height={200}/>
                            </div>
                        </div>

                        <div style={{
                            position: "absolute",
                            bottom: -5,
                            left: 0,
                        }} className={'meddera-logo  hidden sm:block'}>
                            <div className={'relative'}>
                                <Image src={medderaCert} alt={'certificate'} width={250} height={200}/>
                            </div>
                        </div>

                        <div style={{
                            position: "absolute",
                            bottom: 15,
                            right: 12,
                        }} className={'price block sm:hidden'}>
                            <div className={'relative'}>
                                <div
                                    className={'absolute bottom-3 right-4 flex justify-center flex-col items-center'}>
                                    <p className={'text-[20px] text-[#CAAE7C] uppercase w-fit'}>{price}</p>
                                    <p className={'text-[20px] text-[#CAAE7C] uppercase w-fit'}>{currency}</p>
                                </div>
                                <Image src={priceBack} alt={'certificate'} width={80} height={200}/>
                            </div>
                        </div>


                        <div style={{
                            position: "absolute",
                            bottom: 15,
                            right: 12,
                        }} className={'price hidden sm:block'}>
                            <div className={'relative'}>
                                <div
                                    className={'absolute bottom-[35px] right-[50px] flex justify-center flex-col items-center'}>
                                    <p className={'p-0 m-0 text-[3em] text-[#CAAE7C] uppercase w-fit'}>{price}</p>
                                    <p className={'p-0 text-[3em] text-[#CAAE7C] uppercase w-fit'}>{currency}</p>
                                </div>
                                <Image src={priceBack} alt={'certificate'} width={220} height={200}/>
                            </div>
                        </div>

                        <div style={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transform: 'translate(-50%, -50%)',
                            top: "35%",
                            left: "50%"
                        }} className="user-name relative-parent ">
                            <div className="absolute  text-center">
                                <p className={'corinthia-bold gold-gradient text-[4rem] sm:text-[8em]'}>Certificate</p>
                            </div>
                        </div>

                        <div style={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transform: 'translate(-50%, -50%)',
                            top: "55%",
                            left: "50%"
                        }} className="user-name relative-parent ">
                            <div className="absolute  text-center">
                                <p className={'uppercase text-[1.2rem]'}>{userName}</p>
                            </div>
                        </div>

                        <div style={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transform: 'translate(-50%, -50%)',
                            top: "68%",
                            left: "50%"
                        }} className="service name  relative-parent ">
                            <div className="absolute  text-center">
                                <p className={'uppercase text-[0.8rem]'}>{serviceName}</p>
                            </div>
                        </div>


                        <Image src={cert} alt={'certificate '} width={1000} height={1000}/>


                    </div>
                </div>


            </div>


        </>
    );
};

export default Certificate;
