---
title: STH-Mini-Web-CTF-2025
tags:
  - fruit
created: 2025-10-05
---
![](https://cdn-images-1.medium.com/max/800/0*quSIvw2fwHBmbBJa)

Target : [https://web1.ctf.p7z.pw](https://web1.ctf.p7z.pw)

- ทำการโจมตีเว็บโจทย์การแข่งขัน เพื่อหาข้อความลับ ที่เรียกว่า Flag โดย Flag จะมีรูปแบบ เช่น STH1{cff940beed74db5e1c7c63007223a6e6}
- เข้าสู่ระบบเป็นสิทธิ์ผู้ดูแลระบบ (Flag 1)
- ทำการพิมพ์เงินออกจากระบบ (Flag 2)

---

## มาเริ่มกันที่ Flag 1 : เข้าสู่ระบบเป็นสิทธิ์ผู้ดูแลระบบ

![](https://cdn-images-1.medium.com/max/800/1*MIA-GGdTygl9TsJOnUpJFg.png)

หลังจากเข้าเว็ปมาก็จะเห็นหน้า login

ซึ่งเราไม่มี username, password แล้วเราจะ login ได้ยังไง ?

ขั้นตอนแรกเรามารวบรวมหาข้อมูลให้มากที่สุดก่อน (Information Gathering)

เริ่มจากลอง inspect หน้าเว็ปดูเผื่อจะเจออะไร

![](https://cdn-images-1.medium.com/max/800/1*dqASwHKhA-0YkurFc0i-1w.png)

เมื่อลองดูใน Source code เราจะเห็น comment ของ credentials อยู่ คือ username และ password

ลองเอา username และ password ที่ได้มา login ดู และ ติ๊ก Remember Me ด้วย

![](https://cdn-images-1.medium.com/max/800/1*qBCMf8ulCnAjzEl_uYdSWg.png)

หลังจาก login แล้ว เราจะเห็นว่ามีข้อมูลเกี่ยวกับการ login ของเราขึ้นมา

คือ username “test”, Role “user”

![](https://cdn-images-1.medium.com/max/800/1*V9pCf388lfTMN3p6CzXecA.png)

แต่ใน Flag นี้เราจะต้อง login ด้วย Admin user แล้วเราจะสามารถ login ด้วย Admin ได้ยังไง ?

ลอง inspect หน้าเว็ปดูอีกรอบเผื่อจะมีอะไรซ่อนอยู่อีก

![](https://cdn-images-1.medium.com/max/800/1*tPAnEqOqZCeNaFMxgSg_BQ.png)

เมื่อลองส่องๆดูเราจะเห็นไฟล์ javascript “script.js” และเราเห็นว่าในไฟล์นี้มี function อยู่ 2 function คือ

**debugFetchUserTest()**

![](https://cdn-images-1.medium.com/max/800/1*XEHSmAeddFaafO57Y1d9Ng.png)

function นี้จะทำการ fetch data จาก **api.php?action=get_userinfo&user=test**

ลองยิง api ไปที่ endpoint นี้ดู

https://web1.ctf.p7z.pw/api.php?action=get_userinfo&user=test

ผลลัพธ์ที่ได้ :

![](https://cdn-images-1.medium.com/max/800/1*RjiFslSA3qieWE09l66fAQ.png)

แสดงว่า function นี้เป็น function ที่ทำหน้าที่ดึงข้อมูลของ user นั้นๆ

ทีนี้ลองไปดูอีก function ว่ามันทำอะไรได้บ้าง ?

**debugFetchAllUsers()**

![](https://cdn-images-1.medium.com/max/800/1*ztm59x3xqb5ipCb0fzgnHA.png)

function นี้จะทำการ fetch data จาก **api.php?action=get_alluser**

ลองยิง api ไปที่ endpoint นี้ดู

https://web1.ctf.p7z.pw/api.php?action=get_alluser

ผลลัพธ์ที่ได้ :

![](https://cdn-images-1.medium.com/max/800/1*2nzCK4WD1WhV1tRgjVCayQ.png)

แสดงว่า function นี้เป็น function ที่ทำหน้าที่ fetch user ทั้งหมดในระบบ

จากผลลัพธ์ของ function **debugFetchAllUsers()**

เราจะเห็นว่า มี user อยู่อีก 1 user ซึ่งอาจจะเป็น admin user

เราจะลองเอา username นี้ไปยิง api เพื่อขอข้อมูลของ user ดู

https://web1.ctf.p7z.pw/api.php?action=get_userinfo&user=admin-uat

ผลลัพธ์ที่ได้ :

![](https://cdn-images-1.medium.com/max/800/1*iKnZgCthfsCiMGCq0L4vuw.png)

ดูจากข้อมูลนี้เราจะเห็น remember_me_token ซึ่งอาจจะเป็น token ที่ใช้ sign jwt token ของ admin-uat

แสดงว่าเราอาจจะใช้ token นี้มา sign token เพื่อ login เป็น admin-uat ได้

แต่เราไม่มี jwt secret key สำหรับใช้ sign token แล้วเราจะหามันได้ยังไง ?

คำตอบก็คือ bruteforce ยังไงหล่ะ

ก่อนอื่นเราต้องไปเอา Jwt token ของเรามาก่อน ซึ่งจะอยู่ใน cookies

![](https://cdn-images-1.medium.com/max/800/1*pFCpW3nPwieQsrVl37GpHw.png)

และเราจะใช้ hashcat สำหรับ brutefoce เพื่อหา Jwt secret key

hashcat -a 0 -m 16500 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImI4MTk0M2JhLWQxYzUtNDk1YS04NDI3LTQ3MTFjMzkyNTZiZiJ9.Rlk_a69lx16hNhwn4nBfRxhiMGmEDoPIcxfr1_7JdH8" /usr/share/wordlists/rockyou.txt

![](https://cdn-images-1.medium.com/max/800/1*iEY26e5EwWmYuby84foSmQ.png)

หลังจาก brutefoce เสร็จ เราก็จะได้คำตอบว่า jwt secret key คือ

![](https://cdn-images-1.medium.com/max/800/1*VzCLOwQjpO5cNY5NcnFChQ.png)

ตอนนี้เราได้ทั้ง jwt secret key และ token แล้ว

ต่อไปคือการเอาทั้ง 2 อย่างมารวมกัน ก็คือ การ sign token นั่นเอง

เราจะใช้ python สำหรับ sign token

import jwt
print(jwt.encode({ "token": "73eb7063-f8c3-4e50-bea2-07c05681aa92"}, '"bobcats"', algorithm="HS256"))

![](https://cdn-images-1.medium.com/max/800/1*woGgxRc0ghPoRvdEphHaYw.png)

หลังจาก ได้ jwt token มาแล้ว เราจะเอา token ไปแก้ ใน cookies ของเรา

![](https://cdn-images-1.medium.com/max/800/1*7rK6Jf0o0ti3dL4g8D4RaQ.png)

แล้วลอง refresh browser ดู ถ้า user ยังไม่เปลี่ยนให้ ปิด browser แล้วเปิดใหม่ มันอาจจะติด cache อยู่

เราก็จะสามารถ login ด้วย admin-uat ได้แล้ว

![](https://cdn-images-1.medium.com/max/800/1*9_H-AIoIbyZnD0UjLBhKMA.png)

เราจะลองเข้าไปที่หน้า admin.php ตามที่ถูก comment ไว้ใน script.js

![](https://cdn-images-1.medium.com/max/800/1*foch7j9mazC6tgDgHq_6cw.png)

![](https://cdn-images-1.medium.com/max/800/1*kzY9YBqNPKoSNH8dzf-VpQ.png)

หลังจากเข้ามาที่หน้า admin.php แล้ว ก็ลอง inspect ดูอีกรอบ

![](https://cdn-images-1.medium.com/max/800/1*tNyPQK5p_8Gh_X5UFiGHZg.png)

จะเห็น Flag ที่ 1 ถูก comment อยู่ใน source code

---

## มาต่อกันที่ Flag ที่ 2

Flag 2 : ทำการพิมพ์เงินออกจากระบบ

จากการ inspect หน้า admin.php เราจะเห็น โค้ดอะไรบางอย่างถูก comment อยู่

![](https://cdn-images-1.medium.com/max/800/1*lTNt3qPI3dQjNBTJtgbTBw.png)

ลองแกะๆการทำงานดูจะเห็นว่า

โค้ดนี้คือโค้ดสำหรับ validate input และแสดง Flag ออกมา

logic ของการทำงาน คือ

**validateNumber()**

- Regular Expression `/^[0-9]+$/m`เช็คว่า input เป็นตัวเลขหรือไม่
- ข้อสังเกตคือ Regx นี้ใช้ /m ซึ่งจะตรวจสอบแค่บรรทัดเดียวเท่านั้น

**strpos($amount, ‘STH’)**

- เช็คว่า Input มีคำว่า STH อยู่หรือไม่

การที่เราจะ bypass validator นี้ไปได้ คือ input ต้องเป็นตัวเลขทั้งหมด และ มี STH อยู่ด้วย ระบบถึงจะ return Flag มาให้เรา

แล้วเราจะทำยังไงหล่ะ ??

ถ้าจำได้ Regx ที่ validate input มันตรวจสอบแค่บรรทัดเดียว ดังนั้นเราก็สามารถ input ข้อมูล 2 บรรทัดได้สิ

เช่นแบบนี้

12345
STH

เพราะบรรทัดแรกจะถูกตรวจสอบว่าถูกต้องด้วย Regx แต่บรรทัดที่ 2 มีคำว่า STH ทำให้ logic ของระบบเป็น True && True และเราก็จะได้ Flag

เราจะใช้ burpsuit สำหรับยิง API แทนการพิมพ์ข้อมูลใน form ของหน้าเว็ป

![](https://cdn-images-1.medium.com/max/800/1*KXxreu45N0Z6cwvrVBpF8g.png)

เพราะหน้าเว็ปใช้ input type number ทำให้เราไม่สามารถใส่ ข้อความใน input ได้

ลองยิง API ด้วย burpsuit โดยส่ง payload **amount=123%0ASTH&denomination=USD**

`12345` คือ ตัวเลขที่เราต้องการให้ผ่าน regx

`%0A` คือ \n แบบเข้ารหัส (url encoding)

`STH` คือ สิ่งที่เราต้องการแทรกเข้าไปใน payload เพื่อให้ได้ flag

![](https://cdn-images-1.medium.com/max/800/1*YwS2Ho3DH7ueHwzh5CyXyg.png)

หลังจากยิง API ไป เราก็จะเห็น Flag ที่ 2 ใน Response

![](https://cdn-images-1.medium.com/max/800/1*kg2kjMK5Hs_AQ_PgV1FwnA.png)

ทีนี้เราก็จะได้ Flag ครบทั้ง 2 Flag แล้ว เย้ๆๆๆ
