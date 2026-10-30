import type { DeveloperLocale } from '@/lib/developer-locale';

export type DeveloperLang = DeveloperLocale;

export type ProjectCopy = {
  id: 'meddera' | 'domovenok' | 'vezu';
  host: string;
  href: string;
  /** Opens in the same tab (the clinic home page of this very site). */
  internal?: boolean;
  text: string;
  tags: string[];
};

export type DeveloperCopy = {
  htmlLang: string;
  metaTitle: string;
  metaDescription: string;
  nav: { switchLabel: string };
  hero: {
    pill: string;
    nameLines: [string, string];
    role: string;
    lead: string;
    ctaDiscuss: string;
    ctaProjects: string;
    photoAlt: string;
  };
  banner: {
    label: string;
    words: [string, string, string, string, string];
    steps: [{ name: string; note: string }, { name: string; note: string }, { name: string; note: string }];
    lead: { title: string; note: string };
    aria: string;
  };
  services: { eyebrow: string; items: { icon: string; title: string; text: string }[] };
  stack: { eyebrow: string; rows: { label: string; items: string[] }[] };
  projects: { eyebrow: string; open: string; items: ProjectCopy[] };
  form: {
    eyebrow: string;
    title: string;
    lead: string;
    name: string;
    contact: string;
    contactHint: string;
    needsLabel: string;
    needs: { id: 'new_site' | 'promotion' | 'ads' | 'support' | 'analytics'; label: string }[];
    message: string;
    submit: string;
    sending: string;
    sentTitle: string;
    sentText: string;
    errors: { generic: string; rate: string; verify: string };
  };
  footer: { languages: string };
};

const STACK_ITEMS = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'SCSS', 'Material UI', 'Redux Toolkit', 'Zustand', 'Astro'],
  backend: ['Node.js', 'Nest.js', 'GraphQL', 'PostgreSQL', 'Prisma'],
  devops: ['Ubuntu', 'Docker', 'GitLab', 'nginx', 'Prometheus', 'Grafana'],
  tools: ['Git', 'Figma', 'Cursor', 'Claude Pro'],
};

const ICONS = ['{ }', '↗', 'Δ', '>_'];

