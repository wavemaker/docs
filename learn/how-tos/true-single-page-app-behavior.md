---
title: "True SPA behaviour on WM apps"
id: ""
sidebar_label: "Enable true SPA behaviour "

---
**True SPA behaviors that can be identified:**
- Dynamically generates and updates content, without the need to refresh the page.
- When user navigates between pages, only the content area is rendered again and the static area like header, leftnav, footer, etc remains untouched.
It is to Improve the performance and page load experience of apps built with WaveMaker. 
It is believed that this change will make page load experience more delightful.
Navigating between pages that have same layout, now does not require page refresh.
True spa will only function for deployed apps. There is no SPA for preview as of now.
## Setting true SPA behaviour
Step-1 You need to enable the recently introduced flag that is located under File Explorer to view the true spa behaviour in any WM application.
 Currently this is set to‘false’ by default.
 [![](/learn/assets/spa_enableFlag_1.png)](/learn/assets/spa_enableFlag_1.png)
 
 Set the flag as true and save (app.build.ui.spa.enabled=true)
 
 Step-2 In Profiles Configuration go for below settings for deployment.
 [![](/learn/assets/spa_configProfile_2.png)](/learn/assets/spa_configProfile_2.png)
 
 Step-3 Now deploy the app and see the true SPA behaviour enabled for the application.
 

