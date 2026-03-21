---
title: Compile Protobuf for Go
tags:
  - seed
created: 2025-10-05
---
**Use this when:** You want to **generate Go code** from `.proto` files for gRPC services.

---

**Important:** Make sure the **Protocol Buffer compiler** is installed:

```bash
brew install protobuf
```

---
### **Install the Go plugin for Protobuf**

```bash
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
```

---
### **Compile your `.proto` file**

Generate Go code with gRPC support:

```bash
protoc \
  --go_out=. --go_opt=paths=source_relative \
  --go-grpc_out=. --go-grpc_opt=paths=source_relative \
  path_to_protobuf_file
```

**Tip:**

- `--go_out=.` and `--go-grpc_out=.` specify the output directory.
- `paths=source_relative` ensures the generated files keep the same relative path as your `.proto` file.
    