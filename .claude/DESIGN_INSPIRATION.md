# Design Inspiration — content from Claude Design handoff

Saved 2026-05-08 from the Personal Website design handoff bundle. The redesigned site replaced this placeholder copy with real repo content (or lorem-ipsum stubs); this file preserves the original design copy for future reference.

Source: `claude.ai/design` bundle, `personal-website/project/app.jsx`.

---

## Hero

> hi, i'm *Michael* Fan
>
> software engineer, occasional essayist, very serious about breakfast. i build small, considered tools for writing and thinking.

## About prose

> i'm a software engineer in portland, oregon. i build interfaces that try to feel inevitable — the kind you don't notice because they get out of your way. lately that means a lot of work on collaborative editors and the small, persnickety details of typesetting on the web.
>
> before that i was the second engineer at a scheduling startup; before *that* i worked on data infrastructure for a climate research group. the through-line, if there is one, is a soft spot for tools that respect their users' attention.
>
> outside the editor: i bake bread (sourdough, mostly competent), keep a paper journal, and run a tiny zine with two friends. i answer email slowly but i answer it.

## Projects (lede + 4 entries)

> a handful of things i've made — some shipped, some quietly maintained, all built for an audience of mostly me.

| title | year | glyph | tags | blurb |
| --- | --- | --- | --- | --- |
| marginalia | 2025 | M | typescript, rust, side-project | a tiny annotation layer for the web. select any sentence, scribble a thought, send it to a friend. ~3k weekly readers. |
| field notes | 2024 | ✎ | swift, macos | a writing tool that hides everything except the sentence you're on. built one weekend during a cabin trip; somehow still using it. |
| small pond | 2024 | ≈ | go, postgres, client-work | weekly newsletter studio for ~50 writers. self-serve, no algorithm, no metrics dashboard on purpose. |
| lighthouse | 2023 | ✦ | python, print | static-site generator that compiles markdown directly into a printable book. used it for my own zine; six issues in. |

## Work history

**2024 — present · senior software engineer, *stitch & co.***
- lead the editor team — collaborative document model, real-time sync, the unflashy 90% that has to feel obvious.
- rewrote the rendering pipeline; first paint dropped from 800ms to 140ms on a midrange chromebook.
- mentor two engineers; pair on the hard bugs; do the boring code reviews carefully.

**2021 — 2024 · product engineer, *fieldhouse***
- second engineer. shipped the first version of the scheduling product that became the company's core revenue.
- wrote the design system from scratch with the founding designer; eighteen months later half the team still committed to it.
- on-call rotations. customer support shifts. talked to people who actually used the thing.

**2019 — 2021 · software engineer, *north light labs***
- data infrastructure for a small climate research group. mostly python, mostly dataframes, occasionally a heroic SQL query.

## Education

- **2015 — 2019** — B.S. computer science, university of washington. minor in english literature, which is how this whole serif business started.
- **2024** — recurse center, fall batch. spent six weeks writing a programming language nobody asked for. excellent decision.

## Contact

> the inbox is open. i love a good cold email — especially if it's about typography, weird filesystems, or any sufficiently small idea that has been keeping you up at night.
>
> currently: open to short consulting engagements; not looking for full-time roles.

| label | value |
| --- | --- |
| email | michael@fan.industries |
| github | github.com/michael |
| are.na | are.na/michael |
| letterboxd | letterboxd.com/michael |
| rss | /feed.xml |

## Résumé doc preview (ASCII)

```
MICHAEL FAN
software engineer · portland, oregon
michael@fan.industries

EXPERIENCE
  stitch & co.        2024 — present
    senior software engineer, editor team
  fieldhouse          2021 — 2024
    product engineer (#2)
  north light labs    2019 — 2021
    software engineer, data infra

EDUCATION
  university of washington  B.S. cs, 2019
  recurse center             fall '24

WRITING & TALKS
  ‘small interfaces' — strangeloop '23
  the marginalia letter — ~3k readers/week
```

CTA copy:
> or — i'll happily send a copy tailored for the role you have in mind. just write to michael@fan.industries.
>
> last refreshed mar 2026 · prepared in pandoc & latex

## Footer

> thanks for reading.
>
> © 2026 michael fan · set in roboto serif & jetbrains mono · no analytics, no cookies, no nonsense

---

## Extras page (full)

### Hero

> a small *scrap drawer*.
>
> things that don't earn their own page but are too good to throw out — books in progress, software i love, places to find me on the rest of the web.

### Currently reading

- **apr** — *the dawn of everything* — graeber & wengrow
- **apr** — *seeing like a state* — james c. scott
- **mar** — *the overstory* — richard powers (re-read)

### Writing

- **2026 · 03** — on the unreasonable joy of right-aligned text — a small piece for a small audience.
- **2025 · 11** — field notes from a six-week sabbatical — what i learned doing nothing on purpose.
- **2025 · 06** — a love letter to the `<details>` element

### What i use

| | |
| --- | --- |
| editor | neovim with about nine plugins, and helix when i'm feeling brave |
| terminal | ghostty, jetbrains mono, no powerline |
| writing | obsidian for raw notes, ia writer for essays, paper for everything else |
| browser | firefox at home, safari on the phone |
| music | a 2010 ipod nano. genuinely. |

### Elsewhere on the web

- are.na — a slow public scrapbook
- letterboxd — mostly four-star reviews of three-star movies
- github — half-finished side quests
- rss — best way to subscribe; no algorithm involved

### Guestbook

> "*the only person i know who indents his commit messages.*"
> — a former coworker, affectionately, i think.

> "*builds the kind of software you want to send a thank-you note about.*"
> — j. ito

---

## Tweaks panel (dropped from live site)

The design exposed a dev-tools-style panel with:
- **theme**: day / night
- **accent color**: `#d6502d` (terracotta), `#3a6a4f` (forest), `#2f5a85` (slate-blue), `#8a4a8b` (plum)
- **density**: compact / spacious (controls `--pad-y`)

These are wired through CSS custom properties, so any of them can be added back later by setting `--accent` or `--pad-y` directly.
