---
created: 2026-09-05
tags:
  - seed
  - ctfs
title: HTB - Cap
---
![[Pasted image 20260905212406.png]]


## Enumeration

```js
rustscan -a 10.129.40.90 -- -sC -sV -oN cap-nmap.txt
```

RustScan first identified open ports, then passed the results to Nmap. The `-sC` option ran Nmap’s default scripts, `-sV` identified service versions, and `-oN` saved the normal output to `cap-nmap.txt`.

The scan found:

- FTP on port 21, running vsftpd
- SSH on port 22, running OpenSSH
- HTTP on port 80, serving a Security Dashboard through Gunicorn

FTP and SSH normally require credentials, so I chose to inspect the web application first because it exposed an interactive dashboard.

![[Pasted image 20260905204106.png]]

## IDOR in the web application

I opened:

```
http://10.129.40.90/data/3
```

The page displayed a packet-capture record. I tested the sequential IDs `0` through `6` by changing the number in the URL.

Each `/data/<id>` page returned a downloadable PCAP file. For example:

```
http://10.129.40.90/data/0
```

This returned a different capture that I could download. The application accepted the supplied numeric ID without verifying whether I was authorized to access that record. This is an insecure direct object reference ([[IDOR]]).

![[Pasted image 20260905212050.png]]

## Packet capture analysis

```js
wireshark 0.pcap
```

I opened the downloaded capture in Wireshark. FTP packets were directly visible in the packet list.

The FTP protocol sends commands and credentials in plaintext. The capture included `USER` and `PASS` requests, revealing credentials for the user `nathan`. I redacted the password from this write-up.

![[Pasted image 20260905212007.png]]

## SSH access

```js
ssh nathan@10.129.40.90
```

The credentials recovered from the FTP capture also worked for SSH. After logging in as `nathan`, I read the user flag:

```js
cat user.txt
```

This showed that credentials exposed through one service can sometimes be reused on another service.

![[Pasted image 20260905211905.png]]

## Privilege escalation

```js
getcap -r / 2>/dev/null
```

I enumerated Linux capabilities assigned to files. Capabilities grant a program selected privileged actions without granting all root permissions.

The important result was:

![[Pasted image 20260905211729.png]]

`cap_setuid` allows the Python process to change its user ID. Assigning this capability to a general-purpose interpreter is dangerous because it can be used to execute code as another user, including root.

```js
python3.8 -c 'import os; os.setuid(0); os.system("/bin/bash")'
```

I verified root access and read the root flag:

```js
id
cat /root/root.txt
```

![[Pasted image 20260905212303.png]]