---
title: Container Restart Loop
tags:
  - seed
created: 2025-12-03
---
container stuck in restart loop is annoying because you can’t exec into it

usually I end up doing:

```shell
docker compose run --entrypoint sh <service>
```

it works, but actually this creates a NEW container
→ so sometimes debugging feels weird because state/env is not the same

if I actually want to see what’s going on:

```json
docker logs <container>
```

another thing that worked before:
disable restart first

```json
docker update --restart=no <container>
```

then start + attach:

```json
docker start -ai <container>
```

this gets closer to the real environment