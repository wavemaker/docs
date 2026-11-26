---
title: "Using 3rd party JavaScript files"
id: "using-3rd-party-javascript-files"
---
---

In this section, we will look at the usage of **external JavaScript and CSS** files. 

The basic steps would involve:

1. **Importing** the files and placing them in the appropriate folder.
2. Making an entry in the **index.html** file giving the location of the files imported.
3. Using the imported files, via **script** in your application.

We will explain the process with the help of an example. We want to add a multiple date selection facility to our application. The current calendar widget allows selection of a single date. 

We will use [MultiDatesPicker v1.6.3](/learn/assets/MultiDatesPicker-v1.6.3.zip) jQuery UI downloaded from [http://multidatespickr.sourceforge.net/](http://multidatespickr.sourceforge.net/). 

We will also be needing [jquery-ui-1.12.0.custom](/learn/assets/jquery-ui-1.12.0.custom.zip) file. Download and unzip both the files. 

## Importing Files 

From **Developer Utilities**, select File Explorer and **Import Resource**. We need to import two files:
    1. a **js file** - `jquery-ui.multidatespicker.js` with the code and
    2. a **CSS file** - `mdp.css` for the UI. The js file will be placed in the `resources/javascript` folder and the CSS file in the `resources/css` folder. Create the appropriate folders 
    
[![](/learn/assets/js_import.png)](/learn/assets/js_import.png)

## Specify Paths

In the _index.html_ file make the following entries specifying the path for script and CSS files:
    
[![](/learn/assets/js_index.png)](/learn/assets/js_index.png)

- On the main page mark the position for the display of the date-picker using a `div` tag.
    
[![](/learn/assets/js_markup.png)](/learn/assets/js_markup.png) 

## Scripting

In the script tab attach the `mulitdatespicker` function from the js file imported to the `div` created

```    
    $(function() {
                    $('#multidatepicker').multiDatesPicker();
                });
```    

[![](/learn/assets/js_script.png)](/learn/assets/js_script.png)

When you run the application you will see the calendar displayed and you can select multiple dates.

