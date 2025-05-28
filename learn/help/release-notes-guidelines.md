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

Ensure that the tickets are assigned to you in **Basecamp**. To get the bugs, ehnacements, and features assigned to you reach out to below teams.

- Backend and Tech Stack Upgrades
- Studio and Frontend
- React Native

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

**For Migration:**

- What is the migration?
- Why are we migrating?
- Impact of the migration (optional)
- Relevant images or videos (optional)

**For Enhancement:**

- What is the enhancement?
- Why do we need the enhancement?
- How to implement?
- Impact of the enhancement (optional)
- Relevant images or videos (optional)

**For Bug:**

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

#### Types of Release Notes

We create two types of release notes,

- **Pre-release notes**: This is published on the previous wednesday of the release. This makes sure that the users are not taken by surprise and are prepared in advance for any feature, migration, enhancement, and tech stack upgrade.
- **Post-release notes**: This goes live along with the version upgrade.

Points to keep in mind when documenting Pre-release and Post-release documents.

#### Pre-Release Document

- The tone used in the overview of this document is always in future tense. For example, the overview should start - "This release will include".
- The sidebar_label should have **upcoming** suffix. For example, **v11.11.1 - upcoming**.

:::note
Adhere to the naming convention mentioned above.
:::

#### Post-Release Document

- The tone used in the overview of this document is always in present tense. For example, the overview should start - "This release includes".
- The sidebar_label should have **latest** suffix. For example, **v11.11.1 - latest**.

:::note
Adhere to the naming convention mentioned above.
:::

![](/learn/assets/upcoming-latest-doc.png)

### 4. Update the necessary documents.

Along with the release notes, there are four other documents that are updated with every release.

- wavemaker-release-notes.md
- sidebar.json
- index.json
- docusaurus.json
- release notes for previous version

**wavemaker-release-notes.md**:

This is the overview document for all the releases. With every release, the below segments are updated.

- Under Release History, add a new table or a new row to the existing table with the overview of the respective release and its release date
- For pre-release document, add the suffix as **upcoming and style color as green**. And for post-release document, add the the suffix **latest and style color as red**.

![](/learn/assets/wmo-pre-post-release.png)

- Update the Tech Stack with the latest version details and update the **Last Updated** with the release version with latest tech stack.

**sidebar.json**:

Add the latest release in the sidebar.json for it to display in the left bar for navigation.

![](/learn/assets/latest-doc-sidebar.png)

**index.json**:

Update the latest version of the release and its path. This message is broadcasted in the homepage of documentation and users can directly navigate to the release document from this message.

![](/learn/assets/release-notes-index.png)

**docusaurus.json**:

Update the latest version of the release as it is displayed as the lasted version in the documentation site.

![](/learn/assets/release-notes-docusaurus.png)

**release notes for previous version**:

For the post-release, remove the suffix as latest.


### 5. Get Approval to Merge

Once documented, share the pre-release and post-release documents with the repective team leads to get the approval in Git. After the approval, get the release notes merged. 

