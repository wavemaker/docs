---
last_update: { author: "Author Name" }
---

# Web Components

Comprehensive guide to building reusable web components for modern web applications.

## Overview

Web components provide a way to create reusable, encapsulated UI elements that work across different frameworks and platforms. This guide covers building and using web components in your applications.

## Core Concepts

### Custom Elements

Define your own HTML elements with custom behavior.

```javascript
class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        button {
          padding: 10px 20px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background: #0056b3;
        }
      </style>
      <button>
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('my-button', MyButton);
```

### Shadow DOM

Encapsulate styles and markup within components.

```javascript
class CardComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .card-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 10px;
        }
      </style>
      <div class="card">
        <div class="card-title">
          <slot name="title"></slot>
        </div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('card-component', CardComponent);
```

Usage:
```html
<card-component>
  <span slot="title">Card Title</span>
  <p>Card content goes here</p>
</card-component>
```

### HTML Templates

Reusable markup templates.

```html
<template id="user-card-template">
  <style>
    .user-card {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 15px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
    }
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  </style>
  <div class="user-card">
    <img class="avatar" src="" alt="">
    <div>
      <h3 class="name"></h3>
      <p class="email"></p>
    </div>
  </div>
</template>

<script>
class UserCard extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById('user-card-template');
    const content = template.content.cloneNode(true);
    this.attachShadow({ mode: 'open' }).appendChild(content);
  }

  set user(data) {
    this.shadowRoot.querySelector('.avatar').src = data.avatar;
    this.shadowRoot.querySelector('.name').textContent = data.name;
    this.shadowRoot.querySelector('.email').textContent = data.email;
  }
}

customElements.define('user-card', UserCard);
</script>
```

## Common Component Patterns

### Button Component

```javascript
class CustomButton extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'size', 'disabled'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const variant = this.getAttribute('variant') || 'primary';
    const size = this.getAttribute('size') || 'medium';
    const disabled = this.hasAttribute('disabled');

    this.shadowRoot.innerHTML = `
      <style>
        button {
          padding: ${size === 'small' ? '5px 10px' : size === 'large' ? '15px 30px' : '10px 20px'};
          background: ${variant === 'primary' ? '#007bff' : variant === 'secondary' ? '#6c757d' : '#28a745'};
          color: white;
          border: none;
          border-radius: 4px;
          cursor: ${disabled ? 'not-allowed' : 'pointer'};
          opacity: ${disabled ? '0.6' : '1'};
          font-size: ${size === 'small' ? '12px' : size === 'large' ? '18px' : '14px'};
        }
        button:hover:not(:disabled) {
          opacity: 0.8;
        }
      </style>
      <button ${disabled ? 'disabled' : ''}>
        <slot></slot>
      </button>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('custom-button', CustomButton);
```

Usage:
```html
<custom-button variant="primary" size="large">Click Me</custom-button>
<custom-button variant="secondary" disabled>Disabled</custom-button>
```

### Input Component

```javascript
class CustomInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const label = this.getAttribute('label') || '';
    const type = this.getAttribute('type') || 'text';
    const placeholder = this.getAttribute('placeholder') || '';
    const required = this.hasAttribute('required');

    this.shadowRoot.innerHTML = `
      <style>
        .input-wrapper {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        label {
          font-weight: 500;
          font-size: 14px;
        }
        input {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }
        input:focus {
          outline: none;
          border-color: #007bff;
        }
        .required {
          color: red;
        }
      </style>
      <div class="input-wrapper">
        <label>
          ${label}
          ${required ? '<span class="required">*</span>' : ''}
        </label>
        <input type="${type}" placeholder="${placeholder}" ${required ? 'required' : ''}>
      </div>
    `;

    this.shadowRoot.querySelector('input').addEventListener('input', (e) => {
      this.dispatchEvent(new CustomEvent('value-changed', {
        detail: { value: e.target.value }
      }));
    });
  }
}

customElements.define('custom-input', CustomInput);
```

### Modal Component

```javascript
class ModalDialog extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .modal-backdrop {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-backdrop.open {
          display: flex;
        }
        .modal-content {
          background: white;
          border-radius: 8px;
          padding: 20px;
          max-width: 500px;
          width: 90%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }
        .close-button {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }
      </style>
      <div class="modal-backdrop">
        <div class="modal-content">
          <div class="modal-header">
            <slot name="header"></slot>
            <button class="close-button">&times;</button>
          </div>
          <slot></slot>
        </div>
      </div>
    `;

    this.shadowRoot.querySelector('.close-button').addEventListener('click', () => {
      this.close();
    });

    this.shadowRoot.querySelector('.modal-backdrop').addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-backdrop')) {
        this.close();
      }
    });
  }

  open() {
    this.shadowRoot.querySelector('.modal-backdrop').classList.add('open');
  }

  close() {
    this.shadowRoot.querySelector('.modal-backdrop').classList.remove('open');
  }
}

customElements.define('modal-dialog', ModalDialog);
```

## Component Libraries

### Popular Web Component Libraries

1. **Lit**: Lightweight library for building web components
2. **Stencil**: Compiler for web components
3. **Polymer**: Google's web component library
4. **Shoelace**: Professional UI components

### Using Lit

```javascript
import { LitElement, html, css } from 'lit';

class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
    .button {
      background: #007bff;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
    }
  `;

  static properties = {
    count: { type: Number }
  };

  constructor() {
    super();
    this.count = 0;
  }

  render() {
    return html`
      <button class="button" @click=${this._increment}>
        Count: ${this.count}
      </button>
    `;
  }

  _increment() {
    this.count++;
  }
}

customElements.define('my-element', MyElement);
```

## Best Practices

1. **Encapsulation**: Use Shadow DOM for style isolation
2. **Accessibility**: Include ARIA attributes and keyboard navigation
3. **Performance**: Lazy load components when possible
4. **Naming**: Use kebab-case for custom element names with a prefix
5. **Documentation**: Document component APIs and usage
6. **Testing**: Write unit tests for component behavior
7. **Progressive Enhancement**: Ensure basic functionality without JavaScript

## Framework Integration

### React Integration

```javascript
import React, { useEffect, useRef } from 'react';

function WebComponentWrapper({ user }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.user = user;
    }
  }, [user]);

  return <user-card ref={ref}></user-card>;
}
```

### Vue Integration

```vue
<template>
  <custom-button @click="handleClick">
    Click Me
  </custom-button>
</template>

<script>
export default {
  methods: {
    handleClick(e) {
      console.log('Button clicked', e);
    }
  }
}
</script>
```

## Related Documentation

- [Mobile Components](./mobile.md) - Mobile component development
- [Styling with Design Tokens](../develop/styling-with-design-tokens.md) - Design token usage
- [State Management](../develop/state-management.md) - State management patterns
