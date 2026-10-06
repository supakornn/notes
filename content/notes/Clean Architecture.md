---
created: 2026-04-07
title: "Clean Architecture"
tags:
  - seed
  - book
---
Book by **Robert C. Martin (Uncle Bob)**.

> The goal of software architecture is to minimize the human resources required to build and maintain the required system. (Uncle Bob)

## What I took from it

The business rules are the application. The database, web framework, UI, and APIs deliver those rules. Keep those details at the edge so changing one does not force a rewrite of the core.

Dependencies point inward. The business layer should not know about the framework or database. I would not add boundaries only because this book has a diagram for them. Add one when it makes an expected change easier.

---

## Part I: Introduction

### Chapter 1: Introduction

- Architecture and design are the same discipline at different scales.
- Good architecture reduces long-term cost.
- The goal is maintainability and developer productivity.
- Architecture is reflected in code structure, not just diagrams.

### Chapter 2: A Tale of Two Values

Software provides two kinds of value:

1. **Behavior:** Feature delivery matters now.
2. **Architecture:** Architecture preserves the ability to change later.

---

## Part II: Programming Paradigms

### Chapter 3: Paradigm Overview

- Programming paradigms are constraints that reduce complexity.
- Good engineering comes from limiting dangerous freedoms.
- Each paradigm addresses a different problem:
  1. Structured programming: control flow
  2. OOP: dependency management
  3. Functional programming: state management
- OOP’s key strength is polymorphism and dependency inversion.
- Functional programming reduces problems caused by shared mutable state.

### Chapter 4: Structured Programming

- Structured programming controls complexity through sequence, selection, and iteration.
- Avoid arbitrary jumps such as `goto`.
- Code should be understandable and predictable.
- Small, well-structured functions are easier to test and maintain.
- Structured programming improves reasoning about correctness.

### Chapter 5: Object-Oriented Programming

- [[Object Oriented Programming (OOP)|OOP]] is based on encapsulation, inheritance, and polymorphism.
- Polymorphism enables dependency inversion.
- High-level business rules should not depend on low-level details.
- Interfaces separate policies from implementations.

### Chapter 6: Functional Programming

- Functional programming emphasizes immutability.
- Avoid shared mutable state when possible.
- Immutable data reduces concurrency and side-effect bugs.
- Functions should minimize hidden state changes.

---

## Part III: Design Principles

### Chapter 7: SRP (Single Responsibility Principle)

- A module should have one reason to change.
- A class should serve one business responsibility.
- Mixing unrelated responsibilities increases coupling.
- Separate responsibilities that change for different reasons.

### Chapter 8: OCP (Open-Closed Principle)

- Software should be open for extension but closed for modification.
- Add new behavior without changing stable code.
- Use abstractions and polymorphism to extend systems safely.
- Stable code should avoid frequent modification.

### Chapter 9: LSP (Liskov Substitution Principle)

- Subtypes must be substitutable for their base types.
- Child classes should preserve expected behavior.
- Violating LSP creates fragile, unpredictable systems.
- Inheritance should model real behavioral compatibility.

### Chapter 10: ISP (Interface Segregation Principle)

- Clients should not depend on methods they do not use.
- Prefer small, focused interfaces over large, general-purpose ones.
- Fat interfaces create unnecessary coupling.
- Interfaces should match client-specific needs.

### Chapter 11: DIP (Dependency Inversion Principle)

- High-level policies should not depend on low-level details.
- Both should depend on abstractions.
- Concrete implementations should be replaceable.
- Dependencies should point toward abstractions, not details.

See also: [[SOLID Principles]]

---

## Part IV: Component Principles

### Chapter 12: Components

- Components are deployment and reuse units.
- Good component design balances reuse and maintainability.
- Related functionality should stay together.
- Components define architectural boundaries.

### Chapter 13: Component Cohesion

- Put classes that change for the same reason in the same component.
- Components should have focused responsibilities.
- Avoid grouping unrelated functionality into one component.
- Organize components around common reasons to change.

### Chapter 14: Component Coupling

- Dependencies between components should remain manageable.
- Avoid cyclic dependencies.
- Stable components should depend less on unstable ones.
- Dependency direction affects architectural stability.

---

## Part V: Architecture

### Chapter 15: What Is Architecture?

- Architecture supports development, deployment, operation, and maintenance.
- Architecture should help developers deliver and change the system without needless friction.
- Architecture should make systems easy to evolve.
- The practical goal is to make future changes less painful.

### Chapter 16: Independence

- Business rules should remain independent from frameworks, databases, UI, and external systems.
- Separate concerns through boundaries and abstractions.
- Core logic should survive technology changes.
- Implementation details should not control architecture.

### Chapter 17: Boundaries: Drawing Lines

- Architectural boundaries separate different responsibilities.
- Boundaries protect business rules from external details.
- Interfaces and dependency inversion help enforce boundaries.
- Crossing boundaries usually involves data transformation.
- Good boundaries reduce coupling between parts of the system.

