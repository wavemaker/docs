---
id: edge-to-edge-layout
title: Edge-to-Edge Layout & Auto-Hide Navbars
sidebar_label: Edge-to-Edge Layout & Auto-Hide Navbars
---

import scroll_both_e2e_transparent from '/learn/assets/react-native/edge-to-edge-apps/scroll_both_e2e_transparent.mp4';
import scroll_none_e2e_false from '/learn/assets/react-native/edge-to-edge-apps/scroll_none_e2e_false.mp4';
import scroll_none_e2e_true from '/learn/assets/react-native/edge-to-edge-apps/scroll_none_e2e_true.mp4';
import scroll_both_e2e_false from '/learn/assets/react-native/edge-to-edge-apps/scroll_both_e2e_false.mp4';
import deviceBars from '/learn/assets/react-native/device-bars.png';
import deviceBarsDark from '/learn/assets/react-native/device-bars-dark.png';
import ThemedImage from '@theme/ThemedImage';
import edge_to_edge_page_level_props from '/learn/assets/react-native/edge-to-edge-page-level-config.png';

WaveMaker supports **edge-to-edge layouts** and **auto-hide app navigation bars** for mobile apps. These features provide a modern, immersive user experience and give developers precise control over layout and scroll behavior. These can be customised at app level and page level.

<ThemedImage
    alt="Theme-based Image"
    style={{width:'440px', margin:5}}
    sources={{
      light: deviceBars,
      dark: deviceBarsDark,
    }}
/>
<div style={{ display: 'flex', justifyConent:'space-between', flexWrap: 'wrap'}}>
  <figure style={{ textAlign: 'center', margin:5 }}>
  <video src={scroll_none_e2e_false} style={{maxWidth: 300, width: '100%'}} controls autoPlay loop playsInline />
    <figcaption>Default App Layout</figcaption>
  </figure>
  <figure style={{ textAlign: 'center', margin:5 }}>
  <video src={scroll_both_e2e_transparent} style={{maxWidth: 300, width: '100%'}} controls autoPlay loop playsInline />
    <figcaption>App with edge-to-edge &<br/> auto-hide navbars enabled</figcaption>
  </figure>
</div>

---

## Feature Summary

| Feature | Description | Customization Support |
|------------------------|------------------------|------------------------|
| **Edge-to-Edge Layout**| Allows app content to render behind the system status and navigation bars. | At app level |
| **Auto-Hide App Navbars**  | Enables top/bottom app navigation bars to hide or stay fixed during scroll. | At app and page level
| **Status Bar Styling** | Configure background color, opacity and blur of status bar. (Available only when using Edge-To-Edge UI with Auto-Hide App Navbars) | At app level |
| **Status Bar Content Styling** | Configure status bar icon/text color in Android. | At page level |
| **Device Navbar Styling** | Configure device navbar background in Android. | At page level |

---

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
- Following styles of status bar can be customized for this scenerio
  1. Background - This can be configured globally, at app level.
    - Background Color
    - Blur
    - Opacity

  2. Content Styling - Color of icon/text of Status Bar in Android. This can be configured on page level. Users can set specific color mode depnding on background color of the page. For example, they can set 'dark' for a page with light background, and 'light' for a page with dark background.

## 1. App-Level Settings

You can configure edge-to-edge and navbar scroll behavior globally from the Studio.

### Location  
**Studio → Settings → App Configurations**

### Options Available

| Setting                     | Description                                                  |
|-----------------------------|--------------------------------------------------------------|
| `Edge-to-Edge Display`       | Enables content to extend behind system UI bars.             |
| `Scroll Behavior`| Choose between Fixed or Hide app navbars on Scroll. Either only top app navbar or both top and bittom app navbar.                       |

---

![Global Config](/learn/assets/react-native/edge-to-edge-global-config.png)

If both `Edge-to-Edge Display` and `Scroll Behavior` is enabled, we can configure system status bar background.

![Status bar background Config](/learn/assets/react-native/edge-to-edge-statusbar-background.png)

## 2. Page-Level Overrides

To support use cases where specific pages need different layout behavior & styling, the following properties are available on the **Page widget**.

### `Scroll Behaviour`  
Overrides the app-level scroll behavior for the current page.

| Value       | Effect                                          |
|-------------|-------------------------------------------------|
| `Default`      | App Navigation bars remain fixed.                   |
| `Hide top nav`  | Hides top app navbar during scroll.                 |
| `Hide top and bottom nav` | Hides both top and bottom app navbars during scroll.           |

> Page-level settings take **precedence** over app-level settings.

### `Status Bar Style` (Android Only)

Controls the appearance of the status bar icons and text.

| Value          | Use Case                       |
|----------------|--------------------------------|
| `Default`| Device default behaviour. |
| `light-content`| For dark backgrounds (white text/icons) |
| `dark-content` | For light backgrounds (dark text/icons) |

:::note
This prop applies to **Android only**. iOS adjusts status bar appearance automatically based on background and theme.
:::

### `Navigation Bar Style` (Android Only)

Controls the appearance of the system navigation bar background.

| Value          | Use Case                       |
|----------------|--------------------------------|
| `light`| For light backgrounds. Almost transparent with very light opacity.|
| `Dark` | For dark backgrounds. Semi-transparent with medium opacity. |

:::note
This setting applies only to **Android**. There's no need to set this for iOS.
:::

<img src={edge_to_edge_page_level_props} style={{ width: 300}} alt="Page level props" />