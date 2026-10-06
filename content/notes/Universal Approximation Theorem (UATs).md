---
created: 2026-05-07
title: Universal Approximation Theorem (UATs)
tags:
  - seed
---
The result I want to remember is this: a feedforward network with one hidden layer can approximate a continuous function on a compact domain as closely as we want, if it has enough hidden units and an appropriate activation function.

It is a statement about what a network can represent. It does **not** say that training will find that representation.

Let $K \subset \mathbb{R}^n$ be compact and let $f: K \to \mathbb{R}$ be continuous. For every $\varepsilon > 0$, there is a network $F(x)$ such that:

$$
\sup_{x \in K} |f(x) - F(x)| < \varepsilon
$$

One common form is:

$$
F(x) = \sum_{i=1}^{N} a_i \sigma(w_i^T x + b_i)
$$

where:

- $x \in \mathbb{R}^n$ is the input vector.
- $w_i \in \mathbb{R}^n$ and $b_i \in \mathbb{R}$ are the weight and bias for hidden unit $i$.
- $a_i \in \mathbb{R}$ is its output coefficient.
- $\sigma$ is a nonlinear activation function.

For one hidden unit:

$$
z_i = w_i^T x + b_i
$$

$$
h_i = \sigma(z_i)
$$

The output adds those activated units together:

$$
F(x) = \sum_{i=1}^{N} a_i h_i
$$

Another way to state the theorem is that finite linear combinations of $\sigma(w^T x + b)$ are dense in $C(K)$, the continuous functions on $K$. In other words, these units act like a learned basis expansion.

Geometrically, $w^T x + b = 0$ defines a hyperplane. The activation turns the linear response around that hyperplane into a nonlinear feature. The output layer combines many such features.

Classical versions use a non-constant, bounded, sigmoidal activation. Later results cover activations such as ReLU.

The theorem guarantees representational capacity only. It says nothing about:

- whether gradient descent can learn the function
- how much data is needed
- whether the model generalizes
- how wide the network must be in practice
