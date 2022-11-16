---
title: "WaveMaker Enterprise Configure VCS"
id: "config-vcs"
sidebar_label: "Configure VCS"
---
---

During the course of app development, tracking code changes and synchronizing the changes, in case of collaborated development, is of the essence. WaveMaker provides Version Control Services for this purpose. By default, WaveMaker Studio comes with a version control system that runs within your Platform Machine based on Gitlab. You can choose to add an external repo of your choice.

## Configure External VCS

- Supported Providers
  - [Gitlab](https://about.gitlab.com/)
  - [Bitbucket](https://bitbucket.org/product)
  - [Github](https://github.com/)
- Select Code Repository section and select Add VCS Repository to code repository.

[![vcs](/learn/assets/wme-setup/configuring-wme/adding-vcs-repo.png)](/learn/assets/wme-setup//configuring-wme/adding-vcs-repo.png)

- If you want to make this repository default, select make a default option.

::: note

After you create a new VCS server and make it Primary if you wish to edit the projects from the old VCS server when you sync/push the changes they will be made to the old VCS server and not the new VCS server. Since the project references are to the old server, there is no relation with the new VCS server.
