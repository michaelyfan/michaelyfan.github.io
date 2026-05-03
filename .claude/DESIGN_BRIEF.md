# Personal Website — Design Brief

## Color System (OKLCH)

**Light mode (default — "cream paper")**
- `--bg` warm cream `oklch(96% 0.018 80)` — page background
- `--bg-2` slightly darker cream `oklch(93% 0.022 80)` — portrait/project frame fills, résumé card
- `--ink` deep warm-black `oklch(22% 0.02 60)` — primary text
- `--ink-soft` `oklch(40% 0.015 60)` — body prose
- `--ink-mute` `oklch(58% 0.01 60)` — meta/dates/captions
- `--rule` `oklch(86% 0.018 80)` — borders, dividers
- `--accent` warm tomato `#d6502d` (≈ `oklch(62% 0.16 35)`) — italic name, links, underline marks
- `--accent-soft` `oklch(88% 0.05 35)` — subtle highlight tint (currently unused after pill removal)

**Dark mode ("night")**
- `--bg` deep blue-black `oklch(18% 0.015 250)`
- `--bg-2` `oklch(22% 0.02 250)`
- `--ink` cream `oklch(94% 0.012 80)`
- `--ink-soft` `oklch(80% 0.012 80)`
- `--ink-mute` `oklch(62% 0.01 80)`
- `--rule` `oklch(28% 0.02 250)`
- `--accent` brightened tomato `oklch(72% 0.14 35)`

User-controlled via the **night/day toggle** in the sidebar foot. Defaults to light. Accent and density adjustable in the design Tweaks panel (not user-facing).

## Typography

- **Serif:** Roboto Serif (variable, opsz 8–144, weights 400/500/600 + italics) — name, section headers, hero headline, work company names, education degrees, blockquotes, résumé doc title, extras italic accents, theme toggle.
- **Sans:** Roboto (400/500/600) — body copy, hero tagline, project blurbs, work notes, navigation, contact lines.
- **Mono:** JetBrains Mono (400/500) — dates, periods, tags, kicker labels, fineprint, "what I use" keys.

**Italics policy:** italics reserved for emphasis and "voice" — *Michael* in hero, the "extras" sidebar entry, italicized company names, "currently reading" titles, guestbook quotes. Section headers, "thanks for reading," and the hero tagline are intentionally upright.

**Type scale** (clamped for fluid responsive sizing):
- Hero name: `clamp(36px, 5.4vw, 64px)`, weight 500, letter-spacing -0.02em
- Section header: `clamp(32px, 4vw, 48px)`, weight 500
- Extras h1: `clamp(40px, 5.6vw, 68px)`
- Hero tagline / contact prose / résumé prompt: 17–22px
- Body: 15–17px, line-height 1.6–1.7
- Mono labels: 10.5–12px, letter-spacing 0.04–0.16em, often uppercase

## Layout

- **Desktop:** two-column, sticky 280px left sidebar + flowing main column inside a 1180px max-width container with 32px page padding.
- **Tablet (≤1040px):** sidebar collapses to 240px, main padding tightens.
- **Mobile (≤900px):** sidebar disappears entirely; replaced by a sticky top bar with a "menu" toggle that reveals the section list. Single-column body.
- **Small mobile (≤480px):** further tightening of meta and résumé doc padding.

The about, work, education, contact, and résumé sections use two-column grids that all use `minmax(0, 1fr)` to prevent prose overflow.

## Pages & Routing

- **Main page** (`/` or no hash): single-page scroll with sections `about → projects → work → education → contact → résumé`.
- **Extras page** (`#extras`): a separate "scrap drawer" page with its own scaffold sections (currently reading, writing, what I use, elsewhere on the web, guestbook). Has back-to-main links at top and bottom. Reachable only from the sidebar's italic "extras" link (separated by a dashed rule).

State is hash-based; back/forward buttons work.

## Component Vocabulary

- **Sidebar:** name (italic *michael* + serif "fan"), nav list (sans, active = bold no decoration), italic serif "extras" below a dashed divider, italic serif day/night toggle pill in the foot.
- **Mobile bar:** sticky, name + menu toggle, expands to a stacked list including extras.
- **Section title:** serif heading + hand-drawn underline SVG path in accent color.
- **Project card:** placeholder art frame (45° stripe pattern + centered SVG mark) in a 4:3 ratio; alternating cards offset by +28px on the y-axis for visual rhythm; sans title with monospace year on the same baseline; small monospace tag pills.
- **Work item:** monospace period above an accent-colored top rule, sans role with italic serif company name in accent color, em-dash–prefixed bullet notes.
- **Education:** plain text rows (no card), monospace period column + serif body.
- **Contact:** prose left, line-by-line channel list right; each row hovers with a leftward nudge and accent recolor.
- **Résumé:** mini "doc preview" rendered in monospace alongside a "Download PDF" button and an offer to email a tailored copy.
- **Footer:** "thanks for reading." (serif, upright), copyright fineprint in mono.

## Tone & Voice

Quiet, literary, slightly confessional. Lowercase nav and section names ("about", "work"). Sentences welcome long-form punctuation (em-dashes, semicolons). Bio leans on small, concrete particulars rather than corporate phrasing. Avoids tech slop: no big stat counters, no hero photo glamor shot (currently a placeholder portrait), no marketing CTAs.

## Inspiration & Anti-Inspiration

Inspired by Erika Lynne Hanson's sticky-sidebar artist site and the warmth of Tamara Sredojevic's palette; the literary editorial cadence of Jendrik Illner. Explicitly avoids: gradient backgrounds, emoji decoration, generic dev-portfolio chrome, dense data slop, lucide-style icon walls.

## Tweaks Panel (design-time only, not user-facing)

- **Theme:** light / dark (also exposed publicly as the day/night toggle)
- **Accent:** color picker
- **Density:** compact / spacious — adjusts vertical padding on main and section blocks

## Tech & Constraints

- Fonts loaded from Google Fonts.
- Hash-based routing, no analytics, no tracking, no third-party widgets.

## Known Placeholders / Open Questions a PM Would Ask

- Real portrait photo (currently a striped frame placeholder)
- Real project thumbnails (currently SVG iconographic placeholders)
- Real bio copy (current text is plausible filler)
- Real project list, work history, education details
- Real résumé PDF (button currently links to `#resume.pdf`)
- Real contact handles (placeholder `/michael` paths)

- SEO/meta tags, OG image, favicon — not yet implemented
- Analytics decision (currently none, by design — confirm)
- Domain + hosting + deploy pipeline