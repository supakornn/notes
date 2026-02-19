---
title: Singleton Pattern for Connecting DB in Go
tags:
  - go
  - dev
created: 2025-10-05
modified: 2026-01-26
---

Single database connection shared across your app to avoid opening multiple connections.

```go
var instance *sql.DB
var once sync.Once

func GetDB() *sql.DB {
    once.Do(func() {
        db, err := sql.Open("postgres", "connection string")
        if err != nil {
            log.Fatalf("Failed to connect: %v", err)
        }
        instance = db
    })
    return instance
}
```

**How it works:** `sync.Once` ensures the connection is created only once, even if `GetDB()` is called from multiple goroutines.

More info: https://www.codingexplorations.com/blog/implementing-the-singleton-pattern-in-go
