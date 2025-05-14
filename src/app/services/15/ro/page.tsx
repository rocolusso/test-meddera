import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import biorevit from '@/../public/assets/img/services/biorevit.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

// export const metadata = {
//   icons: {
//     icon: '/favicon.ico',
//   },
//   title: 'Mărirea buzelor: Volum natural și expresivitate cu fillere cu acid hialuronic',
//   description: `Mărirea buzelor cu acid hialuronic este o procedură sigură
//                     pentru contururi naturale, îmbunătățirea simetriei și hidratarea buzelor.
//                      Rezultatele sunt vizibile imediat!`,
//   openGraph: {
//     title: 'Mărirea buzelor: Volum natural și expresivitate cu fillere cu acid hialuronic',
//     description: `Mărirea buzelor cu acid hialuronic este o procedură sigură
//                     pentru contururi naturale, îmbunătățirea simetriei și hidratarea buzelor.
//                      Rezultatele sunt vizibile imediat!`,
//     url: 'https://meddera.md/ro',
//     type: 'website',
//     images: [
//       {
//         url: '/assets/img/seo-meta/facebook-meta.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Mărirea buzelor: Volum natural și expresivitate cu fillere cu acid hialuronic',
//     description: `Mărirea buzelor cu acid hialuronic este o procedură sigură
//                     pentru contururi naturale, îmbunătățirea simetriei și hidratarea buzelor.
//                      Rezultatele sunt vizibile imediat!`,
//     images: ['/assets/img/seo-meta/twitter-meta.jpg'],
//     site: '@your_twitter_handle',
//   },
// };

function ServicePage15Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <h1 className="text-[1.5rem] sm:text-[3rem] sm:text-center">Biorevitalizarea</h1>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={biorevit}
              alt="biorevit"
              width={500}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Biorevitalizarea este o procedură cosmetologică destinată hidratării
              profunde și regenerării
              pielii prin injectarea de acid hialuronic și alte substanțe active.
              Procedura ajută la
              îmbunătățirea tonusului pielii, reducerea ridurilor fine, și
              creșterea fermității și
              elasticității acesteia. Biorevitalizarea restaurează activ echilibrul
              de apă al pielii,
              stimulează procesele metabolice și îmbunătățește microcirculația,
              ceea ce conferă pielii un
              aspect proaspăt și sănătos. Procedura nu necesită o recuperare îndelungată,
              iar rezultatele sunt
              vizibile deja după câteva sesiuni. Biorevitalizarea este potrivită
              pentru toate tipurile de
              piele și reprezintă o metodă eficientă de combatere a semnelor de
              îmbătrânire și oboseală a
              pielii.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            {/* <div */}
            {/*  style={{ fontSize: '8px' }} */}
            {/*  className="container justify-center
            mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 " */}
            {/* > */}
            {/*  <div> */}
            {/*    <h1>Mărirea buzelor</h1> */}
            {/*    <h2>Ce este mărirea buzelor?</h2> */}
            {/*    <h3>Volum natural și armonie a formei</h3> */}
            {/*    <h3>Cum funcționează acidul hialuronic?</h3> */}
            {/*    <h2>Avantajele procedurii</h2> */}
            {/*    <h3>Corecția formei și eliminarea ridurilor</h3> */}
            {/*    <h3>Simetrie și hidratarea buzelor</h3> */}
            {/*  </div> */}

            {/*  <div> */}
            {/*    <h2>De ce este sigură?</h2> */}
            {/*    <h3>Rezultat instantaneu, fără riscuri</h3> */}
            {/*    <h3>Abordare profesională a medicului dermatocosmetolog</h3> */}
            {/*  </div> */}

            {/* </div> */}
          </div>
        </VisuallyHidden>

      </main>

      <ContactsDynamicWrapperRo />

      <ServicesNew locale="ro" />

      <FooterNew locale="ro" />

    </>
  );
}

export default ServicePage15Ro;
