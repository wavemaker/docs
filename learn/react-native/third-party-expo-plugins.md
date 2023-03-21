---
title: "Third-party expo plugins"
id: "third-party-expo-plugins"
sidebar_label: "Third-party expo plugins"
---
---

You can add third-party expo plugins in React native projects from the export as React Native Dialog.

#### Expo

This option shows all the available expo plugins, Once a plugin is selected it will add the latest version to the project.

![Expo-plugins](/learn/assets/expo-plugins.png)

#### Npm

This option will fetch the specified version of the plugin from the npm registry and add it to the project.

![Expo-plugins-npm](/learn/assets/expo-plugins-npm.png)

#### Github
For this option, we need to provide the plugin name and the git repository ("github:username/repository") and it will be added to the project.

``` 
example:
Git Repo URL - https://github.com/sboyina/my-expo-battery
then we need to pass github url as "github:sboyina/my-expo-battery"
```

![Expo-plugins-git](/learn/assets/expo-plugins-git.png)


#### Local

This option allows users to upload their own customized plugin zip files (.tgz files).

You can get the tarball(.tgz file) of expo-plugins by visiting `https://registry.npmjs.org/expo-plugin-name/expo-plugin-version` (dist -> tarball).

![Expo-plugins-local](/learn/assets/expo-plugins-local.png)