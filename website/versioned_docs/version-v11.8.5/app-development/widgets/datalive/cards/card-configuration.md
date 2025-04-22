---
title: "Cards - Configuration"
id: "card-configuration"
sidebar_label: "Configuration"
---
---
#### Items per Row

**Items per row** determine the number to items that can be shown in each row. This can be specified independently for different target devices, from the _device_ tab of the _Properties panel_.

#### Grouping & Ordering

Data displayed using Cards can be grouped and ordered.

1. **Group by**: Choosing a field from the data source as Group By field, will display together with the card items which have the same value for that field.
2. **Group as**: This property defines the group-by behavior. The following options are available:
    - _alphabet_ – grouped based on the first alphabet of the field
    - _word_ – grouped based on the first word of the field
    - _TIME_ – grouped based on TIME: hour, day, week, month, year
3. **Order by**: This property will help to order the card items based upon a field from the data source. You can also set the order as ascending or descending – by clicking on the arrows provided on the side of the field name.

#### Pagination

Pagination is dividing the set of data rows into discrete pages that will allow users to view data in the form of rows across pages. This should allow for easy navigation across pages for viewing and editing of data.

1. **Pagination Type**: To make complete use of pagination, the Cards provides five unique types of pagination.
    - _Basic_ – This option gives a next and previous arrow along with the page numbers at the right bottom of the page.
    - _Classic_ - A bar with the total number of pages and number of items in the current page will be displayed along with arrows for pagination.
    - _Horizontal Slider_ – This option gives next and previous arrows on both the sides of the page for pagination, carousel style.
    - _Pager_ – This option gives the next and previous buttons at the bottom of the page which when clicked goes forward or backward one row.
    - _Infinite Scroll_ – In this option on the scroll over the cards will cause the next page to load and display.
    - _None_ - No pagination option will be given, use this when you want to display single-page records.
    - _On Demand_ - allows users to load list items when needed. A '_Load More_' button is displayed at run-time, which on click will load next page records. The label 'Load More' can be configured using 'On Demand Message' property.

#### Message

**Messages** to be displayed at the time of data loading and in case no data is found can be configured.

