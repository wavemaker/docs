---
title: "Anchor"
id: "anchor"
sidebar_label: "Anchor"
---
---

An Anchor is the visible, clickable text that links one web page to another. When placed inside another widget like navigation, the anchor widget would include default features like a file icon and default styling to set a border and background color.

See the following image that shows the classes of the specific widget and also learn how to style it.

![Anchor](/learn/assets/react-native-styles/anchor.png)

## Anchor Classes - option 1

1. **.app-anchor** ([View](/learn/react-native/widgets/view)): To implement and style the outer container that will hold other styling elements of the Anchor widget.
2. **.app-anchor-text** ([Text](/learn/react-native/widgets/text)): To provide and style the text in the Anchor widget.
3. **.app-anchor-badge** ([Text](/learn/react-native/widgets/text)): To use and style the badge element that contains additional information related to the Anchor widget.
4. **.app-anchor-icon** ([WM Icon](../../basic/icon)): To use and style the icon provided for the text inside the Anchor widget.
5. **.app-anchor-skeleton** ([WM Skeleton](/learn/react-native/widgets/basic/skeleton)): To style the basic structure of the Anchor widget. To know more, see [Skeleton Loader](/learn/react-native/app-loader#skeleton-loader).

## Anchor Classes - option 2

|Ref No.| class name  | Type | Purpose |
|----|-----------|---------|---------|
| 1. |.app-anchor| [View](/learn/react-native/widgets/view) | To implement and style the outer container that will hold other styling elements of the Anchor widget.|
| 2. |.app-anchor-text| [Text](/learn/react-native/widgets/text) | To provide and style the text in the Anchor widget.|
| 3. |.app-anchor-badge| [Text](/learn/react-native/widgets/text) | To use and style the badge element that contains additional information related to the Anchor widget.|
| 4. |.app-anchor-icon| [WM Icon](../../basic/icon) | To use and style the icon provided for the text inside the Anchor widget.|
| 5. |.app-anchor-skeleton| [WM Skeleton](/learn/react-native/widgets/basic/skeleton) | To style the basic structure of the Anchor widget.|

# Extra Anchor Styles

| class name | Type | Purpose |
|-----------|---------|---------|
|.link-primary|WM Anchor| To Style the primary link.|
|.link-secondary|WM Anchor| To Style the secondary link.|
|.link-default|WM Anchor| To Style the default link.|
|.link-danger|WM Anchor| To Style the danger link.|
|.link-warning|WM Anchor| To Style the warning link.|
|.link-info|WM Anchor| To Style the info link.|
|.link-dark|WM Anchor| To Style the dark link.|
|.link-light|WM Anchor| To Style the light link.|
