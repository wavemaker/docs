---
title: "Observability"
id: "introduction"
sidebar_label: "Introduction"
---
---

Did you ever wonder how a Human body automatically responds to any negative inconvenience?

The body fixes itself with a *Negative Feedback Loop*, which detects the anomalies and performs the required actions to maintain a stable, relatively constant internal environment.

Example:

![Human Negative Feedback Loop](/learn/assets/wme-setup/wme-observability/negative-feedback-loop-human.png)

*Wouldn't it be great if you had an application with a similar mechanism?*

Well, we have engineered the WaveMaker Platform to do the same.

![WaveMaker Negative Feedback Loop](/learn/assets/wme-setup/wme-observability/negative-feedback-loop-wavemaker.png)

With the right tools, the WaveMaker Platform is smart enough to detect its internal failures. These failures can then be addressed by the *Enterprise Platform Administrator* or by any level of *Engineer*. The failures are not hidden, anyone proficient in resolving it will resolve it.

All this is possible due to the WaveMaker's **Observability** module.

:::note
The above example refers to the *Alerts Component* included in the [Observability Stack](/learn/on-premise/observability/introduction#observability-stack).
:::

## Observability

Observability helps in exposing the internal functioning of the Platform. This includes system logs and different metric values. By introducing the right metrics, the system's operational visibility is increased with Observability.

The Observability helps in monitoring the platform by collecting the metrics in real-time. These metrics can then be used to generate alerts and create complex dashboards. WaveMaker includes the following components in its Observability module.  

### Observability Stack

- [Logs aggregation](/learn/on-premise/observability/logs-aggregation/overview)
  - [Kibana](/learn/on-premise/observability/logs-aggregation/kibana)
- [Metrics collection](/learn/on-premise/observability/metrics-collection/overview)
  - [Prometheus](/learn/on-premise/observability/metrics-collection/prometheus)
  - [Alerts](/learn/on-premise/observability/metrics-collection/alerts)
  - [Grafana](/learn/on-premise/observability/metrics-collection/grafana)

## Observability in WME (WaveMaker Enterprise)

WaveMaker aims to provide the Observability module as a solution in *WME setups (on-premise setups)* as this module has been very useful in detecting, analyzing, and resolving a lot of issues in the *WMO setup ([WaveMaker Online](https://www.wavemakeronline.com/))*.

Many incidents were identified before the user reported them. This helped us to resolve issues proactively. Besides this, it also helped us in introspection and to come up with better solutions over time.

For the same reasons, we wanted to extend the Observability module to *WME*. The goal is to fit the Observability module to client-specific business requirements as WaveMaker specific things are already taken care of in the WaveMaker releases.
