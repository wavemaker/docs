---
title: "Data Table - Layouts"
id: "layouts"
sidebar_label: "Layouts"
---
---
Data Table can be editable or read-only with editable options being inline or dialog-based. These options are available as **Layout options**. 

:::note
Editable options are available only for Database CRUD Variables; as other variables do not support CRUD operations.
:::

## Editable Data Table with Forms
---
### Editable with Form as Dialog

A Data Table Layout for data viewing and a Dialog Form for User Data Entry

- The Table Layout will have Edit/Delete option for each row and will have a NEW button at the bottom to add data using the Dialog Form
- A blank Dialog Form will show up on click of NEW button to add new record and will have a Save button to save
- When edit button is clicked in a row, the selected row values will be shown in the Dialog Form where you can make the changes and save the data.

<iframe width="100%" height="500" style={{backgroundColor: "snow"}} allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/Main">Example of Grid with dialog form</iframe>

### Editable with Form given below the Table

- This is very similar to the first template except that the Form for editing is given below the Table.
- Select any row for editing
- The Data Table here again provides Edit/Delete and New options

<iframe width="100%" height="925" style={{backgroundColor: "snow"}} allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/EditableDataGridWithInline">Example of Editable Grid with inline form</iframe>

## Editable Data Table
---

### Inline Editable

- A Table Layout with Edit/Delete/New option
- By default when NEW is clicked to add a new row, the new row will be appended to the bottom of the table. You can change this setting from ADVANCED SETTINGS and set the Form Position property to Top.

<iframe width="100%" height="525" style={{backgroundColor: "snow"}} allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/EditableDataGrid">Example of Editable Grid</iframe>

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

## Read-Only Data Tables
---

### Read-Only with Details Below

- This Data Table provides for Read Only View of the existing Data

### Read-Only Simple View

- This Data Table provides for Read Only View of the existing Data

<iframe width="100%" height="450" style={{backgroundColor: "snow"}} allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/ReadOnlyDataGrid">Example of Read-only Grid</iframe>

