---
title: "Audio Widget"
id: "audio"
sidebar_label: "Audio"
---
---

WaveMaker supports audio media. To use an audio in your project, simply drag and drop the **Audio** widget and bind it to the resource using the Property Panel.

:::note
The following table gives the browser support for **audio** and **video** resources. To learn more about video file support, see [Video Widget](/learn/app-development/widgets/basic/video).
:::

|Browser|MP4|WebM|Ogg|
|---|---|---|---|
|Internet Explorer|YES|NO|NO|
|Chrome|YES|YES|YES|
|Firefox|YES|YES|YES|
|Safari|YES|NO|NO|
|Opera|YES (from Opera 25)|YES|YES|

## Using Audio Widget

The following features are available for all the **Audio** widget.

1. From the **Property** panel of the media widget, find the **Audio** section. Locate the **MP3 Source Path** option and click the **Bind** icon represented by a chain-link as shown in the picture below; a Bind modal dialog pops-up.

    [![Media audio](/learn/assets/media_audio.png)](/learn/assets/media_audio.png)

2. In the modal dialog, click the **Resource** tab.

3. Select the **Audio** type from the dropdown and click the **Upload New** button, the **Import Audio** modal dialog pops-up.

    [![media resource](/learn/assets/media_resources.png)](/learn/assets/media_resources.png)

## Audio Customizations

You can add customizations from the **Properties** panel.

1. **Autoplay** — a boolean specifying whether the file should play as soon as it can
2. **Loop** — a boolean specifying whether the file should be repeatedly played.
3. **Controls** — a boolean specifying whether the browser should display its default media controls
4. **Preload** — none/metadata/auto — where 'metadata' means preload just the metadata and 'auto' leaves the browser to decide whether to preload the whole file.

## Audio Widget Properties

| Property | Description |
| --- | --- |
| Name | The name is a unique identifier for the audio widget. |
| **Accessibility** |
| Hint | Any text or HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds. |
| Tab index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.    **NOTE:** In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| **Audio** |
| MP3 Source Path | This property allows you to set the file path of a mp3 file. |
| Audio Preload | This property allows if and how the author thinks the audio should be loaded when the page loads. Can be set to:   - none - default   - metadata, or   - auto  |
| Support Message | This property allows you to set the message when the audio file is not supported by the HTML5 media player. |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. |
| Enable Controls | This property allows you to enable that audio/video controls should be displayed such as a play/pause button, and more. |
| Enable Autoplay | This property allows you to enable if and how the author thinks the video should be loaded when the page loads. |
| Loop | This property allows you to enable that the video will start over again, every time it is finished. |
| Mute | This property allows you to enable that the audio output of the audio/video should be muted.|
