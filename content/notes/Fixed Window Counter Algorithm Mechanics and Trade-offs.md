---
created: 2026-03-19
title: Fixed Window Counter Algorithm Mechanics and Trade-offs
tags:
  - sapling
---
The **Fixed Window Counter** is a fundamental rate-limiting algorithm characterized by its simplicity and low resource overhead. It restricts the number of requests a client can make within a discrete, static time alignment (the "window").

### How it Works (The Logic)

The algorithm defines a temporal boundary (e.g., "per minute" which might align to `00:01:00`, `00:02:00`).

1. On the **first request** from a unique key, a "bucket" (data entry) is created. It initializes a counter to `1` and sets a `resetAt` timestamp (Current Time + Window Duration).
    
2. For **subsequent requests** within that window (`currentTime < resetAt`), the counter increments.
    
3. If the counter exceeds the defined `limit`, the request is blocked (HTTP 429).
    
4. Once `resetAt` passes, the next request destroys the old bucket and creates a fresh one, starting the count over.
    

### Analysis: Efficiency vs. Accuracy

The implementation uses a simple `Map<string, { count: number; resetAt: number }>`.

- **Space Complexity:** $O(1)$ per key. Whether a user makes 1 request or 1,000 requests, the memory required to track them remains constant (just one object with two numbers). This is extremely efficient for in-memory scaling without external dependencies like Redis.
    
- **The Trade-off: Boundary Burst ($2\times$ Limit Issue).** This is the primary critical weakness. Because window boundaries are fixed, a user can manipulate requests right at the edge of the boundary.
    
    **Example:** Limit is 100 requests/minute.
    
    - `00:00:59`: User makes 100 requests. (Quota used for this minute).
        
    - `00:01:01`: (New minute window starts). User makes another 100 requests.
        
    - **Result:** The user successfully made **200 requests** in just **2 seconds**, severely spiking server load, even though they technically stayed within the "100/minute" limit for both discrete minutes.

**Related Notes:** 
- [[Managing In-Memory State via Passive Background Cleanup]]
- [[Functional Middleware Factories and Closure Scope]]