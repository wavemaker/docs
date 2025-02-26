---
title: "Jenkins Integration"
id: "jenkins-integration"
---
---

WaveMaker applications are flexible for Jenkins Integrations. For setting up Jenkins as ci-cd provider for WaveMaker deployment, follow the procedure as described below.

- For automatically pulling code during operation, integrate your code repository.
- Integrate code repository with jenkins at **Manage Jenkins** > **Configure** > *code-repository-provider*, for example, code repository-providers are Gitlab, Github, and Bitbucket.
- In the code-repositoy-providers section, provide the host URL and credentials for Gitlab repository.

:::note
If your code repository does not exist in Jenkins, download the plugin of that respective code repository.
:::

- Create Job for building the code and creating Docker images using Dockerfile. Keep your Dockerfile in the root folder of your application repository. For creating Docker images and container, see [WaveMaker docker build](/learn/app-development/deployment/build-with-docker).
- For creating Job select New item and select Freestyle Job. For example, we are taking a freestyle job, based on your requirements, you can choose any job.
- At source code management, select Git and configure the code repository.
- For building Docker image and pushing to Docker repository, write add your code or executable file in Execute shell for freestyle project. For pipeline project, you have to write pipeline script for the operation. If you want to build and deploy in different servers you need to push images to the repository. Build and deploy application in the same server, and no need to push to Docker repository.
- Create another job for deployment of applications. For deployment of application, use single container deployment or combination of mysql, nginx for proxy and application [using docker compose](/learn/app-deelopment/deployment/deployment-using-docker-compose), or you can use Kubernetes for deploying highly scalable and highly available application using the Kubernetes spec files.
- For automating the build and deployment process of the application, create one pipeline project and add your pipeline code at pipeline section or provide pipeline script location at remote code repository.
- We can trigger the pipeline periodically using the Build periodically option or we can trigger our pipeline based on our code pushing and commit operation to the repository by using the poll scm and webhooks triggers.
