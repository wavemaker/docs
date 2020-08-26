---
title: "Media -  Audio,  Picture &  Video Widgets"
id: ""
---
---

WaveMaker supports all three types of media - image, audio and video in the form of three widgets:

1. **Picture**,
2. **Audio** and
3. **Video**.

Just drag and drop the desired widget and bind it to the resource using the Property Panel.

:::note
**Picture widget** can be used by itself or within any widget like Live List or Data Grid or Carousel etc.. It can be bound to a database column containing the URL for the picture resource location. Example, the picurl field of Employee database from Sample DB.
:::

:::note
The following table gives the browser support for **audio/video resource**.
:::

|Browser|MP4|WebM|Ogg|
|---|---|---|---|
|Internet Explorer|YES|NO|NO|
|Chrome|YES|YES|YES|
|Firefox|YES|YES|YES|
|Safari|YES|NO|NO|
|Opera|YES (from Opera 25)|YES|YES|

## Picture

The following features are available for all the **Picture** widget.

1. From the **Property** panel of the media widget, find the **Source** property. Click the **Bind** icon represented by a chain-link as shown in the picture below; a Bind modal dialog pops up.

    [![Media](/learn/assets/media_pic.png)](/learn/assets/media_pic.png)

2. In the modal dialog, click the **Resource** tab.

3. Select the **Image** type from the dropdown and click the **Upload New** button, the **Import Image** modal dialog pops-up.

    [![media resource](/learn/assets/media_resources.png)](/learn/assets/media_resources.png)

### Picture Customizations

You can add customizations from the **Properties** panel such as **Width** and **Height** with valid values. For example, 50px for Width, 75px for Height.

### Picture Widget Properties

| **Property** | **Description** |
| --- | --- |
| Name | The name is a unique identifier for the picture widget. |
| **Accessibility** |
| Hint | Any text or HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds. |
| Tab index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable. <br><br> **NOTE:** In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
| **Picture** |
| Source | This property specifies the source for the picture. The source can be either a file or a URL <br><br> - **File**: enter the directory and filename for the image to display (supported file types include .jpg, .gif and .png). By default, WaveMaker looks for images in the src/main/webapp directory of the project. Every WaveMaker project has a data directory under src/main/webapp, so this is a good place to put pictures. <br><br> - **URL**: enter a URL to any internet-accessible image. To display the file, foo.jpg, in the project directory src/main/webapp/resources/images/imagelists/, enter the following into the source property:resources/images/imagelists/foo.jpg or simply foo.jpg |
| Placeholder | This property will act as placeholder image for the picture. When the picture from the Source value is not provided or not available then placeholder picture will be shown. |
| Aspect | This property can automatically size an image to the height or width of the picture widget. The options are: <br><br> - _none_: the image is displayed at its default size <br> - _h_: the image is resized so that the width of the image is the same as the width of the picture widget <br> - _v_: the image is resized so that the height of the image is the same as the height of the picture widget <br> - the image is resized so that the height and width of the image is the same as the height of the picture widget  |
| Shape | This property controls the shape of the data point. Can be: <br><br> - rounded, <br> - circle, or <br> - thumbnail  |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| Animation | This property controls the animation of an element. The animation is based on the CSS classes and works only in the run mode. |
| Encode URL | Check this if you want the provided URL to be encoded at the run time. Enabling this property will encode the special characters in the URL and enable rendering of the image which otherwise might fail. By default, it is set to false. |

### Picture Widget Events

| Event | Description |
| --- | --- |
| **Mouse Events** |
| On click | This event handler is called whenever the click event is triggered on a widget. |
| On double click | This event handler is called whenever the double click event is triggered on a widget. |
| On mouse enter | This event handler is called whenever the mouse enters the widget. |
| On mouse leave | This event handler is called whenever the mouse leaves the widget. |
| **Touch Events** |
| On tap | This event handler is called whenever the tap event is triggered on a widget. |
| On double tap | This event handler is called whenever the double tap event is triggered on a widget. |


