---
last_update: { author: 'Author Name' }
---

# UI Testing Mobile

Comprehensive strategies for testing mobile user interfaces on iOS and Android platforms.

## Overview

Mobile UI testing ensures your application works correctly across different devices, screen sizes, and operating systems. This includes functional testing, UI automation, performance testing, and device-specific testing.

## Types of Mobile Testing

### 1. Unit Testing

### 2. Integration Testing

### 3. UI Automation Testing

### 4. Manual Testing

### 5. Device Testing

## Mobile Testing Frameworks

### Detox (React Native)

End-to-end testing framework for React Native.

**Installation:**

```bash
npm install --save-dev detox
npm install --save-dev detox-cli
```

**Configuration:**

```json
// .detoxrc.json
{
  "testRunner": "jest",
  "runnerConfig": "e2e/config.json",
  "configurations": {
    "ios.sim.debug": {
      "device": {
        "type": "iPhone 14"
      },
      "app": "ios.debug"
    },
    "android.emu.debug": {
      "device": {
        "avdName": "Pixel_4_API_30"
      },
      "app": "android.debug"
    }
  },
  "apps": {
    "ios.debug": {
      "type": "ios.app",
      "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/YourApp.app",
      "build": "xcodebuild -workspace ios/YourApp.xcworkspace -scheme YourApp -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build"
    },
    "android.debug": {
      "type": "android.apk",
      "binaryPath": "android/app/build/outputs/apk/debug/app-debug.apk",
      "build": "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug"
    }
  }
}
```

**Basic Test:**

```javascript
describe('Login Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show login screen', async () => {
    await expect(element(by.id('login-screen'))).toBeVisible();
  });

  it('should login with valid credentials', async () => {
    await element(by.id('email-input')).typeText('user@example.com');
    await element(by.id('password-input')).typeText('password123');
    await element(by.id('login-button')).tap();

    await expect(element(by.text('Welcome back'))).toBeVisible();
  });

  it('should show error with invalid credentials', async () => {
    await element(by.id('email-input')).typeText('wrong@example.com');
    await element(by.id('password-input')).typeText('wrongpass');
    await element(by.id('login-button')).tap();

    await expect(element(by.text('Invalid credentials'))).toBeVisible();
  });
});
```

**Gesture Testing:**

```javascript
describe('Gestures', () => {
  it('should swipe to delete item', async () => {
    await element(by.id('item-1')).swipe('left', 'fast', 0.8);
    await expect(element(by.id('delete-button'))).toBeVisible();
    await element(by.id('delete-button')).tap();

    await expect(element(by.id('item-1'))).not.toBeVisible();
  });

  it('should scroll to bottom', async () => {
    await element(by.id('list')).scrollTo('bottom');
    await expect(element(by.text('End of list'))).toBeVisible();
  });

  it('should pinch to zoom', async () => {
    await element(by.id('image')).pinchWithAngle('outward', 'slow', 0);
    await expect(element(by.id('image'))).toHaveScale(2.0);
  });
});
```

### Appium

Cross-platform mobile automation framework.

**Installation:**

```bash
npm install --save-dev appium
npm install --save-dev webdriverio
```

**Configuration:**

```javascript
// wdio.conf.js
exports.config = {
  runner: 'local',
  port: 4723,
  specs: ['./test/specs/**/*.js'],
  capabilities: [
    {
      platformName: 'iOS',
      'appium:deviceName': 'iPhone 14',
      'appium:platformVersion': '16.0',
      'appium:app': '/path/to/YourApp.app',
      'appium:automationName': 'XCUITest',
    },
    {
      platformName: 'Android',
      'appium:deviceName': 'Pixel 4',
      'appium:platformVersion': '11.0',
      'appium:app': '/path/to/app-debug.apk',
      'appium:automationName': 'UiAutomator2',
    },
  ],
  framework: 'mocha',
  mochaOpts: {
    timeout: 60000,
  },
};
```

