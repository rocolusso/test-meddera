import type { HubContent } from './types';

const FILLERS = 'konturnaya-plastyka-fylleramy-v-belczah';
const BOTOX = 'botoks-v-belczah-effektyvnoe-omolozhenye-lycza';

export const fillersHub: HubContent = {
  clusterId: 'fillers',
  hubId: 'fillers-hub',
  ru: {
    crumb: 'Контурная пластика филлерами — гид',
    h1: 'Контурная пластика филлерами в Бельцах: гид по процедуре',
    intro: [
      'Филлеры работают с формой: гель на основе гиалуроновой кислоты вводят в нужную зону, чтобы восполнить объём или подчеркнуть контур. Поэтому при выборе процедуры учитывают показания, плотность геля, глубину введения и анатомию лица. На этой странице собраны разборы по препаратам, зонам, рискам и сочетаниям с другими методами.',
    ],
    sections: [
      {
        h2: 'Кому подходит процедура',
        paragraphs: [
          'К контурной пластике обращаются при потере объёма в области скул, выраженных носогубных складках или желании подкорректировать пропорции подбородка. Подходит ли это вам, решает врач по осмотру, иногда предлагая другой метод.',
        ],
      },
      {
        h2: 'Как подбирают гель',
        paragraphs: [
          'Для разных зон берут препараты разной плотности: плотные хорошо поддерживают форму скул и подбородка, мягкие подходят для тонкой кожи и подвижной мимики. Врач учитывает также глубину введения и вашу мимику. О видах геля и производителях читайте в статье [[fillery-vidy-sostav-proizvoditeli|о видах, составе и производителях]].',
        ],
      },
      {
        h2: 'Как проходит приём',
        paragraphs: [
          'Врач осматривает лицо в покое и в движении, обсуждает пожелания и размечает точки. Гель вводят тонкой иглой или канюлей, обычно с обезболиванием. При необходимости препарат сразу распределяют руками, а детали зависят от зоны и выбранного геля. В конце врач показывает результат в зеркале, и вы вместе решаете, всё ли вас устраивает.',
        ],
      },
      {
        h2: 'Зоны лица',
        paragraphs: [
          'Скулы и подбородок задают каркас лица и обычно требуют более плотного геля, а носогубные складки чаще корректируют мягким. Одной и той же зоне у разных людей нужен разный объём, и это врач оценивает на осмотре. Подробнее: [[konturnaya-plastika-skul-podborodka|скулы и подбородок]] и [[konturnaya-plastika-nososgubnye-skladki|носогубные складки]]. Губам посвящена отдельная рубрика: [[lip-augmentation-hub|увеличение губ]].',
        ],
      },
      {
        h2: 'Как добиваются естественного вида',
        paragraphs: [
          'Врач оценивает пропорции лица целиком, потому что лишний объём в одной зоне меняет восприятие остальных черт. Он же может предложить начать с малого и добавить на следующем визите, если это понадобится.',
        ],
      },
      {
        h2: 'От чего зависит длительность результата',
        paragraphs: [
          'Сколько держится результат, зависит от препарата, зоны, обмена веществ и мимики, поэтому общих сроков для всех нет. Ориентиры вам даст врач на консультации.',
        ],
      },
      {
        h2: 'После процедуры',
        paragraphs: [
          'В первые дни возможны отёк, покраснение и небольшие синяки. Врач объяснит, как ухаживать за кожей и чего избегать в этот период, а на контрольном визите оценит результат и решит, нужна ли коррекция.',
        ],
      },
      {
        h2: 'Риски и сочетания',
        paragraphs: [
          `К возможным нежелательным реакциям относятся отёк, синяки, уплотнения и асимметрия, а в редких случаях сосудистые осложнения. Поэтому важны опыт врача и техника введения. Что считать нормой и когда сразу связаться с клиникой, рассказано в статье [[konturnaya-plastika-oslozhneniya|об осложнениях]]. Филлеры часто сочетают с [[svc:${BOTOX}|ботулотоксином]] или биоревитализацией, порядок процедур определяет врач, а о сочетаниях читайте в статье [[konturnaya-plastika-kombinaciya-procedur|о комбинациях]].`,
        ],
      },
      {
        h2: 'Что спросить на консультации',
        paragraphs: [
          'Уточните, какой препарат будет использован, чем он отличается от других, какой техникой вводят гель (иглой или канюлей) и что предусмотрено, если результат вас не устроит. Попросите показать разметку и объяснить, почему выбраны именно эти точки. Если вы принимаете препараты, влияющие на свёртываемость крови, скажите об этом заранее: от этого зависит риск синяков. Ответы помогают принять решение без спешки.',
        ],
      },
    ],
    listTitle: 'Статьи по темам',
    ctaTitle: 'Запись на консультацию',
    ctaText: `Если хотите обсудить контурную пластику очно, откройте страницу услуги [[svc:${FILLERS}|«Контурная пластика филлерами»]] и запишитесь на консультацию.`,
    eeatText:
      'Справочные материалы клиники Meddera, Бельцы. Препарат, зоны и объём определяет врач после осмотра.',
  },
  ro: {
    crumb: 'Conturarea cu filler-e — ghid',
    h1: 'Conturarea cu filler-e în Bălți: ghid despre procedură',
    intro: [
      'Filler-ele lucrează cu forma: gelul pe bază de acid hialuronic se introduce în zona dorită pentru a reface volumul sau a accentua conturul. De aceea la alegerea procedurii se iau în calcul indicațiile, densitatea gelului, adâncimea injectării și anatomia feței. Pe această pagină sunt adunate materiale despre preparate, zone, riscuri și asocierea cu alte metode.',
    ],
    sections: [
      {
        h2: 'Cui i se potrivește procedura',
        paragraphs: [
          'La conturare apelează cei care au pierdut volum în zona pomeților, au șanțuri nazolabiale accentuate sau vor să ajusteze proporțiile bărbiei. Dacă vi se potrivește, decide medicul la examinare, uneori propunând altă metodă.',
        ],
      },
      {
        h2: 'Cum se alege gelul',
        paragraphs: [
          'Pentru zone diferite se aleg preparate de densitate diferită: cele dense susțin bine forma pomeților și a bărbiei, cele moi se potrivesc pielii subțiri și mimicii active. Medicul ține cont și de adâncimea injectării. Despre tipuri de gel și producători citiți articolul [[fillery-vidy-sostav-proizvoditeli|despre tipuri, compoziție și producători]].',
        ],
      },
      {
        h2: 'Cum decurge ședința',
        paragraphs: [
          'Medicul examinează fața în repaus și în mișcare, discută dorințele și marchează punctele. Gelul se introduce cu un ac subțire sau cu o canulă, de obicei cu anestezie. La nevoie preparatul se distribuie imediat cu mâna, iar detaliile depind de zonă și de gelul ales.',
        ],
      },
      {
        h2: 'Zonele feței',
        paragraphs: [
          'Pomeții și bărbia dau structura feței și cer, de regulă, un gel mai dens, iar șanțurile nazolabiale se corectează mai des cu unul moale. Aceeași zonă poate avea nevoie de volum diferit la persoane diferite, iar medicul apreciază asta la examinare. Detalii: [[konturnaya-plastika-skul-podborodka|pomeți și bărbie]] și [[konturnaya-plastika-nososgubnye-skladki|șanțuri nazolabiale]]. Pentru buze există o rubrică separată: [[lip-augmentation-hub|mărirea buzelor]].',
        ],
      },
      {
        h2: 'Cum se obține un aspect natural',
        paragraphs: [
          'Medicul evaluează proporțiile feței în ansamblu, deoarece un volum în plus într-o zonă schimbă percepția celorlalte trăsături. Tot el poate propune să începeți cu puțin și să adăugați la vizita următoare, dacă va fi nevoie.',
        ],
      },
      {
        h2: 'De ce depinde durata rezultatului',
        paragraphs: [
          'Cât ține rezultatul depinde de preparat, de zonă, de metabolism și de mimică, de aceea nu există termene valabile pentru toți. Repere vă dă medicul la consultație.',
        ],
      },
      {
        h2: 'După procedură',
        paragraphs: [
          'În primele zile sunt posibile edem, roșeață și vânătăi mici. Medicul explică cum îngrijiți pielea și ce evitați în această perioadă, iar la vizita de control apreciază rezultatul și decide dacă e nevoie de corecție.',
        ],
      },
      {
        h2: 'Riscuri și asocieri',
        paragraphs: [
          `Reacțiile nedorite posibile sunt edemul, vânătăile, indurațiile și asimetria, iar în cazuri rare complicațiile vasculare. De aceea contează experiența medicului și tehnica de injectare. Ce este normal și când contactați imediat clinica aflați din articolul [[konturnaya-plastika-oslozhneniya|despre complicații]]. Filler-ele se asociază adesea cu [[svc:${BOTOX}|toxina botulinică]] sau cu biorevitalizarea, ordinea procedurilor o stabilește medicul, iar despre asocieri citiți în articolul [[konturnaya-plastika-kombinaciya-procedur|despre combinații]].`,
        ],
      },
      {
        h2: 'Ce întrebați la consultație',
        paragraphs: [
          'Aflați ce preparat va fi folosit, prin ce diferă de altele, cu ce tehnică se injectează gelul (ac sau canulă) și ce este prevăzut dacă rezultatul nu vă mulțumește. Cereți să vi se arate marcajul și să vi se explice de ce au fost alese anume aceste puncte. Dacă luați medicamente care influențează coagularea sângelui, spuneți din timp: de ele depinde riscul de vânătăi. Răspunsurile ajută să decideți fără grabă.',
        ],
      },
    ],
    listTitle: 'Articole pe teme',
    ctaTitle: 'Programare pentru consultație',
    ctaText: `Dacă vreți să discutați conturarea la cabinet, deschideți pagina serviciului [[svc:${FILLERS}|„Conturarea cu filler-e”]] și programați-vă la consultație.`,
    eeatText:
      'Materiale informative ale clinicii Meddera din Bălți. Preparatul, zonele și volumul le stabilește medicul după examinare.',
  },
  groups: [
    {
      ids: ['konturnaya-plastika-beltsy-chto-eto', 'fillery-vidy-sostav-proizvoditeli'],
      ru: { h3: 'Препараты', intro: 'Что такое процедура и чем различаются гели.' },
      ro: { h3: 'Preparate', intro: 'Ce este procedura și cum se deosebesc gelurile.' },
    },
    {
      ids: ['konturnaya-plastika-skul-podborodka', 'konturnaya-plastika-nososgubnye-skladki'],
      ru: { h3: 'Зоны', intro: 'Где применяют и что учитывают.' },
      ro: { h3: 'Zone', intro: 'Unde se aplică și ce se ia în calcul.' },
    },
    {
      ids: ['konturnaya-plastika-oslozhneniya', 'konturnaya-plastika-kombinaciya-procedur'],
      ru: { h3: 'Риски и сочетания' },
      ro: { h3: 'Riscuri și asocieri' },
    },
  ],
  services: [
    { slug: FILLERS, ru: 'Услуга «Контурная пластика филлерами»', ro: 'Serviciul „Conturarea cu filler-e”' },
    { slug: 'konsultaczyya-dermatokosmetologa-v-belczah', ru: 'Консультация дерматокосметолога', ro: 'Consultația dermatocosmetologului' },
  ],
};
