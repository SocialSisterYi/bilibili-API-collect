# 智能防挡弹幕

B 站部分视频提供“智能防挡弹幕”功能，其原理是提供了一个 webmask 二进制文件，其中保存了视频中各个位置的 svg 格式蒙版。

首先需要获取 webmask 资源的地址。

## 获取 webmask 资源地址

通过 [web 播放器资源接口](../video/player.md) 获取 webmask 二进制文件的地址。


## webmask 资源

获取的 url 没有权鉴，不需要后面的参数也可以获取。

示例：

```shell
curl -G https://upos-sz-staticcos-cmask.bilivideo.com/cmaskboss/825851971_30_0.webmask >> 825851971_30_0.webmask
```

下载后是二进制文件。


## webmask 二进制读取

参考：[andrewvy/webmask-renderer](https://github.com/andrewvy/webmask-renderer)

name | offset | length | type | desc
---  | ------ | ------ | ---- | ----
mask | 0      | 4      | char | 'MASK' 文件头
version| 4    | 4      | int  | 是1 
vU | 8 | 4 | ? | 不知道是干什么的
Ly | 12 | 4 | int | 后续数据的段数
time_1    | 16 | 8 | long | 第一段对应视频开始时间 
offset_1  | 24 | 8 | long | 第一段蒙版信息开始处对应二进制偏移
...|...|...|...|...
time_{Ly}   |16+(Ly-1)*16| 8 | long | 第 `Ly` 段对应视频开始时间 
offset_{Ly} |24+(Ly-1)*16| 8 | long | 第 `Ly` 段蒙版信息开始处对应二进制偏移
segments_1| 由前面offset_1提供  | 由 `offset_2-offset_1` 计算得到 | binary | 蒙版信息块，使用 gzip 压缩
...|...|...|...|...


蒙版信息块是经过 gzip 压缩文本得到的二进制。解压缩后得到一个字节串。

前 16 字节是两个 long，记为 `left` 和 `right`，暂时不清楚其作用。`left` 似乎和平均每张蒙版的时间有关。`right` 总是 `i*10000`，`i` 是从 0 开始数的数据段次序。

后面是各个 svg 文本直接拼起来，可以直接通过 svg 格式头 `data:image/svg+xml;base64,` 分开。


Python 示例：
```python
from struct import unpack
import gzip

f = open('你的 webmask', 'rb')
buf = f.read()
_Ly = buf[12:16]
Ly = unpack('>i', _Ly)[0] # 大端序 int

times = []
offsets = []
for idx in range(Ly):
    op = 16 + idx * 16  # 个人习惯，我算偏移时喜欢用 `op` 和 `ed` 作为开始和结束的名字。
    time = unpack('>q', buf[op: op+8])[0]
    offset = unpack('>q', buf[op+8: op+16])[0]
    times.append(time)
    offsets.append(offset)

frames = []
for idx in range(Ly):
    op = offsets[idx]
    if idx == Ly - 1: ed = len(buf)
    else: ed = offsets[idx+1]
    ba = buf[op: ed]
    bad = gzip.decompress(ba)
    badl = bad.split(b'data:image/svg+xml;base64,')
    # badl[0]是16字节，`left` 和 `right`
    frames.append(badl[1: ])
```
