---
title: Find the bundle ID of any macOS app
tags:
  - seed
created: 2025-12-03
---

**You’ll need the bundle ID when using automation tools (e.g., Yabai, Aerospace).**

Open Terminal and run:

```shell
osascript -e 'id of app "{App_Name}"'
```

Example:

```shell
osascript -e 'id of app "orbstack"'
```
