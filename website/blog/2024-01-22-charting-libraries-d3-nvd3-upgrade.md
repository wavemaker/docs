---
title: "Charting Libraries D3 and NVD3 Update - Action Required"
author: Bhargavi Gunda
---
---

Exciting news for WaveMaker developers! The upcoming upgrade of the WaveMaker Web Apps Charting libraries, scheduled for Release 11.5.3 in the fourth week of January 2024, introduces significant improvements derived from both D3.js and NVD3.

This update ensures compatibility with modern web standards and offers a more streamlined experience for developers.

<!-- truncate -->

| Current version | Updating to |
|-----------------|-------------|
| D3 3.5.7	       | 7.8.5       |
| NVD3 1.0.0      | 1.8.6       |

## D3.js Version 7

D3.js, a powerful JavaScript library for creating interactive data visualizations, undergoes a major version upgrade from 3.5.7 to 7.8.5, bringing new features and improvements and allowing developers to adapt to the latest changes.

## Key Changes in D3.js Version 7

1. [Syntax and Selections](#syntax-and-selections)
2. [Promises](#promises)
3. [Immutability](#immutability)
4. [Chaining](#chaining)
5. [Modularity](#modularity)
6. [Axes and Scales](#axes-and-scales)
7. [Data Join](#data-join)
8. [Compatibility](#compatibility)
9. [Documentation](#documentation)

## Syntax and Selections

- The syntax has evolved to be more concise and adherent to ES6 standards.
- Method chaining and selections exhibit a more logical and consistent structure.

```
// D3 v3
d3.selectAll('circle').attr('r', function(d) { return d.radius; });

// D3 v7
d3.selectAll('circle').attr('r', d => d.radius);
```

## Promises

D3 v7 embraces Promises for asynchronous operations, simplifying the handling of asynchronous tasks.

```
// D3 v3
d3.json('data.json', function(error, data) {
// Callback-based approach
});

// D3 v7
d3.json('data.json')
.then(data => {
// Promise-based approach
})
.catch(error => {
console.error('Error loading data:', error);
});
```


## Immutability

D3 v7 introduces immutability to selections, enhancing code predictability and avoiding unexpected side effects.

```
// D3 v3
var circles = d3.selectAll("circle");
circles.attr("r", 10);
circles.style("fill", "blue");

// D3 v7
const circles = d3.selectAll("circle")
.attr("r", 10)
.style("fill", "blue");
```

## Implications of Immutability

### Consistency and Predictability:
The immutability of selections in D3 v7 leads to more consistent and predictable behavior.

### Transitioning and Animation:
Transitions and animations are built on the same immutable foundation, providing clarity and control.
```
// D3 v3
var circles = d3.selectAll("circle");
circles.transition().duration(1000).attr("r", 20).style("fill", "red");

// D3 v7
const circles = d3.selectAll("circle")
.transition()
.duration(1000)
.attr("r", 20)
.style("fill", "red");
```

## Chaining
Immutability is closely linked to method chaining, allowing concise and readable code.
```
// D3 v3
var circles = d3.selectAll("circle");
circles.attr("r", 10).style("fill", "blue");

// D3 v7
const circles = d3.selectAll("circle")
.attr("r", 10)
.style("fill", "blue");
```

## Modularity

D3 v7 embraces modularity, allowing developers to use specific modules without including the entire library.
```
// D3 v3
// Include the entire library

// D3 v7
import { scaleLinear, axisBottom } from 'd3';
```


## Axes and Scales

While core concepts remain, v7 brings refinements for creating scales and axes, offering more control and customization options.
```
1.d3.scale.linear() = d3.scaleLinear()
2.d3.scale.ordinal() = d3.scaleOrdinal()
3.d3.svg.arc()= d3.arc()
4.d3.svg.axis.orient('bottom') = d3.axisBottom()
5.d3.event.pageX() = d3.pageX()
6.d3.time.format() = d3.timeFormat()
7.d3.time.Scale() = d3.scaleTime()
8.chartinstance.dispatch.on('render_end')=chartinstance.dispatch.on('renderEnd')
9.Changes in Mouse Event Callbacks:
   The arguments passed in mouse events callback functions changed 
   from data, index => event, data, index.
    a.In D3 v3, the mouse event callback functions received 
      data and index as the first and second arguments.
    b.In D3 v7, the order is changed, and the callback functions 
      receive events as the first argument, followed by data and index.
```

## Data Join

D3 v7 enhances the data join pattern for better performance and optimizations.
```
// D3 v3
var circles = svg.selectAll('circle').data(data);
circles.enter().append('circle');

// D3 v7
var circles = svg.selectAll('circle').data(data)
.join('circle');
```

## Compatibility

D3 v7 aligns with modern web standards, integrating seamlessly with other JavaScript tools and frameworks.

```
// D3 v3
// No native module support

// D3 v7
import { select, scaleLinear } from 'd3';
```

## Documentation

The documentation for D3 v7 is updated, offering more comprehensive explanations and examples.
```
// D3 v3
// Limited documentation

// D3 v7
// Well-documented features with examples
```

NVD3 is a wrapper library over D3 which is also upgraded to incorporate latest changes in D3.

To learn more, see [The Comprehensive Migration Guide](https://observablehq.com/@d3/d3v6-migration-guide).

## Action Required

To enhance the extensibility of the chart component, we introduced a life cycle method from NVD3 as the "On Before Render" callback. Any modifications made to charts using the DSL approach through chartInstance and D3 should be adjusted in accordance with the mentioned changes. This ensures a smooth transition post this upgrade and helps avoid any disruptions to the charts.
