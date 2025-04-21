---
title: "Distinguishing User vs. Migration Changes in WaveMaker Studio"
author: "Raviteja Dugge"
---
---

WaveMaker Studio now separates your code edits (User Changes) from system-generated updates (Migration Changes). This update provides improved visibility, clarity, and control over project changes, making it easier to manage your work during platform upgrades.

Previously, WaveMaker Studio's **View Changes** combined both user and migration changes in a single view. This often caused confusion and made it difficult to tell apart manual edits from automatic updates. In some cases, reverting critical migration changes — especially in files like [`pom.xml`](/learn/blog/2022/03/24/wavemaker-application-pom) and build.xml — led to build failures and unnecessary debugging.

![](/learn/assets/changes-categories-before.png)


<!-- truncate -->

## The Solution: Separate Change Categories

WaveMaker now offers categorized views and separate commits for User and Migration changes, allowing for better control and understanding of changes in your project.

🔍 View Project Changes Options:

### ✅ User Changes
- Displays only files modified by the user.
- File diffs reflect only user edits—even in files with migration updates.
- You can revert these changes.

### 🔧 Migration Changes (Read-Only Mode)
- Displays files automatically updated by the platform.
- File diffs show only system-generated changes.
- Revert is disabled to protect the integrity of migration updates.

### 🔍 Overall Changes (Read-Only Mode)
- Shows both user and migration changes together.
- Ideal for full-context review.
- Reverting is disabled.

### 🚀 Changes Since the Last Push
- Appears when MR/PR workflow is enabled.
- Displays all user changes made after the last push.
- Migration changes are not shown here.
- Helps you review suggestions and comments before merging.
- Revert is enabled for user changes.

![](/learn/assets/changes-last-pushed.png)

## Enhanced Push Flow: Two Separate Commits
WaveMaker Studio now creates two separate Git commits during the push process—one for migration changes and one for user edits.

### 🔄 What Happens During Push?
When you click **Push Changes**, Studio checks for both types of modifications. If changes are found, it creates:

![](/learn/assets/two-commits.png)

#### 1️⃣ Migration Commit
- Captures platform-generated updates.
- Created only when migration changes are detected.
- Non-revertible to ensure upgrade consistency.

#### 2️⃣ User Commit

- Captures manual changes made by the user.
- You’ll be prompted to enter a custom commit message.
- Created only when user changes exist.

## 💡 Why It Matters

- 🔎 **No More Guesswork** — Instantly see what you changed vs. what the platform upgraded.
- 🛡️ **Safe Migration** — Prevent accidental rollbacks of system-critical changes.
- 🤝 **Better Code Reviews** — Clearly separate system vs. developer logic.
- 🐞 **Simplified Debugging** — Easily identify the source of bugs post-push.
- 🔄 **Flexible Rollback** — Revert your own commits without affecting migration.
- 🧾 **Clean Git History** — See what was changed by the platform vs. by you.



## ✅ Conclusion

By separating migration changes from user edits, WaveMaker gives you a cleaner workflow, enhanced visibility, and stronger control during project upgrades. This clarity helps reduce errors, speed up reviews, and improve confidence in the development process.

**💡 Tip:** Use the new views and commit strategy during every migration to maintain a healthy and readable codebase.


