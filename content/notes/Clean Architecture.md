---
created: 2026-04-07
title: "Clean Architecture"
tags:
  - seed
  - book
---
Book by **Robert C. Martin (Uncle Bob)**.

> The goal of software architecture is to minimize the human resources required to build and maintain the required system. (Uncle Bob)

## My takeaway

The business rules are the application. The database, framework, UI, and APIs are delivery details. Keep those details at the edge so replacing one does not drag the core with it.

Dependencies point inward: policy should not know about its database or framework. I would not add layers just because this diagram says so; add a boundary when it makes an expected change cheaper.

## Part I: Introduction

- Architecture and design are the same work at different scales.
- Software has two values: what it does now, and how easily it can change later.

## Part II: Programming paradigms

- Structured programming constrains control flow.
- [[Object Oriented Programming (OOP)|OOP]] is useful mainly for polymorphism and dependency inversion, not class hierarchies for their own sake.
- Functional programming limits shared mutable state.

## Part III: Design principles

- SRP: separate things that change for different reasons.
- OCP: extend stable policy without repeatedly editing it.
- LSP: a subtype must keep the promises of its parent type.
- ISP: do not make clients depend on methods they do not need.
- DIP: high-level policy and low-level details depend on abstractions; the source-code dependency points toward policy.
  
  see also: [[SOLID Principles]]

## Part IV: Components

- A component is a unit of deployment and reuse.
- Put code that changes for the same reason in the same component.
- Avoid dependency cycles between components.

## Part V: Architecture

- Architecture should support development, deployment, operation, and change.
- The package structure should show what the application does, not which framework it uses.
- A boundary separates policy from a detail. It can live inside a monolith. It does not require a microservice.
- Entities hold enterprise-wide rules. Use cases coordinate application-specific rules.
- The dependency rule: source-code dependencies point inward.
- The `main` component is an outer detail. It wires implementations to policies.
- Tests belong at a boundary too: core rules should run without a UI, database, network, or hardware.

## Part VI: Details

Databases, the web, frameworks, and deployment mechanisms are details. They should serve the application, not define it.
