# Unit Testing with JUnit and Mockito

Comprehensive guide to unit testing in Java using JUnit 5 and Mockito framework, with JavaScript testing examples.

## JUnit 5 Basics

### Maven Dependencies

```xml
<dependencies>
    <!-- JUnit 5 -->
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter</artifactId>
        <version>5.10.0</version>
        <scope>test</scope>
    </dependency>
    
    <!-- Mockito -->
    <dependency>
        <groupId>org.mockito</groupId>
        <artifactId>mockito-core</artifactId>
        <version>5.5.0</version>
        <scope>test</scope>
    </dependency>
    
    <!-- Mockito JUnit 5 integration -->
    <dependency>
        <groupId>org.mockito</groupId>
        <artifactId>mockito-junit-jupiter</artifactId>
        <version>5.5.0</version>
        <scope>test</scope>
    </dependency>
    
    <!-- AssertJ (optional, for fluent assertions) -->
    <dependency>
        <groupId>org.assertj</groupId>
        <artifactId>assertj-core</artifactId>
        <version>3.24.2</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```

### Gradle Dependencies

```groovy
dependencies {
    testImplementation 'org.junit.jupiter:junit-jupiter:5.10.0'
    testImplementation 'org.mockito:mockito-core:5.5.0'
    testImplementation 'org.mockito:mockito-junit-jupiter:5.5.0'
    testImplementation 'org.assertj:assertj-core:3.24.2'
}

test {
    useJUnitPlatform()
}
```

## Basic JUnit Tests

### Simple Test Class

```java
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {
    
    private Calculator calculator;
    
    @BeforeAll
    static void setupAll() {
        System.out.println("Running Calculator tests");
    }
    
    @BeforeEach
    void setup() {
        calculator = new Calculator();
    }
    
    @Test
    @DisplayName("Addition of two positive numbers")
    void testAddition() {
        int result = calculator.add(5, 3);
        assertEquals(8, result, "5 + 3 should equal 8");
    }
    
    @Test
    void testSubtraction() {
        assertEquals(2, calculator.subtract(5, 3));
    }
    
    @Test
    void testMultiplication() {
        assertEquals(15, calculator.multiply(5, 3));
    }
    
    @Test
    void testDivision() {
        assertEquals(2, calculator.divide(6, 3));
    }
    
    @Test
    void testDivisionByZero() {
        assertThrows(ArithmeticException.class, () -> {
            calculator.divide(5, 0);
        });
    }
    
    @Test
    @Disabled("Not implemented yet")
    void testComplexOperation() {
        // TODO: Implement
    }
    
    @AfterEach
    void tearDown() {
        calculator = null;
    }
    
    @AfterAll
    static void tearDownAll() {
        System.out.println("All tests completed");
    }
}
```

### Parameterized Tests

```java
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.*;

class ParameterizedCalculatorTest {
    
    @ParameterizedTest
    @CsvSource({
        "1, 1, 2",
        "2, 3, 5",
        "10, 5, 15",
        "100, 200, 300"
    })
    void testAdditionWithMultipleValues(int a, int b, int expected) {
        Calculator calculator = new Calculator();
        assertEquals(expected, calculator.add(a, b));
    }
    
    @ParameterizedTest
    @ValueSource(ints = {1, 2, 3, 5, 8, 13})
    void testIsPositive(int number) {
        assertTrue(number > 0);
    }
    
    @ParameterizedTest
    @MethodSource("provideStringsForIsBlank")
    void testIsBlank(String input, boolean expected) {
        assertEquals(expected, input.isBlank());
    }
    
    private static Stream<Arguments> provideStringsForIsBlank() {
        return Stream.of(
            Arguments.of("", true),
            Arguments.of("  ", true),
            Arguments.of("hello", false),
            Arguments.of("  hello  ", false)
        );
    }
}
```

## Mockito Basics

### Creating Mocks

