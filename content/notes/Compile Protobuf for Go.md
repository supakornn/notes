---
title: Compile Protobuf for Go
tags:
  - sapling
created: 2025-10-05
---

Generate Go code from `.proto` files for gRPC services.

**Important:** Make sure `protoc` (Protocol Buffer compiler) is installed first: `brew install protobuf`

**Steps:**

1. Install protoc-gen-go plugin for Go

```shell
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
```

2. Compile your `.proto` file with Go and gRPC options

```shell
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative path_to_protobuf_file
```
