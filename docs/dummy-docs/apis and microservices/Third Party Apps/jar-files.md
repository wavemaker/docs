# JAR Files Integration

Learn how to integrate Java Archive (JAR) files into your application for extending functionality with external Java libraries and custom modules.

## What are JAR Files?

JAR (Java ARchive) files are package file formats used to:
- Aggregate multiple Java class files
- Package associated metadata and resources
- Distribute Java libraries and applications
- Compress files for efficient distribution

## Adding JAR Dependencies

### Maven

#### Using Maven Central
```xml
<!-- pom.xml -->
<dependencies>
    <!-- Apache Commons Lang -->
    <dependency>
        <groupId>org.apache.commons</groupId>
        <artifactId>commons-lang3</artifactId>
        <version>3.12.0</version>
    </dependency>

    <!-- Google Gson -->
    <dependency>
        <groupId>com.google.code.gson</groupId>
        <artifactId>gson</artifactId>
        <version>2.10.1</version>
    </dependency>

    <!-- Apache HttpClient -->
    <dependency>
        <groupId>org.apache.httpcomponents</groupId>
        <artifactId>httpclient</artifactId>
        <version>4.5.14</version>
    </dependency>
</dependencies>
```

#### Local JAR Files
```xml
<!-- pom.xml -->
<dependencies>
    <dependency>
        <groupId>com.example</groupId>
        <artifactId>custom-library</artifactId>
        <version>1.0.0</version>
        <scope>system</scope>
        <systemPath>${project.basedir}/lib/custom-library.jar</systemPath>
    </dependency>
</dependencies>
```

#### Installing Local JAR to Local Repository
```bash
mvn install:install-file \
  -Dfile=/path/to/your-library.jar \
  -DgroupId=com.example \
  -DartifactId=your-library \
  -Dversion=1.0.0 \
  -Dpackaging=jar
```

### Gradle

#### Using Maven Central
```groovy
// build.gradle
dependencies {
    implementation 'org.apache.commons:commons-lang3:3.12.0'
    implementation 'com.google.code.gson:gson:2.10.1'
    implementation 'org.apache.httpcomponents:httpclient:4.5.14'

    // Test dependencies
    testImplementation 'junit:junit:4.13.2'
}
```

#### Local JAR Files
```groovy
// build.gradle
dependencies {
    implementation files('lib/custom-library.jar')

    // Multiple JARs
    implementation fileTree(dir: 'libs', include: ['*.jar'])
}
```

#### Flat Directory Repository
```groovy
// build.gradle
repositories {
    flatDir {
        dirs 'libs'
    }
}

dependencies {
    implementation name: 'custom-library-1.0.0'
}
```

## Manual Classpath Configuration

### Command Line
```bash
# Run with single JAR
java -cp /path/to/library.jar:. com.example.Main

# Run with multiple JARs (Unix/Linux/Mac)
java -cp "lib/*:." com.example.Main

# Run with multiple JARs (Windows)
java -cp "lib/*;." com.example.Main
```

### Using MANIFEST.MF
```
Manifest-Version: 1.0
Main-Class: com.example.Main
Class-Path: lib/commons-lang3-3.12.0.jar lib/gson-2.10.1.jar
```

## Using External Libraries

### Apache Commons Lang
```java
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.tuple.Pair;

public class CommonsExample {
    public void stringOperations() {
        // String utilities
        String result = StringUtils.capitalize("hello world");
        boolean isEmpty = StringUtils.isEmpty(str);
        String reversed = StringUtils.reverse("hello");

        // Check if blank
        if (StringUtils.isNotBlank(input)) {
            // Process input
        }

        // Join strings
        String joined = StringUtils.join(array, ", ");
    }

    public void pairExample() {
        // Create pairs
        Pair<String, Integer> pair = Pair.of("Age", 25);
        String key = pair.getLeft();
        Integer value = pair.getRight();
    }
}
```

### Google Gson
```java
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;

public class GsonExample {
    private final Gson gson = new GsonBuilder()
        .setPrettyPrinting()
        .setDateFormat("yyyy-MM-dd'T'HH:mm:ss")
        .create();

    // Object to JSON
    public String toJson(Object obj) {
        return gson.toJson(obj);
    }

    // JSON to Object
    public User fromJson(String json) {
        return gson.fromJson(json, User.class);
    }

    // JSON to List
    public List<User> listFromJson(String json) {
        Type listType = new TypeToken<List<User>>(){}.getType();
        return gson.fromJson(json, listType);
    }

    // JSON to Map
    public Map<String, Object> mapFromJson(String json) {
        Type mapType = new TypeToken<Map<String, Object>>(){}.getType();
        return gson.fromJson(json, mapType);
    }
}
```

