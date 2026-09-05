---
title: Research Assistant Apprenticeship
tags:
  - sapling
created: 2026-05-20
---
My first apprenticeship experience was a 90-day research assistant role at SIT, KMUTT. My university opened an apprenticeship program where students could work with professors, and I decided to join by contacting through [Dr. Nantapong Keandoungchun](https://www.sit.kmutt.ac.th/showprofile/?empid=289).

His research focused on grading subjective answers using Generative AI, and he needed an MVP web application for both proof-of-concept purposes and real-world grading tasks. After discussing the project goals, requirements, and research direction with him, I decided to accept the apprenticeship.

The research project was called:

> **“Web Application for Rubric-based Grading of Subjective Answers using Generative AI”**

The main goal of the research was to develop a system that could grade students’ subjective answers using rubric-based scoring assisted by AI.

Some of the key design decisions were:

- The system needed to be usable in real-world scenarios, not just as a proof of concept
- The architecture needed to be scalable for future features
- The system needed to support parent-child question structures
- Each question needed dynamic score weighting
- The system needed to support importing answers, student data, and rubrics from Excel files
- AI should be able to generate rubrics if requested by the user
- Every AI-generated result needed human confirmation before being finalized
- The system needed to protect student privacy, including sensitive information such as student names and student IDs

The development phase itself was not too difficult for me because I already had experience building web applications. The challenging part was the system design phase.

![[Pasted image 20260509174113.png | 800]]

However, this project was extremely enjoyable because it allowed me to explore many new ideas and significantly changed my perspective in several ways.

First, about AI-assisted development.

For this project, I subscribed to [Claude Pro](https://claude.ai), and it helped me a lot throughout both the design and implementation phases. This experience completely changed my perspective on AI and software engineering.

Before this project, I was somewhat worried by statements like “Software Engineers will disappear because of AI.” But after building a real project from scratch with AI assistance, I realized something important:

AI is very powerful at accelerating development, generating ideas, and assisting implementation, but many critical decisions still require human judgment, engineering trade-offs, and experience. There were also many technical situations where the AI was simply wrong or incomplete.

This project taught me that software development is not just about writing code — it is about engineering judgment and having the [[Engineering Taste|taste]] to design good software systems.

![[Pasted image 20260509175159.png]]

Second, about exploring new technology stacks.

I had seen many modern technologies becoming popular, but I never had enough time to seriously explore them. Since this project became my playground, I decided to experiment with several technologies that I had been interested in, such as:

- [Hono](https://hono.dev)
- [Drizzle ORM](https://orm.drizzle.team)
- [TanStack](https://tanstack.com)

Working on this project taught me much more than just software development. It also taught me about engineering experience and design thinking.

For example, I spent a huge amount of time carefully designing the database schema — even with AI assistance — but my professor could look at it for only a few minutes and immediately point out potential design flaws that could later cause bugs. That experience showed me the value of experience and system-level thinking.

I think this project became the starting point that reshaped my [[Thinking With AI|perspective on AI]] and taught me how to think and work effectively alongside it, rather than being afraid of it.
