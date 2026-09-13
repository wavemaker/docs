---
title: "Pull Request Flow for Custom VCS"
id: "pull-request-flow"
sidebar_label: "Pull Request (PR) Flow"
---
---

Pull Request (PR) Flow is a process used in collaborative software development where a contributor submits changes to a project's main codebase for review before merging them.

Now, in WaveMaker, you can enable the same PR Flow to get your project changes pushed to the development branch of the Version Control System (VCS) like, Bitbucket, GitHub, and GitLab. PR Flow mainly contributes to better teamwork and code maintainability.

:::note
PR Flow is applicable for the [Teams](/learn/teams/overview/) users only.
:::

In this case, we use two user roles to implement PR Flow.

### Developer

- [Enables the PR Flow for VCS](#enabling-the-pr-flow).
- [Creates Pull Request](#creating-pull-request).
- [Addresses Reviewer's comments](#addressing-feedback).

### Reviewer

- Verifies changes in the pull request and provides necessary feedback.
- Once feedback comments are addressed by the developer, the reviewer approves and merges changes to the Remote Tracking Branch (RTB).

## Enabling PR Flow

[Developer](#developer) enables the PR Flow option to allow merging changes to the main branch. This option is disabled by default, which pushes changes to the remote branch.

1. Go to [Team Portal](/learn/teams/overview/).
2. Navigate to the [Code Repository](/learn/teams/code-repository) page.
3. Click **Settings** option to open the settings dialog for the configured Code Repository.
4. Enable **Pull Request** and provide a value for **Pull Request Developer Branch Pattern** for creating a developer branch. For example, the default branch pattern is `dev-{EMAIL_PREFIX}-{TENANT_DOMAIN_NAME}/{REMOTE_BRANCH_NAME}`. Click Save.

<iframe width="700px" height="400px" src="https://embed.app.guidde.com/playbooks/cqesYJtnXYAp2s777EG7ye" title="Guidde embed video" frameborder="0" allowfullscreen ></iframe>

Assuming that the [developer](#developer) makes changes in the project within WaveMaker studio after enabling PR Flow; a pull request is created to push those changes. 

## Creating Pull Request

[Developer](#developer) creates a pull request for local changes made in the project by pushing them to the development branch.

1. Go to the project with changes and click **Push Changes** from the VCS drop-down menu. This creates a temporary developer branch with project changes.
2. Add Commit Message and click **Ok** to confirm.
3. After a successful push action **Pull Request Submission** dialog will be opened, click **Proceed**.
4. [Developer](#developer) gets redirected to the **Create Pull Request** page of the selected Code Repository. In our case, we can see in Bitbucket where we first confirm the **Source** branch details and click **Continue**.
5. Click **Create** to submit the Pull Request.
6. Go to WaveMaker studio > VCS drop-down. Click the **Commit History** option to view **Pending Pull Request Changes** and **Merged Changes** in the Commit History dialog.

<iframe width="700px" height="400px" src="https://embed.app.guidde.com/playbooks/46bgTuPzn9rr8q1Wfp7nYL" title="Guidde embed video" frameborder="0" allowfullscreen ></iframe>

After successful pull request creation, [Reviewer](#reviewer) verifies the changes committed in the pull request and provides the necessary feedback.

## Addressing Feedback

[Developer](#developer) addresses the feedback from the [reviewer](#reviewer) by making fixes in the studio and pushing the changes to the development branch.

1. Go to WaveMaker > VCS drop-down > **View Changes**.
2. In the **View Project Changes** dialog, you can compare the **Workspace changes** with the **Last Pushed Changes**; this shows the changes that are not pushed to the development branch. You can also compare the **workspace changes** to the **master** branch; this comparison with Remote Tracking Branch (RTB) displays all the changes done so far.

<iframe width="700px" height="400px" src="https://embed.app.guidde.com/playbooks/hKZAmxrb2CsMkiqmDkVDLM" title="Guidde embed video" frameborder="0" allowfullscreen ></iframe>

:::note

[Developer](#developer) can restore the workspace to the main branch, RTB, by navigating to VCS > View Changes > **View Project Changes** dialog. Click the **Restore to Remote Branch** to discard the changes that were pushed after the previously merged changes.

![Restore to Remote Branch](/learn/assets/pr-flow/restore-to-remote-branch.png)
:::

Once the comments are addressed the [reviewer](#reviewer) approves the changes and merges them to the main branch, RTB.
