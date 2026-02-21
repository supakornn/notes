---
created: 2026-02-21
title: Kafka
tags:
  - sapling
---
Apache Kafka is a distributed **publish-subscribe** messaging system running over **TCP**. It records state changes as **Events** (or messages/records).

**Main Actors:**

- **Producers:** Apps that write data into **Topics**.
    
- **Consumers:** Apps that read data from Topics.
    
- **Brokers:** Servers that handle requests and manage transactions.
    
- **Cluster:** A group of one or more Brokers working together.
    

**How Data is Stored:**

- **Topics** are split into **Partitions** for parallelism.
    
- Data is **Append-only**; new events are always added to the end of the log.
    
- Each record has an **Offset**, which is a unique ID used to track position.
    
![[Pasted image 20260221071457.png | 500]]

**Key Characteristics:**

- **Sequential I/O:** High performance by writing data linearly to the disk.
    
- **Zero-Copy:** Efficient data transfer directly from disk to network.
    
- **Retention:** Data stays for a set time, allowing consumers to re-read or "replay" events.
    
![[Pasted image 20260221071547.png | 500]]