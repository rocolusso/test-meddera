import React from 'react';
import Link from 'next/link';

import { ContentArticleBody } from '@/components/new-ui/ContentPageShell';

const phoneClassName =
  'font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-brand-gold';

function ClinicPhoneLink() {
  return (
    <a href="tel:+37368550030" className={phoneClassName}>
      +37368550030
    </a>
  );
}

/**
 * SEO-текст на /contacts и /ro/contacts (над блоком формы и карты).
 */
export default function ContactsIndexSeoContent({ locale }: { locale: 'ru' | 'ro' }) {
  if (locale === 'ro') {
    return (
      <ContentArticleBody className="!max-w-6xl !pb-10 !pt-10 md:!pb-14 md:!pt-14">
        <h1 className="!font-heading !text-3xl !font-semibold !tracking-tight !text-foreground sm:!text-4xl">
          Contacte — clinica Meddera, Bălți
        </h1>
        <p className="!mt-4 !text-lg !font-medium !leading-relaxed !text-foreground">
          Adresa: str. Ștefan cel Mare, 13. Programări la consultație — prin
          {' '}
          <Link href="#contacts">formularul de mai jos</Link>
          {' '}
          sau la telefon
          {' '}
          <ClinicPhoneLink />
          . Pentru proceduri și consultații dermatologice, vezi și
          {' '}
          <Link href="/ro/services">serviciile clinicii</Link>
          {' '}
          și
          {' '}
          <Link href="/ro/blog">blogul</Link>
          .
        </p>

        <h2>Program și cum ne găsiți</h2>
        <p>
          Lucrăm cu programare prealabilă; în formular puteți lăsa un mesaj sau cere apel înapoi. Puteți suna la
          {' '}
          <ClinicPhoneLink />
          . Harta interactivă este la sfârșitul paginii — secțiunea cu hartă.
        </p>

        <h2>Consultație și informații generale</h2>
        <p>
          Materialele de pe site și din blog au caracter informativ și nu înlocuiesc evaluarea clinică. La consultație
          medicul clarifică indicațiile, contraindicațiile și planul personalizat. Lista procedurilor disponibile —
          în
          {' '}
          <Link href="/ro/services">Servicii</Link>
          ; despre experiență și abordare —
          {' '}
          <Link href="/ro/about">Despre mine</Link>
          .
        </p>

        <h2>Adresă și acces</h2>
        <p>
          Clinica este în centrul Bălțiului, pe str. Ștefan cel Mare, 13. Pentru orientare pe hartă folosiți blocul cu
          hartă de la finalul paginii sau linkul către hartă din zona de contact de mai jos.
        </p>

        <h2>Întrebări înainte de vizită</h2>
        <p>
          Dacă scrieți prin formular, puteți menționa tipul consultației dorite sau articolul din blog care v-a
          interesat — acest lucru ajută la pregătirea vizitei. Pentru articole recente, accesați
          {' '}
          <Link href="/ro/blog">blogul Meddera</Link>
          .
        </p>
      </ContentArticleBody>
    );
  }

  return (
    <ContentArticleBody className="!max-w-6xl !pb-10 !pt-10 md:!pb-14 md:!pt-14">
      <h1 className="!font-heading !text-3xl !font-semibold !tracking-tight !text-foreground sm:!text-4xl">
        Контакты — клиника Meddera, Бельцы
      </h1>
      <p className="!mt-4 !text-lg !font-medium !leading-relaxed !text-foreground">
        Адрес: ул. Штефан чел Маре, 13. Запись на консультацию — через
        {' '}
        <Link href="#contacts">форму ниже</Link>
        {' '}
        или по телефону
        {' '}
        <ClinicPhoneLink />
        . С перечнем процедур и консультаций можно ознакомиться в разделе
        {' '}
        <Link href="/services">«Услуги»</Link>
        {' '}
        и в
        {' '}
        <Link href="/blog">блоге</Link>
        .
      </p>

      <h2>Режим работы и как нас найти</h2>
      <p>
        Приём по предварительной записи; в форме можно оставить сообщение или запрос обратного звонка. Также можно
        позвонить по
        {' '}
        <ClinicPhoneLink />
        . Интерактивная карта — внизу страницы, в блоке с картой.
      </p>

      <h2>Консультация и информация на сайте</h2>
      <p>
        Материалы сайта и блога носят ознакомительный характер и не заменяют очный осмотр. На приёме врач уточняет
        показания, ограничения и план лечения индивидуально. Полный перечень услуг — в разделе
        {' '}
        <Link href="/services">«Услуги»</Link>
        ; о специалисте и подходе клиники — в блоке
        {' '}
        <Link href="/about">«Обо мне»</Link>
        .
      </p>

      <h2>Адрес и проезд</h2>
      <p>
        Клиника расположена в центре Бельц, ул. Штефан чел Маре, 13. Ориентир на карте — в конце страницы; при
        необходимости уточните детали по телефону
        {' '}
        <ClinicPhoneLink />
        .
      </p>

      <h2>Вопросы перед визитом</h2>
      <p>
        В форме обратной связи можно указать желаемый тип консультации или сослаться на статью из блога — это помогает
        подготовить приём. Актуальные публикации — в
        {' '}
        <Link href="/blog">блоге Meddera</Link>
        .
      </p>
    </ContentArticleBody>
  );
}
