---
title: Spicetify theme for Spotify
tags:
  - seed
created: 2025-10-05
---

**What is Spicetify?** A CLI tool to customize Spotify client (themes, extensions, plugins).

![[Pasted image 20251003010617.png]]

**Steps:**

1. Install Spicetify

```shell
# for linux/mac
curl -fsSL https://raw.githubusercontent.com/spicetify/cli/main/install.sh | sh

# for windows
iwr -useb https://raw.githubusercontent.com/spicetify/cli/main/install.ps1 | iex
```

2. Install Spicetify Marketplace

```shell
# for linux/mac
curl -fsSL https://raw.githubusercontent.com/spicetify/marketplace/main/resources/install.sh | sh

# for windows
iwr -useb https://raw.githubusercontent.com/spicetify/marketplace/main/resources/install.ps1 | iex
```

3. Set Spicetify theme to use Marketplace

```shell
spicetify config current_theme marketplace
```

4. Open Spotify and install theme 🎉

**Tip:** Use `spicetify apply` after making changes.
