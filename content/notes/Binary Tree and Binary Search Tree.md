---
created: 2026-03-31
title: Binary Tree and Binary Search Tree
tags:
  - dsa
  - sapling
---
A **Binary Tree** is a tree where every node has at most two children — a left child and a right child. That's the only rule. No ordering, no balance requirement, just a branching structure.

A **Binary Search Tree** adds one powerful constraint: for every node, all values in its left subtree are smaller, and all values in its right subtree are larger. This ordering is what enables O(log n) search — at each node you eliminate half the remaining tree.

![[Pasted image 20260331203629.png]]

## The four traversal methods

This is where binary trees get interesting. There are four standard ways to visit every node, and each one produces a completely different output order — useful for different problems.

![[Pasted image 20260331203704.png]]

> see visualize in [demo](https://dsa.supakorn.me/bst_traversals.html)
> 
> Run each traversal and watch the visit order — especially in-order, which always produces `1, 3, 6, 8, 10, 12, 15` — sorted output from an unsorted insertion order. That's not a coincidence, it's the BST ordering property at work.

## BST search, insert, and delete

![[Pasted image 20260331203908.png]]

> see visualize in [demo](https://dsa.supakorn.me/bst_operations.html)

Search shows you the decision at every node — go left or right — which is exactly binary search made visual. Try inserting values in sorted order (1, 2, 3, 4, 5) and watch the tree degrade into a linked list. That's the worst case: a **skewed tree** where height = n and every operation becomes O(n).

## Time complexity

|Operation|Balanced BST|Skewed BST|
|---|---|---|
|Search|O(log n)|O(n)|
|Insert|O(log n)|O(n)|
|Delete|O(log n)|O(n)|
|Min / max|O(log n)|O(n)|
|In-order traversal|O(n)|O(n)|
|Space|O(n)|O(n)|

The skewed worst case is why **self-balancing BSTs** exist — AVL trees and Red-Black trees automatically rotate nodes after insertions and deletions to keep height at O(log n). Java's `TreeMap` and `TreeSet` are Red-Black Trees. Python's `sortedcontainers.SortedList` uses a similar idea.

## The degenerate case — why balance matters

Insert `[1, 2, 3, 4, 5]` in order into a plain BST and you get a straight line going right — effectively a linked list. Height becomes n, and search degrades to O(n). Insert the same values in a different order — `[3, 1, 5, 2, 4]` — and you get a balanced tree with height 3. Same data, dramatically different performance. A balanced BST (AVL or Red-Black) solves this automatically by rebalancing after every insert.

## Real-world use cases

**Databases — range queries** — hash maps can only answer "give me exactly this key". A BST can answer "give me all keys between 100 and 200" by traversing the relevant subtree. This is why database indexes use B-Trees (a generalization of BST for disk blocks) for range queries.

**`std::map` and `std::set` in C++** — both are Red-Black Trees under the hood. Iteration yields sorted output, and you get O(log n) operations with a strict worst-case guarantee — unlike hash maps which are O(1) average but O(n) worst.

**Java `TreeMap` / `TreeSet`** — same: Red-Black Tree, sorted iteration, O(log n) guaranteed.

**Auto-complete and sorted suggestions** — store words in a BST. In-order traversal gives them alphabetically sorted. Finding all words in a range ("al" to "am") is a single BST traversal rather than scanning everything.

**File system directory trees** — most file systems use B-Trees to index file names within directories. Finding a file is a tree search, not a linear scan.

**Expression trees** — compilers represent arithmetic expressions as binary trees. `3 + (4 × 5)` becomes a tree with `+` at root, `3` on the left, and `×` on the right with children `4` and `5`. Post-order traversal evaluates the expression naturally — children before parent, so operands before operator.

**Priority scheduling** — a BST ordered by priority lets you find the highest-priority task in O(log n) and insert new tasks in O(log n). (A heap is usually preferred for pure priority queues, but a BST also gives you fast arbitrary deletion.)

## BST vs Hash Map — the key distinction

|You need|Use|
|---|---|
|O(1) exact key lookup|Hash Map|
|Sorted iteration|BST|
|Range queries (`between x and y`)|BST|
|Find min/max quickly|BST|
|Predecessor/successor of a value|BST|
|Guaranteed O(log n) worst case|Balanced BST|

The rule of thumb: **if order matters, reach for a BST. If only membership or lookup matters, reach for a hash map.**