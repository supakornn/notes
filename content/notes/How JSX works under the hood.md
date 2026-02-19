---
created: 2026-02-12
modified: 2026-02-12
tags:
  - react
title: How jsx works under the hood
---

### jsx

```js
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

### Copiled Code

#### Babel

```js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime"
function App() {
  return /*#__PURE__*/ _jsxs("div", {
    children: [
      /*#__PURE__*/ _jsx("h1", {
        children: "Hello Babel",
      }),
      /*#__PURE__*/ _jsx("p", {
        children: "This is JSX that looks like HTML.",
      }),
      /*#__PURE__*/ _jsx("button", {
        onClick: () => alert("Hi"),
        children: "Click me",
      }),
    ],
  })
}
```

#### swc

```js
function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello Babel"),
    React.createElement("p", null, "This is JSX that looks like HTML."),
    React.createElement(
      "button",
      {
        onClick: function onClick() {
          return alert("Hi")
        },
      },
      "Click me",
    ),
  )
}
```
