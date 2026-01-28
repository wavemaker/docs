---
title: WaveMaker Enterprise Configure Pipeline
last_update: { author: "WaveMaker" }
id: config-pipeline
sidebar_label: Configure Pipeline
---
Increasing Deployment Capacity of Release Management feature helps ease the app life-cycle process. You can use this feature through the Apps Portal to add deployment environments to your projects and use them for a phased release of the app from QA -> Stage -> Live. To be able to push the code from one phase to another, your WME needs to be capable of handling the deployments.

There are three deployment phases provided by WME – QA, Stage and Live.

You need to add cloud instances else configuration of the phases for any project from Apps Portal will fail. Cloud Instances for all three phases can be viewed/added from the Capacity tab of the App Deployments section in Launchpad.

[![pipeline](./assets/images/release-pipeline.png)](./assets/images/release-pipeline.png)

## Configure Deployment Pipeline

- For configure deployment pipeline at app deployment section select pipeline option.
- Select the respective stages to configure available stages are QA, STAGE, and LIVE.

[![pipeline configuration](./assets/images/pipeline-configuration.png)](./assets/images/pipeline-configuration.png)

- Provide respective details to configure and save the details.
- Go to Deployment Capacity, then select Phase.
- Add Capacity for each Phase.

## Release Management

WaveMaker offers in-built CI-CD Pipeline (continuous integration/continuous delivery). For more information about how to manage releases, see CI-CD Pipeline in WaveMaker.