```java
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    
    @Mock
    private UserRepository userRepository;
    
    @Mock
    private EmailService emailService;
    
    @InjectMocks
    private UserService userService;
    
    @Test
    void testCreateUser() {
        // Arrange
        User user = new User("john@example.com", "John Doe");
        when(userRepository.save(any(User.class))).thenReturn(user);
        
        // Act
        User result = userService.createUser(user);
        
        // Assert
        assertNotNull(result);
        assertEquals("john@example.com", result.getEmail());
        verify(userRepository).save(user);
        verify(emailService).sendWelcomeEmail(user.getEmail());
    }
    
    @Test
    void testFindUserById() {
        // Arrange
        Long userId = 1L;
        User user = new User("john@example.com", "John Doe");
        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        
        // Act
        User result = userService.findById(userId);
        
        // Assert
        assertNotNull(result);
        assertEquals("John Doe", result.getName());
        verify(userRepository, times(1)).findById(userId);
    }
    
    @Test
    void testFindUserById_NotFound() {
        // Arrange
        Long userId = 999L;
        when(userRepository.findById(userId)).thenReturn(Optional.empty());
        
        // Act & Assert
        assertThrows(UserNotFoundException.class, () -> {
            userService.findById(userId);
        });
    }
}
```

### Argument Matchers

```java
import static org.mockito.ArgumentMatchers.*;

class OrderServiceTest {
    
    @Mock
    private OrderRepository orderRepository;
    
    @Mock
    private PaymentService paymentService;
    
    @InjectMocks
    private OrderService orderService;
    
    @Test
    void testProcessOrder() {
        // Match any Order object
        when(orderRepository.save(any(Order.class)))
            .thenReturn(new Order(1L, "ORD-001"));
        
        // Match specific Long value
        when(paymentService.charge(eq(100.0), anyString()))
            .thenReturn(new Payment(true, "TXN-123"));
        
        // Match string starting with prefix
        when(paymentService.validateCard(startsWith("4")))
            .thenReturn(true);
        
        Order order = new Order();
        order.setAmount(100.0);
        
        Order result = orderService.processOrder(order);
        
        assertNotNull(result);
        verify(orderRepository).save(any(Order.class));
        verify(paymentService).charge(eq(100.0), anyString());
    }
}
```

### Stubbing Methods

```java
@Test
void testStubbingExamples() {
    List<String> mockList = mock(List.class);
    
    // Return specific value
    when(mockList.get(0)).thenReturn("first");
    when(mockList.get(1)).thenReturn("second");
    
    assertEquals("first", mockList.get(0));
    assertEquals("second", mockList.get(1));
    
    // Throw exception
    when(mockList.get(2)).thenThrow(new IndexOutOfBoundsException());
    assertThrows(IndexOutOfBoundsException.class, () -> mockList.get(2));
    
    // Return different values on consecutive calls
    when(mockList.size())
        .thenReturn(1)
        .thenReturn(2)
        .thenReturn(3);
    
    assertEquals(1, mockList.size());
    assertEquals(2, mockList.size());
    assertEquals(3, mockList.size());
}
```

## Verifying Interactions

```java
@Test
void testVerifyingInteractions() {
    UserRepository mockRepo = mock(UserRepository.class);
    UserService service = new UserService(mockRepo);
    
    User user = new User("test@example.com", "Test User");
    service.createUser(user);
    
    // Verify method was called
    verify(mockRepo).save(user);
    
    // Verify method was called exactly n times
    verify(mockRepo, times(1)).save(user);
    
    // Verify method was never called
    verify(mockRepo, never()).delete(any(User.class));
    
    // Verify method was called at least once
    verify(mockRepo, atLeastOnce()).save(user);
    
    // Verify method was called at most n times
    verify(mockRepo, atMost(2)).save(any(User.class));
    
    // Verify no more interactions
    verifyNoMoreInteractions(mockRepo);
}
```

## Argument Captors

```java
import org.mockito.ArgumentCaptor;

@Test
void testArgumentCaptor() {
    UserRepository mockRepo = mock(UserRepository.class);
    EmailService mockEmail = mock(EmailService.class);
    UserService service = new UserService(mockRepo, mockEmail);
    
    User user = new User("john@example.com", "John Doe");
    service.createUser(user);
    
    // Capture the argument passed to save
    ArgumentCaptor<User> userCaptor = ArgumentCaptor.forClass(User.class);
    verify(mockRepo).save(userCaptor.capture());
    
    User capturedUser = userCaptor.getValue();
    assertEquals("john@example.com", capturedUser.getEmail());
    assertEquals("John Doe", capturedUser.getName());
    
    // Capture email argument
    ArgumentCaptor<String> emailCaptor = ArgumentCaptor.forClass(String.class);
    verify(mockEmail).sendWelcomeEmail(emailCaptor.capture());
    
    assertEquals("john@example.com", emailCaptor.getValue());
}
```

## Spying

