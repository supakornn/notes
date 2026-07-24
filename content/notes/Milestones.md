---
created: 2026-02-21
tags:
  - evergreen
title: Milestones
---
> A record of moments that marked meaningful shifts in how I think, build, and approach problems.
## 2026
### Agoda Summer Internship — Software Engineer (Full-stack)

---
### Research Assistant — Apprenticeship

This was my first apprenticeship experience. My university opened an apprenticeship program where students could work as research assistants with professors for 90 days. I decided to join the program by contacting  through [Dr. Nantapong Keandoungchun](https://www.sit.kmutt.ac.th/showprofile/?empid=289).

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

---
## 2025
### Hacktoberfest — Supercontributor

When Hacktoberfest began, I had always wanted to become an open-source contributor. I was very excited about contributing to the world of software, but at the same time, I did not think I was good enough to help real projects. I was confused and lacked confidence because I was afraid that my contributions might break something, create more bugs, or make maintainers waste time fixing mistakes that I introduced.

I was always scared to contribute.

But this year, I decided to challenge myself. I wanted to grow and become a world-class engineer, so I knew I needed to step into real-world software projects instead of staying only in my own side projects.

One thing that motivated me even more was Hacktoberfest’s reward system. This year, the first 10,000 people who completed 6 pull requests would receive an exclusive T-shirt. I thought it would be really cool if I could earn one, so I started searching for projects that I personally liked, used in my daily life, or found interesting.

![[Pasted image 20260509153909.png | 800]]

In the end, I successfully contributed to 6 repositories and earned the **Supercontributor** badge.

Here are the contributions I made:

- [Pruna](https://github.com/PrunaAI/pruna) — a model optimization framework for developers
    - Migrated the Python type-checking library from `mypy` to `ty`
    - [Pull Request](https://github.com/PrunaAI/pruna/pull/360)
- [Axios](https://github.com/axios/axios) — a Promise-based HTTP client for browsers and Node.js
    - Fixed a broken documentation link
    - [Pull Request](https://github.com/axios/axios/pull/7065)
- [Rust Analyzer](https://github.com/rust-lang/rust-analyzer) — a Rust compiler front-end for IDEs
    - Fixed a broken LICENSE file link
    - [Pull Request](https://github.com/rust-lang/rust-analyzer/pull/20784)
- [DrawDB](https://github.com/drawdb-io/drawdb) — a database diagram editor
    - Improved grammar and clarified documentation sentences
    - [Pull Request](https://github.com/drawdb-io/drawdb/pull/595)
- [Goyave](https://github.com/go-goyave/goyave) — a Go REST API framework
    - Added custom `ListenConfig` support for the server
    - [Pull Request](https://github.com/go-goyave/goyave/pull/280)
- [TLDR Pages](https://github.com/tldr-pages/tldr) — collaborative cheat sheets for console commands
    - Added a new page for the `crush` command
    - [Pull Request](https://github.com/tldr-pages/tldr/pull/18326)

After all of my pull requests were approved and merged, I felt incredibly happy because I became one of the first 10,000 participants to receive the Hacktoberfest T-shirt.

![[Pasted image 20260509135358.png | 800]]

This experience taught me that contributions do not need to be perfect or highly impactful at the beginning. You can start with very small things, such as fixing grammar mistakes, improving documentation, or editing README files.

What matters most is starting.

You do not need to wait until you become “good enough” before contributing. Even small contributions have value, and over time, those small steps become bigger ones. Every experienced engineer started somewhere, and learning happens along the way through consistent practice and real contributions.

---
### IT31 Starter Pack — Head of Basic Programming
From participant to staff, the [starterpack](https://www.instagram.com/sit.it.starterpack/) is a 7-day academic foundation camp organized by my faculty to help prepare freshmen before university life officially begins. I first joined the IT30 Starter Pack as a participant because I was also a freshman at the time.

Later, I received an opportunity from one of my friends, who was part of the core staff team. They were looking for people to help lead the academic sessions. At that time, they already had two people and needed one more member — and that became me. I was very thankful that they saw my potential and believed I could contribute to the team.

After several discussions, we planned and prepared the subjects that we would teach to the juniors. The camp included three main subjects:

- **Basic Programming** — teaching programming fundamentals and logical thinking
- **Software Development Tools** — teaching version control, debugging, and developments tools
- **IT Fundamentals** — teaching basic technology concepts along with fun activities for ice breaking

I was the head of the **Basic Programming** subject.

![[image 1.png | 800]]

It was a huge challenge for me to prepare the content and balance the difficulty level so it would not be too hard or too easy for the juniors. My friends and I — the staff members of the Basic Programming subject — worked very hard to prepare everything and make the experience as good as possible. It was both fun and stressful at the same time, but in the end, everything turned out great.

This project taught me that technical skills alone are not enough. You also need the ability to simplify complex topics and explain them clearly to people who are completely new to programming. As the head of the subject, I had even more responsibility. I needed to manage time, coordinate people, organize tasks, and also teach the classes myself.

<video src="/attachments/starterpack.webm" autoplay loop muted playsinline></video>

None of this would have been possible without all of the people in the **Basic Programming Teaching Staff** team.

---
### Hack The Box — Penetration Tester Path
I have always been passionate about computer science, and I always thought hackers were cool from what I saw in movies. Before this, I was basically a script kiddie — trying to hack or break things without really understanding the mechanisms behind them. I just wanted to do something that looked cool.

But one day, I realized I needed to grow beyond being just a kid who breaks things. I wanted to truly understand the world of hacking and what happens behind the scenes. So, I started learning hacking by following the **Penetration Tester Path** from [Hack The Box](https://www.hackthebox.com). I studied everything in the path, including all the hands-on labs, theory, and practical exercises.

![[photo-output (1).jpg | 800]]

It took me about half a year to complete. I mostly studied after school because I am a university student, and I dedicated almost all of my free time to it. The learning path was massive and covered a huge amount of theory and technical knowledge. I think I spent around 4–5 hours per day studying and practicing.

![[Pasted image 20260509134942.png | 800]]

In the end, it was all worth it because I successfully completed the [Penetration Tester Path](https://academy.hackthebox.com/path/preview/penetration-tester). It helped me build a strong foundation in computer science and better understand how systems, networks, and technologies connect together. I do not necessarily plan to pursue cybersecurity professionally — I mainly explore [[ctfs|CTFs]] and security challenges as a hobby because I enjoy understanding how the digital world works.