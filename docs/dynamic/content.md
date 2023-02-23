# 动态信息

## 获取正在直播的已关注者

> https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/w_live_users

*请求方式：GET*

认证方式：Cookie（SESSDSTA）

**url参数：**

| 参数名 | 类型 | 内容       | 必要性 | 备注     |
| ------ | ---- | ---------- | ------ | -------- |
| size   | num  | 每页显示数 | 非必要 | 默认为10 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| data    | obj  | 信息本体 |         |
| message | str  | 错误信息 | 默认为0 |
| msg     | num  | 空       |         |

`data`对象：

| 字段        | 类型  | 内容       | 备注         |
| ----------- | ----- | ---------- | ------------ |
| count       | num   | 直播者数量 |              |
| group       | str   | "default"  | 作用尚不明确 |
| items       | array | 直播者列表 |              |
| _gt_        | num   | 0          | 作用尚不明确 |

`data`中的`items`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 第一位直播者    |      |
| n    | obj  | 第(n+1)位直播者 |      |
| ……   | obj  | ……              | ……   |

`data`中的`items`数组中的对象：

| 字段  | 类型 | 内容       | 备注 |
| ----- | ---- | ---------- | ---- |
| face  | str  | 直播者头像 |      |
| link  | str  | 直播链接   |      |
| title | str  | 直播标题   |      |
| uid   | num  | 直播者id   |      |
| uname | str  | 直播者昵称 |      |

**示例：**

```shell
curl -G 'https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/w_live_users' \
--data-urlencode 'size=10' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "",
    "message": "",
    "data": {
        "count": 4,
        "group": "default",
        "items": [
            {
                "uid": 430774867,
                "uname": "AIofficial",
                "face": "https://i0.hdslb.com/bfs/face/f9a65c15bd1e9871419e6566aeee891eef420c5b.jpg",
                "link": "https://live.bilibili.com/21412734",
                "title": "【罚站AI】换装24小时AI直播间唱聊~"
            },
            {
                "uid": 456664753,
                "uname": "央视新闻",
                "face": "https://i1.hdslb.com/bfs/face/5a6808606bf1f7a2390b77e14df8d0d1d04680d9.jpg",
                "link": "https://live.bilibili.com/21686237",
                "title": "8.19中国医师节    一起“医”路同行"
            },
            {
                "uid": 5755666,
                "uname": "可爱的大枣子",
                "face": "https://i1.hdslb.com/bfs/face/248428206eca5b9ca34514dc2df54d456fbecb9e.jpg",
                "link": "https://live.bilibili.com/2116488",
                "title": "早上好"
            },
            {
                "uid": 290515513,
                "uname": "地球频道",
                "face": "https://i1.hdslb.com/bfs/face/33b60973ae3608beb27189947b02ccc2164a96d5.jpg",
                "link": "https://live.bilibili.com/9196015",
                "title": "【直播】从太空看地球"
            }
        ],
        "_gt_": 0
    }
}
```

</details>

## 获取发布新动态的已关注者

> https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/w_dyn_uplist

*请求方式：GET*

认证方式：Cookie（SESSDSTA）

**url参数：**

| 参数名         | 类型 | 内容               | 必要性 | 备注             |
| -------------- | ---- | ------------------ | ------ | ---------------- |
| teenagers_mode | num  | 是否开启青少年模式 | 非必要 | 否：0<br />是：1 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                    |
| ------- | ---- | -------- | ----------------------- |
| code    | num  | 返回值   | 0：成功<br />-6：未登录 |
| data    | obj  | 信息本体 |                         |
| message | str  | 错误信息 | 默认为0                 |
| msg     | num  | 空       |                         |

`data`对象：

| 字段             | 类型  | 内容       | 备注         |
| ---------------- | ----- | ---------- | ------------ |
| button_statement | str   | 空         | 作用尚不明确 |
| items            | array | 更新者列表 |              |
| _gt_             | num   | 0          | 作用尚不明确 |

`data`中的`items`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 第一位更新者    |      |
| n    | obj  | 第(n+1)位更新者 |      |
| ……   | obj  | ……              | ……   |

**示例：**

