---
name: runtime-patch-release-notes
description: >
  Create a runtime-patch release-notes page in the wavemaker/docs repo (the
  classic docs site, learn/ + website/ — not wavemaker-ai/docs). Use when the
  user gives a four-part runtime-patch version, MAJOR.MINOR.PATCH.RUNTIME_PATCH
  (e.g. "11.14.1.17"), and one or more Jira ticket ids, and asks to add/create
  a runtime patch release note beneath the parent release — e.g. "create a
  runtime patch release note for 11.14.1.17 covering WMS-1234 and WMS-1235".
  Checks whether that exact runtime-patch release already exists first; if
  not, places the new page directly beneath its parent release
  (MAJOR.MINOR.PATCH) in the page list, the sidebar, and the Release History
  table.
version: 1.0.0
---

# Runtime Patch Release Notes

End-to-end workflow: validate the runtime-patch version → confirm the parent release exists and
this runtime patch doesn't already → fetch and classify the Jira ticket(s) → draft the entry
against this repo's own conventions → get explicit user confirmation → write the page, sidebar
entry, and Release History row.

This skill runs directly against the `wavemaker/docs` repo Claude Code is already operating in —
it does not need or check an external path to the repo. It never touches git — file edits only;
committing and raising a PR (if wanted) is left to the user.

## Execution contract

**Follow Steps 1–6 in order. Do not skip or reorder.** Steps 1–3 are hard gates — a failure in
any of them **rejects the entire prompt immediately**: stop, report the specific reason, state
exactly what the user must supply or fix, and do not touch the filesystem. Never guess a missing
value (version, Jira ticket id) and never fall back to a default. Step 4's draft is never written
to disk without explicit user confirmation of the page content, the Release History row, and the
sidebar placement — there is no git safety net here, so this confirmation is the only checkpoint
before the files change.

| Rule | Requirement |
|------|-------------|
| Job reporting | The report-step script path and job id are supplied via the prompt/task context that starts this session — resolve `<report_step_path>` and `<job_id>` once, before Step 1, and substitute the literal values into every `node <report_step_path> --step N ...` command below. Do not assume a relative `scripts/report-step.cjs` path or rely on a `JOB_ID` env var. Before each step: `node <report_step_path> --step N --status running`. On every `completed` report, also pass `--job-id <job_id>` explicitly. **If the prompt does not supply a report-step path, skip reporting entirely — do not block the workflow on it.** |
| Hard gates (Steps 1–3) | Each gate's **Reject when** condition halts the whole workflow the moment it's true. Report the failure (`--status failed --error "<reason>"`) on that step only, then stop — do not report later steps as running, do not ask a follow-up question that assumes the missing input will arrive on its own. |
| Sequential | Finish each step's **Done when** criteria before starting the next. |
| No early file edits | Do not create or edit any file until Steps 1–3 have all passed and Step 4's draft has been explicitly confirmed by the user. |
| Jira scope | Step 3 works **only** on the Jira ticket id(s) the user provided — do not fetch, cite, or use context from any other ticket (linked issues, epics, subtasks, duplicates), even if a fetched ticket mentions one. |
| Jira fetch order | Step 3 **must** call Atlassian MCP (`getJiraIssue`) first, once per ticket id. Do not use browser tools or `WebFetch` for a ticket before MCP has been tried and failed. |
| Content authoring follows this repo's own conventions, not wavemaker-ai/docs's | Step 4 does not write MDX-tab/accordian format and does not write content from memory. It follows [references/conventions.md](references/conventions.md) — the classic `learn/wavemaker-release-notes/*.md` page format, `### React Native`-only subsection, `<details>` entry style, and the exact Release History / sidebars.json placement rules. Read that file in full before drafting anything. |
| Minimal file surface | Step 5 touches exactly three files: the new runtime-patch page, `website/sidebars.json`, and `learn/wavemaker-release-notes.md`. Never touch the parent release page or any other file. |
| No git action | This skill never runs `git add`/`commit`/`push` and never opens a pull request. Say so plainly in the Step 6 summary so the user knows the changes are still local/uncommitted. |
| Progress updates | After each step, briefly state what ran and what you learned. |

