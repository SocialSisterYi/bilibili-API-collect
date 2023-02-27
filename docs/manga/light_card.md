# 获取轻享卡信息

> https://manga.bilibili.com/twirp/card.v1.Card/GetUserLightCard

*请求方式：POST*

认证方式：Cookie（SESSDATA）/ APP

**正文参数 (application/x-www-form-urlencoded)：**

| 参数名        | 类型  | 内容             | 必要性 | 备注              |
|------------|-----|----------------|-----|-----------------|
| access_key | str | 登录`access_key` |     | 与`SESSDATA`二选其一 |

**json回复：**

根对象：

| 字段名  | 类型  | 内容   | 备注   |
|------|-----|------|------|
| code | num | 响应码  | 0：成功 |
| msg  | str |      |      |
| data | obj | 信息本体 |      |

`data`对象：

| 字段名                | 类型    | 内容             | 备注                              |
|--------------------|-------|----------------|---------------------------------|
| state              | num   | 轻享卡开通状态        | 0：未开通<br/>1：已开通                 |
| show_state         | num   |                |                                 |
| expire_date        | str   | 轻享卡到期时间        |                                 |
| receive_amount     | num   | 已领取数量          |                                 |
| save_money         | num   | 已节省漫币          |                                 |
| index              | num   | 默认选择签到周期       |                                 |
| week               | array | 一个领取周期内的领取状态信息 |                                 |
| month_reward_state | num   | 是否可选择全勤奖       | 0：不可领取<br/>1：可领取<br/>2：不可领取（灰色） |
| month_reward       | num   |                |                                 |
| cur_month_end      | str   | 全勤奖领取剩余时间      |                                 |
| server_time        | str   | 当前服务器时间        |                                 |

`week`数组中的对象：

| 字段名               | 类型  | 内容          | 备注                                             |
|-------------------|-----|-------------|------------------------------------------------|
| index             | num | 第几领取周期      | 从`1`开始                                         |
| start_time        | str | 本周期领取开始时间   | 1：待领取<br/>2：已领取<br/>3：明日可领<br/>4：已失效<br/>5：可领取 |
| end_time          | str | 本周期领取结束时间   | `同上`                                           |
| first             | num | 本周期第1天的领取状态 | `同上`                                           | 
| second            | num | 本周期第2天的领取状态 | `同上`                                           |
| third             | num | 本周期第3天的领取状态 | `同上`                                           |
| fourth            | num | 本周期第4天的领取状态 | `同上`                                           |
| full_reward_state | num | 周期全勤奖领取状态   | 1：不可领取<br/>2:可领取<br/>3：已领取                     |

**示例：**

`SESSDATA`方式：

```shell
curl -L -X POST 'https://manga.bilibili.com/twirp/card.v1.Card/GetUserLightCard' \
-H 'Cookie: SESSDATA=xxx'
```

`access_key`方式：

```shell
curl -L -X POST 'https://manga.bilibili.com/twirp/card.v1.Card/GetUserLightCard?access_key=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "msg": "",
  "data": {
    "state": 1,
    "show_state": 1,
    "expire_date": "2023-03-09T23:59:59+08:00",
    "receive_amount": 18,
    "save_money": 890,
    "index": 1,
    "week": [
      {
        "index": 1,
        "start_time": "2023-02-10T00:00:00+08:00",
        "end_time": "2023-02-16T23:59:59+08:00",
        "first": 5,
        "second": 1,
        "third": 1,
        "fourth": 1,
        "full_reward_state": 1
      },
      {
        "index": 2,
        "start_time": "2023-02-17T00:00:00+08:00",
        "end_time": "2023-02-23T23:59:59+08:00",
        "first": 1,
        "second": 1,
        "third": 1,
        "fourth": 1,
        "full_reward_state": 1
      },
      {
        "index": 3,
        "start_time": "2023-02-24T00:00:00+08:00",
        "end_time": "2023-03-02T23:59:59+08:00",
        "first": 1,
        "second": 1,
        "third": 1,
        "fourth": 1,
        "full_reward_state": 1
      },
      {
        "index": 4,
        "start_time": "2023-03-03T00:00:00+08:00",
        "end_time": "2023-03-09T23:59:59+08:00",
        "first": 1,
        "second": 1,
        "third": 1,
        "fourth": 1,
        "full_reward_state": 1
      }
    ],
    "month_reward_state": 0,
    "month_reward": 0,
    "cur_month_end": "2023-03-10T00:00:00+08:00",
    "server_time": "2023-02-10T10:59:43+08:00"
  }
}
```

</details>

# 领取轻享卡奖励

> https://manga.bilibili.com/twirp/card.v1.Card/GetLightCoupon

*请求方式：POST*

是否需要登录：`是`

认证方式：Cookie（SESSDATA）/ APP

Content-Type：`application/json`

**URL参数：**

| 参数名        | 类型  | 必填 | 内容              | 备注 |
|------------|-----|----|-----------------|----|
| access_key | str |    | 与`SESSDATA`二选其一 |    |

**正文参数（ application/json ）：**

| 参数名       | 类型  | 必填 | 内容   | 备注                   |
|-----------|-----|----|------|----------------------|
| weekIndex | num | √  | 第几周  | 从`1`开始               |
| type      | num | √  | 领取类型 | 1：领取漫读券<br/>2：领取限免卡  |

**json回复：**

根对象：

| 字段名  | 类型  | 内容  | 备注                                                                |
|------|-----|-----|-------------------------------------------------------------------|
| code | num | 响应码 | 0：成功<br/>3：今日已领取,请明日再来<br/>3：还未满足领取条件<br/>4：找不到数据~<br/>6：你点击太快了哦~ |
| msg  | str |     |                                                                   |
| data | obj |     |                                                                   |

**示例：**

`SESSDATA`方式：

```shell
curl -L -X POST 'https://manga.bilibili.com/twirp/card.v1.Card/GetLightCoupon' \
-H 'content-type: application/json; charset=utf-8' \
-H 'Cookie: SESSDATA=xxx' \
--data-raw '{"type":1,"weekIndex":1}'
```

`access_key`方式：

```shell
curl -L -X POST 'https://manga.bilibili.com/twirp/card.v1.Card/GetLightCoupon?access_key=xxx' \
-H 'content-type: application/json; charset=utf-8' \
--data-raw '{"type":1,"weekIndex":1}'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "msg": "",
  "data": {}
}
```

</details>