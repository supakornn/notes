---
created: 2026-02-08
tags:
  - seed
title: Upgrading a Non-Interactive Shell
---

```js
python3 -c 'import pty; pty.spawn("/bin/bash")'
# or if python3 is not available
python -c 'import pty; pty.spawn("/bin/bash")'
```
