---
title: "Observability"
id: ""
sidebar_label: "Introduction"
---
---

Did you ever wonder how a Human body automatically responds to any negative inconvenience?

The body fixes itself with a *Negative Feedback Loop*, which detects the anomalies and performs the required actions to maintain a stable, relatively constant
 internal environment.

 Example:

![Human Negative Feedback Loop](/learn/assets/wme-setup/wme-observability/negative-feedback-loop-human.png)

*Wouldn't it be great if you had an application with a similar mechanism?*

Well, we have engineered the WaveMaker Platform to do the same.

![WaveMaker Negative Feedback Loop](/learn/assets/wme-setup/wme-observability/negative-feedback-loop-wavemaker.png)

With the right tools, the WaveMaker Platform is smart enough to detect its internal failures. These failures can then be addressed by the *Enterprise Platform Administrator* or by any level of *Engineer*. The failures are not hidden, anyone proficient in resolving it will resolve it.

All this is possible due to the WaveMaker's **Observability** module.

:::note
There are many more features offered by this module besides the one mentioned above.
:::

With the Observability module in place, we can stay in control of the running of the software on the cloud ensuring good health.

### Observability Stack

WaveMaker's Observability module consists of the following components.

- [Logs aggregation](/learn/on-premise/observability/logs-aggregation/overview)
  - [Kibana](/learn/on-premise/observability/metrics-collection/metrics-collection/kibana)
- [Metrics collection](/learn/on-premise/observability/metrics-collection/overview)
  - [Prometheus](/learn/on-premise/observability/metrics-collection/prometheus)
  - [Alerts](/learn/on-premise/observability/metrics-collection/alerts)
  - [Grafana](/learn/on-premise/observability/metrics-collection/grafana)
