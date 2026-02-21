---
title: Customize VScode UI fonts
tags:
  - seed
created: 2025-10-05
---

**Use this when:** You want to change VSCode's UI font (sidebar, tabs, etc.) to match your editor font.

**Steps:**

1. Install [Custom UI Style](https://marketplace.visualstudio.com/items?itemName=subframe7536.custom-ui-style) Extension
2. Open `settings.json` (`Cmd + Shift + P` → "Open User Settings JSON")
3. Add this line:

```json
"custom-ui-style.font.sansSerif": "JetBrains Mono",
```

4. Reload VSCode 🎉

**Note:** This changes the UI font, not the editor font (which is `editor.fontFamily`).
