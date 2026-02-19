---
created: 2026-01-20
modified: 2026-01-20
title: Using Opencode with Antigravity auth
tags:
  - opencode
  - tools
---

#### 1. Install [OpenCode](https://opencode.ai/)

```shell
brew install anomalyco/tap/opencode
```

#### 2. Open OpenCode

```shell
opencode
```

#### 3. Select free model (eg. GLM-4.7)

```
/model
```

![[Pasted image 20260120190038.png]]

#### 4. Install Antigravity Plugin and Add Model Definitions

Paste the text below into the AI inside OpenCode and wait until it finishes

```
Install the opencode-antigravity-auth plugin and add the Antigravity model definitions to ~/.config/opencode/opencode.json by following: https://raw.githubusercontent.com/NoeFabris/opencode-antigravity-auth/dev/README.md
```

#### 5. Then login with google auth

```
opencode auth login
```

![[Pasted image 20260120190301.png]]

![[Pasted image 20260120190328.png]]

#### 6. Finish, After logging in successfully, you can use OpenCode with your Antigravity subscription