```shell
curl -G 'https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/w_dyn_uplist' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "",
    "message": "",
    "data": {
        "button_statement": "",
        "items": [{
            "user_profile": {
                "info": {
                    "uid": 332704117,
                    "uname": "白上吹雪Official",
                    "face": "https://i1.hdslb.com/bfs/face/26298b21c4a059d95ee9d009bbdf1dca94da951f.jpg"
                },
                "card": {
                    "official_verify": {
                        "type": 0,
                        "desc": "bilibili 知名UP主、直播签约主播"
                    }
                },
                "vip": {
                    "vipType": 2,
                    "vipDueDate": 1634832000000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 1,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                },
                "pendant": {
                    "pid": 0,
                    "name": "",
                    "image": "",
                    "expire": 0,
                    "image_enhance": ""
                },
                "rank": "10000",
                "sign": "hololive一期生，虚拟白发狐狸白上吹雪是也(^・ω・^§)ﾉ 画师：凪白みと 协力：白上吹雪字幕组 商务合作请私信",
                "level_info": {
                    "current_level": 6,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": "0"
                }
            },
            "has_update": 1
        },
        {
            "user_profile": {
                "info": {
                    "uid": 282994,
                    "uname": "泠鸢yousa",
                    "face": "https://i2.hdslb.com/bfs/face/28f95c383f2805dbed32e93007c91ccfda28775f.jpg"
                },
                "card": {
                    "official_verify": {
                        "type": 0,
                        "desc": "bilibili 2019百大UP主、直播签约主播"
                    }
                },
                "vip": {
                    "vipType": 2,
                    "vipDueDate": 1649001600000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 1,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                },
                "pendant": {
                    "pid": 301,
                    "name": "实验品家庭",
                    "image": "https://i1.hdslb.com/bfs/face/6fbee28f782926612eb1ad71d6c8aa7264206fe9.png",
                    "expire": 0,
                    "image_enhance": "https://i1.hdslb.com/bfs/face/6fbee28f782926612eb1ad71d6c8aa7264206fe9.png"
                },
                "rank": "10000",
                "sign": "虚拟艺人团体VirtuaReal Star成员，微博&网易云等搜：泠鸢yousa ",
                "level_info": {
                    "current_level": 6,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": "0"
                }
            },
            "has_update": 1
        },
        {
            "user_profile": {
                "info": {
                    "uid": 13765857,
                    "uname": "LShang001",
                    "face": "https://i2.hdslb.com/bfs/face/4bc59f57e6d31fcf868d7e935f643a043dd6b99f.jpg"
                },
                "card": {
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    }
                },
                "vip": {
                    "vipType": 1,
                    "vipDueDate": 1599926400000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 1,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                },
                "pendant": {
                    "pid": 0,
                    "name": "",
                    "image": "",
                    "expire": 0,
                    "image_enhance": ""
                },
                "rank": "10000",
                "sign": "Excelsior",
                "level_info": {
                    "current_level": 5,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": "0"
                }
            },
            "has_update": 1
        },
        {
            "user_profile": {
                "info": {
                    "uid": 410527811,
                    "uname": "WhatOnEarth一探究竟",
                    "face": "https://i0.hdslb.com/bfs/face/0ef3c74f61c4f5f0ef70ddbf3f1f0ebfed18a1b8.jpg"
                },
                "card": {
                    "official_verify": {
                        "type": 0,
                        "desc": "bilibili 知名科普UP主"
                    }
                },
                "vip": {
                    "vipType": 1,
                    "vipDueDate": 1599494400000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 1,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                },
                "pendant": {
                    "pid": 0,
                    "name": "",
                    "image": "",
                    "expire": 0,
                    "image_enhance": ""
                },
                "rank": "10000",
                "sign": "硬核人文科普，精彩社会案例，尽在WOE。",
                "level_info": {
                    "current_level": 6,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": "0"
                }
            },
            "has_update": 1
        },
        {
            "user_profile": {
                "info": {
                    "uid": 519253600,
                    "uname": "火柴人AlanBecker",
                    "face": "https://i1.hdslb.com/bfs/face/75e1219501e9ca3e82cad2c4a466fb4b5c7d0557.jpg"
                },
                "card": {
                    "official_verify": {
                        "type": 0,
                        "desc": "Alan Becker官方帐号，动画UP主"
                    }
                },
                "vip": {
                    "vipType": 1,
                    "vipDueDate": 1594137600000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 0,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                },
                "pendant": {
                    "pid": 0,
                    "name": "",
                    "image": "",
                    "expire": 0,
                    "image_enhance": ""
                },
                "rank": "10000",
                "sign": "Alan Becker官方频道",
                "level_info": {
                    "current_level": 6,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": "0"
                }
            },
            "has_update": 1
        },
        {
            "user_profile": {
                "info": {
                    "uid": 293793435,
                    "uname": "社会易姐QwQ",
                    "face": "https://i1.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg"
                },
                "card": {
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    }
                },
                "vip": {
                    "vipType": 2,
                    "vipDueDate": 1612454400000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 1,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                },
                "pendant": {
                    "pid": 0,
                    "name": "",
                    "image": "",
                    "expire": 0,
                    "image_enhance": ""
                },
                "rank": "10000",
                "sign": "高中技术宅一枚，爱好MC&电子&8-bit音乐&数码&编程，资深猿厨，粉丝群：1136462265",
                "level_info": {
                    "current_level": 5,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": "0"
                }
            },
            "has_update": 1
        },
        {
            "user_profile": {
                "info": {
                    "uid": 5755666,
                    "uname": "可爱的大枣子",
                    "face": "https://i1.hdslb.com/bfs/face/248428206eca5b9ca34514dc2df54d456fbecb9e.jpg"
                },
                "card": {
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    }
                },
                "vip": {
                    "vipType": 2,
                    "vipDueDate": 1645286400000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 1,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                },
                "pendant": {
                    "pid": 0,
                    "name": "",
                    "image": "",
                    "expire": 0,
                    "image_enhance": ""
                },
                "rank": "10000",
                "sign": "檐外清风惊落一池桃花染",
                "level_info": {
                    "current_level": 6,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": "0"
                }
            },
            "has_update": 1
        },
        {
            "user_profile": {
                "info": {
                    "uid": 51270387,
                    "uname": "挽竹Killer",
                    "face": "https://i2.hdslb.com/bfs/face/3a9f7b01c8b7d235fa2fa8d761b94520fb82bd20.jpg"
                },
                "card": {
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    }
                },
                "vip": {
                    "vipType": 1,
                    "vipDueDate": 1613404800000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 1,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                },
                "pendant": {
                    "pid": 0,
                    "name": "",
                    "image": "",
                    "expire": 0,
                    "image_enhance": ""
                },
                "rank": "10000",
                "sign": "（15w粉女装直播嗷）粉丝群:872444546",
                "level_info": {
                    "current_level": 6,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": "0"
                }
            },
            "has_update": 1
        },
        {
            "user_profile": {
                "info": {
                    "uid": 4409391,
                    "uname": "估读",
                    "face": "https://i0.hdslb.com/bfs/face/f0d6b44b38eff3ce023b354f692cdb5ae0013772.jpg"
                },
                "card": {
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    }
                },
                "vip": {
                    "vipType": 1,
                    "vipDueDate": 1578412800000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 0,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                },
                "pendant": {
                    "pid": 0,
                    "name": "",
                    "image": "",
                    "expire": 0,
                    "image_enhance": ""
                },
                "rank": "10000",
                "sign": "关注一下这只硬核up吧～  脑洞能开，双手能做，立志把硬核内容做得易于食用ヾ(✿ﾟ▽ﾟ)ノ 粉丝群971392670。微博ID“估读酱”",
                "level_info": {
                    "current_level": 6,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": "0"
                }
            },
            "has_update": 1
        },
        {
            "user_profile": {
                "info": {
                    "uid": 70547713,
                    "uname": "Dr丶寻一",
                    "face": "https://i1.hdslb.com/bfs/face/fb2f66c64b1de4da329b8ccdbe4cc2db19bab488.jpg"
                },
                "card": {
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    }
                },
                "vip": {
                    "vipType": 1,
                    "vipDueDate": 1598025600000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 1,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                },
                "pendant": {
                    "pid": 2360,
                    "name": "#EveOneCat",
                    "image": "https://i1.hdslb.com/bfs/garb/item/3a6053f073f979a776e02e088dd7dd7694c5b1f3.png",
                    "expire": 0,
                    "image_enhance": "https://i1.hdslb.com/bfs/garb/item/6c7f2ccb92627b11101dfbb616524845cac8f216.webp"
                },
                "rank": "10000",
                "sign": "准备开黑乐谱的坑，有时还会弄点其他的红石音乐。有什么好的黑乐谱可以私信我下载链接，只要是我电脑上的fl能够成功导入，看实际情况施工。",
                "level_info": {
                    "current_level": 6,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": "0"
                }
            },
            "has_update": 1
        },
        {
            "user_profile": {
                "info": {
                    "uid": 591856754,
                    "uname": "卢正义的雕刻时光",
                    "face": "https://i0.hdslb.com/bfs/face/5acc7be5c21c1dc7a4d0ebe8d741e60555971029.jpg"
                },
                "card": {
                    "official_verify": {
                        "type": 0,
                        "desc": "bilibili 知名UP主"
                    }
                },
                "vip": {
                    "vipType": 2,
                    "vipDueDate": 1624377600000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 1,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                },
                "pendant": {
                    "pid": 0,
                    "name": "",
                    "image": "",
                    "expire": 0,
                    "image_enhance": ""
                },
                "rank": "10000",
                "sign": "我是卢正义，年方二十有七\n初来贵站，还望各位多多关照\n商务合作⭐ JOJOMONO\n木品咨询⭐ lym11336699\n",
                "level_info": {
                    "current_level": 6,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": "0"
                }
            },
            "has_update": 1
        },
        {
            "user_profile": {
                "info": {
                    "uid": 361818130,
                    "uname": "是田小浪呀",
                    "face": "https://i1.hdslb.com/bfs/face/917d7f539e24860a52ccca2e8dbf8d6d6ca0e66b.jpg"
                },
                "card": {
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    }
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
                "pendant": {
                    "pid": 0,
                    "name": "",
                    "image": "",
                    "expire": 0,
                    "image_enhance": ""
                },
                "rank": "10000",
                "sign": "",
                "level_info": {
                    "current_level": 3,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": "0"
                }
            },
            "has_update": 1
        },
        {
            "user_profile": {
                "info": {
                    "uid": 108572682,
                    "uname": "月下玄月",
                    "face": "https://i1.hdslb.com/bfs/face/9cb69b21cd23fce7545c441415db17f2d57af159.jpg"
                },
                "card": {
                    "official_verify": {
                        "type": 0,
                        "desc": "bilibili 知名UP主"
                    }
                },
                "vip": {
                    "vipType": 2,
                    "vipDueDate": 1619712000000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 1,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                },
                "pendant": {
                    "pid": 0,
                    "name": "",
                    "image": "",
                    "expire": 0,
                    "image_enhance": ""
                },
                "rank": "10000",
                "sign": "QQ1群：701762419；QQ2群：1062508843",
                "level_info": {
                    "current_level": 6,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": "0"
                }
            },
            "has_update": 1
        },
        {
            "user_profile": {
                "info": {
                    "uid": 7450650,
                    "uname": "超果果mc",
                    "face": "https://i2.hdslb.com/bfs/face/0202ae8b377d750fe3fbeff4f9b8219b48071ee5.jpg"
                },
                "card": {
                    "official_verify": {
                        "type": 0,
                        "desc": "bilibili 知名游戏UP主、直播签约主播"
                    }
                },
                "vip": {
                    "vipType": 2,
                    "vipDueDate": 1645113600000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 1,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                },
                "pendant": {
                    "pid": 0,
                    "name": "",
                    "image": "",
                    "expire": 0,
                    "image_enhance": ""
                },
                "rank": "10000",
                "sign": "希望做出大家看了都会开心的视频  微博@超果果mc  商业合作加qq：169113409",
                "level_info": {
                    "current_level": 6,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": "0"
                }
            },
            "has_update": 1
        },
        {
            "user_profile": {
                "info": {
                    "uid": 4958429,
                    "uname": "Mukyo木西",
                    "face": "https://i0.hdslb.com/bfs/face/15c9b8360e524332a61b998360dd4958e0d1fd31.jpg"
                },
                "card": {
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    }
                },
                "vip": {
                    "vipType": 1,
                    "vipDueDate": 1582992000000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 0,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                },
                "pendant": {
                    "pid": 0,
                    "name": "",
                    "image": "",
                    "expire": 0,
                    "image_enhance": ""
                },
                "rank": "10000",
                "sign": "各个音乐平台搜 Mukyo木西。微博@Mukyo木西就是狗狗。",
                "level_info": {
                    "current_level": 6,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": "0"
                }
            },
            "has_update": 1
        },
        {
            "user_profile": {
                "info": {
                    "uid": 26321770,
                    "uname": "和猫住の",
                    "face": "https://i2.hdslb.com/bfs/face/a0f1e2e8fa05317c12064b7026a20900bdb25b5a.jpg"
                },
                "card": {
                    "official_verify": {
                        "type": 0,
                        "desc": "bilibili 知名UP主"
                    }
                },
                "vip": {
                    "vipType": 2,
                    "vipDueDate": 1627488000000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 1,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                },
                "pendant": {
                    "pid": 303,
                    "name": "喂，看见耳朵啦",
                    "image": "https://i1.hdslb.com/bfs/face/09f3180cb0a4a0a479045fe4fad705f9b92a82d2.png",
                    "expire": 0,
                    "image_enhance": "https://i1.hdslb.com/bfs/face/09f3180cb0a4a0a479045fe4fad705f9b92a82d2.png"
                },
                "rank": "10000",
                "sign": "年轻人的猫咪救援领养平台，微博/公众号：和猫住  客服v：公众号和猫住菜单“联系我”",
                "level_info": {
                    "current_level": 6,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": "0"
                }
            },
            "has_update": 1
        },
        {
            "user_profile": {
                "info": {
                    "uid": 37556366,
                    "uname": "NickZhuOfficial",
                    "face": "https://i0.hdslb.com/bfs/face/e3a45f58368a70c5277af394bb40e32156ca2a23.jpg"
                },
                "card": {
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    }
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
                "pendant": {
                    "pid": 2248,
                    "name": "搞笑专属头像挂件",
                    "image": "https://i2.hdslb.com/bfs/garb/item/bab219d170a1662c26beede8944c6afbc6bc2bb4.png",
                    "expire": 0,
                    "image_enhance": "https://i2.hdslb.com/bfs/garb/item/bab219d170a1662c26beede8944c6afbc6bc2bb4.png"
                },
                "rank": "10000",
                "sign": "鬼畜人",
                "level_info": {
                    "current_level": 6,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": "0"
                }
            },
            "has_update": 1
        },
        {
            "user_profile": {
                "info": {
                    "uid": 438345816,
                    "uname": "盲人母亲曹世美",
                    "face": "https://i2.hdslb.com/bfs/face/61111e0fa1ce0e8224b7aa48cc8b4dddc2ec6046.jpg"
                },
                "card": {
                    "official_verify": {
                        "type": 0,
                        "desc": "bilibili 知名UP主"
                    }
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
                "pendant": {
                    "pid": 0,
                    "name": "",
                    "image": "",
                    "expire": 0,
                    "image_enhance": ""
                },
                "rank": "10000",
                "sign": "来自贵州纳雍大山深处的一家三口，父亲腿脚残疾，母亲看不见，还有一个脑瘫儿子，盲人母亲就这样用她一双手撑起了一个家想了解v:llj104890",
                "level_info": {
                    "current_level": 6,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": "0"
                }
            },
            "has_update": 1
        },
        {
            "user_profile": {
                "info": {
                    "uid": 486633990,
                    "uname": "我是江无情",
                    "face": "https://i1.hdslb.com/bfs/face/bf667a09070a9345c881ec8e3e6844d8ecb043ca.jpg"
                },
                "card": {
                    "official_verify": {
                        "type": 0,
                        "desc": "bilibili 知名科普UP主"
                    }
                },
                "vip": {
                    "vipType": 2,
                    "vipDueDate": 1617379200000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 1,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                },
                "pendant": {
                    "pid": 0,
                    "name": "",
                    "image": "",
                    "expire": 0,
                    "image_enhance": ""
                },
                "rank": "10000",
                "sign": "一个做视频的，商务请私信微博：我是江无情",
                "level_info": {
                    "current_level": 6,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": "0"
                }
            },
            "has_update": 1
        },
        {
            "user_profile": {
                "info": {
                    "uid": 13337125,
                    "uname": "GoldenEggs",
                    "face": "https://i0.hdslb.com/bfs/face/11a78303bf3c69a1bf34cab25bb219eeee47961e.jpg"
                },
                "card": {
                    "official_verify": {
                        "type": 0,
                        "desc": "bilibili 知名游戏UP主"
                    }
                },
                "vip": {
                    "vipType": 2,
                    "vipDueDate": 1649865600000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 1,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                },
                "pendant": {
                    "pid": 0,
                    "name": "",
                    "image": "",
                    "expire": 0,
                    "image_enhance": ""
                },
                "rank": "10000",
                "sign": "脑洞区up主，常借助Minecraft平台实现一些好玩的想法     // 创意交流群：871449268／合作QQ：1558854197",
                "level_info": {
                    "current_level": 6,
                    "current_min": 0,
                    "current_exp": 0,
                    "next_exp": "0"
                }
            },
            "has_update": 0
        }],
        "_gt_": 0
    }
}
```

</details>