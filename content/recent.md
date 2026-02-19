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
| [[posts/STH-Mini-Web-CTF-2025.md\|STH-Mini-Web-CTF-2025]]                                            | posts    | Feb 19, 2026 |
| [[Delete cf deployment\|Delete cf deployment]]                                           | thoughts | Feb 19, 2026 |
| [[Default 404 Pages\|Default 404 Pages]]                                                 | thoughts | Feb 19, 2026 |
| [[Upgrading a Non-Interactive Shell\|Upgrading a Non-Interactive Shell]]                 | thoughts | Feb 19, 2026 |
| [[Using Opencode with Antigravity auth\|Using Opencode with Antigravity auth]]           | thoughts | Feb 19, 2026 |
| [[Time and Space Complexity\|Time and Space Complexity]]                                 | thoughts | Feb 19, 2026 |
| [[Tailscale to private network VM\|Tailscale to private network VM]]                     | thoughts | Feb 19, 2026 |
| [[Spicetify theme for Spotify\|Spicetify theme for Spotify]]                             | thoughts | Feb 19, 2026 |
| [[Singleton Pattern for Connecting DB in Go\|Singleton Pattern for Connecting DB in Go]] | thoughts | Feb 19, 2026 |
| [[P and NP Problem\|P and NP Problem]]                                                   | thoughts | Feb 19, 2026 |
| [[MPA in vite(VanilaJS) without Router\|MPA in vite(VanilaJS) without Router]]           | thoughts | Feb 19, 2026 |
| [[Managing Passwords with Pass and GPG\|Managing Passwords with Pass and GPG]]           | thoughts | Feb 19, 2026 |
| [[Make Obsidian Window Translucent\|Make Obsidian Window Translucent]]                   | thoughts | Feb 19, 2026 |
| [[HTB - Penetration Tester Learning Path\|HTB - Penetration Tester Learning Path]]       | thoughts | Feb 19, 2026 |
| [[HTB - CodePartTwo\|HTB - CodePartTwo]]                                                 | thoughts | Feb 19, 2026 |
| [[How JSX works under the hood\|How JSX works under the hood]]                           | thoughts | Feb 19, 2026 |
| [[Hacktoberfest 2025\|Hacktoberfest 2025]]                                               | thoughts | Feb 19, 2026 |
| [[Graceful Shutdown in Go\|Graceful Shutdown in Go]]                                     | thoughts | Feb 19, 2026 |
| [[Find the bundle ID of any macOS app\|Find the bundle ID of any macOS app]]             | thoughts | Feb 19, 2026 |
| [[Debug the container restart loop\|Debug the container restart loop]]                   | thoughts | Feb 19, 2026 |
| [[Customize VScode UI Fonts\|Customize VScode UI Fonts]]                                 | thoughts | Feb 19, 2026 |
| [[Compile Protobuf for Go\|Compile Protobuf for Go]]                                     | thoughts | Feb 19, 2026 |
| [[Change Zellij keybinds to be like Tmux\|Change Zellij keybinds to be like Tmux]]       | thoughts | Feb 19, 2026 |
| [[Big O notation\|Big O notation]]                                                       | thoughts | Feb 19, 2026 |
| [[4 Pillars of Object Oriented Programming\|4 Pillars of Object Oriented Programming]]   | thoughts | Feb 19, 2026 |
| [[Library\|Library]]                                                                     | thoughts | Feb 19, 2026 |
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
