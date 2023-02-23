# 动态基本信息

## 动态转发列表

> https://api.vc.bilibili.com/dynamic_repost/v1/dynamic_repost/repost_detail

请求方式：GET

==Attention:  转发列表总计超过550部分继续获取可能被限制。==

**url参数：**

|   参数名   | 类型 |  内容  | 必要性 | 备注 |
| :--------: | :--: | :----: | :----: | :--: |
| dynamic_id |  id  | 动态id |  必要  |      |
|   offset   |  -   |   -    | 非必要 |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注     |
| ------- | ---- | -------- | -------- |
| code    | num  | 返回值   | 0：成功  |
| data    | obj  | 信息本体 |          |
| message | str  | 错误信息 | 默认为空 |
| msg     | num  | 空       |          |

`data`对象：

| 字段     | 类型 | 内容           | 备注         |
| -------- | ---- | -------------- | ------------ |
| has_more | bool | 是否还有下一页 | 每页最多20条 |
| total    | int  | 总计包含       | 不超过20条   |
| _gt_     | num  | 0              | 作用尚不明确 |

`data`中的`items`对象：

由于参数过多，这里不一一列举，请自行参阅其他文件理解。

**示例：**

获取`哔哩哔哩弹幕网`的动态id为`669016644742283288`动态

```shell
curl -G 'https://api.vc.bilibili.com/dynamic_repost/v1/dynamic_repost/repost_detail' \
--data-urlencode 'dynamic_id=669016644742283288'
```

<details>
<summary>查看响应示例</summary>