const RU: DeveloperCopy = {
  htmlLang: 'ru',
  metaTitle: 'Александр Щедров: Next.js разработчик, сайты и продвижение',
  metaDescription:
    'Fullstack React и Next.js разработчик с навыками DevOps. Создаю и поддерживаю сайты для бизнеса, настраиваю трафик и аналитику.',
  nav: { switchLabel: 'Язык страницы' },
  hero: {
    pill: '3+ года в Next.js',
    nameLines: ['Александр', 'Щедров'],
    role: 'Fullstack React / Next.js разработчик и DevOps',
    lead:
      'Делаю и поддерживаю сайты и веб-приложения для бизнеса. Забочусь о том, чтобы сайт приводил клиентов из поиска и рекламы, и показываю в аналитике, откуда они пришли.',
    ctaDiscuss: 'Обсудить проект',
    ctaProjects: 'Смотреть проекты',
    photoAlt: 'Александр Щедров',
  },
  banner: {
    label: '// что я делаю',
    words: ['Сайт', 'Поиск', 'Реклама', 'Аналитика', 'Заявки'],
    steps: [
      { name: 'Next.js', note: 'сайт' },
      { name: 'Google Ads', note: 'трафик' },
      { name: 'GA4', note: 'аналитика' },
    ],
    lead: { title: 'Новая заявка', note: 'Контакт: @username' },
    aria: 'Анимация: сайт, поиск, реклама и аналитика приводят к новой заявке',
  },
  services: {
    eyebrow: 'Чем занимаюсь',
    items: [
      {
        icon: ICONS[0],
        title: 'Сайты и веб-приложения',
        text: 'React, Next.js и TypeScript. Данные храню в PostgreSQL через Prisma, состоянием интерфейса управляю через Redux Toolkit или Zustand.',
      },
      {
        icon: ICONS[1],
        title: 'Клиенты из поиска и рекламы',
        text: 'Собираю сайт под органический и платный трафик: Google Organic Search, Google Ads, реклама в Facebook и Instagram.',
      },
      {
        icon: ICONS[2],
        title: 'Аналитика и мониторинг',
        text: 'Настраиваю GA4, Prometheus и Grafana. Вы видите, откуда приходят заявки и как работают сервисы.',
      },
      {
        icon: ICONS[3],
        title: 'Запуск и поддержка',
        text: 'Разворачиваю проекты на VPS: Ubuntu, Docker, GitLab и nginx. Есть опыт работы junior DevOps-инженером.',
      },
    ],
  },
  stack: {
    eyebrow: 'Стек',
    rows: [
      { label: 'Frontend', items: STACK_ITEMS.frontend },
      { label: 'Backend', items: STACK_ITEMS.backend },
      { label: 'DevOps', items: STACK_ITEMS.devops },
      { label: 'Трафик и аналитика', items: ['GA4', 'Google Organic', 'Google Ads', 'Facebook и Instagram Ads'] },
      { label: 'Инструменты', items: STACK_ITEMS.tools },
    ],
  },
  projects: {
    eyebrow: 'Проекты',
    open: 'Открыть сайт',
    items: [
      {
        id: 'meddera',
        host: 'meddera.md',
        href: '/',
        internal: true,
        text: 'Сайт клиники дерматолога-косметолога в Бельцах. Разработан с нуля: русский и румынский язык, SEO-разметка, GA4, заявки в Telegram, блог и отзывы Google.',
        tags: ['Next.js', 'RU / RO', 'SEO', 'GA4', 'Telegram'],
      },
      {
        id: 'domovenok',
        host: 'domovenok.md',
        href: 'https://domovenok.md',
        text: 'Сайт аниматоров для детских праздников в Бельцах. Два языка (румынский и русский), форма заявки, галерея, SEO-аудит и исправления по Ahrefs.',
        tags: ['Next.js', 'RO / RU', 'SEO', 'Ahrefs', 'VPS'],
      },
      {
        id: 'vezu',
        host: 'vezu.md',
        href: 'https://vezu.md',
        text: 'Сайт службы эвакуации в Кишинёве. Два языка, защита форм через Cloudflare Turnstile, разметка schema.org, SEO-правки по аудиту Ahrefs.',
        tags: ['Next.js', 'RU / RO', 'Turnstile', 'schema.org', 'SEO'],
      },
    ],
  },
  form: {
    eyebrow: 'Заявка',
    title: 'Нужен сайт, который приводит клиентов?',
    lead: 'Опишите задачу в паре предложений. Я прочитаю заявку и отвечу в мессенджере или по телефону.',
    name: 'Имя',
    contact: 'Телефон или мессенджер',
    contactHint: 'Номер с кодом страны, @username или ссылка',
    needsLabel: 'Что нужно',
    needs: [
      { id: 'new_site', label: 'Новый сайт' },
      { id: 'promotion', label: 'Продвижение' },
      { id: 'ads', label: 'Реклама' },
      { id: 'support', label: 'Доработка и поддержка' },
      { id: 'analytics', label: 'Аналитика' },
    ],
    message: 'Расскажите о проекте (необязательно)',
    submit: 'Отправить заявку',
    sending: 'Отправляю…',
    sentTitle: 'Заявка отправлена',
    sentText: 'Спасибо. Я свяжусь с вами по указанному контакту.',
    errors: {
      generic: 'Не удалось отправить заявку. Попробуйте ещё раз или напишите позже.',
      rate: 'Слишком много попыток. Подождите минуту и попробуйте снова.',
      verify: 'Не удалось проверить отправку. Обновите страницу и попробуйте снова.',
    },
  },
  footer: { languages: 'Языки: украинский, русский, английский B1' },
};

