# protobuf弹幕

2020年5月23日，哔哩哔哩网页端及移动端启用了新的默认弹幕 API，网页端弹幕显示的上限变为原弹幕池上限的两倍。

新的 API 是以 6min 为一个单位加载，即每次加载 6min 内的弹幕

## 获取实时弹幕

> https://api.bilibili.com/x/v2/dm/web/seg.so （web端）
>
> https://api.bilibili.com/x/v2/dm/wbi/web/seg.so （web 端新接口，需要 wbi 认证）
>
> https://api.bilibili.com/x/v2/dm/list/seg.so （APP端）
>
> https://i0.hdslb.com/bfs/dm/{data}.bin （BAS/代码弹幕专包）

*请求方式：GET*
*认证方式：半匿名（部分视频在无 Cookie: SESSDATA 时只返回部分弹幕）*

此接口与漫画弹幕相同

只能返回普通弹幕（`pool=1` `mode=1-7`）和代码弹幕（`pool=2` `mode=8`），BAS弹幕（`pool=2` `mode=9`）请从[弹幕元数据](danmaku_view_proto.md)中获取

互动弹幕（UP 主头像弹幕、关联视频、内嵌关注按钮）也不存在这个接口，请从[弹幕元数据](danmaku_view_proto.md)中获取

**注：仅获取 6min 的整数倍时间内的弹幕，6min 内最多弹幕数为 6000 条（如第一包中弹幕`progress`值域为0-360000）**

**url参数：**

| 参数名        | 类型 | 内容      | 必要性 | 备注                         |
| ------------- | ---- | --------- | ------ | ---------------------------- |
| type          | num  | 弹幕类    | 必要   | 1：视频弹幕<br />2：漫画弹幕 |
| oid           | num  | 视频 cid  | 必要   |                              |
| pid           | num  | 稿件 avid | 非必要 |                              |
| segment_index | num  | 分包      | 必要   | 6min 一包                    |
| pull_mode     | num  | （？）    | 非必要 |                              |
| ps            | num  | （？）    | 非必要 |                              |
| pe            | num  | （？）    | 非必要 |                              |

**proto回复：**

proto定义见：[bilibili.community.service.dm.v1.DmSegMobileReply](../../grpc_api/bilibili/community/service/dm/v1/dm.proto)

- [protogen.marcgravell](https://protogen.marcgravell.com/): 在线编译 protogen 工具, 无需再安装本地编译器(生成文件需加后缀`_pb2.py`才可使用) 

- [protobuf pip](https://pypi.org/project/protobuf/): 可一键安装的 Python 的 protogen 解析库

消息`DmSegMobileReply`：

| 名称  | 类型                 | 含义     | 备注 |
| ----- | -------------------- | -------- | ---- |
| elems | repeated DanmakuElem | 弹幕条目 |      |

消息`DanmakuElem`：

| 名称      | 类型   | 含义               | 备注                                                         |
| --------- | ------ | ------------------ | ------------------------------------------------------------ |
| id        | int64  | 弹幕 dmid          | 唯一  可用于操作参数                                         |
| progress  | int32  | 视频内弹幕出现时间 | 毫秒                                                         |
| mode      | int32  | 弹幕类型           | 1 2 3：普通弹幕<br />4：底部弹幕<br />5：顶部弹幕<br />6：逆向弹幕<br />7：高级弹幕<br />8：代码弹幕<br />9：BAS 弹幕（仅限于特殊弹幕专包） |
| fontsize  | int32  | 弹幕字号           | 18：小<br />25：标准<br />36：大                             |
| color     | uint32 | 弹幕颜色           | 十进制 RGB888 值                                             |
| midHash   | string | 发送者 mid 的 HASH | 用于屏蔽用户和查看用户发送的所有弹幕，也可反查用户id         |
| content   | string | 弹幕内容           | utf-8编码                                                    |
| ctime     | int64  | 弹幕发送时间       | 时间戳                                                       |
| weight    | int32  | 权重               | 用于智能屏蔽，根据弹幕语义及长度通过AI识别得出<br />范围：[0-10]<br />值越大权重越高 |
| action    | string | 动作？             |                                                              |
| pool      | int32  | 弹幕池             | 0：普通池<br />1：字幕池<br />2：特殊池（代码/BAS弹幕）      |
| idStr     | string | 弹幕 dmid          | 字串形式<br />唯一  可用于操作参数                           |
| attr      | int32  | 弹幕属性位         | bit0：保护<br />bit1：直播<br />bit2：高赞                   |
| animation | string | 动画？             |                                                              |

**示例：**

获取视频`av810872(cid=1176840)`（炮姐）的实时弹幕分包 1

**注：以下[proto定义](../grpc_api/bilibili/community/service/dm/v1/dm.proto)需要编译，`bilibili.community.service.dm.v1.dm_pb2`并非通过 pypi 安装**

```python
import requests
import google.protobuf.text_format as text_format
import bilibili.community.service.dm.v1.dm_pb2 as Danmaku

url = 'https://api.bilibili.com/x/v2/dm/web/seg.so'
params = {
    'type': 1,         # 弹幕类型
    'oid': 1176840,    # cid
    'pid': 810872,     # avid
    'segment_index': 1 # 弹幕分段
}
resp = requests.get(url, params)
data = resp.content

danmaku_seg = Danmaku.DmSegMobileReply()
danmaku_seg.ParseFromString(data)

print(text_format.MessageToString(danmaku_seg.elems[0], as_utf8=True))
```

输出：

```
id: 711923911
progress: 47880
mode: 1
fontsize: 18
color: 10092288
midHash: "59417e95"
content: "世界第一电击公主殿下,遇到你是我一生最美好的风景!吾炮赛高,永生不离!唯我超电磁炮永世长存! "
ctime: 1418799826
weight: 6
idStr: "711923911"
attr: 1
```

