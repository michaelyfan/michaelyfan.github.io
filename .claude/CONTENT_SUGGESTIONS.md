

# Content Suggestions

Drawn from `/Users/mfan/dev/Career/Context` (About_Me, Writing style guide, Impact files, performance reviews). All copy below follows `CLAUDE.md`: lowercase running text, italicize one beat per paragraph with `<em>`, no em-dashes (use `;`, `,`, `.`, or restructure), proper-noun capitalization (`Expedia Group`, `Georgia Institute of Technology`, `Itential`, `Vrbo`, `Partner Central`).

A few notes on what's stale in the current site and worth fixing:

- The hero, about, and "currently" all still describe him as an SDE writing JS/Node/Java for the consumer-facing booking flow. He hasn't worked on consumer/booking traffic since the Cars→EGTP migration in 2022. He's been on the Supply side (Virtual Market Coach, on Partner Central / Vrbo Owner) since late 2022, was promoted to SDE 3 in April 2025, and now leads platform/SDUI work plus an MCP-based agent integration.
- The tagline "code to take you on your next vacation" is cute but technically wrong now; VMC is a tool *partners* (hoteliers, vacation rental owners) use, not travelers.
- "Whatever stack the job needs, i'll learn it" is a junior framing. He's now the team's full-stack knowledge-holder per his 2025 manager review.

---

## Tagline (under "hi, i'm michael fan")

The current tagline tries to do three things at once: identify the employer, name the product, and list languages. Suggestions below pick one angle each. All are one or two sentences max.

**Option A; one-line, work-flavored**

```html
<p class="hero-tagline">
  i'm a software developer at <em>Expedia Group</em>, building the tools that travel partners use to grow their business; lately, teaching those tools to talk to AI agents.
</p>
```

**Option B; one-line, craft-flavored** (less Expedia-centric, travels better if he leaves)

```html
<p class="hero-tagline">
  i build platform-y, full-stack software; <em>server-driven UI</em>, agent integrations, and the unglamorous plumbing in between.
</p>
```

