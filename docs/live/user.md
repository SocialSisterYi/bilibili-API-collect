# 直播间用户实用 API

## 获取自己持有的粉丝勋章信息

> ~~https://api.live.bilibili.com/fans_medal/v5/live_fans_medal/iApiMedal~~ (旧)
> https://api.live.bilibili.com/xlive/app-ucenter/v1/user/GetMyMedals

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

**url 参数：**

| 参数名    | 类型 | 内容         | 必要性 | 备注                                              |
| --------- | ---- | ------------ | ------ | ------------------------------------------------- |
| page_size | num  | 每页的数量   | 必要   | 最大为 10，超出 `1002002：参数异常`               |
| page      | num  | 返回结果页数 | 必要   | 两个参数不填返回空，只 page 不填或错误则 500 异常 |

**json 回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                  |
| ------- | ---- | -------- | ----------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-1002002：参数异常<br />-500：服务器异常 |
| message | str  | 错误信息 | 默认为 "0"                                            |
| ttl     | num  | 1        |                                                       |
| data    | obj  | 信息本体 |                                                       |

`data`对象：

| 字段      | 类型  | 内容             | 备注 |
| --------- | ----- | ---------------- | ---- |
| count     | num   | 勋章数量         |      |
| items     | array | 粉丝勋章信息本体 |      |
| page_info | obj   | 页码信息         |      |

`items`数组中的对象：

| 字段               | 类型   | 内容                 | 备注                                   |
| ------------------ | ------ | -------------------- | -------------------------------------- |
| can_delete         | bool   | 可否删除             |                                        |
| day_limit          | num    | 日经验上限（原力值） | eg: 1500                               |
| guard_level        | num    |                      |                                        |
| guard_medal_title  | str    | 加成状态             |                                        |
| intimacy           | num    | 当前已得亲密度       |                                        |
| is_lighted         | num    | 是否点亮             | 0：未点亮<br />1：点亮                 |
| level              | num    | 勋章等级             |                                        |
| medal_name         | str    | 勋章名               |                                        |
| medal_color_border | num    | 勋章边框颜色信息     | 颜色数值为 10 进制的 16 进制值（下同） |
| medal_color_start  | num    | 勋章起始颜色         | 从右往左渐变（20 级+勋章）             |
| medal_color_end    | num    | 勋章结束颜色         | 从右往左渐变（20 级+勋章）             |
| medal_id           | num    | 粉丝勋章 id          |                                        |
| next_intimacy      | num    | 升级所需经验         |                                        |
| today_feed         | num    | 本日亲密度           |                                        |
| roomid             | num    | 直播间房间号         |                                        |
| status             | num    |                      |                                        |
| target_id          | number | up 主 mid            |                                        |
| target_name        | str    | up 主用户名          |                                        |
| uname              | str    | up 主用户名          |                                        |

`page_info`对象：

| 字段       | 类型 | 内容           | 备注 |
| ---------- | ---- | -------------- | ---- |
| total_page | num  | 页码总长度     |      |
| cur_page   | num  | 当前返回的页码 |      |

**示例：**

```shell
curl https://api.live.bilibili.com/xlive/app-ucenter/v1/user/GetMyMedals?page=1&page_size=10 \
-b "SESSDATA=xxx"
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "items": [
      {
        "can_deleted": true,
        "day_limit": 1500,
        "guard_level": 0,
        "guard_medal_title": "未开启加成",
        "intimacy": 9617,
        "is_lighted": 0,
        "level": 11,
        "medal_name": "锦依卫",
        "medal_color_border": 12632256,
        "medal_color_end": 12632256,
        "medal_color_start": 12632256,
        "medal_id": 29245,
        "next_intimacy": 10000,
        "today_feed": 0,
        "roomid": 1546736,
        "status": 0,
        "target_id": 36081646,
        "target_name": "洛天依",
        "uname": "洛天依"
      }
    ],
    "page_info": {
      "cur_page": 1,
      "total_page": 1
    },
    "count": 1
  }
}
```

</details>


## 佩戴勋章

> https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/wear

*请求方式：POST*

**表单参数：**

| 参数名     | 类型 | 内容                    | 必要性 | 备注 |
| ---------- | ---- | ----------------------- | ------ | ---- |
| medal_id   | num  | 勋章 id                 | 必要   |      |
| csrf       | num  | cookie 中 bili_jct 字段 | 必要   |      |
| csrf_token | num  | 同上                    | 必要   |      |

**json 回复：**

根对象：

| 字段    | 类型 | 内容     | 备注           |
| ------- | ---- | -------- | -------------- |
| code    | num  | 返回值   | 0：成功        |
| ttl     | num  | 1        |                |
| message | str  | 错误信息 | 默认为佩戴成功 |
| data    | obj  | 信息本体 | 默认为无       |

**示例：**

佩戴勋章 id 为 1 的勋章

