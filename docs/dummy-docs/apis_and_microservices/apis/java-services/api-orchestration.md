# API Orchestration

Learn how to orchestrate multiple API calls, coordinate services, and implement complex workflows using Java services.

## What is API Orchestration?

API orchestration involves coordinating multiple API calls to achieve a complex business operation. It includes:
- Combining data from multiple sources
- Sequential and parallel API calls
- Error handling and compensation
- Data transformation and aggregation
- Workflow management

## Basic Orchestration

### Sequential API Calls
```java
@Service
public class UserOrchestrationService {

    private final UserApiClient userApi;
    private final ProfileApiClient profileApi;
    private final OrderApiClient orderApi;

    @ServiceMethod
    public UserCompleteInfo getUserCompleteInfo(int userId) {
        // Step 1: Get user basic info
        User user = userApi.getUser(userId);

        // Step 2: Get user profile
        Profile profile = profileApi.getProfile(userId);

        // Step 3: Get user orders
        List<Order> orders = orderApi.getOrders(userId);

        // Combine all data
        return new UserCompleteInfo(user, profile, orders);
    }
}
```

### Parallel API Calls
```java
import java.util.concurrent.*;

@Service
public class ParallelOrchestrationService {

    private final ExecutorService executorService;

    public ParallelOrchestrationService() {
        this.executorService = Executors.newFixedThreadPool(10);
    }

    @ServiceMethod
    public UserCompleteInfo getUserCompleteInfoParallel(int userId) {
        CompletableFuture<User> userFuture = CompletableFuture.supplyAsync(
            () -> userApi.getUser(userId),
            executorService
        );

        CompletableFuture<Profile> profileFuture = CompletableFuture.supplyAsync(
            () -> profileApi.getProfile(userId),
            executorService
        );

        CompletableFuture<List<Order>> ordersFuture = CompletableFuture.supplyAsync(
            () -> orderApi.getOrders(userId),
            executorService
        );

        // Wait for all to complete
        CompletableFuture.allOf(userFuture, profileFuture, ordersFuture).join();

        // Get results
        User user = userFuture.join();
        Profile profile = profileFuture.join();
        List<Order> orders = ordersFuture.join();

        return new UserCompleteInfo(user, profile, orders);
    }
}
```

## Advanced Orchestration Patterns

### Composite Service Pattern
```java
@Service
public class OrderCheckoutOrchestration {

    private final CartService cartService;
    private final InventoryService inventoryService;
    private final PaymentService paymentService;
    private final ShippingService shippingService;
    private final NotificationService notificationService;

    @ServiceMethod
    @Transactional
    public CheckoutResult processCheckout(int userId, CheckoutRequest request) {
        try {
            // Step 1: Validate cart
            Cart cart = cartService.getCart(userId);
            if (cart.getItems().isEmpty()) {
                throw new BusinessException("Cart is empty");
            }

            // Step 2: Check inventory
            InventoryCheckResult inventoryCheck = inventoryService.checkAvailability(
                cart.getItems()
            );
            if (!inventoryCheck.isAvailable()) {
                throw new BusinessException("Some items are out of stock");
            }

            // Step 3: Reserve inventory
            inventoryService.reserveItems(cart.getItems());

            // Step 4: Process payment
            PaymentResult payment = paymentService.processPayment(
                userId,
                cart.getTotal(),
                request.getPaymentMethod()
            );

            if (!payment.isSuccess()) {
                // Compensation: Release reserved items
                inventoryService.releaseItems(cart.getItems());
                throw new BusinessException("Payment failed");
            }

            // Step 5: Create order
            Order order = createOrder(userId, cart, payment);

            // Step 6: Schedule shipping
            ShippingInfo shipping = shippingService.scheduleShipment(
                order,
                request.getShippingAddress()
            );

            // Step 7: Clear cart
            cartService.clearCart(userId);

            // Step 8: Send confirmation
            notificationService.sendOrderConfirmation(userId, order);

            return new CheckoutResult(order, shipping);

        } catch (Exception e) {
            // Handle rollback and compensation
            handleCheckoutFailure(userId, e);
            throw e;
        }
    }

    private void handleCheckoutFailure(int userId, Exception e) {
        // Implement compensation logic
        // Log error, send notifications, etc.
    }
}
```

