---
tags:
  - explorer-exclude
  - graph-exclude
  - backlinks-exclude
  - recents-exclude
  - "#tracker"
title: All files modified
created: 2025-11-21
---
### The table

%% note to self it's finicky with spaces so i was having some trouble but turns out it's bc i had an extra space at the end %%

<!-- QueryToSerialize: TABLE file.folder as "Folder", dateformat(file.mtime,"MMM d, yyyy") as "Modified" FROM -"tags" AND -#slurp AND -"private" SORT file.mtime DESC WHERE file.name != this.file.name AND file.name != "index" AND draft != "true" -->
<!-- SerializedQuery: TABLE file.folder as "Folder", dateformat(file.mtime,"MMM d, yyyy") as "Modified" FROM -"tags" AND -#slurp AND -"private" SORT file.mtime DESC WHERE file.name != this.file.name AND file.name != "index" AND draft != "true" -->

| File                                                                                                 | Folder   | Modified     |
| ---------------------------------------------------------------------------------------------------- | -------- | ------------ |
| [[writting/STH-Mini-Web-CTF-2025.md\|STH-Mini-Web-CTF-2025]]                                         | writting | Feb 19, 2026 |
| [[thoughts/Delete cf deployment.md\|Delete cf deployment]]                                           | thoughts | Feb 19, 2026 |
| [[thoughts/Default 404 Pages.md\|Default 404 Pages]]                                                 | thoughts | Feb 19, 2026 |
| [[thoughts/Upgrading a Non-Interactive Shell.md\|Upgrading a Non-Interactive Shell]]                 | thoughts | Feb 19, 2026 |
| [[thoughts/Using Opencode with Antigravity auth.md\|Using Opencode with Antigravity auth]]           | thoughts | Feb 19, 2026 |
| [[thoughts/Time and Space Complexity.md\|Time and Space Complexity]]                                 | thoughts | Feb 19, 2026 |
| [[thoughts/Tailscale to private network VM.md\|Tailscale to private network VM]]                     | thoughts | Feb 19, 2026 |
| [[thoughts/Spicetify theme for Spotify.md\|Spicetify theme for Spotify]]                             | thoughts | Feb 19, 2026 |
| [[thoughts/Singleton Pattern for Connecting DB in Go.md\|Singleton Pattern for Connecting DB in Go]] | thoughts | Feb 19, 2026 |
| [[thoughts/P and NP Problem.md\|P and NP Problem]]                                                   | thoughts | Feb 19, 2026 |
| [[thoughts/MPA in vite(VanilaJS) without Router.md\|MPA in vite(VanilaJS) without Router]]           | thoughts | Feb 19, 2026 |
| [[thoughts/Managing Passwords with Pass and GPG.md\|Managing Passwords with Pass and GPG]]           | thoughts | Feb 19, 2026 |
| [[thoughts/Make Obsidian Window Translucent.md\|Make Obsidian Window Translucent]]                   | thoughts | Feb 19, 2026 |
| [[thoughts/HTB - Penetration Tester Learning Path.md\|HTB - Penetration Tester Learning Path]]       | thoughts | Feb 19, 2026 |
| [[thoughts/HTB - CodePartTwo.md\|HTB - CodePartTwo]]                                                 | thoughts | Feb 19, 2026 |
| [[thoughts/How JSX works under the hood.md\|How JSX works under the hood]]                           | thoughts | Feb 19, 2026 |
| [[thoughts/Hacktoberfest 2025.md\|Hacktoberfest 2025]]                                               | thoughts | Feb 19, 2026 |
| [[thoughts/Graceful Shutdown in Go.md\|Graceful Shutdown in Go]]                                     | thoughts | Feb 19, 2026 |
| [[thoughts/Find the bundle ID of any macOS app.md\|Find the bundle ID of any macOS app]]             | thoughts | Feb 19, 2026 |
| [[thoughts/Debug the container restart loop.md\|Debug the container restart loop]]                   | thoughts | Feb 19, 2026 |
| [[thoughts/Customize VScode UI Fonts.md\|Customize VScode UI Fonts]]                                 | thoughts | Feb 19, 2026 |
| [[thoughts/Compile Protobuf for Go.md\|Compile Protobuf for Go]]                                     | thoughts | Feb 19, 2026 |
| [[thoughts/Change Zellij keybinds to be like Tmux.md\|Change Zellij keybinds to be like Tmux]]       | thoughts | Feb 19, 2026 |
| [[thoughts/Big O notation.md\|Big O notation]]                                                       | thoughts | Feb 19, 2026 |
| [[thoughts/4 Pillars of Object Oriented Programming.md\|4 Pillars of Object Oriented Programming]]   | thoughts | Feb 19, 2026 |
| [[thoughts/Library.md\|Library]]                                                                     | thoughts | Feb 19, 2026 |
<!-- SerializedQuery END -->

%%

```dataviewjs
// Get all markdown notes, excluding those in "cool things online"
let pages = dv.pages('')
  .where(p =>
    p.file &&
    p.file.ext === "md" &&
    !p.file.path.toLowerCase().includes("cool things online/") && // Exclude folder &&
    !p.file.path.toLowerCase().includes("") &&
    !p.file.path.toLowerCase().includes("quartz")
  );

let notes = [];
for (let page of pages) {
  let content = await app.vault.read(app.vault.getAbstractFileByPath(page.file.path));
  let wordCount = content.split(/\s+/).filter(w => w.length > 0).length;
  notes.push({
    file: page.file,
    wordCount: wordCount
  });
}

notes.sort((a, b) => b.wordCount - a.wordCount);
let top = notes.slice(0, 5);

dv.table(["Note", "Word Count"], top.map(n => [n.file.link, n.wordCount]));
```

%%
