---
created: 2026-02-25
tags:
  - seed
title: Active Directory Attack Mind Map
---
[Source](https://orange-cyberdefense.github.io/ocd-mindmaps/img/mindmap_ad_dark_classic_2025.03.excalidraw.svg)

quick mental model: AD attacks = move toward domain admin

flow roughly: recon → get creds → escalate → move → persist

categories:
- Discovery & Recon   → find users / services / attack surface  
- Credential Theft / Abuse  → get something usable (hash / ticket)
- Privilege Escalation   → become more powerful inside domain  
- Lateral Movement  → move across machines  
- Persistence  → stay after access  
- Advanced  → complex paths (trusts, SCCM, etc)
