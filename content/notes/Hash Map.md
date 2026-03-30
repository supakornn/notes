---
created: 1205-12-22
title: Hash Map
tags:
  - sapling
  - dsa
---
A Hash Map gives you O(1) average-case lookup, insert, and delete — regardless of how many items it holds. That sounds like magic, so let's see exactly how it works.

The core idea: instead of searching through items one by one, you _compute_ where an item lives. A **hash function** takes a key and returns an index into an array of buckets. To find a value, you hash the key and jump straight to that bucket.

![[Pasted image 20260330194558.png]]
The hash function is the heart of it. A good one distributes keys uniformly across buckets — bad distribution means some buckets pile up while others stay empty, and performance degrades toward O(n).

## The collision problem

Two different keys can hash to the same index. This is called a **collision**, and every hash map must handle it. There are two main strategies.

![[Pasted image 20260330194638.png]]

**Separate chaining** — each bucket is a linked list. Collisions just append a new node. Simple to implement, handles high load factors gracefully, but each node is a heap allocation and pointer chase — bad for cache. Used by Java's `HashMap`.

**Open addressing** — all entries live in the array itself. On collision, probe forward (linear), jump by a fixed step (quadratic), or use a second hash (double hashing) until an empty slot appears. Cache-friendly since everything is contiguous, but sensitive to load factor. Used by Python's `dict` and Go's `map`.

## Load factor — the critical number

Load factor = `number of entries / number of buckets`. This single number determines performance.

![[Pasted image 20260330194714.png]]

> see visualize in [demo](https://dsa.supakorn.me/load_factor.html)

Drag the slider to high values and watch the status flip to "critical" — that's when the hash map automatically **rehashes**: allocates a new array roughly 2× the size and re-inserts every entry. This is an O(n) operation, but it happens infrequently enough that amortized insert stays O(1).

## Interactive hash map — put, get, delete


![[Pasted image 20260330194844.png]]

> see visualize in [demo](https://dsa.supakorn.me/hashmap.html)
> 
> Try inserting two keys that hash to the same bucket — you'll see them chain together and the collision get noted in the log.

## Real-world use cases

**Database indexes** — most in-memory indexes are hash maps. Looking up a row by primary key in Redis or Memcached is a direct hash lookup — O(1) regardless of whether the table has 1,000 rows or 1 billion.

**Python `dict` and JavaScript objects** — every time you write `obj.name` or `d["key"]`, you're doing a hash map lookup. Python's `dict` is famously well-engineered, using open addressing with a compact table optimized for cache performance.

**DNS resolution cache** — your OS caches hostname-to-IP mappings in a hash map. `google.com → 142.250.x.x` is a hash lookup, not a linear scan through every known hostname.

**Deduplication** — streaming a billion log lines and want to count unique IPs? Add each IP to a hash set. Insertion and lookup are O(1), and the set automatically deduplicates. This pattern is everywhere in data pipelines.

**Two-sum and most LeetCode problems** — the classic interview problem: given an array, find two numbers that sum to a target. Naive solution is O(n²). With a hash map: for each number, check if `target - number` is already in the map. One pass, O(n). This is why hash maps unlock so many algorithm problems.

**Memoization / caching** — store the result of expensive function calls keyed by their input. `fib(40)` computed once, cached in a map, retrieved in O(1) on every future call.

**Word frequency counting** — `word → count` is the textbook hash map use case. One pass through a document, O(n) total time regardless of vocabulary size.

## Time complexity summary

| Operation   | Average | Worst case | Why worst happens           |
| ----------- | ------- | ---------- | --------------------------- |
| `put(k, v)` | O(1)    | O(n)       | All keys hash to one bucket |
| `get(k)`    | O(1)    | O(n)       | Same — degenerate chaining  |
| `delete(k)` | O(1)    | O(n)       | Same                        |
| Iteration   | O(n)    | O(n)       | Must visit all buckets      |
| Space       | O(n)    | O(n)       | Proportional to entries     |

The worst case is real but rare in practice — it requires either a catastrophically bad hash function or a deliberate **hash collision attack** (an adversary crafting keys that all map to the same bucket to DoS your server). Production hash maps use randomized seeds (Python, Go, Rust all do this) to make such attacks infeasible.

## HashMap vs HashSet vs Hashtable

`HashMap` stores key-value pairs. `HashSet` is just a `HashMap` where the value is always a dummy placeholder — it only tracks whether a key exists. `Hashtable` is the old Java version of `HashMap` that is thread-safe but slower due to synchronization; `ConcurrentHashMap` replaced it for concurrent use.