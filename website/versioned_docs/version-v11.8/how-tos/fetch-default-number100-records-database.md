---
title: "How to fetch more than the default number(100) of records from database?"
id: "fetch-default-number100-records-database"
---

Variables provide data integration for the widgets. Variables are the gateways for the users to control, manage and synchronize the data from the database/web service or any other service in the backend. In case user wants to fetch the record from database and show it in select widget.

**Please find the approach below:** The "records per request" property on the variable will fetch a maximum of 100 records since there is a upper limit of 100 records set in the development profile(development.properties file).

#### **Deployment Profile:**

To fetch greater than 100 records for the deployed application, you will need to configure the below settings: 1. "Records per request" property in the below location: Settings >> configuration profiles >> deployment Profiles to the required number(say 300). 2. Set the "Records per request" for the respective variable bound to the select widget to the required value.

[![](/learn/assets/deploymentProfile-1.png)](/learn/assets/deploymentProfile-1.png)

#### **Development Profile:**

We do not recommend fetching large number of records in a single call from server during development mode i.e., run-mode of the app for optimized performance. However, in case you would like to view the changes in the select widget in run mode, please follow the approach below:

1. Open File explorer --> <project_name> --> profiles --> development.properties file. 2. Set db.datbaseName.maxPageSize to the required number.

[![](/learn/assets/developmentprofile.png)](/learn/assets/developmentprofile.png)**Disclaimer:** It's not advised to change the number of records from development.properties file. **Recommendation:** It's recommended to use search widget with autocomplete instead of select widget.

Fetching Records from Database

- [1. Change in Deployment Profile](#deployment)
- [2. Change in Development Profile](#development)