```JavaScript
var madelForm = new FormData();
madelForm.append("medal_id", 1);
madelForm.append("csrf", bili_jct);
madelForm.append("csrf_token", bili_jct);
$.ajax({
    url: "https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/wear",
    type: "POST",
    data: madelForm,
    dataType: "JSON",
    processData: false,
    contentType: false,
    cache: false,
    xhrFields: {
        withCredentials: true
    },
    success: function (){

    }
})
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "佩戴成功",
  "ttl": 1,
  "data": {}
}
```

</details>

## ~~直播签到（已下线）~~

> https://api.live.bilibili.com/xlive/web-ucenter/v1/sign/DoSign

_请求方式：GET_

认证方式：Cookie（SESSDATA）或 APP

**json 回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                     |
| ------- | ---- | -------- | ------------------------ |
| code    | num  | 返回值   | 0：成功<br />1：参数错误 |
| ttl     | num  | 1        |                          |
| message | str  | 错误信息 | 默认为当日签到奖励内容   |
| data    | obj  | 信息本体 | 默认为空                 |

（目前已下线）

<details>
<summary>查看响应示例（下线后）：</summary>

```json
{
    "code": 1,
    "message": "签到活动已下线，无法使用。",
    "ttl": 1,
    "data": null
}
```

</details>


## 本月直播签到信息

> https://api.live.bilibili.com/xlive/web-ucenter/v1/sign/WebGetSignInfo

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

**json 回复：**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| ttl     | num  | 1        |         |
| message | str  | 错误信息 | 默认为0 |
| data    | obj  | 信息本体 |         |

`data`对象：

| 字段              | 类型  | 内容                         | 备注                     |
| ----------------- | ----- | ---------------------------- | ------------------------ |
| text              | str   | 今日签到奖励信息             | 默认为空                 |
| specialText       | str   | 连续签到奖励信息             | 默认为空                 |
| status            | num   | 签到状态                     | 0：未签到<br />1：已签到 |
| allDays           | num   | 当月天数                     |                          |
| curMonth          | num   | 当前月                       |                          |
| curYear           | num   | 当前年                       |                          |
| curDay            | num   | 当前日                       |                          |
| curData           | str   | 当前日期（格式化）           | eg: 2023-2-19            |
| hadSignDays       | num   | 当月已签到天数               | 默认为0                  |
| newTask           | num   | 作用未知                     | 默认为0                  |
| signDaysList      | array | 当月已签到日列表             | 默认为空                 |
| signBonusDaysList | array | 当月已签到且有特殊奖励日列表 | 默认为空                 |

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "text": "3000点用户经验,2根辣条",
        "specialText": "再签到7天可以获得50根辣条",
        "status": 1,
        "allDays": 28,
        "curMonth": 2,
        "curYear": 2023,
        "curDay": 19,
        "curDate": "2023-2-19",
        "hadSignDays": 13,
        "newTask": 0,
        "signDaysList": [
            2,
            3,
            4,
            5,
            6,
            7,
            11,
            13,
            14,
            15,
            17,
            18,
            19
        ],
        "signBonusDaysList": [
            6
        ]
    }
}
```

</details>

## 上月直播签到信息

> https://api.live.bilibili.com/sign/getLastMonthSignDays

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

**json 回复：**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| ttl     | num  | 1        |         |
| message | str  | 错误信息 | 默认为0 |
| data    | obj  | 信息本体 |         |

`data`对象：

| 字段              | 类型  | 内容                         | 备注     |
| ----------------- | ----- | ---------------------------- | -------- |
| days              | num   | 上月天数                     |          |
| month             | num   | 上月月份值                   |          |
| hadSignDays       | num   | 上月已签到天数               | 默认为0  |
| signDaysList      | array | 上月已签到日列表             | 默认为空 |
| signBonusDaysList | array | 上月已签到且有特殊奖励日列表 | 默认为空 |

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "month": 1,
        "days": 31,
        "hadSignDays": 20,
        "signDaysList": [
            1,
            2,
            3,
            6,
            7,
            8,
            10,
            12,
            13,
            14,
            15,
            18,
            20,
            23,
            24,
            25,
            26,
            27,
            30,
            31
        ],
        "signBonusDaysList": [
            7,
            31
        ]
    }
}
```

</details>

## 查询直播间贡献榜

> https://api.live.bilibili.com//xlive/general-interface/v1/rank/getOnlineGoldRank

*请求方式：GET*

认证方式：无

**url 参数：**

| 参数名   | 类型 | 内容           | 必要性 | 备注   |
| -------- | ---- | -------------- | ------ | ------ |
| roomId   | num  | 房间号         | 必要   |        |
| page     | num  | 返回结果页数   | 必要   |        |
| pageSize | num  | 返回结果页大小 | 必要   | 最大50 |
| ruid     | num  | 主播uid        | 必要   |        |

**json 回复：**

根对象：

