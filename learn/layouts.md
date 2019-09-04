---
title: "Data Table - Layouts"
id: ""
---

Data Table can be editable or read-only with editable options being inline or dialog-based. These options are available as **Layout options**: **NOTE:** Editable options are available only for Database CRUD Variables; as other variables do not support CRUD operations.

1. Editable Data Table with Forms:
    - [Editable with Form as Dialog](#efd)
    - [Editable with Form given below the Table](#efb)
2. Editable Data Table:
    - [Inline Editable](#edi)
    - [Quick Edit](#edq)
3. Read-Only Data Tables:
    - [Read-Only with details given below in a Form layout](#rof)
    - [Read-only Simple View](#ros)

### Editable with Form as Dialog

A Data Table Layout for data viewing and a Dialog Form for User Data Entry

- The Table Layout will have Edit/Delete option for each row and will have a NEW button at the bottom to add data using the Dialog Form
- A blank Dialog Form will show up on click of NEW button to add new record and will have a Save button to save
- When edit button is clicked in a row, the selected row values will be shown in the Dialog Form where you can make the changes and save the data.

<iframe width="100%" height="500" style="background-color: snow;" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/Main">Example of Grid with dialog form</iframe>

### Editable with Form given below the Table

- This is very similar to the first template except that the Form for editing is given below the Table.
- Select any row for editing
- The Data Table here again provides Edit/Delete and New options

<iframe width="100%" height="925" style="background-color: snow;" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/EditableDataGridWithInline">Example of Editable Grid with inline form</iframe>

### Inline Editable

- A Table Layout with Edit/Delete/New option
- By default when NEW is clicked to add a new row, the new row will be appended to the bottom of the table. You can change this setting from ADVANCED SETTINGS and set the Form Position property to Top.

<iframe width="100%" height="525" style="background-color: snow;" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/EditableDataGrid">Example of Editable Grid</iframe>

### Quick Edit

- A Table Layout to enable quick editing of rows in a Data Table using keyboard events.
- The following keys can be used:
    - Click on any row to make it editable
    - Use tab key to go to the next field or column
    - Tabbing out of the row will save the changes, automatically
    - Tabbing out of the last row will add a new row to the table
    - Use ESC key to cancel the changes
    - Use Delete key to delete the row currently in edit mode
- In the Quick mode, always a new row will be shown in the data table. However, the position will depend upon the form position property.**Note:** _Quick edit template will not have new button action._

### Read-Only with Details Below

- This Data Table provides for Read Only View of the existing Data

### Read-Only Simple View

- This Data Table provides for Read Only View of the existing Data

<iframe width="100%" height="450" style="background-color: snow;" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/ReadOnlyDataGrid">Example of Read-only Grid</iframe>

< Data Source

Configuration >

[1\. Live & Data Widgets](/learn/app-development/widgets/widget-library/#data-live)

- [1.1 Cards](/learn/app-development/widgets/datalive/cards/)
- [1.2 Data Table](/learn/app-development/widgets/datalive/data-table/)
    - [i. Data Source](/learn/app-development/widgets/datalive/datatable/data-source/)
        - [○ Variable Source](/learn/app-development/widgets/datalive/datatable/data-source/#variable-source)
        - [○ Widget Source](/learn/app-development/widgets/datalive/datatable/data-source/#widget-source)
    - [ii. Layouts](/learn/app-development/widgets/datalive/datatable/layouts/)
        - [○ Editable with Form as Dialog](#efd)
        - [○ Editable with Form given below the Table](#efb)
        - [○ Inline Editable](#edi)
        - [○ Quick Edit](#edq)
        - [○ Read-Only with details given below](#rof)
        - [○ Read-only Simple View](#ros)
    - [iii. Table Configuration](/learn/app-development/widgets/datalive/datatable/table-configuration/)
        - [○ Search & Filter](/learn/app-development/widgets/datalive/datatable/table-configuration/#search-n-filter)
        - [○ Sorting](/learn/app-development/widgets/datalive/datatable/table-configuration/#sorting)
        - [○ Selection](/learn/app-development/widgets/datalive/datatable/table-configuration/#selection)
        - [○ Pagination](/learn/app-development/widgets/datalive/datatable/table-configuration/#pagin)
        - [○ Export Data](/learn/app-development/widgets/datalive/datatable/table-configuration/#export-data)
        - [○ Message](/learn/app-development/widgets/datalive/datatable/table-configuration/#message)
        - [○ Row Styling](/learn/app-development/widgets/datalive/datatable/table-configuration/#row-style)
    - [iv. Field Configuration](/learn/app-development/widgets/datalive/datatable/field-configuration/)
        - [○ Column Grouping](/learn/app-development/widgets/datalive/datatable/field-configuration/#grouping)
        - [○ View Mode](/learn/app-development/widgets/datalive/datatable/field-configuration/#view-mode)
        - [○ Edit Mode](/learn/app-development/widgets/datalive/datatable/field-configuration/#edit-mode)
    - [v. Actions](/learn/app-development/widgets/datalive/datatable/actions/)
        - [○ Table Specific Actions](/learn/app-development/widgets/datalive/datatable/actions/#table-actions)
        - [○ Row Specific Actions](/learn/app-development/widgets/datalive/datatable/actions/#row-actions)
        - [○ Actions Visibility](/learn/app-development/widgets/datalive/datatable/actions/#actions-visibility)
        - [○ Actions Layout](/learn/app-development/widgets/datalive/datatable/actions/#actions-layout)
    - [vi. Events & Methods](/learn/app-development/widgets/datalive/datatable/datatable-events-methods/)
        - [○ Events](/learn/app-development/widgets/datalive/datatable/datatable-events-methods/#events)
        - [○ Methods](/learn/app-development/widgets/datalive/datatable/datatable-events-methods/#methods)
    - [vii.Use Cases](/learn/app-development/widgets/datalive/datatable/data-table-use-cases/)
- [1.3 Form](/learn/app-development/widgets/datalive/form/)
- [1.4 List](/learn/app-development/widgets/datalive/list/)
- [1.5 Live Form](/learn/app-development/widgets/datalive/live-form/)
- [1.6 Live Filter](/learn/app-development/widgets/datalive/live-filter/)
