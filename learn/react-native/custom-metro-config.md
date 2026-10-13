---
title: "Custom Metro Configuration"
id: "custom-metro-config"
sidebar_label: "Custom Metro Config"
---
---

import customMetroConfig from '/learn/assets/react-native/customMetroConfig.mp4';

WaveMaker React Native apps are bundled with Metro using a default configuration. You can add your own Metro settings on top of it, for example to support extra asset types or to tune the build.

<video
  src={customMetroConfig}
  controls
  preload="metadata"
  style={{ maxWidth: "100%", borderRadius: "12px" }}
/>

<!-- TODO: add a :::note with the minimum WaveMaker Studio version (listed in release 11.14.1.31) -->

## When to use it

Use a custom Metro configuration for any Metro setting that WaveMaker's defaults don't cover, for example:

- **Extra asset types:** bundle files such as animations, 3D models, ML models or prepopulated databases by adding their extensions to `resolver.assetExts`.
- **Module resolution:** add aliases with `resolver.extraNodeModules`, or exclude folders with `resolver.blockList`.
- **Build performance:** set `maxWorkers` for build machines with limited memory, or configure Metro's cache with `cacheStores` and `cacheVersion`.
- **Metro plugins from libraries:** some libraries ship a function that wraps the Metro configuration. For example, Sentry's `withSentryConfig` adds source map support for error reporting.

## Adding a custom Metro configuration

1. In Studio, create a file named `custommetro.config.js` in the `src/main/webapp` folder of your project.
2. Export an async function from this file. The function receives WaveMaker's Metro `config` object, already set up with WaveMaker's defaults. Change only what you need and return it.
3. Build the app. WaveMaker copies the file into the generated app and applies your function after its own settings.

<!-- TODO: add screenshot — custommetro.config.js in src/main/webapp in the File Explorer -->

If the file isn't present, the app builds with WaveMaker's default Metro configuration.

## Example

The following configuration adds `lottie` as an asset extension, adds a module alias, gives Metro its own cache folder and limits it to four workers:

```js
const path = require('path');
const crypto = require('crypto');
const { FileStore } = require('metro-cache');

module.exports = async (config) => {
  config.resolver.assetExts.push('lottie');
  config.resolver.extraNodeModules['my-lib'] = path.resolve(__dirname, 'node_modules/my-lib');

  config.cacheVersion = crypto.createHash('md5')
    .update(__dirname)
    .digest('hex');
  config.cacheStores = [
    new FileStore({ root: path.join(__dirname, '.metro-cache') }),
  ];

  config.maxWorkers = 4;

  return config;
};
```

:::note
Always return the `config` object from the function.
:::

## Example: Sentry

Libraries that provide a Metro plugin take a configuration and return a wrapped one. Pass WaveMaker's `config` to the plugin and return the result:

```js
const { withSentryConfig } = require('@sentry/react-native/metro');

module.exports = async (config) => {
  return withSentryConfig(config);
};
```

The library must be available in the project. To add an npm package, see [Third-party expo plugins](/learn/react-native/third-party-expo-plugins)
