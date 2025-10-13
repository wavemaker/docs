---
title: "Lottie Widget (Beta)"
id: "lottie"
sidebar_label: "Lottie (Beta)"
---
---

[Lottie Animations](https://lottiefiles.com/) are very popular and are very easy to control through JavaScript code. Lottie Widget helps to show the Lottie animations in WaveMaker. 

:::note
Lottie Widget is supported only in React Native applications in WaveMaker.
:::

## Lottie Widget Properties

| Property | Description |
| --- | --- |
| Name | The name is a unique identifier for the video widget. |
| **Animation** |
| Source | Location of the Lottie animation JSON file. |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. |
| Enable Autoplay | This property allows you to enable if and how the author thinks the animation should be loaded when the page loads. |
| Loop | This property allows you to enable that the animation will start over again, every time it is finished. |
| Speed | Set the control of speed. By default, speed is 1. Negative values of speed will make animation to run in reverse direction.

## Methods

### Lottie Widget Methods for Animation Control

The following methods are available to interact with the Lottie widget using JavaScript.


1. Start/Resume Animation:

```javascript
Page.Widgets.lottie1.play();
```

2. Stop/Pause Animation:

```javascript
Page.Widgets.lottie1.pause();
```

3. Restart Animation:

```javascript
Page.Widgets.lottie1.reset();
```

These methods provide control over the playback of the animation using the Lottie widget.

## Events

The following events are available on the Lottie widget.

| **Event** | **Description** |
| --- | --- |
| On Ready | This property defines the event handler to be called when the animation is loaded and is ready to play. |
| On Pause | This property defines the event handler to be called when the animation is paused.|
| On Play | This property defines the event handler to be called when the animation is played or resumed. |
| On Complete | This property defines the event handler to be called when the animation is completed.|
