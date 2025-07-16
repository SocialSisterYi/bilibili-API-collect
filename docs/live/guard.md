## 查询大航海成员
> https://api.live.bilibili.com/xlive/app-room/v2/guardTab/topListNew

*请求方式: GET*

认证方式：无（无需Cookie）

**URL参数：**

| 参数名    | 类型 | 内容     | 必要性 | 备注                                    |
| --------- | ---- | -------- | ------ | --------------------------------------- |
| roomid    | num  | 直播间号 | 必要   |                                         |
| page      | num  | 页数     | 必要   |                                         |
| ruid      | num  | 主播id   | 必要   |                                         |
| page_size | num  | 页大小   | 非必要 | 默认20，最大30，若超过则作为10处理      |
| typ       | num  | 排序方式 | 非必要 | typ=3,4,5分别为按周/月/总航海亲密度排序 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 |         |
| data    | obj  | 信息本体 |         |

`data`对象：

| 字段 | 类型  | 内容           | 备注                                    |
| ---- | ----- | -------------- | --------------------------------------- |
| info | obj   | 主播mid        |                                         |
| top3 | array | 整个列表的top3 |
| list | array | 大航海成员     | page=1时，list[0]得到的会是榜单的第四名 |

`list`对象：

| 字段      | 类型 | 内容     | 备注  |
| --------- | ---- | -------- | ----- |
| ruid      | num  | 主播UID  |       |
| rank      | num  | 榜单排名 |       |
| accompany | num  | 陪伴天数 |       |
| uinfo     | obj  | 用户信息 |       |
| score     | num  | 亲密度   | 恒为0 |

`list`对象的`uinfo`：
| 字段  | 类型 | 内容         | 备注                                                     |
| ----- | ---- | ------------ | -------------------------------------------------------- |
| uid   | num  | 用户UID      |                                                          |
| base  | obj  | 用户基本信息 |                                                          |
| medal | obj  | 粉丝牌       | 与[此处](/bilibili-API-collect/docs/user/medals)基本一致 |

`list`对象的`uinfo`的`base`：

| 字段 | 类型   | 内容     | 备注 |
| ---- | ------ | -------- | ---- |
| name | string | 用户名   |      |
| face | string | 用戶头像 |      |


**示例：**

查询`23174842`直播间的大航海成员


```shell
curl  ' https://api.live.bilibili.com/xlive/app-room/v2/guardTab/topListNew?ruid=504140200&roomid=23174842&page=1'
```


