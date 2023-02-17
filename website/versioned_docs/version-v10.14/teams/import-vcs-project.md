---
title: Import a WaveMaker Project using VCS URL
id: "import-vcs-project"
sidebar_label: "Import VCS Project"
---
---

Create a WaveMaker project using the existing repository URL from VCS (Version Control Systems). For this, you will need VCS clone URL to create a project in WaveMaker Studio. 

**Supported VCS providers**: GitHub and GitLab

## Importing VCS Project to WaveMaker Studio

Typically, you may use this feature in the following scenarios:

- To transfer projects from one VCS provider to another. 
- To change the group/organization name of an existing repository.

:::note
The repository clone URL should contain WaveMaker code for the project to be imported.
:::

### Configure VCS Provider in Teams

The repository clone URL should be of the default VCS. For more information, see [Code Repository Setup](/learn/teams/code-repository#add-code-repository).

### Get the VCS Clone URL

- Go to the VCS provider. For example, GitHub. 
- Copy the clone URL of the repository. For example, https://github.com/sports-apps/BankManagement.git 
- Using the Clone URL, you create the project in WaveMaker. 
 
## Invoking the API

Invoke the API for GitHub and GitLab providers using services like Postman, Curl, and more.

### GitHub

Following is a sample API request.

POST
```
https://www.wavemakeronline.com/edn-services/rest/projects
```

```json
Sample Request Body
{
    "name": "temporarytwo",
    "displayName": "temporarytwo",
    "description": "",
    "projectType": "APPLICATION",
    "platformType": "WEB",
    "icon": "default.png",
    "vcsRepoURL": "https://github.com/sports-apps/temporarytwo.git",
    "vcsBranch": "developer", // this is optional - see note below
    "artifactVersion": {
    "artifactId": ""
    }
}
``` 

:::note
If the VCS branch is not provided, it picks the branch which is configured as default in the VCS configuration.
:::
 
### GitLab

Following is a sample API request.

POST
```
https://www.wavemakeronline.com/edn-services/rest/projects
```
```json
Sample Request Body
{
    "name": "gitlabsports",
    "displayName": "gitlabsports",
    "description": "",
    "projectType": "APPLICATION",
    "platformType": "WEB",
    "icon": "default.png",
    "vcsRepoURL": "https://gitlab.wavemaker.com/wm-test/gitlabsports.git",
    "vcsRepoId": 317, //Provide GitLab projectId
    "vcsBranch": "developer", // this is optional - see note below
    "artifactVersion": {
    "artifactId": ""
    }
}
```

:::note
If the VCS branch is not provided, it picks the branch which is configured as default in the VCS configuration.
:::
