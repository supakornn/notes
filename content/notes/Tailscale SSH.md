---
title: Tailscale SSH
tags:
  - seed
created: 2025-10-06
---
- [Install](https://tailscale.com/docs/install)Tailscale
- Start by run : `sudo tailscale up`
- [Log in](https://login.tailscale.com/admin/machines) on all devices
- SSH between devices : `ssh user@<tailscale-ip>`
- **Tip:** use `tailscale status` to Shows all connected devices and their private Tailscale IPs.