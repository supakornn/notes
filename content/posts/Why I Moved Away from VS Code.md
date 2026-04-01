---
created: 2026-02-20
title: Why I Moved Away from VS Code
tags:
  - fruit
  - writing
---
I’ve been a loyal VS Code user for over four years. It was my go-to tool from the very first line of HTML I wrote. But as my projects grew and my tech stack expanded, I started to feel the friction of relying on a general-purpose editor.

Today, I’m officially moving to **JetBrains IDEs** as my primary workspace, with **Zed** as my companion for quick edits. This isn’t just a change of tools—it’s a shift in how I approach development.

---

### 1. The "Extension Hell" vs. Integrated Intelligence

As a **polyglot developer**, I regularly switch between **Java, Go, Rust, Vue, and C++**—sometimes all within the same day.

- **The VS Code Problem:**  
    Scaling VS Code to support this workflow meant relying heavily on extensions—nearly 50 in my case. In theory, the ecosystem is powerful. In practice, it becomes fragile.
    
    Different languages depend on different Language Server Protocol (LSP) implementations, and the quality is inconsistent. Updates can break features, extensions can conflict, and over time the system becomes harder to reason about than the code itself.
    
- **The JetBrains Approach:**  
    JetBrains IDEs are built around tightly integrated, language-specific tooling. Instead of stitching together dozens of extensions, everything works cohesively out of the box—code analysis, refactoring, navigation, and database tools.
    
    The result is not just convenience, but **consistency and reliability**, especially in large or multi-language codebases.
    

---

### 2. Coding in the Age of AI: From Writing Code to Understanding It

The way we build software is changing.

With AI capable of generating hundreds—or even thousands—of lines of code in seconds, the bottleneck is no longer _writing_ code. It’s **understanding, validating, and maintaining it**.

- **The New Challenge:**  
    AI-generated code isn’t always transparent. It can introduce subtle bugs, hidden complexity, or non-idiomatic patterns.
    
    The real question shifts from:
    
    > _“How do I write this?”_  
    > to:  
    > _“Do I fully understand what this code is doing?”_
    
- **What I Need From My Tools:**  
    In this environment, basic editing features are not enough. I need:
    
    - Deep code navigation across the entire codebase
    - Refactoring tools I can trust without hesitation
    - Powerful debugging for complex execution paths
    - Static analysis that catches issues early
        
- **Why JetBrains Fits:**  
    JetBrains IDEs excel at helping me **reason about code**. Their integrated analysis and mature debugging tools make it significantly easier to work with large, unfamiliar, or AI-generated codebases.
    
    They don’t just help me write code faster—they help me **understand it better**. And that’s the real leverage now.
    

---

### 3. A Pragmatic Workflow: The Right Tool for the Right Job

I’ve moved away from the idea of a single tool for everything. Instead, I use a **tiered workflow** based on task complexity.

- **Zed — For Speed and Simplicity**  
    I use Zed for:
    
    - Editing config files
    - Quick fixes
    - Small or temporary projects
        
    
    It’s fast, lightweight, and gets out of the way. When I don’t need full project context, I don’t want to pay for it.
    
- **JetBrains IDEs — For Serious Work**  
    When things get complex, I switch immediately:
    
    - Large or long-lived projects
    - Multi-language systems
    - Debugging non-trivial issues
    - Refactoring or architectural changes
        
    
    This is where deep code intelligence and reliable tooling become essential—not optional.
    
    My setup:
    
    - IntelliJ IDEA Ultimate — Java, web, and general backend work
    - Rider — .NET and game development
    - CLion — low-level work (C/C++, Rust, systems programming)
        

---

### Final Thoughts

VS Code is a masterpiece of software, and it served me well for over four years.

But my priorities have changed.

I’m no longer optimizing for how fast I can _write_ code.  
I’m optimizing for how well I can **understand and trust it**.

JetBrains gives me the depth I need.  
Zed gives me the speed I want.

It’s not about replacing one tool with another—it’s about choosing the right instrument for the problem at hand.