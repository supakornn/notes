---
created: 2026-03-19
title: Managing In-Memory State via Passive Background Cleanup
tags:
  - sapling
---
When implementing rate limiting or caching strictly in memory (RAM), managing the lifecycle of data entries is critical to prevent a **Memory Leak**.

### The Problem: Ghost Entries (Stale State)

In the Hono rate limiter implementation, user data is stored in a JavaScript `Map` named `buckets`.

1. User A makes a request at 10:00. A bucket is created.
    
2. If User A never returns, that bucket entry will **remain in RAM forever**. There is no "garbage collection" that automatically deletes Map entries based on time.
    
3. Under sustained load with many unique users (especially bots or unauthenticated IPs), this results in **unbounded growth** of the `Map`, eventually leading to an **Out Of Memory (OOM)** crash. These are often called "Ghost Entries."

### The Solution: Passive Cleanup (The Janitor Pattern)

To resolve this, the implementation uses a single, global background timer (`setInterval`).

- **Mechanism:** Every `windowMs` duration, this timer "wakes up" (triggered by the Runtime, not by a request) and iterates through the entire `Map`. It compares `entry.resetAt` against the current time. If `resetAt` has passed, it executes `buckets.delete(key)`.
    
- **Why `setInterval` and not individual `setTimeout`s?** Attaching a `setTimeout` to every request to delete its own entry seems elegant but is extremely dangerous. Creating millions of timer objects in the Node.js Event Loop will starve the CPU and crash the process faster than the memory leak itself. Using **one** global timer is significantly more efficient.
    
- **Optimal Frequency:** Setting the cleanup interval equal to `windowMs` is the ideal balance. It guarantees that any expired "ghost entry" will be removed within a maximum of $2 \times windowMs$ after its actual expiration time, keeping RAM growth controlled with minimal CPU overhead from looping.
    

**Related Notes:** 
- [[Node.js Timer Lifecycle and Graceful Process Shutdown (.unref)]]
- [[Fixed Window Counter Algorithm Mechanics and Trade-offs]]