```java
@Test
void testSpying() {
    List<String> realList = new ArrayList<>();
    List<String> spyList = spy(realList);
    
    // Real method is called
    spyList.add("one");
    spyList.add("two");
    
    assertEquals(2, spyList.size());
    assertTrue(spyList.contains("one"));
    
    // Stub specific method
    when(spyList.size()).thenReturn(100);
    
    assertEquals(100, spyList.size());
    
    // Verify interactions
    verify(spyList).add("one");
    verify(spyList).add("two");
}
```

## Spring Boot Testing

```java
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.beans.factory.annotation.Autowired;

@SpringBootTest
class UserControllerIntegrationTest {
    
    @Autowired
    private UserController userController;
    
    @MockBean
    private UserService userService;
    
    @Test
    void testGetUser() {
        User user = new User(1L, "john@example.com", "John Doe");
        when(userService.findById(1L)).thenReturn(user);
        
        ResponseEntity<User> response = userController.getUser(1L);
        
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("John Doe", response.getBody().getName());
    }
}
```

### MockMvc Testing

```java
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(UserController.class)
class UserControllerWebTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @MockBean
    private UserService userService;
    
    @Test
    void testGetUserEndpoint() throws Exception {
        User user = new User(1L, "john@example.com", "John Doe");
        when(userService.findById(1L)).thenReturn(user);
        
        mockMvc.perform(get("/api/users/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.name").value("John Doe"))
            .andExpect(jsonPath("$.email").value("john@example.com"));
    }
    
    @Test
    void testCreateUser() throws Exception {
        User user = new User(null, "john@example.com", "John Doe");
        User savedUser = new User(1L, "john@example.com", "John Doe");
        
        when(userService.createUser(any(User.class))).thenReturn(savedUser);
        
        mockMvc.perform(post("/api/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"email\":\"john@example.com\",\"name\":\"John Doe\"}"))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.id").value(1))
            .andExpect(jsonPath("$.name").value("John Doe"));
    }
}
```

## JavaScript/Jest Testing

### Jest Configuration

```javascript
// jest.config.js
export default {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.test.js'
  ],
  testMatch: [
    '**/__tests__/**/*.js',
    '**/*.test.js'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
};
```

### Basic Jest Tests

```javascript
// calculator.test.js
import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator;
  
  beforeEach(() => {
    calculator = new Calculator();
  });
  
  afterEach(() => {
    calculator = null;
  });
  
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(calculator.add(5, 3)).toBe(8);
    });
    
    test('should add negative numbers', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });
  });
  
  describe('divide', () => {
    test('should divide numbers correctly', () => {
      expect(calculator.divide(6, 3)).toBe(2);
    });
    
    test('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division by zero');
    });
  });
});
```

### Mocking with Jest

```javascript
// userService.test.js
import { UserService } from './userService';
import { UserRepository } from './userRepository';
import { EmailService } from './emailService';

// Mock dependencies
jest.mock('./userRepository');
jest.mock('./emailService');

describe('UserService', () => {
  let userService;
  let mockRepository;
  let mockEmailService;
  
  beforeEach(() => {
    mockRepository = new UserRepository();
    mockEmailService = new EmailService();
    userService = new UserService(mockRepository, mockEmailService);
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  test('should create user', async () => {
    const user = { email: 'john@example.com', name: 'John Doe' };
    mockRepository.save.mockResolvedValue({ id: 1, ...user });
    
    const result = await userService.createUser(user);
    
    expect(result.id).toBe(1);
    expect(mockRepository.save).toHaveBeenCalledWith(user);
    expect(mockEmailService.sendWelcomeEmail).toHaveBeenCalledWith(user.email);
  });
  
  test('should find user by id', async () => {
    const user = { id: 1, email: 'john@example.com', name: 'John Doe' };
    mockRepository.findById.mockResolvedValue(user);
    
    const result = await userService.findById(1);
    
    expect(result).toEqual(user);
    expect(mockRepository.findById).toHaveBeenCalledTimes(1);
  });
});
```

## Best Practices

1. **Follow AAA Pattern** - Arrange, Act, Assert
2. **One assertion per test** - Keep tests focused
3. **Use meaningful test names** - Describe what is being tested
4. **Mock external dependencies** - Isolate unit under test
5. **Test edge cases** - Null values, empty collections, errors
6. **Maintain test independence** - Tests should not depend on each other
7. **Keep tests fast** - Unit tests should run quickly
8. **Achieve good coverage** - Aim for 80%+ code coverage
9. **Don't test framework code** - Focus on business logic
10. **Refactor tests** - Keep test code clean and maintainable

Unit testing with JUnit and Mockito provides confidence in code quality and enables safe refactoring.
