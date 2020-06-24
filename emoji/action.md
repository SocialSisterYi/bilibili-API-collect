# 表情操作

**本页所有操作均需登录（SESSDATA）**

## 添加表情包

> http://api.bilibili.com/x/emote/package/add

*方式：POST*

只能添加有会员权限或已购买的表情包

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                | 必要性 | 备注                             |
| ---------- | ---- | ------------------- | ------ | -------------------------------- |
| package_id | num  | 表情包ID            | 必要   |                                  |
| business   | str  | 使用场景            | 必要   | reply：评论区<br />dynamic：动态 |
| csrf       | str  | cookies中的bili_jct | 必要   |                                  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />-403：访问权限不足 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | **作用尚不明确**                                             |

**示例：**

添加ID为`25`的表情包，使用场景为评论区

curl -b "SESSDATA=xxx" -d "package_id=25&business=reply&csrf=xxx" "http://api.bilibili.com/x/emote/package/add"

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```



## 移除表情包

> http://api.bilibili.com/x/emote/package/remove

*方式：POST*

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                | 必要性 | 备注                             |
| ---------- | ---- | ------------------- | ------ | -------------------------------- |
| package_id | num  | 表情包ID            | 必要   |                                  |
| business   | str  | 使用场景            | 必要   | reply：评论区<br />dynamic：动态 |
| csrf       | str  | cookies中的bili_jct | 必要   |                                  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />-403：访问权限不足 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | **作用尚不明确**                                             |

**示例：**

移除ID为`25`的表情包，使用场景为评论区

curl -b "SESSDATA=xxx" -d "package_id=25&business=reply&csrf=xxx" "http://api.bilibili.com/x/emote/package/remove"

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

