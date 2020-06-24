# 评论区明细

<img src="/imgs/comment.svg" width="100" height="100"/>

**已知的评论区类型代码总览：**

| 代码 | 评论区类型              | oid的意义  |
| ---- | ----------------------- | ---------- |
| 1    | 视频                    | 视频avID   |
| 4    | 活动                    | 活动ID     |
| 5    | 小视频                  | 小视频ID   |
| 6    | 小黑屋                  | 封禁公示ID |
| 8    | 直播                    | 直播间ID   |
| 11   | 相簿&画友（图片动态）   | 相簿ID     |
| 12   | 专栏                    | 专栏cvID   |
| 14   | 音频                    | 音频auID   |
| 15   | 风纪委员会              | 众裁项目ID |
| 17   | 动态（纯文字动态&分享） | 动态ID     |
| 22   | 漫画                    | 漫画mcID   |
| 33   | 课程                    | 课程epID   |

## 获取评论区明细1(无楼层号 web端)

> http://api.bilibili.com/x/v2/reply

*方式：GET*

**url参数：**

| 参数名 | 类型 | 内容           | 必要性 | 备注                                    |
| ------ | ---- | -------------- | ------ | --------------------------------------- |
| type   | num  | 评论区类型代码 | 必要   | **类型代码见上表**                      |
| oid    | num  | 目标评论区ID   | 必要   |                                         |
| sort   | num  | 排序方式       | 非必要 | 默认为0<br />0：按时间<br />1 2：按热度 |
| nohot  | num  | 是否不显示热评 | 非必要 | 默认为0<br />1：不显示<br />0：显示     |
| pn     | num  | 页码           | 非必要 | 默认为1                                 |
| ps     | num  | 每页项数       | 非必要 | 默认为20<br />定义域：1-49              |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                                                         |
| ------- | ----------------------------- | -------- | ------------------------------------------------------------ |
| code    | num                           | 返回值   | 0：成功<br />-400：请求错误<br />-404：无此项<br />12002：评论区已关闭<br />12009：评论主体的type不合法 |
| message | str                           | 错误信息 | 默认为0                                                      |
| ttl     | num                           | 1        | **作用尚不明确**                                             |
| data    | 正确时：obj<br />错误时：null | 数据本体 |                                                              |

`data`对象：

| 字段         | 类型                             | 内容     | 备注             |
| ------------ | -------------------------------- | -------- | ---------------- |
| page         | obj                              | 页信息   |                  |
| config       | obj                              | 属性信息 |                  |
| replies      | 禁用时：null<br />正常时：array | 评论根列表 |                  |
| hots         | 禁用时：null<br />正常时：array | 热评根列表 |                  |
| upper        | obj                              | 置顶评论 |                  |
| top          | null                             | -        | **作用尚不明确** |
| notice       | 无效时：null<br />有效时：obj            | 评论区公告信息 |  |
| vote         | num                              | 0        | **作用尚不明确** |
| blacklist    | num                              | 0        | **作用尚不明确** |
| assist       | num                              | 0        | **作用尚不明确** |
| mode         | num                              | 3        | **作用尚不明确** |
| support_mode | array                           | ？？？   | **作用尚不明确** |
| folder       | obj                              | ??? | **作用尚不明确** |
| lottery_card | null                             | -        | **作用尚不明确** |
| show_bvid    | bool                             | true     | **作用尚不明确** |
| control      | obj                              | 评论区输入属性 |                  |

`data`中的`page`对象：

| 字段   | 类型 | 内容         | 备注 |
| ------ | ---- | ------------ | ---- |
| num    | num  | 当前页码     |      |
| size   | num  | 每页项数     |      |
| count  | num  | 根评论条数   |      |
| acount | num  | 总计评论条数 |      |

`data`中的`config`对象：

| 字段         | 类型 | 内容  | 备注             |
| ------------ | ---- | ----- | ---------------- |
| showadmin    | num  | 1     | **作用尚不明确** |
| showentry    | num  | 1     | **作用尚不明确** |
| showfloor    | num  | 0     | **作用尚不明确** |
| showtopic    | num  | 1     | **作用尚不明确** |
| show_up_flag | bool | true  | **作用尚不明确** |
| read_only    | bool | false | **作用尚不明确** |
| show_del_log | bool | false | **作用尚不明确** |

`data`中的`replies`数组：

| 项   | 类型 | 内容          | 备注               |
| ---- | ---- | ------------- | ------------------ |
| 0    | obj  | 评论条目1     | **详情见附表**     |
| n    | obj  | 评论条目(n+1) | 按照指定的顺序排列 |
| ……   | obj  | ……            | ……                 |

`data`中的`hots`数组：

| 项   | 类型 | 内容          | 备注             |
| ---- | ---- | ------------- | ---------------- |
| 0    | obj  | 热评条目1     | **详情见附表**   |
| n    | obj  | 热评条目(n+1) | 按照热评热度排列 |
| ……   | obj  | ……            | ……               |

`data`中的`upper`对象：

| 字段 | 类型                          | 内容     | 备注           |
| ---- | ----------------------------- | -------- | -------------- |
| mid  | num                           | UP主UID  |                |
| top  | 有效时：obj<br />无效时：null | 置顶条目 | **详情见附表** |
| vote | null                          | -        |                |

`data`中的`notice`对象：

| 字段    | 类型 | 内容            | 备注 |
| ------- | ---- | --------------- | ---- |
| content | str  | 公告正文        |      |
| id      | num  | 公告ID          |      |
| link    | str  | 公告页面链接url |      |
| title   | str  | 公告标题        |      |

`data`中的`support_mode`数组：

| 项   | 类型 | 内容 | 备注             |
| ---- | ---- | ---- | ---------------- |
| 0    | num  | 1    | **作用尚不明确** |
| 1    | num  | 2    | **作用尚不明确** |
| 2    | num  | 3    | **作用尚不明确** |

`data`中的`folder`对象：

| 字段       | 类型 | 内容   | 备注             |
| ---------- | ---- | ------ | ---------------- |
| has_folded | bool | false  | **作用尚不明确** |
| is_folded  | bool | false  | **作用尚不明确** |
| rule       | str  | ？？？ | **作用尚不明确** |

`data`中的`control`对象：

| 字段                     | 类型 | 内容               | 备注                                |
| ------------------------ | ---- | ------------------ | ----------------------------------- |
| input_disable            | bool | false              | **作用尚不明确**                    |
| root_input_text          | str  | 评论框文字         |                                     |
| child_input_text         | str  | 评论框文字         |                                     |
| bg_text                  | str  | 空评论区文字       |                                     |
| web_selection            | bool | 评论是否筛选后可见 | false：无需筛选<br />true：需要筛选 |
| answer_guide_text        | str  | 答题页面链接文字   |                                     |
| answer_guide_icon_url    | str  | 答题页面图标url    |                                     |
| answer_guide_ios_url     | str  | 答题页面ios url    |                                     |
| answer_guide_android_url | str  | 答题页面安卓url    |                                     |

**示例：**