### Chapter 18: Boundary Anatomy

- Architectural boundaries can exist within monoliths, services, plugins, and distributed systems.
- Boundaries are logical, not only physical.
- Different systems enforce boundaries differently.
- Good boundaries control dependency direction regardless of deployment style.
- Communication across boundaries should minimize coupling.

### Chapter 19: Policy and Level

- Software architecture is organized into different policy levels.
- High-level policies contain core business rules.
- Lower-level policies handle implementation details.
- Source-code dependencies should point from low-level details toward high-level policies.
- Business rules should remain independent from frameworks and external systems.

### Chapter 20: Business Rules

- Business rules define how the system should operate.
- Entities contain critical business rules and core data.
- Use cases describe application-specific business behavior.
- Entities should remain independent from databases, UI, and frameworks.
- Business rules are the most stable and valuable part of the system.

### Chapter 21: Screaming Architecture

- Architecture should reflect the business domain, not the framework.
- The system structure should reveal what the application does.
- Frameworks are tools, not the core identity of the system.
- Use cases should drive architectural decisions.
- A good architecture “screams” the business purpose of the application.

### Chapter 22: The Clean Architecture

- Clean Architecture separates systems into concentric layers.
- Dependencies should always point inward.
- Inner layers contain business rules and policies.
- Outer layers contain details such as UI, databases, frameworks, and external systems.
- Business rules should remain independent from external technologies.
- The architecture improves maintainability, testability, and flexibility.

### Chapter 23: Presenters and Humble Objects

- UI logic should be separated from business logic.
- Presenters transform data into UI-friendly formats.
- Humble objects contain minimal logic and are easy to replace.
- Business rules should remain testable without UI dependencies.
- Keep complex logic away from frameworks and visual components.

### Chapter 24: Partial Boundaries

- Full architectural boundaries are not always necessary.
- Partial boundaries provide separation with lower complexity and cost.
- Interfaces, facades, and dependency inversion can create lightweight boundaries.
- Boundaries can evolve as the system grows.
- Use only the level of architectural separation the system currently needs.

### Chapter 25: Layers and Boundaries

- Layers organize responsibilities within the system.
- Boundaries prevent layers from becoming tightly coupled.
- Architectural boundaries must be actively enforced.
- Without enforcement, systems naturally drift into coupling.
- Good layering keeps business rules independent from implementation details.

### Chapter 26: The Main Component

- The `main` component is the entry point and an outer detail.
- Configure dependency injection in `main`.
- `main` wires together the application’s components and frameworks.
- Business rules should not depend on `main`.
- Frameworks and external details should remain at the outermost layer.

### Chapter 27: Services: Great and Small

- Services do not automatically create good architecture.
- Microservices can still become tightly coupled systems.
- Service boundaries should follow business boundaries, not technical trends.
- Independent deployability matters more than service size.
- Good architecture depends on dependency direction, not deployment style.

### Chapter 28: The Test Boundary

- Tests are part of the system architecture.
- The architecture should support fast, isolated testing.
- Business rules should be testable without frameworks or external systems.
- Tests should not depend heavily on implementation details.
- Well-designed boundaries improve testability.

### Chapter 29: Clean Embedded Architecture

- Embedded systems benefit from clean architectural boundaries.
- Hardware dependencies should be isolated from business logic.
- Business rules should remain testable without physical hardware.
- Device-specific code should stay at the outer layers.
- Good architecture improves portability and maintainability in embedded systems.

---

## Part VI: Details

### Chapter 30: The Database Is a Detail

- Databases are implementation details, not the core architecture.
- Business rules should not depend on database technology.
- The database should be replaceable without affecting core logic.
- Data storage concerns belong to outer architectural layers.
- Architecture should prioritize business policies over persistence mechanisms.

### Chapter 31: The Web Is a Detail

- The web is a delivery mechanism, not the core system.
- Business rules should not depend on web frameworks or HTTP.
- Web technologies belong to outer architectural layers.
- The application core should remain usable without the web.
- Frameworks should serve the architecture, not control it.

### Chapter 32: Frameworks Are Details

- Frameworks are tools, not the foundation of the architecture.
- Avoid tightly coupling business logic to frameworks.
- Frameworks should remain replaceable.
- The system should be usable even if frameworks change.
- Depend on abstractions instead of framework-specific implementations.

### Chapter 33: Case Study: Video Sales

- Business rules should remain independent from UI, databases, and frameworks.
- Boundaries separate responsibilities within the system.
- Dependency direction should point toward business policies.
- Use cases coordinate application-specific behavior.
- Architectural decisions should support maintainability and flexibility.

### Chapter 34: The Missing Chapter

- Package structure should reflect architectural boundaries.
- Organize code by feature and responsibility, not by framework type.
- Architectural rules should be enforceable through code structure.
- Source-code organization affects maintainability and coupling.
- Good package design helps preserve architectural integrity.
