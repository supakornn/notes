---
created: 2026-05-01
title: Object Oriented Programming (OOP)
tags:
  - sapling
---
When I first learned OOP through Java and C++, it mostly meant classes, inheritance, interfaces, and the four familiar terms: abstraction, encapsulation, inheritance, and polymorphism.

```java
class Dog extends Animal
```

That model is practical. Classes describe objects, inheritance can share behavior, and interfaces help organize a large codebase. It is why this style became common in enterprise software.

But Alan Kay's original use of “object-oriented” was not mainly about class trees. His short version was:

> “The big idea is messaging.”

That is a more useful distinction for me. An object owns its state and talks to other objects through messages. The inspiration was partly biological: cells have their own internal state and interact without exposing every internal detail.

So there are two ways to picture OOP:

- **Class-oriented:** model things with types, inheritance, and interfaces.
- **Message-oriented:** model a system as independent objects that communicate.

**Smalltalk** strongly reflects the second view. Almost everything is an object, and objects interact through message passing. Behavior and communication matter more than a rigid static hierarchy.

C++ and Java moved the mainstream interpretation toward static typing, compile-time guarantees, interfaces, and architecture for large teams. That is useful, but it is not the whole history of the idea.

Some modern systems are closer to the messaging view than class-heavy OOP:

- actor systems
- Erlang processes
- Elixir
- reactive systems
- event-driven systems
- microservices

They isolate state and make components communicate through messages. I do not think that makes them “more OOP” than Java. It is just a reminder that OOP is bigger than inheritance trees.