**Option C; two beats, a little playful** (closest in tone to the footer's "no analytics, no cookies, no nonsense")

```html
<p class="hero-tagline">
  software developer at <em>Expedia Group</em>, on the team that nudges hotel and vacation-rental partners toward better listings. i like platforms, accessibility, and the occasional <em>profiterole</em>.
</p>
```

**Recommendation:** C. It's the one that sounds like the rest of the site.

---

## About section

Current copy is roughly: Expedia → JS/Node/Java → Georgia Tech + Expedia intern + Itential co-op → exercise/gridiron/profiteroles. The shape is good. What's missing: that he's an SDE 3 leading platform work, and that "Expedia intern + Itential co-op" sells his early-career story short of where he is now.

Three paragraphs, same rhythm as today, updated content:

```html
<p>
  hello. i'm a software developer at <em>Expedia Group</em>, on the team behind Virtual Market Coach; the system that helps hotel and vacation-rental partners spot what to fix on their listings. day-to-day i work across javascript, typescript, react, node, and java; lately a lot of my work is teaching that platform to talk to AI agents over MCP.
</p>
<p>
  i lead projects end-to-end, mentor other engineers, and own a fair chunk of the team's full-stack surface area. i'm into the boring-but-load-bearing stuff: <em>server-driven UI</em> platforms, accessibility, operational excellence, and clean api boundaries that don't leak between teams.
</p>
<p>
  i graduated in computer science from the <em>Georgia Institute of Technology</em> with highest honors. before Expedia, i was a software dev co-op with the network automation folks at Itential. outside of corporate, i like exercise, gridiron, and i think i can bake <em>profiteroles</em> as good as your nearest patisserie's.
</p>
```

Notes / variants:
- If he wants to keep "i'll learn whatever stack" energy, swap the second sentence of paragraph 1 with: "i'll pick up whatever stack a problem needs, but i lean toward the typescript/node/java triangle most of my work lives in."
- "SDE 3" / "Software Development Engineer III" intentionally not in the prose. The site is a personal site, not a résumé; titles are noisy and date faster than "i lead projects end-to-end." If he wants the title, the cleanest place is a one-liner under the work list.
- He's moving to Canada per `About_Me.md`. I'm leaving location out entirely; "moving" and "based in" both rot fast on a static site. If he wants something, a small line under "currently:" in the contact section is the right place (see contact note below).

---

## Projects section

The current grid mixes professional projects (GT Green, Corbii) with weekend/hackathon stuff (Claire, Is It Orange, Cosai, Leash, ElectricFieldSim-Web). All of it is from 2018–2021. The lede ("student-club builds, hackathon weekends, and the occasional small experiment") is honest about that and worth keeping; just tighten it.

**Lede rewrite:**

```html
<p class="block-lede">
  a handful of things from before i started full-time; <em>student-club</em> builds, hackathon weekends, and a couple of small experiments. github has the long tail.
</p>
```

**Per-project copy.** Existing entries each have a one-line description. Most of them are placeholders or read like marketing taglines ("learning as smart as you", "love at first write", "🍊"). Replacement one-liners that actually say what the thing is:

| Project | Suggested one-liner | Suggested role label | Tags |
|---|---|---|---|
| **GT Green** | apps that took Georgia Tech's recycling office off paper; logistics for 100+ campus bins, with Developer Student Club. | project lead, 2019–2021 | flutter, angular, firebase |
| **Corbii** | a spaced-repetition flashcard app; i owned the entire backend and a chunk of the frontend. funded out of GT's CREATE-X. | software developer, 2018–2019 | node, firebase, react |
| **Claire** | a "love at first write" dating app for GT's 2019 Appathon; second place. | developer, 2019 | react native, firebase |
| **Is It Orange** | a tiny color-rating site i built to teach myself responsive layouts and serverless. | developer, 2019 | react, firebase |
| **Cosai** | live facial recognition for retail floors, for the T-Mobile Closer to the Customer hackathon. | developer, 2019 | azure, react |
| **Leash** | a "find the one that got away" hackathon project; i did the visual design. | graphic designer, 2019 | design |
| **ElectricFieldSim-Web** | a browser port of orion-f's electric field simulator; physics-class nostalgia. | developer | js, canvas |

A few project-meta cleanups while he's in there:

- The current `<span class="project-year">` slots hold *roles* (`project lead`, `co-founder`, `developer`), not years. Either rename the class, or fold the year into the same span as i did in the table above; right now "year" is a misnomer that'll trip up future-him.
- All `<ul class="tags">` are placeholder lorem/ipsum. The table's third column is a starter set; he can swap.
- "co-founder" on Corbii is generous if his role was software developer (`Corbii.md` says "Software Developer"). Suggest changing to "software developer" unless he was actually a founder.
- Projects ordered by recency would put GT Green and Corbii first; the current grid roughly does this already, which is good.

---

## Work section

Current copy is all lorem ipsum across two entries. He has three real jobs: Expedia (intern → SDE 1 → 2 → 3), Itential (co-op), and that's it. Suggested entries below, in reverse chronological order, matching the existing `<article class="work-item">` shape.

```html
<article class="work-item">
  <div class="work-period">2021–present</div>
  <div class="work-rule" aria-hidden="true"></div>
  <h3 class="work-role">software developer, <em class="work-company">Expedia Group</em></h3>
  <ul class="work-notes">
    <li>on the Virtual Market Coach team; the coaching system that nudges hotel and vacation-rental partners toward better listings on Partner Central and Vrbo Owner.</li>
    <li>led the externalization of our server-driven UI platform (internally, "Blueprint") so other teams across Supply can build their own action panels on it; drove tp50 oppy delivery time from ~4.5 weeks down to about six days.</li>
    <li>built and shipped a Supply Partner MCP server that exposes VMC coaching tips and inline actions to AI agents; now the recommended path for agentic VMC access.</li>
    <li>led VMC's accessibility push, the Spring Boot v3 / Spring v6 upgrade on the domain service, and monthly operational excellence reviews.</li>
    <li>previously: tech lead for the Top Tasks integration, design owner for VMC's migration onto Expedia's <em>Experience Platform</em>, and contributor to the Cars shopping migration onto EGTP.</li>
  </ul>
</article>
<article class="work-item">
  <div class="work-period">2019</div>
  <div class="work-rule" aria-hidden="true"></div>
  <h3 class="work-role">software developer co-op, <em class="work-company">Itential</em></h3>
  <ul class="work-notes">
    <li>built early iterations of the Adapter Builder, a low-code tool that turns OpenAPI specs into Node.js network-API adapters; cut adapter development time from 30+ hours to about one.</li>
    <li>shipped features and fixes for the customer-facing docs site used by 100+ monthly customers, and helped wire new QA standards into the Node DevOps lifecycle.</li>
    <li>customer-facing work landed in front of clients including Atlassian, VMware, and NetBrain, and was demoed at <em>ONUG</em>.</li>
  </ul>
</article>
```

Notes:
- Five bullets on the Expedia entry is a lot. If he wants two work-items at roughly the same density, the cleanest cut is to drop the "previously" bullet (the Top Tasks / XP / Cars story) and let the résumé carry that history. The first four bullets cover SDE 3 work; the last is a "earlier in this same job" bullet that's optional.
- Intern (Expedia, 2020) is real but small ("shipped a feature to the homepage, ran an A/B test for personalized trip suggestion"). I'd fold it into the Expedia entry as a parenthetical in the period (`2020–present, started as an intern`) rather than its own work-item, to keep the section visually balanced. Or omit entirely; the résumé has it.
- "software developer" intentionally chosen over "Software Development Engineer III" to match the site's lowercase voice; he can title-up if he wants, but the level distinction (SDE 3 is *not* senior at EG, per `About_Me.md`) is the kind of thing that confuses readers from other companies and is better left to the résumé.
- No em-dashes anywhere. `2021–present` uses an en-dash; that's fine per `CLAUDE.md`.

---

## Small adjacent things worth fixing while editing

Not part of the ask, but they jumped out:

- `#contact` has a placeholder "currently: lorem ipsum dolor sit amet." Real candidates from `About_Me.md`: `currently: leading platform work on VMC and prepping a move to Canada.` or `currently: shipping agent integrations on VMC and looking for senior roles.`
- `#resume` has a `fineprint` of lorem ipsum. Suggest: `last updated <month> <year>; ask if you'd like a tailored version.` (Date filled in when he refreshes the PDF.)
- The hero-tagline mentions Expedia, the about's first paragraph mentions Expedia, and the work section mentions Expedia. That's fine, but if he goes with hero option C above, consider trimming "Expedia Group" out of the about's *first sentence* to avoid the third repeat in two screenfuls; e.g. open with `hello. i'm a software developer on the team behind Virtual Market Coach;` and let the work section carry the employer name.