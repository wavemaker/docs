---
title: "Configure Azure Repos In CodeRepository"
id: "azure-repos-vcs"
---

WaveMaker Team offering lets Team admins to configure the version control system where project source code is stored. From WaveMaker 11 GA version Team admins can configure Azure Repos under the Code Repository page. Although Azure contains Git and Tfvc repositories, WaveMaker supports Git Repositories. All the WaveMaker projects created in Azure Repos will be Git repositories.

![azure form](/learn/assets/azure-repos-image1.png)

Following are the instructions to fill the Azure form

## Base Url

The base URL for azure repos must be entered in the following format.

https://dev.azure.com/{organizationName}

![azure organization settings](/learn/assets/azure-repos-image2.png)

Make sure to enable ``Use the new URL``.

## User Name
Must be the account user name.

## Private AccessToken
Access token for azure repos must contain Full access to the user.

https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops

1\. Then select an Azure project in the Select Organization field. Repositories will be created in the selected project.

2\. If there are no projects in the list create them manually from the azure repos account.
