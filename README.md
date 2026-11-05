# Valentin Kazantsev — Portfolio & Card (v7 Cosmic Engineering)

Personal multilingual portfolio and business card (RU / EN / SR-Latn) for GitHub Pages.

**Live:** https://valdagon.github.io/

## Design System

Adapted 1:1 from the cosmic engineering aesthetic of [Take the Space](https://takethe.space/):
- **Color Space:** OKLCH technical obsidian void (`oklch(8% 0.02 265)`), card surfaces (`oklch(12% 0.03 265)`), Electric Cyan (`oklch(72% 0.2 250)`), Precision Emerald (`oklch(74% 0.17 160)`).
- **Typography:** Space Grotesk (display/headings), Inter (body), JetBrains Mono (monospace metrics & code).
- **Atmosphere:** Architectural 24px dot-matrix obsidian surface, interactive macOS terminal, and Bento grid hierarchy.
- **Micro-Interactions:** Glassmorphic card hover spotlights, tactile active feedback (`transform: scale(0.97)`), 1-click contact copying with toast notifications.
- **Accessibility:** Semantic HTML, skip link, `:focus-visible` rings, `@media (prefers-reduced-motion: reduce)` support.

## Synchronized Resume Data

Fully aligned with Valentin Kazantsev's CV / Resume PDF:
- **Title:** Lead Systems Analyst & Data Analyst (Ведущий системный аналитик / аналитик данных)
- **Experience (5 Years Pure Commercial Stack, 2021–2026):**
  1. *Essential Studio (2024–н.в.):* Data Analyst / Lead Systems Analyst (Promotion: Engineer ➔ Data Analyst. Ollama local AI agents saving 40h/wk, ClickHouse/Postgres 4× speedup on 20M+ rows, 12 Tableau & Power BI live dashboards, SRS for 10+ stakeholders, 10k eps telemetry pipeline).
  2. *Fintech Platform & Investment Analytics (2023–2024):* Invest / Data Analyst (Belgrade. 10k+ daily transactions audit, A/B test statistics for 50k+ MAU, OpenAPI/Swagger financial integration specs).
  3. *Mobile & Tech Solutions (2021–2023):* Mobile / Flutter Developer (Montenegro. Flutter 150k+ MAU with 99.9% crash-free, REST/WebSocket client-server architecture, Docs-as-Code).
- **Education:** NUST MISIS, Moscow (2018–2022, BSc in Applied Informatics).
- **All 6 Competency Categories:** Systems Analysis, Databases & ETL, BI & Analytics, AI & Automation, Architecture & Engineering, Languages (RU, EN, SR).

## Run Locally

```bash
cd /Users/valentin/Work/my_cards/site
python3 -m http.server 4173
```

Open http://127.0.0.1:4173/?lang=ru (or `en`, `sr`).

## Deploy

```bash
git push origin main
```
