---
title: "Docker Image for local Web preview"
id: "web-preview-docker-image"
sidebar_label: "Web Preview Docker Image"
---

---

This Docker image is configured to allow users to execute [`wm-reactnative-cli`](https://github.com/wavemaker/wm-reactnative-cli) commands.

### Software packages Installed in Docker Image

- Download [Docker](https://www.docker.com/get-started/).

- Installed software packages for WaveMaker Application Build
  - Curl
  - Node Js
  - Unzip
  - Git

### Building Image with Docker File

To build a image from docker file, check the following steps

#### 1. Create Docker File

To create a wm app builder Dockerfile, use the following command.

```bash
vi Dockerfile.build.local.preview
```

You can use the following Dockerfile to build Docker images and create Docker containers for creating rn-project previewing.

```Dockerfile
FROM ubuntu:focal
RUN apt-get update
RUN apt-get install curl -y
RUN curl -SLO https://deb.nodesource.com/nsolid_setup_deb.sh
RUN chmod 500 nsolid_setup_deb.sh
RUN ./nsolid_setup_deb.sh 18
RUN apt-get install nodejs -y
RUN apt-get install unzip -y
RUN apt-get install git -y
RUN npm install -g @wavemaker/wm-reactnative-cli@1.6.1
```

Save the above Dockerfile.build.local.preview

#### 2. Create Docker Image

Build the Docker image using the below command

```bash
docker image build -t <image-name>:1.0 -f Dockerfile.build.local.preview
```

```bash
example: docker image build -t wavemaker/wm-rn-web-preview:1.0  -f Dockerfile.build.local.preview
```

### Build Image with a tag from Docker Hub

To Build Image with a specific tag from Docker Hub, Pull the `wm-rn-web-preview` Image by running the following command

```bash
docker pull wavemakerapp/wm-rn-web-preview:<tag>
```

```bash
example: docker pull wavemakerapp/wm-rn-web-preview:latest
```

### Setup wm-rn-web-preview Container

Follow the instructions below to setup a wm-rn-web-preview container.

- If there is an already exsisting container with name `wm-rn-web-preview`, it can be removed by running the following command:

  ```bash
  docker rm wm-rn-web-preview
  ```

- For the first time, to create a container `wm-rn-web-preview` and run it. you need to run the following command:

  ```bash
  docker container run -it --name wm-rn-web-preview -p19009:19009 wavemakerapp/wm-rn-web-preview
  ```

  `wm-rn-web-preview` is the container name created.

  `-p19009:19009` The -p option in Docker is used for port binding, and it follows the pattern `HostPort:DockerPort`.

  `wavemakerapp/wm-rn-web-preview` is the image name.

- This will launch a terminal session in docker container, here we can use [`wm-reactnative-cli`](https://github.com/wavemaker/wm-reactnative-cli) commands.

  For example,

  `wm-reactnative run web-preview <preview_url> --clean`

  `<preview_url>` is the app preview url (eg:'https://www.wavemakeronline.com/run-ngnfytn5tb/test_master')

  ![wm-rn-web-preview](/learn/assets/wm-rn-web-preview.png)

### Starting the Container

- After setting up the container, To start the container, you can run the following command:

  ```bash
  docker run -it wm-rn-web-preview /bin/bash
  ```

