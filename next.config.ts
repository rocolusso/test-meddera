import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  generateBuildId: async () => `${Date.now()}`, // Forces new build ID on each deploy

  async redirects() {
    return [
      {
        source: '/services/1',
        destination: '/services/konsultaczyya-dermatokosmetologa-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/1/ro',
        destination: '/services/konsultaczyya-dermatokosmetologa-v-belczah/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/2',
        destination: '/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/2/ro',
        destination: '/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/3',
        destination: '/services/professyonalnaya-chystka-lycza-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/3/ro',
        destination: '/services/professyonalnaya-chystka-lycza-v-belczah/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/4',
        destination: '/services/massazh-lycza-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/4/ro',
        destination: '/services/massazh-lycza-v-belczah-professyonalnyj-uhod-za-vashej-kozhej/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/5',
        destination: '/services/karboksyterapyya-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/5/ro',
        destination: '/services/karboksyterapyya-v-belczah/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/6',
        destination: '/services/pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/6/ro',
        destination: '/services/pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/7',
        destination: '/services/algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/7/ro',
        destination: '/services/algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/8',
        destination: '/services/terapyya-anty-akne-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/8/ro',
        destination: '/services/terapyya-anty-akne-v-belczah/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/9',
        destination: '/services/terapyya-protyv-pygmentaczyy-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/9/ro',
        destination: '/services/terapyya-protyv-pygmentaczyy-v-belczah/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/10',
        destination: '/services/dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/10/ro',
        destination: '/services/dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/11',
        destination: '/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/11/ro',
        destination: '/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/12',
        destination: '/services/mezoterapyya-dlya-volos-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/12/ro',
        destination: '/services/mezoterapyya-dlya-volos-v-belczah/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/13',
        destination: '/services/uvelychenye-gub-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/13/ro',
        destination: '/services/uvelychenye-gub-v-belczah/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/14',
        destination: '/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/14/ro',
        destination: '/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/15',
        destination: '/services/byorevytalyzaczyya-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/15/ro',
        destination: '/services/byorevytalyzaczyya-v-belczah/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/16',
        destination: '/services/konturnaya-plastyka-fylleramy-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/16/ro',
        destination: '/services/konturnaya-plastyka-fylleramy-v-belczah/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/17',
        destination: '/services/ynjekczyy-lypolytykov-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/17/ro',
        destination: '/services/ynjekczyy-lypolytykov-v-belczah/ro',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
