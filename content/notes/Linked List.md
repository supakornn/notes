---
created: 2025-12-21
title: Linked List
tag: sapling
---
A Linked List solves the exact problem arrays have: costly middle insertions. Instead of storing elements in one contiguous block, each element (called a **node**) holds its value plus a pointer to the next node. Memory doesn't need to be contiguous — nodes can live anywhere in the heap.

The tradeoff: you gain O(1) insert/delete anywhere, but you _lose_ O(1) random access. To reach node 5, you must walk from node 0.

![[Pasted image 20260330184947.png]]
## Singly vs Doubly — the core difference

A **singly linked list** node holds `value + next`. You can only walk forward. To delete a node, you need a pointer to its _predecessor_ — which means you often need to keep a `prev` pointer manually as you traverse.

A **doubly linked list** node holds `value + prev + next`. You can walk both directions, and deletion is cleaner — a node can remove itself because it already knows who's behind it. The cost: twice the pointer storage, and every insert/delete must update two pointers instead of one.

## Time complexity

|Operation|Singly|Doubly|Why|
|---|---|---|---|
|Access by index|O(n)|O(n)|Must walk from head|
|Search by value|O(n)|O(n)|Must scan nodes|
|Insert at head|O(1)|O(1)|Just rewire head pointer|
|Insert at tail|O(1)*|O(1)|With tail pointer stored|
|Insert at middle|O(n)|O(n)|Walking to position costs O(n)|
|Delete at head|O(1)|O(1)|Rewire head|
|Delete at tail|O(n)|O(1)|Singly must re-walk to find new tail|
|Delete given node|O(n)|O(1)|Doubly: node knows its prev|

_The key insight in the last two rows:_ doubly linked lists win at tail deletion and at deleting a node you already have a pointer to — because `prev` is right there. Singly lists must re-traverse.

> Now see insertion and deletion in action: [demo](https://dsa.supakorn.me/linked_list.html)
> 
> Try "Delete tail" — you'll see every node highlight amber as the list walks to find the new tail. That's the O(n) cost of singly linked tail deletion made visible. A doubly linked list avoids this entirely because the tail already knows its predecessor.

## Real-world use cases

**Browser history** — forward/back navigation is a classic doubly linked list. Each page is a node; `prev` goes back, `next` goes forward. When you visit a new page mid-history, everything after gets discarded.

**LRU Cache** — the most important practical use. A doubly linked list combined with a hash map gives you O(1) get _and_ O(1) put. The list maintains access order; the map gives instant lookup. This is literally how CPU caches, Redis eviction, and CDN caching work.

**Music / playlist queues** — next track, previous track, insert at position. All O(1) with a doubly linked list.

**Text editors** — some editors (like older versions of Emacs) use a structure called a **gap buffer** or a linked list of lines. Insertions in large documents stay fast because you're just rewiring pointers, not shifting a massive array.

**OS memory allocators** — free memory blocks are tracked in a linked list. When you call `malloc`, the allocator walks the free list to find a suitable block. When you call `free`, it splices that block back in.

**`java.util.LinkedList`, Python `collections.deque`** — both are doubly linked lists under the hood, used when you need fast inserts/deletes at both ends.

## Array vs Linked List — when to pick which

|Situation|Pick|
|---|---|
|Frequent random access by index|Array|
|Frequent inserts/deletes at head or tail|Linked list|
|Frequent inserts/deletes in the middle|Linked list (if you have the pointer already)|
|Cache-friendly iteration over all elements|Array (contiguous memory wins)|
|Need to implement a Stack or Queue|Either works; array is usually faster in practice|
|Unknown or highly variable size|Linked list (no reallocation/copy)|

One subtlety worth knowing: even though linked list middle insertion is theoretically O(1), in practice arrays often win for medium-sized collections because of **cache locality**. Array elements sit next to each other in memory, so the CPU prefetches them efficiently. Linked list nodes are scattered across the heap — each pointer follow is a potential cache miss.