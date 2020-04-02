---
title: "How Tos: Debug performance issues in WaveMaker application with Fusion Reactor tool"
id: ""
sidebar_label: "How Tos: Setup Fusion Reactor tool for WaveMaker Application Performance Monitoring"
---
Learn how to setup Fusion Reactor tool for WaveMaker Application Performance Monitoring.

---

WaveMaker platform generates Spring and Hibernate code for the application backend and it is very easy to debug the performance issues in this stack with third party Application Pefromance Monitoring tools like App Dynamics and Fusion Reactor. In this tutorial we will walks through the steps to configure the Fusion Reactor tool for WaveMaker Application Performance Monitoring and debugging the issues.The FusionReactor is one of the Java Application Performance Monitoring  (APM) tool which gives developers total insight into exactly how code executes and performs at production run-time.**[For more details](https://intergral.atlassian.net/wiki/spaces/FR82/overview)**. 

## Prerequisites

1.You are expected to have an Fusion Reactor Account and Download the Required Debug Libraries.
Please visit the FusionReactor website **[here](http://www.fusion-reactor.com/download/)** and download the FusionReactor.Jar file and the Debug Native Libraries file. 

2.Supported Web server **[Refer](https://www.fusion-reactor.com/system-requirements/)**. 


## Fusion Reactor installation setup in Web Server:

Below steps will guide you install fusion reactor in Tomcat server in linux environment.For other server installations **[Refer](https://intergral.atlassian.net/wiki/spaces/FR62/pages/148013542/Manual+Installation+-+Application+Server+Examples)**.

**Tomcat Linux**:
- Create a folder in you server and place the fusion reactor jar and debug libraries.
- Now Navigate to the following directory in tomcat {Apache_Tomcat_Home}/bin/.
- Locate the setenv.sh file OR if the file does not exist you can go ahead and create the file.
- Open the file with a text editor of you preference.
- Locate the FusionReactor Java Agent Jar and possibly the FusionReactor Production Debugger values in the setenv.sh file as shown in below example.
Save the changes made.

Example

  setenv.sh :

``` xml
#FusionReactor JVM start options. Please do not edit these options.

FR_OPTS="-javaagent:/opt/fusionreactor/instance/tomcat8/fusionreactor.jar=address=8088 -agentpath:/opt/fusionreactor/instance/tomcat8/libfrjvmti_x64.so"
export JAVA_OPTS="$JAVA_OPTS $FR_OPTS"

#End of FusionReactor opts
```

Refer the following doc for more details on installation process **[here](https://intergral.atlassian.net/wiki/spaces/FR82/pages/245544136/FusionReactor+Installation+Guide)** and for video tutorials **[here](https://www.fusion-reactor.com/videotuts/?filter=installation)**.

## Accessing FusionReactor:

After installing and starting your JEE server refer the below steps for accesing the fusion tool. 

1) Accessing Fusion Reactor's Internal Web Server:

- You can call FusionReactor directly from a web browser with a URL like this: 

- http://127.0.0.1:8088/fusionreactor/  
( http://< Your Server Ip>:< Port Configured in setenv.sh file during intallation>/fusionreactor/).

- You must use the correct IP address and port for the FusionReactor instance you are trying to access.  The port will be the configured in set env.sh file and address on which FusionReactor listens are configurable. After installing and starting your JEE server, you'll need to enter your license key and activate it. 

2) Your External Web Server
You can often access FusionReactor from your external web server with a URL like this: 

- http://demo.fusion-reactor.com/fusionreactor.jsp/findex.htm
Notice that we have used an extension (.jsp in this case) that the external web server maps to the monitored application engine. This is so that the request is passed to FusionReactor which runs inside the application engine. Access to FusionReactor from the external web server can be configured on or off.


### Debugging peformance issue using Fusion Reactor tool:

1.After configuring fusion reactor in webserver access your wm application and load the Webpage where you observing the slowness observe the slow network calls in browser network tab.

2.Now access the Fusion Reactor Url as mentioned above to check the Running Request of you app and check for the slow requests in fusion reactor tool and click on view details of that request as shown in screenshot where we can verify the transaction request details of excution time and various jdbc query detail of tehta request and other sections like Requests and Jdbc Query analysis and Profiler for indvidual method execution times and other sections which will help us to identify root cause for the slowness as shown below.


[![form_filter_design](/learn/assets/fusion_reactor_request.png)](/learn/assets/fusion_reactor_request.png)

## Metrics Section:

The Web Metrics page presents the data recorded by FusionReactor related to our application server and its request load in an organised and easy-to-analyse structure.

**WebRequest Activity**:  The number of requests completed and active at a given time. The number of errors is also tracked.

**WebRequest Time**: The average time of all completed and active requests at a given time.  The runtime of requests which ended in error is also tracked.
JDBC Activity: The number of JDBC requests complete and active at a given time.  The number of errors is also tracked.

**JDBC Time**:  The average time of all completed and active JDBC requests at a given time.  The runtime of JDBC statements which ended in error is also tracked.
**Memory (MB)**:  The memory usage of your server, showing three types : Max memory, Allocated memory, and Used memory.
**CPU(%)**: The CPU load of two types : your server, and your application server instance.

[![form_filter_design](/learn/assets/fusion_reactor_metrics.png)](/learn/assets/fusion_reactor_metrics.png)



## Request Section:

The Web Requests and History page shows a list of the most-recently completed requests.  The number of historical requests stored is configurable - the default is set to 100.  All the Request information is stored in memory - as new requests enter the list, older requests are removed.

[![form_filter_design](/learn/assets/fusion_reactor_runningtransaction.png)](/learn/assets/fusion_reactor_runningtransaction.png)

[![form_filter_design](/learn/assets/fusion_reactor_requests.png)](/learn/assets/fusion_reactor_requests.png)

You can get to the Detail page from any page which lists requests:  and pages linked from Request Metrics. Clicking the Request Details button by a request or clicking on the url field will take you to a page which contain detailed information about that request.

[![form_filter_design](/learn/assets/fusion_reactor_transactiondetails.png)](/learn/assets/fusion_reactor_transactiondetails.png)


## JDBC Section: 

JDBC > JDBC History shows a list of completed JDBC transactions and shows slow jdbc query calls details.
For each JDBC transaction shown you will see the time at which it began, the IP address of the client which created it, the JDBC Statement which was actually executed and the amount of time it has been running and slow transactions.

[![form_filter_design](/learn/assets/fusion_reactor_jdbc.png)](/learn/assets/fusion_reactor_jdbc.png)

## Profiler section:

This section is going to provide you with more information about the Code Profiler Details of a transaction or thread.  When you need to discover what part of an application (method) consumes the most amount of CPU and Time, you can use the profiler to do that.   Essentially the Code Profiler can be used to isolate performance bottlenecks in your code.

When you access the Profiler tab in the transaction details, you should be able to see something similar. See screenshot below.

[![form_filter_design](/learn/assets/fusion_reactor_profiler.png)](/learn/assets/fusion_reactor_profiler.png)

These sections will help us identify the root cause of slowness and montioring the requests.


For more details on debugging refer **[here](https://intergral.atlassian.net/wiki/spaces/FR82/pages/245547449/FusionReactor+User+s+Guide)**.

We can also verify the sample live demo **[here](http://demo.fusionreactor.io/)**of fusion reactor.
