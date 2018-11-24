#!/usr/bin/expect -f
set password c4IbHcLWFAat
spawn scp -r /Users/september/.jenkins/workspace/Myblog/dist/ root@47.96.104.26:~/Sept/Test/Myblog
set timeout 300
expect "root@47.96.104.26's password"
set timeout 300
send "$password\r"
set timeout 300
send "exit\r"
expect eof