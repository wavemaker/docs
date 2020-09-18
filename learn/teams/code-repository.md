---
title: Code Repository
id: ""
---
---

Source code management is a critical part of the project lifecycle, allowing teams to manage their work with a single source of truth. Team includes support for integrating multiple source code repositories with the system so that you have access to source code and control over where your source code resides. It helps in setting up Continuous Integration (CI) and Continuous Delivery (CD) pipelines. 

By default, WaveMaker provides with a version control system which will be used when you have not configured your own code repository.

:::note
-  Teams will not have access to Version Control System provided by WaveMaker 
:::

You can choose to add one or more code repository. Team portal is central place to provide or edit the credentials for code repositories. These credentials will be used when developers are collaborating on applications and pushing & pulling from code repository. 

Once added, to choose a code repository where your newly created application's source code should reside, you've to set that code repository to 'Default'. This will not have any effect on the earlier applications which were created when different code repository was set as 'Default', these applications will keep on referencing the code repository which was set as 'Default' at the time of creation of that particular application.

Once a code repository is set as 'Default', all new application created, thereon, will have their source code reside in that code repository.

:::note
-  A feature 'Push to External Repo' provided in Studio is used to push changes to external repository. This is different from above code repository configuration. In earlier, you have to provide credentials each time you want to push changes while in later once configured and set as 'Default' all push/pull operations will use configured credentials.
:::

-  You can access the code repository page in the administration area by clicking on the **Code Repository** entry in the left panel.

![Code Repository](/learn/assets/TeamCodeRepository.png)

From the Code Repository page, you can

-  Add code repository  
-  View or edit a code repository details  
-  Make **default** a specific code repository.
-  Remove a code repository   

### Add Code Repository

-  Click on ‘Add Code Repository’, and provide your repository details.

![Add Repository](/learn/assets/TeamAddVcsRep.png)   

:::note
-  You need to explicitly make this VCS as "Default" in order to add new projects to this Repository.
:::

### Edit Code Repository

-  Select the code repository you want to edit, click on **edit** icon and update the details.

![Add Repository](/learn/assets/TeamAddVcsRep.png)   

### Make the code repository default

-  Select the Code Repository you want make as Default, select the **Default** option.

![Make Repository Default](/learn/assets/TeamMakeVcsDefault.png)



