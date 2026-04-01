---
title: Golang Graceful Shutdown
tags:
  - seed
created: 2025-10-05
---
 **stop a Go server** without dropping active connections or losing data.

```go
c := make(chan os.Signal, 1)
signal.Notify(c, os.Interrupt, syscall.SIGTERM)

go func() {
    <-c
    log.Println("Shutting down server...")
    _ = s.app.Shutdown(context.Background())
    log.Println("Server stopped")
}()
```

---

### **How it works**

- Creates a **channel** to receive OS signals.
- Listens for **SIGINT** (Ctrl+C) or **SIGTERM** (e.g., `docker stop`).
- Calls `Shutdown()` to **finish active requests** before exiting.

More info: [VictoriaMetrics – Go Graceful Shutdown](https://victoriametrics.com/blog/go-graceful-shutdown)