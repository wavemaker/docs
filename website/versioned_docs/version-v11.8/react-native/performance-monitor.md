---
title: "React Native Performance Monitor"
id: "performance-monitor"
sidebar_label: "React Native Performance Monitor"
---
---
import PerfMonitorSteps from '/learn/assets/performance/native-perf-monitor.png';
import fps from '/learn/assets/performance/fps.png';

## React Native Performance Monitor

React Native Performance Monitor is inbuilt in all React Native Apps. For more info. [check here](https://reactnative.dev/docs/performance#what-you-need-to-know-about-frames)

:::note
DEV mode should be disabled while measuring performance.
:::

### Measure Metrics:

1. FPS in JS Thread & in UI Thread
2. FPS Drops
3. Stutters in frame

### CI Support: No

### Limitations:

- Will get only base reference values
- Need to use/depend on other tools to investigate further
- Can only measure debug apps

### Setup:

1. Launch your mobile app
2. Open up your Dev Menu and select Show Perf Monitor

<img src={PerfMonitorSteps} style={{width:"35%"}} />

### Flashlight Sample Screens:

<img src={fps} style={{width:"35%"}} />

### Reference Links:

- [React Native Performance Monitor](https://reactnative.dev/docs/performance#what-you-need-to-know-about-frames)
