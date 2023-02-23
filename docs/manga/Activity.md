# 漫画任务操作

## 分享漫画

> https://manga.bilibili.com/twirp/activity.v1.Activity/ShareComic

*请求方式：POST*

认证方式：Cookie（SESSDATA）/ APP

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名   | 类型 | 内容 | 必要性 | 备注    |
| -------- | ---- | ---- | ------ | ------- |
| platform | str  | 平台 | 必要   | android |

**json 回复：**

根对象：

| 字段 | 类型      | 内容     | 备注                                                    |
| ---- | --------- | -------- | ------------------------------------------------------- |
| code | num / str | 返回值   | 见对应表格                                              |
| msg  | str       | 错误信息 |                                                         |
| meta | obj       | 错误信息 | invalid_argument 时存在，例如 `{"argument":"platform"}` |
| data | obj       |          | `code` 为 0，`msg` 为空时存在                           |

`code` - `msg` 对应表：

| code             | code 类型 | msg                | 备注                        |
| ---------------- | --------- | ------------------ | --------------------------- |
| 0                | num       | 空                 | 分享成功，`data` 存在       |
| 0                | num       | 今日已分享         |                             |
| invalid_argument | str       | xxxx must be valid | xxxx 字段为必须，`meta`存在 |
| unauthenticated  | str       | must login         | 必须登录才能分享            |

`data` 对象：

| 字段  | 类型 | 内容     | 备注 |
| ----- | ---- | -------- | ---- |
| point | num  | 获取积分 |      |

**示例：**

```bash
curl -X POST https://manga.bilibili.com/twirp/activity.v1.Activity/ShareComic \
-b "SESSDATA=xxxxx" \
--data-urlencode 'platform=android'
```

<details>
<summary>分享成功：</summary>

```json
{
  "code": 0,
  "msg": "",
  "data": {
    "point": 5
  }
}
```

</details>

<details>
<summary>今日已分享：</summary>

```json
{
  "code": 0,
  "msg": "今日已分享"
}
```

</details>
