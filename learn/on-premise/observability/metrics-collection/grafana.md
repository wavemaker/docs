---
title: "Grafana"
id: ""
sidebar_label: "Grafana"
---
---

*Grafana* is a Dashboard creation and visualization tool. All the metrics from Prometheus will be accessed by Grafana and complex dashboards can be created
 from those metrics.

This is very useful because we do not need to type in prometheus queries each and every time. A *Dashboard* is created once and is accessed multiple times.   

### How to access Grafana 

1) After the WaveMaker login, we are supposed to open the *Launchpad* and click on the dial icon located on the top left as shown below

![Launchpad Dial Click](/learn/assets/wme-setup/wme-observability/kibana/launchpad-dial-open.png)

---

2) Then, in the dial menu the "**grafana**" button is supposed to be clicked as shown below

![Launchpad Grafana Click](/learn/assets/wme-setup/wme-observability/prometheus/launchpad-grafana-click.png)

---

3) After clicking the above button, you will be taken to the Grafana. The grafana home page should look like the below image

![Grafana Home Page](/learn/assets/wme-setup/wme-observability/prometheus/grafana-home-page.png)

---

4) Then, we can access the dashboards by clicking on the "**home**" button at top left 

![Grafana Home Click](/learn/assets/wme-setup/wme-observability/prometheus/grafana-home-click.png)

---

5) You should be able to see the list of dashboards as shown in the below image. 

![Grafana Dashboard List](/learn/assets/wme-setup/wme-observability/prometheus/grafana-dashboards-list.png)


### Available Dashboards 

WaveMaker contains the following list of dashboards

| Dashboard   | Description |
| ----------- | ----------- |
| Alert Manager | Alerts triggered in platform |
| Container Activation | Container Activation summary |
| Container Metrics | Container CPU,RAM and Network status |
| Exceptions Summary | Exceptions seen across platform |
| Instance Metrics | Dashboard showing Instance CPU,RAM,disk,etc |
| Jobs Dashboard | Platform jobs summary |
| JVM Metrics | JVM summary of all containers |
| Login Summary | Platform login success and failure counts |
| Platform Summary | Complete platform status |
| Project Preview Summary | Project preview success and failure counts |
| Projects Summary | Project usage summary |
| Studio Pages | Wavemaker app page creation and load summary  |
| User Usage Stats | Seven days user platform usage trend |
| VCS Summary | Wavemaker user VCS activity summary  |