```json
{
    "code": 0,
    "msg": "",
    "message": "",
    "data": {
        "has_more": 0,
        "total": 3,
        "items": [
            {
                "desc": {
                    "uid": 478909651,
                    "type": 1,
                    "rid": 669023160171702063,
                    "acl": 0,
                    "view": 0,
                    "repost": 0,
                    "like": 0,
                    "is_liked": 0,
                    "dynamic_id": 669023160201379864,
                    "timestamp": 1654607493,
                    "pre_dy_id": 669016644742283288,
                    "orig_dy_id": 669007814298959974,
                    "orig_type": 2,
                    "user_profile": {
                        "info": {
                            "uid": 478909651,
                            "uname": "-牛马之玉",
                            "face": "http://i0.hdslb.com/bfs/face/member/noface.jpg",
                            "face_nft": 0
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
                            "vipStatus": 0,
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
                            "nickname_color": "",
                            "role": 0,
                            "avatar_subscript_url": ""
                        },
                        "pendant": {
                            "pid": 0,
                            "name": "",
                            "image": "",
                            "expire": 0,
                            "image_enhance": "",
                            "image_enhance_frame": ""
                        },
                        "rank": "10000",
                        "sign": "",
                        "level_info": {
                            "current_level": 2
                        }
                    },
                    "uid_type": 1,
                    "stype": 0,
                    "r_type": 1,
                    "inner_id": 0,
                    "status": 1,
                    "dynamic_id_str": "669023160201379864",
                    "pre_dy_id_str": "669016644742283288",
                    "orig_dy_id_str": "669007814298959974",
                    "rid_str": "669023160171702063",
                    "origin": {
                        "uid": 392836434,
                        "type": 2,
                        "rid": 196658860,
                        "acl": 1024,
                        "view": 46111,
                        "repost": 1446,
                        "like": 0,
                        "dynamic_id": 669007814298959974,
                        "timestamp": 1654603920,
                        "pre_dy_id": 0,
                        "orig_dy_id": 0,
                        "uid_type": 1,
                        "stype": 0,
                        "r_type": 0,
                        "inner_id": 0,
                        "status": 1,
                        "dynamic_id_str": "669007814298959974",
                        "pre_dy_id_str": "0",
                        "orig_dy_id_str": "0",
                        "rid_str": "196658860"
                    },
                    "previous": {
                        "uid": 9617619,
                        "type": 1,
                        "rid": 669016644698939384,
                        "acl": 1024,
                        "view": 1381,
                        "repost": 3,
                        "like": 0,
                        "dynamic_id": 669016644742283288,
                        "timestamp": 1654605976,
                        "pre_dy_id": 669007814298959974,
                        "orig_dy_id": 669007814298959974,
                        "uid_type": 1,
                        "stype": 0,
                        "r_type": 1,
                        "inner_id": 0,
                        "status": 1,
                        "dynamic_id_str": "669016644742283288",
                        "pre_dy_id_str": "669007814298959974",
                        "orig_dy_id_str": "669007814298959974",
                        "rid_str": "669016644698939384"
                    }
                },
                "card": "{ \"user\": { \"uid\": 478909651, \"uname\": \"-牛马之玉\", \"face\": \"http:\\/\\/i0.hdslb.com\\/bfs\\/face\\/member\\/noface.jpg\" }, \"item\": { \"rp_id\": 669023160171702063, \"uid\": 478909651, \"content\": \"\\/\\/@哔哩哔哩直播:6月8日KPL首届夏季赛火热开赛，明星主播花式解说！开赛首日直播间礼品...\", \"ctrl\": \"[{\\\"location\\\":2,\\\"length\\\":7,\\\"data\\\":\\\"9617619\\\",\\\"type\\\":1}]\", \"orig_dy_id\": 669007814298959974, \"pre_dy_id\": 669016644742283288, \"timestamp\": 0, \"at_uids\": [ 9617619 ], \"orig_type\": 2 }, \"origin\": \"{\\\"item\\\":{\\\"at_control\\\":\\\"[{\\\\\\\"location\\\\\\\":0,\\\\\\\"length\\\\\\\":4,\\\\\\\"data\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"type\\\\\\\":2}]\\\",\\\"category\\\":\\\"daily\\\",\\\"description\\\":\\\"互动抽奖 【上B站，看KPL】\\\\r\\\\nKPL首届夏季赛即将来袭，6月8日15:00B站55官方直播间等你来看！你最期待哪场对决呢？更有多位明星主播陪你观赛，趣味吐槽花式解说开赛首日~\\\\r\\\\n\\\\r\\\\n55直播间马超-无双飞将皮肤助力金撒不停，赛事全程天选好礼每局掉落，观赛还能领取游戏内道具！APP端参与直播间【热议】讨论，更有机会获超多奖励。\\\\r\\\\n\\\\r\\\\nKPL赛事征稿开赛日同步上线，带#KPL激励计划#话题投稿，瓜分30万奖金~\\\\r\\\\n战火将燃，谁将勇夺开门红，让我们拭目以待！ [打call]\\\\n\\\\n直播间TP：https:\\\\\\/\\\\\\/live.bilibili.com\\\\\\/55 \\\\n赛事预测：https:\\\\\\/\\\\\\/www.bilibili.com\\\\\\/v\\\\\\/game\\\\\\/match\\\\\\/competition?spm_id_from=444.42.0.0 \\\\n更多比赛：https:\\\\\\/\\\\\\/www.bilibili.com\\\\\\/v\\\\\\/game\\\\\\/match\\\\\\/schedule?mid=0&gid=0&tid=0&time=1639785600000&spm_id_from=444.42.0.0\\\",\\\"id\\\":196658860,\\\"is_fav\\\":0,\\\"pictures\\\":[{\\\"img_height\\\":6758,\\\"img_size\\\":4693.3251953125,\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/d4fd33fe00c80938daf6f14641f15901bc4a0d17.jpg\\\",\\\"img_tags\\\":null,\\\"img_width\\\":1080}],\\\"pictures_count\\\":1,\\\"reply\\\":128,\\\"role\\\":[],\\\"settings\\\":{\\\"copy_forbidden\\\":\\\"0\\\"},\\\"source\\\":[],\\\"title\\\":\\\"\\\",\\\"upload_time\\\":1654603920},\\\"user\\\":{\\\"head_url\\\":\\\"http:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/face\\\\\\/50de7906e50260c0e596d54ca51687e58ed7a9ba.jpg\\\",\\\"name\\\":\\\"哔哩哔哩王者荣耀赛事\\\",\\\"uid\\\":392836434,\\\"vip\\\":{\\\"avatar_subscript\\\":1,\\\"due_date\\\":1661097600000,\\\"label\\\":{\\\"label_theme\\\":\\\"annual_vip\\\",\\\"path\\\":\\\"\\\",\\\"text\\\":\\\"年度大会员\\\"},\\\"nickname_color\\\":\\\"#FB7299\\\",\\\"status\\\":1,\\\"theme_type\\\":0,\\\"type\\\":2,\\\"vip_pay_type\\\":0}}}\", \"origin_extension\": { \"lott\": \"{\\\"lottery_id\\\":96074}\" }, \"origin_extend_json\": \"{\\\"ctrl\\\":[{\\\"data\\\":\\\"4\\\",\\\"length\\\":4,\\\"location\\\":0,\\\"type\\\":2}],\\\"from\\\":{\\\"emoji_type\\\":1,\\\"from\\\":\\\"create.dynamic.web\\\",\\\"verify\\\":{\\\"aegis_enable\\\":true,\\\"asw\\\":{},\\\"cc\\\":{},\\\"csw\\\":{},\\\"dc\\\":{},\\\"gc\\\":{},\\\"ra\\\":{},\\\"sp\\\":{},\\\"sw\\\":{},\\\"ur\\\":{},\\\"verify_first\\\":true}},\\\"like_icon\\\":{\\\"action\\\":\\\"\\\",\\\"action_url\\\":\\\"\\\",\\\"end\\\":\\\"\\\",\\\"end_url\\\":\\\"\\\",\\\"start\\\":\\\"\\\",\\\"start_url\\\":\\\"\\\"},\\\"lott\\\":{\\\"lottery_id\\\":96074},\\\"topic\\\":{\\\"is_attach_topic\\\":1}}\", \"origin_user\": { \"info\": { \"uid\": 392836434, \"uname\": \"哔哩哔哩王者荣耀赛事\", \"face\": \"http:\\/\\/i0.hdslb.com\\/bfs\\/face\\/50de7906e50260c0e596d54ca51687e58ed7a9ba.jpg\", \"face_nft\": 0 }, \"card\": { \"official_verify\": { \"type\": 1, \"desc\": \"哔哩哔哩王者荣耀赛事官方帐号\" } }, \"vip\": { \"vipType\": 2, \"vipDueDate\": 1661097600000, \"vipStatus\": 1, \"themeType\": 0, \"label\": { \"path\": \"\", \"text\": \"年度大会员\", \"label_theme\": \"annual_vip\", \"text_color\": \"#FFFFFF\", \"bg_style\": 1, \"bg_color\": \"#FB7299\", \"border_color\": \"\" }, \"avatar_subscript\": 1, \"nickname_color\": \"#FB7299\", \"role\": 3, \"avatar_subscript_url\": \"http:\\/\\/i0.hdslb.com\\/bfs\\/vip\\/icon_Certification_big_member_22_3x.png\" }, \"pendant\": { \"pid\": 0, \"name\": \"\", \"image\": \"\", \"expire\": 0, \"image_enhance\": \"\", \"image_enhance_frame\": \"\" }, \"rank\": \"10000\", \"sign\": \"哔哩哔哩王者荣耀赛事官方账号\", \"level_info\": { \"current_level\": 6 } } }",
                "extend_json": "{\"\":{\"at_mids\":[{\"at_type\":2,\"mid_list\":[9617619]}],\"content\":\"\\/\\/@哔哩哔哩直播:6月8日KPL首届夏季赛火热开赛，明星主播花式解说！开赛首日直播间礼品...\",\"data_type\":2,\"need_send_msg\":true,\"publisher\":478909651},\"ctrl\":[{\"data\":\"9617619\",\"length\":7,\"location\":2,\"type\":1}],\"from\":{\"emoji_type\":1,\"from\":\"create.fast_repost\",\"verify\":{\"aegis_enable\":true,\"asw\":{},\"cc\":{},\"csw\":{},\"dc\":{},\"gc\":{},\"ra\":{},\"sp\":{},\"sw\":{},\"ur\":{}}},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"}}",
                "display": {
                    "origin": {
                        "emoji_info": {
                            "emoji_details": [
                                {
                                    "emoji_name": "[打call]",
                                    "id": 510,
                                    "package_id": 1,
                                    "state": 0,
                                    "type": 1,
                                    "attr": 0,
                                    "text": "[打call]",
                                    "url": "http://i0.hdslb.com/bfs/emote/431432c43da3ee5aab5b0e4f8931953e649e9975.png",
                                    "meta": {
                                        "size": 1
                                    },
                                    "mtime": 1648834168
                                }
                            ]
                        },
                        "relation": {
                            "status": 1,
                            "is_follow": 0,
                            "is_followed": 0
                        }
                    },
                    "relation": {
                        "status": 1,
                        "is_follow": 0,
                        "is_followed": 0
                    }
                }
            },
            {
                "desc": {
                    "uid": 37906788,
                    "type": 1,
                    "rid": 669022472968542526,
                    "acl": 0,
                    "view": 0,
                    "repost": 0,
                    "like": 0,
                    "is_liked": 0,
                    "dynamic_id": 669022473022341136,
                    "timestamp": 1654607333,
                    "pre_dy_id": 669016644742283288,
                    "orig_dy_id": 669007814298959974,
                    "orig_type": 2,
                    "user_profile": {
                        "info": {
                            "uid": 37906788,
                            "uname": "整天就想吃桃子",
                            "face": "http://i0.hdslb.com/bfs/face/388f29bb0e426d625378b99eec690775467ebb00.jpg",
                            "face_nft": 0
                        },
                        "card": {
                            "official_verify": {
                                "type": -1,
                                "desc": ""
                            }
                        },
                        "vip": {
                            "vipType": 2,
                            "vipDueDate": 1712073600000,
                            "vipStatus": 1,
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
                            "nickname_color": "#FB7299",
                            "role": 3,
                            "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
                        },
                        "pendant": {
                            "pid": 0,
                            "name": "",
                            "image": "",
                            "expire": 0,
                            "image_enhance": "",
                            "image_enhance_frame": ""
                        },
                        "rank": "10000",
                        "sign": "",
                        "level_info": {
                            "current_level": 5
                        }
                    },
                    "uid_type": 1,
                    "stype": 0,
                    "r_type": 1,
                    "inner_id": 0,
                    "status": 1,
                    "dynamic_id_str": "669022473022341136",
                    "pre_dy_id_str": "669016644742283288",
                    "orig_dy_id_str": "669007814298959974",
                    "rid_str": "669022472968542526",
                    "origin": {
                        "uid": 392836434,
                        "type": 2,
                        "rid": 196658860,
                        "acl": 1024,
                        "view": 46111,
                        "repost": 1446,
                        "like": 0,
                        "dynamic_id": 669007814298959974,
                        "timestamp": 1654603920,
                        "pre_dy_id": 0,
                        "orig_dy_id": 0,
                        "uid_type": 1,
                        "stype": 0,
                        "r_type": 0,
                        "inner_id": 0,
                        "status": 1,
                        "dynamic_id_str": "669007814298959974",
                        "pre_dy_id_str": "0",
                        "orig_dy_id_str": "0",
                        "rid_str": "196658860"
                    },
                    "previous": {
                        "uid": 9617619,
                        "type": 1,
                        "rid": 669016644698939384,
                        "acl": 1024,
                        "view": 1381,
                        "repost": 3,
                        "like": 0,
                        "dynamic_id": 669016644742283288,
                        "timestamp": 1654605976,
                        "pre_dy_id": 669007814298959974,
                        "orig_dy_id": 669007814298959974,
                        "uid_type": 1,
                        "stype": 0,
                        "r_type": 1,
                        "inner_id": 0,
                        "status": 1,
                        "dynamic_id_str": "669016644742283288",
                        "pre_dy_id_str": "669007814298959974",
                        "orig_dy_id_str": "669007814298959974",
                        "rid_str": "669016644698939384"
                    }
                },
                "card": "{ \"user\": { \"uid\": 37906788, \"uname\": \"整天就想吃桃子\", \"face\": \"http:\\/\\/i0.hdslb.com\\/bfs\\/face\\/388f29bb0e426d625378b99eec690775467ebb00.jpg\" }, \"item\": { \"rp_id\": 669022472968542526, \"uid\": 37906788, \"content\": \"\\/\\/@哔哩哔哩直播:6月8日KPL首届夏季赛火热开赛，明星主播花式解说！开赛首日直播间礼品不定时掉...\", \"ctrl\": \"[{\\\"location\\\":2,\\\"length\\\":7,\\\"data\\\":\\\"9617619\\\",\\\"type\\\":1}]\", \"orig_dy_id\": 669007814298959974, \"pre_dy_id\": 669016644742283288, \"timestamp\": 0, \"at_uids\": [ 9617619 ], \"orig_type\": 2 }, \"origin\": \"{\\\"item\\\":{\\\"at_control\\\":\\\"[{\\\\\\\"location\\\\\\\":0,\\\\\\\"length\\\\\\\":4,\\\\\\\"data\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"type\\\\\\\":2}]\\\",\\\"category\\\":\\\"daily\\\",\\\"description\\\":\\\"互动抽奖 【上B站，看KPL】\\\\r\\\\nKPL首届夏季赛即将来袭，6月8日15:00B站55官方直播间等你来看！你最期待哪场对决呢？更有多位明星主播陪你观赛，趣味吐槽花式解说开赛首日~\\\\r\\\\n\\\\r\\\\n55直播间马超-无双飞将皮肤助力金撒不停，赛事全程天选好礼每局掉落，观赛还能领取游戏内道具！APP端参与直播间【热议】讨论，更有机会获超多奖励。\\\\r\\\\n\\\\r\\\\nKPL赛事征稿开赛日同步上线，带#KPL激励计划#话题投稿，瓜分30万奖金~\\\\r\\\\n战火将燃，谁将勇夺开门红，让我们拭目以待！ [打call]\\\\n\\\\n直播间TP：https:\\\\\\/\\\\\\/live.bilibili.com\\\\\\/55 \\\\n赛事预测：https:\\\\\\/\\\\\\/www.bilibili.com\\\\\\/v\\\\\\/game\\\\\\/match\\\\\\/competition?spm_id_from=444.42.0.0 \\\\n更多比赛：https:\\\\\\/\\\\\\/www.bilibili.com\\\\\\/v\\\\\\/game\\\\\\/match\\\\\\/schedule?mid=0&gid=0&tid=0&time=1639785600000&spm_id_from=444.42.0.0\\\",\\\"id\\\":196658860,\\\"is_fav\\\":0,\\\"pictures\\\":[{\\\"img_height\\\":6758,\\\"img_size\\\":4693.3251953125,\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/d4fd33fe00c80938daf6f14641f15901bc4a0d17.jpg\\\",\\\"img_tags\\\":null,\\\"img_width\\\":1080}],\\\"pictures_count\\\":1,\\\"reply\\\":128,\\\"role\\\":[],\\\"settings\\\":{\\\"copy_forbidden\\\":\\\"0\\\"},\\\"source\\\":[],\\\"title\\\":\\\"\\\",\\\"upload_time\\\":1654603920},\\\"user\\\":{\\\"head_url\\\":\\\"http:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/face\\\\\\/50de7906e50260c0e596d54ca51687e58ed7a9ba.jpg\\\",\\\"name\\\":\\\"哔哩哔哩王者荣耀赛事\\\",\\\"uid\\\":392836434,\\\"vip\\\":{\\\"avatar_subscript\\\":1,\\\"due_date\\\":1661097600000,\\\"label\\\":{\\\"label_theme\\\":\\\"annual_vip\\\",\\\"path\\\":\\\"\\\",\\\"text\\\":\\\"年度大会员\\\"},\\\"nickname_color\\\":\\\"#FB7299\\\",\\\"status\\\":1,\\\"theme_type\\\":0,\\\"type\\\":2,\\\"vip_pay_type\\\":0}}}\", \"origin_extension\": { \"lott\": \"{\\\"lottery_id\\\":96074}\" }, \"origin_extend_json\": \"{\\\"ctrl\\\":[{\\\"data\\\":\\\"4\\\",\\\"length\\\":4,\\\"location\\\":0,\\\"type\\\":2}],\\\"from\\\":{\\\"emoji_type\\\":1,\\\"from\\\":\\\"create.dynamic.web\\\",\\\"verify\\\":{\\\"aegis_enable\\\":true,\\\"asw\\\":{},\\\"cc\\\":{},\\\"csw\\\":{},\\\"dc\\\":{},\\\"gc\\\":{},\\\"ra\\\":{},\\\"sp\\\":{},\\\"sw\\\":{},\\\"ur\\\":{},\\\"verify_first\\\":true}},\\\"like_icon\\\":{\\\"action\\\":\\\"\\\",\\\"action_url\\\":\\\"\\\",\\\"end\\\":\\\"\\\",\\\"end_url\\\":\\\"\\\",\\\"start\\\":\\\"\\\",\\\"start_url\\\":\\\"\\\"},\\\"lott\\\":{\\\"lottery_id\\\":96074},\\\"topic\\\":{\\\"is_attach_topic\\\":1}}\", \"origin_user\": { \"info\": { \"uid\": 392836434, \"uname\": \"哔哩哔哩王者荣耀赛事\", \"face\": \"http:\\/\\/i0.hdslb.com\\/bfs\\/face\\/50de7906e50260c0e596d54ca51687e58ed7a9ba.jpg\", \"face_nft\": 0 }, \"card\": { \"official_verify\": { \"type\": 1, \"desc\": \"哔哩哔哩王者荣耀赛事官方帐号\" } }, \"vip\": { \"vipType\": 2, \"vipDueDate\": 1661097600000, \"vipStatus\": 1, \"themeType\": 0, \"label\": { \"path\": \"\", \"text\": \"年度大会员\", \"label_theme\": \"annual_vip\", \"text_color\": \"#FFFFFF\", \"bg_style\": 1, \"bg_color\": \"#FB7299\", \"border_color\": \"\" }, \"avatar_subscript\": 1, \"nickname_color\": \"#FB7299\", \"role\": 3, \"avatar_subscript_url\": \"http:\\/\\/i0.hdslb.com\\/bfs\\/vip\\/icon_Certification_big_member_22_3x.png\" }, \"pendant\": { \"pid\": 0, \"name\": \"\", \"image\": \"\", \"expire\": 0, \"image_enhance\": \"\", \"image_enhance_frame\": \"\" }, \"rank\": \"10000\", \"sign\": \"哔哩哔哩王者荣耀赛事官方账号\", \"level_info\": { \"current_level\": 6 } } }",
                "extend_json": "{\"\":{\"at_mids\":[{\"at_type\":2,\"mid_list\":[9617619]}],\"content\":\"\\/\\/@哔哩哔哩直播:6月8日KPL首届夏季赛火热开赛，明星主播花式解说！开赛首日直播间礼品不定时掉...\",\"data_type\":2,\"need_send_msg\":true,\"publisher\":37906788},\"ctrl\":[{\"data\":\"9617619\",\"length\":7,\"location\":2,\"type\":1}],\"from\":{\"emoji_type\":1,\"from\":\"create.fast_repost\",\"verify\":{\"aegis_enable\":true,\"asw\":{},\"cc\":{},\"csw\":{},\"dc\":{},\"gc\":{},\"ra\":{},\"sp\":{},\"sw\":{},\"ur\":{}}},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"}}",
                "display": {
                    "origin": {
                        "emoji_info": {
                            "emoji_details": [
                                {
                                    "emoji_name": "[打call]",
                                    "id": 510,
                                    "package_id": 1,
                                    "state": 0,
                                    "type": 1,
                                    "attr": 0,
                                    "text": "[打call]",
                                    "url": "http://i0.hdslb.com/bfs/emote/431432c43da3ee5aab5b0e4f8931953e649e9975.png",
                                    "meta": {
                                        "size": 1
                                    },
                                    "mtime": 1648834168
                                }
                            ]
                        },
                        "relation": {
                            "status": 1,
                            "is_follow": 0,
                            "is_followed": 0
                        }
                    },
                    "relation": {
                        "status": 1,
                        "is_follow": 0,
                        "is_followed": 0
                    }
                }
            },
            {
                "desc": {
                    "uid": 586724890,
                    "type": 1,
                    "rid": 669019754258423810,
                    "acl": 0,
                    "view": 0,
                    "repost": 0,
                    "like": 0,
                    "is_liked": 0,
                    "dynamic_id": 669019754292314181,
                    "timestamp": 1654606700,
                    "pre_dy_id": 669016644742283288,
                    "orig_dy_id": 669007814298959974,
                    "orig_type": 2,
                    "user_profile": {
                        "info": {
                            "uid": 586724890,
                            "uname": "雪羽枭白",
                            "face": "http://i1.hdslb.com/bfs/face/a270f0df9a621d6d7f05a0ff94c64bad5fcb6964.jpg",
                            "face_nft": 0
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
                            "vipStatus": 0,
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
                            "nickname_color": "",
                            "role": 0,
                            "avatar_subscript_url": ""
                        },
                        "pendant": {
                            "pid": 0,
                            "name": "",
                            "image": "",
                            "expire": 0,
                            "image_enhance": "",
                            "image_enhance_frame": ""
                        },
                        "rank": "10000",
                        "sign": "芜湖，起飞～",
                        "level_info": {
                            "current_level": 4
                        }
                    },
                    "uid_type": 1,
                    "stype": 0,
                    "r_type": 1,
                    "inner_id": 0,
                    "status": 1,
                    "dynamic_id_str": "669019754292314181",
                    "pre_dy_id_str": "669016644742283288",
                    "orig_dy_id_str": "669007814298959974",
                    "rid_str": "669019754258423810",
                    "origin": {
                        "uid": 392836434,
                        "type": 2,
                        "rid": 196658860,
                        "acl": 1024,
                        "view": 46111,
                        "repost": 1446,
                        "like": 0,
                        "dynamic_id": 669007814298959974,
                        "timestamp": 1654603920,
                        "pre_dy_id": 0,
                        "orig_dy_id": 0,
                        "uid_type": 1,
                        "stype": 0,
                        "r_type": 0,
                        "inner_id": 0,
                        "status": 1,
                        "dynamic_id_str": "669007814298959974",
                        "pre_dy_id_str": "0",
                        "orig_dy_id_str": "0",
                        "rid_str": "196658860"
                    },
                    "previous": {
                        "uid": 9617619,
                        "type": 1,
                        "rid": 669016644698939384,
                        "acl": 1024,
                        "view": 1381,
                        "repost": 3,
                        "like": 0,
                        "dynamic_id": 669016644742283288,
                        "timestamp": 1654605976,
                        "pre_dy_id": 669007814298959974,
                        "orig_dy_id": 669007814298959974,
                        "uid_type": 1,
                        "stype": 0,
                        "r_type": 1,
                        "inner_id": 0,
                        "status": 1,
                        "dynamic_id_str": "669016644742283288",
                        "pre_dy_id_str": "669007814298959974",
                        "orig_dy_id_str": "669007814298959974",
                        "rid_str": "669016644698939384"
                    }
                },
                "card": "{ \"user\": { \"uid\": 586724890, \"uname\": \"雪羽枭白\", \"face\": \"http:\\/\\/i1.hdslb.com\\/bfs\\/face\\/a270f0df9a621d6d7f05a0ff94c64bad5fcb6964.jpg\" }, \"item\": { \"rp_id\": 669019754258423810, \"uid\": 586724890, \"content\": \"\\/\\/@哔哩哔哩直播:6月8日KPL首届夏季赛火热开赛，明星主播花式解说！开赛首日直播间礼品不定时掉落，记得好好蹲守哦~明天15点，2022KPL夏季赛我们不见不散>>>网页链接\", \"ctrl\": \"[{\\\"location\\\":2,\\\"length\\\":7,\\\"data\\\":\\\"9617619\\\",\\\"type\\\":1}]\", \"orig_dy_id\": 669007814298959974, \"pre_dy_id\": 669016644742283288, \"timestamp\": 0, \"at_uids\": [ 9617619 ], \"orig_type\": 2 }, \"origin\": \"{\\\"item\\\":{\\\"at_control\\\":\\\"[{\\\\\\\"location\\\\\\\":0,\\\\\\\"length\\\\\\\":4,\\\\\\\"data\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"type\\\\\\\":2}]\\\",\\\"category\\\":\\\"daily\\\",\\\"description\\\":\\\"互动抽奖 【上B站，看KPL】\\\\r\\\\nKPL首届夏季赛即将来袭，6月8日15:00B站55官方直播间等你来看！你最期待哪场对决呢？更有多位明星主播陪你观赛，趣味吐槽花式解说开赛首日~\\\\r\\\\n\\\\r\\\\n55直播间马超-无双飞将皮肤助力金撒不停，赛事全程天选好礼每局掉落，观赛还能领取游戏内道具！APP端参与直播间【热议】讨论，更有机会获超多奖励。\\\\r\\\\n\\\\r\\\\nKPL赛事征稿开赛日同步上线，带#KPL激励计划#话题投稿，瓜分30万奖金~\\\\r\\\\n战火将燃，谁将勇夺开门红，让我们拭目以待！ [打call]\\\\n\\\\n直播间TP：https:\\\\\\/\\\\\\/live.bilibili.com\\\\\\/55 \\\\n赛事预测：https:\\\\\\/\\\\\\/www.bilibili.com\\\\\\/v\\\\\\/game\\\\\\/match\\\\\\/competition?spm_id_from=444.42.0.0 \\\\n更多比赛：https:\\\\\\/\\\\\\/www.bilibili.com\\\\\\/v\\\\\\/game\\\\\\/match\\\\\\/schedule?mid=0&gid=0&tid=0&time=1639785600000&spm_id_from=444.42.0.0\\\",\\\"id\\\":196658860,\\\"is_fav\\\":0,\\\"pictures\\\":[{\\\"img_height\\\":6758,\\\"img_size\\\":4693.3251953125,\\\"img_src\\\":\\\"https:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/album\\\\\\/d4fd33fe00c80938daf6f14641f15901bc4a0d17.jpg\\\",\\\"img_tags\\\":null,\\\"img_width\\\":1080}],\\\"pictures_count\\\":1,\\\"reply\\\":128,\\\"role\\\":[],\\\"settings\\\":{\\\"copy_forbidden\\\":\\\"0\\\"},\\\"source\\\":[],\\\"title\\\":\\\"\\\",\\\"upload_time\\\":1654603920},\\\"user\\\":{\\\"head_url\\\":\\\"http:\\\\\\/\\\\\\/i0.hdslb.com\\\\\\/bfs\\\\\\/face\\\\\\/50de7906e50260c0e596d54ca51687e58ed7a9ba.jpg\\\",\\\"name\\\":\\\"哔哩哔哩王者荣耀赛事\\\",\\\"uid\\\":392836434,\\\"vip\\\":{\\\"avatar_subscript\\\":1,\\\"due_date\\\":1661097600000,\\\"label\\\":{\\\"label_theme\\\":\\\"annual_vip\\\",\\\"path\\\":\\\"\\\",\\\"text\\\":\\\"年度大会员\\\"},\\\"nickname_color\\\":\\\"#FB7299\\\",\\\"status\\\":1,\\\"theme_type\\\":0,\\\"type\\\":2,\\\"vip_pay_type\\\":0}}}\", \"origin_extension\": { \"lott\": \"{\\\"lottery_id\\\":96074}\" }, \"origin_extend_json\": \"{\\\"ctrl\\\":[{\\\"data\\\":\\\"4\\\",\\\"length\\\":4,\\\"location\\\":0,\\\"type\\\":2}],\\\"from\\\":{\\\"emoji_type\\\":1,\\\"from\\\":\\\"create.dynamic.web\\\",\\\"verify\\\":{\\\"aegis_enable\\\":true,\\\"asw\\\":{},\\\"cc\\\":{},\\\"csw\\\":{},\\\"dc\\\":{},\\\"gc\\\":{},\\\"ra\\\":{},\\\"sp\\\":{},\\\"sw\\\":{},\\\"ur\\\":{},\\\"verify_first\\\":true}},\\\"like_icon\\\":{\\\"action\\\":\\\"\\\",\\\"action_url\\\":\\\"\\\",\\\"end\\\":\\\"\\\",\\\"end_url\\\":\\\"\\\",\\\"start\\\":\\\"\\\",\\\"start_url\\\":\\\"\\\"},\\\"lott\\\":{\\\"lottery_id\\\":96074},\\\"topic\\\":{\\\"is_attach_topic\\\":1}}\", \"origin_user\": { \"info\": { \"uid\": 392836434, \"uname\": \"哔哩哔哩王者荣耀赛事\", \"face\": \"http:\\/\\/i0.hdslb.com\\/bfs\\/face\\/50de7906e50260c0e596d54ca51687e58ed7a9ba.jpg\", \"face_nft\": 0 }, \"card\": { \"official_verify\": { \"type\": 1, \"desc\": \"哔哩哔哩王者荣耀赛事官方帐号\" } }, \"vip\": { \"vipType\": 2, \"vipDueDate\": 1661097600000, \"vipStatus\": 1, \"themeType\": 0, \"label\": { \"path\": \"\", \"text\": \"年度大会员\", \"label_theme\": \"annual_vip\", \"text_color\": \"#FFFFFF\", \"bg_style\": 1, \"bg_color\": \"#FB7299\", \"border_color\": \"\" }, \"avatar_subscript\": 1, \"nickname_color\": \"#FB7299\", \"role\": 3, \"avatar_subscript_url\": \"http:\\/\\/i0.hdslb.com\\/bfs\\/vip\\/icon_Certification_big_member_22_3x.png\" }, \"pendant\": { \"pid\": 0, \"name\": \"\", \"image\": \"\", \"expire\": 0, \"image_enhance\": \"\", \"image_enhance_frame\": \"\" }, \"rank\": \"10000\", \"sign\": \"哔哩哔哩王者荣耀赛事官方账号\", \"level_info\": { \"current_level\": 6 } } }",
                "extend_json": "{\"\":{\"at_mids\":[{\"at_type\":2,\"mid_list\":[9617619]}],\"content\":\"\\/\\/@哔哩哔哩直播:6月8日KPL首届夏季赛火热开赛，明星主播花式解说！开赛首日直播间礼品不定时掉落，记得好好蹲守哦~明天15点，2022KPL夏季赛我们不见不散>>>网页链接\",\"data_type\":2,\"need_send_msg\":true,\"publisher\":586724890},\"ctrl\":[{\"data\":\"9617619\",\"length\":7,\"location\":2,\"type\":1}],\"from\":{\"emoji_type\":1,\"from\":\"create.dynamic.web\",\"verify\":{\"aegis_enable\":true,\"asw\":{},\"cc\":{},\"csw\":{},\"dc\":{},\"gc\":{},\"ra\":{},\"sp\":{},\"sw\":{},\"ur\":{}}},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"}}",
                "display": {
                    "origin": {
                        "emoji_info": {
                            "emoji_details": [
                                {
                                    "emoji_name": "[打call]",
                                    "id": 510,
                                    "package_id": 1,
                                    "state": 0,
                                    "type": 1,
                                    "attr": 0,
                                    "text": "[打call]",
                                    "url": "http://i0.hdslb.com/bfs/emote/431432c43da3ee5aab5b0e4f8931953e649e9975.png",
                                    "meta": {
                                        "size": 1
                                    },
                                    "mtime": 1648834168
                                }
                            ]
                        },
                        "relation": {
                            "status": 1,
                            "is_follow": 0,
                            "is_followed": 0
                        }
                    },
                    "relation": {
                        "status": 1,
                        "is_follow": 0,
                        "is_followed": 0
                    }
                }
            }
        ],
        "_gt_": 0
    }
}
```
</details>


