import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import maskaLica from '@/../public/assets/img/services/anti-akne.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/terapyya-anty-akne-v-belczah/ro',
  },
  title: 'Terapie anti-acnee Bălți | Ten curat și sănătos',
  description: 'Descoperă terapia anti-acnee în Bălți oferită de clinica Meddera. Tratament profesional pentru un ten curat și sănătos. Programează-te acum!',
  openGraph: {
    title: 'Terapie anti-acnee Bălți | Ten curat și sănătos',
    description: 'Descoperă terapia anti-acnee în Bălți oferită de clinica Meddera. Tratament profesional pentru un ten curat și sănătos. Programează-te acum!',

    url: 'https://meddera.md/services/terapyya-anty-akne-v-belczah/ro',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/anti-akne.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terapie anti-acnee Bălți | Ten curat și sănătos',
    description: 'Descoperă terapia anti-acnee în Bălți oferită de clinica Meddera. Tratament profesional pentru un ten curat și sănătos. Programează-te acum!',

    images: ['https://meddera.md/assets/img/services/anti-akne.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage8Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Terapia anti-acnee</p>
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
              Terapia anti-acnee este o procedură destinată tratării inflamațiilor
              pielii și prevenției
              apariției de noi erupții. În cadrul procesului se utilizează metode
              de curățare, peeling,
              tratamente antibacteriene și hidratare, care ajută la normalizarea
              activității glandelor
              sebacee
              și la eliminarea impurităților din pori. Este important de menționat
              că procedura este
              aleasă
              individual, în funcție de tipul pielii și stadiul afecțiunii. Ședințele
              regulate ajută nu
              doar
              la eliminarea inflamațiilor, dar și la prevenirea dezvoltării post-acneei
              și a cicatrizării.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <h1>Terapia anti-acnee în Bălți</h1>
              <p>Tratament profesional pentru un ten curat și sănătos</p>
            </section>
            <section>
              <h2>De ce să alegi terapia anti-acnee la clinica Meddera?</h2>
              <ul>
                <li>
                  <strong>Experiență vastă:</strong>
                  {' '}
                  Peste 11 ani de experiență în dermatologie și cosmetologie.
                </li>
                <li>
                  <strong>Tratamente personalizate:</strong>
                  {' '}
                  Soluții adaptate tipului tău de ten și severității
                  acneei.
                </li>
                <li>
                  <strong>Tehnologie modernă:</strong>
                  {' '}
                  Utilizarea echipamentelor de ultimă generație pentru rezultate
                  optime.
                </li>
                <li>
                  <strong>Abordare holistică:</strong>
                  {' '}
                  Combinăm tratamentele medicale cu sfaturi de nutriție și
                  îngrijire a pielii.
                </li>
              </ul>
            </section>
            <section>
              <h2>Etapele terapiei anti-acnee</h2>
              <article>
                <h3>1. Consultația inițială</h3>
                <p>
                  Evaluarea stării pielii, identificarea tipului de acnee
                  și stabilirea planului de tratament.
                </p>
              </article>
              <article>
                <h3>2. Curățarea profesională a tenului</h3>
                <p>
                  Îndepărtarea impurităților și a punctelor negre
                  pentru a preveni inflamațiile.
                </p>
              </article>
              <article>
                <h3>3. Tratament specific</h3>
                <p>
                  Aplicarea de produse și proceduri adaptate nevoilor
                  pielii tale, precum peelinguri chimice sau
                  terapie cu lumină LED.
                </p>
              </article>
              <article>
                <h3>4. Monitorizare și ajustare</h3>
                <p>
                  Urmărirea progresului și ajustarea tratamentului pentru
                  a asigura cele mai bune rezultate.
                </p>
              </article>
            </section>
            <section>
              <h2>Rezultate vizibile și de durată</h2>
              <p>
                Pacienții noștri observă îmbunătățiri semnificative ale aspectului
                pielii după doar câteva ședințe.
                Reducerea inflamațiilor, diminuarea cicatricilor și un ten mai
                luminos sunt doar câteva dintre
                beneficiile terapiei noastre.
              </p>
            </section>
            <section>
              <h2>Testimoniale ale pacienților</h2>
              <ul>
                <li>
                  După ani de încercări, am găsit în sfârșit un tratament care
                  funcționează. Mulțumesc echipei
                  Meddera! - Andreea, 25 ani
                </li>
                <li>
                  Profesionalism și rezultate excelente. Recomand cu
                  încredere! - Mihai, 30 ani
                </li>
                <li>
                  Tenul meu nu a arătat niciodată mai bine. Terapia anti-acnee de la
                  Meddera a fost salvarea mea. -
                  Elena, 22 ani
                </li>
              </ul>
            </section>
            <section>
              <h2>Programează-te acum</h2>
              <p>
                Nu mai aștepta! Fă primul pas către un ten sănătos și curat. Contactează-ne la
                <a
                  href="tel:+37368550030"
                >
                  +373 685 500 30
                </a>
                {' '}
                sau vizitează-ne la adresa: Bălți, Ștefan cel Mare, 13.
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

export default ServicePage8Ro;
