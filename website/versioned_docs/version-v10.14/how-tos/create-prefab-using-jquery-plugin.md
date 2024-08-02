---
title: "Create Prefab using JQuery Plugin"
id: "create-prefab-using-jquery-plugin"
---
---
This post walks you through the creation and usage of a Prefab using JQuery Plugin. This is to showcase the use of Events and Methods in a Prefab.

Let us create a simple Prefab named TreeView which is interactive. We are going to use a JQuery plugin named `jsTree`. jsTree is a JQuery plugin, that provides interactive trees. jsTree is easily extendable, theme-able and configurable, it supports HTML & JSON data sources and AJAX loading.

## Creating the Prefab

From the **Project Dashboard**, go to the **Prefab** tab and click **Create**.

![create prefab](/learn/assets/prefab_create.png)

Enter a name and description of the Prefab. For example, TreeView2.

### Download files

Download the jsTree JQuery Plugin from [https://www.jstree.com/](https://www.jstree.com/). Unzip the file downloaded and use the files from the dist folder.

![jstree_prefab_download](/learn/assets/jstree_prefab_download.png)

From [File Explorer](/learn/app-development/services/3rd-party-libraries) add the JS and CSS files from the downloaded dist folder. Here we have created a folder `jsTree` to hold the same structure as the dist folder. 

![jstree_prefab_import](/learn/assets/jstree_prefab_import.png)

### Project Configuration

1. Click **Config Prefab** from the **Settings** dropdown.

![prefab project config](/learn/assets/prefab-project-config.png)

2. In the **Resources** tab, choose the css and js files. 

![jstree_prefab_resources](/learn/assets/jstree_prefab_resources.png)

3. In the **Properties** tab, add an **inbound** property as an object, array (type if not selectable) which should consist of parent and child node names: 

![jstree_prefab_inbound](/learn/assets/jstree_prefab_inbound.png)

4. In the **Events** tab, add events to be triggered when a node is Selected, Deselected, Expanded or Collapsed. 

:::note
By default, two events are already given - Load and Destroy.
:::

![jstree_prefab_events](/learn/assets/jstree_prefab_events.png)

5. In the **Methods** tab, add the following methods:
    
- **SelectNode**: Method to select a node
    - Parameters: Node, Type: any
    - Return type: void
- **Redraw**: Method to redraw the whole tree
    - Return type: void
- **selectAllNodes**: Method to select all Nodes
    - Return type: void
- **deselectAllNodes**: Method to deselect all nodes
    - Return type: void
- **deselectNode**: Method to deselect a node
    - Parameters: Node, Type: any
    - Return type: void
    
![jstree_prefab_methods](/learn/assets/jstree_prefab_methods.png)

## Custom Functions

Once these properties, methods, and events are added to Prefab configuration in the Prefab Script the Method snippets will be auto-generated. You can fill with the code for the same.

![jstree_prefab_script](/learn/assets/jstree_prefab_script.png)

The following is the script for all methods.

### Declare a variable

```js
var treeMapInstance;

Property Change event:

Prefab.onPropertyChange = function(key, newVal, oldVal) {
    switch (key) {
        case "treedata": //UI Property for the node array
            initJStreeView();
            break;
        case "multiple":
        case "dots":
            _redraw();
            break;
    }
};
```

### Function to initialize the tree view

```js
function initJStreeView() {
    var treeViewELe = Prefab.Widgets.treeViewContainer.$element;
    treeViewELe.jstree({
        core: {
            multiple: true,
            themes: {
                dots: true,
            },
            data: Prefab.treedata
        }
    });
    treeMapInstance = Prefab.Widgets.treeViewContainer.$element.jstree(true);
    // treeViewELe.on("changed.jstree", function(node, action, selected, event) {
    //     console.log("The selected nodes are:");
    //     console.log(action.selected);
    // });

    // select event
    treeViewELe.on("select_node.jstree", function(e, data) {
        Prefab.onSelect(e, data);
    });

    // deselect event
    treeViewELe.on("deselect_node.jstree", function(e, data) {
        Prefab.onDeselect(e, data);
    });

    // expand event
    treeViewELe.on("open_node.jstree", function(e, data) {
        Prefab.onExpand(e, data);
    });

    // collapse event
    treeViewELe.on("close_node.jstree", function(e, data) {
        Prefab.onCollapse(e, data);
    });
}
```

### Function to redraw the tree view

```js
    function _redraw() {
        if (treeMapInstance) {
            treeMapInstance.redraw();
        }
    }

    Methods for the tree:

    /*
     * Method to select all nodes
     */
    Prefab.selectAllNodes = function() {
        if (treeMapInstance) {
            treeMapInstance.select_all();
        }
    };

    /*
     * Deselect all nodes
     */
    Prefab.deselectAllNodes = function() {
        if (treeMapInstance) {
            treeMapInstance.deselect_all();
        }
    };

    /*
     * Method for selecting a node in the tree by id.
     * preventOpen: If set to true parents of the selected node won't be opened
     */
    Prefab.selectNode = function(node, preventOpen) {
        if (treeMapInstance) {
            treeMapInstance.select_node(node, false, preventOpen);
        }
    };

    /*
     * Method for deselecting a node in the tree.
     */
    Prefab.deselectNode = function(node) {
        if (treeMapInstance) {
            treeMapInstance.deselect_node(node);
        }
    };

    /*
     * Re Draws the whole tree
     */
    Prefab.redraw = function() {
        _redraw();
    }
```

### Add Container tag

Add a `wm-container tag` with the name **treeViewContainer** in the Markup, as follows:

```js
<wm-container name="treeViewContainer"></wm-container>
```

![jstree_prefab_html](/learn/assets/jstree_prefab_html.png)

## Publish the Prefab

1. Save and **Publish** the Prefab.
2. You can set the version for the Prefab and Publish it. For more information about publishing Prefabs, see [Publish Prefab](/learn/app-development/custom-widgets/creating-prefabs/#publish-prefab).
3. The Prefab will be available for use across the Projects. You can see the entry in the [Artefacts](/learn/assets/artefacts_access.png) list and in the Widget Toolbox of any Project within your workspace.

## Using the Prefab in Project

1. Let us now use the above-created Prefab in an application.
2. We are using the WaveMaker non-enterprise version and have Published the Prefab to Workspace.
3. Create or Open an application.
4. You can see the Prefab in the Prefab Listing.
5. On the Main page drag and drop the TreeView2 Prefab.

![jstree_prefab_appdnd](/learn/assets/jstree_prefab_appdnd.png)

### Invoking Prefab Methods in Project

The prefab has exposed methods which can be triggered by the application as shown below.

1. To call the exposed methods, drag and drop **four Button Widgets** in the main page under the Prefab and give the **captions** for the buttons as `SELECT ALL`, `SELECT NODE`, `DESELECT NODE` and `DESELECT ALL`. We have **named** the buttons as `selectAll`, `selectNode`, `deselectNode` and `deselectAll`.
2. Create an `On Click` event for each button. 

![jstree_prefab_appmethods](/learn/assets/jstree_prefab_appmethods.png)

3. This will create the snippet for the `<button>Click` event in the script tab of the main page in the application.
4. The code for the `<button>Click` event will call the exposed methods respectively.

:::note
Check the name of the Button widget, it might be different if you have not named them as mentioned in step 1. Ensure that the Prefab name matches what you have in your project.
:::

```js
Page.selectAllClick = function($event, widget) {
    Page.Widgets.TreeView21.selectAllNodes();
    alert("Selected All Nodes");
};
Page.selectNodeClick = function($event, widget) {
    Page.Widgets.TreeView21.selectNode(2);
    alert("Selected second Node");
};

Page.deselectNodeClick = function($event, widget) {
    Page.Widgets.TreeView21.deselectNode(2);
    alert("DeSelected second Node");
};

Page.deselectAllClick = function($event, widget) {
    Page.Widgets.TreeView21.deselectAllNodes();
    alert("DeSelected All Nodes");
};
```

![jstree_prefab_appscript](/learn/assets/jstree_prefab_appscript.png)

### Invoking Prefab Events in Project

The events are also exposed on the events tab and you can create actions for each of them.

![jstree_prefab_appevents](/learn/assets/jstree_prefab_appevents.png)

Here we have created Notification Action to be displayed for each of the Event:

- **selectAction** for `On Select` - Create a Notification Action and when any node is selected, it will give a callback as a notification with the text “Node Selected”
- **collapseAction** for `On collapse` - Create a Notification Action and when nodes are collapsed, it will give a callback as a notification with the text “Nodes Collapsed”
- **expandAction** for `On expand` - Create a Notification Action and when nodes are expanded it will give a callback as a notification with the text “Nodes expanded”
- **deselectAction** for `On deselect` - Create a Notification Action and when any node is deselected, it will give a callback as a notification with the text “Node DeSelected” 

![jstree_prefab_appnotification](/learn/assets/jstree_prefab_appnotification.png)

The Prefab application can also add an Event listener for an event and take some appropriate action once the event happens.

### Passing Data to Prefab in Project

Finally, this Prefab needs data to render in the Tree format.

1. For this, we have created a Model Variable with the following JSON structure:

```js
[
    {
    "id": 1,
    "text": "Root node",
    "state": {
        "opened": true
    },
    "icon": "",
    "type": [],
    "children": [
        {
        "id": 2,
        "text": "Child node 1",
        "state": {
            "selected": true
        },
        "icon": "glyphicon glyphicon-flash"
        },
        {
        "id": 3,
        "text": "Child node 2",
        "children": [
            {
            "id": 4,
            "text": "Child node 2 - 1",
            "state": {
                "opened": true
            },
            "icon": "",
            "type": [],
            "children": [
                {
                "id": 5,
                "text": "Child node 2 - 1 - 1",
                "state": {
                    "selected": true
                },
                "icon": "glyphicon glyphicon-flash"
                },
                {
                "id": 6,
                "text": "Child node 2 - 1 - 1",
                "icon": "glyphicon glyphicon-flash"
                }
            ]
            }
        ]
        },
        {
        "id": 7,
        "text": "Child node 3",
        "state": {
            "selected": true
        },
        "icon": "glyphicon glyphicon-flash"
        }
    ]
    }
]
```

![stree_prefab_appvar](/learn/assets/jstree_prefab_appvar.png)

2. Bind the above Variable to the Tree Data property of the Prefab: 

![jstree_prefab_appdata](/learn/assets/jstree_prefab_appdata.png) 

![jstree_prefab_appbind](/learn/assets/jstree_prefab_appbind.png)

3. Run the app and see the Prefab in action 

![jstree_prefab_apprun](/learn/assets/jstree_prefab_apprun.png)

[Prefab Use Cases](/learn/app-development/widgets/use-cases-prefabs/)

- [1. Prefab to compare two strings](/learn/how-tos/create-simple-prefab/)
- [2. Prefab using 3rd Party UI Widgets](/learn/how-tos/create-prefab-using-third-party-ui-widgets/)
- [3. Prefab Using D3 & NVD3 Charts](/learn/how-tos/create-prefab-using-d3-nvd3-charts/)
- [4. Prefab Using D3 Library (DataMaps)](/learn/how-tos/create-prefab-using-d3-library-datamaps/)

