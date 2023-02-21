# 通知消息

- [未读消息数](#未读消息数)

---

## 未读消息数

> https://api.bilibili.com/x/msgfeed/unread

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        |                               |
| data    | obj  | 信息本体 |                               |

data 对象：

| 字段    | 类型 | 内容           | 备注         |
| ------- | ---- | -------------- | ------------ |
| at      | num  | 未读at数       |              |
| chat    | num  | 0              | 作用尚不明确 |
| like    | num  | 未读点赞数     |              |
| reply   | num  | 未读回复数     |              |
| sys_msg | num  | 未读系统通知数 |              |
| up      | num  | UP主助手信息数 |              |

**示例：**

以下信息代表了未读点赞数为10，未读回复数为4，未读at消息数为3，未读系统通知数为2，UP主助手信息数为1

```shell
curl 'https://api.bilibili.com/x/msgfeed/unread' \
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
		"like": 10,
		"reply": 4,
		"sys_msg": 2,
		"up": 1
	}
}
```

</details>
