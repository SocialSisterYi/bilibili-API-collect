# 私信

## 对象说明

### 会话对象

| 字段                 | 类型 | 内容                             | 备注                                                |
| -------------------- | ---- | -------------------------------- | --------------------------------------------------- |
| talker_id            | num  | 聊天对象的id                     | `session_type` 为 `1` 时表示用户 mid，为 `2` 时表示粉丝团 id |
| session_type         | num  | 聊天对象的类型                   | 1：用户<br />2：粉丝团                              |
| at_seqno             | num  | 最近一次未读at自己的消息的序列号 | 在粉丝团会话中有效，若没有未读的at自己的消息则为 `0` |
| top_ts               | num  | 置顶该会话的时间                 | 微秒级时间戳；若未置顶该会话则为 `0`                |
| group_name           | str  | 粉丝团名称                       | 在粉丝团会话中有效                                  |
| group_cover          | str  | 粉丝团头像                       | 在粉丝团会话中有效                                  |
| is_follow            | num  | 是否已关注对方                   | 在用户会话中有效                                    |
| is_dnd               | num  | 是否对会话设置了免打扰           |                                                     |
| ack_seqno            | num  | 最近一次已读的消息序列号         | 用于快速跳转到首条未读的消息                        |
| ack_ts               | num  | 最近一次已读时间                 | 微秒级时间戳                                        |
| session_ts           | num  | 会话时间                         | 微秒级时间戳                                        |
| unread_count         | num  | 未读消息数                       |                                                     |
| last_msg             | obj  | 最近的一条消息                   | 详见[私信主体对象](#私信主体对象)                   |
| group_type           | num  | 粉丝团类型                       | 在粉丝团时有效<br />0：应援团<br />2：官方群        |
| can_fold             | num  | （？）                           | **作用尚不明确**                                    |
| status               | num  | 会话状态                         | 详细信息有待补充                                    |
| max_seqno            | num  | 最近一条消息的序列号             |                                                     |
| new_push_msg         | num  | 是否有新推送的消息               |                                                     |
| setting              | num  | （？）                           | **作用尚不明确**                                    |
| is_guardian          | num  | （？）                           | **作用尚不明确**                                    |
| is_intercept         | num  | 会话是否被拦截                   |                                                     |
| is_trust             | num  | 是否已设置不拦截此会话           | 若为 `1`，则表示此会话之前被拦截过，但用户选择信任本会话 |
| system_msg_type      | num  | 系统消息类型                     | 0：非系统消息<br />1：主播小助手<br />7：UP主小助手<br />8：客服消息 |
| account_info         | obj  | 会话信息                         | 仅在系统消息中出现                                  |
| live_status          | num  | 用户是否正在直播                 | 在用户会话中有效                                    |
| biz_msg_unread_count | num  | 未读推送消息数                   |                                                     |
| user_label           | null | （？）                           | **作用尚不明确**                                    |

`account_info`对象：

| 字段    | 类型 | 内容     | 备注 |
| ------- | ---- | -------- | ---- |
| name    | str  | 会话名称 |      |
| pic_url | str  | 会话头像 |      |

### 私信主体对象

注：私信主体对象≠[私信内容对象](private_msg_content.md)

| 字段             | 类型 | 内容           | 备注                                                           |
| ---------------- | ---- | -------------- | -------------------------------------------------------------- |
| sender_uid       | num  | 发送者mid      |                                                                |
| receiver_type    | num  | 接收者类型     | 1：用户<br />2：粉丝团                                         |
| receiver_id      | num  | 接收者id       | `receiver_type` 为 `1` 时表示用户 mid，为 `2` 时表示粉丝团 id  |
| msg_type         | num  | 消息类型       | 详见[私信消息类型、内容说明](private_msg_content.md)           |
| content          | str  | 消息内容       | [私信内容对象](private_msg_content.md)经过 JSON 序列化后的文本 |
| msg_seqno        | num  | 消息序列号     | 按照时间顺序从小到大                                           |
| timestamp        | num  | 消息发送时间   | 秒级时间戳                                                     |
| at_uids          | 有效时：array<br />无效时：null | at的成员mid    | 在粉丝团时有效；此项为 `null` 或 `[0]` 均表示没有 at 成员      |
| msg_key          | num  | 消息唯一id     | 部分库在解析JSON对象中的大数时存在数值的精度丢失问题，因此在处理私信时可能会出现问题，建议使用修复了这一问题的库（如将大数转换成文本） |
| msg_status       | num  | 消息状态       | 0：正常<br />1：被撤回（接口仍能返回被撤回的私信内容）<br />2：被系统撤回（私信将不会显示在前端，B站接口也不会返回被系统撤回的私信）<br />50：图片已失效（私信内容为一张提示“图片出现问题”的图片） |
| sys_cancel       | bool | 是否为系统撤回 | 仅当消息类型为 `5` 且此项值为 `true` 时有此项；若此项值为 `true`，表示目标消息是被系统撤回的，此时前端将不显示该私信且没有提示 |
| notify_code      | str  | 通知代码       | 发送通知时使用，以下划线 `_` 分割，第 1 项表示主业务 id，第 2 项表示子业务 id；若这条私信非通知则为空文本；详细信息有待补充 |
| new_face_version | num  | 表情包版本     | 为 `0` 或无此项表示旧版表情包，此时 B 站会自动转换成新版表情包，例如 `[doge]` -> `[tv_doge]`；`1` 为新版 |
| msg_source       | num  | 消息来源       | 见[消息来源列表](#消息来源列表)                                |

`私信主体对象`中的`at_uids`数组：

| 项   | 类型 | 内容      | 备注    |
| ---- | ---- | --------- | ------- |
| 0    | num  | 用户1     | 成员mid |
| n    | num  | 用户(n+1) |         |
| ……   | num  | ……        | ……      |

### 消息来源列表

| 代码 | 含义                      | 备注                                |
| ---- | ------------------------- | ----------------------------------- |
| 0    | 未知来源                  |                                     |
| 1    | iOS                       |                                     |
| 2    | Android                   |                                     |
| 3    | H5                        |                                     |
| 4    | PC客户端                  |                                     |
| 5    | 官方自动推送              | 包括：官方向大多数用户发送的私信等  |
| 6    | 自动推送/发送             | 包括：特别关注时稿件的自动推送、因成为契约者而自动发送的私信、包月充电回馈私信、官方发送的特定于自己的消息等 |
| 7    | Web                       |                                     |
| 8    | 自动回复 - 被关注回复     |                                     |
| 9    | 自动回复 - 收到消息回复   |                                     |
| 10   | 自动回复 - 关键词回复     |                                     |
| 11   | 自动回复 - 大航海上船回复 |                                     |
| 12   | 自动推送 - UP 主赠言      | 在以前稿件的自动推送与其附带的 UP 主赠言是 2 条不同的私信（其中 UP 主赠言的消息来源代码为 12），现在 UP 主赠言已被合并成为稿件自动推送消息的一部分（`attach_msg`） |
| 13   | 粉丝团系统提示            | 如：粉丝团中的提示信息“欢迎xxx入群” |
| 16   | （？）                    | **作用尚不明确** |
| 17   | 互相关注                  | 互相关注时自动发送的私信“我们已互相关注，开始聊天吧~” |
| 18   | 系统提示                  | 如：“对方主动回复或关注你前，最多发送1条消息” |
| 19   | AI                        | 如：给[搜索AI助手测试版](https://space.bilibili.com/1400565964/)发送私信时对方的自动回复 |

## 未读私信数

> https://api.vc.bilibili.com/session_svr/v1/session_svr/single_unread

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| msg     | str  | 错误信息 | 默认为0                       |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        |                               |
| data    | obj  | 信息本体 |                               |

`data` 对象：

| 字段                    | 类型 | 内容                   | 备注             |
| ----------------------- | ---- | ---------------------- | ---------------- |
| unfollow_unread         | num  | 未关注用户未读私信数   |                  |
| follow_unread           | num  | 已关注用户未读私信数   |                  |
| unfollow_push_msg       | num  | 未读推送消息数         |                  |
| dustbin_push_msg        | num  | 未读被拦截的推送消息数 |                  |
| dustbin_unread          | num  | 未读被拦截的私信数     |                  |
| biz_msg_unfollow_unread | num  | （？）                 | **作用尚不明确** |
| biz_msg_follow_unread   | num  | （？）                 | **作用尚不明确** |
| custom_unread           | num  | 未读客服消息数         |                  |

**示例：**

以下信息代表未关注用户未读私信数为`1`条，已关注用户未读私信数为`6`条

```shell
curl 'https://api.vc.bilibili.com/session_svr/v1/session_svr/single_unread' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"msg": "0",
	"message": "0",
        "ttl": 1,
	"data": {
		"unfollow_unread": 1,
		"follow_unread": 6,
		"unfollow_push_msg": 0,
		"dustbin_push_msg": 0,
		"dustbin_unread": 0,
		"biz_msg_unfollow_unread": 0,
		"biz_msg_follow_unread": 0,
		"custom_unread": 0
	}
}
```

</details>

## 会话详细信息

> https://api.vc.bilibili.com/session_svr/v1/session_svr/session_detail

*请求方式：GET*

认证方式：Cookie（SESSDATA）

若从未与该会话聊过天，则返回 1000004 `入口节点已存在` 错误

**url参数：**

| 参数名       | 类型 | 内容             | 必要性 | 备注                                                   |
| ------------ | ---- | ---------------- | ------ | ------------------------------------------------------ |
| talker_id    | num  | 聊天对象的id     | 必要   | `session_type` 为 `1` 时表示用户 mid，为 `2` 时表示粉丝团 id |
| session_type | num  | 聊天对象的类型   | 必要   | 1：用户<br />2：粉丝团                                 |
| build        | num  | 客户端内部版本号 | 非必要 | 默认为 `0`                                             |
| mobi_app     | str  | 平台标识         | 非必要 | 可为 `web` 等                                          |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                           |
| ------- | ---- | -------- | ------------------------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误<br />1000004：入口节点已存在 |
| msg     | str  | 错误信息 | 默认为0                                                                        |
| message | str  | 错误信息 | 默认为0                                                                        |
| ttl     | num  | 1        |                                                                                |
| data    | obj  | 数据本体 | 详见[会话对象](#会话对象)                                                      |

**示例：**

获取会话`talker_id=293793435&session_type=1`的详细信息：

```shell
curl -G 'https://api.vc.bilibili.com/session_svr/v1/session_svr/session_detail' \
    --data-urlencode 'talker_id=293793435' \
    --data-urlencode 'session_type=1' \
    --data-urlencode 'build=0' \
    --data-urlencode 'mobi_app=web' \
    -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "0",
    "message": "0",
    "ttl": 1,
    "data": {
        "talker_id": 293793435,
        "session_type": 1,
        "at_seqno": 0,
        "top_ts": 0,
        "group_name": "",
        "group_cover": "",
        "is_follow": 1,
        "is_dnd": 0,
        "ack_seqno": 1236306587877408,
        "ack_ts": 1709536984481314,
        "session_ts": 1709385615744065,
        "unread_count": 0,
        "last_msg": {
            "sender_uid": 293793435,
            "receiver_type": 1,
            "receiver_id": 425503913,
            "msg_type": 11,
            "content": "{\"title\":\"OHHHHHH家人们，我分数终于破w了！紫框了这下确实不好意思说自己是只打红谱的萌新了\",\"times\":14,\"cover\":\"http://i0.hdslb.com/bfs/archive/8821c03ab27a0bcf2bf32af814e758ab17a1e27e.png\",\"rid\":1951316064,\"type_\":8,\"desc\":\"OHHHHHH家人们，我分数终于破w了！紫框了这下确实不好意思说自己是只打红谱的萌新了\",\"bvid\":\"BV1zC411p7JN\",\"view\":452,\"danmaku\":0,\"pub_date\":1709385603,\"attach_msg\":null}",
            "msg_seqno": 1236306587877408,
            "timestamp": 1709385615,
            "at_uids": null,
            "msg_key": 7341755312943193481,
            "msg_status": 0,
            "notify_code": "",
            "new_face_version": 1,
            "msg_source": 6
        },
        "group_type": 0,
        "can_fold": 0,
        "status": 0,
        "max_seqno": 1236306587877408,
        "new_push_msg": 0,
        "setting": 0,
        "is_guardian": 0,
        "is_intercept": 0,
        "is_trust": 0,
        "system_msg_type": 0,
        "live_status": 0,
        "biz_msg_unread_count": 0,
        "user_label": null
    }
}
```

</details>

## 获取新会话列表

> https://api.vc.bilibili.com/session_svr/v1/session_svr/new_sessions

*请求方式：GET*

认证方式：Cookie（SESSDATA）

获取指定时间之后的新会话列表

**url参数：**

| 参数名   | 类型 | 内容             | 必要性 | 备注                      |
| -------- | ---- | ---------------- | ------ | ------------------------- |
| begin_ts | num  | 起始时间         | 非必要 | 微秒级时间戳              |
| size     | num  | 返回的会话数     | 非必要 | 默认为 `20`，最大为 `100` |
| build    | num  | 客户端内部版本号 | 非必要 | 默认为 `0`                |
| mobi_app | str  | 平台标识         | 非必要 | 可为 `web` 等             |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| msg     | str  | 错误信息 | 默认为0                                           |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 数据本体 |                                                   |

`data`对象：

| 字段                  | 类型 | 内容                         | 备注                   |
| --------------------- | ---- | ---------------------------- | ---------------------- |
| session_list          | 有会话时：array<br />无会话时：null | 会话列表                     | 按发送时间顺序逆向排序 |
| has_more              | num  | 是否有更多会话               |                        |
| anti_distrub_cleaning | bool | 是否开启“一键防骚扰”功能   |                        |
| is_address_list_empty | num  | （？）                       | **作用尚不明确**       |
| show_level            | bool | 是否在会话列表中显示用户等级 | 目前恒为 `false`       |

`data`对象中的`session_list`数组：

| 项   | 类型 | 内容      | 备注                      |
| ---- | ---- | --------- | ------------------------- |
| 0    | obj  | 会话1     | 详见[会话对象](#会话对象) |
| n    | obj  | 会话(n+1) |                           |
| ……   | obj  | ……        | ……                        |

**示例：**

获取`begin_ts=1712420213519391`之后的新会话列表：

```shell
curl -G 'https://api.vc.bilibili.com/session_svr/v1/session_svr/new_sessions' \
    --data-urlencode 'begin_ts=1712420213519391' \
    --data-urlencode 'size=3' \
    --data-urlencode 'build=0' \
    --data-urlencode 'mobi_app=web' \
    -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "0",
    "message": "0",
    "ttl": 1,
    "data": {
        "session_list": [
            {
                "talker_id": 844424930131966,
                "session_type": 1,
                "at_seqno": 0,
                "top_ts": 0,
                "group_name": "",
                "group_cover": "",
                "is_follow": 1,
                "is_dnd": 0,
                "ack_seqno": 1238729956474887,
                "ack_ts": 1709536924979884,
                "session_ts": 1712305278098351,
                "unread_count": 4,
                "last_msg": {
                    "sender_uid": 844424930131966,
                    "receiver_type": 1,
                    "receiver_id": 425503913,
                    "msg_type": 10,
                    "content": "{\"title\":\"流量奖励到账通知\",\"text\":\"恭喜您已获得2000流量曝光奖励，快来投稿使用吧。\",\"jump_text\":\"\",\"jump_uri\":\"\",\"modules\":null,\"jump_text_2\":\"\",\"jump_uri_2\":\"\",\"jump_text_3\":\"\",\"jump_uri_3\":\"\",\"notifier\":null,\"jump_uri_config\":{\"all_uri\":\"https://member.bilibili.com/york/flow-reward?navhide=1\\u0026from=msgrecall\",\"text\":\"\"},\"jump_uri_2_config\":{\"text\":\"\"},\"jump_uri_3_config\":{\"text\":\"\"},\"biz_content\":null}",
                    "msg_seqno": 1285290404823041,
                    "timestamp": 1712305278,
                    "at_uids": null,
                    "msg_key": 7354295169819585966,
                    "msg_status": 0,
                    "notify_code": "2091_253",
                    "new_face_version": 1,
                    "msg_source": 6
                },
                "group_type": 0,
                "can_fold": 0,
                "status": 0,
                "max_seqno": 1285290404823041,
                "new_push_msg": 1,
                "setting": 0,
                "is_guardian": 0,
                "is_intercept": 0,
                "is_trust": 0,
                "system_msg_type": 7,
                "account_info": {
                    "name": "UP主小助手",
                    "pic_url": "https://message.biliimg.com/bfs/im/489a63efadfb202366c2f88853d2217b5ddc7a13.png"
                },
                "live_status": 0,
                "biz_msg_unread_count": 0,
                "user_label": null
            },
            {
                "talker_id": 293793435,
                "session_type": 1,
                "at_seqno": 0,
                "top_ts": 0,
                "group_name": "",
                "group_cover": "",
                "is_follow": 1,
                "is_dnd": 0,
                "ack_seqno": 1236306587877408,
                "ack_ts": 1709536984481314,
                "session_ts": 1709385615744065,
                "unread_count": 0,
                "last_msg": {
                    "sender_uid": 293793435,
                    "receiver_type": 1,
                    "receiver_id": 425503913,
                    "msg_type": 11,
                    "content": "{\"title\":\"OHHHHHH家人们，我分数终于破w了！紫框了这下确实不好意思说自己是只打红谱的萌新了\",\"times\":14,\"cover\":\"http://i0.hdslb.com/bfs/archive/8821c03ab27a0bcf2bf32af814e758ab17a1e27e.png\",\"rid\":1951316064,\"type_\":8,\"desc\":\"OHHHHHH家人们，我分数终于破w了！紫框了这下确实不好意思说自己是只打红谱的萌新了\",\"bvid\":\"BV1zC411p7JN\",\"view\":452,\"danmaku\":0,\"pub_date\":1709385603,\"attach_msg\":null}",
                    "msg_seqno": 1236306587877408,
                    "timestamp": 1709385615,
                    "at_uids": null,
                    "msg_key": 7341755312943193481,
                    "msg_status": 0,
                    "notify_code": "",
                    "new_face_version": 1,
                    "msg_source": 6
                },
                "group_type": 0,
                "can_fold": 0,
                "status": 0,
                "max_seqno": 1236306587877408,
                "new_push_msg": 0,
                "setting": 0,
                "is_guardian": 0,
                "is_intercept": 0,
                "is_trust": 0,
                "system_msg_type": 0,
                "live_status": 0,
                "biz_msg_unread_count": 0,
                "user_label": null
            },
            {
                "talker_id": 221082140,
                "session_type": 2,
                "at_seqno": 0,
                "top_ts": 0,
                "group_name": "社会易姐QwQ的应援团",
                "group_cover": "http://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg",
                "is_follow": 0,
                "is_dnd": 0,
                "ack_seqno": 20,
                "ack_ts": 1695011620552332,
                "session_ts": 1693626568439784,
                "unread_count": 0,
                "last_msg": {
                    "sender_uid": 0,
                    "receiver_type": 2,
                    "receiver_id": 221082140,
                    "msg_type": 306,
                    "content": "{\"group_id\":221082140,\"content\":\"欢迎罗板栗入群\"}",
                    "msg_seqno": 20,
                    "timestamp": 1693626568,
                    "at_uids": null,
                    "msg_key": 7274070721607234847,
                    "msg_status": 0,
                    "notify_code": "",
                    "msg_source": 13
                },
                "group_type": 0,
                "can_fold": 0,
                "status": 0,
                "max_seqno": 20,
                "new_push_msg": 0,
                "setting": 0,
                "is_guardian": 0,
                "is_intercept": 0,
                "is_trust": 0,
                "system_msg_type": 0,
                "live_status": 0,
                "biz_msg_unread_count": 0,
                "user_label": null
            }
        ],
        "has_more": 0,
        "anti_disturb_cleaning": false,
        "is_address_list_empty": 0,
        "show_level": false
    }
}
```

</details>

## 私信消息记录

> https://api.vc.bilibili.com/svr_sync/v1/svr_sync/fetch_session_msgs

*请求方式：GET*

认证方式：Cookie（SESSDATA）

此接口有设计缺陷，可以获取已经撤回的私信内容

**url参数：**

| 参数名            | 类型 | 内容             | 必要性 | 备注                                                   |
| ----------------- | ---- | ---------------- | ------ | ------------------------------------------------------ |
| talker_id         | num  | 聊天对象的id     | 必要   | `session_type` 为 `1` 时表示用户 mid，为 `2` 时表示粉丝团 id |
| session_type      | num  | 聊天对象的类型   | 必要   | 1：用户<br />2：粉丝团                                 |
| size              | num  | 返回消息数量     | 非必要 | 默认为 20，最大为 200                                  |
| begin_seqno       | num  | 开始的序列号     | 非必要 | 提供本参数时返回以本序列号开始（不包括本序列号）的消息 |
| end_seqno         | num  | 结束的序列号     | 非必要 | 提供本参数时返回以本序列号结束（不包括本序列号）的消息 |
| sender_device_id  | num  | 发送者设备       | 非必要 | 默认为 `1`                                             |
| build             | num  | 客户端内部版本号 | 非必要 | 默认为 `0`                                             |
| mobi_app          | str  | 平台标识         | 非必要 | 可为 `web` 等；**若本参数值为 `web`，则返回新版表情包** |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| msg     | str  | 错误信息 | 默认为0                                           |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 数据本体 |                                                   |

`data`对象：

| 字段      | 类型  | 内容                           | 备注                                |
| --------- | ----- | ------------------------------ | ----------------------------------- |
| messages  | 有私信时：array<br />无私信时：null | 私信列表                       | 按发送时间顺序逆向排序              |
| has_more  | num   | 是否有更多私信                 |                                     |
| min_seqno | num   | 所有消息中最小的序列号（最早） | 若无私信则为 `18446744073709551615` |
| max_seqno | num   | 所有消息中最大的序列号（最晚） | 若无私信则为 `0`                    |
| e_infos   | array | 聊天表情列表                   | 若私信列表中无表情则无此项          |

`data`对象中的`messages`数组：

| 项   | 类型 | 内容      | 备注                              |
| ---- | ---- | --------- | --------------------------------- |
| 0    | obj  | 私信1     | 详见[私信主体对象](#私信主体对象) |
| n    | obj  | 私信(n+1) |                                   |
| ……   | obj  | ……        | ……                                |

`data`对象中的`e_infos`数组：

| 项   | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| 0    | obj  | 表情1     |      |
| n    | obj  | 表情(n+1) |      |
| ……   | obj  | ……        | ……   |

`data`对象中的`e_infos`数组中的对象：

| 字段    | 类型 | 内容        | 备注                                |
| ------- | ---- | ----------- | ----------------------------------- |
| text    | str  | 表情名称    | 包括左右两侧的中括号，如`[tv_doge]` |
| uri     | str  | 表情链接    |                                     |
| size    | num  | 表情尺寸    | 1：小<br />2：大                    |
| gif_url | str  | 表情GIF链接 | 仅部分表情存在此项                  |

**示例：**

获取与目标用户`mid=123`的私信记录：

```shell
curl -G 'https://api.vc.bilibili.com/svr_sync/v1/svr_sync/fetch_session_msgs' \
    --data-urlencode 'talker_id=123' \
    --data-urlencode 'session_type=1' \
    --data-urlencode 'size=20' \
    --data-urlencode 'sender_device_id=1' \
    --data-urlencode 'build=0' \
    --data-urlencode 'mobi_app=web' \
    -b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "0",
    "message": "0",
    "ttl": 1,
    "data": {
        "messages": [
            {
                "sender_uid": 2239814,
                "receiver_type": 1,
                "receiver_id": 123,
                "msg_type": 1,
                "content": "{\"content\":\"[口罩]\"}",
                "msg_seqno": 309675413389322,
                "timestamp": 1654154093,
                "at_uids": [
                    0
                ],
                "msg_key": 7104537732714964358,
                "msg_status": 0,
                "notify_code": "",
                "new_face_version": 1,
                "msg_source": 2
            },
            {
                "sender_uid": 2239814,
                "receiver_type": 1,
                "receiver_id": 123,
                "msg_type": 5,
                "content": "{\"content\":\"1\"}",
                "msg_seqno": 308302399586307,
                "timestamp": 1654072255,
                "at_uids": [
                    0
                ],
                "msg_key": 7104186240789226795,
                "msg_status": 0,
                "notify_code": "",
                "msg_source": 7

            },
        ],
        "has_more": 0,
        "min_seqno": 308188515844097,
        "max_seqno": 309675413389322,
        "e_infos": [
            {
                "text": "[口罩]",
                "url": "http://i0.hdslb.com/bfs/emote/3ad2f66b151496d2a5fb0a8ea75f32265d778dd3.png",
                "size": 1
            }
        ]
    }
}
```

</details>

## 发送私信（web端）

> https://api.vc.bilibili.com/web_im/v1/web_im/send_msg

*请求方式：POST*

认证方式：Cookie（SESSDATA）

**正文参数（application/x-www-form-urlencoded）：**

| 参数名                | 类型 | 内容                     | 必要性 | 备注                                                 |
| --------------------- | ---- | ------------------------ | ------ | ---------------------------------------------------- |
| msg[sender_uid]       | num  | 发送者mid                | 必要   | 必须为自己的 mid                                     |
| msg[receiver_id]      | num  | 接收者id                 | 必要   | `msg[receiver_type]` 为 `1` 时表示用户 mid，为 `2` 时表示粉丝团 id |
| msg[receiver_type]    | num  | 接收者类型               | 必要   | 1：用户<br />2：粉丝团                               |
| msg[msg_type]         | num  | 消息类型                 | 必要   | 详见[私信消息类型、内容说明](private_msg_content.md) |
| msg[msg_status]       | num  | 消息状态                 | 非必要 | 恒为 `0`                                             |
| msg[dev_id]           | str  | dev_id                   | 必要   | 实质上即 UUID（版本 4），**生成方式在下面**          |
| msg[timestamp]        | num  | 当前时间戳（秒）         | 必要   |                                                      |
| msg[new_face_version] | num  | 表情包版本               | 非必要 | 提供 `0` 或者未提供本参数表示旧版表情包，此时 B 站会自动转换成新版表情包，例如 `[doge]` -> `[tv_doge]`；`1` 为新版 |
| msg[content]          | str  | 消息内容                 | 必要   | 详见[私信消息类型、内容说明](private_msg_content.md) |
| csrf_token            | str  | CSRF Token（位于cookie） | 必要   |                                                      |
| csrf                  | str  | CSRF Token（位于cookie） | 必要   |                                                      |
| build                 | num  | 客户端内部版本号         | 非必要 | 默认为 `0`                                           |
| mobi_app              | str  | 平台标识                 | 非必要 | 可为 `web` 等                                        |

---

**dev_id 的生成：**

dev_id 实质上就是 UUID（版本 4）

<details>
<summary>查看生成 UUID 的代码</summary>

**以 Python 为例：**

```python
import uuid

dev_id = str(uuid.uuid4())
```

**以 JS 为例：**

以下代码适用于较新版的 JS 引擎（Chrome≥92，Firefox≥95，Safari≥15.4，Node.js≥19.0.0）：

```js
const dev_id = crypto.randomUUID();
```

以下为通用代码（来自 [andywang425/BLTH](https://github.com/andywang425/BLTH/blob/45fe93e31754ca8bf07059d46266398e787dbf45/B%E7%AB%99%E7%9B%B4%E6%92%AD%E9%97%B4%E6%8C%82%E6%9C%BA%E5%8A%A9%E6%89%8B.js#L6618)）

```js
const dev_id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (name) {
  let randomInt = 16 * Math.random() | 0;
  return ("x" === name ? randomInt : 3 & randomInt | 8).toString(16).toUpperCase()
}));
```

**以 Java 为例：**

```java
import java.util.UUID;

public class Main {
    private String getDevId() {
        UUID uuid = UUID.randomUUID();
        return uuid.toString();
    }
}
```

</details>

---

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误<br />10005：msgkey不存在<br />21007：消息过长，无法发送<br />21026：不能给自己发送消息哦~<br />21035：该类消息暂时无法发送<br />21037：图片格式不合法，不要调戏接口啦<br />21041：消息已超期，不能撤回了哦<br />21042：消息已经撤回了哦<br />21046：你发消息的频率太高了，请在24小时后再发吧~<br />21047：对方主动回复或关注你前，最多发送1条消息~<br />25003：因对方隐私设置，暂无法给他发送聊天消息<br />25005：你已拉黑了对方，请先将对方移出黑名单后才能聊天 |
| message | str  | 错误信息 | 成功时为0                                         |
| ttl     | num  |          | 默认为1                                           |
| data    | 有效时：obj<br />无效时：null  | 信息本体 |                                                   |

`data`对象：

| 字段          | 类型  | 内容       | 备注                                                                  |
| ------------- | ----- | ---------- | --------------------------------------------------------------------- |
| msg_key       | num   | 消息唯一id |                                                                       |
| e_infos       | array | 表情列表   | 若私信中无表情则无此项                                                |
| msg_content   | str   | 发送的消息 | 仅当请求参数中`msg[msg_type]`为`1`且`msg[receiver_type]`为`1`时有此项 |
| key_hit_infos | obj   | 触发的提示 | 仅当请求参数中`msg[msg_type]`为`1`且`msg[receiver_type]`为`1`时有此项 |

`data`对象中的`e_infos`数组：

| 项   | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| 0    | obj  | 表情1     |      |
| n    | obj  | 表情(n+1) |      |
| ……   | obj  | ……        | ……   |

`data`对象中的`e_infos`数组中的对象：

| 字段    | 类型 | 内容        | 备注                                |
| ------- | ---- | ----------- | ----------------------------------- |
| text    | str  | 表情名称    | 包括左右两侧的中括号，如`[tv_doge]` |
| uri     | str  | 表情链接    |                                     |
| size    | num  | 表情尺寸    | 1：小<br />2：大                    |
| gif_url | str  | 表情GIF链接 | 仅部分表情存在此项                  |

`data`对象中的`key_hit_infos`对象：

| 字段      | 类型  | 内容         | 备注                                   |
| --------- | ----- | ------------ | -------------------------------------- |
| toast     | str   | 提示信息文字 | 当触发了提示时有此项                   |
| rule_id   | num   | 触发的规则id | 当触发了提示时有此项，详细信息有待补充 |
| high_text | array | 高亮的文本   | 当触发了提示时有此项                   |

`data`对象中的`key_hit_infos`对象中的`high_text`数组：

| 项   | 类型 | 内容          | 备注             |
| ---- | ---- | ------------- | ---------------- |
| 0    | obj  | 高亮文本1     | 详细信息有待补充 |
| n    | obj  | 高亮文本(n+1) |                  |
| ……   | obj  | ……            | ……               |

**示例：**

给目标用户`mid=1`发一条文字私信：

> up主你好，
> 催更[doge]

```shell
curl 'https://api.vc.bilibili.com/web_im/v1/web_im/send_msg' \
--data-urlencode 'msg[sender_uid]=293793435' \
--data-urlencode 'msg[receiver_id]=1' \
--data-urlencode 'msg[receiver_type] =1' \
--data-urlencode 'msg[msg_type]=1' \
--data-urlencode 'msg[msg_status]=0' \
--data-urlencode 'msg[dev_id]=372778FD-E359-461D-86A3-EA2BCC6FF52A' \
--data-urlencode 'msg[timestamp]=1626181379' \
--data-urlencode 'msg[new_face_version]=1' \
--data-urlencode 'msg[content]={"content":"up主你好，\n催更[doge]"}' \
--data-urlencode 'csrf=xxx' \
--data-urlencode 'csrf_token=xxx' \
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
    "msg_key": 6984393491767669026,
    "msg_content": "{\"content\":\"up主你好，\n催更[doge]\"}",
    "key_hit_infos": {}
  }
}
```

</details>

给目标用户`mid=1`发一条图片私信：

> <img src="https://i1.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg" style="zoom:50%;">

```shell
curl 'https://api.vc.bilibili.com/web_im/v1/web_im/send_msg' \
--data-urlencode 'msg[sender_uid]=293793435' \
--data-urlencode 'msg[receiver_id]=1' \
--data-urlencode 'msg[receiver_type] =1' \
--data-urlencode 'msg[msg_type]=2' \
--data-urlencode 'msg[msg_status]=0' \
--data-urlencode 'msg[dev_id]=372778FD-E359-461D-86A3-EA2BCC6FF52A' \
--data-urlencode 'msg[timestamp]=1626181379' \
--data-urlencode 'msg[content]={"url":"https://i1.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg"}' \
--data-urlencode 'csrf=xxx' \
--data-urlencode 'csrf_token=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "data": {
    "msg_key": 6852570013146024354
  }
}
```

</details>

给目标用户`mid=1`发送会触发提示的私信：

> 支付宝

```shell
curl 'https://api.vc.bilibili.com/web_im/v1/web_im/send_msg' \
--data-urlencode 'msg[sender_uid]=293793435' \
--data-urlencode 'msg[receiver_id]=1' \
--data-urlencode 'msg[receiver_type] =1' \
--data-urlencode 'msg[msg_type]=1' \
--data-urlencode 'msg[msg_status]=0' \
--data-urlencode 'msg[dev_id]=372778FD-E359-461D-86A3-EA2BCC6FF52A' \
--data-urlencode 'msg[timestamp]=1626181379' \
--data-urlencode 'msg[content]={"content":"支付宝"}' \
--data-urlencode 'csrf=xxx' \
--data-urlencode 'csrf_token=xxx' \
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
    "msg_key": 6984393491767669026,
    "msg_content": "{\"content\":\"支付宝\"}",
    "key_hit_infos": {
      "toast": "【温馨提示】为保障消费者权益，根据平台规则，如创作者在与消费者沟通中进行发布要求非法转账、欺诈转账等违规行为，平台有权对此进行处罚，感谢您的理解。",
      "rule_id": 2,
      "high_text": [ {} ]
    }
  }
}
```

</details>
