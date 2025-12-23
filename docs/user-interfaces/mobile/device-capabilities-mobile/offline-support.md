---
last_update: { author: "Author Name" }
---

# Offline Support

Building mobile applications that work seamlessly without internet connectivity.

## Overview

Offline support is essential for mobile applications to provide a reliable user experience regardless of network conditions. This guide covers strategies for implementing offline functionality, data synchronization, and graceful degradation when connectivity is lost.

## Why Offline Support Matters

- **Reliability**: Apps work anywhere, anytime
- **Performance**: Faster load times using cached data
- **User Experience**: No frustrating "No Internet" screens
- **Data Integrity**: Queue operations and sync when online
- **Cost Efficiency**: Reduce data usage and server load

## Offline Strategies

### 1. Cache-First Strategy

Load from cache first, then update from network.

```javascript
const fetchData = async (url) => {
  // Try cache first
  const cached = await getCachedData(url);
  if (cached) {
    return cached;
  }

  // Fetch from network if not cached
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Cache the response
    await cacheData(url, data);

    return data;
  } catch (error) {
    throw new Error('Unable to fetch data');
  }
};
```

### 2. Network-First Strategy

Try network first, fall back to cache.

```javascript
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Update cache
    await cacheData(url, data);

    return data;
  } catch (error) {
    // Network failed, try cache
    const cached = await getCachedData(url);
    if (cached) {
      return cached;
    }

    throw new Error('No data available');
  }
};
```

### 3. Offline-First Strategy

Always work with local data, sync in background.

```javascript
const saveData = async (data) => {
  // Save locally first
  await saveToLocalStorage(data);

  // Try to sync with server
  if (navigator.onLine) {
    try {
      await syncWithServer(data);
    } catch (error) {
      // Queue for later sync
      await queueForSync(data);
    }
  } else {
    // Queue for sync when online
    await queueForSync(data);
  }
};
```

## Detecting Network Status

### Using Network API

```jsx
import { Network } from '@capacitor/network';

const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [connectionType, setConnectionType] = useState('unknown');

  useEffect(() => {
    // Get initial status
    const checkStatus = async () => {
      const status = await Network.getStatus();
      setIsOnline(status.connected);
      setConnectionType(status.connectionType);
    };

    checkStatus();

    // Listen for changes
    const listener = Network.addListener('networkStatusChange', (status) => {
      setIsOnline(status.connected);
      setConnectionType(status.connectionType);

      if (status.connected) {
        handleBackOnline();
      } else {
        handleOffline();
      }
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <div>
      <div className={`status-badge ${isOnline ? 'online' : 'offline'}`}>
        {isOnline ? '🟢 Online' : '🔴 Offline'}
      </div>
      {isOnline && <p>Connection: {connectionType}</p>}
    </div>
  );
};
```

### Using Browser API

```javascript
const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
};
```

## Local Storage Solutions

### LocalStorage

Simple key-value storage for small amounts of data.

```javascript
// Save data
const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
  }
};

// Load data
const loadFromLocalStorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Failed to load from localStorage:', error);
    return null;
  }
};

// Remove data
const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

// Clear all
const clearLocalStorage = () => {
  localStorage.clear();
};
```

### IndexedDB

Structured database for larger datasets.

```javascript
// Initialize database
const openDatabase = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('MyAppDB', 1);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      // Create object stores
      if (!db.objectStoreNames.contains('items')) {
        const objectStore = db.createObjectStore('items', { keyPath: 'id' });
        objectStore.createIndex('timestamp', 'timestamp', { unique: false });
      }

      if (!db.objectStoreNames.contains('syncQueue')) {
        db.createObjectStore('syncQueue', { autoIncrement: true });
      }
    };
  });
};

// Save to IndexedDB
const saveToIndexedDB = async (storeName, data) => {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    const request = store.put(data);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

// Load from IndexedDB
const loadFromIndexedDB = async (storeName, key) => {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], 'readonly');
    const store = transaction.objectStore(storeName);
    const request = store.get(key);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

// Load all from IndexedDB
const loadAllFromIndexedDB = async (storeName) => {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], 'readonly');
    const store = transaction.objectStore(storeName);
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

// Delete from IndexedDB
const deleteFromIndexedDB = async (storeName, key) => {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    const request = store.delete(key);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
};
```

### Capacitor Storage

Cross-platform key-value storage.

