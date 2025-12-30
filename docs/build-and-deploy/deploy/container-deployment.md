---
last_update: { author: "Tejaswini K" }
---


# Deploy as a Docker Container

## Overview

This section explains how to deploy a WaveMaker application as a **Docker container**.  

## Introduction
A Docker image is required to create a container.
For instructions on building a Docker image, see:  
[Build Application with Docker](../build/web/package/docker/docker-image.md)

---

## Prerequisites

Ensure the following before deployment:

- Docker is installed and running [ Download and install Docker from the [official Docker website](https://docs.docker.com/get-docker/).]
- A WaveMaker application Docker image is available

---

## Run the Docker Container

Use the following command to start the container:

:::note
The container runs on port `8080`. You can map it to any host port.
:::
```bash
docker run --name <containername> -d -p <host_port>:8080 <imagename:version>
```

Example:
```bash
docker run --name wmapp -d -p 80:8080 wmimage:1.0
```
### Accessing the deployed Application

If Docker is running on the Host network, use the Host IP address to access the application on the web. Get an Instance IP Address using the following command to access the application on the web. Please run the below command in the web application hosting Instance.

```bash
ifconfig
```

- Above command will provide the network interfaces and their respective IP Address in Instance. Please use the respective IP Address to access the application on the web. You can access the application with 
`http://<HOST_IP:HOST_PORT>/<APPLICATION_CONTEXT>/`.
