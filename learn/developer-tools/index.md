---
title: "Developer Integrations"
date: "2016-05-26"
---

# Run (Preview) Apps

the design and building an app is completed, it needs to be tested. The easiest way to test an application is to click the  from WaveMaker Studio. When you click Preview**, ** are given a URL for the web application that can be accessed by anyone in your network (e.g., by anyone inside your network firewall).

### Application

 recommended only for test or trial purpose as the application is deployed to the WaveMaker server provided with WaveMaker Studio. When you stop WaveMaker Studio, using the WaveMaker console, the application stops too.

- run the application in a new browser window.
- app will open the page within the app from where you clicked the Preview button. In case the app is secured, then you will be prompted to login and based on the permissions you will be redirected to the appropriate page.
- **Preview** will be displayed, where one can select the **device** to run the app. This will give you an idea of how the app looks on various devices like various laptop, tablet, and phone sizes.
- **code** is also displayed which can be used to access the app on a mobile device with ease. You can choose to remove this preview toolbar if not needed. [![](../assets/app_preview.png)](../assets/app_preview.png)

**Runtime** The application will then open with a URL in the following format: _://www.wavemakeronline.com/unique-id/app-name/login.html#/login_ Here are the elements of the generated URL:

- : URL of WaveMaker Cloud where applications are hosted.
- **\-id**: Name of the application space that you provide while registration. It is unique to a user.
- **\-name**: Name of your application, which is the same as the name of your WaveMaker project. You can change this by setting the _root_ parameter during the application deployment
- : A default start page for applications with security enabled. If you are not using security, this will not be part of the URL. Instead, your URL would be: _://www.wavemakeronline.com/unique-id/app-name/#/Main_

long as your project is running in WaveMaker Studio, it will be available to other users. If you close the project or log out of WaveMaker Studio, it will become unavailable. When you open a new project within WaveMaker Studio the current project is closed.

Export Update Apps >

8\. Developer Integrations

- [8.1 Test Run (Preview) Apps](#)
    - [Overview](#)
    - [Preview](#preview)
- 8.2 Import, Export & Update App
    - [Overview](/learn/app-development/dev-integration/import-export-update-apps/)
    - [Export](/learn/app-development/dev-integration/import-export-update-apps/#export-project)
    - [Import](/learn/app-development/dev-integration/import-export-update-apps/#import-project)
    - [Update](/learn/app-development/dev-integration/import-export-update-apps/#update-project)
    - [Project Recovery](/learn/app-development/dev-integration/import-export-update-apps/#project-recovery)
        - [Export](/learn/app-development/dev-integration/import-export-update-apps/#export)
        - [Restore](/learn/app-development/dev-integration/import-export-update-apps/#restore-project)
- 8.3 Developer Collaboration
    - [Overview](/learn/app-development/dev-integration/developer-collaboration/)
    - [Project Sharing](/learn/app-development/dev-integration/developer-collaboration/#project-sharing)
    - [Code Sharing - VCS](/learn/app-development/dev-integration/developer-collaboration/#vcs)
        - [Checkout](/learn/app-development/dev-integration/developer-collaboration/#checkout)
        - [Pull Changes](/learn/app-development/dev-integration/developer-collaboration/#pull-changes)
        - [Push Changes](/learn/app-development/dev-integration/developer-collaboration/#push-changes)
        - [View Changes](/learn/app-development/dev-integration/developer-collaboration/#view-changes)
        - [Commit History](/learn/app-development/dev-integration/developer-collaboration/#commit-history)
        - [Merge Conflicts](/learn/app-development/dev-integration/developer-collaboration/#merge-changes)
        - [Push to External Repo](/learn/app-development/dev-integration/developer-collaboration/#push-to-external-repo)
- 8.4 Debugging
    - [Overview](/learn/app-development/dev-integration/debugging/)
    - [Debugging using Log Files](/learn/app-development/dev-integration/debugging/#logs)
    - [Debugging through JavaScript](/learn/app-development/dev-integration/debugging/#javascript)
- 8.5 App Extensions
    - [Overview](/learn/dev-integration/extending-application-using-ides/)
    - [Working with IDEs](/learn/dev-integration/extending-application-using-ides/#steps)
    - [Integrating with Jenkins](/learn/dev-integration/extending-application-using-ides/#jenkins)
