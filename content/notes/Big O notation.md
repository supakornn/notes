---
created: 2025-12-14
tags:
  - sapling
title: Big O notation
---
### $O(1)$ — Constant Time

Execution time does not change with input size.

- Example: accessing an element by index in an array

---

### $O(\log n)$ — Logarithmic Time

Problem size is reduced by a constant factor at each step.

- Example: binary search _(requires sorted data)_

---

### $O(n \log n)$ — Linearithmic Time

Processes nnn elements, each with logarithmic work.

- Example: merge sort

---

### $O(n^c)$ — Polynomial Time

Running time grows as a power of nnn (e.g., $n^2, n^3$).

- Example: nested loops

---

### $O(c^n)$ — Exponential Time

Running time grows exponentially with input size.

- Example: naive recursive Fibonacci

---

### $O(n!)$ — Factorial Time

Considers all possible permutations.

- Example: generating all permutations

---

## Notes

- Growth rate matters more than exact runtime for large nnn
- Constants and lower-order terms are ignored in Big-O notation

---

## See also

- [[notes/Time and Space Complexity]]
- [[notes/P and NP Problem]]