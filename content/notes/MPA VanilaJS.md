---
title: MPA VanilaJS
tags:
  - seed
created: 2025-11-21
---
**each HTML file as a separate entry**, with navigation triggering a full page reload instead of a client-side router.

Vite can bundle all HTML files automatically using `rollupOptions.input` in `vite.config.js`:

```js
// vite.config.js
import { readdirSync } from "fs"
import { resolve } from "path"
import { defineConfig } from "vite"

// Automatically include all HTML files in the root as entry points
const htmlFiles = readdirSync(__dirname)
  .filter((file) => file.endsWith(".html"))
  .reduce((entries, file) => {
    const name = file.replace(".html", "")
    entries[name] = resolve(__dirname, file)
    return entries
  }, {})

export default defineConfig({
  build: {
    rollupOptions: {
      input: htmlFiles,
    },
  },
})
```

**Tip:**

- Place all your HTML files in the project root or adjust the script to scan subdirectories.
- Navigation between pages will reload the page, no JS router required.
    

