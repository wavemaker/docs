---
title: "Metrics Collection"
id: ""
sidebar_label: "Overview"
---
---

*Metrics* is needed to get realtime application performance insights.

In the WaveMaker Platform, we have integrated the **Prometheus** monitoring tool. Prometheus is widely used and has a lot of opensource modules and tools which are
 easy to integrate.

The following tools are integrated with Prometheus in WaveMaker Platform

| tools      | Description |
| ----------- | ----------- |
| [cadvisor](https://github.com/google/cadvisor) | Collects *container* level resource utilization, performance and health related metrics  |  
| [node_exporter](https://github.com/prometheus/node_exporter) | Collects *node* (Instance) level resource utilization, performance and health related metrics  |  
| [jmeter](https://github.com/johrstrom/jmeter-prometheus-plugin) | Collects *jvm* level classloader,thread,heap,GC related metrics  |
| [micrometer](https://github.com/micrometer-metrics/micrometer) | This is used to collect any custom metrics from the java web application deployed as a microservice in a container. | 

With the help of the above tools, all the data is aggregated at Prometheus. 


### Architecture

The below image shows how *Prometheus* is integrated with the components in the Platform.

![Kibana Home Page](/learn/assets/wme-setup/wme-observability/prometheus/prometheus-architecture.png)

**node_exporter** : All the instances *10.0.0.1* - *10.0.0.N* contain a *node_exporter* container which collects the node (Instance) related metrics  

**cadvisor** : Every instance contains a *cadvisor* which collects the metrics  related to all the containers present in the same
 instance

**JMeter, micrometer**: Each and every JVM application deployed as a microservice in containers *A*-*Z* generates its own metrics.
  