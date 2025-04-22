---
title: "Customizing Theme"
id: "customizing-theme"
---
---

:::note
Before trying to customize the app Theme, it is recommended that you familiarise with the [Theme Implementation Process](/learn/app-development/ui-design/creating-themes) regarding the build and [How to Import and Apply](/learn/app-development/ui-design/themes/#import-and-apply-custom-themes) theme in a WaveMaker app.
:::

## Changing the background of an application

- Edit _variables.less_ and update the value for **@body-bg**.

## Using web fonts in a theme

- To use the **web fonts** in the theme, copy the web fonts(.ttf, .eot, woff) in the font folder and include the font definition in variable.less.

```css
@font-face 
{
    font-family: 'robotoregular';
    src: url('fonts/Roboto-Regular-webfont.eot');
    src: url('fonts/Roboto-Regular-webfont.eot?#iefix') format('embedded-opentype'),
    url('fonts/Roboto-Regular-webfont.woff') format('woff'),
    url('fonts/Roboto-Regular-webfont.ttf') format('truetype'),
    url('fonts/Roboto-Regular-webfont.svg#robotoregular') format('svg');
}
```
 
- Once the font definitions are added the same need to be applied. For this change the font family specifications in the variable.less to point to the above-defined font family name (robotoregular, in this case). Note the second font family name (Arial, in this case) will be the fallback option.

```css
//== Typography
//
//## Font, line-height, and color for body text, headings, and more.

@font-family-sans-serif:  'robotoregular', 'Arial', sans-serif;
@font-family-serif:       'robotoregular', 'Arial', sans-serif;
//** Default monospace fonts for `<code>`, `<kbd>`, and `<pre>`.
@font-family-monospace:   'robotoregular', 'Arial', sans-serif;
@font-family-base:        @font-family-sans-serif;
```

## Style the Components of WaveMaker App

WaveMaker app (Web & Mobile) theme is based on the BootStrap CSS markup. The various components can be styled using the corresponding Bootstrap classes defined in the LESS files. In the following sections the various app components and the style properties are listed along with the class name and the file where the class is defined. Use these to make styling changes. Remember to [build, import and re-apply the theme](/learn/app-development/ui-design/themes/) to enforce the changes.

:::note
Some of Bootswatch themes might not have all these variables defined.
:::

## Style Header Element

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Header |  | .app-header |  |  |
| Background Color | style.less |  | @wm-header-bg-color | #2196f3 |
| Border Color | style.less |  | @wm-header-border-color | #ffeb3b |
| Height | style.less |  | @wm-header-height | auto |
| Text Color | style.less |  | @wm-header-text-color | #fff |

## Style Footer Element

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Footer |  | .app-footer |  |  |
| Background Color | style.less |  | @wm-footer-bg-color | #F5F7FA |
| Border Color | style.less |  | @wm-footer-border-color | #ccc |
| Height | style.less |  | @wm-footer-height | auto |
| Text Color | style.less |  | @wm-footer-text-color | #F5F7FA |

## Style topnav Element

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| TopNav |  | .app-top-nav |  |  |
| Background Color | variables.less |  | @navbar-default-bg | #2090EA |
| Background Hover Color | variables.less |  | @navbar-default-hover-bg | transparent |
| Border Color | variables.less |  | @navbar-default-border | transparent |
| Text Color | variables.less |  | @navbar-default-color | #000 |

## Style leftnav Element

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Left Navigation |  | .app-left-panel |  |  |
| Background Color | style.less |  | @wm-left-panel-bg | #fff |
| Background Hover color | style.less |  | @wm-left-panel-link-hover-bg | #F4F4F4 |
| Border Color | style.less |  | @wm-left-panel-border-color | #CFDBE2 |
| Link Border | style.less |  | @wm-left-panel-list-border | #e6e5e5 |
| Link Hover Border | style.less |  | @wm-left-panel-link-hover-border-color | transparent |
| Link Text Color | style.less |  | @wm-left-panel-link-color | #4f5256 |
| Link Hover Text | style.less |  | @wm-left-panel-link-hover-text-color | inherit |
| Active Link Background Color | style.less |  | @wm-left-panel-link-active-bg | #f7f7f7 |
| Dropdown Background Color | style.less |  | @wm-left-panel-dropdown-menu-bg | transparent |

## Style rightnav element

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Right Navigation |  | .app-right-panel |  |  |
| Background Color | style.less |  | @wm-right-panel-bg | #fff |
| Border Color | style.less |  | @wm-right-panel-border-color | #CFDBE2 |
| Link Text Color | style.less |  | @wm-right-panel-btn-color | #515253 |
| Link Border | style.less |  | @wm-right-panel-list-border | #e6e5e5 |

## Style Cards Widget

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Cards |  | .app-card |  |  |
| Header Background Color | style.less | .app-card-header | - | transparent |
| Text Color | style.less | .card-title | - | #333 |

## Style Data Table Widget

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Data tables |  | .table |  |  |
| Background Color | variables.less |  | @table-bg | #fff |
| Border Color | variables.less |  | @table-border-color | #eee |
| Background Hover Color | variables.less |  | @table-bg-hover | #eee |
| Background Active Color | variables.less |  | @table-bg-active | #eee |
| Header Background Color | style.less |  | @table-header-bg | #fff |

## Style List Widget

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| List |  | .app-livelist-container |  |  |
| Background Color | variables.less | .list-group-item | @list-group-bg | #fff |
| Border Color | variables.less | .list-group-item | @list-group-border | #ddd |
| Border Radius | variables.less | .list-group-item | @list-group-border-radius | 2px |
| Background Hover Color | variables.less | .list-group-item | @list-group-hover-bg | #f5f5f5 |
| Active Text Color | variables.less | .list-group-item | @list-group-active-color | #fff |
| Active Background Color | variables.less | .list-group-item | @list-group-active-bg | #fff |
| Active Border Color | variables.less | .list-group-item | @list-group-active-border | #448AFF |
| Content Items Active Text Color | variables.less | .list-group-item | @list-group-active-text-color |#448AFF|
| Disabled Text Color | variables.less | .list-group-item | @list-group-disabled-color | #777 |
| Disabled Background Color | variables.less | .list-group-item | @list-group-disabled-bg | #ddd |
| Content Items Disabled Text Color | variables.less | .list-group-item | @list-group-disabled-text-color |#777 |
| Link Text Color | variables.less |  | @list-group-link-color | #555 |
| Link Hover Color | variables.less |  | @list-group-link-hover-color | #555 |
| Heading Text Color | variables.less |  | @list-group-link-heading-color | #333 |

## Style Pagination of Live Widgets

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Pagination |  | .app-datanavigator |  |  |
| Text Color | variables.less | .basic | @pagination-color | #333 |
| Background Color | variables.less |  | @pagination-bg | #fff |
| Border Color | variables.less |  | @pagination-border | #ddd |
| Hover Text Color | variables.less |  | @pagination-hover-color | #448AFF |
| Hover Background Color | variables.less |  | @pagination-hover-bg | #ddd |
| Hover Border Color | variables.less |  | @pagination-hover-border | #ddd |
| Active Text Color | variables.less |  | @pagination-active-color | #fff |
| Active Background Color | variables.less |  | @pagination-active-bg | #448AFF |
| Active Border Color | variables.less |  | @pagination-active-border | #fff |
| Disabled Text Color | variables.less |  | @pagination-disabled-color | #777 |
| Disabled Background Color | variables.less |  | @pagination-disabled-bg | #fff |
| Disabled Border Color | variables.less |  | @pagination-disabled-border | #ddd |
|  |  | .pager |  |  |
| Background Color | variables.less |  | @pager-bg | #fff |
| Border Color | variables.less |  | @pager-border | #ddd |
| Border Radius | variables.less |  | @pager-border-radius | 30px |
| Hover Background Color | variables.less |  | @pager-hover-bg | #ddd |
| Active Background Color | variables.less |  | @pager-active-bg | #448AFF |
| Active Border Color | variables.less |  | @pager-active-color | #fff |
| Disabled Text Color | variables.less |  | @pager-disabled-color | #777 |

## Style Accordion Widget

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Accordion |  | .app-accordion |  |  |
| Background Color | style.less | .app-accordion-panel | - | #fff |
| Heading Background Color | style.less | .panel-heading |  | transparent |

## Style Panel Widget

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Panel |  | .panel |  |  |
| Background Color | variables.less |  | @panel-bg | #fff |
| Body Padding | variables.less |  | @panel-body-padding | 10px |
| Border Color | variables.less |  | @panel-inner-border | #f0f0f0 |
| Footer Background Color | variables.less |  | @panel-footer-bg | #fff |
| Footer Padding | variables.less |  | @panel-footer-padding | 5px |

## Style Tabs Widget

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Tabs |  | .app-tabs |  |  |
| Background Color | variables.less | .nav-tabs | @nav-tabs-bg | #fff |
| Text Color | variables.less |  | @nav-tabs-color | #7a7a7a |
| Border Color | variables.less |  | @nav-tabs-border-color | #ddd |
| Link Padding | variables.less |  | @nav-link-padding | 12px |
| Link Active Hover Background Color | variables.less |  | @nav-tabs-active-link-hover-bg | transparent |
| Link Active Hover Text Color | variables.less |  | @nav-tabs-active-link-hover-color | #333 |
| Link Active Hover Border Color | variables.less |  | @nav-tabs-active-link-hover-border-color | #ddd |
| Disabled Link color | variables.less |  | @nav-disabled-link-color | #777 |
| Disabled Link Hover Color | variables.less |  | @nav-disabled-link-hover-color | #777 |

## Style Wizard Widget

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Wizard |  | .app-wizard |  |  |
| Background Color | style.less |  | - | #fff |
| Heading Background Color | style.less | .app-wizard-heading | - | transparent |
| Current Step Title Color | style.less | .step-title | - | #448AFF |
| Active Step Background Color | style.less | .app-wizard-step.active a | - | #448AFF |
| Active Step Text Color | style.less | .app-wizard-step.active a | - | #fff |

## Style Button Widget

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Buttons |  | .btn |  |  |
| Text Color | variable.less | .btn-default | @btn-default-color | #5e5e5e |
| Background Color | variable.less |  | @btn-default-bg | #fff |
| Border Color | variable.less |  | @btn-default-border | #ECEFF1 |
| Primary Button Text Color | variable.less | .btn-primary | @btn-primary-color | #fff |
| Primary Button Background Color | variable.less |  | @btn-primary-bg | #448AFF |
| Primary Button Border Color | variable.less |  | @btn-primary-border | #448AFF |
| Text Color | variable.less | .btn-success | @btn-success-color | #fff |
| Background Color | variable.less |  | @btn-success-bg | #4CAF50 |
| Border Color | variable.less |  | @btn-success-border | #4CAF50 |
| Text Color | variable.less | .btn-info | @btn-info-color | #fff |
| Background Color | variable.less |  | @btn-info-bg | #03A9F4 |
| Border Color | variable.less |  | @btn-info-border | #03A9F4 |
| Text Color | variable.less | .btn-warning | @btn-warning-color | #fff |
| Background Color | variable.less |  | @btn-warning-bg | #FFB300 |
| Border Color | variable.less |  | @btn-warning-border | #FFB300 |
| Text Color | variable.less | .btn-danger | @btn-danger-color | #fff |
| Background Color | variable.less |  | @btn-danger-bg | #F44336 |
| Border Color | variable.less |  | @btn-danger-border | #F44336 |
| Disabled Text Color | variable.less |  | @btn-link-disabled-color | transparent |

## Style Calendar Widget

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Calendar |  |  |  |  |
| Text Color | style.less | .app-calendar | @wm-calendar-text-color | #ccc |
| Current Date Text Color | style.less | .fc-today | - | #448AFF |

## Style Date Widget

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Date Picker |  | .app-date |  |  |
| Text Color | style.less | thead | @wm-datepicker-text-color | #000 |
| Header Background Color | style.less | thead | @wm-datepicker-header-bg | #128ff2 |
| Date Text Hover Background Color | style.less | .btn | @wm-datepicker-btn-hover-bg | #f0f0f0 |

## Style Switch & Toggle Widget

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Switch |  | .app-switch |  |  |
| Border Color | style.less | .btn | - | #ddd |
| Active Background Color | style.less | .app-switch-overlay | - | #448AFF |

## Style Text Widget

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Text |  |  |  |  |
| heading 1 | variables.less | .h1 | @font-size-h1 | 36px |
| heading 2 |  | .h2 | @font-size-h2 | 30px |
| heading 3 |  | .h3 | @font-size-h3 | 24px |
| heading 4 |  | .h4 | @font-size-h4 | 18px |
| heading 5 |  | .h5 | @font-size-h5 | 13px |
| heading 6 |  | .h6 | @font-size-h6 | 12px |
| Default Background Color | variables.less | .label-default | @label-default-bg | #777 |
| Primary Background Color | variables.less | .label-primary | @label-primary-bg | #448AFF |
| Success Background Color | variables.less | .label-success | @label-success-bg | #4CAF50 |
| Info Background Color | variables.less | .label-info | @label-info-bg | #03A9F4 |
| Warning Background Color | variables.less | .label-warning | @label-warning-bg | #FFB300 |
| Danger Background Color | variables.less | .label-danger | @label-danger-bg | #F44336 |
| Default Text Color | variables.less |  | @label-color | #fff |
| Muted Text | variables.less | .text-muted | @text-muted | #777 |
| Label Link Hover Text Color | variables.less |  | @label-link-hover-color | #fff |

## Style Message Widget

This is the widget used to display the [Notification messages](/learn/app-development/variables/notification-action/) in WaveMaker Apps.

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Alert |  | .alert |  |  |
| Padding | variables.less |  | @alert-padding | 8px |
| Border Radius | variables.less |  | @alert-border-radius | 2px |
| Font Weight | variables.less |  | @alert-link-font-weight | bold |
| Success Alert Backgorund Color | variables.less | .alert-success | @alert-success-bg | #4CAF50 |
| Success Alert Text Color | variables.less |  | @alert-success-text | #fff |
| Success Alert Border Color | variables.less |  | @alert-success-border | #4CAF50 |
| Info Alert Backgorund Color | variables.less | .alert-info | @alert-info-bg | #03A9F4 |
| Info Alert Text Color | variables.less |  | @alert-info-text | #fff |
| Info Alert Border Color | variables.less |  | @alert-info-border | #03A9F4 |
| Warning Alert Backgorund Color | variables.less | .alert-warning | @alert-warning-bg: | #FFB300 |
| Warning Alert Text Color | variables.less |  | @alert-warning-text | #fff |
| Warning Alert Border Color | variables.less |  | @alert-warning-border | #FFB300 |
| Danger Alert Backgorund Color | variables.less | .alert-danger | @alert-danger-bg | #F44336 |
| Danger Alert Text Color | variables.less |  | @alert-danger-text | #fff |
| Danger Alert Border Color | variables.less |  | @alert-danger-border | #F44336 |

## Style Progress Bar Widget

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Progress Bar |  | .app-progress |  |  |
| Background Color | variables.less |  | @progress-bg | #f5f5f5 |
| Text Color | variables.less |  | @progress-bar-color | #fff |
| Border Radius | variables.less |  | @progress-border-radius | 2px |
| Default Progress Bar | variables.less |  | @progress-bar-bg | #448AFF |
| Success Progress Bar | variables.less |  | @progress-bar-success-bg | #4CAF50 |
| Warning Progress Bar | variables.less |  | @progress-bar-warning-bg | #FFB300 |
| Danger Progress Bar | variables.less |  | @progress-bar-danger-bg | #F44336 |
| Info Progress Bar | variables.less |  | @progress-bar-info-bg | #03A9F4 |

## Style Spinner Widget

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Spinner |  | .app-spinner |  |  |
| Background Color | style.less |  | - | transparent |
| Text Color | style.less | .spinner-text | - | #448AFF |
| Icon Color | style.less | .spinner-image | - | #448AFF |

## Style Dropdown Menu Widget

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Menu |  | .dropdown |  |  |
| Dropdown Menu | variables.less |  | @dropdown-bg | #fff |
| Border Color | variables.less |  | @dropdown-border | #ECEFF1 |
| Caret color | variables.less |  | @dropdown-caret-color | #000 |
| Link Color | variables.less |  | @dropdown-link-color | #333 |
| Link Hover Color | variables.less |  | @dropdown-link-hover-color | #000 |
| Link Hover Background Color | variables.less |  | @dropdown-link-hover-bg | #f5f5f5 |
| Link Active Color | variables.less |  | @dropdown-link-active-color | #fff |
| Link Active Background Color | variables.less |  | @dropdown-link-active-bg | #448AFF |
| Link Disabled Color | variables.less |  | @dropdown-link-disabled-color | #777 |

## Style Navbar Widget

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Navbar |  | .app-navbar |  |  |
| Background Color | variables.less |  | @navbar-default-bg | #2090EA |
| Text Color | variables.less |  | @navbar-default-color | #777 |
| Border Color | variables.less |  | @navbar-default-border | transparent |
| Height | variables.less |  | @navbar-height | 50px |
| Margin | variables.less |  | @navbar-margin-bottom | 0px |
| Border Radius | variables.less |  | @navbar-border-radius | 2px |
| Padding Horizontal | variables.less |  | @navbar-padding-horizontal | 8px |
| Padding Vertical | variables.less |  | @navbar-padding-vertical | 4px |
| Brand Text Color | variables.less |  | @navbar-default-brand-color |  |
| Brand Hover Color | variables.less |  | @navbar-default-brand-hover-color |  |
| Brand Hover Background Color | variables.less |  | @navbar-default-brand-hover-bg |  |
| Inverse Navbar Text Color | variables.less | .navbar-inverse | @navbar-inverse-color | #ccc |
| Inverse Navbar Background Color | variables.less |  | @navbar-inverse-bg | #222 |
| Inverse Navbar Border Color | variables.less |  | @navbar-inverse-border | #000 |
| Inverse Navbar Link Text Color | variables.less |  | @navbar-inverse-link-color | #ccc |
| Inverse Navbar Link Hover Text Color | variables.less |  | @navbar-inverse-link-hover-color | #fff |
| Inverse Navbar Link Hover Background Color | variables.less |  | @navbar-inverse-link-hover-bg | transparent|
| Inverse Navbar Link Active Text Color | variables.less |  | @navbar-inverse-link-active-color | #fff |
| Inverse Navbar Link Active Background Color | variables.less |  | @navbar-inverse-link-active-bg | #222 |
| Inverse Navbar Link Disabled Text Color | variables.less |  | @navbar-inverse-link-disabled-color | #444 |
| Inverse Navbar Link Disabled Background Color | variables.less |  | @navbar-inverse-link-disabled-bg | transparent |
| Inverse Brand Text Color | variables.less |  | @navbar-inverse-brand-color | #ccc |
| Inverse Brand Hover Color | variables.less |  | @navbar-inverse-brand-hover-color | #fff |
| Inverse Brand Hover Background Color | variables.less |  | @navbar-inverse-brand-hover-bg | transparent |

## Style Popover Widget

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Popover |  | .app-popover |  |  |
| Background Color | variables.less |  | @popover-bg | #fff |
| Width | variables.less |  | @popover-max-width | 300px |
| Border Color | variables.less |  | @popover-border-color | #ddd |
| Title Background Color | variables.less |  | @popover-title-bg | #ddd |
| Arrow Width | variables.less |  | @popover-arrow-width | 10px |
| Arrow Color | variables.less |  | @popover-arrow-color | #fff |

## Style Carousel Widget

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Carousel |  | .app-carousel |  |  |
| Caption Text Shadow | variables.less | .carousel-caption | @carousel-text-shadow | 0 1px 2px #ddd |
| Caption Text Color | variables.less | .carousel-caption | @carousel-caption-color | #fff |
| Control Arrows Color | variables.less | .carousel-control | @carousel-control-color | #808080 |
| Control Arrows Width | variables.less | .carousel-control | @carousel-control-width | 20px |
| Control Arrows Transparency | variables.less | .carousel-control | @carousel-control-opacity | 0.5 |
| Control Arrows Font Size | variables.less | .carousel-control | @carousel-control-font-size | 20px |
| Indicator Active Background Color | variables.less | .carousel-indicators | @carousel-indicator-active-bg | #fff |
| Indicator Border Color | variables.less | .carousel-indicators | @carousel-indicator-border-color | #fff |

## Style Modal Dialog/Dialog Widget

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Dialog |  | .modal |  |  |
| Content Background Color | variables.less | .modal-content | @modal-content-bg | #fff |
| Content Border Color | variables.less |  | @modal-content-border-color | rgba(0,0,0,.2) |
| Header Background Color | style.less | .modal-header | @modal-header-bg | #2090EA |
| Header Text Color | style.less |  | @modal-header-color | #fff |
| Header Border Color | variables.less |  | @modal-header-border-color | transparent |
| Backdrop Color | variables.less | .modal-backdrop | @modal-backdrop-bg | #000 |
| Footer Border Color | variables.less | .modal-footer | @modal-footer-border-color | transparent |
| Inner Padding | variables.less |  | @modal-inner-padding | 1em |
| Title Padding | variables.less |  | @modal-title-padding | 1em 2em |
| Modal large | variables.less | .modal-lg | @modal-lg | 900px |
| Modal Medium | variables.less | .modal-md | @modal-md | 500px |
| Modal Small | variables.less | .modal-sm | @modal-sm | 300px |

## Style Badge available for certain Widgets

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Badge |  | .badge |  |  |
| Text Color | variables.less |  | @badge-color | #fff |
| Font Weight | variables.less |  | @badge-font-weight | bold |
| Line Height | variables.less |  | @badge-line-height | 1 |
| Border Radius | variables.less |  | @badge-border-radius | 2px |
| Link Hover Color | variables.less |  | @badge-link-hover-color | #fff |
| Background Color | variables.less |  | @badge-bg | #ddd |
| Active Text Color | variables.less |  | @badge-active-color | #448AFF |
| Active Background Color | variables.less |  | @badge-active-bg | #fff |

## Style Segmented Control (Mobile) Widget

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Mobile Segmented Control |  | .app-segmented-control |  |  |
| Background Color | style.less | .btn-group | - | #448AFF |
| Text Color | style.less | .btn | - | #f5f5f5 |
| Active border Color | style.less | .btn.active | - | #fff |
| Active Text Color | style.less | .btn.active | - | #fff |

## Style Tab Bar (Mobile)

| **Property** | **File Name** | **Class Name** | **Variable Name** | **Example** |
| --- | --- | --- | --- | --- |
| Tab bar mobile |  | .app-tabbar |  |  |
| Background Color | variables.less |  | @navbar-default-bg | #448AFF |
| Background Hover Color | variables.less |  | @navbar-default-hover-bg | transparent |
| Border Color | variables.less |  | @navbar-default-border | transparent |
| Text Color | variables.less |  | @navbar-default-color | #000 |

## See Also

[Creating Themes using the Manual Setup](/learn/app-development/ui-design/creating-themes)  
[How to customize existing theme](/learn/how-tos/customize-existing-theme/)  
[How to customize leftnav width](/learn/how-tos/how-to-adjust-lefnav-width/)
