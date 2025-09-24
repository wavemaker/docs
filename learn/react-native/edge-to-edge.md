---
id: edge-to-edge-layout
title: Edge-to-Edge Layout & Auto-Hide Navbars
sidebar_label: Edge-to-Edge Layout & Auto-Hide Navbars
---

import scroll_both_e2e_transparent from '/learn/assets/react-native/edge-to-edge-apps/scroll_both_e2e_transparent.mp4';
import scroll_none_e2e_false from '/learn/assets/react-native/edge-to-edge-apps/scroll_none_e2e_false.mp4';
import scroll_none_e2e_true from '/learn/assets/react-native/edge-to-edge-apps/scroll_none_e2e_true.mp4';
import scroll_both_e2e_false from '/learn/assets/react-native/edge-to-edge-apps/scroll_both_e2e_false.mp4';
import deviceLight from '/learn/assets/react-native/device-light.png';
import deviceDark from '/learn/assets/react-native/device-dark.png';
import deviceE2ELight from '/learn/assets/react-native/device-e2e-light.png';
import deviceE2EDark from '/learn/assets/react-native/device-e2e-dark.png';
import ThemedImage from '@theme/ThemedImage';
import edge_to_edge_page_level_props from '/learn/assets/react-native/edge-to-edge-page-level-config.png';

WaveMaker supports edge-to-edge layouts and auto-hide app navigation bars for mobile apps. These features provide a modern, immersive user experience and give developers precise control over layout and scroll behavior. These can be customized at app level and page level.

<div style={{ display: 'flex', justifyConent:'space-between', flexWrap: 'wrap'}}>
<ThemedImage
    alt="Theme-based Image"
    style={{width:'440px', margin:5}}
    sources={{
      light: deviceLight,
      dark: deviceDark,
    }}
/>
<ThemedImage
    alt="Theme-based Image"
    style={{width:'480px', margin:5}}
    sources={{
      light: deviceE2ELight,
      dark: deviceE2EDark,
    }}
/>
</div>

## Feature Summary

| Feature | Description | Customization Support |
|------------------------|------------------------|------------------------|
| [Edge-to-Edge Layout](#edge-to-edge-layout) | Allows app content to render behind the system status and navigation bars. | App level |
| [Auto-Hide App Navbars](#auto-hide-navbars)  | Enables top/bottom app navigation bars to hide or stay fixed during scroll. | App and page level
| [Status Bar Styling](#status-bar-styling) | Configure background color, opacity and blur of status bar. (Available only when using Edge-To-Edge UI with Auto-Hide App Navbars) | App level |
| [Status Bar Content Styling](#status-bar-style-android-only) | Configure status bar icon/text color in Android. iOS configuration is not required as iOS adjusts status bar appearance automatically based on background and theme.| Page level |
| [Device Navbar Styling](#navigation-bar-style-android-only) | Configure device navbar background in Android. iOS configuration is not required as iOS adjusts status bar appearance automatically based on background and theme. | Page level |

## Edge-to-Edge Layout

- By default, App takes the space between status bar and device navbar. 
- You can change layout to edge-to-edge, to make the app render content behind status bar and device navbar, taking full advantage of the entire screen. This gives a sleek, modern feel and allows your app to better match today's immersive design trends.
- This can be configured globally, at app level.

<div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
  <figure style={{ textAlign: 'center', margin:0 }}>
    <video src={scroll_none_e2e_false} style={{maxWidth: 300, width: '100%'}} controls autoPlay loop playsInline />
    <figcaption>Default App Layout</figcaption>
  </figure>
  <figure style={{ textAlign: 'center', margin:0 }}>
    <video src={scroll_none_e2e_true} style={{ maxWidth: 300, width: '100%', backgroundColor: 'transparent'}} controls autoPlay loop playsInline />
    <figcaption>App with edge-to-edge</figcaption>
  </figure>
</div>

## Auto-Hide Navbars

- By default app's top and bottom navbar is fixed. This can be customized using *Auto-Hide Navbars*.
- You can customise to make app's both top and bottom bar auto hide on scroll, or only top navbar.
- This can be configured at both app and individual page level. Page level config will take precedence over app level config for that page.

<div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
  <figure style={{ textAlign: 'center', margin:0 }}>
    <video src={scroll_none_e2e_false} style={{ maxWidth: 300, width: '100%'}} controls autoPlay loop playsInline />
    <figcaption>Default App Layout</figcaption>
  </figure>
  <figure style={{ textAlign: 'center', margin:0 }}>
    <video src={scroll_both_e2e_false} style={{ maxWidth: 300, width: '100%', backgroundColor: 'transparent'}} controls autoPlay loop playsInline />
    <figcaption>App with auto-hide on both top and bottom bar</figcaption>
  </figure>
</div>

## Status Bar Styling

- When both edge-to-edge layout and auto-hide navbars is enabled, the content of the app will render behind status bar when app is scrolled up.
- Following styles of status bar can be customized here
  1. Background - We can configure Background type : Transparent/Blur, Background Color, Background Opacity

## 1. App-Level Settings

You can configure edge-to-edge and navbar scroll behavior globally from the Studio.

### Location  
**Studio → Settings → App Configurations**

### Options Available

| Setting                     | Description                                                  |
|-----------------------------|--------------------------------------------------------------|
| `Scroll Behavior`| Choose between Fixed or Hide app navbars on Scroll. Either only top app navbar or both top and bottom app navbar.                       |
| `Edge-to-Edge Display`       | Enables content to extend behind system UI bars.             |
| `Configure Status Bar (Optional)`       | If both `Scroll Behavior` and `Edge-to-Edge Display` is enabled, we can configure system status bar background. (Background type : Transparent/Blur, Background Color, Background Opacity) |

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0,
      borderRadius: 10
    }}
    src="https://embed.app.guidde.com/playbooks/eQXeEgLDXVmMqvfM1zY86C?mode=videoOnly"
    title="Configure Edge-to-Edge Display and Scroll Behavior in WaveMaker"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

## 2. Page-Level Overrides

To support use cases where specific pages need different layout behavior & styling, the following properties are available on the Page widget.

<img src={edge_to_edge_page_level_props} style={{ width: 300}} alt="Page level props" />

### `Scroll Behaviour`  
Overrides the app-level scroll behavior for the current page.

| Value       | Effect                                          |
|-------------|-------------------------------------------------|
| `Default`      | App Navigation bars remain fixed.                   |
| `Hide top nav`  | Hides top app navbar during scroll.                 |
| `Hide top and bottom nav` | Hides both top and bottom app navbars during scroll.           |

> Page-level settings take precedence over app-level settings.

### `Status Bar Style` (Android Only)

Controls the appearance of the status bar icons and text.

| Value          | Use Case                       |
|----------------|--------------------------------|
| `Default`| Device default behavior. |
| `light-content`| For dark backgrounds (white text/icons) |
| `dark-content` | For light backgrounds (dark text/icons) |

:::note
This prop applies to Android only. iOS adjusts status bar appearance automatically based on background and theme.
:::

### `Navigation Bar Style` (Android Only)

Controls the appearance of the system navigation bar background.

| Value          | Use Case                       |
|----------------|--------------------------------|
| `light`| For light backgrounds. Almost transparent with very light opacity.|
| `Dark` | For dark backgrounds. Semi-transparent with medium opacity. |

:::note
This setting applies only to Android. There's no need to set this for iOS.
:::
