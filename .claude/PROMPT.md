# site overhaul — agent brief

## how to work this brief

Follow sections in order. Respect the voice rules in `CLAUDE.md` (lowercase running copy, capitalize proper nouns, no em-dashes). Anything tagged **HUMAN** goes into the "hand back to me" list at the bottom instead of being attempted. Anything tagged **BRAINSTORM** must be surfaced to me for a decision before you code it.

## global changes

- section order: about > work history > projects > education > contact > resume
- rename the "work" section to "work history"
- no em-dashes anywhere on the site
- consistent lowercase "i" in running copy
- improve the font fallback stack: pick sans / serif / mono fallbacks that match the Roboto family's modern vibe and are likely already installed on the user's system. serif stays serif, sans stays sans, mono stays mono.
- mobile-responsive at all breakpoints already defined in `css/index.css`
- keyboard-navigable: tab order works through every interactive element

## content

### hero

Top heading becomes `hi, i'm michael fan`. Draft for the tagline below it:

> software developer, <TODO: something about how I use AI — I think it's a great tool but I emphasize guardrails and intentionality>, <TODO: something about cooking or baking, hobbies I very much enjoy. bonus if you can include the word "developer">, very serious about breakfast.

> **BRAINSTORM:** my location (currently Seattle, WA) should appear somewhere. hero or about?

### about

- profile picture: **HUMAN** (different one than the current)
- content draft:

> hello. first of all, thanks for coming here. i appreciate it. <TODO: tweak if needed — short and sweet, thanking the visitor proactively for their time>

> i'm a software developer at <em>Expedia Group</em> and i want to help take you on your next vacation.

> at work i enjoy: leading projects end-to-end, operational excellence which makes for a boring on-call, building with AI (and guardrails, and frugality, and intentionality).

> i'm a computer science grad from the <em>Georgia Institute of Technology</em>. my first job was with the network automation rockstars at <em>Itential</em>, who i'm grateful to for helping me set my standard for how to work with and respect humans.

> outside of corporate, i pass my time deadlifting, being a coffee snob <TODO: a more intentional way to say "third-wave coffee enthusiast"; "tasting the notes of blueberry in coffee" is too specific>, and i think i can make cream puffs as good as your nearest bakery's.

### work history

Conversational prose, not résumé bullets. Up to you to draft.

- small note at the top of the section: the sweaty impact metrics live on the résumé (find a nicer phrasing)
- cover Expedia Group, Itential, Corbii. no need to separate by rank, and don't mention rank at all (that's the résumé's job)
- pull facts from `/Users/mfan/dev/Career/Context` and the work-history block in `.claude/CONTENT_SUGGESTIONS.md`

### projects

- pull project list from `.claude/CONTENT_SUGGESTIONS.md`
- exclude Corbii (it belongs under work history)
- no dates, no roles; these are personal projects
- add **PuntList** as the newest entry: an app that lets you either check something off or move it to another list in one tap. Flutter + Firebase.
- project images: **HUMAN**

### education

Keep as is.

> **BRAINSTORM:** worth collapsing education and contact into about, into projects, or splitting them across both?

### contact

- new copy along the lines of: *if you've made it this far, maybe we could chat*
- remove the grayscale "currently: …" line; it doesn't do anything
- link verification: **HUMAN**

### resume

- the file is `MichaelFan_Resume.pdf`
- remove the "LIVE PREVIEW" label
- remove the arrow after "open / download" in the button
- change the supporting copy to: *prefer something tailored to the work you have in mind? write to…*
- updating the source PDF: **HUMAN**

> **BRAINSTORM:** column layout for this section.

### footer

- remove the "no analytics, no cookies, no nonsense" line

## hand back to me (human-only)

- new profile picture
- project images
- résumé PDF source update
- contact link verification

## deferred (not now)

- SEO / meta tags, OG image, favicon
- analytics decision (currently none, by design; confirm)
- domain, hosting, deploy pipeline
- Lighthouse pass: https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fmichaelfan.me
- accessibility audit (e.g. https://www.whoishostingthis.com/resources/website-accessibility/)
- browser compatibility sweep beyond modern evergreens
- ethical analytics, GDPR compliance
- image load-time optimization
- new project entry: Runway
