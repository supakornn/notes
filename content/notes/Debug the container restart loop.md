---
title: Debug the container restart loop
tags:
  - docker
  - linux
created: 2025-12-03
modified: 2026-01-31
---

When container is stuck in a restart loop, you can exec the container shell with this command.

```shell
docker compose run --entrypoint sh <service_name>
```

```shell
docker run --rm -it --entrypoint sh <image_name>
```