<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "info": {
            "num": 23,
            "page": 10,
            "now": 1,
            "achievement_level": 1,
            "anchor_guard_achieve_level": 0,
            "achievement_icon_src": "",
            "buy_guard_icon_src": "https://i0.hdslb.com/bfs/live/4a481b491767f9d91165a4631252de4503d63a17.png",
            "rule_doc_src": "",
            "ex_background_src": "https://i0.hdslb.com/bfs/live/d0e938839a9dee733e8a7f9f6a3a132108ae22bc.png",
            "color_start": "",
            "color_end": "",
            "tab_color": [
                "#4DDDDBD5",
                "#26CFCBC0"
            ],
            "title_color": [
                "#FFC9CCD0",
                "#FF9499A0"
            ]
        },
        "list": [
            {
                "ruid": 504140200,
                "rank": 4,
                "accompany": 36,
                "uinfo": {
                    "uid": 432911315,
                    "base": {
                        "name": "幻想乡的年华",
                        "face": "https://i2.hdslb.com/bfs/face/5ddde7a8466aa2d60d082ccfc08a0267445b193b.jpg",
                        "name_color": 0,
                        "is_mystery": false,
                        "risk_ctrl_info": null,
                        "origin_info": {
                            "name": "幻想乡的年华",
                            "face": "https://i2.hdslb.com/bfs/face/5ddde7a8466aa2d60d082ccfc08a0267445b193b.jpg"
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
                        "name": "软饭兔",
                        "level": 25,
                        "color_start": 398668,
                        "color_end": 6850801,
                        "color_border": 16771156,
                        "color": 398668,
                        "id": 0,
                        "typ": 0,
                        "is_light": 1,
                        "ruid": 504140200,
                        "guard_level": 2,
                        "score": 0,
                        "guard_icon": "",
                        "honor_icon": "",
                        "v2_medal_color_start": "#4775EFCC",
                        "v2_medal_color_end": "#4775EFCC",
                        "v2_medal_color_border": "#58A1F8FF",
                        "v2_medal_color_text": "#FFFFFFFF",
                        "v2_medal_color_level": "#000B7099",
                        "user_receive_count": 0
                    },
                    "wealth": null,
                    "title": null,
                    "guard": {
                        "level": 2,
                        "expired_str": ""
                    },
                    "uhead_frame": null,
                    "guard_leader": null
                },
                "score": 0
            },
            {
                "ruid": 504140200,
                "rank": 5,
                "accompany": 513,
                "uinfo": {
                    "uid": 7816639,
                    "base": {
                        "name": "在这样的时光",
                        "face": "https://i1.hdslb.com/bfs/face/3b0091dda76e095351907e9c708b9571716aa3e1.jpg",
                        "name_color": 0,
                        "is_mystery": false,
                        "risk_ctrl_info": null,
                        "origin_info": {
                            "name": "在这样的时光",
                            "face": "https://i1.hdslb.com/bfs/face/3b0091dda76e095351907e9c708b9571716aa3e1.jpg"
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
                        "name": "软饭兔",
                        "level": 30,
                        "color_start": 2951253,
                        "color_end": 10329087,
                        "color_border": 6809855,
                        "color": 2951253,
                        "id": 0,
                        "typ": 0,
                        "is_light": 1,
                        "ruid": 504140200,
                        "guard_level": 3,
                        "score": 0,
                        "guard_icon": "",
                        "honor_icon": "",
                        "v2_medal_color_start": "#9660E5CC",
                        "v2_medal_color_end": "#9660E5CC",
                        "v2_medal_color_border": "#D47AFFFF",
                        "v2_medal_color_text": "#FFFFFFFF",
                        "v2_medal_color_level": "#6C00A099",
                        "user_receive_count": 0
                    },
                    "wealth": null,
                    "title": null,
                    "guard": {
                        "level": 3,
                        "expired_str": ""
                    },
                    "uhead_frame": null,
                    "guard_leader": null
                },
                "score": 0
            }
        ],
        "top3": [
            {
                "ruid": 504140200,
                "rank": 1,
                "accompany": 306,
                "uinfo": {
                    "uid": 85743027,
                    "base": {
                        "name": "-小fa---",
                        "face": "https://i0.hdslb.com/bfs/face/82b2d0fef27b7b69be0d121b3ef0491504bbaae8.jpg",
                        "name_color": 0,
                        "is_mystery": false,
                        "risk_ctrl_info": null,
                        "origin_info": {
                            "name": "-小fa---",
                            "face": "https://i0.hdslb.com/bfs/face/82b2d0fef27b7b69be0d121b3ef0491504bbaae8.jpg"
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
                        "name": "软饭兔",
                        "level": 30,
                        "color_start": 2951253,
                        "color_end": 10329087,
                        "color_border": 16771156,
                        "color": 2951253,
                        "id": 0,
                        "typ": 0,
                        "is_light": 1,
                        "ruid": 504140200,
                        "guard_level": 2,
                        "score": 0,
                        "guard_icon": "",
                        "honor_icon": "",
                        "v2_medal_color_start": "#9660E5CC",
                        "v2_medal_color_end": "#9660E5CC",
                        "v2_medal_color_border": "#D47AFFFF",
                        "v2_medal_color_text": "#FFFFFFFF",
                        "v2_medal_color_level": "#6C00A099",
                        "user_receive_count": 0
                    },
                    "wealth": null,
                    "title": null,
                    "guard": {
                        "level": 2,
                        "expired_str": ""
                    },
                    "uhead_frame": null,
                    "guard_leader": null
                },
                "score": 0
            },
            {
                "ruid": 504140200,
                "rank": 2,
                "accompany": 1005,
                "uinfo": {
                    "uid": 28601039,
                    "base": {
                        "name": "捏软软的上帝",
                        "face": "https://i2.hdslb.com/bfs/face/1f2a9b20294452d5c6ce9f40c66b186ef57b92e5.jpg",
                        "name_color": 0,
                        "is_mystery": false,
                        "risk_ctrl_info": null,
                        "origin_info": {
                            "name": "捏软软的上帝",
                            "face": "https://i2.hdslb.com/bfs/face/1f2a9b20294452d5c6ce9f40c66b186ef57b92e5.jpg"
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
                        "name": "软饭兔",
                        "level": 29,
                        "color_start": 2951253,
                        "color_end": 10329087,
                        "color_border": 16771156,
                        "color": 2951253,
                        "id": 0,
                        "typ": 0,
                        "is_light": 1,
                        "ruid": 504140200,
                        "guard_level": 2,
                        "score": 0,
                        "guard_icon": "",
                        "honor_icon": "",
                        "v2_medal_color_start": "#9660E5CC",
                        "v2_medal_color_end": "#9660E5CC",
                        "v2_medal_color_border": "#D47AFFFF",
                        "v2_medal_color_text": "#FFFFFFFF",
                        "v2_medal_color_level": "#6C00A099",
                        "user_receive_count": 0
                    },
                    "wealth": null,
                    "title": null,
                    "guard": {
                        "level": 2,
                        "expired_str": ""
                    },
                    "uhead_frame": null,
                    "guard_leader": null
                },
                "score": 0
            },
            {
                "ruid": 504140200,
                "rank": 3,
                "accompany": 95,
                "uinfo": {
                    "uid": 3546834244995088,
                    "base": {
                        "name": "老实逸流-恩师软软riu",
                        "face": "https://i1.hdslb.com/bfs/face/0b1f95d926acfb06c8d7d9c66d2e1fabf3e1a3c4.jpg",
                        "name_color": 0,
                        "is_mystery": false,
                        "risk_ctrl_info": null,
                        "origin_info": {
                            "name": "老实逸流-恩师软软riu",
                            "face": "https://i1.hdslb.com/bfs/face/0b1f95d926acfb06c8d7d9c66d2e1fabf3e1a3c4.jpg"
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
                        "name": "软饭兔",
                        "level": 28,
                        "color_start": 398668,
                        "color_end": 6850801,
                        "color_border": 16771156,
                        "color": 398668,
                        "id": 0,
                        "typ": 0,
                        "is_light": 1,
                        "ruid": 504140200,
                        "guard_level": 2,
                        "score": 0,
                        "guard_icon": "",
                        "honor_icon": "",
                        "v2_medal_color_start": "#4775EFCC",
                        "v2_medal_color_end": "#4775EFCC",
                        "v2_medal_color_border": "#58A1F8FF",
                        "v2_medal_color_text": "#FFFFFFFF",
                        "v2_medal_color_level": "#000B7099",
                        "user_receive_count": 0
                    },
                    "wealth": null,
                    "title": null,
                    "guard": {
                        "level": 2,
                        "expired_str": ""
                    },
                    "uhead_frame": null,
                    "guard_leader": null
                },
                "score": 0
            }
        ],
        "my_follow_info": {
            "accompany_days": 0,
            "auto_renew": 0,
            "renew_remind": {
                "content": "",
                "type": 0,
                "hint": ""
            },
            "rank": 0,
            "ruid": 0,
            "uinfo": null,
            "expired_time": ""
        },
        "guard_warn": {
            "is_warn": 0,
            "warn": "",
            "expired": 0,
            "will_expired": 0,
            "address": ""
        },
        "exist_benefit": false,
        "remind_benefit": "立即上船",
        "ab": {
            "guard_accompany_list": 1
        },
        "remind_msg": "头号粉丝大航海，上船后可上榜",
        "typ": 0,
        "extop": null,
        "guard_leader": null,
        "main_text": "",
        "sub_text": "",
        "btn_type": 1,
        "prompt_text": "头号粉丝大航海，等你来上船"
    }
}
```

</details>


## 查询粉丝团成员


> https://api.live.bilibili.com/xlive/general-interface/v1/rank/getFansMembersRank

*请求方式: GET*

认证方式：无（无需Cookie）

| 参数名    | 类型 | 内容           | 必要性              | 备注                                                                                            |
| --------- | ---- | -------------- | ------------------- | ----------------------------------------------------------------------------------------------- |
| page      | num  | 页数           | 必要                |                                                                                                 |
| ruid      | num  | 主播id         | 必要                |                                                                                                 |
| page_size | num  | 每页返回的数量 | 必要                | 最大30，若超过则作为10处理                                                                      |
| rank_type | num  | 排序方式       | 非必要              | 1：按照粉丝牌还亮着的粉丝团成员的亲密度排序<br> 2：按照**所有**没上过舰的粉丝团成员的亲密度排序 |
| ts        | num  | 13位时间戳     | 当rank_type=2时必要 | 该值>=1000即可                                                                                  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 |         |
| data    | obj  | 信息本体 |         |

`data`对象：

| 字段         | 类型  | 内容           | 备注 |
| ------------ | ----- | -------------- | ---- |
| item         | array | 内容           |      |
| num          | num   | 粉丝团成员数量 |
| medal_status | num   |                |

`list`对象

| 字段               | 类型 | 内容                                                             | 备注 |
| ------------------ | ---- | ---------------------------------------------------------------- | ---- |
| user_rank          | num  | 排名                                                             |
| uid                | num  | 用户UID                                                          |
| name               | str  | 用户名                                                           |
| face               | str  | 用户头像                                                         |
| score              | num  | 亲密度                                                           |
| medal_name         | str  | 粉丝牌名字                                                       |
| level              | num  | 粉丝牌等级                                                       |
| target_id          | num  | 主播UID                                                          |
| guard_level        | num  | 大航海类型，1，2，3分别为总督，提督，舰长                        |
| medal_color_start  | num  | 粉丝牌渐变起始色                                                 |
| medal_color_end    | num  | 粉丝牌渐变结束色                                                 |
| medal_color_border | num  | 粉丝牌边框颜色                                                   |
| guard_icon         | str  | 大航海图标URL                                                    |
| uinfo_medal        | obj  | 粉丝牌，与[此处](/bilibili-API-collect/docs/user/medals)基本一致 |


**示例：**

查询用户`504140200`的粉丝团成员

```shell
curl  'https://api.live.bilibili.com/xlive/general-interface/v1/rank/getFansMembersRank?ruid=504140200&page_size=10&page=1'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "item": [
      {
        "user_rank": 1,
        "uid": 85743027,
        "name": "小软兔のfa",
        "face": "https://i0.hdslb.com/bfs/face/bdbcabf8d927844ae4f8f9c65862077e29afb989.jpg",
        "score": 50990540,
        "medal_name": "软饭兔",
        "level": 30,
        "target_id": 504140200,
        "special": "",
        "guard_level": 3,
        "medal_color_start": 2951253,
        "medal_color_end": 10329087,
        "medal_color_border": 6809855,
        "guard_icon": "https://i0.hdslb.com/bfs/live/143f5ec3003b4080d1b5f817a9efdca46d631945.png",
        "honor_icon": "",
        "uinfo_medal": {
          "name": "软饭兔",
          "level": 30,
          "color_start": 2951253,
          "color_end": 10329087,
          "color_border": 6809855,
          "color": 0,
          "id": 0,
          "typ": 0,
          "is_light": 1,
          "ruid": 504140200,
          "guard_level": 3,
          "score": 50990540,
          "guard_icon": "https://i0.hdslb.com/bfs/live/143f5ec3003b4080d1b5f817a9efdca46d631945.png",
          "honor_icon": "",
          "v2_medal_color_start": "#9660E5CC",
          "v2_medal_color_end": "#9660E5CC",
          "v2_medal_color_border": "#D47AFFFF",
          "v2_medal_color_text": "#FFFFFFFF",
          "v2_medal_color_level": "#6C00A099",
          "user_receive_count": 0
        },
        "tag": null,
        "is_pokeable": false
      },
      {
        "user_rank": 2,
        "uid": 7816639,
        "name": "在这样的时光",
        "face": "https://i1.hdslb.com/bfs/face/3b0091dda76e095351907e9c708b9571716aa3e1.jpg",
        "score": 50704568,
        "medal_name": "软饭兔",
        "level": 30,
        "target_id": 504140200,
        "special": "",
        "guard_level": 3,
        "medal_color_start": 2951253,
        "medal_color_end": 10329087,
        "medal_color_border": 6809855,
        "guard_icon": "https://i0.hdslb.com/bfs/live/143f5ec3003b4080d1b5f817a9efdca46d631945.png",
        "honor_icon": "",
        "uinfo_medal": {
          "name": "软饭兔",
          "level": 30,
          "color_start": 2951253,
          "color_end": 10329087,
          "color_border": 6809855,
          "color": 0,
          "id": 0,
          "typ": 0,
          "is_light": 1,
          "ruid": 504140200,
          "guard_level": 3,
          "score": 50704568,
          "guard_icon": "https://i0.hdslb.com/bfs/live/143f5ec3003b4080d1b5f817a9efdca46d631945.png",
          "honor_icon": "",
          "v2_medal_color_start": "#9660E5CC",
          "v2_medal_color_end": "#9660E5CC",
          "v2_medal_color_border": "#D47AFFFF",
          "v2_medal_color_text": "#FFFFFFFF",
          "v2_medal_color_level": "#6C00A099",
          "user_receive_count": 0
        },
        "tag": null,
        "is_pokeable": false
      }
    ],
    "num": 89,
    "medal_status": 1
  }
}
```

</details>
