/* =========================================================
   Language switch (EN / DE) – all visible copy lives here.
   Markup uses data-i18n (text), data-i18n-html (inline HTML),
   data-i18n-alt and data-i18n-aria (attributes), dot-separated keys.
   ========================================================= */
window.I18N = (() => {
  'use strict';

  const DICT = {
    en: {
      meta: {
        title: 'Hussam Itani · Laravel Full-Stack Developer & Game Dev Enthusiast',
        description: 'Hussam Itani, Laravel full-stack developer and product owner at byte5. PHP since 2015, Laravel since 2016. Game dev and VR at heart.',
      },
      nav: { about: 'About', journey: 'Journey', projects: 'Projects', stack: 'Toolbox', contact: 'Contact', menu: 'Toggle menu', top: 'Back to top', lang: 'Sprache auf Deutsch umstellen' },
      hero: {
        hello: "Hi there, I'm",
        lead: 'A decade of building web applications with <strong class="accent">Laravel</strong> &amp; PHP. And a lifelong passion for <strong class="accent-2">games</strong>.',
        journey: 'See my journey',
        play: 'Play a little game ▶',
        roles: [
          'Full-Stack Developer @ byte5',
          'Product Owner @ byte5',
          'Laravel since 2016',
          'php artisan make:awesome',
          'FilamentPHP Enthusiast',
          'VR Researcher & Game Dev',
        ],
        terminal: {
          role: 'Full-Stack Dev & PO',
          experience: '10+ years',
          hobby: 'Game Dev (Unity, VR)',
          tests: ['writes clean code', 'ships on time', 'loves games'],
          passed: '3 passed',
        },
        scroll: 'Scroll down',
      },
      about: {
        title: 'About me',
        photo: 'Portrait of Hussam Itani',
        p1: "I'm a <strong>full-stack developer</strong> who has been writing PHP since 2015 and <strong>Laravel since 2016</strong>. I build APIs, platforms and products that people use every day, from EdTech for schools to digital services for the public sector.",
        p2: 'I studied <strong>Computervisualistik</strong> (computer visualistics) at the <strong>University of Koblenz</strong>, where computer graphics, 3D and interactive worlds got me hooked. For my bachelor thesis I built a VR snowboarding game in Unity and researched how different controllers affect immersion and motion sickness.',
        p3: "Today I'm a full-stack developer and product owner at <strong class=\"accent\">byte5</strong>. After hours I build open source tools with FilamentPHP and still love tinkering with game engines.",
        stats: { years: 'years with PHP & Laravel', oss: 'open source projects', games: 'games & projects', coffee: 'cups of coffee' },
      },
      journey: {
        title: 'The journey',
        intro: 'Every save point so far. Newest first.',
        current: 'Current level',
        level: 'Level',
        tutorial: 'Tutorial',
        since: 'since',
        jobs: {
          byte5: { role: 'Laravel Full-Stack Developer & Product Owner', points: ['Full-stack Laravel applications for clients', 'Product ownership: backlog, priorities, stakeholders', 'Focus on clean architecture and quality'] },
          publicplan: { role: 'Symfony Backend Developer', points: ['Backend development with Symfony', 'Digital services for the public sector'] },
          sdui: { role: 'Laravel Developer', points: ['Mainly backend for an EdTech platform connecting schools, teachers, students and parents', 'Onboarding and training new developers'] },
          venture: { role: 'Atlassian App Developer', points: ['Jira and Confluence apps in Java', 'Built for Atlassian Server, not Cloud', 'First full-time job after university'] },
          freelance: { name: 'Freelance', role: 'Web Developer, alongside my studies', points: ['Websites, online shops, dashboards and APIs for clients', 'WordPress, WooCommerce, Shopify, Laravel and plain websites', 'Web hosting and DevOps'] },
          ptc: { role: 'Web Developer', points: ['WordPress and WooCommerce', 'First professional steps with PHP'] },
          uni: { name: 'University of Koblenz', role: 'B.Sc. Computervisualistik', points: ['Computer graphics, image processing, 3D and interaction', 'Thesis: game controllers vs. immersion and motion sickness in VR'] },
        },
      },
      projects: {
        title: 'Projects',
        intro: 'Things I build after hours. Hover or tap a card to flip it.',
        flip: 'Show details',
        soon: 'Coming soon',
        more: 'More coming soon',
        github: 'View on GitHub',
        items: {
          thesis: {
            tag: 'Bachelor thesis · 2019',
            title: 'VR Snowboarding',
            tagline: 'How do different game controllers affect immersion and motion sickness in VR?',
            points: ['Self-built VR snowboarding game in Unity', 'Wii Balance Board vs. Xbox controller', '3 tracks: straight down, a curve, jumps', 'Motion sickness was much higher with the controller', 'Scores were nearly identical'],
            link: 'Read the thesis (PDF, German)',
          },
          split: {
            tag: 'Open source',
            title: 'Split',
            tagline: 'Simple project management built with FilamentPHP.',
            points: ['Tickets without the overhead', 'Configurable ticket type scheme', 'Configurable ticket status scheme', 'Configurable ticket priority scheme'],
          },
          pisa: {
            tag: 'Open source',
            title: 'Pisa',
            tagline: 'A simplified PIM with product families at its core.',
            points: ['Product families in focus', 'Flexible attributes via EAV', 'Manage custom fields in Filament', 'Manage products in Filament or via API'],
          },
          structured: {
            tag: 'Claude Code skill',
            title: 'Structured Response',
            tagline: "Makes Claude's answers scannable and consistent.",
            points: ['Fixed sections: what, how, what failed, next steps, to do', 'Outcome first, details second, open work last', 'Prose for questions, structure for real work', 'Built for long terminal sessions'],
          },
          scanner: {
            tag: 'Open source',
            title: 'Agnostic Package Scanner',
            tagline: 'Which of your repositories use this package?',
            points: ['Connects to your GitHub', 'Search a package, get every repo using it', 'Agnostic: Packagist, npm, PyPI and more', 'Add your own package manager by implementing an interface'],
          },
        },
      },
      stack: {
        title: 'My toolbox',
        intro: 'Laravel is home. But a good craftsman knows the whole workshop.',
        tabs: { all: 'All', backend: 'Backend', frontend: 'Frontend', devops: 'DevOps & Data', gamedev: 'Game Dev' },
      },
      contact: {
        title: "Let's build something",
        lead: 'Looking for a Laravel developer, a sparring partner for architecture or someone to talk games with? Drop me a message on LinkedIn.',
        linkedin: 'Message me on LinkedIn',
        github: 'GitHub',
        gameIntro: 'Got a minute? A tiny 2D tribute to my thesis. Steer with <kbd>←</kbd> <kbd>→</kbd> / <kbd>A</kbd> <kbd>D</kbd> or tap left and right. Dodge the trees!',
      },
      game: {
        label: 'Snowboarding mini game',
        score: 'Score',
        best: 'Best',
        start: 'Start',
        retry: 'Retry',
        hint: 'Press <kbd>Space</kbd> or tap to start',
        over: 'Score: <b>{score}</b> · Press <kbd>Space</kbd> or tap',
        quips: ['Wipeout! 🌲', 'Tree: 1, You: 0', "Should've used VR 🥽", 'Bailed! Try again', 'Nice run! 🏂'],
      },
      footer: {
        built: 'Plain HTML, CSS & JS. No framework, no build step.',
        egg: 'psst… try the Konami code ↑↑↓↓←→←→BA',
      },
    },

    de: {
      meta: {
        title: 'Hussam Itani · Laravel Full-Stack Developer & Game-Dev-Fan',
        description: 'Hussam Itani, Laravel Full-Stack-Entwickler und Product Owner bei byte5. PHP seit 2015, Laravel seit 2016. Game Dev und VR im Herzen.',
      },
      nav: { about: 'Über mich', journey: 'Werdegang', projects: 'Projekte', stack: 'Toolbox', contact: 'Kontakt', menu: 'Menü öffnen', top: 'Nach oben', lang: 'Switch language to English' },
      hero: {
        hello: 'Hi, ich bin',
        lead: 'Seit über zehn Jahren baue ich Webanwendungen mit <strong class="accent">Laravel</strong> &amp; PHP. Und <strong class="accent-2">Games</strong> begleiten mich schon mein ganzes Leben.',
        journey: 'Zu meinem Werdegang',
        play: 'Kleines Spiel gefällig? ▶',
        roles: [
          'Full-Stack Developer @ byte5',
          'Product Owner @ byte5',
          'Laravel seit 2016',
          'php artisan make:awesome',
          'FilamentPHP-Fan',
          'VR-Forscher & Game Dev',
        ],
        terminal: {
          role: 'Full-Stack Dev & PO',
          experience: '10+ Jahre',
          hobby: 'Game Dev (Unity, VR)',
          tests: ['schreibt sauberen Code', 'liefert pünktlich', 'liebt Games'],
          passed: '3 bestanden',
        },
        scroll: 'Nach unten scrollen',
      },
      about: {
        title: 'Über mich',
        photo: 'Porträt von Hussam Itani',
        p1: 'Ich bin <strong>Full-Stack-Entwickler</strong>, schreibe PHP seit 2015 und <strong>Laravel seit 2016</strong>. Ich baue APIs, Plattformen und Produkte, die Menschen jeden Tag nutzen. Von EdTech für Schulen bis zu digitalen Services für die öffentliche Verwaltung.',
        p2: 'Studiert habe ich <strong>Computervisualistik</strong> an der <strong>Universität Koblenz</strong>. Dort haben mich Computergrafik, 3D und interaktive Welten gepackt. Für meine Bachelorarbeit habe ich ein VR-Snowboard-Spiel in Unity gebaut und untersucht, wie verschiedene Controller Immersion und Motion Sickness beeinflussen.',
        p3: 'Heute bin ich Full-Stack-Entwickler und Product Owner bei <strong class="accent">byte5</strong>. Nach Feierabend baue ich Open-Source-Tools mit FilamentPHP und tüftle immer noch gern an Game Engines.',
        stats: { years: 'Jahre PHP & Laravel', oss: 'Open-Source-Projekte', games: 'Games & Projekte', coffee: 'Tassen Kaffee' },
      },
      journey: {
        title: 'Mein Werdegang',
        intro: 'Alle Speicherpunkte bisher. Der neueste zuerst.',
        current: 'Aktuelles Level',
        level: 'Level',
        tutorial: 'Tutorial',
        since: 'seit',
        jobs: {
          byte5: { role: 'Laravel Full-Stack Developer & Product Owner', points: ['Full-Stack Laravel-Anwendungen für Kunden', 'Product Ownership: Backlog, Prioritäten, Stakeholder', 'Fokus auf saubere Architektur und Qualität'] },
          publicplan: { role: 'Symfony Backend Developer', points: ['Backend-Entwicklung mit Symfony', 'Digitale Services für die öffentliche Verwaltung'] },
          sdui: { role: 'Laravel Developer', points: ['Vor allem Backend für eine EdTech-Plattform, die Schulen, Lehrkräfte, Schüler und Eltern verbindet', 'Onboarding und Schulung neuer Entwickler'] },
          venture: { role: 'Atlassian App Developer', points: ['Jira- und Confluence-Apps in Java', 'Für Atlassian Server, nicht Cloud', 'Erster Vollzeitjob nach dem Studium'] },
          freelance: { name: 'Freelance', role: 'Webentwickler, parallel zum Studium', points: ['Websites, Onlineshops, Dashboards und APIs für Kunden', 'WordPress, WooCommerce, Shopify, Laravel und klassische Websites', 'Webhosting und DevOps'] },
          ptc: { role: 'Webentwickler', points: ['WordPress und WooCommerce', 'Erste professionelle Schritte mit PHP'] },
          uni: { name: 'Universität Koblenz', role: 'B.Sc. Computervisualistik', points: ['Computergrafik, Bildverarbeitung, 3D und Interaktion', 'Bachelorarbeit: Spielecontroller vs. Immersion und Motion Sickness in VR'] },
        },
      },
      projects: {
        title: 'Projekte',
        intro: 'Was ich nach Feierabend baue. Fahr mit der Maus über eine Karte oder tippe drauf, um sie umzudrehen.',
        flip: 'Details anzeigen',
        soon: 'Kommt bald',
        more: 'Mehr kommt bald',
        github: 'Auf GitHub ansehen',
        items: {
          thesis: {
            tag: 'Bachelorarbeit · 2019',
            title: 'VR Snowboarding',
            tagline: 'Wie beeinflussen verschiedene Spielecontroller Immersion und Motion Sickness in VR?',
            points: ['Selbst gebautes VR-Snowboard-Spiel in Unity', 'Wii Balance Board vs. Xbox-Controller', '3 Strecken: geradeaus, eine Kurve, Sprünge', 'Motion Sickness war mit dem Controller deutlich höher', 'Die Punktzahlen waren fast gleich'],
            link: 'Bachelorarbeit lesen (PDF)',
          },
          split: {
            tag: 'Open Source',
            title: 'Split',
            tagline: 'Einfaches Projektmanagement mit FilamentPHP.',
            points: ['Tickets ohne Overhead', 'Konfigurierbares Ticket-Typ-Schema', 'Konfigurierbares Ticket-Status-Schema', 'Konfigurierbares Ticket-Prioritäts-Schema'],
          },
          pisa: {
            tag: 'Open Source',
            title: 'Pisa',
            tagline: 'Ein vereinfachtes PIM mit Produktfamilien im Mittelpunkt.',
            points: ['Produktfamilien im Fokus', 'Flexible Attribute per EAV', 'Eigene Felder in Filament verwalten', 'Produkte in Filament oder per API verwalten'],
          },
          structured: {
            tag: 'Claude Code Skill',
            title: 'Structured Response',
            tagline: 'Macht Claudes Antworten übersichtlich und einheitlich.',
            points: ['Feste Abschnitte: was, wie, was schiefging, nächste Schritte, To-dos', 'Ergebnis zuerst, Details danach, offene Punkte zuletzt', 'Fließtext für Fragen, Struktur für echte Arbeit', 'Gemacht für lange Terminal-Sessions'],
          },
          scanner: {
            tag: 'Open Source',
            title: 'Agnostic Package Scanner',
            tagline: 'Welche deiner Repositories nutzen dieses Paket?',
            points: ['Verbindet sich mit deinem GitHub', 'Paket suchen, alle Repos sehen, die es nutzen', 'Agnostisch: Packagist, npm, PyPI und mehr', 'Eigenen Paketmanager per Interface ergänzen'],
          },
        },
      },
      stack: {
        title: 'Meine Toolbox',
        intro: 'Laravel ist mein Zuhause. Aber ein guter Handwerker kennt die ganze Werkstatt.',
        tabs: { all: 'Alle', backend: 'Backend', frontend: 'Frontend', devops: 'DevOps & Daten', gamedev: 'Game Dev' },
      },
      contact: {
        title: 'Lass uns was bauen',
        lead: 'Du suchst einen Laravel-Entwickler, einen Sparringspartner für Architektur oder willst einfach über Games quatschen? Schreib mir auf LinkedIn.',
        linkedin: 'Schreib mir auf LinkedIn',
        github: 'GitHub',
        gameIntro: 'Kurz Zeit? Eine kleine 2D-Hommage an meine Bachelorarbeit. Steuern mit <kbd>←</kbd> <kbd>→</kbd> / <kbd>A</kbd> <kbd>D</kbd> oder links und rechts tippen. Weich den Bäumen aus!',
      },
      game: {
        label: 'Snowboard-Minispiel',
        score: 'Punkte',
        best: 'Rekord',
        start: "Los geht's",
        retry: 'Nochmal',
        hint: 'Drück <kbd>Leertaste</kbd> oder tippe zum Starten',
        over: 'Punkte: <b>{score}</b> · <kbd>Leertaste</kbd> oder tippen',
        quips: ['Wipeout! 🌲', 'Baum: 1, Du: 0', 'Hättest mal VR genommen 🥽', 'Abgeflogen! Nochmal', 'Starke Fahrt! 🏂'],
      },
      footer: {
        built: 'Reines HTML, CSS & JS. Kein Framework, kein Build-Step.',
        egg: 'psst… probier mal den Konami-Code ↑↑↓↓←→←→BA',
      },
    },
  };

  const STORAGE_KEY = 'lang';
  const listeners = [];

  const detect = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && DICT[saved]) return saved;
    } catch (_) {}
    return (navigator.language || 'en').toLowerCase().startsWith('de') ? 'de' : 'en';
  };

  let lang = detect();
  document.documentElement.lang = lang;

  const lookup = (dict, key) => key.split('.').reduce((o, k) => (o == null ? o : o[k]), dict);
  const t = (key) => lookup(DICT[lang], key) ?? lookup(DICT.en, key) ?? key;

  const apply = () => {
    document.documentElement.lang = lang;
    document.title = t('meta.title');
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'));
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.setAttribute('alt', t(el.dataset.i18nAlt)); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.classList.toggle('is-active', el.dataset.lang === lang);
    });
    listeners.forEach(cb => cb(lang));
  };

  const set = (next) => {
    if (!DICT[next] || next === lang) return;
    lang = next;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
    apply();
  };

  return {
    t,
    set,
    apply,
    get lang() { return lang; },
    onChange: (cb) => listeners.push(cb),
  };
})();