| 字段    | 类型 | 内容     | 备注 |
| ------- | ---- | -------- | ---- |
| code    | num  | 返回值   |      |
| message | str  | 错误信息 |      |
| ttl     | num  | 1        |      |
| data    | obj  | 信息本体 |





`data`中的对象：

| 字段           | 类型  | 内容         | 备注 |
| -------------- | ----- | ------------ | ---- |
| onlineNum      | num   | 在线观众数量 |      |
| OnlineRankItem | array | 结果         |      |  |

`OnlineRankItem`数组中的对象：

| 字段         | 类型 | 内容         | 备注 |
| ------------ | ---- | ------------ | ---- |
| userRank     | num  | 贡献值排名   |      |
| uid          | num  | 用户id       |      |  |
| name         | str  | 用户名字     |      |  |
| face         | str  | 用户头像     |      |  |
| score        | num  | 贡献值       |      |  |
| medalInfo    | obj  | 粉丝牌对象   |      |  |
| guard_level  | num  | 大航海类型   |      |  |
| wealth_level | num  | 荣耀等级     |      |  |
| guard_level  | num  | 大航海类型   |      |  |
| uinfo        | obj  | 用户详细信息 |      |  |

`uinfo`对象：

| 字段  | 类型 | 内容         | 备注 |
| ----- | ---- | ------------ | ---- |
| uid   | num  | 用户uid      |      |
| base  | obj  | 用户基本信息 |      |  |
| medal | obj  | 用户粉丝牌   |      |  |
| face  | str  | 用户头像     |      |  |
| guard | obj  | 大航海       |      |  |

`guard`对象：

| 字段        | 类型 | 内容           | 备注 |
| ----------- | ---- | -------------- | ---- |
| level       | num  | 大航海类型     |      |
| expired_str | str  | 大航海到期时间 |      |  |


**示例：**

查询`23174842`直播间的大航海成员


