---
created: 2026-05-02
title: Software Development Life Cycle (SDLC)
tags:
  - seed
---
SDLC is the usual name for planning, building, testing, releasing, and maintaining software. The phases are a map, not a strict sequence: real teams go back and forth between them.

## Phases of SDLC

### 1. Planning

Define the project scope, goals, timeline, and cost. Decide whether the project is feasible before writing code.

**Example:** A company wants to build an e-commerce website. The team estimates six months and $50,000.

### 2. Requirements analysis

Gather and document what the software must do, from business and user perspectives.

**Example:** Users must be able to register, log in, browse products, add items to a cart, and check out.

### 3. System design

Turn requirements into a plan: database structure, architecture, UI mockups, and technology choices.

**Example:** Use MySQL for the database, Spring Boot for the backend, and React for the frontend.

### 4. Implementation (coding)

Developers write the code from the design documents.

**Example:** A developer builds the login feature with JWT authentication.

### 5. Testing

Check that the software works, meets the requirements, and does not contain known defects.

**Example:** QA checks that users cannot log in with a wrong password and that checkout calculates the right total.

### 6. Deployment

Release the software to the environment where users can access it.

**Example:** The website goes live on AWS.

### 7. Maintenance

Fix bugs, improve performance, and add features after release.

**Example:** A discount-code bug is found and patched in the next update.

## SDLC models

1. **Waterfall:** One phase at a time. Best for fixed, clear requirements.
2. **Agile:** Short sprints with continuous feedback. Best for changing requirements.
3. **Scrum:** An Agile framework with defined roles: Product Owner, Scrum Master, and Development Team.
4. **Spiral:** Repeated cycles with risk analysis in each round. Best for high-risk projects.
5. **V-Model:** Each development phase has a matching test phase. Common in safety-critical systems.
