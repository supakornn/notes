---
created: 2025-11-10
title: Paper
tags:
  - evergreen
---
## ThaiOCRBench: A Task-Diverse Benchmark for Vision-Language Understanding in Thai

**Link:** [https://arxiv.org/pdf/2511.04479](https://arxiv.org/pdf/2511.04479)

**Summary:** Introduces **ThaiOCRBench**, a benchmark dataset designed to evaluate how well vision-language models understand Thai documents. It includes diverse tasks such as OCR, table and chart parsing, and document question answering. Experiments show that current models still struggle with complex Thai text layouts and handwriting. The benchmark provides a standardized way to measure and improve Thai document understanding systems.

## Weak-Driven Learning: How Weak Agents make Strong Agents Stronger

**Link:** [https://arxiv.org/pdf/2602.08222](https://arxiv.org/pdf/2602.08222) 

**Summary:** Proposes **WMSS**, a post-training paradigm that solves the "saturation bottleneck" where strong models stop improving. It uses the model's own **historical weak states (checkpoints)** to find learning gaps. By letting weak agents guide the strong agent through entropy dynamics, the model can improve its reasoning and coding abilities beyond conventional limits without adding any extra inference cost.

## Recursive Language Models for Infinite Context Scaling

**Link:** [https://arxiv.org/pdf/2512.24601](https://arxiv.org/pdf/2512.24601) 

**Summary:** Introduces **Recursive Language Models (RLMs)**, an inference paradigm that enables LLMs to scale to "infinite" context. Instead of processing long prompts at once, the model recursively calls itself to examine and decompose snippets of data. This allows it to handle inputs up to 100x beyond its native context window, significantly outperforming vanilla frontier models like GPT-5 on long-context tasks with comparable costs.

