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

From the **Code Repository** page, you can

- Add a code repository  
- View or edit a code repository details
- Make a specific code repository as **default**
- Remove a code repository

## Add Code Repository

Click **Add Code Repository**, and provide your repository details.

![Add Repository](/learn/assets/TeamAddVcsRep.png)

:::note
You need to explicitly make this VCS as "Default" to add new projects to this repository.
:::

### Access Type

WaveMaker commits code to the added code repository. Using "Access Type" team admin can configure whether to use service account or force individual team members to setup their VCS identity in WaveMaker. The second mode of "Access Type" is called "Developer Credentials". 

:::note
Access Type is introduced new in 11.3
:::

- Service Account
- Developer Credentials

#### Service Account 

In this type, the WaveMaker service account impersonates developers when they commit code.

#### Developer Credentials

In this type, every member of the project uses their VCS credentials to access the project and perform VCS operations. In this mode VCS accounts must be available for all the team members. 

Here is how team portal admin can choose this option when adding the Code Repository. This setting is also available when you choose to edit already added Code Repositories.

![Add Access Type](/learn/assets/TeamSelectAccesstype.png)

:::important
When you select **Developer Credentials** as Access type for the Code Repository, developers will need credentials to perform any VCS operation. Refer to the screenshot below to learn how developers can setup their VCS credentials in WaveMaker.

:::

![Add Access Type](/learn/assets/TeamUpdateCredentials.png)

### Delete Repo When Project Deleted

#### Enabled

If this options is enabled, then whenever a project is deleted in WaveMaker studio that action cascades to deleting the code repo in the VCS as well.

#### Disabled 

If ``Disabled``option is selected then deletion of projects in Studio does not delete code repository in the VCS. This is the default option.

![Delete Repository](/learn/assets/TeamDeleteRepository.png)

### Set Branch as Default

When you create a project, the code of any projects created is pushed to the repo's branch you set as default here. Normally the value is ``master``. However, with this setting, it can be set to a different branch name as well.

![Set Repository Default](/learn/assets/TeamSetDefaultRepo.png)

## Edit Code Repository

- **Credentials**: To update the access type for code repository.
- **Make Default**: To make the code repository as default VCS.
- **Settings**: To update the default branch and enabling the delete repository when project deleted option.
- **Delete**: To delete the VCS details from Code Repository page.

![Edit Repository](/learn/assets/TeamEditRepo.png)