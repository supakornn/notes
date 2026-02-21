---
title: Graceful Shutdown in Go
tags:
  - sapling
created: 2025-10-05
---

Cleanly stop a Go server without dropping active connections or losing data.

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

**How it works:**

1. Creates a channel to receive OS signals
2. Listens for SIGINT (Ctrl+C) or SIGTERM (docker stop)
3. Calls `Shutdown()` to finish active requests before exiting

More info: https://victoriametrics.com/blog/go-graceful-shutdown
