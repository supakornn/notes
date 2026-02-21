---
title: MPA in vite(VanilaJS) without Router
tags:
  - sapling
created: 2025-11-21
---

Build a Multi-Page App (MPA) in Vite without a JS router.

Each HTML file is a separate entry, and navigation reloads the page. Vite can bundle all HTML files using `rollupOptions.input`:

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
