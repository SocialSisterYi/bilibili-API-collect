# 通知消息

## 获取未读消息数

> https://api.bilibili.com/x/msgfeed/unread
> https://api.vc.bilibili.com/x/im/web/msgfeed/unread (新接口)

*请求方式：GET*

认证方式：Cookie（SESSDATA）

本接口不会返回未读的私信数，要获取未读的私信数请参阅[未读私信数](private_msg.md#未读私信数)相关说明

**URL参数:**

| 参数名   | 类型 | 内容             | 必要性 | 备注                      |
| -------- | ---- | ---------------- | ------ | ------------------------- |
| build    | num  | 客户端内部版本号 | 非必要 | 默认为 `0`                |
| mobi_app | str  | 平台标识         | 非必要 | 可为 `web` 等             |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        |                               |
| data    | obj  | 信息本体 |                               |

`data` 对象：

| 字段          | 类型 | 内容               | 备注                       |
| ------------- | ---- | ------------------ | -------------------------- |
| at            | num  | 未读at数           |                            |
| chat          | num  | 0                  | 仅旧接口，**作用尚不明确** |
| coin          | num  | 未读投币数         |                            |
| danmu         | num  | 未读弹幕数         |                            |
| favorite      | num  | 未读收藏数         |                            |
| like          | num  | 未读点赞数         |                            |
| recv_like     | num  | 未读点赞数         | 同 `like`                  |
| recv_reply    | num  | 未读回复数         | 同 `reply`                 |
| reply         | num  | 未读回复数         |                            |
| sys_msg       | num  | 未读系统通知数     |                            |
| sys_msg_style | num  | 1                  | 仅新接口, **作用尚不明确** |
| up            | num  | 未读UP主助手信息数 |                            |

**示例：**

以下信息代表了未读点赞数为10，未读回复数为4，未读at消息数为3，未读系统通知数为2，未读UP主助手信息数为1

```shell
curl 'https://api.vc.bilibili.com/x/im/web/msgfeed/unread' \
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
		"at": 3,
		"chat": 0,
		"coin": 0,
		"danmu": 0,
		"favorite": 0,
		"like": 10,
		"recv_like": 10,
		"recv_reply": 4,
		"reply": 4,
		"sys_msg": 2,
		"sys_msg_style": 1,
		"up": 1
	}
}
```

</details>
