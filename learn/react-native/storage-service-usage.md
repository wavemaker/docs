---

title: "Storage Service"
id: "storage-service-usage"

---

Storage Services handle local data storage in React Native apps. Use [`StorageService`](#securestorage) for general app data and [`SecureStorageService`](#securestorageservice) for sensitive data.

## SecureStorage

`StorageService` is built on top of `@react-native-async-storage/async-storage` and is recommended for storing general, non-sensitive data such as user preferences, app flags, or cached information.

### Usage Example

```ts
App.getDependency('StorageService').setItem("superHero", "Batman");
```

### Supported Methods

| Method                | Description                                                                     |          |
| --------------------- | ------------------------------------------------------------------------------- | -------- |
| `getItem(key)`        | Retrieves the value for the given key. Returns a `Promise<string or null>`. |
| `setItem(key, value)` | Stores the value under the given key. Returns a `Promise<void>`.                |          |
| `removeItem(key)`     | Removes the value for the given key. Returns a `Promise<void>`.                 |          |
| `getAll()`            | Retrieves all stored key-value pairs as an object. Returns a `Promise<object>`. |          |

## SecureStorageService

`SecureStorageService` is intended for sensitive information like authentication tokens, passwords, or API keys. It uses `expo-secure-store` (or platform-specific secure storage solutions) to store data securely.

:::note
`SecureStorageService` supports a maximum of _4KB per key_. It is not recommended for large datasets.
:::

### Usage Example

```ts
App.getDependency('SecureStorageService').setItem("superHero", "Bruce wayne");
```

### Supported Methods

| Method                | Description                                          |
| --------------------- | ---------------------------------------------------- |
| `getItem(key)`        | Retrieves a securely stored value for the given key. |
| `setItem(key, value)` | Stores the value securely under the given key.       |
| `removeItem(key)`     | Removes a securely stored value.                     |

:::note
 Unlike `StorageService`, `getAll()` is _not available_ in `SecureStorageService`.
:::

For detailed implementation guides and examples, see [Secure Store Implementation Guide](/learn/react-native/integrating-secure-store/).

## Choosing the Right Service

| Use Case                                            | Recommended Service    |
| --------------------------------------------------- | ---------------------- |
| General app data, UI flags, cached responses        | `StorageService`       |
| Tokens, passwords, secrets, and sensitive user data | `SecureStorageService` |
