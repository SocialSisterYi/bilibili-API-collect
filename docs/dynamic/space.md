# 获取用户空间动态

> https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space

请求方式：`GET`

是否需要登录：`否`

## URL参数

| 参数名             | 类型  | 必填  | 内容     | 备注  |
|-----------------|-----|-----|--------|-----|
| offset          | str |     | 分页偏移量  |     |
| host_mid        | str | √   | 用户UID  |     |
| timezone_offset | num |     | `-480` |     |
| features        | str |     | itemOpusStyle |  |

## Json回复

参照 [获取动态列表](./all.md#获取动态列表)

## 请求示例

```shell
curl -L -X GET 'https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space?host_mid=1'
```

## 响应示例

<details>
<summary>点击查看</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "has_more": false,
        "items": [
            {
                "basic": {
                    "comment_id_str": "463864834570585963",
                    "comment_type": 17,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "463864834566075427"
                },
                "id_str": "463864834570585963",
                "modules": {
                    "module_author": {
                        "face": "http://i0.hdslb.com/bfs/face/34c5b30a990c7ce4a809626d8153fa7895ec7b63.gif",
                        "face_nft": false,
                        "following": null,
                        "jump_url": "//space.bilibili.com/1/dynamic",
                        "label": "",
                        "mid": 1,
                        "name": "bishi",
                        "official_verify": {
                            "desc": "",
                            "type": -1
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "",
                            "image_enhance": "",
                            "image_enhance_frame": "",
                            "name": "",
                            "pid": 0
                        },
                        "pub_action": "",
                        "pub_location_text": "",
                        "pub_time": "2020-12-02",
                        "pub_ts": 1606840348,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 1,
                            "avatar_subscript_url": "",
                            "due_date": 1816099200000,
                            "label": {
                                "bg_color": "#FB7299",
                                "bg_style": 1,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                "label_theme": "annual_vip",
                                "path": "",
                                "text": "年度大会员",
                                "text_color": "#FFFFFF",
                                "use_img_label": true
                            },
                            "nickname_color": "#FB7299",
                            "status": 1,
                            "theme_type": 0,
                            "type": 2
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": {
                            "rich_text_nodes": [
                                {
                                    "orig_text": "好家伙",
                                    "text": "好家伙",
                                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                }
                            ],
                            "text": "好家伙"
                        },
                        "major": null,
                        "topic": null
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 979,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 81,
                            "forbidden": false
                        },
                        "like": {
                            "count": 7694,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "orig": {
                    "basic": {
                        "comment_id_str": "",
                        "comment_type": 0,
                        "like_icon": {
                            "action_url": "",
                            "end_url": "",
                            "id": 0,
                            "start_url": ""
                        },
                        "rid_str": ""
                    },
                    "id_str": "459720423056997502",
                    "modules": {
                        "module_author": {
                            "decorate": {
                                "card_url": "http://i0.hdslb.com/bfs/garb/item/3fc3f5914f0bcbefac9e9fa96aec454cf347287a.png",
                                "fan": {
                                    "color": "#ec3d3d",
                                    "is_fan": true,
                                    "num_str": "004156",
                                    "number": 4156
                                },
                                "id": 1418,
                                "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/1431?navhide=1&mid=249608727&from=dynamic&isdiy=0",
                                "name": "2020拜年祭粉丝专属",
                                "type": 3
                            },
                            "face": "https://i0.hdslb.com/bfs/face/e422a095e58305218e2745714ceb4c9754e752a7.jpg",
                            "face_nft": false,
                            "following": null,
                            "jump_url": "//space.bilibili.com/249608727/dynamic",
                            "label": "",
                            "mid": 249608727,
                            "name": "杨可爱Ukulele",
                            "official_verify": {
                                "desc": "全民音乐UP主年度30强",
                                "type": 0
                            },
                            "pendant": {
                                "expire": 0,
                                "image": "https://i0.hdslb.com/bfs/face/c93e1eeb77b1bb0753eff243d49c006bf18d69c5.png",
                                "image_enhance": "https://i0.hdslb.com/bfs/face/c93e1eeb77b1bb0753eff243d49c006bf18d69c5.png",
                                "image_enhance_frame": "",
                                "name": "梦塔·雪谜城",
                                "pid": 299
                            },
                            "pub_action": "投稿了视频",
                            "pub_time": "",
                            "pub_ts": 1605875402,
                            "type": "AUTHOR_TYPE_NORMAL",
                            "vip": {
                                "avatar_subscript": 1,
                                "avatar_subscript_url": "",
                                "due_date": 1793462400000,
                                "label": {
                                    "bg_color": "#FB7299",
                                    "bg_style": 1,
                                    "border_color": "",
                                    "img_label_uri_hans": "",
                                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                    "img_label_uri_hant": "",
                                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                    "label_theme": "annual_vip",
                                    "path": "",
                                    "text": "年度大会员",
                                    "text_color": "#FFFFFF",
                                    "use_img_label": true
                                },
                                "nickname_color": "#FB7299",
                                "status": 1,
                                "theme_type": 0,
                                "type": 2
                            }
                        },
                        "module_dynamic": {
                            "additional": null,
                            "desc": {
                                "rich_text_nodes": [
                                    {
                                        "jump_url": "//search.bilibili.com/all?keyword=%23%E9%87%91%E7%A7%8B%E9%9F%B3%E4%B9%90%E5%AD%A3%23",
                                        "orig_text": "#金秋音乐季#",
                                        "text": "#金秋音乐季#",
                                        "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                                    },
                                    {
                                        "orig_text": "\n大家推荐给我很多神曲 一直没机会做\n这不\n杨同学带着《酒醉的蝴蝶》《爱河》《黑人抬棺》《最炫民族风》..等10余位选手来了\n改编成中国风之后 好像 有点 串味儿了\n大家三连之后再细细观看可好？",
                                        "text": "\n大家推荐给我很多神曲 一直没机会做\n这不\n杨同学带着《酒醉的蝴蝶》《爱河》《黑人抬棺》《最炫民族风》..等10余位选手来了\n改编成中国风之后 好像 有点 串味儿了\n大家三连之后再细细观看可好？",
                                        "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                    }
                                ],
                                "text": "#金秋音乐季#\n大家推荐给我很多神曲 一直没机会做\n这不\n杨同学带着《酒醉的蝴蝶》《爱河》《黑人抬棺》《最炫民族风》..等10余位选手来了\n改编成中国风之后 好像 有点 串味儿了\n大家三连之后再细细观看可好？"
                            },
                            "major": {
                                "archive": {
                                    "aid": "970285943",
                                    "badge": {
                                        "bg_color": "#FB7299",
                                        "color": "#FFFFFF",
                                        "text": "投稿视频"
                                    },
                                    "bvid": "BV12p4y167Kq",
                                    "cover": "http://i0.hdslb.com/bfs/archive/20c86c66df71770a7a91cc0871b455d1c582094b.jpg",
                                    "desc": "大家好，今天想要跟大家分享我的快乐源泉，以及去KTV的必点神曲\n大家如果觉得十首看了还不过瘾的话\n这样\n点赞过十万 热评第一说出啥改编我就出啥 （前提是我做得来...\n\n（“土味”只是一个外号，它们其实不土，它们只是快乐的传递者\n   大部分的填词都是根据原版歌曲填哒，偶尔有些小发挥，大家当看娱乐视频就好啦）\n--------------------\n原唱：崔伟立、凤凰传奇、Vicetone&Tony Igy、神马乐团、筷子兄弟、慕容晓晓、李佳璐\n改编编曲/演唱/尤克里里：杨可爱\n改编填词：不迟等\n混音：",
                                    "disable_preview": 0,
                                    "duration_text": "06:12",
                                    "jump_url": "//www.bilibili.com/video/BV12p4y167Kq",
                                    "stat": {
                                        "danmaku": "3519",
                                        "play": "153万"
                                    },
                                    "title": "没内味儿？我把十五年最火的10首土味神曲做成了一首中国风..",
                                    "type": 1
                                },
                                "type": "MAJOR_TYPE_ARCHIVE"
                            },
                            "topic": null
                        }
                    },
                    "type": "DYNAMIC_TYPE_AV",
                    "visible": true
                },
                "type": "DYNAMIC_TYPE_FORWARD",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "269459814293507419",
                    "comment_type": 17,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "269459814290043403"
                },
                "id_str": "269459814293507419",
                "modules": {
                    "module_author": {
                        "face": "http://i0.hdslb.com/bfs/face/34c5b30a990c7ce4a809626d8153fa7895ec7b63.gif",
                        "face_nft": false,
                        "following": null,
                        "jump_url": "//space.bilibili.com/1/dynamic",
                        "label": "",
                        "mid": 1,
                        "name": "bishi",
                        "official_verify": {
                            "desc": "",
                            "type": -1
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "",
                            "image_enhance": "",
                            "image_enhance_frame": "",
                            "name": "",
                            "pid": 0
                        },
                        "pub_action": "",
                        "pub_location_text": "",
                        "pub_time": "2019-06-27",
                        "pub_ts": 1561576902,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 1,
                            "avatar_subscript_url": "",
                            "due_date": 1816099200000,
                            "label": {
                                "bg_color": "#FB7299",
                                "bg_style": 1,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                "label_theme": "annual_vip",
                                "path": "",
                                "text": "年度大会员",
                                "text_color": "#FFFFFF",
                                "use_img_label": true
                            },
                            "nickname_color": "#FB7299",
                            "status": 1,
                            "theme_type": 0,
                            "type": 2
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": {
                            "rich_text_nodes": [
                                {
                                    "orig_text": "来一锄头!",
                                    "text": "来一锄头!",
                                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                }
                            ],
                            "text": "来一锄头!"
                        },
                        "major": null,
                        "topic": null
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 1233,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 32,
                            "forbidden": false
                        },
                        "like": {
                            "count": 8428,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "orig": {
                    "basic": {
                        "comment_id_str": "",
                        "comment_type": 0,
                        "like_icon": {
                            "action_url": "",
                            "end_url": "",
                            "id": 0,
                            "start_url": ""
                        },
                        "rid_str": ""
                    },
                    "id_str": 4038269986840689,
                    "modules": {
                        "module_author": {
                            "face": "http://i0.hdslb.com/bfs/face/210cac322eb3a689f63f3a19d59ea641347c3c52.jpg",
                            "face_nft": false,
                            "following": null,
                            "jump_url": "//space.bilibili.com/10410/dynamic",
                            "label": "",
                            "mid": 10410,
                            "name": "hotfloor",
                            "official_verify": {
                                "desc": "",
                                "type": -1
                            },
                            "pendant": {
                                "expire": 0,
                                "image": "",
                                "image_enhance": "",
                                "image_enhance_frame": "",
                                "name": "",
                                "pid": 0
                            },
                            "pub_action": "投稿了视频",
                            "pub_time": "",
                            "pub_ts": 1327584664,
                            "type": "AUTHOR_TYPE_NORMAL",
                            "vip": {
                                "avatar_subscript": 1,
                                "avatar_subscript_url": "",
                                "due_date": 1700150400000,
                                "label": {
                                    "bg_color": "#FB7299",
                                    "bg_style": 1,
                                    "border_color": "",
                                    "img_label_uri_hans": "",
                                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                    "img_label_uri_hant": "",
                                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                    "label_theme": "annual_vip",
                                    "path": "",
                                    "text": "年度大会员",
                                    "text_color": "#FFFFFF",
                                    "use_img_label": true
                                },
                                "nickname_color": "#FB7299",
                                "status": 1,
                                "theme_type": 0,
                                "type": 2
                            }
                        },
                        "module_dynamic": {
                            "additional": null,
                            "desc": null,
                            "major": {
                                "archive": {
                                    "aid": "205419",
                                    "badge": {
                                        "bg_color": "#FB7299",
                                        "color": "#FFFFFF",
                                        "text": "投稿视频"
                                    },
                                    "bvid": "BV1bx411w7SF",
                                    "cover": "http://i1.hdslb.com/bfs/archive/5607be9a736a426ae21e3e59fad664296f91df8e.png",
                                    "desc": "原创 拖到今天才做完了……总之祝各位新年快乐，做这个只是为了感谢这一年陪伴我们的各种新番，与新番一起成长的UP主们，和浪费我们大半人生的bili，谢谢你们带给我们的欢笑和泪水，即使是世界末日也不会忘记…… PS.感谢哦拖拖帮忙取标题 下载：http://pan.baidu.com/s/1c0ImLva 密码：8xb4 原曲MV联动av210810 自己的MADlist--&gt;mylist27438",
                                    "disable_preview": 0,
                                    "duration_text": "04:49",
                                    "jump_url": "//www.bilibili.com/video/BV1bx411w7SF",
                                    "stat": {
                                        "danmaku": "2.4万",
                                        "play": "54.6万"
                                    },
                                    "title": "【MAD】[送给所有热爱bili的各位]干杯",
                                    "type": 1
                                },
                                "type": "MAJOR_TYPE_ARCHIVE"
                            },
                            "topic": null
                        }
                    },
                    "type": "DYNAMIC_TYPE_AV",
                    "visible": true
                },
                "type": "DYNAMIC_TYPE_FORWARD",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "26050777",
                    "comment_type": 11,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "26050777"
                },
                "id_str": "269003035929570655",
                "modules": {
                    "module_author": {
                        "face": "http://i0.hdslb.com/bfs/face/34c5b30a990c7ce4a809626d8153fa7895ec7b63.gif",
                        "face_nft": false,
                        "following": null,
                        "jump_url": "//space.bilibili.com/1/dynamic",
                        "label": "",
                        "mid": 1,
                        "name": "bishi",
                        "official_verify": {
                            "desc": "",
                            "type": -1
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "",
                            "image_enhance": "",
                            "image_enhance_frame": "",
                            "name": "",
                            "pid": 0
                        },
                        "pub_action": "",
                        "pub_location_text": "",
                        "pub_time": "2019-06-25",
                        "pub_ts": 1561470550,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 1,
                            "avatar_subscript_url": "",
                            "due_date": 1816099200000,
                            "label": {
                                "bg_color": "#FB7299",
                                "bg_style": 1,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                "label_theme": "annual_vip",
                                "path": "",
                                "text": "年度大会员",
                                "text_color": "#FFFFFF",
                                "use_img_label": true
                            },
                            "nickname_color": "#FB7299",
                            "status": 1,
                            "theme_type": 0,
                            "type": 2
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": {
                            "rich_text_nodes": [
                                {
                                    "jump_url": "//search.bilibili.com/all?keyword=%23%E5%B9%B2%E6%9D%AF%E5%8D%81%E5%91%A8%E5%B9%B4%23",
                                    "orig_text": "#干杯十周年#",
                                    "text": "#干杯十周年#",
                                    "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                                },
                                {
                                    "orig_text": "Yo,My Friend,Nice to see you again.",
                                    "text": "Yo,My Friend,Nice to see you again.",
                                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                },
                                {
                                    "jump_url": "https://www.bilibili.com/blackboard/bilibili2009.html",
                                    "orig_text": "https://www.bilibili.com/blackboard/bilibili2009.html",
                                    "text": "网页链接",
                                    "type": "RICH_TEXT_NODE_TYPE_WEB"
                                }
                            ],
                            "text": "#干杯十周年#Yo,My Friend,Nice to see you again.https://www.bilibili.com/blackboard/bilibili2009.html"
                        },
                        "major": {
                            "draw": {
                                "id": 26050777,
                                "items": [
                                    {
                                        "height": 1360,
                                        "size": 500,
                                        "src": "https://i0.hdslb.com/bfs/active/1ddb2cb9a1edb74ba7c4f0e15c1bbef9dc3ce548.jpg",
                                        "tags": [],
                                        "width": 935
                                    }
                                ]
                            },
                            "type": "MAJOR_TYPE_DRAW"
                        },
                        "topic": null
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 1515,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 214,
                            "forbidden": false
                        },
                        "like": {
                            "count": 11041,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_DRAW",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "264471510427272642",
                    "comment_type": 17,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "264471510424746690"
                },
                "id_str": "264471510427272642",
                "modules": {
                    "module_author": {
                        "face": "http://i0.hdslb.com/bfs/face/34c5b30a990c7ce4a809626d8153fa7895ec7b63.gif",
                        "face_nft": false,
                        "following": null,
                        "jump_url": "//space.bilibili.com/1/dynamic",
                        "label": "",
                        "mid": 1,
                        "name": "bishi",
                        "official_verify": {
                            "desc": "",
                            "type": -1
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "",
                            "image_enhance": "",
                            "image_enhance_frame": "",
                            "name": "",
                            "pid": 0
                        },
                        "pub_action": "",
                        "pub_location_text": "",
                        "pub_time": "2019-06-13",
                        "pub_ts": 1560415472,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 1,
                            "avatar_subscript_url": "",
                            "due_date": 1816099200000,
                            "label": {
                                "bg_color": "#FB7299",
                                "bg_style": 1,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                "label_theme": "annual_vip",
                                "path": "",
                                "text": "年度大会员",
                                "text_color": "#FFFFFF",
                                "use_img_label": true
                            },
                            "nickname_color": "#FB7299",
                            "status": 1,
                            "theme_type": 0,
                            "type": 2
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": {
                            "rich_text_nodes": [
                                {
                                    "orig_text": "圈错号了",
                                    "text": "圈错号了",
                                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                },
                                {
                                    "emoji": {
                                        "icon_url": "http://i0.hdslb.com/bfs/emote/33ad6000d9f9f168a0976bc60937786f239e5d8c.png",
                                        "size": 1,
                                        "text": "[呆]",
                                        "type": 1
                                    },
                                    "orig_text": "[呆]",
                                    "text": "[呆]",
                                    "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                                },
                                {
                                    "orig_text": "//",
                                    "text": "//",
                                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                },
                                {
                                    "orig_text": "@柴刀娘木木",
                                    "rid": "9",
                                    "text": "@柴刀娘木木",
                                    "type": "RICH_TEXT_NODE_TYPE_AT"
                                },
                                {
                                    "orig_text": ":",
                                    "text": ":",
                                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                },
                                {
                                    "orig_text": "@bishi",
                                    "rid": "1",
                                    "text": "@bishi",
                                    "type": "RICH_TEXT_NODE_TYPE_AT"
                                },
                                {
                                    "orig_text": "我来组成分母，测试欧气，我要是中了再抽人送出",
                                    "text": "我来组成分母，测试欧气，我要是中了再抽人送出",
                                    "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                },
                                {
                                    "emoji": {
                                        "icon_url": "http://i0.hdslb.com/bfs/emote/6c49d226e76c42cd8002abc47b3112bc5a92f66a.png",
                                        "size": 1,
                                        "text": "[偷笑]",
                                        "type": 1
                                    },
                                    "orig_text": "[偷笑]",
                                    "text": "[偷笑]",
                                    "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                                }
                            ],
                            "text": "圈错号了[呆]//@柴刀娘木木:@bishi我来组成分母，测试欧气，我要是中了再抽人送出[偷笑]"
                        },
                        "major": null,
                        "topic": null
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 1013,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 109,
                            "forbidden": false
                        },
                        "like": {
                            "count": 4751,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "orig": {
                    "basic": {
                        "comment_id_str": "",
                        "comment_type": 0,
                        "like_icon": {
                            "action_url": "",
                            "end_url": "",
                            "id": 0,
                            "start_url": ""
                        },
                        "rid_str": ""
                    },
                    "id_str": "264180341709040397",
                    "modules": {
                        "module_author": {
                            "decorate": {
                                "card_url": "http://i0.hdslb.com/bfs/garb/item/fe745063c05881face209a772d17bb056a4034f1.png",
                                "fan": {
                                    "color": "#6857ea",
                                    "is_fan": true,
                                    "num_str": "001647",
                                    "number": 1647
                                },
                                "id": 5203,
                                "jump_url": "https://www.bilibili.com/h5/mall/fans/recommend/5235?navhide=1&mid=12&from=dynamic&isdiy=0",
                                "name": "BML2021粉丝专属",
                                "type": 3
                            },
                            "face": "http://i2.hdslb.com/bfs/face/4f640086bc17e180faf8ad6b86b5bf4be24eb9f1.jpg",
                            "face_nft": false,
                            "following": null,
                            "jump_url": "//space.bilibili.com/12/dynamic",
                            "label": "",
                            "mid": 12,
                            "name": "MagicBear",
                            "official_verify": {
                                "desc": "",
                                "type": 0
                            },
                            "pendant": {
                                "expire": 0,
                                "image": "https://i0.hdslb.com/bfs/face/a959c72407b2ac553d4328fd76d55d0134e20f65.png",
                                "image_enhance": "https://i0.hdslb.com/bfs/face/a959c72407b2ac553d4328fd76d55d0134e20f65.png",
                                "image_enhance_frame": "",
                                "name": "异常生物",
                                "pid": 460
                            },
                            "pub_action": "",
                            "pub_time": "",
                            "pub_ts": 1560347679,
                            "type": "AUTHOR_TYPE_NORMAL",
                            "vip": {
                                "avatar_subscript": 1,
                                "avatar_subscript_url": "",
                                "due_date": 1761580800000,
                                "label": {
                                    "bg_color": "#FB7299",
                                    "bg_style": 1,
                                    "border_color": "",
                                    "img_label_uri_hans": "https://i0.hdslb.com/bfs/activity-plat/static/20220608/e369244d0b14644f5e1a06431e22a4d5/0DFy9BHgwE.gif",
                                    "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d7e624d13d3e134251e4174a7318c19a8edbd71.png",
                                    "img_label_uri_hant": "",
                                    "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/uckjAv3Npy.png",
                                    "label_theme": "annual_vip",
                                    "path": "",
                                    "text": "年度大会员",
                                    "text_color": "#FFFFFF",
                                    "use_img_label": true
                                },
                                "nickname_color": "#FB7299",
                                "status": 1,
                                "theme_type": 0,
                                "type": 2
                            }
                        },
                        "module_dynamic": {
                            "additional": null,
                            "desc": {
                                "rich_text_nodes": [
                                    {
                                        "orig_text": "​互动抽奖",
                                        "text": "​互动抽奖",
                                        "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                    },
                                    {
                                        "jump_url": "//search.bilibili.com/all?keyword=%23%E8%BD%AC%E5%8F%91%E6%8A%BD%E5%A5%96%23",
                                        "orig_text": "#转发抽奖#",
                                        "text": "#转发抽奖#",
                                        "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                                    },
                                    {
                                        "jump_url": "//search.bilibili.com/all?keyword=%23PC%E7%A1%AC%E4%BB%B6%23",
                                        "orig_text": "#PC硬件#",
                                        "text": "#PC硬件#",
                                        "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                                    },
                                    {
                                        "jump_url": "//search.bilibili.com/all?keyword=%23%E6%97%A7%E8%B4%A7%E6%B8%85%E7%90%86%E8%AE%A1%E5%88%92%23",
                                        "orig_text": "#旧货清理计划#",
                                        "text": "#旧货清理计划#",
                                        "type": "RICH_TEXT_NODE_TYPE_TOPIC"
                                    },
                                    {
                                        "orig_text": " 很久以前购入然后一直沒用上的SSD一枚 型号：PX-G512M6e ",
                                        "text": " 很久以前购入然后一直沒用上的SSD一枚 型号：PX-G512M6e ",
                                        "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                    },
                                    {
                                        "emoji": {
                                            "icon_url": "http://i0.hdslb.com/bfs/emote/6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png",
                                            "size": 1,
                                            "text": "[tv_doge]",
                                            "type": 1
                                        },
                                        "orig_text": "[tv_doge]",
                                        "text": "[tv_doge]",
                                        "type": "RICH_TEXT_NODE_TYPE_EMOJI"
                                    },
                                    {
                                        "orig_text": " 关注并转发抽奖送出",
                                        "text": " 关注并转发抽奖送出",
                                        "type": "RICH_TEXT_NODE_TYPE_TEXT"
                                    }
                                ],
                                "text": "​互动抽奖#转发抽奖##PC硬件##旧货清理计划# 很久以前购入然后一直沒用上的SSD一枚 型号：PX-G512M6e [tv_doge] 关注并转发抽奖送出"
                            },
                            "major": {
                                "draw": {
                                    "id": 24303852,
                                    "items": [
                                        {
                                            "height": 1242,
                                            "size": 150.93652,
                                            "src": "https://i0.hdslb.com/bfs/album/cd767602a291a5b7d4deebd8c65ebeeb0dfce1a2.jpg",
                                            "tags": [],
                                            "width": 2688
                                        }
                                    ]
                                },
                                "type": "MAJOR_TYPE_DRAW"
                            },
                            "topic": null
                        }
                    },
                    "type": "DYNAMIC_TYPE_DRAW",
                    "visible": true
                },
                "type": "DYNAMIC_TYPE_FORWARD",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "55",
                    "comment_type": 1,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "55"
                },
                "id_str": 76690937085980,
                "modules": {
                    "module_author": {
                        "face": "http://i0.hdslb.com/bfs/face/34c5b30a990c7ce4a809626d8153fa7895ec7b63.gif",
                        "face_nft": false,
                        "following": null,
                        "jump_url": "//space.bilibili.com/1/dynamic",
                        "label": "",
                        "mid": 1,
                        "name": "bishi",
                        "official_verify": {
                            "desc": "",
                            "type": -1
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "",
                            "image_enhance": "",
                            "image_enhance_frame": "",
                            "name": "",
                            "pid": 0
                        },
                        "pub_action": "投稿了视频",
                        "pub_location_text": "",
                        "pub_time": "2009-07-13",
                        "pub_ts": 1247496094,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 1,
                            "avatar_subscript_url": "",
                            "due_date": 1816099200000,
                            "label": {
                                "bg_color": "#FB7299",
                                "bg_style": 1,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                "label_theme": "annual_vip",
                                "path": "",
                                "text": "年度大会员",
                                "text_color": "#FFFFFF",
                                "use_img_label": true
                            },
                            "nickname_color": "#FB7299",
                            "status": 1,
                            "theme_type": 0,
                            "type": 2
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": null,
                        "major": {
                            "archive": {
                                "aid": "55",
                                "badge": {
                                    "bg_color": "#FB7299",
                                    "color": "#FFFFFF",
                                    "text": "投稿视频"
                                },
                                "bvid": "BV1xx411c7Ug",
                                "cover": "http://i0.hdslb.com/bfs/archive/c392288c19bbdf3762919774bce01c76dc346344.jpg",
                                "desc": "没有听过这首歌的话会是人参的一大遗憾呢..(望天",
                                "disable_preview": 0,
                                "duration_text": "01:38",
                                "jump_url": "//www.bilibili.com/video/BV1xx411c7Ug",
                                "stat": {
                                    "danmaku": "2965",
                                    "play": "116.6万"
                                },
                                "title": "【天哥版】最春哥",
                                "type": 1
                            },
                            "type": "MAJOR_TYPE_ARCHIVE"
                        },
                        "topic": null
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 20434,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 585,
                            "forbidden": false
                        },
                        "like": {
                            "count": 27958,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_AV",
                "visible": true
            },
            {
                "basic": {
                    "comment_id_str": "16",
                    "comment_type": 1,
                    "like_icon": {
                        "action_url": "",
                        "end_url": "",
                        "id": 0,
                        "start_url": ""
                    },
                    "rid_str": "16"
                },
                "id_str": 55783037337604,
                "modules": {
                    "module_author": {
                        "face": "http://i0.hdslb.com/bfs/face/34c5b30a990c7ce4a809626d8153fa7895ec7b63.gif",
                        "face_nft": false,
                        "following": null,
                        "jump_url": "//space.bilibili.com/1/dynamic",
                        "label": "",
                        "mid": 1,
                        "name": "bishi",
                        "official_verify": {
                            "desc": "",
                            "type": -1
                        },
                        "pendant": {
                            "expire": 0,
                            "image": "",
                            "image_enhance": "",
                            "image_enhance_frame": "",
                            "name": "",
                            "pid": 0
                        },
                        "pub_action": "投稿了视频",
                        "pub_location_text": "",
                        "pub_time": "2009-07-09",
                        "pub_ts": 1247073333,
                        "type": "AUTHOR_TYPE_NORMAL",
                        "vip": {
                            "avatar_subscript": 1,
                            "avatar_subscript_url": "",
                            "due_date": 1816099200000,
                            "label": {
                                "bg_color": "#FB7299",
                                "bg_style": 1,
                                "border_color": "",
                                "img_label_uri_hans": "",
                                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                                "img_label_uri_hant": "",
                                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png",
                                "label_theme": "annual_vip",
                                "path": "",
                                "text": "年度大会员",
                                "text_color": "#FFFFFF",
                                "use_img_label": true
                            },
                            "nickname_color": "#FB7299",
                            "status": 1,
                            "theme_type": 0,
                            "type": 2
                        }
                    },
                    "module_dynamic": {
                        "additional": null,
                        "desc": null,
                        "major": {
                            "archive": {
                                "aid": "16",
                                "badge": {
                                    "bg_color": "#FB7299",
                                    "color": "#FFFFFF",
                                    "text": "投稿视频"
                                },
                                "bvid": "BV1xx411c7mi",
                                "cover": "http://i1.hdslb.com/bfs/archive/ef521697c031bd2b0aab5c8aab3abe1ea0ca63b9.jpg",
                                "desc": "CRUCIS FATAL FAKE : Fate Stay Night的同人格斗游戏. MV制作 : yaomenghua 天下格斗之同人堂",
                                "disable_preview": 0,
                                "duration_text": "09:43",
                                "jump_url": "//www.bilibili.com/video/BV1xx411c7mi",
                                "stat": {
                                    "danmaku": "6205",
                                    "play": "141.8万"
                                },
                                "title": "【FATE相关】CRUCIS FATAL FAKE MV 《Faker》",
                                "type": 1
                            },
                            "type": "MAJOR_TYPE_ARCHIVE"
                        },
                        "topic": null
                    },
                    "module_more": {
                        "three_point_items": [
                            {
                                "label": "举报",
                                "type": "THREE_POINT_REPORT"
                            }
                        ]
                    },
                    "module_stat": {
                        "comment": {
                            "count": 13354,
                            "forbidden": false
                        },
                        "forward": {
                            "count": 473,
                            "forbidden": false
                        },
                        "like": {
                            "count": 39657,
                            "forbidden": false,
                            "status": false
                        }
                    }
                },
                "type": "DYNAMIC_TYPE_AV",
                "visible": true
            }
        ],
        "offset": "",
        "update_baseline": "",
        "update_num": 0
    }
}
```

</details>