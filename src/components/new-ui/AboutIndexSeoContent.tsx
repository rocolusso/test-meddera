import React from 'react';
import Link from 'next/link';

import { ContentArticleBody } from '@/components/new-ui/ContentPageShell';

/**
 * Дополнительный видимый текст под блоком AboutNew на /about и /ro/about.
 */
export default function AboutIndexSeoContent({ locale }: { locale: 'ru' | 'ro' }) {
  if (locale === 'ro') {
    return (
      <ContentArticleBody className="!max-w-6xl border-t border-border/40 !pb-12 !pt-10 md:!pb-16 md:!pt-14">
        <p className="!text-lg !font-medium !leading-relaxed !text-foreground">
          Ecaterina Pîntea este medic dermatovenerolog de categorie I și cosmetolog cu peste 11 ani de experiență în
          dermatologie și 7 ani în cosmetologie. Din aprilie 2024 este fondatoarea și coordonatoarea clinicii Meddera
          din Bălți, str. Ștefan cel Mare, 13 — un centru care unește dermatologia medicală și estetica facială într-un
          singur loc, cu accent pe siguranță și rezultate naturale.
        </p>

        <h2>Studii și parcurs profesional</h2>
        <p>
          Absolventă a USMF „Nicolae Testemițanu”, cu rezidențiat în dermatovenerologie, a acumulat experiență în
          centre consultative și în clinici estetice din Bălți și Rîșcani, înainte de a deschide Meddera. Abordarea
          include consult complet, explicarea opțiunilor de tratament și respectarea protocolului medical pentru
          fiecare pacient.
        </p>

        <h2>Specializare și tehnici</h2>
        <p>
          Practica acoperă dermatologia generală și oncodermatologia minim invazivă (inclusiv dermatoscopie),
          tratamentul afecțiunilor inflamatorii și pigmentare ale pielii, îndepărtarea formațiunilor benigne acolo unde
          este indicat, precum și cosmetologia injectabilă: fillere, toxină botulinică, mezoterapie, biorevitalizare,
          proceduri pentru păr și multe altele — în funcție de indicație și evaluare clinică.
        </p>

        <h2>Clinica Meddera</h2>
        <p>
          Meddera oferă consultații și proceduri într-un mediu modern, cu instrumentar steril și produse certificate.
          Pentru lista completă a serviciilor accesați secțiunea
          {' '}
          <Link href="/ro/services">Servicii</Link>
          . Pentru programare folosiți
          {' '}
          <Link href="#contacts">formularul de mai jos</Link>
          {' '}
          sau datele de contact afișate pe pagină.
        </p>
      </ContentArticleBody>
    );
  }

  return (
    <ContentArticleBody className="!max-w-6xl border-t border-border/40 !pb-12 !pt-10 md:!pb-16 md:!pt-14">
      <p className="!text-lg !font-medium !leading-relaxed !text-foreground">
        Екатерина Пынтя — врач-дерматовенеролог первой категории и косметолог с более чем 11 годами опыта в дерматологии и
        7 годами в косметологии. С апреля 2024 года — основатель и ведущий специалист клиники Meddera в Бельцах, ул.
        Штефан чел Маре, 13: здесь сочетаются медицинская дерматология и эстетическая косметология с упором на безопасность
        и естественный результат.
      </p>

      <h2>Образование и путь в медицине</h2>
      <p>
        Выпускница USMF «Nicolae Testemițanu», прошла резидентуру по дерматовенерологии, работала в консультативных и
        косметологических центрах Бельц и Рышкан до открытия собственной практики. На приёме — полноценный осмотр, понятное
        объяснение плана лечения и соблюдение клинических протоколов.
      </p>

      <h2>Специализация и методы</h2>
      <p>
        Практика включает дерматологию и онкодерматологию в рамках показаний (в том числе дерматоскопию), терапию акне и
        пигментации, удаление доброкачественных образований при наличии показаний, а также инъекционную косметологию:
        филлеры, ботокс, мезотерапия, биоревитализацию, уход за волосами и другое — по назначению после очной консультации.
      </p>

      <h2>Клиника Meddera</h2>
      <p>
        В Meddera ведутся консультации и процедуры в современных условиях, со стерильным расходным материалом и
        препаратами, допустимыми для медицинского применения. Полный перечень услуг — в разделе
        {' '}
        <Link href="/services">Услуги</Link>
        . Записаться можно через
        {' '}
        <Link href="#contacts">форму обратной связи</Link>
        {' '}
        ниже или по телефону в блоке контактов.
      </p>
    </ContentArticleBody>
  );
}
