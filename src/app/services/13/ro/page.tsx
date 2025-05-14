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
  title: 'Mărirea buzelor: Volum natural și expresivitate cu fillere cu acid hialuronic',
  description: `Mărirea buzelor cu acid hialuronic este o procedură sigură
                    pentru contururi naturale, îmbunătățirea simetriei și hidratarea buzelor.
                     Rezultatele sunt vizibile imediat!`,
  openGraph: {
    title: 'Mărirea buzelor: Volum natural și expresivitate cu fillere cu acid hialuronic',
    description: `Mărirea buzelor cu acid hialuronic este o procedură sigură
                    pentru contururi naturale, îmbunătățirea simetriei și hidratarea buzelor.
                     Rezultatele sunt vizibile imediat!`,
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
    title: 'Mărirea buzelor: Volum natural și expresivitate cu fillere cu acid hialuronic',
    description: `Mărirea buzelor cu acid hialuronic este o procedură sigură
                    pentru contururi naturale, îmbunătățirea simetriei și hidratarea buzelor.
                     Rezultatele sunt vizibile imediat!`,
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
            <div
              style={{ fontSize: '8px' }}
              className="container justify-center mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 "
            >
              <div>
                <h1>Mărirea buzelor</h1>
                <h2>Ce este mărirea buzelor?</h2>
                <h3>Volum natural și armonie a formei</h3>
                <h3>Cum funcționează acidul hialuronic?</h3>
                <h2>Avantajele procedurii</h2>
                <h3>Corecția formei și eliminarea ridurilor</h3>
                <h3>Simetrie și hidratarea buzelor</h3>
              </div>

              <div>
                <h2>De ce este sigură?</h2>
                <h3>Rezultat instantaneu, fără riscuri</h3>
                <h3>Abordare profesională a medicului dermatocosmetolog</h3>
              </div>

            </div>
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