```shell
curl  'https://api.live.bilibili.com//xlive/general-interface/v1/rank/getOnlineGoldRank?roomId=26854650&ruid=3493118494116797&page=3&pageSize=20'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "onlineNum": 45,
        "OnlineRankItem": [
            {
                "userRank": 1,
                "uid": 36136895,
                "name": "四月hallu",
                "face": "https://i2.hdslb.com/bfs/face/5e5166ecc4c17d4dbc7a09dbb6bb749d9f537985.jpg",
                "score": 3768,
                "medalInfo": {
                    "guardLevel": 3,
                    "medalColorStart": 2951253,
                    "medalColorEnd": 10329087,
                    "medalColorBorder": 6809855,
                    "medalName": "钢板鹿",
                    "level": 29,
                    "targetId": 3493118494116797,
                    "isLight": 1
                },
                "guard_level": 3,
                "wealth_level": 41,
                "is_mystery": false,
                "uinfo": {
                    "uid": 36136895,
                    "base": {
                        "name": "四月hallu",
                        "face": "https://i2.hdslb.com/bfs/face/5e5166ecc4c17d4dbc7a09dbb6bb749d9f537985.jpg",
                        "name_color": 0,
                        "is_mystery": false,
                        "risk_ctrl_info": {
                            "name": "四月hallu",
                            "face": "https://i2.hdslb.com/bfs/face/5e5166ecc4c17d4dbc7a09dbb6bb749d9f537985.jpg"
                        },
                        "origin_info": {
                            "name": "四月hallu",
                            "face": "https://i2.hdslb.com/bfs/face/5e5166ecc4c17d4dbc7a09dbb6bb749d9f537985.jpg"
                        },
                        "official_info": {
                            "role": 0,
                            "title": "",
                            "desc": "",
                            "type": -1
                        },
                        "name_color_str": ""
                    },
                    "medal": {
                        "name": "钢板鹿",
                        "level": 29,
                        "color_start": 2951253,
                        "color_end": 10329087,
                        "color_border": 6809855,
                        "color": 2951253,
                        "id": 0,
                        "typ": 0,
                        "is_light": 1,
                        "ruid": 3493118494116797,
                        "guard_level": 3,
                        "score": 50422604,
                        "guard_icon": "https://i0.hdslb.com/bfs/live/143f5ec3003b4080d1b5f817a9efdca46d631945.png",
                        "honor_icon": "",
                        "v2_medal_color_start": "#9660E5CC",
                        "v2_medal_color_end": "#9660E5CC",
                        "v2_medal_color_border": "#D47AFFFF",
                        "v2_medal_color_text": "#FFFFFFFF",
                        "v2_medal_color_level": "#6C00A099",
                        "user_receive_count": 0
                    },
                    "wealth": {
                        "level": 41,
                        "dm_icon_key": "ChronosWealth_4.png"
                    },
                    "title": null,
                    "guard": {
                        "level": 3,
                        "expired_str": "2025-07-07 23:59:59"
                    },
                    "uhead_frame": null,
                    "guard_leader": null
                }
            },
            {
                "userRank": 2,
                "uid": 1182882611,
                "name": "重生指令",
                "face": "https://i2.hdslb.com/bfs/face/6762c39b424e6de5bf0292fd12a019201a501fb9.jpg",
                "score": 1546,
                "medalInfo": {
                    "guardLevel": 0,
                    "medalColorStart": 12632256,
                    "medalColorEnd": 12632256,
                    "medalColorBorder": 12632256,
                    "medalName": "雪狐咕",
                    "level": 24,
                    "targetId": 477792,
                    "isLight": 0
                },
                "guard_level": 3,
                "wealth_level": 22,
                "is_mystery": false,
                "uinfo": {
                    "uid": 1182882611,
                    "base": {
                        "name": "重生指令",
                        "face": "https://i2.hdslb.com/bfs/face/6762c39b424e6de5bf0292fd12a019201a501fb9.jpg",
                        "name_color": 0,
                        "is_mystery": false,
                        "risk_ctrl_info": {
                            "name": "重生指令",
                            "face": "https://i2.hdslb.com/bfs/face/6762c39b424e6de5bf0292fd12a019201a501fb9.jpg"
                        },
                        "origin_info": {
                            "name": "重生指令",
                            "face": "https://i2.hdslb.com/bfs/face/6762c39b424e6de5bf0292fd12a019201a501fb9.jpg"
                        },
                        "official_info": {
                            "role": 0,
                            "title": "",
                            "desc": "",
                            "type": -1
                        },
                        "name_color_str": ""
                    },
                    "medal": {
                        "name": "雪狐咕",
                        "level": 24,
                        "color_start": 12632256,
                        "color_end": 12632256,
                        "color_border": 12632256,
                        "color": 1725515,
                        "id": 0,
                        "typ": 0,
                        "is_light": 0,
                        "ruid": 477792,
                        "guard_level": 0,
                        "score": 50010220,
                        "guard_icon": "",
                        "honor_icon": "",
                        "v2_medal_color_start": "#919298CC",
                        "v2_medal_color_end": "#919298CC",
                        "v2_medal_color_border": "#919298CC",
                        "v2_medal_color_text": "#FFFFFFFF",
                        "v2_medal_color_level": "#6C6C7299",
                        "user_receive_count": 0
                    },
                    "wealth": {
                        "level": 22,
                        "dm_icon_key": ""
                    },
                    "title": null,
                    "guard": {
                        "level": 3,
                        "expired_str": "2025-06-29 23:59:59"
                    },
                    "uhead_frame": null,
                    "guard_leader": null
                }
            },
            {
                "userRank": 3,
                "uid": 35007043,
                "name": "_单推哈鹿halluの狐狸",
                "face": "https://i1.hdslb.com/bfs/face/6373a98189480661fc725494ab5ab68253522b8f.jpg",
                "score": 1543,
                "medalInfo": {
                    "guardLevel": 2,
                    "medalColorStart": 2951253,
                    "medalColorEnd": 10329087,
                    "medalColorBorder": 16771156,
                    "medalName": "钢板鹿",
                    "level": 29,
                    "targetId": 3493118494116797,
                    "isLight": 1
                },
                "guard_level": 2,
                "wealth_level": 40,
                "is_mystery": false,
                "uinfo": {
                    "uid": 35007043,
                    "base": {
                        "name": "_单推哈鹿halluの狐狸",
                        "face": "https://i1.hdslb.com/bfs/face/6373a98189480661fc725494ab5ab68253522b8f.jpg",
                        "name_color": 0,
                        "is_mystery": false,
                        "risk_ctrl_info": {
                            "name": "_单推哈鹿halluの狐狸",
                            "face": "https://i1.hdslb.com/bfs/face/6373a98189480661fc725494ab5ab68253522b8f.jpg"
                        },
                        "origin_info": {
                            "name": "_单推哈鹿halluの狐狸",
                            "face": "https://i1.hdslb.com/bfs/face/6373a98189480661fc725494ab5ab68253522b8f.jpg"
                        },
                        "official_info": {
                            "role": 0,
                            "title": "",
                            "desc": "",
                            "type": -1
                        },
                        "name_color_str": ""
                    },
                    "medal": {
                        "name": "钢板鹿",
                        "level": 29,
                        "color_start": 2951253,
                        "color_end": 10329087,
                        "color_border": 16771156,
                        "color": 2951253,
                        "id": 0,
                        "typ": 0,
                        "is_light": 1,
                        "ruid": 3493118494116797,
                        "guard_level": 2,
                        "score": 50360413,
                        "guard_icon": "https://i0.hdslb.com/bfs/live/98a201c14a64e860a758f089144dcf3f42e7038c.png",
                        "honor_icon": "",
                        "v2_medal_color_start": "#9660E5CC",
                        "v2_medal_color_end": "#9660E5CC",
                        "v2_medal_color_border": "#D47AFFFF",
                        "v2_medal_color_text": "#FFFFFFFF",
                        "v2_medal_color_level": "#6C00A099",
                        "user_receive_count": 0
                    },
                    "wealth": {
                        "level": 40,
                        "dm_icon_key": "ChronosWealth_4.png"
                    },
                    "title": null,
                    "guard": {
                        "level": 2,
                        "expired_str": "2025-07-30 23:59:59"
                    },
                    "uhead_frame": null,
                    "guard_leader": null
                }
            },
            {
                "userRank": 7,
                "uid": 44152084,
                "name": "_柚_子_hallu",
                "face": "https://i1.hdslb.com/bfs/face/137498c2c6a3231e5b6047af12a64bbd19627dcb.jpg",
                "score": 324,
                "medalInfo": {
                    "guardLevel": 3,
                    "medalColorStart": 398668,
                    "medalColorEnd": 6850801,
                    "medalColorBorder": 6809855,
                    "medalName": "钢板鹿",
                    "level": 26,
                    "targetId": 3493118494116797,
                    "isLight": 1
                },
                "guard_level": 3,
                "wealth_level": 32,
                "is_mystery": false,
                "uinfo": {
                    "uid": 44152084,
                    "base": {
                        "name": "_柚_子_hallu",
                        "face": "https://i1.hdslb.com/bfs/face/137498c2c6a3231e5b6047af12a64bbd19627dcb.jpg",
                        "name_color": 0,
                        "is_mystery": false,
                        "risk_ctrl_info": {
                            "name": "_柚_子_hallu",
                            "face": "https://i1.hdslb.com/bfs/face/137498c2c6a3231e5b6047af12a64bbd19627dcb.jpg"
                        },
                        "origin_info": {
                            "name": "_柚_子_hallu",
                            "face": "https://i1.hdslb.com/bfs/face/137498c2c6a3231e5b6047af12a64bbd19627dcb.jpg"
                        },
                        "official_info": {
                            "role": 0,
                            "title": "",
                            "desc": "",
                            "type": -1
                        },
                        "name_color_str": ""
                    },
                    "medal": {
                        "name": "钢板鹿",
                        "level": 26,
                        "color_start": 398668,
                        "color_end": 6850801,
                        "color_border": 6809855,
                        "color": 398668,
                        "id": 0,
                        "typ": 0,
                        "is_light": 1,
                        "ruid": 3493118494116797,
                        "guard_level": 3,
                        "score": 50057285,
                        "guard_icon": "https://i0.hdslb.com/bfs/live/143f5ec3003b4080d1b5f817a9efdca46d631945.png",
                        "honor_icon": "",
                        "v2_medal_color_start": "#4775EFCC",
                        "v2_medal_color_end": "#4775EFCC",
                        "v2_medal_color_border": "#58A1F8FF",
                        "v2_medal_color_text": "#FFFFFFFF",
                        "v2_medal_color_level": "#000B7099",
                        "user_receive_count": 0
                    },
                    "wealth": {
                        "level": 32,
                        "dm_icon_key": ""
                    },
                    "title": null,
                    "guard": {
                        "level": 3,
                        "expired_str": "2025-06-27 23:59:59"
                    },
                    "uhead_frame": null,
                    "guard_leader": null
                }
            },
            {
                "userRank": 8,
                "uid": 8242366,
                "name": "翟赧hallu",
                "face": "https://i1.hdslb.com/bfs/face/9b312f4146ca2c8a1d2e5468e345ecfb60be3874.jpg",
                "score": 276,
                "medalInfo": {
                    "guardLevel": 3,
                    "medalColorStart": 398668,
                    "medalColorEnd": 6850801,
                    "medalColorBorder": 6809855,
                    "medalName": "钢板鹿",
                    "level": 28,
                    "targetId": 3493118494116797,
                    "isLight": 1
                },
                "guard_level": 3,
                "wealth_level": 35,
                "is_mystery": false,
                "uinfo": {
                    "uid": 8242366,
                    "base": {
                        "name": "翟赧hallu",
                        "face": "https://i1.hdslb.com/bfs/face/9b312f4146ca2c8a1d2e5468e345ecfb60be3874.jpg",
                        "name_color": 0,
                        "is_mystery": false,
                        "risk_ctrl_info": {
                            "name": "翟赧hallu",
                            "face": "https://i1.hdslb.com/bfs/face/9b312f4146ca2c8a1d2e5468e345ecfb60be3874.jpg"
                        },
                        "origin_info": {
                            "name": "翟赧hallu",
                            "face": "https://i1.hdslb.com/bfs/face/9b312f4146ca2c8a1d2e5468e345ecfb60be3874.jpg"
                        },
                        "official_info": {
                            "role": 0,
                            "title": "",
                            "desc": "",
                            "type": -1
                        },
                        "name_color_str": ""
                    },
                    "medal": {
                        "name": "钢板鹿",
                        "level": 28,
                        "color_start": 398668,
                        "color_end": 6850801,
                        "color_border": 6809855,
                        "color": 398668,
                        "id": 0,
                        "typ": 0,
                        "is_light": 1,
                        "ruid": 3493118494116797,
                        "guard_level": 3,
                        "score": 50208414,
                        "guard_icon": "https://i0.hdslb.com/bfs/live/143f5ec3003b4080d1b5f817a9efdca46d631945.png",
                        "honor_icon": "",
                        "v2_medal_color_start": "#4775EFCC",
                        "v2_medal_color_end": "#4775EFCC",
                        "v2_medal_color_border": "#58A1F8FF",
                        "v2_medal_color_text": "#FFFFFFFF",
                        "v2_medal_color_level": "#000B7099",
                        "user_receive_count": 0
                    },
                    "wealth": {
                        "level": 35,
                        "dm_icon_key": ""
                    },
                    "title": null,
                    "guard": {
                        "level": 3,
                        "expired_str": "2025-08-05 23:59:59"
                    },
                    "uhead_frame": null,
                    "guard_leader": null
                }
            },
            {
                "userRank": 9,
                "uid": 418232,
                "name": "lug7",
                "face": "http://i2.hdslb.com/bfs/face/5d2c92beb774a4bb30762538bb102d23670ae9c0.gif",
                "score": 171,
                "medalInfo": {
                    "guardLevel": 3,
                    "medalColorStart": 398668,
                    "medalColorEnd": 6850801,
                    "medalColorBorder": 6809855,
                    "medalName": "钢板鹿",
                    "level": 26,
                    "targetId": 3493118494116797,
                    "isLight": 1
                },
                "guard_level": 3,
                "wealth_level": 28,
                "is_mystery": false,
                "uinfo": {
                    "uid": 418232,
                    "base": {
                        "name": "lug7",
                        "face": "http://i2.hdslb.com/bfs/face/5d2c92beb774a4bb30762538bb102d23670ae9c0.gif",
                        "name_color": 0,
                        "is_mystery": false,
                        "risk_ctrl_info": {
                            "name": "lug7",
                            "face": "http://i2.hdslb.com/bfs/face/5d2c92beb774a4bb30762538bb102d23670ae9c0.gif"
                        },
                        "origin_info": {
                            "name": "lug7",
                            "face": "http://i2.hdslb.com/bfs/face/5d2c92beb774a4bb30762538bb102d23670ae9c0.gif"
                        },
                        "official_info": {
                            "role": 0,
                            "title": "",
                            "desc": "",
                            "type": -1
                        },
                        "name_color_str": ""
                    },
                    "medal": {
                        "name": "钢板鹿",
                        "level": 26,
                        "color_start": 398668,
                        "color_end": 6850801,
                        "color_border": 6809855,
                        "color": 398668,
                        "id": 0,
                        "typ": 0,
                        "is_light": 1,
                        "ruid": 3493118494116797,
                        "guard_level": 3,
                        "score": 50050050,
                        "guard_icon": "https://i0.hdslb.com/bfs/live/143f5ec3003b4080d1b5f817a9efdca46d631945.png",
                        "honor_icon": "",
                        "v2_medal_color_start": "#4775EFCC",
                        "v2_medal_color_end": "#4775EFCC",
                        "v2_medal_color_border": "#58A1F8FF",
                        "v2_medal_color_text": "#FFFFFFFF",
                        "v2_medal_color_level": "#000B7099",
                        "user_receive_count": 0
                    },
                    "wealth": {
                        "level": 28,
                        "dm_icon_key": ""
                    },
                    "title": null,
                    "guard": {
                        "level": 3,
                        "expired_str": "2025-06-15 23:59:59"
                    },
                    "uhead_frame": null,
                    "guard_leader": null
                }
            },
            {
                "userRank": 10,
                "uid": 452228643,
                "name": "很糊的小龔鬱hallu",
                "face": "https://i0.hdslb.com/bfs/face/996fa85fe42d582dd013dcb435de3f3ff4d33f6c.jpg",
                "score": 35,
                "medalInfo": {
                    "guardLevel": 0,
                    "medalColorStart": 6126494,
                    "medalColorEnd": 6126494,
                    "medalColorBorder": 6126494,
                    "medalName": "牧斯",
                    "level": 6,
                    "targetId": 3493087074585126,
                    "isLight": 1
                },
                "guard_level": 3,
                "wealth_level": 35,
                "is_mystery": false,
                "uinfo": {
                    "uid": 452228643,
                    "base": {
                        "name": "很糊的小龔鬱hallu",
                        "face": "https://i0.hdslb.com/bfs/face/996fa85fe42d582dd013dcb435de3f3ff4d33f6c.jpg",
                        "name_color": 0,
                        "is_mystery": false,
                        "risk_ctrl_info": {
                            "name": "很糊的小龔鬱hallu",
                            "face": "https://i0.hdslb.com/bfs/face/996fa85fe42d582dd013dcb435de3f3ff4d33f6c.jpg"
                        },
                        "origin_info": {
                            "name": "很糊的小龔鬱hallu",
                            "face": "https://i0.hdslb.com/bfs/face/996fa85fe42d582dd013dcb435de3f3ff4d33f6c.jpg"
                        },
                        "official_info": {
                            "role": 0,
                            "title": "",
                            "desc": "",
                            "type": -1
                        },
                        "name_color_str": ""
                    },
                    "medal": {
                        "name": "牧斯",
                        "level": 6,
                        "color_start": 6126494,
                        "color_end": 6126494,
                        "color_border": 6126494,
                        "color": 6126494,
                        "id": 0,
                        "typ": 0,
                        "is_light": 1,
                        "ruid": 3493087074585126,
                        "guard_level": 0,
                        "score": 3400,
                        "guard_icon": "",
                        "honor_icon": "",
                        "v2_medal_color_start": "#5866C799",
                        "v2_medal_color_end": "#5866C799",
                        "v2_medal_color_border": "#5866C799",
                        "v2_medal_color_text": "#FFFFFFFF",
                        "v2_medal_color_level": "#000B7099",
                        "user_receive_count": 0
                    },
                    "wealth": {
                        "level": 35,
                        "dm_icon_key": ""
                    },
                    "title": null,
                    "guard": {
                        "level": 3,
                        "expired_str": "2025-06-19 23:59:59"
                    },
                    "uhead_frame": null,
                    "guard_leader": null
                }
            },
            {
                "userRank": 11,
                "uid": 164871173,
                "name": "奶浴-bllss",
                "face": "https://i2.hdslb.com/bfs/face/f48dd7c1e432eb91e5fd286757c4e2600930f4c5.jpg",
                "score": 26,
                "medalInfo": null,
                "guard_level": 3,
                "wealth_level": 36,
                "is_mystery": false,
                "uinfo": {
                    "uid": 164871173,
                    "base": {
                        "name": "奶浴-bllss",
                        "face": "https://i2.hdslb.com/bfs/face/f48dd7c1e432eb91e5fd286757c4e2600930f4c5.jpg",
                        "name_color": 0,
                        "is_mystery": false,
                        "risk_ctrl_info": {
                            "name": "奶浴-bllss",
                            "face": "https://i2.hdslb.com/bfs/face/f48dd7c1e432eb91e5fd286757c4e2600930f4c5.jpg"
                        },
                        "origin_info": {
                            "name": "奶浴-bllss",
                            "face": "https://i2.hdslb.com/bfs/face/f48dd7c1e432eb91e5fd286757c4e2600930f4c5.jpg"
                        },
                        "official_info": {
                            "role": 0,
                            "title": "",
                            "desc": "",
                            "type": -1
                        },
                        "name_color_str": ""
                    },
                    "medal": null,
                    "wealth": {
                        "level": 36,
                        "dm_icon_key": ""
                    },
                    "title": null,
                    "guard": {
                        "level": 3,
                        "expired_str": "2025-07-20 23:59:59"
                    },
                    "uhead_frame": null,
                    "guard_leader": null
                }
            },
        ],
        "ownInfo": {
            "uid": 0,
            "name": "",
            "face": "",
            "rank": -1,
            "needScore": 0,
            "score": 0,
            "guard_level": 0,
            "wealth_level": 0,
            "is_mystery": false,
            "uinfo": null
        },
        "tips_text": "投喂、点赞、发弹幕、持续观看均可上榜",
        "value_text": "贡献值",
        "ab": {
            "guard_accompany_list": 1
        },
        "onlineNumText": "45"
    }
}
```
</details>