获取视频`av2`的评论区明细，不显示热评，按照热度排序，每页5项，查看第1页

 http://api.bilibili.com/x/v2/reply?type=1&oid=2&sort=1&pn=1&ps=5&nohot=1

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "page": {
            "num": 1,
            "size": 5,
            "count": 14988,
            "acount": 65115
        },
        "config": {
            "showadmin": 1,
            "showentry": 1,
            "showfloor": 0,
            "showtopic": 1,
            "show_up_flag": true,
            "read_only": false,
            "show_del_log": false
        },
        "replies": [
            {
                "rpid": 476670,
                "oid": 2,
                "type": 1,
                "mid": 58426,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 1889,
                "rcount": 1839,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1291350931,
                "rpid_str": "476670",
                "root_str": "0",
                "parent_str": "0",
                "like": 53536,
                "action": 0,
                "member": {
                    "mid": "58426",
                    "uname": "残星什么的就是残星",
                    "sex": "男",
                    "sign": "少说话多做事 _微博@残星",
                    "avatar": "http://i0.hdslb.com/bfs/face/56ac36b37662e3746228f30eb4acf2cd332b66a5.jpg",
                    "rank": "20000",
                    "DisplayRank": "0",
                    "level_info": {
                        "current_level": 6,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": ""
                    },
                    "nameplate": {
                        "nid": 30,
                        "name": "字幕君",
                        "image": "http://i0.hdslb.com/bfs/face/383c3fed3dc162c93a8d616a272693f6650e98f1.png",
                        "image_small": "http://i2.hdslb.com/bfs/face/7ad18084e40b725210e22696e0efdae408cd378c.png",
                        "level": "稀有勋章",
                        "condition": "弹幕大赛获得"
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 1,
                        "vipDueDate": 1550851200000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 0,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": ""
                        }
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    }
                },
                "content": {
                    "message": "貌似没人来",
                    "plat": 1,
                    "device": "",
                    "members": [],
                    "jump_url": {},
                    "max_line": 6
                },
                "replies": [
                    {
                        "rpid": 568785293,
                        "oid": 2,
                        "type": 1,
                        "mid": 52987877,
                        "root": 476670,
                        "parent": 476670,
                        "dialog": 568785293,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1514903586,
                        "rpid_str": "568785293",
                        "root_str": "476670",
                        "parent_str": "476670",
                        "like": 3123,
                        "action": 0,
                        "member": {
                            "mid": "52987877",
                            "uname": "Mr-Shadow",
                            "sex": "男",
                            "sign": "重灾区话题回避",
                            "avatar": "http://i0.hdslb.com/bfs/face/ea3eede05ad51c34f382534793f0bf20fa6e79e8.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 457,
                                "name": "少女前线",
                                "image": "http://i2.hdslb.com/bfs/face/295cd9505bfe2edd360becd1ffd70f1870505696.png",
                                "expire": 0,
                                "image_enhance": "http://i2.hdslb.com/bfs/face/295cd9505bfe2edd360becd1ffd70f1870505696.png"
                            },
                            "nameplate": {
                                "nid": 61,
                                "name": "饭圈楷模",
                                "image": "http://i1.hdslb.com/bfs/face/5a90f715451325c642a6ac39e01195cb6d075734.png",
                                "image_small": "http://i2.hdslb.com/bfs/face/5bfc1b4fb3f4b411495dddb0b2127ad80f6fbcac.png",
                                "level": "普通勋章",
                                "condition": "当前持有粉丝勋章最高等级>=10级"
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 2,
                                "vipDueDate": 1618502400000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "年度大会员",
                                    "label_theme": "annual_vip"
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": {
                                    "id": 457,
                                    "name": "少女前线",
                                    "image": "http://i0.hdslb.com/bfs/face/295cd9505bfe2edd360becd1ffd70f1870505696.png",
                                    "jump_url": "",
                                    "type": "vip"
                                },
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "你可能抢到了整个b站最难抢到的沙发(｀・ω・´)",
                            "plat": 6,
                            "device": "pad",
                            "members": [],
                            "jump_url": {},
                            "max_line": 6
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    },
                    {
                        "rpid": 214198733,
                        "oid": 2,
                        "type": 1,
                        "mid": 18370638,
                        "root": 476670,
                        "parent": 476670,
                        "dialog": 214198733,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1488888369,
                        "rpid_str": "214198733",
                        "root_str": "476670",
                        "parent_str": "476670",
                        "like": 1183,
                        "action": 0,
                        "member": {
                            "mid": "18370638",
                            "uname": "初音ハク",
                            "sex": "保密",
                            "sign": "我是艾尔的利刃",
                            "avatar": "http://i1.hdslb.com/bfs/face/50b3a20369f4358beca8078ef6ac652093ce7414.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 74,
                                "name": "大会员2018年度勋章",
                                "image": "http://i1.hdslb.com/bfs/face/421179426c929dfeaed4117461c83f5d07ffb148.png",
                                "image_small": "http://i0.hdslb.com/bfs/face/682001c2e1c2ae887bdf2a0e18eef61180c48f84.png",
                                "level": "稀有勋章",
                                "condition": "2018.6.26-7.8某一天是年度大会员"
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 2,
                                "vipDueDate": 1620403200000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "年度大会员",
                                    "label_theme": "annual_vip"
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "划了4千多条评论找到的啊ε=ε=(ノ≧∇≦)ノ",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 6
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    },
                    {
                        "rpid": 214198179,
                        "oid": 2,
                        "type": 1,
                        "mid": 18370638,
                        "root": 476670,
                        "parent": 476670,
                        "dialog": 214198179,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1488888303,
                        "rpid_str": "214198179",
                        "root_str": "476670",
                        "parent_str": "476670",
                        "like": 1080,
                        "action": 0,
                        "member": {
                            "mid": "18370638",
                            "uname": "初音ハク",
                            "sex": "保密",
                            "sign": "我是艾尔的利刃",
                            "avatar": "http://i1.hdslb.com/bfs/face/50b3a20369f4358beca8078ef6ac652093ce7414.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 74,
                                "name": "大会员2018年度勋章",
                                "image": "http://i1.hdslb.com/bfs/face/421179426c929dfeaed4117461c83f5d07ffb148.png",
                                "image_small": "http://i0.hdslb.com/bfs/face/682001c2e1c2ae887bdf2a0e18eef61180c48f84.png",
                                "level": "稀有勋章",
                                "condition": "2018.6.26-7.8某一天是年度大会员"
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 2,
                                "vipDueDate": 1620403200000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "年度大会员",
                                    "label_theme": "annual_vip"
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "可怜的二楼(=・ω・=)",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 6
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    }
                ],
                "assist": 0,
                "folder": {
                    "has_folded": false,
                    "is_folded": false,
                    "rule": "https://www.bilibili.com/blackboard/foldingreply.html"
                },
                "up_action": {
                    "like": false,
                    "reply": false
                },
                "show_follow": false
            },
            {
                "rpid": 2576184175,
                "oid": 2,
                "type": 1,
                "mid": 24512285,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 836,
                "rcount": 801,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1584945297,
                "rpid_str": "2576184175",
                "root_str": "0",
                "parent_str": "0",
                "like": 27408,
                "action": 1,
                "member": {
                    "mid": "24512285",
                    "uname": "霁歆",
                    "sex": "男",
                    "sign": "",
                    "avatar": "http://i1.hdslb.com/bfs/face/9cb18f0a8e9cae048dfa816972ee247111a8e22d.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "level_info": {
                        "current_level": 5,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 994,
                        "name": "格兰芬多",
                        "image": "http://i2.hdslb.com/bfs/face/2dee633139ce7c6b0dca657236240cc399c090be.png",
                        "expire": 0,
                        "image_enhance": "http://i2.hdslb.com/bfs/face/2dee633139ce7c6b0dca657236240cc399c090be.png"
                    },
                    "nameplate": {
                        "nid": 58,
                        "name": "收集达人",
                        "image": "http://i2.hdslb.com/bfs/face/3f5539e1486303422ffc8595862ccb6606e0b745.png",
                        "image_small": "http://i1.hdslb.com/bfs/face/cf85e7908095d256e595ec9759f4e7795f23bc22.png",
                        "level": "普通勋章",
                        "condition": "同时拥有粉丝勋章>=15个"
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1613577600000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "年度大会员",
                            "label_theme": "annual_vip"
                        }
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": {
                            "id": 994,
                            "name": "格兰芬多",
                            "image": "http://i0.hdslb.com/bfs/face/2dee633139ce7c6b0dca657236240cc399c090be.png",
                            "jump_url": "",
                            "type": "vip"
                        },
                        "cardbg": null,
                        "cardbg_with_focus": null
                    }
                },
                "content": {
                    "message": "人类最古のav号（挂了的不算）也变成bv了[大哭][大哭][大哭]青春结束了",
                    "plat": 2,
                    "device": "",
                    "members": [],
                    "emote": {
                        "[大哭]": {
                            "id": 5,
                            "package_id": 1,
                            "state": 0,
                            "type": 1,
                            "attr": 0,
                            "text": "[大哭]",
                            "url": "http://i0.hdslb.com/bfs/emote/2caafee2e5db4db72104650d87810cc2c123fc86.png",
                            "meta": {
                                "size": 1
                            },
                            "mtime": 1577702898
                        }
                    },
                    "jump_url": {},
                    "max_line": 6
                },
                "replies": [
                    {
                        "rpid": 2578082161,
                        "oid": 2,
                        "type": 1,
                        "mid": 407225717,
                        "root": 2576184175,
                        "parent": 2576184175,
                        "dialog": 2578082161,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1584964926,
                        "rpid_str": "2578082161",
                        "root_str": "2576184175",
                        "parent_str": "2576184175",
                        "like": 1000,
                        "action": 0,
                        "member": {
                            "mid": "407225717",
                            "uname": "渣男5107号",
                            "sex": "保密",
                            "sign": "",
                            "avatar": "http://i2.hdslb.com/bfs/face/b7af802409026c6534441eb5298434feed41fd1d.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 4,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 0,
                                "name": "",
                                "image": "",
                                "image_small": "",
                                "level": "",
                                "condition": ""
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 1,
                                "vipDueDate": 1583942400000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": ""
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "先留个名，估计以后av会被当成冷知识放出来[大哭]",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "emote": {
                                "[大哭]": {
                                    "id": 5,
                                    "package_id": 1,
                                    "state": 0,
                                    "type": 1,
                                    "attr": 0,
                                    "text": "[大哭]",
                                    "url": "http://i0.hdslb.com/bfs/emote/2caafee2e5db4db72104650d87810cc2c123fc86.png",
                                    "meta": {
                                        "size": 1
                                    },
                                    "mtime": 1577702898
                                }
                            },
                            "jump_url": {},
                            "max_line": 6
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    },
                    {
                        "rpid": 2576348604,
                        "oid": 2,
                        "type": 1,
                        "mid": 172853390,
                        "root": 2576184175,
                        "parent": 2576184175,
                        "dialog": 2576348604,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1584947227,
                        "rpid_str": "2576348604",
                        "root_str": "2576184175",
                        "parent_str": "2576184175",
                        "like": 244,
                        "action": 0,
                        "member": {
                            "mid": "172853390",
                            "uname": "剑惊风雨丶",
                            "sex": "男",
                            "sign": "这个人勤快死了，什么都没有写(ー_ー)!!",
                            "avatar": "http://i0.hdslb.com/bfs/face/41c25392a4f96f48c499cc68dd9ad3215227c5ed.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 0,
                                "name": "",
                                "image": "",
                                "image_small": "",
                                "level": "",
                                "condition": ""
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 0,
                                "vipDueDate": 0,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": ""
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "av号还是可以搜啊",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 6
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    },
                    {
                        "rpid": 2579961512,
                        "oid": 2,
                        "type": 1,
                        "mid": 329965337,
                        "root": 2576184175,
                        "parent": 2576184175,
                        "dialog": 2579961512,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1584982846,
                        "rpid_str": "2579961512",
                        "root_str": "2576184175",
                        "parent_str": "2576184175",
                        "like": 134,
                        "action": 0,
                        "member": {
                            "mid": "329965337",
                            "uname": "积极发言的刘同学",
                            "sex": "男",
                            "sign": "化学世界真奇妙，学好化学炸学校。",
                            "avatar": "http://i1.hdslb.com/bfs/face/3b586d7dbe8c2dba32b213e0a474fe6d86921b85.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 4,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 0,
                                "name": "",
                                "image": "",
                                "image_small": "",
                                "level": "",
                                "condition": ""
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 1,
                                "vipDueDate": 1585324800000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": ""
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "10个小时就有6500多赞?你是魔鬼?",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 6
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    }
                ],
                "assist": 0,
                "folder": {
                    "has_folded": false,
                    "is_folded": false,
                    "rule": "https://www.bilibili.com/blackboard/foldingreply.html"
                },
                "up_action": {
                    "like": false,
                    "reply": false
                },
                "show_follow": false
            },
            {
                "rpid": 495059,
                "oid": 2,
                "type": 1,
                "mid": 2,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 555,
                "rcount": 530,
                "state": 2,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1291918239,
                "rpid_str": "495059",
                "root_str": "0",
                "parent_str": "0",
                "like": 15910,
                "action": 0,
                "member": {
                    "mid": "2",
                    "uname": "碧诗",
                    "sex": "男",
                    "sign": "kami.im 直男过气网红 # av362830 “We Are Star Dust”",
                    "avatar": "http://i0.hdslb.com/bfs/app/3e60b20604b6fdc7d081eb6a1ec72aa47c5a3964.jpg",
                    "rank": "20000",
                    "DisplayRank": "0",
                    "level_info": {
                        "current_level": 6,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 1141,
                        "name": "如果历史是一群喵",
                        "image": "http://i2.hdslb.com/bfs/garb/item/cd3e9a6fa18db9ebdc128b0fef64cb32c5aab854.png",
                        "expire": 0,
                        "image_enhance": "http://i2.hdslb.com/bfs/garb/item/cd3e9a6fa18db9ebdc128b0fef64cb32c5aab854.png"
                    },
                    "nameplate": {
                        "nid": 10,
                        "name": "见习偶像",
                        "image": "http://i1.hdslb.com/bfs/face/e93dd9edfa7b9e18bf46fd8d71862327a2350923.png",
                        "image_small": "http://i2.hdslb.com/bfs/face/275b468b043ec246737ab8580a2075bee0b1263b.png",
                        "level": "普通勋章",
                        "condition": "所有自制视频总播放数>=10万"
                    },
                    "official_verify": {
                        "type": 0,
                        "desc": "bilibili创始人（站长）"
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 3848745600000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "十年大会员",
                            "label_theme": "ten_annual_vip"
                        }
                    },
                    "fans_detail": null,
                    "following": 1,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": {
                            "id": 1141,
                            "name": "如果历史是一群喵",
                            "image": "http://i0.hdslb.com/bfs/garb/item/cd3e9a6fa18db9ebdc128b0fef64cb32c5aab854.png",
                            "jump_url": "",
                            "type": "suit"
                        },
                        "cardbg": null,
                        "cardbg_with_focus": null
                    }
                },
                "content": {
                    "message": "wwwww",
                    "plat": 1,
                    "device": "",
                    "members": [],
                    "jump_url": {},
                    "max_line": 6
                },
                "replies": [
                    {
                        "rpid": 164517433,
                        "oid": 2,
                        "type": 1,
                        "mid": 3476504,
                        "root": 495059,
                        "parent": 495059,
                        "dialog": 164517433,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1479570959,
                        "rpid_str": "164517433",
                        "root_str": "495059",
                        "parent_str": "495059",
                        "like": 206,
                        "action": 0,
                        "member": {
                            "mid": "3476504",
                            "uname": "麦斯科桑",
                            "sex": "保密",
                            "sign": "淡ACG的比例比例是屑.",
                            "avatar": "http://i2.hdslb.com/bfs/face/7bf954d807cbda4de4221d78f3b425534042ac02.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 194,
                                "name": "黑白无双",
                                "image": "http://i2.hdslb.com/bfs/face/89b25cad74abd9e42a94b11e456bc21fe36b8763.png",
                                "expire": 0,
                                "image_enhance": "http://i2.hdslb.com/bfs/face/89b25cad74abd9e42a94b11e456bc21fe36b8763.png"
                            },
                            "nameplate": {
                                "nid": 74,
                                "name": "大会员2018年度勋章",
                                "image": "http://i0.hdslb.com/bfs/face/421179426c929dfeaed4117461c83f5d07ffb148.png",
                                "image_small": "http://i1.hdslb.com/bfs/face/682001c2e1c2ae887bdf2a0e18eef61180c48f84.png",
                                "level": "稀有勋章",
                                "condition": "2018.6.26-7.8某一天是年度大会员"
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 2,
                                "vipDueDate": 1732204800000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "年度大会员",
                                    "label_theme": "annual_vip"
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": {
                                    "id": 194,
                                    "name": "黑白无双",
                                    "image": "http://i0.hdslb.com/bfs/face/89b25cad74abd9e42a94b11e456bc21fe36b8763.png",
                                    "jump_url": "",
                                    "type": "vip"
                                },
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "拉了半天总算是见了底",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 6
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    },
                    {
                        "rpid": 464424502,
                        "oid": 2,
                        "type": 1,
                        "mid": 37145412,
                        "root": 495059,
                        "parent": 495059,
                        "dialog": 464424502,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 1,
                        "attr": 0,
                        "ctime": 1509257961,
                        "rpid_str": "464424502",
                        "root_str": "495059",
                        "parent_str": "495059",
                        "like": 115,
                        "action": 0,
                        "member": {
                            "mid": "37145412",
                            "uname": "边走边发呆",
                            "sex": "男",
                            "sign": "这个人懒死了，什么都不发=_= 头像是素晴日",
                            "avatar": "http://i0.hdslb.com/bfs/face/4dfe0f1b0bfc9b1afea9e3bacbc5a92221fe9b09.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 60,
                                "name": "饭圈萌新",
                                "image": "http://i1.hdslb.com/bfs/face/51ca16136e570938450bca360f28761ceb609f33.png",
                                "image_small": "http://i1.hdslb.com/bfs/face/9abfa4769357f85937782c2dbc40fafda4f57217.png",
                                "level": "普通勋章",
                                "condition": "当前持有粉丝勋章最高等级>=5级"
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 1,
                                "vipDueDate": 1559836800000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": ""
                                }
                            },
                            "fans_detail": {
                                "uid": 37145412,
                                "medal_id": 29058,
                                "medal_name": "逸国",
                                "score": 0,
                                "level": 7,
                                "intimacy": 0,
                                "master_status": 1,
                                "is_receive": 1
                            },
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "5000多楼6225评论(;¬_¬)手有点酸，如果不是特殊方法进来的话是要大会员吧(●￣(ｴ)￣●)",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 6
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    },
                    {
                        "rpid": 214199123,
                        "oid": 2,
                        "type": 1,
                        "mid": 18370638,
                        "root": 495059,
                        "parent": 495059,
                        "dialog": 214199123,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1488888421,
                        "rpid_str": "214199123",
                        "root_str": "495059",
                        "parent_str": "495059",
                        "like": 41,
                        "action": 0,
                        "member": {
                            "mid": "18370638",
                            "uname": "初音ハク",
                            "sex": "保密",
                            "sign": "我是艾尔的利刃",
                            "avatar": "http://i1.hdslb.com/bfs/face/50b3a20369f4358beca8078ef6ac652093ce7414.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 74,
                                "name": "大会员2018年度勋章",
                                "image": "http://i1.hdslb.com/bfs/face/421179426c929dfeaed4117461c83f5d07ffb148.png",
                                "image_small": "http://i0.hdslb.com/bfs/face/682001c2e1c2ae887bdf2a0e18eef61180c48f84.png",
                                "level": "稀有勋章",
                                "condition": "2018.6.26-7.8某一天是年度大会员"
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 2,
                                "vipDueDate": 1620403200000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "年度大会员",
                                    "label_theme": "annual_vip"
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "划了4千多条评论找到的啊ε=ε=(ノ≧∇≦)ノ",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 6
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    }
                ],
                "assist": 0,
                "folder": {
                    "has_folded": false,
                    "is_folded": false,
                    "rule": "https://www.bilibili.com/blackboard/foldingreply.html"
                },
                "up_action": {
                    "like": false,
                    "reply": false
                },
                "show_follow": false
            },
            {
                "rpid": 208000425,
                "oid": 2,
                "type": 1,
                "mid": 30976371,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 544,
                "rcount": 511,
                "state": 2,
                "fansgrade": 0,
                "attr": 12,
                "ctime": 1487772179,
                "rpid_str": "208000425",
                "root_str": "0",
                "parent_str": "0",
                "like": 16839,
                "action": 0,
                "member": {
                    "mid": "30976371",
                    "uname": "紫荆7x",
                    "sex": "保密",
                    "sign": "寒山渐远渐明薄，未知前路几迢遥。 \n",
                    "avatar": "http://i1.hdslb.com/bfs/face/0939e21818bf913b4ee35aaa0e604fc9938047ce.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "level_info": {
                        "current_level": 6,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 1635,
                        "name": "明日方舟-阿米娅",
                        "image": "http://i0.hdslb.com/bfs/face/34d7b5509d90dbc19f5f7e63788842e0080b00c2.png",
                        "expire": 0,
                        "image_enhance": "http://i0.hdslb.com/bfs/face/34d7b5509d90dbc19f5f7e63788842e0080b00c2.png"
                    },
                    "nameplate": {
                        "nid": 0,
                        "name": "",
                        "image": "",
                        "image_small": "",
                        "level": "",
                        "condition": ""
                    },
                    "official_verify": {
                        "type": 0,
                        "desc": "音乐人紫荆7x"
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1650988800000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "年度大会员",
                            "label_theme": "annual_vip"
                        }
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": {
                            "id": 1635,
                            "name": "明日方舟-阿米娅",
                            "image": "http://i0.hdslb.com/bfs/face/34d7b5509d90dbc19f5f7e63788842e0080b00c2.png",
                            "jump_url": "",
                            "type": "pay"
                        },
                        "cardbg": null,
                        "cardbg_with_focus": null
                    }
                },
                "content": {
                    "message": "av1是“公告”，主要是公布B站的部分升级内容、活动预告相关事件等信息。范围是2010年6月7日-2011年7月26日，UP主是ANA，整个合集共计1886P。内容以文本显示没有视频，现已无法进入，不过B站的官方微博、微信和*******可以查阅到相关内容。\n原稿请搜索知乎，有图，侵删【B站av1-6有人看过吗？】",
                    "plat": 2,
                    "device": "",
                    "members": [],
                    "jump_url": {},
                    "max_line": 6
                },
                "replies": [
                    {
                        "rpid": 208106601,
                        "oid": 2,
                        "type": 1,
                        "mid": 33202778,
                        "root": 208000425,
                        "parent": 208000425,
                        "dialog": 208106601,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1487781338,
                        "rpid_str": "208106601",
                        "root_str": "208000425",
                        "parent_str": "208000425",
                        "like": 4659,
                        "action": 0,
                        "member": {
                            "mid": "33202778",
                            "uname": "Adnini983",
                            "sex": "保密",
                            "sign": "Twitter：@adnini983 汤不热：https://adnini983.tumblr.com/",
                            "avatar": "http://i0.hdslb.com/bfs/face/8b11f5635b78cc5cdbd8245048405f52d24f187a.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 6,
                                "name": "高级搬运工",
                                "image": "http://i2.hdslb.com/bfs/face/a9af39ab7ed08e078c45d58dd96a6411aba1a9d3.png",
                                "image_small": "http://i2.hdslb.com/bfs/face/46e5aae4667c72c379b46b51fac4b4426d9214e7.png",
                                "level": "高级勋章",
                                "condition": "转载视频投稿通过总数>=100"
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 1,
                                "vipDueDate": 1521043200000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": ""
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "这个就是我在知乎写的，我就是知乎上的Adnini983。但考虑到你标注了出处，我允许你予以保留。",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 6
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    },
                    {
                        "rpid": 208002062,
                        "oid": 2,
                        "type": 1,
                        "mid": 30976371,
                        "root": 208000425,
                        "parent": 208000425,
                        "dialog": 208002062,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1487772305,
                        "rpid_str": "208002062",
                        "root_str": "208000425",
                        "parent_str": "208000425",
                        "like": 1862,
                        "action": 0,
                        "member": {
                            "mid": "30976371",
                            "uname": "紫荆7x",
                            "sex": "保密",
                            "sign": "寒山渐远渐明薄，未知前路几迢遥。 \n",
                            "avatar": "http://i1.hdslb.com/bfs/face/0939e21818bf913b4ee35aaa0e604fc9938047ce.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 6,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 1635,
                                "name": "明日方舟-阿米娅",
                                "image": "http://i0.hdslb.com/bfs/face/34d7b5509d90dbc19f5f7e63788842e0080b00c2.png",
                                "expire": 0,
                                "image_enhance": "http://i0.hdslb.com/bfs/face/34d7b5509d90dbc19f5f7e63788842e0080b00c2.png"
                            },
                            "nameplate": {
                                "nid": 0,
                                "name": "",
                                "image": "",
                                "image_small": "",
                                "level": "",
                                "condition": ""
                            },
                            "official_verify": {
                                "type": 0,
                                "desc": "音乐人紫荆7x"
                            },
                            "vip": {
                                "vipType": 2,
                                "vipDueDate": 1650988800000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "年度大会员",
                                    "label_theme": "annual_vip"
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": {
                                    "id": 1635,
                                    "name": "明日方舟-阿米娅",
                                    "image": "http://i0.hdslb.com/bfs/face/34d7b5509d90dbc19f5f7e63788842e0080b00c2.png",
                                    "jump_url": "",
                                    "type": "pay"
                                },
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "av4无法使用任何方式访问",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 6
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    },
                    {
                        "rpid": 208000986,
                        "oid": 2,
                        "type": 1,
                        "mid": 30976371,
                        "root": 208000425,
                        "parent": 208000425,
                        "dialog": 208000986,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1487772222,
                        "rpid_str": "208000986",
                        "root_str": "208000425",
                        "parent_str": "208000425",
                        "like": 1572,
                        "action": 0,
                        "member": {
                            "mid": "30976371",
                            "uname": "紫荆7x",
                            "sex": "保密",
                            "sign": "寒山渐远渐明薄，未知前路几迢遥。 \n",
                            "avatar": "http://i1.hdslb.com/bfs/face/0939e21818bf913b4ee35aaa0e604fc9938047ce.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 6,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 1635,
                                "name": "明日方舟-阿米娅",
                                "image": "http://i0.hdslb.com/bfs/face/34d7b5509d90dbc19f5f7e63788842e0080b00c2.png",
                                "expire": 0,
                                "image_enhance": "http://i0.hdslb.com/bfs/face/34d7b5509d90dbc19f5f7e63788842e0080b00c2.png"
                            },
                            "nameplate": {
                                "nid": 0,
                                "name": "",
                                "image": "",
                                "image_small": "",
                                "level": "",
                                "condition": ""
                            },
                            "official_verify": {
                                "type": 0,
                                "desc": "音乐人紫荆7x"
                            },
                            "vip": {
                                "vipType": 2,
                                "vipDueDate": 1650988800000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "年度大会员",
                                    "label_theme": "annual_vip"
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": {
                                    "id": 1635,
                                    "name": "明日方舟-阿米娅",
                                    "image": "http://i0.hdslb.com/bfs/face/34d7b5509d90dbc19f5f7e63788842e0080b00c2.png",
                                    "jump_url": "",
                                    "type": "pay"
                                },
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "av2是一部名叫“字幕君交流场所”的视频，里面包含了东方Project的图片和音乐，UP主是碧诗。通常情况下无法打开，但可以使用唧唧下载视频。（现在可以打开了，恭喜你们）",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 6
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    }
                ],
                "assist": 0,
                "folder": {
                    "has_folded": false,
                    "is_folded": false,
                    "rule": "https://www.bilibili.com/blackboard/foldingreply.html"
                },
                "up_action": {
                    "like": false,
                    "reply": false
                },
                "show_follow": false
            },
            {
                "rpid": 917945205,
                "oid": 2,
                "type": 1,
                "mid": 34762090,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 124,
                "rcount": 104,
                "state": 0,
                "fansgrade": 1,
                "attr": 0,
                "ctime": 1532071373,
                "rpid_str": "917945205",
                "root_str": "0",
                "parent_str": "0",
                "like": 7488,
                "action": 0,
                "member": {
                    "mid": "34762090",
                    "uname": "某不科学的瓜皮",
                    "sex": "男",
                    "sign": "持杯拱天，谓无言，静沉眠",
                    "avatar": "http://i2.hdslb.com/bfs/face/cc61140c64409a3f5793207f3c866555e8638ab5.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "level_info": {
                        "current_level": 5,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": ""
                    },
                    "nameplate": {
                        "nid": 4,
                        "name": "青铜殿堂",
                        "image": "http://i2.hdslb.com/bfs/face/2879cd5fb8518f7c6da75887994c1b2a7fe670bd.png",
                        "image_small": "http://i1.hdslb.com/bfs/face/6707c120e00a3445933308fd9b7bd9fad99e9ec4.png",
                        "level": "普通勋章",
                        "condition": "单个自制视频总播放数>=1万"
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 1,
                        "vipDueDate": 1583164800000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 0,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": ""
                        }
                    },
                    "fans_detail": {
                        "uid": 34762090,
                        "medal_id": 29058,
                        "medal_name": "逸国",
                        "score": 0,
                        "level": 1,
                        "intimacy": 0,
                        "master_status": 1,
                        "is_receive": 1
                    },
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    }
                },
                "content": {
                    "message": "7.20日，站长被封7天\n\n历史性留名[2233娘_卖萌]",
                    "plat": 2,
                    "device": "",
                    "members": [],
                    "emote": {
                        "[2233娘_卖萌]": {
                            "id": 140,
                            "package_id": 6,
                            "state": 0,
                            "type": 2,
                            "attr": 0,
                            "text": "[2233娘_卖萌]",
                            "url": "http://i0.hdslb.com/bfs/emote/ea893aa25355de95ab4f03c2dad3f0c58d0c159e.png",
                            "meta": {
                                "size": 2
                            },
                            "mtime": 1586316683
                        }
                    },
                    "jump_url": {},
                    "max_line": 6
                },
                "replies": [
                    {
                        "rpid": 1781253749,
                        "oid": 2,
                        "type": 1,
                        "mid": 34762090,
                        "root": 917945205,
                        "parent": 917945205,
                        "dialog": 1781253749,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 1,
                        "attr": 0,
                        "ctime": 1563598609,
                        "rpid_str": "1781253749",
                        "root_str": "917945205",
                        "parent_str": "917945205",
                        "like": 374,
                        "action": 0,
                        "member": {
                            "mid": "34762090",
                            "uname": "某不科学的瓜皮",
                            "sex": "男",
                            "sign": "持杯拱天，谓无言，静沉眠",
                            "avatar": "http://i2.hdslb.com/bfs/face/cc61140c64409a3f5793207f3c866555e8638ab5.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 4,
                                "name": "青铜殿堂",
                                "image": "http://i2.hdslb.com/bfs/face/2879cd5fb8518f7c6da75887994c1b2a7fe670bd.png",
                                "image_small": "http://i1.hdslb.com/bfs/face/6707c120e00a3445933308fd9b7bd9fad99e9ec4.png",
                                "level": "普通勋章",
                                "condition": "单个自制视频总播放数>=1万"
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 1,
                                "vipDueDate": 1583164800000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": ""
                                }
                            },
                            "fans_detail": {
                                "uid": 34762090,
                                "medal_id": 29058,
                                "medal_name": "逸国",
                                "score": 0,
                                "level": 1,
                                "intimacy": 0,
                                "master_status": 1,
                                "is_receive": 1
                            },
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "站长被封一周年 [小电视_笑]",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "emote": {
                                "[小电视_笑]": {
                                    "id": 121,
                                    "package_id": 5,
                                    "state": 0,
                                    "type": 2,
                                    "attr": 0,
                                    "text": "[小电视_笑]",
                                    "url": "http://i0.hdslb.com/bfs/emote/f80d384875183dfe2e24be13011c595c0210d273.png",
                                    "meta": {
                                        "size": 2
                                    },
                                    "mtime": 1591272851
                                }
                            },
                            "jump_url": {},
                            "max_line": 6
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    },
                    {
                        "rpid": 1387109941,
                        "oid": 2,
                        "type": 1,
                        "mid": 317451026,
                        "root": 917945205,
                        "parent": 917945205,
                        "dialog": 1387109941,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1550139263,
                        "rpid_str": "1387109941",
                        "root_str": "917945205",
                        "parent_str": "917945205",
                        "like": 294,
                        "action": 0,
                        "member": {
                            "mid": "317451026",
                            "uname": "草_grass",
                            "sex": "男",
                            "sign": "NOTHING",
                            "avatar": "http://i1.hdslb.com/bfs/face/c4569f98034a7810063bc52eef9d446711688c12.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 4,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 0,
                                "name": "",
                                "image": "",
                                "image_small": "",
                                "level": "",
                                "condition": ""
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 0,
                                "vipDueDate": 0,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": ""
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "头七还行？",
                            "plat": 1,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 6
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    },
                    {
                        "rpid": 1781556726,
                        "oid": 2,
                        "type": 1,
                        "mid": 417437969,
                        "root": 917945205,
                        "parent": 1781253749,
                        "dialog": 1781253749,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1563605321,
                        "rpid_str": "1781556726",
                        "root_str": "917945205",
                        "parent_str": "1781253749",
                        "like": 116,
                        "action": 0,
                        "member": {
                            "mid": "417437969",
                            "uname": "理查奈德",
                            "sex": "男",
                            "sign": "手殘的屑玩家兼見習音罵製作者，有正常麥克風了可能會搞手書配音？",
                            "avatar": "http://i0.hdslb.com/bfs/face/6923f6414503413f292a1cfad13ac483683a77d6.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 4,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 0,
                                "name": "",
                                "image": "",
                                "image_small": "",
                                "level": "",
                                "condition": ""
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 0,
                                "vipDueDate": 0,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": ""
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "回复 @某不科学的瓜皮 :这是件值得庆祝的日子啊（滑稽保命）[滑稽]",
                            "plat": 2,
                            "device": "",
                            "members": [
                                {
                                    "mid": "34762090",
                                    "uname": "某不科学的瓜皮",
                                    "sex": "男",
                                    "sign": "持杯拱天，谓无言，静沉眠",
                                    "avatar": "http://i2.hdslb.com/bfs/face/cc61140c64409a3f5793207f3c866555e8638ab5.jpg",
                                    "rank": "10000",
                                    "DisplayRank": "0",
                                    "level_info": {
                                        "current_level": 5,
                                        "current_min": 0,
                                        "current_exp": 0,
                                        "next_exp": 0
                                    },
                                    "pendant": {
                                        "pid": 0,
                                        "name": "",
                                        "image": "",
                                        "expire": 0,
                                        "image_enhance": ""
                                    },
                                    "nameplate": {
                                        "nid": 4,
                                        "name": "青铜殿堂",
                                        "image": "http://i2.hdslb.com/bfs/face/2879cd5fb8518f7c6da75887994c1b2a7fe670bd.png",
                                        "image_small": "http://i1.hdslb.com/bfs/face/6707c120e00a3445933308fd9b7bd9fad99e9ec4.png",
                                        "level": "普通勋章",
                                        "condition": "单个自制视频总播放数>=1万"
                                    },
                                    "official_verify": {
                                        "type": -1,
                                        "desc": ""
                                    },
                                    "vip": {
                                        "vipType": 1,
                                        "vipDueDate": 1583164800000,
                                        "dueRemark": "",
                                        "accessStatus": 0,
                                        "vipStatus": 0,
                                        "vipStatusWarn": "",
                                        "themeType": 0,
                                        "label": {
                                            "path": ""
                                        }
                                    }
                                }
                            ],
                            "emote": {
                                "[滑稽]": {
                                    "id": 27,
                                    "package_id": 1,
                                    "state": 0,
                                    "type": 1,
                                    "attr": 0,
                                    "text": "[滑稽]",
                                    "url": "http://i0.hdslb.com/bfs/emote/d15121545a99ac46774f1f4465b895fe2d1411c3.png",
                                    "meta": {
                                        "size": 1
                                    },
                                    "mtime": 1577702898
                                }
                            },
                            "jump_url": {},
                            "max_line": 6
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    }
                ],
                "assist": 0,
                "folder": {
                    "has_folded": false,
                    "is_folded": false,
                    "rule": "https://www.bilibili.com/blackboard/foldingreply.html"
                },
                "up_action": {
                    "like": false,
                    "reply": false
                },
                "show_follow": false
            }
        ],
        "hots": null,
        "upper": {
            "mid": 2,
            "top": null,
            "vote": null
        },
        "top": null,
        "notice": {
            "id": 923,
            "title": "你的钱包被什么掏空了？回血红包拿好！>>",
            "content": "你的钱包被什么掏空了？回血红包拿好！>>",
            "link": "https://www.bilibili.com/blackboard/6181-m.html?mscource=xht"
        },
        "vote": 0,
        "blacklist": 0,
        "assist": 0,
        "mode": 3,
        "support_mode": [
            1,
            2,
            3
        ],
        "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": "https://www.bilibili.com/blackboard/foldingreply.html"
        },
        "lottery_card": null,
        "show_bvid": true,
        "control": {
            "input_disable": false,
            "root_input_text": "",
            "child_input_text": "",
            "bg_text": "看看下面~来发评论吧",
            "web_selection": false,
            "answer_guide_text": "需要升级成为lv2会员后才可以评论，先去答题转正吧！",
            "answer_guide_icon_url": "http://i0.hdslb.com/bfs/emote/96940d16602cacbbac796245b7bb99fa9b5c970c.png",
            "answer_guide_ios_url": "https://www.bilibili.com/h5/newbie/entry?navhide=1&re_src=12",
            "answer_guide_android_url": "https://www.bilibili.com/h5/newbie/entry?navhide=1&re_src=6"
        }
    }
}
```



## 获取评论区明细2(带有楼层号 客户端)

> http://api.bilibili.com/x/v2/reply/main

*方式：GET*

**url参数：**

| 参数名 | 类型 | 内容           | 必要性 | 备注                                                         |
| ------ | ---- | -------------- | ------ | ------------------------------------------------------------ |
| type   | num  | 评论区类型代码 | 必要   | **类型代码见上表**                                           |
| oid    | num  | 目标评论区ID   | 必要   |                                                              |
| mode   | num  | 排序方式       | 非必要 | 默认为0<br />0 3：仅按热度<br />1：按热度+按时间<br />2：仅按时间 |
| next   | num  | 评论页选择     | 非必要 | 按热度时：热度顺序页码（0为第一页）<br />按时间时：时间倒序楼层号<br />默认为0 |
| ps     | num  | 每页项数       | 非必要 | 默认为20<br />定义域：1-49                                   |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                                                         |
| ------- | ----------------------------- | -------- | ------------------------------------------------------------ |
| code    | num                           | 返回值   | 0：成功<br />-400：请求错误<br />-404：无此项<br />12002：评论区已关闭<br />12009：评论主体的type不合法 |
| message | str                           | 错误信息 | 默认为0                                                      |
| ttl     | num                           | 1        | **作用尚不明确**                                             |
| data    | 正确时：obj<br />错误时：null | 数据本体 |                                                              |

`data`对象：

| 字段         | 类型                             | 内容     | 备注             |
| ------------ | -------------------------------- | -------- | ---------------- |
| cursor    | obj                              | 页信息   |                  |
| hots         | 禁用时：null<br />正常时：array | 热评根列表 |                  |
| notice       | 无效时：null<br />有效时：obj            | 评论区公告信息 |  |
| replies      | 禁用时：null<br />正常时：array | 评论根列表 |                  |
| top          | obj                       | -        | **作用尚不明确** |
| lottery_card | null                             | -        | **作用尚不明确** |
| folder       | obj                              | ??? | **作用尚不明确** |
| assist       | num                              | 0        | **作用尚不明确** |
| blacklist    | num                              | 0        | **作用尚不明确** |
| vote         | num                              | 0        | **作用尚不明确** |
| lottery | num | 0 | **作用尚不明确** |
| config       | obj                              | 属性信息 |                  |
| upper        | obj                              | UP主信息 |                  |
| mode         | num                              | 3        | **作用尚不明确** |
| support_mode | array                           | ？？？   | **作用尚不明确** |
| show_bvid    | bool                             | true     | **作用尚不明确** |
| control      | obj                              | 评论区输入属性 |                  |

`data`中的`cursor`对象：

| 字段         | 类型  | 内容         | 备注                    |
| ------------ | ----- | ------------ | ----------------------- |
| all_count    | num   | 全部评论条数 |                         |
| is_begin     | bool  | 是否为第一页 | false：否<br />true：是 |
| prev         | num   | 上页页码     |                         |
| next         | num   | 下页页码     |                         |
| is_end       | bool  | 是否为最后页 | false：否<br />true：是 |
| mode         | num   | 排序方式     |                         |
| show_type    | num   | 1            | **作用尚不明确**        |
| support_mode | array | ？？？       |                         |
| name         | str   | 评论区类型名 |                         |

`cursor`中的`support_mode`数组：

| 项   | 类型 | 内容 | 备注             |
| ---- | ---- | ---- | ---------------- |
| 0    | num  | 1    | **作用尚不明确** |
| 1    | num  | 2    | **作用尚不明确** |
| 2    | num  | 3    | **作用尚不明确** |

`data`中的`top`对象：

| 字段  | 类型                          | 内容     | 备注           |
| ----- | ----------------------------- | -------- | -------------- |
| admin | null                          | -        |                |
| upper | 有效时：obj<br />无效时：null | 置顶条目 | **详情见附表** |
| vote  | null                          | -        |                |

`data`中的`config`对象：

| 字段         | 类型 | 内容  | 备注             |
| ------------ | ---- | ----- | ---------------- |
| showadmin    | num  | 1     | **作用尚不明确** |
| showentry    | num  | 1     | **作用尚不明确** |
| showfloor    | num  | 0     | **作用尚不明确** |
| showtopic    | num  | 1     | **作用尚不明确** |
| show_up_flag | bool | true  | **作用尚不明确** |
| read_only    | bool | false | **作用尚不明确** |
| show_del_log | bool | false | **作用尚不明确** |

`data`中的`replies`数组：

| 项   | 类型 | 内容          | 备注               |
| ---- | ---- | ------------- | ------------------ |
| 0    | obj  | 评论条目1     | **详情见附表**     |
| n    | obj  | 评论条目(n+1) | 按照指定的顺序排列 |
| ……   | obj  | ……            | ……                 |

`data`中的`hots`数组：

| 项   | 类型 | 内容          | 备注             |
| ---- | ---- | ------------- | ---------------- |
| 0    | obj  | 热评条目1     | **详情见附表**   |
| n    | obj  | 热评条目(n+1) | 按照热评热度排列 |
| ……   | obj  | ……            | ……               |

`data`中的`upper`对象：

| 字段 | 类型 | 内容    | 备注 |
| ---- | ---- | ------- | ---- |
| mid  | num  | UP主UID |      |

`data`中的`notice`对象：

| 字段    | 类型 | 内容            | 备注 |
| ------- | ---- | --------------- | ---- |
| content | str  | 公告正文        |      |
| id      | num  | 公告ID          |      |
| link    | str  | 公告页面链接url |      |
| title   | str  | 公告标题        |      |

`data`中的`support_mode`数组：

| 项   | 类型 | 内容 | 备注             |
| ---- | ---- | ---- | ---------------- |
| 0    | num  | 1    | **作用尚不明确** |
| 1    | num  | 2    | **作用尚不明确** |
| 2    | num  | 3    | **作用尚不明确** |

`data`中的`folder`对象：

| 字段       | 类型 | 内容   | 备注             |
| ---------- | ---- | ------ | ---------------- |
| has_folded | bool | false  | **作用尚不明确** |
| is_folded  | bool | false  | **作用尚不明确** |
| rule       | str  | ？？？ | **作用尚不明确** |

`data`中的`control`对象：

| 字段                     | 类型 | 内容               | 备注                                |
| ------------------------ | ---- | ------------------ | ----------------------------------- |
| input_disable            | bool | false              | **作用尚不明确**                    |
| root_input_text          | str  | 评论框文字         |                                     |
| child_input_text         | str  | 评论框文字         |                                     |
| bg_text                  | str  | 空评论区文字       |                                     |
| web_selection            | bool | 评论是否筛选后可见 | false：无需筛选<br />true：需要筛选 |
| answer_guide_text        | str  | 答题页面链接文字   |                                     |
| answer_guide_icon_url    | str  | 答题页面图标url    |                                     |
| answer_guide_ios_url     | str  | 答题页面ios url    |                                     |
| answer_guide_android_url | str  | 答题页面安卓url    |                                     |

**示例：**

获取视频`av2`的评论区明细（显示楼层号），按照热度排序，每页5项，查看第1页

http://api.bilibili.com/x/v2/reply/main?type=1&oid=2&mode=3&next=0&ps=5

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "cursor": {
            "all_count": 65150,
            "is_begin": true,
            "prev": 1,
            "next": 2,
            "is_end": false,
            "mode": 3,
            "show_type": 1,
            "support_mode": [
                1,
                2,
                3
            ],
            "name": "热门评论"
        },
        "hots": null,
        "notice": null,
        "replies": [
            {
                "rpid": 476670,
                "oid": 2,
                "type": 1,
                "mid": 58426,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 1891,
                "rcount": 1841,
                "floor": 2,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1291350931,
                "rpid_str": "476670",
                "root_str": "0",
                "parent_str": "0",
                "like": 53624,
                "action": 0,
                "member": {
                    "mid": "58426",
                    "uname": "残星什么的就是残星",
                    "sex": "男",
                    "sign": "少说话多做事 _微博@残星",
                    "avatar": "http://i1.hdslb.com/bfs/face/56ac36b37662e3746228f30eb4acf2cd332b66a5.jpg",
                    "rank": "20000",
                    "DisplayRank": "0",
                    "level_info": {
                        "current_level": 6,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": ""
                    },
                    "nameplate": {
                        "nid": 30,
                        "name": "字幕君",
                        "image": "http://i2.hdslb.com/bfs/face/383c3fed3dc162c93a8d616a272693f6650e98f1.png",
                        "image_small": "http://i0.hdslb.com/bfs/face/7ad18084e40b725210e22696e0efdae408cd378c.png",
                        "level": "稀有勋章",
                        "condition": "弹幕大赛获得"
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 1,
                        "vipDueDate": 1550851200000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 0,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "",
                            "label_theme": ""
                        }
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    }
                },
                "content": {
                    "message": "貌似没人来",
                    "plat": 1,
                    "device": "",
                    "members": [],
                    "jump_url": {},
                    "max_line": 6
                },
                "replies": [
                    {
                        "rpid": 568785293,
                        "oid": 2,
                        "type": 1,
                        "mid": 52987877,
                        "root": 476670,
                        "parent": 476670,
                        "dialog": 568785293,
                        "count": 0,
                        "rcount": 0,
                        "floor": 20,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1514903586,
                        "rpid_str": "568785293",
                        "root_str": "476670",
                        "parent_str": "476670",
                        "like": 3136,
                        "action": 0,
                        "member": {
                            "mid": "52987877",
                            "uname": "Mr-Shadow",
                            "sex": "男",
                            "sign": "重灾区话题回避",
                            "avatar": "http://i1.hdslb.com/bfs/face/40c52920c0285080df5bde72765b1e181d05fb17.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 457,
                                "name": "少女前线",
                                "image": "http://i2.hdslb.com/bfs/face/295cd9505bfe2edd360becd1ffd70f1870505696.png",
                                "expire": 0,
                                "image_enhance": "http://i2.hdslb.com/bfs/face/295cd9505bfe2edd360becd1ffd70f1870505696.png"
                            },
                            "nameplate": {
                                "nid": 61,
                                "name": "饭圈楷模",
                                "image": "http://i1.hdslb.com/bfs/face/5a90f715451325c642a6ac39e01195cb6d075734.png",
                                "image_small": "http://i0.hdslb.com/bfs/face/5bfc1b4fb3f4b411495dddb0b2127ad80f6fbcac.png",
                                "level": "普通勋章",
                                "condition": "当前持有粉丝勋章最高等级>=10级"
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 2,
                                "vipDueDate": 1618502400000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "年度大会员",
                                    "label_theme": "annual_vip"
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": {
                                    "id": 457,
                                    "name": "少女前线",
                                    "image": "http://i0.hdslb.com/bfs/face/295cd9505bfe2edd360becd1ffd70f1870505696.png",
                                    "jump_url": "",
                                    "type": "vip"
                                },
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "你可能抢到了整个b站最难抢到的沙发(｀・ω・´)",
                            "plat": 6,
                            "device": "pad",
                            "members": [],
                            "jump_url": {},
                            "max_line": 0
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    },
                    {
                        "rpid": 214198733,
                        "oid": 2,
                        "type": 1,
                        "mid": 18370638,
                        "root": 476670,
                        "parent": 476670,
                        "dialog": 214198733,
                        "count": 0,
                        "rcount": 0,
                        "floor": 2,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1488888369,
                        "rpid_str": "214198733",
                        "root_str": "476670",
                        "parent_str": "476670",
                        "like": 1185,
                        "action": 0,
                        "member": {
                            "mid": "18370638",
                            "uname": "初音ハク",
                            "sex": "保密",
                            "sign": "我是艾尔的利刃",
                            "avatar": "http://i0.hdslb.com/bfs/face/50b3a20369f4358beca8078ef6ac652093ce7414.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 74,
                                "name": "大会员2018年度勋章",
                                "image": "http://i1.hdslb.com/bfs/face/421179426c929dfeaed4117461c83f5d07ffb148.png",
                                "image_small": "http://i1.hdslb.com/bfs/face/682001c2e1c2ae887bdf2a0e18eef61180c48f84.png",
                                "level": "稀有勋章",
                                "condition": "2018.6.26-7.8某一天是年度大会员"
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 2,
                                "vipDueDate": 1620403200000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "年度大会员",
                                    "label_theme": "annual_vip"
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "划了4千多条评论找到的啊ε=ε=(ノ≧∇≦)ノ",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 0
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    },
                    {
                        "rpid": 214198179,
                        "oid": 2,
                        "type": 1,
                        "mid": 18370638,
                        "root": 476670,
                        "parent": 476670,
                        "dialog": 214198179,
                        "count": 0,
                        "rcount": 0,
                        "floor": 1,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1488888303,
                        "rpid_str": "214198179",
                        "root_str": "476670",
                        "parent_str": "476670",
                        "like": 1082,
                        "action": 0,
                        "member": {
                            "mid": "18370638",
                            "uname": "初音ハク",
                            "sex": "保密",
                            "sign": "我是艾尔的利刃",
                            "avatar": "http://i0.hdslb.com/bfs/face/50b3a20369f4358beca8078ef6ac652093ce7414.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 74,
                                "name": "大会员2018年度勋章",
                                "image": "http://i1.hdslb.com/bfs/face/421179426c929dfeaed4117461c83f5d07ffb148.png",
                                "image_small": "http://i1.hdslb.com/bfs/face/682001c2e1c2ae887bdf2a0e18eef61180c48f84.png",
                                "level": "稀有勋章",
                                "condition": "2018.6.26-7.8某一天是年度大会员"
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 2,
                                "vipDueDate": 1620403200000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "年度大会员",
                                    "label_theme": "annual_vip"
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "可怜的二楼(=・ω・=)",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 0
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    }
                ],
                "assist": 0,
                "folder": {
                    "has_folded": false,
                    "is_folded": false,
                    "rule": "https://www.bilibili.com/blackboard/foldingreply.html"
                },
                "up_action": {
                    "like": false,
                    "reply": false
                },
                "show_follow": true
            },
            {
                "rpid": 2576184175,
                "oid": 2,
                "type": 1,
                "mid": 24512285,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 838,
                "rcount": 801,
                "floor": 40932,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1584945297,
                "rpid_str": "2576184175",
                "root_str": "0",
                "parent_str": "0",
                "like": 27469,
                "action": 1,
                "member": {
                    "mid": "24512285",
                    "uname": "霁歆",
                    "sex": "男",
                    "sign": "",
                    "avatar": "http://i2.hdslb.com/bfs/face/9cb18f0a8e9cae048dfa816972ee247111a8e22d.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "level_info": {
                        "current_level": 5,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 994,
                        "name": "格兰芬多",
                        "image": "http://i2.hdslb.com/bfs/face/2dee633139ce7c6b0dca657236240cc399c090be.png",
                        "expire": 0,
                        "image_enhance": "http://i2.hdslb.com/bfs/face/2dee633139ce7c6b0dca657236240cc399c090be.png"
                    },
                    "nameplate": {
                        "nid": 58,
                        "name": "收集达人",
                        "image": "http://i1.hdslb.com/bfs/face/3f5539e1486303422ffc8595862ccb6606e0b745.png",
                        "image_small": "http://i0.hdslb.com/bfs/face/cf85e7908095d256e595ec9759f4e7795f23bc22.png",
                        "level": "普通勋章",
                        "condition": "同时拥有粉丝勋章>=15个"
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1613577600000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "年度大会员",
                            "label_theme": "annual_vip"
                        }
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": {
                            "id": 994,
                            "name": "格兰芬多",
                            "image": "http://i0.hdslb.com/bfs/face/2dee633139ce7c6b0dca657236240cc399c090be.png",
                            "jump_url": "",
                            "type": "vip"
                        },
                        "cardbg": null,
                        "cardbg_with_focus": null
                    }
                },
                "content": {
                    "message": "人类最古のav号（挂了的不算）也变成bv了[大哭][大哭][大哭]青春结束了",
                    "plat": 2,
                    "device": "",
                    "members": [],
                    "emote": {
                        "[大哭]": {
                            "id": 5,
                            "package_id": 1,
                            "state": 0,
                            "type": 1,
                            "attr": 0,
                            "text": "[大哭]",
                            "url": "http://i0.hdslb.com/bfs/emote/2caafee2e5db4db72104650d87810cc2c123fc86.png",
                            "meta": {
                                "size": 1
                            },
                            "mtime": 1577702898
                        }
                    },
                    "jump_url": {},
                    "max_line": 6
                },
                "replies": [
                    {
                        "rpid": 2578082161,
                        "oid": 2,
                        "type": 1,
                        "mid": 407225717,
                        "root": 2576184175,
                        "parent": 2576184175,
                        "dialog": 2578082161,
                        "count": 0,
                        "rcount": 0,
                        "floor": 68,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1584964926,
                        "rpid_str": "2578082161",
                        "root_str": "2576184175",
                        "parent_str": "2576184175",
                        "like": 1005,
                        "action": 0,
                        "member": {
                            "mid": "407225717",
                            "uname": "渣男5107号",
                            "sex": "保密",
                            "sign": "",
                            "avatar": "http://i2.hdslb.com/bfs/face/b7af802409026c6534441eb5298434feed41fd1d.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 4,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 0,
                                "name": "",
                                "image": "",
                                "image_small": "",
                                "level": "",
                                "condition": ""
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 1,
                                "vipDueDate": 1583942400000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "",
                                    "label_theme": ""
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "先留个名，估计以后av会被当成冷知识放出来[大哭]",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "emote": {
                                "[大哭]": {
                                    "id": 5,
                                    "package_id": 1,
                                    "state": 0,
                                    "type": 1,
                                    "attr": 0,
                                    "text": "[大哭]",
                                    "url": "http://i0.hdslb.com/bfs/emote/2caafee2e5db4db72104650d87810cc2c123fc86.png",
                                    "meta": {
                                        "size": 1
                                    },
                                    "mtime": 1577702898
                                }
                            },
                            "jump_url": {},
                            "max_line": 0
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    },
                    {
                        "rpid": 2576348604,
                        "oid": 2,
                        "type": 1,
                        "mid": 172853390,
                        "root": 2576184175,
                        "parent": 2576184175,
                        "dialog": 2576348604,
                        "count": 0,
                        "rcount": 0,
                        "floor": 1,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1584947227,
                        "rpid_str": "2576348604",
                        "root_str": "2576184175",
                        "parent_str": "2576184175",
                        "like": 245,
                        "action": 0,
                        "member": {
                            "mid": "172853390",
                            "uname": "剑惊风雨丶",
                            "sex": "男",
                            "sign": "这个人勤快死了，什么都没有写(ー_ー)!!",
                            "avatar": "http://i1.hdslb.com/bfs/face/41c25392a4f96f48c499cc68dd9ad3215227c5ed.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 0,
                                "name": "",
                                "image": "",
                                "image_small": "",
                                "level": "",
                                "condition": ""
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 0,
                                "vipDueDate": 0,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "",
                                    "label_theme": ""
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "av号还是可以搜啊",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 0
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    },
                    {
                        "rpid": 2579961512,
                        "oid": 2,
                        "type": 1,
                        "mid": 329965337,
                        "root": 2576184175,
                        "parent": 2576184175,
                        "dialog": 2579961512,
                        "count": 0,
                        "rcount": 0,
                        "floor": 188,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1584982846,
                        "rpid_str": "2579961512",
                        "root_str": "2576184175",
                        "parent_str": "2576184175",
                        "like": 135,
                        "action": 0,
                        "member": {
                            "mid": "329965337",
                            "uname": "积极发言的刘同学",
                            "sex": "男",
                            "sign": "化学世界真奇妙，学好化学炸学校。",
                            "avatar": "http://i2.hdslb.com/bfs/face/3b586d7dbe8c2dba32b213e0a474fe6d86921b85.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 4,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 0,
                                "name": "",
                                "image": "",
                                "image_small": "",
                                "level": "",
                                "condition": ""
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 1,
                                "vipDueDate": 1585324800000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "",
                                    "label_theme": ""
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "10个小时就有6500多赞?你是魔鬼?",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 0
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    }
                ],
                "assist": 0,
                "folder": {
                    "has_folded": false,
                    "is_folded": false,
                    "rule": "https://www.bilibili.com/blackboard/foldingreply.html"
                },
                "up_action": {
                    "like": false,
                    "reply": false
                },
                "show_follow": true
            },
            {
                "rpid": 495059,
                "oid": 2,
                "type": 1,
                "mid": 2,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 556,
                "rcount": 531,
                "floor": 5,
                "state": 2,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1291918239,
                "rpid_str": "495059",
                "root_str": "0",
                "parent_str": "0",
                "like": 15960,
                "action": 0,
                "member": {
                    "mid": "2",
                    "uname": "碧诗",
                    "sex": "男",
                    "sign": "kami.im 直男过气网红 # av362830 “We Are Star Dust”",
                    "avatar": "http://i0.hdslb.com/bfs/app/3e60b20604b6fdc7d081eb6a1ec72aa47c5a3964.jpg",
                    "rank": "20000",
                    "DisplayRank": "0",
                    "level_info": {
                        "current_level": 6,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 1141,
                        "name": "如果历史是一群喵",
                        "image": "http://i2.hdslb.com/bfs/garb/item/cd3e9a6fa18db9ebdc128b0fef64cb32c5aab854.png",
                        "expire": 0,
                        "image_enhance": "http://i2.hdslb.com/bfs/garb/item/cd3e9a6fa18db9ebdc128b0fef64cb32c5aab854.png"
                    },
                    "nameplate": {
                        "nid": 10,
                        "name": "见习偶像",
                        "image": "http://i0.hdslb.com/bfs/face/e93dd9edfa7b9e18bf46fd8d71862327a2350923.png",
                        "image_small": "http://i0.hdslb.com/bfs/face/275b468b043ec246737ab8580a2075bee0b1263b.png",
                        "level": "普通勋章",
                        "condition": "所有自制视频总播放数>=10万"
                    },
                    "official_verify": {
                        "type": 0,
                        "desc": "bilibili创始人（站长）"
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 3848745600000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "年度大会员",
                            "label_theme": "annual_vip"
                        }
                    },
                    "fans_detail": null,
                    "following": 1,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": {
                            "id": 1141,
                            "name": "如果历史是一群喵",
                            "image": "http://i0.hdslb.com/bfs/garb/item/cd3e9a6fa18db9ebdc128b0fef64cb32c5aab854.png",
                            "jump_url": "",
                            "type": "suit"
                        },
                        "cardbg": null,
                        "cardbg_with_focus": null
                    }
                },
                "content": {
                    "message": "wwwww",
                    "plat": 1,
                    "device": "",
                    "members": [],
                    "jump_url": {},
                    "max_line": 6
                },
                "replies": [
                    {
                        "rpid": 164517433,
                        "oid": 2,
                        "type": 1,
                        "mid": 3476504,
                        "root": 495059,
                        "parent": 495059,
                        "dialog": 164517433,
                        "count": 0,
                        "rcount": 0,
                        "floor": 1,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1479570959,
                        "rpid_str": "164517433",
                        "root_str": "495059",
                        "parent_str": "495059",
                        "like": 207,
                        "action": 0,
                        "member": {
                            "mid": "3476504",
                            "uname": "麦斯科桑",
                            "sex": "保密",
                            "sign": "淡ACG的比例比例是屑.",
                            "avatar": "http://i0.hdslb.com/bfs/face/7bf954d807cbda4de4221d78f3b425534042ac02.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 194,
                                "name": "黑白无双",
                                "image": "http://i2.hdslb.com/bfs/face/89b25cad74abd9e42a94b11e456bc21fe36b8763.png",
                                "expire": 0,
                                "image_enhance": "http://i2.hdslb.com/bfs/face/89b25cad74abd9e42a94b11e456bc21fe36b8763.png"
                            },
                            "nameplate": {
                                "nid": 74,
                                "name": "大会员2018年度勋章",
                                "image": "http://i2.hdslb.com/bfs/face/421179426c929dfeaed4117461c83f5d07ffb148.png",
                                "image_small": "http://i0.hdslb.com/bfs/face/682001c2e1c2ae887bdf2a0e18eef61180c48f84.png",
                                "level": "稀有勋章",
                                "condition": "2018.6.26-7.8某一天是年度大会员"
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 2,
                                "vipDueDate": 1732204800000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "年度大会员",
                                    "label_theme": "annual_vip"
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": {
                                    "id": 194,
                                    "name": "黑白无双",
                                    "image": "http://i0.hdslb.com/bfs/face/89b25cad74abd9e42a94b11e456bc21fe36b8763.png",
                                    "jump_url": "",
                                    "type": "vip"
                                },
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "拉了半天总算是见了底",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 0
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    },
                    {
                        "rpid": 464424502,
                        "oid": 2,
                        "type": 1,
                        "mid": 37145412,
                        "root": 495059,
                        "parent": 495059,
                        "dialog": 464424502,
                        "count": 0,
                        "rcount": 0,
                        "floor": 8,
                        "state": 0,
                        "fansgrade": 1,
                        "attr": 0,
                        "ctime": 1509257961,
                        "rpid_str": "464424502",
                        "root_str": "495059",
                        "parent_str": "495059",
                        "like": 115,
                        "action": 0,
                        "member": {
                            "mid": "37145412",
                            "uname": "边走边发呆",
                            "sex": "男",
                            "sign": "这个人懒死了，什么都不发=_= 头像是素晴日",
                            "avatar": "http://i1.hdslb.com/bfs/face/4dfe0f1b0bfc9b1afea9e3bacbc5a92221fe9b09.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 60,
                                "name": "饭圈萌新",
                                "image": "http://i1.hdslb.com/bfs/face/51ca16136e570938450bca360f28761ceb609f33.png",
                                "image_small": "http://i0.hdslb.com/bfs/face/9abfa4769357f85937782c2dbc40fafda4f57217.png",
                                "level": "普通勋章",
                                "condition": "当前持有粉丝勋章最高等级>=5级"
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 1,
                                "vipDueDate": 1559836800000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "",
                                    "label_theme": ""
                                }
                            },
                            "fans_detail": {
                                "uid": 37145412,
                                "medal_id": 29058,
                                "medal_name": "逸国",
                                "score": 0,
                                "level": 7,
                                "intimacy": 0,
                                "master_status": 1,
                                "is_receive": 1
                            },
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "5000多楼6225评论(;¬_¬)手有点酸，如果不是特殊方法进来的话是要大会员吧(●￣(ｴ)￣●)",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 0
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    },
                    {
                        "rpid": 214199123,
                        "oid": 2,
                        "type": 1,
                        "mid": 18370638,
                        "root": 495059,
                        "parent": 495059,
                        "dialog": 214199123,
                        "count": 0,
                        "rcount": 0,
                        "floor": 5,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1488888421,
                        "rpid_str": "214199123",
                        "root_str": "495059",
                        "parent_str": "495059",
                        "like": 41,
                        "action": 0,
                        "member": {
                            "mid": "18370638",
                            "uname": "初音ハク",
                            "sex": "保密",
                            "sign": "我是艾尔的利刃",
                            "avatar": "http://i0.hdslb.com/bfs/face/50b3a20369f4358beca8078ef6ac652093ce7414.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 74,
                                "name": "大会员2018年度勋章",
                                "image": "http://i1.hdslb.com/bfs/face/421179426c929dfeaed4117461c83f5d07ffb148.png",
                                "image_small": "http://i1.hdslb.com/bfs/face/682001c2e1c2ae887bdf2a0e18eef61180c48f84.png",
                                "level": "稀有勋章",
                                "condition": "2018.6.26-7.8某一天是年度大会员"
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 2,
                                "vipDueDate": 1620403200000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "年度大会员",
                                    "label_theme": "annual_vip"
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "划了4千多条评论找到的啊ε=ε=(ノ≧∇≦)ノ",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 0
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    }
                ],
                "assist": 0,
                "folder": {
                    "has_folded": false,
                    "is_folded": false,
                    "rule": "https://www.bilibili.com/blackboard/foldingreply.html"
                },
                "up_action": {
                    "like": false,
                    "reply": false
                },
                "show_follow": true
            },
            {
                "rpid": 208000425,
                "oid": 2,
                "type": 1,
                "mid": 30976371,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 544,
                "rcount": 511,
                "floor": 3569,
                "state": 2,
                "fansgrade": 0,
                "attr": 12,
                "ctime": 1487772179,
                "rpid_str": "208000425",
                "root_str": "0",
                "parent_str": "0",
                "like": 16857,
                "action": 0,
                "member": {
                    "mid": "30976371",
                    "uname": "紫荆7x",
                    "sex": "保密",
                    "sign": "寒山渐远渐明薄，未知前路几迢遥。 \n",
                    "avatar": "http://i1.hdslb.com/bfs/face/0939e21818bf913b4ee35aaa0e604fc9938047ce.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "level_info": {
                        "current_level": 6,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 1635,
                        "name": "明日方舟-阿米娅",
                        "image": "http://i0.hdslb.com/bfs/face/34d7b5509d90dbc19f5f7e63788842e0080b00c2.png",
                        "expire": 0,
                        "image_enhance": "http://i0.hdslb.com/bfs/face/34d7b5509d90dbc19f5f7e63788842e0080b00c2.png"
                    },
                    "nameplate": {
                        "nid": 0,
                        "name": "",
                        "image": "",
                        "image_small": "",
                        "level": "",
                        "condition": ""
                    },
                    "official_verify": {
                        "type": 0,
                        "desc": "音乐人紫荆7x"
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1650988800000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "年度大会员",
                            "label_theme": "annual_vip"
                        }
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": {
                            "id": 1635,
                            "name": "明日方舟-阿米娅",
                            "image": "http://i0.hdslb.com/bfs/face/34d7b5509d90dbc19f5f7e63788842e0080b00c2.png",
                            "jump_url": "",
                            "type": "pay"
                        },
                        "cardbg": null,
                        "cardbg_with_focus": null
                    }
                },
                "content": {
                    "message": "av1是“公告”，主要是公布B站的部分升级内容、活动预告相关事件等信息。范围是2010年6月7日-2011年7月26日，UP主是ANA，整个合集共计1886P。内容以文本显示没有视频，现已无法进入，不过B站的官方微博、微信和*******可以查阅到相关内容。\n原稿请搜索知乎，有图，侵删【B站av1-6有人看过吗？】",
                    "plat": 2,
                    "device": "",
                    "members": [],
                    "jump_url": {},
                    "max_line": 6
                },
                "replies": [
                    {
                        "rpid": 208106601,
                        "oid": 2,
                        "type": 1,
                        "mid": 33202778,
                        "root": 208000425,
                        "parent": 208000425,
                        "dialog": 208106601,
                        "count": 0,
                        "rcount": 0,
                        "floor": 7,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1487781338,
                        "rpid_str": "208106601",
                        "root_str": "208000425",
                        "parent_str": "208000425",
                        "like": 4663,
                        "action": 0,
                        "member": {
                            "mid": "33202778",
                            "uname": "Adnini983",
                            "sex": "保密",
                            "sign": "Twitter：@adnini983 汤不热：https://adnini983.tumblr.com/",
                            "avatar": "http://i0.hdslb.com/bfs/face/8b11f5635b78cc5cdbd8245048405f52d24f187a.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 6,
                                "name": "高级搬运工",
                                "image": "http://i1.hdslb.com/bfs/face/a9af39ab7ed08e078c45d58dd96a6411aba1a9d3.png",
                                "image_small": "http://i0.hdslb.com/bfs/face/46e5aae4667c72c379b46b51fac4b4426d9214e7.png",
                                "level": "高级勋章",
                                "condition": "转载视频投稿通过总数>=100"
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 1,
                                "vipDueDate": 1521043200000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "",
                                    "label_theme": ""
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "这个就是我在知乎写的，我就是知乎上的Adnini983。但考虑到你标注了出处，我允许你予以保留。",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 0
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    },
                    {
                        "rpid": 208002062,
                        "oid": 2,
                        "type": 1,
                        "mid": 30976371,
                        "root": 208000425,
                        "parent": 208000425,
                        "dialog": 208002062,
                        "count": 0,
                        "rcount": 0,
                        "floor": 3,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1487772305,
                        "rpid_str": "208002062",
                        "root_str": "208000425",
                        "parent_str": "208000425",
                        "like": 1863,
                        "action": 0,
                        "member": {
                            "mid": "30976371",
                            "uname": "紫荆7x",
                            "sex": "保密",
                            "sign": "寒山渐远渐明薄，未知前路几迢遥。 \n",
                            "avatar": "http://i1.hdslb.com/bfs/face/0939e21818bf913b4ee35aaa0e604fc9938047ce.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 6,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 1635,
                                "name": "明日方舟-阿米娅",
                                "image": "http://i0.hdslb.com/bfs/face/34d7b5509d90dbc19f5f7e63788842e0080b00c2.png",
                                "expire": 0,
                                "image_enhance": "http://i0.hdslb.com/bfs/face/34d7b5509d90dbc19f5f7e63788842e0080b00c2.png"
                            },
                            "nameplate": {
                                "nid": 0,
                                "name": "",
                                "image": "",
                                "image_small": "",
                                "level": "",
                                "condition": ""
                            },
                            "official_verify": {
                                "type": 0,
                                "desc": "音乐人紫荆7x"
                            },
                            "vip": {
                                "vipType": 2,
                                "vipDueDate": 1650988800000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "年度大会员",
                                    "label_theme": "annual_vip"
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": {
                                    "id": 1635,
                                    "name": "明日方舟-阿米娅",
                                    "image": "http://i0.hdslb.com/bfs/face/34d7b5509d90dbc19f5f7e63788842e0080b00c2.png",
                                    "jump_url": "",
                                    "type": "pay"
                                },
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "av4无法使用任何方式访问",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 0
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    },
                    {
                        "rpid": 208000986,
                        "oid": 2,
                        "type": 1,
                        "mid": 30976371,
                        "root": 208000425,
                        "parent": 208000425,
                        "dialog": 208000986,
                        "count": 0,
                        "rcount": 0,
                        "floor": 1,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1487772222,
                        "rpid_str": "208000986",
                        "root_str": "208000425",
                        "parent_str": "208000425",
                        "like": 1573,
                        "action": 0,
                        "member": {
                            "mid": "30976371",
                            "uname": "紫荆7x",
                            "sex": "保密",
                            "sign": "寒山渐远渐明薄，未知前路几迢遥。 \n",
                            "avatar": "http://i1.hdslb.com/bfs/face/0939e21818bf913b4ee35aaa0e604fc9938047ce.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 6,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 1635,
                                "name": "明日方舟-阿米娅",
                                "image": "http://i0.hdslb.com/bfs/face/34d7b5509d90dbc19f5f7e63788842e0080b00c2.png",
                                "expire": 0,
                                "image_enhance": "http://i0.hdslb.com/bfs/face/34d7b5509d90dbc19f5f7e63788842e0080b00c2.png"
                            },
                            "nameplate": {
                                "nid": 0,
                                "name": "",
                                "image": "",
                                "image_small": "",
                                "level": "",
                                "condition": ""
                            },
                            "official_verify": {
                                "type": 0,
                                "desc": "音乐人紫荆7x"
                            },
                            "vip": {
                                "vipType": 2,
                                "vipDueDate": 1650988800000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "年度大会员",
                                    "label_theme": "annual_vip"
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": {
                                    "id": 1635,
                                    "name": "明日方舟-阿米娅",
                                    "image": "http://i0.hdslb.com/bfs/face/34d7b5509d90dbc19f5f7e63788842e0080b00c2.png",
                                    "jump_url": "",
                                    "type": "pay"
                                },
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "av2是一部名叫“字幕君交流场所”的视频，里面包含了东方Project的图片和音乐，UP主是碧诗。通常情况下无法打开，但可以使用唧唧下载视频。（现在可以打开了，恭喜你们）",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 0
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    }
                ],
                "assist": 0,
                "folder": {
                    "has_folded": false,
                    "is_folded": false,
                    "rule": "https://www.bilibili.com/blackboard/foldingreply.html"
                },
                "up_action": {
                    "like": false,
                    "reply": false
                },
                "show_follow": false
            },
            {
                "rpid": 917945205,
                "oid": 2,
                "type": 1,
                "mid": 34762090,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 125,
                "rcount": 105,
                "floor": 17977,
                "state": 0,
                "fansgrade": 1,
                "attr": 0,
                "ctime": 1532071373,
                "rpid_str": "917945205",
                "root_str": "0",
                "parent_str": "0",
                "like": 7514,
                "action": 0,
                "member": {
                    "mid": "34762090",
                    "uname": "某不科学的瓜皮",
                    "sex": "男",
                    "sign": "持杯拱天，谓无言，静沉眠",
                    "avatar": "http://i1.hdslb.com/bfs/face/cc61140c64409a3f5793207f3c866555e8638ab5.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "level_info": {
                        "current_level": 5,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": ""
                    },
                    "nameplate": {
                        "nid": 4,
                        "name": "青铜殿堂",
                        "image": "http://i0.hdslb.com/bfs/face/2879cd5fb8518f7c6da75887994c1b2a7fe670bd.png",
                        "image_small": "http://i0.hdslb.com/bfs/face/6707c120e00a3445933308fd9b7bd9fad99e9ec4.png",
                        "level": "普通勋章",
                        "condition": "单个自制视频总播放数>=1万"
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 1,
                        "vipDueDate": 1583164800000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 0,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "",
                            "label_theme": ""
                        }
                    },
                    "fans_detail": {
                        "uid": 34762090,
                        "medal_id": 29058,
                        "medal_name": "逸国",
                        "score": 0,
                        "level": 1,
                        "intimacy": 0,
                        "master_status": 1,
                        "is_receive": 1
                    },
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    }
                },
                "content": {
                    "message": "7.20日，站长被封7天\n\n历史性留名[2233娘_卖萌]",
                    "plat": 2,
                    "device": "",
                    "members": [],
                    "emote": {
                        "[2233娘_卖萌]": {
                            "id": 140,
                            "package_id": 6,
                            "state": 0,
                            "type": 2,
                            "attr": 0,
                            "text": "[2233娘_卖萌]",
                            "url": "http://i0.hdslb.com/bfs/emote/ea893aa25355de95ab4f03c2dad3f0c58d0c159e.png",
                            "meta": {
                                "size": 2
                            },
                            "mtime": 1586316683
                        }
                    },
                    "jump_url": {},
                    "max_line": 6
                },
                "replies": [
                    {
                        "rpid": 1781253749,
                        "oid": 2,
                        "type": 1,
                        "mid": 34762090,
                        "root": 917945205,
                        "parent": 917945205,
                        "dialog": 1781253749,
                        "count": 0,
                        "rcount": 0,
                        "floor": 4,
                        "state": 0,
                        "fansgrade": 1,
                        "attr": 0,
                        "ctime": 1563598609,
                        "rpid_str": "1781253749",
                        "root_str": "917945205",
                        "parent_str": "917945205",
                        "like": 375,
                        "action": 0,
                        "member": {
                            "mid": "34762090",
                            "uname": "某不科学的瓜皮",
                            "sex": "男",
                            "sign": "持杯拱天，谓无言，静沉眠",
                            "avatar": "http://i1.hdslb.com/bfs/face/cc61140c64409a3f5793207f3c866555e8638ab5.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 4,
                                "name": "青铜殿堂",
                                "image": "http://i0.hdslb.com/bfs/face/2879cd5fb8518f7c6da75887994c1b2a7fe670bd.png",
                                "image_small": "http://i0.hdslb.com/bfs/face/6707c120e00a3445933308fd9b7bd9fad99e9ec4.png",
                                "level": "普通勋章",
                                "condition": "单个自制视频总播放数>=1万"
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 1,
                                "vipDueDate": 1583164800000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "",
                                    "label_theme": ""
                                }
                            },
                            "fans_detail": {
                                "uid": 34762090,
                                "medal_id": 29058,
                                "medal_name": "逸国",
                                "score": 0,
                                "level": 1,
                                "intimacy": 0,
                                "master_status": 1,
                                "is_receive": 1
                            },
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "站长被封一周年 [小电视_笑]",
                            "plat": 2,
                            "device": "",
                            "members": [],
                            "emote": {
                                "[小电视_笑]": {
                                    "id": 121,
                                    "package_id": 5,
                                    "state": 0,
                                    "type": 2,
                                    "attr": 0,
                                    "text": "[小电视_笑]",
                                    "url": "http://i0.hdslb.com/bfs/emote/f80d384875183dfe2e24be13011c595c0210d273.png",
                                    "meta": {
                                        "size": 2
                                    },
                                    "mtime": 1591272851
                                }
                            },
                            "jump_url": {},
                            "max_line": 0
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    },
                    {
                        "rpid": 1387109941,
                        "oid": 2,
                        "type": 1,
                        "mid": 317451026,
                        "root": 917945205,
                        "parent": 917945205,
                        "dialog": 1387109941,
                        "count": 0,
                        "rcount": 0,
                        "floor": 1,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1550139263,
                        "rpid_str": "1387109941",
                        "root_str": "917945205",
                        "parent_str": "917945205",
                        "like": 295,
                        "action": 0,
                        "member": {
                            "mid": "317451026",
                            "uname": "草_grass",
                            "sex": "男",
                            "sign": "NOTHING",
                            "avatar": "http://i0.hdslb.com/bfs/face/c4569f98034a7810063bc52eef9d446711688c12.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 4,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 0,
                                "name": "",
                                "image": "",
                                "image_small": "",
                                "level": "",
                                "condition": ""
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 0,
                                "vipDueDate": 0,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "",
                                    "label_theme": ""
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "头七还行？",
                            "plat": 1,
                            "device": "",
                            "members": [],
                            "jump_url": {},
                            "max_line": 0
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    },
                    {
                        "rpid": 1781556726,
                        "oid": 2,
                        "type": 1,
                        "mid": 417437969,
                        "root": 917945205,
                        "parent": 1781253749,
                        "dialog": 1781253749,
                        "count": 0,
                        "rcount": 0,
                        "floor": 5,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1563605321,
                        "rpid_str": "1781556726",
                        "root_str": "917945205",
                        "parent_str": "1781253749",
                        "like": 116,
                        "action": 0,
                        "member": {
                            "mid": "417437969",
                            "uname": "理查奈德",
                            "sex": "男",
                            "sign": "手殘的屑玩家兼見習音罵製作者，有正常麥克風了可能會搞手書配音？",
                            "avatar": "http://i0.hdslb.com/bfs/face/6923f6414503413f292a1cfad13ac483683a77d6.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 4,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 0,
                                "name": "",
                                "image": "",
                                "image_small": "",
                                "level": "",
                                "condition": ""
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 0,
                                "vipDueDate": 0,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "",
                                    "label_theme": ""
                                }
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            }
                        },
                        "content": {
                            "message": "回复 @某不科学的瓜皮 :这是件值得庆祝的日子啊（滑稽保命）[滑稽]",
                            "plat": 2,
                            "device": "",
                            "members": [
                                {
                                    "mid": "34762090",
                                    "uname": "某不科学的瓜皮",
                                    "sex": "男",
                                    "sign": "持杯拱天，谓无言，静沉眠",
                                    "avatar": "http://i1.hdslb.com/bfs/face/cc61140c64409a3f5793207f3c866555e8638ab5.jpg",
                                    "rank": "10000",
                                    "DisplayRank": "0",
                                    "level_info": {
                                        "current_level": 5,
                                        "current_min": 0,
                                        "current_exp": 0,
                                        "next_exp": 0
                                    },
                                    "pendant": {
                                        "pid": 0,
                                        "name": "",
                                        "image": "",
                                        "expire": 0,
                                        "image_enhance": ""
                                    },
                                    "nameplate": {
                                        "nid": 4,
                                        "name": "青铜殿堂",
                                        "image": "http://i0.hdslb.com/bfs/face/2879cd5fb8518f7c6da75887994c1b2a7fe670bd.png",
                                        "image_small": "http://i0.hdslb.com/bfs/face/6707c120e00a3445933308fd9b7bd9fad99e9ec4.png",
                                        "level": "普通勋章",
                                        "condition": "单个自制视频总播放数>=1万"
                                    },
                                    "official_verify": {
                                        "type": -1,
                                        "desc": ""
                                    },
                                    "vip": {
                                        "vipType": 1,
                                        "vipDueDate": 1583164800000,
                                        "dueRemark": "",
                                        "accessStatus": 0,
                                        "vipStatus": 0,
                                        "vipStatusWarn": "",
                                        "themeType": 0,
                                        "label": {
                                            "path": "",
                                            "text": "",
                                            "label_theme": ""
                                        }
                                    }
                                }
                            ],
                            "emote": {
                                "[滑稽]": {
                                    "id": 27,
                                    "package_id": 1,
                                    "state": 0,
                                    "type": 1,
                                    "attr": 0,
                                    "text": "[滑稽]",
                                    "url": "http://i0.hdslb.com/bfs/emote/d15121545a99ac46774f1f4465b895fe2d1411c3.png",
                                    "meta": {
                                        "size": 1
                                    },
                                    "mtime": 1577702898
                                }
                            },
                            "jump_url": {},
                            "max_line": 0
                        },
                        "replies": null,
                        "assist": 0,
                        "folder": {
                            "has_folded": false,
                            "is_folded": false,
                            "rule": ""
                        },
                        "up_action": {
                            "like": false,
                            "reply": false
                        },
                        "show_follow": false
                    }
                ],
                "assist": 0,
                "folder": {
                    "has_folded": false,
                    "is_folded": false,
                    "rule": "https://www.bilibili.com/blackboard/foldingreply.html"
                },
                "up_action": {
                    "like": false,
                    "reply": false
                },
                "show_follow": false
            }
        ],
        "top": {
            "admin": null,
            "upper": null,
            "vote": null
        },
        "lottery_card": null,
        "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": "https://www.bilibili.com/blackboard/foldingreply.html"
        },
        "assist": 0,
        "blacklist": 0,
        "vote": 0,
        "lottery": 0,
        "config": {
            "showadmin": 1,
            "showentry": 1,
            "showfloor": 0,
            "showtopic": 1,
            "show_up_flag": true,
            "read_only": false,
            "show_del_log": true
        },
        "upper": {
            "mid": 2
        },
        "show_bvid": true,
        "control": {
            "input_disable": false,
            "root_input_text": "",
            "child_input_text": "",
            "bg_text": "看看下面~来发评论吧",
            "web_selection": false,
            "answer_guide_text": "需要升级成为lv2会员后才可以评论，先去答题转正吧！",
            "answer_guide_icon_url": "http://i0.hdslb.com/bfs/emote/96940d16602cacbbac796245b7bb99fa9b5c970c.png",
            "answer_guide_ios_url": "https://www.bilibili.com/h5/newbie/entry?navhide=1&re_src=12",
            "answer_guide_android_url": "https://www.bilibili.com/h5/newbie/entry?navhide=1&re_src=6"
        }
    }
}
```



