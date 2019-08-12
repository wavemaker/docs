---
title: "Configuring for AWS Deployment"
date: "2017-01-11"
---

WaveMaker allows you to deploy your app to your AWS cloud account for Live (and Stage for WME users) phase. [more about App Phases from here](/learn/app-development/deployment/release-management/)

To deploy your app to AWS account, you need to configure the Live (Stage) phase.

: This document covers the Live Phase configuration for your AWS account and is a part of the [Deployed Apps](/learn/app-development/deployment/manage-deployed-apps/):

- [Account](https://aws.amazon.com/)
- setting up the AWS account care should be taken to ensure that the IAM key has the permissions as listed in the configuration dialog. [![](../assets/deploy_aws_perms.png)](../assets/deploy_aws_perms.png) ** in AWS Configuration**:
- [Portal](http://[supsystic-show-popup id=122]), select the project.
- Configure on the Live Phase option.
- configuring the Live phase choose to host your app on AWS
- your AWS account credentials to proceed with the configuration. You need to enter [![](../assets/deploy_aws_account.png)](../assets/deploy_aws_account.png)
    - key and secret key ( [here for details](https://aws.amazon.com/developers/access-keys/))
    - Account id ( [here on how to obtain it](http://docs.aws.amazon.com/IAM/latest/UserGuide/console_account-alias.html)), and
    - region hosting your AWS account
- the appropriate instance size based upon the resources and database utilized by your app and enter the [\-value instance tags](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html) ( [here for best practices for instance tagging](https://aws.amazon.com/premiumsupport/knowledge-center/ec2-resource-tags/)) [![](../assets/deploy_aws_instance.png)](../assets/deploy_aws_instance.png)
- the setup is done, you can push the app from Demo to Live. ( [from here](/learn/app-development/deployment/manage-deployed-apps/#push-to-live))

< Manage Deployed Apps

Profile >

9\. Deployment

- 9.1 One-Click Deployment
    - [Overview](/learn/app-development/deployment/one-click-deployment/)
    - [Deployment to Cloud](/learn/app-development/deployment/one-click-deployment/#cloud-deployment)
- 9.2 Release Management
    - [Overview](/learn/app-development/deployment/release-management/)
    - [Implementation](/learn/app-development/deployment/release-management/#working)
- [9.3 Manage Deployed Apps](/learn/app-development/deployment/manage-deployed-apps/)
    - [Overview](/learn/app-development/deployment/manage-deployed-apps/)
    - [Apps Portal](/learn/app-development/deployment/manage-deployed-apps/#apps-portal)
    - [Manage Deployed App](/learn/app-development/deployment/manage-deployed-apps/#manage-deployed-app)
    - [Configure Live Phase](/learn/app-development/deployment/manage-deployed-apps/#configure-live)
    - [Push to Live](/learn/app-development/deployment/manage-deployed-apps/#push-to-live)
    - [App Versioning](/learn/app-development/deployment/manage-deployed-apps/#versioning)
    - [AWS Configuration](#)
    - [Azure Configuration](/learn/app-development/deployment/deployment-to-azure/)
    - [Google Cloud Configuration](/learn/app-development/deployment/deployment-google-cloud/)
- 9.4 Deployment to Web Server
    - [Overview](/learn/app-development/deployment/deployment-web-server/#)
    - [WAR file generation](/learn/app-development/deployment/deployment-web-server/#war-file-generation)
    - [Deployment to Tomcat](/learn/how-tos/wavemaker-application-deployment-tomcat/)
    - [Deployment to WebSphere](/learn/how-tos/wavemaker-application-deployment-websphere-liberty-profile/)
    - [Deployment to JBoss](/learn/how-tos/wavemaker-application-deployment-jboss/)
    - [Deployment to WebLogic](/learn/how-tos/wavemaker-application-deployment-weblogic-application-server/)
- 9.5 Configuration Profiles
    - [Overview](/learn/app-development/deployment/configuration-profiles/)
    - [Development Profiles](/learn/app-development/deployment/configuration-profiles/#dev-profile)
    - [Deployment Profiles](/learn/app-development/deployment/configuration-profiles/#deploy-profile)
    - [Custom Profiles](/learn/app-development/deployment/configuration-profiles/#custom-profile)
