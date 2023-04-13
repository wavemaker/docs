---
title: "Third-party expo plugins"
id: "third-party-expo-plugins"
sidebar_label: "Third-party expo plugins"
---
---

You can add third-party expo plugins in React native projects from the export as React Native Dialog.

#### Expo

This option shows all the available expo plugins, Once a plugin is selected it will add the latest version of the plugin to the project.

![Expo-plugins](/learn/assets/expo-plugins.png)

#### Npm

This option will allow users to add a specified version of the plugin from the [npm registry](https://www.npmjs.com/) and add it to the project.

![Expo-plugins-npm](/learn/assets/expo-plugins-npm.png)

#### Github
This option allows users to upload custom expo plugins from their git repo, we need to provide the plugin name and the git repository ("github:username/repository") and it will be added to the project.
 
``` 
example:
Git Repo URL - https://github.com/sboyina/my-expo-battery
then we need to pass github url as "github:sboyina/my-expo-battery"
```

![Expo-plugins-git](/learn/assets/expo-plugins-git.png)


#### Local

This option allows users to upload their own customized plugin using tarball file (.tgz file).

You can get the tarball(.tgz file) of expo-plugins by visiting `https://registry.npmjs.org/expo-plugin-name/expo-plugin-version` (you can find the tarball under dist key).

![Expo-plugins-local](/learn/assets/expo-plugins-local.png)