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

    // Stack Filters
    stackFilterAll: { ru: "Все компетенции", en: "All Skills", sr: "Sve veštine" },
    stackFilterAnalysis: { ru: "Системный анализ", en: "Analysis", sr: "Analiza" },
    stackFilterDb: { ru: "СУБД & ETL", en: "Databases & ETL", sr: "Baze & ETL" },
    stackFilterBi: { ru: "BI & Аналитика", en: "BI & Analytics", sr: "BI & Analitika" },
    stackFilterAi: { ru: "ИИ & Агенты", en: "AI & Agents", sr: "AI & Agenti" },
    stackFilterEng: { ru: "Архитектура", en: "Architecture", sr: "Arhitektura" },

    // Terminal
    terminalBadge: { ru: "Инженерные артефакты", en: "Engineering Artifacts", sr: "Inženjerski artefakti" },
    terminalHint: { ru: "Интерактивный просмотр реального кода и метрик проектов", en: "Interactive preview of real project code & benchmarks", sr: "Interaktivni prikaz stvarnog koda i metrika" },
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
      from: "2024-01",
      to: null,
      org: "Essential Studio",
      badge: {
        ru: "Промоушн: Инженер ➔ Аналитик данных",
        en: "Promotion: Engineer ➔ Data Analyst",
        sr: "Promocija: Inženjer ➔ Analitičar podataka",
      },
      place: {
        ru: "Удаленно (Черногория)",
        en: "Remote (Montenegro)",
        sr: "Na daljinu (Crna Gora)",
      },
      role: {
        ru: "Аналитик данных / Ведущий системный аналитик",
        en: "Data Analyst / Lead Systems Analyst",
        sr: "Analitičar podataka / Vodeći sistemski analitičar",
      },
      points: {
        ru: [
          "Развернул локальных ИИ-агентов на Python и Ollama для автономного разбора 50 ГБ сырых логов в неделю без передачи данных во внешние облака, автоматизировав 90% рутинного триажа инцидентов и высвободив команде 40 часов в неделю.",
          "Оптимизировал схему партиционирования, проекции и структуру тяжелых JOIN в ClickHouse и PostgreSQL на таблицах свыше 20 млн строк, сократив задержку выполнения аналитических выборок в 4 раза — с ~2 минут до менее 15 секунд.",
          "Построил 12 интерактивных дашбордов в Tableau и Power BI на прямых Live-подключениях к витринам данных до 1 млн строк, обеспечив C-level сквозной контроль операционных метрик и сократив издержки на 8%.",
          "Руководил сбором и формализацией требований от 10+ стейкхолдеров, разработал более 20 технических спецификаций интеграций (REST API, очереди сообщений) и UML-схем, сократив предпроектный цикл аналитики на 25%.",
          "Спроектировал высоконагруженную шину обработки событий и телеметрии с пропускной способностью 10 000 событий/сек и задержкой доставки менее 50 мс, повысив удержание пользователей (Retention) на +12%.",
        ],
        en: [
          "Deployed local Python and Ollama AI agents to process ~50 GB/wk of raw logs with zero cloud leakage, automating 90% of routine incident triage and saving 40 engineering hours per week.",
          "Optimized partitioning schemas, projections, and heavy JOINs in ClickHouse and PostgreSQL across tables with 20M+ rows, cutting query latency 4× from ~2 minutes to under 15 seconds.",
          "Engineered 12 live Tableau and Power BI dashboards connected directly to data marts up to 1M rows, giving executive stakeholders continuous operational visibility and reducing costs by 8%.",
          "Led requirements elicitation across 10+ stakeholders and authored 20+ technical integration specs (REST API, event queues) and UML schemas, reducing the analysis cycle by 25%.",
          "Architected an event telemetry pipeline handling 10,000 events/sec with sub-50ms delivery latency, driving a +12% increase in user retention.",
        ],
        sr: [
          "Uveo lokalne Python i Ollama AI agente za obradu ~50 GB/nedeljno sirovih logova bez slanja podataka na eksterne servere, automatizovavši 90% trijaže incidenata i uštedevši 40 radnih sati nedeljno.",
          "Optimizovao particionisanje, projekcije i složene JOIN strukture u ClickHouse i PostgreSQL na tabelama od 20M+ redova, skrativši vreme izvršavanja upita 4× sa ~2 min na manje od 15 s.",
          "Izradio 12 live Tableau i Power BI dashboarda direktno povezanih sa skladištem podataka do 1M redova, obezbedivši operativnu kontrolu metrika i smanjivši troškove za 8%.",
          "Vodio prikupljanje zahteva od 10+ stejkholdera i napisao preko 20 specifikacija integracija (REST API, redovi poruka) i UML dijagrama, skrativši fazu analize za 25%.",
          "Projektovao magistralu telemetrije kapaciteta 10.000 događaja/sek sa kašnjenjem ispod 50 ms, podigavši Retention korisnika za +12%.",
        ],
      },
    },
    {
      from: "2023-01",
      to: "2024-01",
      org: "Fintech Platform & Investment Analytics",
      place: {
        ru: "Удаленно (Белград, Сербия)",
        en: "Remote (Belgrade, Serbia)",
        sr: "Na daljinu (Beograd, Srbija)",
      },
      role: {
        ru: "Аналитик данных / Инвест-аналитик",
        en: "Invest / Data Analyst",
        sr: "Invest / Analitičar podataka",
      },
      points: {
        ru: [
          "Настроил автоматизированный мониторинг и валидацию транзакционных потоков объемом свыше 10 000 транзакций в сутки, устранив 98% аномалий и дефектов в данных до передачи в продуктовые аналитические витрины.",
          "Рассчитывал дизайн экспериментов, размеры выборок и статистическую значимость (p-value, bootstrap, когортный анализ) для инвестиционного сервиса с аудиторией более 50 000 MAU.",
          "Разрабатывал подробные технические задания и спецификации OpenAPI/Swagger для интеграции клиентских сервисов с внешними финансовыми шлюзами и webhook-провайдерами.",
        ],
        en: [
          "Implemented automated validation and telemetry audits for transaction streams exceeding 10,000 transactions per day, eliminating 98% of data anomalies before ingestion into analytical marts.",
          "Conducted experiment design, sample sizing, and statistical significance testing (cohort analysis, p-values, bootstrap) for an investment service serving 50,000+ MAU.",
          "Authored comprehensive SRS and OpenAPI/Swagger integration specifications for external financial gateways and webhook providers.",
        ],
        sr: [
          "Uveo automatizovani monitoring i validaciju tokova transakcija od preko 10.000 transakcija dnevno, otklonivši 98% anomalija u podacima pre skladištenja u analitičke vitrine.",
          "Računao eksperimentalni dizajn, veličine uzoraka i statističku značajnost (kohortna analiza, p-vrednost) za investicioni servis sa 50.000+ MAU.",
          "Pisao detaljne tehničke zadatke i OpenAPI/Swagger specifikacije za povezivanje sa spoljnim finansijskim servisima i webhook provajderima.",
        ],
      },
    },
    {
      from: "2021-09",
      to: "2023-01",
      org: "Mobile & Tech Solutions",
      place: {
        ru: "Удаленно (Черногория)",
        en: "Remote (Montenegro)",
        sr: "Na daljinu (Crna Gora)",
      },
      role: {
        ru: "Инженер-разработчик мобильных приложений (Flutter)",
        en: "Mobile / Flutter Developer",
        sr: "Mobilni / Flutter programer",
      },
      points: {
        ru: [
          "Создавал клиентские мобильные приложения на Flutter для финансово-технических продуктов с аудиторией свыше 150 000 MAU, поддерживая показатель Crash-free выше 99.9% при 90% переиспользования кодовой базы.",
          "Проектировал контракты взаимодействия клиентской части с бэкендом по REST API и WebSocket с обязательной валидацией структур данных через JSON Schema.",
          "Оформил более 40 технических документов, UML-диаграмм архитектуры и спецификаций интеграций по методологии Docs-as-Code, сократив срок ввода новых разработчиков в проект с 14 до 5 дней.",
        ],
        en: [
          "Engineered cross-platform mobile client applications in Flutter for fintech products serving 150,000+ MAU, sustaining 99.9% crash-free sessions and 90% codebase reusability.",
          "Designed client-server communication contracts over REST API and WebSocket, enforcing payload integrity validation with JSON Schema.",
          "Produced 40+ technical specifications, UML architecture schemas, and integration manuals using Docs-as-Code, reducing engineer onboarding time from 14 to 5 days.",
        ],
        sr: [
          "Razvijao krosplatformske mobilne klijentske aplikacije u Flutteru za fintech servise sa više od 150.000 MAU, održavajući stopu bez rušenja iznad 99,9% uz 90% ponovne upotrebe koda.",
          "Projektovao protokole klijent-server komunikacije preko REST API-ja i WebSocket-a uz strogu validaciju formata podataka putem JSON Schema.",
          "Napisao preko 40 tehničkih dokumenata, UML arhitekturnih dijagrama i uputstava primenom Docs-as-Code pristupa, skrativši onboarding inženjera sa 14 na 5 dana.",
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
      featured: true,
      status: "internal",
      icon: "cpu",
      badge: {
        ru: "ИИ & Автоматизация",
        en: "AI & Automation",
        sr: "AI & Automatizacija",
      },
      title: {
        ru: "Автономные ИИ-агенты разбора логов",
        en: "Autonomous AI Log Triage Agents",
        sr: "Autonomni AI agenti za analizu logova",
      },
      flow: {
        ru: "Логи ~50 ГБ/нед ➔ Ollama Local-first ➔ ZeroClaw фильтрация ➔ 40 ч/нед сэкономлено",
        en: "Raw logs ~50 GB/wk ➔ Local Ollama ➔ Zero-cloud leak ➔ 40h/wk saved",
        sr: "Logovi ~50 GB/ned ➔ Lokalna Ollama ➔ Zero-cloud leak ➔ 40h/ned ušteđeno",
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
      featured: false,
      status: "live",
      icon: "zap",
      badge: {
        ru: "High-Throughput Streaming",
        en: "High-Throughput Streaming",
        sr: "High-Throughput Streaming",
      },
      title: {
        ru: "Пайплайн телеметрии на 10 000 eps",
        en: "10,000 eps Telemetry Pipeline",
        sr: "Pipeline telemetrije od 10.000 eps",
      },
      flow: {
        ru: "10 000 eps шина ➔ Задержка <50 мс ➔ ClickHouse DWH ➔ +12% Retention Rate",
        en: "10,000 eps event stream ➔ Sub-50ms latency ➔ ClickHouse ➔ +12% Retention",
        sr: "10.000 eps magistrala ➔ Kašnjenje <50ms ➔ ClickHouse ➔ +12% Retention",
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
      featured: false,
      status: "live",
      icon: "bar-chart",
      badge: {
        ru: "DWH & SQL Optimization",
        en: "DWH & SQL Optimization",
        sr: "DWH & SQL Optimizacija",
      },
      title: {
        ru: "BI-комплекс и ускорение SQL",
        en: "BI Suite & SQL Query Optimization",
        sr: "BI sistem i ubrzanje SQL upita",
      },
      flow: {
        ru: "12 Live дашбордов ➔ 20M+ строк ➔ Проекции & индексы ➔ Запросы в 4× быстрее (<15 с)",
        en: "12 Live dashboards ➔ 20M+ rows ➔ SQL projections ➔ Queries 4× faster (<15s)",
        sr: "12 Live dashboarda ➔ 20M+ redova ➔ SQL projekcije ➔ Upiti 4× brži (<15s)",
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

  terminal: {
    title: "valentin@mbp: ~/engineering-artifacts",
    tabs: [
      {
        id: "agents",
        filename: "ai_triage.py",
        icon: "cpu",
        label: "AI Agents",
        meta: "Python 3.12 · Ollama Local",
        code: `# Local-first Autonomous Triage Crew (zero cloud leak)
from ollama import AsyncClient
import pandas as pd

async def triage_log_stream(raw_batch: list[dict]) -> dict:
    df = pd.DataFrame(raw_batch)
    anomalies = df[df["severity"].isin(["CRITICAL", "FATAL"])]
    
    # 50 GB/week parsed locally with sub-second decision loop
    summary = await ollama.chat(
        model="mistral-ins",
        messages=[{"role": "user", "content": f"Triage: {anomalies.to_json()}"}]
    )
    return {"status": "RESOLVED", "weekly_saved": "40h", "accuracy": "98.4%"}
# ✓ Output: 90% routine incidents automated without human alert`,
      },
      {
        id: "sql",
        filename: "clickhouse_tuning.sql",
        icon: "database",
        label: "ClickHouse 20M+",
        meta: "ClickHouse 24.8 · SQL Projections",
        code: `-- Partition pruning & projection query optimization on 20M+ rows
ALTER TABLE analytics.events
ADD PROJECTION prj_telemetry_daily (
    SELECT event_name, toDate(created_at) AS d, count(), quantile(0.95)(latency_ms)
    GROUP BY event_name, d
);

-- Benchmark query before & after indexing:
SELECT event_name, avg(latency_ms) 
FROM analytics.events 
WHERE created_at >= now() - INTERVAL 7 DAY 
GROUP BY event_name;

-- Execution time: 118.4s  ==>  14.2s (4.2x speedup on 20M+ live mart)`,
      },
      {
        id: "pipeline",
        filename: "telemetry_k6.sh",
        icon: "zap",
        label: "10k eps Benchmark",
        meta: "Distributed Ingest · k6 v0.54",
        code: `# k6 load-testing telemetry event bus & ClickHouse ingest
$ k6 run --vus 3500 --duration 5m telemetry_load_test.js

running (5m00.0s), 3500/3500 VUs, 3,072,000 complete iterations
✓ http_req_duration ..........: avg=28.4ms  p(95)=44.2ms (<50ms target)
✓ throughput .................: 10,240 events/sec
✓ error_rate .................: 0.00% (zero dropped packets)
✓ live_dau_supported .........: 50,000+ MAU real-time telemetry`,
      },
    ],
  },

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
