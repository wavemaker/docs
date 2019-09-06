---
title: "List - Configuration"
id: ""
---

#### Items per Row

**Items per row** determine the number to items that can be shown in each row. This can be specified independently for different target devices, from the _device_ tab of the _Properties panel_.

#### Grouping & Ordering

These include:

1. **Group by**: Choosing a field from the data source as Group By field, will display collectively the list items which have the same value for that field.
    - Each List Group can be collapsed by setting the **Collapsible** property. Thus if you are displaying a list of employees grouped by Department, then a group header will be displayed for each Department. This header when clicked will display the employee list for that Department. By default, each group is expanded.
    - Count of list items within the group can be displayed on the group header by setting the **Show count** property. This displays the item count for each group in the header, without the need for writing additional code or query.
2. **Group as**: This property defines the group-by behavior. The following options are available:
    - _alphabet_ – grouped based on the first alphabet of the field
    - _word_ – grouped based on the first word of the field
    - _TIME_ – grouped based on TIME: hour, day, week, month, year
3. **Order by**: This property will help to order the list items based upon a field from the data source. You can also set the order as ascending or descending – by clicking on the arrows provided on the side of the field name.

#### Pagination

Pagination is dividing the set of data rows into discrete pages that will allow users to view data in the form of rows across pages. This should allow for easy navigation across pages for viewing and editing of data.

1. **Pagination Type**: To make complete use of pagination, the List provides five unique types of pagination.
    - _Basic_ – This option gives a next and previous arrow along with the page numbers at the right bottom of the page.
    - _Classic_ - A bar with the total number of pages and number of items in the current page will be displayed along with arrows for pagination.
    - _Horizontal Slider_ – This option gives next and previous arrows on both the sides of the page for pagination, carousel style.
    - _Pager_ – This option gives the next and previous buttons at the bottom of the page which when clicked goes forward or backward one row.
    - _Infinite Scroll_ – In this option on the scroll over the list will cause the next page to load and display.
    - _None_ - No pagination option will be given, use this when you want to display single-page records.
    - _On Demand_ - allows users to load list items when needed. A '_Load More_' button is displayed at run-time, which on click will load next page records. The label 'Load More' can be configured using 'On Demand Message' property.

#### Message

**Messages** to be displayed at the time of data loading and in case no data is found can be configured.

[![](../../../../assets/cards_config-1.png)](../../../../assets/cards_config-1.png)

< Templates

Behavior Settings >

[1\. Live & Data Widgets](/learn/app-development/widgets/widget-library/#data-live)

- [1.1 Cards](/learn/app-development/widgets/datalive/cards/)
- [1.2 Data Table](/learn/app-development/widgets/datalive/data-table/)
- [1.3 Form](/learn/app-development/widgets/datalive/form/)
- [1.4 List](/learn/app-development/widgets/datalive/list/)
    - [i. Data Source](/learn/app-development/widgets/datalive/list/list-data-source/)
    - [ii. Templates](/learn/app-development/widgets/datalive/list/list-templates/)
        - [○ Action List](/learn/app-development/widgets/datalive/list/list-templates/#action-list)
        - [○ Contact List](/learn/app-development/widgets/datalive/list/list-templates/#contact-list)
        - [○ Email List](/learn/app-development/widgets/datalive/list/list-templates/#email-list)
        - [○ Media List](/learn/app-development/widgets/datalive/list/list-templates/#media-list)
    - [iii. List Configuration](/learn/app-development/widgets/datalive/list/configuration/)
        - [○ Items per row](#items-per-row)
        - [○ Grouping & Ordering](#grouping-ordering)
        - [○ Pagination](#pagin)
        - [○ Message](#message)
    - [iv. List Behavior Settings](/learn/app-development/widgets/datalive/list/behavior-settings/)
        - [○ Selection Limit](/learn/app-development/widgets/datalive/list/behavior-settings/#selection-limit)
        - [○ Multiselect](/learn/app-development/widgets/datalive/list/behavior-settings/#multiselect)
        - [○ Item Reordering](/learn/app-development/widgets/datalive/list/behavior-settings/#item-reordering)
    - [v. Properties, Events & Methods](/learn/app-development/widgets/datalive/list/list-properties-events-methods/)
        - [○ Properties](/learn/app-development/widgets/datalive/list/list-properties-events-methods/#properties)
        - [○ Events](/learn/app-development/widgets/datalive/list/list-properties-events-methods/#events)
        - [○ Methods](/learn/app-development/widgets/datalive/list/list-properties-events-methods/#methods)
    - [vi. Use Cases](/learn/app-development/widgets/datalive/list/list-use-cases)
- [1.5 Live Form](/learn/app-development/widgets/datalive/live-form/)
- [1.6 Live Filter](/learn/app-development/widgets/datalive/live-filter/)
