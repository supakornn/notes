---
created: 2026-05-01
title: Command Query Separation (CQS)
tags:
  - seed
---
CQS is a principle by **Bertrand Meyer** — the idea is simple but powerful.

> A method should either **do something** or **return something** — not both.

Every method you write should do one of two things only — either change something, or return something. The moment a method does both, you lose clarity. You never know if calling it will secretly change something in the background.

## The 2 Types

**Command** — it does something, changes the state, and shuts up. Returns nothing.

You call it to make something happen — create a user, delete a record, send an email. After it runs, something in the system is different. You don't expect anything back from it.

```java
void createUser(String name) { ... }
void deleteUser(int id) { ... }
void sendEmail(String to) { ... }
```

**Query** — it answers a question, returns data, and touches nothing. No side effects at all.

You call it to ask something — get a user, fetch a list, find a record. After it runs, nothing changes. You can call it 100 times and the system stays exactly the same.

```java
User getUser(int id) { ... }
List<User> getAllUsers() { ... }
boolean userExists(String email) { ... }
```

## The Violation

This is what you want to avoid — a method that does both.

```java
// saves the user AND returns it at the same time
User createAndReturnUser(String name) {
    save(name);   // changes state
    return user;  // also returns data
}
```

The problem is when someone reads this code later, they see a method that looks like a query — it returns something — but it secretly changes the database. That's a surprise nobody wants.

Fix it by splitting into two:

```java
// Command — just save
void createUser(String name) {
    save(name);
}

// Query — just return
User getUser(String name) {
    return find(name);
}
```

Now it's obvious. Command does the work. Query gets the result.

## Why This Matters

When every method is either a command or a query, reading code becomes much easier. You look at a method signature and instantly know — does this change anything or not? If it returns void, something is changing. If it returns data, nothing is changing.

This makes debugging easier too. If a bug causes unexpected data changes, you only need to look at commands — queries can't be the cause because they never touch anything.

Testing also becomes cleaner. Queries are easy to test because they always return the same result given the same input. Commands are easy to test because you just check if the state changed correctly.