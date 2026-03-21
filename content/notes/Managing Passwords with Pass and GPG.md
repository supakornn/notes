---
title: Managing Passwords with Pass and GPG
tags:
  - seed
created: 2025-11-21
---
**Use this when:** You want a simple, CLI-based, **GPG-encrypted password manager** that integrates with Git.

---

**What is Pass?**  
The standard Unix password manager. Stores passwords in **GPG-encrypted files**.

---

## **Setup**

### Install on macOS

```bash
brew install pass
```

### Generate a GPG Key

```bash
gpg --full-generate-key
```

- **Key type:** RSA and RSA
    
- **Key size:** 4096 bits
    

### List all GPG keys

```bash
gpg --list-keys
```

- Example output:
    

```text
pub   rsa4096 2025-11-21 [SC]
ABCD1234EF5678901234567890ABCDEF12345678  <- Copy this
uid           [ultimate] Your Name <you@example.com>
```

### Initialize Pass Vault

```bash
pass init <Your-Key-ID>
```

---

## **Daily Usage**

### Add a new password

```bash
pass insert <name>
```

- Example:
    

```bash
pass insert vm/myvm
```

### Show a password

```bash
pass show <name>
```

---

## **Useful Commands**

|Command|Description|
|---|---|
|`pass -c <name>`|Copy password to clipboard|
|`pass edit <name>`|Edit an existing password|
|`pass generate <name> 20`|Generate a random 20-char password|
|`pass rm <name>`|Delete a password|
|`pass git push`|Sync with Git (if enabled)|

---

## **Tip:** Use with SSH

```bash
sshpass -p "$(pass show vm/myvm)" ssh user@vm-ip
```

---

**Storage location:**

```text
~/.password-store/
```

