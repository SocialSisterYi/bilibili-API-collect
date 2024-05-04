# 私信

## 未读私信数

> https://api.vc.bilibili.com/session_svr/v1/session_svr/single_unread

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
curl 'https://api.vc.bilibili.com/session_svr/v1/session_svr/single_unread' \
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

> https://api.vc.bilibili.com/web_im/v1/web_im/send_msg

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（application/x-www-form-urlencoded）：**

| 参数名              | 类型                                  | 内容                     | 必要性 | 备注                                   |
| ------------------ | ------------------------------------ | ------------------------ | ------ | -------------------------------------- |
| msg[sender_uid]    | num                                  | 发送者mid                | 必要   |                                        |
| msg[receiver_id]   | num                                  | 接收者mid                | 必要   |                                        |
| msg[receiver_type] | num                                  | 1                        | 必要   | 固定为1                                |
| msg[msg_type]      | num                                  | 消息类型                 | 必要   | 1:发送文字<br>2:发送图片<br>5:撤回消息      |
| msg[msg_status]    | num                                  | 0                        | 非必要 |                                        |
| msg[dev_id]        | string                               | 372778FD-E359-461D-86A3-EA2BCC6FF52A | 必要 |  **获取方式在下面**            |
| msg[timestamp]     | num                                  | 时间戳（秒）               | 必要 |                                         |
| msg[new_face_version]       | num     | 表情包版本    | 非必要   | **详见下表**                             |
| msg[content]       | 发送文字时：str<br />撤回消息时：num     | 消息内容                 | 必要   | **详见下表**                             |
| csrf        | str                                  | CSRF Token（位于cookie） | 必要   |                                        |

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

以Java为例

```java
public class Util{
    private String getDevId() {
        char[] b = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'};
        char[] s = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".toCharArray();
        for (int i = 0; i < s.length; i++) {
            if ('-' == s[i] || '4' == s[i]) {
                continue;
            }
            int randomInt = (int) (16 * Math.random());
            if ('x' == s[i]) {
                s[i] = b[randomInt];
            } else {
                s[i] = b[3 & randomInt | 8];
            }
        }
        return new String(s);
    }
}
```
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
| ttl     | num  |  | 默认为1    |
| data    | obj  | 主体     | 出错时为空  |

`data`对象：

| 字段          | 类型 | 内容       | 备注         |
| ------------- | ---- | ---------- | ------------ |
| msg_key| num  | 消息唯一id |              |
| msg_content   | str  | 发送的消息 |              |
| key_hit_infos | obj  |            | 作用尚不明确 |

**示例：**

给目标用户`mid=1`发一条文字私信：

> up主你好，
>
> 催更[doge]

```shell
curl 'https://api.vc.bilibili.com/web_im/v1/web_im/send_msg' \
--data-urlencode 'msg[sender_uid]=293793435' \
--data-urlencode 'msg[receiver_id]=1' \
--data-urlencode 'msg[receiver_type] =1' \
--data-urlencode 'msg[msg_type]=1' \
--data-urlencode 'msg[dev_id] =372778FD-E359-461D-86A3-EA2BCC6FF52A' \
--data-urlencode 'msg[timestamp] =1626181379' \
--data-urlencode 'msg[content]={"content":"up主你好，\n催更[doge]"}' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{"code":0,
"message":"0",
"ttl":1,
"data":{"msg_key":6984393491767669026,
	"msg_content":"up主你好，\n催更[doge]",
	"key_hit_infos":{}}}
```

</details>

给目标用户`mid=1`发一条图片私信：

> <img src="https://i1.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg" style="zoom:50%;" >

