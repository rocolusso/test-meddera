'use client';

import React, { useEffect, useState } from 'react';
import { FaMapLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import { MdPhoneInTalk } from 'react-icons/md';
import Image from 'next/image';
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import LazyMap from '@/components/LazyMap';
import imgAddress from '@/../public/assets/img/img_contacts.jpg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Contacts({ locale }:{locale:string}) {
  const [isWorkingHours, setIsWorkingHours] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  const workStart = 9; // 10:00
  const workEnd = 20; // 17:00

  const now = new Date();
  const hours = now.getHours();

  const isInWorkingHours = hours >= workStart && hours < workEnd;
  const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  useEffect(() => {
    setIsWorkingHours(isInWorkingHours);
    setCurrentTime(formattedTime);
  }, [formattedTime, isInWorkingHours]);

  const callPhone = () => {
    // eslint-disable-next-line no-undef
    (window as any).gtag('event', `Нажатие на позвонить ${formattedTime} Main Contacts`, {
      action: 'click',
      target: 'tel:+37368550030',
    });

    // eslint-disable-next-line no-undef
    window.location.href = 'tel:+37368550030';
  };

  const callPhoneFixed = () => {
    // eslint-disable-next-line no-undef
    (window as any).gtag('event', `Нажатие на позвонить ${formattedTime} Main FIXED Animation`, {
      action: 'click',
      target: 'tel:+37368422024',
    });

    // eslint-disable-next-line no-undef
    window.location.href = 'tel:+37368550030';
  };

  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [locked, setLocked] = useState(false);

  const [submitAlert, setSubmitAlert] = useState<boolean>(false);

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
        await fetch('/api/main-contact-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: {
              username: name,
              userphone: phone,
              message,
            },
          }),
        });
      };

      await sendForm();

      // eslint-disable-next-line no-undef
      if (window) {
        // eslint-disable-next-line no-undef
        (window as any).gtag('event', `Заявка на главной форме ${formattedTime}`, {
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
    <div className="contacts mt-10 bg-white" id="contacts">

      <div className="container mx-auto">
        <div className="text-center ">
          <p className="mt-6 border border-gray-800 p-5 w-fit mx-auto underline
              text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl"
          >
            {locale === 'ru' ? 'Контакты' : 'Contacte'}
          </p>
        </div>

        <div className="new__contacts" id="contacts">
          <div className="call-container-absolute bottom-0 right-0">

            <button aria-label="btn-call-trigger" onClick={callPhoneFixed} type="button" className="btn-call">
              <div className="btn-call__ico">
                <MdPhoneInTalk />
              </div>
            </button>

          </div>
          <div
            className="relative flex items-top justify-center  bg-white  sm:items-center sm:pt-0"
          >
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-6">
              <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 sm:py-20 sm:px-10">

                  <div className="p-6 mr-2 bg-gray-100  sm:rounded-lg">
                    <div>
                      <Image
                        className="w-full sm:rounded-md"
                        src={imgAddress}
                        alt="address"
                        width={400}
                        height={400}
                      />
                    </div>

                    <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400" />

                    <div className="contacts__buttons">
                      <div className="mt-4 flex flex-col gap-5 items-center">

                        <div className="flex gap-2 items-center justify-center hover:scale-105 duration-300">
                          <Link
                            href="/#lazy-map"
                            className=" font-bold uppercase text-xs sm:text-sm flex items-center gap-2"
                          >
                            <div>
                              <FaMapLocationDot size="32px" />
                            </div>
                            <p className=" font-bold uppercase  text-lg">Balti, Stefan Cel Mare, 13</p>
                          </Link>
                        </div>

                        <Button
                          className="w-full sm:w-fit mt-6 w-full sm:w-fit font-bold  hover:scale-105 hover:bg-green-400 hover:text-white hover:border-transparent border border-gray-400 duration-300"
                          variant="default"
                          size="lg"
                          type="button"
                          onClick={callPhone}

                        >
                          <FaPhoneVolume size="24px" className="" />
                          +37368550030
                        </Button>

                      </div>
                    </div>

                  </div>

                  <div className="form__block__wrapper  sm:rounded-lg shadow-2xl">
                    <div className="mx-auto flex justify-center mb-10">
                      <p className="mt-10 font-heading mt-2 text-2xl leading-8 font-semibold tracking-tight text-gray-900">
                        {locale === 'ru' ? 'Запись на консультацию' : 'Programare pentru consultanță'}
                      </p>
                    </div>
                    <div
                      className="max-w-[400px] mx-auto  working-time-message flex flex-col items-center justify-center"
                    >
                      <div className="text-center">
                        <p className={!isWorkingHours ? ' bg-red-600 text-white rounded p-3 ' : 'bg-green-500 mb-6  text-white rounded p-3'}>
                          {
                            // eslint-disable-next-line no-nested-ternary
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
                            09:00
                            - 20:00
                          </p>
                          )}
                    </div>
                    <form onSubmit={submitHandler} className="p-6 flex flex-col justify-center">
                      <fieldset disabled={locked}>
                        <div className="flex flex-col">
                          <input
                            className="w-full mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                            placeholder={locale === 'ru' ? 'Имя' : 'Nume'}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <PhoneInputWithCountrySelect
                            style={{
                              padding: '13px 13px',
                              margin: '0 0 14px 0',
                              borderRadius: '6px',
                            }}
                              // className="border border-black rounded w-full "
                            className="w-full mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                            defaultCountry="MD"
                            placeholder={locale === 'ru' ? 'Ваш номер телефона' : 'Numărul dumneavoastră de telefon'}
                            value={phone}
                            onChange={(e) => {
                              if (e !== undefined) {
                                setPhone(e);
                              }
                            }}
                          />
                        </div>

                        <div className="flex flex-col mt-2">
                          <textarea
                            className="w-full resize-none h-[150px] mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
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
                        </div>

                        <Button
                          className=" mt-6 w-full sm:w-fit font-bold underline hover:scale-105 hover:bg-green-400 hover:text-white hover:border-transparent border border-gray-400 duration-300"
                          variant="default"
                          size="lg"
                          type="submit"

                        >
                          {locale === 'ru' ? 'Отправить сообщение' : 'Trimite mesaj'}
                        </Button>

                      </fieldset>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <LazyMap />

    </div>
  );
}

export default Contacts;
