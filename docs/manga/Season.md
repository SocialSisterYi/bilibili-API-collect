# 漫画赛季

**注**：漫画赛季仅在 app 端可见，但可以使用 Cookie 鉴权

## 获取赛季信息

> https://manga.bilibili.com/twirp/user.v1.Season/GetSeasonInfo

*请求方式：POST*

**注**：接口不鉴权可查看基本信息，鉴权后可查看赛季个人信息和赛季规则。

认证方式：Cookie（SESSDATA）/ APP

**json 回复：**

根对象：

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| code | num  | 返回值   |      |
| msg  | str  | 错误信息 |      |
| data | obj  | 信息本体 |      |

`data` 对象：

| 字段               | 类型  | 内容               | 备注                       |
| ------------------ | ----- | ------------------ | -------------------------- |
| current_time       | str   | 当前时间字符串     | ISO 8601                   |
| start_time         | str   | 赛季开始           | ISO 8601                   |
| end_time           | str   | 赛季结束           | ISO 8601                   |
| remain_amount      | num   | 拥有积分           | 未登录为 `0`               |
| season_id          | str   | 第几个赛季         |                            |
| tasks              | array | 待领取奖励的任务   | 未登录/没有可领取时为 `[]` |
| welfare            | array | 赛季奖励           |                            |
| next               | obj   | 未知               | 未登录为 `null`            |
| cover              | str   | 版头图片           |                            |
| today_tasks        | array | 今日的任务完成情况 |                            |
| text               | obj   | 赛季相关文案       | 未登录为 `null`            |
| season_clock_in    | obj   |                    |                            |
| announcement       | obj   | 未知               | 未登录为 `null`            |
| lottery            | obj   |                    |                            |
| mission_point_rate | str   |                    |                            |
| season_title       | str   | 赛季标题           |                            |
| point_rate         | obj   |                    |                            |
| rank               | obj   |                    |                            |

`data` 对象的 `rank`：

| 字段       | 类型 | 内容  | 备注 |
| ---------- | ---- | ----- | ---- |
| is_visible | bool | false |      |

`data` 对象的 `tasks`：

| 字段   | 类型 | 内容       | 备注                    |
| ------ | ---- | ---------- | ----------------------- |
| title  | str  | 任务描述   |                         |
| id     | str  |            |                         |
| status | num  | 任务状态   | 应该都是`1`：待领取奖励 |
| type   | num  |            | 与 today_tasks 的一致   |
| amount | num  | 可获取积分 |                         |
| ctime  | str  | 完成时间   | ISO 8601                |

`data` 对象的 `next`：

| 字段         | 类型 | 内容 | 备注 |
| ------------ | ---- | ---- | ---- |
| title        | str  | 空   |      |
| amount       | num  | 0    |      |
| gap_time     | num  | 0    |      |
| current_time | num  | 0    |      |

`data` 对象的 `text`：

| 字段         | 类型 | 内容         | 备注 |
| ------------ | ---- | ------------ | ---- |
| notice       | str  | 赛季公告     |      |
| clonckInRule | str  | 赛季签到规则 |      |

`data` 对象的 `announcement`：

| 字段     | 类型 | 内容  | 备注 |
| -------- | ---- | ----- | ---- |
| title    | str  | 空    |      |
| jump_url | str  | 空    |      |
| enable   | bool | false |      |

`data` 对象的 `point_rate`：

| 字段          | 类型 | 内容 | 备注 |
| ------------- | ---- | ---- | ---- |
| sign_in       | num  | 0    |      |
| game          | num  | 0    |      |
| daily_mission | num  | 0    |      |
| week_mission  | num  | 0    |      |

`data` 对象的 `lottery`：

| 字段                   | 类型 | 内容         | 备注 |
| ---------------------- | ---- | ------------ | ---- |
| lottery_act_id         | str  | '0'          |      |
| enable_lottery         | bool | 是否开启抽奖 |      |
| lottery_id             | str  | '0'          |      |
| advance_lottery_act_id | str  | '0'          |      |
| advance_pool_id        | str  | '0'          |      |

`data` 对象的 `season_clock_in`：