```shell
curl 'https://api.vc.bilibili.com/web_im/v1/web_im/send_msg' \
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

## 私信消息记录

> https://api.vc.bilibili.com/svr_sync/v1/svr_sync/fetch_session_msgs

*请求方式：GET*

此接口有设计缺陷，能够获取已经撤回，无法显示（如 发送私信 中msg[msg_type]:3）的消息

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名 | 类型 | 内容     | 必要性       | 备注               |
| ------ | ---- | -------- | ------------ | ------------------ |
| sender_device_id  | num  | 发送者设备 | 可选 | 1 |
| talker_id   | num  | 聊天对象的UID | 必要 | -------------- |
| session_type   | num  | 聊天对象的类型 | 必要 | 1为用户，2为粉丝团 |
| size   | num  | 列出消息条数 | 可选 | 默认是20，最大为200 |
| build   | num  | 未知 | 可选 | 默认是0 |
| mobi_app   | str  | 设备 | 可选 | web |
| begin_seqno   | num   | 开始的序列号 | 可选 | 默认0为全部 |
| end_seqno   | num   | 结束的序列号 | 可选 | 默认0为全部 |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                         |
| ------- | ------ | -------- | ---------------------------- |
| code    | num    | 返回值   | 0：成功 <br />-400：请求错误 |
| msg | str    | 错误信息 | 默认为0                      |
| message | str    | 错误信息 | 默认为0                      |
| ttl     | num    | 1        |                  |
| data    | array | 数据列表 |                              |

`data`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| messages    | array  | 聊天记录列表    |      |
| has_more    | num  | 0 |      |
| min_seqno   | num  | 所有消息最小的序列号（最早）          |   |
| max_seqno   | num  | 所有消息最大的序列号（最晚）    |      |
| e_infos   | array  | 聊天表情列表    |      |

`messages`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| sender_uid    | num                                  | 发送者uid                |           注意名称是sender_uid                             |
| receiver_type   | num                                  |  与session_type对应              |        1为用户，2为粉丝团                        |
| receiver_id  | num                                  | 接收者uid                       |    注意名称是receiver_id                               |
| msg_type     | num                                  | 消息类型                 | 1:文字消息<br>2:图片消息<br>5:撤回的消息<br>12、13:通知      |
| content     | str                                 | 消息内容                 | 此处存在设计缺陷     |
| msg_seqno  | num  | 消息序列号，保证按照时间顺序从小到大     |   |
| timestamp   | num  | 消息发送时间戳    |      |
| at_uids   | array  | 未知   |      |
| msg_key   | num | 未知   |      |
| msg_status   | num | 消息状态   |   0   |
| notify_code   |str | 未知   |      |
| new_face_version   |num | 表情包版本 | 0或者没有是旧版，此时b站会自动转换成新版表情包，例如`[doge]` -> `[tv_doge]`；1是新版 |

`e_infos`数组：

| 项   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| text    | str  | 表情名称  |      |
| uri   | str  | 表情链接 |      |
| size   | num  | 表情尺寸          |  1 |

**示例：**

获取与目标用户`mid=123`私信记录：

```shell
curl 'https://api.vc.bilibili.com/svr_sync/v1/svr_sync/fetch_session_msgs?sender_device_id=1&talker_id=123&session_type=1&size=20&build=0&mobi_app=web' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "0",
    "message": "0",
    "ttl": 1,
    "data": {
        "messages": [
            {
                "sender_uid": 2239814,
                "receiver_type": 1,
                "receiver_id": 123,
                "msg_type": 1,
                "content": "{\"content\":\"[口罩]\"}",
                "msg_seqno": 309675413389322,
                "timestamp": 1654154093,
                "at_uids": [
                    0
                ],
                "msg_key": 7104537732714964358,
                "msg_status": 0,
                "notify_code": "",
                "new_face_version": 1
            },
            {
                "sender_uid": 2239814,
                "receiver_type": 1,
                "receiver_id": 123,
                "msg_type": 5,
                "content": "{\"content\":\"1\"}",
                "msg_seqno": 308302399586307,
                "timestamp": 1654072255,
                "at_uids": [
                    0
                ],
                "msg_key": 7104186240789226795,
                "msg_status": 0,
                "notify_code": ""
            },
        ],
        "has_more": 0,
        "min_seqno": 308188515844097,
        "max_seqno": 309675413389322,
        "e_infos": [
            {
                "text": "[口罩]",
                "url": "http://i0.hdslb.com/bfs/emote/3ad2f66b151496d2a5fb0a8ea75f32265d778dd3.png",
                "size": 1
            }
        ]
    }
}
```

</details>

