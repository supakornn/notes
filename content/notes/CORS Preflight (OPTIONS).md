---
created: 2026-03-19
title: CORS Preflight (OPTIONS)
tags:
  - sapling
---
**CORS Preflight** is a security "handshake" used by web browsers to verify that a cross-origin request is safe to send. It ensures that the server understands and permits the specific HTTP method and headers intended by the client.

### The Mechanism

- **HTTP Method:** Uses the `OPTIONS` method.
    
- **Timing:** Occurs automatically before the **Actual Request** (e.g., POST, PUT, DELETE).
    
- **The Handshake:** 1. The browser sends an `OPTIONS` request with `Access-Control-Request-Method`.
    
    2. The server responds with `Access-Control-Allow-Methods` and `Access-Control-Allow-Origin`.
    
    3. If the response matches the intent, the browser sends the actual data.
    
### Trigger Conditions (Non-Simple Requests)

A Preflight is triggered if the request meets any of these "Non-Simple" criteria:

- **HTTP Methods:** `PUT`, `DELETE`, `PATCH`, `CONNECT`, `OPTIONS`, `TRACE`.
    
- **Content-Type:** Any type other than `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain` (most notably **`application/json`**).
    
- **Custom Headers:** Any request containing headers like `Authorization`, `X-Custom-Header`, etc.
    
### Key Headers

- **Origin:** The domain initiating the request (e.g., `https://my-app.com`).
    
- **Access-Control-Allow-Origin:** Specifies which domains are permitted to access the resource.
    
- **Access-Control-Allow-Methods:** A comma-separated list of allowed HTTP methods.
    
- **Access-Control-Max-Age:** Defines how long (in seconds) the results of a preflight request can be cached to avoid redundant `OPTIONS` calls.

### Why it Matters

- **Security:** Prevents malicious websites from forcing a user's browser to send unintended requests to a different server.
    
- **Legacy Compatibility:** Protects older servers that were not designed to handle modern cross-origin requests or specific HTTP methods.
    