### Scatter-Gather Pattern
```java
@Service
public class ProductSearchOrchestration {

    private final List<ProductApiClient> productApis;
    private final ExecutorService executorService;

    @ServiceMethod
    public AggregatedSearchResults searchProducts(String query) {
        // Create futures for all product APIs
        List<CompletableFuture<List<Product>>> futures = productApis.stream()
            .map(api -> CompletableFuture.supplyAsync(
                () -> {
                    try {
                        return api.search(query);
                    } catch (Exception e) {
                        // Log error but don't fail entire search
                        System.err.println("API error: " + e.getMessage());
                        return Collections.emptyList();
                    }
                },
                executorService
            ))
            .collect(Collectors.toList());

        // Wait for all with timeout
        CompletableFuture<Void> allFutures = CompletableFuture.allOf(
            futures.toArray(new CompletableFuture[0])
        );

        try {
            allFutures.get(5, TimeUnit.SECONDS);
        } catch (TimeoutException e) {
            System.err.println("Some searches timed out");
        } catch (Exception e) {
            System.err.println("Error in search orchestration: " + e.getMessage());
        }

        // Gather results
        List<Product> allProducts = futures.stream()
            .filter(future -> future.isDone() && !future.isCompletedExceptionally())
            .map(CompletableFuture::join)
            .flatMap(List::stream)
            .collect(Collectors.toList());

        // Aggregate and deduplicate
        return aggregateResults(allProducts);
    }

    private AggregatedSearchResults aggregateResults(List<Product> products) {
        // Deduplicate, sort, and aggregate
        Map<String, Product> uniqueProducts = new HashMap<>();

        for (Product product : products) {
            String key = product.getSku();
            if (!uniqueProducts.containsKey(key) ||
                product.getPrice() < uniqueProducts.get(key).getPrice()) {
                uniqueProducts.put(key, product);
            }
        }

        return new AggregatedSearchResults(
            new ArrayList<>(uniqueProducts.values())
        );
    }
}
```

### Chain of Responsibility Pattern
```java
@Service
public class OrderProcessingOrchestration {

    private final List<OrderProcessor> processors;

    public OrderProcessingOrchestration() {
        this.processors = Arrays.asList(
            new ValidationProcessor(),
            new InventoryProcessor(),
            new PricingProcessor(),
            new TaxProcessor(),
            new ShippingProcessor()
        );
    }

    @ServiceMethod
    public ProcessedOrder processOrder(Order order) {
        ProcessingContext context = new ProcessingContext(order);

        for (OrderProcessor processor : processors) {
            try {
                processor.process(context);

                if (context.hasErrors()) {
                    throw new ProcessingException(
                        "Processing failed at: " + processor.getName(),
                        context.getErrors()
                    );
                }
            } catch (Exception e) {
                throw new ProcessingException(
                    "Error in processor: " + processor.getName(),
                    e
                );
            }
        }

        return context.getProcessedOrder();
    }
}

interface OrderProcessor {
    void process(ProcessingContext context);
    String getName();
}
```

## Error Handling and Compensation

### Saga Pattern
```java
@Service
public class BookingOrchestrationSaga {

    @ServiceMethod
    public BookingResult bookTrip(TripBookingRequest request) {
        SagaContext context = new SagaContext();

        try {
            // Step 1: Book flight
            FlightBooking flight = bookFlight(request.getFlight());
            context.addCompensation(() -> cancelFlight(flight.getId()));

            // Step 2: Book hotel
            HotelBooking hotel = bookHotel(request.getHotel());
            context.addCompensation(() -> cancelHotel(hotel.getId()));

            // Step 3: Book car rental
            CarBooking car = bookCar(request.getCar());
            context.addCompensation(() -> cancelCar(car.getId()));

            // Step 4: Process payment
            Payment payment = processPayment(request.getPayment());
            context.addCompensation(() -> refundPayment(payment.getId()));

            return new BookingResult(flight, hotel, car, payment);

        } catch (Exception e) {
            // Execute compensation in reverse order
            context.compensate();
            throw new BookingException("Booking failed: " + e.getMessage(), e);
        }
    }
}

class SagaContext {
    private final Stack<Runnable> compensations = new Stack<>();

    public void addCompensation(Runnable compensation) {
        compensations.push(compensation);
    }

    public void compensate() {
        while (!compensations.isEmpty()) {
            try {
                compensations.pop().run();
            } catch (Exception e) {
                System.err.println("Compensation failed: " + e.getMessage());
            }
        }
    }
}
```

### Circuit Breaker Pattern
```java
import io.github.resilience4j.circuitbreaker.CircuitBreaker;
import io.github.resilience4j.circuitbreaker.CircuitBreakerConfig;

@Service
public class ResilientOrchestrationService {

    private final CircuitBreaker circuitBreaker;

    public ResilientOrchestrationService() {
        CircuitBreakerConfig config = CircuitBreakerConfig.custom()
            .failureRateThreshold(50)
            .waitDurationInOpenState(Duration.ofSeconds(30))
            .slidingWindowSize(10)
            .build();

        this.circuitBreaker = CircuitBreaker.of("externalApi", config);
    }

    @ServiceMethod
    public UserData getUserDataWithFallback(int userId) {
        return circuitBreaker.executeSupplier(() -> {
            try {
                return externalApi.getUserData(userId);
            } catch (Exception e) {
                // Fallback to cache
                return getCachedUserData(userId);
            }
        });
    }
}
```

## Data Transformation and Aggregation

