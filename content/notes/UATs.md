---
created: 2026-05-07
title: Universal Approximation Theorem (UATs)
tags:
  - seed
---
> Single-hidden-layer feedforward neural networks with **non-polynomial activation functions** are dense in $C(K)$, the space of continuous functions on compact sets.

The **Universal Approximation Theorem** is a result in *approximation theory* stating that a feedforward neural network with a **single hidden layer** can approximate any continuous function on a compact domain, given sufficient hidden units and a suitable activation function.

Let $K \subset \mathbb{R}^n$ be compact and let $f:K \to \mathbb{R}$ be continuous.

Then for any $\varepsilon > 0$, there exists a neural network $F(x)$ such that:

$$
\sup_{x \in K} |f(x) - F(x)| < \varepsilon
$$

This is the formal statement of *"approximation to arbitrary precision"*.

---

## Neural Network Representation

The approximating function $F(x)$ is typically of the form:

$$
F(x)=\sum_{i=1}^{N} a_i \sigma(w_i^T x + b_i)
$$

where:

- $x \in \mathbb{R}^n$: input vector
- $w_i \in \mathbb{R}^n$: weight vector of neuron $i$
- $b_i \in \mathbb{R}$: bias
- $a_i \in \mathbb{R}$: output layer coefficient
- $\sigma(\cdot)$: **nonlinear activation function**

---

## Neuron-Level Decomposition

Each hidden unit computes:

### Linear transformation

$$
z_i = w_i^T x + b_i
$$

### Nonlinear activation

$$
h_i = \sigma(z_i)
$$

Thus the network becomes:

$$
F(x)=\sum_{i=1}^{N} a_i h_i
$$

---

## Function Space Interpretation

The theorem can be interpreted as a **density result** in function spaces.

Let $C(K)$ denote the space of continuous functions on compact set $K$. Then:

$$
\text{span}\{\sigma(w^T x + b)\}
\quad \text{is dense in } C(K)
$$

Meaning:

> *finite linear combinations* of sigmoidal ridge functions can approximate **any** continuous function arbitrarily well.

---

## Geometric Interpretation

Each neuron defines a **hyperplane**:

$$
w^T x + b = 0
$$

This partitions the input space into *half-spaces*. The activation function transforms this linear partition into a smooth nonlinear response.

Thus:

- **linear part** → geometric partitioning
- **activation** → nonlinear shaping
- **summation** → function reconstruction

---

## Activation Function Requirement

A key condition is that $\sigma$ must be:

- **non-constant**
- bounded or sigmoidal *(in classical proofs)*
- continuous *(in most formulations)*

Typical examples:

- **sigmoid**: $\sigma(x)=\frac{1}{1+e^{-x}}$
- **tanh**
- **ReLU** *(in extended versions)*

---

## Key Theoretical Meaning

The theorem is **existential**:

- It guarantees **representational capacity**
- It does **NOT** guarantee:
    - learnability via gradient descent
    - finite sample efficiency
    - generalization behavior
    - optimal network size

---

## Core Insight

The neural network class:

$$
F(x)=\sum_i a_i \sigma(w_i^T x + b_i)
$$

can be viewed as a **learned basis expansion**, where:

- $w_i, b_i$: define *adaptive* basis functions
- $a_i$: linear combination coefficients
- $\sigma$: nonlinear feature generator