`<job_id>` and `<report_step_path>` in every `report-step` command below are placeholders —
resolve both once from the prompt/task context before Step 1, and substitute the literal values
in every command you run; never leave them as literal text in a command you run.

Copy this checklist and mark items as you go:

```
Progress:
- [ ] Step 1 — Runtime-patch version parsed and validated
- [ ] Step 2 — Parent release confirmed to exist; runtime-patch release confirmed not to already exist
- [ ] Step 3 — Jira ticket(s) fetched and classified
- [ ] Step 4 — Entry drafted per this repo's conventions and confirmed with the user
- [ ] Step 5 — Page created; sidebars.json and Release History table updated
- [ ] Step 6 — Final summary delivered
```

---

## Resources

This skill has no bundled scripts — every action uses standard tools directly.

### Tools

| Tool | Use in |
|------|--------|
| Bash (`test`, `find`, `grep`) | Steps 1–2 — version derivation, file-existence and duplicate checks |
| Atlassian MCP (`getJiraIssue`) | Step 3 — **only** for the ticket id(s) the user provided |
| Read / Edit / Write | Steps 4–5 — reading `references/conventions.md`, drafting, and writing the three files |

### References (read when a step points to them)

| File | When to read |
|------|--------------|
| [references/conventions.md](references/conventions.md) | Step 4 — the authoritative page template, entry format, and the exact placement rules for the Release History row and the sidebar entry. This is not optional background reading — Step 4 **is** following this file's rules. |

---

## Step 1 — Parse and validate the runtime-patch version

**Goal:** A single runtime-patch version, in the exact `MAJOR.MINOR.PATCH.RUNTIME_PATCH` format
(four dot-separated integers), extracted from the prompt, with its parent release derived from
the first three segments.

**Report start:**
```bash
node <report_step_path> --step 1 --status running \
  --output $'Extracting the runtime-patch version from the prompt.\nValidating it matches MAJOR.MINOR.PATCH.RUNTIME_PATCH (e.g. 11.14.1.17).\nDeriving the parent release version.'
```

**Action:** Read the version the user named. Validate it against `^\d+\.\d+\.\d+\.\d+$` (e.g.
`11.14.1.17` — not `11.14.1`, `v11.14.1.17`, `11.14.1.17-rc1`, or a bare `17`). A three-part
version is a **full release**, not a runtime patch — that belongs to a different skill entirely,
not this one.

Derive:
- `<VERSION>` — the full four-part version (e.g. `11.14.1.17`)
- `<MAJOR>` / `<MINOR>` / `<PATCH>` / `<RUNTIME_PATCH>` — its four segments
- `<PARENT_VERSION>` — `<MAJOR>.<MINOR>.<PATCH>` (e.g. `11.14.1`)
- `<DOC_ID>` — `v<MAJOR>-<MINOR>-<PATCH>-<RUNTIME_PATCH>` (e.g. `v11-14-1-17`)
- `<PARENT_DOC_ID>` — `v<MAJOR>-<MINOR>-<PATCH>` (e.g. `v11-14-1`)

**Reject when (halt everything, do not proceed to Step 2):**
- No version is mentioned in the prompt at all.
- A version-like token is present but doesn't match the four-part `MAJOR.MINOR.PATCH.RUNTIME_PATCH` format exactly (including a bare three-part version — redirect the user, don't silently treat it as a runtime patch).

Tell the user: *"I need the runtime-patch version in `MAJOR.MINOR.PATCH.RUNTIME_PATCH` format
(e.g. `11.14.1.17`) — `<what they gave, if anything>` doesn't match. What version is this runtime
patch?"*

