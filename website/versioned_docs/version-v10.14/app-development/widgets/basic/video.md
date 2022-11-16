---
title: "Video Widget"
id: "video"
sidebar_label: "Video"
---
---

WaveMaker supports video media. To use a video in your project, simply drag and drop the **Video** widget and bind it to the resource using the Property Panel.

:::note
The following table gives the browser support for **audio** and **video** resources. To learn more about audio file support, see [Audio Widget](/learn/app-development/widgets/basic/audio).
:::

|Browser|MP4|WebM|Ogg|
|---|---|---|---|
|Internet Explorer|YES|NO|NO|
|Chrome|YES|YES|YES|
|Firefox|YES|YES|YES|
|Safari|YES|NO|NO|
|Opera|YES (from Opera 25)|YES|YES|

## Using Video Widget
 
The following features are available for all the **Video** widget.

1. From the **Property** panel of the media widget, find the **Video** section. Locate the **MP4 Source Path** option and click the **Bind** icon represented by a chain-link as shown in the picture below; a Bind modal dialog pops-up.

    [![media video](/learn/assets/media_video.png)](/learn/assets/media_video.png)

2. In the modal dialog, click the **Resource** tab.

3. Select the **Video** type from the dropdown and click the **Upload New** button, the **Import Video** modal dialog pops-up.

    [![media resource](/learn/assets/media_resources.png)](/learn/assets/media_resources.png)

## Video Customizations

You can add customizations from the **Properties** panel.

1. **Height and Width** — these attributes sets the dimensions of the video
2. **Poster** — poster frame to show prior to video playback
3. **MP4 source path** — sets the media resources for MP4 media elements
4. **Ogg source path** — sets the media resources for Ogg media elements
5. **WebM source path** — sets the media resources for WebM media elements
6. **Video preload** — hints how much buffering the media resource will likely need
7. **Support message** — allows the user agent to display video content within the element's playback area
8. **Subtitle source** — this property is used to specify subtitles, caption files or other files containing text, that should be visible when the media is playing.
9. **Subtitle language** — specifies the language of the track text data (required if kind="subtitles")
10. **Enable controls** — check/Uncheck for enabling controls `play, pause, stop or volume` for the media player
11. **Enable autoplay** — check/Uncheck for enabling control
12. **Loop** — whether to loop the media resource
13. **Mute** — whether to mute the media resource by default.

## Video Widget Properties

| Property | Description |
| --- | --- |
| Name | The name is a unique identifier for the video widget. |
| **Accessibility** |
| Hint | Any text or HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds. |
| Tab index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.    **NOTE:** In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| **Video** |
| Poster | This property allows you to set an image to be shown while the video is downloading, or until the user hits the play button. |
| MP4 Source Path | This property allows you to set an video/mp4 format of the video. |
| OGG Source Path | This property allows you to set an video/Ogg source of the video. |
| WEBM Source Path | This property allows you to set an video/WebM source of the video. |
| Video Preload | This property allows if and how the author thinks the video should be loaded when the page loads. Can be set to:    - none - default   - metadata, or   - auto |
| Support Message | This property allows setting the message when Html 5 video is not supported. |
| Subtitle Source | This property allows setting the source URL for the subtitle in the .vtt format. |
| Subtitle Language | This property allows setting the language for the subtitle. |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. |
| Enable Controls | This property allows you to enable that audio/video controls should be displayed (such as a play/pause button etc). |
| Enable Autoplay | This property allows you to enable if and how the author thinks the video should be loaded when the page loads. |
| Loop | This property allows you to enable that the video will start over again, every time it is finished. |
| Mute | This property allows you to enable that the audio output of the audio/video should be muted. |