## 查询自己在某直播间观看时长

> https://api.live.bilibili.com/xlive/general-interface/v1/guard/GuardActive

*请求方式：GET*

认证方式：Cookie（SESSDATA）或 APP

**url 参数：**

| 参数名   | 类型 | 内容    | 必要性 | 备注 |
| -------- | ---- | ------- | ------ | ---- |
| platform | str  | android | 必要   |      |
| ruid     | num  | 主播uid | 必要   |      |

**json 回复：**

根对象：

| 字段    | 类型 | 内容     | 备注 |
| ------- | ---- | -------- | ---- |
| code    | num  | 返回值   |      |
| message | str  | 错误信息 |      |
| ttl     | num  | 1        |      |
| data    | obj  | 信息本体 |      |





`data`中的对象：

| 字段        | 类型 | 内容           | 备注                          |
| ----------- | ---- | -------------- | ----------------------------- |
| ruid        | num  | 主播uid        |                               |
| rusername   | str  | 主播用户名     |                               |
| rface       | str  | 主播头像       |                               |
| username    | str  | 自己的用户名   |                               |
| accomany    | int  | 大航海陪伴天数 | 似乎b站程序员把这个单词拼错了 |
| rusername   | str  | 主播用户名     |                               |
| watch_time  | num  | 观看时长       | 单位是秒                      |
| up_medal    | obj  | 粉丝牌         |                               |
| guard_num_3 | num  | 主播舰长数量   |
| guard_num_2 | num  | 主播提督数量   |                               |
| guard_num_1 | num  | 主播总督数量   |                               |
| is_live     | num  | 直播状态       |                               |



