---
title: "Customizing Theme"
id: ""
---

Before trying to customize the app Theme, it is recommended you that familiarise with the Theme implementation from [document](http://www.wavemaker.com/learn/app-development/ui-design/themes/#customise-theme) regarding the build, import and application of a Theme in WaveMaker app.

### to change background of an application?

- and update the value for **@body-bg**

### to use the web fonts in the theme?

- use the **fonts** in the theme, copy the web fonts(.ttf, .eot, woff) in the font folder and include the font definition in variable.less:
    
    @font-face {
     font-family: 'robotoregular';
     src: url('fonts/Roboto-Regular-webfont.eot');
     src: url('fonts/Roboto-Regular-webfont.eot?#iefix') format('embedded-opentype'),
     url('fonts/Roboto-Regular-webfont.woff') format('woff'),
     url('fonts/Roboto-Regular-webfont.ttf') format('truetype'),
     url('fonts/Roboto-Regular-webfont.svg#robotoregular') format('svg');
    }
    
- the font definitions are added the same need to be applied. For this change the font family specifications in the variable.less to point to the above-defined font family name (robotoregular, in this case). Note the second font family name (Arial, in this case) will be the fallback option.
    
    //== Typography
    //
    //## Font, line-height, and color for body text, headings, and more.
    
    @font-family-sans-serif:  'robotoregular', 'Arial', sans-serif;
    @font-family-serif:       'robotoregular', 'Arial', sans-serif;
    //\*\* Default monospace fonts for \`<code>\`, \`<kbd>\`, and \`<pre>\`.
    @font-family-monospace:   'robotoregular', 'Arial', sans-serif;
    @font-family-base:        @font-family-sans-serif;
    

### to style various components of WaveMaker App?

app (Web & Mobile) theme is based on the BootStrap CSS markup. The various components can be styled using the corresponding Bootstrap classes defined in the LESS files. In the following sections the various app components and the style properties are listed along with the class name and the file where the class is defined. Use these to make styling changes. Remember to [, import and re-apply the theme](/learn/app-development/ui-design/themes/) to enforce the changes.

: Some of Bootswatch themes might not have all these variables defined.

### to style header element?

**Name**

**Name**

**Name**

\-header

Color

@wm-header-bg-color

#2196f3

Color

@wm-header-border-color

#ffeb3b

@wm-header-height

Color

@wm-header-text-color

#fff

### to style footer element?

**Name**

**Name**

**Name**

\-footer

Color

@wm-footer-bg-color

#F5F7FA

Color

@wm-footer-border-color

#ccc

@wm-footer-height

Color

@wm-footer-text-color

#F5F7FA

### to style topnav element?

**Name**

**Name**

**Name**

\-top-nav

Color

@navbar-default-bg

#2090EA

Hover Color

@navbar-default-hover-bg

Color

@navbar-default-border

Color

@navbar-default-color

#000

### to style leftnav element?

**Name**

**Name**

**Name**

Navigation

\-left-panel

Color

@wm-left-panel-bg

#fff

Hover color

@wm-left-panel-link-hover-bg

#F4F4F4

Color

@wm-left-panel-border-color

#CFDBE2

Border

@wm-left-panel-list-border

#e6e5e5

Hover Border

@wm-left-panel-link-hover-border-color

Text Color

@wm-left-panel-link-color

#4f5256

Hover Text

@wm-left-panel-link-hover-text-color

Link Background Color

@wm-left-panel-link-active-bg

#f7f7f7

Background Color

@wm-left-panel-dropdown-menu-bg

### to style rightnav element?

**Name**

**Name**

**Name**

Navigation

\-right-panel

Color

@wm-right-panel-bg

#fff

Color

@wm-right-panel-border-color

#CFDBE2

Text Color

@wm-right-panel-btn-color

#515253

Border

@wm-right-panel-list-border

#e6e5e5

### to style Cards Widget?

**Name**

**Name**

**Name**

\-card

Background Color

\-card-header

\-

Color

\-title

\-

#333

### to style Data Table Widget?

**Name**

**Name**

**Name**

tables

Color

@table-bg

#fff

Color

@table-border-color

#eee

Hover Color

@table-bg-hover

#eee

Active Color

@table-bg-active

#eee

Background Color

@table-header-bg

#fff

### to style List Widget?

**Name**

**Name**

**Name**

\-livelist-container

Color

\-group-item

@list-group-bg

#fff

Color

\-group-item

@list-group-border

#ddd

Radius

\-group-item

@list-group-border-radius

2px

Hover Color

\-group-item

@list-group-hover-bg

#f5f5f5

Text Color

\-group-item

@list-group-active-color

#fff

Background Color

\-group-item

@list-group-active-bg

#fff

Border Color

\-group-item

@list-group-active-border

#448AFF

Items Active Text Color

\-group-item

@list-group-active-text-color

#448AFF

Text Color

\-group-item

@list-group-disabled-color

#777

Background Color

\-group-item

@list-group-disabled-bg

#ddd

Items Disabled Text Color

\-group-item

@list-group-disabled-text-color

#777

Text Color

@list-group-link-color

#555

Hover Color

@list-group-link-hover-color

#555

Text Color

@list-group-link-heading-color

#333

### to style Pagination of Live Widgets?

**Name**

**Name**

**Name**

\-datanavigator

Color

@pagination-color

#333

Color

@pagination-bg

#fff

Color

@pagination-border

#ddd

Text Color

@pagination-hover-color

#448AFF

Background Color

@pagination-hover-bg

#ddd

Border Color

@pagination-hover-border

#ddd

Text Color

@pagination-active-color

#fff

Background Color

@pagination-active-bg

#448AFF

Border Color

@pagination-active-border

#fff

Text Color

@pagination-disabled-color

#777

Background Color

@pagination-disabled-bg

#fff

Border Color

@pagination-disabled-border

#ddd

Color

@pager-bg

#fff

Color

@pager-border

#ddd

Radius

@pager-border-radius

30px

Background Color

@pager-hover-bg

#ddd

Background Color

@pager-active-bg

#448AFF

Border Color

@pager-active-color

#fff

Text Color

@pager-disabled-color

#777

### to style Accordion Widget?

**Name**

**Name**

**Name**

\-accordion

Color

\-accordion-panel

\-

#fff

Background Color

\-heading

### to style Panel Widget?

**Name**

**Name**

**Name**

Color

@panel-bg

#fff

Padding

@panel-body-padding

10px

Color

@panel-inner-border

#f0f0f0

Background Color

@panel-footer-bg

#fff

Padding

@panel-footer-padding

5px

### to style Tabs Widget?

**Name**

**Name**

**Name**

\-tabs

Color

\-tabs

@nav-tabs-bg

#fff

Color

@nav-tabs-color

#7a7a7a

Color

@nav-tabs-border-color

#ddd

Padding

@nav-link-padding

12px

Active Hover Background Color

@nav-tabs-active-link-hover-bg

Active Hover Text Color

@nav-tabs-active-link-hover-color

#333

Active Hover Border Color

@nav-tabs-active-link-hover-border-color

#ddd

Link color

@nav-disabled-link-color

#777

Link Hover Color

@nav-disabled-link-hover-color

#777

### to style Wizard Widget?

**Name**

**Name**

**Name**

\-wizard

Color

\-

#fff

Background Color

\-wizard-heading

\-

Step Title Color

\-title

\-

#448AFF

Step Background Color

\-wizard-step.active a

\-

#448AFF

Step Text Color

\-wizard-step.active a

\-

#fff

### to style Button Widget?

**Name**

**Name**

**Name**

Color

\-default

@btn-default-color

#5e5e5e

Color

@btn-default-bg

#fff

Color

@btn-default-border

#ECEFF1

Button Text Color

\-primary

@btn-primary-color

#fff

Button Background Color

@btn-primary-bg

#448AFF

Button Border Color

@btn-primary-border

#448AFF

Color

\-success

@btn-success-color

#fff

Color

@btn-success-bg

#4CAF50

Color

@btn-success-border

#4CAF50

Color

\-info

@btn-info-color

#fff

Color

@btn-info-bg

#03A9F4

Color

@btn-info-border

#03A9F4

Color

\-warning

@btn-warning-color

#fff

Color

@btn-warning-bg

#FFB300

Color

@btn-warning-border

#FFB300

Color

\-danger

@btn-danger-color

#fff

Color

@btn-danger-bg

#F44336

Color

@btn-danger-border

#F44336

Text Color

@btn-link-disabled-color

### to style Calendar Widget?

**Name**

**Name**

**Name**

Color

\-calendar

@wm-calendar-text-color

#ccc

Date Text Color

\-today

\-

#448AFF

### to style Date Widget?

**Name**

**Name**

**Name**

Picker

\-date

Color

@wm-datepicker-text-color

#000

Background Color

@wm-datepicker-header-bg

#128ff2

Text Hover Background Color

@wm-datepicker-btn-hover-bg

#f0f0f0

### to style Switch & Toggle Widget?

**Name**

**Name**

**Name**

\-switch

Color

\-

#ddd

Background Color

\-switch-overlay

\-

#448AFF

### to style Text Widget?

**Name**

**Name**

**Name**

1

1

@font-size-h1

36px

2

2

@font-size-h2

30px

3

3

@font-size-h3

24px

4

4

@font-size-h4

18px

5

5

@font-size-h5

13px

6

6

@font-size-h6

12px

Background Color

\-default

@label-default-bg

#777

Background Color

\-primary

@label-primary-bg

#448AFF

Background Color

\-success

@label-success-bg

#4CAF50

Background Color

\-info

@label-info-bg

#03A9F4

Background Color

\-warning

@label-warning-bg

#FFB300

Background Color

\-danger

@label-danger-bg

#F44336

Text Color

@label-color

#fff

Text

\-muted

@text-muted

#777

Link Hover Text Color

@label-link-hover-color

#fff

### to style Message Widget?

This is the widget used to display the [messages](/learn/app-development/variables/notification-action/) in WaveMaker Apps.

**Name**

**Name**

**Name**

@alert-padding

8px

Radius

@alert-border-radius

2px

Weight

@alert-link-font-weight

Alert Backgorund Color

\-success

@alert-success-bg

#4CAF50

Alert Text Color

@alert-success-text

#fff

Alert Border Color

@alert-success-border

#4CAF50

Alert Backgorund Color

\-info

@alert-info-bg

#03A9F4

Alert Text Color

@alert-info-text

#fff

Alert Border Color

@alert-info-border

#03A9F4

Alert Backgorund Color

\-warning

@alert-warning-bg:

#FFB300

Alert Text Color

@alert-warning-text

#fff

Alert Border Color

@alert-warning-border

#FFB300

Alert Backgorund Color

\-danger

@alert-danger-bg

#F44336

Alert Text Color

@alert-danger-text

#fff

Alert Border Color

@alert-danger-border

#F44336

### to style Progress Bar Widget?

**Name**

**Name**

**Name**

Bar

\-progress

Color

@progress-bg

#f5f5f5

Color

@progress-bar-color

#fff

Radius

@progress-border-radius

2px

Progress Bar

@progress-bar-bg

#448AFF

Progress Bar

@progress-bar-success-bg

#4CAF50

Progress Bar

@progress-bar-warning-bg

#FFB300

Progress Bar

@progress-bar-danger-bg

#F44336

Progress Bar

@progress-bar-info-bg

#03A9F4

### to style Spinner Widget?

**Name**

**Name**

**Name**

\-spinner

Color

\-

Color

\-text

\-

#448AFF

Color

\-image

\-

#448AFF

### to style Dropdown Menu Widget?

**Name**

**Name**

**Name**

Menu

@dropdown-bg

#fff

Color

@dropdown-border

#ECEFF1

color

@dropdown-caret-color

#000

Color

@dropdown-link-color

#333

Hover Color

@dropdown-link-hover-color

#000

Hover Background Color

@dropdown-link-hover-bg

#f5f5f5

Active Color

@dropdown-link-active-color

#fff

Active Background Color

@dropdown-link-active-bg

#448AFF

Disabled Color

@dropdown-link-disabled-color

#777

### to style Navbar Widget?

**Name**

**Name**

**Name**

\-navbar

Color

@navbar-default-bg

#2090EA

Color

@navbar-default-color

#777

Color

@navbar-default-border

@navbar-height

50px

@navbar-margin-bottom

0px

Radius

@navbar-border-radius

2px

Horizontal

@navbar-padding-horizontal

8px

Vertical

@navbar-padding-vertical

4px

Text Color

@navbar-default-brand-color

Hover Color

@navbar-default-brand-hover-color

Hover Background Color

@navbar-default-brand-hover-bg

Navbar Text Color

\-inverse

@navbar-inverse-color

#ccc

Navbar Background Color

@navbar-inverse-bg

#222

Navbar Border Color

@navbar-inverse-border

#000

Navbar Link Text Color

@navbar-inverse-link-color

#ccc

Navbar Link Hover Text Color

@navbar-inverse-link-hover-color

#fff

Navbar Link Hover Background Color

@navbar-inverse-link-hover-bg

Navbar Link Active Text Color

@navbar-inverse-link-active-color

#fff

Navbar Link Active Background Color

@navbar-inverse-link-active-bg

#222

Navbar Link Disabled Text Color

@navbar-inverse-link-disabled-color

#444

Navbar Link Disabled Background Color

@navbar-inverse-link-disabled-bg

Brand Text Color

@navbar-inverse-brand-color

#ccc

Brand Hover Color

@navbar-inverse-brand-hover-color

#fff

Brand Hover Background Color

@navbar-inverse-brand-hover-bg

### to style Popover Widget?

**Name**

**Name**

**Name**

\-popover

Color

@popover-bg

#fff

@popover-max-width

300px

Color

@popover-border-color

#ddd

Background Color

@popover-title-bg

#ddd

Width

@popover-arrow-width

10px

Color

@popover-arrow-color

#fff

### to style Carousel Widget?

**Name**

**Name**

**Name**

\-carousel

Text Shadow

\-caption

@carousel-text-shadow

0 1px 2px #ddd

Text Color

\-caption

@carousel-caption-color

#fff

Arrows Color

\-control

@carousel-control-color

#808080

Arrows Width

\-control

@carousel-control-width

20px

Arrows Transparency

\-control

@carousel-control-opacity

0.5

Arrows Font Size

\-control

@carousel-control-font-size

20px

Active Background Color

\-indicators

@carousel-indicator-active-bg

#fff

Border Color

\-indicators

@carousel-indicator-border-color

#fff

### to style Modal Dialog/Dialog Widget?

**Name**

**Name**

**Name**

Background Color

\-content

@modal-content-bg

#fff

Border Color

@modal-content-border-color

(0,0,0,.2)

Background Color

\-header

@modal-header-bg

#2090EA

Text Color

@modal-header-color

#fff

Border Color

@modal-header-border-color

Color

\-backdrop

@modal-backdrop-bg

#000

Border Color

\-footer

@modal-footer-border-color

Padding

@modal-inner-padding

1em

Padding

@modal-title-padding

1em 2em

large

\-lg

@modal-lg

900px

Medium

\-md

@modal-md

500px

Small

\-sm

@modal-sm

300px

### to style Badge available for certain Widgets?

**Name**

**Name**

**Name**

Color

@badge-color

#fff

Weight

@badge-font-weight

Height

@badge-line-height

1

Radius

@badge-border-radius

2px

Hover Color

@badge-link-hover-color

#fff

Color

@badge-bg

#ddd

Text Color

@badge-active-color

#448AFF

Background Color

@badge-active-bg

#fff

### to style Segmented Control (Mobile) Widget?

**Name**

**Name**

**Name**

Segmented Control

\-segmented-control

Color

\-group

\-

#448AFF

Color

\-

#f5f5f5

border Color

\-

#fff

Text Color

\-

#fff

### to style Tab Bar (Mobile)?

**Name**

**Name**

**Name**

bar mobile

\-tabbar

Color

@navbar-default-bg

#448AFF

Hover Color

@navbar-default-hover-bg

Color

@navbar-default-border

Color

@navbar-default-color

#000

Themes

- [1\. How to change background of an application](#background)
- [2\. How to use web fonts in theme](#web-fonts)
- [3\. How to style app components](#styling)
    - [header](#head)
    - [footer](#foot)
    - [tonav](#topnav)
    - [leftnav](#leftnav)
    - [rightnav](#rightnav)
    - [Cards](#cards)
    - [Data Table](#data-table)
    - [List](#list)
    - [pagination](#pagin)
    - [Accordion](#accordion)
    - [Panel](#panel)
    - [Tabs](#tabs)
    - [Wizard](#wizard)
    - [Button](#button)
    - [Calendar](#calendar)
    - [Date](#date)
    - [Switch & Toggle](#switch-toggle)
    - [Text](#text)
    - [Message](#message)
    - [Progress Bar](#progress-bar)
    - [Spinner](#spinner)
    - [Dropdown Menu](#dropdown-menu)
    - [Navbar](#navbar)
    - [Popover](#popover)
    - [Carousel](#carousel)
    - [Modal Dialog](#dialog)
    - [Badge](#badge)
    - [Segmented Control (Mobile)](#segmented-control)
    - [Tabbar (Mobile)](#tab-bar)
- [4\. How to customize existing theme](/learn/how-tos/customize-existing-theme/)
