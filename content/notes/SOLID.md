---
created: 2026-05-01
tags:
  - seed
title: SOLID Principles
---
SOLID is an acronym for the first 5 object-oriented design (OOD) principles by **Robert C. Martin (Uncle Bob)**. These principles help you write software that is easier to maintain, extend, and refactor as your project grows. They also help avoid code smells and support Agile/Adaptive development.

## S - Single Resposibility Principle (SRP)

> _"A class should have one and only one reason to change."_

A class should do one job only. If a class handles both calculation logic AND output formatting, that's two responsibilities — split them into separate classes.

```java
class User { void getUserData() {} }
class UserRepository { void save(User user) {} }
```

**Quick check:** Ask yourself _"What would cause this class to change?"_ If you have more than one answer, it violates SRP.

## O — Open-Closed Principle (OCP)

> _"A class should be open for extension, but closed for modification."_

You should be able to add new behavior without editing existing code. Do this by coding to interfaces — new types just implement the interface, and the core logic stays untouched.

```java
interface Shape { double area(); }
class Circle implements Shape { public double area() { return Math.PI * r * r; } }
class Square implements Shape { public double area() { return side * side; } }
```

**Quick check:** If adding a new feature requires you to edit an existing class, OCP is likely being violated.

## L — Liskov Substitution Principle (LSP)

> _"A subclass should be substitutable for its parent class."_

If class `B` extends class `A`, you should be able to use `B` anywhere `A` is expected and everything still works correctly. A child class must honor the contract of the parent — same expected behavior, no surprises.

```java
interface Bird { void move(); }
class Sparrow implements Bird { public void move() { System.out.println("Flying"); } }
class Penguin implements Bird { public void move() { System.out.println("Swimming"); } }
```

**Quick check:** If swapping a parent for a child class breaks something, LSP is violated.

## I — Interface Segregation Principle (ISP)

> _"A client should never be forced to implement an interface it doesn't use."_

Don't create one big interface that forces unrelated classes to implement methods they don't need. Instead, break it into smaller, focused interfaces. A 2D `Square` shouldn't be forced to implement `volume()` just because it shares an interface with 3D shapes.

```java
interface Workable { void work(); }
interface Eatable { void eat(); }

class Human implements Workable, Eatable { ... }
class Robot implements Workable { ... } // Robot doesn't need eat()
```

**Quick check:** If a class implements a method but leaves it empty or throws an error, ISP is likely violated.

## D — Dependency Inversion Principle (DIP)

> _"Depend on abstractions, not on concretions."_

High-level modules (business logic) should not depend directly on low-level modules (e.g. a specific database). Both should depend on an interface/abstraction. This way, you can swap out the low-level implementation (MySQL → PostgreSQL) without touching the high-level code.

```java
interface Database { void save(); }
class MySQL implements Database { public void save() {} }

class UserService {
    Database db;
    UserService(Database db) { this.db = db; } // depends on interface, not MySQL directly
}
```

**Quick check:** If changing a low-level detail (like a database) forces you to edit high-level business logic, DIP is violated.

see also: [[Clean Architecture]]