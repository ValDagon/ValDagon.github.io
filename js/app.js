/* ==========================================================================
   Valentin Kazantsev · Cosmic Engineering Portfolio
   Client-side rendering, dynamic i18n (RU / EN / SR), starfield generation,
   1-click contact copying, and navigation state.
   ========================================================================== */

(function () {
  "use strict";

  var LANGS = { ru: true, en: true, sr: true };
  var html = document.documentElement;
  var state = { lang: pickLang() };
  var currentSection = "";
  var toastTimeout = null;

  /* ---------- SVG Icon Library ---------- */
  var SVG_ICONS = {
    send: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>',
    mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>',
    github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>',
    linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
    "external-link": '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>',
    globe: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>',
    cpu: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>',
    database: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></svg>',
    "trending-down": '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg>',
    zap: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
    "bar-chart": '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>',
    terminal: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>',
    "map-pin": '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
    "file-text": '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>',
    code: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    copy: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>',
    check: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
    "arrow-right": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>',
    award: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>',
  };

  function getIcon(name) {
    return SVG_ICONS[name] || SVG_ICONS.globe;
  }

  /* ---------- Language Selection & Persistence ---------- */
  function pickLang() {
    var q = new URLSearchParams(window.location.search).get("lang");
    if (q) {
      q = q.toLowerCase();
      if (q === "sr-latn" || q === "srp") q = "sr";
      if (LANGS[q]) return q;
    }
    try {
      var stored = window.localStorage.getItem("vk-lang");
      if (stored && LANGS[stored]) return stored;
    } catch (e) {}
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "";
    nav = String(nav).toLowerCase();
    if (nav.indexOf("sr") === 0 || nav.indexOf("hr") === 0 || nav.indexOf("bs") === 0) return "sr";
    if (nav.indexOf("ru") === 0) return "ru";
    if (nav.indexOf("en") === 0) return "en";
    return "ru";
  }

  function persistLang(lang) {
    try {
      window.localStorage.setItem("vk-lang", lang);
    } catch (e) {}
    var url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url);
  }

  function t(map) {
    if (!map) return "";
    return map[state.lang] || map.ru || "";
  }

  function UI(key) {
    return t(SITE.ui[key]);
  }

  function byId(id) {
    return document.getElementById(id);
  }

  /* ---------- Date Formatting ---------- */
  function monYear(iso) {
    if (!iso) return "";
    if (/^\d{4}$/.test(iso)) return iso;
    var parts = iso.split("-");
    var months = (SITE.months && (SITE.months[state.lang] || SITE.months.ru)) || [];
    var monIdx = Number(parts[1]) - 1;
    return (months[monIdx] || "") + " " + parts[0];
  }

  function dateRangeString(from, to) {
    var fromStr = monYear(from);
    var toStr = to ? monYear(to) : UI("present");
    return fromStr + " — " + toStr;
  }

  /* ---------- Starfield Generation ---------- */
  function generateStarfield() {
    var container = byId("starfield");
    if (!container || container.children.length > 0) return;

    var starCount = 36;
    for (var i = 0; i < starCount; i++) {
      var star = document.createElement("div");
      star.className = "star";
      var left = (Math.random() * 100).toFixed(2);
      var top = (Math.random() * 100).toFixed(2);
      var duration = (3.5 + Math.random() * 4).toFixed(2);
      var delay = (Math.random() * 5).toFixed(2);
      star.style.left = left + "%";
      star.style.top = top + "%";
      star.style.setProperty("--duration", duration + "s");
      star.style.setProperty("--delay", delay + "s");
      container.appendChild(star);
    }
  }

  /* ---------- Toast Notification & Clipboard ---------- */
  function showToast(message) {
    var toast = byId("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function () {
      toast.classList.remove("show");
    }, 2400);
  }

  function copyToClipboard(text, btnNode) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        handleCopySuccess(btnNode);
      }).catch(function () {
        fallbackCopy(text, btnNode);
      });
    } else {
      fallbackCopy(text, btnNode);
    }
  }

  function fallbackCopy(text, btnNode) {
    var input = document.createElement("textarea");
    input.value = text;
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.focus();
    input.select();
    try {
      document.execCommand("copy");
      handleCopySuccess(btnNode);
    } catch (e) {
      showToast(text);
    }
    document.body.removeChild(input);
  }

  function handleCopySuccess(btnNode) {
    showToast(UI("copied"));
    if (btnNode) {
      btnNode.innerHTML = getIcon("check");
      setTimeout(function () {
        btnNode.innerHTML = getIcon("copy");
      }, 1800);
    }
  }

  /* ---------- Render Functions ---------- */
  function render() {
    try {
      if (typeof SITE === "undefined") {
        console.error("[app] SITE is undefined — data.js failed to load");
        return;
      }
      setMeta();
      renderChrome();
      renderHero();
      renderExperience();
      renderCases();
      renderStack();
      renderEducation();
      renderContacts();
      renderFooter();
      syncLangPills();
    } catch (err) {
      console.error("[app] Render error:", err);
    }
  }

  function setMeta() {
    var meta = SITE.meta[state.lang] || SITE.meta.ru;
    var langAttr = state.lang === "sr" ? "sr-Latn" : state.lang;
    html.lang = langAttr;
    document.title = meta.title;

    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", meta.description);

    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);

    var ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute(
        "content",
        state.lang === "en" ? "en_US" : state.lang === "sr" ? "sr_Latn_ME" : "ru_RU"
      );
    }

    var twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", meta.title);

    var twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", meta.description);
  }

  function renderChrome() {
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      var val = UI(key);
      if (val) node.textContent = val;
    });

    var langLabel = byId("lang-label");
    if (langLabel) langLabel.textContent = UI("langLabel");
  }

  function renderHero() {
    var statusText = byId("hero-status-text");
    if (statusText) statusText.textContent = t(SITE.hero.status);

    var heroTitle = byId("hero-title-text");
    if (heroTitle) heroTitle.textContent = t(SITE.hero.title);

    var heroAbout = byId("hero-about-text");
    if (heroAbout) heroAbout.textContent = t(SITE.hero.about);

    // Hero Stat Strip
    var stripWrap = byId("hero-stat-strip");
    if (stripWrap && SITE.hero.stats) {
      stripWrap.innerHTML = "";
      SITE.hero.stats.forEach(function (stat) {
        var statItem = document.createElement("div");
        statItem.className = "stat-card-item";

        var iconWrap = document.createElement("div");
        iconWrap.className = "icon-badge icon-badge-cyan";
        iconWrap.innerHTML = getIcon(stat.icon);

        var content = document.createElement("div");
        content.className = "stat-card-content";

        var valSpan = document.createElement("span");
        valSpan.className = "stat-value";
        valSpan.textContent =
          state.lang === "en"
            ? stat.valueEn || stat.value
            : state.lang === "sr"
            ? stat.valueSr || stat.value
            : stat.value;

        var labelSpan = document.createElement("span");
        labelSpan.className = "stat-label";
        labelSpan.textContent = t(stat.label);

        var descSpan = document.createElement("span");
        descSpan.className = "stat-desc";
        descSpan.textContent = t(stat.desc);

        content.appendChild(valSpan);
        content.appendChild(labelSpan);
        content.appendChild(descSpan);

        statItem.appendChild(iconWrap);
        statItem.appendChild(content);
        stripWrap.appendChild(statItem);
      });
    }
  }

  function renderExperience() {
    var wrap = byId("jobs");
    if (!wrap || !SITE.experience) return;
    wrap.innerHTML = "";

    SITE.experience.forEach(function (job) {
      var item = document.createElement("div");
      item.className = "timeline-item";

      var node = document.createElement("div");
      node.className = "timeline-node";
      node.setAttribute("aria-hidden", "true");
      item.appendChild(node);

      var card = document.createElement("article");
      card.className = "timeline-card glass-card";

      var spotlight = document.createElement("div");
      spotlight.className = "card-spotlight";
      card.appendChild(spotlight);

      var head = document.createElement("div");
      head.className = "timeline-card-head";

      var roleWrap = document.createElement("div");
      var roleTitle = document.createElement("h3");
      roleTitle.className = "timeline-role";
      roleTitle.textContent = t(job.role);

      var metaRow = document.createElement("div");
      metaRow.className = "timeline-meta-row";

      var orgSpan = document.createElement("span");
      orgSpan.className = "timeline-org";
      orgSpan.textContent = job.org;

      var dot = document.createTextNode(" • ");

      var placeSpan = document.createElement("span");
      placeSpan.className = "timeline-place";
      placeSpan.textContent = t(job.place);

      metaRow.appendChild(orgSpan);
      metaRow.appendChild(dot);
      metaRow.appendChild(placeSpan);

      roleWrap.appendChild(roleTitle);
      roleWrap.appendChild(metaRow);

      var dateBadge = document.createElement("span");
      dateBadge.className = "timeline-date-badge mono";
      dateBadge.textContent = dateRangeString(job.from, job.to);

      head.appendChild(roleWrap);
      head.appendChild(dateBadge);
      card.appendChild(head);

      var bulletsList = document.createElement("ul");
      bulletsList.className = "timeline-bullets";

      var points = job.points[state.lang] || job.points.ru || [];
      points.forEach(function (point) {
        var li = document.createElement("li");
        li.className = "timeline-bullet";

        // Bold metric heading before colon
        var colonIdx = point.indexOf(":");
        if (colonIdx > 0 && colonIdx < 45) {
          var strong = document.createElement("strong");
          strong.textContent = point.slice(0, colonIdx + 1);
          li.appendChild(strong);
          li.appendChild(document.createTextNode(point.slice(colonIdx + 1)));
        } else {
          li.textContent = point;
        }
        bulletsList.appendChild(li);
      });

      card.appendChild(bulletsList);
      item.appendChild(card);
      wrap.appendChild(item);
    });
  }

  function renderCases() {
    var wrap = byId("cases-list");
    if (!wrap || !SITE.cases) return;
    wrap.innerHTML = "";

    SITE.cases.forEach(function (item) {
      var card = document.createElement("article");
      card.className = "case-card glass-card";

      var spotlight = document.createElement("div");
      spotlight.className = "card-spotlight";
      card.appendChild(spotlight);

      var topRow = document.createElement("div");
      topRow.className = "case-card-top";

      var iconBadge = document.createElement("div");
      iconBadge.className = "icon-badge icon-badge-cyan";
      iconBadge.innerHTML = getIcon(item.icon || "cpu");

      var statusPill = document.createElement("span");
      statusPill.className = "status-pill status-" + (item.status || "internal");
      statusPill.textContent = UI(item.status || "internal");

      topRow.appendChild(iconBadge);
      topRow.appendChild(statusPill);
      card.appendChild(topRow);

      var title = document.createElement("h3");
      title.className = "case-title";
      if (item.url) {
        var a = document.createElement("a");
        a.href = item.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = t(item.title);
        title.appendChild(a);
      } else {
        title.textContent = t(item.title);
      }
      card.appendChild(title);

      var summary = document.createElement("p");
      summary.className = "case-summary";
      summary.textContent = t(item.summary);
      card.appendChild(summary);

      var resBox = document.createElement("div");
      resBox.className = "case-result-box";
      var resLabel = document.createElement("span");
      resLabel.className = "case-result-label";
      resLabel.textContent = UI("resultLabel");
      var resText = document.createElement("span");
      resText.className = "case-result-text";
      resText.textContent = t(item.result);
      resBox.appendChild(resLabel);
      resBox.appendChild(resText);
      card.appendChild(resBox);

      var tags = document.createElement("div");
      tags.className = "case-tags";
      (item.stack || []).forEach(function (st) {
        var pill = document.createElement("span");
        pill.className = "tag-pill";
        pill.textContent = st;
        tags.appendChild(pill);
      });
      card.appendChild(tags);

      if (item.url) {
        var linkRow = document.createElement("div");
        linkRow.className = "case-link-row";
        var link = document.createElement("a");
        link.className = "case-link";
        link.href = item.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.innerHTML = '<span>' + UI("openLink") + '</span> ' + getIcon("arrow-right");
        linkRow.appendChild(link);
        card.appendChild(linkRow);
      }

      wrap.appendChild(card);
    });
  }

  function renderStack() {
    var wrap = byId("stack-list");
    if (!wrap || !SITE.stackGroups) return;
    wrap.innerHTML = "";

    SITE.stackGroups.forEach(function (group) {
      var card = document.createElement("div");
      card.className = "stack-card glass-card";

      var spotlight = document.createElement("div");
      spotlight.className = "card-spotlight";
      card.appendChild(spotlight);

      var head = document.createElement("div");
      head.className = "stack-card-head";

      var iconBadge = document.createElement("div");
      iconBadge.className = "icon-badge icon-badge-violet";
      iconBadge.innerHTML = getIcon(group.icon || "file-text");

      var title = document.createElement("h3");
      title.className = "stack-card-title";
      title.textContent = t(group.title);

      head.appendChild(iconBadge);
      head.appendChild(title);
      card.appendChild(head);

      var desc = document.createElement("p");
      desc.className = "stack-card-desc";
      desc.textContent = t(group.items);
      card.appendChild(desc);

      var tags = document.createElement("div");
      tags.className = "stack-tags";
      (group.tags || []).forEach(function (tg) {
        var pill = document.createElement("span");
        pill.className = "tag-pill";
        pill.textContent = tg;
        tags.appendChild(pill);
      });
      card.appendChild(tags);

      wrap.appendChild(card);
    });
  }

  function renderEducation() {
    var wrap = byId("education-card");
    if (!wrap || !SITE.education) return;
    var edu = SITE.education;
    wrap.innerHTML = "";

    var card = document.createElement("div");
    card.className = "education-card glass-card";

    var spotlight = document.createElement("div");
    spotlight.className = "card-spotlight";
    card.appendChild(spotlight);

    var left = document.createElement("div");
    left.className = "education-card-left";

    var iconBadge = document.createElement("div");
    iconBadge.className = "icon-badge icon-badge-violet";
    iconBadge.innerHTML = getIcon("award");

    var info = document.createElement("div");
    info.className = "education-info";

    var degree = document.createElement("h3");
    degree.className = "education-degree";
    degree.textContent = t(edu.role);

    var org = document.createElement("span");
    org.className = "education-org";
    org.textContent = t(edu.org);

    var note = document.createElement("span");
    note.className = "education-note";
    note.textContent = t(edu.note);

    info.appendChild(degree);
    info.appendChild(org);
    info.appendChild(note);

    left.appendChild(iconBadge);
    left.appendChild(info);
    card.appendChild(left);

    var years = document.createElement("span");
    years.className = "education-years mono";
    years.textContent = edu.from + " — " + edu.to;
    card.appendChild(years);

    wrap.appendChild(card);
  }

  function renderContacts() {
    var intro = byId("contact-intro");
    if (intro) intro.textContent = t(SITE.ui.contactSubtitle);

    var legal = byId("legal");
    if (legal) legal.textContent = t(SITE.legal);

    var wrap = byId("contact-list");
    if (!wrap || !SITE.contacts) return;
    wrap.innerHTML = "";

    var list = SITE.contacts[state.lang] || SITE.contacts.ru || [];
    list.forEach(function (c) {
      var card = document.createElement("div");
      card.className = "contact-card glass-card";

      var spotlight = document.createElement("div");
      spotlight.className = "card-spotlight";
      card.appendChild(spotlight);

      var main = document.createElement("div");
      main.className = "contact-card-main";

      var iconBadge = document.createElement("div");
      iconBadge.className = "icon-badge icon-badge-cyan";
      iconBadge.innerHTML = getIcon(c.icon || "globe");

      var textWrap = document.createElement("div");
      textWrap.className = "contact-card-text";

      var label = document.createElement("span");
      label.className = "contact-label";
      label.textContent = c.label;

      var link = document.createElement("a");
      link.className = "contact-value-link";
      link.href = c.href;
      link.textContent = c.value;
      if (c.href.indexOf("http") === 0) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }

      textWrap.appendChild(label);
      textWrap.appendChild(link);
      main.appendChild(iconBadge);
      main.appendChild(textWrap);
      card.appendChild(main);

      if (c.copyValue) {
        var copyBtn = document.createElement("button");
        copyBtn.type = "button";
        copyBtn.className = "btn-copy";
        copyBtn.setAttribute("aria-label", UI("copy") + " " + c.label);
        copyBtn.title = UI("copy");
        copyBtn.innerHTML = getIcon("copy");
        (function (val, btn) {
          btn.addEventListener("click", function (e) {
            e.preventDefault();
            copyToClipboard(val, btn);
          });
        })(c.copyValue, copyBtn);
        card.appendChild(copyBtn);
      }

      wrap.appendChild(card);
    });
  }

  function renderFooter() {
    var copy = byId("foot-left");
    if (copy) {
      copy.textContent = "© " + new Date().getFullYear() + " Valentin Kazantsev";
    }
    var note = byId("foot-note");
    if (note) note.textContent = UI("footNote");
  }

  function syncLangPills() {
    document.querySelectorAll(".lang-pill").forEach(function (pill) {
      var lang = pill.getAttribute("data-lang");
      var isActive = lang === state.lang;
      pill.setAttribute("aria-pressed", isActive ? "true" : "false");
      pill.classList.toggle("is-active", isActive);
    });
  }

  /* ---------- Navigation & Scroll Spy ---------- */
  function markCurrentNav(id) {
    currentSection = id;
    document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(function (link) {
      var matches = link.getAttribute("href") === "#" + id;
      if (matches) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  function setupScrollSpy() {
    if (!("IntersectionObserver" in window)) return;
    var sections = ["top", "experience", "cases", "stack", "education", "contact"]
      .map(byId)
      .filter(Boolean);

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            markCurrentNav(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(function (sec) {
      observer.observe(sec);
    });
  }

  /* ---------- Event Handlers & Mobile Menu ---------- */
  function setupEvents() {
    document.querySelectorAll(".lang-pill").forEach(function (pill) {
      pill.addEventListener("click", function () {
        var newLang = pill.getAttribute("data-lang");
        if (!LANGS[newLang] || newLang === state.lang) return;
        state.lang = newLang;
        persistLang(newLang);
        render();
        if (currentSection) markCurrentNav(currentSection);
      });
    });

    var menuBtn = byId("mobile-menu-toggle");
    var drawer = byId("mobile-drawer");
    if (menuBtn && drawer) {
      menuBtn.addEventListener("click", function () {
        var isOpen = !drawer.hidden;
        drawer.hidden = isOpen;
        menuBtn.setAttribute("aria-expanded", String(!isOpen));
      });

      drawer.querySelectorAll(".mobile-nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
          drawer.hidden = true;
          menuBtn.setAttribute("aria-expanded", "false");
        });
      });
    }
  }

  /* ---------- Initialization ---------- */
  generateStarfield();
  persistLang(state.lang);
  render();
  setupEvents();
  setupScrollSpy();
})();
