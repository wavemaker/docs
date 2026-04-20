---
title: "Setting partial page content for Panel within a List using JavaScript"
id: "setting-partial-page-content-panel-within-list-using-javascript"
---
---

We will see how the content of a Panel can be set to a Partial Page. We will be embedding the Panel within a List and use JavaScript to trigger the loading of the Partial Page content.
```
$scope.panel1Expand = function($event, $isolateScope, item, currentItemWidgets) {
    debugger;
    _.forEach($('[name="livelist1"]> ul .app-panel'), function(object) {
        $(object).isolateScope().expanded = false;
    });
    currentItemWidgets.panel1.expanded = true;
    $scope.$apply();
};
```
<iframe width="708" height="427" src="https://docs.google.com/presentation/d/1pJcuFSUwqWW35_M9leOSNEPy_GIADPo9jqCcw7KmpJE/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
