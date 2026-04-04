import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import uvelichenieGub from '../../../../public/assets/img/services/uvelicheniegub.png';
import uvelichenieGub1 from '../../../../public/assets/img/services/lips/lips1.png';
import uvelichenieGub2 from '../../../../public/assets/img/services/lips/lips2.png';
import uvelichenieGub3 from '../../../../public/assets/img/services/lips/lips3.png';
import uvelichenieGub4 from '../../../../public/assets/img/services/lips/lips4.png';
import uvelichenieGub5 from '../../../../public/assets/img/services/lips/lips5.png';
import uvelichenieGub6 from '../../../../public/assets/img/services/lips/lips6.png';
import uvelichenieGub7 from '../../../../public/assets/img/services/lips/lips7.png';
import uvelichenieGub8 from '../../../../public/assets/img/services/lips/lips8.png';
import uvelichenieGub9 from '../../../../public/assets/img/services/lips/lips9.png';
import uvelichenieGub10 from '../../../../public/assets/img/services/lips/lips10.png';

export const metadata = {
  icons: { icon: '/favicon.ico' },
  alternates: { canonical: 'https://meddera.md/services/uvelychenye-gub-v-belczah' },
  title: 'Увеличение губ в Бельцах — Эффективные и безопасные процедуры',
  description:
    'Профессиональное увеличение губ в Бельцах. Контурная пластика, гиалуроновая кислота, безопасные филлеры. Запишитесь на консультацию уже сегодня!',
  openGraph: {
    title: 'Увеличение губ в Бельцах — Эффективные и безопасные процедуры',
    description:
      'Профессиональное увеличение губ в Бельцах. Контурная пластика, гиалуроновая кислота, безопасные филлеры. Запишитесь на консультацию уже сегодня!',
    url: 'https://meddera.md/services/uvelychenye-gub-v-belczah',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/uvelicheniegub.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Увеличение губ в Бельцах — Эффективные и безопасные процедуры',
    description:
      'Профессиональное увеличение губ в Бельцах. Контурная пластика, гиалуроновая кислота, безопасные филлеры.',
    images: ['https://meddera.md/assets/img/services/uvelicheniegub.png'],
    site: '@your_twitter_handle',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько держится эффект?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Обычно от 6 до 12 месяцев, зависит от индивидуальных особенностей.',
      },
    },
    {
      '@type': 'Question',
      name: 'Больно ли процедура?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Практически безболезненно благодаря анестезии.',
      },
    },
    {
      '@type': 'Question',
      name: 'Можно ли повторять процедуру?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да, при необходимости и по согласованию с врачом.',
      },
    },
    {
      '@type': 'Question',
      name: 'Как подготовиться к процедуре?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Избегать алкоголя и разжижающих кровь препаратов за 2–3 дня.',
      },
    },
    {
      '@type': 'Question',
      name: 'Какие филлеры используются?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Сертифицированные филлеры на основе гиалуроновой кислоты.',
      },
    },
  ],
};

