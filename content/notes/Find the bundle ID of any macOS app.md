---
title: Find the bundle ID of any macOS app
tags:
  - seed
created: 2025-12-03
---
## **Find the Bundle ID of a macOS App**

**Use case:** You’ll need the **bundle ID** when using automation tools like **Yabai** or **Aerospace**.

---
### **Command**

Open Terminal and run:

```shell
osascript -e 'id of app "{App_Name}"'
```

### **Example**

```shell
osascript -e 'id of app "Orbstack"'
```

**Output:** The app’s bundle identifier, e.g.,

```shell
com.orbstack.Orbstack
```
