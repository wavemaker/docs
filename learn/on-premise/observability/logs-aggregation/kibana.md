---
title: "Kibana"
id: ""
sidebar_label: "Kibana"
---
---

### Introduction
It's is considered as a good practice for a *Backend Developer* to add log statements in his code. So, when the application is deployed he can go through the
log statements to better understand the flow. This helps build a stable feature. But, in some cases, it is most important to check the log files of the application when a feature is not working.

For this, the *Backend Engineer* would have to do the following.

- Obtain remote server access.
- Know the required details to connect to the server
- Access the container
- Open the application logs file using a cli text editor
- Search for the required log using the basic string search provided by the cli text editor.  

It gets more and more difficult if the logs are to shared across teams or if a developer wants to check the logs after few days.   
 
Kibana solves all these problems by making the logs easily accessible. One can also easily share the logs across the team with a single URL. The logs also
 secure as they can only be accessed by authenticated users.
 
> You can check Kibana's [Opensource repository](https://github.com/elastic/kibana) for more information.  

### How to access Kibana

1) After the WaveMaker login, we are supposed to open the *Launchpad* and click on the dial icon located on the top left as shown below

![Launchpad Dial Click](/learn/assets/wme-setup/wme-observability/kibana/launchpad-dial-open.png)

---

2) Then, in the dial menu, the "**logs**" button is supposed to be clicked as shown below

![Launchpad Logs Click](/learn/assets/wme-setup/wme-observability/kibana/launchpad-logs-click.png)

---

3) After clicking the above button, you will be taken to the Kibana home page. The home page should look like the below image

![Kibana Home Page](/learn/assets/wme-setup/wme-observability/kibana/kibana-home.png)

---

4) To search for logs using Kibana one needs to click on the "**Discover**" button located in the left navigation bar.

![Kibana Discover Click](/learn/assets/wme-setup/wme-observability/kibana/kibana-discover-click.png)

---

5) Finally, you should see the following screen.

![Kibana Discover Page](/learn/assets/wme-setup/wme-observability/kibana/kibana-discover-open.png)

*Data is pixelated for privacy reasons*

:::note
 The "Discover" page is where you will be able to filter through all the logs. 
:::

### Kibana Filters

The required logs can be searched by applying appropriate filters. The below tables list out the most frequently used filters.  

Application log filters

| Filter      | Description | Example Value |
| ----------- | ----------- | ------------- |
| user.keyword | Get the logs printed in the user context by using the user login ID  | user1@my-wme.com | 
| classname.keyword | The log statements printed by a java class  | **o.s.w.c.RestTemplate** <br/>( here, the fully qualified name is of the java class is ***o**rg.**s**pringframework.**w**eb.**c**lient.RestTemplate* ) | 
| host.keyword | The local IP of the machine from which the logs are collected | 10.0.22.135 |
| log-level.keyword | The log level used for printing the log statement | **INFO**, **DEBUG**, **WARN**, **ERROR** |
| message.keyword | The actual log statement | * can be any string *  |
| tag.keyword | The Platform microservice name | **remote-studio**, **jobs-service** , **jobs-worker**, etc
| thread.keyword | The logs belonging to a particular java thread id  | http-nio-8008-exec-3 |

Similarly, the *Access logs* are also pushed to *Elasticsearch*, they can be also be filtered using the below filters. 

Access log filters

| Filter      | Description | Example Value |
| ----------- | ----------- | ------------- |
| reqmethod.keyword | The request method of access logs | **GET**, **PUT**, etc. |
| type.keyword | HTTP request Type | HTTP/1.1 |
| uri.keyword | The URI of the backend API call | /index.html |
| url.keyword | The URL of the backend API call | https://www.my-wme.com/studio/ |
| client_ip.keyword | The IP of the client who made the API call | 127.127.127.127 |

:::note
The "**.keyword**" suffix mentioned in all the above filters is optional. Adding it will just help in auto-suggestion.   
:::

Apart from the filters mentioned above, Kibana supports many more filters, but the above should be more than sufficient in most cases.  

### How to apply filters

Now that we know the filters which can be applied, let us check how to apply these filters.

> In the below example we will be using Kibana to filter all the "**INFO**" log messages.   

1) Click the "**Add a filter**" button on top left.

![Kibana Home Page](/learn/assets/wme-setup/wme-observability/kibana/kibana-add-filter-clicked.png)

--- 

2) Use "**log-level.keyword**" as the filter type.

![Kibana Home Page](/learn/assets/wme-setup/wme-observability/kibana/kibana-filter-name-type.png)

---

3) Select "**is**" as the operation.

![Kibana Home Page](/learn/assets/wme-setup/wme-observability/kibana/kibana-filter-operation-select.png)

---

4) Type "**INFO**" in the value field.

![Kibana Home Page](/learn/assets/wme-setup/wme-observability/kibana/kibana-filter-value.png)

---

That's all.

But, as we want to check only messages and nothing else, we can add that as a field by doing the following. 

5) Click the "**add**" button beside the "**message**" label as shown in the below image 

![Kibana Home Page](/learn/assets/wme-setup/wme-observability/kibana/kibana-message-field-add.png)

---

6) Finally, this is what it will look like. 

![Kibana Home Page](/learn/assets/wme-setup/wme-observability/kibana/kibana-final.png)


