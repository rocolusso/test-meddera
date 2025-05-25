import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import botoks from '@/../public/assets/img/services/botoks.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza/ro',
  },
  title: 'Terapie antirid cu Botox în Bălți | Reîntinerește-ți aspectul',
  description: 'Descoperă terapia antirid cu Botox în Bălți. Elimină ridurile și redă pielii tale un aspect tânăr și proaspăt. Programează-te acum!',
  openGraph: {
    title: 'Terapie antirid cu Botox în Bălți | Reîntinerește-ți aspectul',
    description: 'Descoperă terapia antirid cu Botox în Bălți. Elimină ridurile și redă pielii tale un aspect tânăr și proaspăt. Programează-te acum!',

    url: 'https://meddera.md/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza/ro',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/botoks.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terapie antirid cu Botox în Bălți | Reîntinerește-ți aspectul',
    description: 'Descoperă terapia antirid cu Botox în Bălți. Elimină ridurile și redă pielii tale un aspect tânăr și proaspăt. Programează-te acum!',

    images: ['https://meddera.md/assets/img/services/botoks.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage14Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Terapie antirid Botox</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={botoks}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Terapie antirid Botox este o procedură cosmetologică prin care, cu
              ajutorul injecțiilor cu toxină
              botulinică
              (botox), se blochează temporar impulsurile nervoase, relaxând mușchii,
              ceea ce permite reducerea
              intensității ridurilor și liniilor de pe față. Botoxul este deosebit de
              eficient în eliminarea
              ridurilor mimice de pe frunte, din jurul ochilor (laba gâștei), precum
              și între sprâncene
              (ridurile punții nasului). Procedura durează doar 15-30 de minute și
              nu necesită o perioadă
              lungă de recuperare, iar rezultatul devine vizibil după câteva zile
              și se menține timp de 4-6
              luni. Botoxul ajută nu doar la netezirea ridurilor, ci și la prevenirea
              apariției unor noi
              riduri, îmbunătățind aspectul general al pielii.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <h1>Terapie antirid cu Botox în Bălți</h1>
              <p>
                Redescoperă frumusețea naturală a pielii tale cu ajutorul terapiei
                antirid cu Botox. Elimină ridurile
                și oferă-ți un aspect proaspăt și întinerit.
              </p>
            </section>
            <section>
              <h2>Beneficiile terapiei antirid cu Botox</h2>
              <ul>
                <li>Reducerea vizibilă a ridurilor de expresie</li>
                <li>Prevenirea formării de noi linii fine</li>
                <li>Procedură rapidă și minim invazivă</li>
                <li>Rezultate vizibile în câteva zile</li>
                <li>Durată a efectului de până la 6 luni</li>
              </ul>
            </section>
            <section>
              <h2>Ce este terapia antirid cu Botox?</h2>
              <article>
                <h3>Descrierea procedurii</h3>
                <p>
                  Terapia antirid cu Botox implică injectarea unei cantități mici de
                  toxină botulinică în mușchii
                  faciali responsabili de formarea ridurilor. Aceasta blochează
                  semnalele nervoase, relaxând mușchii și
                  netezind pielea.
                </p>
              </article>
              <article>
                <h3>Zone tratate frecvent</h3>
                <p>
                  Procedura este eficientă pentru ridurile de pe frunte, între sprâncene
                  (glabella) și în jurul ochilor
                  (laba gâștii).
                </p>
              </article>
              <article>
                <h3>Durata și frecvența tratamentului</h3>
                <p>
                  O ședință durează aproximativ 15-30 de minute.
                  Efectele devin vizibile în 3-7 zile și se mențin între
                  4 și 6 luni. Tratamentul poate fi repetat pentru menținerea rezultatelor.
                </p>
              </article>
              <article>
                <h3>Siguranța procedurii</h3>
                <p>
                  Botoxul este aprobat de autoritățile medicale și este
                  utilizat de zeci de ani în scopuri estetice și
                  medicale. Procedura este sigură când este realizată de specialiști calificați.
                </p>
              </article>
            </section>
            <section>
              <h2>De ce să alegi clinica noastră din Bălți?</h2>
              <p>
                Clinica noastră oferă servicii de înaltă calitate,
                cu personal medical specializat și echipamente
                moderne. Ne dedicăm să oferim fiecărui pacient o
                experiență confortabilă și rezultate excelente.
              </p>
            </section>
            <section>
              <h2>Testimoniale ale pacienților</h2>
              <ul>
                <li>
                  După tratamentul cu Botox, pielea mea arată mult mai
                  tânără și proaspătă. Recomand cu încredere! -
                  Maria, 45 ani
                </li>
                <li>
                  Procedura a fost rapidă și fără durere.
                  Rezultatele au fost vizibile în câteva zile. - Elena, 38
                  ani
                </li>
                <li>
                  Personal profesionist și amabil. Mă voi întoarce cu
                  siguranță. - Ana, 50 ani
                </li>
              </ul>
            </section>
            <section>
              <h2>Programează-te acum pentru o consultație</h2>
              <p>
                Nu amâna să ai grijă de tine. Contactează-ne pentru a
                stabili o consultație și a afla mai multe despre
                cum te poate ajuta terapia antirid cu Botox.
              </p>
              <p>
                Telefon:
                <a href="tel:+37368550030">+373 685 500 30</a>
              </p>
              <p>Adresă: Bălți, Ștefan cel Mare 13</p>
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

export default ServicePage14Ro;
