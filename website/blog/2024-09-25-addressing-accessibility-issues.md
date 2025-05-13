---
title: "Addressing Accessibility Issues by using Expo 51 and React Native 0.74"
author: "Prahalad Madepally"
---
---

During mobile application development, [Appium](/learn/react-native/appium-support/), an automation testing framework, assists in extracting accessibility IDs used for writing automation scripts to ensure the application functions as expected.

In applications built with Expo 50 and React Native 0.73, certain issues with Appium were observed, stemming from limitations in React Native 0.73. However, with the enhancements in Expo 51 and React Native 0.74, these issues related to accessibility IDs and automation testing will be resolved.

<!-- truncate -->

## Problem with Expo 50 and React Native 0.73

"When using Expo 50 and React Native 0.73, automation testing challenges arose when working with iOS applications. Appium, a mobile test automation tool, struggled to capture elements nested deep within the component tree, which restricted iOS testing, although the same codebase functioned correctly on Android.

The following issues were identified during testing with Expo 50 and React Native 0.73.

**Component Layer Depth**: The application's component layers exceeded Appium’s navigation capabilities. With the default maximum depth of the snapshot (`snapshotMaxDepth` property)set to 62, many components became inaccessible, limiting the scope of testing.
**iOS-Specific Challenges**: Appium was unable to reach deeply nested elements in the iOS component tree, preventing the creation of comprehensive automation scripts. In contrast, Android handled the same structure without issues.
**Limitations of snapshotMaxDepth**: Even when adjusting the depth limit to 60 or higher, some components remained unreachable for testing, further restricting the automation process.


## Solution with Expo 51 and React Native 0.74

After careful analysis, the core issue was identified as a limitation in React Native version 0.73, which will be addressed by the upcoming improvements in Expo 51. WaveMaker plans to upgrade to Expo 51, which includes React Native 0.74, by mid-December 2024.

In this new version, the component tree is significantly flattened, enabling automation tools like Appium to access deeper elements in the component tree without hitting the previous snapshot depth limit. WaveMaker has already tested the Expo 51 upgrade, confirming that the `snapshotMaxDepth` property issue has been resolved. This improvement allows Appium to capture previously inaccessible elements, enabling more comprehensive automation testing for both iOS and Android.

## Appium Inspector Differences Between Expo 50 and Expo 51

For example, consider two scenarios: in one, we set the maximum depth level to 33 using Expo 50 and React Native 0.73, and in the second, we set it to 150 using Expo 51 and React Native 0.74.

<details>

<summary>Expo 50 and React Native 0.73</summary>

![Expo 50 and React Native 0.73](/learn/assets/expo50-reactnative-73.png)

In this case, the middle section presents the hierarchical structure of the app’s UI elements, showing how components are organized within different layers of the app. The hierarchy extends up to Level 150, suggesting a deep structure. However, maximum depth level of layers in the component tree is set as 33 so the last fully accessible UI element is found at **Level 33**. 

Beyond this level, Appium encounters a limitation, unable to expand or interact with any elements past Level 33, which restricts further navigation or inspection of deeper layers.

</details>

<details>

<summary>Expo 51 and React Native 0.74</summary>

![Expo 51 and React Native 0.74](/learn/assets/expo51-reactnative-74.png)

In this case, the App Source pane now clearly demonstrates that the UI hierarchy extends to Level 150. The selected element is labeled level 150, is displayed in the Selected Element panel. This confirms that Appium can now fully explore and interact with the entire element hierarchy, even at the deepest level. 

At the bottom of the hierarchy, an element labeled **Depth Reached** signifies that Appium has successfully navigated through all levels. This enhancement eliminates the previous depth limitation, which had restricted access beyond Level 33, allowing for thorough testing and debugging of the entire app’s UI.

</details>




