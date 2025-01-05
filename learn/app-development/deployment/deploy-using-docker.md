---
title: "Deploy using Docker"
id: "deploy-using-docker"
---

## Introduction

Docker is a robust platform for developing, shipping, and running applications. It enables you to bundle your application and all its dependencies into a container, providing consistency across different environments and machines.

This guide will help you deploy a WaveMaker application using Docker. We will cover how to run a Docker container for hosting your application and how to customize the Tomcat server configuration inside the container.

## Prerequisites

Ensure the following before starting:

1. **Docker Installed**: Docker must be installed on your machine. If not, download and install Docker from the [official Docker website](https://docs.docker.com/get-docker/).
   
2. **WaveMaker Application**: You should have a built WaveMaker application. This app will have a WAR file located in the `dist` folder after the build process.

3. **Docker Image for Your Application**: A Docker image for your application is required, either built by you or pulled from a registry.

Once these prerequisites are in place, you can proceed with deploying your WaveMaker application using Docker.

## Running the Docker Container

### Build the Docker Image (Optional)

If you don’t have a Docker image or need to build your own, follow the steps from the WaveMaker app development guide to create a Docker image for your application. Detailed instructions are available in this [guide on building a Docker image](learn/app-development/deployment/build-with-docker/#create-docker-image).

To create a Docker container, use the following Docker command:

:::note
You can use any `host_port`. For example, `80`. The container's internal port is fixed to `8080` and cannot be changed.
:::

```bash
docker run --name <containername> -d -p <host_port>:8080 <imagename:version>
```

Example:
```bash
docker run --name wmapp -d -p 80:8080 wmimage:1.0
```

### Access Application

If Docker is running on the Host network, use the Host IP address to access the application on the web. Get an Instance IP Address using the following command to access the application on the web. Please run the below command in the web application hosting Instance.

```bash
ifconfig
```

- Above command will provide the network interfaces and their respective IP Address in Instance. Please use the respective IP Address to access the application on the web. You can access the application with `http://<HOST_IP:HOST_PORT>/<APPLICATION_CONTEXT>/`.

## Deploying a WAR File

If you have a WAR file generated after the build, located in the `<your_project_location>/dist` folder, you can deploy it either in a host Tomcat server or in a Tomcat Docker container.

### Deploying WAR in a Tomcat Docker Container

To deploy the WAR file in a Tomcat Docker container, run the following command:

```bash
docker run -d --name <container_name> -v <your_project_location>/dist/:/usr/local/tomcat/webapps/ -p <host_port>:8080 wavemakerapp/app-runtime-tomcat:<wavemaker_version>
```

Example:
```bash
docker run -d --name wm-app -v /home/user/MySampleApp/dist/:/usr/local/tomcat/webapps/ -p 80:8080 wavemakerapp/app-runtime-tomcat:<wavemaker_version>
```

## Customizing the Tomcat Server Configuration and Logs

You can customize the `server.xml` file for the Tomcat server inside the container and map the logs to the host machine.

### Customizing the `server.xml`

To use your own `server.xml` for Tomcat, map the custom `server.xml` file to the container’s corresponding location using the `-v` option. Example:

```bash
docker run -d --name wm-app   -v /home/user/MySampleApp/dist/:/usr/local/tomcat/webapps/   -v /home/user/custom/server.xml:/usr/local/tomcat/conf/server.xml   -p 80:8080 wavemakerapp/app-runtime-tomcat:<wavemaker_version>
```

### Mapping Logs to the Host

To map Tomcat logs to your host system, use the following volume mapping for the Tomcat logs directory:

```bash
docker run -d --name wm-app   -v /home/user/MySampleApp/dist/:/usr/local/tomcat/webapps/   -v /home/user/custom/server.xml:/usr/local/tomcat/conf/server.xml   -v /home/user/logs:/usr/local/tomcat/logs   -p 80:8080 wavemakerapp/app-runtime-tomcat:<wavemaker_version>
```

In this case, the logs from `/usr/local/tomcat/logs` inside the container will be available in `/home/user/logs` on the host.

:::note
All customizations (like specifying a custom `server.xml`, mapping logs, or mapping your WAR file) are optional and independent of each other. You can choose any of them based on your specific requirements without affecting other configurations.
:::

### Access Application

If Docker is running on the Host network, use the Host IP address to access the application on the web. Get an Instance IP Address using the following command to access the application on the web. Please run the below command in the web application hosting Instance.

```bash
ifconfig
```

- Above command will provide the network interfaces and their respective IP Address in Instance. Please use the respective IP Address to access the application on the web. You can access the application with `http://<HOST_IP:HOST_PORT>/<APPLICATION_CONTEXT>/`.

:::note
The `wavemakerapp/app-runtime-tomcat` Docker image comes with the necessary software packages and libraries required to deploy WaveMaker applications in Docker containers.

- You can deploy your application using the `app-runtime-tomcat` Docker image.
- The `app-runtime-tomcat` Docker image is available on [Docker Hub](https://hub.docker.com/r/wavemakerapp/app-runtime-tomcat).
:::
