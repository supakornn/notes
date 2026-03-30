---
created: 2025-12-20
tags:
  - sapling
  - dsa
title: Array
---
Array is the simplest but most fundamental data structure — and understanding it deeply means understanding how memory actually works.

The core insight: every element sits at a **contiguous** memory address. To find any element, the CPU computes `base_address + (index × element_size)` instantly — which is why random access is always O(1) regardless of array size.

![[Pasted image 20260330184445.png]]

## Time complexity

| Operation                 | Time           | Why                           |
| ------------------------- | -------------- | ----------------------------- |
| Access `arr[i]`           | O(1)           | Direct address arithmetic     |
| Search (unsorted)         | O(n)           | Must scan every element       |
| Search (sorted)           | O(log n)       | Binary search is possible     |
| Insert / delete at end    | O(1) amortized | Just write to next slot       |
| Insert / delete at middle | O(n)           | All elements after must shift |

> The insert/delete cost is the key thing to internalize. Here's an interactive [demo](https://dsa.supakorn.me/array.html) so you can _see_ the shifting happen:
> 
> Try inserting at index 0 — you'll see every element highlighted amber as they shift right. That's the O(n) cost made visible.
## Types of arrays

**Static array** — fixed size set at compile time (`int arr[10]` in C). Fastest possible, zero overhead, but you must know the size upfront.

**Dynamic array** — resizes automatically. This is what `ArrayList` (Java), `vector` (C++), `list` (Python), and `Array` (JavaScript) are under the hood. When the internal buffer fills up, it allocates a new block roughly 2× the size and copies everything over. That copy is O(n) — but it happens so rarely that the _amortized_ cost per append is still O(1).

**Multi-dimensional array** — a 2D array is just a 1D array in disguise. `arr[row][col]` maps to `base + (row × numCols + col) × elementSize`. Useful for matrices, grids, and images.

## Real-world use cases

**Image buffers** — a PNG image is literally a 2D array of pixels. Every filter, crop, and resize operation is array manipulation.

**Video frames** — streaming video is a sequence of image arrays read at 24–60 frames per second. Array access speed is critical.

**CPU cache lines** — iterating over an array sequentially is the _fastest_ possible memory access pattern because CPUs prefetch contiguous blocks. Linked lists lose here badly.

**Lookup tables** — precomputed values indexed by position. `sinTable[angle]` returns a precomputed sine value in O(1) instead of computing it each time.

**Sliding window algorithms** — problems like "max sum of k consecutive elements" or "longest substring without repeating characters" rely on arrays having O(1) index access to work efficiently.

**Sorting** — virtually every sorting algorithm (quicksort, mergesort, heapsort) requires random access, so they all operate on arrays.

## When _not_ to use an array

If you're frequently inserting or deleting from the middle → use a [[notes/Linked List]] or [Deque](notes/Queue). If you need fast lookup by key rather than position → use a [[notes/Hash Map]]. If you need sorted order with fast insert → use a **BST**.

