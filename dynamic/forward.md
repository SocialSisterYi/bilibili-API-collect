<!--
 * @Author      : Leon
 * @Date        : 2022-06-05 21:47:21
 * @LastEditTime: 2022-06-07 21:21:52
 * @LastEditors : Leon
 * @Description : 
 * @GitHub      : https://github.com/Kiss-your
-->
# 获取动态转发

> http://api.vc.bilibili.com/dynamic_repost/v1/dynamic_repost/repost_deta

请求方式：GET

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

由于过多，自行理解

**示例：**

获取`哔哩哔哩弹幕网`的动态id为`669016644742283288`动态

```ABAP
curl -G 'http://api.vc.bilibili.com/dynamic_repost/v1/dynamic_repost/repost_deta' \
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

