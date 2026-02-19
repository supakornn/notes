---
title: Managing Passwords with Pass and GPG
tags:
  - security
  - mac
created: 2025-11-21
modified: 2025-12-04
---

**Use this when:** You want a simple, CLI-based, GPG-encrypted password manager that works with Git.

**What is Pass?** The standard Unix password manager - stores passwords in GPG-encrypted files.

**Setup:**

1. Install on Mac

```shell
brew install pass
```

2. Generate a GPG Key

```shell
gpg --full-generate-key
```

- Key type: **RSA and RSA**
- Key size: **4096**

3. List all GPG keys

```shell
gpg --list-keys
```

- Example output:

```shell
pub   rsa4096 2025-11-21 [SC]
ABCD1234EF5678901234567890ABCDEF12345678 <- Copy this
uid           [ultimate] Your Name <you@example.com>
```

4. Initialize Pass Vault

```shell
pass init <Your-Key-ID>
```

**Daily Usage:**

5. Add a new password

```shell
pass insert <name>
```

- Example:

```shell
pass insert vm/myvm
```

6. Show a password

```shell
pass show <name>
```

**Useful Commands:**

| Command                   | Description                      |
| ------------------------- | -------------------------------- |
| `pass -c <name>`          | Copy to clipboard                |
| `pass edit <name>`        | Edit password                    |
| `pass generate <name> 20` | Generate random 20-char password |
| `pass rm <name>`          | Delete password                  |
| `pass git push`           | Sync with Git (if enabled)       |

**Tip:** Use with SSH (requires `sshpass`):

```shell
sshpass -p "$(pass show vm/myvm)" ssh user@vm-ip
```

**Storage location:** `~/.password-store/`
