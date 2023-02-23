# 表情操作

## 添加表情包

> https://api.bilibili.com/x/emote/package/add

*请求方式：POST*

认证方式：Cookie（SESSDATA）

只能添加有会员权限或已购买的表情包

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                     | 必要性 | 备注                             |
| ---------- | ---- | ------------------------ | ------ | -------------------------------- |
| package_id | num  | 表情包id                 | 必要   |                                  |
| business   | str  | 使用场景                 | 必要   | reply：评论区<br />dynamic：动态 |
| csrf       | str  | CSRF Token（位于cookie） | 必要   |                                  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />-403：访问权限不足 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

添加id为`25`的表情包，使用场景为评论区

```shell
curl 'https://api.bilibili.com/x/emote/package/add' \
--data-urlencode 'package_id=25' \
--data-urlencode 'business=reply' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>

## 移除表情包

> https://api.bilibili.com/x/emote/package/remove

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                     | 必要性 | 备注                             |
| ---------- | ---- | ------------------------ | ------ | -------------------------------- |
| package_id | num  | 表情包id                 | 必要   |                                  |
| business   | str  | 使用场景                 | 必要   | reply：评论区<br />dynamic：动态 |
| csrf       | str  | CSRF Token（位于cookie） | 必要   |                                  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />-403：访问权限不足 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

移除id为`25`的表情包，使用场景为评论区

```shell
curl 'https://api.bilibili.com/x/emote/package/remove' \
--data-urlencode 'package_id=25' \
--data-urlencode 'business=reply' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```

</details>
