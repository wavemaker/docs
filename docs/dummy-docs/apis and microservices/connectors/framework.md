---
id: framework
title: Connector Framework
sidebar_label: Framework
sidebar_position: 1
---

# Connector Framework

Build custom connectors to integrate with external services and systems.

## Overview

The Connector Framework allows you to create reusable integrations for:
- Third-party APIs (Payment gateways, CRM systems, etc.)
- Legacy systems
- Custom protocols
- Data sources

## Creating a Connector

### 1. Define Connector Interface

```java
public interface PaymentConnector {
    PaymentResponse processPayment(PaymentRequest request);
    RefundResponse processRefund(String transactionId, BigDecimal amount);
    TransactionStatus getTransactionStatus(String transactionId);
}
```

### 2. Implement Connector

```java
@Component
public class StripeConnector implements PaymentConnector {

    @Value("${stripe.api.key}")
    private String apiKey;

    @Value("${stripe.api.url}")
    private String apiUrl;

    @Autowired
    private RestTemplate restTemplate;

    @Override
    public PaymentResponse processPayment(PaymentRequest request) {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + apiKey);
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<PaymentRequest> entity = new HttpEntity<>(request, headers);

        ResponseEntity<PaymentResponse> response = restTemplate.exchange(
            apiUrl + "/charges",
            HttpMethod.POST,
            entity,
            PaymentResponse.class
        );

        return response.getBody();
    }

    @Override
    public RefundResponse processRefund(String transactionId, BigDecimal amount) {
        // Implementation
        return null;
    }

    @Override
    public TransactionStatus getTransactionStatus(String transactionId) {
        // Implementation
        return null;
    }
}
```

### 3. Configuration

```java
@Configuration
@EnableConfigurationProperties(ConnectorProperties.class)
public class ConnectorConfig {

    @Bean
    public RestTemplate connectorRestTemplate() {
        RestTemplate restTemplate = new RestTemplate();

        // Add interceptors
        restTemplate.getInterceptors().add(new LoggingInterceptor());

        // Configure timeout
        HttpComponentsClientHttpRequestFactory factory =
            new HttpComponentsClientHttpRequestFactory();
        factory.setConnectTimeout(5000);
        factory.setReadTimeout(10000);
        restTemplate.setRequestFactory(factory);

        return restTemplate;
    }
}

@ConfigurationProperties(prefix = "connector")
public class ConnectorProperties {
    private Map<String, ConnectorConfig> configs;

    public static class ConnectorConfig {
        private String apiKey;
        private String apiUrl;
        private int timeout;
        // Getters and setters
    }
}
```

## Connector Factory Pattern

```java
public interface Connector {
    String getType();
    void connect();
    void disconnect();
    Object execute(String operation, Map<String, Object> parameters);
}

@Component
public class ConnectorFactory {

    @Autowired
    private ApplicationContext context;

    public Connector getConnector(String type) {
        Map<String, Connector> connectors = context.getBeansOfType(Connector.class);

        return connectors.values().stream()
            .filter(c -> c.getType().equals(type))
            .findFirst()
            .orElseThrow(() -> new IllegalArgumentException("Unknown connector type: " + type));
    }
}
```

## Error Handling

```java
public class ConnectorException extends RuntimeException {
    private final String connectorType;
    private final int errorCode;

    public ConnectorException(String connectorType, int errorCode, String message) {
        super(message);
        this.connectorType = connectorType;
        this.errorCode = errorCode;
    }
}

@Component
public class ResilientConnector {

    @Autowired
    private PaymentConnector paymentConnector;

    @Retryable(
        value = {ConnectorException.class},
        maxAttempts = 3,
        backoff = @Backoff(delay = 1000, multiplier = 2)
    )
    public PaymentResponse processPaymentWithRetry(PaymentRequest request) {
        return paymentConnector.processPayment(request);
    }

    @Recover
    public PaymentResponse recover(ConnectorException e, PaymentRequest request) {
        log.error("Payment failed after retries: {}", e.getMessage());
        return PaymentResponse.failed("Service temporarily unavailable");
    }
}
```

## Testing Connectors

```java
@SpringBootTest
public class PaymentConnectorTest {

    @MockBean
    private RestTemplate restTemplate;

    @Autowired
    private PaymentConnector paymentConnector;

    @Test
    public void testProcessPayment() {
        PaymentRequest request = new PaymentRequest();
        request.setAmount(BigDecimal.valueOf(100.00));
        request.setCardNumber("4242424242424242");

        PaymentResponse expectedResponse = new PaymentResponse();
        expectedResponse.setTransactionId("tx_123");
        expectedResponse.setStatus("SUCCESS");

        when(restTemplate.exchange(
            anyString(),
            eq(HttpMethod.POST),
            any(HttpEntity.class),
            eq(PaymentResponse.class)
        )).thenReturn(ResponseEntity.ok(expectedResponse));

        PaymentResponse response = paymentConnector.processPayment(request);

        assertEquals("SUCCESS", response.getStatus());
        assertEquals("tx_123", response.getTransactionId());
    }
}
```

## Best Practices

1. **Interface Segregation**: Define clear interfaces
2. **Configuration Externalization**: Use properties files
3. **Error Handling**: Implement retry and fallback mechanisms
4. **Logging**: Log all connector interactions
5. **Testing**: Write comprehensive tests
6. **Documentation**: Document connector usage
7. **Security**: Secure API keys and credentials

## Next Steps

- [Unit Testing](../testing-debugging/unit-testing.md)
- [How to Build & Use](../testing-debugging/how-to-build-use.md)
