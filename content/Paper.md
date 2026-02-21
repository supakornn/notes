---
created: 2025-11-10
title: Paper
tags:
  - evergreen
---
### Recursive Language Models for Infinite Context Scaling
link: https://arxiv.org/pdf/2512.24601
#### Abstact:
We study allowing large language models (LLMs) to process arbitrarily long prompts through the lens of inference-time scaling. We propose Recursive Language Models (RLMs), a general inference paradigm that treats long prompts as part of an external environment and allows the LLM to programmatically examine, decompose, and recursively call itself over snippets of the prompt. We find that RLMs can successfully process inputs up to two orders of magnitude beyond model context windows and, even for shorter prompts, dramatically outperform the quality of vanilla frontier LLMs and common long-context scaffolds across four diverse longcontext tasks while having comparable cost. At a small scale, we post-train the first natively recursive language model. Our model, RLMQwen3-8B, outperforms the underlying Qwen3- 8B model by 28.3% on average and even approaches the quality of vanilla GPT-5 on three long-context tasks. Code is available at https://github.com/alexzhang13/rlm.

###