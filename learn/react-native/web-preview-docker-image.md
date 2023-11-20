---
title: "Docker Image for local Web preview"
id: "web-preview-docker-image"
sidebar_label: "Web Preview Docker Image"
---

---

This Docker image is configured to allow users to execute [`wm-reactnative-cli`](https://github.com/wavemaker/wm-reactnative-cli) commands.

#### Software packages Installed in Docker Image

- Installed software packages for WaveMaker Application Build
  - Curl
  - Node Js
  - Unzip
  - Git

#### Instructions to Setup wm-rn-web-preview Container

- Download [Docker](https://www.docker.com/get-started/).

- After installing, Pull the `wm-rn-web-preview` Image by running the following command
  ```bash
  docker pull wavemakerapp/wm-rn-web-preview
  ```
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

#### To Start the Container

- After setting up the container, To start the container, you can run the following command:

  ```bash
  docker run -it wm-rn-web-preview /bin/bash
  ```

