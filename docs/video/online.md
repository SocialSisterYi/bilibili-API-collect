# 视频在线人数

## 获取视频在线人数_web端

> https://api.bilibili.com/x/player/online/total

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容     | 必要性     | 备注               |
| ------ | ---- | -------- | ---------- | ------------------ |
| aid    | num  | 稿件avid | 必要(可选) | avid与bvid任选一个 |
| bvid   | str  | 稿件bvid | 必要(可选) | avid与bvid任选一个 |
| cid    | num  | 视频cid  | 必要       | 用于选择目标分P    |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                          |
| ------- | ---- | -------- | --------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-404：无视频 |
| message | str  | 错误信息 | 默认为0                                       |
| ttl     | num  | 1        |                                               |
| data    | obj  | 信息本体 |                                               |

`data`对象：

| 字段        | 类型 | 内容              | 备注        |
| ----------- | ---- | ----------------- | ----------- |
| total       | str  | 所有终端总计人数  | 例如`10万+` |
| count       | str  | web端实时在线人数 |             |
| show_switch | obj  | 数据显示控制      |             |

`data`中的`show_switch`对象：

| 字段  | 类型 | 内容                  | 备注 |
| ----- | ---- | --------------------- | ---- |
| total | bool | 展示所有终端总计人数  |      |
| count | bool | 展示web端实时在线人数 |      |

**示例：**

查询视频`av759949922`/`BV1y64y1q757`中1P(`392402545`)的在线人数

```shell
curl -G 'https://api.bilibili.com/x/player/online/total' \
--data-urlencode 'aid=759949922' \
--data-urlencode 'cid=392402545'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "total": "9.4万+",
        "count": "50953",
        "show_switch": {
            "total": true,
            "count": true
        }
    }
}
```

</details>

## 获取视频在线人数_APP端

> https://app.bilibili.com/x/v2/view/video/online

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容       | 必要性      | 备注            |
| ------ | ---- | ---------- | ----------- | --------------- |
| aid    | num  | 稿件avid   | 必要        |                 |
| appkey | str  | APP密钥    | APP方式必要 |                 |
| cid    | num  | 视频cid    | 必要        | 用于选择目标分P |
| ts     | num  | 当前时间戳 | APP方式必要 |                 |
| sign   | str  | APP签名    | APP方式必要 |                 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                          |
| ------- | ---- | -------- | --------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-404：无视频 |
| message | str  | 错误信息 | 默认为0                                       |
| ttl     | num  | 1        |                                               |
| data    | obj  | 信息本体 |                                               |

`data`对象：

| 字段   | 类型 | 内容             | 备注 |
| ------ | ---- | ---------------- | ---- |
| online | obj  | 所有终端总计人数 |      |

`data`中的`show_switch`对象：

| 字段   | 类型 | 内容             | 备注              |
| ------ | ---- | ---------------- | ----------------- |
| online | str  | 所有终端总计人数 | 例如`10万+人在看` |

**示例：**

查询视频`av759949922`/`BV1y64y1q757`中1P(`392402545`)的在线人数

```shell
curl -G 'https://app.bilibili.com/x/v2/view/video/online' \
--data-urlencode 'aid=759949922' \
--data-urlencode 'appkey=1d8b6e7d45233436' \
--data-urlencode 'cid=392402545' \
--data-urlencode 'ts=0' \
--data-urlencode 'sign=172dfd9941a01275eb93ce6246cd8556'
```

<details>
<summary>查看响应示例：</summary>


```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "online": {
            "total_text": "8.8万+人在看"
        }
    }
}
```

</details>