---
created: 2026-01-17
tags:
  - sapling
title: P and NP Problem
---
## P Problem (Polynomial Time)

Problems that can be **solved** in polynomial time by a deterministic algorithm.

- **Intuition:** Both finding and verifying a solution are efficient.
    
- **Complexity:** $O(n^k)$
    
---
## NP Problem (Nondeterministic Polynomial Time)

Problems where a proposed solution can be **verified** in polynomial time, but finding that solution may be computationally hard.

- **Intuition:** Verification is fast, but finding the solution may be slow.
    
---
## NP-Complete Problems

The "hardest" problems in $NP$. They are both in $NP$ and $NP$-Hard.

- **Key Property:** If any $NP$-Complete problem is solved in polynomial time, then $P = NP$.
    
- **Intuition:** Hard to solve, easy to verify, and as hard as any other problem in $NP$.
    
---
## NP-Hard Problems

Problems that are at least as hard as $NP$-Complete problems, but are **not** required to be in $NP$.

- **Verification:** May not be verifiable in polynomial time.
    
- **Intuition:** Extremely hard; can be harder than $NP$-Complete.
    

---

## Mental Model & Relationships

The relationship between these classes is usually represented as:

1. $P \subseteq NP$
    
2. $NP\text{-Complete} \subseteq NP$
    
3. $NP\text{-Hard} \supseteq NP\text{-Complete}$
    

### Mathematical Summary

$$P \subseteq NP$$

$$NP\text{-Complete} = NP \cap NP\text{-Hard}$$

---

## Examples

|**Class**|**Example**|**Logic**|
|---|---|---|
|**P**|Sorting (Merge Sort)|Can be solved in $O(n \log n)$.|
|**NP**|SAT (Boolean Satisfiability)|Easy to check if an assignment works.|
|**NP-Complete**|Traveling Salesman (Decision)|"Is there a route shorter than $X$?"|
|**NP-Hard**|Traveling Salesman (Optimization)|"Find the shortest possible route."|
