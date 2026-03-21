---
title: Accessing a Container Stuck in a Restart Loop
tags:
  - seed
created: 2025-12-03
---
When a container keeps restarting, you can start a shell inside it using the following commands.

### **With Docker Compose**

```shell
docker compose run --entrypoint sh <service_name>
```

### **With Docker Run**

```shell
docker run --rm -it --entrypoint sh <image_name>
```

**Notes:**

- `<service_name>` refers to the service defined in your `docker-compose.yml`.
- `<image_name>` refers to the image you want to run.
- `--rm` removes the container after exit, and `-it` makes the shell interactive.