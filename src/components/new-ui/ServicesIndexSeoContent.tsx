import React from 'react';
import Link from 'next/link';

import { ContentArticleBody } from '@/components/new-ui/ContentPageShell';

/**
 * Дополнительный текст под сеткой услуг на /services и /ro/services.
 */
export default function ServicesIndexSeoContent({ locale }: { locale: 'ru' | 'ro' }) {
  if (locale === 'ro') {
    return (
      <ContentArticleBody className="!max-w-6xl border-t border-border/40 !pb-12 !pt-10 md:!pb-16 md:!pt-14">
        <p className="!text-lg !font-medium !leading-relaxed !text-foreground">
          La clinica Meddera din Bălți, pe str. Ștefan cel Mare, 13, oferim servicii de dermatologie medicală și
          cosmetologie estetică sub îndrumarea medicului dermatolog-cosmetolog Ecaterina Pîntea. Mai jos găsiți lista
          completă a procedurilor — de la consultații și tratamente pentru afecțiuni ale pielii până la terapii
          injectabile și îngrijire profesională a tenului.
        </p>

        <h2>Dermatologie și consultații în Bălți</h2>
        <p>
          Oferim consultații dermatologice și dermatocosmetologice, evaluare și plan de tratament personalizat,
          dermatoscopie, abordarea acneei, pigmentării și altor probleme ale pielii, precum și îndepărtarea formațiunilor
          benigne cu metode moderne, acolo unde este indicat clinic.
        </p>

        <h2>Estetică și proceduri injectabile</h2>
        <p>
          Portofoliul include botox (terapie antirid), plastica de contur cu fillere pe bază de acid hialuronic,
          mărirea și modelarea buzelor, mezoterapie facială și pentru păr, biorevitalizare, injecții lipolitice și alte
          tehnici de rejuvenare, alese în funcție de obiectivele dumneavoastră și de recomandarea medicală.
        </p>

        <h2>Proceduri de suprafață și îngrijire</h2>
        <ul>
          <li>Curățare facială profesională, peeling chimic, terapie anti-acnee și antipigmentară</li>
          <li>Carboxiterapie, mască alginată, tratamente cu dermapen pentru reînnoirea pielii</li>
        </ul>

        <h2>De ce Meddera</h2>
        <p>
          Experiență îndelungată în dermatologie și cosmetologie, abordare individuală, echipamente și produse conform
          standardelor medicale. Pentru programări folosiți
          {' '}
          <Link href="#contacts">formularul de contact</Link>
          {' '}
          de mai jos sau apelați numărul afișat în secțiunea de contacte.
        </p>

        <p className="!text-sm !text-muted-foreground">
          Pentru detalii despre fiecare serviciu, deschideți pagina dedicată din grila de mai sus — acolo găsiți
          informații utile înainte de vizită.
        </p>
      </ContentArticleBody>
    );
  }

  return (
    <ContentArticleBody className="!max-w-6xl border-t border-border/40 !pb-12 !pt-10 md:!pb-16 md:!pt-14">
      <p className="!text-lg !font-medium !leading-relaxed !text-foreground">
        В клинике Meddera в Бельцах, на ул. Штефан чел Маре, 13, мы оказываем услуги медицинской дерматологии и
        эстетической косметологии под руководством врача-дерматокосметолога Екатерины Пынтя. Ниже — полный перечень
        процедур: от консультаций и лечения заболеваний кожи до инъекционных методик и профессионального ухода за кожей
        лица.
      </p>

      <h2>Дерматология и консультации в Бельцах</h2>
      <p>
        Проводим дерматологические и дерматокосметологические консультации, подбираем план лечения, используем
        дерматоскопию при необходимости, работаем с акне, пигментацией и другими состояниями кожи, а также удаляем
        доброкачественные образования современными методами по медицинским показаниям.
      </p>

      <h2>Эстетика и инъекционные процедуры</h2>
      <p>
        В клинике доступны ботокс (коррекция мимических морщин), контурная пластика филлерами на основе гиалуроновой
        кислоты, увеличение и моделирование губ, мезотерапия лица и волос, биоревитализация, инъекции липолитиков и
        другие методики омоложения — строго по показаниям и после очной консультации.
      </p>

      <h2>Поверхностные процедуры и уход</h2>
      <ul>
        <li>Профессиональная чистка лица, пилинг, терапия анти-акне и против пигментации</li>
        <li>Карбокситерапия, альгинатная маска, процедуры с дермапеном для обновления кожи</li>
      </ul>

      <h2>Почему Meddera</h2>
      <p>
        Опыт в дерматологии и косметологии, индивидуальный подход, стерильность и препараты, соответствующие медицинским
        требованиям. Записаться можно через
        {' '}
        <Link href="#contacts">форму обратной связи</Link>
        {' '}
        ниже на этой странице или по телефону в блоке контактов.
      </p>

      <p className="!text-sm !text-muted-foreground">
        Подробное описание каждой услуги — на отдельной странице: нажмите на карточку в сетке выше.
      </p>
    </ContentArticleBody>
  );
}
