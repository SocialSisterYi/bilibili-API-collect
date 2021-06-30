# 获取特定动态卡片信息

> http://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/get_dynamic_detail

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容       | 必要性 | 备注     |
| ------------ | ---- | ---------- | ------ | -------- |
| dynamic_id   | id  | 动态ID | 必要 | |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| data    | obj  | 信息本体 |         |
| message | str  | 错误信息 | 默认为空 |
| msg     | num  | 空       |         |

`data`对象：

| 字段        | 类型  | 内容       | 备注         |
| ----------- | ----- | ---------- | ------------ |
| card       | obj   | 动态卡片内容 | 当动态不存在/删除时不返回此项  |
| result       | num   |   0 | 作用尚不明确（当动态不存在/删除时不返回此项）  |
| \_gt\_        | num   | 0          | 作用尚不明确 |

`data`中的`card`对象：

| 字段   | 类型 | 内容          | 备注 |
| ---- | ---- | ------------- | ---- |
| activity_infos | obj | 该条动态参与的活动 |当此条动态没有参与任何活动时不显示此项 |
| card    | str  | 动态详细信息   | 会跟随此动态类型不同发生一定的变化，评论数、点赞数等相关信息参考`desc`字段   |
| desc    | obj  | 动态相关信息 |  会跟随此动态类型不同发生一定的变化，详细信息（例如动态描述等）参考`card`字段     |
| display   | obj  | 动态部分的可操作项            | 会随着动态类型发生变化，主要用于显示动态   |
| extend_json | str | 动态扩展项 | 会随着动态类型发生变化 |
**此处的大部分字段的内容都会根据`desc`中的`type`值发生一定变化，具体的数值对照参考下表（仅作参考，部分内容的解释未知，同时有些内容仅为在部分页面出现，无法通过此API调出）：**

| 值 | 含义          |
| ---- | ---- |
| 268435455 | 具体定义未知 |
| 1 | 转发 |
| 2 | 图片动态 |
| 4 | 文字动态 |
| 8 | 视频动态 |
| 16 | 小视频 |
| 32 | 具体定义未知（可能为戏剧） |
| 64 | 专栏 |
| 256 | 音频 |
|	512	| 番剧 |
|	1024	| 具体定义未知 |
|	2048	| H5活动动态 |
|	2049	| 漫画分享 |
|	4097	| PGC番剧 |
|	4098	| 电影 |
|	4099	| 电视剧 |
|	4100	| 国创动漫 |
|	4101	| 纪录片 |
|	4200	| 直播 |
|	4201	| 直播 |
|	4300	| 收藏夹 |
|	4302	| 付费课程 |
|	4303	| 付费课程 |
|	4308	| 直播 |
|	4310	| 合集 |
|	4311	| 具体定义未知 |
|	1e3	| 具体定义未知 |
|	1001	| 具体定义未知 |

**示例：**

获取`哔哩哔哩弹幕网`的动态ID为`507420325550127049`动态

```shell
curl -G 'http://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/get_dynamic_detail' \
--data-urlencode 'dynamic_id=507420325550127049'
```

<details>
<summary>查看响应示例</summary>

