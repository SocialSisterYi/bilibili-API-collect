# 私信

**本页所有操作均需登录（SESSDATA）**

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
| ttl     | num  | 1        | 作用尚不明确                |
| data    | obj  | 信息本体 |                             |

`data` 对象：

| 字段            | 类型 | 内容                 | 备注         |
| --------------- | ---- | -------------------- | ------------ |
| unfollow_unread | num  | 未关注用户未读私信数 |              |
| follow_unread   | num  | 已关注用户未读私信数 |              |
| _gt_            | num  | 0                    | 作用尚不明确 |

**示例：**

以下信息代表了为未关注用户未读私信数为`10`条，已关注用户未读私信数为`3`条

```shell
curl 'http://api.vc.bilibili.com/session_svr/v1/session_svr/single_unread'\
-b 'SESSDATA=xxx'
```

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



## 发送私信

> http://api.vc.bilibili.com/web_im/v1/web_im/send_msg

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（application/x-www-form-urlencoded）**

| 参数名             | 类型       | 内容      | 必要性 | 备注                                   |
| ------------------ | ---------- | --------- | ------ | -------------------------------------- |
| msg[sender_uid]    | num        | 发送者uid | 必要   |                                        |
| msg[receiver_id]   | num        | 接收者uid | 必要   |                                        |
| msg[receiver_type] | num        | 1         | 必要   |                                        |
| msg[msg_type]      | num        |           | 必要   | 1:发送文字<br>2:发送图片<br>5:撤回消息 |
| msg[msg_status]    | num        | 0         | 非必要 |                                        |
| msg[content]       | obj \| num | 私信内容  | 必要   | 撤回消息时为num                        |
| csrf_token         | str        |           | 必要   | 登录后的bili_jct                       |

`msg[content]`对象（发送文字）：

| 字段    | 类型 | 内容     | 备注 |
| ------- | ---- | -------- | ---- |
| content | str  | 私信内容 |      |



`msg[content]`对象（发送图片）：

| 字段     | 类型 | 内容       | 必要性 | 备注                         |
| -------- | ---- | ---------- | ------ | :--------------------------- |
| url      | str  | 图片的url  | 必要   | 可以先上传第三方图床         |
| width    | num  | 图片的宽   | 非必要 | 单位：像素                   |
| height   | num  | 图片的高   | 非必要 | 单位：像素                   |
| type     | str  | 图片的类型 | 非必要 | 例如：jpeg                   |
| original | num  | 1          | 非必要 | **作用未知**                 |
| size     | num  | 文件大小   | 非必要 | 单位：千字节<br>__向上取整__ |



<!--`msg[content]`撤回消息：msg_key-->



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

给B站用户`-1`发一条文字私信：

> up主你好，
>
> 催更![doge](https://s1.ax1x.com/2020/07/23/ULJEfU.png)

```shell
正文参数：
	msg[sender_uid] = 你的uid
	msg[receiver_id] = -1
	msg[receiver_type] = 1
	msg[msg_type] = 1
	msg[content] = {"content": "up主你好，\n催更[doge]"}
	csrf_token = 登录后的bili_jct
cookies:
	SESSDATA = 登录后的SESSDATA
```

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

给B站用户`-1`发一条图片私信：

> <img src="https://i1.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg" style="zoom:50%;" >

```shell
正文参数：
	msg[sender_uid] = 你的uid
	msg[receiver_id] = -1
	msg[receiver_type] = 1
	msg[msg_type] = 2
	msg[content] = {"url": "https://i1.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg"}
	csrf_token = 登录后的bili_jct
cookies:
	SESSDATA = 登录后的SESSDATA
```

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

