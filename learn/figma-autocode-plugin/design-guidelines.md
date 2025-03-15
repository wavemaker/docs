---
id: "design-guidelines"
title: "Figma Autocode Design Guidelines - Best Practices"
sidebar_label: "Design Guideline"
---
---
# Design Guidelines for AutoCode-Ready Designs

When designing in Figma for the Wavemaker AutoCode plugin, following these guidelines will help ensure that the generated code accurately reflects the design. Keeping these points in mind will lead to an expected output with minimal adjustments in the development phase.

## Proper Use of Auto Layout

Auto Layout organizes elements into responsive hierarchies, ensuring better behavior during conversion. This is especially important in complex designs. To simplify this process, try Figma’s Suggest Auto Layout feature.

The image below shows where to find Figma Auto Layout. If it's not there, search the   help menu for Auto Layout and select Add Auto Layout.

![finding auto layout in figma canvas](/learn/assets/find_autolayout.png)

Below are some of the suggestions on using auto layout.

* If the parent frame has only one child frame, set the child layout to either center-center or top-center. This ensures proper alignment and structure. The examples below highlight child frames (pink border) aligned in the center within parent frames (blue border).

![examples of single child alignment inside frame with auto layout](/learn/assets/one_child.png)

![prefered alignments for single child frames](/learn/assets/alignment_center_top.png)

* When a child element needs to match the width of its parent frame, set its width to "Fill". Example: In the image below, the Text Field width is set to "Fill," ensuring it occupies the entire width of the parent frame (blue border). Fixed widths are treated as fixed sizes and will not adjust to different screen sizes.

![fill width example](/learn/assets/form_fill_width.png)

* For certain elements on a page, height and width are dynamically calculated based on the screen resolution. This applies to components like navigation bars, containers holding lists of cards, etc. Since these containers adapt to screen size, the gap between their child elements cannot be fixed and should be set to Auto instead. The image below illustrates this scenario.

![fill width example](/learn/assets/auto_exmpl.png)

## Instance Properties

Ensure instance properties are applied at the correct level in the tree structure, not just at the top level. 
For example, in the first image below, the background color is applied at the topmost layer of the Tab Component instance. However, in the original UI kit, it should be applied at the second layer (State Layer), as shown in the second image.

![example of incorrect application of instance property](/learn/assets/properties_wrong_border.png)

![example of correct application of instance property](/learn/assets/properties_right_border.png)

## Avoid Unnecessary Children
Minimize nested frames or groups whenever possible. For example: Instead of adding a rectangle inside a frame for background image, directly apply it to the frame itself. 

![example of unnecessary child element](/learn/assets/nested_child_wrong.png)

![example of how to avoid unnecessary child element](/learn/assets/nested_child_right.png)

In the first image above, notice the Fill property of the frame—no background is applied directly to it. Instead, a separate rectangle inside the frame holds the background image, which is incorrect.In the second image, the Fill property of the selected frame directly contains the background image, which is the correct approach. This ensures a cleaner structure and proper rendering in the generated code.

As a rule of thumb, if you're creating a unit solely to add a single property, try applying that property to the parent element instead.

## Images as Fills

Do not turn images into components. Instead, use images as fills inside frames.

## Vectors for Icons Only

Use vectors exclusively for icons and avoid using them for other design elements.

## Logos

Use images or SVGs for logos. Include the word logo in the name. If logos are components, ensure the component name also contains the word logo.

## Color Management

Use colors from local variables or local styles. Do not apply random colors without first defining them in local variables or styles.

![example correct way of using colors](/learn/assets/proper_use_color.png)

## Figma API Issue with Hidden Elements

If a vector, image, or logo exceeds the defined page bounds, Figma may fail to export the “hidden” element as an SVG. To resolve this, increase the page height in Figma to include the element.






