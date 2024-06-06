---
title: "PR Flow"
id: "pr-flow"
sidebar_label: "Enabling Pull Request Flow for Custom VCS"
---
---

Pull Request Flow is a process used in collaborative software development where you as a contributor submit changes to a project's main codebase for review before merging them.

Now, in WaveMaker, you can enable the same PR flow to get your project changes pushed to the development branch of the in-use Version Control System (VCS). This can enhance mainly your teamwork and code maintainability.

:::note
This is applicable for the Team users only.
:::

## Enabling the PR FLow

You can enable this option to allow merging changes to the main branch after review which by default is disabled that allows pushing changes to the remote branch.

1. Go to the [Team Portal](/learn/teams/overview/).

![Team Portal](/learn/assets/pr-flow/team-portal.png)

2. Navigate to the [Code Repository](/learn/teams/code-repository) page.

![Code Repository](/learn/assets/pr-flow/code-repository.png)

3. Open Settings for your configured Code Repository.

![Code Repository Settings](/learn/assets/pr-flow/code-repository-settings.png)

4. Enable the Pull Request and provide the value for the Pull Request Developer Branch Pattern for creating the developer branch.

![Enable PR Flow](/learn/assets/pr-flow/enable-pr-flow.png)

## Submitting Pull Request

Push action takes your local changes and pushes them to the development branch. To share your changes for review and merging, you'll need to create a pull request.

1. Go to the project where changes are to be made and click Push Changes from the VCS drop-down menu. This pushes the changes and creates a temporary developer branch.
2. Add the commit message and click **Ok** to confirm.
3. After a successful push action Pull Request Submission dialog will be opened. 

![Pull Request Submission](/learn/assets/pr-flow/pull-request-submission.png)

3. Upon clicking the Proceed button, it opens a new tab with pre-filled details where you need to submit a Pull Request.
4. You will be redirected to the Pull Request Screen of the selected Code repository. In our case, we can see in Bitbucket where we first confirm the Source branch details and click **Continue**.
5. Click on Create to submit the Pull Request.
6. Click the **Commit History** option in the studio to view the pending pull request changes and merged changes in the Commit History dialog.

![Commit History](/learn/assets/pr-flow/commit-history.png)

## Addressing Feedback

You can address the feedback from reviewers that involves making fixes in the studio and push the changes to the development branch.

1. Go to the studio and click **View Changes** to view the suggested changes.
2. In the View Project Changes dialog, you can compare the **Workspace changes** with the **Last Pushed Changes** which shows the changes that are not pushed to the development branch. You can also compare the **workspace changes** to the **master** branch, this comparison with Remote Tracking Branch (RTB) displays all the changes done so far.
 
![View Project Changes](/learn/assets/pr-flow/view-project-changes.png)

:::note
You can restore your workspace to the main branch, RTB, by clicking the **Restore to Remote Branch** button in the View Project Changes dialog under the View Changes section. This removes the changes pushed after the last merged changes.

![Restore to Remote Branch](/learn/assets/pr-flow/restore-to-remote-branch.png)
:::

## Reviewing and Merging Changes

After the initial changes are pushed the Reviewer can verify the changes and provide necessary feedback. Once the comments are addressed the Reviewer approves the changes and merges them to the main branch, RTB.


