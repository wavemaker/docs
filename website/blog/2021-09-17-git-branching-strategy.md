---
title: "Git Branching Strategy"
author: Tarun Dubey
---

Project branching allows developers to checkout code from the existing git branch and isolates their work from others. If you are a member of WaveMaker Teams, read further to understand best practices for managing branches in WaveMaker. 

<!--truncate-->

In Git flow, the **main** (or master) branch contains your production-ready code. You can use the **main** (or master) branch for CI/CD integration. The other branches, feature branches, hotfix branches should contain work on new features and bug fixes and will be merged back into the **main** (or master) branch when the work is finished and properly reviewed.

![branching model](/learn/assets/branching-model.png)

## Git Flow Considerations

While working with the Git flow branching strategy, there are six principles you should adhere to to ensure you maintain good code.

1. Any code in the main(or master) branch should be deployable, production-ready.
2. Create new descriptively-named branches off the main branch for new work, such as feature/add-new-payment-types.
3. Commit new work to your local branches and regularly push work to the remote.
4. To request feedback, help, or when you think your work is ready to merge into the main branch, open a pull request. 
5. After your work or feature has been reviewed and approved. It can be merged into the main branch.
6. Once your work has been merged into the main branch, it should be deployed.

## Advantages of Git Flow

1. Because of the simplicity of the workflow, this Git branching strategy allows for Continuous Delivery and Continuous Integration.
2. This Git branch strategy works great for small teams and web applications.

## Implementing in WaveMaker

  ![features branching](/learn/assets/features-branching.png)

WaveMaker supports the creation of a project using an existing branch in Git. We can follow the above Git model using the below steps:

1. Creating an Application (for example, SampleApp) from WaveMaker will create a repository with the **main** (or master) branch in Git. 
2. By Default, all Contributors of this Project will push their changes to **main** (or master).
3. Anything in the **main** (or master) branch is deployable.
4. The above application will always point to the **main** (or master) branch. 

:::warning
- Use this application to always PULL from **main** (or master) branch.
- Do not commit to the **main** ( or master) directly. Do not hotfix into **main** (or master). Instead, use a feature/hotfix branch.
:::

5. To work on something new, go to the Git portal (for example, Github, Gitlab etc) and create a branch from **main** (or master) in the repository (for example, SampleApp). Give it a descriptive name (for example, feature/new-oauth2-scopes).

![create a branch](/learn/assets/create-a-branch.png)

6. Now again, from WaveMaker, go to option **Create Project Branch** for the application mentioned above (for example, SampleApp), and create a project branch by selecting the appropriate branch. Following the above example, we’ll select branch `feature/new-oauth2-scopes`. This will create a new branch project, pointing to the branch `feature/new-oauth2-scopes`. 

![wm project branch](/learn/assets/wm-project-branch.png)

![create project existing branch](/learn/assets/create-project-existing-branch.png)

7. Developers can start collaborating and working on this project, named `feature/new-oauth2-scopes`, and can regularly push their work.
    1. Developers can review the changes using **Preview** in WaveMaker.

    ![preview application](/learn/assets/preview-application.png)
 
    2. Users can also deploy the feature branch to an external testing environment using a branch from Git or exporting a war file from WaveMaker. Refer to the below screenshot to download the war file. 

    ![project as war](/learn/assets/project-as-war.png)

8. After the required changes are done and tested in the feature branch, you can merge it into the **main** (or master). Merging the feature branch into the **main** (or master) branch is done outside of WaveMaker and through Git portals like Github, Gitlab, etc.

    1. In our example, Merge `feature/new-oauth2-scopes` branch into the **main** (or master) branch from Git portals like Github, Gitlab, etc.

9. Once it is merged and pushed to **main** (or master) branch, you can PULL the latest changes into the **main** (Master) Project (refer to Steps 1, 2 & 3) and deploy from WaveMaker or use CI/CD to deploy from the **main** (Master) branch.
    1. Users can deploy from a master project from WaveMaker for Testing the **main** (or master) branch.

    ![deploy from master](/learn/assets/deploy-from-master.png)

    2. User can configure the **main** (or master) for Continuous Integration and Continuous Deployment in their external deployment pipeline. 