```json
{
    "code": 0,
    "msg": "",
    "message": "",
    "data": {
        "card": {
            "desc": {
                "uid": 8047632,
                "type": 8,
                "rid": 204774719,
                "acl": 0,
                "view": 1182282,
                "repost": 405,
                "like": 31940,
                "is_liked": 0,
                "dynamic_id": 507420325550127049,
                "timestamp": 1616981401,
                "pre_dy_id": 0,
                "orig_dy_id": 0,
                "orig_type": 0,
                "user_profile": {
                    "info": {
                        "uid": 8047632,
                        "uname": "哔哩哔哩弹幕网",
                        "face": "https://i0.hdslb.com/bfs/face/f2cb8d9854156e3f26d4c6751d6eeb9c30e21847.jpg"
                    },
                    "card": {
                        "official_verify": {
                            "type": 1,
                            "desc": "哔哩哔哩弹幕网官方账号 "
                        }
                    },
                    "vip": {
                        "vipType": 2,
                        "vipDueDate": 1924531200000,
                        "vipStatus": 1,
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
                        "nickname_color": "#FB7299",
                        "role": 7,
                        "avatar_subscript_url": "https://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
                    },
                    "pendant": {
                        "pid": 3860,
                        "name": "2021拜年纪",
                        "image": "https://i0.hdslb.com/bfs/garb/item/7f8aa8ef1eed8c2dce0796801ddc82552a4164f9.png",
                        "expire": 0,
                        "image_enhance": "https://i0.hdslb.com/bfs/garb/item/7f8aa8ef1eed8c2dce0796801ddc82552a4164f9.png",
                        "image_enhance_frame": ""
                    },
                    "rank": "10000",
                    "sign": "哔哩哔哩 干杯 - ( ゜- ゜)つロ",
                    "level_info": {
                        "current_level": 6
                    }
                },
                "uid_type": 1,
                "stype": 0,
                "r_type": 1,
                "inner_id": 0,
                "status": 1,
                "dynamic_id_str": "507420325550127049",
                "pre_dy_id_str": "0",
                "orig_dy_id_str": "0",
                "rid_str": "204774719",
                "bvid": "BV1Dh411S7sS"
            },
            "card": "{\"aid\":204774719,\"attribute\":0,\"cid\":316514988,\"copyright\":1,\"ctime\":1616939233,\"desc\":\"2021年3月29日9:30（北京时间），B站在中国香港港交所成功挂牌二次上市。欢迎来到bilibili这座乐园，和超过2亿中国年轻人一起表达自我、拥抱世界。\",\"dimension\":{\"height\":1080,\"rotate\":0,\"width\":1920},\"duration\":290,\"dynamic\":\"\",\"item\":{\"at_control\":\"\"},\"jump_url\":\"bilibili:\\/\\/video\\/204774719\\/?page=1&player_preload=null&player_width=1920&player_height=1080&player_rotate=0\",\"owner\":{\"face\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/face\\/f2cb8d9854156e3f26d4c6751d6eeb9c30e21847.jpg\",\"mid\":8047632,\"name\":\"哔哩哔哩弹幕网\"},\"pic\":\"https:\\/\\/i0.hdslb.com\\/bfs\\/archive\\/bcbcac6560268ef9cbe59fbf759ac28adf5e0432.jpg\",\"player_info\":null,\"pubdate\":1616981400,\"rights\":{\"autoplay\":1,\"bp\":0,\"download\":0,\"elec\":0,\"hd5\":1,\"is_cooperation\":0,\"movie\":0,\"no_background\":0,\"no_reprint\":1,\"pay\":0,\"ugc_pay\":0,\"ugc_pay_preview\":0},\"share_subtitle\":\"已观看24.0万次\",\"short_link\":\"https:\\/\\/b23.tv\\/BV1Dh411S7sS\",\"short_link_v2\":\"https:\\/\\/b23.tv\\/BV1Dh411S7sS\",\"stat\":{\"aid\":204774719,\"coin\":8661,\"danmaku\":744,\"dislike\":0,\"favorite\":6025,\"his_rank\":0,\"like\":31940,\"now_rank\":0,\"reply\":1619,\"share\":2134,\"view\":246956},\"state\":0,\"tid\":207,\"title\":\"欢迎来到2亿年轻人的乐园——bilibili 回香港上市啦！\",\"tname\":\"财经\",\"videos\":1}",
            "extend_json": "{\"\":{\"ogv\":{\"ogv_id\":0}},\"dispute\":{\"content\":\"\"},\"from\":{\"from\":\"\"},\"like_icon\":{\"action\":\"\",\"action_url\":\"\",\"end\":\"\",\"end_url\":\"\",\"start\":\"\",\"start_url\":\"\"},\"topic\":{\"is_attach_topic\":1}}",
            "display": {
                "topic_info": {
                    "topic_details": [
                        {
                            "topic_id": 12895437,
                            "topic_name": "二次上市",
                            "is_activity": 0,
                            "topic_link": ""
                        },
                        {
                            "topic_id": 10967402,
                            "topic_name": "香港上市",
                            "is_activity": 1,
                            "topic_link": "https://www.bilibili.com/blackboard/dynamic/102930"
                        },
                        {
                            "topic_id": 114859,
                            "topic_name": "B站",
                            "is_activity": 0,
                            "topic_link": ""
                        },
                        {
                            "topic_id": 8312,
                            "topic_name": "宣传片",
                            "is_activity": 1,
                            "topic_link": "https://www.bilibili.com/blackboard/dynamic/8795"
                        },
                        {
                            "topic_id": 679,
                            "topic_name": "BILIBILI",
                            "is_activity": 0,
                            "topic_link": ""
                        }
                    ]
                },
                "usr_action_txt": "投稿了视频",
                "relation": {
                    "status": 1,
                    "is_follow": 0,
                    "is_followed": 0
                },
                "show_tip": {
                    "del_tip": "要删除动态吗？"
                },
                "cover_play_icon_url": "https://i0.hdslb.com/bfs/album/2269afa7897830b397797ebe5f032b899b405c67.png"
            }
        },
        "result": 0,
        "_gt_": 0
    }
}
```

</details>

