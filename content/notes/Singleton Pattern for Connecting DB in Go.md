---
title: Singleton Pattern for Connecting DB in Go
tags:
  - seed
created: 2025-10-05
---
**Use this when:** You want a **single shared database connection** across your app to avoid opening multiple connections.

---

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

---
### **How it works**

- `sync.Once` ensures the connection is **created only once**, even if `GetDB()` is called from multiple goroutines.
- `instance` holds the **singleton database connection** for reuse.
    

More info: [Coding Explorations – Singleton Pattern in Go](https://www.codingexplorations.com/blog/implementing-the-singleton-pattern-in-go)