**iOS Test:**

```javascript
describe('iOS App', () => {
  it('should find element by accessibility id', async () => {
    const button = await $('~login-button');
    await button.click();
  });

  it('should type text', async () => {
    const input = await $('~email-input');
    await input.setValue('user@example.com');
    expect(await input.getText()).toBe('user@example.com');
  });

  it('should navigate between screens', async () => {
    await $('~products-tab').click();
    await expect($('~product-list')).toBeDisplayed();
  });
});
```

**Android Test:**

```javascript
describe('Android App', () => {
  it('should find element by resource id', async () => {
    const button = await $('android=new UiSelector().resourceId("com.app:id/login")');
    await button.click();
  });

  it('should scroll to element', async () => {
    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text("Terms"))',
    );
    await expect($('~terms-checkbox')).toBeDisplayed();
  });

  it('should handle native alerts', async () => {
    await driver.acceptAlert();
  });
});
```

### Maestro

Declarative mobile UI testing framework.

**Installation:**

```bash
curl -Ls "https://get.maestro.mobile.dev" | bash
```

**Test Flow:**

```yaml
# login-flow.yaml
appId: com.example.app
---
- launchApp
- tapOn: 'Login'
- inputText: 'user@example.com'
- tapOn: 'Password'
- inputText: 'password123'
- tapOn: 'Sign In'
- assertVisible: 'Welcome back'
```

**Running Tests:**

```bash
maestro test login-flow.yaml
```

## XCUITest (iOS Native)

**Swift Test:**

```swift
import XCTest

class LoginTests: XCTestCase {
    var app: XCUIApplication!

    override func setUp() {
        super.setUp()
        continueAfterFailure = false
        app = XCUIApplication()
        app.launch()
    }

    func testLoginSuccess() {
        let emailField = app.textFields["email-input"]
        emailField.tap()
        emailField.typeText("user@example.com")

        let passwordField = app.secureTextFields["password-input"]
        passwordField.tap()
        passwordField.typeText("password123")

        app.buttons["login-button"].tap()

        XCTAssertTrue(app.staticTexts["Welcome back"].exists)
    }

    func testLoginFailure() {
        let emailField = app.textFields["email-input"]
        emailField.tap()
        emailField.typeText("wrong@example.com")

        let passwordField = app.secureTextFields["password-input"]
        passwordField.tap()
        passwordField.typeText("wrongpass")

        app.buttons["login-button"].tap()

        XCTAssertTrue(app.staticTexts["Invalid credentials"].exists)
    }
}
```

## Espresso (Android Native)

**Kotlin Test:**

```kotlin
import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.action.ViewActions.*
import androidx.test.espresso.assertion.ViewAssertions.matches
import androidx.test.espresso.matcher.ViewMatchers.*
import androidx.test.ext.junit.rules.ActivityScenarioRule
import androidx.test.ext.junit.runners.AndroidJUnit4
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class LoginActivityTest {

    @get:Rule
    val activityRule = ActivityScenarioRule(LoginActivity::class.java)

    @Test
    fun testLoginSuccess() {
        onView(withId(R.id.email_input))
            .perform(typeText("user@example.com"), closeSoftKeyboard())

        onView(withId(R.id.password_input))
            .perform(typeText("password123"), closeSoftKeyboard())

        onView(withId(R.id.login_button))
            .perform(click())

        onView(withText("Welcome back"))
            .check(matches(isDisplayed()))
    }

    @Test
    fun testLoginFailure() {
        onView(withId(R.id.email_input))
            .perform(typeText("wrong@example.com"), closeSoftKeyboard())

        onView(withId(R.id.password_input))
            .perform(typeText("wrongpass"), closeSoftKeyboard())

        onView(withId(R.id.login_button))
            .perform(click())

        onView(withText("Invalid credentials"))
            .check(matches(isDisplayed()))
    }
}
```

## Visual Testing

