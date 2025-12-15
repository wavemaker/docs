# JUnit, Mockito and Unit Testing

Comprehensive guide to unit testing using JUnit and Mockito frameworks.

## Overview
Unit testing is essential for ensuring code quality and reliability. This guide covers using JUnit for test execution and Mockito for mocking dependencies.

## JUnit Framework

### Getting Started with JUnit
- Setting up JUnit in your project
- Writing your first test
- Test annotations
- Test lifecycle

### JUnit Annotations
- `@Test` - Mark test methods
- `@BeforeEach` - Setup before each test
- `@AfterEach` - Cleanup after each test
- `@BeforeAll` - Setup once before all tests
- `@AfterAll` - Cleanup once after all tests
- `@Disabled` - Skip test execution
- `@DisplayName` - Custom test names

### Assertions
- `assertEquals()` - Compare expected and actual values
- `assertTrue()` / `assertFalse()` - Boolean assertions
- `assertNull()` / `assertNotNull()` - Null checks
- `assertThrows()` - Exception testing
- `assertTimeout()` - Timeout testing

### Test Structure
```java
@Test
@DisplayName("Should calculate total correctly")
void testCalculateTotal() {
    // Arrange
    Calculator calc = new Calculator();

    // Act
    int result = calc.add(2, 3);

    // Assert
    assertEquals(5, result);
}
```

## Mockito Framework

### Introduction to Mockito
Mockito is a mocking framework that allows you to create mock objects for testing.

### Creating Mocks
- `@Mock` - Create mock objects
- `@InjectMocks` - Inject mocks into test class
- `@Spy` - Partial mocking
- `MockitoAnnotations.openMocks()` - Initialize mocks

### Stubbing
```java
when(mockService.getData()).thenReturn(expectedData);
when(mockService.process(anyString())).thenThrow(new Exception());
```

### Verification
```java
verify(mockService).getData();
verify(mockService, times(2)).process(anyString());
verify(mockService, never()).delete();
```

### Argument Matchers
- `any()` - Any argument
- `anyString()` - Any string
- `anyInt()` - Any integer
- `eq()` - Specific value
- `isNull()` / `isNotNull()` - Null checks

## Best Practices

### Test Organization
- One test class per production class
- Descriptive test method names
- Test one thing per test method
- Use AAA pattern (Arrange, Act, Assert)

### Mock Usage
- Mock external dependencies
- Don't mock value objects
- Use real objects when simple
- Avoid over-mocking

### Test Coverage
- Aim for high code coverage
- Test edge cases
- Test error conditions
- Test boundary values

### Test Maintenance
- Keep tests simple and readable
- Refactor tests along with code
- Remove obsolete tests
- Update tests when requirements change

## Common Patterns

### Testing Services
```java
@Test
void testServiceMethod() {
    // Mock dependencies
    when(mockRepository.findById(1L)).thenReturn(Optional.of(entity));

    // Test service
    Result result = service.process(1L);

    // Verify
    assertNotNull(result);
    verify(mockRepository).findById(1L);
}
```

### Testing Controllers
- Mock service layer
- Test request handling
- Verify response
- Test error scenarios

### Testing Data Access
- Use in-memory databases
- Test CRUD operations
- Verify queries
- Test transactions

## Running Tests
- Run from IDE
- Run from command line
- Continuous integration
- Test reports

## Troubleshooting
- Mock not working
- Verification failures
- Assertion errors
- Test isolation issues
