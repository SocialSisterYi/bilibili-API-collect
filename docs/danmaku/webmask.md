# 智能防挡弹幕

B站部分视频提供“智能防挡弹幕”功能，其原理是提供了一个webmask二进制文件，其中保存了视频中各个位置的svg格式蒙版。

首先需要获取webmask资源的地址。

## 获取webmask资源地址


> https://api.bilibili.com/x/player/wbi/v2


*请求方式：GET*


**url参数：**


| 参数名 | 类型 | 内容      | 必要性      | 备注              |
| ------ | ---- | --------- | ----------- | ----------------- |
| aid    | num  | 稿件 avid | 必要 (可选) | aid 与 bvid 任选 |
| bvid   | str  | 稿件 bvid | 必要 (可选) | aid 与 bvid 任选 |
| cid    | num  | 稿件 cid | 必要 | |
| w_rid   | str  | 未知 | 不必要 |  |
| wts   | num  | 当前unix时间戳 | 不必要 |  |



**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                             |
| data    | obj  | 数据本体 |                             |

`data`对象：

| 字段      | 类型  | 内容     | 备注 |
| --------- | ----- | -------- | ---- |
|aid        | num  |  视频 aid   |      |
|bvid       | str  |  视频 bvid   |      |
|cid        | num  |  视频 cid   |      |
| ...      | ...  |  ...  |  太多了不写了，这些没啥用  |
|dm_mask   | obj  |       |  webmask信息（如果没有这一项，说明这个视频没有防挡功能） |



`dm_mask`对象（如果有）：


| 字段      | 类型  | 内容     | 备注 |
| --------- | ----- | -------- | ---- |
|cid        | num  |  视频 cid   |      |
|plat       | num  | 未知   |      |
|fps       | num  | webmask取样fps   |      |
|time       | num  | 未知   |      |
|mask_url   | str  |  webmask资源uri |  |


示例:

```shell
curl -G https://api.bilibili.com/x/player/wbi/v2?aid=515345690&cid=825851971
```


```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "aid": 515345690,
        "bvid": "BV1Fg411D7Jy",
        ... // 省略
        "dm_mask": {
            "cid": 825851971,
            "plat": 0,
            "fps": 30,
            "time": 0,
            "mask_url": "//upos-sz-staticcos-cmask.bilivideo.com/cmaskboss/825851971_30_0.webmask?trid=219266863a1442baa05086b4285ba923B&orderid=0,1&logo=00000000"
        },
        ... // 省略
    }
}
```

## webmask资源

获取的uri没有权鉴，不需要后面的参数也可以获取。

示例：

```shell
curl -G https://upos-sz-staticcos-cmask.bilivideo.com/cmaskboss/825851971_30_0.webmask >> 825851971_30_0.webmask
```

下载后是二进制文件。


## webmask二进制读取

参考：https://github.com/andrewvy/webmask-renderer

name | offset | length | type | desc
---  | ------ | ------ | ---- | ----
mask | 0      | 4      | char | 'MASK' 文件头
version| 4    | 4      | int  | 是1 
vU | 8 | 4 | ? | 不知道是干什么的
Ly | 12 | 4 | int | 后续数据的段数
time_1    | 16 | 8 | long | 第一段对应视频开始时间 
offset_1  | 24 | 8 | long | 第一段蒙版信息开始处对应二进制偏移
...|...|...|...|...
time_{Ly}   |16+(Ly-1)*16| 8 | long | 第Ly段对应视频开始时间 
offset_{Ly} |24+(Ly-1)*16| 8 | long | 第Ly段蒙版信息开始处对应二进制偏移
segments_1| 由前面offset_1提供  | 由offset_2-offset_1计算得到 | binary | 蒙版信息块，使用gzip压缩
...|...|...|...|...


蒙版信息块是经过gzip压缩文本得到的二进制。解压缩后得到一个字节串。
前16字节是两个long，记为`left`和`right`，暂时不清楚其作用。`left`似乎和平均每张蒙版的时间有关。`right`总是`i*10000`，`i`是从0开始数的数据段次序。
后面是各个svg文本直接拼起来，可以直接通过svg格式头`'data:image/svg+xml;base64,'`分开。



一段简单的Python代码：
```python
from struct import unpack
import gzip

f = open('你的webmask', 'rb')
buf = f.read()
_Ly = buf[12:16]
Ly = unpack('>i', _Ly)[0] # 大端序int

times = []
offsets = []
for idx in range(Ly):
    op = 16 + idx * 16  # 个人习惯，我算偏移时喜欢用`op`和`ed`作为开始和结束的名字。
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
    # badl[0]是16字节，`left`和`right`
    frames.append(badl[1: ])
```
