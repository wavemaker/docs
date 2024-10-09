---
title: "Debugging - React Native Application"
id: "debugging-in-react-native"
sidebar_label: "Debugging - React Native Application"
---

---

An aplication debugging process includes identifying, analyzing, and resolving issues or defects (bugs) within a software application. It involves systematically testing, investigating, and correcting errors that prevent the application from functioning as expected. Debugging ensures the application runs smoothly and performs correctly under different conditions.

The application developed in our studio can be debugged in two ways.
- [Using Web Preview](#using-web-preview)
- [Areas of Debugging in Application](#areas-of-debugging-in-application)
  - [UI Elements](#ui-elements)

## Using Web Preview

Once a React Native application is developed, you can click the **Preview** icon to view how the application User Interface(UI) is rendering and how correctly the functionalities are working.

After the Preview screen is launched, remove the Toolbar and right click on the screen and select **Inspect**.

![Inspect Window](/learn/assets/inspect-window.png)


## Areas of Debugging in Application

### UI Elements

The application's UI elements are rendered as a component tree starting from the root of the application. We can inspect these elements to verify that they are rendered correctly, including checking the applied styles and props.

For example, if in the Web Preview, the app search bar border color is applied as green instead of red.
