# 基本信息

## 获取用户钱包

> https://pay.bilibili.com/paywallet/wallet/getUserWallet

*请求方法: POST*

认证方式: Cookie (SESSDATA) (注意 `,` `*` 需要 URL 转义)

**正文参数 (application/json):**

| 参数名       | 类型 | 内容     | 必要性 | 备注                   |
| ------------ | ---- | -------- | ------ | ---------------------- |
| panelType    | num  | 面板类型 | 不必要 | 默认为 3               |
| platformType | num  | 平台类型 | 必要   | 任意有效数字, 默认为 3 |
| timestamp    | num  | 当前时间 | 不必要 | UNIX 毫秒时间戳        |
| traceId      | num  | 追踪 ID  | 不必要 | 与 timestamp 值相同    |
| version      | str  | 版本     | 不必要 | 默认 `1.0`             |

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注 |
| ------- | ---- | -------- | ---- |
| code    | num  | 返回值   | 0: 成功<br />8006000004: 缺参<br />别的错误码在 errno |
| errno   | num  | 错误码   | 8006000004: 缺参<br />800501008: 内部错误(传的不是JSON)<br />800501007: 用户未登录 |
| msg     | str  | 返回信息 | SUCCESS: 成功<br />否则为错误信息 |
| showMsg | str  | 显示信息 | 成功时为空 |
| data    | obj  | 数据本体 |      |
| success | bool | 是否成功 |      |

`data` 对象:

| 字段              | 类型 | 内容        | 备注 |
| ----------------- | ---- | ----------- | ---- |
| mid               | num  | 用户 mid    |      |
| totalBp           | num  | 总计 B 币   |      |
| defaultBp         | num  | 默认 B 币?  |      |
| iosBp             | num  | iOS B 币?   |      |
| couponBalance     | num  | 优惠券余额  |      |
| availableBp       | num  | 可用 B 币   |      |
| unavailableBp     | num  | 不可用 B 币 |      |
| unavailableReason | str  | 不可用原因  |      |
| tip               | str  | 请XXXXX     | 请投币?? |
| needShowClassBalance | num | 需要显示类余额?? | 1 |

**示例:**

```shell
curl -X POST 'https://pay.bilibili.com/paywallet/wallet/getUserWallet' \
--data-raw '{"platformType":"3"}' \
-H 'content-type: application/json' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "errno": 0,
  "msg": "SUCCESS",
  "showMsg": "",
  "data": {
    "mid": 616368979,
    "totalBp": 0.00,
    "defaultBp": 0.00,
    "iosBp": 0.00,
    "couponBalance": 0,
    "availableBp": 0.00,
    "unavailableBp": 0,
    "unavailableReason": "",
    "tip": "请XXXXX",
    "needShowClassBalance": 1
  },
  "success": true
}
```

</details>
