import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import konturnayaPlastika from '@/../public/assets/img/services/konturnayaplastika.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/16/ro',
  },
  title: 'Plastia de contur în Bălți – Corectare facială cu acid hialuronic',
  description: 'Plastia de contur în Bălți: procedură estetică nechirurgicală pentru corectarea trăsăturilor faciale cu acid hialuronic. Programează-te acum pentru un chip armonios și întinerit.',
  openGraph: {
    title: 'Plastia de contur în Bălți – Corectare facială cu acid hialuronic',
    description: 'Plastia de contur în Bălți: procedură estetică nechirurgicală pentru corectarea trăsăturilor faciale cu acid hialuronic. Programează-te acum pentru un chip armonios și întinerit.',

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
    title: 'Plastia de contur în Bălți – Corectare facială cu acid hialuronic',
    description: 'Plastia de contur în Bălți: procedură estetică nechirurgicală pentru corectarea trăsăturilor faciale cu acid hialuronic. Programează-te acum pentru un chip armonios și întinerit.',

    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage16Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={konturnayaPlastika}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Plastia de contur este o procedură cosmetologică în care, cu ajutorul
              injecțiilor de
              diverse substanțe, cum ar fi acidul hialuronic, introduse în zonele
              problematice ale feței, se
              restabilesc contururile, volumul și forma. Această procedură este
              utilizată pentru corectarea
              ridurilor, îmbunătățirea conturului feței, mărirea volumului obrajilor,
              bărbiei și pentru
              mărirea buzelor. Fillerele umplu țesuturile din interior, hidratându-le
              și stimulând producția
              de colagen, ceea ce face ca pielea să fie mai fermă și mai netedă.
              Rezultatele plastiei de
              contur sunt vizibile imediat după procedură și se mențin între 6 și
              18 luni, în funcție de tipul
              de filler și de zona de injectare.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <h1>Plastia de contur în Bălți – Redefinirea frumuseții tale</h1>
              <p>
                Descoperă secretul unui chip armonios și întinerit
                cu ajutorul plasticii de contur realizate de
                specialiștii noștri în Bălți.
              </p>
            </section>
            <section>
              <h2>Ce este plastia de contur?</h2>
              <p>
                Plastia de contur este o procedură estetică nechirurgicală
                care utilizează fillere pe bază de acid
                hialuronic pentru a corecta și a redefini trăsăturile faciale.
                Este ideală pentru persoanele care doresc
                să îmbunătățească aspectul feței fără intervenții chirurgicale
                invazive.
              </p>
            </section>
            <section>
              <h2>Beneficiile plasticii de contur în Bălți</h2>
              <ul>
                <li>Corectarea ridurilor și a liniilor fine</li>
                <li>Augmentarea buzelor pentru un aspect plin și natural</li>
                <li>Conturarea pomeților și a bărbiei</li>
                <li>Redefinirea ovalului feței</li>
                <li>Îmbunătățirea simetriei faciale</li>
              </ul>
            </section>
            <section>
              <h2>De ce să alegi clinica noastră din Bălți?</h2>
              <article>
                <h3>Experiență și profesionalism</h3>
                <p>
                  Echipa noastră este formată din specialiști cu experiență
                  în domeniul esteticii faciale, asigurând
                  rezultate de calitate superioară.
                </p>
              </article>
              <article>
                <h3>Produse de înaltă calitate</h3>
                <p>
                  Utilizăm doar fillere aprobate și testate clinic,
                  garantând siguranța și eficiența procedurilor.
                </p>
              </article>
              <article>
                <h3>Abordare personalizată</h3>
                <p>
                  Fiecare pacient beneficiază de o consultație individuală
                  pentru a stabili cele mai potrivite soluții
                  estetice.
                </p>
              </article>
              <article>
                <h3>Locație convenabilă</h3>
                <p>
                  Clinica noastră este situată în centrul orașului Bălți,
                  fiind ușor accesibilă pentru toți
                  pacienții.
                </p>
              </article>
            </section>
            <section>
              <h2>Întrebări frecvente despre plastia de contur</h2>
              <article>
                <h3>Cât durează efectul procedurii?</h3>
                <p>
                  Rezultatele plasticii de contur pot dura între 6 și 12 luni,
                  în funcție de tipul de filler utilizat
                  și de caracteristicile individuale ale pacientului.
                </p>
              </article>
              <article>
                <h3>Este procedura dureroasă?</h3>
                <p>
                  Procedura este minim invazivă și se realizează cu
                  anestezie locală, disconfortul fiind minim.
                </p>
              </article>
              <article>
                <h3>Există efecte secundare?</h3>
                <p>
                  Pot apărea ușoare umflături sau vânătăi în zona tratată,
                  care dispar în câteva zile.
                </p>
              </article>
            </section>
            <section>
              <h2>Programează-te acum pentru o consultație gratuită</h2>
              <p>
                Contactează-ne pentru a stabili o consultație
                și a descoperi cum plastia de contur te poate ajuta să
                obții aspectul dorit.
              </p>
              <ul>
                <li>Telefon: +373 685 500 30</li>
                <li>Adresă: Balti, Stefan Cel Mare, 13</li>
              </ul>
            </section>
            <section>
              <h2>Testimoniale ale pacienților noștri</h2>
              <article>
                <h3>Maria, 35 ani</h3>
                <p>
                  După procedura de plastie de contur, chipul meu arată mult
                  mai tânăr și proaspăt. Recomand cu
                  încredere!
                </p>
              </article>
              <article>
                <h3>Ion, 42 ani</h3>
                <p>
                  Profesionalismul echipei și rezultatele obținute m-au
                  impresionat. Mulțumesc!
                </p>
              </article>
              <article>
                <h3>Elena, 29 ani</h3>
                <p>
                  Am avut o experiență excelentă la clinica din Bălți.
                  Rezultatele sunt peste așteptări.
                </p>
              </article>
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

export default ServicePage16Ro;
