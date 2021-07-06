# 私信

- [未读私信数](#未读私信数)
- [发送私信（web端）](#发送私信（web端）)

---

## 未读私信数

> http://api.vc.bilibili.com/session_svr/v1/session_svr/single_unread

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-6：账号未登录 |
| message | str  | 错误信息 | 默认为ok                    |
| ttl     | num  | 1        |                             |
| data    | obj  | 信息本体 |                             |

`data` 对象：

| 字段            | 类型 | 内容                 | 备注 |
| --------------- | ---- | -------------------- | ---- |
| unfollow_unread | num  | 未关注用户未读私信数 |      |
| follow_unread   | num  | 已关注用户未读私信数 |      |
| _gt_            | num  | 0                    |      |

**示例：**

以下信息代表了为未关注用户未读私信数为`1`条，已关注用户未读私信数为`6`条

```shell
curl 'http://api.vc.bilibili.com/session_svr/v1/session_svr/single_unread' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"msg": "ok",
	"message": "ok",
	"data": {
		"unfollow_unread": 1,
		"follow_unread": 6,
		"_gt_": 0
	}
}
```

</details>

## 发送私信（web端）

> http://api.vc.bilibili.com/web_im/v1/web_im/send_msg

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（application/x-www-form-urlencoded）：**

| 参数名              | 类型                                  | 内容                     | 必要性 | 备注                                   |
| ------------------ | ------------------------------------ | ------------------------ | ------ | -------------------------------------- |
| msg[sender_uid]    | num                                  | 发送者UID                | 必要   |                                        |
| msg[receiver_id]   | num                                  | 接收者UID                | 必要   |                                        |
| msg[receiver_type] | num                                  | 1                        | 必要   | 固定为1                                |
| msg[msg_type]      | num                                  | 消息类型                 | 必要   | 1:发送文字<br>2:发送图片<br>5:撤回消息      |
| msg[msg_status]    | num                                  | 0                        | 非必要 |                                        |
| msg[dev_id]        | string                               | 372778FD-E359-461D-86A3-EA2BCC6FF52A | 必要 |  **获取方式在下面**            |
| msg[timestamp]     | num                                  | 时间戳（秒）               | 必要 |                                         |
| msg[content]       | 发送文字时：str<br />撤回消息时：num     | 消息内容                 | 必要   | **详见下表**                             |
| csrf_token         | str                                  | CSRF Token（位于cookie） | 必要   |                                        |

---

**dev_id的获取**

以JS为例：

```javascript
const deviceid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (name) {
  let randomInt = 16 * Math.random() | 0;
  return ("x" === name ? randomInt : 3 & randomInt | 8).toString(16).toUpperCase()
}));
```

代码来自 [andywang425/BLTH](https://github.com/andywang425/BLTH/blob/45fe93e31754ca8bf07059d46266398e787dbf45/B%E7%AB%99%E7%9B%B4%E6%92%AD%E9%97%B4%E6%8C%82%E6%9C%BA%E5%8A%A9%E6%89%8B.js#L6618)

---

`msg[content]`消息内容：

当发送文字时（`msg[msg_type]=1`）：

该参数为json序列字串

根对象：

| 字段    | 类型 | 内容     | 备注 |
| ------- | ---- | -------- | ---- |
| content | str  | 私信内容 |      |

当发送图片时（`msg[msg_type]=2`）：

该参数为json序列字串

根对象：

| 字段     | 类型 | 内容     | 备注                                          |
| -------- | ---- | -------- | :-------------------------------------------- |
| url      | str  | 图片url  | 默认为B站相簿图片上传通道<br />也可用三方图床 |
| width    | num  | 图片的宽 | 单位：像素（非必要）                          |
| height   | num  | 图片的高 | 单位：像素（非必要）                          |
| type     | str  | 图片格式 | （非必要）                                    |
| original | num  | 1        | **作用未知**（非必要）                        |
| size     | num  | 文件大小 | 单位：千字节（非必要）<br>__向上取整__        |

当撤回消息时（`msg[msg_type]=5`）：

该参数为数值，为目标消息的` msg_key `

**json回复：**

根对象：
| 字段    | 类型 | 内容     | 备注        |
| ------- | ---- | -------- | ----------- |
| code    | num  | 返回值   | 0：成功<br> |
| message | str  | 错误信息 | 默认为ok    |
| msg     | str  | 错误信息 | 默认为ok    |
| data    | obj  | 主体     | 出错时为空  |

`data`对象：

| 字段    | 类型 | 内容 | 备注         |
| ------- | ---- | ---- | ------------ |
| msg_key | num  |      | 作用尚不明确 |
| \_gt\_  | num  | 0    | 作用尚不明确 |

**示例：**

给目标用户`UID=1`发一条文字私信：

> up主你好，
>
> 催更[doge]

```shell
curl 'http://api.vc.bilibili.com/web_im/v1/web_im/send_msg' \
--data-urlencode 'msg[sender_uid]=293793435' \
--data-urlencode 'msg[receiver_id]=1' \
--data-urlencode 'msg[receiver_type] =1' \
--data-urlencode 'msg[msg_type]=1' \
--data-urlencode 'msg[content]={"content":"up主你好，\n催更[doge]"}' \
--data-urlencode 'csrf_token=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code":0,
    "msg":"ok",
    "message":"ok",
    "data":{
        "msg_key":6852559688104417870,
	"_gt_":0
    }
}
```

</details>

给目标用户`UID=1`发一条图片私信：

> <img src="https://i1.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg" style="zoom:50%;" >

```shell
curl 'http://api.vc.bilibili.com/web_im/v1/web_im/send_msg' \
--data-urlencode 'msg[sender_uid]=293793435' \
--data-urlencode 'msg[receiver_id]=1' \
--data-urlencode 'msg[receiver_type] =1' \
--data-urlencode 'msg[msg_type]=2' \
--data-urlencode 'msg[content]={"url":https://i1.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg}' \
--data-urlencode 'csrf_token=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code":0,
    "msg":"ok",
    "message":"ok",
    "data":{
        "msg_key":6852570013146024354,
        "_gt_":0
    }
}
```

</details>
