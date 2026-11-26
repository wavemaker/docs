---
title: "Configuring for AWS Deployment"
id: "deployment-to-aws"
sidebar_label: "AWS"
---
---

WaveMaker allows you to deploy your app to your AWS cloud account for Live (and Stage for WME users) phase. 
For more information, see [Release Management](/learn/app-development/deployment/release-management/).

To deploy your app to AWS account, you need to configure the Live (Stage) phase.

:::note
This document covers the Live Phase configuration for your AWS account and is a part of the [Manage Deployed Apps](/learn/app-development/deployment/manage-deployed-apps/).
:::

## Prerequisites

- [AWS Account](https://aws.amazon.com/).
- While setting up the AWS account care should be taken to ensure that the IAM key has the permissions as listed in the configuration dialog. [![](/learn/assets/deploy_aws_perms.png)](/learn/assets/deploy_aws_perms.png) **Steps in AWS Configuration**:
- From Apps Portal, select the project.
- Click Configure on the Live Phase option.
- While configuring the Live phase choose to host your app on AWS
- Enter your AWS account credentials to proceed with the configuration. You need to enter [![](/learn/assets/deploy_aws_account.png)](/learn/assets/deploy_aws_account.png)
    - access key and secret key ([see here for details](https://aws.amazon.com/developers/access-keys/))
    - AWS Account id ([see here on how to obtain it](http://docs.aws.amazon.com/IAM/latest/UserGuide/console_account-alias.html)), and
    - the region hosting your AWS account
- Select the appropriate instance size based upon the resources and database utilized by your app and enter the [key-value instance tags](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html) ([see here for best practices for instance tagging](https://aws.amazon.com/premiumsupport/knowledge-center/ec2-resource-tags/)) [![](/learn/assets/deploy_aws_instance.png)](/learn/assets/deploy_aws_instance.png)
- Once the setup is done, you can push the app from Demo to Live. ([Continue from here](/learn/app-development/deployment/manage-deployed-apps/#push-to-live))
