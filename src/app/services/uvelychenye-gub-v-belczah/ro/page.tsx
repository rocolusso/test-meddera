// import React from 'react';
// // import IpChecker from '@/components/new-ui/IpChecker';
// import HeaderNew from '@/components/new-ui/HeaderNew';
// import ServicesNew from '@/components/new-ui/ServicesNew';
// import { VisuallyHidden } from '@/components/Visually-hidden';
// import FooterNew from '@/components/new-ui/FooterNew';
// import Image from 'next/image';
// import uvelichenieGub from '@/../public/assets/img/services/uvelicheniegub.png';
// import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';
//
// export const metadata = {
//   icons: {
//     icon: '/favicon.ico',
//   },
//   alternates: {
//     canonical: 'https://meddera.md/services/uvelychenye-gub-v-belczah/ro',
//   },
//   title: 'Mărire buze Bălți – Aspect natural | Meddera',
//   description: 'Descoperă serviciul de mărire a buzelor în Bălți cu acid hialuronic. Obține buze pline, conturate și naturale. Programează-te acum la Clinica Meddera!',
//   openGraph: {
//     title: 'Mărire buze Bălți – Aspect natural | Meddera',
//     description: 'Descoperă serviciul de mărire a buzelor în Bălți cu acid hialuronic. Obține buze pline, conturate și naturale. Programează-te acum la Clinica Meddera!',
//
//     url: 'https://meddera.md/services/uvelychenye-gub-v-belczah/ro',
//     type: 'website',
//     images: [
//       {
//         url: 'https://meddera.md/assets/img/services/uvelicheniegub.png',
//         width: 1200,
//         height: 630,
//         alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Mărire buze Bălți – Aspect natural | Meddera',
//     description: 'Descoperă serviciul de mărire a buzelor în Bălți cu acid hialuronic. Obține buze pline, conturate și naturale. Programează-te acum la Clinica Meddera!',
//
//     images: ['https://meddera.md/assets/img/services/uvelicheniegub.png'],
//     site: '@your_twitter_handle',
//   },
// };
//
// function ServicePage13Ro() {
//   return (
//     <>
//       {/* <IpChecker /> */}
//       <HeaderNew locale="ro" />
//
//       <main>
//
//         <div className="container mx-auto">
//           <div className="py-10 px-5">
//             <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Mărirea buzelor</p>
//           </div>
//           <div className="flex justify-center">
//             <Image
//               className="hover:scale-110 duration-500"
//               src={uvelichenieGub}
//               alt="biorevit"
//               width={600}
//               height={500}
//               priority
//             />
//           </div>
//           <div>
//             <p className="max-w-[1000px] mx-auto py-10 px-5">
//               Mărirea buzelor este o procedură cosmetică destinată corectării
//               formei și volumului buzelor,
//               folosind fillere pe bază de acid hialuronic. Dermatocosmetologul
//               alege cantitatea necesară
//               de
//               produs, ceea ce permite obținerea unui rezultat natural și armonios.
//               Procedura este sigură,
//               iar
//               rezultatele sunt vizibile imediat după efectuarea acesteia. Procedura
//               ajută la crearea unor
//               contururi naturale, îmbunătățirea simetriei și hidratarea buzelor,
//               precum și la eliminarea
//               ridurilor din jurul acestora. Acidul hialuronic, injectat în
//               țesuturile buzelor, le conferă
//               volum, le face mai expresive și mai suculente.
//             </p>
//           </div>
//         </div>
//
//         <VisuallyHidden>
//           <div className="seo-block bg-gray-400">
//             <section>
//               <h1>Mărirea buzelor în Bălți - Buze voluminoase și naturale</h1>
//               <p>
//                 Obține buze pline și seducătoare cu ajutorul acidului hialuronic
//                 la Clinica Meddera din Bălți.
//               </p>
//             </section>
//             <section>
//               <h2>Beneficiile măriri buzelor cu acid hialuronic</h2>
//               <ul>
//                 <li>Volum natural și simetric al buzelor</li>
//                 <li>Contur definit și atractiv</li>
//                 <li>Hidratare și elasticitate îmbunătățite</li>
//                 <li>Procedură minim invazivă și sigură</li>
//               </ul>
//             </section>
//             <section>
//               <h2>Despre procedura de mărire a buzelor</h2>
//               <article>
//                 <h3>Ce este mărirea buzelor?</h3>
//                 <p>
//                   Mărirea buzelor este o procedură estetică ce implică
//                   injectarea de acid hialuronic pentru a oferi
//                   volum și formă buzelor, rezultând un aspect natural și atrăgător.
//                 </p>
//               </article>
//               <article>
//                 <h3>De ce să alegi Clinica Meddera din Bălți?</h3>
//                 <p>
//                   La Clinica Meddera, folosim doar produse de calitate superioară
//                   și tehnici moderne pentru a asigura
//                   rezultate excelente și satisfacția pacienților noștri.
//                 </p>
//               </article>
//               <article>
//                 <h3>Durata și recuperarea</h3>
//                 <p>
//                   Procedura durează aproximativ 30 de minute, iar recuperarea
//                   este rapidă, cu efecte vizibile imediat
//                   și minime efecte secundare.
//                 </p>
//               </article>
//               <article>
//                 <h3>Rezultate și durabilitate</h3>
//                 <p>
//                   Rezultatele sunt vizibile imediat și pot dura între
//                   6 și 12 luni, în funcție de metabolismul
//                   individual și stilul de viață.
//                 </p>
//               </article>
//             </section>
//             <section>
//               <h2>Întrebări frecvente</h2>
//               <p>
//                 <strong>Este procedura dureroasă?</strong>
//
//                 Disconfortul este minim, datorită utilizării anesteziei
//                 locale.
//               </p>
//               <p>
//                 <strong>Există riscuri?</strong>
//
//                 Riscurile sunt minime când procedura este realizată de specialiști
//                 calificați.
//               </p>
//               <p>
//                 <strong>Cât timp durează efectul?</strong>
//                 Efectul poate dura între 6 și 12 luni, în funcție de factori
//                 individuali.
//               </p>
//             </section>
//             <section>
//               <h2>De ce să alegi Clinica Meddera din Bălți?</h2>
//               <ul>
//                 <li>Specialiști cu experiență și certificări internaționale</li>
//                 <li>Produse de top și tehnologie modernă</li>
//                 <li>Abordare personalizată pentru fiecare pacient</li>
//                 <li>Rezultate naturale și satisfacție garantată</li>
//               </ul>
//             </section>
//             <section>
//               <h2>Programează-te acum pentru mărirea buzelor în Bălți</h2>
//               <p>
//                 Contactează-ne la
//                 <strong>+37368550030</strong>
//                 sau completează formularul online pentru a te programa
//                 la o consultație gratuită.
//               </p>
//             </section>
//           </div>
//         </VisuallyHidden>
//
//       </main>
//
//       <ContactsDynamicWrapperRo />
//
//       <ServicesNew locale="ro" />
//
//       <FooterNew locale="ro" />
//
//     </>
//   );
// }
//
// export default ServicePage13Ro;
import React from 'react';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import uvelichenieGub from '@/../public/assets/img/services/uvelicheniegub.png';
import uvelichenieGub1 from '@/../public/assets/img/services/lips/lips1.png';
import uvelichenieGub2 from '@/../public/assets/img/services/lips/lips2.png';
import uvelichenieGub3 from '@/../public/assets/img/services/lips/lips3.png';
import uvelichenieGub4 from '@/../public/assets/img/services/lips/lips4.png';
import uvelichenieGub5 from '@/../public/assets/img/services/lips/lips5.png';
import uvelichenieGub6 from '@/../public/assets/img/services/lips/lips6.png';
import uvelichenieGub7 from '@/../public/assets/img/services/lips/lips7.png';
import uvelichenieGub8 from '@/../public/assets/img/services/lips/lips8.png';
import uvelichenieGub9 from '@/../public/assets/img/services/lips/lips9.png';
import uvelichenieGub10 from '@/../public/assets/img/services/lips/lips10.png';
import ContactsLipsDynamicRo from '@/components/ContactsLipsDynamicRo';

