---
title: Tailscale to private network VM
tags:
  - tailscale
  - mac
created: 2025-10-06
---

**Use this when:** You want to SSH between your devices without port forwarding or exposing ports to the internet.

**What is Tailscale?** A mesh VPN that creates a secure private network between your devices.

**Steps:**

1. Install Tailscale

```shell
# mac
brew install tailscale
```

2. Start Tailscale

```shell
# linux
sudo tailscale up
```

3. Login on both Mac and Linux

4. SSH with Machine Address: [https://login.tailscale.com/admin/machines](https://login.tailscale.com/admin/machines)

**Tip:** Use `tailscale status` to see connected devices and their IPs.
