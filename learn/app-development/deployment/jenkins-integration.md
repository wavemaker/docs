---
title: "Jenkins Integration"
id: ""
---
---

wavemaker applications are flexible for jenkins Integrations also.setting up jenkins as ci/cd provider for wavemaker deployment follow the below procedure.

- For automatically pulling code during operation integrate your code repository
- Integrate code repository with jenkins at Manage Jenkins > configure > code-repository-provider
  - example code repository-providers are Gitlab,github and bitbucket etc .
- In the code-repositoy-providers section provide Host url and credentials for gitlab repository.

:::note
if your code repository does not exist in jenkins Download the plugin of that respective code repository.
:::

- Create Job for building the code and creating Docker images using Dockerfile.keep your Dockerfile in the root folder of your application repository. for creating Docker images and container visit [wavemaker docker build](build-with-docker.md) .
- For creating Job select New item and select freestyle Job.example we are taking freestyle job ,based on your requirements you can select any job.
- At source code management select Git and configure code repository.
- For building Docker image and pushing to Docker repository write add your code or executable file in Execute shell for freestyle project , for pipeline project you have to write pipeline script for the operation.
If  we want to build and deploy in different servers we need to push images to the repository. Build and deployment of applications in the same server no need to push to Docker repository.
- Create another job for deployment of applications.for deployment of application we use single container deployment or combination of mysql ,nginx(for proxy) and application [using docker compose](deployment-using-docker-compose.md) , or else we use kubernetes for deploying Highly scalable and Highly available application using the kubernetes spec files.
- For automating the build and deployment process of applications create one pipeline project and add your pipeline code at pipeline section or provide pipeline script location at remote code repository.
- We can trigger the pipeline periodically using the Build periodically option or we can trigger our pipeline based on our code pushing and commit operation to the repository by using the poll scm and webhooks triggers.
