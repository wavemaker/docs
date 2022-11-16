---
title: Code Repository
id: "code-repository"
---
---

Source code management is a critical part of the project lifecycle allowing teams to manage work with a single source of truth. Teams include support for integrating multiple Version Control System (VCS) providers so that you have access to different source code repositories and have complete control over where your source code resides. It helps in setting up Continuous Integration (CI) and Continuous Delivery (CD) pipelines.

By default, WaveMaker provides a VCS which you can use when you have not configured your own code repository.

:::note
You can pull, push, revert and merge changes back to the default VCS provided by WaveMaker. But, you will not have UI access to the default VCS and it cannot be used for Continuous Integration (CI) and Continuous Delivery (CD) streamlines.
:::

## How it Works

You can choose to add one or more code repositories. **Teams** portal is a central place to provide or edit the credentials for code repositories. These credentials will be used when developers are collaborating on applications, and pushing and pulling changes from the code repository.

Once you add a new repository, to choose a code repository where your newly created application's source code should reside, you've to set that code repository to 'Default'. This will not have any effect on the earlier applications which were created when different code repository was set as 'Default', these applications will keep on referencing the code repository which was set as 'Default' at the time of creation of that particular application.

:::important
Once a code repository is set as 'Default', all new applications created, thereon, will have their source code reside in that code repository.
:::

:::note
A feature **Push to External Repo** provided in Studio is used to push changes to an external repository. It allows you to choose to have a copy of your project code in a different code Repository. This is different from the Team's code repository configuration.

This option is available only to PUSH to the external repo, it does not update the project on WaveMaker with the code from the external repository.

To work with the Git Repo Repository URL is mandatory, you have to create the repo and provide the URL.

For more information, see [Push to External Repo](/learn/app-development/dev-integration/developer-collaboration/#push-to-external-repo)
:::

You can access the code repository page in the administration area by clicking **Code Repository** from the left panel.

![Code Repository](/learn/assets/TeamCodeRepository.png)

From the Code Repository page, you can

* Add code repository  
* View or edit a code repository details  
* Make **default** a specific code repository
* Remove a code repository

## Add Code Repository

* Click **Add Code Repository**, and provide your repository details.

![Add Repository](/learn/assets/TeamAddVcsRep.png)

:::note
You need to explicitly make this VCS as "Default" to add new projects to this repository.
:::

## Edit Code Repository

* Select the code repository you want to edit, click the **Edit** icon and update the details.

![Add Repository](/learn/assets/TeamAddVcsRep.png)

## Make Code Repository as Default

* Select the Code Repository you want to make as default, and click the **Default** option.

![Make Repository Default](/learn/assets/TeamMakeVcsDefault.png)