## 动态点赞列表

> https://api.vc.bilibili.com/dynamic_like/v1/dynamic_like/spec_item_likes

请求方式：GET

==Attention:  点赞列表总计超过25K部分继续获取可能被限制。==

**url参数：**

|   参数名   | 类型 |  内容  | 必要性 | 备注 |
| ----------- | ---- | ------ | ------- | ---- |
|dynamic_id|int64 | 动态id | 必须 | |
|pn|int64 | 页码 | 非必须 | |
|ps|int64 | 每页数量 | 非必须 |该值不得大于20 |

**json回复：**
根对象：

| 字段    | 类型 | 内容     | 备注     |
| ------- | ---- | -------- | -------- |
| code    | num  | 返回值   | 0：成功  |
| data    | obj  | 信息本体 |          |
| message | str  | 错误信息 | 默认为空 |
| msg     | num  | 空       |          |

`data`对象：

| 字段     | 类型 | 用途           | 备注         |
| -------- | ---- | -------------- | ------------ |
|item_likes|list |点赞信息列表主体 |              |
| has_more | bool | 是否还有下一页 | 每页最多20条 |
| total_count    | int  | 总计点赞数       |    |
| _gt_     | num  | 0              | 作用尚不明确 |

`data`中的`item_likes`对象：

由于参数过多，这里不一一列举，请自行参阅其他文件理解。