**Report fail:** `node <report_step_path> --step 1 --status failed --error "No valid MAJOR.MINOR.PATCH.RUNTIME_PATCH version in prompt"`

**Done when:** You have a validated `<VERSION>` and its derived `<PARENT_VERSION>`, `<DOC_ID>`,
and `<PARENT_DOC_ID>`.
**Report done:**
```bash
node <report_step_path> --step 1 --job-id <job_id> --status completed --summary "Version Parsed" \
  --output $'Runtime-patch version extracted from prompt.\nFormat validated as MAJOR.MINOR.PATCH.RUNTIME_PATCH.\nParent release version derived.\nReady to check existing release state.'
```

---

## Step 2 — Confirm the parent release exists and this runtime patch doesn't yet

**Goal:** The parent release page is confirmed to exist (a runtime patch is always placed
*beneath* an existing release, never invents one), and this exact runtime-patch release is
confirmed **not** to already exist in any of the three places it would show up — the page file,
the sidebar, or the Release History table.

**Report start:**
```bash
node <report_step_path> --step 2 --status running \
  --output $'Verifying the parent release page exists.\nChecking whether this runtime-patch release already has a page.\nChecking sidebars.json for an existing entry.\nChecking the Release History table for an existing row.'
```

**Compute paths:**

```text
Parent release page:      learn/wavemaker-release-notes/<PARENT_DOC_ID>.md
Runtime-patch page:       learn/wavemaker-release-notes/<DOC_ID>.md
Sidebar config:            website/sidebars.json
Release History index:     learn/wavemaker-release-notes.md
```

**Run:**
```bash
test -f "learn/wavemaker-release-notes/<PARENT_DOC_ID>.md"
```

**Reject when (halt everything, do not proceed to Step 3):** The parent release page does not
exist.

Tell the user: *"`learn/wavemaker-release-notes/<PARENT_DOC_ID>.md` doesn't exist — a runtime
patch has to sit beneath an existing release. Confirm the version, or create the
`<PARENT_VERSION>` release first."* Do not search for a "close enough" parent and do not create
one yourself.

**Report fail (parent missing):** `node <report_step_path> --step 2 --status failed --error "Parent release <PARENT_VERSION> not found"`

**Then run (existence check for the runtime patch itself):**
```bash
test -f "learn/wavemaker-release-notes/<DOC_ID>.md"
grep -n "<DOC_ID>" website/sidebars.json
grep -n "<DOC_ID>\|WaveMaker <VERSION>" learn/wavemaker-release-notes.md
```

**Reject when (halt everything, do not proceed to Step 3):** Any of the three checks finds a
match.

Tell the user exactly what was found (file exists / sidebar line exists / table row exists) and
its location, and stop — **do not overwrite or update it.** Ask whether they meant a different
runtime-patch number, or want the existing page edited directly (a different task from this
skill).

**Report fail (already exists):** `node <report_step_path> --step 2 --status failed --error "Runtime patch <VERSION> already exists"`

**Done when:** The parent release page is confirmed to exist, and none of the three
already-exists checks found a match.
**Report done:**
```bash
node <report_step_path> --step 2 --job-id <job_id> --status completed --summary "Placement Verified" \
  --output $'Parent release page confirmed to exist.\nNo existing runtime-patch page found.\nNo existing sidebar entry found.\nNo existing Release History row found.\nReady to fetch Jira ticket(s).'
```

---

## Step 3 — Fetch and classify the Jira ticket(s)

**Goal:** Every Jira ticket id supplied in the prompt fetched via Atlassian MCP, with each one
classified into the H2 section it belongs under (`Bug Fixes` / `Enhancements` / `Features`) for
the always-`### React Native` subsection.

**Report start:**
```bash
node <report_step_path> --step 3 --status running \
  --output $'Checking for Jira ticket id(s) in the prompt.\nCalling Atlassian MCP for each ticket.\nExtracting summary, description, and issue type.\nClassifying each ticket into Bug Fixes / Enhancements / Features.'
```

