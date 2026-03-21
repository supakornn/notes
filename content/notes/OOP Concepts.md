---
created: 2025-12-18
tags:
  - sapling
title: OOP Concepts
---
### Encapsulation

Encapsulation means **hiding internal data and implementation details** of a class and allowing access only through controlled methods.  
The goal is to protect the object's state and prevent direct access from outside the class.

- Use `private` for sensitive properties and methods
- Expose necessary data using **getter / setter** methods
- Internal logic should be handled only inside the class

Example:

```java
class Car {
    public String name;              // accessible
    private String licensePlate;     // hidden

    Car(String name, String licensePlate) {
        this.name = name;

        if (validateLicensePlate(licensePlate)) {
            this.licensePlate = licensePlate;
        }
    }

    private boolean validateLicensePlate(String licensePlate) {
        return licensePlate != null && !licensePlate.isEmpty();
    }

    public String getLicensePlate() {
        return this.licensePlate;
    }
}

Car car = new Car("Benz", "TH-001");

car.name; // Expect: Benz
car.licensePlate; // Expect: Compile-time error

car.getLicensePlate(); // Expect: TH-001
car.validateLicensePlate("X"); // Expect: Compile-time error
```

---
### Inheritance

Inheritance allows a new class (child / subclass) to **reuse properties and behaviors** from an existing class (parent / superclass).  
This helps reduce code duplication and represent an **is-a relationship**.

Example:

```java
class Human {
    protected String name;

    Human(String name) {
        this.name = name;
    }

    void speak() {
        System.out.println("Hello");
    }
}

class Kid extends Human {
    Kid(String name) {
        super(name);
    }
}

Human human = new Human("John");
human.speak(); // Expect: Hello

Kid kid = new Kid("Jane");
kid.speak(); // Expect: Hello
```

---
### Abstraction

Abstraction means **hiding complex implementation details** and showing only essential features of an object.  
It focuses on **what an object can do**, not **how it does it**.

Example:

```java
abstract class Vehicle {
    abstract void start();
}

class Car extends Vehicle {
    @Override
    void start() {
        System.out.println("Car engine starts");
    }
}

class Motorcycle extends Vehicle {
    @Override
    void start() {
        System.out.println("Motorcycle engine starts");
    }
}
```

---
### Polymorphism

Polymorphism means **"many forms"**.  
It allows a single interface or parent class reference to represent different underlying object types.  
The same method can behave differently depending on the object that is calling it.

Example:

```java
Vehicle v1 = new Car();
Vehicle v2 = new Motorcycle();

v1.start(); // Expect: Car engine starts
v2.start(); // Expect: Motorcycle engine starts
```

The method `start()` is the same, but the behavior is different depending on the object.  
This is polymorphism.