### Screenshotting

**Detox Screenshots:**

```javascript
describe('Visual Tests', () => {
  it('should match homepage screenshot', async () => {
    await device.takeScreenshot('homepage');
    await expect(element(by.id('home-screen'))).toBeVisible();
  });
});
```

**Appium Screenshots:**

```javascript
it('captures screenshot on failure', async () => {
  await driver.saveScreenshot('./screenshots/error.png');
});
```

### Percy for Mobile

```javascript
import { percyScreenshot } from '@percy/appium-app';

describe('Visual regression', () => {
  it('captures product screen', async () => {
    await percyScreenshot(driver, 'Product Screen');
  });
});
```

## Device Testing

### Real Device Testing

**BrowserStack:**

```javascript
// wdio.conf.js
exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  hostname: 'hub-cloud.browserstack.com',
  capabilities: [
    {
      'bstack:options': {
        deviceName: 'iPhone 14',
        osVersion: '16',
        realMobile: true,
      },
    },
    {
      'bstack:options': {
        deviceName: 'Samsung Galaxy S21',
        osVersion: '11.0',
        realMobile: true,
      },
    },
  ],
};
```

**Sauce Labs:**

```javascript
capabilities: [
  {
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 14 Simulator',
    'appium:platformVersion': '16.0',
    'sauce:options': {
      username: process.env.SAUCE_USERNAME,
      accessKey: process.env.SAUCE_ACCESS_KEY,
    },
  },
];
```

### Firebase Test Lab

```bash
# Upload and run tests on Firebase
gcloud firebase test android run \
  --type instrumentation \
  --app app-debug.apk \
  --test app-debug-test.apk \
  --device model=Pixel4,version=30,locale=en,orientation=portrait
```

## Performance Testing

### React Native Performance Monitor

```javascript
import { PerformanceObserver, performance } from 'react-native-performance';

const observer = new PerformanceObserver(list => {
  list.getEntries().forEach(entry => {
    console.log('Performance:', entry.name, entry.duration);
  });
});

observer.observe({ entryTypes: ['measure'] });

// Measure screen render time
performance.mark('screen-start');
// ... render screen
performance.mark('screen-end');
performance.measure('screen-render', 'screen-start', 'screen-end');
```

### Detox Performance Testing

```javascript
describe('Performance', () => {
  it('measures screen transition time', async () => {
    const start = Date.now();

    await element(by.id('products-tab')).tap();
    await waitFor(element(by.id('product-list')))
      .toBeVisible()
      .withTimeout(5000);

    const duration = Date.now() - start;
    expect(duration).toBeLessThan(1000); // Should load in under 1 second
  });
});
```

## Accessibility Testing

### iOS Accessibility Inspector

```swift
func testAccessibility() {
    let button = app.buttons["login-button"]

    XCTAssertTrue(button.isAccessibilityElement)
    XCTAssertEqual(button.accessibilityLabel, "Sign in")
    XCTAssertEqual(button.accessibilityHint, "Tap to sign in to your account")
}
```

### Android Accessibility Scanner

```kotlin
@Test
fun testAccessibility() {
    val button = onView(withId(R.id.login_button))

    button.check(matches(isClickable()))
    button.check(matches(hasContentDescription()))
}
```

## Testing Best Practices

### 1. Use Page Object Pattern

```javascript
// pages/LoginScreen.js
class LoginScreen {
  get emailInput() {
    return element(by.id('email-input'));
  }

  get passwordInput() {
    return element(by.id('password-input'));
  }

  get loginButton() {
    return element(by.id('login-button'));
  }

  get errorMessage() {
    return element(by.id('error-message'));
  }

  async login(email, password) {
    await this.emailInput.typeText(email);
    await this.passwordInput.typeText(password);
    await this.loginButton.tap();
  }

  async isVisible() {
    await expect(this.emailInput).toBeVisible();
  }
}

export default new LoginScreen();

// Usage in test
import LoginScreen from './pages/LoginScreen';

describe('Login', () => {
  it('should login successfully', async () => {
    await LoginScreen.isVisible();
    await LoginScreen.login('user@example.com', 'password123');
    await expect(element(by.text('Welcome'))).toBeVisible();
  });
});
```

