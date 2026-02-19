---
tags:
  - explorer-exclude
  - graph-exclude
  - backlinks-exclude
  - recents-exclude
  - "#tracker"
title: All files modified
created: 2025-11-21
modified: 2025-12-04
---

[[index|  Return to Homepage]]

### The table

%% note to self it's finicky with spaces so i was having some trouble but turns out it's bc i had an extra space at the end %%

<!-- QueryToSerialize: TABLE file.folder as "Folder", dateformat(file.mtime,"MMM d, yyyy") as "Modified" FROM -"tags" AND -#slurp AND -"private" SORT file.mtime DESC WHERE file.name != this.file.name AND file.name != "index" AND draft != "true" -->
<!-- SerializedQuery: TABLE file.folder as "Folder", dateformat(file.mtime,"MMM d, yyyy") as "Modified" FROM -"tags" AND -#slurp AND -"private" SORT file.mtime DESC WHERE file.name != this.file.name AND file.name != "index" AND draft != "true" -->

| File                                                                                              | Folder | Modified     |
| ------------------------------------------------------------------------------------------------- | ------ | ------------ |
| [[notes/HTB - CodePartTwo.md\|HTB - CodePartTwo]]                                                 | notes  | Feb 19, 2026 |
| [[notes/Using Opencode with Antigravity auth.md\|Using Opencode with Antigravity auth]]           | notes  | Feb 19, 2026 |
| [[notes/Useful website for illustrations picture.md\|Useful website for illustrations picture]]   | notes  | Feb 19, 2026 |
| [[notes/Upgrading a Non-Interactive Shell.md\|Upgrading a Non-Interactive Shell]]                 | notes  | Feb 19, 2026 |
| [[notes/Time and Space Complexity.md\|Time and Space Complexity]]                                 | notes  | Feb 19, 2026 |
| [[notes/Tailscale to private network VM.md\|Tailscale to private network VM]]                     | notes  | Feb 19, 2026 |
| [[notes/Spicetify theme for Spotify.md\|Spicetify theme for Spotify]]                             | notes  | Feb 19, 2026 |
| [[notes/Singleton Pattern for Connecting DB in Go.md\|Singleton Pattern for Connecting DB in Go]] | notes  | Feb 19, 2026 |
| [[notes/P and NP Problem.md\|P and NP Problem]]                                                   | notes  | Feb 19, 2026 |
| [[notes/Managing Passwords with Pass and GPG.md\|Managing Passwords with Pass and GPG]]           | notes  | Feb 19, 2026 |
| [[notes/Make Obsidian Window Translucent.md\|Make Obsidian Window Translucent]]                   | notes  | Feb 19, 2026 |
| [[post/STH-Mini-Web-CTF-2025.md\|STH-Mini-Web-CTF-2025]]                                          | post   | Feb 19, 2026 |
| [[notes/library.md\|library]]                                                                     | notes  | Feb 19, 2026 |
| [[notes/MPA in vite(VanilaJS) without Router.md\|MPA in vite(VanilaJS) without Router]]           | notes  | Feb 19, 2026 |
| [[notes/How JSX works under the hood.md\|How JSX works under the hood]]                           | notes  | Feb 19, 2026 |
| [[notes/Graceful Shutdown in Go.md\|Graceful Shutdown in Go]]                                     | notes  | Feb 19, 2026 |
| [[notes/Find the bundle ID of any macOS app.md\|Find the bundle ID of any macOS app]]             | notes  | Feb 19, 2026 |
| [[notes/Default 404 Pages.md\|Default 404 Pages]]                                                 | notes  | Feb 19, 2026 |
| [[notes/Debug the container restart loop.md\|Debug the container restart loop]]                   | notes  | Feb 19, 2026 |
| [[notes/Customize VScode UI Fonts.md\|Customize VScode UI Fonts]]                                 | notes  | Feb 19, 2026 |
| [[notes/Compile Protobuf for Go.md\|Compile Protobuf for Go]]                                     | notes  | Feb 19, 2026 |
| [[notes/Change Zellij keybinds to be like Tmux.md\|Change Zellij keybinds to be like Tmux]]       | notes  | Feb 19, 2026 |
| [[notes/Big O notation.md\|Big O notation]]                                                       | notes  | Feb 19, 2026 |
| [[notes/4 Pillars of Object Oriented Programming.md\|4 Pillars of Object Oriented Programming]]   | notes  | Feb 19, 2026 |
| [[notes/Hacktoberfest 2025.md\|Hacktoberfest 2025]]                                               | notes  | Feb 19, 2026 |
| [[notes/HTB - Penetration Tester Learning Path.md\|HTB - Penetration Tester Learning Path]]       | notes  | Feb 19, 2026 |
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