```javascript
import { Storage } from '@capacitor/storage';

// Save data
const saveToStorage = async (key, value) => {
  await Storage.set({
    key: key,
    value: JSON.stringify(value),
  });
};

// Load data
const loadFromStorage = async (key) => {
  const { value } = await Storage.get({ key: key });
  return value ? JSON.parse(value) : null;
};

// Remove data
const removeFromStorage = async (key) => {
  await Storage.remove({ key: key });
};

// Clear all
const clearStorage = async () => {
  await Storage.clear();
};

// Get all keys
const getAllKeys = async () => {
  const { keys } = await Storage.keys();
  return keys;
};
```

## Data Synchronization

### Sync Queue Implementation

```javascript
class SyncQueue {
  constructor() {
    this.queueKey = 'syncQueue';
  }

  async add(operation) {
    const queue = await this.getQueue();
    queue.push({
      ...operation,
      id: Date.now(),
      timestamp: new Date().toISOString(),
      retries: 0,
    });
    await this.saveQueue(queue);
  }

  async getQueue() {
    const queue = await loadFromStorage(this.queueKey);
    return queue || [];
  }

  async saveQueue(queue) {
    await saveToStorage(this.queueKey, queue);
  }

  async process() {
    if (!navigator.onLine) {
      console.log('Offline, skipping sync');
      return;
    }

    const queue = await this.getQueue();
    if (queue.length === 0) return;

    console.log(`Processing ${queue.length} queued operations`);

    const remaining = [];

    for (const operation of queue) {
      try {
        await this.executeOperation(operation);
        console.log('Operation synced:', operation.id);
      } catch (error) {
        console.error('Sync failed:', error);

        // Retry logic
        operation.retries++;
        if (operation.retries < 3) {
          remaining.push(operation);
        } else {
          console.error('Max retries reached, dropping operation:', operation);
        }
      }
    }

    await this.saveQueue(remaining);
  }

  async executeOperation(operation) {
    switch (operation.type) {
      case 'CREATE':
        return fetch(operation.url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(operation.data),
        });

      case 'UPDATE':
        return fetch(operation.url, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(operation.data),
        });

      case 'DELETE':
        return fetch(operation.url, {
          method: 'DELETE',
        });

      default:
        throw new Error(`Unknown operation type: ${operation.type}`);
    }
  }

  async clear() {
    await this.saveQueue([]);
  }
}

// Usage
const syncQueue = new SyncQueue();

// Add operation to queue
await syncQueue.add({
  type: 'CREATE',
  url: '/api/items',
  data: { name: 'New Item', description: 'Description' },
});

// Process queue when online
window.addEventListener('online', () => {
  syncQueue.process();
});
```

### Background Sync

Using Service Worker Background Sync API.

```javascript
// Register background sync
const registerBackgroundSync = async () => {
  if ('serviceWorker' in navigator && 'sync' in navigator.serviceWorker) {
    const registration = await navigator.serviceWorker.ready;
    await registration.sync.register('syncData');
  }
};

// Service Worker (service-worker.js)
self.addEventListener('sync', (event) => {
  if (event.tag === 'syncData') {
    event.waitUntil(syncData());
  }
});

const syncData = async () => {
  // Get queued operations
  const queue = await getQueuedOperations();

  for (const operation of queue) {
    try {
      await fetch(operation.url, {
        method: operation.method,
        headers: operation.headers,
        body: operation.body,
      });

      // Remove from queue after successful sync
      await removeFromQueue(operation.id);
    } catch (error) {
      console.error('Sync failed:', error);
    }
  }
};
```

## Offline Data Management

### Caching Strategy with React Hook

```jsx
const useOfflineData = (url, fetchFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isOnline = useOnlineStatus();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      // Try to load cached data first
      const cached = await loadFromStorage(url);
      if (cached) {
        setData(cached);
        setLoading(false);
      }

      // If online, fetch fresh data
      if (isOnline) {
        try {
          const fresh = await fetchFunction();
          setData(fresh);
          await saveToStorage(url, fresh);
          setError(null);
        } catch (err) {
          setError(err);
          // If fetch fails but we have cache, use it
          if (!cached) {
            setLoading(false);
          }
        }
      }

      setLoading(false);
    };

    loadData();
  }, [url, isOnline]);

  return { data, loading, error, isOnline };
};

// Usage
const ProductList = () => {
  const { data: products, loading, error, isOnline } = useOfflineData(
    'products',
    () => fetch('/api/products').then(r => r.json())
  );

  return (
    <div>
      {!isOnline && (
        <div className="offline-banner">
          You're offline. Showing cached data.
        </div>
      )}

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}

      <div className="product-grid">
        {products?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
```

