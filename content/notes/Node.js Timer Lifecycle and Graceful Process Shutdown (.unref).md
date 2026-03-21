---
created: 2026-03-19
tags:
  - sapling
title: Node.js Timer Lifecycle and Graceful Process Shutdown (.unref)
---
The management of background timers (`setInterval`, `setTimeout`) in Node.js and Bun directly impacts whether a server process can exit cleanly or must be forcefully killed.

---
### Active vs. Inactive Timers in the Event Loop

The JavaScript Runtime maintains a reference count of active handles (timers, sockets, etc.). As long as this count is greater than zero, the Event Loop keeps running, and the operating system process (the server) will not terminate.

- **Default Behavior:** By default, when you call `setInterval()`, Node.js increments this reference count. If you shut down your HTTP server listener but forget to stop the `setInterval` (via `clearInterval`), **the application process will hang**, remaining active in the background forever because it is waiting for the next cleanup tick.
    
---
### The `.unref()` Solution

The cleanup interval used in the rate limiter middleware is a "utility" or "background" task; it is not essential for core application logic if no requests are active.

By calling `interval.unref()`, we change the timer's status from "active" to "inactive" in the reference count.

1. The timer still fires correctly every interval duration to clean memory.
2. However, **Node.js will no longer keep the process alive** solely because of this timer.    

This is crucial for **graceful shutdowns** during deployment or maintenance. If the main HTTP listener is closed and all request handlers are finished, the process will exit cleanly immediately, even if the next cleanup cycle is not due for another 15 minutes.

---
**Related Notes:** 
- [[notes/Managing In-Memory State via Passive Background Cleanup]]


