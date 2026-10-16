---
title: "Wrapping the App with Custom Providers"
id: "custom-app-wrapper"
sidebar_label: "Custom App Wrapper"
---
---

import customAppWrapperVideo from '/learn/assets/react-native/custom-app-wrapper.mp4';

You can wrap your React Native app with your own React component. It sits at the very top of the component tree, above every page, so anything it provides is available to the whole app.

Use it when a library needs a provider or a root-level component to work, for example:

- **Data fetching and caching:** TanStack Query, SWR, Apollo Client (GraphQL)
- **State management:** Redux, Jotai, Recoil
- **Gestures, sheets and overlays:** `GestureHandlerRootView`, bottom sheets, portals, toast messages
- **Error and crash reporting:** Sentry, Bugsnag error boundaries
- **Analytics and feature flags:** Segment, PostHog, LaunchDarkly
- **SDKs that need a provider:** payments (Stripe), authentication (Auth0)
- **One-time setup at app start:** configuring an SDK before the app renders

<video src={customAppWrapperVideo} style={{maxWidth: 800, width: '100%'}} controls playsInline />

<!-- TODO: add a :::note with the minimum WaveMaker Studio version (listed in release 11.14.1.31) -->

## Adding a custom wrapper

1. In Studio, create a file named `customapp.wrapper.js` in the `src/main/webapp` folder of your project.
2. Export a default React component from this file. The component receives a `children` prop and must render it, wrapped in whatever your app needs.

:::note
If your wrapper uses a third-party library, such as TanStack Query, add its npm package in the **Plugins** section first. See [Third-party expo plugins](/learn/react-native/third-party-expo-plugins).
:::

<!-- TODO: add screenshot — customapp.wrapper.js in src/main/webapp in the File Explorer -->

## Example: TanStack Query

The following wrapper makes a `QueryClient` available to the whole app:

```js
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 60000,
    },
  },
});

export default function CustomAppWrapper({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
```

Components that use TanStack Query hooks such as `useQuery` can now share cached responses. They skip re-rendering when the data hasn't changed.

:::tip
You can nest as many providers as you need inside `CustomAppWrapper`. Make sure `children` is rendered by the innermost one.
:::

