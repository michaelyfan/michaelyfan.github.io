# Content Improvements

- [ ] update top heading to "hi, i'm michael fan", and update hero content (see below)
- [ ] update about section (see below)
- [ ] update work history section (see below)
- [ ] update projects section (see below)
- [ ] update education section (see below)
- [ ] update resume section: The name of the file is MichaelFan_Resume.pdf and remove "LIVE PREVIEW". TODO -- make a decision about columns
- [ ] update footer: remove "no analytics, no cookies, no nonsense"
- [ ] all things that a human needs, or are being deferred, should be noted in README TODOs afterwards

--- 


# The stuff under "hi, i'm michael fan" ("Hero" content)

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

- note, in small text at the top, that the sweaty metrics for impact are on my resume.  (find a better way to word this.)
- This section is a more prose-like. I just want to talk about my various positions. Give a brief overview, very conversational. My experience is in /Users/mfan/dev/Career/Context.
- mention Expedia Group, Itential, Corbii. Don't have to separate by rank. In fact, don't mention rank at all, that's for my resume.

## projects section

- Add the projects in /Users/mfan/dev/michaelyfan.github.io/.claude/CONTENT_SUGGESTIONS.md.
- but exclude Corbii since that's work history.
- projects should not have dates or roles. They're just personal projects. 
- Also include another project. It should be the most recent:
  - called "PuntList"
  - it's an app that lets a user either check something off or move it to another list in one tap.
  - flutter + firebase
- pictures must be provided by a human, don't worry about that.

## education section

keep as is

## contact section

Something along the lines of "if you've made it this far, maybe we could chat"

remove the grayscale "currently: ..." line, doesn't do anything

A human needs to verify the links

## resume section

- Remove "LIVE_PREVIEW"
- a human needs to update the source
- remove the arrow after "open / download" in the button.
- change to "prefer something tailored to the work you have in mind? write to..."

# Other Improvements

- [ ] make sure overall flow is about > work > projects > education > contact > resume. Also, rename it to "work history". also, I think this means some reordering is necessary.
- [ ] improve the fonts used for backup, in case Google Fonts cannot load. Change them to fonts that are most likely supported natively by the user system which have the same vibe as Roboto family -- modern. Serif things should remain serif, sans-serif should remain sans, mono should remain mono.
- [ ] the user experience should work well at mobile screen sizes -- mobile responsive.
- [ ] the user should be able to use tab to navigate through the page.
- [ ] (a human must do this) fix the resume PDF import
- [ ] make sure there are no em-dashes!
- [ ] my location (currently seattle, wa) should be on here somewhere...brainstorm with me to determine a location
- [ ] consistent "I" casing.
- [ ] brainstorm with me: collapse education and contact sections into about section, project section, or a split. 

Deferred
* SEO/meta tags, OG image, favicon — not yet implemented -- defer this
* Analytics decision (currently none, by design — confirm)
* Domain + hosting + deploy pipeline
* address https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fmichaelfan.me
* address accessibility testing ex. https://www.whoishostingthis.com/resources/website-accessibility/
* fully check browser compatibility--so far verified on all moderns. 
* check mobile responsiveness
* implement ethical analytics. Comply with GDPR?
* optimize image load time
* new project - Runway