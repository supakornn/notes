---
created: 2025-11-10
title: Paper
tags:
  - evergreen
---
## Weak-Driven Learning: How Weak Agents make Strong Agents Stronger

**Link:** [https://arxiv.org/pdf/2602.08222](https://arxiv.org/pdf/2602.08222) 

**Summary:** Proposes **WMSS**, a post-training paradigm that solves the "saturation bottleneck" where strong models stop improving. It uses the model's own **historical weak states (checkpoints)** to find learning gaps. By letting weak agents guide the strong agent through entropy dynamics, the model can improve its reasoning and coding abilities beyond conventional limits without adding any extra inference cost.

## Recursive Language Models for Infinite Context Scaling

**Link:** [https://arxiv.org/pdf/2512.24601](https://arxiv.org/pdf/2512.24601) 

**Summary:** Introduces **Recursive Language Models (RLMs)**, an inference paradigm that enables LLMs to scale to "infinite" context. Instead of processing long prompts at once, the model recursively calls itself to examine and decompose snippets of data. This allows it to handle inputs up to 100x beyond its native context window, significantly outperforming vanilla frontier models like GPT-5 on long-context tasks with comparable costs.