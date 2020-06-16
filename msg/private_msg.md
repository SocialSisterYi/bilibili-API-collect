# 私信

**本页所有操作均需登录（SESSDATA）**

## 未读私信数

> http://api.vc.bilibili.com/session_svr/v1/session_svr/single_unread

*方式：GET*

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-6：账号未登录 |
| message | str  | 错误信息 | 默认为ok                    |
| ttl     | num  | 1        | 作用尚不明确                |
| data    | obj  | 信息本体 |                             |

data 对象：

| 字段            | 类型 | 内容                 | 备注         |
| --------------- | ---- | -------------------- | ------------ |
| unfollow_unread | num  | 未关注用户未读私信数 |              |
| follow_unread   | num  | 已关注用户未读私信数 |              |
| _gt_            | num  | 0                    | 作用尚不明确 |

**示例：**

以下信息代表了为未关注用户未读私信数为`10`条，已关注用户未读私信数为`3`条

http://api.vc.bilibili.com/session_svr/v1/session_svr/single_unread

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

