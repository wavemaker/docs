---
title: "Support for Inserting Parent and Child Records in a Single Transaction Issue"
id: "support-inserting-parent-child-records-single-transaction-issue"
---

There is a known issue related to inserting the parent and child records in a single transaction with the versions 10.0.2 and 10.0.3. To avoid any conflicts, we have explicitly included the "org.hibernate.integrator.spi.Integrator" file for cascading support. This can be found directly under "src/main/resources/META-INF/services/org.hibernate.integrator.spi.Integrator" rather than loading it from the library as it was done earlier.

To resolve the issue, follow the steps below.

1. In the 'File Explorer', search for the file '**org.hibernate.integrator.spi.Integrator**' and download it. You can locate the file in the following path:
    - src/main/resources/META-INF/org.hibernate.integrator.spi.Integrator
        
2. Delete the file '**org.hibernate.integrator.spi.Integrator**' from the following path:
    - src/main/resources/META-INF/org.hibernate.integrator.spi.Integrator
        
3. Add the file '**org.hibernate.integrator.spi.Integrator**' under the services folder to the following location.
    - src/main/resources/META-INF/services/org.hibernate.integrator.spi.Integrator.
