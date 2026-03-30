---
created: 2025-12-21
tag: sapling
title: Stack
---
A Stack is the simplest data structure with a rule: **last in, first out (LIFO)**. The last thing you push is the first thing you pop. That's it — but this single constraint makes it the right tool for a surprising number of real problems.

Think of a stack of plates: you always add and remove from the top. You never reach into the middle.Every operation — push, pop, peek — is O(1). A stack is essentially a restricted array or linked list where you've sealed off access to everything except the top.

![[Pasted image 20260330192241.png]]

> see visualize in [demo](https://dsa.supakorn.me/stack.html)
> 
> Every operation — push, pop, peek — is O(1). A stack is essentially a restricted array or linked list where you've sealed off access to everything except the top.

## The call stack — how your program actually runs

Every time a function is called, the CPU pushes a **stack frame** onto the call stack containing the function's local variables, parameters, and the return address. When the function returns, that frame is popped and execution resumes exactly where it left off.

This is why infinite recursion causes a **stack overflow** — you keep pushing frames without ever popping them until memory runs out.Step through it — you'll see exactly why recursion and stacks are the same idea. Every recursive call is a push; every return is a pop.

![[Pasted image 20260330192314.png]]

> see visualize in [demo](https://dsa.supakorn.me/call_stack.html)
> 
> Step through it — you'll see exactly why recursion and stacks are the same idea. Every recursive call is a push; every return is a pop.

## Undo / Redo — two stacks working together

Undo/redo is the canonical two-stack pattern. Every action you take gets pushed onto the **undo stack**. When you hit undo, that action pops off and gets pushed onto the **redo stack**. Hit redo and it comes back. The moment you take a _new_ action after undoing, the redo stack gets cleared — which is exactly why you lose your redo history when you type something new.

![[Pasted image 20260330192344.png]]

> see visualize in [demo](https://dsa.supakorn.me/undo_redo_stack.html)
> 
> Try this sequence: do a few actions → undo twice → then do a new action. You'll see the redo stack vanish — exactly the behavior you've experienced in every text editor.

## Other real-world use cases

**Bracket matching** — compilers and linters use a stack to validate `()`, `[]`, `{}`. Push every opening bracket; when you see a closing bracket, pop and check if it matches. If the stack is empty at the end, the expression is valid. This is O(n) with a single pass.

**Browser back button** — each page you visit gets pushed. Clicking back pops the current page and pushes it to the forward stack. Same two-stack pattern as undo/redo.

**Expression evaluation** — calculators convert infix expressions like `3 + 4 × 2` into postfix using the **shunting-yard algorithm**, which uses a stack to handle operator precedence.

**DFS (Depth-First Search)** — graph traversal using an explicit stack instead of recursion. Push a node, pop it, push its unvisited neighbors. Same behavior as recursive DFS but without using the call stack.

**Balanced parentheses in code editors** — that highlight showing you the matching bracket when your cursor sits next to one? Stack-based.

## Time complexity summary

|Operation|Time|Notes|
|---|---|---|
|`push(x)`|O(1)|Add to top|
|`pop()`|O(1)|Remove from top|
|`peek()`|O(1)|Read top without removing|
|`isEmpty()`|O(1)|Check if size is zero|
|Search|O(n)|Must scan — stacks aren't for searching|

A stack is intentionally limited. You _could_ search it, but if you find yourself needing to, you're probably using the wrong data structure — reach for a [[notes/Hash Map]] or [[notes/Array]] instead.