## 获取指定评论条目及二级回复明细1（分离结构 无楼层号 web端）

> http://api.bilibili.com/x/v2/reply/reply

*方式：GET*

按照热度排列

**url参数：**

| 参数名 | 类型 | 内容             | 必要性 | 备注                       |
| ------ | ---- | ---------------- | ------ | -------------------------- |
| type   | num  | 评论区类型代码   | 必要   | **类型代码见上表**         |
| oid    | num  | 目标评论区ID     | 必要   |                            |
| root   | num  | 目标一级评论rpID | 必要   |                            |
| pn     | num  | 二级评论页码     | 非必要 | 默认为1                    |
| ps     | num  | 二级评论每页项数 | 非必要 | 默认为20<br />定义域：1-49 |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                                                         |
| ------- | ----------------------------- | -------- | ------------------------------------------------------------ |
| code    | num                           | 返回值   | 0：成功<br />-400：请求错误<br />-404：无此项<br />12002：评论区已关闭<br />12009：评论主体的type不合法 |
| message | str                           | 错误信息 | 默认为0                                                      |
| ttl     | num                           | 1        | **作用尚不明确**                                             |
| data    | 正确时：obj<br />错误时：null | 数据本体 |                                                              |

`data`对象：

| 字段         | 类型                             | 内容     | 备注             |
| ------------ | -------------------------------- | -------- | ---------------- |
| config       | obj                              | 属性信息 |                  |
| control      | obj                              | 评论区输入属性 |                  |
| page         | obj                              | 页信息   |                  |
| replies      | array | 二级评论列表 |                  |
| root      | obj   | 根评论         | **详情见附表** |
| show_bvid    | bool                             | true     | **作用尚不明确** |
| upper    | obj                           | UP主UID  |  |