const UK: DeveloperCopy = {
  htmlLang: 'uk',
  metaTitle: 'Олександр Щедров: Next.js розробник, сайти та просування',
  metaDescription:
    'Fullstack React і Next.js розробник із навичками DevOps. Створюю та підтримую сайти для бізнесу, налаштовую трафік і аналітику.',
  nav: { switchLabel: 'Мова сторінки' },
  hero: {
    pill: '3+ роки в Next.js',
    nameLines: ['Олександр', 'Щедров'],
    role: 'Fullstack React / Next.js розробник і DevOps',
    lead:
      'Роблю та підтримую сайти й вебзастосунки для бізнесу. Дбаю про те, щоб сайт приводив клієнтів із пошуку та реклами, а в аналітиці було видно, звідки вони прийшли.',
    ctaDiscuss: 'Обговорити проєкт',
    ctaProjects: 'Дивитися проєкти',
    photoAlt: 'Олександр Щедров',
  },
  banner: {
    label: '// що я роблю',
    words: ['Сайт', 'Пошук', 'Реклама', 'Аналітика', 'Заявки'],
    steps: [
      { name: 'Next.js', note: 'сайт' },
      { name: 'Google Ads', note: 'трафік' },
      { name: 'GA4', note: 'аналітика' },
    ],
    lead: { title: 'Нова заявка', note: 'Контакт: @username' },
    aria: 'Анімація: сайт, пошук, реклама та аналітика ведуть до нової заявки',
  },
  services: {
    eyebrow: 'Чим займаюся',
    items: [
      {
        icon: ICONS[0],
        title: 'Сайти та вебзастосунки',
        text: 'React, Next.js і TypeScript. Дані зберігаю в PostgreSQL через Prisma, станом інтерфейсу керую через Redux Toolkit або Zustand.',
      },
      {
        icon: ICONS[1],
        title: 'Клієнти з пошуку та реклами',
        text: 'Збираю сайт під органічний і платний трафік: Google Organic Search, Google Ads, реклама у Facebook та Instagram.',
      },
      {
        icon: ICONS[2],
        title: 'Аналітика та моніторинг',
        text: 'Налаштовую GA4, Prometheus і Grafana. Ви бачите, звідки приходять заявки і як працюють сервіси.',
      },
      {
        icon: ICONS[3],
        title: 'Запуск і підтримка',
        text: 'Розгортаю проєкти на VPS: Ubuntu, Docker, GitLab і nginx. Маю досвід роботи junior DevOps-інженером.',
      },
    ],
  },
  stack: {
    eyebrow: 'Стек',
    rows: [
      { label: 'Frontend', items: STACK_ITEMS.frontend },
      { label: 'Backend', items: STACK_ITEMS.backend },
      { label: 'DevOps', items: STACK_ITEMS.devops },
      { label: 'Трафік і аналітика', items: ['GA4', 'Google Organic', 'Google Ads', 'Facebook та Instagram Ads'] },
      { label: 'Інструменти', items: STACK_ITEMS.tools },
    ],
  },
  projects: {
    eyebrow: 'Проєкти',
    open: 'Відкрити сайт',
    items: [
      {
        id: 'meddera',
        host: 'meddera.md',
        href: '/',
        internal: true,
        text: 'Сайт клініки дерматолога-косметолога в Бельцях. Розроблений з нуля: російська та румунська мови, SEO-розмітка, GA4, заявки в Telegram, блог і відгуки Google.',
        tags: ['Next.js', 'RU / RO', 'SEO', 'GA4', 'Telegram'],
      },
      {
        id: 'domovenok',
        host: 'domovenok.md',
        href: 'https://domovenok.md',
        text: 'Сайт аніматорів для дитячих свят у Бельцях. Дві мови (румунська та російська), форма заявки, галерея, SEO-аудит і виправлення за Ahrefs.',
        tags: ['Next.js', 'RO / RU', 'SEO', 'Ahrefs', 'VPS'],
      },
      {
        id: 'vezu',
        host: 'vezu.md',
        href: 'https://vezu.md',
        text: 'Сайт служби евакуації в Кишиневі. Дві мови, захист форм через Cloudflare Turnstile, розмітка schema.org, SEO-правки за аудитом Ahrefs.',
        tags: ['Next.js', 'RU / RO', 'Turnstile', 'schema.org', 'SEO'],
      },
    ],
  },
  form: {
    eyebrow: 'Заявка',
    title: 'Потрібен сайт, який приводить клієнтів?',
    lead: 'Опишіть завдання в кількох реченнях. Я прочитаю заявку і відповім у месенджері або за телефоном.',
    name: 'Ім’я',
    contact: 'Телефон або месенджер',
    contactHint: 'Номер із кодом країни, @username або посилання',
    needsLabel: 'Що потрібно',
    needs: [
      { id: 'new_site', label: 'Новий сайт' },
      { id: 'promotion', label: 'Просування' },
      { id: 'ads', label: 'Реклама' },
      { id: 'support', label: 'Доопрацювання та підтримка' },
      { id: 'analytics', label: 'Аналітика' },
    ],
    message: 'Розкажіть про проєкт (необов’язково)',
    submit: 'Надіслати заявку',
    sending: 'Надсилаю…',
    sentTitle: 'Заявку надіслано',
    sentText: 'Дякую. Я зв’яжуся з вами за вказаним контактом.',
    errors: {
      generic: 'Не вдалося надіслати заявку. Спробуйте ще раз або напишіть пізніше.',
      rate: 'Забагато спроб. Зачекайте хвилину і спробуйте знову.',
      verify: 'Не вдалося перевірити надсилання. Оновіть сторінку і спробуйте знову.',
    },
  },
  footer: { languages: 'Мови: українська, російська, англійська B1' },
};

