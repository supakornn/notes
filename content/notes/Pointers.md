---
created: 2025-05-25
title: Pointers
tags:
  - sapling
---
### The Core Concept

A **Pointer** is a variable that stores a **memory address**.

![[Pasted image 20260221095939.png | 500]]

- **`&` (Address-of):** Get the location.
- **`*` (Dereference):** Go to the location and get the value.
    
```cpp
int x = 42;
int* ptr = &x; // ptr stores the address of x (e.g., 0x7ffe...)

cout << ptr;  // Prints the memory address
cout << *ptr; // Prints the value stored at that address (42)
```

---

### Memory Visualization

RAM is like a giant list of boxes. Each box has a number (Address).

- **Pointer Size:** On 64-bit systems, a pointer is **8 bytes** because that's the size needed to store any address in your RAM.

![[Pasted image 20260221100213.png | 500]]

---
### Pointer Arithmetic

When you do `ptr + 1`, it jumps by the size of the type.

- `int*` jumps 4 bytes.
- `char*` jumps 1 byte.

---
### Why Use Pointers?

- **Efficiency:** No need to copy big data.
- **Dynamic Memory:** Allocate space on the **Heap**.
- **Data Structures:** Building Blocks for Linked Lists and Trees.

![[Pasted image 20260221100312.png | 500]]

---
**Learn more** - [https://www.youtube.com/watch?v=zuegQmMdy8M](https://www.youtube.com/watch?v=zuegQmMdy8M)