---
title: "Docusign Prefab"
id: "docusign"
---
---
Docusign prefab allows user to enable electronic signature technology services using the Docusign API. Application using this prefab can allow it's users to electronically sign their documents for various purposes.

 

![](/learn/assets/Screenshot-2018-12-15-at-1.43.11-PM.png)

## Prerequisites for using the Docusign prefab:

### 1. Create a developer account in Docusign.
![](/learn/assets/Screenshot-2018-12-15-at-11.47.48-AM.png)
### 2. Go to Admin page and add an App!
[](/learn/assets/Screenshot-2018-12-15-at-11.55.26-AM.png)
![](/learn/assets/Screenshot-2018-12-15-at-11.44.52-AM.png)
### 3. Now go to your Apps listing and click on Actions drop down of your created app and click Edit.
![](/learn/assets/Screenshot-2018-12-15-at-11.46.14-AM.png)
### 4. From the pop up copy the Integrator key and keep it ready.
![](/learn/assets/Screenshot-2018-12-15-at-11.46.49-AM.png)

## Project Integration
Drag and drop the prefab into your project page. It'll appear as a link labeled "E-sign". Then go to settings and select Config Profiles

![](/learn/assets/Screenshot-2018-12-06-at-3.27.56-PM.png)

In the dialogue that appears enter the required fields after selecting Docusign namely:

1. Base URL: It'll be prefilled
2. Docusign password: provide your password for Docusign(you can also provide the encrypted password)
3. Docusign Username: Provide your username
4. Integrator Key: Provide the Integrator Key derived for your Docusign App from the Docusign Admin console.
5. Return URL: Provide the URL to the page of your WaveMaker app that uses the prefab.

![](/learn/assets/Screenshot-2018-12-15-at-11.41.48-AM.png)

Now bind the Source of the prefab to the URL of the file to be e-signed and the email to the email of the user who will perform the e-signing.

![](/learn/assets/Screenshot-2018-12-15-at-2.46.45-PM.png)

With the above steps done your Docusign prefab integration is complete. Now clicking on the E-sign link will invoke a Docusign dialogue and the your document will appear in the dialogue. Click continue to start the e-signing process. Click on the e-signing options from the left menu and e-sign the document. Then click finish button in the popup to complete the process.

![](/learn/assets/Screenshot-2018-12-15-at-1.22.23-PM.png)

![](/learn/assets/Screenshot-2018-12-15-at-1.23.47-PM.png)

![](/learn/assets/Screenshot-2018-12-15-at-1.23.11-PM.png)


