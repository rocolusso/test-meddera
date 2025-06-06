import React from 'react';
// import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import mezolica from '@/../public/assets/img/services/mezolica.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe/ro',
  },
  title: 'Mezoterapie Facială în Bălți | Rejuvenare și Hidratare Profesională',
  description: 'Descoperă mezoterapia facială în Bălți pentru o piele hidratată și întinerită. Programează-te acum pentru un tratament profesional de rejuvenare facială.',
  openGraph: {
    title: 'Mezoterapie Facială în Bălți | Rejuvenare și Hidratare Profesională',
    description: 'Descoperă mezoterapia facială în Bălți pentru o piele hidratată și întinerită. Programează-te acum pentru un tratament profesional de rejuvenare facială.',

    url: 'https://meddera.md/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe/ro',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/mezolica.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mezoterapie Facială în Bălți | Rejuvenare și Hidratare Profesională',
    description: 'Descoperă mezoterapia facială în Bălți pentru o piele hidratată și întinerită. Programează-te acum pentru un tratament profesional de rejuvenare facială.',

    images: ['https://meddera.md/assets/img/services/mezolica.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage11Ro() {
  return (
    <>
      {/* <IpChecker /> */}
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Mezoterapia facială</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={mezolica}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Mezoterapia facială este o procedură cosmetică prin care se introduc
              în straturile adânci ale
              pielii cocktailuri de vitamine, aminoacizi, acid hialuronic și alte
              substanțe active cu ajutorul
              unor ace foarte fine. Această tehnică ajută la rezolvarea multor probleme, precum
              uscăciunea,
              culoarea ternă a tenului, pierderea elasticității, ridurile și
              pigmentația. Mezoterapia
              stimulează procesele metabolice, îmbunătățește microcirculația și hidratarea pielii,
              restabilește structura și tonusul acesteia. Procedura nu necesită o perioadă lungă de
              recuperare, iar rezultatele se observă după câteva ședințe, oferind pielii un aspect
              proaspăt și
              strălucitor. Mezoterapia este potrivită pentru toate tipurile de
              piele și este eficientă
              pentru
              reîntinerire și îmbunătățirea aspectului exterior.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <h1>Mezoterapie Facială în Bălți – Rejuvenare și Hidratare Profesională</h1>
              <p>
                Redescoperă frumusețea naturală a tenului tău cu ajutorul
                mezoterapiei faciale oferite de specialiștii
                noștri în Bălți.
              </p>
            </section>
            <section>
              <h2>Ce Este Mezoterapia Facială?</h2>
              <p>
                Mezoterapia facială este o procedură non-invazivă care
                implică injectarea de substanțe active precum
                acid hialuronic, vitamine și antioxidanți direct în stratul
                mediu al pielii. Acest tratament stimulează
                regenerarea celulară, hidratarea profundă și îmbunătățirea
                elasticității pielii.
              </p>
            </section>
            <section>
              <h2>Beneficiile Mezoterapiei Faciale</h2>
              <ul>
                <li>Hidratare intensă și revitalizare a tenului</li>
                <li>Reducerea ridurilor fine și a liniilor de expresie</li>
                <li>Îmbunătățirea texturii și tonusului pielii</li>
                <li>Estomparea petelor pigmentare și a cearcănelor</li>
                <li>Stimularea producției de colagen și elastină</li>
              </ul>
            </section>
            <section>
              <h2>De Ce Să Alegi Mezoterapia Facială la Clinica Noastră din Bălți?</h2>
              <p>
                Clinica noastră din Bălți oferă servicii de mezoterapie facială
                realizate de specialiști cu experiență,
                utilizând echipamente moderne și substanțe de cea mai înaltă calitate.
                Ne dedicăm fiecărui pacient,
                asigurând un tratament personalizat și rezultate vizibile.
              </p>
            </section>
            <section>
              <h2>Procedura de Mezoterapie Facială – Ce Implică?</h2>
              <p>
                Tratamentul începe cu o evaluare detaliată a tenului, urmată de aplicarea
                unei creme anestezice pentru
                confortul pacientului. Substanțele active sunt apoi injectate cu ajutorul
                unor microace fine. Procedura
                durează aproximativ 30-45 de minute, iar rezultatele sunt vizibile
                după câteva ședințe.
              </p>
            </section>
            <section>
              <h2>Întrebări Frecvente</h2>
              <article>
                <h3>Câte ședințe sunt necesare pentru rezultate optime?</h3>
                <p>
                  Se recomandă un protocol de 4-6 ședințe, la intervale de 2-4
                  săptămâni, pentru a obține rezultate
                  durabile și vizibile.
                </p>
              </article>
              <article>
                <h3>Există efecte secundare?</h3>
                <p>
                  După procedură, pot apărea ușoare roșeață sau umflături, care
                  dispar în câteva ore. Este important să
                  urmezi recomandările specialistului pentru îngrijirea post-tratament.
                </p>
              </article>
              <article>
                <h3>Cât durează efectele mezoterapiei?</h3>
                <p>
                  Rezultatele pot dura între 6 și 12 luni, în funcție de tipul de
                  piele și stilul de viață al
                  pacientului. Ședințele de întreținere sunt recomandate pentru
                  menținerea efectelor.
                </p>
              </article>
            </section>
            <section>
              <h2>Programează-te Acum pentru Mezoterapie Facială în Bălți</h2>
              <p>
                Nu mai aștepta pentru a-ți reda strălucirea tenului!
                Contactează-ne la
                <a href="tel:+37368550030">+37368550030</a>
                sau completează formularul de programare online pentru
                a beneficia de o consultație
                gratuită și a începe tratamentul de mezoterapie facială.
              </p>
            </section>
            <section>
              <h2>Testimoniale</h2>
              <blockquote>
                <p>
                  După câteva ședințe de mezoterapie facială,
                  tenul meu este vizibil mai luminos și hidratat. Recomand
                  cu încredere!
                </p>
                <cite>– Maria, 34 ani</cite>
              </blockquote>
              <blockquote>
                <p>
                  Profesionalism și rezultate excelente!
                  Mezoterapia facială mi-a redat încrederea în mine.
                </p>
                <cite>– Elena, 42 ani</cite>
              </blockquote>
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

export default ServicePage11Ro;
