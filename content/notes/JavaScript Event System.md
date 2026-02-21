---
created: 2025-10-05
title: JavaScript Event System
tags:
  - sapling
---
### The Event Flow (Capturing & Bubbling)

Events in the DOM don't just happen on a single element; they travel through the DOM tree in three distinct phases:

1. **Capturing Phase:** The event starts from the `Window` and travels down (Top-down) to the `target`.
2. **Target Phase:** The event reaches the element that triggered it.
3. **Bubbling Phase:** The event "bubbles up" (Bottom-up) back to the `Window`. **This is the default phase** for most listeners.
    

![[Pasted image 20260221225620.png | 500]]

**Critical Insight: Why Bubbling over Capturing?**

- **Specific-to-General Logic:** It is more intuitive to handle the innermost element (Specific) first before notifying its parents (General).
- **Safety from Interception:** Using `e.stopPropagation()` in the **Capturing** phase is dangerous because it kills the event before it ever reaches the children (a "top-down dictatorship"). Bubbling allows children to finish their job before the parent takes over.
- **Historical Standard:** Historically, Internet Explorer only supported Bubbling. The web evolved around this model, making it the de facto standard for modern frameworks.

### Event Delegation

A powerful pattern that leverages **Bubbling**. Instead of attaching a listener to every single child element, you attach one listener to a **Parent** element.

- **Why it matters:** It saves memory and automatically handles "dynamic elements" added to the DOM after the initial load.
- **Implementation:** Use `e.target` to identify which child actually triggered the event.
    
```js
document.querySelector('#parent').addEventListener('click', (e) => {
  if (e.target.matches('.child-item')) {
    // Logic for child items
  }
});
```

### Controlling Event Behavior

- **`e.preventDefault()`**: Prevents the browser's default action (e.g., stopping a link from navigating).
- **`e.stopPropagation()`**: Stops the event from bubbling up. In Bubbling phase, this lets the child act but prevents the parent from reacting.
- **`e.stopImmediatePropagation()`**: Stops bubbling AND prevents other listeners on the **same element** from firing.
    
### Memory & Performance

- **`{ once: true }`**: Automatically removes the listener after it fires once.
- **`{ passive: true }`**: Crucial for high-frequency events like `scroll`. It tells the browser you won't call `preventDefault()`, ensuring smooth UI performance.
    
- **Cleanup:** Always use `removeEventListener` when a component unmounts to avoid **Memory Leaks**.
    
### When to use Capturing? (Interception Pattern)

You only use the Capturing phase when you need to **intercept** an event before the target element even knows it happened:

- **Global Logging/Analytics:** Tracking every click regardless of whether children try to stop it.
- **Security/Tutorial Locks:** Catching events at the top level to block users from clicking anything except a specific "highlighted" element.
    