### Data Mapping
```java
@Service
public class DataTransformationOrchestration {

    @ServiceMethod
    public CustomerView getCustomerView(int customerId) {
        // Fetch from multiple sources
        CustomerProfile profile = customerApi.getProfile(customerId);
        List<Order> orders = orderApi.getOrders(customerId);
        PaymentInfo payment = paymentApi.getPaymentInfo(customerId);
        List<Address> addresses = addressApi.getAddresses(customerId);

        // Transform and aggregate
        return CustomerView.builder()
            .id(profile.getId())
            .name(profile.getFullName())
            .email(profile.getEmail())
            .memberSince(profile.getCreatedDate())
            .totalOrders(orders.size())
            .totalSpent(calculateTotalSpent(orders))
            .preferredPaymentMethod(payment.getPreferredMethod())
            .defaultShippingAddress(findDefaultAddress(addresses))
            .recentOrders(getRecentOrders(orders, 5))
            .build();
    }

    private double calculateTotalSpent(List<Order> orders) {
        return orders.stream()
            .mapToDouble(Order::getTotal)
            .sum();
    }

    private Address findDefaultAddress(List<Address> addresses) {
        return addresses.stream()
            .filter(Address::isDefault)
            .findFirst()
            .orElse(addresses.isEmpty() ? null : addresses.get(0));
    }

    private List<OrderSummary> getRecentOrders(List<Order> orders, int count) {
        return orders.stream()
            .sorted(Comparator.comparing(Order::getCreatedDate).reversed())
            .limit(count)
            .map(this::toOrderSummary)
            .collect(Collectors.toList());
    }
}
```

## Workflow Management

### State Machine Pattern
```java
@Service
public class OrderWorkflowOrchestration {

    @ServiceMethod
    @Transactional
    public void processOrderWorkflow(int orderId) {
        Order order = orderRepository.findById(orderId)
            .orElseThrow(() -> new OrderNotFoundException(orderId));

        StateMachine<OrderState> stateMachine = createOrderStateMachine();

        while (!order.getState().isFinal()) {
            OrderState currentState = order.getState();

            try {
                OrderState nextState = stateMachine.transition(
                    currentState,
                    new OrderContext(order)
                );

                order.setState(nextState);
                orderRepository.save(order);

                // Execute state-specific actions
                executeStateActions(order, nextState);

            } catch (Exception e) {
                order.setState(OrderState.FAILED);
                orderRepository.save(order);
                throw new WorkflowException("Workflow failed", e);
            }
        }
    }

    private void executeStateActions(Order order, OrderState state) {
        switch (state) {
            case PAYMENT_PENDING:
                paymentService.requestPayment(order);
                break;
            case PAYMENT_CONFIRMED:
                inventoryService.allocateStock(order);
                break;
            case READY_TO_SHIP:
                shippingService.scheduleShipment(order);
                break;
            case SHIPPED:
                notificationService.notifyShipment(order);
                break;
            case DELIVERED:
                notificationService.notifyDelivery(order);
                break;
        }
    }
}
```

## Best Practices

### Performance Optimization
- Use parallel execution for independent calls
- Implement caching for frequently accessed data
- Set appropriate timeouts
- Use connection pooling
- Implement request batching

### Error Handling
- Implement compensation for failed transactions
- Use circuit breakers for unreliable services
- Provide fallback mechanisms
- Log errors comprehensively
- Implement retry logic with exponential backoff

### Monitoring and Observability
```java
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Timer;

@Service
public class MonitoredOrchestrationService {

    private final MeterRegistry meterRegistry;

    @ServiceMethod
    public Result orchestrateWithMetrics(Request request) {
        Timer.Sample sample = Timer.start(meterRegistry);

        try {
            Result result = performOrchestration(request);

            sample.stop(meterRegistry.timer(
                "orchestration.duration",
                "status", "success"
            ));

            return result;

        } catch (Exception e) {
            sample.stop(meterRegistry.timer(
                "orchestration.duration",
                "status", "error"
            ));

            meterRegistry.counter(
                "orchestration.errors",
                "type", e.getClass().getSimpleName()
            ).increment();

            throw e;
        }
    }
}
```

### Testing
```java
@Test
public void testOrchestration() {
    // Mock dependencies
    when(userApi.getUser(1)).thenReturn(mockUser);
    when(profileApi.getProfile(1)).thenReturn(mockProfile);
    when(orderApi.getOrders(1)).thenReturn(mockOrders);

    // Test orchestration
    UserCompleteInfo result = orchestrationService.getUserCompleteInfo(1);

    // Verify
    assertNotNull(result);
    assertEquals(mockUser.getId(), result.getUser().getId());
    verify(userApi).getUser(1);
    verify(profileApi).getProfile(1);
    verify(orderApi).getOrders(1);
}
```

### Design Principles
- Keep orchestration logic separate from business logic
- Use dependency injection for flexibility
- Implement idempotency for retry safety
- Design for failure
- Use asynchronous processing where appropriate
- Implement proper transaction boundaries
- Document orchestration flows
- Monitor performance and errors
