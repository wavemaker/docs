---
title: "React Native Performance Monitor - Flipper Plugin"
id: "flipper-performance-plugin"
sidebar_label: "Flipper Performance Plugin(s)"
---
---
import rnPerf from '/learn/assets/performance/rn-perf.png';
import perfFormula from '/learn/assets/performance/rn-perf-formula.png';

## RN Perf Monitor (Flipper Plugin)

[RN Perf Monitor](https://github.com/bamlab/react-native-flipper-performance-monitor) is a flipper plugin that gives a performance score for mobile apps from BAM.lab.

### Measure metrics:

- Performance Score (Using a custom formula as below:)

<img src={perfFormula} style={{width:"35%"}} />

### Data Captured:

- JS & UI FPS data over time

### CI Support: Yes

### Strengths:

- Supports both Android / IOS
- JS / UI thread tracked with an scenario

### Limitations:

- Depends on Flipper - Desktop app
- Can only measure debug apps
- Need to install packages

### Setup:

1. Download [Flipper](https://fbflipper.com/) & complete setup like OpenSSL / Watchman / SDK's - Android/iOS. For more info. [check here](https://docs.wavemaker.com/learn/react-native/flipper)
2. Install packages (For expo apps) expo-community-flipper / react-native-flipper / react-native-flipper-performance-plugin
3. Do pre-build, then update app.json for plugins
4. Then run your dev build of android/ios (Not via expo-go, your own dev build)
5. Disable Dev mode for Rn-perf-monitor

### RN Perf Monitor Sample Screen:

<img src={rnPerf} style={{width:"35%"}} />

### Reference Links:

- [RN Perf Monitor Github Link](https://github.com/bamlab/react-native-flipper-performance-monitor)
- [RN Perf Monitor Blog](https://www.bam.tech/article/measuring-and-improving-performance-on-a-react-native-app)
