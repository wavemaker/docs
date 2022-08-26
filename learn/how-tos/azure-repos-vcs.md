---
title: "Configure Azure Repos In CodeRepository"
id: "azure-repos-vcs"
---

WaveMaker Team offering allows Team admins to configure Version Control System (VCS), which stores the project source code. 

From WaveMaker 11 GA, Team admins can configure **Azure Repos** under the **Add Code Repository** page. Although Azure supports Git and TFVC (Team Foundation Version Control) repositories, currently, WaveMaker supports only Git repositories. Thus, all WaveMaker projects created in Azure Repos will be Git repositories.

Following are the instructions to configure Azure DevOps organization settings.
		
## Base Url for Organization
		
You must enter the base URL for **Azure Repos** in the following format.

```	
https://dev.azure.com/{organizationName}
```		

![azure organization settings](/learn/assets/azure-repos-organization-page.png)
		
Ensure you enable **Use the new URL**.
		
## User Name

The username can be Full Name or Contact Email.

![azure profile page](/learn/assets/azure-repos-profile-page.png)
		
## Private AccessToken
		
Access token for Azure Repos must contain full access to the user. See [Use Personal Access Tokens](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops) for more information.

## Select Project
		
- Select an Azure project in the **Select Project** field. Repositories will be created in the selected project.

- If no projects are on the list, **create them manually from the Azure Repos account**.