`data`中的`page`对象：

| 字段   | 类型 | 内容         | 备注 |
| ------ | ---- | ------------ | ---- |
| num    | num  | 当前页码     |      |
| size   | num  | 每页项数     |      |
| count  | num  | 根评论条数   |      |
| acount | num  | 总计评论条数 |      |

`data`中的`config`对象：

| 字段         | 类型 | 内容  | 备注             |
| ------------ | ---- | ----- | ---------------- |
| showadmin    | num  | 0     | **作用尚不明确** |
| showentry    | num  | 0     | **作用尚不明确** |
| showfloor    | num  | 0     | **作用尚不明确** |
| showtopic    | num  | 0     | **作用尚不明确** |
| show_up_flag | bool | false | **作用尚不明确** |
| read_only    | bool | false | **作用尚不明确** |
| show_del_log | bool | false | **作用尚不明确** |

`data`中的`replies`数组：

| 项   | 类型 | 内容              | 备注           |
| ---- | ---- | ----------------- | -------------- |
| 0    | obj  | 二级评论条目1     | **详情见附表** |
| n    | obj  | 二级评论条目(n+1) | 按照热度排列   |
| ……   | obj  | ……                | ……             |

`data`中的`upper`对象：

| 字段 | 类型 | 内容    | 备注 |
| ---- | ---- | ------- | ---- |
| mid  | num  | UP主UID |      |

