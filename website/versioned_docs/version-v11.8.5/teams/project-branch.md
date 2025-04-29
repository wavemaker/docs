---
title: "Project Branches"
id: "project-branch"
---
---

In a collaborative environment, it is common for several developers to share and work on the same source code. While some developers will be fixing bugs, others will be implementing new features, etc. With so much going on, there needs to be a system for managing different versions of the same code base.

Project branching allows each developer to checkout code from the existing git branch and isolates their work from others.

## What is a Project branch?

A Project branch is essentially an independent line of development checked out from the git branch. You can take advantage of Project branching when working on new features or bug fixes because it isolates your work from other team members.

Creating a new Project branch does not change the repository. It simply checkout the code from the existing git branch.

## Prerequisites

1. Active Team Subscription 
2. External VCS configuration, see [Code Repository](/learn/teams/code-repository)

## How does it work?

### Create a Project branch

* Select **Create Project Branch** option.
 

![Create project branch](/learn/assets/BlogBranchCoachMark.png)


* Next, select the existing git branch. Your project branch will be backed by this git branch.


![Select existing branch](/learn/assets/BlogBranchSelection.png)


* If you go to configured VCS; for example, GitHub. You can see there are two branches to pick from in the branch drop-down.


![Git branches](/learn/assets/BlogGitBranch.png)

:::note
All the changes in the project branch will be backed by the selected git branch.
:::

:::note
For more information on configuring VCS, see [Code Repository](/learn/teams/code-repository).
:::


* Project branch gets created pointing to the selected git-branch. Now, one can work independently on the **feature-1** project branch without affecting the master branch code. Later, the **feature-1** git-branch can be manually merged from the VCS system into the **master** branch.


![Project Branch Cards](/learn/assets/BlogBranchCards.png)


### Switching Project Branches

* Switch to different project branches by clicking the branch, and you can see the changes you made on that branch.

* Changes in **master** project branch.


![Project Branch Master](/learn/assets/BlogMasterBranch.png)


* Changes in **feature-1** project branch.


![Project Branch Feature](/learn/assets/BlogFeatureBranch.png)



