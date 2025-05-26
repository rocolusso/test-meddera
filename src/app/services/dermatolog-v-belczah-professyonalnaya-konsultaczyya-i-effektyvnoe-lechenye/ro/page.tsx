import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import consultderm from '@/../public/assets/img/services/consult-derm.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye/ro',
  },
  title: 'Consultație Dermatologică în Bălți | Clinica Meddera',
  description: 'Programează o consultație dermatologică la Clinica Meddera din Bălți. Tratăm acnee, psoriazis, eczeme și alte afecțiuni ale pielii.',
  openGraph: {
    title: 'Consultație Dermatologică în Bălți | Clinica Meddera',
    description: 'Programează o consultație dermatologică la Clinica Meddera din Bălți. Tratăm acnee, psoriazis, eczeme și alte afecțiuni ale pielii.',
    url: 'https://meddera.md/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye/ro',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/consult-derm.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consultație Dermatologică în Bălți | Clinica Meddera',
    description: 'Programează o consultație dermatologică la Clinica Meddera din Bălți. Tratăm acnee, psoriazis, eczeme și alte afecțiuni ale pielii.',
    images: ['https://meddera.md/assets/img/services/consult-derm.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage2Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center bold">
              Consultația dermatologică
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              className=""
              src={consultderm}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Consultația dermatologică este o vizită specializată la medicul dermatolog,
              în cadrul căreia
              se
              realizează o evaluare completă a stării pielii. În timpul consultației,
              medicul analizează
              simptomele care îl îngrijorează pe pacient, identifică posibilele cauze
              ale afecțiunilor
              cutanate și elaborează un plan de tratament individualizat. Dermatologul
              poate recomanda
              analize
              necesare și investigații instrumentale pentru un diagnostic precis.
              Consultația include
              recomandări pentru îngrijirea pielii și stilul de viață, care ajută
              la prevenirea
              dezvoltării
              afecțiunilor cutanate. Abordarea profesională permite depistarea și
              tratarea la timp a unor
              probleme precum eczema, psoriazisul, acneea, infecțiile fungice și
              reacțiile alergice,
              menținând
              sănătatea pielii pe termen lung.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">

            <section>
              <h1>Consultație Dermatologică Profesională în Bălți</h1>
              <p>Clinica Meddera - Îngrijire Dermatologică de Încredere</p>
            </section>

            <section>
              <h2>Servicii Dermatologice Oferite</h2>
              <ul>
                <li>Diagnosticul și tratamentul acneei</li>
                <li>Gestionarea psoriazisului și eczemelor</li>
                <li>Înlăturarea alunițelor și verucilor</li>
                <li>Tratamente pentru dermatită atopică și seboreică</li>
                <li>Consultații pentru afecțiuni ale unghiilor și părului</li>
              </ul>
            </section>
            <section>
              <h2>De Ce Să Alegi Clinica Meddera?</h2>
              <article>
                <h3>Experiență și Profesionalism</h3>
                <p>
                  Medicii noștri dermatologi au o vastă experiență în diagnosticarea
                  și tratarea diverselor afecțiuni
                  ale pielii.
                </p>
              </article>
              <article>
                <h3>Tehnologie Modernă</h3>
                <p>
                  Utilizăm echipamente de ultimă generație pentru a asigura un
                  diagnostic precis și tratamente
                  eficiente.
                </p>
              </article>
              <article>
                <h3>Abordare Personalizată</h3>
                <p>
                  Fiecare pacient beneficiază de un plan de tratament
                  adaptat nevoilor sale specifice.
                </p>
              </article>
              <article>
                <h3>Programări Flexibile</h3>
                <p>
                  Oferim programări rapide și flexibile pentru a se
                  potrivi programului tău.
                </p>
              </article>
            </section>
            <section>
              <h2>Simptome Comune Care Necesită Consultație Dermatologică</h2>
              <p>
                Dacă te confrunți cu oricare dintre următoarele simptome,
                este recomandat să consulți un
                dermatolog:
              </p>
              <ul>
                <li>Erupții cutanate sau mâncărimi persistente</li>
                <li>Leziuni sau pete neobișnuite pe piele</li>
                <li>Acnee severă sau recurentă</li>
                <li>Modificări ale alunițelor existente</li>
                <li>Uscăciune excesivă sau descuamare a pielii</li>
              </ul>
            </section>
            <section>
              <h2>Tratamente Disponibile</h2>
              <ul>
                <li>Tratament medicamentos pentru diverse afecțiuni dermatologice</li>
                <li>Proceduri minim invazive pentru îndepărtarea leziunilor cutanate</li>
                <li>Consiliere pentru îngrijirea pielii și prevenirea recidivelor</li>
                <li>Tratamente cosmetice pentru rejuvenarea pielii</li>
              </ul>
            </section>
            <section>
              <h2>Informații Despre Medici</h2>
              <p>
                La Clinica Meddera, echipa noastră de dermatologi este formată
                din specialiști cu o pregătire excelentă
                și o abordare empatică față de pacienți.
              </p>
            </section>
            <section>
              <h2>Tarife Consultații</h2>
              <ul>
                <li>Consultație inițială: 350 MDL</li>
                <li>Consultație de control: 300 MDL</li>
                <li>
                  Proceduri dermatologice: prețuri variabile
                  în funcție de complexitate
                </li>
              </ul>
            </section>
            <section>
              <h2>Programează-te Acum</h2>
              <p>
                Completează formularul de mai jos sau contactează-ne
                telefonic pentru a stabili o programare.
              </p>
              <form>

                <br />
                <input type="text" name="nume" required />
                <br />

                <br />
                <input type="tel" name="telefon" required />
                <br />

                <br />
                <textarea name="mesaj" />
                <br />
                <input value="Trimite" />
              </form>
            </section>

          </div>
        </VisuallyHidden>

        <ContactsDynamicWrapperRo />

        <ServicesNew locale="ro" />
      </main>

      <FooterNew locale="ro" />

    </>
  );
}

export default ServicePage2Ro;
