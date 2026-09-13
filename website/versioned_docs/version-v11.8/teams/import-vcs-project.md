---
title: Import Project from Code Repository
id: "import-vcs-project"
sidebar_label: "Import VCS Project"
---
---

Create a WaveMaker project using the existing repository URL from VCS (Version Control Systems). For this, you will need VCS clone URL and its credentials to create a project in WaveMaker Studio. The Git history of the project also will be cloned along with the project.

Import from Code repository option is available on the **Manage Projects** page in **Team Portal**.

![import project button](/learn/assets/import-from-code-repository-button.png)

## Supported VCS Providers

- GitHub
- GitLab
- Bitbucket
- Azure

## Importing VCS Project to WaveMaker Studio

Typically, you may use this feature in the following scenarios:

- Migrating projects from one VCS to another VCS
- To change the group/organization name of an existing configured code repository.
- Migrating projects from one team to another team
- Migrating projects from WMO (WaveMaker Online) to WME (WaveMaker Enterprise)
- Migrating projects from one setup to another setup
- Migrating projects from SILO to Team in WMO.

![ways to import project from code repository](/learn/assets/Import-project-form-Vcs-Types.png)

:::note
The repository clone URL should contain WaveMaker code to import the project.
:::

## How to Get Project ID

- Go to the VCS provider -> Gitlab UI.
- Go to the repository page. You will find the Project Id under the repository name.
- Copy it to use in case of Gitlab.

## How to Get Repository URL

- Go to the VCS provider. For example, GitHub, Gitlab, Bitbucket UI. 
- Copy the clone URL of the repository. For example, https://github.com/sports-apps/BankManagement.git
- This Clone URL should be provided in the above wizards. 


## Link Project to Teams Default Code Repository

WaveMaker Project exists in Team default code repository i.e., the VCS account should be configured as Team's default, and the repository must be in the same group. Create a project in Studio and link it to the existing repository in Team VCS.

![Linked VCS Repository Details](/learn/assets/LinkedVcsForm.png)

- **Username** and **AccessToken** is for authentication.
- **Repository Url** (clone URL) to import project.
- **Repository Branch** to import and link specific branch.
- **ProjectId** is required only in the case of Gitlab.

### Steps

1. Enter the above details, and click **Next**. It validates the details and the next page will display the project details you will be importing. This action will import project.
2. Verify the details and click **Import**. The imported project will also have the same name as Repository name. You can go to studio and see the project.

![Linked project Details](/learn/assets/Linked-project-details.png)

:::note
In the above page, project details are not editable.
:::

## Import Project from External Code Repository

Import project by cloning it from External VCS to current Team VCS and create a project in the Studio.

![External VCS Repository Details](/learn/assets/external-vcs-repository-details.png)

- **Username** and **AccessToken** is for authentication.
- **Repository Url**(clone URL) to import the project.
- **Repository Branch** is to import specific branches to the External code repository.

![External project details](/learn/assets/external-project-details.png)

### Steps

1. Change project name, and description. 
2. Click **Import**. This action will import project into Studio and link to existing Team Code Repository.


