# 弹幕点赞查询

## 查询指定dmid的点赞数

> https://api.bilibili.com/x/v2/dm/thumbup/stats

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容              | 必要性 | 备注                  |
| ------ | ---- | ----------------- | ------ | --------------------- |
| oid    | num  | 视频 cid          | 必要   |                       |
| ids    | nums | 欲查询的弹幕 dmid | 必要   | 多个 id 之间用`,`分隔 |

**json回复：**

根对象：

| 字段    | 类型 | 内容                       | 备注                        |
| ------- | ---- | -------------------------- | --------------------------- |
| code    | num  | 返回值                     | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息                   | 默认为 0                    |
| ttl     | num  | 1                          |                             |
| data    | obj  | 弹幕 id 与之对应数据的 Map |                             |

`data`对象：

| 字段        | 类型 | 内容                       | 备注 |
| ----------- | ---- | -------------------------- | ---- |
| {弹幕 dmid} | obj  | {弹幕 dmid} 对应的点赞信息 |      |

`{弹幕 dmid}`对象：

| 字段                 | 类型 | 内容                   | 备注                                                    |
| -------------------- | ---- | ---------------------- | ------------------------------------------------------- |
| likes                | num  | 对应弹幕所获得的点赞数 |                                                         |
| user_like            | num  | 当前用户是否点赞       | 0：未点赞<br />1：已点赞<br />需要登录（Cookie 或 APP） |
| id_str               | str  | 弹幕 dmid 字符串形式   |                                                         |
| show_threshold       | num  | （？）                 |                                                         |
| reply_count          | num  | （？）                 |                                                         |
| gray_release_control | obj  | （？）                 |                                                         |

`gray_release_control`对象：

| 字段          | 类型 | 内容   | 备注 |
| ------------- | ---- | ------ | ---- |
| show_dm_reply | bool | （？） |      |

**示例：**

获取视频 BV1AP411d7Qa 1P（cid=1131648710）下的几个弹幕 dmid`1318231376180646144,1318231518484950784,1318231736680887808`

```bash
curl -G 'https://api.bilibili.com/x/v2/dm/thumbup/stats' \
	--data-urlencode 'oid=1131648710' \
	--data-urlencode 'ids=1318231376180646144,1318231518484950784,1318231736680887808' \
	-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "1318231376180646144": {
            "likes": 0,
            "user_like": 0,
            "id_str": "1318231376180646144",
            "show_threshold": 10,
            "reply_count": 0,
            "gray_release_control": {
                "show_dm_reply": false
            }
        },
        "1318231518484950784": {
            "likes": 0,
            "user_like": 0,
            "id_str": "1318231518484950784",
            "show_threshold": 10,
            "reply_count": 0,
            "gray_release_control": {
                "show_dm_reply": false
            }
        },
        "1318231736680887808": {
            "likes": 0,
            "user_like": 0,
            "id_str": "1318231736680887808",
            "show_threshold": 10,
            "reply_count": 0,
            "gray_release_control": {
                "show_dm_reply": false
            }
        }
    }
}
```

</details>
