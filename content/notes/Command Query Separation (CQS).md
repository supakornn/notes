---
created: 2026-05-01
title: Command Query Separation (CQS)
tags:
  - seed
---
CQS is Bertrand Meyer's rule that a method should either change state or return information, not both.

## Command

A command changes state and returns no meaningful value.

```java
void createUser(String name) { ... }
void deleteUser(int id) { ... }
void sendEmail(String to) { ... }
```

## Query

A query returns information without changing observable state.

```java
User getUser(int id) { ... }
List<User> getAllUsers() { ... }
boolean userExists(String email) { ... }
```

## Example

Avoid a method whose return value hides a write:

```java
User createAndReturnUser(String name) {
    save(name);
    return user;
}
```

Split the actions when callers need both:

```java
void createUser(String name) {
    save(name);
}

User getUser(String name) {
    return find(name);
}
```

This makes side effects easier to spot while reading, testing, and debugging.