### 2. Handle Platform Differences

```javascript
const isIOS = device.getPlatform() === 'ios';
const isAndroid = device.getPlatform() === 'android';

describe('Platform-specific tests', () => {
  it('handles back button', async () => {
    if (isAndroid) {
      await device.pressBack();
    } else {
      await element(by.id('back-button')).tap();
    }
  });
});
```

### 3. Wait for Elements

```javascript
// ✅ Good - Wait for element
await waitFor(element(by.id('loading-spinner')))
  .not.toBeVisible()
  .withTimeout(5000);

await waitFor(element(by.id('product-list')))
  .toBeVisible()
  .withTimeout(10000);

// ❌ Bad - Hardcoded delays
await new Promise(resolve => setTimeout(resolve, 3000));
```

### 4. Clean State Between Tests

```javascript
beforeEach(async () => {
  await device.reloadReactNative();
  // or
  await device.launchApp({ newInstance: true });
});

afterEach(async () => {
  await device.clearKeychain(); // iOS
  await device.uninstallApp(); // Clean install for next test
});
```

### 5. Test on Multiple Devices

```javascript
const devices = [
  { name: 'iPhone 14', type: 'iPhone 14' },
  { name: 'iPhone SE', type: 'iPhone SE (3rd generation)' },
  { name: 'iPad Pro', type: 'iPad Pro (12.9-inch)' },
];

devices.forEach(({ name, type }) => {
  describe(`Tests on ${name}`, () => {
    beforeAll(async () => {
      await device.selectDevice(type);
    });

    it('should display correctly', async () => {
      // Test implementation
    });
  });
});
```

## Debugging Mobile Tests

### Detox Debugging

```bash
# Run with debug logs
detox test --loglevel trace

# Take screenshot on failure
detox test --take-screenshots failing

# Record video
detox test --record-videos failing
```

### Appium Inspector

```bash
# Launch Appium Inspector
appium-inspector
```

### React Native Debugger

```javascript
// Enable debugging
import { NativeModules } from 'react-native';

if (__DEV__) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}
```

## Continuous Integration

```yaml
# .github/workflows/mobile-tests.yml
name: Mobile Tests

on: [push, pull_request]

jobs:
  ios:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v2

      - name: Install dependencies
        run: |
          npm install
          cd ios && pod install

      - name: Build app
        run: detox build --configuration ios.sim.release

      - name: Run tests
        run: detox test --configuration ios.sim.release --cleanup

      - name: Upload screenshots
        if: failure()
        uses: actions/upload-artifact@v2
        with:
          name: ios-screenshots
          path: artifacts/

  android:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v2

      - name: Setup Java
        uses: actions/setup-java@v2
        with:
          distribution: 'zulu'
          java-version: '11'

      - name: Install dependencies
        run: npm install

      - name: Build app
        run: detox build --configuration android.emu.release

      - name: Run tests
        uses: reactivecircus/android-emulator-runner@v2
        with:
          api-level: 30
          script: detox test --configuration android.emu.release

      - name: Upload artifacts
        if: failure()
        uses: actions/upload-artifact@v2
        with:
          name: android-artifacts
          path: artifacts/
```

## Test Organization

```
e2e/
├── specs/
│   ├── login.spec.js
│   ├── products.spec.js
│   └── checkout.spec.js
├── pages/
│   ├── LoginScreen.js
│   ├── ProductsScreen.js
│   └── CheckoutScreen.js
├── helpers/
│   ├── gestures.js
│   ├── navigation.js
│   └── data.js
└── config/
    ├── detox.config.js
    └── jest.config.js
```
