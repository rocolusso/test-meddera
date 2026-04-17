'use client';

import React from 'react';
import { FaStar } from 'react-icons/fa6';
import HeaderNew from '@/components/new-ui/HeaderNew';
import FooterNew from '@/components/new-ui/FooterNew';
import { Button } from '@/components/ui/button';
import { GOOGLE_REVIEW_EMBED_URL } from '@/lib/google-review';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';

const PageRating = () => {
  const [rating, setRating] = React.useState<number | null>(null);
  const onChange = (e:number) => {
    setRating(e);
  };
  return (
    <div className={'container mx-auto'}>
      <HeaderNew locale={'ru'}/>
      <div className={'rating__block flex flex-col m-20 justify-center items-center '}>
        {!rating && (
          <>
            <div className={' text-center text-xl  py-5 px-2'}>
              <p>Оцените ваш визит в Meddera Beauty Clinic</p>
            </div>
            <div className={' flex flex-row  '}>
              {[1,2,3,4,5].map(n => (
                <button className={'p-2'} key={n} onClick={() => onChange(n)}>
                  <FaStar  size={40} color={'orange'} />
                </button>
              ))}
            </div>
          </>
        )}
        {rating && ( rating === 4 || rating === 5) && (
          <div className={'flex flex-col gap-5'}>
            <p>
              Спасибо за вашу оценку 🙏
              <br/>
              Если у вас есть 30 секунд — вы можете оставить отзыв в Google:
            </p>
            <Button onClick={()=>(
              window.location.href = GOOGLE_REVIEW_EMBED_URL
            )}
            >
              Оставить отзыв
            </Button>
          </div>
        )}
        {rating &&  (rating === 3) && (
          <div className={'flex flex-col gap-5'}>
            <p>
              Спасибо за оценку.
              <br/>
              Мы хотели бы улучшить сервис — если есть пожелания, напишите нам.
            </p>
            <Button onClick={()=>(
              window.location.href = 'mailto:admin@meddera.md'
            )}
            >
              Отправить Email
            </Button>
          </div>
        )}

      </div>
      {rating && ( rating === 1 || rating === 2) && (
        <div className={'p-5 flex flex-col'}>
          <p>
            Нам важно разобраться в вашем случае.
            Мы свяжемся с вами в ближайшее время.
          </p>
          <ContactsDynamicWrapperRu hideHeading />
        </div>
      )}
      <FooterNew locale={'ru'} />

    </div>
  );
};

export default PageRating;
