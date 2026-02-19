---
created: 2026-02-08
modified: 2026-02-08
tags:
  - ctf
title: Upgrading a Non-Interactive Shell
---

```js
python3 -c 'import pty; pty.spawn("/bin/bash")'
# or if python3 is not available
python -c 'import pty; pty.spawn("/bin/bash")'
```
