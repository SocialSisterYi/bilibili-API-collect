# 历史弹幕

**注：历史弹幕的xml接口已经失效，现已改为protobuf接口**

## 查询历史弹幕日期

> https://api.bilibili.com/x/v2/dm/history/index

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**注：查询历史弹幕需要登录**

**url参数：**

| 参数名 | 类型 | 内容         | 必要性 | 备注    |
| ------ | ---- | ------------ | ------ | ------- |
| type   | num  | 1            | 必要   |         |
| oid    | num  | 视频cid      | 必要   |         |
| month  | str  | 查询目标年月 | 必要   | YYYY-MM |

**json回复：**

根对象：

| 字段    | 类型                            | 内容     | 备注                                              |
| ------- | ------------------------------- | -------- | ------------------------------------------------- |
| code    | num                             | 返回值   | 0：成功<br />-400：请求错误<br />-101：账号未登录 |
| message | str                             | 错误信息 | 默认为0                                           |
| ttl     | num                             | 1        |                                                   |
| data    | 有弹幕：array<br />无弹幕：null | 日期列表 |                                                   |

`data`数组：

| 项   | 类型 | 内容                | 备注       |
| ---- | ---- | ------------------- | ---------- |
| 0    | str  | 存在弹幕的日期1     | YYYY-MM-DD |
| n    | str  | 存在弹幕的日期(n+1) | YYYY-MM-DD |
| ……   | str  | ……                  | ……         |

**示例：**

查询了cid为144541892的视频位于2020年1月中有历史弹幕记录的日期

```shell
curl -G 'https://api.bilibili.com/x/v2/dm/history/index' \
--data-urlencode 'type=1' \
--data-urlencode 'oid=144541892' \
--data-urlencode 'month=2020-01' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": [
        "2020-01-21",
        "2020-01-22",
        "2020-01-23",
        "2020-01-24",
        "2020-01-25",
        "2020-01-26",
        "2020-01-27",
        "2020-01-28",
        "2020-01-29",
        "2020-01-30",
        "2020-01-31"
    ]
}
```

</details>

返回结果的 `data` 项说明这些日期有弹幕发送。若查询的月份中视频无弹幕，则 `data` 项为 `null`

```shell
curl -G 'https://api.bilibili.com/x/v2/dm/history/index' \
--data-urlencode 'type=1' \
--data-urlencode 'oid=144541892' \
--data-urlencode 'month=2019-12' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": null
}
```

</details>

## 获取历史弹幕protobuf接口

>  https://api.bilibili.com/x/v2/dm/web/history/seg.so

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注        |
| ------ | ---- | -------- | ------ | ----------- |
| type   | num  | 弹幕类   | 必要   | 1：视频弹幕 |
| oid    | num  | 视频cid  | 必要   |             |
| date   | str  | 弹幕日期 | 必要   | YYYY-MM-DD  |

**proto回复：**

porto定义见：[bilibili.community.service.dm.v1.DmSegMobileReply](https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/grpc_api/bilibili/community/service/dm/v1/dm.proto)

详细说明见[protobuf弹幕](danmaku_proto.md)

获取视频`av84271171(cid=144541892)`2020-01-21的历史弹幕

**注：proto定义需要编译**

```python
import requests
import google.protobuf.text_format as text_format
import bilibili.community.service.dm.v1_pb2 as Danmaku

url = 'https://api.bilibili.com/x/v2/dm/web/history/seg.so'
params = {
    'type':1,           #弹幕类型
    'oid':144541892,    #cid
    'date':'2020-01-21' #弹幕日期
}
cookies = {
    'SESSDATA':'xxx'
}
resp = requests.get(url,params,cookies=cookies)
data = resp.content

danmaku_seg = Danmaku.DmSegMobileReply()
danmaku_seg.ParseFromString(data)

print(text_format.MessageToString(danmaku_seg.elems[0],as_utf8=True))
```

输出：

```
id: 27532611677585408
progress: 300507
mode: 1
fontsize: 25
color: 16777215
midHash: "2a28d4a6"
content: "章北海的老爹"
ctime: 1579621359
idStr: "27532611677585408"
```

## 获取历史弹幕xml接口

<details>
<summary>查看折叠内容：</summary>

> https://api.bilibili.com/x/v2/dm/history

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**注：查询历史弹幕需要登录**

结果为[标准xml格式弹幕](danmaku_xml.md#弹幕格式)

**使用deflate压缩，注意解码**

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注       |
| ------ | ---- | -------- | ------ | ---------- |
| type   | num  | 1        | 必要   |            |
| oid    | num  | 视频cid  | 必要   |            |
| date   | str  | 弹幕日期 | 必要   | YYYY-MM-DD |

**示例：**

获取视频`av84271171(cid=144541892)`2020-01-21的历史弹幕

```shell
curl -G 'https://api.bilibili.com/x/v2/dm/history' \
--data-urlencode 'type=1' \
--data-urlencode 'oid=144541892' \
--data-urlencode 'date=2020-01-21' \
-b 'SESSDATA=xxx' \
--compressed -o 'danmaku.xml' 
```

<details>
<summary>查看响应示例：</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<i>
    <chatserver>chat.bilibili.com</chatserver>
    <chatid>144541892</chatid>
    <mission>0</mission>
    <maxlimit>1500</maxlimit>
    <state>0</state>
    <real_name>0</real_name>
    <d p="473.43400,1,25,15138834,1579622380,0,ec16f2d,27532609919123456">敬礼</d>
    <d p="3.10200,1,25,16777215,1579622362,0,a2bd7474,27532609920696320">悄默声的更新啊怎么</d>
    <d p="17.52300,1,25,16777215,1579622357,0,972c932b,27532609906016258">久等了</d>
    <d p="40.81800,1,25,16777215,1579622343,0,bbca6701,27532609906540546">不都是乱纪元才浸泡</d>
    <d p="243.39800,1,25,15138834,1579622336,0,77b00ed9,27532609924890624">已阅，狗屁不通。大字报在地上搞搞就行，别弄到天上去</d>
    <d p="559.80000,1,25,16777215,1579622334,0,9affc7f5,27532609909686274">CSSC。。。</d>
    <d p="398.29700,1,25,16777215,1579622331,0,18d4707,27532609926463488">看到了个寂寞</d>
    <d p="34.81000,1,25,38979,1579622327,0,319d7700,27532609926987776">有耳朵了!</d>
    <d p="18.65700,1,25,16777215,1579622321,0,bbca6701,27532609912307714">雪天不用浸泡吧</d>
    <d p="305.99800,1,25,16777215,1579622316,0,878c315b,27532609928560640">未来史学派</d>
    <d p="7.86200,1,25,16777215,1579622309,0,c5136613,27532609913880578">浸泡！！！！！！！</d>
    <d p="368.95600,1,25,16777215,1579622302,0,18d4707,27532609914404866">章召忠</d>
    <d p="25.19800,1,25,16777215,1579622286,0,4dab6898,27532609931706368">mi24av</d>
    <d p="41.10100,1,25,16777215,1579622274,0,33d31036,27532609932230656">泪奔</d>
    <d p="627.69800,1,25,16777215,1579622264,0,d79a826a,27532609933279232">组建太空军</d>
    <d p="310.58900,1,25,16777215,1579622243,0,18d4707,27532609918074882">是未来史学派？</d>
    <d p="723.34800,1,25,16777215,1579622239,0,844fa9e7,27532609919123458">刘培强还行</d>
    …………
<i>
```

</details>

</details>
