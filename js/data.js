/* Single source of truth for copy, dates, projects and contacts.
   Architecture: static HTML shells in index.html, rendered dynamically by js/app.js.
   Languages: ru (default), en, sr (Latin).
   All copy strictly adheres to anti-slop guidelines: direct active verbs,
   concrete engineering metrics and artifacts, zero fluff.
   No phone numbers. All visible UI strings translated in all 3 languages. */

window.SITE = {
  siteUrl: "https://valdagon.github.io/",
  source: "https://github.com/ValDagon/ValDagon.github.io",
  langs: ["ru", "en", "sr"],

  contact: {
    telegram: "https://t.me/valdk_corp",
    github: "https://github.com/ValDagon",
    linkedin: "https://www.linkedin.com/in/valkz/",
    kwork: "https://kwork.ru/user/valdk",
    emailRu: "mailto:valrus56@yandex.ru",
    emailIntl: "mailto:valdk652@gmail.com",
    emailRuRaw: "valrus56@yandex.ru",
    emailIntlRaw: "valdk652@gmail.com",
    telegramHandle: "@valdk_corp",
    portfolioUrl: "https://valdagon.github.io/",
    portfolioRaw: "valdagon.github.io",
  },

  months: {
    ru: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    sr: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"],
  },

  ui: {
    skip: { ru: "К содержанию", en: "Skip to content", sr: "Preskoči na sadržaj" },
    langLabel: { ru: "Язык", en: "Language", sr: "Jezik" },
    navExperience: { ru: "Опыт", en: "Experience", sr: "Iskustvo" },
    navCases: { ru: "Кейсы", en: "Projects", sr: "Projekti" },
    navStack: { ru: "Стек", en: "Skills", sr: "Veštine" },
    navEducation: { ru: "Образование", en: "Education", sr: "Obrazovanje" },
    navContact: { ru: "Контакты", en: "Contact", sr: "Kontakt" },
    cta: { ru: "Написать в Telegram", en: "Message on Telegram", sr: "Piši na Telegramu" },
    ctaAlt: { ru: "Смотреть кейсы", en: "View Projects", sr: "Pogledaj projekte" },
    contactCta: { ru: "Связаться", en: "Get in touch", sr: "Kontakt" },
    period: { ru: "2021 — 2026", en: "2021 — 2026", sr: "2021 — 2026" },
    present: { ru: "н. в.", en: "present", sr: "danas" },
    internal: { ru: "внутренний проект", en: "internal project", sr: "interni projekat" },
    open: { ru: "open source", en: "open source", sr: "otvoreni kod" },
    live: { ru: "в проде", en: "in production", sr: "u produkciji" },
    resultLabel: { ru: "Результат", en: "Outcome", sr: "Rezultat" },
    openLink: { ru: "Открыть проект", en: "View project", sr: "Otvori projekat" },
    sourceLink: { ru: "Исходный код", en: "Source code", sr: "Izvorni kod" },
    copy: { ru: "Копировать", en: "Copy", sr: "Kopiraj" },
    copied: { ru: "Скопировано в буфер!", en: "Copied to clipboard!", sr: "Kopirano u privremenu memoriju!" },
    email: { ru: "Почта", en: "Email", sr: "Imejl" },

    // Section headers and subtitles
    expTitle: { ru: "Опыт работы и результаты", en: "Work Experience & Track Record", sr: "Radno iskustvo i rezultati" },
    expSubtitle: { ru: "2021 — 2026 • Системный анализ, оптимизация СУБД, телеметрия", en: "2021 — 2026 • Systems analysis, database tuning, telemetry", sr: "2021 — 2026 • Sistemska analiza, baze podataka, telemetrija" },
    casesTitle: { ru: "Кейсы и архитектура", en: "Projects & Architecture", sr: "Projekti i arhitektura" },
    casesSubtitle: { ru: "Продакшен-системы, открытый код, автоматизация", en: "Production systems, open source, automation", sr: "Produkcioni sistemi, otvoreni kod, automatizacija" },
    stackTitle: { ru: "Технологический стек", en: "Technical Stack", sr: "Tehnološki stek" },
    stackSubtitle: { ru: "Ключевые компетенции по данным резюме", en: "Core competencies from CV", sr: "Ključne kompetencije iz CV-ja" },
    eduTitle: { ru: "Образование", en: "Education", sr: "Obrazovanje" },
    contactTitle: { ru: "Связь", en: "Get in touch", sr: "Stupite u kontakt" },
    contactSubtitle: { ru: "Быстрее всего отвечаю в Telegram. Почта, LinkedIn и профессиональные профили:", en: "Telegram is fastest. Email, LinkedIn, and profiles:", sr: "Najbrže odgovaram na Telegramu. Imejl, LinkedIn i profili:" },
  },

  meta: {
    ru: {
      title: "Валентин Казанцев — Системный аналитик & инженер данных",
      description: "5 лет в IT: разработка ТЗ и SRS, проектирование интеграций, оптимизация ClickHouse и PostgreSQL, дашборды Tableau и локальные ИИ-агенты.",
    },
    en: {
      title: "Valentin Kazantsev — Systems Analyst & Data Engineer",
      description: "5 years in IT: requirements & SRS, integrations architecture, ClickHouse & PostgreSQL tuning, Tableau dashboards, and local AI agents.",
    },
    sr: {
      title: "Valentin Kazancev — Sistemski analitičar & inženjer podataka",
      description: "5 godina u IT-u: SRS i tehnički zadaci, integracije sistema, optimizacija ClickHouse i PostgreSQL, Tableau dashboardi i lokalni AI agenti.",
    },
  },

  hero: {
    status: {
      ru: "Открыт к предложениям · Сербия (Офис, Гибрид) · Москва (Удалённо)",
      en: "Open to roles · Serbia (Office, Hybrid) · Moscow (Remote)",
      sr: "Otvoren za ponude · Srbija (Kancelarija, Hibrid) · Moskva (Na daljinu)",
    },
    title: {
      ru: "Системный аналитик & инженер данных",
      en: "Systems Analyst & Data Engineer",
      sr: "Sistemski analitičar & inženjer podataka",
    },
    about: {
      ru: "5 лет в IT. Разрабатываю ТЗ и спецификации интеграций (REST, Webhook, очереди), оптимизирую SQL в ClickHouse и PostgreSQL на таблицах от 20 млн строк, внедряю дашборды Tableau и автоматизирую обработку логов локальными ИИ-агентами.",
      en: "5 years in software and data engineering. I write technical specifications (SRS, OpenAPI, UML), tune SQL queries in ClickHouse and PostgreSQL on 20M+ row datasets, deploy real-time Tableau dashboards, and automate log pipelines with local AI agents.",
      sr: "5 godina u razvoju softvera i inženjeringu podataka. Pišem tehničke specifikacije (SRS, OpenAPI, UML), optimizujem SQL upite u ClickHouse i PostgreSQL bazama na 20M+ redova, uvodim Tableau dashboarde i automatizujem obradu logova lokalnim AI agentima.",
    },
    stats: [
      {
        value: "40 ч/нед",
        valueEn: "40h/wk",
        valueSr: "40h/ned",
        label: {
          ru: "Экономия времени команды",
          en: "Weekly team hours saved",
          sr: "Ušteđeno sati nedeljno",
        },
        desc: {
          ru: "Локальные ИИ-агенты (Ollama, Python), обработка ~50 ГБ/нед логов, 90% рутины снято",
          en: "Local AI agents (Ollama, Python), ~50 GB/wk raw logs, 90% routine automated",
          sr: "Lokalni AI agenti (Ollama, Python), ~50 GB/ned logova, 90% rutine automatizovano",
        },
        icon: "cpu",
      },
      {
        value: "4× быстрее",
        valueEn: "4× faster",
        valueSr: "4× brže",
        label: {
          ru: "Оптимизация SQL и СУБД",
          en: "SQL & database queries",
          sr: "Optimizacija SQL upita",
        },
        desc: {
          ru: "ClickHouse и PostgreSQL на 20М+ строк: время запросов сокращено с ~2 мин до <15 с",
          en: "ClickHouse & PostgreSQL on 20M+ rows: query latency cut from ~2 min to <15s",
          sr: "ClickHouse i PostgreSQL na 20M+ redova: vreme upita sa ~2 min na <15s",
        },
        icon: "database",
      },
      {
        value: "−8%",
        valueEn: "−8%",
        valueSr: "−8%",
        label: {
          ru: "Снижение издержек",
          en: "Operating cost reduction",
          sr: "Smanjenje operativnih troškova",
        },
        desc: {
          ru: "12 дашбордов Tableau и Power BI на Live-подключениях к витринам данных до 1М строк",
          en: "12 Tableau & Power BI dashboards connected live to data marts up to 1M rows",
          sr: "12 Tableau i Power BI dashboarda sa Live vezom ka podacima do 1M redova",
        },
        icon: "trending-down",
      },
      {
        value: "5+ лет",
        valueEn: "5+ years",
        valueSr: "5+ god.",
        label: {
          ru: "Опыт в инженерии и анализе",
          en: "Engineering & analysis",
          sr: "Inženjering i analiza",
        },
        desc: {
          ru: "Пайплайны 10 000 событий/сек (<50 мс), мобильные сервисы 150 000+ MAU, 99.9% crash-free",
          en: "Pipelines at 10,000 eps (<50ms), mobile apps with 150k+ MAU, 99.9% crash-free",
          sr: "Pipeline-ovi od 10.000 eps (<50ms), aplikacije sa 150k+ MAU, 99,9% bez pada",
        },
        icon: "zap",
      },
    ],
  },

  experience: [
    {
      from: "2025-02",
      to: "2026-09",
      org: "Sensual Studio DOO",
      place: {
        ru: "Удаленно (Черногория)",
        en: "Remote (Montenegro)",
        sr: "Na daljinu (Crna Gora)",
      },
      role: {
        ru: "Ведущий системный аналитик / Аналитик данных",
        en: "Lead Systems Analyst / Data Analyst",
        sr: "Vodeći sistemski analitičar / Analitičar podataka",
      },
      points: {
        ru: [
          "ИИ-автоматизация: развернул локальных ИИ-агентов (Ollama, Python) для парсинга и агрегации сырых логов (~50 ГБ/нед). Автоматизировал 90% типовых сценариев разбора ошибок, сэкономив инженерам 40 часов в неделю.",
          "Оптимизация SQL и СУБД: переработал схему индексов и структуру JOIN в ClickHouse и PostgreSQL на таблицах до 20 млн строк. Сократил время выполнения тяжелых выборок в 4 раза — с ~2 минут до менее 15 секунд.",
          "BI-системы: построил 12 интерактивных дашбордов в Tableau и Power BI с прямым Live-подключением к хранилищу (до 1 млн строк). Дал стейкхолдерам сквозной контроль метрик и снизил операционные издержки на 8%.",
          "Управление требованиями: организовал сбор и согласование требований с 10+ стейкхолдерами. Спроектировал 20+ технических заданий и спецификаций REST API, сократив цикл предпроектной аналитики на 25%.",
        ],
        en: [
          "AI automation: Deployed local-first AI agents (Ollama, Python) to parse and aggregate raw logs (~50 GB/wk). Automated 90% of error triage workflows, saving the engineering team 40 hours per week.",
          "SQL & database tuning: Redesigned indexing strategies and JOIN logic in ClickHouse and PostgreSQL across tables up to 20M rows. Reduced query execution time 4×, from ~2 minutes to under 15 seconds.",
          "BI systems: Built 12 interactive Tableau and Power BI dashboards connected live to data stores (up to 1M rows). Provided operational visibility to decision-makers and cut operating expenses by 8%.",
          "Requirements management: Structured requirements gathering across 10+ stakeholders. Authored 20+ SRS documents and REST API specifications, shortening the planning cycle by 25%.",
        ],
        sr: [
          "AI automatizacija: Implementirao lokalne AI agente (Ollama, Python) za obradu i agregaciju sirovih logova (~50 GB/nedeljno). Automatizovao 90% zadataka analize grešaka, štedeći timu 40 sati nedeljno.",
          "Optimizacija SQL-a i baza: Preprojektovao indekse i JOIN strukture u ClickHouse i PostgreSQL na tabelama do 20 miliona redova. Skratio vreme izvršavanja upita 4 puta — sa ~2 minuta na manje od 15 sekundi.",
          "BI sistemi: Izradio 12 interaktivnih Tableau i Power BI dashboarda sa Live vezom ka skladištu (do 1M redova). Obezbedio operativnu kontrolu metrika i smanjio operativne troškove za 8%.",
          "Upravljanje zahtevima: Vodio prikupljanje i usklađivanje zahteva sa 10+ stejkholdera. Napisao 20+ tehničkih zadataka i REST API specifikacija, skrativši fazu planiranja za 25%.",
        ],
      },
    },
    {
      from: "2023-09",
      to: "2025-02",
      org: "Sensual Studio DOO",
      place: {
        ru: "Удаленно (Черногория)",
        en: "Remote (Montenegro)",
        sr: "Na daljinu (Crna Gora)",
      },
      role: {
        ru: "Инженер-разработчик / Data Pipeline Developer",
        en: "Software Engineer / Data Pipeline Developer",
        sr: "Softverski inženjer / Data Pipeline Developer",
      },
      points: {
        ru: [
          "Высоконагруженный пайплайн: спроектировал и ввел в эксплуатацию шину обработки событий и телеметрии с пропускной способностью 10 000 событий/сек и задержкой доставки менее 50 мс.",
          "Рост метрик продукта: подключил внешние источники данных в реальном времени, что подняло Retention Rate пользователей на 12%.",
          "A/B-тестирование: рассчитывал выборки и проверял статистическую значимость гипотез перед передачей фичей в релиз.",
          "Масштабируемость: спроектировал архитектуру интерактивных сервисов для аудитории свыше 50 000 MAU при непрерывной доступности.",
        ],
        en: [
          "High-throughput pipeline: Architected and deployed an event and telemetry stream processing 10,000 events/sec with sub-50ms latency.",
          "Product metrics growth: Integrated real-time external data feeds, increasing user retention by 12%.",
          "A/B testing: Calculated sample sizes and evaluated statistical significance of experiments to drive release decisions.",
          "Scalability: Designed system architecture for interactive services serving 50,000+ MAU with 99.9% uptime.",
        ],
        sr: [
          "Pipeline visokog opterećenja: Projektovao i pustio u rad sistem za prenos događaja i telemetrije kapaciteta 10.000 događaja/sek sa kašnjenjem ispod 50 ms.",
          "Rast produktnih metrika: Povezao spoljne izvore podataka u realnom vremenu, što je podiglo Retention Rate za 12%.",
          "A/B testiranje: Računao veličine uzoraka i proveravao statističku značajnost hipoteza pre puštanja u produkciju.",
          "Skalabilnost: Projektovao arhitekturu interaktivnih servisa za više od 50.000 MAU uz 99,9% dostupnosti.",
        ],
      },
    },
    {
      from: "2021-10",
      to: "2023-09",
      org: "Standard Sats",
      place: {
        ru: "Удаленно (Черногория)",
        en: "Remote (Montenegro)",
        sr: "Na daljinu (Crna Gora)",
      },
      role: {
        ru: "Инженер-разработчик / Системный инженер",
        en: "Software Engineer / Systems Engineer",
        sr: "Softverski inženjer / Sistemski inženjer",
      },
      points: {
        ru: [
          "Анализ данных транзакций: провел аудит логов и данных смарт-контрактов (>10 000 транзакций в testnet/mainnet), устранив 98% критических дефектов до выхода в прод.",
          "Кроссплатформенная разработка: создал клиентские приложения на Flutter (150 000+ MAU, показатель Crash-free > 99.9%) с 90% переиспользования кодовой базы.",
          "Docs-as-Code: оформил более 40 технических статей, UML-диаграмм и спецификаций интеграций; сократил онбординг новых инженеров с 14 до 5 дней.",
        ],
        en: [
          "Transaction data auditing: Audited telemetry and smart contract logs across 10,000+ transactions in testnet and mainnet, eliminating 98% of critical defects before launch.",
          "Cross-platform engineering: Developed client applications in Flutter (150,000+ MAU, 99.9% crash-free sessions) with 90% reusable code across platforms.",
          "Docs-as-Code: Produced 40+ technical specifications, UML architecture schemas, and integration manuals, cutting developer onboarding from 14 to 5 days.",
        ],
        sr: [
          "Analiza transakcionih podataka: Sproveo reviziju logova i pametnih ugovora na 10.000+ transakcija u testnetu i mainnetu, otklonivši 98% kritičnih defekata pre produkcije.",
          "Krosplatformski razvoj: Izradio klijentske aplikacije u Flutteru (150.000+ MAU, 99,9% bez pada) uz 90% ponovne upotrebe koda.",
          "Docs-as-Code: Napisao 40+ tehničkih dokumenata, UML dijagrama i specifikacija, skrativši onboarding inženjera sa 14 na 5 dana.",
        ],
      },
    },
  ],

  education: {
    from: "2018",
    to: "2022",
    org: {
      ru: "НИТУ «МИСИС», Москва",
      en: "NUST MISIS, Moscow",
      sr: "NITU «MISIS», Moskva",
    },
    role: {
      ru: "Бакалавр прикладной информатики",
      en: "Bachelor of Applied Informatics",
      sr: "Diplomirani inženjer primenjene informatike",
    },
    note: {
      ru: "Инженерия программного обеспечения и анализ данных",
      en: "Software Engineering & Data Analysis",
      sr: "Softversko inženjerstvo i analiza podataka",
    },
  },

  cases: [
    {
      id: "agents",
      status: "internal",
      icon: "cpu",
      title: {
        ru: "Автономные ИИ-агенты разбора логов",
        en: "Autonomous AI Log Triage Agents",
        sr: "Autonomni AI agenti za analizu logova",
      },
      summary: {
        ru: "Группа локальных агентов на Python и Ollama для непрерывного парсинга, фильтрации и классификации 50 ГБ неструктурированных логов в неделю без передачи данных во внешние облака.",
        en: "Local-first agent crew built with Python and Ollama for automated ingestion, filtering, and classification of 50 GB/wk raw logs with zero external cloud exposure.",
        sr: "Lokalni tim agenata u Pythonu i Ollami za obradu, filtriranje i klasifikaciju 50 GB sirovih logova nedeljno bez slanja podataka na eksterne oblake.",
      },
      result: {
        ru: "Экономия 40 часов инженерной рутины в неделю, 90% автоматизации разбора инцидентов.",
        en: "40 engineering hours saved weekly; 90% routine incident triage automated.",
        sr: "Ušteđeno 40 sati inženjerskog rada nedeljno, 90% rutinske analize automatizovano.",
      },
      stack: ["Ollama", "Python", "Pandas", "Local-first", "ZeroClaw"],
      url: null,
    },
    {
      id: "pipeline",
      status: "live",
      icon: "zap",
      title: {
        ru: "Пайплайн телеметрии на 10 000 eps",
        en: "10,000 eps Telemetry Pipeline",
        sr: "Pipeline telemetrije od 10.000 eps",
      },
      summary: {
        ru: "Распределенная шина сбора и валидации событий с гарантированной задержкой обработки до 50 мс для аудитории более 50 000 пользователей.",
        en: "Distributed event ingestion and validation pipeline guaranteeing sub-50ms processing latency for 50,000+ active users.",
        sr: "Distribuirani sistem za obradu i validaciju događaja sa kašnjenjem ispod 50 ms za preko 50.000 korisnika.",
      },
      result: {
        ru: "10 000 событий/сек, задержка <50 мс, +12% к Retention Rate за счет контекстных сценариев.",
        en: "10,000 eps throughput, <50ms latency, +12% user retention via real-time context integration.",
        sr: "10.000 eps kapacitet, <50ms kašnjenje, +12% Retention Rate.",
      },
      stack: ["ClickHouse", "PostgreSQL", "REST API", "Telemetry", "Event-Driven"],
      url: null,
    },
    {
      id: "bi-suite",
      status: "live",
      icon: "bar-chart",
      title: {
        ru: "BI-комплекс и ускорение SQL",
        en: "BI Suite & SQL Query Optimization",
        sr: "BI sistem i ubrzanje SQL upita",
      },
      summary: {
        ru: "Пакет из 12 интерактивных дашбордов Tableau и Power BI с прямым Live-подключением к аналитическим витринам данных до 20 млн строк.",
        en: "Suite of 12 interactive Tableau and Power BI dashboards with direct Live connections to analytical data marts scaling to 20M rows.",
        sr: "Paket od 12 interaktivnih Tableau i Power BI dashboarda sa direktnom Live vezom ka podacima do 20 miliona redova.",
      },
      result: {
        ru: "Запросы быстрее в 4 раза (с ~2 мин до <15 с), операционные расходы сокращены на 8%.",
        en: "Query execution accelerated 4× (from ~2 min to <15s); operational expenses reduced by 8%.",
        sr: "Upiti ubrzani 4 puta (sa ~2 min na <15s); operativni troškovi smanjeni za 8%.",
      },
      stack: ["Tableau Live", "Power BI", "ClickHouse", "SQL Indexing", "ETL"],
      url: null,
    },
  ],

  stackGroups: [
    {
      id: "analysis",
      icon: "file-text",
      title: {
        ru: "Системный анализ",
        en: "Systems Analysis",
        sr: "Sistemska analiza",
      },
      items: {
        ru: "Сбор и анализ требований, разработка ТЗ / SRS, Use Cases, User Stories, моделирование UML, Docs-as-Code, Agile / Scrum",
        en: "Requirements engineering, SRS & specs, Use Cases, User Stories, UML modeling, Docs-as-Code, Agile / Scrum",
        sr: "Prikupljanje i analiza zahteva, izrada SRS i tehničkih zadataka, Use Cases, User Stories, UML dijagrami, Docs-as-Code, Agile",
      },
      tags: ["SRS / ТЗ", "UML", "Use Cases", "User Stories", "Docs-as-Code", "Agile", "BPMN"],
    },
    {
      id: "databases",
      icon: "database",
      title: {
        ru: "Базы данных и ETL",
        en: "Databases & ETL",
        sr: "Baze podataka i ETL",
      },
      items: {
        ru: "ClickHouse, PostgreSQL, оптимизация сложных JOIN и индексов, витрины данных, Python / Pandas, проектирование хранилищ",
        en: "ClickHouse, PostgreSQL, complex JOIN & index optimization, data marts, Python / Pandas, DWH architecture",
        sr: "ClickHouse, PostgreSQL, optimizacija JOIN-ova i indeksa, data marts, Python / Pandas, projektovanje skladišta",
      },
      tags: ["ClickHouse", "PostgreSQL", "SQL Optimization", "Python", "Pandas", "ETL", "DWH"],
    },
    {
      id: "bi",
      icon: "bar-chart",
      title: {
        ru: "BI и аналитика",
        en: "BI & Analytics",
        sr: "BI i analitika",
      },
      items: {
        ru: "Tableau (Live-подключения), Power BI, MS Excel, дашборды в реальном времени, стат. анализ A/B-тестов",
        en: "Tableau (Live connections), Power BI, MS Excel, real-time dashboards, statistical analysis of A/B tests",
        sr: "Tableau (Live konekcije), Power BI, MS Excel, dashboardi u realnom vremenu, statistička analiza A/B testova",
      },
      tags: ["Tableau Live", "Power BI", "MS Excel", "A/B Testing", "KPI Tracking", "Cohort Analysis"],
    },
    {
      id: "ai",
      icon: "cpu",
      title: {
        ru: "ИИ и автоматизация",
        en: "AI & Automation",
        sr: "AI i automatizacija",
      },
      items: {
        ru: "Локальные ИИ-агенты Ollama local-first, OpenClaw, ZeroClaw, Prompt Engineering, интеграция LLM API",
        en: "Local-first Ollama AI agents, OpenClaw, ZeroClaw, Prompt Engineering, LLM API integration",
        sr: "Lokalni AI agenti Ollama local-first, OpenClaw, ZeroClaw, Prompt Engineering, integracija LLM API-ja",
      },
      tags: ["Ollama", "Local-first", "Prompt Engineering", "OpenClaw", "ZeroClaw", "LLM APIs", "Autonomous Agents"],
    },
    {
      id: "engineering",
      icon: "code",
      title: {
        ru: "Архитектура и разработка",
        en: "Architecture & Engineering",
        sr: "Arhitektura i razvoj",
      },
      items: {
        ru: "REST API, событийно-ориентированная архитектура 10k+ eps, Flutter, Linux / VPS, Git, CI/CD",
        en: "REST APIs, event-driven architecture 10k+ eps, Flutter, Linux / VPS, Git, CI/CD",
        sr: "REST API, arhitektura vođena događajima 10k+ eps, Flutter, Linux / VPS, Git, CI/CD",
      },
      tags: ["REST API", "Event-Driven", "10k eps", "Flutter", "Linux / VPS", "Git", "Clean Architecture"],
    },
    {
      id: "languages",
      icon: "globe",
      title: {
        ru: "Языки",
        en: "Languages",
        sr: "Jezici",
      },
      items: {
        ru: "Русский — родной, Английский — C2 (свободный), Сербский — B1 (средний)",
        en: "Russian — native, English — C2 (fluent / professional), Serbian — B1 (intermediate)",
        sr: "Ruski — maternji, Engleski — C2 (tečan / profesionalni), Srpski — B1 (srednji)",
      },
      tags: ["RU: Native", "EN: C2 Fluent", "SR: B1 Intermediate"],
    },
  ],

  contacts: {
    ru: [
      { key: "telegram", label: "Telegram", value: "@valdk_corp", href: "https://t.me/valdk_corp", copyValue: "@valdk_corp", icon: "send" },
      { key: "email", label: "Email (RU)", value: "valrus56@yandex.ru", href: "mailto:valrus56@yandex.ru", copyValue: "valrus56@yandex.ru", icon: "mail" },
      { key: "email-intl", label: "Email (Intl)", value: "valdk652@gmail.com", href: "mailto:valdk652@gmail.com", copyValue: "valdk652@gmail.com", icon: "mail" },
      { key: "portfolio", label: "Портфолио", value: "valdagon.github.io", href: "https://valdagon.github.io/", copyValue: "https://valdagon.github.io/", icon: "globe" },
      { key: "github", label: "GitHub", value: "github.com/ValDagon", href: "https://github.com/ValDagon", copyValue: "https://github.com/ValDagon", icon: "github" },
      { key: "linkedin", label: "LinkedIn", value: "linkedin.com/in/valkz", href: "https://www.linkedin.com/in/valkz/", copyValue: "https://www.linkedin.com/in/valkz/", icon: "linkedin" },
      { key: "kwork", label: "Kwork", value: "kwork.ru/user/valdk", href: "https://kwork.ru/user/valdk", copyValue: "https://kwork.ru/user/valdk", icon: "external-link" },
    ],
    en: [
      { key: "telegram", label: "Telegram", value: "@valdk_corp", href: "https://t.me/valdk_corp", copyValue: "@valdk_corp", icon: "send" },
      { key: "email-intl", label: "Email (Intl)", value: "valdk652@gmail.com", href: "mailto:valdk652@gmail.com", copyValue: "valdk652@gmail.com", icon: "mail" },
      { key: "portfolio", label: "Portfolio", value: "valdagon.github.io", href: "https://valdagon.github.io/", copyValue: "https://valdagon.github.io/", icon: "globe" },
      { key: "github", label: "GitHub", value: "github.com/ValDagon", href: "https://github.com/ValDagon", copyValue: "https://github.com/ValDagon", icon: "github" },
      { key: "linkedin", label: "LinkedIn", value: "linkedin.com/in/valkz", href: "https://www.linkedin.com/in/valkz/", copyValue: "https://www.linkedin.com/in/valkz/", icon: "linkedin" },
    ],
    sr: [
      { key: "telegram", label: "Telegram", value: "@valdk_corp", href: "https://t.me/valdk_corp", copyValue: "@valdk_corp", icon: "send" },
      { key: "email-intl", label: "Imejl", value: "valdk652@gmail.com", href: "mailto:valdk652@gmail.com", copyValue: "valdk652@gmail.com", icon: "mail" },
      { key: "portfolio", label: "Portfolio", value: "valdagon.github.io", href: "https://valdagon.github.io/", copyValue: "https://valdagon.github.io/", icon: "globe" },
      { key: "github", label: "GitHub", value: "github.com/ValDagon", href: "https://github.com/ValDagon", copyValue: "https://github.com/ValDagon", icon: "github" },
      { key: "linkedin", label: "LinkedIn", value: "linkedin.com/in/valkz", href: "https://www.linkedin.com/in/valkz/", copyValue: "https://www.linkedin.com/in/valkz/", icon: "linkedin" },
    ],
  },

  legal: {
    ru: "Локация: Сербия (Офис, Гибрид) • Москва (Удалённо). Заказы на территории РФ — как самозанятый.",
    en: "Location: Serbia (Office, Hybrid) • Moscow (Remote). International contracts via Sensual Studio DOO (Montenegro).",
    sr: "Lokacija: Srbija (Kancelarija, Hibrid) • Moskva (Na daljinu). Međunarodni ugovori preko Sensual Studio DOO (Crna Gora).",
  },

  footNote: {
    ru: "GitHub Pages · космический дизайн v7 takethe.space",
    en: "GitHub Pages · cosmic design v7 takethe.space",
    sr: "GitHub Pages · kosmički dizajn v7 takethe.space",
  },
};
