---
title: STH-Mini-Web-CTF-2025
tags:
  - fruit
created: 2025-10-05
---
> [!abstract] **Target Information**
> 
> - **Target URL:** [https://web1.ctf.p7z.pw](https://web1.ctf.p7z.pw/)
>     
> - **Objective:** ค้นหา Flag ทั้งหมด 2 ตัว (Admin Access & Logic Bypass)
>     
> - **Flag Format:** `STH1{...}`
>     

---

## Flag 1: Privilege Escalation (เข้าสู่ระบบสิทธิ์ Admin)

### 1. Information Gathering & Login

จากการสำรวจหน้าแรก เราพบช่องโหว่พื้นฐานจากการตรวจสอบ Source Code (Inspect Element)

- **พบ Credentials หลุด:** มี Username/Password ของ User ทดสอบถูก Comment ไว้
    
- **Action:** ทำการ Login ด้วยสิทธิ์ `test` และติ๊ก **"Remember Me"** เพื่อสร้าง JWT Cookie
    
### 2. API Enumeration (การไล่หาข้อมูลผ่าน API)

เมื่อตรวจสอบไฟล์ `script.js` พบฟังก์ชัน Debug ที่น่าสนใจ 2 ตัว:

1. `debugFetchUserTest()` → ดึงข้อมูล User `test`
    
2. `debugFetchAllUsers()` → ดึงรายชื่อ User ทั้งหมดในระบบ
    

> [!bug] **Exploit Point**
> 
> จากการเรียก `api.php?action=get_alluser` พบ User ชื่อ `admin-uat`
> 
> เมื่อเจาะจงไปที่ `api.php?action=get_userinfo&user=admin-uat` เราได้รับ **remember_me_token** ของ Admin มา!

### 3. JWT Secret Brute-forcing

เรามี Token แต่ไม่สามารถปลอมแปลงสิทธิ์ได้ถ้าไม่มี **Secret Key** เราจึงต้องใช้ `Hashcat` เพื่อถอดรหัสหา Key จาก JWT เดิมของเรา:

Bash

```
# ใช้ Mode 16500 สำหรับ JWT (HS256)
hashcat -a 0 -m 16500 "<YOUR_JWT_HERE>" /usr/share/wordlists/rockyou.txt
```

- **Result Found:** Secret Key คือ `"bobcats"`
    

### 4. Forging Admin Token

ใช้ Python ในการสร้าง JWT ใหม่โดยใช้ Token ของ `admin-uat` ที่เราแอบดูมาจาก API:

Python

```
import jwt
# Sign token ใหม่ด้วย Secret ที่ Brute-force ได้
payload = { "token": "73eb7063-f8c3-4e50-bea2-07c05681aa92" }
print(jwt.encode(payload, "bobcats", algorithm="HS256"))
```

**Step สุดท้าย:** นำ JWT ที่ได้ไปแทนที่ใน Cookies ของ Browser แล้ว Refresh หน้าเว็บเพื่อเข้าสู่สิทธิ์ Admin และไปที่หน้า `admin.php` เพื่อรับ Flag ที่ 1 ใน Source Code

---

## Flag 2: Logic Bypass (พิมพ์เงินออกจากระบบ)

### 1. Vulnerability Analysis

ในหน้า `admin.php` มีโค้ดตรวจสอบความปลอดภัย (Validation) ที่ถูก Comment ไว้ ซึ่งมีช่องโหว่ที่ตัว Regex:

PHP

```
// Regex: /^[0-9]+$/m  <-- มีจุดอ่อนที่ตัวแก้ไข /m (Multiline)
if (preg_match('/^[0-9]+$/m', $amount) && strpos($amount, 'STH')) {
    echo $flag2;
}
```

> [!warning] **The Flaw**
> 
> - `^...$ /m` จะตรวจสอบเงื่อนไขแบบ **บรรทัดต่อบรรทัด**
>     
> - ถ้าบรรทัดแรกเป็นตัวเลข (ผ่าน Regex) และมีบรรทัดอื่นที่มีคำว่า "STH" (ผ่าน strpos) เงื่อนไขจะเป็นจริงทันที
>     

### 2. Exploitation (Newline Injection)

เราไม่สามารถใส่ข้อความผ่านหน้าเว็บได้เพราะ Input ถูก Lock เป็น `type="number"` จึงต้องใช้ **Burp Suite** ในการยิง Request โดยตรง

**Payload ที่ใช้:**

HTTP

```
POST /api.php HTTP/1.1
...
amount=123%0ASTH&denomination=USD
```

- `123` : ผ่านเงื่อนไขบรรทัดแรกว่าเป็นตัวเลข
    
- `%0A` : คือ Newline (`\n`) เพื่อขึ้นบรรทัดใหม่
    
- `STH` : บรรทัดที่สองทำให้ฟังก์ชัน `strpos` ตรวจเจอคำที่ต้องการ
    

**Result:** ระบบส่ง Flag ที่ 2 กลับมาให้ใน Response Body ทันที!

---

## Summary

|**Flag**|**Vulnerability Type**|**Tool Used**|
|---|---|---|
|**Flag 1**|Information Disclosure & Weak JWT Secret|Hashcat, Python, DevTools|
|**Flag 2**|Regex Multiline Bypass (Newline Injection)|Burp Suite|
