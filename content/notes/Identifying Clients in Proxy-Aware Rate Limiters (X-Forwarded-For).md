---
created: 2026-03-19
tags:
  - seed
title: Identifying Clients in Proxy-Aware Rate Limiters (X-Forwarded-For)
---
Effective rate limiting depends on uniquely identifying the client making the request (the "key"). In modern web infrastructure, this is complicated because servers almost always sit behind **Reverse Proxies** (Load Balancers, Nginx, Cloudflare).

### The Proxy IP Problem

If your backend server looks at the incoming TCP socket's source IP address (`c.req.ip` equivalent), **it will see the IP of the Reverse Proxy**, not the actual user. Rate limiting this IP would block your own proxy, effectively taking your entire application offline.

### The X-Forwarded-For (XFF) Header

Proxies use standard HTTP headers to pass the original client's information along. The most common is `X-Forwarded-For`.

- **Header Structure:** This header contains a comma-separated list of IPs: `X-Forwarded-For: Client_IP, Proxy1_IP, Proxy2_IP`.
    
- **The logic:** The **first IP** in the list is the actual client that initiated the connection outside your infrastructure chain. Proxies further down the chain append the IP they received.
    

### Robust Fallback Implementation

The `ipKey` convenience function implements a reliable fallback chain to find the key:

1. `c.req.header('x-forwarded-for')?.split(',')[0]` — Attempts to extract the very first client IP.
    
2. `c.req.header('x-real-ip')` — Checks an alternative standard proxy header (sometimes used by Nginx or Cloudflare).
    
3. `'unknown'` — The final conservative fallback. If no IP is found (extremely rare), all these requests share a single bucket. This intentionally protects the server by being strict when information is missing.
    
### User Authenticated State (userKey)

Rate limits should often track users, not just hardware locations. The `userKey` function defaults to `ipKey` but immediately upgrades to using the **authenticated User ID** (`c.get('userId')`) once an authorization middleware populates that context value. This ensures users are restricted uniformly whether they access via a laptop, phone, or different VPN locations.

**Security Warning:** This entire mechanism relies on trusting your proxy. If your server is directly exposed to the internet, attackers can **Spoof** the `X-Forwarded-For` header with random IPs to bypass your fixed window limits.
