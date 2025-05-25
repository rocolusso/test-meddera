import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import uvelichenieGub from '@/../public/assets/img/services/uvelicheniegub.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.meddera.md/services/13/ro',
  },
  title: 'Mărirea buzelor în Bălți - Buze voluminoase și naturale | Clinica Meddera',
  description: 'Descoperă serviciul de mărire a buzelor în Bălți cu acid hialuronic. Obține buze pline, conturate și naturale. Programează-te acum la Clinica Meddera!',
  openGraph: {
    title: 'Mărirea buzelor în Bălți - Buze voluminoase și naturale | Clinica Meddera',
    description: 'Descoperă serviciul de mărire a buzelor în Bălți cu acid hialuronic. Obține buze pline, conturate și naturale. Programează-te acum la Clinica Meddera!',

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
    title: 'Mărirea buzelor în Bălți - Buze voluminoase și naturale | Clinica Meddera',
    description: 'Descoperă serviciul de mărire a buzelor în Bălți cu acid hialuronic. Obține buze pline, conturate și naturale. Programează-te acum la Clinica Meddera!',

    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage13Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Mărirea buzelor</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={uvelichenieGub}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Mărirea buzelor este o procedură cosmetică destinată corectării
              formei și volumului buzelor,
              folosind fillere pe bază de acid hialuronic. Dermatocosmetologul
              alege cantitatea necesară
              de
              produs, ceea ce permite obținerea unui rezultat natural și armonios.
              Procedura este sigură,
              iar
              rezultatele sunt vizibile imediat după efectuarea acesteia. Procedura
              ajută la crearea unor
              contururi naturale, îmbunătățirea simetriei și hidratarea buzelor,
              precum și la eliminarea
              ridurilor din jurul acestora. Acidul hialuronic, injectat în
              țesuturile buzelor, le conferă
              volum, le face mai expresive și mai suculente.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <h1>Mărirea buzelor în Bălți - Buze voluminoase și naturale</h1>
              <p>
                Obține buze pline și seducătoare cu ajutorul acidului hialuronic
                la Clinica Meddera din Bălți.
              </p>
            </section>
            <section>
              <h2>Beneficiile măriri buzelor cu acid hialuronic</h2>
              <ul>
                <li>Volum natural și simetric al buzelor</li>
                <li>Contur definit și atractiv</li>
                <li>Hidratare și elasticitate îmbunătățite</li>
                <li>Procedură minim invazivă și sigură</li>
              </ul>
            </section>
            <section>
              <h2>Despre procedura de mărire a buzelor</h2>
              <article>
                <h3>Ce este mărirea buzelor?</h3>
                <p>
                  Mărirea buzelor este o procedură estetică ce implică
                  injectarea de acid hialuronic pentru a oferi
                  volum și formă buzelor, rezultând un aspect natural și atrăgător.
                </p>
              </article>
              <article>
                <h3>De ce să alegi Clinica Meddera din Bălți?</h3>
                <p>
                  La Clinica Meddera, folosim doar produse de calitate superioară
                  și tehnici moderne pentru a asigura
                  rezultate excelente și satisfacția pacienților noștri.
                </p>
              </article>
              <article>
                <h3>Durata și recuperarea</h3>
                <p>
                  Procedura durează aproximativ 30 de minute, iar recuperarea
                  este rapidă, cu efecte vizibile imediat
                  și minime efecte secundare.
                </p>
              </article>
              <article>
                <h3>Rezultate și durabilitate</h3>
                <p>
                  Rezultatele sunt vizibile imediat și pot dura între
                  6 și 12 luni, în funcție de metabolismul
                  individual și stilul de viață.
                </p>
              </article>
            </section>
            <section>
              <h2>Întrebări frecvente</h2>
              <p>
                <strong>Este procedura dureroasă?</strong>

                Disconfortul este minim, datorită utilizării anesteziei
                locale.
              </p>
              <p>
                <strong>Există riscuri?</strong>

                Riscurile sunt minime când procedura este realizată de specialiști
                calificați.
              </p>
              <p>
                <strong>Cât timp durează efectul?</strong>
                Efectul poate dura între 6 și 12 luni, în funcție de factori
                individuali.
              </p>
            </section>
            <section>
              <h2>De ce să alegi Clinica Meddera din Bălți?</h2>
              <ul>
                <li>Specialiști cu experiență și certificări internaționale</li>
                <li>Produse de top și tehnologie modernă</li>
                <li>Abordare personalizată pentru fiecare pacient</li>
                <li>Rezultate naturale și satisfacție garantată</li>
              </ul>
            </section>
            <section>
              <h2>Programează-te acum pentru mărirea buzelor în Bălți</h2>
              <p>
                Contactează-ne la
                <strong>+37368550030</strong>
                sau completează formularul online pentru a te programa
                la o consultație gratuită.
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

export default ServicePage13Ro;
