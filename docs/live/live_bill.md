# 直播流水

## 获取所有礼物列表

> https://api.live.bilibili.com/gift/v1/master/getGiftTypes

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注           |
| ------- | ----- | -------- | -------------- |
| code    | num   | 返回值   | 0：成功        |
| msg     | str   | 错误信息 | 默认为 success |
| message | str   | 错误信息 | 默认为 success |
| data    | array | 礼物列表 |                |

`data` 数组：

| 字段      | 类型 | 内容     | 备注                                                                           |
| --------- | ---- | -------- | ------------------------------------------------------------------------------ |
| gift_id   | num  | 礼物 id  |                                                                                |
| gift_name | str  | 礼物名称 |                                                                                |
| price     | num  | 瓜子数量 | 电池礼物为金瓜子数量，银瓜子礼物为银瓜子数量。 （金瓜子数量 / 100 = 电池数量） |

*注：特殊礼物如舰长、提督、总督等没有 `price` 字段*

<details>
<summary>查看响应示例：</summary>

```jsonc
  {
    "code": 0,
    "msg": "success",
    "message": "success",
    "data": [
      {
        "gift_id": 10001,
        "gift_name": "总督"
      },
      {
        "gift_id": 10002,
        "gift_name": "提督"
      },
      {
        "gift_id": 10003,
        "gift_name": "舰长"
      },
      {
        "gift_id": 12000,
        "gift_name": "醒目留言"
      },
      {
        "gift_id": 1,
        "price": 100,
        "gift_name": "辣条"
      },
      {
        "gift_id": 3,
        "price": 9900,
        "gift_name": "B坷垃"
      },
      {
        "gift_id": 6,
        "price": 1000,
        "gift_name": "亿圆"
      },
      {
        "gift_id": 30426,
        "price": 0,
        "gift_name": "BLS能量石"
      },
      {
        "gift_id": 30706,
        "price": 1000,
        "gift_name": "生日快乐"
      },
      {
        "gift_id": 30707,
        "price": 5200,
        "gift_name": "生日蛋糕"
      },
      {
        "gift_id": 30708,
        "price": 52000,
        "gift_name": "生日王冠"
      },
      {
        "gift_id": 31049,
        "price": 6600,
        "gift_name": "干杯"
      },
      {
        "gift_id": 31116,
        "price": 6600,
        "gift_name": "干杯"
      },
      {
        "gift_id": 31251,
        "price": 6600,
        "gift_name": "干杯"
      },
      {
        "gift_id": 31531,
        "price": 0,
        "gift_name": "PK票"
      },
      {
        "gift_id": 31588,
        "price": 19900,
        "gift_name": "星河入梦"
      },
      {
        "gift_id": 31589,
        "price": 131400,
        "gift_name": "我星永恒"
      },
      {
        "gift_id": 32276,
        "price": 0,
        "gift_name": "粉丝团灯牌"
      },
      // ...
    ]
  }
```

</details>

## 获取流水

> https://api.live.bilibili.com/xlive/revenue/v1/giftStream/getReceivedGiftStreamNextList

*请求方式：GET*

认证方式：Cookie（SESSDATA）

请求参数：

| 参数名     | 类型          | 内容                    | 必要性     | 备注                                   |
| ---------- | ------------- | ----------------------- | ---------- | -------------------------------------- |
| limit      | num           | 一页有多少条目          | 必要       |                                        |
| coin_type  | num           | 礼物类型                | 必要       | 0 为所有，1 为电池礼物，2 为银瓜子礼物 |
| begin_time | date / string | 流水的日期              | 必要       | 格式为 yyyy-MM-dd                      |
| uname      | string        | 筛选的用户名            | 非必要     |                                        |
| last_id    | num           | 上一页页末的礼物列表 id | 翻页时必要 | 见下方 `list` 数组说明                 |
| gift_id    | num           | 筛选的礼物 id           |            |                                        |

请求示例：`https://api.live.bilibili.com/xlive/revenue/v1/giftStream/getReceivedGiftStreamNextList?limit=20&coin_type=0&begin_time=2023-01-01`

请求示例（翻页时）：`https://api.live.bilibili.com/xlive/revenue/v1/giftStream/getReceivedGiftStreamNextList?last_id=13834493&limit=20&coin_type=0&begin_time=2023-01-01`

**json 回复：**

根对象：

| 字段    | 类型   | 内容     | 备注           |
| ------- | ------ | -------- | -------------- |
| code    | num    | 返回值   | 0：成功        |
| msg     | str    | 错误信息 | 默认为 success |
| message | str    | 错误信息 | 默认为 success |
| data    | object | 流水     |                |

`data` 对象：

| 字段          | 类型  | 内容           | 备注           |
| ------------- | ----- | -------------- | -------------- |
| has_more      | num   | 是否由下一页   | 1 为是，0 为否 |
| total_hamster | num   | 总的金仓鼠收益 |                |
| list          | array | 礼物列表       |                |

`list` 数组：