### Apache HttpClient
```java
import org.apache.http.client.methods.*;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.http.entity.StringEntity;

public class HttpClientExample {
    private final CloseableHttpClient httpClient = HttpClients.createDefault();

    public String get(String url) throws Exception {
        HttpGet request = new HttpGet(url);
        request.setHeader("User-Agent", "MyApp/1.0");

        try (CloseableHttpResponse response = httpClient.execute(request)) {
            return EntityUtils.toString(response.getEntity());
        }
    }

    public String post(String url, String json) throws Exception {
        HttpPost request = new HttpPost(url);
        request.setHeader("Content-Type", "application/json");
        request.setEntity(new StringEntity(json));

        try (CloseableHttpResponse response = httpClient.execute(request)) {
            return EntityUtils.toString(response.getEntity());
        }
    }

    public void close() throws Exception {
        httpClient.close();
    }
}
```

### SLF4J Logging
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {
    private static final Logger log = LoggerFactory.getLogger(LoggingExample.class);

    public void demonstrateLogging() {
        log.trace("Trace message");
        log.debug("Debug message");
        log.info("Info message");
        log.warn("Warning message");
        log.error("Error message");

        // Parameterized logging (efficient)
        log.info("User {} logged in at {}", username, timestamp);

        // With exception
        try {
            riskyOperation();
        } catch (Exception e) {
            log.error("Operation failed for user {}", userId, e);
        }
    }
}
```

## Creating Custom JAR Files

### Simple JAR Creation
```bash
# Compile Java files
javac -d bin src/com/example/*.java

# Create JAR
jar cvf myapp.jar -C bin .

# Create executable JAR with manifest
jar cvfm myapp.jar manifest.txt -C bin .
```

### Maven JAR Plugin
```xml
<!-- pom.xml -->
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-jar-plugin</artifactId>
            <version>3.3.0</version>
            <configuration>
                <archive>
                    <manifest>
                        <mainClass>com.example.Main</mainClass>
                        <addClasspath>true</addClasspath>
                        <classpathPrefix>lib/</classpathPrefix>
                    </manifest>
                </archive>
            </configuration>
        </plugin>
    </plugins>
</build>
```

### Creating Fat JAR (with dependencies)
```xml
<!-- Maven Shade Plugin -->
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-shade-plugin</artifactId>
    <version>3.5.0</version>
    <executions>
        <execution>
            <phase>package</phase>
            <goals>
                <goal>shade</goal>
            </goals>
            <configuration>
                <transformers>
                    <transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">
                        <mainClass>com.example.Main</mainClass>
                    </transformer>
                </transformers>
            </configuration>
        </execution>
    </executions>
</plugin>
```

### Gradle JAR Task
```groovy
// build.gradle
jar {
    manifest {
        attributes(
            'Main-Class': 'com.example.Main',
            'Implementation-Version': version
        )
    }
}

// Fat JAR with Gradle
task fatJar(type: Jar) {
    manifest {
        attributes 'Main-Class': 'com.example.Main'
    }
    archiveBaseName = 'myapp-all'
    from {
        configurations.runtimeClasspath.collect {
            it.isDirectory() ? it : zipTree(it)
        }
    }
    with jar
}
```

## Inspecting JAR Files

### Command Line Tools
```bash
# List contents
jar tf myapp.jar

# Extract JAR
jar xf myapp.jar

# View manifest
jar xf myapp.jar META-INF/MANIFEST.MF
cat META-INF/MANIFEST.MF

# Using unzip
unzip -l myapp.jar
```

### Programmatic Inspection
```java
import java.util.jar.*;
import java.io.*;

public class JarInspector {
    public void inspectJar(String jarPath) throws IOException {
        try (JarFile jarFile = new JarFile(jarPath)) {
            Manifest manifest = jarFile.getManifest();

            // Read manifest attributes
            Attributes attrs = manifest.getMainAttributes();
            String mainClass = attrs.getValue("Main-Class");
            System.out.println("Main-Class: " + mainClass);

            // List entries
            jarFile.stream().forEach(entry -> {
                System.out.println(entry.getName());
            });
        }
    }
}
```

## Class Loading

### Custom ClassLoader
```java
import java.net.URL;
import java.net.URLClassLoader;

public class CustomClassLoader {
    public void loadFromJar(String jarPath, String className) throws Exception {
        // Create URL for JAR
        URL jarUrl = new File(jarPath).toURI().toURL();

        // Create ClassLoader
        try (URLClassLoader classLoader = new URLClassLoader(
            new URL[]{jarUrl},
            this.getClass().getClassLoader()
        )) {
            // Load class
            Class<?> clazz = classLoader.loadClass(className);

            // Create instance
            Object instance = clazz.getDeclaredConstructor().newInstance();

            // Use reflection to call methods
            Method method = clazz.getMethod("methodName");
            Object result = method.invoke(instance);
        }
    }
}
```

### Loading Resources from JAR
```java
import java.io.InputStream;
import java.util.Properties;

public class ResourceLoader {
    public Properties loadPropertiesFromJar(String resourcePath) throws IOException {
        Properties props = new Properties();

        // Load from classpath (including JARs)
        try (InputStream is = getClass().getClassLoader()
                .getResourceAsStream(resourcePath)) {
            if (is != null) {
                props.load(is);
            }
        }

        return props;
    }

    public String loadFileFromJar(String path) throws IOException {
        try (InputStream is = getClass().getClassLoader()
                .getResourceAsStream(path)) {
            if (is != null) {
                return new String(is.readAllBytes());
            }
            return null;
        }
    }
}
```

## Version Conflicts

### Maven Dependency Management
```xml
<!-- pom.xml -->
<dependencyManagement>
    <dependencies>
        <!-- Force specific version -->
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.15.2</version>
        </dependency>
    </dependencies>
</dependencyManagement>

<!-- Exclude transitive dependency -->
<dependency>
    <groupId>some.library</groupId>
    <artifactId>library-name</artifactId>
    <version>1.0</version>
    <exclusions>
        <exclusion>
            <groupId>conflicting.group</groupId>
            <artifactId>conflicting-artifact</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```

### Analyzing Dependencies
```bash
# Maven dependency tree
mvn dependency:tree

# Find specific dependency
mvn dependency:tree -Dincludes=com.google.guava:guava

# Gradle dependencies
gradle dependencies

# Gradle dependency insight
gradle dependencyInsight --dependency guava
```

## Security Scanning

### Maven OWASP Dependency Check
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

```bash
# Run security check
mvn dependency-check:check
```

## Best Practices

### Dependency Management
- Use dependency management tools (Maven/Gradle)
- Keep dependencies up to date
- Minimize dependency count
- Use specific versions (avoid LATEST/RELEASE)
- Scan for security vulnerabilities regularly

### JAR Organization
- Store third-party JARs in a dedicated directory
- Document JAR versions and sources
- Use repository managers for teams (Nexus, Artifactory)
- Avoid committing JARs to version control
- Use Maven Central or private repositories

### Version Control
```xml
<!-- Use properties for version management -->
<properties>
    <jackson.version>2.15.2</jackson.version>
    <spring.version>6.0.9</spring.version>
</properties>

<dependencies>
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-databind</artifactId>
        <version>${jackson.version}</version>
    </dependency>
</dependencies>
```

### Performance
- Use fat JARs for deployment simplicity
- Consider class data sharing (CDS) for startup time
- Minimize JAR size by excluding unused dependencies
- Use ProGuard/R8 for optimization (Android)

### Testing
```java
// Test with actual dependencies
@Test
public void testWithExternalLibrary() {
    // Use Apache Commons Lang
    String result = StringUtils.capitalize("test");
    assertEquals("Test", result);
}
```

### Documentation
- Document required JARs and versions
- Maintain dependency list in README
- Document any special configuration needed
- Include license information

## Troubleshooting

### Common Issues
```bash
# ClassNotFoundException
# Solution: Ensure JAR is in classpath

# NoClassDefFoundError
# Solution: Check for missing transitive dependencies

# Version conflicts
# Solution: Use dependency:tree to identify conflicts

# UnsupportedClassVersionError
# Solution: Ensure JAR is compiled with compatible Java version
```

### Debugging Classpath
```java
// Print classpath at runtime
String classpath = System.getProperty("java.class.path");
System.out.println("Classpath: " + classpath);

// Check if class is available
try {
    Class.forName("com.example.SomeClass");
    System.out.println("Class found");
} catch (ClassNotFoundException e) {
    System.out.println("Class not found");
}
```
