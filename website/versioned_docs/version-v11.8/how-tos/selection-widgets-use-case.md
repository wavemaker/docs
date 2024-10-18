---
title: "Selection Widgets - Use Case"
id: "selection-widgets-use-case"
---

WaveMaker offers three ways of allowing user to choose from given options:

- Select: **Select** widget lets the user to select values from an available list of options. The options are given in the form of a drop-down list from which the user can choose one option.
- Radioset and Checkboxset are used when there are multiple values belonging to a single group to choose from. In case we have a yes/no or true/false scenario, we can use the Checkbox widgets.

WaveMaker offers three ways of allowing a user to choose from given options:

- Select
- Radioset
- Checkboxset

Note: We are using Radioset and Checkboxset since we have multiple values belonging to a single group to choose from. In case we have a yes/no or true/false scenario, we can use the Checkbox widgets. Note: Checkbox is used for multiple selections, usually. Here we are using it only for demo purpose.

This document gives you the usage details of these three widgets. We will be:

- using the **hrdb** that ships with Studio to display the number of employees from a given city, state and zip.
- The user will select the values for the three fields, city, zip and state using the Select, Radio and Checkbox widgets, respectively.
- We will be writing a query which takes city, state and zip as input parameters and returns the total number of employees from that place.
- The input parameters of the query will be bound to the selected values of the widgets and the result to the text widget for display.

[![](/learn/assets/selection_run2.png)](/learn/assets/selection_run2.png)

1. Open/Create a project.
2. [Import the default hrdb database](/learn/app-development/services/database-services/working-with-databases/).
3. [Write and save a query](/learn/app-development/services/database-services/working-with-queries) to retrieve the total number of employees from a given city, state, zip. Save it as EmpTotal.
    
    select count(EMP_ID) as total
    from employee
    where city = :city and state = :state and zip = :zip
    group by city, state, zip
    
    [![](/learn/assets/selection_query.png)](/learn/assets/selection_query.png)
4. Drag and drop a Select, Radioset, Checkboxset and a Label widget onto the canvas. [![](/learn/assets/selection_design.png)](/learn/assets/selection_design.png)
5. Create a [Database Crud Variable](/learn/assets/var_sel.png) for the Employee entity [![](/learn/assets/selection_lv.png)](/learn/assets/selection_lv.png)
6. Bind the widgets thus:
    - **Select**: bind it to the Employee - Set the datafield property to city and display field also to city. The display field is the value that the user sees while the datafield is the value that is internally represents the display value. In this case both are the same. [![](/learn/assets/selection_sel_prop.png)](/learn/assets/selection_sel_prop.png)
    - Repeat the above two steps for **Radioset** and **Checkboxset**. Choose the appropriate properties. [![](/learn/assets/selection_check_prop.png)](/learn/assets/selection_check_prop.png)       [![](/learn/assets/selection_radio_prop.png)](/learn/assets/selection_radio_prop.png)
7. Create a [Database API Variable](/learn/assets/var_sel.png) for the Query service [![](/learn/assets/selection_sv.png)](/learn/assets/selection_sv.png)
8. Bind variable data city, state and zip to the selected values of Select, Checkboxset and Radioset widgets. [![](/learn/assets/selection_SV_data.png)](/learn/assets/selection_SV_data.png) [![](/learn/assets/selection_SV_bind.png)](/learn/assets/selection_SV_bind.png)
9. Bind the caption property of the Label widget to the output from the query [![](/learn/assets/selection_text.png)](/learn/assets/selection_text.png)
10. Run the project and select the various values to see the output.
