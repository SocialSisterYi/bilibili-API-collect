# 大会员签到

## 大积分签到

> https://api.bilibili.com/pgc/activity/score/task/sign

*请求方式：POST*

认证方式：Cookie (SESSDATA) / access_key

Cookie 鉴权方式下需要满足以下条件：
- `Referer`在`*.bilibili.com`域名下
- `SESSDATA` 需要进行 url 编码，即 `,` 替换为 `%2C`

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                    | 必要性         | 备注 |
| ---------- | ---- | ----------------------- | -------------- | ---- |
| access_key | str  | APP登录Token            | APP方式必要    |      |
| csrf       | str  | CSRF Token (位于cookie) | 非必要         |      |

**json回复：**

根对象：

| 字段名  | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 响应码   | 0：成功<br />-101：账号未登录<br/>-401：非法访问<br/>-403：访问权限不足 |
| message | str  | 错误信息 |                                                              |

**示例：**

web 方式：

```shell
curl 'https://api.bilibili.com/pgc/activity/score/task/sign' \
    --data-urlencode 'csrf=xxx' \
	-b 'SESSDATA=xxx' \
	--referer 'https://www.bilibili.com'
```

APP 方式：

```shell
curl 'https://api.bilibili.com/pgc/activity/score/task/sign' \
	--data-urlencode 'access_key=xxx'
```

<details>
<summary>查看响应示例：</summary>


```json
{
    "code": 0,
    "message": "success"
}
```

</details>
