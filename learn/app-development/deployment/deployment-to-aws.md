---
title: "Configuring for AWS Deployment"
id: ""
---

WaveMaker allows you to deploy your app to your AWS cloud account for Live (and Stage for WME users) phase. [Know more about App Phases from here](/learn/app-development/deployment/release-management/).

To deploy your app to AWS account, you need to configure the Live (Stage) phase.

**NOTE**: This document covers the Live Phase configuration for your AWS account and is a part of the [Manage Deployed Apps](/learn/app-development/deployment/manage-deployed-apps/)**Prerequisites**:

- [AWS Account](https://aws.amazon.com/).
- While setting up the AWS account care should be taken to ensure that the IAM key has the permissions as listed in the configuration dialog. [![](../../assets/deploy_aws_perms.png)](../../assets/deploy_aws_perms.png) **Steps in AWS Configuration**:
- From [Apps Portal](http://[supsystic-show-popup id=122]), select the project.
- Click Configure on the Live Phase option.
- While configuring the Live phase choose to host your app on AWS
- Enter your AWS account credentials to proceed with the configuration. You need to enter [![](../../assets/deploy_aws_account.png)](../../assets/deploy_aws_account.png)
    - access key and secret key ([see here for details](https://aws.amazon.com/developers/access-keys/))
    - AWS Account id ([see here on how to obtain it](http://docs.aws.amazon.com/IAM/latest/UserGuide/console_account-alias.html)), and
    - the region hosting your AWS account
- Select the appropriate instance size based upon the resources and database utilized by your app and enter the [key-value instance tags](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html) ([see here for best practices for instance tagging](https://aws.amazon.com/premiumsupport/knowledge-center/ec2-resource-tags/)) [![](../../assets/deploy_aws_instance.png)](../../assets/deploy_aws_instance.png)
- Once the setup is done, you can push the app from Demo to Live. ([Continue from here](/learn/app-development/deployment/manage-deployed-apps/#push-to-live))

< Manage Deployed Apps

Configuration Profile >

9\. Deployment

- 9.1 One-Click Deployment
    - [i. Overview](/learn/app-development/deployment/one-click-deployment/)
    - [ii. Deployment to Cloud](/learn/app-development/deployment/one-click-deployment/#cloud-deployment)
- 9.2 Release Management
    - [i. Overview](/learn/app-development/deployment/release-management/)
    - [ii. Implementation](/learn/app-development/deployment/release-management/#working)
- [9.3 Manage Deployed Apps](/learn/app-development/deployment/manage-deployed-apps/)
    - [i. Overview](/learn/app-development/deployment/manage-deployed-apps/)
    - [ii. Apps Portal](/learn/app-development/deployment/manage-deployed-apps/#apps-portal)
    - [iii. Manage Deployed App](/learn/app-development/deployment/manage-deployed-apps/#manage-deployed-app)
    - [v. Configure Live Phase](/learn/app-development/deployment/manage-deployed-apps/#configure-live)
    - [v. Push to Live](/learn/app-development/deployment/manage-deployed-apps/#push-to-live)
    - [vi. App Versioning](/learn/app-development/deployment/manage-deployed-apps/#versioning)
    - [vii. AWS Configuration](#)
    - [viii. Azure Configuration](/learn/app-development/deployment/deployment-to-azure/)
    - [ix. Google Cloud Configuration](/learn/app-development/deployment/deployment-google-cloud/)
- 9.4 Deployment to Web Server
    - [i. Overview](/learn/app-development/deployment/deployment-web-server/#)
    - [ii. WAR file generation](/learn/app-development/deployment/deployment-web-server/#war-file-generation)
    - [iii. Deployment to Tomcat](/learn/how-tos/wavemaker-application-deployment-tomcat/)
    - [iv. Deployment to WebSphere](/learn/how-tos/wavemaker-application-deployment-websphere-liberty-profile/)
    - [v. Deployment to JBoss](/learn/how-tos/wavemaker-application-deployment-jboss/)
    - [vi. Deployment to WebLogic](/learn/how-tos/wavemaker-application-deployment-weblogic-application-server/)
- 9.5 Configuration Profiles
    - [i. Overview](/learn/app-development/deployment/configuration-profiles/)
    - [i. Development Profiles](/learn/app-development/deployment/configuration-profiles/#dev-profile)
    - [ii. Deployment Profiles](/learn/app-development/deployment/configuration-profiles/#deploy-profile)
    - [iii. Custom Profiles](/learn/app-development/deployment/configuration-profiles/#custom-profile)