**示例：**

获取`哔哩哔哩弹幕网`的动态id为`669016644742283288`动态
```shell
curl -G 'https://api.vc.bilibili.com/dynamic_like/v1/dynamic_like/spec_item_likes' \
--data-urlencode 'dynamic_id=669016644742283288'
```

<details>
<summary>查看响应示例</summary>

```json
{
    "code": 0,
    "msg": "",
    "message": "",
    "data": {
        "item_likes": [
            {
                "uid": 660169578,
                "time": 1654946013,
                "face_url": "http://i0.hdslb.com/bfs/face/346ce28e99cc0a7d9cc05b0c0951957445cbcb61.jpg",
                "uname": "空蓝奇观",
                "user_info": {
                    "uid": 660169578,
                    "uname": "空蓝奇观",
                    "face": "http://i0.hdslb.com/bfs/face/346ce28e99cc0a7d9cc05b0c0951957445cbcb61.jpg",
                    "rank": "10000",
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 1,
                        "vipDueDate": 1656604800000,
                        "vipStatus": 1,
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
                        "nickname_color": "",
                        "role": 1,
                        "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": "",
                        "image_enhance_frame": ""
                    },
                    "sign": "。。。",
                    "level_info": {
                        "current_level": 4
                    }
                },
                "attend": 0
            },
            {
                "uid": 522318130,
                "time": 1654901839,
                "face_url": "http://i1.hdslb.com/bfs/face/3159660d82bf0ffc878265cd11f7bb55122848a8.jpg",
                "uname": "114514号饼干机器人",
                "user_info": {
                    "uid": 522318130,
                    "uname": "114514号饼干机器人",
                    "face": "http://i1.hdslb.com/bfs/face/3159660d82bf0ffc878265cd11f7bb55122848a8.jpg",
                    "rank": "10000",
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 1,
                        "vipDueDate": 1655740800000,
                        "vipStatus": 1,
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
                        "nickname_color": "",
                        "role": 1,
                        "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": "",
                        "image_enhance_frame": ""
                    },
                    "sign": "",
                    "level_info": {
                        "current_level": 4
                    }
                },
                "attend": 0
            },
            {
                "uid": 473098535,
                "time": 1654874055,
                "face_url": "http://i2.hdslb.com/bfs/face/ae37c4c8a7512322186eaf1c1cb170362c604215.jpg",
                "uname": "花式送人头的感觉",
                "user_info": {
                    "uid": 473098535,
                    "uname": "花式送人头的感觉",
                    "face": "http://i2.hdslb.com/bfs/face/ae37c4c8a7512322186eaf1c1cb170362c604215.jpg",
                    "rank": "10000",
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 1,
                        "vipDueDate": 1626451200000,
                        "vipStatus": 0,
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
                        "nickname_color": "",
                        "role": 0,
                        "avatar_subscript_url": ""
                    },
                    "pendant": {
                        "pid": 32446,
                        "name": "EDG战队",
                        "image": "http://i2.hdslb.com/bfs/garb/item/422c8bd354989845bd9ed64bd00cfa1048e92580.png",
                        "expire": 0,
                        "image_enhance": "http://i2.hdslb.com/bfs/garb/item/422c8bd354989845bd9ed64bd00cfa1048e92580.png",
                        "image_enhance_frame": ""
                    },
                    "sign": "",
                    "level_info": {
                        "current_level": 4
                    }
                },
                "attend": 0
            },
            {
                "uid": 297957406,
                "time": 1654870870,
                "face_url": "http://i1.hdslb.com/bfs/face/c28b431177fa6faffc4b928b9506a7057f002f73.jpg",
                "uname": "冷水ensq",
                "user_info": {
                    "uid": 297957406,
                    "uname": "冷水ensq",
                    "face": "http://i1.hdslb.com/bfs/face/c28b431177fa6faffc4b928b9506a7057f002f73.jpg",
                    "rank": "10000",
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1657036800000,
                        "vipStatus": 1,
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
                        "nickname_color": "#FB7299",
                        "role": 3,
                        "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": "",
                        "image_enhance_frame": ""
                    },
                    "sign": "这个人很神秘，只写了这么点东西",
                    "level_info": {
                        "current_level": 5
                    }
                },
                "attend": 0
            },
            {
                "uid": 384080149,
                "time": 1654869742,
                "face_url": "http://i1.hdslb.com/bfs/face/74efb9ca3fc68679cb3ddbf331ceffc246f13929.jpg",
                "uname": "嵇獬",
                "user_info": {
                    "uid": 384080149,
                    "uname": "嵇獬",
                    "face": "http://i1.hdslb.com/bfs/face/74efb9ca3fc68679cb3ddbf331ceffc246f13929.jpg",
                    "rank": "10000",
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 1,
                        "vipDueDate": 1583942400000,
                        "vipStatus": 0,
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
                        "nickname_color": "",
                        "role": 0,
                        "avatar_subscript_url": ""
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": "",
                        "image_enhance_frame": ""
                    },
                    "sign": "这个人很懒，也不知道写什么\n我会一直做自己",
                    "level_info": {
                        "current_level": 5
                    }
                },
                "attend": 0
            },
            {
                "uid": 666484726,
                "time": 1654867375,
                "face_url": "http://i1.hdslb.com/bfs/face/8e7c02c5d98d8ee52d0643227aed59b4fca1420d.jpg",
                "uname": "未未成年累月",
                "user_info": {
                    "uid": 666484726,
                    "uname": "未未成年累月",
                    "face": "http://i1.hdslb.com/bfs/face/8e7c02c5d98d8ee52d0643227aed59b4fca1420d.jpg",
                    "rank": "10000",
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 1,
                        "vipDueDate": 1626624000000,
                        "vipStatus": 0,
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
                        "nickname_color": "",
                        "role": 0,
                        "avatar_subscript_url": ""
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": "",
                        "image_enhance_frame": ""
                    },
                    "sign": "",
                    "level_info": {
                        "current_level": 3
                    }
                },
                "attend": 0
            },
            {
                "uid": 298557818,
                "time": 1654865058,
                "face_url": "http://i2.hdslb.com/bfs/face/b3bea3c029e4a35788625228a8ffbcec6c00eaea.jpg",
                "uname": "爱吃星河的饼干",
                "user_info": {
                    "uid": 298557818,
                    "uname": "爱吃星河的饼干",
                    "face": "http://i2.hdslb.com/bfs/face/b3bea3c029e4a35788625228a8ffbcec6c00eaea.jpg",
                    "rank": "10000",
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 1,
                        "vipDueDate": 1603209600000,
                        "vipStatus": 0,
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
                        "nickname_color": "",
                        "role": 0,
                        "avatar_subscript_url": ""
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": "",
                        "image_enhance_frame": ""
                    },
                    "sign": "规矩，既是束缚，也是保护。",
                    "level_info": {
                        "current_level": 5
                    }
                },
                "attend": 0
            },
            {
                "uid": 431901641,
                "time": 1654845296,
                "face_url": "http://i2.hdslb.com/bfs/face/88bf1a1c0cbbdf39032fa766e0b2324716b5315e.jpg",
                "uname": "水粉墨殇",
                "user_info": {
                    "uid": 431901641,
                    "uname": "水粉墨殇",
                    "face": "http://i2.hdslb.com/bfs/face/88bf1a1c0cbbdf39032fa766e0b2324716b5315e.jpg",
                    "rank": "10000",
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1655740800000,
                        "vipStatus": 1,
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
                        "nickname_color": "#FB7299",
                        "role": 3,
                        "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
                    },
                    "pendant": {
                        "pid": 5305,
                        "name": "明日方舟音律系列",
                        "image": "http://i2.hdslb.com/bfs/garb/item/615a1653281141ddf64cbb98c792ddaee78f7f40.png",
                        "expire": 0,
                        "image_enhance": "http://i2.hdslb.com/bfs/garb/item/516ecdf2d495a62f1bac31497c831b711823140c.webp",
                        "image_enhance_frame": "http://i2.hdslb.com/bfs/garb/item/c0751afbf950373c260254d02768eabf30ff3906.png"
                    },
                    "sign": "",
                    "level_info": {
                        "current_level": 5
                    }
                },
                "attend": 0
            },
            {
                "uid": 670417135,
                "time": 1654833667,
                "face_url": "http://i1.hdslb.com/bfs/face/f8fddf339016be034736c45714b52fbb148d5252.jpg",
                "uname": "阿布不喜欢我",
                "user_info": {
                    "uid": 670417135,
                    "uname": "阿布不喜欢我",
                    "face": "http://i1.hdslb.com/bfs/face/f8fddf339016be034736c45714b52fbb148d5252.jpg",
                    "rank": "10000",
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 1,
                        "vipDueDate": 1626451200000,
                        "vipStatus": 0,
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
                        "nickname_color": "",
                        "role": 0,
                        "avatar_subscript_url": ""
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": "",
                        "image_enhance_frame": ""
                    },
                    "sign": "",
                    "level_info": {
                        "current_level": 4
                    }
                },
                "attend": 0
            },
            {
                "uid": 339203848,
                "time": 1654798783,
                "face_url": "http://i1.hdslb.com/bfs/face/6bead07c483681db51d519aed8b8d00de265e8ae.jpg",
                "uname": "XD君233",
                "user_info": {
                    "uid": 339203848,
                    "uname": "XD君233",
                    "face": "http://i1.hdslb.com/bfs/face/6bead07c483681db51d519aed8b8d00de265e8ae.jpg",
                    "rank": "10000",
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 1,
                        "vipDueDate": 1620748800000,
                        "vipStatus": 0,
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
                        "nickname_color": "",
                        "role": 0,
                        "avatar_subscript_url": ""
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": "",
                        "image_enhance_frame": ""
                    },
                    "sign": "大爱火柴人，我的世界和一些求生枪战游戏",
                    "level_info": {
                        "current_level": 5
                    }
                },
                "attend": 0
            },
            {
                "uid": 199624899,
                "time": 1654792330,
                "face_url": "http://i0.hdslb.com/bfs/face/59526a5bfbe6985a0741ddaacffaee3c90c5e34a.jpg",
                "uname": "猛Pink",
                "user_info": {
                    "uid": 199624899,
                    "uname": "猛Pink",
                    "face": "http://i0.hdslb.com/bfs/face/59526a5bfbe6985a0741ddaacffaee3c90c5e34a.jpg",
                    "rank": "10000",
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 1,
                        "vipDueDate": 1598112000000,
                        "vipStatus": 0,
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
                        "nickname_color": "",
                        "role": 0,
                        "avatar_subscript_url": ""
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": "",
                        "image_enhance_frame": ""
                    },
                    "sign": "这个人很神秘，什么都看不了＝●ω●＝",
                    "level_info": {
                        "current_level": 5
                    }
                },
                "attend": 0
            },
            {
                "uid": 451151619,
                "time": 1654791995,
                "face_url": "http://i0.hdslb.com/bfs/face/9322b5a5802b5c831b2382afed073f5290be6e38.jpg",
                "uname": "七城关",
                "user_info": {
                    "uid": 451151619,
                    "uname": "七城关",
                    "face": "http://i0.hdslb.com/bfs/face/9322b5a5802b5c831b2382afed073f5290be6e38.jpg",
                    "rank": "10000",
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1655827200000,
                        "vipStatus": 1,
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
                        "nickname_color": "#FB7299",
                        "role": 3,
                        "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
                    },
                    "pendant": {
                        "pid": 6249,
                        "name": "星座系列：处女座",
                        "image": "http://i0.hdslb.com/bfs/garb/item/cd82b1c35fe0ea221c4fd56525893bc58ec53300.png",
                        "expire": 0,
                        "image_enhance": "http://i0.hdslb.com/bfs/garb/item/cd82b1c35fe0ea221c4fd56525893bc58ec53300.png",
                        "image_enhance_frame": ""
                    },
                    "sign": "强迫症",
                    "level_info": {
                        "current_level": 5
                    }
                },
                "attend": 0
            },
            {
                "uid": 375385022,
                "time": 1654785903,
                "face_url": "http://i2.hdslb.com/bfs/face/fbdfa7917e8f874382f4b42fcccd9c7296461cb9.jpg",
                "uname": "想变成魔法少女的笙绘",
                "user_info": {
                    "uid": 375385022,
                    "uname": "想变成魔法少女的笙绘",
                    "face": "http://i2.hdslb.com/bfs/face/fbdfa7917e8f874382f4b42fcccd9c7296461cb9.jpg",
                    "rank": "10000",
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 1,
                        "vipDueDate": 1643472000000,
                        "vipStatus": 0,
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
                        "nickname_color": "",
                        "role": 0,
                        "avatar_subscript_url": ""
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": "",
                        "image_enhance_frame": ""
                    },
                    "sign": "希望自己的原创作品可以成为自活过的证明",
                    "level_info": {
                        "current_level": 5
                    }
                },
                "attend": 0
            },
            {
                "uid": 291506521,
                "time": 1654782383,
                "face_url": "http://i1.hdslb.com/bfs/face/887f13f658cfbee23e3e200fe61755f1a8d5823c.jpg",
                "uname": "星が落ちた日",
                "user_info": {
                    "uid": 291506521,
                    "uname": "星が落ちた日",
                    "face": "http://i1.hdslb.com/bfs/face/887f13f658cfbee23e3e200fe61755f1a8d5823c.jpg",
                    "rank": "10000",
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1673884800000,
                        "vipStatus": 1,
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
                        "nickname_color": "#FB7299",
                        "role": 3,
                        "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
                    },
                    "pendant": {
                        "pid": 4104,
                        "name": "良辰美景·不问天",
                        "image": "http://i1.hdslb.com/bfs/garb/item/4dbf08aae75f9479a21db2bb289229b8d71631e1.png",
                        "expire": 0,
                        "image_enhance": "http://i1.hdslb.com/bfs/garb/item/253bf41272ddef301c1f6a0361abd49d772bfafc.webp",
                        "image_enhance_frame": "http://i1.hdslb.com/bfs/garb/item/c4934a1ffdb3865fe79b319de439af3973b53ec9.png"
                    },
                    "sign": "一时摸鱼一时爽，一直摸鱼一直爽!",
                    "level_info": {
                        "current_level": 5
                    }
                },
                "attend": 0
            },
            {
                "uid": 179333519,
                "time": 1654780391,
                "face_url": "http://i2.hdslb.com/bfs/face/89a58c10bf500fb7c9530ba8f28f73208c510d22.jpg",
                "uname": "纳眉兹www",
                "user_info": {
                    "uid": 179333519,
                    "uname": "纳眉兹www",
                    "face": "http://i2.hdslb.com/bfs/face/89a58c10bf500fb7c9530ba8f28f73208c510d22.jpg",
                    "rank": "10000",
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 1,
                        "vipDueDate": 1646496000000,
                        "vipStatus": 0,
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
                        "nickname_color": "",
                        "role": 0,
                        "avatar_subscript_url": ""
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": "",
                        "image_enhance_frame": ""
                    },
                    "sign": "人生",
                    "level_info": {
                        "current_level": 4
                    }
                },
                "attend": 0
            },
            {
                "uid": 497821251,
                "time": 1654780363,
                "face_url": "http://i0.hdslb.com/bfs/face/a7bf301db14cb7fa094dba5f68d13faa7c5798d2.jpg",
                "uname": "不器用な・ジョゼ",
                "user_info": {
                    "uid": 497821251,
                    "uname": "不器用な・ジョゼ",
                    "face": "http://i0.hdslb.com/bfs/face/a7bf301db14cb7fa094dba5f68d13faa7c5798d2.jpg",
                    "rank": "10000",
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1683216000000,
                        "vipStatus": 1,
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
                        "nickname_color": "#FB7299",
                        "role": 3,
                        "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
                    },
                    "pendant": {
                        "pid": 299,
                        "name": "梦塔·雪谜城",
                        "image": "http://i0.hdslb.com/bfs/face/c93e1eeb77b1bb0753eff243d49c006bf18d69c5.png",
                        "expire": 0,
                        "image_enhance": "http://i0.hdslb.com/bfs/face/c93e1eeb77b1bb0753eff243d49c006bf18d69c5.png",
                        "image_enhance_frame": ""
                    },
                    "sign": "・花无凋零之日，爱无传达之时，爱情亘古不变，紫罗兰永世长存\n・人活着就是为了樱岛麻衣\nｷｬ━━━━(ﾟ∀ﾟ)━━━━!!",
                    "level_info": {
                        "current_level": 5
                    }
                },
                "attend": 0
            },
            {
                "uid": 1054063538,
                "time": 1654779485,
                "face_url": "http://i2.hdslb.com/bfs/face/bc60a7b5c3b5fd624043050a3ab15e2c4c871803.jpg",
                "uname": "贪吃的ZZ",
                "user_info": {
                    "uid": 1054063538,
                    "uname": "贪吃的ZZ",
                    "face": "http://i2.hdslb.com/bfs/face/bc60a7b5c3b5fd624043050a3ab15e2c4c871803.jpg",
                    "rank": "10000",
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 0,
                        "vipDueDate": 0,
                        "vipStatus": 0,
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
                        "nickname_color": "",
                        "role": 0,
                        "avatar_subscript_url": ""
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": "",
                        "image_enhance_frame": ""
                    },
                    "sign": "(ฅ>ω<*ฅ)",
                    "level_info": {
                        "current_level": 3
                    }
                },
                "attend": 0
            },
            {
                "uid": 305663999,
                "time": 1654777857,
                "face_url": "http://i2.hdslb.com/bfs/face/3a2b2f84990ec182af8380ef97db8256c6ecec25.jpg",
                "uname": "qw夕颜",
                "user_info": {
                    "uid": 305663999,
                    "uname": "qw夕颜",
                    "face": "http://i2.hdslb.com/bfs/face/3a2b2f84990ec182af8380ef97db8256c6ecec25.jpg",
                    "rank": "10000",
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 0,
                        "vipDueDate": 0,
                        "vipStatus": 0,
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
                        "nickname_color": "",
                        "role": 0,
                        "avatar_subscript_url": ""
                    },
                    "pendant": {
                        "pid": 0,
                        "name": "",
                        "image": "",
                        "expire": 0,
                        "image_enhance": "",
                        "image_enhance_frame": ""
                    },
                    "sign": "",
                    "level_info": {
                        "current_level": 4
                    }
                },
                "attend": 0
            },
            {
                "uid": 436616802,
                "time": 1654776381,
                "face_url": "http://i0.hdslb.com/bfs/face/e1ddfcdac95b39217e4710f3605005abfecb53a1.jpg",
                "uname": "桐影映江边",
                "user_info": {
                    "uid": 436616802,
                    "uname": "桐影映江边",
                    "face": "http://i0.hdslb.com/bfs/face/e1ddfcdac95b39217e4710f3605005abfecb53a1.jpg",
                    "rank": "10000",
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 1,
                        "vipDueDate": 1664208000000,
                        "vipStatus": 1,
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
                        "nickname_color": "",
                        "role": 1,
                        "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
                    },
                    "pendant": {
                        "pid": 1990,
                        "name": "明日方舟",
                        "image": "http://i0.hdslb.com/bfs/garb/item/0c8e7d627a35c378b757f39419889ef1fcc0ed9b.png",
                        "expire": 0,
                        "image_enhance": "http://i0.hdslb.com/bfs/garb/item/1815c81da71069ea3db4553cad7d233f782da2f2.webp",
                        "image_enhance_frame": "http://i0.hdslb.com/bfs/garb/item/ed2b4ef1da228c0b937753542b33af8f04d1d70c.png"
                    },
                    "sign": "追寻着你的身影，从迷失的世界起航，直到深海的尽头～",
                    "level_info": {
                        "current_level": 4
                    }
                },
                "attend": 0
            },
            {
                "uid": 266536964,
                "time": 1654775142,
                "face_url": "http://i2.hdslb.com/bfs/face/b15e60d6e5403075f212d5bd3d30dc0fb3016088.jpg",
                "uname": "君九j",
                "user_info": {
                    "uid": 266536964,
                    "uname": "君九j",
                    "face": "http://i2.hdslb.com/bfs/face/b15e60d6e5403075f212d5bd3d30dc0fb3016088.jpg",
                    "rank": "10000",
                    "official_verify": {
                        "type": -1,
                        "desc": ""
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1683648000000,
                        "vipStatus": 1,
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
                        "nickname_color": "#FB7299",
                        "role": 3,
                        "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
                    },
                    "pendant": {
                        "pid": 1293,
                        "name": "碧蓝航线",
                        "image": "http://i2.hdslb.com/bfs/face/2508daec59b2aaada2784f26f9c1c28069f28e43.png",
                        "expire": 0,
                        "image_enhance": "http://i2.hdslb.com/bfs/face/2508daec59b2aaada2784f26f9c1c28069f28e43.png",
                        "image_enhance_frame": ""
                    },
                    "sign": "",
                    "level_info": {
                        "current_level": 5
                    }
                },
                "attend": 0
            }
        ],
        "has_more": 1,
        "total_count": 2367,
        "_gt_": 0
    }
}
```

