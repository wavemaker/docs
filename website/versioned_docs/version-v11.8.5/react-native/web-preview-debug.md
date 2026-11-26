---
title: Debug React Native Web Preview 
sidebar_label: "Debug Web Preview"
id: "web-preview-debug"
---
---

## Prerequisites

- Install [React Developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) from the Google Chrome web store. 


## Debugging Procedure

1. Open the app preview URL in Google Chrome. 
2. You can view and debug page scripts easily. For this, press **Ctrl+P** or **Cmd+P** and enter the page name.
3. Components tab of the React developer tools appear in Google Chrome debug tools. In this tab, one can see the React Component tree. 

:::note
Avoid using the elements tree in the Google chrome debug tools.
:::

![Web Preview Debug](/learn/assets/web_preview_debug.png)

4. Select the component to see its props, state, and style details. 
5. Using regular expressions, components in the tree can be hidden or shown. 
    - Click on the setting icon next to the search bar.
    - Select the Components tab from the popup.
    - Click on the add filter button.
    - Mention the regular expression. **^(?!Wm)** can be used to view only WaveMaker components.

![Filter view](/learn/assets/web_preview_debug_wm_filter.png)

6. In style details, there is a _trace object_. Trace object contains sources that participated in the preparation of the final style. In the trace object, styles of later sources are overridden by the former sources.