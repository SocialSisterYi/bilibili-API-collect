# 图文操作

## 删除动态

> https://api.bilibili.com/x/dynamic/feed/operate/remove

*请求方法: POST*

认证方式：Cookie (SESSDATA)

**URL 参数:**

| 参数名   | 类型   | 内容 | 必要性 | 备注 |
| -------- | ------ | ---- | ------ | ---- |
| csrf     | string | CSRF Token (即 Cookie 中 bili_jct) | 必要 | |
| platform | string | 平台标识 | 不必要 | 如 `web` |

**正文参数 (application/json):**

根对象:

| 参数名     | 类型   | 内容           | 必要性 | 备注 |
| ---------- | ------ | -------------- | ------ | ---- |
| dyn_id_str | string | 动态的 opus id | 必要   |      |
| dyn_type   | number | 动态类型?      | 不必要 |      |
| rid_str    | string |                | 不必要 |      |

**JSON 回复:**

根对象:

| 字段 | 类型   | 内容   | 备注 |
| ---- | ------ | ------ | ---- |
| code | number | 返回值 | 0: 成功<br />-101: 帐号未登录<br />-111: csrf 校验失败<br />-400: 请求错误<br />4101001: 参数错误<br />4101144: 只能删除自身的动态 |
| message | string | 错误信息 | 成功时为 `0` |
| ttl  | number | `1`    |      |
| data | object | 空对象 |      |

**示例:**

删除动态 `667831766353969169`

```shell
curl 'https://api.bilibili.com/x/dynamic/feed/operate/remove' \
--url-query 'csrf=05fa8d65755655c2893d40d3692d4c70' \
-H 'content-type: application/json'
--data-raw '{"dyn_id_str":"667831766353969169"}' \
-b 'SESSDATA=xxxxxx' \
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {}
}
```

</details>

## 删除专栏

> <https://member.bilibili.com/x/web/article/delete>

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（application/x-www-form-urlencoded）：**

| 参数名 | 类型 | 内容                     | 必要性 | 备注 |
| ------ | ---- | ------------------------ | ------ | ---- |
| aid    | num  | 文章cvid                 | 必要   |      |
| csrf   | str  | CSRF Token（位于cookie） | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注      |
| ------- | ---- | -------- | --------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />-404：无此项<br />37104：无权限操作他人专栏 |
| message | str  | 错误信息 | 默认为`0` |
| ttl     | num  | 1        |           |

**示例：**

```shell
curl 'https://member.bilibili.com/x/web/article/delete' \
  --data-urlencode 'aid=114514' \
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
