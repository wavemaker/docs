# Using 3rd Party Libraries

Learn how to integrate and use third-party libraries in your application to extend functionality and accelerate development.

## Overview

Third-party libraries provide pre-built functionality that can:
- Reduce development time
- Add specialized features
- Improve code quality
- Leverage community expertise
- Handle complex operations

## Library Management

### Package Managers

#### npm (Node.js)
```bash
# Install a library
npm install axios

# Install with specific version
npm install lodash@4.17.21

# Install as dev dependency
npm install --save-dev jest

# Install globally
npm install -g typescript
```

#### Maven (Java)
```xml
<!-- pom.xml -->
<dependencies>
    <dependency>
        <groupId>com.google.guava</groupId>
        <artifactId>guava</artifactId>
        <version>31.1-jre</version>
    </dependency>

    <dependency>
        <groupId>org.apache.commons</groupId>
        <artifactId>commons-lang3</artifactId>
        <version>3.12.0</version>
    </dependency>
</dependencies>
```

#### Gradle (Java)
```groovy
// build.gradle
dependencies {
    implementation 'com.google.guava:guava:31.1-jre'
    implementation 'org.apache.commons:commons-lang3:3.12.0'
    testImplementation 'junit:junit:4.13.2'
}
```

## Common JavaScript Libraries

### HTTP Client - Axios
```javascript
import axios from 'axios';

// Basic usage
const response = await axios.get('https://api.example.com/users');
console.log(response.data);

// With configuration
const client = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

// POST request
const newUser = await client.post('/users', {
  name: 'John Doe',
  email: 'john@example.com'
});
```

### Date/Time - date-fns
```javascript
import { format, parseISO, addDays, isAfter } from 'date-fns';

// Format date
const formattedDate = format(new Date(), 'yyyy-MM-dd');

// Parse ISO string
const date = parseISO('2024-01-15T10:30:00Z');

// Add days
const futureDate = addDays(new Date(), 7);

// Compare dates
const isLater = isAfter(date1, date2);
```

### Utility - Lodash
```javascript
import _ from 'lodash';

// Array operations
const unique = _.uniq([1, 2, 2, 3, 4, 4, 5]);
const grouped = _.groupBy(users, 'role');

// Object operations
const merged = _.merge(obj1, obj2);
const picked = _.pick(user, ['id', 'name', 'email']);

// Function utilities
const debounced = _.debounce(searchFunction, 300);
const throttled = _.throttle(scrollHandler, 100);
```

### State Management - Redux
```javascript
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

// Usage in React
<Provider store={store}>
  <App />
</Provider>
```

### Validation - Joi
```javascript
import Joi from 'joi';

// Define schema
const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(18).max(120),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{8,30}$/)
});

// Validate
const { error, value } = schema.validate({
  username: 'john_doe',
  email: 'john@example.com',
  age: 25,
  password: 'password123'
});

if (error) {
  console.error('Validation error:', error.details);
}
```

## Common Java Libraries

### HTTP Client - OkHttp
```java
import okhttp3.*;

public class HttpClientExample {
    private final OkHttpClient client = new OkHttpClient();

    public String get(String url) throws IOException {
        Request request = new Request.Builder()
            .url(url)
            .build();

        try (Response response = client.newCall(request).execute()) {
            return response.body().string();
        }
    }

    public String post(String url, String json) throws IOException {
        RequestBody body = RequestBody.create(
            json,
            MediaType.get("application/json")
        );

        Request request = new Request.Builder()
            .url(url)
            .post(body)
            .build();

        try (Response response = client.newCall(request).execute()) {
            return response.body().string();
        }
    }
}
```

### JSON Processing - Jackson
```java
import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonExample {
    private final ObjectMapper objectMapper = new ObjectMapper();

    // Object to JSON
    public String toJson(Object obj) throws Exception {
        return objectMapper.writeValueAsString(obj);
    }

    // JSON to Object
    public User fromJson(String json) throws Exception {
        return objectMapper.readValue(json, User.class);
    }

    // JSON to List
    public List<User> fromJsonList(String json) throws Exception {
        return objectMapper.readValue(
            json,
            objectMapper.getTypeFactory()
                .constructCollectionType(List.class, User.class)
        );
    }
}
```

### Utilities - Guava
```java
import com.google.common.collect.*;

public class GuavaExample {
    // Immutable collections
    ImmutableList<String> list = ImmutableList.of("a", "b", "c");
    ImmutableSet<String> set = ImmutableSet.of("x", "y", "z");
    ImmutableMap<String, Integer> map = ImmutableMap.of("a", 1, "b", 2);

    // Multimap
    Multimap<String, String> multimap = ArrayListMultimap.create();
    multimap.put("fruits", "apple");
    multimap.put("fruits", "banana");

    // Cache
    Cache<String, String> cache = CacheBuilder.newBuilder()
        .maximumSize(1000)
        .expireAfterWrite(10, TimeUnit.MINUTES)
        .build();

    // String utilities
    String joined = Joiner.on(", ").join(Arrays.asList("a", "b", "c"));
    List<String> split = Splitter.on(',').trimResults().splitToList("a, b, c");
}
```