**示例：**

获取视频`av2`下评论`rpID=476670`的二级评论，每页5项，查看第1页

http://api.bilibili.com/x/v2/reply/reply?type=1&oid=2&root=476670&pn=1&ps=5

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "config": {
            "showadmin": 0,
            "showentry": 0,
            "showfloor": 0,
            "showtopic": 0,
            "show_up_flag": false,
            "read_only": false,
            "show_del_log": false
        },
        "control": {
            "input_disable": false,
            "root_input_text": "",
            "child_input_text": "",
            "bg_text": "看看下面~来发评论吧",
            "web_selection": false,
            "answer_guide_text": "需要升级成为lv2会员后才可以评论，先去答题转正吧！",
            "answer_guide_icon_url": "http://i0.hdslb.com/bfs/emote/96940d16602cacbbac796245b7bb99fa9b5c970c.png",
            "answer_guide_ios_url": "https://www.bilibili.com/h5/newbie/entry?navhide=1&re_src=12",
            "answer_guide_android_url": "https://www.bilibili.com/h5/newbie/entry?navhide=1&re_src=6"
        },
        "page": {
            "count": 1843,
            "num": 1,
            "size": 5
        },
        "replies": [
            {
                "rpid": 214198179,
                "oid": 2,
                "type": 1,
                "mid": 18370638,
                "root": 476670,
                "parent": 476670,
                "dialog": 214198179,
                "count": 0,
                "rcount": 0,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1488888303,
                "rpid_str": "214198179",
                "root_str": "476670",
                "parent_str": "476670",
                "like": 1087,
                "action": 0,
                "member": {
                    "mid": "18370638",
                    "uname": "初音ハク",
                    "sex": "保密",
                    "sign": "我是艾尔的利刃",
                    "avatar": "http://i0.hdslb.com/bfs/face/50b3a20369f4358beca8078ef6ac652093ce7414.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "level_info": {
                        "current_level": 5,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": ""
                    },
                    "nameplate": {
                        "nid": 74,
                        "name": "大会员2018年度勋章",
                        "image": "http://i1.hdslb.com/bfs/face/421179426c929dfeaed4117461c83f5d07ffb148.png",
                        "image_small": "http://i0.hdslb.com/bfs/face/682001c2e1c2ae887bdf2a0e18eef61180c48f84.png",
                        "level": "稀有勋章",
                        "condition": "2018.6.26-7.8某一天是年度大会员"
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1620403200000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "年度大会员",
                            "label_theme": "annual_vip"
                        }
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    }
                },
                "content": {
                    "message": "可怜的二楼(=・ω・=)",
                    "plat": 2,
                    "device": "",
                    "members": [],
                    "jump_url": {},
                    "max_line": 0
                },
                "replies": null,
                "assist": 0,
                "folder": {
                    "has_folded": false,
                    "is_folded": false,
                    "rule": ""
                },
                "up_action": {
                    "like": false,
                    "reply": false
                },
                "show_follow": false
            },
            {
                "rpid": 214198733,
                "oid": 2,
                "type": 1,
                "mid": 18370638,
                "root": 476670,
                "parent": 476670,
                "dialog": 214198733,
                "count": 0,
                "rcount": 0,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1488888369,
                "rpid_str": "214198733",
                "root_str": "476670",
                "parent_str": "476670",
                "like": 1189,
                "action": 0,
                "member": {
                    "mid": "18370638",
                    "uname": "初音ハク",
                    "sex": "保密",
                    "sign": "我是艾尔的利刃",
                    "avatar": "http://i0.hdslb.com/bfs/face/50b3a20369f4358beca8078ef6ac652093ce7414.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "level_info": {
                        "current_level": 5,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": ""
                    },
                    "nameplate": {
                        "nid": 74,
                        "name": "大会员2018年度勋章",
                        "image": "http://i1.hdslb.com/bfs/face/421179426c929dfeaed4117461c83f5d07ffb148.png",
                        "image_small": "http://i0.hdslb.com/bfs/face/682001c2e1c2ae887bdf2a0e18eef61180c48f84.png",
                        "level": "稀有勋章",
                        "condition": "2018.6.26-7.8某一天是年度大会员"
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1620403200000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "年度大会员",
                            "label_theme": "annual_vip"
                        }
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    }
                },
                "content": {
                    "message": "划了4千多条评论找到的啊ε=ε=(ノ≧∇≦)ノ",
                    "plat": 2,
                    "device": "",
                    "members": [],
                    "jump_url": {},
                    "max_line": 0
                },
                "replies": null,
                "assist": 0,
                "folder": {
                    "has_folded": false,
                    "is_folded": false,
                    "rule": ""
                },
                "up_action": {
                    "like": false,
                    "reply": false
                },
                "show_follow": false
            },
            {
                "rpid": 225269192,
                "oid": 2,
                "type": 1,
                "mid": 15094738,
                "root": 476670,
                "parent": 476670,
                "dialog": 225269192,
                "count": 0,
                "rcount": 0,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1490666434,
                "rpid_str": "225269192",
                "root_str": "476670",
                "parent_str": "476670",
                "like": 235,
                "action": 0,
                "member": {
                    "mid": "15094738",
                    "uname": "御坂妹妹10492號",
                    "sex": "保密",
                    "sign": "",
                    "avatar": "http://i1.hdslb.com/bfs/face/6484b0e77b554f43237c78f383199ad211e8b3bd.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "level_info": {
                        "current_level": 6,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 326,
                        "name": "圣诞节快乐",
                        "image": "http://i1.hdslb.com/bfs/face/b72dbf785e810e94fce2481265e71b6f16c64681.png",
                        "expire": 0,
                        "image_enhance": "http://i1.hdslb.com/bfs/face/b72dbf785e810e94fce2481265e71b6f16c64681.png"
                    },
                    "nameplate": {
                        "nid": 74,
                        "name": "大会员2018年度勋章",
                        "image": "http://i1.hdslb.com/bfs/face/421179426c929dfeaed4117461c83f5d07ffb148.png",
                        "image_small": "http://i2.hdslb.com/bfs/face/682001c2e1c2ae887bdf2a0e18eef61180c48f84.png",
                        "level": "稀有勋章",
                        "condition": "2018.6.26-7.8某一天是年度大会员"
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1621958400000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "年度大会员",
                            "label_theme": "annual_vip"
                        }
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": {
                            "id": 326,
                            "name": "圣诞节快乐",
                            "image": "http://i0.hdslb.com/bfs/face/b72dbf785e810e94fce2481265e71b6f16c64681.png",
                            "jump_url": "",
                            "type": "vip"
                        },
                        "cardbg": null,
                        "cardbg_with_focus": null
                    }
                },
                "content": {
                    "message": "可怜二楼没人",
                    "plat": 2,
                    "device": "",
                    "members": [],
                    "jump_url": {},
                    "max_line": 0
                },
                "replies": null,
                "assist": 0,
                "folder": {
                    "has_folded": false,
                    "is_folded": false,
                    "rule": ""
                },
                "up_action": {
                    "like": false,
                    "reply": false
                },
                "show_follow": false
            },
            {
                "rpid": 451059061,
                "oid": 2,
                "type": 1,
                "mid": 41075238,
                "root": 476670,
                "parent": 476670,
                "dialog": 451059061,
                "count": 0,
                "rcount": 0,
                "state": 6,
                "fansgrade": 1,
                "attr": 4,
                "ctime": 1508168753,
                "rpid_str": "451059061",
                "root_str": "476670",
                "parent_str": "476670",
                "like": 111,
                "action": 0,
                "member": {
                    "mid": "41075238",
                    "uname": "废爪萌狼",
                    "sex": "保密",
                    "sign": "赫萝是天！！！！！！！！！！！！！！！！",
                    "avatar": "http://i0.hdslb.com/bfs/face/4e3b1610b40d3901516b09ba6d593e8cf68cf8f1.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "level_info": {
                        "current_level": 5,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": ""
                    },
                    "nameplate": {
                        "nid": 61,
                        "name": "饭圈楷模",
                        "image": "http://i2.hdslb.com/bfs/face/5a90f715451325c642a6ac39e01195cb6d075734.png",
                        "image_small": "http://i0.hdslb.com/bfs/face/5bfc1b4fb3f4b411495dddb0b2127ad80f6fbcac.png",
                        "level": "普通勋章",
                        "condition": "当前持有粉丝勋章最高等级>=10级"
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1643385600000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "年度大会员",
                            "label_theme": "annual_vip"
                        }
                    },
                    "fans_detail": {
                        "uid": 41075238,
                        "medal_id": 29058,
                        "medal_name": "逸国",
                        "score": 0,
                        "level": 3,
                        "intimacy": 0,
                        "master_status": 1,
                        "is_receive": 1
                    },
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    }
                },
                "content": {
                    "message": "好可怜啊(=・ω・=)",
                    "plat": 2,
                    "device": "",
                    "members": [],
                    "jump_url": {},
                    "max_line": 0
                },
                "replies": null,
                "assist": 0,
                "folder": {
                    "has_folded": false,
                    "is_folded": false,
                    "rule": ""
                },
                "up_action": {
                    "like": false,
                    "reply": false
                },
                "show_follow": false
            },
            {
                "rpid": 451154733,
                "oid": 2,
                "type": 1,
                "mid": 15094738,
                "root": 476670,
                "parent": 451059061,
                "dialog": 451059061,
                "count": 0,
                "rcount": 0,
                "state": 6,
                "fansgrade": 0,
                "attr": 4,
                "ctime": 1508175639,
                "rpid_str": "451154733",
                "root_str": "476670",
                "parent_str": "451059061",
                "like": 107,
                "action": 0,
                "member": {
                    "mid": "15094738",
                    "uname": "御坂妹妹10492號",
                    "sex": "保密",
                    "sign": "",
                    "avatar": "http://i1.hdslb.com/bfs/face/6484b0e77b554f43237c78f383199ad211e8b3bd.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "level_info": {
                        "current_level": 6,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 326,
                        "name": "圣诞节快乐",
                        "image": "http://i1.hdslb.com/bfs/face/b72dbf785e810e94fce2481265e71b6f16c64681.png",
                        "expire": 0,
                        "image_enhance": "http://i1.hdslb.com/bfs/face/b72dbf785e810e94fce2481265e71b6f16c64681.png"
                    },
                    "nameplate": {
                        "nid": 74,
                        "name": "大会员2018年度勋章",
                        "image": "http://i1.hdslb.com/bfs/face/421179426c929dfeaed4117461c83f5d07ffb148.png",
                        "image_small": "http://i2.hdslb.com/bfs/face/682001c2e1c2ae887bdf2a0e18eef61180c48f84.png",
                        "level": "稀有勋章",
                        "condition": "2018.6.26-7.8某一天是年度大会员"
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1621958400000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "年度大会员",
                            "label_theme": "annual_vip"
                        }
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": {
                            "id": 326,
                            "name": "圣诞节快乐",
                            "image": "http://i0.hdslb.com/bfs/face/b72dbf785e810e94fce2481265e71b6f16c64681.png",
                            "jump_url": "",
                            "type": "vip"
                        },
                        "cardbg": null,
                        "cardbg_with_focus": null
                    }
                },
                "content": {
                    "message": "回复 @负能量使者:你你你..你是怎么找到这里来的Σ(ﾟдﾟ;)",
                    "plat": 2,
                    "device": "",
                    "members": [],
                    "jump_url": {},
                    "max_line": 0
                },
                "replies": null,
                "assist": 0,
                "folder": {
                    "has_folded": false,
                    "is_folded": false,
                    "rule": ""
                },
                "up_action": {
                    "like": false,
                    "reply": false
                },
                "show_follow": false
            }
        ],
        "root": {
            "rpid": 476670,
            "oid": 2,
            "type": 1,
            "mid": 58426,
            "root": 0,
            "parent": 0,
            "dialog": 0,
            "count": 1893,
            "rcount": 1843,
            "state": 0,
            "fansgrade": 0,
            "attr": 0,
            "ctime": 1291350931,
            "rpid_str": "476670",
            "root_str": "0",
            "parent_str": "0",
            "like": 53759,
            "action": 0,
            "member": {
                "mid": "58426",
                "uname": "残星什么的就是残星",
                "sex": "男",
                "sign": "少说话多做事 _微博@残星",
                "avatar": "http://i1.hdslb.com/bfs/face/56ac36b37662e3746228f30eb4acf2cd332b66a5.jpg",
                "rank": "20000",
                "DisplayRank": "0",
                "level_info": {
                    "current_level": 6,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": 0
                },
                "pendant": {
                    "pid": 0,
                    "name": "",
                    "image": "",
                    "expire": 0,
                    "image_enhance": ""
                },
                "nameplate": {
                    "nid": 30,
                    "name": "字幕君",
                    "image": "http://i1.hdslb.com/bfs/face/383c3fed3dc162c93a8d616a272693f6650e98f1.png",
                    "image_small": "http://i1.hdslb.com/bfs/face/7ad18084e40b725210e22696e0efdae408cd378c.png",
                    "level": "稀有勋章",
                    "condition": "弹幕大赛获得"
                },
                "official_verify": {
                    "type": -1,
                    "desc": ""
                },
                "vip": {
                    "vipType": 1,
                    "vipDueDate": 1550851200000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 0,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": "",
                        "text": "",
                        "label_theme": ""
                    }
                },
                "fans_detail": null,
                "following": 0,
                "is_followed": 0,
                "user_sailing": {
                    "pendant": null,
                    "cardbg": null,
                    "cardbg_with_focus": null
                }
            },
            "content": {
                "message": "貌似没人来",
                "plat": 1,
                "device": "",
                "members": [],
                "jump_url": {},
                "max_line": 0
            },
            "replies": null,
            "assist": 0,
            "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": "https://www.bilibili.com/blackboard/foldingreply.html"
            },
            "up_action": {
                "like": false,
                "reply": false
            },
            "show_follow": false
        },
        "show_bvid": true,
        "upper": {
            "mid": 2
        }
    }
}
```



## 获取指定评论条目及二级回复明细2（嵌套结构 带有楼层号 客户端）

> http://api.bilibili.com/x/v2/reply/detail 

*方式：GET*

按照楼层排列

**url参数：**

| 参数名 | 类型 | 内容           | 必要性 | 备注                                   |
| ------ | ---- | -------------- | ------ | -------------------------------------- |
| type   | num  | 评论区类型代码 | 必要   | **类型代码见上表**                     |
| oid    | num  | 目标评论区ID   | 必要   |                                        |
| root   | num  | 根回复rpID     | 必要   |                                        |
| next   | num  | 评论页选择     | 非必要 | 第一页为0<br />默认为0<br />顺序楼层号 |
| ps     | num  | 每页项数       | 非必要 | 默认为0                                |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                                                         |
| ------- | ----------------------------- | -------- | ------------------------------------------------------------ |
| code    | num                           | 返回值   | 0：成功<br />-400：请求错误<br />-404：无此项<br />12002：评论区已关闭<br />12009：评论主体的type不合法 |
| message | str                           | 错误信息 | 默认为0                                                      |
| ttl     | num                           | 1        | **作用尚不明确**                                             |
| data    | 正确时：obj<br />错误时：null | 数据本体 |                                                              |

`data`对象：

| 字段      | 类型 | 内容           | 备注             |
| --------- | ---- | -------------- | ---------------- |
| cursor    | obj  | 页信息         |                  |
| assist    | num  | 0              | **作用尚不明确** |
| blacklist | num  | 0              | **作用尚不明确** |
| vote      | num  | 0              | **作用尚不明确** |
| lottery   | num  | 0              | **作用尚不明确** |
| config    | obj  | 属性信息       |                  |
| upper     | obj  | UP主UID        |                  |
| show_bvid | bool | true           | **作用尚不明确** |
| control   | obj  | 评论区输入属性 |                  |
| root      | obj  | 根评论         | **详情见附表**   |
| Mid       | num  | 0              | **作用尚不明确** |

`data`中的`cursor`对象：

| 字段     | 类型 | 内容         | 备注                    |
| -------- | ---- | ------------ | ----------------------- |
| is_begin | bool | 是否为第一页 | false：否<br />true：是 |
| prev     | num  | 上页楼层     |                         |
| next     | num  | 下页楼层     |                         |
| is_end   | bool | 是否为最后页 | false：否<br />true：是 |

`data`中的`config`对象：

| 字段         | 类型 | 内容  | 备注             |
| ------------ | ---- | ----- | ---------------- |
| showadmin    | num  | 1     | **作用尚不明确** |
| showentry    | num  | 1     | **作用尚不明确** |
| showfloor    | num  | 0     | **作用尚不明确** |
| showtopic    | num  | 1     | **作用尚不明确** |
| show_up_flag | bool | true  | **作用尚不明确** |
| read_only    | bool | false | **作用尚不明确** |
| show_del_log | bool | false | **作用尚不明确** |

`data`中的`upper`对象：

| 字段 | 类型 | 内容    | 备注 |
| ---- | ---- | ------- | ---- |
| mid  | num  | UP主UID |      |

`data`中的`control`对象：

| 字段                     | 类型 | 内容               | 备注                                |
| ------------------------ | ---- | ------------------ | ----------------------------------- |
| input_disable            | bool | false              | **作用尚不明确**                    |
| root_input_text          | str  | 评论框文字         |                                     |
| child_input_text         | str  | 评论框文字         |                                     |
| bg_text                  | str  | 空评论区文字       |                                     |
| web_selection            | bool | 评论是否筛选后可见 | false：无需筛选<br />true：需要筛选 |
| answer_guide_text        | str  | 答题页面链接文字   |                                     |
| answer_guide_icon_url    | str  | 答题页面图标url    |                                     |
| answer_guide_ios_url     | str  | 答题页面ios url    |                                     |
| answer_guide_android_url | str  | 答题页面安卓url    |                                     |

**示例：**

获取视频`av2`下评论`rpID=476670`的二级评论，每页5项，查看第1页

 http://api.bilibili.com/x/v2/reply/detail?type=1&oid=2&root=476670&next=0&ps=5

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "cursor": {
            "is_begin": true,
            "prev": 0,
            "next": 6,
            "is_end": false
        },
        "assist": 0,
        "blacklist": 0,
        "vote": 0,
        "lottery": 0,
        "config": {
            "showadmin": 1,
            "showentry": 1,
            "showfloor": 0,
            "showtopic": 1,
            "show_up_flag": true,
            "read_only": false,
            "show_del_log": true
        },
        "upper": {
            "mid": 2
        },
        "show_bvid": true,
        "control": {
            "input_disable": false,
            "root_input_text": "",
            "child_input_text": "",
            "bg_text": "看看下面~来发评论吧",
            "web_selection": false,
            "answer_guide_text": "需要升级成为lv2会员后才可以评论，先去答题转正吧！",
            "answer_guide_icon_url": "http://i0.hdslb.com/bfs/emote/96940d16602cacbbac796245b7bb99fa9b5c970c.png",
            "answer_guide_ios_url": "https://www.bilibili.com/h5/newbie/entry?navhide=1&re_src=12",
            "answer_guide_android_url": "https://www.bilibili.com/h5/newbie/entry?navhide=1&re_src=6"
        },
        "root": {
            "rpid": 476670,
            "oid": 2,
            "type": 1,
            "mid": 58426,
            "root": 0,
            "parent": 0,
            "dialog": 0,
            "count": 1922,
            "rcount": 1871,
            "floor": 2,
            "state": 0,
            "fansgrade": 0,
            "attr": 0,
            "ctime": 1291350931,
            "rpid_str": "476670",
            "root_str": "0",
            "parent_str": "0",
            "like": 54765,
            "action": 0,
            "member": {
                "mid": "58426",
                "uname": "残星什么的就是残星",
                "sex": "男",
                "sign": "少说话多做事 _微博@残星",
                "avatar": "http://i0.hdslb.com/bfs/face/56ac36b37662e3746228f30eb4acf2cd332b66a5.jpg",
                "rank": "20000",
                "DisplayRank": "0",
                "level_info": {
                    "current_level": 6,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": 0
                },
                "pendant": {
                    "pid": 0,
                    "name": "",
                    "image": "",
                    "expire": 0,
                    "image_enhance": ""
                },
                "nameplate": {
                    "nid": 30,
                    "name": "字幕君",
                    "image": "http://i1.hdslb.com/bfs/face/383c3fed3dc162c93a8d616a272693f6650e98f1.png",
                    "image_small": "http://i1.hdslb.com/bfs/face/7ad18084e40b725210e22696e0efdae408cd378c.png",
                    "level": "稀有勋章",
                    "condition": "弹幕大赛获得"
                },
                "official_verify": {
                    "type": -1,
                    "desc": ""
                },
                "vip": {
                    "vipType": 1,
                    "vipDueDate": 1550851200000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 0,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": "",
                        "text": "",
                        "label_theme": ""
                    }
                },
                "fans_detail": null,
                "following": 0,
                "is_followed": 0,
                "user_sailing": {
                    "pendant": null,
                    "cardbg": null,
                    "cardbg_with_focus": null
                }
            },
            "content": {
                "message": "貌似没人来",
                "plat": 1,
                "device": "",
                "members": [],
                "jump_url": {},
                "max_line": 999
            },
            "replies": [
                {
                    "rpid": 214198179,
                    "oid": 2,
                    "type": 1,
                    "mid": 18370638,
                    "root": 476670,
                    "parent": 476670,
                    "dialog": 214198179,
                    "count": 0,
                    "rcount": 0,
                    "floor": 1,
                    "state": 0,
                    "fansgrade": 0,
                    "attr": 0,
                    "ctime": 1488888303,
                    "rpid_str": "214198179",
                    "root_str": "476670",
                    "parent_str": "476670",
                    "like": 1113,
                    "action": 0,
                    "member": {
                        "mid": "18370638",
                        "uname": "初音ハク",
                        "sex": "保密",
                        "sign": "我是艾尔的利刃",
                        "avatar": "http://i1.hdslb.com/bfs/face/50b3a20369f4358beca8078ef6ac652093ce7414.jpg",
                        "rank": "10000",
                        "DisplayRank": "0",
                        "level_info": {
                            "current_level": 5,
                            "current_min": 0,
                            "current_exp": 0,
                            "next_exp": 0
                        },
                        "pendant": {
                            "pid": 0,
                            "name": "",
                            "image": "",
                            "expire": 0,
                            "image_enhance": ""
                        },
                        "nameplate": {
                            "nid": 74,
                            "name": "大会员2018年度勋章",
                            "image": "http://i0.hdslb.com/bfs/face/421179426c929dfeaed4117461c83f5d07ffb148.png",
                            "image_small": "http://i2.hdslb.com/bfs/face/682001c2e1c2ae887bdf2a0e18eef61180c48f84.png",
                            "level": "稀有勋章",
                            "condition": "2018.6.26-7.8某一天是年度大会员"
                        },
                        "official_verify": {
                            "type": -1,
                            "desc": ""
                        },
                        "vip": {
                            "vipType": 2,
                            "vipDueDate": 1620403200000,
                            "dueRemark": "",
                            "accessStatus": 0,
                            "vipStatus": 1,
                            "vipStatusWarn": "",
                            "themeType": 0,
                            "label": {
                                "path": "",
                                "text": "年度大会员",
                                "label_theme": "annual_vip"
                            }
                        },
                        "fans_detail": null,
                        "following": 0,
                        "is_followed": 0,
                        "user_sailing": {
                            "pendant": null,
                            "cardbg": null,
                            "cardbg_with_focus": null
                        }
                    },
                    "content": {
                        "message": "可怜的二楼(=・ω・=)",
                        "plat": 2,
                        "device": "",
                        "members": [],
                        "jump_url": {},
                        "max_line": 999
                    },
                    "replies": null,
                    "assist": 0,
                    "folder": {
                        "has_folded": false,
                        "is_folded": false,
                        "rule": ""
                    },
                    "up_action": {
                        "like": false,
                        "reply": false
                    },
                    "show_follow": false
                },
                {
                    "rpid": 214198733,
                    "oid": 2,
                    "type": 1,
                    "mid": 18370638,
                    "root": 476670,
                    "parent": 476670,
                    "dialog": 214198733,
                    "count": 0,
                    "rcount": 0,
                    "floor": 2,
                    "state": 0,
                    "fansgrade": 0,
                    "attr": 0,
                    "ctime": 1488888369,
                    "rpid_str": "214198733",
                    "root_str": "476670",
                    "parent_str": "476670",
                    "like": 1208,
                    "action": 0,
                    "member": {
                        "mid": "18370638",
                        "uname": "初音ハク",
                        "sex": "保密",
                        "sign": "我是艾尔的利刃",
                        "avatar": "http://i1.hdslb.com/bfs/face/50b3a20369f4358beca8078ef6ac652093ce7414.jpg",
                        "rank": "10000",
                        "DisplayRank": "0",
                        "level_info": {
                            "current_level": 5,
                            "current_min": 0,
                            "current_exp": 0,
                            "next_exp": 0
                        },
                        "pendant": {
                            "pid": 0,
                            "name": "",
                            "image": "",
                            "expire": 0,
                            "image_enhance": ""
                        },
                        "nameplate": {
                            "nid": 74,
                            "name": "大会员2018年度勋章",
                            "image": "http://i0.hdslb.com/bfs/face/421179426c929dfeaed4117461c83f5d07ffb148.png",
                            "image_small": "http://i2.hdslb.com/bfs/face/682001c2e1c2ae887bdf2a0e18eef61180c48f84.png",
                            "level": "稀有勋章",
                            "condition": "2018.6.26-7.8某一天是年度大会员"
                        },
                        "official_verify": {
                            "type": -1,
                            "desc": ""
                        },
                        "vip": {
                            "vipType": 2,
                            "vipDueDate": 1620403200000,
                            "dueRemark": "",
                            "accessStatus": 0,
                            "vipStatus": 1,
                            "vipStatusWarn": "",
                            "themeType": 0,
                            "label": {
                                "path": "",
                                "text": "年度大会员",
                                "label_theme": "annual_vip"
                            }
                        },
                        "fans_detail": null,
                        "following": 0,
                        "is_followed": 0,
                        "user_sailing": {
                            "pendant": null,
                            "cardbg": null,
                            "cardbg_with_focus": null
                        }
                    },
                    "content": {
                        "message": "划了4千多条评论找到的啊ε=ε=(ノ≧∇≦)ノ",
                        "plat": 2,
                        "device": "",
                        "members": [],
                        "jump_url": {},
                        "max_line": 999
                    },
                    "replies": null,
                    "assist": 0,
                    "folder": {
                        "has_folded": false,
                        "is_folded": false,
                        "rule": ""
                    },
                    "up_action": {
                        "like": false,
                        "reply": false
                    },
                    "show_follow": false
                },
                {
                    "rpid": 225269192,
                    "oid": 2,
                    "type": 1,
                    "mid": 15094738,
                    "root": 476670,
                    "parent": 476670,
                    "dialog": 225269192,
                    "count": 0,
                    "rcount": 0,
                    "floor": 3,
                    "state": 0,
                    "fansgrade": 0,
                    "attr": 0,
                    "ctime": 1490666434,
                    "rpid_str": "225269192",
                    "root_str": "476670",
                    "parent_str": "476670",
                    "like": 240,
                    "action": 0,
                    "member": {
                        "mid": "15094738",
                        "uname": "御坂妹妹10492號",
                        "sex": "保密",
                        "sign": "",
                        "avatar": "http://i1.hdslb.com/bfs/face/6484b0e77b554f43237c78f383199ad211e8b3bd.jpg",
                        "rank": "10000",
                        "DisplayRank": "0",
                        "level_info": {
                            "current_level": 6,
                            "current_min": 0,
                            "current_exp": 0,
                            "next_exp": 0
                        },
                        "pendant": {
                            "pid": 326,
                            "name": "圣诞节快乐",
                            "image": "http://i1.hdslb.com/bfs/face/b72dbf785e810e94fce2481265e71b6f16c64681.png",
                            "expire": 0,
                            "image_enhance": "http://i1.hdslb.com/bfs/face/b72dbf785e810e94fce2481265e71b6f16c64681.png"
                        },
                        "nameplate": {
                            "nid": 74,
                            "name": "大会员2018年度勋章",
                            "image": "http://i2.hdslb.com/bfs/face/421179426c929dfeaed4117461c83f5d07ffb148.png",
                            "image_small": "http://i2.hdslb.com/bfs/face/682001c2e1c2ae887bdf2a0e18eef61180c48f84.png",
                            "level": "稀有勋章",
                            "condition": "2018.6.26-7.8某一天是年度大会员"
                        },
                        "official_verify": {
                            "type": -1,
                            "desc": ""
                        },
                        "vip": {
                            "vipType": 2,
                            "vipDueDate": 1621958400000,
                            "dueRemark": "",
                            "accessStatus": 0,
                            "vipStatus": 1,
                            "vipStatusWarn": "",
                            "themeType": 0,
                            "label": {
                                "path": "",
                                "text": "年度大会员",
                                "label_theme": "annual_vip"
                            }
                        },
                        "fans_detail": null,
                        "following": 0,
                        "is_followed": 0,
                        "user_sailing": {
                            "pendant": {
                                "id": 326,
                                "name": "圣诞节快乐",
                                "image": "http://i0.hdslb.com/bfs/face/b72dbf785e810e94fce2481265e71b6f16c64681.png",
                                "jump_url": "",
                                "type": "vip"
                            },
                            "cardbg": null,
                            "cardbg_with_focus": null
                        }
                    },
                    "content": {
                        "message": "可怜二楼没人",
                        "plat": 2,
                        "device": "",
                        "members": [],
                        "jump_url": {},
                        "max_line": 999
                    },
                    "replies": null,
                    "assist": 0,
                    "folder": {
                        "has_folded": false,
                        "is_folded": false,
                        "rule": ""
                    },
                    "up_action": {
                        "like": false,
                        "reply": false
                    },
                    "show_follow": false
                },
                {
                    "rpid": 451059061,
                    "oid": 2,
                    "type": 1,
                    "mid": 41075238,
                    "root": 476670,
                    "parent": 476670,
                    "dialog": 451059061,
                    "count": 0,
                    "rcount": 0,
                    "floor": 4,
                    "state": 6,
                    "fansgrade": 1,
                    "attr": 4,
                    "ctime": 1508168753,
                    "rpid_str": "451059061",
                    "root_str": "476670",
                    "parent_str": "476670",
                    "like": 112,
                    "action": 0,
                    "member": {
                        "mid": "41075238",
                        "uname": "废爪萌狼",
                        "sex": "保密",
                        "sign": "赫萝是天！！！！！！！！！！！！！！！！",
                        "avatar": "http://i2.hdslb.com/bfs/face/4e3b1610b40d3901516b09ba6d593e8cf68cf8f1.jpg",
                        "rank": "10000",
                        "DisplayRank": "0",
                        "level_info": {
                            "current_level": 5,
                            "current_min": 0,
                            "current_exp": 0,
                            "next_exp": 0
                        },
                        "pendant": {
                            "pid": 0,
                            "name": "",
                            "image": "",
                            "expire": 0,
                            "image_enhance": ""
                        },
                        "nameplate": {
                            "nid": 61,
                            "name": "饭圈楷模",
                            "image": "http://i0.hdslb.com/bfs/face/5a90f715451325c642a6ac39e01195cb6d075734.png",
                            "image_small": "http://i2.hdslb.com/bfs/face/5bfc1b4fb3f4b411495dddb0b2127ad80f6fbcac.png",
                            "level": "普通勋章",
                            "condition": "当前持有粉丝勋章最高等级>=10级"
                        },
                        "official_verify": {
                            "type": -1,
                            "desc": ""
                        },
                        "vip": {
                            "vipType": 2,
                            "vipDueDate": 1643385600000,
                            "dueRemark": "",
                            "accessStatus": 0,
                            "vipStatus": 1,
                            "vipStatusWarn": "",
                            "themeType": 0,
                            "label": {
                                "path": "",
                                "text": "年度大会员",
                                "label_theme": "annual_vip"
                            }
                        },
                        "fans_detail": {
                            "uid": 41075238,
                            "medal_id": 29058,
                            "medal_name": "逸国",
                            "score": 0,
                            "level": 3,
                            "intimacy": 0,
                            "master_status": 1,
                            "is_receive": 1
                        },
                        "following": 0,
                        "is_followed": 0,
                        "user_sailing": {
                            "pendant": null,
                            "cardbg": null,
                            "cardbg_with_focus": null
                        }
                    },
                    "content": {
                        "message": "好可怜啊(=・ω・=)",
                        "plat": 2,
                        "device": "",
                        "members": [],
                        "jump_url": {},
                        "max_line": 999
                    },
                    "replies": null,
                    "assist": 0,
                    "folder": {
                        "has_folded": false,
                        "is_folded": false,
                        "rule": ""
                    },
                    "up_action": {
                        "like": false,
                        "reply": false
                    },
                    "show_follow": false
                },
                {
                    "rpid": 451154733,
                    "oid": 2,
                    "type": 1,
                    "mid": 15094738,
                    "root": 476670,
                    "parent": 451059061,
                    "dialog": 451059061,
                    "count": 0,
                    "rcount": 0,
                    "floor": 5,
                    "state": 6,
                    "fansgrade": 0,
                    "attr": 4,
                    "ctime": 1508175639,
                    "rpid_str": "451154733",
                    "root_str": "476670",
                    "parent_str": "451059061",
                    "like": 108,
                    "action": 0,
                    "member": {
                        "mid": "15094738",
                        "uname": "御坂妹妹10492號",
                        "sex": "保密",
                        "sign": "",
                        "avatar": "http://i1.hdslb.com/bfs/face/6484b0e77b554f43237c78f383199ad211e8b3bd.jpg",
                        "rank": "10000",
                        "DisplayRank": "0",
                        "level_info": {
                            "current_level": 6,
                            "current_min": 0,
                            "current_exp": 0,
                            "next_exp": 0
                        },
                        "pendant": {
                            "pid": 326,
                            "name": "圣诞节快乐",
                            "image": "http://i1.hdslb.com/bfs/face/b72dbf785e810e94fce2481265e71b6f16c64681.png",
                            "expire": 0,
                            "image_enhance": "http://i1.hdslb.com/bfs/face/b72dbf785e810e94fce2481265e71b6f16c64681.png"
                        },
                        "nameplate": {
                            "nid": 74,
                            "name": "大会员2018年度勋章",
                            "image": "http://i2.hdslb.com/bfs/face/421179426c929dfeaed4117461c83f5d07ffb148.png",
                            "image_small": "http://i2.hdslb.com/bfs/face/682001c2e1c2ae887bdf2a0e18eef61180c48f84.png",
                            "level": "稀有勋章",
                            "condition": "2018.6.26-7.8某一天是年度大会员"
                        },
                        "official_verify": {
                            "type": -1,
                            "desc": ""
                        },
                        "vip": {
                            "vipType": 2,
                            "vipDueDate": 1621958400000,
                            "dueRemark": "",
                            "accessStatus": 0,
                            "vipStatus": 1,
                            "vipStatusWarn": "",
                            "themeType": 0,
                            "label": {
                                "path": "",
                                "text": "年度大会员",
                                "label_theme": "annual_vip"
                            }
                        },
                        "fans_detail": null,
                        "following": 0,
                        "is_followed": 0,
                        "user_sailing": {
                            "pendant": {
                                "id": 326,
                                "name": "圣诞节快乐",
                                "image": "http://i0.hdslb.com/bfs/face/b72dbf785e810e94fce2481265e71b6f16c64681.png",
                                "jump_url": "",
                                "type": "vip"
                            },
                            "cardbg": null,
                            "cardbg_with_focus": null
                        }
                    },
                    "content": {
                        "message": "回复 @负能量使者:你你你..你是怎么找到这里来的Σ(ﾟдﾟ;)",
                        "plat": 2,
                        "device": "",
                        "members": [],
                        "jump_url": {},
                        "max_line": 999
                    },
                    "replies": null,
                    "assist": 0,
                    "folder": {
                        "has_folded": false,
                        "is_folded": false,
                        "rule": ""
                    },
                    "up_action": {
                        "like": false,
                        "reply": false
                    },
                    "show_follow": false
                }
            ],
            "assist": 0,
            "folder": {
                "has_folded": false,
                "is_folded": false,
                "rule": "https://www.bilibili.com/blackboard/foldingreply.html"
            },
            "up_action": {
                "like": false,
                "reply": false
            },
            "show_follow": true
        },
        "Mid": 0
    }
}
```



