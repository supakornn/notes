---
created: 2026-02-20
title: Goodbye VScode
tags:
  - vscode
---
I’ve been a loyal VS Code user for over four years. It was my go-to tool from the very first line of HTML I wrote. But as my projects grew and my tech stack expanded, I began to feel the limitations of a general-purpose editor.

Today, I’m officially moving to **[JetBrains IDEs](https://www.jetbrains.com/ides/)** as my primary workspace, with **[Zed](https://zed.dev)** as my companion for quick edits. Here is why I made the switch.

### 1. The "Extension Hell" vs. Out-of-the-Box Power

As a **polyglot developer**, I don't stick to just one language. On any given day, I might jump between **Java, Go, Rust, Vue, and C++**.

- **The VS Code Problem:** To make VS Code "smart" enough for all these languages, I had to install nearly 50 extensions. This created a fragile ecosystem where updates could break my workflow, and managing all those plugins became a chore.
    
- **The JetBrains Solution:** JetBrains IDEs come "batteries included." Everything I need—deep code analysis, refactoring tools, and database management—is built-in and works perfectly from day one. It’s a specialized tool for a specialized job.
    
### 2. Performance & The Electron Bottleneck

VS Code is built on **[Electron](https://github.com/electron/electron) (TypeScript/JavaScript)**. While impressive for a web-based desktop app, it has inherent limitations:

- **Resource Trade-off:** I noticed that when VS Code is loaded with 50+ extensions, its RAM and CPU usage often rivals that of a full IDE.
    
- **Efficiency:** If I’m going to use that much hardware power anyway, I’d rather give those resources to a JetBrains IDE that offers deeper code intelligence and better native integration.

### 3. My New Precision Workflow

I’ve realized that "one tool fits all" isn't always the best approach. Instead, I’ve moved to a more specialized setup:

- **IntelliJ IDEA Ultimate:** My powerhouse for Java, Web development, Go, and Python and beyond.
    
- **JetBrains Rider:** My dedicated environment for **.NET and Game Development**. It’s far superior to VS Code’s C# support.
    
- **CLion:** For **low-level work (C/C++, Rust, and Assembly)**. When I’m worrying about pointers and memory, I need the world-class debugger that CLion provides.
    
- **Zed Editor:** This is my secret weapon. Since it’s built in **Rust**, it’s incredibly fast and lightweight. I use Zed whenever I need to make a "quick edit" or browse a file without waiting for a heavy IDE to index.
    
### Final Thoughts

VS Code is a masterpiece of software, and it served me well for 4 years. But for my current workflow as a polyglot developer, I need the **depth** of JetBrains and the **speed** of Zed.

It’s not just about changing a tool; it’s about choosing the right instrument for the craft.