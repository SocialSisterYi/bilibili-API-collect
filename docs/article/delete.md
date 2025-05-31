# 删除专栏

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
