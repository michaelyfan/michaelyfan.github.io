# CLAUDE.md

## Project

Personal site served via GitHub Pages at the apex domain in `CNAME` (michaelfan.me). Single-page static site; no build pipeline, no package manager, no framework.

## Layout

- `index.html`: the entire page. Two `<main>` regions inside `.app`: the primary one (sections: hero, about, projects, work, education, contact, résumé, footer) and `.extras` (a "scrap drawer" subpage). Which one is visible is controlled by `[data-route]` on `.app`. The sidebar (and the mobile bar at <900px) is the nav.
- `css/index.css`: plain CSS, hand-edited (no SCSS, no preprocessor). Theme via CSS custom properties on `:root`; dark mode via `html[data-theme="dark"]`. Responsive breakpoints at 1040px, 900px, 480px.
- `js/index.js`: vanilla JS, no dependencies. Behaviors: theme toggle (persisted to `localStorage` under `mf-theme`), hash routing (`#extras` shows the scrap drawer, anything else shows main), scroll-spy on the sidebar nav, smooth-scroll on nav clicks, mobile menu open/close.
- `images/`: referenced from HTML (`<img>`). `images/projects/` is gitignored via `*.png` in `.gitignore`; the new design no longer uses those PNGs (project frames are inline SVG diagonal-stripe placeholders with a glyph letter).
- `js/michaelfan.me/archive/`: old copy of the site, not served. Ignore unless explicitly asked.

## External dependencies (CDN, no lockfile)

- Google Fonts: Roboto Serif, Roboto, JetBrains Mono. Loaded by `<link>` in `index.html`.

## Conventions

- IDs and classes are kebab-case in HTML, used in both `css/index.css` and `js/index.js`. Renaming requires updating all three.
- Sidebar nav links use `data-nav="<id>"` and target sections marked `data-spy="<id>"`. Adding a new section means: add the `<section>` with `data-spy`, plus an `<a data-nav>` in both the sidebar and the mobile-bar nav lists.
- The active branch is `overhaul`; PRs target `master`.

## Voice & content

Copy across the site is **lowercase, conversational, and a touch playful; still professional.** Think "design-y personal site" rather than corporate bio: lowercase running text and UI labels, the occasional aside, and a small wink in places like the footer ("no analytics, no cookies, no nonsense"). Italicize a single phrase per paragraph with `<em>` for the serif accent; companies, schools, or whatever's worth a beat.

A few firm rules:

- **Capitalize proper nouns properly** (`Expedia Group`, `Georgia Institute of Technology`, `Itential`). The one exception is the author's own name, which is intentionally styled lowercase everywhere it appears (`michael fan`).
- **No em-dashes (`—`).** Use a semicolon, a period, a comma, or restructure the sentence. En-dashes (`–`) for numeric ranges (`2017–2021`) are fine.
- Avoid corporate filler ("leveraged synergies"), avoid emoji, and avoid anything that reads like a résumé bullet outside the actual résumé section.

## When editing

- The résumé is an embedded Google Drive iframe; link IDs are hard-coded in `index.html`.
- Project tiles: each is an `<article class="project">` containing a `.project-frame` (SVG stripe pattern + a `.project-glyph` letter) and `.project-meta`. Odd-indexed cards in the grid get `style="--offset: 28px;"` for the staggered layout.
- Accent color is `--accent` on `:root`; change once to retint italic emphasis, hand-drawn underlines, hover states, etc.
- The original Claude Design handoff (placeholder copy that didn't ship) is preserved at `.claude/DESIGN_INSPIRATION.md` for future reference.
