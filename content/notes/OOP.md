---
created: 2026-05-01
title: Object Oriented Programming (OOP)
tags:
  - sapling
---
OOP was founded by **Alan Kay**, but the OOP that most people learn today is quite different from the original idea.

When learning OOP through languages like **Java** or **C++**, the focus is usually on organizing software through **classes** and **inheritance**. Classes act as blueprints while objects become instances created from those classes.

```java
class Dog extends Animal
```

Inheritance is then used to share behavior and structure code in a way that feels organized and reusable. A lot of OOP education revolves around **abstraction**, **encapsulation**, **inheritance**, and **polymorphism**. Most programming classes present these ideas as the core pillars of OOP.

The overall goal is usually to make software easier to structure and maintain, especially when applications become large. This version of OOP became extremely popular because it works well for **enterprise software** and large development teams where maintainability and organization become important.

Over time, this became the mainstream understanding of OOP. When most developers hear the term **“object-oriented programming”**, they usually think about:

- classes
- inheritance
- interfaces
- software architecture patterns
    
However, the original idea of OOP seems to be much more centered around **communication between objects** rather than rigid class hierarchies.

Alan Kay once said:

> "The big idea is messaging."

which sounds quite different from how OOP is commonly taught today.

The idea was partly inspired by **biological systems**, especially how cells communicate with each other. A cell manages its own internal state, behaves independently, and communicates with other cells without exposing all of its internal complexity directly.

Objects were imagined in a somewhat similar way. Instead of thinking about objects mainly as **instances created from classes**, the original idea feels closer to **independent systems communicating with one another through messages**.

This makes OOP feel less like:

> “organizing code into class trees”

and more like:

> “building systems from interacting entities”

**Smalltalk** was heavily built around this concept. In Smalltalk, almost everything is treated as an object, and interaction between objects happens through **message passing**. The focus feels much more centered around **behavior** and **communication** between objects rather than strict static structure.

As software engineering evolved, OOP also changed.

Languages like **C++** and **Java** pushed OOP toward:

- static typing
- interfaces
- compile-time guarantees
- large-scale architecture design
    
As software became larger and more industrialized, developers needed systems that were easier to organize across large teams and massive codebases.

Because of this, OOP slowly became associated more with **structure** and **architecture**. Classes, interfaces, inheritance hierarchies, and design patterns became the dominant interpretation of what OOP meant.

This is probably why modern OOP often feels very different from the original **Smalltalk philosophy**. The earlier ideas seem much more dynamic and communication-oriented, while modern OOP tends to focus heavily on maintainability, structure, and organization.

Interestingly, some modern systems feel closer to Alan Kay's original OOP ideas than traditional enterprise OOP.

Things like:

- actor systems
- Erlang processes
- Elixir
- reactive systems
- event-driven systems
- microservices

all focus heavily on:

- isolated state
- independent behavior
- communication through messages
    
These systems are usually built from many independent parts communicating with each other rather than from deep inheritance hierarchies.

In a strange way, some modern distributed system ideas feel philosophically closer to the original OOP vision than the class-heavy style that became mainstream through Java and C++.