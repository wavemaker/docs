---
title: "Drag And Drop Prefab"
id: ""
---
---

Drag And Drop prefab is used in the case when the user needs to re-arrange the widgets in Page or place the widgets according to his preference.This prefab can be used to make an element or wavemaker widget draggable and droppable into another element.

#### Use-Cases
1. Let assume the user has the trailer truck for loading and different sizes of containers. In this case he can drag and drop the containers to the trailer truck to choose the best match.

<figure class="video_container">
  <video controls="true" allowfullscreen="true" width="500" height="300" >
    <source src="/learn/assets/dragndroptrailer.mp4" type="video/mp4">
  </video>
</figure>

2. Let assume the user has a list of tasks in to-do list he can easily drag and drop the task from to-do list to In-progress or Done state.

<figure class="video_container">
  <video controls="true" allowfullscreen="true" width="500" height="300" >
    <source src="/learn/assets/dragdropkanban_1.mp4" type="video/mp4">
  </video>
</figure>

## Prefab Properties
| **Property Name** |**Property Type**| **Property Description** | **Remarks/sample values** |
| --- | --- | --- | --- |
| Draggable Widget | Array | Mention the draggable | [“draggableWidgetName”] |
| Droppable Widget | Array | Mention the droppable | [“droppableWidgetName”] |

## Prefab Events
In this prefab, we have two events.
 1. On Load: Callback action will be triggered on the loading of the prefab.
 2. On Destroy: Callback action will be triggered on destroying the prefab.
![/learn/assets/dragndrop_image4.png](/learn/assets/dragndrop_image4.png) 


## How to use this prefab

1. Download the [prefab](https://github.com/nageshl/prefab-dragndrop) and [import](/learn/app-development/custom-widgets/prefabs-overview#importing-prefabs) into your WaveMaker project.

    
2. After importing the prefab in to the application it will available under prefab section.
![/learn/assets/dragndrop_image5.png](/learn/assets/dragndrop_image5.png)

3. Drag the Prefab into the Page in Application.
![/learn/assets/dragndrop_image2.png](/learn/assets/dragndrop_image2.png)

4. Bind the Draggable and Droppable Widget names in the input attributes of prefab in page.
![/learn/assets/dragndrop_image6.png](/learn/assets/dragndrop_image6.png)

### Using Drag and Drop Prefab in Application example

The below example shows the UI screen and output object from the prefab.


1.  Below is the droppale element i.e.,Container widget(chasis1Contianer), and the grid layout inside the container.



![/learn/assets/dragndrop_image13.png](/learn/assets/dragndrop_image13.png)



2. Below is the draggable element i.e.Card widget(contianerCard)



![/learn/assets/dragndrop_image14.png](/learn/assets/dragndrop_image14.png)



3. Place the Darg And Drop Prefab and give the properties to the prefab.


![/learn/assets/dragndrop_image1.png](/learn/assets/dragndrop_image1.png)


#### Preview the Application.


- Initial Preview screen

![/learn/assets/dragndrop_image7.png](/learn/assets/dragndrop_image7.png)

- Drag one container and drop into traier_1

![/learn/assets/dragndrop_image10.png](/learn/assets/dragndrop_image10.png)

- Final screen

![/learn/assets/dragndrop_image9.png](/learn/assets/dragndrop_image9.png)


## Known Issue

1. Prefab does not use inside List/Data table.


## Other Prefabs

1. [Use Box Viewer to view Office documents in browser](/learn/app-development/widgets/prefab/box-viewer-prefab)