</details>

## 获取草稿列表

> https://api.vc.bilibili.com/dynamic_draft/v1/dynamic_draft/get_drafts

请求方式：GET

认证方式：Cookie（SESSDATA）

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注      |
| ------- | ---- | -------- | --------- |
| code    | num  | 返回值   | 0：成功   |
| data    | obj  | 信息本体 |           |
| message | str  | 错误信息 | 正常为"0" |
| ttl     | num  | 1        |           |

`data`对象:

| 字段   | 类型  | 内容     | 备注 |
| ------ | ----- | -------- | ---- |
| drafts | array | 草稿列表 |      |

`drafts`列表的每一项:

| 字段         | 类型 | 内容                 | 备注                                                         |
| ------------ | ---- | -------------------- | ------------------------------------------------------------ |
| draft_id     | str  | 草稿id               |                                                              |
| publish_time | num  | 定时发送的秒级时间戳 |                                                              |
| type         | num  | 动态类型             | 请参考[获取特定动态卡片信息](get_dynamic_detail.md)          |
| uid          | num  | 自己的mid            |                                                              |
| user_profile | obj  | 自己的用户信息       | 请参考[用户基本信息](../user/info.md)                        |
| request      | str  | 动态内容             | 该项为json转成str,内容请参考[发表纯文本动态](publish.md#发表纯文本动态) |