export const metadata = {
  icons: { icon: '/favicon.ico' },
  alternates: { canonical: 'https://meddera.md/ro/services/marire-buze-balts' },
  title: 'Mărire buze în Bălți — Proceduri eficiente și sigure',
  description: 'Mărire profesională a buzelor în Bălți. Conturare, acid hialuronic, fillere sigure. Programați-vă pentru consultație astăzi!',
  openGraph: {
    title: 'Mărire buze în Bălți — Proceduri eficiente și sigure',
    description: 'Mărire profesională a buzelor în Bălți. Conturare, acid hialuronic, fillere sigure. Programați-vă pentru consultație astăzi!',
    url: 'https://meddera.md/ro/services/marire-buze-balts',
    type: 'website',
    images: [
      { url: 'https://meddera.md/assets/img/services/uvelicheniegub.png', width: 1200, height: 630, alt: 'Ekaterina Pyntya – Dermatolog-cosmetolog în Bălți' }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mărire buze în Bălți — Proceduri eficiente și sigure',
    description: 'Mărire profesională a buzelor în Bălți. Conturare, acid hialuronic, fillere sigure.',
    images: ['https://meddera.md/assets/img/services/uvelicheniegub.png'],
    site: '@your_twitter_handle'
  }
};

function ServicePageMoneyRO() {
  return (
    <>
      <HeaderNew locale="ro" />

      <main>
        <div className="container mx-auto px-5 py-10">
          {/* H1 */}
          <h1 className="text-[1.8rem] sm:text-[3rem] mx-auto font-bold mb-8 max-w-[900px] text-center">
            Mărire buze în Bălți — sigur, frumos și natural
          </h1>

          {/* Introducere */}
          <p className="max-w-[900px] mx-auto mb-10 text-lg leading-7">
            Conturarea buzelor cu fillere certificate pe bază de acid hialuronic este o procedură modernă și sigură pentru corectarea formei, volumului și simetriei buzelor. În clinica Meddera, dermatologul cosmetolog experimentat ajustează schema procedurii pentru a obține un rezultat natural și armonios. Efectul este vizibil imediat și durează până la 12 luni.
          </p>

          {/* Imagine principală */}
          <div className="flex justify-center mb-10">
            <Image
              src={uvelichenieGub}
              alt="Mărire buze în Bălți"
              width={600}
              height={500}
              className="hover:scale-105 duration-500 rounded-lg"
              priority
            />
          </div>

          <div className="flex flex-col items-center">

            {/* Avantaje */}
            <h2 className="text-2xl font-semibold mb-5">Avantajele procedurii la Meddera</h2>
            <ul className="list-disc ml-6 mb-10">
              <li>Dermatolog-cosmetolog experimentat cu educație medicală</li>
              <li>Fillere certificate de înaltă calitate</li>
              <li>Alegerea individuală a volumului și formei buzelor</li>
              <li>Echipament modern și condiții sterile</li>
              <li>Rezultat natural cu efect imediat</li>
            </ul>

            {/* Cum decurge procedura */}
            <h2 className="text-2xl font-semibold mb-5">Cum decurge procedura de mărire a buzelor</h2>
            <ol className="list-decimal ml-6 mb-10 space-y-3">
              <li>Consultație cu medicul, evaluarea formei buzelor și alegerea filler-ului</li>
              <li>Curățarea pielii și aplicarea cremei anestezice</li>
              <li>Injectarea filler-ului cu canule sau ace fine</li>
              <li>Corectarea formei, eliminarea asimetriei și modelarea conturului</li>
              <li>Recomandări pentru îngrijire după procedură</li>
            </ol>

            {/* Galerie foto */}
            <h2 className="text-2xl font-semibold mb-5">Rezultatele procedurii — foto înainte și după</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-5 mb-10">
              <Image src={uvelichenieGub1} alt="Foto înainte și după buze 1" width={600} height={400} className="rounded-lg shadow-lg" />
              <Image src={uvelichenieGub2} alt="Foto înainte și după buze 2" width={600} height={400} className="rounded-lg shadow-lg" />
              <Image src={uvelichenieGub3} alt="Foto înainte și după buze 3" width={600} height={400} className="rounded-lg shadow-lg" />
              <Image src={uvelichenieGub4} alt="Foto înainte și după buze 4" width={600} height={400} className="rounded-lg shadow-lg" />
              <Image src={uvelichenieGub5} alt="Foto înainte și după buze 5" width={600} height={400} className="rounded-lg shadow-lg" />
              <Image src={uvelichenieGub6} alt="Foto înainte și după buze 6" width={600} height={400} className="rounded-lg shadow-lg" />
              <Image src={uvelichenieGub7} alt="Foto înainte și după buze 7" width={600} height={400} className="rounded-lg shadow-lg" />
              <Image src={uvelichenieGub8} alt="Foto înainte și după buze 8" width={600} height={400} className="rounded-lg shadow-lg" />
              <Image src={uvelichenieGub9} alt="Foto înainte și după buze 9" width={600} height={400} className="rounded-lg shadow-lg" />
              <Image src={uvelichenieGub10} alt="Foto înainte și după buze 10" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>

            {/* Contraindicații */}
            <h2 className="text-2xl font-semibold mb-5">Contraindicații</h2>
            <ul className="list-disc ml-6 mb-10">
              <li>Sarcină și alăptare</li>
              <li>Procese inflamatorii în zona buzelor</li>
              <li>Reacții alergice la componentele filler-ului</li>
              <li>Unele boli cronice — conform recomandării medicului</li>
            </ul>

            {/* De ce Meddera */}
            <h2 className="text-2xl font-semibold mb-5">De ce să alegi Meddera pentru mărirea buzelor</h2>
            <ul className="list-disc ml-6 mb-10">
              <li>Ekaterina Pyntya — medic dermatolog-cosmetolog certificat, cu peste 10 ani experiență</li>
              <li>Peste 500 de clienți mulțumiți cu rezultate naturale</li>
              <li>Produse certificate, sigure pentru sănătate</li>
              <li>Sistem flexibil de programare și consultații online</li>
            </ul>

            {/* FAQ */}
            <h2 className="text-2xl font-semibold mb-5">Întrebări frecvente</h2>
            <ul className="list-disc ml-6 mb-10">
              <li>
                <strong>Cât durează efectul?</strong>
                {' '}
                În general 6-12 luni, în funcție de particularitățile individuale.
              </li>
              <li>
                <strong>Este dureroasă procedura?</strong>
                {' '}
                Practic nedureroasă datorită anesteziei locale.
              </li>
              <li>
                <strong>Se poate repeta procedura?</strong>
                {' '}
                Da, dacă este necesar și cu acordul medicului.
              </li>
              <li>
                <strong>Cum să mă pregătesc?</strong>
                {' '}
                Evitați alcoolul și medicamentele care subțiază sângele cu 2-3 zile înainte.
              </li>
              <li>
                <strong>Ce tip de fillere se folosesc?</strong>
                {' '}
                Fillere certificate pe bază de acid hialuronic.
              </li>
            </ul>

          </div>

          {/* CTA */}
          <div className="bg-pink-50 p-6 rounded-lg text-center mb-10">
            <p className="mb-4 font-semibold text-lg">Gata să îți evidențiezi frumusețea?</p>
            <p className="mb-4">Contactează-ne telefonic sau programează o consultație online.</p>
          </div>
        </div>

        <ContactsLipsDynamicRo/>
        <ServicesNew locale="ro" />
        <FooterNew locale="ro" />

        <script
          type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': [
                { '@type': 'Question', 'name': 'Cât durează efectul?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'În general 6-12 luni, în funcție de particularitățile individuale.' } },
                { '@type': 'Question', 'name': 'Este dureroasă procedura?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Practic nedureroasă datorită anesteziei locale.' } },
                { '@type': 'Question', 'name': 'Se poate repeta procedura?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Da, dacă este necesar și cu acordul medicului.' } },
                { '@type': 'Question', 'name': 'Cum să mă pregătesc?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Evitați alcoolul și medicamentele care subțiază sângele cu 2-3 zile înainte.' } },
                { '@type': 'Question', 'name': 'Ce tip de fillere se folosesc?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Fillere certificate pe bază de acid hialuronic.' } }
              ]
            })
          }}
        />
      </main>
    </>
  );
}

export default ServicePageMoneyRO;