function ServicePageMoney() {
  return (
    <>
      <script
        type="application/ld+json"
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ContentPageShell variant="custom" locale="ru" contactsVariant="lips">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl max-w-3xl">
          Увеличение губ в Бельцах — безопасно, красиво и естественно
        </h1>
        <div className="mx-auto mt-5 h-px w-16 bg-border md:mx-0" aria-hidden />

        <p className="mt-6 max-w-3xl text-center text-sm text-muted-foreground md:text-left">
          <Link
            href="/blog/uvelichenie-gub-beltsy"
            className="font-medium text-brand-gold underline-offset-4 hover:underline"
          >
            Гид по процедуре в блоге
          </Link>
        </p>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/90">
          Контурная пластика губ с использованием сертифицированных филлеров на основе гиалуроновой кислоты — это
          современная и безопасная процедура для коррекции формы, объема и симметрии губ. В нашей клинике Meddera
          опытный дерматокосметолог подбирает индивидуальную схему процедуры, чтобы результат выглядел максимально
          естественно и гармонично. Эффект заметен сразу и сохраняется до 12 месяцев.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="relative aspect-[6/5] w-full max-w-xl overflow-hidden rounded-2xl bg-muted/40 shadow-lg ring-1 ring-border/50">
            <Image
              src={uvelichenieGub}
              alt="Увеличение губ в Бельцах"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 576px"
              priority
            />
          </div>
        </div>

        <div className="mt-12 flex w-full max-w-3xl flex-col">
          <h2 className="text-2xl font-semibold text-foreground">Преимущества увеличения губ в Meddera</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-foreground/90">
            <li>Опытный врач-дерматокосметолог с медицинским образованием</li>
            <li>Использование сертифицированных филлеров высокого качества</li>
            <li>Индивидуальный подбор объема и формы губ</li>
            <li>Современное оборудование и стерильные условия</li>
            <li>Естественный результат с мгновенным эффектом</li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold text-foreground">Как проходит процедура увеличения губ</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-foreground/90">
            <li>Консультация с врачом, оценка формы губ и подбор филлера</li>
            <li>Обработка кожи и нанесение анестезирующего крема</li>
            <li>Введение филлера с использованием тонких канюль или игл</li>
            <li>Коррекция формы, устранение асимметрии и моделирование контура</li>
            <li>Рекомендации по уходу после процедуры</li>
          </ol>

          <h2 className="mt-10 text-2xl font-semibold text-foreground">Результаты процедуры — фото до и после</h2>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[uvelichenieGub1, uvelichenieGub2, uvelichenieGub3, uvelichenieGub4, uvelichenieGub5, uvelichenieGub6, uvelichenieGub7, uvelichenieGub8, uvelichenieGub9, uvelichenieGub10].map(
              (src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Фото до и после увеличения губ ${i + 1}`}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md ring-1 ring-border/40"
                />
              ),
            )}
          </div>

          <h2 className="mt-10 text-2xl font-semibold text-foreground">Противопоказания</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-foreground/90">
            <li>Беременность и лактация</li>
            <li>Воспалительные процессы в области губ</li>
            <li>Аллергические реакции на компоненты филлера</li>
            <li>Некоторые хронические заболевания — по рекомендации врача</li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold text-foreground">Почему выбирают Meddera для увеличения губ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-foreground/90">
            <li>Екатерина Пынтя — сертифицированный врач-дерматокосметолог с опытом более 10 лет</li>
            <li>Более 500 довольных клиентов с естественным результатом</li>
            <li>Сертифицированные препараты, безопасные для здоровья</li>
            <li>Гибкая система записи и консультаций онлайн</li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold text-foreground">Часто задаваемые вопросы</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 text-foreground/90">
            <li>
              <strong className="text-foreground">Сколько держится эффект?</strong>
              {' '}
              Обычно от 6 до 12 месяцев, зависит
              от индивидуальных особенностей.
            </li>
            <li>
              <strong className="text-foreground">Больно ли процедура?</strong>
              {' '}
              Практически безболезненно благодаря
              анестезии.
            </li>
            <li>
              <strong className="text-foreground">Можно ли повторять процедуру?</strong>
              {' '}
              Да, при необходимости и по
              согласованию с врачом.
            </li>
            <li>
              <strong className="text-foreground">Как подготовиться к процедуре?</strong>
              {' '}
              Избегать алкоголя и
              разжижающих кровь препаратов за 2–3 дня.
            </li>
            <li>
              <strong className="text-foreground">Какие филлеры используются?</strong>
              {' '}
              Сертифицированные филлеры на
              основе гиалуроновой кислоты.
            </li>
          </ul>
        </div>

        <div className="mt-12 rounded-xl border border-border/50 bg-muted/30 p-6 text-center">
          <p className="font-semibold text-lg text-foreground">Готовы подчеркнуть свою красоту?</p>
          <p className="mt-2 text-foreground/90">Свяжитесь с нами по телефону или запишитесь онлайн.</p>
        </div>
      </ContentPageShell>
    </>
  );
}

export default ServicePageMoney;
