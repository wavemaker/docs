---
title: "Flashlight - Performance Tool for React Native App"
id: "flashlight-performance-tool"
sidebar_label: "Flashlight"
---
---
import flashlightSetup from '/learn/assets/performance/flashlight-setup.png';
import flashlightDemo from '/learn/assets/performance/flashlight-demo.png';
import flashlightThreads from '/learn/assets/performance/flashlight-threads.png';

## Flashlight

[Flashlight](https://flashlight.dev/) is a Lighthouse-like tool for mobile apps from BAM.tech.

### Measure metrics:

1. Average Test Runtime (With app start test, we can get TTI)
2. Average FPS
3. Average CPU usage
4. High CPU usage
5. Average RAM usage
6. Thread Details

### Data Captured:

Live Data capture from our app:

- FPS
- CPU
- RAM

### CI Support: Yes

### Strengths:

- Auto-detects any app / no package installations or pre-config required
- Live Monitoring JS / UI threads
- Thread details tracked
- Standalone tool - CLI / CI support
- Measure / Compare performance results
- Debug mode not required (prod apps can also be tested)
- Supports Maestro tests (Mobile UI automation)

### Limitations:

- ios - Work in progress [Refer Ticket](https://github.com/bamlab/flashlight/issues/106)
- Cloud version & some other features may get into paid subscription
- [Measures RSS](https://github.com/bamlab/flashlight/issues/11#issuecomment-1219317891) (Residential Set Size) side only not PSS (Proportional Set Size)

### Setup:

1. Install [Flashlight CLI](https://docs.flashlight.dev/#installation) to your machine.
2. Open terminal and run cmd `flashlight measure`
3. In a browser window, localhost session will be created
4. After launching your Android mobile app, select auto-detect
5. App will be picked and we are good

<img src={flashlightSetup} style={{width:"35%"}} />

### Flashlight Sample Screens:

<img src={flashlightDemo} style={{width:"35%"}} />

<img src={flashlightThreads} style={{width:"35%"}} />

### Reference Links:

- [Flashlight](https://flashlight.dev/)
- [Flashlight Docs](https://docs.flashlight.dev/)
- [Flashlight CI](https://docs.flashlight.dev/test/ci)
