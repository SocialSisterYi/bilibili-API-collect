# 签到

> https://manga.bilibili.com/twirp/activity.v1.Activity/ClockIn

*请求方式：POST*

认证方式：Cookie（SESSDATA）/ APP

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注                                                         |
| ---------- | ---- | ------------------------ | -------------- | ------------------------------------------------------------ |
| platform | str  | 平台           | 必要    |   android                                                           |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num / str  | 返回值   | 0：成功<br />invalid_argument：今日已签到 |
| msg | str  | 错误信息 | 成功：空<br />已签到：clockin clockin is duplicate                                                      |
| meta     | obj  | 错误信息       |    今日已签到时存在                                                          |

<details>
<summary>成功示例：</summary>

```json
{
  "code": 0,
  "msg": "",
  "data": {}
}
```

</details>

<details>
<summary>今日已签到示例：</summary>

```json
{
  "code": "invalid_argument",
  "msg": "clockin clockin is duplicate",
  "meta": {
    "argument": "clockin"
  }
}
```

</details>