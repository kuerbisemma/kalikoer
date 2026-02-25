# kalikoer

Astro-basierte Version der Website mit Komponenten-Architektur und statischem Output für GitHub Pages.

## Entwicklung

- `npm install`
- `npm run dev`

### Mit Docker Compose (lokale Entwicklung)

- `docker compose up --build`
- Website: `http://localhost:4321`

Hinweise:

- Hot Reload ist aktiviert und funktioniert auch mit Windows-Dateisystem-Mounts.
- Bei Änderungen an `package.json` danach einmal neu bauen: `docker compose up --build`.
- Stoppen mit `docker compose down`.

## Build

- `npm run build`
- Output liegt in `dist/`

## Deployment (GitHub Pages)

Bei Push auf `main` deployed die Workflow-Datei `.github/workflows/deploy.yml` automatisch nach GitHub Pages.

## Struktur

- `src/layouts/BaseLayout.astro` – gemeinsames Grundlayout
- `src/components/` – Top-Bar, Header, Footer, Cookie-Banner
- `src/pages/` – Seiten (`index.astro`, `archiv.astro`, `impressum.astro`)
- `scripts/sync-assets.mjs` – synchronisiert `styles.css` und `CNAME` nach `public/` (Bilder liegen direkt in `public/images/`)