---
title: "Configuring for Google Cloud Deployment"
id: "deployment-google-cloud"
sidebar_label: "Google Cloud"
---
---
WaveMaker allows you to deploy your app to your Google Cloud account for Live (and Stage for WME users) phase. [Know more about App Phases from here](/learn/app-development/deployment/release-management/).

To deploy your app to Google Cloud account, you need to configure the Live (Stage) phase.

:::note
This document covers the Live Phase configuration for your AWS account and is a part of the [Manage Deployed Apps](/learn/app-development/deployment/manage-deployed-apps/).
:::

## Prerequisites

1. You are expected to have a [Google Cloud Account](https://console.cloud.google.com/).
2. You need to create a [Service Account](https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating_a_service_account) with the following settings:
    - Role set to Project Owner i.e. full access to all resources,
    - From the API Dashboard ensure that the following APIs are Enabled:

        - Google Compute Engine API and
        - Google Cloud Resource Manager API

        (**following shows the screen from the Google Developer Console dialog. This dialog might differ from the actual one**) [![](/learn/assets/google_account_enable.png)](/learn/assets/google_account_enable.png)
    - A downloaded file containing Private Key in JSON format (**following shows the setting from the Google Create Service Account dialog. This dialog might differ from the actual one**) [![](/learn/assets/google_account_settings.png)](/learn/assets/google_account_settings.png)

## Steps in Configuring Google Cloud

1. From Apps Portal, select the project.
2. Click Configure on the Live Phase option.
3. While configuring the Live phase choose to host your app on Google Cloud
4. Enter your Google Cloud account credentials to proceed with the configuration. [![](/learn/assets/deploy_google_account.png)](/learn/assets/deploy_google_account.png) You need to enter
    - **Google Project Id**: It is the project created by you on Google Cloud Platform. All resources are referenced with this project. ([see here for details](https://cloud.google.com/resource-manager/docs/creating-managing-projects))
    - **Service Account Id**: You will get this when creating a Service account. This account should have **Role** set to _Owner_ and **Key Type** as _JSON_ ([see here on how to obtain it](https://cloud.google.com/compute/docs/access/service-accounts))
    - The region/zone in which you wish to provision the instance.
    - Client Credentials: This is a private key in a JSON file to authenticate the service account. You need to copy the entire content of the JSON file including the braces - {}.([see here on how to obtain it](https://cloud.google.com/compute/docs/access/service-accounts))
5. Select the appropriate instance size based upon the resources and database utilized by your app ([see here for pricing details](https://cloud.google.com/compute/pricing))
6. and enter the key-value instance tags ([see here for best practices for instance tagging](https://cloud.google.com/compute/docs/storing-retrieving-metadata)) [![](/learn/assets/deploy_google_instance.png)](/learn/assets/deploy_google_instance.png)
7. Once the setup is done, you can push the app from Demo to Live. ([Continue from here](/learn/app-development/deployment/manage-deployed-apps/#push-to-live))
