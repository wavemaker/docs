---
title: "WaveMaker Devtool chrome extension"
id: "chrome-developer-tool"
---
---

**WaveMaker Devtool** chrome extension is an addition to the existing chrome developer tools that adds debugging and monitoring capabilities for WaveMaker applications in preview mode.

### Need for WaveMaker Devtool

Application developer has to go through numerous application logs when an issue is observed while verifying the newly introduced changes in the preview mode. Developer also has no clue of what variable is responsible for the request to fix the encountered issue quickly. In order to ease the debugging and improve the application performance **WaveMaker Devtool** chrome extension is introduced. Application developer can easily identify the duplicate requests triggered in the page and check which requests are taking more time to respond using the extension.

### Who can use the WaveMaker Devtool 

All WaveMaker users of *.wavemaker.com and *.wavemakeronline.com who have installed the chrome **WaveMaker Devtool** extension can use the extension. 

### Prerequisites
- Latest Chrome version
- Login to the WaveMaker Platform to view logs

### How to use the WaveMaker Devtool 
Once installed, users can find the extension by opening the chrome developer tools for the webpage that is hosting WaveMaker application in preview mode. Users can view the duplicate requests triggered in the page by using the **Show only duplicates** option. Users can find the variable associated with each request along with the request URL. By default, **Core APIs** of the page are shown, users can switch to **All APIs** to view all the requests triggered by the page.