## 查询用户在直播间的信息

> https://api.live.bilibili.com/xlive/app-ucenter/v2/card/user

*请求方式：GET*

认证方式：无

**url 参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| uid    | num  | 目标用户uid | 必要   |      |
| ruid   | num  | 主播uid     | 必要   |      |

**json 回复：**

根对象：

| 字段    | 类型 | 内容     | 备注 |
| ------- | ---- | -------- | ---- |
| code    | num  | 返回值   |      |
| message | str  | 错误信息 |      |
| ttl     | num  | 1        |      |
| data    | obj  | 信息本体 |


`data`对象：

| 字段          | 类型 | 内容               | 备注                           |
| ------------- | ---- | ------------------ | ------------------------------ |
| uid           | num  | 目标用户id         |                                |
| uname         | str  | 目标用户名         |                                |
| desc          | str  | 目标用户认证信息   |                                |
| face          | str  | 目标用户头像       |                                |
| follow_num    | num  | 目标用户粉丝数     |                                |
| attention_num | num  | 目标用户关注数     |
| main_vip      | num  | 目标用户大会员状态 | 0：无 2：大会员                |
| is_block      | num  | 是否被拉黑？       | 始终为0？                      |
| is_admin      | num  | 是否房管           |                                |
| is_black      | num  | 是否被关小黑屋     |                                |
| wealth_info   | obj  | 荣耀等级           |                                |
| fans_medal    | obj  | 粉丝牌             | 如果目标用户隐藏粉丝牌则为null |

