---
created: 2025-05-25
title: Pointers
tags:
  - sapling
---
### 1. The Core Concept

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


### 2. Memory Visualization

RAM is like a giant list of boxes. Each box has a number (Address).

- **Pointer Size:** On 64-bit systems, a pointer is **8 bytes** because that's the size needed to store any address in your RAM.

### 3. Pointer Arithmetic

Arithmetic with pointers is aware of the **Data Type**. It doesn't just increment by 1 byte; it increments by the `sizeof(type)`.

- If `p` points to an `int` (4 bytes), `p + 1` moves the pointer forward by **4 bytes** in memory.
- This is the underlying logic behind **Arrays**; an array name is essentially a pointer to its first element.
    
### 4. Why Use Pointers?

- **Efficiency:** Passing an address to a function is much faster than "copying" a large object (Pass-by-address).
- **Dynamic Memory:** Crucial for allocating memory on the **Heap** during runtime (using `new` or `malloc`).
- **Direct Control:** Essential for systems programming, building data structures (Linked Lists, Trees), and hardware-level I/O.
    
### 5. Memory Safety (The Risks)

- **Dangling Pointers:** A pointer pointing to a memory location that has already been deallocated/freed.
- **Segmentation Fault:** An error caused by trying to access a memory address you don't have permission to (like `nullptr`).
- **Memory Leaks:** Allocating memory on the heap but forgetting to `delete` or `free` it after use.
    

