---
title: "Test and Run (Preview) Apps"
id: "developer-tools"
---
---

Once the design and building an app is completed, it needs to be tested. The easiest way to test an application is to click the **Preview** button from WaveMaker Studio. When you click **Preview**, you are given a URL for the web application that can be accessed by anyone in your network (e.g., by anyone inside your network firewall).

## Preview Application

### Preview

**Preview** is recommended only for test or trial purpose as the application is deployed to the WaveMaker server provided with WaveMaker Studio. When you stop WaveMaker Studio, using the WaveMaker console, the application stops too.

- Click **Preview** will run the application in a new browser window.
- The app will open the page within the app from where you clicked the Preview button. In case the app is secured, then you will be prompted to login and based on the permissions you will be redirected to the appropriate page.
- An **Application Preview** will be displayed, where one can select the **target device** to run the app. This will give you an idea of how the app looks on various devices like various laptop, tablet, and phone sizes.
- **QR code** is also displayed which can be used to access the app on a mobile device with ease. You can choose to remove this preview toolbar if not needed. 

[![](/learn/assets/app_preview.png)](/learn/assets/app_preview.png)

### Application Runtime

The application will then open with a URL in the following format: `https://www.wavemakeronline.com/unique-id/app-name/login.html#/login` Here are the elements of the generated URL:

- **www.wavemakeronline.com**: URL of WaveMaker Cloud where applications are hosted.
- **unique-id**: Name of the application space that you provide while registration. It is unique to a user.
- **app-name**: Name of your application, which is the same as the name of your WaveMaker project. You can change this by setting the _context root_ parameter during the application deployment
- **login.html**: A default start page for applications with security enabled. If you are not using security, this will not be part of the URL. Instead, your URL would be: `https://www.wavemakeronline.com/unique-id/app-name/#/Main`

As long as your project is running in WaveMaker Studio, it will be available to other users. If you close the project or log out of WaveMaker Studio, it will become unavailable. When you open a new project within WaveMaker Studio the current project is closed.

