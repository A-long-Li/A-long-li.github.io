---
title: Linux 相关
icon: fab fa-linux
category: note
tag:
  - linux
---

### 端口占用
1. 使用`ps -ef|grep [占用端口号|进程名称]`来查看进程id，获取进程id后使用`kill -9 id`来强制关闭应用。
2. 使用`lsof -i:[端口号]` 获取`PID`
3. 使用`killall`会杀死指定名称的==所有进程==`killall -9 [process_name]`。
4. 使用`pkill` 也会通过进程名来杀死进程，但是可以将信号发给指定用户(==踢某人下线==)，较于`killall`更为灵活 `pkill -9 [process_name]`。
::: code-tabs

@tab:active kill
```bash
kill -9 id
```
@tab killall
```bash
killall -9 edge
```
@tab pkill
```bash
pkill -9 edge
```
:::
