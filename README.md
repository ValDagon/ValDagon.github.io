# Valentin Kazantsev — Portfolio & Card (v7 Cosmic Engineering)

Personal multilingual portfolio and business card (RU / EN / SR-Latn) for GitHub Pages.

**Live:** https://valdagon.github.io/

## Design System

Adapted 1:1 from the cosmic engineering aesthetic of [Take the Space](https://takethe.space/):
- **Color Space:** OKLCH cosmic dark void background (`oklch(8% 0.02 265)`), card surfaces (`oklch(12% 0.03 265)`), Electric Cyan (`oklch(70% 0.2 250)`), Ultraviolet (`oklch(65% 0.22 280)`).
- **Typography:** Space Grotesk (display/headings), Inter (body), JetBrains Mono (monospace metrics & code).
- **Atmosphere:** Multi-layered twinkling starfield with randomized coordinates, animated pulsing radial glow blobs, and continuous cyan-to-violet gradient keyframes.
- **Micro-Interactions:** Glassmorphic card hover spotlights, tactile active feedback (`transform: scale(0.97)`), 1-click contact copying with toast notifications.
- **Accessibility:** Semantic HTML, skip link, `:focus-visible` rings, `@media (prefers-reduced-motion: reduce)` support.

## Synchronized Resume Data

Fully aligned with Valentin Kazantsev's CV / Resume PDF:
- **Title:** Lead Systems Analyst & Data Analyst (Ведущий системный аналитик / аналитик данных)
- **Experience:**
  1. *Sensual Studio DOO (2025–2026):* Lead Systems Analyst / Data Analyst (Ollama local AI agents saving 40h/wk, ClickHouse/Postgres 4× speedup on 20M+ rows, 12 Tableau & Power BI live dashboards, SRS for 10+ stakeholders).
  2. *Sensual Studio DOO (2023–2025):* Software Engineer / Data Pipeline Developer (10k eps telemetry pipeline with <50ms latency, +12% Retention, A/B test statistics, 50k+ MAU).
  3. *Standard Sats (2021–2023):* Software Engineer / Systems Engineer (10k+ transaction audits, Flutter 150k+ MAU with 99.9% crash-free, Docs-as-Code).
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
