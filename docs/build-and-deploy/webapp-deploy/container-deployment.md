---
sidebar_position: 4
---

# Deploy as a Docker Container 

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
