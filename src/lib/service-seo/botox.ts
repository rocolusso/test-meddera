import type { ServiceSeo } from '@/lib/service-seo/types';

export const botox: ServiceSeo = {
  ru: {
    serviceName: 'Ботокс',
    serviceType: 'Инъекции ботулинического токсина',
    sections: [
      {
        h2: 'Как действует ботулинический токсин',
        paragraphs: [
          'Препарат временно ослабляет сигнал от нерва к мышце, и мышца перестаёт так активно сокращаться. Морщины, которые появляются от мимики, разглаживаются, потому что кожа над расслабленной мышцей меньше собирается в складки. Результат появляется не сразу, а постепенно, и со временем мышца возвращается к прежней работе. Сроки зависят от зоны, дозы и особенностей организма.',
        ],
      },
      {
        h2: 'Какие зоны чаще всего обрабатывают',
        items: [
          {
            h3: 'Лоб и межбровье',
            text: 'Горизонтальные морщины на лбу и вертикальные складки между бровями. Здесь важно не перегрузить мышцы, иначе брови и веки выглядят тяжёлыми.',
          },
          {
            h3: 'Область вокруг глаз',
            text: 'Лучики в уголках глаз, так называемые гусиные лапки. Врач оценивает, как вы улыбаетесь, чтобы улыбка осталась живой.',
          },
          {
            h3: 'Повышенная потливость',
            text: 'Препарат применяют и при гипергидрозе, например в области подмышек или ладоней. Показания и зоны обсуждают на консультации.',
          },
        ],
      },
      {
        h2: 'Как сохранить естественную мимику',
        paragraphs: [
          'Врач выбирает точки введения и количество препарата после осмотра, с учётом того, как работают ваши мышцы. Цель в том, чтобы убрать излишнее напряжение, а лицо оставить подвижным. Если у вас есть предпочтения, например сохранить некоторую подвижность лба, скажите об этом заранее.',
        ],
      },
      {
        h2: 'Когда процедуру не проводят',
        list: [
          'беременность и лактация',
          'нервно-мышечные заболевания',
          'воспаление или инфекция в зоне введения',
          'аллергия на компоненты препарата',
          'приём лекарств, которые могут усилить действие токсина',
        ],
        after: ['Расскажите врачу обо всех заболеваниях и лекарствах, которые вы принимаете.'],
      },
      {
        h2: 'После инъекций',
        paragraphs: [
          'В день процедуры не массируйте обработанные зоны, избегайте бани, сауны и интенсивных тренировок. Небольшие бугорки и покраснение в местах уколов обычно проходят быстро. Если вам захочется повторить процедуру, когда эффект ослабнет, запишитесь на повторную консультацию, и врач заново оценит зоны и дозу.',
        ],
      },
    ],
  },
  ro: {
    serviceName: 'Botox',
    serviceType: 'Injecții cu toxină botulinică',
    sections: [
      {
        h2: 'Cum acționează toxina botulinică',
        paragraphs: [
          'Preparatul slăbește temporar semnalul de la nerv la mușchi, iar mușchiul nu se mai contractă la fel de activ. Ridurile care apar din mimică se netezesc, deoarece pielea de deasupra mușchiului relaxat se încrețește mai puțin. Rezultatul nu apare imediat, ci treptat, iar în timp mușchiul revine la activitatea de dinainte. Durata depinde de zonă, de doză și de particularitățile organismului.',
        ],
      },
      {
        h2: 'Ce zone se tratează cel mai des',
        items: [
          {
            h3: 'Fruntea și spațiul dintre sprâncene',
            text: 'Ridurile orizontale de pe frunte și cele verticale dintre sprâncene. Aici este important să nu se suprasolicite mușchii, altfel sprâncenele și pleoapele par grele.',
          },
          {
            h3: 'Zona din jurul ochilor',
            text: 'Liniile din colțurile ochilor, numite „lăbuțe de gâscă”. Medicul observă cum zâmbiți, pentru ca zâmbetul să rămână viu.',
          },
          {
            h3: 'Transpirația excesivă',
            text: 'Preparatul se folosește și în hiperhidroză, de exemplu în zona axilelor sau a palmelor. Indicațiile și zonele se discută la consultație.',
          },
        ],
      },
      {
        h2: 'Cum se păstrează mimica naturală',
        paragraphs: [
          'Medicul alege punctele de injectare și cantitatea de preparat după examinare, ținând cont de felul în care lucrează mușchii dumneavoastră. Scopul este să dispară încordarea excesivă, iar fața să rămână mobilă. Dacă aveți preferințe, de exemplu să păstrați o anumită mobilitate a frunții, spuneți din timp.',
        ],
      },
      {
        h2: 'Când procedura nu se face',
        list: [
          'sarcina și alăptarea',
          'boli neuromusculare',
          'inflamație sau infecție în zona de administrare',
          'alergie la componentele preparatului',
          'medicamente care pot amplifica acțiunea toxinei',
        ],
        after: ['Spuneți medicului despre toate bolile și medicamentele pe care le luați.'],
      },
      {
        h2: 'După injecții',
        paragraphs: [
          'În ziua procedurii nu masați zonele tratate, evitați baia, sauna și antrenamentele intense. Micile umflături și roșeața din locurile de injectare trec de obicei repede. Dacă doriți să repetați procedura când efectul slăbește, programați-vă la o consultație repetată, iar medicul va evalua din nou zonele și doza.',
        ],
      },
    ],
  },
};
