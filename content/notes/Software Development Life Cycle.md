---
created: 2026-05-02
title: Software Development Life Cycle
tags:
  - seed
---
SDLC is a structured process that guides how software is planned, built, tested, and delivered. It gives development teams a clear roadmap to produce high-quality software on time and within budget.

![[Pasted image 20260509225257.png | 800]]

## Phases of SDLC

### 1. Planning

Define the project scope, goals, timeline, and cost. Decide if the project is feasible before writing a single line of code.

**Example:** A company wants to build an e-commerce website. The team estimates it will take 6 months and $50,000 to build.

### 2. Requirements Analysis

Gather and document exactly what the software must do — from both business and user perspectives.

**Example:** Users must be able to register, log in, browse products, add to cart, and checkout.

### 3. System Design

Translate requirements into a blueprint — database structure, architecture, UI mockups, and tech stack choices.

**Example:** Use MySQL for the database, Spring Boot for the backend, and React for the frontend.

### 4. Implementation (Coding)

Developers write the actual code based on the design documents.

**Example:** A developer builds the login feature using JWT authentication.

### 5. Testing

Verify the software works correctly, is bug-free, and meets the requirements.

**Example:** QA team tests that users can't log in with a wrong password, and checkout calculates the correct total.

### 6. Deployment

Release the software to the real environment where users can access it.

**Example:** The website goes live on AWS. Users can now visit and shop.

### 7. Maintenance

Fix bugs, improve performance, and add new features after release.

**Example:** A bug is found where discount codes don't apply correctly — the team patches it in the next update.

## SDLC Models
1. **Waterfall** — One phase at a time, no going back. Best for fixed, clear requirements.
2. **Agile** — Work in short sprints with continuous feedback. Best for changing requirements.
3. **Scrum** — Agile framework with defined roles: Product Owner, Scrum Master, Dev Team.
4. **Spiral** — Repeat cycles with risk analysis each round. Best for high-risk projects.
5. **V-Model** — Every dev phase has a matching test phase. Best for safety-critical systems.