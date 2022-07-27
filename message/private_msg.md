# 私信

- [未读私信数](#未读私信数)
- [发送私信（web端）](#发送私信web端)
- [私信消息记录](#私信消息记录)
---

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

| 参数名             | 类型                                 | 内容                     | 必要性 | 备注                                   |
| ------------------ | ------------------------------------ | ------------------------ | ------ | -------------------------------------- |
| msg[sender_uid]    | num                                  | 发送者mid                | 必要   |                                        |
| msg[receiver_id]   | num                                  | 接收用户mid/应援团id     | 必要   |                                        |
| msg[receiver_type] | num                                  | 接收者类型               | 必要   | 1：用户<br />2：应援团                 |
| msg[msg_type]      | num                                  | 消息类型                 | 必要   | 1：发送文字<br />2：发送图片<br />5：撤回消息<br />6：发送自定义表情<br />7：分享稿件<br />14：分享直播 |
| msg[msg_status]    | num                                  | 0                        | 非必要 |                                        |
| msg[dev_id]        | str                                  |                          | 必要   | **获取方式在下面**                     |
| msg[timestamp]     | num                                  | 时间戳                   | 必要   | 单位为秒                               |
| msg[content]       | 撤回消息时：num<br />其他：json      | 消息内容                 | 必要   | **详见下表**                           |
| csrf               | str                                  | CSRF Token（位于cookie） | 必要   |                                        |

---

**dev_id的获取**

以JavaScript为例：

```js
const dev_id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, name => {
  let randomInt = 16 * Math.random() | 0;
  return ("x" === name ? randomInt : 3 & randomInt | 8).toString(16).toUpperCase();
});
```

代码改编自 [andywang425/BLTH](https://github.com/andywang425/BLTH/blob/45fe93e31754ca8bf07059d46266398e787dbf45/B%E7%AB%99%E7%9B%B4%E6%92%AD%E9%97%B4%E6%8C%82%E6%9C%BA%E5%8A%A9%E6%89%8B.js#L6618)

以Java为例：

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
| -------- | ---- | -------- | --------------------------------------------- |
| url      | str  | 图片url  | 默认为B站相簿图片上传通道<br />也可用三方图床 |
| width    | num  | 图片的宽 | 单位：像素（非必要）                          |
| height   | num  | 图片的高 | 单位：像素（非必要）                          |
| type     | str  | 图片格式 | （非必要）                                    |
| original | num  | 1        | **作用未知**（非必要）                        |
| size     | num  | 文件大小 | 单位：千字节（非必要）<br>__向上取整__        |

当撤回消息时（`msg[msg_type]=5`）：

该参数为数值，为目标消息的`msg_key`

当发送自定义表情时（`msg[msg_type]=6`）：

该参数为json序列字串

根对象：

| 字段     | 类型 | 内容     | 备注                                          |
| -------- | ---- | -------- | --------------------------------------------- |
| url      | str  | 表情url  | 默认为B站图片上传通道<br />也可用三方图床     |

当分享稿件时（`msg[msg_type]=7`）：

该参数为json序列字串

根对象：

| 字段     | 类型 | 内容     | 备注                                          |
| -------- | ---- | -------- | --------------------------------------------- |
| author   | str  | 稿件作者 |                                               |
| id       | num  | 稿件ID   |                                               |
| source   | num  | 稿件类型 | 2：相簿<br />5：视频<br >6：专栏<br />11：动态<br />16：剧集 |
| thumb    | str  | 稿件封面 |                                               |
| title    | str  | 稿件标题 |                                               |
| bvid     | str  | 视频BV号 | 当`source`为5时才需填写                       |

当分享直播时（`msg[msg_type]=14`）：

该参数为json序列字串

根对象：

| 字段     | 类型 | 内容     | 备注                                          |
| -------- | ---- | -------- | --------------------------------------------- |
| author   | str  | 直播UP主 |                                               |
| cover    | str  | 直播封面 |                                               |
| desc     | str  | 简介     |                                               |
| source   | str  | `直播`   |                                               |
| title    | str  | 直播标题 |                                               |
| url      | str  | 跳转链接 |                                               |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注        |
| ------- | ---- | -------- | ----------- |
| code    | num  | 返回值   | 0：成功<br> |
| message | str  | 错误信息 | 默认为ok    |
| ttl     | num  |          | 默认为1     |
| data    | obj  | 主体     | 出错时为空  |

`data`对象：

| 字段          | 类型 | 内容       | 备注           |
| ------------- | ---- | ---------- | -------------- |
| msg_key       | num  | 消息唯一id |                |
| msg_content   | str  | 发送的消息 |                |
| key_hit_infos | obj  | 警告       | 无警告为空对象 |

`data`中的`key_hit_infos`对象：

| 字段      | 类型  | 内容     | 备注         |
| --------- | ----- | -------- | ------------ |
| toast     | str   | 警告内容 |              |
| rule_id   | num   | 警告类型 |              |
| high_text | array |          | 作用尚不明确 |

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

此接口有设计缺陷，能够获取已经撤回，无法显示（如 发送私信 中msg[msg_type]=3）的消息

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名            | 类型 | 内容                 | 必要性 | 备注                 |
| ----------------- | ---- | -------------------- | ------ | -------------------- |
| sender_device_id  | num  | 发送者设备类型       | 非必要 | 默认为1              |
| talker_id         | num  | 聊天用户mid/应援团id | 必要   |                      |
| session_type      | num  | 聊天对象的类型       | 必要   | 1：用户<br />2：应援团 |
| size              | num  | 列出消息条数         | 非必要 | 默认为20             |
| build             | num  | APP编译版本号        | 非必要 | 默认为0              |
| mobi_app          | str  | APP类型              | 非必要 | 可为`web`、`android`等等 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                         |
| ------- | ---- | -------- | ---------------------------- |
| code    | num  | 返回值   | 0：成功 <br />-400：请求错误 |
| msg     | str  | 错误信息 | 默认为0                      |
| message | str  | 错误信息 | 默认为0                      |
| ttl     | num  | 1        |                              |
| data    | obj  | 数据主体 |                              |

`data`对象：

| 字段      | 类型  | 内容          | 备注 |
| --------- | ----- | ------------- | ---- |
| messages  | array | 聊天记录列表  |      |
| has_more  | num   | 0             |      |
| min_seqno | num   | 第一条消息的seqno |      |
| max_seqno | num   | 最后一条消息的seqno |      |
| e_infos   | array | 聊天表情列表  |      |

`messages`数组：

| 项   | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| 0    | obj  | 消息1     |      |
| n    | obj  | 消息(n+1) |      |
| ……   | obj  | ……        | ……   |

`messages`数组中的对象：

| 字段             | 类型  | 内容                 | 备注                                             |
| ---------------- | ----- | -------------------- | ------------------------------------------------ |
| sender_uid       | num   | 发送者mid            | 注意名称是`sender_uid`                           |
| receiver_type    | num   | 接收者类型           | 1：用户<br />2：应援团                           |
| receiver_id      | num   | 接收用户mid/应援团id | 注意名称是`receiver_id`                          |
| msg_type         | num   | 消息类型             | 1：纯文字<br />2：图片<br />5：撤回消息<br />6：自定义表情<br />7：分享稿件<br />10：通知<br />11：发布视频<br />12：发布专栏<br />13：图片链接<br />14：分享直播 |
| content          | str   | 消息内容             | `msg_type`为5时文本内为被撤回的消息id，其他为json |
| msg_seqno        | num   | 消息seqno            | 估计是作时间先后排序用                           |
| timestamp        | num   | 消息发送时间戳       | 单位为秒                                         |
| at_uids          | array | [0]                  | 作用尚不明确                                     |
| msg_key          | num   | 消息id               |                                                  |
| msg_status       | num   | 消息状态             | 0：未撤回<br />1：已撤回                         |
| notify_code      | str   | 空                   | 作用尚不明确                                     |
| new_face_version | num   | 是否使用新版表情     | 旧版表情仅支持小电视表情                         |

`e_infos`数组：

| 项   | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| 0    | obj  | 表情1     |      |
| n    | obj  | 表情(n+1) |      |
| ……   | obj  | ……        | ……   |

`e_infos`数组中的对象：

| 字段 | 类型 | 内容     | 备注                     |
| ---- | ---- | -------- | ------------------------ |
| text | str  | 表情名称 |                          |
| url  | str  | 表情链接 |                          |
| size | num  | 表情尺寸 | 1：小表情<br />2：大表情 |

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
