---
created: 2026-04-07
title: Clean Architecture
tags:
  - sapling
  - book
---
> Clean Architecture: A Craftsman's Guide to Software Structure and Design

Book, written by **Robert C. Martin (Uncle Bob)**

> [!quote]
> The goal of software architecture is to minimize the human resources required to build and maintain the required system.

## Part I — Introduction

### Chapter 1 - Introduction
- Architecture and design are the same discipline at different scales.
- Good architecture reduces long-term cost.
- The goal is maintainability and developer productivity.
- Architecture is reflected in code structure, not just diagrams.

### Chapter 2 - A Tale of Two Values
Software provides two kinds of value:
1. Behavior (features) - Feature delivery matters now.
2. Architecture (ability to change) - Architecture preserves future adaptability.

---

## Part II — Programming Paradigms

### Chapter 3 - Paradigm Overview
- Programming paradigms are constraints that reduce complexity.
- Good engineering comes from limiting dangerous freedoms.
- Each paradigm solves a different problem:
	1. Structured Programming → control flow
	2. OOP → dependency management
	3. Functional Programming → state management
- OOP’s key strength is polymorphism and dependency inversion.
- Functional programming reduces issues caused by shared mutable state.

### Chapter 4 - Structured Programming
- Structured programming controls complexity through:
	- sequence
	- selection
	- iteration
- Avoid arbitrary jumps like `goto`.
- Code should be understandable and predictable.
- Small, well-structured functions are easier to test and maintain.
- Structured programming improves reasoning about correctness.

### Chapter 5 - Object-Oriented Programming
- [[Object Oriented Programming|OOP]] is based on:
	- encapsulation
	- inheritance
	- polymorphism
- Polymorphism enables dependency inversion.
- High-level business rules should not depend on low-level details.
- Interfaces separate policies from implementations.

### Chapter 6 - Functional Programming
- Functional programming emphasizes immutability.
- Avoid shared mutable state whenever possible.
- Immutable data reduces concurrency and side-effect bugs.
- Functions should minimize hidden state changes.

---

## Part III — Design Principles

### Chapter 7 - SRP (Single Responsibility Principle)
- A module should have one reason to change.
- A class should serve one business responsibility.
- Mixing unrelated responsibilities increases coupling.
- Responsibilities that change for different reasons should be separated.

### Chapter 8 - OCP (Open-Closed Principle)
- Software should be open for extension but closed for modification.
- New behavior should be added without changing stable code.
- Use abstractions and polymorphism to extend systems safely.
- Stable code should avoid frequent modification.

### Chapter 9 - LSP (Liskov Substitution Principle)
- Subtypes must be substitutable for their base types.
- Child classes should preserve expected behavior.
- Violating LSP creates fragile and unpredictable systems.
- Inheritance should model true behavioral compatibility.

### Chapter 10 - ISP (Interface Segregation Principle)
- Clients should not depend on methods they do not use.
- Prefer small focused interfaces over large general-purpose ones.
- Fat interfaces create unnecessary coupling.
- Interfaces should match client-specific needs.

### Chapter 11 - DIP (Dependency Inversion Principle)
- High-level policies should not depend on low-level details.
- Both should depend on abstractions.
- Concrete implementations should be replaceable.
- Dependencies should point toward abstractions, not details.

see also: [[SOLID Principles]]

---

## Part IV — Component Principles

### Chapter 12 - Components
- Components are deployment and reuse units.
- Good component design balances reuse and maintainability.
- Related functionality should stay together.
- Components define architectural boundaries.

### Chapter 13 - Component Cohesion
- Classes that change together should stay together.
- Components should have focused responsibilities.
- Avoid grouping unrelated functionality into one component.
- Organize components around common reasons to change.

### Chapter 14 - Component Coupling
- Dependencies between components should remain manageable.
- Avoid cyclic dependencies.
- Stable components should depend less on unstable ones.
- Dependency direction affects architectural stability.

---

## Part V — Architecture

### Chapter 15 - What Is Architecture?
- Architecture supports development, deployment, operation, and maintenance.
- Good architecture maximizes developer productivity.
- Architecture should make systems easy to evolve.
- The goal is reducing long-term system friction.

### Chapter 16 - Independence
- Business rules should remain independent from:
	- frameworks
	- databases
	- UI
	- external systems
- Separate concerns through boundaries and abstractions.
- Core logic should survive technology changes.
- Implementation details should not control architecture.

### Chapter 17 - Boundaries: Drawing Lines
- Architectural boundaries separate different responsibilities.
- Boundaries protect business rules from external details.
- Interfaces and dependency inversion help enforce boundaries.
- Crossing boundaries usually involves data transformation.
- Good boundaries reduce coupling between parts of the system.