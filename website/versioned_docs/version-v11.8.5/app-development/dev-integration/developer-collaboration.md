---
title: "Developer Collaboration"
id: "developer-collaboration"
---
---

Developer Collaboration includes two steps:

1. Sharing the project and dividing the work between multiple contributors, and
2. Tracking and keeping up to date with the changes made by these collaborators.

In this document, we will be seeing how this can be achieved for WaveMaker.

## Project Sharing

Project Sharing ensures that you do not lose any changes made by the developer network by tying your app into a version control system. You can start collaborative development, by, from the **Project Dashboard**.

- Click on Members link on the Project card to view the App Member Details, add and remove **Members** having access to the project. 

[![](/learn/assets/user_management_add.png)](/learn/assets/user_management_add.png)

## Add members

- By default, the owner of the project is assigned the role of a Project Admin.
- Project Admin can add members to the Project, these new members are assigned the Default role which gives them read access.
- Enter the email id of the Member you want to add as Project Admin or Contributor in the appropriate text box and click the **Add** button. This feature is available only to the Project Admins.
- **Multiple Project Admins and contributors** can be added to the project.

:::note
One need not be on the same email domain to collaborate on the project.
:::

## Change Roles

- Once the user is added as Project Admin/Contributor, the role can be changed. To change the role of the existing member, click on More options and select Add as Project Admin/Add as Contributor option.
- It opens a  confirmation dialog saying `<user_name>` role will be changed from `<existing_role>` to <new_role> in `<project_name>`. Click OK button to confirm.

[Refer here](/learn/app-development/wavemaker-overview/project-user-management/#roles) to know more about the Roles.

:::note
Only the Project Admins are allowed to change the roles.
:::

## Delete a member

- The Project Admin can remove a member from the project using Remove option. The owner, who created the project cannot be deleted. However, the owner's role can be changed to a contributor.
- It gives a confirmation dialog box, stating whether the `<user_name>` needs to be removed from the `<project_name>`

## Delete project

- From the Project card, you can leave or delete the project from the Leave project/Delete option on the project.

## Code Sharing - VCS

When multiple developers are working on the same application, tracking code changes and synchronizing the changes is of the essence. WaveMaker provides Version Control Services for this purpose.

**Version control** is the process of tracking and controlling changes to a project's files, which includes source code, documentation, and web pages. Subversion and Git are examples of such version control systems.

WaveMaker includes an integrated version control system. When you open a project it is checked out from the version control repository. You can pull, push, revert and merge changes back to the repository. WaveMaker version control system by default is hosted on **GitLab**. You can choose to push your code to an external VCS, too.

From the Project Listing page, you have the option to **restore** your project to the repo version, thus replacing your local copy of the project with the one in the repo.

Also, in the project workspace, you will find that a **VCS Menu** is displayed for projects.

[![](/learn/assets/vcs_menu.png)](/learn/assets/vcs_menu.png)

## Version Control System

### Checkout Project

Once you start working on a project, i.e. open it from the Project Dashboard, the project is checked out from the repository. Any changes made to the project will be saved on your local machine. To ensure that the changes are reflected in the repository, one needs to explicitly push the changes to the repository.

### Pull Changes

1. On your project listings page, a notification will indicate when your team collaborator has pushed any changes to the shared project.
2. On the project workspace of a checked out project, from the **VCS** menu, select **Pull Changes**.
3. This will ensure that your local copy of the project gets the latest copy of the project.

### Push Changes

1. On the project workspace of a checked out project, from the **VCS** menu, select **Push Changes**.
2. The **Push Changes** dialog is displayed, where you need to enter the Commit Message. 

    There are two parts to the Commit Message.

    1. Mandatory commit message to be entered by the developer, and
    2. Auto-populated message based on New Files Added, Files modified and Removed files categories. Any of these categories will be shown if there are any files related to that category. When there are no changes in the project, the auto-populated message will be displayed.
    
3. Enter a Commit Message summarizing your changes and click on **OK** to check in the changes you have made to the project code back to the repository.

### View Changes

View Changes enables you to see the code difference. If you wish to undo the changes that you have performed on a project that you have checked out, you can revert changes to all or some of the files using the revert changes option.

1. On the project workspace of a checked out project, From the **VCS** menu, select **View Changes**. 

    The changes made to your project will be displayed:
    
    - categorized, based upon the functionality and folder structure, into Pages, Services, Prefabs, Folders and standalone files;
    - you can choose the category to revert the changes. All the files in the categorized sections will follow the atomicity rules - the action can be taken in all or no files for both ADDED and DELETE operations. However, for cases where the files are modified, the user is provided an option to REVERT the files individually within the category.
    
2. Click the **Show Diff** icon against the file you to see the code changes, with conflicts clearly marked. You can choose to revert or save the changes.
3. You can also select the files that you want to revert changes for and click **Revert**. The project reloads after reverting your changes. You can also use the select-all option on the dialog to revert all the changes across the project.

### Merge Changes

When you perform a pull or a push operation, you may have to merge files and resolve conflicts resulting from the changes by other team members or developers. WaveMaker will prompt you with a **Merge Files** dialog to merge files and resolve conflicts when you try to Push changes. You can also click on **Merge Files** from the **VCS** menu to merge files and resolve conflicts.

The **Merge Files** dialog displays a list of files which need to merge. For each file, it displays the changes from the server, local changes and a merged result alongside to compare the differences. The merged result is shown in the center. The dialog also displays conflicting and non-conflicting changes in different colors to make merging easier. You can select multiple files and apply the same behavior to all. You can choose to Discard Pull Changes and revert back to the original version.

There are three ways to merge files:

- **Accept only server changes**: Review the changes and click **Accept Theirs** button to accept only server changes.
- **Accept only your changes**: Review the changes and click **Accept Yours** button to accept only local changes.
- **Resolve Conflicts**: Each change has a corresponding region next to it which links it to the merged result. You can click on a region to exclude the corresponding changes from the merged results. You can even edit the merge results to make changes to the code manually. Once you are satisfied with the merged result (displayed in the center), click **Apply** to accept the merged result.

:::note
Currently, Merge Files supports code level merges and the user is expected to know about the generated code of the project.
:::

### Commit History

**Commit History**  option under VCS shows history (git log) of last 10 commits with the following information:

- Commit Time and Date,
- Author,
- Commit Message

You can navigate through the older and newer commits by 10 commits each time by clicking on Older and Newer buttons.

### Push to External Repo

You can choose to have a copy of your project code in an **External Repo**. WaveMaker supports GitHub, Bitbucket and any Git repository. This functionality is available only for Project Admins.

Select the **Push to External Repo** option from the **VCS Menu**. You will be prompted to choose from three options: **GitHub**, **Bitbucket** or **Git Repo**. Provide the credentials of the selected repo and the project code will be **pushed** to that repo using the credentials provided.

[![](/learn/assets/VCS_ExtRepo.png?v=20)](/learn/assets/VCS_ExtRepo.png?v=20)

You can specify the branch to which the project needs to be pushed. In case the branch does not exist, one will be created. When using an existing branch, keep in mind that the folder structure of the selected branch should match the code being pushed. You can optionally choose the branch from the list provided.

:::important

- This option is available only to PUSH to the external repo, it does not update the project on WaveMaker with the code from the external repository.
- For using GitHub or Bitbucket, you should be having an account by registering with either of them. If no URL is provided one will be created for you.
- To work with the **Git Repo** Repository URL is mandatory, you have to create the repo and provide the URL.
:::
