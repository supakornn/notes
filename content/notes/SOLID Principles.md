---
created: 2026-05-01
tags:
  - seed
title: SOLID Principles
---
SOLID is a set of five object-oriented design principles popularized by **Robert C. Martin (Uncle Bob)**. I treat them as questions to ask while designing, not rules to apply mechanically.

## S - Single Responsibility Principle (SRP)

> _"A class should have one and only one reason to change."_

A class should do one job only. If a class handles both calculation logic AND output formatting, that's two responsibilities: split them into separate classes.

```java
class User { void getUserData() {} }
class UserRepository { void save(User user) {} }
```

**Question I use:** What would make this class change? If there is more than one unrelated answer, it may be doing too much.

## O: Open-Closed Principle (OCP)

> _"A class should be open for extension, but closed for modification."_

The idea is to add behavior without repeatedly changing stable code. An interface can help when there is a real variation point; do not add one only to satisfy OCP.

```java
interface Shape { double area(); }
class Circle implements Shape { public double area() { return Math.PI * r * r; } }
class Square implements Shape { public double area() { return side * side; } }
```

**Question I use:** Is this stable code changing for every new variation? If so, there may be a useful extension point.

## L: Liskov Substitution Principle (LSP)

> _"A subclass should be substitutable for its parent class."_

If class `B` extends class `A`, it must work wherever `A` is expected. The child must keep the parent type's contract.

```java
interface Bird { void move(); }
class Sparrow implements Bird { public void move() { System.out.println("Flying"); } }
class Penguin implements Bird { public void move() { System.out.println("Swimming"); } }
```

**Question I use:** Can I replace the parent type with the child without breaking a caller's expectations?

## I: Interface Segregation Principle (ISP)

> _"A client should never be forced to implement an interface it doesn't use."_

Don't create one big interface that forces unrelated classes to implement methods they don't need. Instead, break it into smaller, focused interfaces. A 2D `Square` shouldn't be forced to implement `volume()` just because it shares an interface with 3D shapes.

```java
interface Workable { void work(); }
interface Eatable { void eat(); }

class Human implements Workable, Eatable { ... }
class Robot implements Workable { ... } // Robot doesn't need eat()
```

**Question I use:** Does this type have to implement a method it cannot honestly support?

## D: Dependency Inversion Principle (DIP)

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

**Question I use:** Would changing the database force a change in business logic? If it would, the dependency is pointing the wrong way.

see also: [[Clean Architecture]]