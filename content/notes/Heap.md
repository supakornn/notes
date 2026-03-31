---
created: 2026-03-31
title: Heap
tags:
  - sapling
  - dsa
---
A **Heap** is a binary tree with one extra rule: the **heap property**. In a max-heap, every parent is larger than its children. In a min-heap, every parent is smaller. That's it — but this single constraint guarantees that the most extreme value (min or max) is always sitting at the root, reachable in O(1).

The clever part: heaps are stored as a plain array, not as nodes with pointers. The tree structure is entirely virtual — computed from index math.

![[Pasted image 20260331205755.png]]

Storing the heap as an array means zero pointer overhead, perfect cache locality, and trivial index arithmetic to navigate the tree. This is why heaps are faster in practice than BSTs for priority queue operations even though both are O(log n).

## Time complexity

|Operation|Time|Why|
|---|---|---|
|Peek min/max|O(1)|Always at index 0|
|Insert|O(log n)|Bubble up at most tree height|
|Extract min/max|O(log n)|Remove root, bubble down|
|Build heap from array|O(n)|Sift-down from bottom up|
|Search|O(n)|No ordering guarantee except root|
|Delete arbitrary|O(log n)|Find + sift|

The O(n) build from an array is a beautiful result — you'd expect O(n log n) since you're inserting n items, but the bottom-up sift-down approach is provably O(n). Python's `heapq.heapify()` uses exactly this.

Now here's an interactive heap — push values and watch them bubble up, extract and watch the sift-down:

![[Pasted image 20260331205831.png]]

> see visualize in [demo](https://dsa.supakorn.me/heap.html)
> 
> Insert a small value like `2` and watch it bubble up toward the root. Extract min and watch the last element get placed at the root and sift down — swapping with its smaller child at each step until the heap property is restored.

## Dijkstra's algorithm — the most important heap use case

Dijkstra finds the shortest path from a source node to all others in a weighted graph. The heap is the engine: at every step, pull the unvisited node with the smallest known distance, then relax its neighbors. Without a heap, finding the minimum each step costs O(n) — with a min-heap it costs O(log n), bringing total complexity from O(n²) to O((V + E) log V).

![[Pasted image 20260331205942.png]]

> see visualize in [demo](https://dsa.supakorn.me/dijkstra.html)
> 
> Step through it and watch the priority queue. The heap always serves the node with the smallest known distance next — that's the greedy choice that makes Dijkstra correct. Watch the distance table update as neighbors get relaxed, and notice how nodes already visited get skipped even if they reappear in the heap.

## Other real-world use cases

**`heapq` in Python, `PriorityQueue` in Java** — both are min-heaps. Python's `heapq` operates directly on a list in-place, which is why `heapq.heappush(h, x)` and `heapq.heappop(h)` are the API rather than methods on an object.

**Operating system process scheduling** — the CPU scheduler keeps a min-heap of (priority, process) pairs. The highest-priority process is always at the root, extracted in O(log n) when the CPU is free.

**Median of a stream** — a classic interview problem. Maintain two heaps: a max-heap for the lower half and a min-heap for the upper half. The median is always the root of one or the average of both roots. Insert is O(log n), median query is O(1).

**K largest / K smallest elements** — keep a min-heap of size k while streaming data. When the heap exceeds k, pop the minimum. At the end the heap contains the k largest elements. O(n log k) — far better than sorting at O(n log n) when k is small.

**Merge k sorted lists** — push the head of each list into a min-heap. Extract the minimum, advance that list's pointer, push the new head. O(n log k) where k is the number of lists. This is how external merge sort and database merge joins work.

**A* pathfinding** — like Dijkstra but with a heuristic. Used in GPS navigation, game AI, and robotics. The heap stores (f_score, node) where f = g (actual distance) + h (heuristic estimate to goal).

**Event-driven simulation** — events have timestamps. A min-heap lets you always process the next chronological event in O(log n). Used in network simulators, game engines, and discrete event systems.

## Heap vs BST vs Sorted Array

|You need|Best structure|
|---|---|
|Fast access to min or max only|Heap|
|Fast access to both min and max|Two heaps or a deque|
|Sorted iteration over all elements|BST or sorted array|
|Arbitrary key lookup|BST|
|K-th smallest element|BST (order statistics)|
|Streaming data, always need current min|Heap|

The rule: **if you only ever need the extreme value (min or max) and don't care about the rest being sorted, use a heap.** It beats a BST on insert/extract in practice because of its array representation and cache efficiency.