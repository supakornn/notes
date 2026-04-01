---
title: Customize VScode UI fonts
tags:
  - seed
created: 2025-10-05
---
This is how to change VSCode’s **UI font** (sidebar, tabs, etc.) to match your editor font.
### **Setup**

- Install the [**Custom UI Style**](https://marketplace.visualstudio.com/items?itemName=subframe7536.custom-ui-style) extension.
- Open `settings.json` (`Cmd + Shift + P` → "Open User Settings JSON").
- Add the following line:

"custom-ui-style.font.sansSerif": "JetBrains Mono",

- Reload VSCode 🎉

**Note:** This changes the **UI font**, not the editor font (`editor.fontFamily`).