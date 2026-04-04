import React from 'react';
import Link from 'next/link';

import { ContentArticleBody } from '@/components/new-ui/ContentPageShell';

type Props = {
  locale: 'ru' | 'ro';
  /** Номер страницы списка статей; на страницах 2+ — короткий блок без дублирования длинного вводного текста. */
  page?: number;
};

/**
 * Дополнительный SEO-текст под списком статей на /blog, /ro/blog и пагинации.
 */
export default function BlogIndexSeoContent({ locale, page = 1 }: Props) {
  const isPaginated = page > 1;

  if (locale === 'ro') {
    if (isPaginated) {
      return (
        <section className="border-t border-border/40 bg-gradient-to-b from-muted/15 to-background">
          <ContentArticleBody className="!max-w-6xl !pb-12 !pt-10 md:!pb-14 md:!pt-12">
            <p className="!text-sm !leading-relaxed !text-muted-foreground md:!text-base">
              Continuați lista articolelor Meddera. Pentru descrierea blogului și ghiduri tematice, deschideți
              {' '}
              <Link className="font-medium text-brand-gold underline-offset-4 hover:underline" href="/ro/blog">
                prima pagină a blogului
              </Link>
              . Programare la clinică:
              {' '}
              <Link className="font-medium text-brand-gold underline-offset-4 hover:underline" href="/ro/contacts">
                contacte
              </Link>
              .
            </p>
          </ContentArticleBody>
        </section>
      );
    }

    return (
      <section className="border-t border-border/40 bg-gradient-to-b from-muted/15 to-background">
        <ContentArticleBody className="!max-w-6xl !pb-12 !pt-10 md:!pb-16 md:!pt-14">
          <p className="!text-lg !font-medium !leading-relaxed !text-foreground">
            Blogul clinicii Meddera din Bălți adună materiale despre dermatologie, cosmetologie estetică și îngrijirea
            pielii — informații generale pentru pacienți care se pregătesc de consultație sau doresc să înțeleagă mai
            bine anumite proceduri. Conținutul nu înlocuiește examenul medical și recomandările personalizate ale
            medicului.
          </p>

          <h2>Ce găsiți aici</h2>
          <p>
            Publicăm articole explicative și ghiduri tematice (de exemplu, despre proceduri estetice și întrebări frecvente
            înainte de vizită). Lista de mai sus se actualizează odată cu noile materiale. Pentru serviciile disponibile
            în clinică, consultați
            {' '}
            <Link href="/ro/services">pagina Servicii</Link>
            ; pentru programare și adresă —
            {' '}
            <Link href="/ro/contacts">Contacte</Link>
            .
          </p>

          <h2>Meddera în Bălți</h2>
          <p>
            Clinica este situată pe str. Ștefan cel Mare, 13. Dacă doriți să cunoașteți echipa și abordarea medicală,
            puteți citi și secțiunea
            {' '}
            <Link href="/ro/about">Despre mine</Link>
            . Materialele din blog sunt educative; decizia privind tratamentul aparține medicului după consultație.
          </p>

          <h2>Întrebări sau programare</h2>
          <p>
            Puteți folosi formularul de pe pagina de contact sau telefonul afișat acolo. Pentru subiecte legate de un
            articol anume, menționați acest lucru la programare — astfel consultația poate fi mai direcționată.
          </p>
        </ContentArticleBody>
      </section>
    );
  }

  if (isPaginated) {
    return (
      <section className="border-t border-border/40 bg-gradient-to-b from-muted/15 to-background">
        <ContentArticleBody className="!max-w-6xl !pb-12 !pt-10 md:!pb-14 md:!pt-12">
          <p className="!text-sm !leading-relaxed !text-muted-foreground md:!text-base">
            Продолжение списка статей клиники Meddera. Полное описание блога и тематические гиды — на
            {' '}
            <Link className="font-medium text-brand-gold underline-offset-4 hover:underline" href="/blog">
              первой странице блога
            </Link>
            . Запись в клинику:
            {' '}
            <Link className="font-medium text-brand-gold underline-offset-4 hover:underline" href="/contacts">
              контакты
            </Link>
            .
          </p>
        </ContentArticleBody>
      </section>
    );
  }

  return (
    <section className="border-t border-border/40 bg-gradient-to-b from-muted/15 to-background">
      <ContentArticleBody className="!max-w-6xl !pb-12 !pt-10 md:!pb-16 md:!pt-14">
        <p className="!text-lg !font-medium !leading-relaxed !text-foreground">
          Блог клиники Meddera в Бельцах — материалы о дерматологии, эстетической косметологии и уходе за кожей: для
          тех, кто готовится к консультации или хочет понять общие принципы процедур. Тексты носят информационный характер
          и не заменяют очный осмотр и индивидуальный план лечения врача.
        </p>

        <h2>О чём материалы</h2>
        <p>
          Мы публикуем статьи и гиды по темам, которые чаще всего обсуждают с врачом на приёме (в том числе по отдельным
          направлениям косметологии). Список статей выше пополняется по мере выхода новых публикаций. Актуальный перечень
          процедур в клинике — в разделе
          {' '}
          <Link href="/services">«Услуги»</Link>
          , адрес, телефон и форма записи — на странице
          {' '}
          <Link href="/contacts">«Контакты»</Link>
          .
        </p>

        <h2>Клиника Meddera в Бельцах</h2>
        <p>
          Кабинеты расположены по адресу ул. Штефан чел Маре, 13. Познакомиться с врачом и специализацией клиники можно в
          разделе
          {' '}
          <Link href="/about">«Обо мне»</Link>
          . Статьи в блоге помогают сориентироваться до визита; решение о процедурах принимается после консультации.
        </p>

        <h2>Запись и вопросы</h2>
        <p>
          Написать клинике или оставить заявку можно через форму на странице контактов. Если вы ссылаетесь на конкретную
          статью при записи, это удобно для уточнения запроса на приёме.
        </p>
      </ContentArticleBody>
    </section>
  );
}