`wealth_info`对象：
| 字段               | 类型 | 内容                       | 备注 |
| ------------------ | ---- | -------------------------- | ---- |
| level              | num  | 荣耀等级                   |      |
| level_total_score  | num  | 下一等级的荣耀值           |      |
| cur_score          | num  | 当前荣耀值                 |      |
| upgrade_need_score | num  | 升到下一等级还差多少荣耀值 |      |

**示例：**

```shell
curl  'https://api.live.bilibili.com/xlive/app-ucenter/v2/card/user?ruid=504140200&uid=504140200'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"uid": 504140200,
		"uname": "软软riu",
		"face": "https://i1.hdslb.com/bfs/face/2d083d686b704eb7010e3d94595d47f5a89c8aef.jpg",
		"verify_type": 0,
		"desc": "bilibili UP主认证：bilibili 知名虚拟UP主、直播高能主播",
		"uname_color": 2171169,
		"room_id": 23174842,
		"pendant": "https://i1.hdslb.com/bfs/garb/open/8806f97581082d68edcf2207368290b3fb3491bb.png",
		"pendant_from": 2,
		"follow_num": 214882,
		"attention_num": 202,
		"relation_status": 1,
		"privilege_type": 3,
		"fans_medal": null,
		"title_sum": 10,
		"wearing_title": "",
		"main_vip": 0,
		"is_block": 0,
		"is_admin": 0,
		"fans_medal_list_url": "https://live.bilibili.com/p/html/live-fansmedal-wall/index.html?tId=504140200#/medal",
		"wearing": {},
		"is_black": 0,
		"admin_level": 0,
		"head_picture": "http://i0.hdslb.com/bfs/live/3f536f59e337a731c5367f623bca79b32197ddd5.png",
		"head_text": "大航海舰长",
		"head_url": "",
		"head_business": 1,
		"head_skin_icon": "http://i0.hdslb.com/bfs/live/d44e103f424f5ae01ef3d0133ef812f8241d15b0.png",
		"privilege_center": {},
		"is_nft": 0,
		"nft_dmark": "https://i0.hdslb.com/bfs/live/9f176ff49d28c50e9c53ec1c3297bd1ee539b3d6.gif",
		"is_real_fans": false,
		"wealth_info": {
			"uid": 504140200,
			"level": 35,
			"level_total_score": 6000000,
			"cur_score": 5012900,
			"upgrade_need_score": 987100,
			"status": 1,
			"dm_icon_key": ""
		},
		"guard": {
			"accompany": 0,
			"accompany_slake": 0
		},
		"chat_url_android": "activity://im/conversation/?conversation_type=1&reciveid=504140200",
		"chat_url_ios": "bilibili://link/chat?session_id=s504140200",
		"gift_star": null,
		"is_mystery": false,
		"text_control": null,
		"uinfo_medal": null,
		"guard_attire": {},
		"flash_buy": 0,
		"flash_buy_url": ""
	}
}
```
</details>