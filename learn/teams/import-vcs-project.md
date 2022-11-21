---
title: Import Project from Code Repository
id: ""
sidebar_label: "Import VCS Project"
---
---

Create a WaveMaker project using the existing repository URL from VCS (Version Control Systems). For this, you will need VCS clone URL and its Credentials to create a project in WaveMaker Studio. Git History of the project also will be cloned along with project.

Import from Code repository option is avilable in **Manage Projects** page In **Teamportal**.

![import project button](/learn/assets/import-from-code-repository-button.png)

**Supported VCS providers**: GitHub, GitLab, Bitbucket, Azure

## Importing VCS Project to WaveMaker Studio

Typically, you may use this feature in the following scenarios:

- Migrating projects from One VCS to Another VCS
 
- To change the group/organization name of an existing repository.

- Migrating projects from One team to another team

- Migrating Projects from WMO to WME

- Migrating Projects from One Setup to another setup

- Migrating Projects from SILO to Team in WMO


![ways to import project from code repository](/learn/assets/Import-project-form-Vcs-Types.png)


:::note
The repository clone URL should contain WaveMaker code for the project to be imported.
:::

### Link Project in Team Default Code repository

WaveMaker Project exists in Team Default Code Repository(i.e, VCS account should be configured as team Default and Repository must be in same group) and create project in studio and link it to existing repository in team Vcs.

![Linked VCS Repository Details](/learn/assets/LinkedVcsForm.png)

- **Username** and **AccessToken** is for authentication.
- **Repository Url**(clone url) to import project.
- **Repository Branch** to import and link specific Branch.
- Repository Id is required only in case of Gitlab.

Enter above details and click on Next will validate details and next page will show project details of which you will be importing, and on clicking import button project will be imported.The imported project will also have the same name as Repository name.


![Linked project Details](/learn/assets/Linked-project-details.png)

:::note
In above page project details are not editable.
:::

### Import project From External Code Repository

Import project by cloning it from External VCS to current Team VCS and create project in studio.


![External VCS Repository Details](/learn/assets/external-vcs-repository-details.png)


- **Username** and **AccessToken** is for authentication.
- **Repository Url**(clone url) to import project.
- **Repository Branch** is to import specific branch to External code repository.


![External project details](/learn/assets/external-project-details.png)


enter the project name and description for imported project to create in Team Default VCS and import project by clicking on Import Button.

### Get the VCS Clone URL

- Go to the VCS provider. For example, GitHub. 
- Copy the clone URL of the repository. For example, https://github.com/sports-apps/BankManagement.git 
- Using the Clone URL, you create the project in WaveMaker. 
 
