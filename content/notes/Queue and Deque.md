---
created: 2025-12-21
title: Queue and Deque
tags:
  - sapling
  - dsa
---
A Queue enforces one rule: **first in, first out (FIFO)**. The first element you enqueue is the first one you dequeue. Think of a line at a coffee shop — nobody cuts the queue.

A **Deque** (double-ended queue, pronounced "deck") relaxes that rule — you can add and remove from _both_ ends. It's the generalization that makes both [[notes/Stack]] and Queue special cases of the same structure.

![[Pasted image 20260330193659.png]]

## Time complexity

|Operation|Queue|Deque|
|---|---|---|
|Enqueue (add to back)|O(1)|O(1)|
|Dequeue (remove from front)|O(1)|O(1)|
|Push/pop front|—|O(1)|
|Push/pop back|—|O(1)|
|Peek front or back|O(1)|O(1)|
|Access by index|O(n)|O(n)|
|Search|O(n)|O(n)|
All the useful operations are O(1). Like a stack, a queue is intentionally restricted — and that restriction is exactly what makes it powerful.

> Here's an interactive queue so you can see enqueue and dequeue in action: [demo](https://dsa.supakorn.me/queue.html)


## BFS — the most important queue use case

Breadth-First Search is the textbook application of a queue. The idea: explore a graph or tree level by level — visit all neighbors before going deeper. The queue enforces this naturally because you process nodes in the order you discovered them.

![[Pasted image 20260330193858.png]]

> see visualize in [demo](https://dsa.supakorn.me/bfs_queue.html)
> 
> Step through it and watch the queue. Nodes turn amber when enqueued, teal when being processed, purple when done. Notice how A's neighbors (B, C, D) all get visited before going deeper — that's FIFO doing its job. If you used a stack instead of a queue here, you'd get DFS.


## Task scheduling — the other major use case

Every operating system, thread pool, and web server uses a queue to manage work. Jobs arrive and get enqueued; a worker dequeues them one at a time. FIFO ensures fairness — the first request in is the first request handled.

![[Pasted image 20260330194044.png]]

> see visualize in [demo](https://dsa.supakorn.me/task_scheduler_queue.html)
> 
> Hit "Auto-run" to watch tasks arrive and get processed continuously — exactly how a web server's request queue or a thread pool works in production.

## More real-world use cases

**Keyboard input buffer** — every keystroke you type gets enqueued. The OS processes them in order. If you type faster than the processor handles input, characters queue up and appear in the right sequence.

**Printer spooler** — print jobs queue up and print in submission order. The queue sits between your app (fast) and the printer (slow).

**Message queues (Kafka, RabbitMQ, SQS)** — the backbone of distributed systems. Services publish messages to a queue; consumers dequeue and process at their own pace. This decouples producers from consumers so a spike in traffic doesn't crash the downstream service.

**Level-order tree traversal** — printing a binary tree level by level uses exactly the same BFS queue pattern.

**Rate limiting / sliding window** — a deque is used to track request timestamps in a window, efficiently dropping entries that fall outside the time range from the front.

## Deque-specific use cases

The deque's ability to push and pop from both ends unlocks patterns neither a pure stack nor queue can do efficiently:

**Sliding window maximum** — given an array, find the maximum in every window of size k. A deque maintains candidate indices, dropping from the front when they leave the window and from the back when a larger element arrives. O(n) total instead of O(n·k).

**Palindrome checking** — push all characters, then pop from front and back simultaneously comparing them. O(n) with no extra array needed.

**`collections.deque` in Python, `ArrayDeque` in Java** — both are backed by a circular buffer, giving true O(1) at both ends with no shifting. This makes them faster than a plain array-based queue in practice.

## Stack vs Queue vs Deque — when to pick which

| You need                                      | Use                       |
| --------------------------------------------- | ------------------------- |
| Last-in-first-out (undo, recursion, DFS)      | Stack                     |
| First-in-first-out (scheduling, BFS, buffers) | Queue                     |
| Fast insert/remove at both ends               | Deque                     |
| Sliding window problems                       | Deque                     |


