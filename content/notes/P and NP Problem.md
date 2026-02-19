---
created: 2026-01-17
tags:
  - dsa
  - concept
title: P and NP Problem
---

### P Problem

**P (Polynomial Time) Problems**  
Problems that can be **solved** in polynomial time by a deterministic algorithm.

> In short: both **finding** and **verifying** the solution are efficient.

### NP Problem

**NP (Nondeterministic Polynomial Time) Problems**  
Problems for which a proposed solution can be **verified** in polynomial time, but **finding** the solution may be computationally hard.

> In short: **verification is fast**, but **solution search may be slow**.

### NP-Complete **Problems**

**NP-Complete Problems**  
Problems that are **both in NP and NP-Hard**.  
They are the **hardest problems in NP**; if any NP-Complete problem can be solved in polynomial time, then **all NP problems can be solved in polynomial time**.

> In short: hard to solve, easy to verify, and as hard as any NP problem.

### NP-Hard Problems

**NP-Hard Problems**  
Problems that are **at least as hard as NP-Complete problems**, but **do not have to be in NP**.  
They may not have solutions that can be verified in polynomial time.

> In short: extremely hard problems, not necessarily easy to verify.

See also:

- [[Time and Space Complexity]]
- [[Big O notation]]