**Reject when (halt everything, do not proceed to Step 4):** The prompt does not name at least
one Jira ticket id (e.g. `WMS-1234`).

Tell the user: *"Which Jira ticket(s) is this runtime patch for? I need at least one ticket id,
e.g. `WMS-1234`."* Do not proceed by asking "what changed?" as a substitute — the ticket(s) are
the required source.

**Report fail:** `node <report_step_path> --step 3 --status failed --error "No Jira ticket id in prompt"`

**Action (MCP first — mandatory order, once per ticket id):**

1. Call `getJiraIssue` via Atlassian MCP for **each** ticket id the user provided.
   - `cloudId`: `wavemaker.atlassian.net`
   - `issueIdOrKey`: ticket key from the prompt (e.g. `WMS-1234`)
   - `fields`: `summary`, `description`, `issuetype`, `labels`, `components`
   - `responseContentFormat`: `markdown`
2. **Only if MCP fails** (auth error, tool unavailable, empty response): report the error and ask
   the user to enable/fix Atlassian MCP. Do not silently fall back to a browser tool or
   `WebFetch`.

**Do not (Step 3):**
- Fetch, read, or use context from any other Jira ticket (linked issues, epics, subtasks,
  duplicates) — even if a fetched ticket references one.
- Guess a ticket's classification without having actually called `getJiraIssue` for it.
- Write any platform subsection other than `### React Native` (see
  [references/conventions.md](references/conventions.md)).

**Classify each fetched ticket:**

| Jira `issuetype` | Section |
|---|---|
| Bug | Bug Fixes |
| Story, New Feature | Features |
| Improvement | Enhancements |
| Task, or anything else | No confident mapping — recommend a section from the summary/description and say explicitly that it's a recommendation, not a fact |

**Platform subsection is fixed — always `### React Native`.** If a ticket's `components` or
summary clearly indicate it's Web- or Studio-only with no React Native runtime angle at all, flag
that mismatch to the user and ask whether to proceed anyway before including it — do not silently
force it in or invent a `### Web`/`### Studio` heading.

**Done when:** Every supplied ticket is fetched via Atlassian MCP and has a section
classification (confirmed or flagged), with any platform mismatch resolved by the user.
**Report done:**
```bash
node <report_step_path> --step 3 --job-id <job_id> --status completed --summary "Jira Fetched" \
  --output $'Jira ticket(s) fetched via Atlassian MCP.\nSummary, description, and issue type extracted for each.\nEach ticket classified into Bug Fixes / Enhancements / Features.\nAny platform mismatch flagged and resolved.\nReady to draft the entry.'
```

---

## Step 4 — Draft the entry and confirm with the user

**Goal:** The complete runtime-patch page content, Release History row, and sidebar insertion
drafted per [references/conventions.md](references/conventions.md), and explicitly confirmed by
the user — nothing is written to disk from this step.

**Report start:**
```bash
node <report_step_path> --step 4 --status running \
  --output $'Reading references/conventions.md.\nDrafting the runtime-patch page from the fetched ticket(s).\nDrafting the Release History row.\nDrafting the sidebars.json insertion.\nPresenting the full draft for user confirmation.'
```

**Action:**

1. Read [references/conventions.md](references/conventions.md) in full before drafting anything
   — do not write the page format, entry style, or placement rules from memory.
2. Draft the page frontmatter and body: title, id, sidebar_label, one-sentence intro naming
   `<PARENT_VERSION>`, and one `## <Section>` → `### React Native` → `<details>` entry per ticket
   from Step 3, grouped by section.
3. Draft the Release History row for `learn/wavemaker-release-notes.md`, matching the tone of
   the existing rows in the `### WaveMaker Online v11.x` table.
