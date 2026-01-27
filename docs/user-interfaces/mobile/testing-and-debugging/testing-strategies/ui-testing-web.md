---
last_update: { author: "Author Name" }
---

# UI Testing Web

Comprehensive strategies for testing web user interfaces to ensure quality and reliability.

## Overview

UI testing for web applications verifies that the user interface works correctly and provides a good user experience. This includes functional testing, visual regression testing, accessibility testing, and performance testing.

## Types of UI Testing

### 1. Unit Testing

Testing individual components in isolation.

```javascript
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('button renders with correct text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

### 2. Integration Testing

Testing how components work together.

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('login form submission', async () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);

  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: 'user@example.com' },
  });

  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: 'password123' },
  });

  fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

  await waitFor(() => {
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'user@example.com',
      password: 'password123',
    });
  });
});
```

### 3. End-to-End Testing

Testing complete user flows through the application.

## E2E Testing Tools

### Cypress

Modern end-to-end testing framework.

**Installation:**
```bash
npm install --save-dev cypress
```

**Basic Test:**
```javascript
describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login successfully with valid credentials', () => {
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');
    cy.contains('Welcome back').should('be.visible');
  });

  it('should show error with invalid credentials', () => {
    cy.get('input[name="email"]').type('wrong@example.com');
    cy.get('input[name="password"]').type('wrongpass');
    cy.get('button[type="submit"]').click();

    cy.contains('Invalid credentials').should('be.visible');
    cy.url().should('include', '/login');
  });

  it('should validate required fields', () => {
    cy.get('button[type="submit"]').click();

    cy.contains('Email is required').should('be.visible');
    cy.contains('Password is required').should('be.visible');
  });
});
```

**Custom Commands:**
```javascript
// cypress/support/commands.js
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

// Usage
cy.login('user@example.com', 'password123');
```

### Playwright

Cross-browser automation framework.

**Installation:**
```bash
npm install --save-dev @playwright/test
```

**Basic Test:**
```javascript
import { test, expect } from '@playwright/test';

test.describe('Shopping Cart', () => {
  test('add item to cart', async ({ page }) => {
    await page.goto('/products');

    await page.click('text=Add to Cart');

    await page.click('[aria-label="View cart"]');

    await expect(page.locator('.cart-item')).toHaveCount(1);
    await expect(page.locator('.cart-total')).toContainText('$29.99');
  });

  test('remove item from cart', async ({ page }) => {
    await page.goto('/cart');

    await page.click('[aria-label="Remove item"]');

    await expect(page.locator('.cart-empty')).toBeVisible();
    await expect(page.locator('.cart-item')).toHaveCount(0);
  });
});
```

**Multiple Browser Testing:**
```javascript
import { test, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 12'],
});

test('mobile responsive layout', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.mobile-menu')).toBeVisible();
});
```

### Puppeteer

Headless Chrome automation.

**Installation:**
```bash
npm install --save-dev puppeteer
```

**Basic Test:**
```javascript
const puppeteer = require('puppeteer');

describe('Search functionality', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('performs search', async () => {
    await page.goto('http://localhost:3000');

    await page.type('#search-input', 'test query');
    await page.click('#search-button');

    await page.waitForSelector('.search-results');

    const results = await page.$$('.result-item');
    expect(results.length).toBeGreaterThan(0);
  });
});
```

## Visual Regression Testing

### Percy

Visual testing and review platform.

**Installation:**
```bash
npm install --save-dev @percy/cli @percy/cypress
```

**Cypress Integration:**
```javascript
import '@percy/cypress';

describe('Visual Tests', () => {
  it('homepage looks correct', () => {
    cy.visit('/');
    cy.percySnapshot('Homepage');
  });

  it('product page looks correct', () => {
    cy.visit('/products/1');
    cy.percySnapshot('Product Page');
  });
});
```

### Chromatic

Visual testing for Storybook.

**Installation:**
```bash
npm install --save-dev chromatic
```

**Usage:**
```bash
npx chromatic --project-token=<token>
```

### BackstopJS

Visual regression testing tool.

**Installation:**
```bash
npm install --save-dev backstopjs
```

**Configuration:**
```javascript
// backstop.json
{
  "id": "my_app_test",
  "viewports": [
    {
      "label": "phone",
      "width": 320,
      "height": 480
    },
    {
      "label": "tablet",
      "width": 1024,
      "height": 768
    }
  ],
  "scenarios": [
    {
      "label": "Homepage",
      "url": "http://localhost:3000",
      "selectors": ["document"],
      "delay": 500
    }
  ]
}
```

## Accessibility Testing

### axe-core

Automated accessibility testing.

**Installation:**
```bash
npm install --save-dev @axe-core/react
```

**Integration:**
```javascript
import React from 'react';

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}
```

**Cypress Plugin:**
```javascript
import 'cypress-axe';

describe('Accessibility tests', () => {
  it('has no accessibility violations', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y();
  });

  it('checks specific component', () => {
    cy.visit('/form');
    cy.injectAxe();
    cy.checkA11y('.contact-form');
  });
});
```

### Pa11y

Automated accessibility testing tool.

**Installation:**
```bash
npm install --save-dev pa11y
```

