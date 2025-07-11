---
title: "OAuth 2.0 Silent SSO Example"
id: "oauth-silent-sso-example"
sidebar_label: "OAuth 2.0 Silent SSO Example"
---
---

This step-by-step guide demonstrates implementing OAuth 2.0 Silent SSO with PKCE using two WaveMaker React Native applications. The guide shows how App 1 (SSOAppOne) performs initial authentication and shares tokens with App 2 (SSOAppTwo) for silent login.

## Application Overview

We need to create two separate WaveMaker React Native applications with the following configurations:

### App 1: SSOAppOne
- **Bundle ID**: `com.wavemaker.ssoappone`
- **Role**: Primary authentication app
- **Functionality**: Performs OAuth login and shares tokens

### App 2: SSOAppTwo
- **Bundle ID**: `com.wavemaker.ssoapptwo`
- **Role**: Secondary app with silent login
- **Functionality**: Reads shared tokens for seamless authentication


## Step 1: Prerequisites

### iOS App Groups Setup

Before implementing OAuth Silent SSO, you must enable App Groups capability for both iOS applications in your Apple Developer account.

**Sign in to Apple Developer Account**
- Go to [Apple Developer Portal](https://developer.apple.com/account/)
- Navigate to **Certificates, Identifiers & Profiles**

**Configure App Groups for Each App ID**

**For App 1 (SSOAppOne):**
- Click **Identifiers** in the sidebar
- Select your App ID for `com.wavemaker.ssoappone`
- Click **Edit**
- Select the **App Groups** checkbox to enable the capability
- Click **Configure**

**For App 2 (SSOAppTwo):**
- Repeat the same steps for `com.wavemaker.ssoapptwo`

**Create or Assign App Group**
- In the App Groups table, select `group.com.wavemaker.ssoappcommon`
- If the app group doesn't exist, click **Create App Group**:
  - **Description**: WaveMaker SSO App Common Group
  - **Identifier**: `group.com.wavemaker.ssoappcommon`
- Click **Continue**

:::note
- Ensure both `com.wavemaker.ssoappone` and `com.wavemaker.ssoapptwo` are assigned to the same App Group
- Refer [Enable App Groups](https://developer.apple.com/help/account/identifiers/enable-app-capabilities#enable-app-groups) for more details
- This step is only required for iOS applications. Android applications do not need App Groups configuration as they use different mechanisms for data sharing.
:::

## Step 2: Add Required Libraries

### Add Plugins via WaveMaker Studio

In **both applications**, add the required plugins through WaveMaker Studio:

**Go to Plugin Settings**
1. Go to **Settings** → **Build Preferences** → **Plugins**
2. Under **More Plugins**, select **npm**
3. Add the following plugins with their specific versions:

**Required Plugins to Add:**
- **base-64**: `1.0.0`
- **react-native-app-auth**: `8.0.3`
- **react-native-app-data-sharing**: `1.1.0`
- **@wavemaker/react-native-app-auth-expo-plugin**: `1.0.0`
- **@wavemaker/react-native-app-data-sharing-expo-plugin**: `1.0.0`

**Add Each Plugin:**
1. Enter the plugin name (e.g., `react-native-app-auth`)
2. Enter the version number (e.g., `8.0.3`)
3. Click **"Add"** and then **"Save"**

## Step 3: Create OAuth Configuration Model Variables

### Create OAuth Configuration Variable

In **both applications**, create the OAuth configuration model variable:

- Navigate to **Design → Variables**
- Click **"New Variable"**
- Select **"Model"** as the variable type

**Configure the OAuth Variable**
- **Name**: `stvSSOConfig`
- **Owner**: `Application`
- **Type**: `Model`

**Set OAuth Configuration Data**

For **App 1 (SSOAppOne)**, use:
```json
{
  "issuer": "https://your-oauth-provider.com/tenant-id/policy-name/v2.0",
  "clientId": "your-client-id-here",
  "redirectUrl": "com.wavemaker.ssoappone://oauth/redirect",
  "scopes": [
    "https://your-oauth-provider.com/your-api-scope/access",
    "openid",
    "profile",
    "offline_access"
  ],
  "serviceConfiguration": {
    "authorizationEndpoint": "https://your-oauth-provider.com/tenant-id/policy-name/oauth2/v2.0/authorize",
    "tokenEndpoint": "https://your-oauth-provider.com/tenant-id/policy-name/oauth2/v2.0/token",
    "revocationEndpoint": "https://your-oauth-provider.com/tenant-id/policy-name/oauth2/v2.0/logout",
    "endSessionEndpoint": "https://your-oauth-provider.com/tenant-id/policy-name/oauth2/v2.0/logout"
  },
  "additionalParameters": {
    "p": "your-policy-name",
    "domain_hint": "your-domain-hint"
  }
}
```

For **App 2 (SSOAppTwo)**, use the same configuration but update:
- `redirectUrl`: `"com.wavemaker.ssoapptwo://oauth/redirect"`

:::note Configuration Note
- Replace `your-oauth-provider.com` with your actual OAuth provider domain and update `tenant-id`
- Ensure the `clientId` matches your OAuth provider's client registration
- The `scopes` array should include the specific API scopes your application needs
:::

### Create Token Key Model Variable

**Create another Variable**
- Navigate to **Design → Variables**
- Click **"New Variable"**
- Select **"Model"** as the variable type

**Configure Token Key Variable**
- **Name**: `stvTokenKey`
- **Owner**: `Application`
- **Type**: `Model`

**Set Token Key Data**
- For **App 1**: Set dataValue as `"com.wavemaker.ssoappone"`
- For **App 2**: Set dataValue as `"com.wavemaker.ssoapptwo"`

:::note
This variable provides a consistent key for storing and retrieving authentication tokens across the application.
:::

## Step 4: Configure Application Settings

In this step, we configure the `react-native-app-auth-expo-plugin` to handle OAuth 2.0 flows with custom redirect schemes and the `react-native-app-data-sharing-expo-plugin` to enable App 2 to receive and access authentication tokens shared by App 1, allowing for silent authentication without requiring user re-authentication.

### Configure App 1 (SSOAppOne) - app.json

Add or edit the `app.json` file in the following location:
**File Explorer → SSOAppOne/src/main/webapp/app.json**

Configure the file as shown below:

```json
{
  "expo": {
    "scheme": "com.wavemaker.ssoappone",
    "ios": {
      "config": {
        "usesNonExemptEncryption": false
      },
      "entitlements": {
        "com.apple.security.application-groups": ["group.com.wavemaker.ssoappcommon"],
        "keychain-access-groups": ["$(TeamIdentifierPrefix)com.wavemaker.ssoappcommon"]
      }
    },
    "android": {
      "versionCode": 2,
      "package": "com.wavemaker.ssoappone"
    },
    "plugins": [
      [
        "@wavemaker/react-native-app-auth-expo-plugin",
        {
          "redirectScheme": "com.wavemaker.ssoappone.auth",
          "enableUniversalLinks": false
        }
      ],
      [
        "@wavemaker/react-native-app-data-sharing-expo-plugin",
        {
          "appsBundleIds": ["com.wavemaker.ssoapptwo"]
        }
      ]
    ]
  }
}
```

### Configure App 2 (SSOAppTwo) - app.json

Add or edit the `app.json` file in the following location:
**File Explorer → SSOAppTwo/src/main/webapp/app.json**

Configure the file as shown below:

```json
{
  "expo": {
    "scheme": "com.wavemaker.ssoapptwo",
    "ios": {
      "bundleIdentifier": "com.wavemaker.ssoapptwo",
      "entitlements": {
        "com.apple.security.application-groups": ["group.com.wavemaker.ssoappcommon"],
        "keychain-access-groups": ["$(TeamIdentifierPrefix)com.wavemaker.ssoappcommon"]
      }
    },
    "android": {
      "versionCode": 2,
      "package": "com.wavemaker.ssoapptwo"
    },
    "plugins": [
      [
        "@wavemaker/react-native-app-auth-expo-plugin",
        {
          "redirectScheme": "com.wavemaker.ssoapptwo.auth",
          "enableUniversalLinks": false
        }
      ],
      [
        "@wavemaker/react-native-app-data-sharing-expo-plugin",
        {
          "appsBundleIds": ["com.wavemaker.ssoapptwo"]
        }
      ]
    ]
  }
}
```

## Step 5: Implement Authentication Services

In this step, we create `Auth_Service.js` files that handle comprehensive token management for both applications. The Auth Service provides a centralized authentication layer with methods like `login()`, `logout()`, `getTokens()`, `refresh()`, and `shouldRefreshToken()` that can be called from `app.js`. It manages OAuth 2.0 flows, secure token storage, JWT token decoding, and cross-app token sharing to enable seamless SSO functionality.

### Create Auth Service for App 1 (Primary Authentication)

Create a new file `Auth_Service.js` in the `SSOAppOne/src/main/webapp/resources/files` directory of App 1 and add the following code snippet:

```javascript
// SSOAppOne/src/main/webapp/resources/files/Auth_Service.js
import { authorize, refresh, logout } from 'react-native-app-auth';
import { decode as atobPolyfill } from 'base-64';
import * as WebBrowser from 'expo-web-browser';
import {
  clearData,
  deleteData,
  getAllSyncData,
  getData,
  initializeStore,
  saveData,
  updateData,
} from 'react-native-app-data-sharing';

const AsyncStorage = require('@react-native-async-storage/async-storage').default;

// Configuration for data sharing
const ApplicationId = 'com.wavemaker.ssoappone';
const APP_GROUP_ID = 'group.com.wavemaker.ssoappcommon';
const SERVICE_NAME = 'com.wavemaker.ssoappcommon';
const BUNDLE_IDS = ['com.wavemaker.ssoapptwo']; // Apps to share with

// App data sharing configuration
const storeConfig = {
  android: {
    appsBundleIds: BUNDLE_IDS,
  },
  ios: {
    accessGroup: APP_GROUP_ID,
    serviceName: SERVICE_NAME,
  },
};

const initSharedStore = async () => {
  try {
    await initializeStore(storeConfig);
    console.log('[AuthService] Shared store initialized.');
  } catch (error) {
    console.error('[AuthService] Error initializing shared store:', error);
  }
};

// Save full authState for sharing
const saveSharedAuthState = async (authState) => {
  await initSharedStore();
  await saveData('sharedauthstate', JSON.stringify(authState)); 
  console.log('[AuthService] Shared auth state saved.'); 
};

// Fetch full authState if needed
const getSharedAuthState = async () => {
  await initSharedStore();
  return await getData('sharedauthstate'); 
};

// Delete full authState
const clearSharedAuthState = async () => {
  await initSharedStore();
  await deleteData('sharedauthstate'); 
  console.log('[AuthService] Shared auth state deleted.');
};

// Decodes a JWT (JSON Web Token) to view its payload as JSON
const decodeJWT = (token) => {
  try {
    const [, payloadBase64] = token.split('.');
    let payload = payloadBase64.replace(/-/g, '+').replace(/_/g, '/');
    while (payload.length % 4) payload += '=';
    const decoded = atobPolyfill(payload);
    const json = JSON.parse(decoded);
    console.log('[AuthService] decodeJWT parsed payload:', json);
    return json;
  } catch (e) {
    console.warn('[AuthService] decodeJWT failed:', e);
    return null;
  }
};

const decodeAndConstructUser = (token) => {
  try {
    const payload = decodeJWT(token);
    if (!payload) return null;

    const user = {
      fullName: payload.name || `${payload.given_name || ''} ${payload.family_name || ''}`.trim(),
      givenName: payload.given_name || '',
      familyName: payload.family_name || '',
      email: payload.email || '',
    };

    console.log('[AuthService] decodeAndConstructUser:', user);
    return user;
  } catch (e) {
    console.error('[AuthService] Failed to decode and construct user:', e);
    return null;
  }
};

const AuthService = {
  // Starts the login flow using OAuth 2.0 with PKCE
  login: async (config, TOKEN_KEY) => {
    try {
      console.log('[AuthService] Initiating login...');
      const authState = await authorize(config);

      console.log('[AuthService] Login response:', authState);

      // Decode tokens to inspect their payloads
      if (authState.idToken) {
        console.log('[AuthService] Decoded idToken:', decodeJWT(authState.idToken));
      }
      if (authState.accessToken) {
        console.log('[AuthService] Decoded accessToken:', decodeJWT(authState.accessToken));
      }

      console.log('[AuthService] Tokens stored successfully under key:', TOKEN_KEY);
      await saveSharedAuthState(authState); // Save full authState for sharing
      return authState;
    } catch (error) {
      console.error('[AuthService] Login failed:', error);
      throw error;
    }
  },

  // Logs the user out and removes user's data
  logout: async (config, TOKEN_KEY, onSuccess) => {
    try {
      console.log('[AuthService] Logging out...');
      const tokens = await AuthService.getTokens(config, TOKEN_KEY);
      console.log('[AuthService] Tokens before logout:', tokens);

      if (tokens?.accessToken) {
        await logout(config, {
          idToken: tokens.idToken,
          postLogoutRedirectUrl: config.postredirectUrl,
        });
        console.log('[AuthService] User logged out.');
      }

      await clearSharedAuthState();
      console.log('[AuthService] Cleared token storage.');

      await AsyncStorage.removeItem('accessToken');
      await AsyncStorage.removeItem('userProfile');
      console.log('[Logout] Cleared AsyncStorage tokens and user profile');

      if (typeof onSuccess === 'function') {
        onSuccess();
      }
    } catch (error) {
      console.error('[AuthService] Logout failed:', error);
    }
  },

  // Refreshes the access token using the saved refresh token
  refresh: async (config, TOKEN_KEY) => {
    try {
      console.log('[AuthService] Attempting token refresh...');
      const tokens = await AuthService.getTokens(config, TOKEN_KEY);
      console.log('[AuthService] Tokens before refresh:', tokens);

      if (!tokens?.refreshToken) {
        throw new Error('No refresh token available');
      }

      const newAuthState = await refresh(config, {
        refreshToken: tokens.refreshToken,
      });

      console.log('[AuthService] Refreshed auth state:', newAuthState);

      // Merge new tokens with old ones
      const mergedTokens = {
        ...tokens,
        ...newAuthState,
        refreshToken: newAuthState.refreshToken || tokens.refreshToken,
      };

      await saveSharedAuthState(mergedTokens);
      console.log('[AuthService] Token refresh successful and stored.');
      return mergedTokens;
    } catch (error) {
      console.error('[AuthService] Token refresh failed:', error);
    }
  },

  // Retrieves stored tokens from shared storage
  getTokens: async (config, TOKEN_KEY) => {
    try {
      await initSharedStore();

      // Fetch full auth state from shared store
      const allData = await getAllSyncData();
      console.log('[AuthService] Shared data fetched:', allData);

      const sharedAuthStateStr = allData.sharedauthstate;

      if (sharedAuthStateStr) {
        const sharedAuthState = JSON.parse(sharedAuthStateStr);
        console.log('[AuthService] Shared auth state retrieved successfully:', sharedAuthState);
        return sharedAuthState;
      }
      return null;
    } catch (error) {
      console.error('[AuthService] Failed to get tokens:', error);
      return null;
    }
  },

  // Determines whether the access token should be refreshed
  shouldRefreshToken: (tokens) => {
    if (!tokens?.accessTokenExpirationDate) return true;

    const expiry = new Date(tokens.accessTokenExpirationDate).getTime();
    const now = new Date().getTime();
    const buffer = 5 * 60 * 1000; // Refresh if less than 5 mins remain

    const shouldRefresh = now + buffer > expiry;
    console.log('[AuthService] Should refresh token:', shouldRefresh);
    return shouldRefresh;
  },

  getSharedAuthState,
  decodeAndConstructUser,
};

export default AuthService;
```

### Create Auth Service for App 2 (Silent Login)

Create a new file `Auth_Service.js` in the `SSOAppTwo/src/main/webapp/resources/files` directory of App 2 and add the following code snippet:

```javascript
// SSOAppTwo/src/main/webapp/resources/files/Auth_Service.js
import { authorize, refresh, logout } from 'react-native-app-auth';
import { decode as atobPolyfill } from 'base-64';
import * as WebBrowser from 'expo-web-browser';
import {
  clearData,
  deleteData,
  getAllSyncData,
  getData,
  initializeStore,
  saveData,
  updateData
} from 'react-native-app-data-sharing';

const AsyncStorage = require('@react-native-async-storage/async-storage').default;

// Shared store config
const ApplicationId = 'com.wavemaker.ssoapptwo';
const storeConfig = {
  android: {
    appsBundleIds: ['com.wavemaker.ssoappone'], // Source app
  },
  ios: {
    accessGroup: 'group.com.wavemaker.ssoappcommon',
    serviceName: 'com.wavemaker.ssoappcommon',
  },
};

const initSharedStore = async () => {
  try {
    console.log('[AuthService] Initializing store for shared tokens...');
    await initializeStore(storeConfig);
  } catch (error) {
    console.error('[AuthService] Error initializing shared store:', error);
  }
};

const saveSharedAuthState = async (authState) => {
  await initSharedStore();
  await saveData('sharedauthstate', JSON.stringify(authState)); 
  console.log('[AuthService] Shared auth state saved.'); 
};

const getSharedAuthState = async () => {
  await initSharedStore();
  return await getData('sharedauthstate'); 
};

const clearSharedAuthState = async () => {
  await initSharedStore();
  await deleteData('sharedauthstate'); 
  console.log('[AuthService] Shared auth state deleted.');
};

// Same JWT decoding functions as App 1
const decodeJWT = (token) => {
  try {
    const [, payloadBase64] = token.split('.');
    let payload = payloadBase64.replace(/-/g, '+').replace(/_/g, '/');
    while (payload.length % 4) payload += '=';
    const decoded = atobPolyfill(payload);
    const json = JSON.parse(decoded);
    console.log('[AuthService] decodeJWT parsed payload:', json);
    return json;
  } catch (e) {
    console.warn('[AuthService] decodeJWT failed:', e);
    return null;
  }
};

const decodeAndConstructUser = (token) => {
  try {
    const payload = decodeJWT(token);
    if (!payload) return null;

    const user = {
      fullName: payload.name || `${payload.given_name || ''} ${payload.family_name || ''}`.trim(),
      givenName: payload.given_name || '',
      familyName: payload.family_name || '',
      email: payload.email || '',
    };

    console.log('[AuthService] decodeAndConstructUser:', user);
    return user;
  } catch (e) {
    console.error('[AuthService] Failed to decode and construct user:', e);
    return null;
  }
};

const AuthService = {
  // App 2 can still perform login if needed
  login: async (config, TOKEN_KEY) => {
    try {
      console.log('[AuthService] Initiating login...');
      const authState = await authorize(config);
      console.log('[AuthService] Login response:', authState);
      await saveSharedAuthState(authState);
      return authState;
    } catch (error) {
      console.error('[AuthService] Login failed:', error);
      throw error;
    }
  },

  // Primary function: Retrieve shared tokens from App 1
  getTokens: async (config, TOKEN_KEY) => {
    try {
      await initSharedStore();

      const allData = await getAllSyncData();
      console.log('[AuthService] Shared data fetched:', allData);

      const sharedAuthStateStr = allData.sharedauthstate;

      if (sharedAuthStateStr) {
        const sharedAuthState = JSON.parse(sharedAuthStateStr);
        console.log('[AuthService] Shared auth state retrieved successfully:', sharedAuthState);
        return sharedAuthState;
      }
      return null;
    } catch (error) {
      console.error('[AuthService] Failed to get tokens:', error);
      return null;
    }
  },

  // Other methods remain the same as App 1
  logout: async (config, TOKEN_KEY, onSuccess) => {
    try {
      console.log('[AuthService] Logging out...');
      const tokens = await AuthService.getTokens(config, TOKEN_KEY);

      if (tokens?.accessToken) {
        await logout(config, {
          idToken: tokens.idToken,
          postLogoutRedirectUrl: config.postredirectUrl,
        });
      }

      await clearSharedAuthState();
      await AsyncStorage.removeItem('accessToken');
      await AsyncStorage.removeItem('userProfile');

      if (typeof onSuccess === 'function') {
        onSuccess();
      }
    } catch (error) {
      console.error('[AuthService] Logout failed:', error);
    }
  },

  shouldRefreshToken: (tokens) => {
    if (!tokens?.accessTokenExpirationDate) return true;
    const expiry = new Date(tokens.accessTokenExpirationDate).getTime();
    const now = new Date().getTime();
    const buffer = 5 * 60 * 1000;
    return now + buffer > expiry;
  },

  getSharedAuthState,
  decodeAndConstructUser,
};

export default AuthService;
```

## Step 6: Implement Application Logic

In this step, we implement the core application logic in `app.js` files that orchestrate the authentication flow for both applications. We create handlers like `App.handleLogin()`, `App.handleLoginOnsignin()`, and `App.handleLogout()` that integrate with the Auth Service, manage token persistence using AsyncStorage, handle user profile extraction from JWT tokens, and implement different authentication strategies (primary OAuth for App 1 vs silent token retrieval for App 2) to deliver seamless SSO user experiences.

### Configure App 1 (app.js)

Update your `app.js` file in App 1 with the following code:

```javascript
// SSOAppOne/src/main/webapp/app.js
const AsyncStorage = require('@react-native-async-storage/async-storage').default;

// OAuth configuration
const oauthConfig = {
  issuer: 'https://your-oauth-provider.com',
  clientId: 'your-client-id',
  redirectUrl: 'com.wavemaker.ssoappone.auth://oauth/redirect',
  scopes: ['openid', 'profile', 'email', 'offline_access'],
  usePKCE: true,
  useNonce: true,
};

App.onPageReady = function (activePageName, activePageScope, $activePageEl) {
  if (activePageName != "Login" && Boolean(App.Widgets.CommonLoginDialog)) {
    App.Widgets.CommonLoginDialog.close();
  }

  (async function () {
    if (!App.persistedToken) {
      await getAccessToken();
    }
  })();
};

// Primary login handler - checks for existing tokens first
App.handleLogin = async function () {
  const AuthService = require("./assets/resources/files/Auth_Service").default;
  try {
    // First check if we already have tokens
    const existingTokens = await AuthService.getTokens(
      App.Variables.stvSSOConfig.dataSet,
      App.Variables.stvTokenKey.dataSet.dataValue
    );

    if (existingTokens && existingTokens.accessToken) {
      console.log('[handleLogin] Existing tokens found, skipping login.');
      App.tokensretrieved = JSON.stringify(existingTokens);
      setAccessToken(existingTokens);
      App.Actions.goToPage_Home.navigate()
      return;
    }

    console.log("[handleLogin] No existing tokens — starting login flow.");
    // If no tokens, user needs to perform OAuth login
    
  } catch (e) {
    console.error('[handleLogin] Login Error:', e);
  }
};

// OAuth login handler
App.handleLoginOnsignin = async function () {
  try {
    const AuthService = require("./assets/resources/files/Auth_Service").default;
    
    const tokens = await AuthService.login(
      App.Variables.stvSSOConfig.dataSet,
      App.Variables.stvTokenKey.dataSet.dataValue
    );

    console.log('Login Success:', tokens);
    App.tokensretrieved = JSON.stringify(tokens);
    setAccessToken(tokens);
    App.Actions.goToPage_Home.navigate()
  } catch (error) {
    console.error('[App.handleLoginOnsignin] Login failed:', error);
  }
};

// Store tokens in local storage and update UI
async function setAccessToken(tokens) {
  const AuthService = require("./assets/resources/files/Auth_Service").default;

  try {
    if (!tokens || !tokens.accessToken?.trim()) {
      console.warn('[SetLocalStorage] Invalid token object. Skipping save.');
      return;
    }

    const newToken = tokens.accessToken.trim();
    let existingToken = null;

    try {
      existingToken = (await AsyncStorage.getItem('accessToken'))?.trim() || null;
    } catch (readErr) {
      console.warn('[SetLocalStorage] Failed to read existing token:', readErr);
    }

    if (!existingToken || existingToken !== newToken) {
      try {
        await AsyncStorage.setItem('accessToken', newToken);
        console.log('[SetLocalStorage] Token saved successfully.');
      } catch (tokenWriteErr) {
        console.error('[SetLocalStorage] Failed to save accessToken:', tokenWriteErr);
        return;
      }

      let userProfile = null;
      try {
        userProfile = AuthService.decodeAndConstructUser(newToken);
      } catch (decodeErr) {
        console.warn('[SetLocalStorage] Failed to decode user profile:', decodeErr);
      }

      if (userProfile) {
        try {
          await AsyncStorage.setItem('userProfile', JSON.stringify(userProfile));
          console.log('[SetLocalStorage] User profile saved:', userProfile);
          
          // Update app variables
          const newUser = App.Variables.stvLoggedInUserDetails.dataSet;
          newUser.firstName = userProfile.givenName;
          newUser.lastName = userProfile.familyName;
          newUser.email = userProfile.email;
          newUser.fullName = userProfile.fullName;
          newUser.userId = "user_1";
          App.Variables.stvLoggedInUserDetails.dataSet = newUser;

          console.log('[SetLocalStorage] User profile set to stvLoggedInUserDetails:', userProfile);
        } catch (profileWriteErr) {
          console.error('[SetLocalStorage] Failed to save user profile:', profileWriteErr);
        }
      }
    }
  } catch (err) {
    console.error('[SetLocalStorage] Unexpected error during token storage:', err);
  }
}

// Retrieve tokens from local storage on app start
async function getAccessToken() {
  try {
    const token = await AsyncStorage.getItem('accessToken');
    App.persistedToken = token;
    console.log('[GetLocalStorage] accessToken:', token);

    if (!token) {
      console.warn('[GetLocalStorage] No accessToken found');
      return;
    }

    const userProfileStr = await AsyncStorage.getItem('userProfile');
    if (!userProfileStr) {
      console.warn('[GetLocalStorage] No userProfile found');
      return;
    }

    let userProfile = null;
    try {
      userProfile = JSON.parse(userProfileStr);
    } catch (e) {
      console.error('[GetLocalStorage] Invalid userProfile JSON:', e);
      return;
    }

    if (!userProfile || !userProfile.givenName) {
      console.warn('[GetLocalStorage] userProfile is incomplete or null');
      return;
    }

    const newUser = App.Variables.stvLoggedInUserDetails.dataSet;
    if (!newUser) {
      console.warn('[GetLocalStorage] stvLoggedInUserDetails is null');
      return;
    }

    newUser.firstName = userProfile.givenName;
    newUser.lastName = userProfile.familyName;
    newUser.email = userProfile.email;
    newUser.fullName = userProfile.fullName;
    newUser.userId = "user_1"; 
    App.Variables.stvLoggedInUserDetails.dataSet = newUser;

    console.log('[GetLocalStorage] User profile restored:', userProfile);
  } catch (e) {
    console.error('[GetLocalStorage] Error accessing AsyncStorage:', e);
  }
}

// Logout handler
App.handleLogout = async function () {
  const AuthService = require("./assets/resources/files/Auth_Service").default;
  await AuthService.logout(
    App.Variables.stvSSOConfig.dataSet,
    App.Variables.stvTokenKey.dataSet.dataValue,
    () => App.Actions.goToPage_Login.navigate()
  );
};
```

### Configure App 2 (app.js)

Update your `app.js` file in App 2 with the following code:

```javascript
// SSOAppTwo/src/main/webapp/app.js
const AsyncStorage = require('@react-native-async-storage/async-storage').default;
App.tokenChecked = false;

App.onPageReady = function (activePageName, activePageScope, $activePageEl) {
  (async function () {
    if (!App.persistedToken) {
      await getAccessToken();
    }

    // Check for existing tokens only once, excluding the Login page
    if (activePageName !== "Login" && !App.tokenChecked) {
      const tokenFetched = await App.checkAndSetExistingTokens();
      if (tokenFetched) {
        App.tokenChecked = true;
      }
    }
  })();
};

// Primary silent login function - checks for shared tokens from App 1
App.checkAndSetExistingTokens = async function () {
  try {
    const AuthService = require("./assets/resources/files/Auth_Service").default;
    const existingTokens = await AuthService.getTokens(
      App.Variables.stvSSOConfig.dataSet,
      App.Variables.stvTokenKey.dataSet.dataValue
    );

    if (existingTokens && existingTokens.accessToken) {
      console.log('[checkAndSetExistingTokens] Tokens found.');
      App.tokensretrieved = JSON.stringify(existingTokens);
      await setAccessToken(existingTokens);
      return true;
    }
  } catch (e) {
    console.error('[checkAndSetExistingTokens] Error:', e);
  }
  return false;
};

// Login handler for App 2 - prioritizes shared tokens
App.handleLogin = async function () {
  const AuthService = require("./assets/resources/files/Auth_Service").default;
  try {
    // First check if we already have tokens from App 1
    const existingTokens = await AuthService.getTokens(
      App.Variables.stvSSOConfig.dataSet,
      App.Variables.stvTokenKey.dataSet.dataValue
    );

    if (existingTokens && existingTokens.accessToken) {
      console.log('[handleLogin] Existing tokens found, skipping login.');
      App.tokensretrieved = JSON.stringify(existingTokens);
      setAccessToken(existingTokens);
      App.Actions.goToPage_Main.navigate();
      return;
    }

    console.log("[handleLogin] No existing tokens — starting login flow.");
    // If no shared tokens, user needs to perform OAuth login in this app
  } catch (e) {
    console.error('[handleLogin] Login Error:', e);
  }
};

// OAuth login handler (fallback if no shared tokens)
App.handleLoginOnsignin = async function () {
  try {
    const AuthService = require("./assets/resources/files/Auth_Service").default;
    
    const tokens = await AuthService.login(
      App.Variables.stvSSOConfig.dataSet,
      App.Variables.stvTokenKey.dataSet.dataValue
    );

    console.log('Login Success:', tokens);
    App.tokensretrieved = JSON.stringify(tokens);
    setAccessToken(tokens);
    App.Actions.goToPage_Main.navigate();
  } catch (error) {
    console.error('[App.handleLoginOnsignin] Login failed:', error);
  }
};

// Same token storage functions as App 1
async function setAccessToken(tokens) {
  // same implementation as App 1
}

async function getAccessToken() {
  // same implementation as App 1
}

// Logout handler
App.handleLogout = async function () {
  const AuthService = require("./assets/resources/files/Auth_Service").default;
  await AuthService.logout(
    App.Variables.stvSSOConfig.dataSet,
    App.Variables.stvTokenKey.dataSet.dataValue,
    () => App.Actions.goToPage_Login.navigate()
  );
};
```

## Step 7: Update Login Page

In this step, we update the Login page UI and scripts to connect the user interface with our authentication handlers. We add a sign-in button with proper event bindings and implement page-level scripts that call the App-level authentication methods, ensuring the login flow is triggered correctly and preventing multiple login attempts through proper event handling.

### Login Page Markup

In **both applications**, update your Login page markup to include the sign-in button with on-tap event:

```html
<wm-button class="btn-outlined text-white sign-in-btn" caption="bind:appLocale.Login_signInBtnLabel" type="button" name="signInBtn" iconposition="left" on-tap="signInBtnTap($event, widget)"></wm-button>
```

### Login Page Script

Add the following script to the Login page in **both applications**:

```javascript
/*
 * Use App.getDependency for Dependency Injection
 * eg: var DialogService = App.getDependency('DialogService');
 */
function once(fn) {
    let executed = false;
    return function (...args) {
        if (!executed) {
            fn(...args);
            executed = true;
        }
    }
}

const innerFunction = once(App.handleLogin);

/* perform any action on widgets/variables within this block */
Page.onReady = function () {
    /*
     * variables can be accessed through 'Page.Variables' property here
     * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
     * Page.Variables.loggedInUser.getData()
     *
     * widgets can be accessed through 'Page.Widgets' property here
     * e.g. to get value of text widget named 'username' use following script
     * 'Page.Widgets.username.datavalue'
     */

    innerFunction();
};

Page.signInBtnTap = function ($event, widget) {
    App.handleLoginOnsignin();
};
```

## Step 8: Testing and Verification

### Build and Test Apps

**Generate Native Code**
```bash
npx expo prebuild --clean
```

**Run Development Builds**
```bash
# For iOS
npx expo run:ios

# For Android
npx expo run:android
```

### Testing Flow

**Test App 1 (Primary Authentication)**
1. Open App 1 (SSOAppOne)
2. Navigate to Login page
3. Tap the "Sign In" button
4. Complete OAuth authentication in browser
5. Verify successful login and token storage

**Test App 2 (Silent Login)**
1. Open App 2 (SSOAppTwo) 
2. Verify automatic silent login without showing login page
3. Check that user profile is loaded correctly
4. Verify seamless authentication experience
