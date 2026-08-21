# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Overview

Personal academic portfolio website for Di Weng (dwe.ng), built with SolidStart + Tailwind CSS, deployed on Cloudflare Pages. Supports English and Chinese (i18n).

## Commands

- `pnpm dev` — start dev server (vinxi)
- `pnpm build` — production build (vinxi, outputs prerendered static pages)
- `pnpm start` — start production server

Package manager: **pnpm**

## Architecture

**SolidStart** app using file-based routing via `@solidjs/router` with vinxi as the build tool.

### Routing

Routes live in `src/routes/[locale]/`. The `[locale]` param is `en` or `zh`. The root fallback (`src/routes/[...fallback].tsx`) redirects `/` to `/en/about/`. All routes are prerendered (listed in `app.config.ts`).

### i18n

- Locale type and hooks (`useLocale`, `useTranslator`) defined in `src/config/locale.ts`
- Translation dictionaries: `src/i18n/en.json` and `src/i18n/zh.json`
- Most content config files (info, news, students, vita) provide locale-keyed data directly rather than using the i18n JSON files

### Content Configuration

Site content is defined as TypeScript data in `src/config/`:
- `info.ts` — personal info, bio, contact links (per locale)
- `publications.ts` — publication entries grouped by year
- `authors.ts` — author name mappings
- `featured.ts` — featured publication selections
- `filters.ts` — publication filter definitions
- `news.ts` — news/updates
- `students.ts` — student listings
- `vita.ts` — CV/vita entries

To update site content (add publications, news, etc.), edit the corresponding config file. No database or CMS is involved.

### Layout

`src/app.tsx` defines the root layout: sidebar (`InfoSidebar`) + main content area with `Nav` on top. Path alias `~/` maps to `src/`.

### Styling

- Tailwind CSS 3 with PostCSS/autoprefixer (`postcss.config.cjs`, `tailwind.config.cjs`)
- Global styles in `src/app.css` using CSS custom properties (`--color-link`, `--color-bg`, etc.) for light/dark theming
- Font: IBM Plex Sans loaded from Google Fonts in `src/app.tsx`
- Dark mode uses `prefers-color-scheme` media query (automatic, no toggle)
- FontAwesome icons via `solid-fa` (client-only loaded to avoid SSR issues)
- Prettier config: no semicolons, single quotes, single attribute per line (`.prettierrc.json`)

### Build Notes

- Build tool is **vinxi** (wraps Vite); invoked via `pnpm build` / `pnpm dev`
- Build prerenders all routes listed in `app.config.ts` as static HTML
- Output goes to `.output/` (`.output/public` for static assets, `.output/server` for node server)
- The `solid-fa` icon component is wrapped in `clientOnly()` wherever used to avoid SSR hydration issues
- Cloudflare Pages limits each site asset to 25 MiB (26,214,400 bytes). Before adding or replacing paper PDFs, run `find public -type f -size +26214400c -print`; any reported asset must be reduced below the limit or hosted externally before deployment.