| 字段               | 类型       | 内容                                  | 备注                       |
| ------------------ | ---------- | ------------------------------------- | -------------------------- |
| uid                | num        | 送礼用户的 uid                        |                            |
| uname              | str        | 用户名                                |                            |
| time               | date / str | 送礼时间                              |                            |
| gift_id            | num        | 礼物 id                               |                            |
| gift_name          | str        | 礼物名字                              |                            |
| gift_img           | str        | 礼物图片链接                          |                            |
| gift_num           | num        | 礼物数量                              |                            |
| hamster            | num        | 金仓鼠数量                            |                            |
| gold               | num        | 礼物价值（金瓜子）                    |                            |
| silver             | num        | 礼物价值（银瓜子）                    |                            |
| ios_hamster        | num        | 由 iOS 端送出的礼物所收到的金仓鼠     |                            |
| normal_hamster     | num        | 一般情况下收到的金仓鼠                |                            |
| ios_gold           | num        | 由 iOS 端送出的礼物所收到的金瓜子数量 |                            |
| normal_gold        | num        | 一般情况下收到的金瓜子数量            |                            |
| is_hybrid          | bool       | 是否混合                              | 作用不明                   |
| id                 | num        | 此项 id                               | 用于翻页                   |
| is_open_platfrom   | num        | 是否开放平台                          | 作用不明                   |
| open_platfrom_rate | num        | 开放平台比率 (?)                      | 作用不明                   |
| receive_title      | str        |                                       | 作用不明 ，一般为 `"主播"` |
| room_id            | num        | 送礼房间id                            | 如果礼物为上舰，此项为 `0` |

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "list": [
      {
        "uid": 0000000000,
        "uname": "XXXXXXX",
        "time": "2023-01-01 00:00:00",
        "gift_id": 31216,
        "gift_name": "i了i了",
        "gift_img": "https://s1.hdslb.com/bfs/live/1157a445487b39c0b7368d91b22290c60fa665b2.png",
        "gift_num": 1,
        "hamster": 50,
        "gold": 100,
        "silver": 0,
        "ios_hamster": 0,
        "normal_hamster": 50,
        "ios_gold": 0,
        "normal_gold": 100,
        "is_hybrid": false,
        "id": 14269551,
        "is_open_platfrom": 0,
        "open_platfrom_rate": 0,
        "receive_title": "主播",
        "room_id": 000001
      },
      {
        "uid": 0000000000,
        "uname": "XXXXXXX",
        "time": "2023-01-01 00:00:00",
        "gift_id": 10003,
        "gift_name": "舰长",
        "gift_img": "https://i0.hdslb.com/bfs/live/f1be2a2d5b227ce72641de1ad64bcc7f9e4111c3.png",
        "gift_num": 1,
        "hamster": 69000,
        "gold": 138000,
        "silver": 0,
        "ios_hamster": 0,
        "normal_hamster": 69000,
        "ios_gold": 0,
        "normal_gold": 138000,
        "is_hybrid": false,
        "id": 14258453,
        "is_open_platfrom": 0,
        "open_platfrom_rate": 0,
        "receive_title": "主播",
        "room_id": 000000
      },
      {
        "uid": 0000000000,
        "uname": "XXXXXXX",
        "time": "2023-01-01 00:00:00",
        "gift_id": 31036,
        "gift_name": "小花花",
        "gift_img": "https://s1.hdslb.com/bfs/live/8b40d0470890e7d573995383af8a8ae074d485d9.png",
        "gift_num": 1,
        "hamster": 50,
        "gold": 100,
        "silver": 0,
        "ios_hamster": 0,
        "normal_hamster": 50,
        "ios_gold": 0,
        "normal_gold": 100,
        "is_hybrid": false,
        "id": 14243903,
        "is_open_platfrom": 0,
        "open_platfrom_rate": 0,
        "receive_title": "主播",
        "room_id": 000001
      },
      {
        "uid": 0000000000,
        "uname": "XXXXXXX",
        "time": "2023-01-01 00:00:00",
        "gift_id": 30047,
        "gift_name": "友谊的小船",
        "gift_img": "https://s1.hdslb.com/bfs/live/b33c94c51b669bd88f811ecf5f4e34a1db22a648.png",
        "gift_num": 1,
        "hamster": 2450,
        "gold": 4900,
        "silver": 0,
        "ios_hamster": 0,
        "normal_hamster": 2450,
        "ios_gold": 0,
        "normal_gold": 4900,
        "is_hybrid": false,
        "id": 14242683,
        "is_open_platfrom": 0,
        "open_platfrom_rate": 0,
        "receive_title": "主播",
        "room_id": 000001
      },
      {
        "uid": 0000000000,
        "uname": "XXXXXXX",
        "time": "2023-01-01 00:00:00",
        "gift_id": 31738,
        "gift_name": "粉丝团灯牌",
        "gift_img": "https://s1.hdslb.com/bfs/live/cbed3bb0a894369b49ceaf0b5337b4491b75ac42.png",
        "gift_num": 1,
        "hamster": 0,
        "gold": 1000,
        "silver": 1000,
        "ios_hamster": 0,
        "normal_hamster": 0,
        "ios_gold": 0,
        "normal_gold": 0,
        "is_hybrid": false,
        "id": 14237376,
        "is_open_platfrom": 0,
        "open_platfrom_rate": 0,
        "receive_title": "主播",
        "room_id": 000001
      }
    ],
    "has_more": 1,
    "total_hamster": 122050
  }
}
```

</details>
