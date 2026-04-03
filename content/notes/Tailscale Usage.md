---
title: Tailscale Usage
tags:
  - seed
created: 2025-10-06
---
**What is Tailscale?**
A **mesh VPN** that creates a secure private network between your devices.

---
## **Install Tailscale**

**macOS**

```bash
brew install tailscale
```

**Linux**

```bash
sudo apt install tailscale   # or your distro's package manager
```

---
## **Start Tailscale**

```bash
sudo tailscale up
```

---
## **Log in on all devices**

Authenticate via:  
[https://login.tailscale.com/admin/machines](https://login.tailscale.com/admin/machines)

---
## **SSH between devices**

Use the **Tailscale IP** of the target machine (check with `tailscale status`):

```bash
ssh user@<tailscale-ip>
```

---

**Tip:**

```bash
tailscale status
```

Shows all connected devices and their private Tailscale IPs.
