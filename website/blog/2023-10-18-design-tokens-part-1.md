---
title: "Design Tokens"
author: Lovin Ahmed
---
---

Design tokens are platform-agnostic variables. They are the single source of truth for the design system, and all applications that use the design system refer to them.

Design tokens allow designers to make sweeping changes to the look and feel of a product by simply changing the value of a single token. They are typically defined in human-readable formats like JSON or YAML, which makes them easy to understand and maintain.

Design tokens codify design decisions in a way that is easy to enforce, which helps to ensure consistency across all products that use the design system.

<!-- truncate -->

## What are Design Tokens?

Design tokens are the building blocks of a design system. They are platform-agnostic variables that represent the design elements of a product, such as typography, colors, spacing, and more. Design tokens can be shared across iOS, Android, and regular websites, and they provide the foundation for theming and design process automation to automate tasks in the design process, such as generating CSS variables or style guides.

## Who uses Design Tokens?

One of the fundamental questions when creating a design system is:

### Who is going to use it and how?

A design system is not just a project; it is a living document. Design systems are good for business and even better for people, providing a huge sense of relief for ***product managers***, ***project managers***, and ***VPs of Design***.

So, what does a design system do for your designers and developers?

Designers and developers benefit from design systems in a variety of ways. For example, design tokens allow designers to easily update and reproduce design changes throughout a project, eliminating the need to manually update elements individually. This saves time and effort, and ensures flawless visual consistency throughout the design process.

## Why should we use design tokens?

It is important for companies with many products to include design tokens in their design system. The complexity of the world we’re living in today where a single organization that is building multiple web apps and native applications needs to feel and look the same while not slowing down the development team.

As digital transformation accelerates, companies face the challenge of scaling design across an increasing number of screens, tech stacks, and product teams. As the product footprint grows, propagating even simple design decisions (such as a color change) can take weeks to accomplish.

To address this challenge, the design system team at Salesforce established a new data layer and a practice that helps scale design across multiple platforms and teams. They named it **Design Tokens**. By using design tokens, it can take minutes—instead of weeks—to implement design decisions across platforms

![why-tokens.png](/learn/assets/why-tokens.png)

The key benefits of using design tokens are

- Consistency
- Efficiency
- Flexibility
- Adaptability
- Documentation

Let’s try to understand with an example how adopting modular design tokens brings flexibility and scalability to design systems.

Let’s say we have a theme with a primary color as the dominant color and use it across different components like button, input fields, toggle, checkboxes, etc.

Now, suppose a designer decides to choose a darker shade for the primary color. We can do that using styles in Figma or other design tools, and CSS variables can handle this challenge and bring scale to some extent. But using just styles or variables alone cannot solve other complex challenges, like changing the primary color only in components where it is used as a background—this is where design tokens come into play.

Design tokens are not just limited to a color system; they can store everything from type or spatial systems to design assets.



## Design Tokens ≠ CSS Variables

Design tokens follow the same concept as design variables, but they do have their differences.

|Design Tokens| CSS Variables|
|----|----|
| Design tokens are a set of values that represent design decisions. They provide centralized control for designers and developers to change the design system | On the other hand, design variables are used to define reusable CSS values that can be updated throughout an application |
| Design tokens allow easy updates to the design language without changing individual files and stylesheets | Design variables use the var() function to specify the values, which are often scoped to a specific element or component |
| Design tokens can be used in a separate file or module | Design variables can be inherited from design tokens and overridden with a new value when applied to an element |

## Simplifying the Process

Tokens includes everything in css properties that goes within “” _values_, _spacing_, _sizing_, _rounded corners_, _fontweights_, _font sizes_, _line heights_, _shadows_, _font families_, _border colors_, _background colors_, _text colors_, _animation durations_, _z-indexes_, _media queries_, etc.

How can we start our design system using simplified tokens?

The solution is to use a concept similar to [atomic design](https://bradfrost.com/blog/post/atomic-web-design/), where we will have a base token and a semantic token.

### Base Token

The base token will represent the literal value of the property. It will be the base, and you don’t need to have many rules for creation, for example:

```css
colorBase {
color.blue.50 = #000022
color.blue.100 = #000033
}
```
### Semantic Token

Tokens that represent the character of the base design tokens If the designer decides the border color should be the brand primary, the border color will change accordingly.

```css
color.blue.50 = #000022
color.blue.100 = #000033

colorSemantic {
color.brand.primary = color.blue.100
button.border.color = color.brand.primary
}
```

### Types of Tokens

There are three types of design tokens:

#### Global Tokens

Global tokens control all instances of a particular design decision, and can be defined by their context or theme. You can refer to [Shades Generator](https://javisperez.github.io/tailwindcolorshades/) to create tonal colors.

![global-token.png](/learn/assets/global-token.png) 

#### Alias Tokens

Alias tokens are context-specific and reference global tokens. They are also known as semantic tokens.

![alias-token.png](/learn/assets/alias-token.png)

#### Component specific Tokens

Component-specific tokens are related to the individual parts of a component. Component-specific tokens are self-explanatory and aim to provide enough context about the use of token
  ![component-token.png](/learn/assets/component-token.png)

### Naming Design Tokens

As tokens become more sophisticated, naming patterns matter. For ease of use, it is recommended to use Category/Type/Item/Subitem/State (CTI) naming conventions to define tokens in a hierarchical tree structure of options and decisions.

Each token combines four levels -
1. **Namespace** levels combining any of _System_ (wm), _Theme_ (material, branding theme) or _Domain_
2. **Object** levels refer to a _component_ (button), _Element_ (left-icon) or _Component group_ (forms)
3. **Base** levels as a backbone combining _Category_ (color), _Concept_ (action) and _Property_ (size)
4. **Modifier** levels refer to one or more of _Variant_ (primary), _State_ (on-hover), _Scale_ (100), _Mode_ (on-dark)

Let's see an example token:

![example-token.png](/learn/assets/example-token.png)

## How does it work?

The design tokens can be broken down into a few main steps:

### Centralize

Manage design tokens in a single place in a platform-agnostic format (e.g., JSON or YAML).

```json
  json {
    “color”: {
      “primary”: { “value” : “#3366FF”},
      “text” : { “value” : “{color.primary.value}” },
    },
    “button”: {
      “background”: { “value”: “{color.primary.value}” },
      “text”:  { “value”: “{color.text.value}” }
    }
  }
```

### Transform

Use a build engine that takes design tokens as input and transforms them into platform-specific or framework-specific style files (e.g., CSS, Sass, iOS, Android, React, etc.). You can develop your own engine, or you can use existing ones like [Style Dictionary](https://amzn.github.io/style-dictionary/#/) and [Theo](https://github.com/salesforce-ux/theo).

```css
  css
  :root {
  --color-primary: #3366FF;
  --color-text: var(--color-primary);
  --button-background: var(--color-primary);
  --button-text: var(--color-text);
  }
```

We will learn more about using design tokens with or without a design system in the coming blogs.

## Conclusion

In conclusion, design tokens are not just a novel concept; they are the game changer for digital product design.

As we simplify the process, we can standardize the creation of design tokens, the naming conventions of design tokens, and the different types of design tokens. Using design tokens instead of hard coded values ensures more flexible design systems that are easy to build, maintain, and scale.

In the next blog post, see how it works with SaaS application and with WaveMaker.