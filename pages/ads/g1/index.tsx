import React from 'react';
import Image from "next/image";

import ava from './../../../public/assets/img/ads/ads_photo.png'
import Link from "next/link";

const GoogleWhitePage = () => {
    return (
        <div className={'h-screen'} style={{background: "linear-gradient(rgb(45, 46, 46) 0%, rgb(0, 0, 0) 100%) rgb(45, 46, 46)"}}>
            <div className={'container mx-auto'}>
                <div style={{padding:'60px 0px 8px'}} className={'photo-block flex justify-center'}>
                     <div className={'flex justify-center flex-col'}>
                     <div className={'flex justify-center'}>
                         <Image
                             style={{borderRadius:"50%"}}
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
                                 <Link
                                     className={'text-white text-center '}
                                     href={'/'}
                                 >
                                     Перейти на сайт
                                 </Link>
                             </div>



                             <div
                                 style={{
                                     borderRadius: "14px",
                                     backgroundColor: "rgba(255, 255, 255, 0.05)",
                                 }}
                                 className={'mt-2 bg-green-400 px-[24px] py-[16px] flex justify-center  max-w-[500px] min-w-[300px]'}>
                                 <Link
                                     className={'text-white text-center font-bold'}
                                     href={'tel:+37379944150'}
                                 >
                                     Позвонить
                                 </Link>
                             </div>

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
    );
};

export default GoogleWhitePage;