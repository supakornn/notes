---
created: 2026-03-19
title: Functional Middleware Factories and Closure Scope
tags:
  - seed
---
The provided rate limiter is a sophisticated application of Functional Programming principles, specifically using a **Higher-Order Function (HOF)** and **JavaScript Closures** to manage private state.

### The Middleware Factory Pattern

The main `rateLimit()` function is not actually the middleware that runs during a request. It is a **Factory Function** that _creates_ the middleware.

1. **Creation Phase:** You call `const limiter = rateLimit(config)`.
    
    - The outer `rateLimit` function executes **once** at application startup.
        
    - It initializes the private `buckets` Map and starts the private `setInterval` cleanup timer.
        
2. **Returned Middleware:** It returns (outputs) a _new_ `async (c, next)` function.
    
3. **Execution Phase (Request):** Hono executes this _returned_ function on every request.
    
### Crucial Role of Closure

Why does this work? Why doesn't the `buckets` Map vanish after `rateLimit()` finishes running?

This is the power of a **Closure**. The returned middleware function is "born" inside the scope of the outer `rateLimit` function. It "remembers" and retains access to all variables that were present when it was created, including `buckets`, `limit`, and `windowMs`.

This allows us to **encapsulate state** perfectly. The `buckets` Map is private to that _specific instance_ of the limiter.

- `loginRateLimit` has its own private Map and cleanup timer.
    
- `aiRateLimit` has a different private Map and a different cleanup timer.
    
- They never conflict, and Route Handlers cannot accidentally tamper with the raw tracking data.
    