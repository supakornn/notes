---
title: Make Obsidian Window Translucent
tags:
  - seed
created: 2025-10-05
---
make **translucent or glass-like** look for your Obsidian window.
### **Setup**

- Go to **Settings → Appearance → Advanced** and turn on **“Translucent window”**.
- Open terminal and navigate to `.obsidian/snippets/` in your vault directory.
- Create a CSS file (e.g., `translucent.css`) and paste:
    

```css
body {
  --background-primary: #000 !important; /* bg color */
  --titlebar-background: transparent !important;
  --titlebar-background-focused: var(--titlebar-background);
  --text-normal: #f1f1f1 !important;
  --workspace-background-translucent: rgba(var(--mono-rgb-0), 0.5); /* adjust opacity */
}

.workspace-tab-header.is-active {
  color: #fff !important;
}

.workspace-leaf,
.workspace-tab-header-container {
  background: transparent;
}

.workspace-split.mod-root,
.workspace-split.mod-root .view-content,
.workspace-split.mod-root .view-header {
  background: transparent;
}

.view-header-title-container:not(.mod-at-end):after {
  background: transparent;
}

.custom-frames-frame {
  background: transparent !important;
}

.is-focused .workspace-leaf.mod-active .view-header {
  background: transparent;
}
```

- Go to **Settings → Appearance → CSS Snippets** and enable your CSS.
- Enjoy your translucent Obsidian! 🎉
    

**Tip:** Adjust the `0.5` in `--workspace-background-translucent` to increase or decrease transparency.