**Usage:**
```javascript
const pa11y = require('pa11y');

test('page is accessible', async () => {
  const results = await pa11y('http://localhost:3000');

  expect(results.issues).toHaveLength(0);
});
```

## Performance Testing

### Lighthouse CI

Automated performance testing.

**Installation:**
```bash
npm install --save-dev @lhci/cli
```

**Configuration:**
```javascript
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run serve',
      url: ['http://localhost:3000'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
  },
};
```

### Web Vitals Testing

```javascript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

describe('Performance metrics', () => {
  test('LCP is under 2.5s', async () => {
    const lcp = await new Promise(resolve => {
      getLCP(resolve);
    });

    expect(lcp.value).toBeLessThan(2500);
  });

  test('FID is under 100ms', async () => {
    const fid = await new Promise(resolve => {
      getFID(resolve);
    });

    expect(fid.value).toBeLessThan(100);
  });
});
```

## Testing Best Practices

### 1. Use Page Object Model

```javascript
// pages/LoginPage.js
class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.submitButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('.error-message');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }
}

// Usage in test
import { LoginPage } from './pages/LoginPage';

test('login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('invalid@example.com', 'wrongpass');

  const error = await loginPage.getErrorMessage();
  expect(error).toContain('Invalid credentials');
});
```

### 2. Use Test Data Factories

```javascript
// factories/userFactory.js
export const createUser = (overrides = {}) => ({
  id: Math.random().toString(36).substr(2, 9),
  name: 'Test User',
  email: 'test@example.com',
  role: 'user',
  ...overrides,
});

// Usage
test('displays user profile', () => {
  const user = createUser({ name: 'John Doe' });
  render(<UserProfile user={user} />);
  expect(screen.getByText('John Doe')).toBeInTheDocument();
});
```

### 3. Clean Up Between Tests

```javascript
beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit('/');
});

afterEach(() => {
  // Clean up any test data
  cy.task('cleanDatabase');
});
```

### 4. Use Data Attributes for Testing

```jsx
// Component
<button data-testid="submit-button" onClick={handleSubmit}>
  Submit
</button>

// Test
cy.get('[data-testid="submit-button"]').click();
```

### 5. Test User Journeys

```javascript
describe('Complete purchase flow', () => {
  it('user can complete a purchase', () => {
    // Browse products
    cy.visit('/products');
    cy.contains('Running Shoes').click();

    // Add to cart
    cy.get('[data-testid="add-to-cart"]').click();
    cy.contains('Added to cart').should('be.visible');

    // Go to cart
    cy.get('[aria-label="Cart"]').click();
    cy.url().should('include', '/cart');

    // Proceed to checkout
    cy.contains('Proceed to Checkout').click();

    // Fill shipping info
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="address"]').type('123 Main St');
    cy.contains('Continue').click();

    // Fill payment info
    cy.get('input[name="cardNumber"]').type('4242424242424242');
    cy.get('input[name="expiry"]').type('12/25');
    cy.get('input[name="cvc"]').type('123');

    // Complete order
    cy.contains('Place Order').click();

    // Verify success
    cy.contains('Order confirmed').should('be.visible');
    cy.url().should('include', '/order-confirmation');
  });
});
```

## Cross-Browser Testing

### BrowserStack

Cloud-based testing platform.

```javascript
// wdio.conf.js
exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  services: ['browserstack'],
  capabilities: [
    {
      browserName: 'Chrome',
      'bstack:options': {
        os: 'Windows',
        osVersion: '10',
      },
    },
    {
      browserName: 'Safari',
      'bstack:options': {
        os: 'OS X',
        osVersion: 'Big Sur',
      },
    },
  ],
};
```

### Sauce Labs

```javascript
// playwright.config.js
module.exports = {
  use: {
    connectOptions: {
      wsEndpoint: `wss://ondemand.saucelabs.com:443/wd/hub`,
    },
  },
  projects: [
    {
      name: 'chrome',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'safari',
      use: { browserName: 'webkit' },
    },
  ],
};
```

## Continuous Integration

```yaml
# .github/workflows/test.yml
name: E2E Tests

on: [push, pull_request]

jobs:
  cypress:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Cypress run
        uses: cypress-io/github-action@v4
        with:
          start: npm start
          wait-on: 'http://localhost:3000'
          browser: chrome

      - name: Upload screenshots
        uses: actions/upload-artifact@v2
        if: failure()
        with:
          name: cypress-screenshots
          path: cypress/screenshots

  playwright:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright
        run: npx playwright install --with-deps

      - name: Run tests
        run: npx playwright test

      - name: Upload report
        uses: actions/upload-artifact@v2
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

## Test Reporting

### Mochawesome

HTML test reporter for Mocha.

```javascript
// cypress.json
{
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/results",
    "overwrite": false,
    "html": true,
    "json": true
  }
}
```

### Allure

Test reporting framework.

```bash
npm install --save-dev @wdio/allure-reporter
```

## Related Documentation

- [UI Testing Mobile](./ui-testing-mobile.md)
- [Web & Mobile](../unit-testing/web-and-mobile.md)
- [WavePulse](../wm-debugging-tools/wavepulse.md) – WaveMaker debugging tool
- [Debugging Overview](../debugging-overview.md) – All debugging tools and methods
- [Accessibility](../../enterprise-capabilities/accessibility.md)
