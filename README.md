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
- **Title:** Data Engineer
- **Experience (Aligned with official Resume PDF):**
  1. *Sensual Studio DOO (Февраль 2025 — Сентябрь 2026):* Системный аналитик (Автоматизация на базе ИИ с экономией 40 ч/нед, ClickHouse/PostgreSQL 4× speedup на 20M+ строк, 12 дашбордов Tableau/Power BI, ТЗ/SRS для 10+ стейкхолдеров).
  2. *Sensual Studio DOO (Сентябрь 2023 — Февраль 2025):* Инженер-разработчик (Высоконагруженный пайплайн 10 000 eps с latency <50 мс, +12% Retention, A/B-тестирование, 50 000+ MAU).
  3. *Standard Sats (Октябрь 2021 — Сентябрь 2023):* Flutter-разработчик (Анализ транзакций, мобильные приложения Flutter на 150 000+ MAU с Crash-free 99.9%, Docs-as-Code).
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
