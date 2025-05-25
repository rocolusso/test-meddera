import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import lipolitiki from '@/../public/assets/img/services/lipolitiki.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/17/ro',
  },
  title: 'Lipoliză Injectabilă în Bălți – Redefinirea Siluetei',
  description: 'Elimină grăsimea localizată în Bălți cu lipoliza injectabilă – procedură non-invazivă, fără chirurgie. Programează-te acum pentru o consultație gratuită!',
  openGraph: {
    title: 'Lipoliză Injectabilă în Bălți – Redefinirea Siluetei',
    description: 'Elimină grăsimea localizată în Bălți cu lipoliza injectabilă – procedură non-invazivă, fără chirurgie. Programează-te acum pentru o consultație gratuită!',

    url: 'https://meddera.md/services/17/ro',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/lipolitiki.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lipoliză Injectabilă în Bălți – Redefinirea Siluetei',
    description: 'Elimină grăsimea localizată în Bălți cu lipoliza injectabilă – procedură non-invazivă, fără chirurgie. Programează-te acum pentru o consultație gratuită!',

    images: ['https://meddera.md/assets/img/services/lipolitiki.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage17Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={lipolitiki}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Lipolitice sunt o procedură destinată reducerii depozitelor
              localizate de grăsime
              și îmbunătățirii contururilor corpului și feței. Lipoliticii
              sunt preparate care conțin
              substanțe active ce ajută la descompunerea grăsimii și eliminarea
              acesteia din organism,
              contribuind astfel la reducerea volumelor în zonele problematice.
              Administrarea lipoliticilor
              poate fi utilizată pentru corectarea unor zone precum bărbia
              (cutele bărbiei), zona abdominală,
              coapsele, fesele și partea interioară a brațelor. Procedura nu
              necesită intervenție chirurgicală
              și permite obținerea unui efect natural și de lungă durată, fiind
              de obicei necesare mai multe
              ședințe pentru a atinge rezultatele optime. Lipoliticii contribuie
              la îmbunătățirea
              contururilor, ridicarea pielii și la uniformizarea generală a siluetei.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <h1>
                Lipoliză Injectabilă în Bălți – Soluția Modernă pentru
                Eliminarea Grăsimii Localizate
              </h1>
              <p>
                Scapă de grăsimea persistentă fără eforturi extreme.
                Alege lipoliza injectabilă – tratamentul
                non-invaziv care redefinește conturul corpului tău.
              </p>
            </section>

            <section>
              <h2>Ce Este Lipoliza Injectabilă?</h2>
              <p>
                Lipoliza injectabilă este o procedură estetică minim invazivă
                care implică injectarea unor substanțe
                lipolitice în zonele cu grăsime localizată. Aceste substanțe
                descompun celulele adipoase, facilitând
                eliminarea lor naturală prin procesele metabolice ale organismului.
              </p>
            </section>
            <section>
              <h2>Beneficiile Lipolizei Injectabile</h2>
              <ul>
                <li>
                  Eliminarea grăsimii localizate din zone precum abdomen,
                  coapse, brațe și bărbie.
                </li>
                <li>
                  Procedură non-chirurgicală, fără perioadă de recuperare
                  prelungită.
                </li>
                <li>Rezultate vizibile după câteva ședințe.</li>
                <li>Îmbunătățirea conturului corporal și a fermității pielii.</li>
              </ul>
            </section>
            <section>
              <h2>De Ce Să Alegi Clinica Noastră din Bălți?</h2>
              <article>
                <h3>Specialiști Calificați</h3>
                <p>
                  Echipa noastră este formată din medici esteticieni cu
                  experiență, specializați în proceduri de
                  lipoliză injectabilă.
                </p>
              </article>
              <article>
                <h3>Tehnologie Modernă</h3>
                <p>
                  Utilizăm echipamente de ultimă generație și substanțe
                  lipolitice certificate pentru a asigura
                  eficiența și siguranța tratamentului.
                </p>
              </article>
              <article>
                <h3>Plan Personalizat de Tratament</h3>
                <p>
                  Fiecare pacient beneficiază de o evaluare detaliată și
                  un plan de tratament adaptat nevoilor sale
                  specifice.
                </p>
              </article>
              <article>
                <h3>Consultanță Gratuită</h3>
                <p>
                  Oferim consultații gratuite pentru a discuta opțiunile
                  de tratament și a răspunde tuturor
                  întrebărilor tale.
                </p>
              </article>
            </section>
            <section>
              <h2>Întrebări Frecvente</h2>
              <article>
                <h3>Este procedura dureroasă?</h3>
                <p>
                  Disconfortul este minim, iar în majoritatea cazurilor
                  se utilizează anestezie locală pentru a asigura
                  confortul pacientului.
                </p>
              </article>
              <article>
                <h3>Câte ședințe sunt necesare?</h3>
                <p>
                  Numărul de ședințe variază în funcție de zona tratată
                  și de obiectivele pacientului, dar în general
                  sunt recomandate între 3 și 6 ședințe.
                </p>
              </article>
              <article>
                <h3>Există efecte secundare?</h3>
                <p>
                  Pot apărea ușoare umflături sau roșeață în zona tratată,
                  care dispar în câteva zile.
                </p>
              </article>
              <article>
                <h3>Cât durează rezultatele?</h3>
                <p>
                  Rezultatele sunt de durată, mai ales dacă sunt menținute
                  printr-un stil de viață sănătos și exerciții
                  fizice regulate.
                </p>
              </article>
            </section>
            <section>
              <h2>Programează-te Acum pentru o Consultație Gratuită</h2>
              <p>
                Contactează-ne la
                <a href="tel:+37368550030">+373 685 500 30</a>
                {' '}
                sau vizitează-ne la adresa: Balti, Stefan Cel Mare, 13.
                Echipa noastră te așteaptă pentru
                a-ți oferi cele mai bune soluții estetice.
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

export default ServicePage17Ro;
