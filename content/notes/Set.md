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

![[Pasted image 20260331003823.png]]

> see visualize in [demo](https://dsa.supakorn.me/)
> 
> Try adding a duplicate — the set silently ignores it. Try each set operation to see exactly which elements end up highlighted green (in the result) vs amber (excluded).

## The four set operations

These are the operations that make Sets genuinely powerful beyond just membership testing — and they map directly to real engineering problems:

**Union (A ∪ B)** — everything in either set. Use case: merge two lists of user IDs while automatically deduplicating.

**Intersection (A ∩ B)** — only what's in both. Use case: find mutual friends, common tags, shared permissions between two roles.

**Difference (A − B)** — what's in A but not B. Use case: find new users since last sync, items added to a cart but not yet ordered.

**Symmetric difference (A △ B)** — what's in one but not both. Use case: detect what changed between two versions of a config file or dataset.

## HashMap vs Set — the decision rule

|You have|You need|Use|
|---|---|---|
|Keys with associated data|Look up the data by key|HashMap|
|Keys only|Check if something exists|Set|
|Keys only|Deduplicate a list|Set|
|Keys only|Set math (union/intersect/diff)|Set|
|Keys with counts|Count occurrences|HashMap `key → count`|

The clearest signal to reach for a Set over a HashMap: **you never need to retrieve a value, only ask "is this present?"**

## Real-world use cases

**Deduplication** — the most common use. Stream a billion log lines and collect unique IP addresses: add each one to a Set, duplicates are automatically discarded. Final size = unique count. O(n) time, one pass.

**Visited tracking in BFS/DFS** — when traversing a graph, a `visited` Set prevents revisiting nodes. Every graph algorithm you'll write uses this pattern. Without it, you loop forever.

**Permission systems** — a user's roles are a Set. Checking `roles.has("admin")` is O(1). Finding which permissions two users share is an intersection.

**Cache invalidation tags** — content tagged with topics like `{"sports", "football", "premier-league"}`. When "football" content changes, invalidate everything whose tag set intersects `{"football"}`.

**Spell checker** — load a dictionary into a Set. Checking if a word is valid is O(1) lookup instead of O(n) linear scan. This is how most production spell checkers bootstrap.

**Two-sum / interview problems** — the Set version of two-sum: for each number, check if `target - number` is in the Set. One pass, O(n). This works when you only need to know _if_ a pair exists, not _which indices_ — for indices you'd upgrade to a HashMap.

**Feature flags** — `enabledFeatures = Set{"dark_mode", "new_checkout", "beta_search"}`. Checking `enabledFeatures.has("dark_mode")` is O(1).

## Variants worth knowing

**TreeSet** (Java) / **SortedSet** — backed by a Red-Black Tree. O(log n) operations but iteration yields elements in sorted order. Use when you need `first()`, `last()`, `headSet()`, or range queries.

**LinkedHashSet** (Java) — maintains insertion order while still giving O(1) membership. More memory than a plain HashSet. Use when order matters for iteration but you still need fast lookup.

**Frozen/immutable sets** — Python's `frozenset` is a Set that can itself be used as a dictionary key or stored inside another Set (regular sets are unhashable). Useful for representing combinations or feature bundles.

**Bit set** — when your universe is small integers (e.g., IDs 0–63), a single 64-bit integer can represent a Set of up to 64 elements. Union is bitwise OR, intersection is bitwise AND, membership is a bit check. Blazing fast and memory-efficient.
