---
title: "Separating Migration Changes from Your Own"
author: "Raviteja Dugge"
---
---

WaveMaker Studio now categorizes changes into [User Changes and Migration Changes](#the-solution-separate-change-categories), providing visibility, clarity, and control when viewing project changes.​

![Change Categories in Push Flow](/learn/assets/change-categories-push-flow.png)

Previously, in WaveMaker Studio's **View Changes** user could see both user-made and system-generated migration changes together, leading to confusion. Users often encountered difficulty to distinguish between their own edits and automated updates. 

This sometimes resulted in accidental reversion of critical migration modifications, especially in files like [`pom.xml`](/learn/blog/2022/03/24/wavemaker-application-pom) and `build.xml`, causing build failures and increased debugging efforts. 


<!-- truncate -->

## The Solution: Separate Change Categories

WaveMaker's introduction of change categories and separate commits for migration and user changes enables users to clearly distinguish between automated system updates and their own modifications.

The **View Project Changes** dialog now supports the following views:

### ✅ User Changes
- Displays all the files changed by the user.
- The file diff for this view will show only user changes, regardless of any platform migration changes to the same file.
- Allows reverting these changes.

### 🔧 Migration Changes (Read-Only Mode)
- Displays all the migrated files.
- The file diff for this view will show only migration changes, regardless of any user changes to the same file.
- No revert option—this is a review-only mode.

### 🔍 Overall Changes (Read-Only Mode)
- A combined view for reviewing both user and migration changes.
- No revert option—this is a review-only mode.

### 🚀 Changes Since the Last Push
- Available when MR/PR flow is enabled and there are local changes since the last push.
- Displays all user changes made after the last push.
- Migration changes (if any) do not appear here.
- Allows users to easily act on suggestions made during code reviews.
- Reverting is allowed for user changes.

![](/learn/assets/changes-last-pushed.png)

## Why This Matters

🔎 **No More Guesswork:** You instantly know which changes are yours and which are migration changes.
🛡️ **Protected Migration Changes:** *Non-revertible* migration updates prevent accidental rollbacks and broken builds.

## Enhanced Push Flow: Two Separate Commits
To improve clarity and maintainability, WaveMaker Studio now creates two separate Git commits during the push process—one for migration changes and one for user changes.

### 🔄 What Happens During Push?
When a user pushes project changes using **Push Changes** option, Studio checks for both migration and user modifications. If either is present, it performs the following:

![](/learn/assets/two-commits.png)

#### 1️⃣ Migration Commit
Captures all changes made automatically by the platform upgrade.
Created only if migration changes exist.
These changes are non-revertible to preserve upgrade integrity.
#### 2️⃣ User Commit
Captures all modifications made directly by the user.
Created only if user changes are detected.
Users are prompted to enter a custom commit message.
This ensures a clear boundary between what the platform changed and what the developer changed.

## 💡 Why Two Commits?
This two-step commit strategy provides several advantages:

- 🤝 **Smoother Code Reviews**
Teammates and reviewers can clearly distinguish platform-driven changes from user-authored logic.
- 🐞 **Easier Debugging**
If an issue arises after a push, developers can quickly isolate whether the problem came from the migration or user changes.
- 🔄 **Rollback Flexibility**
Developers can safely revert user commits without disturbing critical migration updates.
- 🧾 **Readable Git History**
A clean separation makes it easy to understand what was changed during a migration versus what was changed by a developer.

## Conclusion

Platform evolution changes can now be easily done by separating user edits from migration updates. This provides you a cleaner workflow, better insight, and more confidence in the upgrade process.



