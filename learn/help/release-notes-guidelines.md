---
id: "release-notes-guidelines"
title: "Guidelines To Create WM Release Notes"
sidebar_label: "Guidelines To Create WM Release Notes"
---

---

## WMO Release Notes

WMO release notes contains mainly five sections which differ from release to release.

- New Features
- Migrations
- Enhancements
- Bugs
- Tech Stack

We can further categorize features, migrations, enhancements, bugs, and tech stack into three,

- Web
- Studio
- React Native

## Steps to Create WMO Release Notes

To create the WMO Release notes, follow the below steps

1. Reach out to leads to get the tickets assigned.
2. Once assigned, check the tickets for necessary information.
3. Create a new branch for the release.
4. Update the necessary documents.
5. Get the approval and get the release notes merged.


### 1. Reach Out to Leads

Ensure that the tickets are assigned to you in **Basecamp**. To get the bugs, ehnacements, and features assigned to you reach out to,

- Krishna - for backend
- Bhargavi - for UI
- Naresh & Bandhavya - for Studio and Frontend
- Sunil - for React Native
- Uday Shankar - for Tech Stack Upgrades

### 2. Check for Information in Basecamp

Once assigned, check each item if they have the necessary description. The description might differ for every item like,

For Feature:

- What is the feature?
- Why do we need the feature?
- How to implement?
- Impact of the feature (optional)
- Relevant images or videos (optional)

:::note
Videos should be created using [Guidde](https://app.guidde.com/home).
:::

For Migration:

- What is the migration?
- Why are we migrating?
- Impact of the migration (optional)
- Relevant images or videos (optional)

For Enhancement:

- What is the enhancement?
- Why do we need the enhancement?
- How to implement?
- Impact of the enhancement (optional)
- Relevant images or videos (optional)

For Bug:

- What is the bug?
- How did we fix? (optional - only if the fix is not internal)
- Impact of the bug (optional)
- Relevant images or videos (optional)

### 3. Create New Branch for Release

1. Create a new branch under master branch using Github desktop with the name **release-notes-11.x.x**.
2. Navigate to **docs** -> **learn** -> **wavemaker-release-notes**, create a new file for release notes with name **v11-x-x**.
:::note
Adhere to the naming convention mentioned above.
:::

#### Pre-release Document


#### Post-release Document


WMO release notes

new features
- web
studio
-rN

Migrations
- web
-rn

Enhancements
- web
-studio
- rn

Bugs
- web
-studio
- rn

Tech stack

Ping in the chat to assign you the items that need to go in release notes
Check if it has dexcription, if available then check for clarity and all the required info. If not available, comment in basecamp to add.
Create a new branch- named - release-x-x-x
Create file- v11.x.x
the pre release doc will have the tag in the sidebar label as 'upcoming' - posted on the previous week's Wednesday.
- tone should be - it will include in the overview.
the release doc will have the tag - 'latest'
- tone should be changed to it includes

Along with pre release doc 4 other docs that go are:
- sidebar.json
- index.json
- docusaurus.json
- wavemaker-release-notes.md
--- Add the overview
--- Upgraded tech stack

In final release along with current release doc the previous release doc is also changed.
The change is - 'latest' from sidebar label in the title is removed.

Wednesday the pre release doc should be published, Wednesday by morning review has to be done. 

for pre release doc- items till Monday
final- items till Wednesday

People to reach out

Krishna- backend
Bhargavi- frontend
Naresh & bandhavya- frontend
Sunil- RN

Venu - to make above people take better action

Swetha- final review and merge.

share the preview link and PR link in the docs review group for review.

write summary in caps

WME release notes






