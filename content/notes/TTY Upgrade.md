---
created: 2026-02-08
tags:
  - seed
title: TTY Upgrade
---
Convert a limited shell into a more usable **interactive TTY shell**.
### Method: Python PTY Spawn

```bash
python3 -c 'import pty; pty.spawn("/bin/bash")'
```

Fallback (if `python3` not available):

```bash
python -c 'import pty; pty.spawn("/bin/bash")'
```

---
## What This Does

- Spawns a **pseudo-terminal (PTY)**
- Upgrades shell to behave like a normal terminal
- Enables:
    - proper input handling
    - command history
    - job control (partially)

---
## When to Use

- Reverse shell (e.g., netcat)
- Web shell
- Any **non-interactive / dumb shell**

---
## Limitations

- Not a full TTY yet
- May still have issues with:
    - `CTRL+C`
    - `CTRL+Z`
    - terminal size
    - `sudo`, `ssh`, `vim`
        
---
## Upgrade Further (Recommended)

After spawning PTY:

```bash
export TERM=xterm
```

Then background + fix terminal:

```bash
CTRL+Z
stty raw -echo
fg
```

Finally:

```bash
reset
```

---
## Mental Model

```txt
dumb shell
 ↓
pty.spawn()
 ↓
semi-interactive shell
 ↓ (stty + TERM)
fully interactive TTY
```

---
## Notes

- Requires Python on target
    
- Alternative methods:
    
    - `/bin/sh -i`
    - `script /dev/null -c bash`
    - `socat` (best but not always available)
        
