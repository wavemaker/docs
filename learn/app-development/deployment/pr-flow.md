---
title: "PR Flow"
id: "pr-flow"
sidebar_label: "Enabling Pull Request Flow for Custom VCS"
---
---

Pull Request Flow is a process used in collaborative software development where you as a contributor submit changes to a project's main codebase for review before merging them.

Now, in WaveMaker, you can enable the same PR flow to get your project changes pushed to the development branch of the in-use Version Control System (VCS). This can enhance mainly your teamwork and code maintainability.

:::note
This is applicable for the [Teams](/learn/teams/overview/) users only.
:::

In this, we use two roles to implement the PR flow; you as a developer need to enable the PR flow for the VCS, and create a pull request for the changes. Followed by the reviewer's verification of the changes.

After the verification, the reviewer can provide the comments which are then addressed by you as a developer. Once you push the changes, the reviewer approves and merges the changes to the Remote Tracking Branch (RTB).

## Enabling the PR Flow

You can enable this option to allow merging changes to the main branch after review. This option is disabled by default, which pushes the changes to the remote branch.

1. Go to the [Team Portal](/learn/teams/overview/).

![Team Portal](/learn/assets/pr-flow/team-portal.png)

2. Navigate to the [Code Repository](/learn/teams/code-repository) page.

![Code Repository](/learn/assets/pr-flow/code-repository.png)

3. Click **Settings** option to open the settings dialog for the configured Code Repository.

![Code Repository Settings](/learn/assets/pr-flow/code-repository-settings.png)

4. Enable the Pull Request and provide the value for the **Pull Request Developer Branch Pattern** for creating the developer branch. For example, the default branch pattern is `dev-{EMAIL_PREFIX}-{TENANT_DOMAIN_NAME}/{REMOTE_BRANCH_NAME}`

![Enable PR Flow](/learn/assets/pr-flow/enable-pr-flow.png)

## Creating Pull Request

You can create a pull request for the changes made in the project by pushing the local changes to the development branch using the push action in the VCS.

1. Go to the project with changes and click **Push Changes** from the VCS drop-down menu. This pushes the changes and creates a temporary developer branch.

![Push Changes VCS](/learn/assets/pr-flow/push-changes-vcs.png)

2. Add the commit message and click **Ok** to confirm. After a successful push action Pull Request Submission dialog will be opened.

![Push Changes Dialog](/learn/assets/pr-flow/push-dialog-ok.png)

3. Click the **Proceed** button.

![Pull Request Submission](/learn/assets/pr-flow/pull-request-submission.png)

4. You get redirected to the Pull Request Screen of the selected Code repository. In our case, we can see in Bitbucket where we first confirm the **Source branch** details and click **Continue**.

![Source Branch](/learn/assets/pr-flow/source-branch-continue.png)

5. Click on **Create** to submit the Pull Request.

![Create to Submit](/learn/assets/pr-flow/create-pr.png)

6. Go to studio, and click the **Commit History** option in the VCS drop-down to view the **Pending Pull Request Changes** and **Merged Changes** in the Commit History dialog.

![Commit History](/learn/assets/pr-flow/commit-history.png)

After successful pull request creation, the reviewer verifies the changes committed in the pull request and provides the necessary feedback.

## Addressing Feedback

You can address the feedback from reviewers that involves making fixes in the studio and pushing the changes to the development branch.

1. Go to the studio and click **View Changes** to view the suggested changes.

![View Changes](/learn/assets/pr-flow/view-changes-vcs.png)

2. In the View Project Changes dialog, you can compare the **Workspace changes** with the **Last Pushed Changes** which shows the changes that are not pushed to the development branch. You can also compare the **workspace changes** to the **master** branch, this comparison with Remote Tracking Branch (RTB) displays all the changes done so far.
 
![View Project Changes](/learn/assets/pr-flow/view-project-changes.png)

:::note
You can restore your workspace to the main branch, RTB, by clicking the **Restore to Remote Branch** button in the View Project Changes dialog under the View Changes section. This removes the changes pushed after the last merged changes.

![Restore to Remote Branch](/learn/assets/pr-flow/restore-to-remote-branch.png)
:::

After the initial changes are pushed the Reviewer can verify the changes and provide necessary feedback. Once the comments are addressed the Reviewer approves the changes and merges them to the main branch, RTB.


