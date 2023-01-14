# 评论区明细

- [获取评论区明细_翻页加载](#获取评论区明细_翻页加载)
- [获取评论区明细_懒加载](#获取评论区明细_懒加载)
- [获取指定评论的回复](#获取指定评论的回复)
- [获取指定评论对话树](#获取指定评论对话树)
- [获取评论区热评](#获取评论区热评)
- [~~获取指定评论信息~~](#~~获取指定评论信息~~)
- [获取评论区评论总数](#获取评论区评论总数)

---

## 获取评论区明细_翻页加载

> http://api.bilibili.com/x/v2/reply

*请求方式：GET*

认证方式：Cookie（SESSDATA）或APP

**url参数：**

| 参数名     | 类型 | 内容           | 必要性       | 备注                                                     |
| ---------- | ---- | -------------- | ------------ | -------------------------------------------------------- |
| access_key | str  | APP 登录 Token | APP 方式必要 |                                                          |
| type       | num  | 评论区类型代码 | 必要         | [类型代码见表](readme.md#评论区类型代码)                 |
| oid        | num  | 目标评论区 id  | 必要         |                                                          |
| sort       | num  | 排序方式       | 非必要       | 默认为0<br />0：按时间<br />1：按点赞数<br />2：按回复数 |
| nohot      | num  | 是否不显示热评 | 非必要       | 默认为0<br />1：不显示<br />0：显示                      |
| ps         | num  | 每页项数       | 非必要       | 默认为20<br />定义域：1-49                                 |
| pn         | num  | 页码           | 非必要       | 默认为1                                                  |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                                                         |
| ------- | ----------------------------- | -------- | ------------------------------------------------------------ |
| code    | num                           | 返回值   | 0：成功<br />-400：请求错误<br />-404：无此项<br />12002：评论区已关闭<br />12009：评论主体的type不合法 |
| message | str                           | 错误信息 | 默认为0                                                      |
| ttl     | num                           | 1        |                                                              |
| data    | 正确时：obj<br />错误时：null | 数据本体 |                                                              |

`data`对象：

| 字段         | 类型                             | 内容     | 备注             |
| ------------ | -------------------------------- | -------- | ---------------- |
| page         | obj                              | 页信息   |                  |
| config       | obj                              | 评论区显示控制 |                  |
| replies      | 禁用时：null<br />正常时：array | 评论列表 |                 |
| hots         | 禁用时：null<br />正常时：array | 热评列表 |                 |
| upper        | obj                              | 置顶评论 |                  |
| top          | null                             | (?)     |  |
| notice       | 无效时：null<br />有效时：obj            | 评论区公告信息 |  |
| vote         | num                              | 投票评论?          |      |
| blacklist    | num                              | (?)                |      |
| assist       | num                              | (?)                |      |
| mode         | num                              | 评论区类型id |  |
| support_mode | array                           | 评论区支持的类型id |  |
| folder       | obj                              | 折叠相关信息 |  |
| lottery_card | null                             | (?)                |      |
| show_bvid    | bool                             | 显示bvid?          |      |
| control      | obj                              | 评论区输入属性 |                  |

`data`中的`page`对象：

| 字段   | 类型 | 内容         | 备注 |
| ------ | ---- | ------------ | ---- |
| num    | num  | 当前页码     |      |
| size   | num  | 每页项数     |      |
| count  | num  | 根评论条数   |      |
| acount | num  | 总计评论条数 |      |

`data`中的`config`对象：

| 字段         | 类型 | 内容                      | 备注 |
| ------------ | ---- | ------------------------- | ---- |
| showadmin    | num  | 是否显示管理置顶          |      |
| showentry    | num  | (?)                       |      |
| showfloor    | num  | 是否显示楼层号            |      |
| showtopic    | num  | 是否显示话题              |      |
| show_up_flag | bool | 是否显示“UP 觉得很赞”标志 |      |
| read_only    | bool | 是否只读评论区            |      |
| show_del_log | bool | 是否显示删除记录          |      |

`data`中的`replies`数组：

| 项   | 类型 | 内容           | 备注                                   |
| ---- | ---- | -------------- | -------------------------------------- |
| 0    | obj  | 评论条目 1     | [对象定义见表](readme.md#评论条目对象) |
| n    | obj  | 评论条目 (n+1) | 按照指定的顺序排列                     |
| ……   | obj  | ……             | ……                                     |

`data`中的`hots`数组：

| 项   | 类型 | 内容           | 备注                                   |
| ---- | ---- | -------------- | -------------------------------------- |
| 0    | obj  | 热评条目 1     | [对象定义见表](readme.md#评论条目对象) |
| n    | obj  | 热评条目 (n+1) | 按照热评热度排列                       |
| ……   | obj  | ……             | ……                                     |

`data`中的`upper`对象：

| 字段 | 类型                          | 内容       | 备注                                   |
| ---- | ----------------------------- | ---------- | -------------------------------------- |
| mid  | num                           | UP 主 mid  |                                        |
| top  | 有效时：obj<br />无效时：null | 置顶条目   | [对象定义见表](readme.md#评论条目对象) |
| vote | 有效时：obj<br />无效时：null | 投票评论？ |                                        |

`data`中的`notice`对象：

| 字段    | 类型 | 内容             | 备注 |
| ------- | ---- | ---------------- | ---- |
| content | str  | 公告正文         |      |
| id      | num  | 公告 id          |      |
| link    | str  | 公告页面链接 url |      |
| title   | str  | 公告标题         |      |

`data`中的`folder`对象：

| 字段       | 类型 | 内容                   | 备注 |
| ---------- | ---- | ---------------------- | ---- |
| has_folded | bool | 评论区是否存在折叠评论 |      |
| is_folded  | bool | 是否折叠?              |      |
| rule       | str  | 相关规则页面 url       |      |

`data`中的`control`对象：

| 字段                     | 类型 | 内容               | 备注                                |
| ------------------------ | ---- | ------------------ | ----------------------------------- |
| input_disable            | bool | 是否禁止新增评论          |    用户涉及合约争议，锁定该用户所有稿件、动态的评论区，不允许新增评论，`root_input_text`和`child_input_text`值为“当前评论区不可新增评论”                              |
| root_input_text          | str  | 评论框文字         |                                     |
| child_input_text         | str  | 评论框文字         |                                     |
| bg_text                  | str  | 空评论区文字       |                                     |
| web_selection            | bool | 评论是否筛选后可见 | false：无需筛选<br />true：需要筛选 |
| answer_guide_text        | str  | 答题页面链接文字   |                                     |
| answer_guide_icon_url    | str  | 答题页面图标 url   |                                     |
| answer_guide_ios_url     | str  | 答题页面 ios url   |                                     |
| answer_guide_android_url | str  | 答题页面安卓 url   |                                     |

**示例：**

获取视频`av2`的评论区明细，不显示热评，按照热度排序，每页5项，查看第1页

```shell
curl -G 'http://api.bilibili.com/x/v2/reply' \
--data-urlencode 'type=1' \
--data-urlencode 'oid=2' \
--data-urlencode 'sort=1' \
--data-urlencode 'ps=5' \
--data-urlencode 'pn=1' \
--data-urlencode 'nohot=1' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "page": {
            "num": 1,
            "size": 5,
            "count": 60971,
            "acount": 76792
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
                "rpid": 104192624480,
                "oid": 2,
                "type": 1,
                "mid": 621197713,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 0,
                "rcount": 0,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1646205507,
                "rpid_str": "104192624480",
                "root_str": "0",
                "parent_str": "0",
                "like": 1,
                "action": 0,
                "member": {
                    "mid": "621197713",
                    "uname": "小鹿不跑路",
                    "sex": "保密",
                    "sign": "",
                    "avatar": "http://i1.hdslb.com/bfs/face/3e220c95ead8f2bc72bd2dcee72d195b723192fa.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
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
                        "image_enhance": "",
                        "image_enhance_frame": ""
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
                        "vipDueDate": 1648051200000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "大会员",
                            "label_theme": "vip",
                            "text_color": "#FFFFFF",
                            "bg_style": 1,
                            "bg_color": "#FB7299",
                            "border_color": ""
                        },
                        "avatar_subscript": 1,
                        "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png",
                        "nickname_color": ""
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    },
                    "is_contractor": false,
                    "contract_desc": ""
                },
                "content": {
                    "message": "我赶上了我们这个年龄段二次元的末班车，这一年，巨人出了最终季，诚哥的新作玲芽户缔（好像是叫这个）也要在今年秋上映，后悔没有早进入这个圈子，现在只好紧追慢赶，慢慢的补番，我小时候都在干什么啊[大哭]",
                    "plat": 0,
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
                            "mtime": 1597738918,
                            "jump_title": "大哭"
                        }
                    },
                    "jump_url": {},
                    "max_line": 6
                },
                "replies": [],
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {
                    "time_desc": "6小时前发布"
                }
            },
            {
                "rpid": 104184937184,
                "oid": 2,
                "type": 1,
                "mid": 560450695,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 0,
                "rcount": 0,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1646199089,
                "rpid_str": "104184937184",
                "root_str": "0",
                "parent_str": "0",
                "like": 0,
                "action": 0,
                "member": {
                    "mid": "560450695",
                    "uname": "還講幾韆",
                    "sex": "保密",
                    "sign": "",
                    "avatar": "http://i1.hdslb.com/bfs/face/e8bcd1f3fed1a8b266e83f7e5952db525b692227.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
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
                        "image_enhance": "",
                        "image_enhance_frame": ""
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
                            "label_theme": "",
                            "text_color": "",
                            "bg_style": 0,
                            "bg_color": "",
                            "border_color": ""
                        },
                        "avatar_subscript": 0,
                        "nickname_color": ""
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    },
                    "is_contractor": false,
                    "contract_desc": ""
                },
                "content": {
                    "message": "电视宇宙第二个视频[滑稽][滑稽][滑稽]",
                    "plat": 0,
                    "device": "",
                    "members": [],
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
                            "mtime": 1645206695,
                            "jump_title": "滑稽"
                        }
                    },
                    "jump_url": {},
                    "max_line": 6
                },
                "replies": [],
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {
                    "time_desc": "7小时前发布"
                }
            },
            {
                "rpid": 104179775904,
                "oid": 2,
                "type": 1,
                "mid": 1616523766,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 0,
                "rcount": 0,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1646195814,
                "rpid_str": "104179775904",
                "root_str": "0",
                "parent_str": "0",
                "like": 1,
                "action": 0,
                "member": {
                    "mid": "1616523766",
                    "uname": "关查者网",
                    "sex": "保密",
                    "sign": "",
                    "avatar": "http://i1.hdslb.com/bfs/face/8bb6aab1f6bcc960f4482aa97b8ca4e61cf81d0d.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
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
                        "image_enhance": "",
                        "image_enhance_frame": ""
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
                        "vipDueDate": 1626451200000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 0,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "",
                            "label_theme": "",
                            "text_color": "",
                            "bg_style": 0,
                            "bg_color": "",
                            "border_color": ""
                        },
                        "avatar_subscript": 0,
                        "nickname_color": ""
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    },
                    "is_contractor": false,
                    "contract_desc": ""
                },
                "content": {
                    "message": "考古队已到达[doge]",
                    "plat": 0,
                    "device": "",
                    "members": [],
                    "emote": {
                        "[doge]": {
                            "id": 26,
                            "package_id": 1,
                            "state": 0,
                            "type": 1,
                            "attr": 0,
                            "text": "[doge]",
                            "url": "http://i0.hdslb.com/bfs/emote/3087d273a78ccaff4bb1e9972e2ba2a7583c9f11.png",
                            "meta": {
                                "size": 1
                            },
                            "mtime": 1645206695,
                            "jump_title": "doge"
                        }
                    },
                    "jump_url": {},
                    "max_line": 6
                },
                "replies": [],
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {
                    "time_desc": "8小时前发布"
                }
            },
            {
                "rpid": 104163851152,
                "oid": 2,
                "type": 1,
                "mid": 27553613,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 0,
                "rcount": 0,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1646183484,
                "rpid_str": "104163851152",
                "root_str": "0",
                "parent_str": "0",
                "like": 1,
                "action": 0,
                "member": {
                    "mid": "27553613",
                    "uname": "念晚心",
                    "sex": "男",
                    "sign": "",
                    "avatar": "http://i2.hdslb.com/bfs/face/8b8f32c22651904a23eeb83b048041b7c1c8ffd6.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
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
                        "image_enhance": "",
                        "image_enhance_frame": ""
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
                        "vipDueDate": 1650470400000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "年度大会员",
                            "label_theme": "annual_vip",
                            "text_color": "#FFFFFF",
                            "bg_style": 1,
                            "bg_color": "#FB7299",
                            "border_color": ""
                        },
                        "avatar_subscript": 1,
                        "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png",
                        "nickname_color": "#FB7299"
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": {
                            "id": 5476,
                            "name": "嘉然今天吃什么",
                            "image": "http://i0.hdslb.com/bfs/garb/item/4442641bd4001214518a81fa8f790ae7469d3cf7.png",
                            "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/5461?navhide=1&mid=27553613&from=reply",
                            "fan": {
                                "is_fan": 1,
                                "number": 14705,
                                "color": "#f76a6b",
                                "name": "嘉然今天吃什么",
                                "num_desc": "014705"
                            },
                            "type": "suit"
                        },
                        "cardbg_with_focus": null
                    },
                    "is_contractor": false,
                    "contract_desc": ""
                },
                "content": {
                    "message": "当时只看优酷和土豆",
                    "plat": 0,
                    "device": "",
                    "members": [],
                    "jump_url": {},
                    "max_line": 6
                },
                "replies": [],
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {
                    "time_desc": "12小时前发布"
                }
            },
            {
                "rpid": 104163545120,
                "oid": 2,
                "type": 1,
                "mid": 31937033,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 0,
                "rcount": 0,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1646183209,
                "rpid_str": "104163545120",
                "root_str": "0",
                "parent_str": "0",
                "like": 1,
                "action": 0,
                "member": {
                    "mid": "31937033",
                    "uname": "夜声已尽",
                    "sex": "男",
                    "sign": "六八四十二",
                    "avatar": "http://i2.hdslb.com/bfs/face/e35e81a00596883532ba47c58ca0434618fab3d0.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
                    "level_info": {
                        "current_level": 6,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 33465,
                        "name": "乃琳Queen",
                        "image": "http://i2.hdslb.com/bfs/garb/item/4ad130e4068f88c54728ac510a172b97e187826f.png",
                        "expire": 0,
                        "image_enhance": "http://i2.hdslb.com/bfs/garb/item/4ad130e4068f88c54728ac510a172b97e187826f.png",
                        "image_enhance_frame": ""
                    },
                    "nameplate": {
                        "nid": 62,
                        "name": "有爱大佬",
                        "image": "http://i0.hdslb.com/bfs/face/a10ee6b613e0d68d2dfdac8bbf71b94824e10408.png",
                        "image_small": "http://i2.hdslb.com/bfs/face/54f4c31ab9b1f1fa2c29dbbc967f66535699337e.png",
                        "level": "普通勋章",
                        "condition": "当前持有粉丝勋章最高等级>=15级"
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1671465600000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "年度大会员",
                            "label_theme": "annual_vip",
                            "text_color": "#FFFFFF",
                            "bg_style": 1,
                            "bg_color": "#FB7299",
                            "border_color": ""
                        },
                        "avatar_subscript": 1,
                        "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png",
                        "nickname_color": "#FB7299"
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": {
                            "id": 33465,
                            "name": "乃琳Queen",
                            "image": "http://i0.hdslb.com/bfs/garb/item/4ad130e4068f88c54728ac510a172b97e187826f.png",
                            "jump_url": "",
                            "type": "suit",
                            "image_enhance": "http://i0.hdslb.com/bfs/garb/item/4ad130e4068f88c54728ac510a172b97e187826f.png",
                            "image_enhance_frame": ""
                        },
                        "cardbg": {
                            "id": 33494,
                            "name": "乃琳Queen",
                            "image": "http://i0.hdslb.com/bfs/garb/item/34f8c1ef43332883f62e17fed44c1a70930e4811.png",
                            "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/33498?navhide=1&mid=31937033&from=reply",
                            "fan": {
                                "is_fan": 1,
                                "number": 50766,
                                "color": "#576690",
                                "name": "乃琳Queen",
                                "num_desc": "050766"
                            },
                            "type": "suit"
                        },
                        "cardbg_with_focus": null
                    },
                    "is_contractor": false,
                    "contract_desc": ""
                },
                "content": {
                    "message": "考古",
                    "plat": 0,
                    "device": "",
                    "members": [],
                    "jump_url": {},
                    "max_line": 6
                },
                "replies": [],
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {
                    "time_desc": "12小时前发布"
                }
            }
        ],
        "hots": [],
        "upper": {
            "mid": 2,
            "top": null,
            "vote": null
        },
        "top": null,
        "notice": null,
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
        "show_bvid": false,
        "control": {
            "input_disable": false,
            "root_input_text": "发一条友善的评论",
            "child_input_text": "",
            "giveup_input_text": "不发没关系，请继续友善哦~",
            "bg_text": "看看下面~来发评论吧",
            "web_selection": false,
            "answer_guide_text": "需要升级成为lv2会员后才可以评论，先去答题转正吧！",
            "answer_guide_icon_url": "http://i0.hdslb.com/bfs/emote/96940d16602cacbbac796245b7bb99fa9b5c970c.png",
            "answer_guide_ios_url": "https://www.bilibili.com/h5/newbie/entry?navhide=1&re_src=12",
            "answer_guide_android_url": "https://www.bilibili.com/h5/newbie/entry?navhide=1&re_src=6",
            "show_type": 1,
            "show_text": "",
            "disable_jump_emote": false
        }
    }
}
```

</details>

## 获取评论区明细_懒加载

> http://api.bilibili.com/x/v2/reply/main

*请求方式：GET*

认证方式：Cookie（SESSDATA）或APP

**url参数：**

| 参数名     | 类型 | 内容           | 必要性       | 备注                                                         |
| ---------- | ---- | -------------- | ------------ | ------------------------------------------------------------ |
| access_key | str  | APP 登录 Token | APP 方式必要 |                                                              |
| type       | num  | 评论区类型代码 | 必要         | [类型代码见表](readme.md#评论区类型代码)                     |
| oid        | num  | 目标评论区 id  | 必要         |                                                              |
| mode       | num  | 排序方式       | 非必要       | 默认为 3<br />0 3：仅按热度<br />1：按热度+按时间<br />2：仅按时间 |
| next       | num  | 评论页选择     | 非必要       | 按热度时：热度顺序页码（0 为第一页）<br />按时间时：时间倒序楼层号<br />默认为 0 |
| ps         | num  | 每页项数       | 非必要       | 默认为 20<br />定义域：1-30                                  |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                                                         |
| ------- | ----------------------------- | -------- | ------------------------------------------------------------ |
| code    | num                           | 返回值   | 0：成功<br />-400：请求错误<br />-404：无此项<br />12002：评论区已关闭<br />12009：评论主体的type不合法 |
| message | str                           | 错误信息 | 默认为0                                                      |
| ttl     | num                           | 1        |                                                              |
| data    | 正确时：obj<br />错误时：null | 数据本体 |                                                              |

`data`对象：

| 字段         | 类型                             | 内容     | 备注             |
| ------------ | -------------------------------- | -------- | ---------------- |
| cursor    | obj                              | 游标信息 |                  |
| hots         | 禁用时：null<br />正常时：array | 热评列表 |                  |
| notice       | 无效时：null<br />有效时：obj            | 评论区公告信息 |  |
| replies      | 禁用时：null<br />正常时：array | 评论列表 |                  |
| top          | obj                       | 置顶信息 |  |
| top_replies | obj | 置顶评论 | [对象定义见表](readme.md#评论条目对象) |
| lottery_card | null                             | 抽奖评论    |  |
| folder       | obj                              | 评论折叠信息 |  |
| up_selection | obj | (?) | |
| cm | obj | 广告 | |
| cm_info | obj | 广告控制 | |
| effects | obj | (?) | |
| assist       | num                              | (?)            |                                        |
| blacklist    | num                              | (?)            |                                        |
| vote         | num                              | (?)            |                                        |
| lottery | num | (?)            |                                        |
| config       | obj                              | 评论区显示控制 |                  |
| upper        | obj                              | UP主信息 |                  |
| show_bvid    | bool                             | 显示 bvid?     |                                        |
| control      | obj                              | 评论区输入属性 |                  |

`data`中的`cursor`对象：

| 字段         | 类型  | 内容           | 备注                    |
| ------------ | ----- | -------------- | ----------------------- |
| all_count    | num   | 全部评论条数   |                         |
| is_begin     | bool  | 是否为第一页   | false：否<br />true：是 |
| prev         | num   | 上页页码       |                         |
| next         | num   | 下页页码       |                         |
| is_end       | bool  | 是否为最后页   | false：否<br />true：是 |
| mode         | num   | 排序方式       |                         |
| show_type    | num   | (?)            |                         |
| support_mode | array | 支持的排序方式 |                         |
| name         | str   | 评论区类型名   |                         |

`data`中的`config`对象：

| 字段         | 类型 | 内容                      | 备注 |
| ------------ | ---- | ------------------------- | ---- |
| showadmin    | num  | 是否显示管理置顶          |      |
| showentry    | num  | ？                        |      |
| showfloor    | num  | 是否显示楼层号            |      |
| showtopic    | num  | 是否显示话题              |      |
| show_up_flag | bool | 是否显示“UP 觉得很赞”标志 |      |
| read_only    | bool | 是否只读评论区            |      |
| show_del_log | bool | 是否显示删除记录          |      |

`data`中的`hots`数组：

| 项   | 类型 | 内容           | 备注                                   |
| ---- | ---- | -------------- | -------------------------------------- |
| 0    | obj  | 热评条目 1     | [对象定义见表](readme.md#评论条目对象) |
| n    | obj  | 热评条目 (n+1) | 按照热评热度排列                       |
| ……   | obj  | ……             | ……                                     |

`data`中的`replies`数组：

| 项   | 类型 | 内容           | 备注                                   |
| ---- | ---- | -------------- | -------------------------------------- |
| 0    | obj  | 评论条目 1     | [对象定义见表](readme.md#评论条目对象) |
| n    | obj  | 评论条目 (n+1) | 按照指定的顺序排列                     |
| ……   | obj  | ……             | ……                                     |

`data`中的`top`对象：

| 字段  | 类型                          | 内容           | 备注                                   |
| ----- | ----------------------------- | -------------- | -------------------------------------- |
| admin | 有效时：obj<br />无效时：null | 管理员置顶条目 | [对象定义见表](readme.md#评论条目对象) |
| upper | 有效时：obj<br />无效时：null | UP 主置顶条目  | [对象定义见表](readme.md#评论条目对象) |
| vote  | 有效时：obj<br />无效时：null | 投票置顶条目   | [对象定义见表](readme.md#评论条目对象) |

`data`中的`upper`对象：

| 字段 | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| mid  | num  | UP 主 mid |      |

`data`中的`notice`对象：

| 字段    | 类型 | 内容             | 备注 |
| ------- | ---- | ---------------- | ---- |
| content | str  | 公告正文         |      |
| id      | num  | 公告 id          |      |
| link    | str  | 公告页面链接 url |      |
| title   | str  | 公告标题         |      |

`data`中的`folder`对象：

| 字段       | 类型 | 内容                   | 备注 |
| ---------- | ---- | ---------------------- | ---- |
| has_folded | bool | 评论区是否存在折叠评论 |      |
| is_folded  | bool | 是否折叠?              |      |
| rule       | str  | 相关规则页面 url       |      |

`data`中的`control`对象：

| 字段                     | 类型 | 内容               | 备注                                |
| ------------------------ | ---- | ------------------ | ----------------------------------- |
| input_disable            | bool | (?)                |                                     |
| root_input_text          | str  | 评论框文字         |                                     |
| child_input_text         | str  | 评论框文字         |                                     |
| bg_text                  | str  | 空评论区文字       |                                     |
| web_selection            | bool | 评论是否筛选后可见 | false：无需筛选<br />true：需要筛选 |
| answer_guide_text        | str  | 答题页面链接文字   |                                     |
| answer_guide_icon_url    | str  | 答题页面图标 url   |                                     |
| answer_guide_ios_url     | str  | 答题页面 ios url   |                                     |
| answer_guide_android_url | str  | 答题页面安卓 url   |                                     |

**示例：**

获取视频`av2`的评论区明细，按照热度排序，每页5项，查看第1页

```shell
curl -G 'http://api.bilibili.com/x/v2/reply/main' \
--data-urlencode 'type=1' \
--data-urlencode 'oid=2' \
--data-urlencode 'mode=3' \
--data-urlencode 'next=0' \
--data-urlencode 'ps=5' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "cursor": {
            "all_count": 76793,
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
                "count": 2733,
                "rcount": 2608,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1291350931,
                "rpid_str": "476670",
                "root_str": "0",
                "parent_str": "0",
                "like": 90419,
                "action": 0,
                "member": {
                    "mid": "58426",
                    "uname": "残星什么的就是残星",
                    "sex": "男",
                    "sign": "少说话多做事 _微博@残星",
                    "avatar": "http://i1.hdslb.com/bfs/face/56ac36b37662e3746228f30eb4acf2cd332b66a5.jpg",
                    "rank": "20000",
                    "DisplayRank": "0",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
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
                        "image_enhance": "",
                        "image_enhance_frame": ""
                    },
                    "nameplate": {
                        "nid": 30,
                        "name": "字幕君",
                        "image": "http://i1.hdslb.com/bfs/face/383c3fed3dc162c93a8d616a272693f6650e98f1.png",
                        "image_small": "http://i2.hdslb.com/bfs/face/7ad18084e40b725210e22696e0efdae408cd378c.png",
                        "level": "稀有勋章",
                        "condition": "弹幕大赛获得"
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1710777600000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "年度大会员",
                            "label_theme": "annual_vip",
                            "text_color": "#FFFFFF",
                            "bg_style": 1,
                            "bg_color": "#FB7299",
                            "border_color": ""
                        },
                        "avatar_subscript": 1,
                        "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png",
                        "nickname_color": "#FB7299"
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    },
                    "is_contractor": false,
                    "contract_desc": ""
                },
                "content": {
                    "message": "貌似没人来",
                    "plat": 0,
                    "device": "",
                    "members": [],
                    "jump_url": {},
                    "max_line": 6
                },
                "replies": [
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
                        "like": 1958,
                        "action": 0,
                        "member": {
                            "mid": "18370638",
                            "uname": "初音ハク",
                            "sex": "保密",
                            "sign": "我是艾尔的利刃",
                            "avatar": "http://i0.hdslb.com/bfs/face/71b838cc7c69dc16e0ad49fa4e6f84a2fe2eaadb.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "face_nft_new": 0,
                            "is_senior_member": 0,
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
                                "image_enhance": "",
                                "image_enhance_frame": ""
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
                                "vipDueDate": 1654790400000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "年度大会员",
                                    "label_theme": "annual_vip",
                                    "text_color": "#FFFFFF",
                                    "bg_style": 1,
                                    "bg_color": "#FB7299",
                                    "border_color": ""
                                },
                                "avatar_subscript": 1,
                                "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png",
                                "nickname_color": "#FB7299"
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            },
                            "is_contractor": false,
                            "contract_desc": ""
                        },
                        "content": {
                            "message": "划了4千多条评论找到的啊ε=ε=(ノ≧∇≦)ノ",
                            "plat": 0,
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
                        "show_follow": false,
                        "invisible": false,
                        "reply_control": {
                            "time_desc": "1821天前发布"
                        }
                    },
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
                        "like": 6534,
                        "action": 0,
                        "member": {
                            "mid": "52987877",
                            "uname": "Mr-Shadow",
                            "sex": "男",
                            "sign": "重灾区话题回避",
                            "avatar": "http://i2.hdslb.com/bfs/face/dc679f8221b27e2056c1ad018d168402d80d98d5.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "face_nft_new": 0,
                            "is_senior_member": 0,
                            "level_info": {
                                "current_level": 6,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 2511,
                                "name": "初音未来13周年",
                                "image": "http://i2.hdslb.com/bfs/garb/item/4f8f3f1f2d47f0dad84f66aa57acd4409ea46361.png",
                                "expire": 0,
                                "image_enhance": "http://i2.hdslb.com/bfs/garb/item/fe0b83b53e2342b16646f6e7a9370d8a867decdb.webp",
                                "image_enhance_frame": "http://i2.hdslb.com/bfs/garb/item/127c507ec8448be30cf5f79500ecc6ef2fd32f2c.png"
                            },
                            "nameplate": {
                                "nid": 61,
                                "name": "有爱楷模",
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
                                "vipDueDate": 1666281600000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "年度大会员",
                                    "label_theme": "annual_vip",
                                    "text_color": "#FFFFFF",
                                    "bg_style": 1,
                                    "bg_color": "#FB7299",
                                    "border_color": ""
                                },
                                "avatar_subscript": 1,
                                "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png",
                                "nickname_color": "#FB7299"
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": {
                                    "id": 2511,
                                    "name": "初音未来13周年",
                                    "image": "http://i0.hdslb.com/bfs/garb/item/4f8f3f1f2d47f0dad84f66aa57acd4409ea46361.png",
                                    "jump_url": "",
                                    "type": "suit",
                                    "image_enhance": "http://i0.hdslb.com/bfs/garb/item/fe0b83b53e2342b16646f6e7a9370d8a867decdb.webp",
                                    "image_enhance_frame": "http://i0.hdslb.com/bfs/garb/item/127c507ec8448be30cf5f79500ecc6ef2fd32f2c.png"
                                },
                                "cardbg": {
                                    "id": 2528,
                                    "name": "初音未来13周年",
                                    "image": "http://i0.hdslb.com/bfs/garb/item/7dbd22f700e0a7fe0c0d0da7b1a54241626bf1cd.png",
                                    "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/2554?navhide=1&mid=52987877&from=reply",
                                    "fan": {
                                        "is_fan": 1,
                                        "number": 94388,
                                        "color": "#07b6d5",
                                        "name": "初音未来周年纪念",
                                        "num_desc": "094388"
                                    },
                                    "type": "suit"
                                },
                                "cardbg_with_focus": null
                            },
                            "is_contractor": false,
                            "contract_desc": ""
                        },
                        "content": {
                            "message": "你可能抢到了整个b站最难抢到的沙发(｀・ω・´)",
                            "plat": 0,
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
                        "show_follow": false,
                        "invisible": false,
                        "reply_control": {
                            "time_desc": "1520天前发布"
                        }
                    },
                    {
                        "rpid": 2237449754,
                        "oid": 2,
                        "type": 1,
                        "mid": 400121455,
                        "root": 476670,
                        "parent": 568785293,
                        "dialog": 568785293,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1578311878,
                        "rpid_str": "2237449754",
                        "root_str": "476670",
                        "parent_str": "568785293",
                        "like": 194,
                        "action": 0,
                        "member": {
                            "mid": "400121455",
                            "uname": "TxAY丶",
                            "sex": "保密",
                            "sign": "6月后有空做视频 | 星火工作室后期、CM拜年祭制作成员",
                            "avatar": "http://i1.hdslb.com/bfs/face/ce011d50196afd8fedc45240f6aebab061aee524.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "face_nft_new": 0,
                            "is_senior_member": 0,
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
                                "image_enhance": "",
                                "image_enhance_frame": ""
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
                                "vipDueDate": 1626364800000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "",
                                    "label_theme": "",
                                    "text_color": "",
                                    "bg_style": 0,
                                    "bg_color": "",
                                    "border_color": ""
                                },
                                "avatar_subscript": 0,
                                "nickname_color": ""
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            },
                            "is_contractor": false,
                            "contract_desc": ""
                        },
                        "content": {
                            "message": "回复 @Mr-Shadow :你可能抢到了整个b站最难抢到的热评的热评",
                            "plat": 0,
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
                        "show_follow": false,
                        "invisible": false,
                        "reply_control": {
                            "time_desc": "786天前发布"
                        }
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
                "show_follow": true,
                "invisible": false,
                "reply_control": {
                    "sub_reply_entry_text": "共2608条回复",
                    "sub_reply_title_text": "相关回复共2608条",
                    "time_desc": "4107天前发布"
                }
            },
            {
                "rpid": 917945205,
                "oid": 2,
                "type": 1,
                "mid": 34762090,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 461,
                "rcount": 365,
                "state": 0,
                "fansgrade": 1,
                "attr": 0,
                "ctime": 1532071373,
                "rpid_str": "917945205",
                "root_str": "0",
                "parent_str": "0",
                "like": 29793,
                "action": 0,
                "member": {
                    "mid": "34762090",
                    "uname": "某不科学的瓜皮",
                    "sex": "男",
                    "sign": "持杯拱天，谓无言，静沉眠",
                    "avatar": "http://i1.hdslb.com/bfs/face/cc61140c64409a3f5793207f3c866555e8638ab5.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
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
                        "image_enhance": "",
                        "image_enhance_frame": ""
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
                        "vipType": 1,
                        "vipDueDate": 1631980800000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 0,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "",
                            "label_theme": "",
                            "text_color": "",
                            "bg_style": 0,
                            "bg_color": "",
                            "border_color": ""
                        },
                        "avatar_subscript": 0,
                        "nickname_color": ""
                    },
                    "fans_detail": {
                        "uid": 34762090,
                        "medal_id": 29058,
                        "medal_name": "逸国",
                        "score": 0,
                        "level": 1,
                        "intimacy": 0,
                        "master_status": 1,
                        "is_receive": 1,
                        "medal_color": 643602062,
                        "medal_color_end": 643602062,
                        "medal_color_border": 4284257934,
                        "medal_color_name": 4284257934,
                        "medal_color_level": 4284257934,
                        "guard_level": 0
                    },
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    },
                    "is_contractor": false,
                    "contract_desc": ""
                },
                "content": {
                    "message": "7.20日，站长被封7天\n\n历史性留名[2233娘_卖萌]",
                    "plat": 0,
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
                            "mtime": 1626664892,
                            "jump_title": "卖萌"
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
                        "like": 1224,
                        "action": 0,
                        "member": {
                            "mid": "34762090",
                            "uname": "某不科学的瓜皮",
                            "sex": "男",
                            "sign": "持杯拱天，谓无言，静沉眠",
                            "avatar": "http://i1.hdslb.com/bfs/face/cc61140c64409a3f5793207f3c866555e8638ab5.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "face_nft_new": 0,
                            "is_senior_member": 0,
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
                                "image_enhance": "",
                                "image_enhance_frame": ""
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
                                "vipType": 1,
                                "vipDueDate": 1631980800000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "",
                                    "label_theme": "",
                                    "text_color": "",
                                    "bg_style": 0,
                                    "bg_color": "",
                                    "border_color": ""
                                },
                                "avatar_subscript": 0,
                                "nickname_color": ""
                            },
                            "fans_detail": {
                                "uid": 34762090,
                                "medal_id": 29058,
                                "medal_name": "逸国",
                                "score": 0,
                                "level": 1,
                                "intimacy": 0,
                                "master_status": 1,
                                "is_receive": 1,
                                "medal_color": 643602062,
                                "medal_color_end": 643602062,
                                "medal_color_border": 4284257934,
                                "medal_color_name": 4284257934,
                                "medal_color_level": 4284257934,
                                "guard_level": 0
                            },
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            },
                            "is_contractor": false,
                            "contract_desc": ""
                        },
                        "content": {
                            "message": "站长被封一周年 [小电视_笑]",
                            "plat": 0,
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
                                    "mtime": 1628587688,
                                    "jump_title": "笑"
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
                        "show_follow": false,
                        "invisible": false,
                        "reply_control": {
                            "time_desc": "956天前发布"
                        }
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
                        "like": 372,
                        "action": 0,
                        "member": {
                            "mid": "417437969",
                            "uname": "理查奈德",
                            "sex": "男",
                            "sign": "欲雷普琪露诺的各种小圈子小鬼",
                            "avatar": "http://i2.hdslb.com/bfs/face/6923f6414503413f292a1cfad13ac483683a77d6.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "face_nft_new": 0,
                            "is_senior_member": 0,
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
                                "image_enhance": "",
                                "image_enhance_frame": ""
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
                                    "label_theme": "",
                                    "text_color": "",
                                    "bg_style": 0,
                                    "bg_color": "",
                                    "border_color": ""
                                },
                                "avatar_subscript": 0,
                                "nickname_color": ""
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            },
                            "is_contractor": false,
                            "contract_desc": ""
                        },
                        "content": {
                            "message": "回复 @某不科学的瓜皮 :这是件值得庆祝的日子啊（滑稽保命）[滑稽]",
                            "plat": 0,
                            "device": "",
                            "members": [],
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
                                    "mtime": 1645206695,
                                    "jump_title": "滑稽"
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
                        "show_follow": false,
                        "invisible": false,
                        "reply_control": {
                            "time_desc": "956天前发布"
                        }
                    },
                    {
                        "rpid": 2254034005,
                        "oid": 2,
                        "type": 1,
                        "mid": 435781129,
                        "root": 917945205,
                        "parent": 917945205,
                        "dialog": 2254034005,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1578829367,
                        "rpid_str": "2254034005",
                        "root_str": "917945205",
                        "parent_str": "917945205",
                        "like": 137,
                        "action": 0,
                        "member": {
                            "mid": "435781129",
                            "uname": "yourmumdie",
                            "sex": "保密",
                            "sign": "签名不能留八个字",
                            "avatar": "http://i1.hdslb.com/bfs/face/77489a807c616304cef9ac446b8bed2528de4e25.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "face_nft_new": 0,
                            "is_senior_member": 0,
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
                                "image_enhance": "",
                                "image_enhance_frame": ""
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
                                "vipDueDate": 1644249600000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "",
                                    "label_theme": "",
                                    "text_color": "",
                                    "bg_style": 0,
                                    "bg_color": "",
                                    "border_color": ""
                                },
                                "avatar_subscript": 0,
                                "nickname_color": ""
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            },
                            "is_contractor": false,
                            "contract_desc": ""
                        },
                        "content": {
                            "message": "av7",
                            "plat": 0,
                            "device": "",
                            "members": [],
                            "jump_url": {
                                "av7": {
                                    "title": "2012地球便当之日宣传片",
                                    "state": 0,
                                    "prefix_icon": "https://i0.hdslb.com/bfs/activity-plat/static/20201110/4c8b2dbaded282e67c9a31daa4297c3c/AeQJlYP7e.png",
                                    "app_url_schema": "",
                                    "app_name": "",
                                    "app_package_name": "",
                                    "click_report": "7",
                                    "is_half_screen": false,
                                    "exposure_report": ""
                                }
                            },
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
                        "show_follow": false,
                        "invisible": false,
                        "reply_control": {
                            "time_desc": "780天前发布"
                        }
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
                "show_follow": true,
                "invisible": false,
                "reply_control": {
                    "sub_reply_entry_text": "共365条回复",
                    "sub_reply_title_text": "相关回复共365条",
                    "time_desc": "1321天前发布"
                }
            },
            {
                "rpid": 2576184175,
                "oid": 2,
                "type": 1,
                "mid": 24512285,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 1066,
                "rcount": 1000,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1584945297,
                "rpid_str": "2576184175",
                "root_str": "0",
                "parent_str": "0",
                "like": 44307,
                "action": 0,
                "member": {
                    "mid": "24512285",
                    "uname": "艾斯黛斯T",
                    "sex": "男",
                    "sign": "飞飞飞",
                    "avatar": "http://i2.hdslb.com/bfs/face/e2176a16d749fdb720d4181309d4075c91db7952.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
                    "level_info": {
                        "current_level": 6,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 4104,
                        "name": "良辰美景·不问天",
                        "image": "http://i2.hdslb.com/bfs/garb/item/4dbf08aae75f9479a21db2bb289229b8d71631e1.png",
                        "expire": 0,
                        "image_enhance": "http://i2.hdslb.com/bfs/garb/item/253bf41272ddef301c1f6a0361abd49d772bfafc.webp",
                        "image_enhance_frame": "http://i2.hdslb.com/bfs/garb/item/c4934a1ffdb3865fe79b319de439af3973b53ec9.png"
                    },
                    "nameplate": {
                        "nid": 58,
                        "name": "收集达人",
                        "image": "http://i0.hdslb.com/bfs/face/3f5539e1486303422ffc8595862ccb6606e0b745.png",
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
                        "vipDueDate": 1646236800000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "年度大会员",
                            "label_theme": "annual_vip",
                            "text_color": "#FFFFFF",
                            "bg_style": 1,
                            "bg_color": "#FB7299",
                            "border_color": ""
                        },
                        "avatar_subscript": 1,
                        "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png",
                        "nickname_color": "#FB7299"
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": {
                            "id": 4104,
                            "name": "良辰美景·不问天",
                            "image": "http://i0.hdslb.com/bfs/garb/item/4dbf08aae75f9479a21db2bb289229b8d71631e1.png",
                            "jump_url": "",
                            "type": "suit",
                            "image_enhance": "http://i0.hdslb.com/bfs/garb/item/253bf41272ddef301c1f6a0361abd49d772bfafc.webp",
                            "image_enhance_frame": "http://i0.hdslb.com/bfs/garb/item/c4934a1ffdb3865fe79b319de439af3973b53ec9.png"
                        },
                        "cardbg": {
                            "id": 4123,
                            "name": "良辰美景·不问天",
                            "image": "http://i0.hdslb.com/bfs/garb/item/f251c507a2b09605d414c9107ffe2073bbf65735.png",
                            "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/4019?navhide=1&mid=24512285&from=reply",
                            "fan": {
                                "is_fan": 1,
                                "number": 70746,
                                "color": "#fe7491",
                                "name": "良辰美景·不问天",
                                "num_desc": "070746"
                            },
                            "type": "suit"
                        },
                        "cardbg_with_focus": null
                    },
                    "is_contractor": false,
                    "contract_desc": ""
                },
                "content": {
                    "message": "人类最古のav号（挂了的不算）也变成bv了[大哭][大哭][大哭]青春结束了",
                    "plat": 0,
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
                            "mtime": 1597738918,
                            "jump_title": "大哭"
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
                        "like": 2030,
                        "action": 0,
                        "member": {
                            "mid": "407225717",
                            "uname": "白月魁单推人",
                            "sex": "保密",
                            "sign": "",
                            "avatar": "http://i2.hdslb.com/bfs/face/57899fca9856acfb2f92fdabf00e655a74aeae67.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "face_nft_new": 0,
                            "is_senior_member": 0,
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
                                "image_enhance": "",
                                "image_enhance_frame": ""
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
                                "vipDueDate": 1626364800000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "",
                                    "label_theme": "",
                                    "text_color": "",
                                    "bg_style": 0,
                                    "bg_color": "",
                                    "border_color": ""
                                },
                                "avatar_subscript": 0,
                                "nickname_color": ""
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            },
                            "is_contractor": false,
                            "contract_desc": ""
                        },
                        "content": {
                            "message": "先留个名，估计以后av会被当成冷知识放出来[大哭]",
                            "plat": 0,
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
                                    "mtime": 1597738918,
                                    "jump_title": "大哭"
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
                        "show_follow": false,
                        "invisible": false,
                        "reply_control": {
                            "time_desc": "709天前发布"
                        }
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
                        "like": 248,
                        "action": 0,
                        "member": {
                            "mid": "329965337",
                            "uname": "积极发言的刘同学",
                            "sex": "男",
                            "sign": "Hi这里是刘同学，一个业余的校园摄影及公路自行车骑手，同时也是在校高中生（有时穿穿dk）",
                            "avatar": "http://i2.hdslb.com/bfs/face/3b586d7dbe8c2dba32b213e0a474fe6d86921b85.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "face_nft_new": 0,
                            "is_senior_member": 0,
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
                                "image_enhance": "",
                                "image_enhance_frame": ""
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
                                    "label_theme": "",
                                    "text_color": "",
                                    "bg_style": 0,
                                    "bg_color": "",
                                    "border_color": ""
                                },
                                "avatar_subscript": 0,
                                "nickname_color": ""
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            },
                            "is_contractor": false,
                            "contract_desc": ""
                        },
                        "content": {
                            "message": "10个小时就有6500多赞?你是魔鬼?",
                            "plat": 0,
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
                        "show_follow": false,
                        "invisible": false,
                        "reply_control": {
                            "time_desc": "708天前发布"
                        }
                    },
                    {
                        "rpid": 2596150498,
                        "oid": 2,
                        "type": 1,
                        "mid": 426825448,
                        "root": 2576184175,
                        "parent": 2578082161,
                        "dialog": 2578082161,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1585211858,
                        "rpid_str": "2596150498",
                        "root_str": "2576184175",
                        "parent_str": "2578082161",
                        "like": 605,
                        "action": 0,
                        "member": {
                            "mid": "426825448",
                            "uname": "TrueBinger",
                            "sex": "男",
                            "sign": "这个人不懒，但是什么都没有留下。",
                            "avatar": "http://i1.hdslb.com/bfs/face/4bcc2120e3cb0ce855de6500a9bc422e981ced32.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "face_nft_new": 0,
                            "is_senior_member": 0,
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
                                "image_enhance": "",
                                "image_enhance_frame": ""
                            },
                            "nameplate": {
                                "nid": 62,
                                "name": "有爱大佬",
                                "image": "http://i0.hdslb.com/bfs/face/a10ee6b613e0d68d2dfdac8bbf71b94824e10408.png",
                                "image_small": "http://i2.hdslb.com/bfs/face/54f4c31ab9b1f1fa2c29dbbc967f66535699337e.png",
                                "level": "普通勋章",
                                "condition": "当前持有粉丝勋章最高等级>=15级"
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 1,
                                "vipDueDate": 1592668800000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "",
                                    "label_theme": "",
                                    "text_color": "",
                                    "bg_style": 0,
                                    "bg_color": "",
                                    "border_color": ""
                                },
                                "avatar_subscript": 0,
                                "nickname_color": ""
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            },
                            "is_contractor": false,
                            "contract_desc": ""
                        },
                        "content": {
                            "message": "回复 @渣男5107号 :哈喽各位小伙伴们大家好，众所周知，世界第一大视频网站bilibili的视频采用bv号来标记视频，可小伙伴们知道吗，其实在2020.3之前，bv一直都是av哦！这已经是100000年前的事了，小伙伴们知道了吗[滑稽]",
                            "plat": 0,
                            "device": "",
                            "members": [],
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
                                    "mtime": 1645206695,
                                    "jump_title": "滑稽"
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
                        "show_follow": false,
                        "invisible": false,
                        "reply_control": {
                            "time_desc": "706天前发布"
                        }
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
                "show_follow": true,
                "invisible": false,
                "reply_control": {
                    "sub_reply_entry_text": "共1000条回复",
                    "sub_reply_title_text": "相关回复共1000条",
                    "time_desc": "709天前发布"
                }
            },
            {
                "rpid": 495059,
                "oid": 2,
                "type": 1,
                "mid": 2,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 898,
                "rcount": 838,
                "state": 2,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1291918239,
                "rpid_str": "495059",
                "root_str": "0",
                "parent_str": "0",
                "like": 34223,
                "action": 0,
                "member": {
                    "mid": "2",
                    "uname": "碧诗",
                    "sex": "男",
                    "sign": "kami.im 直男过气网红 # av362830 “We Are Star Dust”",
                    "avatar": "http://i2.hdslb.com/bfs/face/ef0457addb24141e15dfac6fbf45293ccf1e32ab.jpg",
                    "rank": "20000",
                    "DisplayRank": "0",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
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
                        "image_enhance": "",
                        "image_enhance_frame": ""
                    },
                    "nameplate": {
                        "nid": 10,
                        "name": "见习偶像",
                        "image": "http://i2.hdslb.com/bfs/face/e93dd9edfa7b9e18bf46fd8d71862327a2350923.png",
                        "image_small": "http://i1.hdslb.com/bfs/face/275b468b043ec246737ab8580a2075bee0b1263b.png",
                        "level": "普通勋章",
                        "condition": "所有自制视频总播放数>=10万"
                    },
                    "official_verify": {
                        "type": 0,
                        "desc": "bilibili创始人（站长）"
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 3901881600000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "十年大会员",
                            "label_theme": "ten_annual_vip",
                            "text_color": "#FFFFFF",
                            "bg_style": 1,
                            "bg_color": "#FB7299",
                            "border_color": ""
                        },
                        "avatar_subscript": 1,
                        "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png",
                        "nickname_color": "#FB7299"
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": {
                            "id": 3865,
                            "name": "2021拜年纪",
                            "image": "http://i0.hdslb.com/bfs/garb/item/e2c4d4ba094ddb98c1f72114a12081b4eca7ed88.png",
                            "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/3898?navhide=1&mid=2&from=reply",
                            "fan": {
                                "is_fan": 1,
                                "number": 21206,
                                "color": "#ec3d39",
                                "name": "2021拜年纪",
                                "num_desc": "021206"
                            },
                            "type": "suit"
                        },
                        "cardbg_with_focus": null
                    },
                    "is_contractor": false,
                    "contract_desc": ""
                },
                "content": {
                    "message": "wwwww",
                    "plat": 0,
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
                        "like": 478,
                        "action": 0,
                        "member": {
                            "mid": "3476504",
                            "uname": "MaskQwQ麦斯科",
                            "sex": "保密",
                            "sign": "重拾过去。。",
                            "avatar": "http://i2.hdslb.com/bfs/face/7bf954d807cbda4de4221d78f3b425534042ac02.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "face_nft_new": 0,
                            "is_senior_member": 0,
                            "level_info": {
                                "current_level": 6,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 194,
                                "name": "黑白无双",
                                "image": "http://i2.hdslb.com/bfs/face/89b25cad74abd9e42a94b11e456bc21fe36b8763.png",
                                "expire": 0,
                                "image_enhance": "http://i2.hdslb.com/bfs/face/89b25cad74abd9e42a94b11e456bc21fe36b8763.png",
                                "image_enhance_frame": ""
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
                                "vipDueDate": 1771344000000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "年度大会员",
                                    "label_theme": "annual_vip",
                                    "text_color": "#FFFFFF",
                                    "bg_style": 1,
                                    "bg_color": "#FB7299",
                                    "border_color": ""
                                },
                                "avatar_subscript": 1,
                                "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png",
                                "nickname_color": "#FB7299"
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
                                    "type": "vip",
                                    "image_enhance": "http://i0.hdslb.com/bfs/face/89b25cad74abd9e42a94b11e456bc21fe36b8763.png",
                                    "image_enhance_frame": ""
                                },
                                "cardbg": null,
                                "cardbg_with_focus": null
                            },
                            "is_contractor": false,
                            "contract_desc": ""
                        },
                        "content": {
                            "message": "拉了半天总算是见了底",
                            "plat": 0,
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
                        "show_follow": false,
                        "invisible": false,
                        "reply_control": {
                            "time_desc": "1928天前发布"
                        }
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
                        "like": 298,
                        "action": 0,
                        "member": {
                            "mid": "37145412",
                            "uname": "边走边发呆",
                            "sex": "男",
                            "sign": "这个人懒死了，什么都不发=_= 头像是素晴日",
                            "avatar": "http://i0.hdslb.com/bfs/face/4dfe0f1b0bfc9b1afea9e3bacbc5a92221fe9b09.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "face_nft_new": 0,
                            "is_senior_member": 0,
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
                                "image_enhance": "",
                                "image_enhance_frame": ""
                            },
                            "nameplate": {
                                "nid": 60,
                                "name": "有爱萌新",
                                "image": "http://i1.hdslb.com/bfs/face/51ca16136e570938450bca360f28761ceb609f33.png",
                                "image_small": "http://i2.hdslb.com/bfs/face/9abfa4769357f85937782c2dbc40fafda4f57217.png",
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
                                    "label_theme": "",
                                    "text_color": "",
                                    "bg_style": 0,
                                    "bg_color": "",
                                    "border_color": ""
                                },
                                "avatar_subscript": 0,
                                "nickname_color": ""
                            },
                            "fans_detail": {
                                "uid": 37145412,
                                "medal_id": 29058,
                                "medal_name": "逸国",
                                "score": 0,
                                "level": 7,
                                "intimacy": 0,
                                "master_status": 1,
                                "is_receive": 1,
                                "medal_color": 643660702,
                                "medal_color_end": 643660702,
                                "medal_color_border": 6126494,
                                "medal_color_name": 6126494,
                                "medal_color_level": 6126494,
                                "guard_level": 0
                            },
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            },
                            "is_contractor": false,
                            "contract_desc": ""
                        },
                        "content": {
                            "message": "5000多楼6225评论(;¬_¬)手有点酸，如果不是特殊方法进来的话是要大会员吧(●￣(ｴ)￣●)",
                            "plat": 0,
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
                        "show_follow": false,
                        "invisible": false,
                        "reply_control": {
                            "time_desc": "1585天前发布"
                        }
                    },
                    {
                        "rpid": 4002945120,
                        "oid": 2,
                        "type": 1,
                        "mid": 282146749,
                        "root": 495059,
                        "parent": 464424502,
                        "dialog": 464424502,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1611588059,
                        "rpid_str": "4002945120",
                        "root_str": "495059",
                        "parent_str": "464424502",
                        "like": 107,
                        "action": 0,
                        "member": {
                            "mid": "282146749",
                            "uname": "能天使exia",
                            "sex": "女",
                            "sign": "电子学会评测师，脑机非技术研究学者，黑客网络贴吧二周目群管，明日方舟三服，三崩子团长，公主焊接会长，红三圈模组收集者，游戏尝鲜人，随心情更新",
                            "avatar": "http://i1.hdslb.com/bfs/face/f6ec44a9d2785783fa6b1b2dd4b7ad7b17e7cbb9.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "face_nft_new": 0,
                            "is_senior_member": 0,
                            "level_info": {
                                "current_level": 5,
                                "current_min": 0,
                                "current_exp": 0,
                                "next_exp": 0
                            },
                            "pendant": {
                                "pid": 3508,
                                "name": "总之就是非常可爱",
                                "image": "http://i1.hdslb.com/bfs/garb/item/2c63178e3fcce804a851ef510e03c2b0e91a61e0.png",
                                "expire": 0,
                                "image_enhance": "http://i1.hdslb.com/bfs/garb/item/2c63178e3fcce804a851ef510e03c2b0e91a61e0.png",
                                "image_enhance_frame": ""
                            },
                            "nameplate": {
                                "nid": 72,
                                "name": "风纪元老",
                                "image": "http://i0.hdslb.com/bfs/face/032bce9fd6dcb562d83b60f8a8719362b18a0afb.png",
                                "image_small": "http://i2.hdslb.com/bfs/face/2930b8bf5d7c68e1961d81ed3a59783af9d639a2.png",
                                "level": "稀有勋章",
                                "condition": "风纪委员连任期数 >= 12"
                            },
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            },
                            "vip": {
                                "vipType": 2,
                                "vipDueDate": 1727280000000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "年度大会员",
                                    "label_theme": "annual_vip",
                                    "text_color": "#FFFFFF",
                                    "bg_style": 1,
                                    "bg_color": "#FB7299",
                                    "border_color": ""
                                },
                                "avatar_subscript": 1,
                                "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png",
                                "nickname_color": "#FB7299"
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": {
                                    "id": 3508,
                                    "name": "总之就是非常可爱",
                                    "image": "http://i0.hdslb.com/bfs/garb/item/2c63178e3fcce804a851ef510e03c2b0e91a61e0.png",
                                    "jump_url": "",
                                    "type": "suit",
                                    "image_enhance": "http://i0.hdslb.com/bfs/garb/item/2c63178e3fcce804a851ef510e03c2b0e91a61e0.png",
                                    "image_enhance_frame": ""
                                },
                                "cardbg": {
                                    "id": 5323,
                                    "name": "明日方舟音律系列",
                                    "image": "http://i0.hdslb.com/bfs/garb/item/e62b17700b3c1bc981606905f85615363c183105.png",
                                    "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/5359?navhide=1&mid=282146749&from=reply",
                                    "fan": {
                                        "is_fan": 1,
                                        "number": 11418,
                                        "color": "#ffb628",
                                        "name": "明日方舟音律联觉",
                                        "num_desc": "011418"
                                    },
                                    "type": "suit"
                                },
                                "cardbg_with_focus": null
                            },
                            "is_contractor": false,
                            "contract_desc": ""
                        },
                        "content": {
                            "message": "回复 @边走边发呆 :拜登时代洛阳铲，带人，食大便了，现在的b站没有楼层了[牛年]",
                            "plat": 0,
                            "device": "",
                            "members": [
                                {
                                    "mid": "37145412",
                                    "uname": "边走边发呆",
                                    "sex": "男",
                                    "sign": "这个人懒死了，什么都不发=_= 头像是素晴日",
                                    "avatar": "http://i0.hdslb.com/bfs/face/4dfe0f1b0bfc9b1afea9e3bacbc5a92221fe9b09.jpg",
                                    "rank": "10000",
                                    "DisplayRank": "0",
                                    "face_nft_new": 0,
                                    "is_senior_member": 0,
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
                                        "image_enhance": "",
                                        "image_enhance_frame": ""
                                    },
                                    "nameplate": {
                                        "nid": 60,
                                        "name": "有爱萌新",
                                        "image": "http://i1.hdslb.com/bfs/face/51ca16136e570938450bca360f28761ceb609f33.png",
                                        "image_small": "http://i2.hdslb.com/bfs/face/9abfa4769357f85937782c2dbc40fafda4f57217.png",
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
                                            "label_theme": "",
                                            "text_color": "",
                                            "bg_style": 0,
                                            "bg_color": "",
                                            "border_color": ""
                                        },
                                        "avatar_subscript": 0,
                                        "nickname_color": ""
                                    }
                                }
                            ],
                            "emote": {
                                "[牛年]": {
                                    "id": 3146,
                                    "package_id": 1,
                                    "state": 0,
                                    "type": 1,
                                    "attr": 0,
                                    "text": "[牛年]",
                                    "url": "http://i0.hdslb.com/bfs/emote/9275275ff1f2659310648221107d20bc4970f106.png",
                                    "meta": {
                                        "size": 1
                                    },
                                    "mtime": 1611200715,
                                    "jump_title": "牛年"
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
                        "show_follow": false,
                        "invisible": false,
                        "reply_control": {
                            "time_desc": "400天前发布"
                        }
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {
                    "sub_reply_entry_text": "共838条回复",
                    "sub_reply_title_text": "相关回复共838条",
                    "time_desc": "4100天前发布"
                }
            },
            {
                "rpid": 646408628,
                "oid": 2,
                "type": 1,
                "mid": 33066927,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 173,
                "rcount": 160,
                "state": 0,
                "fansgrade": 1,
                "attr": 0,
                "ctime": 1519135750,
                "rpid_str": "646408628",
                "root_str": "0",
                "parent_str": "0",
                "like": 7197,
                "action": 0,
                "member": {
                    "mid": "33066927",
                    "uname": "冰魂喵丶",
                    "sex": "男",
                    "sign": "反正不要钱，多少关注下？\n等我有时间，就把你们全吃了",
                    "avatar": "http://i0.hdslb.com/bfs/face/f60445649445f69db7293f1cb611f6c0dcdd9a21.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
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
                        "image_enhance": "",
                        "image_enhance_frame": ""
                    },
                    "nameplate": {
                        "nid": 71,
                        "name": "资深委员",
                        "image": "http://i1.hdslb.com/bfs/face/5beecb936bd7422a5ac11c9c5c8df56f334b2a65.png",
                        "image_small": "http://i0.hdslb.com/bfs/face/9f8e0d5cd0201cf7177199d9365be562be1deb05.png",
                        "level": "高级勋章",
                        "condition": "风纪委员连任期数 >= 6"
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 1,
                        "vipDueDate": 1620748800000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 0,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "",
                            "label_theme": "",
                            "text_color": "",
                            "bg_style": 0,
                            "bg_color": "",
                            "border_color": ""
                        },
                        "avatar_subscript": 0,
                        "nickname_color": ""
                    },
                    "fans_detail": {
                        "uid": 33066927,
                        "medal_id": 29058,
                        "medal_name": "逸国",
                        "score": 0,
                        "level": 1,
                        "intimacy": 0,
                        "master_status": 1,
                        "is_receive": 1,
                        "medal_color": 643602062,
                        "medal_color_end": 643602062,
                        "medal_color_border": 4284257934,
                        "medal_color_name": 4284257934,
                        "medal_color_level": 4284257934,
                        "guard_level": 0
                    },
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": {
                            "id": 32680,
                            "name": "坎公骑冠剑",
                            "image": "http://i0.hdslb.com/bfs/garb/item/e861ec7f80f9725fbed51bbfc51ade4c083ddedc.png",
                            "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/32658?navhide=1&mid=33066927&from=reply",
                            "fan": {
                                "is_fan": 1,
                                "number": 16578,
                                "color": "#f7b130",
                                "name": "坎公骑冠剑",
                                "num_desc": "016578"
                            },
                            "type": "suit"
                        },
                        "cardbg_with_focus": null
                    },
                    "is_contractor": false,
                    "contract_desc": ""
                },
                "content": {
                    "message": "第一首:来夢緑 - kagome-kagome ~ 月の眷属達カラオケ\n第二首:dBu music - 千年幻想郷 -Aurora sky edition-\n第三首:Sensitive Heart - 千年幻想郷 ~ History of the Moon\n第四首:Yellow-Zebra - 月の律动~Rhythm of the moon~(东方永夜抄 “千年幻想郷 ~ History of the Moon”)\n第五首:工藤舞 - D.S.F.S(ヴォヤージュ1969)\n第六首:Angelic Quasar - かの郷は永き幻の\n第七首:東方永夜抄 - 黒髪のアマンダ\n第八首:君の美術館 - 千年幻想郷　~ History of the Moon\n\n------------------------\n这些是av:2出现的音乐，应该不会缺少的喵~。（笑） 如果有需要有兴趣的话欢迎复制喵~~(｀・ω・´)\n复制的9818楼的\n前排提示:本视频只有大会员能看",
                    "plat": 0,
                    "device": "",
                    "members": [],
                    "jump_url": {},
                    "max_line": 6
                },
                "replies": [
                    {
                        "rpid": 646507261,
                        "oid": 2,
                        "type": 1,
                        "mid": 11531860,
                        "root": 646408628,
                        "parent": 646408628,
                        "dialog": 646507261,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1519138195,
                        "rpid_str": "646507261",
                        "root_str": "646408628",
                        "parent_str": "646408628",
                        "like": 140,
                        "action": 0,
                        "member": {
                            "mid": "11531860",
                            "uname": "方圆十里有名的俊后生",
                            "sex": "男",
                            "sign": "",
                            "avatar": "http://i0.hdslb.com/bfs/baselabs/fab0bf0029e891eed162175c73473003528a5f22.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "face_nft_new": 1,
                            "is_senior_member": 0,
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
                                "image_enhance": "",
                                "image_enhance_frame": ""
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
                                "vipDueDate": 1647619200000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "大会员",
                                    "label_theme": "vip",
                                    "text_color": "#FFFFFF",
                                    "bg_style": 1,
                                    "bg_color": "#FB7299",
                                    "border_color": ""
                                },
                                "avatar_subscript": 1,
                                "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png",
                                "nickname_color": ""
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            },
                            "is_contractor": false,
                            "contract_desc": ""
                        },
                        "content": {
                            "message": "车万大法好",
                            "plat": 0,
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
                        "show_follow": false,
                        "invisible": false,
                        "reply_control": {
                            "time_desc": "1471天前发布"
                        }
                    },
                    {
                        "rpid": 1601887431,
                        "oid": 2,
                        "type": 1,
                        "mid": 341470991,
                        "root": 646408628,
                        "parent": 646408628,
                        "dialog": 1601887431,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1557745446,
                        "rpid_str": "1601887431",
                        "root_str": "646408628",
                        "parent_str": "646408628",
                        "like": 94,
                        "action": 0,
                        "member": {
                            "mid": "341470991",
                            "uname": "飞行科",
                            "sex": "保密",
                            "sign": "",
                            "avatar": "http://i2.hdslb.com/bfs/face/327188d3f35510699e54a65a65b2fba95dd6ded2.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "face_nft_new": 0,
                            "is_senior_member": 0,
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
                                "image_enhance": "",
                                "image_enhance_frame": ""
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
                                "vipDueDate": 1626364800000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 0,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "",
                                    "label_theme": "",
                                    "text_color": "",
                                    "bg_style": 0,
                                    "bg_color": "",
                                    "border_color": ""
                                },
                                "avatar_subscript": 0,
                                "nickname_color": ""
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            },
                            "is_contractor": false,
                            "contract_desc": ""
                        },
                        "content": {
                            "message": "东方不能沉",
                            "plat": 0,
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
                        "show_follow": false,
                        "invisible": false,
                        "reply_control": {
                            "time_desc": "1024天前发布"
                        }
                    },
                    {
                        "rpid": 1627517285,
                        "oid": 2,
                        "type": 1,
                        "mid": 244446278,
                        "root": 646408628,
                        "parent": 646408628,
                        "dialog": 1627517285,
                        "count": 0,
                        "rcount": 0,
                        "state": 0,
                        "fansgrade": 0,
                        "attr": 0,
                        "ctime": 1558630445,
                        "rpid_str": "1627517285",
                        "root_str": "646408628",
                        "parent_str": "646408628",
                        "like": 75,
                        "action": 0,
                        "member": {
                            "mid": "244446278",
                            "uname": "KRHX",
                            "sex": "男",
                            "sign": "自由的明天仍在前方\n如繁星般闪烁着光芒\n即便只是缥缈的愿景\n也要朝着那黎明迈向\n哪怕路途艰辛\n哪怕前途渺茫\n世间进步仍未停息\n向那理想的彼方",
                            "avatar": "http://i2.hdslb.com/bfs/face/df0e691dd30d84f9c5224dbb7820b03953c7e6de.jpg",
                            "rank": "10000",
                            "DisplayRank": "0",
                            "face_nft_new": 0,
                            "is_senior_member": 0,
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
                                "image_enhance": "",
                                "image_enhance_frame": ""
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
                                "vipType": 2,
                                "vipDueDate": 1647446400000,
                                "dueRemark": "",
                                "accessStatus": 0,
                                "vipStatus": 1,
                                "vipStatusWarn": "",
                                "themeType": 0,
                                "label": {
                                    "path": "",
                                    "text": "年度大会员",
                                    "label_theme": "annual_vip",
                                    "text_color": "#FFFFFF",
                                    "bg_style": 1,
                                    "bg_color": "#FB7299",
                                    "border_color": ""
                                },
                                "avatar_subscript": 1,
                                "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png",
                                "nickname_color": "#FB7299"
                            },
                            "fans_detail": null,
                            "following": 0,
                            "is_followed": 0,
                            "user_sailing": {
                                "pendant": null,
                                "cardbg": null,
                                "cardbg_with_focus": null
                            },
                            "is_contractor": false,
                            "contract_desc": ""
                        },
                        "content": {
                            "message": "东方不能沉啊",
                            "plat": 0,
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
                        "show_follow": false,
                        "invisible": false,
                        "reply_control": {
                            "time_desc": "1013天前发布"
                        }
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {
                    "sub_reply_entry_text": "共160条回复",
                    "sub_reply_title_text": "相关回复共160条",
                    "time_desc": "1471天前发布"
                }
            }
        ],
        "top": {
            "admin": null,
            "upper": null,
            "vote": null
        },
        "top_replies": null,
        "lottery_card": null,
        "folder": {
            "has_folded": false,
            "is_folded": false,
            "rule": "https://www.bilibili.com/blackboard/foldingreply.html"
        },
        "up_selection": {
            "pending_count": 0,
            "ignore_count": 0
        },
        "cm": {},
        "cm_info": {
            "ads": null
        },
        "effects": {
            "preloading": ""
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
        "show_bvid": false,
        "control": {
            "input_disable": false,
            "root_input_text": "发一条友善的评论",
            "child_input_text": "",
            "giveup_input_text": "不发没关系，请继续友善哦~",
            "bg_text": "看看下面~来发评论吧",
            "web_selection": false,
            "answer_guide_text": "需要升级成为lv2会员后才可以评论，先去答题转正吧！",
            "answer_guide_icon_url": "http://i0.hdslb.com/bfs/emote/96940d16602cacbbac796245b7bb99fa9b5c970c.png",
            "answer_guide_ios_url": "https://www.bilibili.com/h5/newbie/entry?navhide=1&re_src=12",
            "answer_guide_android_url": "https://www.bilibili.com/h5/newbie/entry?navhide=1&re_src=6",
            "show_type": 1,
            "show_text": "",
            "disable_jump_emote": false
        },
        "note": 1,
        "callbacks": null
    }
}
```

</details>

## 获取指定评论的回复

> http://api.bilibili.com/x/v2/reply/reply

*请求方式：GET*

认证方式：Cookie（SESSDATA）或APP

按照回复顺序排序

**url参数：**

| 参数名     | 类型 | 内容           | 必要性       | 备注                                     |
| ---------- | ---- | -------------- | ------------ | ---------------------------------------- |
| access_key | str  | APP登录 Token  | APP 方式必要 |                                          |
| type       | num  | 评论区类型代码 | 必要         | [类型代码见表](readme.md#评论区类型代码) |
| oid        | num  | 目标评论区 id  | 必要         |                                          |
| root       | num  | 根回复 rpid    | 必要         |                                          |
| ps         | num  | 每页项数       | 非必要       | 默认为20<br />定义域：1-49 <br /> 但 data_replies 的最大内容数为20,因此设置为49其实也只会有20条回复被返回      |
| pn         | num  | 页码           | 非必要       | 默认为1                                  |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                                                         |
| ------- | ----------------------------- | -------- | ------------------------------------------------------------ |
| code    | num                           | 返回值   | 0：成功<br />-400：请求错误<br />-404：无此项<br />12002：评论区已关闭<br />12009：评论主体的type不合法 |
| message | str                           | 错误信息 | 默认为0                                                      |
| ttl     | num                           | 1        |                                                              |
| data    | 正确时：obj<br />错误时：null | 数据本体 |                                                              |

`data`对象：

| 字段      | 类型  | 内容           | 备注                                   |
| --------- | ----- | -------------- | -------------------------------------- |
| config    | obj   | 评论区显示控制 |                                        |
| control   | obj   | 评论区输入属性 |                                        |
| page      | obj   | 页面信息       |                                        |
| replies   | array | 评论对话树列表 |  最大内容数为20                                      |
| root      | obj   | 根评论信息     | [对象定义见表](readme.md#评论条目对象) |
| show_bvid | bool  | 显示 bvid?     |                                        |
| show_text | str   | (?)            |                                        |
| show_type | num   | (?)            |                                        |
| upper     | obj   | UP主 mid       |                                        |

`data`中的`config`对象：

| 字段         | 类型 | 内容                     | 备注 |
| ------------ | ---- | ------------------------ | ---- |
| showadmin    | num  | 是否显示管理置顶         |      |
| showentry    | num  | ？                       |      |
| showfloor    | num  | 是否显示楼层号           |      |
| showtopic    | num  | 是否显示话题             |      |
| show_up_flag | bool | 是否显示“UP觉得很赞”标志 |      |
| read_only    | bool | 是否只读评论区           |      |
| show_del_log | bool | 是否显示删除记录         |      |

`data`中的`control`对象：

| 字段                     | 类型 | 内容               | 备注                                |
| ------------------------ | ---- | ------------------ | ----------------------------------- |
| input_disable            | bool | (?)                |                                     |
| root_input_text          | str  | 评论框文字         |                                     |
| child_input_text         | str  | 评论框文字         |                                     |
| bg_text                  | str  | 空评论区文字       |                                     |
| web_selection            | bool | 评论是否筛选后可见 | false：无需筛选<br />true：需要筛选 |
| answer_guide_text        | str  | 答题页面链接文字   |                                     |
| answer_guide_icon_url    | str  | 答题页面图标 url   |                                     |
| answer_guide_ios_url     | str  | 答题页面 ios url   |                                     |
| answer_guide_android_url | str  | 答题页面安卓 url   |                                     |

`data`中的`page`对象：

| 字段  | 类型 | 内容       | 备注 |
| ----- | ---- | ---------- | ---- |
| count | num  | 二级评论数 |      |
| num   | num  | 当前页码   |      |
| size  | num  | 每页项数   |      |

`data`中的`replies`数组：

| 项   | 类型 | 内容               | 备注                                   |
| ---- | ---- | ------------------ | -------------------------------------- |
| 0    | obj  | 对话评论条目 1     | [对象定义见表](readme.md#评论条目对象) |
| n    | obj  | 对话评论条目 (n+1) | 按照回复顺序排列                       |
| ……   | obj  | ……                 | ……                                     |

`data`中的`upper`对象：

| 字段 | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| mid  | num  | UP 主 mid |      |

**示例：**

获取视频`av201022189`下评论`rpid=3030790837`的回复，每页5项，获取第1页

```shell
curl -G 'http://api.bilibili.com/x/v2/reply/reply' \
--data-urlencode 'type=1' \
--data-urlencode 'oid=201022189' \
--data-urlencode 'root=3030790837' \
--data-urlencode 'ps=5' \
--data-urlencode 'pn=1' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

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
            "root_input_text": "发一条友善的评论",
            "child_input_text": "",
            "giveup_input_text": "不发没关系，请继续友善哦~",
            "bg_text": "看看下面~来发评论吧",
            "web_selection": false,
            "answer_guide_text": "需要升级成为lv2会员后才可以评论，先去答题转正吧！",
            "answer_guide_icon_url": "http://i0.hdslb.com/bfs/emote/96940d16602cacbbac796245b7bb99fa9b5c970c.png",
            "answer_guide_ios_url": "https://www.bilibili.com/h5/newbie/entry?navhide=1&re_src=12",
            "answer_guide_android_url": "https://www.bilibili.com/h5/newbie/entry?navhide=1&re_src=6",
            "show_type": 1,
            "show_text": "",
            "disable_jump_emote": false
        },
        "page": {
            "count": 230,
            "num": 1,
            "size": 5
        },
        "replies": [
            {
                "rpid": 3030802207,
                "oid": 201022189,
                "type": 1,
                "mid": 172604528,
                "root": 3030790837,
                "parent": 3030790837,
                "dialog": 3030802207,
                "count": 0,
                "rcount": 0,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1592018067,
                "rpid_str": "3030802207",
                "root_str": "3030790837",
                "parent_str": "3030790837",
                "like": 41,
                "action": 0,
                "member": {
                    "mid": "172604528",
                    "uname": "超高校级的认真",
                    "sex": "男",
                    "sign": "just do it for yourself",
                    "avatar": "http://i2.hdslb.com/bfs/face/d0d957faa6162388467cb0750a9d33cf616e73e9.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
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
                        "image_enhance": "",
                        "image_enhance_frame": ""
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
                        "vipDueDate": 1626364800000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 0,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "",
                            "label_theme": "",
                            "text_color": "",
                            "bg_style": 0,
                            "bg_color": "",
                            "border_color": ""
                        },
                        "avatar_subscript": 0,
                        "nickname_color": ""
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    },
                    "is_contractor": false,
                    "contract_desc": ""
                },
                "content": {
                    "message": "怎么上p站呀，翻吗",
                    "plat": 0,
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {
                    "time_desc": "627天前发布"
                }
            },
            {
                "rpid": 3030810089,
                "oid": 201022189,
                "type": 1,
                "mid": 342581997,
                "root": 3030790837,
                "parent": 3030802207,
                "dialog": 3030802207,
                "count": 0,
                "rcount": 0,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1592018123,
                "rpid_str": "3030810089",
                "root_str": "3030790837",
                "parent_str": "3030802207",
                "like": 7,
                "action": 0,
                "member": {
                    "mid": "342581997",
                    "uname": "VAN样斯基",
                    "sex": "保密",
                    "sign": "",
                    "avatar": "http://i0.hdslb.com/bfs/face/bc9c6d37b5a4c8b3b0a3cd483fd66e63b1ae0cec.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
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
                        "image_enhance": "",
                        "image_enhance_frame": ""
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
                        "vipDueDate": 1626364800000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 0,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "",
                            "label_theme": "",
                            "text_color": "",
                            "bg_style": 0,
                            "bg_color": "",
                            "border_color": ""
                        },
                        "avatar_subscript": 0,
                        "nickname_color": ""
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    },
                    "is_contractor": false,
                    "contract_desc": ""
                },
                "content": {
                    "message": "回复 @中等校级的努力 :是啊",
                    "plat": 0,
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {
                    "time_desc": "627天前发布"
                }
            },
            {
                "rpid": 3030843245,
                "oid": 201022189,
                "type": 1,
                "mid": 92586428,
                "root": 3030790837,
                "parent": 3030790837,
                "dialog": 3030843245,
                "count": 0,
                "rcount": 0,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1592018688,
                "rpid_str": "3030843245",
                "root_str": "3030790837",
                "parent_str": "3030790837",
                "like": 588,
                "action": 0,
                "member": {
                    "mid": "92586428",
                    "uname": "浪潮工作室",
                    "sex": "保密",
                    "sign": "洞见时代的浪潮。",
                    "avatar": "http://i2.hdslb.com/bfs/face/67f183f13f8fe3afb374916d32f9810df8ef042a.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
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
                        "image_enhance": "",
                        "image_enhance_frame": ""
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
                        "desc": "专栏优质UP主"
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
                            "label_theme": "",
                            "text_color": "",
                            "bg_style": 0,
                            "bg_color": "",
                            "border_color": ""
                        },
                        "avatar_subscript": 0,
                        "nickname_color": ""
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    },
                    "is_contractor": false,
                    "contract_desc": ""
                },
                "content": {
                    "message": "不会吧不会吧，不会真的有人上P站不是为了学习吧",
                    "plat": 0,
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {
                    "time_desc": "627天前发布"
                }
            },
            {
                "rpid": 3030881609,
                "oid": 201022189,
                "type": 1,
                "mid": 393121222,
                "root": 3030790837,
                "parent": 3030802207,
                "dialog": 3030802207,
                "count": 0,
                "rcount": 0,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1592019208,
                "rpid_str": "3030881609",
                "root_str": "3030790837",
                "parent_str": "3030802207",
                "like": 110,
                "action": 0,
                "member": {
                    "mid": "393121222",
                    "uname": "鱼氏博物馆",
                    "sex": "保密",
                    "sign": "",
                    "avatar": "http://i1.hdslb.com/bfs/face/f61a8ea36828884d760d855293136a838fa9e848.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
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
                        "image_enhance": "",
                        "image_enhance_frame": ""
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
                        "vipDueDate": 1602691200000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 0,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "",
                            "label_theme": "",
                            "text_color": "",
                            "bg_style": 0,
                            "bg_color": "",
                            "border_color": ""
                        },
                        "avatar_subscript": 0,
                        "nickname_color": ""
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    },
                    "is_contractor": false,
                    "contract_desc": ""
                },
                "content": {
                    "message": "回复 @中等校级的努力 :p是什么，当然是plane啦，plane站其实就是✈场[doge]所以去p站就是去✈场啦",
                    "plat": 0,
                    "device": "",
                    "members": [],
                    "emote": {
                        "[doge]": {
                            "id": 26,
                            "package_id": 1,
                            "state": 0,
                            "type": 1,
                            "attr": 0,
                            "text": "[doge]",
                            "url": "http://i0.hdslb.com/bfs/emote/3087d273a78ccaff4bb1e9972e2ba2a7583c9f11.png",
                            "meta": {
                                "size": 1
                            },
                            "mtime": 1645206695,
                            "jump_title": "doge"
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {
                    "time_desc": "627天前发布"
                }
            },
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
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1592020635,
                "rpid_str": "3030978856",
                "root_str": "3030790837",
                "parent_str": "3030790837",
                "like": 60,
                "action": 0,
                "member": {
                    "mid": "11814633",
                    "uname": "我到四川省来",
                    "sex": "保密",
                    "sign": "保持内心的平静",
                    "avatar": "http://i0.hdslb.com/bfs/face/1c7cad967633c718ddef302f4aa39efaed53a2e4.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
                    "level_info": {
                        "current_level": 6,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 1885,
                        "name": "公主连结凯露",
                        "image": "http://i0.hdslb.com/bfs/garb/item/ecf1b11044845abc92e576dfdf93ad4f5e5a0958.png",
                        "expire": 0,
                        "image_enhance": "http://i0.hdslb.com/bfs/garb/item/ecf1b11044845abc92e576dfdf93ad4f5e5a0958.png",
                        "image_enhance_frame": ""
                    },
                    "nameplate": {
                        "nid": 3,
                        "name": "白银殿堂",
                        "image": "http://i0.hdslb.com/bfs/face/f6a31275029365ae5dc710006585ddcf1139bde1.png",
                        "image_small": "http://i0.hdslb.com/bfs/face/b09cdb4c119c467cf2d15db5263b4f539fa6e30b.png",
                        "level": "高级勋章",
                        "condition": "单个自制视频总播放数>=10万"
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1715270400000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "年度大会员",
                            "label_theme": "annual_vip",
                            "text_color": "#FFFFFF",
                            "bg_style": 1,
                            "bg_color": "#FB7299",
                            "border_color": ""
                        },
                        "avatar_subscript": 1,
                        "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png",
                        "nickname_color": "#FB7299"
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": {
                            "id": 1885,
                            "name": "公主连结凯露",
                            "image": "http://i0.hdslb.com/bfs/garb/item/ecf1b11044845abc92e576dfdf93ad4f5e5a0958.png",
                            "jump_url": "",
                            "type": "vip",
                            "image_enhance": "http://i0.hdslb.com/bfs/garb/item/ecf1b11044845abc92e576dfdf93ad4f5e5a0958.png",
                            "image_enhance_frame": ""
                        },
                        "cardbg": null,
                        "cardbg_with_focus": null
                    },
                    "is_contractor": false,
                    "contract_desc": ""
                },
                "content": {
                    "message": "看有机化学考研视频",
                    "plat": 0,
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {
                    "time_desc": "627天前发布"
                }
            }
        ],
        "root": {
            "rpid": 3030790837,
            "oid": 201022189,
            "type": 1,
            "mid": 342581997,
            "root": 0,
            "parent": 0,
            "dialog": 0,
            "count": 268,
            "rcount": 230,
            "state": 0,
            "fansgrade": 0,
            "attr": 768,
            "ctime": 1592017909,
            "rpid_str": "3030790837",
            "root_str": "0",
            "parent_str": "0",
            "like": 8018,
            "action": 0,
            "member": {
                "mid": "342581997",
                "uname": "VAN样斯基",
                "sex": "保密",
                "sign": "",
                "avatar": "http://i0.hdslb.com/bfs/face/bc9c6d37b5a4c8b3b0a3cd483fd66e63b1ae0cec.jpg",
                "rank": "10000",
                "DisplayRank": "0",
                "face_nft_new": 0,
                "is_senior_member": 0,
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
                    "image_enhance": "",
                    "image_enhance_frame": ""
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
                    "vipDueDate": 1626364800000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 0,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": "",
                        "text": "",
                        "label_theme": "",
                        "text_color": "",
                        "bg_style": 0,
                        "bg_color": "",
                        "border_color": ""
                    },
                    "avatar_subscript": 0,
                    "nickname_color": ""
                },
                "fans_detail": null,
                "following": 0,
                "is_followed": 0,
                "user_sailing": {
                    "pendant": null,
                    "cardbg": null,
                    "cardbg_with_focus": null
                },
                "is_contractor": false,
                "contract_desc": ""
            },
            "content": {
                "message": "去P站当然只是为了学习啊[doge]",
                "plat": 0,
                "device": "",
                "members": [],
                "emote": {
                    "[doge]": {
                        "id": 26,
                        "package_id": 1,
                        "state": 0,
                        "type": 1,
                        "attr": 0,
                        "text": "[doge]",
                        "url": "http://i0.hdslb.com/bfs/emote/3087d273a78ccaff4bb1e9972e2ba2a7583c9f11.png",
                        "meta": {
                            "size": 1
                        },
                        "mtime": 1645206695,
                        "jump_title": "doge"
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
                "rule": "https://www.bilibili.com/blackboard/foldingreply.html"
            },
            "up_action": {
                "like": true,
                "reply": true
            },
            "show_follow": false,
            "invisible": false,
            "card_label": [
                {
                    "rpid": 3030790837,
                    "text_content": "UP主觉得很赞",
                    "text_color_day": "#757575",
                    "text_color_night": "#939393",
                    "label_color_day": "#F4F4F4",
                    "label_color_night": "#1E1E1E",
                    "image": "",
                    "type": 0,
                    "background": "",
                    "background_width": 0,
                    "background_height": 0,
                    "jump_url": ""
                }
            ],
            "reply_control": {
                "up_reply": true,
                "sub_reply_entry_text": "共230条回复",
                "sub_reply_title_text": "相关回复共230条",
                "time_desc": "627天前发布"
            }
        },
        "show_bvid": true,
        "show_text": "",
        "show_type": 2,
        "upper": {
            "mid": 92586428
        }
    }
}
```

</details>

## 获取指定评论对话树

> http://api.bilibili.com/x/v2/reply/dialog/cursor

*请求方式：GET*

认证方式：Cookie（SESSDATA）或APP

按照对话链排列

**url参数：**

| 参数名     | 类型 | 内容           | 必要性       | 备注                                     |
| ---------- | ---- | -------------- | ------------ | ---------------------------------------- |
| access_key | str  | APP登录 Token  | APP 方式必要 |                                          |
| type       | num  | 评论区类型代码 | 必要         | [类型代码见表](readme.md#评论区类型代码) |
| oid        | num  | 目标评论区 id  | 必要         |                                          |
| root       | num  | 根回复 rpid    | 必要         |                                          |
| dialog     | num  | 对话树根 rpid  | 必要         |                                          |
| size       | num  | 每页最大项数   | 必要         |                                          |
| min_floor  | num  | (?)            | 非必要       |                                          |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                                                         |
| ------- | ----------------------------- | -------- | ------------------------------------------------------------ |
| code    | num                           | 返回值   | 0：成功<br />-400：请求错误<br />-404：无此项<br />12002：评论区已关闭<br />12009：评论主体的type不合法 |
| message | str                           | 错误信息 | 默认为0                                                      |
| ttl     | num                           | 1        |                                                              |
| data    | 正确时：obj<br />错误时：null | 数据本体 |                                                              |

`data`对象：

| 字段      | 类型  | 内容           | 备注 |
| --------- | ----- | -------------- | ---- |
| cursor    | obj   | 页楼层信息     |      |
| dialog    | obj   | 对话楼层信息   |      |
| replies   | array | 评论对话树列表 |      |
| assist    | num   | (?)            |      |
| blacklist | num   | (?)            |      |
| vote      | num   | (?)            |      |
| lottery   | num   | (?)            |      |
| config    | obj   | 评论区显示控制 |      |
| upper     | obj   | UP主 mid       |      |
| show_bvid | bool  | 显示 bvid?     |      |
| control   | obj   | 评论区输入属性 |      |
| note      | num   | (?)            |      |

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

| 项   | 类型 | 内容               | 备注                                   |
| ---- | ---- | ------------------ | -------------------------------------- |
| 0    | obj  | 对话评论条目 1     | [对象定义见表](readme.md#评论条目对象) |
| n    | obj  | 对话评论条目 (n+1) | 按照对话链排列                         |
| ……   | obj  | ……                 | ……                                     |

`data`中的`config`对象：

| 字段         | 类型 | 内容                      | 备注 |
| ------------ | ---- | ------------------------- | ---- |
| showadmin    | num  | 是否显示管理置顶          |      |
| showentry    | num  | ？                        |      |
| showfloor    | num  | 是否显示楼层号            |      |
| showtopic    | num  | 是否显示话题              |      |
| show_up_flag | bool | 是否显示“UP 觉得很赞”标志 |      |
| read_only    | bool | 是否只读评论区            |      |
| show_del_log | bool | 是否显示删除记录          |      |

`data`中的`upper`对象：

| 字段 | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| mid  | num  | UP 主 mid |      |

`data`中的`control`对象：

| 字段                     | 类型 | 内容               | 备注                                |
| ------------------------ | ---- | ------------------ | ----------------------------------- |
| input_disable            | bool | (?)                |                                     |
| root_input_text          | str  | 评论框文字         |                                     |
| child_input_text         | str  | 评论框文字         |                                     |
| bg_text                  | str  | 空评论区文字       |                                     |
| web_selection            | bool | 评论是否筛选后可见 | false：无需筛选<br />true：需要筛选 |
| answer_guide_text        | str  | 答题页面链接文字   |                                     |
| answer_guide_icon_url    | str  | 答题页面图标 url   |                                     |
| answer_guide_ios_url     | str  | 答题页面 ios url   |                                     |
| answer_guide_android_url | str  | 答题页面安卓 url   |                                     |

**示例：**

获取视频`av201022189`下评论`rpid=3030790837`的对话`rpid=3030978856`，每页最大5项

```shell
curl -G 'http://api.bilibili.com/x/v2/reply/dialog/cursor' \
--data-urlencode 'type=1' \
--data-urlencode 'oid=201022189' \
--data-urlencode 'root=3030790837' \
--data-urlencode 'dialog=3030978856' \
--data-urlencode 'size=5' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "cursor": {
            "min_floor": 5,
            "max_floor": 99,
            "size": 5
        },
        "dialog": {
            "min_floor": 0,
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
                "like": 60,
                "action": 0,
                "member": {
                    "mid": "11814633",
                    "uname": "我到四川省来",
                    "sex": "保密",
                    "sign": "保持内心的平静",
                    "avatar": "http://i0.hdslb.com/bfs/face/1c7cad967633c718ddef302f4aa39efaed53a2e4.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
                    "level_info": {
                        "current_level": 6,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 1885,
                        "name": "公主连结凯露",
                        "image": "http://i0.hdslb.com/bfs/garb/item/ecf1b11044845abc92e576dfdf93ad4f5e5a0958.png",
                        "expire": 0,
                        "image_enhance": "http://i0.hdslb.com/bfs/garb/item/ecf1b11044845abc92e576dfdf93ad4f5e5a0958.png",
                        "image_enhance_frame": ""
                    },
                    "nameplate": {
                        "nid": 3,
                        "name": "白银殿堂",
                        "image": "http://i2.hdslb.com/bfs/face/f6a31275029365ae5dc710006585ddcf1139bde1.png",
                        "image_small": "http://i0.hdslb.com/bfs/face/b09cdb4c119c467cf2d15db5263b4f539fa6e30b.png",
                        "level": "高级勋章",
                        "condition": "单个自制视频总播放数>=10万"
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1715270400000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "年度大会员",
                            "label_theme": "annual_vip",
                            "text_color": "#FFFFFF",
                            "bg_style": 1,
                            "bg_color": "#FB7299",
                            "border_color": ""
                        },
                        "avatar_subscript": 1,
                        "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png",
                        "nickname_color": "#FB7299"
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": {
                            "id": 1885,
                            "name": "公主连结凯露",
                            "image": "http://i0.hdslb.com/bfs/garb/item/ecf1b11044845abc92e576dfdf93ad4f5e5a0958.png",
                            "jump_url": "",
                            "type": "vip",
                            "image_enhance": "http://i0.hdslb.com/bfs/garb/item/ecf1b11044845abc92e576dfdf93ad4f5e5a0958.png",
                            "image_enhance_frame": ""
                        },
                        "cardbg": null,
                        "cardbg_with_focus": null
                    },
                    "is_contractor": false,
                    "contract_desc": ""
                },
                "content": {
                    "message": "看有机化学考研视频",
                    "plat": 0,
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {
                    "time_desc": "627天前发布"
                }
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
                "like": 1,
                "action": 0,
                "member": {
                    "mid": "34598825",
                    "uname": "人宇君sayo",
                    "sex": "男",
                    "sign": "",
                    "avatar": "http://i2.hdslb.com/bfs/face/bf61490cabaedd8e98740f2c98a342ac6d2c607d.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
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
                        "image_enhance": "",
                        "image_enhance_frame": ""
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
                        "vipDueDate": 1629561600000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 0,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "",
                            "label_theme": "",
                            "text_color": "",
                            "bg_style": 0,
                            "bg_color": "",
                            "border_color": ""
                        },
                        "avatar_subscript": 0,
                        "nickname_color": ""
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    },
                    "is_contractor": false,
                    "contract_desc": ""
                },
                "content": {
                    "message": "回复 @緑箭口香糖 :牛的",
                    "plat": 0,
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {
                    "time_desc": "623天前发布"
                }
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
                "like": 2,
                "action": 0,
                "member": {
                    "mid": "479083152",
                    "uname": "人间多了许茫然",
                    "sex": "保密",
                    "sign": "无聊...\n",
                    "avatar": "http://i0.hdslb.com/bfs/face/6e7ee177b5cc681b9609c07f8d5eb574b52d409c.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
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
                        "image_enhance": "",
                        "image_enhance_frame": ""
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
                        "vipDueDate": 1632240000000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 0,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "",
                            "label_theme": "",
                            "text_color": "",
                            "bg_style": 0,
                            "bg_color": "",
                            "border_color": ""
                        },
                        "avatar_subscript": 0,
                        "nickname_color": ""
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": null,
                        "cardbg": null,
                        "cardbg_with_focus": null
                    },
                    "is_contractor": false,
                    "contract_desc": ""
                },
                "content": {
                    "message": "回复 @我到四川省来 :哈哈，考研不考化学吧",
                    "plat": 0,
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {
                    "time_desc": "623天前发布"
                }
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
                "like": 1,
                "action": 0,
                "member": {
                    "mid": "11814633",
                    "uname": "我到四川省来",
                    "sex": "保密",
                    "sign": "保持内心的平静",
                    "avatar": "http://i0.hdslb.com/bfs/face/1c7cad967633c718ddef302f4aa39efaed53a2e4.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
                    "level_info": {
                        "current_level": 6,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 1885,
                        "name": "公主连结凯露",
                        "image": "http://i0.hdslb.com/bfs/garb/item/ecf1b11044845abc92e576dfdf93ad4f5e5a0958.png",
                        "expire": 0,
                        "image_enhance": "http://i0.hdslb.com/bfs/garb/item/ecf1b11044845abc92e576dfdf93ad4f5e5a0958.png",
                        "image_enhance_frame": ""
                    },
                    "nameplate": {
                        "nid": 3,
                        "name": "白银殿堂",
                        "image": "http://i2.hdslb.com/bfs/face/f6a31275029365ae5dc710006585ddcf1139bde1.png",
                        "image_small": "http://i0.hdslb.com/bfs/face/b09cdb4c119c467cf2d15db5263b4f539fa6e30b.png",
                        "level": "高级勋章",
                        "condition": "单个自制视频总播放数>=10万"
                    },
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1715270400000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 1,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "年度大会员",
                            "label_theme": "annual_vip",
                            "text_color": "#FFFFFF",
                            "bg_style": 1,
                            "bg_color": "#FB7299",
                            "border_color": ""
                        },
                        "avatar_subscript": 1,
                        "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png",
                        "nickname_color": "#FB7299"
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": {
                            "id": 1885,
                            "name": "公主连结凯露",
                            "image": "http://i0.hdslb.com/bfs/garb/item/ecf1b11044845abc92e576dfdf93ad4f5e5a0958.png",
                            "jump_url": "",
                            "type": "vip",
                            "image_enhance": "http://i0.hdslb.com/bfs/garb/item/ecf1b11044845abc92e576dfdf93ad4f5e5a0958.png",
                            "image_enhance_frame": ""
                        },
                        "cardbg": null,
                        "cardbg_with_focus": null
                    },
                    "is_contractor": false,
                    "contract_desc": ""
                },
                "content": {
                    "message": "回复 @转手告别旧生活 :专业课 考啊",
                    "plat": 0,
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {
                    "time_desc": "623天前发布"
                }
            },
            {
                "rpid": 3049748009,
                "oid": 201022189,
                "type": 1,
                "mid": 39891232,
                "root": 3030790837,
                "parent": 3032092982,
                "dialog": 3030978856,
                "count": 0,
                "rcount": 0,
                "floor": 99,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1592382373,
                "rpid_str": "3049748009",
                "root_str": "3030790837",
                "parent_str": "3032092982",
                "like": 1,
                "action": 0,
                "member": {
                    "mid": "39891232",
                    "uname": "夏次一町and庵野一洋",
                    "sex": "保密",
                    "sign": "嘚儿~驾!",
                    "avatar": "http://i1.hdslb.com/bfs/face/79fbbc56271053565f6dd4395cd77120bad7c568.jpg",
                    "rank": "10000",
                    "DisplayRank": "0",
                    "face_nft_new": 0,
                    "is_senior_member": 0,
                    "level_info": {
                        "current_level": 5,
                        "current_min": 0,
                        "current_exp": 0,
                        "next_exp": 0
                    },
                    "pendant": {
                        "pid": 452,
                        "name": "灵笼",
                        "image": "http://i1.hdslb.com/bfs/face/9c5f14d6749daded668f3f66998baf4a50e7d8da.png",
                        "expire": 0,
                        "image_enhance": "http://i1.hdslb.com/bfs/face/9c5f14d6749daded668f3f66998baf4a50e7d8da.png",
                        "image_enhance_frame": ""
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
                        "vipDueDate": 1628870400000,
                        "dueRemark": "",
                        "accessStatus": 0,
                        "vipStatus": 0,
                        "vipStatusWarn": "",
                        "themeType": 0,
                        "label": {
                            "path": "",
                            "text": "",
                            "label_theme": "",
                            "text_color": "",
                            "bg_style": 0,
                            "bg_color": "",
                            "border_color": ""
                        },
                        "avatar_subscript": 0,
                        "nickname_color": ""
                    },
                    "fans_detail": null,
                    "following": 0,
                    "is_followed": 0,
                    "user_sailing": {
                        "pendant": {
                            "id": 452,
                            "name": "灵笼",
                            "image": "http://i0.hdslb.com/bfs/face/9c5f14d6749daded668f3f66998baf4a50e7d8da.png",
                            "jump_url": "",
                            "type": "vip",
                            "image_enhance": "http://i0.hdslb.com/bfs/face/9c5f14d6749daded668f3f66998baf4a50e7d8da.png",
                            "image_enhance_frame": ""
                        },
                        "cardbg": null,
                        "cardbg_with_focus": null
                    },
                    "is_contractor": false,
                    "contract_desc": ""
                },
                "content": {
                    "message": "回复 @緑箭口香糖 :不收费啊",
                    "plat": 0,
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {
                    "time_desc": "623天前发布"
                }
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
        "show_bvid": false,
        "control": {
            "input_disable": false,
            "root_input_text": "发一条友善的评论",
            "child_input_text": "",
            "giveup_input_text": "不发没关系，请继续友善哦~",
            "bg_text": "看看下面~来发评论吧",
            "web_selection": false,
            "answer_guide_text": "需要升级成为lv2会员后才可以评论，先去答题转正吧！",
            "answer_guide_icon_url": "http://i0.hdslb.com/bfs/emote/96940d16602cacbbac796245b7bb99fa9b5c970c.png",
            "answer_guide_ios_url": "https://www.bilibili.com/h5/newbie/entry?navhide=1&re_src=12",
            "answer_guide_android_url": "https://www.bilibili.com/h5/newbie/entry?navhide=1&re_src=6",
            "show_type": 1,
            "show_text": "",
            "disable_jump_emote": false
        },
        "note": 1
    }
}
```

</details>

## 获取评论区热评

> http://api.bilibili.com/x/v2/reply/hot

*请求方式：GET*

认证方式：Cookie（SESSDATA）或APP

按照热评排列

**url参数：**

| 参数名     | 类型 | 内容           | 必要性       | 备注                                     |
| ---------- | ---- | -------------- | ------------ | ---------------------------------------- |
| access_key | str  | APP登录 Token  | APP 方式必要 |                                          |
| type       | num  | 评论区类型代码 | 必要         | [类型代码见表](readme.md#评论区类型代码) |
| oid        | num  | 目标评论区 id  | 必要         |                                          |
| root       | num  | 根回复 rpid    | 必要         |                                          |
| ps         | num  | 每页项数       | 非必要       | 默认为20<br />定义域：1-49               |
| pn         | num  | 页码           | 非必要       | 默认为1                                  |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                                                         |
| ------- | ----------------------------- | -------- | ------------------------------------------------------------ |
| code    | num                           | 返回值   | 0：成功<br />-400：请求错误<br />-404：无此项<br />12002：评论区已关闭<br />12009：评论主体的type不合法 |
| message | str                           | 错误信息 | 默认为0                                                      |
| ttl     | num                           | 1        |                                                              |
| data    | 正确时：obj<br />错误时：null | 数据本体 |                                                              |

`data`对象：

| 字段    | 类型 | 内容     | 备注 |
| ------- | ---- | -------- | ---- |
| page    | obj  | 页面信息 |      |
| replies | obj  | 热评列表 |      |

`data`中的`page`对象：

| 字段   | 类型 | 内容     | 备注 |
| ------ | ---- | -------- | ---- |
| acount | num  | 总评论数 |      |
| count  | num  | 热评数   |      |
| num    | num  | 当前页码 |      |
| size   | num  | 每页项数 |      |

`data`中的`replies`数组：

| 项   | 类型 | 内容           | 备注                                   |
| ---- | ---- | -------------- | -------------------------------------- |
| 0    | obj  | 热评条目 1     | [对象定义见表](readme.md#评论条目对象) |
| n    | obj  | 热评条目 (n+1) | 按照热评排列                           |
| ……   | obj  | ……             | ……                                     |

**示例：**

获取视频`av2`的评论区热评，每页5项，查看第1页

```shell
curl -G 'http://api.bilibili.com/x/v2/reply/hot' \
--data-urlencode 'type=1' \
--data-urlencode 'oid=2' \
--data-urlencode 'ps=5' \
--data-urlencode 'pn=1' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "page": {
            "acount": 76796,
            "count": 60975,
            "num": 1,
            "size": 5
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
                "count": 2733,
                "rcount": 2608,
                "floor": 2,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1291350931,
                "like": 90425,
                "action": 0,
                "member": null,
                "content": {
                    "message": "貌似没人来",
                    "plat": 0,
                    "device": "",
                    "members": null,
                    "jump_url": null,
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {}
            },
            {
                "rpid": 917945205,
                "oid": 2,
                "type": 1,
                "mid": 34762090,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 461,
                "rcount": 365,
                "floor": 17977,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1532071373,
                "like": 29795,
                "action": 0,
                "member": null,
                "content": {
                    "message": "7.20日，站长被封7天\n\n历史性留名[2233娘_卖萌]",
                    "plat": 0,
                    "device": "",
                    "members": null,
                    "jump_url": null,
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {}
            },
            {
                "rpid": 2576184175,
                "oid": 2,
                "type": 1,
                "mid": 24512285,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 1066,
                "rcount": 1000,
                "floor": 40932,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1584945297,
                "like": 44309,
                "action": 0,
                "member": null,
                "content": {
                    "message": "人类最古のav号（挂了的不算）也变成bv了[大哭][大哭][大哭]青春结束了",
                    "plat": 0,
                    "device": "",
                    "members": null,
                    "jump_url": null,
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {}
            },
            {
                "rpid": 495059,
                "oid": 2,
                "type": 1,
                "mid": 2,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 898,
                "rcount": 838,
                "floor": 5,
                "state": 2,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1291918239,
                "like": 34224,
                "action": 0,
                "member": null,
                "content": {
                    "message": "wwwww",
                    "plat": 0,
                    "device": "",
                    "members": null,
                    "jump_url": null,
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {}
            },
            {
                "rpid": 646408628,
                "oid": 2,
                "type": 1,
                "mid": 33066927,
                "root": 0,
                "parent": 0,
                "dialog": 0,
                "count": 173,
                "rcount": 160,
                "floor": 10914,
                "state": 0,
                "fansgrade": 0,
                "attr": 0,
                "ctime": 1519135750,
                "like": 7197,
                "action": 0,
                "member": null,
                "content": {
                    "message": "第一首:来夢緑 - kagome-kagome ~ 月の眷属達カラオケ\n第二首:dBu music - 千年幻想郷 -Aurora sky edition-\n第三首:Sensitive Heart - 千年幻想郷 ~ History of the Moon\n第四首:Yellow-Zebra - 月の律动~Rhythm of the moon~(东方永夜抄 “千年幻想郷 ~ History of the Moon”)\n第五首:工藤舞 - D.S.F.S(ヴォヤージュ1969)\n第六首:Angelic Quasar - かの郷は永き幻の\n第七首:東方永夜抄 - 黒髪のアマンダ\n第八首:君の美術館 - 千年幻想郷　~ History of the Moon\n\n------------------------\n这些是av:2出现的音乐，应该不会缺少的喵~。（笑） 如果有需要有兴趣的话欢迎复制喵~~(｀・ω・´)\n复制的9818楼的\n前排提示:本视频只有大会员能看",
                    "plat": 0,
                    "device": "",
                    "members": null,
                    "jump_url": null,
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
                "show_follow": false,
                "invisible": false,
                "reply_control": {}
            }
        ]
    }
}
```

</details>

## ~~获取指定评论信息~~

> http://api.bilibili.com/x/v2/reply/info

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容           | 必要性 | 备注                                         |
| ------ | ---- | -------------- | ------ | -------------------------------------------- |
| type   | num  | 评论区类型代码 | 非必要 | **[类型代码见表](readme.md#评论区类型代码)** |
| oid    | num  | 目标评论区 id  | 非必要 |                                              |
| rpid   | num  | 目标评论 rpid  | 必要   |                                              |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                                          |
| ------- | ----------------------------- | -------- | --------------------------------------------- |
| code    | num                           | 返回值   | 0：成功<br />-400：请求错误<br />-404：无此项 |
| message | str                           | 错误信息 | 默认为0                                       |
| ttl     | num                           | 1        |                                               |
| data    | 正确时：obj<br />错误时：null | 评论条目 | [对象定义见表](readme.md#评论条目对象)        |

**示例：**

获取视频`av379743801`评论区下`rpid=95737567200`的信息

```bash
curl -G 'http://api.bilibili.com/x/v2/reply/info' \
--data-urlencode 'type=1' \
--data-urlencode 'oid=379743801' \
--data-urlencode 'rpid=95737567200' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "rpid": 95737567200,
        "oid": 379743801,
        "type": 1,
        "mid": 293793435,
        "root": 0,
        "parent": 0,
        "dialog": 0,
        "count": 34,
        "rcount": 34,
        "floor": 382,
        "state": 0,
        "fansgrade": 0,
        "attr": 514,
        "ctime": 1639916028,
        "like": 154,
        "action": 0,
        "member": {
            "mid": "293793435",
            "uname": "社会易姐QwQ",
            "sex": "男",
            "sign": "普通带砖技术宅，爱好MC 编程 电子，是车万人也是术术人，粉丝群：1136462265，博客：shakianee.top",
            "avatar": "http://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg",
            "rank": "10000",
            "DisplayRank": "0",
            "face_nft_new": 0,
            "is_senior_member": 0,
            "level_info": {
                "current_level": 6,
                "current_min": 0,
                "current_exp": 0,
                "next_exp": 0
            },
            "pendant": {
                "pid": 2511,
                "name": "初音未来13周年",
                "image": "http://i0.hdslb.com/bfs/garb/item/4f8f3f1f2d47f0dad84f66aa57acd4409ea46361.png",
                "expire": 0,
                "image_enhance": "http://i0.hdslb.com/bfs/garb/item/fe0b83b53e2342b16646f6e7a9370d8a867decdb.webp",
                "image_enhance_frame": "http://i0.hdslb.com/bfs/garb/item/127c507ec8448be30cf5f79500ecc6ef2fd32f2c.png"
            },
            "nameplate": {
                "nid": 4,
                "name": "青铜殿堂",
                "image": "http://i2.hdslb.com/bfs/face/2879cd5fb8518f7c6da75887994c1b2a7fe670bd.png",
                "image_small": "http://i0.hdslb.com/bfs/face/6707c120e00a3445933308fd9b7bd9fad99e9ec4.png",
                "level": "普通勋章",
                "condition": "单个自制视频总播放数>=1万"
            },
            "official_verify": {
                "type": -1,
                "desc": ""
            },
            "vip": {
                "vipType": 2,
                "vipDueDate": 1675785600000,
                "dueRemark": "",
                "accessStatus": 0,
                "vipStatus": 1,
                "vipStatusWarn": "",
                "themeType": 0,
                "label": {
                    "path": "",
                    "text": "年度大会员",
                    "label_theme": "annual_vip",
                    "text_color": "#FFFFFF",
                    "bg_style": 1,
                    "bg_color": "#FB7299",
                    "border_color": ""
                },
                "avatar_subscript": 1,
                "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png",
                "nickname_color": "#FB7299"
            },
            "fans_detail": null,
            "following": 0,
            "is_followed": 0,
            "user_sailing": null,
            "is_contractor": false,
            "contract_desc": ""
        },
        "content": {
            "message": "这款机器背后发热超级严重。。。。。最烫的时候有60-70℃手不敢摸，而发烫后会降频，最低会降到0.6Ghz[笑哭][笑哭]\n现在解决办法已经出来了https://b23.tv/suUd3g7",
            "plat": 0,
            "device": "",
            "members": null,
            "jump_url": null,
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
        "show_follow": false,
        "invisible": false,
        "reply_control": {}
    }
}
```

</details>

## 获取评论区评论总数

> http://api.bilibili.com/x/v2/reply/count

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容           | 必要性 | 备注                                         |
| ------ | ---- | -------------- | ------ | -------------------------------------------- |
| type   | num  | 评论区类型代码 | 必要   | **[类型代码见表](readme.md#评论区类型代码)** |
| oid    | num  | 目标评论区 id  | 必要   |                                              |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                                                         |
| ------- | ----------------------------- | -------- | ------------------------------------------------------------ |
| code    | num                           | 返回值   | 0：成功<br />-400：请求错误<br />-404：无此项<br />12009：评论主体的type不合法 |
| message | str                           | 错误信息 | 默认为0                                                      |
| ttl     | num                           | 1        |                                                              |
| data    | 正确时：obj<br />错误时：null | 数据本体 |                                                              |

`data`对象：

| 字段  | 类型 | 内容     | 备注 |
| ----- | ---- | -------- | ---- |
| count | num  | 评论条数 |      |

**示例：**

获取视频`av2`的评论区总计评论条数

```shell
curl -G 'http://api.bilibili.com/x/v2/reply/count' \
--data-urlencode 'type=1' \
--data-urlencode 'oid=2'
```

<details>
<summary>查看响应示例：</summary>

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

</details>

