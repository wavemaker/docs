---
sidebar_position: 6
title: How to Deploy to AWS
description: Deploying your WaveMaker app to Amazon Web Services.
---

# How to Deploy to AWS

## Deployment Profile

1.  Go to **Export** > **Deployment Profile**.
2.  Add a new profile for **AWS**.
3.  Configure your EC2 or Elastic Beanstalk settings.

## Manual Deployment

1.  Export the project as a **WAR** file / **Docker** container.
2.  Upload the artifact to your AWS environment.
3.  Ensure the database connection in `application.properties` points to your RDS instance.
