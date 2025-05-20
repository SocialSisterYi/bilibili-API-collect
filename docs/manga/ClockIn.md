# 签到

> https://manga.bilibili.com/twirp/activity.v1.Activity/ClockIn

*请求方式：POST*

认证方式：Cookie（SESSDATA）/ APP

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名      | 类型  | 内容 | 必要性 | 备注      |
|----------|-----|----|-----|---------|
| platform | str | 平台 | 必要  | android |
| device   | str | 平台 | 非必要 | h5      |

**正文参数（ application/json ）：**

| 参数名  | 类型  | 内容   | 必要性 | 备注    |
|------|-----|------|-----|-------|
| type | num |      | 非必要 | 补签时使用 |
| date | str | 补签日期 | 必要  | 补签时使用 |

**json回复：**

根对象：

| 字段   | 类型        | 内容   | 备注                                         |
|------|-----------|------|--------------------------------------------|
| code | num / str | 返回值  | 0：成功<br />invalid_argument：今日已签到           |
| msg  | str       | 错误信息 | 成功：空<br />已签到：clockin clockin is duplicate |
| meta | obj       | 错误信息 | 今日已签到时存在                                   |
| data | obj       |      |                                            |

**示例：**

普通签到：

```bash
curl -L -X POST 'https://manga.bilibili.com/twirp/activity.v1.Activity/ClockIn' \
-H 'Cookie: SESSDATA=xxx' \
-H 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'platform=android'
```

<details>
<summary>签到成功：</summary>

```json
{
  "code": 0,
  "msg": "",
  "data": {}
}
```

</details>

<details>
<summary>今日已签到：</summary>

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

补签：

```bash
curl -L 'https://manga.bilibili.com/twirp/activity.v1.Activity/ClockIn?platform=android' \
-H 'Cookie: SESSDATA=xxx' \
-H 'content-type: application/json;charset=UTF-8' \
-d '{"type":0,"date":"2023-02-15"}'
```

<details>
<summary>补签成功：</summary>

```json
{
  "code": 0,
  "msg": "",
  "data": {}
}
```

</details>

# 查询签到状态

> https://manga.bilibili.com/twirp/activity.v1.Activity/GetClockInInfo

*请求方式：POST*

认证方式：Cookie（SESSDATA）/ APP

**json回复：**

根对象：

| 字段   | 类型  | 内容   | 备注   |
|------|-----|------|------|
| code | num | 返回值  | 0：成功 |
| msg  | str | 错误信息 | 空    |
| data | obj | 信息本体 |      |

`data` 对象：

| 字段                | 类型    | 内容               | 备注               |
|-------------------|-------|------------------|------------------|
| day_count         | num   | 连续签到天数           |                  |
| status            | num   | 今日是否已签到          | 0：未签到<br />1：已签到 |
| credit_icon       | str   |                  |                  |
| sign_before_icon  | str   |                  |                  |
| sign_today_icon   | str   |                  |                  |
| breathe_icon      | str   |                  |                  |
| new_credit_x_icon | str   |                  |                  |
| coupon_pic        | str   |                  |                  |
| points            | array | 一次签到周期中每次签到可获得点数 |                  |
| point_infos       | array |                  |                  |

`point_infos`数组中的对象：

| 字段           | 类型   | 内容      | 备注 |
|--------------|------|---------|----|
| point        | num  | 签到可获取积分 |    |
| origin_point | num  |         |    |
| is_activity  | bool |         |    |
| title        | str  | 签到奖励描述  |    |

**示例：**

```bash
curl -L -X POST 'https://manga.bilibili.com/twirp/activity.v1.Activity/GetClockInInfo' \
-H 'Cookie: SESSDATA=xxx'
```

<details>
<summary>成功：</summary>

```json
{
  "code": 0,
  "msg": "",
  "data": {
    "day_count": 58,
    "status": 1,
    "points": [
      10,
      20,
      20,
      10,
      10,
      10,
      30
    ],
    "credit_icon": "https://i0.hdslb.com/bfs/static/manga/artifact/sign-resource/v2/9da6QImiK_w192_h192.png",
    "sign_before_icon": "https://i0.hdslb.com/bfs/static/manga/artifact/sign-resource/v2/BuA6z3lhN_w192_h192.png",
    "sign_today_icon": "https://i0.hdslb.com/bfs/static/manga/artifact/sign-resource/v2/TWSLUHbbg_w192_h192.png",
    "breathe_icon": "http://i0.hdslb.com/bfs/static/manga/artifact/sign-resource/anime.breathe.svga",
    "point_infos": [
      {
        "point": 10,
        "origin_point": 10,
        "is_activity": false,
        "title": "10积分"
      },
      {
        "point": 20,
        "origin_point": 20,
        "is_activity": false,
        "title": "20积分"
      },
      {
        "point": 20,
        "origin_point": 20,
        "is_activity": false,
        "title": "20积分"
      },
      {
        "point": 10,
        "origin_point": 10,
        "is_activity": false,
        "title": "10积分"
      },
      {
        "point": 10,
        "origin_point": 10,
        "is_activity": false,
        "title": "10积分"
      },
      {
        "point": 10,
        "origin_point": 10,
        "is_activity": false,
        "title": "10积分"
      },
      {
        "point": 30,
        "origin_point": 30,
        "is_activity": false,
        "title": "30积分+福利券"
      }
    ],
    "new_credit_x_icon": "https://i0.hdslb.com/bfs/static/manga/artifact/sign-resource/v2/QP5DsW2S_w192_h192.png",
    "coupon_pic": "https://i0.hdslb.com/bfs/static/manga/artifact/sign-resource/v2/Yalqqoiz_w402_h162.png"
  }
}
```

</details>