## Video
 
The following features are available for all the **Video** widget.

1. From the **Property** panel of the media widget, find the **Video** section. Locate the **MP4 Source Path** option and click the **Bind** icon represented by a chain-link as shown in the picture below; a Bind modal dialog pops-up.

    [![media video](/learn/assets/media_video.png)](/learn/assets/media_video.png)

2. In the modal dialog, click the **Resource** tab.

3. Select the **Video** type from the dropdown and click the **Upload New** button, the **Import Video** modal dialog pops-up.

    [![media resource](/learn/assets/media_resources.png)](/learn/assets/media_resources.png)

### Video Customizations

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

### Video Widget Properties

| Property | Description |
| --- | --- |
| Name | The name is a unique identifier for the video widget. |
| **Accessibility** |
| Hint | Any text or HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds. |
| Tab index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable. <br><br> **NOTE:** In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| **Video** |
| Poster | This property allows you to set an image to be shown while the video is downloading, or until the user hits the play button. |
| MP4 Source Path | This property allows you to set an video/mp4 format of the video. |
| OGG Source Path | This property allows you to set an video/Ogg source of the video. |
| WEBM Source Path | This property allows you to set an video/WebM source of the video. |
| Video Preload | This property allows if and how the author thinks the video should be loaded when the page loads. Can be set to: <br><br> - none - default <br> - metadata, or <br> - auto |
| Support Message | This property allows setting the message when Html 5 video is not supported. |
| Subtitle Source | This property allows setting the source URL for the subtitle in the .vtt format. |
| Subtitle Language | This property allows setting the language for the subtitle. |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. |
| Enable Controls | This property allows you to enable that audio/video controls should be displayed (such as a play/pause button etc). |
| Enable Autoplay | This property allows you to enable if and how the author thinks the video should be loaded when the page loads. |
| Loop | This property allows you to enable that the video will start over again, every time it is finished. |
| Mute | This property allows you to enable that the audio output of the audio/video should be muted. |

## Audio

The following features are available for all the **Audio** widget.

1. From the **Property** panel of the media widget, find the **Audio** section. Locate the **MP3 Source Path** option and click the **Bind** icon represented by a chain-link as shown in the picture below; a Bind modal dialog pops-up.

    [![Media audio](/learn/assets/media_audio.png)](/learn/assets/media_audio.png)

2. In the modal dialog, click the **Resource** tab.

3. Select the **Audio** type from the dropdown and click the **Upload New** button, the **Import Audio** modal dialog pops-up.

    [![media resource](/learn/assets/media_resources.png)](/learn/assets/media_resources.png)

### Audio Customizations

You can add customizations from the **Properties** panel.

1. **Autoplay** — a boolean specifying whether the file should play as soon as it can
2. **Loop** — a boolean specifying whether the file should be repeatedly played.
3. **Controls** — a boolean specifying whether the browser should display its default media controls
4. **Preload** — none/metadata/auto — where 'metadata' means preload just the metadata and 'auto' leaves the browser to decide whether to preload the whole file.

### Audio Widget Properties

| Property | Description |
| --- | --- |
| Name | The name is a unique identifier for the audio widget. |
| **Accessibility** |
| Hint | Any text or HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds. |
| Tab index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable. <br><br> **NOTE:** In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| **Audio** |
| MP3 Source Path | This property allows you to set the file path of a mp3 file. |
| Audio Preload | This property allows if and how the author thinks the audio should be loaded when the page loads. Can be set to: <br> - none - default <br> - metadata, or <br> - auto  |
| Support Message | This property allows you to set the message when the audio file is not supported by the HTML5 media player. |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. |
| Enable Controls | This property allows you to enable that audio/video controls should be displayed such as a play/pause button, and more. |
| Enable Autoplay | This property allows you to enable if and how the author thinks the video should be loaded when the page loads. |
| Loop | This property allows you to enable that the video will start over again, every time it is finished. |
| Mute | This property allows you to enable that the audio output of the audio/video should be muted. |