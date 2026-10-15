import type { ServiceSeo } from '@/lib/service-seo/types';

export const alginate: ServiceSeo = {
  ru: {
    serviceName: 'Альгинатная маска',
    serviceType: 'Альгинатная маска для лица',
    sections: [
      {
        h2: 'Как устроена маска',
        paragraphs: [
          'Сухой порошок смешивают с водой, и получается густая масса, которая наносится на лицо. Через некоторое время она застывает в эластичную плёнку. Под плёнкой кожа остаётся в тепле и влаге, поэтому активные вещества, которые нанесли перед маской, лучше удерживаются на ней. Снимают маску одним слоем.',
        ],
      },
      {
        h2: 'Что вы почувствуете',
        paragraphs: [
          'Сначала масса даёт приятную прохладу, затем плёнка слегка стягивает кожу. После снятия кожа выглядит свежее и ощущается увлажнённой. Эффект косметический и недолгий: маска хорошо работает как завершение ухода, а не как лечение.',
        ],
      },
      {
        h2: 'Когда маску выбирают',
        list: [
          'кожа сухая и стянутая',
          'лицо выглядит уставшим',
          'нужно успокоить кожу после чистки или пилинга',
          'перед событием хочется освежить цвет лица',
        ],
        after: ['Состав маски подбирают под тип кожи: для сухой он будет одним, для жирной другим.'],
      },
      {
        h2: 'Когда маску не делают',
        list: [
          'аллергия на водоросли или компоненты состава',
          'раны, ожоги и воспаление в области нанесения',
          'активные высыпания, которые легко раздражаются под плёнкой',
        ],
        after: ['Если у вас бывают аллергические реакции, скажите об этом до процедуры.'],
      },
      {
        h2: 'Как проходит процедура',
        list: [
          'кожу очищают и при необходимости тонизируют',
          'наносят сыворотку или другое активное средство',
          'на лицо накладывают маску',
          'после застывания её снимают',
          'завершают увлажняющим уходом',
        ],
      },
      {
        h2: 'Как часто её делать',
        paragraphs: [
          'Это зависит от состояния кожи и цели. Маска хорошо дополняет чистку, пилинг и мезотерапию, и врач подскажет, в каком порядке их лучше планировать.',
        ],
      },
    ],
  },
  ro: {
    serviceName: 'Mască alginată',
    serviceType: 'Mască alginată pentru față',
    sections: [
      {
        h2: 'Cum este alcătuită masca',
        paragraphs: [
          'Pudra uscată se amestecă cu apă și rezultă o masă densă, care se aplică pe față. După puțin timp ea se întărește într-o peliculă elastică. Sub peliculă pielea rămâne în căldură și umezeală, de aceea substanțele active aplicate înainte de mască se mențin mai bine pe piele. Masca se scoate dintr-o bucată.',
        ],
      },
      {
        h2: 'Ce veți simți',
        paragraphs: [
          'Mai întâi masa dă o răcoare plăcută, apoi pelicula strânge ușor pielea. După îndepărtare, pielea arată mai proaspătă și se simte hidratată. Efectul este cosmetic și de scurtă durată: masca funcționează bine ca final al îngrijirii, nu ca tratament.',
        ],
      },
      {
        h2: 'Când se alege masca',
        list: [
          'pielea este uscată și întinsă',
          'fața arată obosită',
          'pielea trebuie calmată după curățare sau peeling',
          'doriți să împrospătați tenul înainte de un eveniment',
        ],
        after: ['Compoziția măștii se alege după tipul pielii: pentru pielea uscată va fi una, pentru cea grasă alta.'],
      },
      {
        h2: 'Când masca nu se face',
        list: [
          'alergie la alge sau la componentele compoziției',
          'răni, arsuri și inflamație în zona de aplicare',
          'erupții active, care se irită ușor sub peliculă',
        ],
        after: ['Dacă aveți reacții alergice, spuneți înainte de procedură.'],
      },
      {
        h2: 'Cum decurge procedura',
        list: [
          'pielea se curăță și, la nevoie, se tonifiază',
          'se aplică un ser sau alt produs activ',
          'se așază masca pe față',
          'după întărire, masca se îndepărtează',
          'se încheie cu o îngrijire hidratantă',
        ],
      },
      {
        h2: 'Cât de des se face',
        paragraphs: [
          'Depinde de starea pielii și de scop. Masca completează bine curățarea, peelingul și mezoterapia, iar medicul vă spune în ce ordine este mai bine să le planificați.',
        ],
      },
    ],
  },
};