const EN: DeveloperCopy = {
  htmlLang: 'en',
  metaTitle: 'Alexander Shchedrov: Next.js developer, websites and promotion',
  metaDescription:
    'Fullstack React and Next.js developer with DevOps skills. I build and maintain websites for business and set up traffic and analytics.',
  nav: { switchLabel: 'Page language' },
  hero: {
    pill: '3+ years in Next.js',
    nameLines: ['Alexander', 'Shchedrov'],
    role: 'Fullstack React / Next.js developer and DevOps',
    lead:
      'I build and maintain websites and web apps for business. I make sure the site brings in customers from search and ads, and I set up analytics so you can see where they came from.',
    ctaDiscuss: 'Discuss a project',
    ctaProjects: 'See projects',
    photoAlt: 'Alexander Shchedrov',
  },
  banner: {
    label: '// what I do',
    words: ['Site', 'Search', 'Ads', 'Analytics', 'Leads'],
    steps: [
      { name: 'Next.js', note: 'site' },
      { name: 'Google Ads', note: 'traffic' },
      { name: 'GA4', note: 'analytics' },
    ],
    lead: { title: 'New lead', note: 'Contact: @username' },
    aria: 'Animation: a site, search, ads and analytics lead to a new request',
  },
  services: {
    eyebrow: 'What I do',
    items: [
      {
        icon: ICONS[0],
        title: 'Websites and web apps',
        text: 'React, Next.js and TypeScript. Data in PostgreSQL through Prisma, interface state with Redux Toolkit or Zustand.',
      },
      {
        icon: ICONS[1],
        title: 'Customers from search and ads',
        text: 'I build sites for organic and paid traffic: Google Organic Search, Google Ads, Facebook and Instagram ads.',
      },
      {
        icon: ICONS[2],
        title: 'Analytics and monitoring',
        text: 'I set up GA4, Prometheus and Grafana, so you can see where leads come from and how services run.',
      },
      {
        icon: ICONS[3],
        title: 'Launch and support',
        text: 'I deploy projects to a VPS with Ubuntu, Docker, GitLab and nginx. I have worked as a junior DevOps engineer.',
      },
    ],
  },
  stack: {
    eyebrow: 'Stack',
    rows: [
      { label: 'Frontend', items: STACK_ITEMS.frontend },
      { label: 'Backend', items: STACK_ITEMS.backend },
      { label: 'DevOps', items: STACK_ITEMS.devops },
      { label: 'Traffic and analytics', items: ['GA4', 'Google Organic', 'Google Ads', 'Facebook and Instagram Ads'] },
      { label: 'Tools', items: STACK_ITEMS.tools },
    ],
  },
  projects: {
    eyebrow: 'Projects',
    open: 'Open site',
    items: [
      {
        id: 'meddera',
        host: 'meddera.md',
        href: '/',
        internal: true,
        text: 'Website of a dermatology and cosmetology clinic in Bălți. Built from scratch: Russian and Romanian versions, SEO markup, GA4, leads to Telegram, a blog and Google reviews.',
        tags: ['Next.js', 'RU / RO', 'SEO', 'GA4', 'Telegram'],
      },
      {
        id: 'domovenok',
        host: 'domovenok.md',
        href: 'https://domovenok.md',
        text: 'Website of children’s party entertainers in Bălți. Two languages (Romanian and Russian), a request form, a gallery, an SEO audit and fixes from Ahrefs.',
        tags: ['Next.js', 'RO / RU', 'SEO', 'Ahrefs', 'VPS'],
      },
      {
        id: 'vezu',
        host: 'vezu.md',
        href: 'https://vezu.md',
        text: 'Website of a towing service in Chișinău. Two languages, form protection with Cloudflare Turnstile, schema.org markup, SEO fixes from an Ahrefs audit.',
        tags: ['Next.js', 'RU / RO', 'Turnstile', 'schema.org', 'SEO'],
      },
    ],
  },
  form: {
    eyebrow: 'Request',
    title: 'Need a site that brings in customers?',
    lead: 'Describe the task in a few sentences. I will read the request and reply in a messenger or by phone.',
    name: 'Name',
    contact: 'Phone or messenger',
    contactHint: 'Number with country code, @username or a link',
    needsLabel: 'What you need',
    needs: [
      { id: 'new_site', label: 'New site' },
      { id: 'promotion', label: 'Promotion' },
      { id: 'ads', label: 'Ads' },
      { id: 'support', label: 'Updates and support' },
      { id: 'analytics', label: 'Analytics' },
    ],
    message: 'Tell me about the project (optional)',
    submit: 'Send request',
    sending: 'Sending…',
    sentTitle: 'Request sent',
    sentText: 'Thank you. I will contact you using the details you left.',
    errors: {
      generic: 'Could not send the request. Try again or write later.',
      rate: 'Too many attempts. Wait a minute and try again.',
      verify: 'Could not verify the submission. Refresh the page and try again.',
    },
  },
  footer: { languages: 'Languages: Ukrainian, Russian, English B1' },
};

export const DEVELOPER_COPY: Record<DeveloperLang, DeveloperCopy> = { ru: RU, uk: UK, en: EN };

export const DEVELOPER_LANG_LABEL: Record<DeveloperLang, string> = { ru: 'RU', uk: 'UK', en: 'EN' };