## 获取指定评论对话树（带有楼层 客户端）

> http://api.bilibili.com/x/v2/reply/dialog/cursor 

*方式：GET*

按照楼层排列

**url参数：**

| 参数名 | 类型 | 内容           | 必要性 | 备注               |
| ------ | ---- | -------------- | ------ | ------------------ |
| type   | num  | 评论区类型代码 | 必要   | **类型代码见上表** |
| oid    | num  | 目标评论区ID   | 必要   |                    |
| root   | num  | 根回复rpID     | 必要   |                    |
| dialog | num  | 对话树根rpID   | 必要   |                    |
| size   | num  | 每页最大项数   | 必要   |                    |

**json回复：**

data`对象：

| 字段      | 类型  | 内容           | 备注             |
| --------- | ----- | -------------- | ---------------- |
| cursor    | obj   | 页楼层信息     |                  |
| dialog    | obj   | 对话楼层信息   |                  |
| replies   | array | 评论对话树列表 |                  |
| assist    | num   | 0              | **作用尚不明确** |
| blacklist | num   | 0              | **作用尚不明确** |
| vote      | num   | 0              | **作用尚不明确** |
| lottery   | num   | 0              | **作用尚不明确** |
| config    | obj   | 属性信息       |                  |
| upper     | obj   | UP主UID        |                  |
| show_bvid | bool  | true           | **作用尚不明确** |
| control   | obj   | 评论区输入属性 |                  |

`data`中的`cursor`对象：

| 字段      | 类型 | 内容             | 备注 |
| --------- | ---- | ---------------- | ---- |
| min_floor | num  | 本页最低对话楼层 |      |
| max_floor | num  | 本页最高对话楼层 |      |
| size      | num  | 本页项数         |      |

`data`中的`dialog`对象：

| 字段      | 类型 | 内容                 | 备注 |
| --------- | ---- | -------------------- | ---- |
| min_floor | num  | 二级评论最低对话楼层 |      |
| max_floor | num  | 二级评论最高对话楼层 |      |

`data`中的`replies`数组：

| 项   | 类型 | 内容              | 备注             |
| ---- | ---- | ----------------- | ---------------- |
| 0    | obj  | 对话评论条目1     | **详情见附表**   |
| n    | obj  | 对话评论条目(n+1) | 按照对话顺序排列 |
| ……   | obj  | ……                | ……               |

`data`中的`config`对象：

| 字段         | 类型 | 内容  | 备注             |
| ------------ | ---- | ----- | ---------------- |
| showadmin    | num  | 1     | **作用尚不明确** |
| showentry    | num  | 1     | **作用尚不明确** |
| showfloor    | num  | 0     | **作用尚不明确** |
| showtopic    | num  | 1     | **作用尚不明确** |
| show_up_flag | bool | true  | **作用尚不明确** |
| read_only    | bool | false | **作用尚不明确** |
| show_del_log | bool | false | **作用尚不明确** |

`data`中的`upper`对象：

| 字段 | 类型 | 内容    | 备注 |
| ---- | ---- | ------- | ---- |
| mid  | num  | UP主UID |      |

`data`中的`control`对象：

| 字段                     | 类型 | 内容               | 备注                                |
| ------------------------ | ---- | ------------------ | ----------------------------------- |
| input_disable            | bool | false              | **作用尚不明确**                    |
| root_input_text          | str  | 评论框文字         |                                     |
| child_input_text         | str  | 评论框文字         |                                     |
| bg_text                  | str  | 空评论区文字       |                                     |
| web_selection            | bool | 评论是否筛选后可见 | false：无需筛选<br />true：需要筛选 |
| answer_guide_text        | str  | 答题页面链接文字   |                                     |
| answer_guide_icon_url    | str  | 答题页面图标url    |                                     |
| answer_guide_ios_url     | str  | 答题页面ios url    |                                     |
| answer_guide_android_url | str  | 答题页面安卓url    |                                     |

**示例：**

获取视频`av201022189`下评论`rpID=3030790837`的对话`rpID=3030978856`，每页最大5项

 http://api.bilibili.com/x/v2/reply/dialog/cursor?type=1&oid=201022189&root=3030790837&dialog=3030978856&size=5 

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "cursor": {
            "min_floor": 5,
            "max_floor": 94,
            "size": 5
        },
        "dialog": {
            "min_floor": 5,
            "max_floor": 243
        },
        "replies": [
            {
                "rpid": 3030978856,
                "oid": 201022189,
                "type": 1,
                "mid": 11814633,
                "root": 3030790837,
                "parent": 3030790837,
                "dialog": 3030978856,
                "count": 0,
                "rcount": 0,
                "floor": 5,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1592020635,
                "rpid_str": "3030978856",
                "root_str": "3030790837",
                "parent_str": "3030790837",
                "like": 55,
                "action": 0,
                "member": {
                    "mid": "11814633",
                    "uname": "我到四川省来",
                    "sex": "保密",
                    "sign": "保持half-sugar-life",
                    "avatar": "http://i2.hdslb.com/bfs/face/1c7cad967633c718ddef302f4aa39efaed53a2e4.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "level_info": {
                        "current_level": 5,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": ""
                    },
                    "nameplate": {
                        "nid": 4,
                        "name": "青铜殿堂",
                        "image": "http://i0.hdslb.com/bfs/face/2879cd5fb8518f7c6da75887994c1b2a7fe670bd.png",
                        "image_small": "http://i2.hdslb.com/bfs/face/6707c120e00a3445933308fd9b7bd9fad99e9ec4.png",
                        "level": "普通勋章",
                        "condition": "单个自制视频总播放数>=1万"
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1617638400000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "年度大会员",
                            "label_theme": "annual_vip"
                        }
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    }
                },
                "content": {
                    "message": "看有机化学考研视频",
                    "plat": 1,
                    "device": "",
                    "members": [],
                    "jump_url": {},
                    "max_line": 999
                },
                "replies": null,
                "assist": 0,
                "folder": {
                    "has_folded": false,
                    "is_folded": false,
                    "rule": ""
                },
                "up_action": {
                    "like": false,
                    "reply": false
                },
                "show_follow": false
            },
            {
                "rpid": 3032092982,
                "oid": 201022189,
                "type": 1,
                "mid": 80396483,
                "root": 3030790837,
                "parent": 3030978856,
                "dialog": 3030978856,
                "count": 0,
                "rcount": 0,
                "floor": 7,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1592036860,
                "rpid_str": "3032092982",
                "root_str": "3030790837",
                "parent_str": "3030978856",
                "like": 210,
                "action": 0,
                "member": {
                    "mid": "80396483",
                    "uname": "緑箭口香糖",
                    "sex": "保密",
                    "sign": "交个朋友吧。",
                    "avatar": "http://i1.hdslb.com/bfs/face/ca4b00a0e68f61559812ddc146b627ed6dd4d481.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "level_info": {
                        "current_level": 5,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": ""
                    },
                    "nameplate": {
                        "nid": 58,
                        "name": "收集达人",
                        "image": "http://i0.hdslb.com/bfs/face/3f5539e1486303422ffc8595862ccb6606e0b745.png",
                        "image_small": "http://i2.hdslb.com/bfs/face/cf85e7908095d256e595ec9759f4e7795f23bc22.png",
                        "level": "普通勋章",
                        "condition": "同时拥有粉丝勋章>=15个"
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 0,
                        "vipDueDate": 0,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 0,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "",
                            "label_theme": ""
                        }
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    }
                },
                "content": {
                    "message": "回复 @我到四川省来 :有一说一，上p站看原本要收费或者不好找的考研视频真的香[吃瓜]",
                    "plat": 2,
                    "device": "",
                    "members": [
                        {
                            "mid": "11814633",
                            "uname": "我到四川省来",
                            "sex": "保密",
                            "sign": "保持half-sugar-life",
                            "avatar": "http://i2.hdslb.com/bfs/face/1c7cad967633c718ddef302f4aa39efaed53a2e4.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 4,
                                "name": "青铜殿堂",
                                "image": "http://i0.hdslb.com/bfs/face/2879cd5fb8518f7c6da75887994c1b2a7fe670bd.png",
                                "image_small": "http://i2.hdslb.com/bfs/face/6707c120e00a3445933308fd9b7bd9fad99e9ec4.png",
                                "level": "普通勋章",
                                "condition": "单个自制视频总播放数>=1万"
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 2,
                                "vipDueDate": 1617638400000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "年度大会员",
                                    "label_theme": "annual_vip"
                                }
                            }
                        }
                    ],
                    "emote": {
                        "[吃瓜]": {
                            "id": 415,
                            "package_id": 1,
                            "state": 0,
                            "type": 1,
                            "attr": 0,
                            "text": "[吃瓜]",
                            "url": "http://i0.hdslb.com/bfs/emote/4191ce3c44c2b3df8fd97c33f85d3ab15f4f3c84.png",
                            "meta": {
                                "size": 1
                            },
                            "mtime": 1577702898
                        }
                    },
                    "jump_url": {},
                    "max_line": 999
                },
                "replies": null,
                "assist": 0,
                "folder": {
                    "has_folded": false,
                    "is_folded": false,
                    "rule": ""
                },
                "up_action": {
                    "like": false,
                    "reply": false
                },
                "show_follow": false
            },
            {
                "rpid": 3049044835,
                "oid": 201022189,
                "type": 1,
                "mid": 34598825,
                "root": 3030790837,
                "parent": 3032092982,
                "dialog": 3030978856,
                "count": 0,
                "rcount": 0,
                "floor": 54,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1592368714,
                "rpid_str": "3049044835",
                "root_str": "3030790837",
                "parent_str": "3032092982",
                "like": 0,
                "action": 0,
                "member": {
                    "mid": "34598825",
                    "uname": "人宇君sayo",
                    "sex": "男",
                    "sign": "一个兴趣很乱的人hah",
                    "avatar": "http://i2.hdslb.com/bfs/face/cd3bf8b9f4b6cc759cf29424c3017c41c8d018d7.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "level_info": {
                        "current_level": 5,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 149,
                        "name": "快把我哥带走",
                        "image": "http://i2.hdslb.com/bfs/face/6b45cf8ceb8cd6eeefbbcb202659e62a56356814.png",
                        "expire": 0,
                        "image_enhance": "http://i2.hdslb.com/bfs/face/6b45cf8ceb8cd6eeefbbcb202659e62a56356814.png"
                    },
                    "nameplate": {
                        "nid": 0,
                        "name": "",
                        "image": "",
                        "image_small": "",
                        "level": "",
                        "condition": ""
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 1,
                        "vipDueDate": 1591545600000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 0,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "",
                            "label_theme": ""
                        }
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": {
                            "id": 149,
                            "name": "快把我哥带走",
                            "image": "http://i0.hdslb.com/bfs/face/6b45cf8ceb8cd6eeefbbcb202659e62a56356814.png",
                            "jump_url": "",
                            "type": "vip"
                        },
                        "cardbg": null,
                        "cardbg_with_focus": null
                    }
                },
                "content": {
                    "message": "回复 @緑箭口香糖 :牛的",
                    "plat": 3,
                    "device": "phone",
                    "members": [
                        {
                            "mid": "80396483",
                            "uname": "緑箭口香糖",
                            "sex": "保密",
                            "sign": "交个朋友吧。",
                            "avatar": "http://i1.hdslb.com/bfs/face/ca4b00a0e68f61559812ddc146b627ed6dd4d481.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 58,
                                "name": "收集达人",
                                "image": "http://i0.hdslb.com/bfs/face/3f5539e1486303422ffc8595862ccb6606e0b745.png",
                                "image_small": "http://i2.hdslb.com/bfs/face/cf85e7908095d256e595ec9759f4e7795f23bc22.png",
                                "level": "普通勋章",
                                "condition": "同时拥有粉丝勋章>=15个"
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 0,
                                "vipDueDate": 0,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "",
                                    "label_theme": ""
                                }
                            }
                        }
                    ],
                    "jump_url": {},
                    "max_line": 999
                },
                "replies": null,
                "assist": 0,
                "folder": {
                    "has_folded": false,
                    "is_folded": false,
                    "rule": ""
                },
                "up_action": {
                    "like": false,
                    "reply": false
                },
                "show_follow": false
            },
            {
                "rpid": 3049581999,
                "oid": 201022189,
                "type": 1,
                "mid": 479083152,
                "root": 3030790837,
                "parent": 3030978856,
                "dialog": 3030978856,
                "count": 0,
                "rcount": 0,
                "floor": 93,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1592378703,
                "rpid_str": "3049581999",
                "root_str": "3030790837",
                "parent_str": "3030978856",
                "like": 1,
                "action": 0,
                "member": {
                    "mid": "479083152",
                    "uname": "转手告别旧生活",
                    "sex": "保密",
                    "sign": "无聊...\n",
                    "avatar": "http://i1.hdslb.com/bfs/face/6b0f326614a787aa83a8a87a3aeb2b90b3976ea1.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "level_info": {
                        "current_level": 3,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": ""
                    },
                    "nameplate": {
                        "nid": 0,
                        "name": "",
                        "image": "",
                        "image_small": "",
                        "level": "",
                        "condition": ""
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 0,
                        "vipDueDate": 0,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 0,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "",
                            "label_theme": ""
                        }
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    }
                },
                "content": {
                    "message": "回复 @我到四川省来 :哈哈，考研不考化学吧",
                    "plat": 2,
                    "device": "",
                    "members": [
                        {
                            "mid": "11814633",
                            "uname": "我到四川省来",
                            "sex": "保密",
                            "sign": "保持half-sugar-life",
                            "avatar": "http://i2.hdslb.com/bfs/face/1c7cad967633c718ddef302f4aa39efaed53a2e4.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 4,
                                "name": "青铜殿堂",
                                "image": "http://i0.hdslb.com/bfs/face/2879cd5fb8518f7c6da75887994c1b2a7fe670bd.png",
                                "image_small": "http://i2.hdslb.com/bfs/face/6707c120e00a3445933308fd9b7bd9fad99e9ec4.png",
                                "level": "普通勋章",
                                "condition": "单个自制视频总播放数>=1万"
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 2,
                                "vipDueDate": 1617638400000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "年度大会员",
                                    "label_theme": "annual_vip"
                                }
                            }
                        }
                    ],
                    "jump_url": {},
                    "max_line": 999
                },
                "replies": null,
                "assist": 0,
                "folder": {
                    "has_folded": false,
                    "is_folded": false,
                    "rule": ""
                },
                "up_action": {
                    "like": false,
                    "reply": false
                },
                "show_follow": false
            },
            {
                "rpid": 3049578129,
                "oid": 201022189,
                "type": 1,
                "mid": 11814633,
                "root": 3030790837,
                "parent": 3049581999,
                "dialog": 3030978856,
                "count": 0,
                "rcount": 0,
                "floor": 94,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1592378760,
                "rpid_str": "3049578129",
                "root_str": "3030790837",
                "parent_str": "3049581999",
                "like": 0,
                "action": 0,
                "member": {
                    "mid": "11814633",
                    "uname": "我到四川省来",
                    "sex": "保密",
                    "sign": "保持half-sugar-life",
                    "avatar": "http://i2.hdslb.com/bfs/face/1c7cad967633c718ddef302f4aa39efaed53a2e4.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "level_info": {
                        "current_level": 5,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": ""
                    },
                    "nameplate": {
                        "nid": 4,
                        "name": "青铜殿堂",
                        "image": "http://i0.hdslb.com/bfs/face/2879cd5fb8518f7c6da75887994c1b2a7fe670bd.png",
                        "image_small": "http://i2.hdslb.com/bfs/face/6707c120e00a3445933308fd9b7bd9fad99e9ec4.png",
                        "level": "普通勋章",
                        "condition": "单个自制视频总播放数>=1万"
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1617638400000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "年度大会员",
                            "label_theme": "annual_vip"
                        }
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    }
                },
                "content": {
                    "message": "回复 @转手告别旧生活 :专业课 考啊",
                    "plat": 3,
                    "device": "phone",
                    "members": [
                        {
                            "mid": "479083152",
                            "uname": "转手告别旧生活",
                            "sex": "保密",
                            "sign": "无聊...\n",
                            "avatar": "http://i1.hdslb.com/bfs/face/6b0f326614a787aa83a8a87a3aeb2b90b3976ea1.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "level_info": {
                                "current_level": 3,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 0,
                                "name": "",
                                "image": "",
                                "expire": 0,
                                "image_enhance": ""
                            },
                            "nameplate": {
                                "nid": 0,
                                "name": "",
                                "image": "",
                                "image_small": "",
                                "level": "",
                                "condition": ""
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 0,
                                "vipDueDate": 0,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "",
                                    "label_theme": ""
                                }
                            }
                        }
                    ],
                    "jump_url": {},
                    "max_line": 999
                },
                "replies": null,
                "assist": 0,
                "folder": {
                    "has_folded": false,
                    "is_folded": false,
                    "rule": ""
                },
                "up_action": {
                    "like": false,
                    "reply": false
                },
                "show_follow": false
            }
        ],
        "assist": 0,
        "blacklist": 0,
        "vote": 0,
        "lottery": 0,
        "config": {
            "showadmin": 1,
            "showentry": 1,
            "showfloor": 0,
            "showtopic": 1,
            "show_up_flag": true,
            "read_only": false,
            "show_del_log": true
        },
        "upper": {
            "mid": 92586428
        },
        "show_bvid": true,
        "control": {
            "input_disable": false,
            "root_input_text": "",
            "child_input_text": "",
            "bg_text": "看看下面~来发评论吧",
            "web_selection": false,
            "answer_guide_text": "需要升级成为lv2会员后才可以评论，先去答题转正吧！",
            "answer_guide_icon_url": "http://i0.hdslb.com/bfs/emote/96940d16602cacbbac796245b7bb99fa9b5c970c.png",
            "answer_guide_ios_url": "https://www.bilibili.com/h5/newbie/entry?navhide=1&re_src=12",
            "answer_guide_android_url": "https://www.bilibili.com/h5/newbie/entry?navhide=1&re_src=6"
        }
    }
}
```



