---
title: Make Obsidian Window Translucent
tags:
  - sapling
created: 2025-10-05
---
**Use this when:** You want a translucent/glassmorphism look for your Obsidian window.

**Steps:**

1. Go to Settings → Appearance → Advanced → Turn on "Translucent window"
2. Open terminal and go to `.obsidian/snippets/` in your vault directory
3. Create a CSS file (e.g., `translucent.css`) and paste this:

```css
body {
  --background-primary: #000 !important; /* bg color */
  --titlebar-background: transparent !important;
  --titlebar-background-focused: var(--titlebar-background);
  --text-normal: #f1f1f1 !important;
  --workspace-background-translucent: rgba(var(--mono-rgb-0), 0.5); /* 0.5 is opacity */
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

4. Go to Settings → Appearance → CSS Snippets → Enable your CSS
5. Enjoy your translucent Obsidian! 🎉

**Tip:** Adjust `0.5` in `--workspace-background-translucent` for more/less transparency.
