import React, { useEffect, useState } from 'react';

import { FaMapLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import { MdPhoneInTalk } from 'react-icons/md';

import Image from 'next/image';
import Link from 'next/link';

import PhoneInputWithCountrySelect from 'react-phone-number-input';
import imgAddress from '../public/assets/img/img_contacts.jpg';
import LazyMap from '@/components/LazyMap';

function Contacts({ locale }:{locale:string}) {
  const date = new Date();
  const currentYear = date.getFullYear();

  const callPhone = () => {
    (window as any).gtag('event', 'Нажатие на кнопку позвонить Main Contacts', {
      action: 'click',
      target: 'tel:+37368550030',
    });

    window.location.href = 'tel:+37368550030';
  };

  const callPhoneFixed = () => {
    (window as any).gtag('event', 'Нажатие на кнопку позвонить Main FIXED Animation', {
      action: 'click',
      target: 'tel:+37368422024',
    });

    window.location.href = 'tel:+37368550030';
  };

  const [isWorkingHours, setIsWorkingHours] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  const workStart = 10; // 10:00
  const workEnd = 17; // 17:00

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();

    const isInWorkingHours = hours >= workStart && hours < workEnd;
    const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setIsWorkingHours(isInWorkingHours);
    setCurrentTime(formattedTime);
  }, []);

  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [locked, setLocked] = useState(false);

  const [submitAlert, setSubmitAlert] = useState<boolean>(false);

  // ts ignore
  const submitHandler = async (e:React.BaseSyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setLocked(true);

    if (!name.length) {
      setLocked(false);
    }

    if (!phone.length) {
      setLocked(false);
    }

    if (name.length > 2 && phone.length > 5) {
      const sendForm = async () => {
        const res = await fetch('/api/main-contact-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: {
              username: name,
              userphone: phone,
              message
            },
          })
        });
      };

      await sendForm();

      if (window) {
        (window as any).gtag('event', 'Заявка на главной форме контактов', {
          action: 'click',
          target: 'Lead main contact form',
        });
      }

      setName('');
      setPhone('');
      setMessage('');
      setLocked(false);
      setSubmitAlert(true);

      setTimeout(() => {
        setSubmitAlert(false);
      }, 3000);
    }
  };

  return (
        <div className="contacts mt-10" id="contacts">
            {/* <PopUpWithTimer/> */}

            <div className="call-container-absolute bottom-0 left-0">

                <button onClick={callPhoneFixed} type="button" className="btn-call">
                    <div className="btn-call__ico">
                        <MdPhoneInTalk />
                    </div>
                </button>

            </div>

            <div className="container mx-auto">
                <div className="mx-auto flex justify-center py-10">
                <h2 className="text-[36px] uppercase underline border py-5 px-10  border-black hover:bg-green-400 duration-300 hover:scale-105">{locale === 'ru' ? 'Контакты' : 'Contacte'}</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10">

                    <div
                      className="form w-full mx-auto flex flex-col justify-center  sm:px-5 py-5  sm:p-10  rounded-3xl"
                    >

                        <div>
                            <Image
                              className="w-full sm:rounded-2xl"
                              src={imgAddress}
                              alt="address"
                              width={400}
                              height={400}
                            />
                        </div>

                        <div className="mt-10 flex flex-col gap-5 items-center">

                            <div className="flex items-center">
                                <div>
                                    <FaMapLocationDot size="32px" />
                                </div>
                                <p className="ml-5 font-bold uppercase text-[18px]">Balti, Stefan Cel Mare, 13</p>
                            </div>

                            <button
                              type="button"
                              className="max-w-[90vw] rounded w-full uppercase font-bold bg-black text-white hover:bg-green-400 duration-300 text-[20px] p-5"
                              onClick={callPhone}
                            >
                                <div className="flex gap-5 items-center justify-center">
                                    <FaPhoneVolume size="32px" className="" />
                                    <div>
                                        +37368550030
                                    </div>
                                </div>
                            </button>

                        </div>
                    </div>

                    <div
                      className="form w-full mx-auto flex flex-col justify-center  px-5 py-5  sm:p-10 shadow-2xl rounded-3xl"
                    >
                        <div className="mx-auto flex justify-center mb-10">
                            <p className="text-[32px] uppercase   duration-300 ">{locale === 'ru' ? 'Запись на консультацию' : 'Programare pentru consultanță'}</p>
                        </div>

                        <div className="max-w-[400px] mx-auto  working-time-message flex flex-col items-center justify-center">
                            <div className="text-center">
                                <p className={!isWorkingHours ? ' bg-red-500 text-white rounded p-3 ' : 'bg-green-500 mb-6  text-white rounded p-3'}>
                                    {
                                        isWorkingHours
                                          ? (locale === 'ru' ? 'Мы открыты!' : 'Suntem deschiși!')
                                          : (locale === 'ru'
                                            ? 'Сейчас мы не работаем, но оставьте свои данные, и мы перезвоним в рабочее время.'
                                            : 'Acum suntem închisi, dar lăsați datele dumneavoastră și vă vom suna în timpul programului de lucru.'
                                          )
}
                                </p>
                            </div>
                            {!isWorkingHours
                                && (
<p className="p-3 uppercase">
{locale === 'ru' ? 'Текущее время:' : 'ora curentă'}
{' '}
{currentTime}
</p>
                                )}
                            {!isWorkingHours
                                && (
<p className="p-3 uppercase">
{locale === 'ru' ? 'Часы работы:' : 'Program de lucru:'}
{' '}
10:00
                                    - 17:00
</p>
                                )}
                        </div>

                        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
                            <fieldset disabled={locked}>

                                <input
                                  className="px-5 py-3 border border-black rounded mb-5 w-full"
                                  placeholder={locale === 'ru' ? 'Имя' : 'Nume'}
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}

                                />
                                <PhoneInputWithCountrySelect
                                  style={{
                                    padding: '13px 13px',
                                    margin: '0 0 14px 0',
                                    borderRadius: '6px',
                                  }}
                                  className="border border-black rounded w-full "
                                  defaultCountry="MD"
                                  placeholder={locale === 'ru' ? 'Ваш номер телефона' : 'Numărul dumneavoastră de telefon'}
                                  value={phone}
                                  onChange={(e) => {
                                    if (e !== undefined) {
                                      setPhone(e);
                                    }
                                  }}
                                />

                                <textarea
                                  className="px-5 py-3 border border-black resize-none h-[150px] rounded mb-5 w-full"
                                  placeholder={locale === 'ru' ? 'Cообщение' : 'Mesaj'}
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                />

                                {
                                    submitAlert
                                    && (
<div>
                                     <p className="p-5 bg-green-400 mb-5">{locale === 'ru' ? 'Спасибо! Ваше сообщение получено' : 'Mulțumim! Mesajul dumneavoastră a fost primit'}</p>
</div>
                                    )
                                }

                                <div className="flex justify-center">
                                    <button
                                      type="submit"
                                      className="rounded border border-black uppercase font-bold bg-black text-white hover:bg-green-400 duration-300 text-[20px]  p-5"
                                    >
                                        {locale === 'ru' ? 'Отправить сообщение' : 'Trimite mesaj'}
                                    </button>
                                </div>

                            </fieldset>
                        </form>

                    </div>

                </div>

            </div>

            <LazyMap />

            <div className="footer_bottom bg-black">
                <div className="container mx-auto  text-center flex flex-col max-w-[400px]  p-5  text-white">
                    <Link href="/">
                        <p>{`© Meddera | Ecaterina Pintea | 2018 - ${currentYear}`}</p>
                    </Link>

                    <div className=" my-10 ">
                        <Link href="/">
                            <p>Website by Alex</p>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
  );
}

export default Contacts;