## 获取评论区评论总数（客户端）

> http://api.bilibili.com/x/v2/reply/count

*方式：GET*

**url参数：**

| 参数名 | 类型 | 内容           | 必要性 | 备注               |
| ------ | ---- | -------------- | ------ | ------------------ |
| type   | num  | 评论区类型代码 | 必要   | **类型代码见上表** |
| oid    | num  | 目标评论区ID   | 必要   |                    |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                                                         |
| ------- | ----------------------------- | -------- | ------------------------------------------------------------ |
| code    | num                           | 返回值   | 0：成功<br />-400：请求错误<br />-404：无此项<br />12009：评论主体的type不合法 |
| message | str                           | 错误信息 | 默认为0                                                      |
| ttl     | num                           | 1        | **作用尚不明确**                                             |
| data    | 正确时：obj<br />错误时：null | 数据本体 |                                                              |

`data`对象：

| 字段  | 类型 | 内容     | 备注 |
| ----- | ---- | -------- | ---- |
| count | num  | 评论条数 |      |

**示例：**

获取视频`av2`的评论区总计评论条数

http://api.bilibili.com/x/v2/reply/count?type=1&oid=2

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "count": 65521
    }
}
```




## 附表-评论条目对象

| 字段        | 类型                            | 内容             | 备注                                                         |
| ----------- | ------------------------------- | ---------------- | ------------------------------------------------------------ |
| rpid        | num                             | 评论rpID         |                                                              |
| oid         | num                             | 目标评论区rpID   |                                                              |
| type        | num                             | 评论区类型代码   | **类型代码见上表**                                           |
| mid         | num                             | 评论发送者UID    |                                                              |
| root        | num                             | 根评论rpID       | 若为一级评论则为0<br />大于一级评论则为根评论ID              |
| parent      | num                             | 回复父评论rpID   | 若为一级评论则为0<br />若为二级评论则为根评论rpID<br />大于二级评论为上一级评论rpID |
| dialog      | num                             | 回复对方rpID     | 若为一级评论则为0<br />若为二级评论则为该评论rpID<br />大于二级评论为上一级评论rpID |
| count       | num                             | 评论回复条数     |                                                              |
| rcount      | num                             | 评论回复条数     |                                                              |
| floor       | num                             | 评论楼层号       | **重要：若不支持楼层则无此项**                               |
| state       | num                             | 0                | **作用尚不明确**                                             |
| fansgrade   | num                             | 是否具有粉丝标签 | 0：无<br />1：有                                             |
| attr        | num                             | ？？？           | **作用尚不明确**                                             |
| ctime       | num                             | 评论发送时间     | 时间戳                                                       |
| rpid_str    | str                             | 评论rpID         | 字串格式                                                     |
| root_str    | str                             | 根评论rpID       | 字串格式                                                     |
| parent_str  | str                             | 回复父评论rpID   | 字串格式                                                     |
| like        | num                             | 评论获赞数       |                                                              |
| action      | num                             | 当前用户操作状态 | 需要登录(SESSDATA) <br />否则恒为0<br />0：无<br />1：已点赞<br />2：已点踩 |
| member      | obj                             | 评论发送者信息   |                                                              |
| content     | obj                             | 评论信息         |                                                              |
| replies     | 无效时：null<br />有效时：array | 评论回复条目预览 | **仅嵌套一层**<br />否则为null                               |
| assist      | num                             |                  | **作用尚不明确**                                             |
| folder      | obj                             | ？？？           |                                                              |
| up_action   | obj                             | 评论UP主操作信息 |                                                              |
| show_follow | bool                            | false            | **作用尚不明确**                                             |

`评论条目`中的`member`对象：

| 字段            | 类型                          | 内容                   | 备注                                                         |
| --------------- | ----------------------------- | ---------------------- | ------------------------------------------------------------ |
| mid             | str                           | 发送者UID              |                                                              |
| uname           | str                           | 发送者昵称             |                                                              |
| sex             | str                           | 发送者性别             | 男 女 保密                                                   |
| sign            | str                           | 发送者签名             |                                                              |
| avatar          | str                           | 发送者头像             |                                                              |
| rank            | str                           | 10000                  | **作用尚不明确**                                             |
| DisplayRank     | str                           | 0                      | **作用尚不明确**                                             |
| level_info      | obj                           | 发送者等级             |                                                              |
| pendant         | obj                           | 发送者头像框信息       |                                                              |
| nameplate       | obj                           | 发送者勋章信息         |                                                              |
| official_verify | obj                           | 发送者认证信息         |                                                              |
| vip             | obj                           | 发送者会员信息         |                                                              |
| fans_detail     | 无效时：null<br />有效时：obj | 发送者粉丝标签         |                                                              |
| following       | num                           | 是否关注该用户         | 需要登录(SESSDATA) <br />否则恒为0<br />0：未关注<br />1：已关注 |
| is_followed     | num                           | 是否被该用户关注       | 需要登录(SESSDATA) <br />否则恒为0<br />0：未关注<br />1：已关注 |
| user_sailing    | obj                           | 发送者评论条目装扮信息 |                                                              |

`member`中的`level_info`对象：

| 字段          | 类型 | 内容     | 备注             |
| ------------- | ---- | -------- | ---------------- |
| current_level | num  | 用户等级 |                  |
| current_min   | num  | 0        | **作用尚不明确** |
| current_exp   | num  | 0        | **作用尚不明确** |
| next_exp      | num  | 0        | **作用尚不明确** |

`member`中的`pendant`对象：

| 字段          | 类型 | 内容          | 备注                 |
| ------------- | ---- | ------------- | -------------------- |
| pid           | num  | 头像框id      | **详细说明有待补充** |
| name          | str  | 头像框名称    |                      |
| image         | str  | 头像框图片url |                      |
| expire        | num  | 0             | **作用尚不明确**     |
| image_enhance | str  | 头像框图片url |                      |

`member`中的`nameplate`对象：

| 字段        | 类型 | 内容             | 备注                 |
| ----------- | ---- | ---------------- | -------------------- |
| nid         | num  | 勋章id           | **详细说明有待补充** |
| name        | str  | 勋章名称         |                      |
| image       | str  | 挂件图片url 正常 |                      |
| image_small | str  | 勋章图片url 小   |                      |
| level       | str  | 勋章等级         |                      |
| condition   | str  | 勋章条件         |                      |

`member`中的`official_verify`对象：

| 字段 | 类型 | 内容     | 备注                |
| ---- | ---- | -------- | ------------------- |
| type | num  | 是否认证 | -1：无<br />0：认证 |
| desc | str  | 认证信息 | 无为空              |

`member`中的`vip`对象：

| 字段          | 类型 | 内容           | 备注                                |
| ------------- | ---- | -------------- | ----------------------------------- |
| vipType       | num  | 大会员类型     | 0：无<br />1：月会员<br />2：年会员 |
| vipDueDate    | num  | 大会员到期时间 | 毫秒 时间戳                         |
| dueRemark     | str  | 空             | **作用尚不明确**                    |
| accessStatus  | num  | 0              | **作用尚不明确**                    |
| vipStatus     | num  | 大会员状态     | 0：无<br />1：有                    |
| vipStatusWarn | str  | 空             | **作用尚不明确**                    |
| theme_type    | num  | 0              | **作用尚不明确**                    |
| label         | obj  | ？？？         |                                     |

`vip`中的`label`对象:

| 字段        | 类型 | 内容         | 备注             |
| ----------- | ---- | ------------ | ---------------- |
| path        | str  | 空           | **作用尚不明确** |
| text        | str  | 会员类型信息 |                  |
| label_theme | str  | 会员类型     |                  |

`member`中的`fans_detail`对象:

| 字段          | 类型 | 内容         | 备注                 |
| ------------- | ---- | ------------ | -------------------- |
| uid           | num  | 用户UID      |                      |
| medal_id      | num  | 粉丝标签ID   | **详细说明有待补充** |
| medal_name    | str  | 粉丝标签名   |                      |
| score         | num  | 0            | **作用尚不明确**     |
| level         | num  | 当前标签等级 |                      |
| intimacy      | num  | 0            | **作用尚不明确**     |
| master_status | num  | 1            | **作用尚不明确**     |
| is_receive    | num  | 1            | **作用尚不明确**     |

`member`中的`user_sailing`对象：

| 字段              | 类型                          | 内容         | 备注             |
| ----------------- | ----------------------------- | ------------ | ---------------- |
| pendant           | 无效时：null<br />有效时：obj | 头像框信息   |                  |
| cardbg            | 无效时：null<br />有效时：obj | 评论条目装扮 |                  |
| cardbg_with_focus | null                          | -            | **作用尚不明确** |

`user_sailing`中的`pendant`对象：

| 字段     | 类型 | 内容          | 备注                                  |
| -------- | ---- | ------------- | ------------------------------------- |
| id       | num  | 头像框ID      |                                       |
| name     | str  | 头像框名称    |                                       |
| image    | str  | 头像框图片url |                                       |
| jump_url | str  | 空            |                                       |
| type     | str  | 装扮类型      | suit：一般装扮<br />vip_suit：vip装扮 |

`user_sailing`中的`cardbg`对象：

| 字段     | 类型 | 内容                    | 备注                                  |
| -------- | ---- | ----------------------- | ------------------------------------- |
| id       | num  | 评论条目装扮ID          |                                       |
| name     | str  | 评论条目装扮名称        |                                       |
| image    | str  | 评论条目装扮图片url     |                                       |
| jump_url | str  | 评论条目装扮商城页面url |                                       |
| fan      | obj  | 粉丝专属信息            |                                       |
| type     | str  | 装扮类型                | suit：一般装扮<br />vip_suit：vip装扮 |

`cardbg`中的`fan`对象：

| 字段     | 类型 | 内容               | 备注             |
| -------- | ---- | ------------------ | ---------------- |
| is_fan   | num  | 是否为粉丝专属装扮 | 0：否<br />1：是 |
| number   | num  | 粉丝专属编号       |                  |
| color    | str  | 数字颜色           | 颜色码           |
| name     | str  | 装扮名称           |                  |
| num_desc | str  | 粉丝专属编号       | 字串格式         |

`评论条目`中的`content`对象：

| 字段     | 类型  | 内容                 | 备注                                                         |
| -------- | ----- | -------------------- | ------------------------------------------------------------ |
| message  | str   | 评论内容             | **重要**                                                     |
| plat     | num   | 评论发送平台         | 1：web端<br />2：安卓客户端<br />3：ios客户端<br />4：wp客户端 |
| device   | str   | 评论发送平台设备     |                                                              |
| members  | array | 评论中at到的用户信息 |                                                              |
| emote    | obj   | 表情转义符信息       | 评论内容无表情则无此项                                       |
| jump_url | obj   | 空                   | **作用尚不明确**                                             |
| max_line | num   | 6                    | **作用尚不明确**                                             |

`content`中的`members`数组：

| 项   | 类型 | 内容            | 备注                             |
| ---- | ---- | --------------- | -------------------------------- |
| 0    | obj  | at到的用户1     | 基本同`评论条目`中的`member`对象 |
| n    | obj  | at到的用户(n+1) | 项数为at到的不同的用户数         |
| ……   | obj  | ……              | ……                               |

`content`中的`emote`对象：

| 字段         | 类型 | 内容            | 备注     |
| ------------ | ---- | --------------- | -------- |
| {表情转义符} | obj  | 表情转义符信息1 |          |
| ……           | obj  | 表情转义符信息n | 向下扩展 |

`emote`中的`{表情转义符}`对象：

| 字段       | 类型 | 内容         | 备注                                                     |
| ---------- | ---- | ------------ | -------------------------------------------------------- |
| id         | num  | 表情ID       |                                                          |
| package_id | num  | 表情包ID     |                                                          |
| state      | num  | 0            |                                                          |
| type       | num  | 表情类型     | 1：免费<br />2：会员专属<br />3：购买所得<br />4：颜文字 |
| attr       | num  | 0            | **作用尚不明确**                                         |
| text       | str  | 表情转义符   |                                                          |
| url        | str  | 表情图片url  |                                                          |
| meta       | obj  | 属性信息     |                                                          |
| mtime      | num  | 表情创建时间 | 时间戳                                                   |

`{表情转义符}`中的`meta`对象：

| 字段  | 类型 | 内容         | 备注             |
| ----- | ---- | ------------ | ---------------- |
| size  | num  | 表情尺寸信息 | 1：小<br />2：大 |
| alias | str  | 简写名       | 无则无此项       |

`评论条目`中的`replies`数组：

| 项   | 类型 | 内容      | 备注                                                         |
| ---- | ---- | --------- | ------------------------------------------------------------ |
| 0    | obj  | 回复条目1 | **为本对象的递归嵌套**<br />**仅嵌套一层**<br />按照热度顺序排列 |
| 1    | obj  | 回复条目2 |                                                              |
| 2    | obj  | 回复条目3 | 最后一项                                                     |

`评论条目`中的`folder`对象：

| 字段       | 类型 | 内容   | 备注             |
| ---------- | ---- | ------ | ---------------- |
| has_folded | bool | false  | **作用尚不明确** |
| is_folded  | bool | false  | **作用尚不明确** |
| rule       | str  | ？？？ | **作用尚不明确** |

`评论条目`中的`up_action`对象：

| 字段  | 类型 | 内容             | 备注                    |
| ----- | ---- | ---------------- | ----------------------- |
| like  | bool | 是否UP主觉得很赞 | false：否<br />true：是 |
| reply | bool | 是否被UP主回复   | false：否<br />true：是 |