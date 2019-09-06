---
title: "Developer Integrations"
id: ""
---

# Test Run (Preview) Apps

Once the design and building an app is completed, it needs to be tested. The easiest way to test an application is to click the **Preview **button from WaveMaker Studio. When you click Preview**, **you are given a URL for the web application that can be accessed by anyone in your network (e.g., by anyone inside your network firewall).

### Preview Application

**Preview **is recommended only for test or trial purpose as the application is deployed to the WaveMaker server provided with WaveMaker Studio. When you stop WaveMaker Studio, using the WaveMaker console, the application stops too.

- Click **Preview **will run the application in a new browser window.
- The app will open the page within the app from where you clicked the Preview button. In case the app is secured, then you will be prompted to login and based on the permissions you will be redirected to the appropriate page.
- An **Application Preview** will be displayed, where one can select the **target device** to run the app. This will give you an idea of how the app looks on various devices like various laptop, tablet, and phone sizes.
- **QR code** is also displayed which can be used to access the app on a mobile device with ease. You can choose to remove this preview toolbar if not needed. [![](../../assets/app_preview.png)](../../assets/app_preview.png)

**Application Runtime** The application will then open with a URL in the following format: _https://www.wavemakeronline.com/unique-id/app-name/login.html#/login_ Here are the elements of the generated URL:

- **www.wavemakeronline.com**: URL of WaveMaker Cloud where applications are hosted.
- **unique-id**: Name of the application space that you provide while registration. It is unique to a user.
- **app-name**: Name of your application, which is the same as the name of your WaveMaker project. You can change this by setting the _context root_ parameter during the application deployment
- **login.html**: A default start page for applications with security enabled. If you are not using security, this will not be part of the URL. Instead, your URL would be: _https://www.wavemakeronline.com/unique-id/app-name/#/Main_

As long as your project is running in WaveMaker Studio, it will be available to other users. If you close the project or log out of WaveMaker Studio, it will become unavailable. When you open a new project within WaveMaker Studio the current project is closed.

Import Export Update Apps >

8\. Developer Integrations

- [8.1 Test Run (Preview) Apps](#)
    - [i. Overview](#)
    - [ii. Preview](#preview)
- 8.2 Import, Export & Update App
    - [i. Overview](/learn/app-development/dev-integration/import-export-update-apps/)
    - [ii. Export](/learn/app-development/dev-integration/import-export-update-apps/#export-project)
    - [iii. Import](/learn/app-development/dev-integration/import-export-update-apps/#import-project)
    - [iv. Update](/learn/app-development/dev-integration/import-export-update-apps/#update-project)
    - [v. Project Recovery](/learn/app-development/dev-integration/import-export-update-apps/#project-recovery)
        - [○ Export](/learn/app-development/dev-integration/import-export-update-apps/#export)
        - [○ Restore](/learn/app-development/dev-integration/import-export-update-apps/#restore-project)
- 8.3 Developer Collaboration
    - [i. Overview](/learn/app-development/dev-integration/developer-collaboration/)
    - [ii. Project Sharing](/learn/app-development/dev-integration/developer-collaboration/#project-sharing)
    - [iii. Code Sharing - VCS](/learn/app-development/dev-integration/developer-collaboration/#vcs)
        - [○ Checkout](/learn/app-development/dev-integration/developer-collaboration/#checkout)
        - [○ Pull Changes](/learn/app-development/dev-integration/developer-collaboration/#pull-changes)
        - [○ Push Changes](/learn/app-development/dev-integration/developer-collaboration/#push-changes)
        - [○ View Changes](/learn/app-development/dev-integration/developer-collaboration/#view-changes)
        - [○ Commit History](/learn/app-development/dev-integration/developer-collaboration/#commit-history)
        - [○ Merge Conflicts](/learn/app-development/dev-integration/developer-collaboration/#merge-changes)
        - [○ Push to External Repo](/learn/app-development/dev-integration/developer-collaboration/#push-to-external-repo)
- 8.4 Debugging
    - [i. Overview](/learn/app-development/dev-integration/debugging/)
    - [ii. Debugging using Log Files](/learn/app-development/dev-integration/debugging/#logs)
    - [iii. Debugging through JavaScript](/learn/app-development/dev-integration/debugging/#javascript)
- 8.5 App Extensions
    - [i. Overview](/learn/dev-integration/extending-application-using-ides/)
    - [ii. Working with IDEs](/learn/dev-integration/extending-application-using-ides/#steps)
    - [iii. Integrating with Jenkins](/learn/dev-integration/extending-application-using-ides/#jenkins)
