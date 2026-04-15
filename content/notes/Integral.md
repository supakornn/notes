---
created: 2026-04-15
tags:
  - seed
title: Integral
---
An integral is essentially the mathematical process of **accumulation**. if a [[Derivative| derivative]] tells you how fast something is changing at a specific moment, an integral tell you how much of that **stuff** has built up over time.

> Think of it as the **reverse** of a derivative.

The most common way to visualize an integral is as the **area** trapped between the graph of a function and the x-axis. While we can easily find the area of a rectangle or a triangle using simple formulas, curves are tricky. Integration allows us to find the exact area of irregular, curvy shapes by slicing them into an infinite number of ultra-thin rectangles and adding them all together.


### The Definite Integral
This calculates a **specific number** (the area between two points).

$$\int_{a}^{b} f(x) \, dx$$

- **$a$ and $b$:** The boundaries (where you start and stop measuring).
- **$f(x)$:** The height of the function.
- **$dx$:** An infinitely small width.


#### The Antiderivative
This results in a **new function** rather than a number. It is the **undoing** of a derivative.

$$\int f(x) \, dx = F(x) + C$$

- **$+ C$:** This is the **Constant of Integration.** Because the derivative of any constant (like 5 or 100) is zero, we add $+ C$ to acknowledge there might have been a constant in the original function that disappeared during differentiation.

> [!notes]
> The symbol for an integral ($\int$) is actually an elongated **"S"**, which stands for **Sum**.