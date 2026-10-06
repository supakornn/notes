---
created: 2026-05-01
title: Command Query Separation (CQS)
tags:
  - seed
---
CQS is a principle by **Bertrand Meyer**. My shortcut for it: a method either changes state or answers a question. It should not quietly do both.

## The two types

**Command:** Changes state and returns nothing.

Call it to create a user, delete a record, or send an email. After it runs, something in the system is different.

```java
void createUser(String name) { ... }
void deleteUser(int id) { ... }
void sendEmail(String to) { ... }
```

**Query:** Returns data and has no side effects.

Call it to get a user, fetch a list, or find a record. Calling it repeatedly should not change the system.

```java
User getUser(int id) { ... }
List<User> getAllUsers() { ... }
boolean userExists(String email) { ... }
```

## The violation

Avoid methods that both write and return a result:

```java
// saves the user and returns it
User createAndReturnUser(String name) {
    save(name);
    return user;
}
```

A reader may see the return value and assume this is a query, while it silently changes the database. Split it instead:

```java
// Command: save
void createUser(String name) {
    save(name);
}

// Query: return data
User getUser(String name) {
    return find(name);
}
```

Now the write is obvious. When debugging an unexpected change, look at commands first. Test queries through their return value and commands through the state they change.
