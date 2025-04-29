---
title: "Micro frontend using iframes"
id: "microfrontends-iframe"
---
---

## Introduction

In this document we will learn how we can use iframes to load different micro apps inside a single host application. The approach is shown without using any microfrontend framework. 

One of the simplest ways of loading multiple applications inside the browser is by using iframes. By their nature, iframes makes it easy to build a page out of independent sub-pages. They offer a good degree of isolation in terms of styles, scripts etc., not interfering with each other.


In this example we will create three apps:
- **HR app** (host app)
- **employee app** (micro app 1)
- **department app** (micro app 2)


## HR App

In this app import hrdb and create two pages employee & department. On each page place an iframe with the src property set to the value "/employee" and "/department" respectively. Also make sure that the paths specified are relative. Also add navigation to these pages in the left-nav bar. Configure DB security with JDBC (or) Redis session persistence. 

![/learn/assets/microfrontends-iframes/hr-app.png](/learn/assets/microfrontends-iframes/hr-app.png)

### Employee App

The app will have widgets representing the employees details and operations. On the Main page, modify the default layout to blank, and drag & drop widgets that represents the data from the employee table (hrdb). This app should also be configured with DB Security and with JDBC or Redis session persistence.

![/learn/assets/microfrontends-iframes/employee-app.png](/learn/assets/microfrontends-iframes/employee-app.png)


### Department App

The app will have widgets representing the department details. On the Main page, modify the default layout to blank, and drag & drop widgets that represents the data from the department table (hrdb). The app should also be configured with DB Security and also with JDBC or Redis session persistence.

![/learn/assets/microfrontends-iframes/department-app.png](/learn/assets/microfrontends-iframes/department-app.png)

## Approach

All the apps (including host) are served from the same domain (say http://localhost) using a load balancer. They are however deployed on different contexts, and served over different paths. For example, the HR app is accessible at root (http://localhost/), and employee & department apps are accessible over http://localhost/employee and http://localhost/department respectively. As the domain is same for the apps, the cookies set by the host app after login is passed automatically to all the micro apps. As the session persistence is also enabled, the user will be automatically loggedIn into the employee & department apps.  

## Steps

1. Configure JDBC or Redis session persistence in all the apps so that they use the same SESSION.
2. The apps must set the cookie at root path "/". This is done by placing the below bean inside the `project-user-spring.xml` file for all the apps.
   ```xml    
    <bean id="defaultCookieSerializer" class="org.springframework.session.web.http.DefaultCookieSerializer">
        <property name="cookiePath" value="/"/>
        <property name="sameSite" value="#{null}"/>
        <property name="cookieMaxAge" value="#{${security.general.cookie.maxAge} * 60}"/>
    </bean>
    ``` 
3. Configure ngnix and serve the apps over "/", "/employee" and "/department". See the below ngnix config. 
   ```    
    http {
        server {
            listen       80;
            server_name  localhost;
            location /{
                proxy_pass http://localhost:8080/HR_App/;
            }
            
            location /department {
                proxy_pass http://localhost:8080/department;
            }
            
            location /employee {
                proxy_pass http://localhost:8080/employee;
            }
        }

    }
    ```
4. At runtime, access the localhost and navigate to the department page, we will see that the iframe loads the department as expected.  

 ![/learn/assets/microfrontends-iframes/hr-final-app.png](/learn/assets/microfrontends-iframes/hr-final-app.png)

:::note

The CSRF must also be disabled in all the apps. Since, we don't have an option to set the CSRF cookie at the root path, it'll be now set at different paths for /employee and /department causing API failures. This will be addressed in the near future by exposing a property in the development.properties to set the path for the csrf.

:::

