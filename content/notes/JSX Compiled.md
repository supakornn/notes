---
created: 2026-02-12
tags:
  - seed
title: JSX Compiled
---
JSX is **syntax sugar** → compiled into function calls → produces **React elements (objects)**

---
### JSX (Source)

```jsx
function App() {
  return (
    <div>
      <h1>Hello Babel</h1>
      <p>This is JSX that looks like HTML.</p>
      <button onClick={() => alert("Hi")}>Click me</button>
    </div>
  )
}
```

---
## Compiled Output

### Babel (modern JSX runtime)

```js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime"

function App() {
  return _jsxs("div", {
    children: [
      _jsx("h1", { children: "Hello Babel" }),
      _jsx("p", { children: "This is JSX that looks like HTML." }),
      _jsx("button", {
        onClick: () => alert("Hi"),
        children: "Click me",
      }),
    ],
  })
}
```

---
### Classic (React.createElement)

```js
function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello Babel"),
    React.createElement("p", null, "This is JSX that looks like HTML."),
    React.createElement(
      "button",
      { onClick: () => alert("Hi") },
      "Click me"
    )
  )
}
```

---
## `_jsx` vs `_jsxs`

- `_jsx` → **single child**
    
- `_jsxs` → **multiple children (array)**
    

```js
_jsx("h1", { children: "Hello" })      // 1 child
_jsxs("div", { children: [ ... ] })    // many children
```

👉 optimization: avoids always creating arrays

---
## What React Actually Gets

Both outputs produce a **React Element (plain object)**

```js
{
  $$typeof: Symbol.for("react.element"),
  type: "div",
  key: null,
  ref: null,
  props: {
    children: [...]
  }
}
```

---
## Mental Model (Important)

```txt
JSX
 ↓ compile (Babel / SWC / TS)
Function calls (jsx / createElement)
 ↓
React Element (object)
 ↓
React Fiber reconciler
 ↓
DOM updates
```

---
## Key Differences

### Modern JSX Runtime (Babel)

- No `import React`
- Uses `react/jsx-runtime`
- Smaller + faster output

### Classic Runtime

- Uses `React.createElement`
- Requires `React` in scope
- More verbose
    
---
## Notes

- JSX ≠ template → it's **just JavaScript**
- React elements are **immutable objects**
- JSX is compiled **at build time**, not runtime
    

---
## Insight

> JSX is not the abstraction.  
> **React Element is the real abstraction.**

