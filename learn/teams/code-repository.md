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

![Code Repository](/learn/assets/wm_coderep_1_f.png)

From the **Code Repository** page, you can

- Add a code repository  
- View or edit a code repository details
- Add **Access type**
- Delete a repository when project is deleted in WaveMaker Studio
- Set a default branch in a code repository
- Make a specific code repository as **default**
- Remove a code repository

## Add Code Repository

Click **Add Code Repository**, and provide your repository details.

![Add Repository](/learn/assets/wm_coderep_2_f.png)

:::note
You need to explicitly make this VCS as "Default" to add new projects to this repository.
:::

## Add Access Type

This field restricts the VCS access to the members of the team. With this, admin allows the members to use necessary VCS operations. Two types of access options are provided for a code repository.

- **Service Account**: In this type, all project members access the repository with same credentials as the team admin.
- **Developer Credentials**: In this type, every member of the project use individual credentials to access the project and its VCS operations are allowed based on member respective permissions to VCS.

![Add Access Type](/learn/assets/wm_coderep_3_f.png)

## Delete Repository from VCS

This field is to enable deletion of a repository from VCS when deleting the project from WaveMaker Studio. Third party users can disable this option and store the project details over VCS without any dependency on studio.

![Delete Repository](/learn/assets/wm_coderep_4_f.png)

## Edit Code Repository

- **Credentials**: To update the access type for code repository.
- **Make Default**: To make the code repository as default VCS.
- **Settings**: To update the default branch and enabling the delete repository when project deleted option.
- **Delete**: To delete the VCS details from Code Repository page.

![Edit Repository](/learn/assets/wm_coderep_6_f.png)

## Set Branch as Default

In this field you add the branch name that is to be added as default branch while creating repository. With this, you can avoid setting the master branch as default and add desired branch as default.

![Set Repository Default](/learn/assets/wm_coderep_5_f.png)
