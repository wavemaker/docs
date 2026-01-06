---
title: "From javax to jakarta namespace: What it Means for WaveMaker Apps"
author: "Praveen Chandra"
---
---

The switch from the **javax** to **jakarta** namespace is one of the most significant changes in the Java in the past 20+ years, without a question. This shift impacts the entire ecosystem—not just Java EE servers, but also a wide range of libraries, including Spring, Hibernate etc.

Let's understand what it is and how WaveMaker apps get impacted.

## The History

**Java Enterprise Edition** (Java EE, formerly J2EE) has long been the standard for building enterprise-grade applications, governed by the Java Community Process (JCP) and managed by **Oracle**. Java EE provided the core libraries for web technologies, including Servlets, JSP, and EJB, all under the javax namespace.

On September 12, 2017, **Oracle** announced its decision to transfer Java EE to the **Eclipse Foundation**. However, the Eclipse Foundation and Oracle could not reach an agreement on the use of the javax namespace and Java trademarks, as Oracle retained ownership of the **"Java"** trademark. As a result, the platform was renamed from **Java EE** to **Jakarta EE**.

Starting with Jakarta EE 9.x, all existing libraries in the javax package have been renamed to the jakarta package. This change requires all Java EE-based libraries, including Servlets, to transition from the **javax** namespace to the **jakarta** namespace.

This is a significant shift, as not only your application but also all its dependencies must be upgraded to accommodate this namespace change.

<!-- truncate -->

## Impact on WaveMaker apps

Currently, WaveMaker applications are built using **Servlet 4**, which is based on Java EE and utilizes the javax namespace. However, with the transition from Java EE to Jakarta EE, we need to update all javax references to jakarta, including third-party dependencies used in the application.

:::impact
Starting with our **11.9 release, scheduled for October 21, 2024**, WaveMaker applications will be upgraded from **Servlet 4 (Java EE)** to **Servlet 6 (Jakarta EE)**. This shift will be a breaking change, as applications must migrate from javax to jakarta to remain compatible with the latest standards.
:::

In upcoming posts, we’ll explore why this upgrade is essential, the impact on existing applications, and which parts of the migration will be handled automatically versus those that may require manual intervention.
