---
title: "Using JavaScript from External URL"
id: "using-javascript-external-url"
---
---

## Loading external JS libraries

For example, a custom Demo Spinner.

```js
/* perform any action on widgets/variables within this block */

Page.onReady = function () {
    // For Setting values for External Spinner
    var opts = {
        lines: 15,
        length: 28,
        width: 14,
        radius: 42,
        scale: 1,
        corners: 1,
        color: '#000',
        opacity: 0.25,
        rotate: 0,
        direction: 1,
        speed: 1,
        trail: 60,
        fps: 20,
        zIndex: 2e9,
        className: 'spinner',
        top: '50%',
        left: '50%',
        shadow: false,
        hwaccel: false,
        position: 'absolute'
    };

    var target = document.getElementById('Demo');
    var spinner = new Spinner(opts).spin(target);
};
```

## Using an external url to load the JS file

`//cdnjs.cloudflare.com/ajax/libs/spin.js/1.2.7/spin.min.js`

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRzlGIdapsL_dzJ9eqfK_yZmkPUU9fjDTUojej4EdItrQOumE80U-DjbxGLl5QrF1WmWZLEGG_BJHBj/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" width="708" height="560" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## See Also

[How to use JavaScript to Use Expressions for Binding](/learn/how-tos/using-javascript-binding/)  
[How to load JavaScript from external URLs](/learn/how-tos/using-javascript-external-url/)  
[How-To insert/update multiple rows in a database using a FOR loop in JavaScript](/learn/how-tos/using-javascript-loop-command/)  