4. Draft the exact `sidebars.json` line and its insertion point (immediately after
   `"wavemaker-release-notes/<PARENT_DOC_ID>"` inside the matching `"Versions: <MAJOR>.<MINOR>.x"`
   category).
5. Present the complete draft — page content, Release History row, sidebar line + placement — to
   the user and **wait for explicit confirmation** before Step 5 touches anything.

**Do not write, create, or edit any file in this step.** If the user asks for changes, redraft
and present again.

**Done when:** The user has explicitly confirmed the draft as-is, or after one or more revisions.
**Report done:**
```bash
node <report_step_path> --step 4 --job-id <job_id> --status completed --summary "Entry Drafted" \
  --output $'Read references/conventions.md.\nDrafted the runtime-patch page content.\nDrafted the Release History row.\nDrafted the sidebars.json insertion.\nUser confirmed the draft.'
```

---

## Step 5 — Write the files

**Goal:** The three files updated to exactly match the confirmed draft — nothing else touched.

**Report start:**
```bash
node <report_step_path> --step 5 --status running \
  --output $'Creating the runtime-patch page.\nInserting the sidebars.json entry beneath the parent release.\nInserting the Release History row beneath the parent release.'
```

**Action:**

1. **Create** `learn/wavemaker-release-notes/<DOC_ID>.md` with the confirmed page content.
2. **Edit** `website/sidebars.json` — insert the confirmed line immediately after
   `"wavemaker-release-notes/<PARENT_DOC_ID>"` in its category's `items` array. Touch only that
   one line (plus the preceding line's trailing comma if it didn't already have one) — do not
   reformat or reorder anything else in the file.
3. **Edit** `learn/wavemaker-release-notes.md` — insert the confirmed row immediately beneath the
   parent release's row in the Release History table. Touch only that one row.

**Minimal file surface:** exactly these three files. Never touch the parent release page or any
other file.

**Done when:**
```bash
test -f "learn/wavemaker-release-notes/<DOC_ID>.md"
grep -n "<DOC_ID>" website/sidebars.json
grep -n "<DOC_ID>" learn/wavemaker-release-notes.md
```
all confirm the new content is present, matching the confirmed draft exactly.

**Report done:**
```bash
node <report_step_path> --step 5 --job-id <job_id> --status completed --summary "Files Written" \
  --output $'Runtime-patch page created.\nsidebars.json updated beneath the parent release entry.\nRelease History row added beneath the parent release row.\nAll three files verified against the confirmed draft.'
```

---

## Step 6 — Deliver the final summary

**Report start:**
```bash
node <report_step_path> --step 6 --status running \
  --output $'Compiling final summary of the runtime-patch page, sidebar entry, and Release History row.'
```

**Report done (run BEFORE printing anything to the user):**
```bash
node <report_step_path> --step 6 --job-id <job_id> --status completed --summary "Summary Delivered" \
  --output $'Final summary compiled and delivered to user.'
```

**Only now, print the final summary**, covering:
- Runtime-patch version and its parent release.
- The Jira ticket(s) included, with their section classification (Bug Fixes / Enhancements /
  Features).
- The three files changed, with paths.
- An explicit note that **no git action was taken** — the changes are local/uncommitted, and
  committing/raising a PR is left to the user.

**Done when:** Step 6's `report-step` call has run and printed `→ SUCCESS`, and the final summary
— including the no-git-action note — has been printed to the user.

---

## Quick reference — the three hard gates

| Step | Gate | Reject when |
|------|------|-------------|
| 1 | Version format | No version in the prompt, or it doesn't match `^\d+\.\d+\.\d+\.\d+$` (e.g. `11.14.1.17`) |
| 2 | Parent release exists | `learn/wavemaker-release-notes/<PARENT_DOC_ID>.md` does not exist |
| 2 | Runtime patch doesn't already exist | The page file, `sidebars.json`, or the Release History table already has an entry for `<VERSION>` |
| 3 | Jira ticket id | The prompt doesn't supply at least one Jira ticket id |
