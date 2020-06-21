# 通知消息

**本页所有操作均需登录（SESSDATA）**

## 未读消息数

> http://api.bilibili.com/x/msgfeed/unread

*方式：GET*

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        | 作用尚不明确                  |
| data    | obj  | 信息本体 |                               |

data 对象：

| 字段    | 类型 | 内容           | 备注         |
| ------- | ---- | -------------- | ------------ |
| at      | num  | 未读at数       |              |
| chat    | num  | 0              | 作用尚不明确 |
| like    | num  | 未读点赞数     |              |
| reply   | num  | 未读回复数     |              |
| sys_msg | num  | 未读系统通知数 |              |
| up      | num  | 0              | 作用尚不明确 |

**示例：**

以下信息代表了未读点赞数为`10`，未读回复数为`3`，未读at消息数为`1`，未读系统通知数为`1`

http://api.bilibili.com/x/msgfeed/unread

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"at": 1,
		"chat": 0,
		"like": 10,
		"reply": 3,
		"sys_msg": 1,
		"up": 0
	}
}
```

