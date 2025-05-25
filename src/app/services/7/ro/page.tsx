import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import maskaLica from '@/../public/assets/img/services/maska_lica.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/7/ro',
  },
  title: 'Masca alginată în Bălți – Ten hidratat și luminos',
  description: 'Descoperă beneficiile măștii alginate în Bălți. Tratament facial profesional pentru hidratare profundă, efect de lifting și revitalizare a tenului. Programează-te acum!',
  openGraph: {
    title: 'Masca alginată în Bălți – Ten hidratat și luminos',
    description: 'Descoperă beneficiile măștii alginate în Bălți. Tratament facial profesional pentru hidratare profundă, efect de lifting și revitalizare a tenului. Programează-te acum!',

    url: 'https://meddera.md/ro',
    type: 'website',
    images: [
      {
        url: '/assets/img/seo-meta/facebook-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Masca alginată în Bălți – Ten hidratat și luminos',
    description: 'Descoperă beneficiile măștii alginate în Bălți. Tratament facial profesional pentru hidratare profundă, efect de lifting și revitalizare a tenului. Programează-te acum!',

    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage7Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Masca alginată</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={maskaLica}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Mască alginată – un mijloc eficient de îngrijire a pielii,
              realizat pe bază de alginați, care se obțin din algele marine brune.
              Datorită conținutului ridicat de minerale și microelemente,
              măștile alginate au un puternic efect hidratant, de întindere și calmare.
              Masca se aplică pe față sub formă de amestec dens și se întărește,
              formând un strat compact,
              care ajută substanțele active să pătrundă mai adânc în piele. În
              funcție de compoziție,
              măștile alginate pot ilumina suplimentar pigmentația, îmbunătăți textura pielii
              și ajuta la eliminarea inflamațiilor. După procedură, pielea arată proaspătă,
              hidratată și fermă, iar tonul acesteia devine mai uniform și radiant.
              Măștile alginate sunt ideale pentru orice tip de piele și sunt
              frecvent utilizate la finalul tratamentelor profesionale, amplificând
              efectul altor
              proceduri.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <h1>Masca alginată în Bălți - Secretul unui ten luminos și sănătos</h1>
              <p>
                Redescoperă frumusețea naturală a pielii tale cu tratamentul nostru
                profesional de mască alginată.
              </p>
            </section>
            <section>
              <h2>Ce este masca alginată și de ce este atât de eficientă?</h2>
              <p>
                Masca alginată este un tratament facial revoluționar, derivat din alge
                marine brune, bogate în acid
                alginic. Aceasta oferă o hidratare intensă, efect de lifting și
                revitalizare profundă a pielii, fiind
                potrivită pentru toate tipurile de ten.
              </p>
              <ul>
                <li>Hidratează și hrănește pielea în profunzime</li>
                <li>Reduce inflamațiile și roșeața</li>
                <li>Îmbunătățește elasticitatea și fermitatea pielii</li>
                <li>Estompează petele pigmentare și cicatricile</li>
                <li>Oferă un efect de lifting și întinerire</li>
              </ul>
            </section>
            <section>
              <h2>Beneficiile măștii alginate pentru tenul tău</h2>
              <article>
                <h3>Hidratare intensă și echilibrare a sebumului</h3>
                <p>
                  Masca alginată pătrunde adânc în straturile pielii, oferind o hidratare
                  de lungă durată și reglând
                  producția de sebum, ideală pentru tenul mixt și gras.
                </p>
              </article>
              <article>
                <h3>Efect de lifting și reducere a ridurilor</h3>
                <p>
                  Prin stimularea producției de colagen, masca alginată contribuie la
                  netezirea ridurilor fine și la
                  redarea fermității pielii.
                </p>
              </article>
              <article>
                <h3>Calmare și reducere a inflamațiilor</h3>
                <p>
                  Datorită proprietăților antiinflamatorii, masca alginată calmează
                  iritațiile și roșeața, fiind ideală
                  pentru pielea sensibilă.
                </p>
              </article>
              <article>
                <h3>Uniformizarea tonului pielii și estomparea petelor</h3>
                <p>
                  Utilizarea regulată a măștii alginate ajută la estomparea petelor
                  pigmentare și la uniformizarea
                  nuanței tenului.
                </p>
              </article>
            </section>
            <section>
              <h2>De ce să alegi tratamentul cu mască alginată la clinica noastră din Bălți?</h2>
              <p>
                La clinica noastră, oferim tratamente personalizate cu mască alginată,
                utilizând produse de cea mai
                înaltă calitate și tehnici avansate pentru a asigura cele mai bune rezultate
                pentru pielea ta.
              </p>
            </section>
            <section>
              <h2>Ce include tratamentul nostru cu mască alginată?</h2>
              <ul>
                <li>Evaluarea tipului de ten și a nevoilor specifice</li>
                <li>Curățarea profundă a pielii</li>
                <li>Aplicarea măștii alginate adaptate tipului tău de ten</li>
                <li>Masaj facial pentru relaxare și stimulare circulatorie</li>
                <li>Aplicarea unei creme hidratante pentru sigilarea beneficiilor</li>
              </ul>
            </section>
            <section>
              <h2>Programează-te acum pentru un ten revitalizat!</h2>
              <p>
                Nu mai aștepta! Programează-te astăzi pentru un tratament cu mască
                alginată și oferă pielii tale
                îngrijirea pe care o merită. Contactează-ne la
                <strong>+37368550030</strong>
                {' '}
                sau vizitează-ne la
                clinica noastră din Bălți.
              </p>
            </section>
          </div>
        </VisuallyHidden>

      </main>

      <ContactsDynamicWrapperRo />

      <ServicesNew locale="ro" />

      <FooterNew locale="ro" />

    </>
  );
}

export default ServicePage7Ro;
