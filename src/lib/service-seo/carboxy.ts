import type { ServiceSeo } from '@/lib/service-seo/types';

export const carboxy: ServiceSeo = {
  ru: {
    serviceName: 'Карбокситерапия',
    serviceType: 'Карбокситерапия лица',
    sections: [
      {
        h2: 'Как работает процедура',
        paragraphs: [
          'На очищенную кожу наносят гель, который насыщает её углекислым газом. Реакция кожи на него понятна: сосуды расширяются, усиливается приток крови, клетки получают больше кислорода. Поэтому кожа выглядит более свежей и тонус улучшается. Прокалывать кожу при этом не нужно.',
        ],
      },
      {
        h2: 'Для каких задач её выбирают',
        list: [
          'кожа выглядит уставшей и тусклой',
          'снизилась упругость',
          'мелкие морщины',
          'неровный тон и пигментные пятна',
          'следы после акне',
        ],
        after: ['Если вы ждёте сильного эффекта от одной процедуры, поговорите с врачом заранее: карбокситерапия действует постепенно.'],
      },
      {
        h2: 'Как проходит сеанс',
        list: [
          'врач осматривает кожу и оценивает, подходит ли процедура',
          'кожу очищают',
          'на лицо наносят специальный гель',
          'после него наносят успокаивающее средство',
        ],
        after: ['Во время процедуры можно почувствовать тепло или лёгкое покалывание. Это нормальная реакция на углекислый газ.'],
      },
      {
        h2: 'Когда её не проводят',
        list: [
          'беременность и лактация',
          'острые инфекции и воспаления кожи в зоне обработки',
          'онкологические заболевания и заболевания крови',
          'аллергия на компоненты геля',
        ],
        after: ['Полный список врач обсуждает с вами перед процедурой.'],
      },
      {
        h2: 'После сеанса',
        paragraphs: [
          'Лёгкое покраснение проходит быстро, реабилитация не нужна. Можно сразу вернуться к делам, но в первый день лучше избегать бани и сауны. Количество сеансов зависит от цели и состояния кожи, поэтому врач назначает курс индивидуально.',
        ],
      },
    ],
  },
  ro: {
    serviceName: 'Carboxiterapie',
    serviceType: 'Carboxiterapie facială',
    sections: [
      {
        h2: 'Cum funcționează procedura',
        paragraphs: [
          'Pe pielea curățată se aplică un gel care o saturează cu dioxid de carbon. Reacția pielii este firească: vasele se dilată, crește afluxul de sânge, iar celulele primesc mai mult oxigen. De aceea pielea arată mai proaspătă, iar tonusul se îmbunătățește. Pielea nu trebuie înțepată.',
        ],
      },
      {
        h2: 'Pentru ce scopuri se alege',
        list: [
          'pielea arată obosită și tulbure',
          'fermitatea a scăzut',
          'riduri fine',
          'ten neuniform și pete pigmentare',
          'urme rămase după acnee',
        ],
        after: ['Dacă așteptați un efect puternic dintr-o singură procedură, discutați cu medicul din timp: carboxiterapia acționează treptat.'],
      },
      {
        h2: 'Cum decurge ședința',
        list: [
          'medicul examinează pielea și evaluează dacă procedura se potrivește',
          'pielea se curăță',
          'pe față se aplică un gel special',
          'după el se aplică un produs calmant',
        ],
        after: ['În timpul procedurii puteți simți căldură sau o ușoară furnicătură. Este o reacție normală la dioxidul de carbon.'],
      },
      {
        h2: 'Când nu se face',
        list: [
          'sarcina și alăptarea',
          'infecții acute și inflamații ale pielii în zona tratată',
          'boli oncologice și boli ale sângelui',
          'alergie la componentele gelului',
        ],
        after: ['Lista completă o discută medicul cu dumneavoastră înainte de procedură.'],
      },
      {
        h2: 'După ședință',
        paragraphs: [
          'O ușoară roșeață dispare repede, refacerea nu este necesară. Vă puteți întoarce imediat la treburi, dar în prima zi este mai bine să evitați baia și sauna. Numărul de ședințe depinde de scop și de starea pielii, de aceea medicul stabilește cursul individual.',
        ],
      },
    ],
  },
};