### Logging - SLF4J with Logback
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public void doSomething() {
        logger.debug("Debug message");
        logger.info("Info message");
        logger.warn("Warning message");
        logger.error("Error message", exception);

        // Parameterized logging
        logger.info("User {} logged in at {}", username, timestamp);
    }
}
```

## Library Integration Best Practices

### Version Management

#### package.json (Node.js)
```json
{
  "dependencies": {
    "axios": "^1.4.0",
    "lodash": "~4.17.21",
    "react": "18.2.0"
  },
  "devDependencies": {
    "jest": "^29.5.0",
    "eslint": "^8.40.0"
  }
}
```

Version symbols:
- `^1.4.0` - Compatible with version 1.x.x
- `~4.17.21` - Compatible with version 4.17.x
- `18.2.0` - Exact version

### Dependency Security

#### Audit Dependencies
```bash
# npm
npm audit
npm audit fix

# Check for outdated packages
npm outdated

# Update packages
npm update
```

#### Maven Dependency Check
```xml
<plugin>
    <groupId>org.owasp</groupId>
    <artifactId>dependency-check-maven</artifactId>
    <version>8.2.1</version>
    <executions>
        <execution>
            <goals>
                <goal>check</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

### Tree Shaking and Code Splitting

```javascript
// Import only what you need
import { format } from 'date-fns'; // Good
import * as dateFns from 'date-fns'; // Bad - imports everything

// Dynamic imports for code splitting
const HeavyComponent = lazy(() => import('./HeavyComponent'));
```

## Custom Wrappers

### Creating Library Wrappers
```javascript
// apiClient.js - Wrapper for axios
import axios from 'axios';

class ApiClient {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL,
      timeout: 30000
    });

    this.setupInterceptors();
  }

  setupInterceptors() {
    this.client.interceptors.request.use(
      config => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      error => Promise.reject(error)
    );

    this.client.interceptors.response.use(
      response => response.data,
      error => {
        if (error.response?.status === 401) {
          // Handle unauthorized
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  async get(url, config) {
    return this.client.get(url, config);
  }

  async post(url, data, config) {
    return this.client.post(url, data, config);
  }
}

export default new ApiClient('https://api.example.com');
```

### Java Library Wrapper
```java
public class HttpClientWrapper {
    private final OkHttpClient client;
    private final String baseUrl;

    public HttpClientWrapper(String baseUrl) {
        this.baseUrl = baseUrl;
        this.client = new OkHttpClient.Builder()
            .connectTimeout(30, TimeUnit.SECONDS)
            .readTimeout(30, TimeUnit.SECONDS)
            .addInterceptor(new AuthInterceptor())
            .addInterceptor(new LoggingInterceptor())
            .build();
    }

    public <T> T get(String path, Class<T> responseType) throws IOException {
        Request request = new Request.Builder()
            .url(baseUrl + path)
            .get()
            .build();

        try (Response response = client.newCall(request).execute()) {
            String json = response.body().string();
            return new ObjectMapper().readValue(json, responseType);
        }
    }

    public <T> T post(String path, Object body, Class<T> responseType)
            throws IOException {
        String json = new ObjectMapper().writeValueAsString(body);

        RequestBody requestBody = RequestBody.create(
            json,
            MediaType.get("application/json")
        );

        Request request = new Request.Builder()
            .url(baseUrl + path)
            .post(requestBody)
            .build();

        try (Response response = client.newCall(request).execute()) {
            String responseJson = response.body().string();
            return new ObjectMapper().readValue(responseJson, responseType);
        }
    }
}
```

## License Compliance

### Check Library Licenses
```bash
# npm
npm install -g license-checker
license-checker --summary

# Maven
mvn license:aggregate-add-third-party
```

### Common Licenses
- **MIT**: Very permissive, commercial use allowed
- **Apache 2.0**: Permissive, requires attribution
- **GPL**: Copyleft, source code must be disclosed
- **BSD**: Permissive, similar to MIT
- **ISC**: Permissive, similar to MIT

## Best Practices

### Selection Criteria
- Active maintenance and updates
- Good documentation
- Community support
- Performance benchmarks
- Bundle size (for frontend)
- License compatibility
- Security track record

### Integration Guidelines
- Read the documentation thoroughly
- Start with simple use cases
- Create wrapper classes for abstraction
- Keep libraries updated
- Monitor for security vulnerabilities
- Avoid over-dependency
- Consider bundle size impact
- Test library behavior
- Document usage patterns

### Performance Considerations
- Lazy load heavy libraries
- Use tree shaking
- Check bundle size impact
- Consider alternatives for simple tasks
- Cache library instances
- Monitor memory usage

### Maintenance
```bash
# Regular updates
npm update
npm audit fix

# Remove unused dependencies
npm prune
npx depcheck

# Lock file maintenance
npm ci # Use in CI/CD for reproducible builds
```

### Testing with Libraries
```javascript
// Mock third-party libraries in tests
jest.mock('axios');

test('fetches data', async () => {
  const mockData = { users: [] };
  axios.get.mockResolvedValue({ data: mockData });

  const result = await fetchUsers();

  expect(result).toEqual(mockData);
  expect(axios.get).toHaveBeenCalledWith('/users');
});
```

## Troubleshooting

### Common Issues
- Version conflicts - Use exact versions
- Peer dependency issues - Install required peers
- Build failures - Clear cache and reinstall
- Type definition errors - Install @types packages
- Bundle size issues - Use code splitting

### Debugging
```bash
# Check dependency tree
npm ls axios

# Why is this package installed?
npm explain axios

# Clean install
rm -rf node_modules package-lock.json
npm install
```
