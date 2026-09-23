# Runtime Patch Release Notes Conventions (wavemaker/docs)

These conventions are derived from the actual files in the `wavemaker/docs` repo (the classic
WaveMaker docs site, `learn/` + `website/`) — **not** the `wavemaker-ai/docs` repo's `.mdx`
tab/accordian format. Do not mix the two.

## What a runtime patch is

A runtime patch is a narrow, React-Native-runtime-only fix release that ships **beneath** a
named minor/patch release, without bumping Studio or the tech stack. Its version is four
dot-separated integers: `MAJOR.MINOR.PATCH.RUNTIME_PATCH` (e.g. `11.14.1.17` is runtime patch
17 of the `11.14.1` release). It always has a parent release (`MAJOR.MINOR.PATCH`, e.g.
`11.14.1`) that must already exist.

## Files touched

| File | Purpose |
|------|---------|
| `learn/wavemaker-release-notes/v<M>-<m>-<p>-<rp>.md` | The runtime patch's own page (new file) |
| `website/sidebars.json` | Sidebar nav — one doc-id line added |
| `learn/wavemaker-release-notes.md` | The "Release History" table — one row added |

Nothing else. Do not touch `learn/wavemaker-release-notes/v<M>-<m>-<p>.md` (the parent release
page) or any other file.

## Page template

```mdx
---
title: "WaveMaker <VERSION> - Release date: <DATE>"
id: "v<M>-<m>-<p>-<rp>"
sidebar_label: "v<VERSION>"
---

WaveMaker <VERSION> is a runtime patch for WaveMaker <PARENT_VERSION> that <one-sentence summary
of what it fixes>.

## Bug Fixes

### React Native

<details>
<summary><Ticket title, plain language, no ticket id></summary>
<One or two sentence description of the fix, plain language, no Jira markup.>
</details>

<details>
<summary><Next ticket title></summary>
<Description.>
</details>

```

- `<VERSION>` is the full four-part version (`11.14.1.17`); `<PARENT_VERSION>` is the three-part
  parent (`11.14.1`).
- `<DATE>` — from the prompt if the user gave one, else the current date, formatted like existing
  entries (e.g. `3 November 2025`).
- Only include `## Features` / `## Enhancements` sections if at least one fetched ticket actually
  classified there (see the skill's Step 3). Runtime patches are almost always `## Bug Fixes`
  only.
- The platform subsection is **always `### React Native`** — this skill never writes a `### Web`,
  `### Studio`, or `### iOS` subsection, matching the fact that a runtime patch is React-Native-
  runtime-only.
- **No `## Technology Stack` section.** That section only belongs on full releases that actually
  bump the tech stack — a runtime patch never does.
- One `<details><summary>…</summary>…</details>` block per Jira ticket. Short fixes can keep the
  summary and body on one line, matching existing short entries (see
  `learn/wavemaker-release-notes/v11-15-2.md`); longer ones use blank lines inside, matching
  `learn/wavemaker-release-notes/v11-14-1.md`.

## Entry body rules

| Rule | What it means |
|------|----------------|
| One or two sentences | Body is short — one or two sentences. No Jira ticket id, no raw Jira markup, no multi-paragraph explanation. |
| Plain language | Describe the fix, not the investigation. "Fixed X not doing Y" — not "Root cause was...". |
| Active voice, present tense for the intro; past tense ("Fixed…") for entries | Matches the existing corpus. |
| No marketing language | No "exciting", "powerful", "seamless". |
| Sentence case | No Title Case in body text. |
| Title = ticket summary, cleaned up | Trim internal jargon/ids from the Jira summary; keep it a short noun phrase, matching existing `<summary>` titles (e.g. "Fixed Axis Label Issue in Stacked Bar Charts"). |

## Release History row (`learn/wavemaker-release-notes.md`)

Every full release has a row in the `### WaveMaker Online v11.x` table under `## Release
History`. Add the runtime patch's row **immediately beneath its parent release's row** (i.e.
directly after the parent, before whatever row currently follows it):

```md
| [WaveMaker <VERSION>](/learn/wavemaker-release-notes/v<M>-<m>-<p>-<rp>) | <one-sentence summary, same tone as other rows> | <DATE> |
```

Do not reformat or reorder any other row.

## Sidebar entry (`website/sidebars.json`)

Under `"Release Notes" → "Latest v11.x" → { "label": "Versions: <M>.<m>.x", "items": [...] }`,
add one line:

```json
"wavemaker-release-notes/v<M>-<m>-<p>-<rp>",
```

immediately after the parent's own line (`"wavemaker-release-notes/v<M>-<m>-<p>"`) in that same
`items` array. Fix up the trailing comma on the line above it if it didn't have one before (the
parent was previously the array's tail item in some categories); do not touch any other line or
category.

If no `"Versions: <M>.<m>.x"` category exists yet for the parent's minor version, stop — that
means the parent release itself isn't registered in the sidebar, which shouldn't happen if Step 2
already confirmed the parent page exists; flag this inconsistency to the user rather than
inventing a new category.

## Common mistakes to avoid

- **Writing to the `wavemaker-ai/docs` `.mdx` tab/accordian format** — that's a different repo
  and a different release-notes system entirely. This skill only ever writes classic
  `learn/wavemaker-release-notes/*.md` pages.
- **Inventing a platform subsection other than `### React Native`** — even if a ticket's
  component looks Web/Studio-related, flag the mismatch per the skill's Step 3 rather than
  writing a `### Web` or `### Studio` heading.
- **Adding a `## Technology Stack` section** — runtime patches don't get one.
- **Placing the Release History row or sidebar line anywhere other than directly beneath the
  parent** — "beneath the main release" is a placement requirement, not just "somewhere in the
  table/sidebar".
- **Multi-paragraph or ticket-id-laden entry bodies** — trim to one or two plain sentences, same
  discipline as every other entry in this repo.
- **Overwriting an existing runtime-patch page** — if Step 2 finds one already exists, stop; this
  skill creates, it does not silently overwrite.
