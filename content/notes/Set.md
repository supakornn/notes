---
created: 2025-12-22
tags:
  - sapling
  - dsa
title: Set
---
A Set answers one question: **does this element exist?** It stores unique values with no duplicates and no associated values — just membership. If a Hash Map is a dictionary, a Set is a highlighter: it marks what's present and ignores everything else.

Under the hood, a Hash Set is literally a Hash Map where every value is a dummy placeholder. The entire key-value machinery exists, but the value slot is always ignored.

![[Pasted image 20260330195331.png]]

The dummy `true` values on the right side of the Set are literally how Java's `HashSet` is implemented — it's a `HashMap<K, Object>` with a shared `PRESENT` constant as the value. Python's `set` uses the same approach internally.

## Time complexity

|Operation|HashSet|TreeSet (sorted)|
|---|---|---|
|`add(x)`|O(1) avg|O(log n)|
|`has(x)` / `contains(x)`|O(1) avg|O(log n)|
|`delete(x)`|O(1) avg|O(log n)|
|Iteration|O(n)|O(n) in sorted order|
|Min / max|O(n)|O(log n)|

`HashSet` gives O(1) operations but no ordering guarantee. `TreeSet` (backed by a Red-Black Tree) sacrifices speed for sorted order — use it when you need to iterate in order or find the minimum/maximum efficiently.