| 字段              | 类型 | 内容             | 备注 |
| ----------------- | ---- | ---------------- | ---- |
| is_super_luck     | bool |                  |      |
| draw_luck_time    | str  |                  |      |
| prize_type        | num  |                  |      |
| prize_title       | str  |                  |      |
| add_up_sign       | num  | 赛季连续签到天数 |      |
| title             | str  | 签到标题         |      |
| sign_old_amount   | num  |                  |      |
| preluck_amount    | num  |                  |      |
| continuous_days   | num  | 连续签到天数     |      |
| address_id        | str  |                  |      |
| has_super_prize   | bool |                  |      |
| subtitle          | str  | 签到子标题       |      |
| prize_image       | str  |                  |      |
| prize_target_days | num  |                  |      |
| prize_amount      | num  |                  |      |
| tomorrow_amount   | num  | 明日签到积分     |      |
| entrance_tag      | str  |                  |      |

`data` 对象的 `today_tasks`：

| 字段       | 类型       | 内容         | 备注                                        |
| ---------- | ---------- | ------------ | ------------------------------------------- |
| type       | num        |              |                                             |
| title      | str        | 任务标题     | 可能为空字符串                              |
| amount     | num        | 可获得积分   |                                             |
| status     | num        | 完成状态     | 0：未完成<br />1：待领取奖励<br />2：已完成 |
| duration   | num        | 耗时（分）   | 直接完成的为 0                              |
| comics     | comic 数组 | 任务指定漫画 | 仅`type=22`时有内容，所有账号是一致的       |
| page_url   | str        | 空           |                                             |
| progress   | num        | 已完成进度   |                                             |
| sub_id     | num        |              | `type` 一致时有效                           |
| share_type | num        | `0`          |                                             |

`today_tasks`对象的 `comics`：

| 字段           | 类型     | 内容     | 备注 |
| -------------- | -------- | -------- | ---- |
| comic_id       | num      | 漫画 id  |      |
| title          | str      | 漫画名称 |      |
| vertical_cover | str      | 漫画封面 |      |
| styles         | str 数组 | 漫画类型 |      |

`data` 对象的 `welfare`：

| 字段            | 类型 | 内容         | 备注                                                      |
| --------------- | ---- | ------------ | --------------------------------------------------------- |
| type            | num  | 奖励类型     | 200-限免卡<br/>202-漫读券<br/>203-优惠券<br/>205-最终宝箱 |
| success         | num  | 兑换状态     | 0-未兑换<br/>2-已兑换                                     |
| exchange_amount | num  | 积分消耗     |                                                           |
| boss_welfare    | bool | 最终奖励     |                                                           |
| boss_remain     | num  | 最终奖励剩余 |                                                           |
| rank            | num  | 顺序         |                                                           |
| title           | str  | 空           |                                                           |
| url             | str  | 空           |                                                           |
| kind_address_id | str  | '0'          |                                                           |

**示例：**