### Optimistic Updates

Update UI immediately, sync later.

```jsx
const useOptimisticUpdate = () => {
  const [items, setItems] = useState([]);
  const syncQueue = new SyncQueue();
  const isOnline = useOnlineStatus();

  const addItem = async (item) => {
    // Optimistic update
    const newItem = { ...item, id: `temp-${Date.now()}`, pending: true };
    setItems([...items, newItem]);

    // Queue for sync
    await syncQueue.add({
      type: 'CREATE',
      url: '/api/items',
      data: item,
      localId: newItem.id,
    });

    // Process immediately if online
    if (isOnline) {
      try {
        const response = await fetch('/api/items', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item),
        });

        const serverItem = await response.json();

        // Replace temp item with server response
        setItems(items.map(i =>
          i.id === newItem.id ? { ...serverItem, pending: false } : i
        ));
      } catch (error) {
        // Mark as failed but keep in list
        setItems(items.map(i =>
          i.id === newItem.id ? { ...i, pending: false, error: true } : i
        ));
      }
    }
  };

  const deleteItem = async (id) => {
    // Optimistic delete
    setItems(items.filter(i => i.id !== id));

    // Queue for sync
    await syncQueue.add({
      type: 'DELETE',
      url: `/api/items/${id}`,
    });

    // Sync if online
    if (isOnline) {
      try {
        await fetch(`/api/items/${id}`, { method: 'DELETE' });
      } catch (error) {
        // Restore item on error
        const item = items.find(i => i.id === id);
        if (item) {
          setItems([...items, item]);
        }
      }
    }
  };

  return { items, addItem, deleteItem };
};
```

## Service Workers

### Basic Service Worker Setup

```javascript
// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
      console.log('Service Worker registered:', registration);
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}

// service-worker.js
const CACHE_NAME = 'my-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/offline.html',
];

// Install event - cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch event - serve from cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(() => {
          // Return offline page for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('/offline.html');
          }
        });
      })
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
```

## Offline UI Patterns

### Offline Banner

```jsx
const OfflineBanner = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="offline-banner">
      <div className="offline-content">
        <span className="offline-icon">📡</span>
        <span>You're offline. Some features may be limited.</span>
      </div>
    </div>
  );
};
```

### Sync Status Indicator

```jsx
const SyncStatus = () => {
  const [syncQueue, setSyncQueue] = useState([]);
  const [syncing, setSyncing] = useState(false);

  const checkQueue = async () => {
    const queue = await new SyncQueue().getQueue();
    setSyncQueue(queue);
  };

  useEffect(() => {
    checkQueue();
    const interval = setInterval(checkQueue, 5000);
    return () => clearInterval(interval);
  }, []);

  if (syncQueue.length === 0) return null;

  return (
    <div className="sync-status">
      {syncing ? (
        <span>🔄 Syncing...</span>
      ) : (
        <span>📤 {syncQueue.length} pending changes</span>
      )}
    </div>
  );
};
```

## Testing Offline Functionality

```javascript
// Simulate offline mode in tests
describe('Offline functionality', () => {
  beforeEach(() => {
    // Mock navigator.onLine
    Object.defineProperty(navigator, 'onLine', {
      writable: true,
      value: false,
    });
  });

  test('shows offline banner when offline', () => {
    const { getByText } = render(<App />);
    expect(getByText(/you're offline/i)).toBeInTheDocument();
  });

  test('queues operations when offline', async () => {
    const syncQueue = new SyncQueue();
    await syncQueue.add({ type: 'CREATE', url: '/api/items', data: {} });

    const queue = await syncQueue.getQueue();
    expect(queue.length).toBe(1);
  });
});
```

## Best Practices

### 1. Cache Intelligently

Cache essential assets and API responses, but not everything.

### 2. Provide Clear Feedback

Show users when they're offline and what functionality is limited.

### 3. Queue Operations

Don't lose user data - queue operations for later sync.

### 4. Handle Conflicts

Implement conflict resolution for simultaneous edits.

### 5. Expire Old Cache

Remove outdated cached data to prevent stale information.

```javascript
const isCacheExpired = (timestamp, maxAge = 3600000) => {
  return Date.now() - timestamp > maxAge;
};
```

## Related Documentation

- [Adding Plugins](./adding-plugins.md)
- [Enabling Gestures](./enabling-gestures.md)
- [WMX Components- Mobile](../enterprise-capabilities/prefabs/wmx-components-mobile.md)
- [State Management](../develop/state-management.md)
