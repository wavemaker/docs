---
title: "PR Flow"
id: "pr-flow"
sidebar_label: "Enabling Pull Request Flow for Custom VCS"
---
---

Pull Request Flow is a process used in collaborative software development where you as a contributor submit changes to a project's main codebase for review before merging them.

Now, in WaveMaker, you can enable the same PR flow to get your project changes pushed to the development branch of the in-use Version Control System (VCS). This can enhance mainly your teamwork and code maintainability. To push your changes to the remotely created branch, you can disable this option.

## Enabling the PR FLow

1. Go to the Team Portal and navigate to the Code Repository page.
2. Open Settings for your configured code repository to enable the Pull Request and provide the value for the Pull Request Developer Branch Pattern for creating the developer branch.

![Enable PR Flow](/learn/assets/pr-flow/enable-pr-flow.png)

## Submitting Pull Request

Push action takes your local changes and pushes them to the development branch. To share your changes for review and merging, you'll need to create a pull request.

1. Click Push Changes from the VCS drop-down menu.
2. After a successful push action Pull Request Submission dialog will be opened.

![Pull Request Submission](/learn/assets/pr-flow/pull-request-submission.png)

3. Upon clicking the Proceed button, it opens a new tab with pre-filled details where you need to submit a Pull Request.
4. Review and Submit the changes.
5. You can now view the pending pull request changes and merged changes in the Commit History dialog.

![Commit History](/learn/assets/pr-flow/commit-history.png)

## Review Changes

You, as a reviewer, can then verify the proposed changes by viewing code differences between the development branch and the main branch in their VCS or platform. You can provide comments and suggestions.

## Addressing Feedback

You can address the feedback from reviewers that involves making fixes in the studio and pushing the changes to the development branch.

1. You can compare the Workspace changes with the Last Pushed Changes which shows the changes that are not pushed to the development branch or the main branch which shows all the changes done so far.
 
![View Project Changes](/learn/assets/pr-flow/view-project-changes.png)

## Merging Changes

Reviewers can approve the Pull Request in their VCS or platform.

1. After the approval, based on the merge options new commit will be added. Next, on project reload you can pull the changes.
2. You can restore your workspace to the main branch in the Restore to Remote Branch dialog, if your changes are not needed and continue working on another task.

![Restore to Remote Branch](/learn/assets/pr-flow/restore-to-remote-branch.png)