```bash
curl -X POST https://manga.bilibili.com/twirp/user.v1.Season/GetSeasonInfo
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "msg": "",
  "data": {
    "current_time": "2022-11-30T15:12:00+08:00",
    "start_time": "2022-11-14T00:00:00+08:00",
    "end_time": "2022-12-11T23:59:00+08:00",
    "remain_amount": 0,
    "season_id": "35",
    "tasks": [],
    "welfare": [
      {
        "type": 200,
        "success": 0,
        "exchange_amount": 100,
        "boss_welfare": false,
        "boss_remain": 0,
        "rank": 1,
        "title": "",
        "url": "",
        "kind_address_id": "0"
      },
      // 中间的省略
      {
        "type": 205,
        "success": 0,
        "exchange_amount": 0,
        "boss_welfare": true,
        "boss_remain": 0,
        "rank": 21,
        "title": "",
        "url": "",
        "kind_address_id": "0"
      }
    ],
    "next": null,
    "cover": "https://i0.hdslb.com/bfs/manga-static/b81fcd291cff74965b71d67e7df261de5790c2cd.png",
    "today_tasks": [
      {
        "type": 18,
        "title": "",
        "amount": 20,
        "status": 0,
        "duration": 30,
        "comics": [],
        "page_url": "",
        "progress": 0,
        "sub_id": 1,
        "share_type": 0
      },
      {
        "type": 20,
        "title": "",
        "amount": 20,
        "status": 0,
        "duration": 3,
        "comics": [],
        "page_url": "",
        "progress": 0,
        "sub_id": 1,
        "share_type": 0
      },
      {
        "type": 22,
        "title": "",
        "amount": 50,
        "status": 0,
        "duration": 15,
        "comics": [
          {
            "comic_id": 32190,
            "title": "我的成就有点多",
            "vertical_cover": "https://i0.hdslb.com/bfs/manga-static/efc403e323656fad24335aef007af5f318879597.png",
            "styles": ["都市"]
          },
          {
            "comic_id": 30538,
            "title": "我知道你的秘密",
            "vertical_cover": "https://i0.hdslb.com/bfs/manga-static/607f2c13afcf82ebba98f18213033d93bba7d58a.jpg",
            "styles": ["悬疑"]
          },
          {
            "comic_id": 25874,
            "title": "桃花宝典",
            "vertical_cover": "http://i0.hdslb.com/bfs/manga-static/bb1d33004af7dfbf197572cb9ef1c5fdd19e17a8.jpg",
            "styles": ["都市"]
          }
        ],
        "page_url": "",
        "progress": 0,
        "sub_id": 1,
        "share_type": 0
      },
      {
        "type": 17,
        "title": "阅读3分钟",
        "amount": 10,
        "status": 0,
        "duration": 3,
        "comics": [],
        "page_url": "",
        "progress": 0,
        "sub_id": 1,
        "share_type": 0
      },
      {
        "type": 17,
        "title": "阅读5分钟",
        "amount": 10,
        "status": 0,
        "duration": 5,
        "comics": [],
        "page_url": "",
        "progress": 0,
        "sub_id": 2,
        "share_type": 0
      },
      {
        "type": 17,
        "title": "阅读10分钟",
        "amount": 20,
        "status": 0,
        "duration": 10,
        "comics": [],
        "page_url": "",
        "progress": 0,
        "sub_id": 3,
        "share_type": 0
      },
      {
        "type": 17,
        "title": "阅读20分钟",
        "amount": 40,
        "status": 0,
        "duration": 20,
        "comics": [],
        "page_url": "",
        "progress": 0,
        "sub_id": 4,
        "share_type": 0
      },
      {
        "type": 17,
        "title": "阅读30分钟",
        "amount": 60,
        "status": 0,
        "duration": 30,
        "comics": [],
        "page_url": "",
        "progress": 0,
        "sub_id": 5,
        "share_type": 0
      },
      {
        "type": 19,
        "title": "每日首次玩猜拳",
        "amount": 5,
        "status": 0,
        "duration": 1,
        "comics": [],
        "page_url": "",
        "progress": 0,
        "sub_id": 1,
        "share_type": 0
      },
      {
        "type": 1,
        "title": "打开系统通知",
        "amount": 5,
        "status": 0,
        "duration": 0,
        "comics": [],
        "page_url": "",
        "progress": 0,
        "sub_id": 0,
        "share_type": 0
      },
      {
        "type": 2,
        "title": "设置个人偏好",
        "amount": 5,
        "status": 0,
        "duration": 0,
        "comics": [],
        "page_url": "",
        "progress": 0,
        "sub_id": 0,
        "share_type": 0
      }
    ],
    "text": null,
    "season_clock_in": {
      "is_super_luck": false,
      "draw_luck_time": "",
      "prize_type": 0,
      "prize_title": "",
      "add_up_sign": 0,
      "title": "",
      "sign_old_amount": 0,
      "preluck_amount": 0,
      "continuous_days": 0,
      "address_id": "0",
      "has_super_prize": false,
      "subtitle": "",
      "prize_image": "",
      "prize_target_days": 0,
      "prize_amount": 0,
      "tomorrow_amount": 0,
      "entrance_tag": ""
    },
    "announcement": null,
    "lottery": {
      "lottery_act_id": "0",
      "enable_lottery": true,
      "lottery_id": "0",
      "advance_lottery_act_id": "0",
      "advance_pool_id": "0"
    },
    "mission_point_rate": 0,
    "season_title": "初冬赛季",
    "point_rate": { "sign_in": 0, "game": 0, "daily_mission": 0, "week_mission": 0 },
    "rank": { "is_visible": false }
  }
}
```

</details>

## 赛季奖励领取

> https://manga.bilibili.com/twirp/user.v1.Season/TakeSeasonGifts

*请求方式：POST*

认证方式：Cookie（SESSDATA）/ APP

**正文参数 (application/x-www-form-urlencoded)：**

| 参数名    | 类型 | 内容    | 必要性 | 备注            |
| --------- | ---- | ------- | ------ | --------------- |
| season_id | num  | 赛季 id | 必要   | 必须为本赛季 id |

**json 回复：**

根对象：

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| code | num  | 返回值   |      |
| msg  | str  | 错误信息 |      |

`code` - `msg` 对照表：

| code | msg                                  | 备注                         |
| ---- | ------------------------------------ | ---------------------------- |
| 0    |                                      | 领取成功                     |
| 2    | 当前没有正在进行的赛季，无法兑换奖励 | season_id 字段不正确         |
| 7    | 任务已领取或者未完成                 | 没有已经完成的 `today_tasks` |
