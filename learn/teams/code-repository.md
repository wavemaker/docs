---
title: Code Repository
id: ""
---
---

Source code management is a critical part of the project lifecycle allowing teams to manage work with a single source of truth. Teams include support for integrating multiple Version Control System (VCS) providers so that you have access to different source code repositories and have complete control over where your source code resides. It helps in setting up Continuous Integration (CI) and Continuous Delivery (CD) pipelines.

By default, WaveMaker provides a VCS which you can use when you have not configured your own code repository.

:::note
**Teams** will not have access to the default Version Control System provided by WaveMaker.
:::

## How it Works

You can choose to add one or more code repositories. **Teams** portal is a central place to provide or edit the credentials for code repositories. These credentials will be used when developers are collaborating on applications, and pushing and pulling changes from the code repository.

Once you add a new repository, you have to make the new repository as default to manage the projects created hereafter. This will not have any effect on the projects created earlier. All the existing projects continue to be in the same repository which was selected as default at the time of project creation.

:::note
A feature **Push to External Repo** provided in Studio is used to push changes to an external repository. This is different from the above code repository configuration. Earlier, you have to provide credentials each time you want to push changes while in later once configured and set as 'Default' all push/pull operations will use configured credentials.
:::

You can access the code repository page in the administration area by clicking **Code Repository** from the left panel.

![Code Repository](/learn/assets/TeamCodeRepository.png)

From the Code Repository page, you can

- Add code repository  
- View or edit a code repository details  
- Make **default** a specific code repository
- Remove a code repository

## Add Code Repository

- Click **Add Code Repository**, and provide your repository details.

![Add Repository](/learn/assets/TeamAddVcsRep.png)

:::note
You need to explicitly make this VCS as "Default" to add new projects to this repository.
:::

## Edit Code Repository

- Select the code repository you want to edit, click the **Edit** icon and update the details.

![Add Repository](/learn/assets/TeamAddVcsRep.png)

## Make Code Repository as Default

- Select the Code Repository you want to make as default, and click the **Default** option.

![Make Repository Default](/learn/assets/TeamMakeVcsDefault.png)