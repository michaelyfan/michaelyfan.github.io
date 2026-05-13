
# Content Improvements

## Change "hi, i'm michael fan"

Self-explanatory.

## The stuff under "hi, i'm michael fan" ("Hero" content)

> software developer, <TODO: something to do with how I use AI: I think it's a great tool but I emphasize guardrails and intentionality>, <TODO: something to do with cooking or baking, hobbies I very much enjoy. bonus if you can include the word "developer">, very serious about breakfast. 

## about section

### picture

* (a human must provide this) different profile pic

### content

> hello. first of all, thanks for coming here. i appreciate it. <TODO: modify if necessary. short and sweet, thanking the user proactively for their time>

> i'm a software developer at <em>Expedia Group</em> and I want to help take you on your next vacation. 

> at work I enjoy: leading projects end-to-end, operational excellence which makes for a boring on-call, building with AI (and guardrails, and frugality, and intentionality).

> i am a computer science grad from the <em>Georgia Institute of Technology</em>. my first job was with the network automation rockstars at <em>Itential</em>, who I'm grateful to for helping me set my standard for how to work with and respect humans.

> outside of corporate, i pass my time deadlifting, being a coffee snob <TODO: I want a more intentional way to say that I am a third-wave coffee enthusiast ex. "tasting the notes of blueberrie in coffee" but this is too specific and I don't think people would get it>, and i think i can make cream puffs as good as your nearest bakery's.

## work history section

<TODO: this one is mostly up to you, the agent.>

<The work history section under .claude/CONTENT_SUGGESTIONS.md is pretty good, but:

- note, in small text at the top, that the


>

### Below is to edit


# Improvements

* stick the work section above projects. So, overall flow should be about > work > projects > education > contact > resume. Also, rename it to "work history"
* improve the fonts used for backup, in case Google Fonts cannot load. Change them to fonts that are most likely supported natively by the user system which have the same vibe as Roboto family -- modern. Serif things should remain serif, sans-serif should remain sans, mono should remain mono.
* the user experience should work well at mobile screen sizes -- mobile responsive.
* the user should be able to use tab to navigate through the page.
* (a human must do this) fix the resume PDF import
* make sure there are no em-dashes!

TODO FINISH BELOW THIS LINE

* consistent "I" casing.
* (a human must provide this) Real project thumbnails (currently SVG iconographic placeholders)
* Real bio copy (current text is plausible filler)
* Real project list, work history, education details
* Real résumé PDF (button currently links to `#resume.pdf`)
* Real contact handles (placeholder `/michael` paths)
* SEO/meta tags, OG image, favicon — not yet implemented
* Analytics decision (currently none, by design — confirm)
* Domain + hosting + deploy pipeline
* address https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fmichaelfan.me
* address accessibility testing ex. https://www.whoishostingthis.com/resources/website-accessibility/
* fully check browser compatibility--so far verified on all moderns. 
* project desc overlay on mobile is weird
* implement ethical analytics. Comply with GDPR?
* optimize image load time
* new project - Runway
* licensing thing at the bottom. 