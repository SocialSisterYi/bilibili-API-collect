# 直播间信息流

- [获取信息流认证秘钥](#获取信息流认证秘钥)

---

## 获取信息流认证秘钥

> https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容         | 必要性 | 备注 |
| ------ | ---- | ------------ | ------ | ---- |
| id     | num  | 直播间真实id | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />65530：token错误（登录错误）<br />1：错误<br />60009：分区不存在<br />**（其他错误码有待补充）** |
| message | str  | 错误信息 | 默认为空                                                     |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段               | 类型  | 内容                 | 备注 |
| ------------------ | ----- | ------------------- | ---- |
| group              | str   | live                |      |
| business_id        | num   | 0                   |      |
| refresh_row_factor | num   | 0.125               |      |
| refresh_rate       | num   | 100                 |      |
| max_delay          | num   | 5000                |      |
| token              | str   | 认证秘钥            |      |
| host_list          | array | 信息流服务器节点列表 |      |

`host_list`数组中的对象：

| 字段     | 类型 | 内容       | 备注 |
| -------- | ---- | ---------- | ---- |
| host     | str  | 服务器域名 |      |
| port     | num  | tcp端口    |      |
| wss_port | num  | wss端口    |      |
| ws_port  | num  | ws端口     |      |

**示例：**

获得直播间`22824550`的信息流认证秘钥

```shell
curl -G 'http://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo' \
--data-urlencode 'id=22824550'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "group": "live",
    "business_id": 0,
    "refresh_row_factor": 0.125,
    "refresh_rate": 100,
    "max_delay": 5000,
    "token": "Eac3Lm1JADzny-YnB5MW0MQcd23rw_mgMFZAnu40I-J2ecP2Qj6CH-UqjdfvwiqVEZcEksG1ONSOi1dGzm0wM4FxqA-ZYXtcQyHXPXqxmrx3AmDx8Z5-d4TuKQkaU0zxevH1B-gnu7g8TDtIE4lns4BYlw==",
    "host_list": [
      {
        "host": "tx-sh-live-comet-02.chat.bilibili.com",
        "port": 2243,
        "wss_port": 443,
        "ws_port": 2244
      },
      {
        "host": "tx-bj-live-comet-02.chat.bilibili.com",
        "port": 2243,
        "wss_port": 443,
        "ws_port": 2244
      },
      {
        "host": "broadcastlv.chat.bilibili.com",
        "port": 2243,
        "wss_port": 443,
        "ws_port": 2244
      }
    ]
  }
}
```

</details>

## 信息流数据包格式

数据包为MQ（消息队列）使用websocket或tcp作为通道，具体格式为头部数据+正文数据

操作流程：

发送认证包->接收认证包回应->接收普通包&（每30秒发送心跳包->接收心跳回应）

头部格式：

| 偏移量 | 长度 | 类型   | 含义                                                         |
| ------ | ---- | ------ | ------------------------------------------------------------ |
| 0      | 4    | uint32 | 封包总大小（头部大小+正文大小）                              |
| 4      | 2    | uint16 | 头部大小（一般为0x0010，16字节）                             |
| 6      | 2    | uint16 | 协议版本:<br />0普通包正文不使用压缩 <br />1心跳及认证包正文不使用压缩<br />2普通包正文使用zlib压缩<br/>3普通包正文使用brotli压缩,解压为一个带头部的协议0普通包 |
| 8      | 4    | uint32 | 操作码（封包类型）                                           |
| 12     | 4    | uint32 | sequence，每次发包时向上递增                                 |

操作码：

| 代码 | 含义                 |
| ---- | -------------------- |
| 2    | 心跳包               |
| 3    | 心跳包回复（人气值） |
| 5    | 普通包（命令）       |
| 7    | 认证包               |
| 8    | 认证包回复           |

*brotli压缩（协议版本为3）的普通包可能包含多条命令，解压后，每个命令有一个头部，且协议版本为0，指示该条命令的长度等信息


### 认证包

方式：（上行）

连接成功后5秒内发送，否则强制断开连接

正文：

json格式

| 字段     | 类型 | 内容         | 必要性 | 备注               |
| -------- | ---- | ------------ | ------ | ------------------ |
| uid      | num  | 用户mid      | 非必要 | uid为0即为游客登录 |
| roomid   | num  | 加入房间的id | 必要   | 直播间真实id       |
| protover | num  | 协议版本     | 非必要 | 3                  |
| platform | str  | 平台标识     | 非必要 | "web"              |
| type     | num  | 2            | 非必要 |                    |
| key      | str  | 认证秘钥     | 非必要 |                    |

示例：

```
00000000: 0000 00ff 0010 0001 0000 0007 0000 0001  ................
00000001: 7b22 7569 6422 3a31 3630 3134 3836 3234  {"uid":160148624
00000002: 2c22 726f 6f6d 6964 223a 3232 3630 3831  ,"roomid":226081
00000003: 3132 2c22 7072 6f74 6f76 6572 223a 332c  12,"protover":3,
00000004: 2270 6c61 7466 6f72 6d22 3a22 7765 6222  "platform":"web"
00000005: 2c22 7479 7065 223a 322c 226b 6579 223a  ,"type":2,"key":
00000006: 2230 7670 5448 5737 7757 556e 6c6f 5270  "0vpTHW7wWUnloRp
00000007: 5251 6b47 764e 626e 7776 7364 6d2d 7159  RQkGvNbnwvsdm-qY
00000008: 4777 4243 5875 2d59 5164 6e57 7653 5547  GwBCXu-YQdnWvSUG
00000009: 7373 4139 7962 4b68 7932 6a78 3952 6f63  ssA9ybKhy2jx9Roc
0000000a: 4150 4651 6d54 4f6b 5277 6b4b 687a 4479  APFQmTOkRwkKhzDy
0000000b: 4839 5054 756f 5468 6834 4630 7562 584c  H9PTuoThh4F0ubXL
0000000c: 4964 6e69 3734 5539 304b 4242 6972 3248  Idni74U90KBBir2H
0000000d: 7451 3941 3777 674b 3438 4b7a 495f 5a5a  tQ9A7wgK48KzI_ZZ
0000000e: 3838 7557 4e59 6652 4f48 6964 4e6a 3732  88uWNYfROHidNj72
0000000f: 7061 796e 3479 3071 4268 513d 3d22 7d    payn4y0qBhQ=="}
```



### 认证包回复

方式：（下行）

在认证包发送成功后就会收到

json格式

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| code | num  | 返回值 | 0认证成功 |

示例：

```
00000000  00 00 00 1a 00 10 00 01  00 00 00 08 00 00 00 01  |................|
00000010  7b 22 63 6f 64 65 22 3a  30 7d                    |{"code":0}|
```



### 心跳包

方式：（上行）

30秒左右发送一次，否则60秒后会被强制断开连接

正文：

可以为空或任意字符

示例：

```
00000000: 0000 001f 0010 0001 0000 0002 0000 0001  ................
00000001: 5b6f 626a 6563 7420 4f62 6a65 6374 5d    [object Object]
```

### 心跳回应（人气值）

方式：（下行）

在心跳包发送成功后就会收到

正文：

正文分为两个部分，第一部分是人气值 [uint32整数，代表房间当前的人气值]

第二部分是对于心跳包内容的复制，心跳包正文是什么这里就会回应什么。

示例：

```
00000000: 0000 0014 0010 0001 0000 0003 0000 0000  ................
00000001: 0000 09a2 5b6f 626a 6563 7420 4f62 6a65  ....[object Obje
00000002: 6374 5d
```

可见房间内人气值为2466(0x000009a2)

### 普通包

普通包的协议版本不同，这里以协议版本为0(正文不使用压缩)为例

协议版本为其他值时，正文的压缩方式不同，根据相应的类型，可解压为多条协议版本为0的普通包

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | string  | 命令类型 | 代表该条信息的类型 |

方式：（下行）

其中, 命令类型可能有以下几种：
| 原始命令 | 含义 | 备注 |
| ----------- | ---- | ------ |
|ONLINE_RANK_COUNT | 未知 |   |
|STOP_LIVE_ROOM_LIST | 未知 |   |
|DANMU_MSG | 弹幕消息 |   |
|INTERACT_WORD | 未知 |   |
|ONLINE_RANK_TOP3 | 未知 |   |
|WIDGET_BANNER | 未知 |   |
|LIKE_INFO_V3_UPDATE | 未知 |   |
|ROOM_REAL_TIME_MESSAGE_UPDATE | 未知 |   |
|LIKE_INFO_V3_CLICK | 未知 |   |
|HOT_RANK_CHANGED | 未知 |   |
|HOT_RANK_CHANGED_V2 | 未知 |   |
|SEND_GIFT | 发送礼物 |   |
|ONLINE_RANK_V2 | 未知 |   |
|ROOM_BLOCK_MSG | 未知 |   |
|SUPER_CHAT_MESSAGE | Super Chat |  | 
|SUPER_CHAT_MESSAGE_JPN | 日文Super Chat |   |
|FULL_SCREEN_SPECIAL_EFFECT | 未知 |   |
|COMMON_NOTICE_DANMAKU | 未知 |   |
|TRADING_SCORE | 未知 |   |
|PREPARING | 直播准备中 |   |
|ROOM_CHANGE | 未知 |   |
|LIVE | 直播开始 |   |
|GUARD_BUY | 购买大航海 |   |
|GIFT_STAR_PROCESS | 未知 |   |
|ROOM_SKIN_MSG | 未知 |   |
|GUARD_HONOR_THOUSAND | 未知 |   |


#### 弹幕 (DANMU_MSG)

方式：（下行）

当收到弹幕时接收到此条消息

json格式

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | string  | "DANMU_MSG" | 如果是弹幕消息，内容则是"DANMU_MSG" |
| info | list  | 单条弹幕的用户、内容、粉丝勋章等各种信息 | 待补 |

`info`数组中的对象

| 字段 | 类型 | 内容 | 备注 |
|------|------|------|------|
|  0  | list | 未知 | |
|  1  | string | 弹幕内容 | |
|  2  | list | 发送者信息 | |
|  3  | list | 发送者直播间牌子信息 | | 
|  4  | list | 未知 | |
|  5  | list | 未知 | |
|  6  | int | 未知 | |
|  7  | int | 未知 | |
|  8  | 未知 | 未知| |
|  9  | dict | 可能为时间戳信息 | |
|  10  | int | 未知 | |
|  11  | int | 未知 | |
|  12  | 未知 | 未知| |
|  13  | 未知 | 未知| |
|  14  | int  | 未知 | |
|  15  | int | 未知 | |
<details>
<summary>查看消息示例：</summary>

``` json
{
	"cmd": "DANMU_MSG",
	"info": [
		[0, 1, 25, 5816798, 1671617753583, 903112545, 0, "ed0edd10", 0, 0, 0, "", 1, {
			"bulge_display": 0,
			"emoticon_unique": "official_147",
			"height": 60,
			"in_player_area": 1,
			"is_dynamic": 0,
			"url": "http://i0.hdslb.com/bfs/live/bbd9045570d0c022a984c637e406cb0e1f208aa9.png",
			"width": 150
		}, "{}", {
			"extra": "{\"send_from_me\":false,\"mode\":0,\"color\":5816798,\"dm_type\":1,\"font_size\":25,\"player_mode\":1,\"show_player_type\":0,\"content\":\"赞\",\"user_hash\":\"3977174288\",\"emoticon_unique\":\"official_147\",\"bulge_display\":0,\"recommend_score\":3,\"main_state_dm_color\":\"\",\"objective_state_dm_color\":\"\",\"direction\":0,\"pk_direction\":0,\"quartet_direction\":0,\"anniversary_crowd\":0,\"yeah_space_type\":\"\",\"yeah_space_url\":\"\",\"jump_to_url\":\"\",\"space_type\":\"\",\"space_url\":\"\",\"animation\":{},\"emots\":null}",
			"mode": 0,
			"show_player_type": 0
		}, {
			"activity_identity": "",
			"activity_source": 0,
			"not_show": 0
		}], "赞", [557695427, "洛绯-LuoFei", 0, 0, 0, 10000, 1, ""],
		[15, "萝狮粉", "蕾尔娜Leona", 22992234, 12478086, "", 0, 12478086, 12478086, 12478086, 0, 1, 473244363],
		[4, 0, 9868950, "\u003e50000", 0],
		["", ""], 0, 0, null, {
			"ct": "3D542981",
			"ts": 1671617753
		},
		0, 0, null, null, 0, 63
	]
}
```
</details>

#### 进场或关注消息 (INTERACT_WORD)

方式：（下行）

有用户进入或关注直播间时触发

json格式

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | string  | "INTERACT_WORD" | 如果是进场或关注消息，内容则是"INTERACT_WORD" |
| data | obj  | 进场人信息 |  |

data字段

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| contribution | obj  | 待调查 |  |
| dmscore | number  | 待调查 |  |
| fans_medal | obj  | 粉丝勋章 |  |
| identities | number  | 待调查 |  |
| is_spread | number  | 待调查 |  |
| msg_type | number  | 1为进场，2为关注 |  |
| roomid | number  | 房间号 |  |
| is_spread | number  | 待调查 |  |
| is_spread | number  | 待调查 |  |
| score | number  | 待调查 |  |
| spread_desc | string  | 待调查 |  |
| spread_info | string  | 待调查 |  |
| tail_icon | number  | 待调查 |  |
| timestamp | number  | 时间戳 |  |
| trigger_time | number  | 触发时间 |  |
| uid | number  | 用户ID |  |
| uname | string  | 用户名称 |  |
| uname_color | string  | 用户颜色 |  |

<details>
<summary>查看消息示例：</summary>

```json
{
    "cmd": "INTERACT_WORD",
    "data": {
        "contribution": {
            "grade": 0
        },
        "dmscore": 4,
        "fans_medal": {
            "anchor_roomid": 890976,
            "guard_level": 0,
            "icon_id": 0,
            "is_lighted": 0,
            "medal_color": 6067854,
            "medal_color_border": 12632256,
            "medal_color_end": 12632256,
            "medal_color_start": 12632256,
            "medal_level": 1,
            "medal_name": "小豆皮",
            "score": 134,
            "special": "",
            "target_id": 6574487
        },
        "identities": [
            1
        ],
        "is_spread": 0,
        "msg_type": 1,
        "roomid": 24143902,
        "score": 1644563948936,
        "spread_desc": "",
        "spread_info": "",
        "tail_icon": 0,
        "timestamp": 1644563948,
        "trigger_time": 1644563947876475000,
        "uid": 335979315,
        "uname": "TIM_Init",
        "uname_color": ""
    }
}
```

</details>


#### 送礼 (SEND_GIFT)

方式：（下行）

有用户赠送礼物时触发

json格式

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | string  | "SEND_GIFT" |  |
| data | obj  | 礼物信息 |  |

<details>
<summary>查看消息示例：</summary>

```json
{
	"cmd": "SEND_GIFT",
	"data": {
		"action": "投喂",
		"batch_combo_id": "batch:gift:combo_id:277115696:1657906522:31164:1671617758.3925",
		"batch_combo_send": {
			"action": "投喂",
			"batch_combo_id": "batch:gift:combo_id:277115696:1657906522:31164:1671617758.3925",
			"batch_combo_num": 1,
			"blind_gift": null,
			"gift_id": 31164,
			"gift_name": "粉丝团灯牌",
			"gift_num": 1,
			"send_master": null,
			"uid": 277115696,
			"uname": "喜欢喝可乐OAQ"
		},
		"beatId": "",
		"biz_source": "Live",
		"blind_gift": null,
		"broadcast_id": 0,
		"coin_type": "gold",
		"combo_resources_id": 1,
		"combo_send": {
			"action": "投喂",
			"combo_id": "gift:combo_id:277115696:1657906522:31164:1671617758.3890",
			"combo_num": 1,
			"gift_id": 31164,
			"gift_name": "粉丝团灯牌",
			"gift_num": 1,
			"send_master": null,
			"uid": 277115696,
			"uname": "喜欢喝可乐OAQ"
		},
		"combo_stay_time": 3,
		"combo_total_coin": 1000,
		"crit_prob": 0,
		"demarcation": 2,
		"discount_price": 1000,
		"dmscore": 48,
		"draw": 0,
		"effect": 3,
		"effect_block": 0,
		"face": "https://i2.hdslb.com/bfs/face/594039d10f0c8755f1c438b404f81b420e314940.jpg",
		"face_effect_id": 0,
		"face_effect_type": 0,
		"float_sc_resource_id": 0,
		"giftId": 31164,
		"giftName": "粉丝团灯牌",
		"giftType": 0,
		"gold": 0,
		"guard_level": 0,
		"is_first": true,
		"is_naming": false,
		"is_special_batch": 0,
		"magnification": 1,
		"medal_info": {
			"anchor_roomid": 0,
			"anchor_uname": "",
			"guard_level": 0,
			"icon_id": 0,
			"is_lighted": 1,
			"medal_color": 12478086,
			"medal_color_border": 12478086,
			"medal_color_end": 12478086,
			"medal_color_start": 12478086,
			"medal_level": 14,
			"medal_name": "紫蘇",
			"special": "",
			"target_id": 8199
		},
		"name_color": "",
		"num": 1,
		"original_gift_name": "",
		"price": 1000,
		"rcost": 5975990,
		"remain": 0,
		"rnd": "1671617758131600001",
		"send_master": null,
		"silver": 0,
		"super": 0,
		"super_batch_gift_num": 1,
		"super_gift_num": 1,
		"svga_block": 0,
		"switch": true,
		"tag_image": "",
		"tid": "1671617758131600001",
		"timestamp": 1671617758,
		"top_list": null,
		"total_coin": 1000,
		"uid": 277115696,
		"uname": "喜欢喝可乐OAQ"
	}
}
```
</details>

#### 系统消息

方式：（下行）

系统消息

json格式

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | string  | "NOTICE_MSG" |  |
| business_id | string  | 待调查 |  |
| full | obj  | 待调查 |  |
| half | obj  | 待调查 |  |
| id | int | 待调查| | 
| link_url | 待调查| |
| marquee_id |待调查| |
| msg_common | string  | 待调查 |  |
| msg_self | string  | 待调查 |  |
| msg_type | number  | 待调查 |  |
| name | string  | 通知名称 |  |
| notice_type | int | 待调查| |
| real_roomid | int | 真实直播间号 | |
| roomid | int | 直播间号 | |
| scatter | obj | 待调查| |
| shield_uid | int |待调查| |
| side | obj | 待调查| |

<details>
<summary>查看消息示例：</summary>

```json
{
    "cmd": "NOTICE_MSG",
	"business_id": "31087",
	"full": {
		"background": "#6098FFFF",
		"color": "#FFFFFFFF",
		"head_icon": "http://i0.hdslb.com/bfs/live/00f26756182b2e9d06c00af23001bc8e10da67d0.webp",
		"head_icon_fa": "http://i0.hdslb.com/bfs/live/77983005023dc3f31cd599b637c83a764c842f87.png",
		"head_icon_fan": 36,
		"highlight": "#FDFF2FFF",
		"tail_icon": "http://i0.hdslb.com/bfs/live/822da481fdaba986d738db5d8fd469ffa95a8fa1.webp",
		"tail_icon_fa": "http://i0.hdslb.com/bfs/live/38cb2a9f1209b16c0f15162b0b553e3b28d9f16f.png",
		"tail_icon_fan": 4,
		"time": 20
	},
	"half": {
		"background": "#7BB6F2FF",
		"color": "#FFFFFFFF",
		"head_icon": "http://i0.hdslb.com/bfs/live/358cc52e974b315e83eee429858de4fee97a1ef5.png",
		"highlight": "#FDFF2FFF",
		"tail_icon": "",
		"time": 15
	},
	"id": 2,
	"link_url": "https://live.bilibili.com/24993671?broadcast_type=1\u0026is_room_feed=1\u0026from=28003\u0026extra_jump_from=28003\u0026live_lottery_type=1",
	"marquee_id": "",
	"msg_common": "\u003c%屑無慘%\u003e投喂:\u003c%睡不醒的悦子%\u003e1个次元之城，点击前往TA的房间吧！",
	"msg_self": "\u003c%屑無慘%\u003e投喂:\u003c%睡不醒的悦子%\u003e1个次元之城，快来围观吧！",
	"msg_type": 2,
	"name": "分区道具抽奖广播样式",
	"notice_type": 0,
	"real_roomid": 24993671,
	"roomid": 24993671,
	"scatter": {
		"max": 0,
		"min": 0
	},
	"shield_uid": -1,
	"side": {
		"background": "",
		"border": "",
		"color": "",
		"head_icon": "",
		"highlight": ""
	}
}
```
</details>


#### 主播准备中 (PREPARING)

方式：（下行）

直播开始前触发

json格式

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | string  | "PREPARING" |  |
| roomid | string  | 房间号 |  |
```json
{
    "cmd":"PREPARING",
    "roomid":"5169315"
}
```


#### 直播开始 (LIVE)

方式：（下行）

直播开始

json格式

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | string  | "PREPARING" |  |
| roomid | string  | 房间号 |  |
| live_key | string  | 未知 |  |
| voice_background | string  | 未知 |  |
| sub_session_key | string  | 未知 |  |
| live_platform | string  | 平台 |  |
| live_model | number  | 未知 |  |
| live_time | number  | 直播开始时间戳 |  |

<details>
<summary>查看消息示例：</summary>

```json
{
	"cmd": "LIVE",
	"live_key": "321701618935324835",
	"voice_background": "",
	"sub_session_key": "321701618935324835sub_time:1671498004",
	"live_platform": "pc",
	"live_model": 0,
	"live_time": 1671498004,
	"roomid": 5169315
}
```
</details>

#### 大航海上船 (GUARD_BUY)
方式：（下行）

购买大航海

json格式

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | string  | "GUARD_BUY" |  |
| data | obj  | 房间号 |  |

`data`字段中的信息

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| end_time | number  | 大航海结束时间 |  |
| gift_id | number  | 礼物id |  |
| gift_name | string  | 大航海名称 |  |
| guard_level | number  | 大航海等级 |  |
| num | number  | 礼物数量 |  |
| price | number  | 礼物价格 |  |
| start_time | number  | 大航海开始时间 |  |
| uid | number  | 用户id |  |
| username | string  | 用户名 |  |

<details>
<summary>查看消息示例：</summary>

```json
{
	"cmd": "GUARD_BUY",
	"data": {
		"end_time": 1671617816,
		"gift_id": 10003,
		"gift_name": "舰长",
		"guard_level": 3,
		"num": 1,
		"price": 198000,
		"start_time": 1671617816,
		"uid": 319174880,
		"username": "簌溯susu"
	}
}
```
</details>

#### Super Chat信息（SUPER_CHAT_MESSAGE/SUPER_CHAT_MESSAGE_JPN）

方式：（下行）

用户付费留言

json格式

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | string  | "SUPER_CHAT_MESSAGE" | 或"SUPER_CHAT_MESSAGE_JPN" |
| data | obj  | 相关信息 |  |


<details>
<summary>查看消息示例：</summary>

```json
{
    "cmd": "SUPER_CHAT_MESSAGE",
    "data": {
        "background_bottom_color": "#2A60B2",
        "background_color": "#EDF5FF",
        "background_color_end": "#405D85",
        "background_color_start": "#3171D2",
        "background_icon": "",
        "background_image": "https://i0.hdslb.com/bfs/live/a712efa5c6ebc67bafbe8352d3e74b820a00c13e.png",
        "background_price_color": "#7497CD",
        "color_point": 0.7,
        "dmscore": 120,
        "end_time": 1671617815,
        "gift": {
            "gift_id": 12000,
            "gift_name": "",
            "num": 1
        },
        "id": 5817930,
        "is_ranked": 0,
        "is_send_audit": 0,
        "medal_info": {
            "anchor_roomid": 22889484,
            "anchor_uname": "",
            "guard_level": 3,
            "icon_id": 0,
            "is_lighted": 1,
            "medal_color": "#1a544b",
            "medal_color_border": 6809855,
            "medal_color_end": 5414290,
            "medal_color_start": 1725515,
            "medal_level": 21,
            "medal_name": "",
            "special": "",
            "target_id": 591892279
        },
        "message": " ",
        "message_font_color": "#A3F6FF",
        "message_trans": "",
        "price": 30,
        "rate": 1000,
        "start_time": 1671617755,
        "time": 59,
        "token": "27249435",
        "trans_mark": 0,
        "ts": 1671617756,
        "uid": 443967479,
        "user_info": {
            "face": "https://i2.hdslb.com/bfs/face/585b9ef055b46857a77f8499c12a69a60186ee9b.jpg",
            "face_frame": "https://i0.hdslb.com/bfs/live/80f732943cc3367029df65e267960d56736a82ee.png",
            "guard_level": 3,
            "is_main_vip": 1,
            "is_svip": 0,
            "is_vip": 0,
            "level_color": "#61c05a",
            "manager": 0,
            "name_color": "#00D1F1",
            "title": "0",
            "uname": "",
            "user_level": 15
        }
    },
    "roomid": 22889484
}
```
</details>

#### 直播状态更新

#### 欢迎加入房间

#### 欢迎房管加入房间

#### 其他的一些不知道具体内容含义的消息示例:

<details>
<summary>查看消息示例：</summary>

ONLINE_RANK_COUNT

```json
{
	"cmd": "ONLINE_RANK_COUNT",
	"data": {
		"count": 557
	}
}
```

STOP_LIVE_ROOM_LIST
```json
{
	"cmd": "STOP_LIVE_ROOM_LIST",
	"data": {
		"room_id_list": [2014615, 23400497, 24862942, 23329745, 26424863, 6096702, 22206861, 22387349, 24600271, 14611979, 25227048, 25709007, 8070579, 25427092, 25681564, 26028917, 26372937, 26680236, 7103905, 24432249, 4651180, 1468047, 23232539, 23574026, 24524188, 25372261, 26703082, 736114, 8059032, 10460577, 24765948, 26441654, 26497815, 3283948, 11668523, 25960761, 26366665, 1355918, 26655378, 284675, 21295249, 23638584, 25436730, 25541429, 25749579, 26455618, 26682961, 26693962, 26702844, 8159593, 21459223, 25445533, 26575982, 8384156, 10033967, 25925246, 26568701, 982087, 14845696, 3534517, 5428509, 13844466, 25364562, 26655225, 55590, 14010625, 1407695, 23794316, 7518416, 13831409, 23393354, 23931110, 24332854, 26320257, 23462859, 26646210, 21353845, 23862547, 25473791, 26636043, 6673375, 1260611, 1900345, 26533049, 3201455, 2160809, 25412154, 26107127, 26496690, 26555096, 26646916, 4066032, 4489113, 1381574, 23836924, 26702054, 1189164, 24130737, 25438315, 5287134, 553359, 6176333, 6564627, 685495, 26571406, 26661551, 3247940, 10948353, 25351017, 14370817, 25209673, 26516610, 14443133, 22587885, 26000412, 26502922, 26697693, 3669632, 22215866, 22591773]
	}
}
```

ONLINE_RANK_TOP3
```json
{
	"cmd": "ONLINE_RANK_TOP3",
	"data": {
		"dmscore": 112,
		"list": [{
			"msg": "恭喜 \u003c%威震天天酷跑%\u003e 成为高能用户",
			"rank": 1
		}]
	}
}
```

WIDGET_BANNER
```json
{
	"cmd": "WIDGET_BANNER",
	"data": {
		"timestamp": 1671617825,
		"widget_list": {
			"271": {
				"band_id": 101181,
				"cover": "",
				"id": 271,
				"is_add": true,
				"jump_url": "https://live.bilibili.com/activity/live-activity-battle/index.html?app_name=bls_time_limit_task_2022\u0026is_live_half_webview=1\u0026hybrid_rotate_d=1\u0026hybrid_half_ui=1,3,100p,70p,0,0,0,0,12,0;2,2,375,100p,0,0,0,0,12,0;3,3,100p,70p,0,0,0,0,12,0;4,2,375,100p,0,0,0,0,12,0;5,3,100p,70p,0,0,0,0,12,0;6,3,100p,70p,0,0,0,0,12,0;7,3,100p,70p,0,0,0,0,12,0;8,3,100p,70p,0,0,0,0,12,0\u0026room_id=21706862\u0026uid=484660274#/",
				"platform_in": ["live", "blink", "live_link", "web", "pc_link"],
				"site": 1,
				"stay_time": 5,
				"sub_data": "%7B%22task_status%22%3A0%2C%22current_val%22%3A568%2C%22target_val%22%3A3390%2C%22timeout%22%3A2150%2C%22reward_price%22%3A140%2C%22reward_type%22%3A2%7D",
				"sub_key": "",
				"tip_bottom_color": "#282828",
				"tip_text": "BLS限时任务",
				"tip_text_color": "#FFFFFF",
				"title": "BLS限时任务",
				"type": 1,
				"url": "",
				"web_cover": ""
			}
		}
	}
}

```

LIKE_INFO_V3_UPDATE
```json
{
	"cmd": "LIKE_INFO_V3_UPDATE",
	"data": {
		"click_count": 28977
	}
}
```

ONLINE_RANK_V2
```json
{
    "cmd": "ONLINE_RANK_V2",
    "data": {
        "list": [
            {
                "face": "https://i2.hdslb.com/bfs/face/43d3e1f847be366be19f20f1dfc1e6545918652e.jpg",
                "guard_level": 0,
                "rank": 1,
                "score": "15",
                "uid": 1542711218,
                "uname": ""
            },
            {
                "face": "https://i0.hdslb.com/bfs/face/a966b87686ec38c0b0f57b4a0a13b957a70d9fdc.jpg",
                "guard_level": 0,
                "rank": 2,
                "score": "2",
                "uid": 97227384,
                "uname": ""
            },
            {
                "face": "https://i1.hdslb.com/bfs/face/8125a8b7ad03c7d4848607978e74395018965e56.jpg",
                "guard_level": 0,
                "rank": 3,
                "score": "1",
                "uid": 2066303308,
                "uname": "-DF"
            }
        ],
        "rank_type": "gold-rank"
    }
}
```

WATCHED_CHANGE
```json
{
    "cmd": "WATCHED_CHANGE",
    "data": {
        "num": 1514,
        "text_large": "1514",
        "text_small": "1514"
    }
}
```

HOT_RANK_CHANGED_V2
```json
{
    "cmd": "HOT_RANK_CHANGED_V2",
    "data": {
        "area_name": "",
        "blink_url": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=3&area_id=9&parent_area_id=9&second_area_id=371&is_live_half_webview=1&hybrid_rotate_d=1&is_cling_player=1&hybrid_half_ui=1,3,100p,70p,ffffff,0,30,100,0,0;2,2,375,100p,ffffff,0,30,100,0,0;3,3,100p,70p,ffffff,0,30,100,0,0;4,2,375,100p,ffffff,0,30,100,0,0;5,3,100p,70p,ffffff,0,30,100,0,0;6,3,100p,70p,ffffff,0,30,100,0,0;7,3,100p,70p,ffffff,0,30,100,0,0;8,3,100p,70p,ffffff,0,30,100,0,0",
        "countdown": 870,
        "icon": "https://i0.hdslb.com/bfs/live/cb2e160ac4f562b347bb5ae6e635688ebc69580f.png",
        "live_link_url": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=5&area_id=9&parent_area_id=9&second_area_id=371&is_live_half_webview=1&hybrid_rotate_d=1&is_cling_player=1&hybrid_half_ui=1,3,100p,70p,f4eefa,0,30,100,0,0;2,2,375,100p,f4eefa,0,30,100,0,0;3,3,100p,70p,f4eefa,0,30,100,0,0;4,2,375,100p,f4eefa,0,30,100,0,0;5,3,100p,70p,f4eefa,0,30,100,0,0;6,3,100p,70p,f4eefa,0,30,100,0,0;7,3,100p,70p,f4eefa,0,30,100,0,0;8,3,100p,70p,f4eefa,0,30,100,0,0",
        "live_url": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=1&area_id=9&parent_area_id=9&second_area_id=371&is_live_half_webview=1&hybrid_rotate_d=1&hybrid_half_ui=1,3,100p,70p,ffffff,0,30,100,12,0;2,2,375,100p,ffffff,0,30,100,0,0;3,3,100p,70p,ffffff,0,30,100,12,0;4,2,375,100p,ffffff,0,30,100,0,0;5,3,100p,70p,ffffff,0,30,100,0,0;6,3,100p,70p,ffffff,0,30,100,0,0;7,3,100p,70p,ffffff,0,30,100,0,0;8,3,100p,70p,ffffff,0,30,100,0,0",
        "pc_link_url": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=4&is_live_half_webview=1&area_id=9&parent_area_id=9&second_area_id=371&pc_ui=338,465,f4eefa,0",
        "rank": 28,
        "rank_desc": "top50",
        "timestamp": 1671617730,
        "trend": 0,
        "web_url": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=2&area_id=9&parent_area_id=9&second_area_id=371"
    }
}
```


HOT_RANK_CHANGED
```json
{
    "cmd": "HOT_RANK_CHANGED",
    "data": {
        "area_name": "",
        "blink_url": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=3&area_id=9&parent_area_id=9&second_area_id=0&is_live_half_webview=1&hybrid_rotate_d=1&is_cling_player=1&hybrid_half_ui=1,3,100p,70p,ffffff,0,30,100,0,0;2,2,375,100p,ffffff,0,30,100,0,0;3,3,100p,70p,ffffff,0,30,100,0,0;4,2,375,100p,ffffff,0,30,100,0,0;5,3,100p,70p,ffffff,0,30,100,0,0;6,3,100p,70p,ffffff,0,30,100,0,0;7,3,100p,70p,ffffff,0,30,100,0,0;8,3,100p,70p,ffffff,0,30,100,0,0",
        "countdown": 860,
        "icon": "https://i0.hdslb.com/bfs/live/63217712edb588864b2c714225992e7f46b0b917.png",
        "live_link_url": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=5&area_id=9&parent_area_id=9&second_area_id=0&is_live_half_webview=1&hybrid_rotate_d=1&is_cling_player=1&hybrid_half_ui=1,3,100p,70p,f4eefa,0,30,100,0,0;2,2,375,100p,f4eefa,0,30,100,0,0;3,3,100p,70p,f4eefa,0,30,100,0,0;4,2,375,100p,f4eefa,0,30,100,0,0;5,3,100p,70p,f4eefa,0,30,100,0,0;6,3,100p,70p,f4eefa,0,30,100,0,0;7,3,100p,70p,f4eefa,0,30,100,0,0;8,3,100p,70p,f4eefa,0,30,100,0,0",
        "live_url": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=1&area_id=9&parent_area_id=9&second_area_id=0&is_live_half_webview=1&hybrid_rotate_d=1&hybrid_half_ui=1,3,100p,70p,ffffff,0,30,100,12,0;2,2,375,100p,ffffff,0,30,100,0,0;3,3,100p,70p,ffffff,0,30,100,12,0;4,2,375,100p,ffffff,0,30,100,0,0;5,3,100p,70p,ffffff,0,30,100,0,0;6,3,100p,70p,ffffff,0,30,100,0,0;7,3,100p,70p,ffffff,0,30,100,0,0;8,3,100p,70p,ffffff,0,30,100,0,0",
        "pc_link_url": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=4&is_live_half_webview=1&area_id=9&parent_area_id=9&second_area_id=0&pc_ui=338,465,f4eefa,0",
        "rank": 30,
        "rank_desc": "",
        "timestamp": 1671617740,
        "trend": 2,
        "web_url": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=2&area_id=9&parent_area_id=9&second_area_id=0"
    }
}
```

LIKE_INFO_V3_CLICK
```json
{
    "cmd": "LIKE_INFO_V3_CLICK",
    "data": {
        "contribution_info": {
            "grade": 0
        },
        "dmscore": 20,
        "fans_medal": {
            "anchor_roomid": 0,
            "guard_level": 0,
            "icon_id": 0,
            "is_lighted": 1,
            "medal_color": 9272486,
            "medal_color_border": 9272486,
            "medal_color_end": 9272486,
            "medal_color_start": 9272486,
            "medal_level": 11,
            "medal_name": "",
            "score": 16353,
            "special": "",
            "target_id": 12939237
        },
        "identities": [
            3,
            1
        ],
        "like_icon": "https://i0.hdslb.com/bfs/live/23678e3d90402bea6a65251b3e728044c21b1f0f.png",
        "like_text": "",
        "msg_type": 6,
        "show_area": 0,
        "uid": 424189331,
        "uname": "",
        "uname_color": ""
    }
}
```

ENTRY_EFFECT
```json
{
    "cmd": "ENTRY_EFFECT",
    "data": {
        "basemap_url": "https://i0.hdslb.com/bfs/live/mlive/da6933ea70f31c4df63f4b68b735891284888357.png",
        "business": 3,
        "copy_color": "#000000",
        "copy_writing": " <%%> ",
        "copy_writing_v2": " <^icon^> <%%> ",
        "effect_silent_time": 0,
        "effective_time": 1,
        "effective_time_new": 0,
        "face": "https://i1.hdslb.com/bfs/face/7336d3a52bcd0424002da69f4ebd78e19bb196a9.jpg",
        "highlight_color": "#FFF100",
        "icon_list": [1],
        "id": 135,
        "identities": 22,
        "max_delay_time": 7,
        "mobile_dynamic_url_webp": "",
        "mock_effect": 0,
        "priority": 1,
        "privilege_type": 0,
        "show_avatar": 1,
        "target_id": 1953558829,
        "trigger_time": 1671617740831883500,
        "uid": 349976410,
        "web_basemap_url": "https://i0.hdslb.com/bfs/live/mlive/da6933ea70f31c4df63f4b68b735891284888357.png",
        "web_close_time": 900,
        "web_dynamic_url_apng": "",
        "web_dynamic_url_webp": "",
        "web_effect_close": 0,
        "web_effective_time": 2
    }
}
```

COMMON_NOTICE_DANMAKU
```json
{
    "cmd": "COMMON_NOTICE_DANMAKU",
    "data": {
        "content_segments": [
            {
                "font_color": "#FB7299",
                "text": "BLS120",
                "type": 1
            }
        ],
        "dmscore": 144,
        "terminals": [1, 2, 3, 4, 5]
    }
}
```

ROOM_REAL_TIME_MESSAGE_UPDATE
```json
{
    "cmd": "ROOM_REAL_TIME_MESSAGE_UPDATE",
    "data": {
        "fans": 31984,
        "fans_club": 202,
        "red_notice": -1,
        "roomid": 25155354
    }
}
```

ROOM_BLOCK_MSG
```json
{
    "cmd": "ROOM_BLOCK_MSG",
    "data": {
        "dmscore": 30,
        "operator": 2,
        "uid": 1054907425,
        "uname": ""
    },
    "uid": "1054907425",
    "uname": ""
}
```

ROOM_CHANGE
```json
{
    "cmd": "ROOM_CHANGE",
    "data": {
        "area_id": 321,
        "area_name": "",
        "live_key": "321452566662070739",
        "parent_area_id": 3,
        "parent_area_name": "",
        "sub_session_key": "321452566662070739sub_time:1671614609",
        "title": ""
    }
}
```

GIFT_STAR_PROCESS
```json
{
    "cmd": "GIFT_STAR_PROCESS",
    "data": {
        "status": 1,
        "tip": ""
    }
}
```

ROOM_SKIN_MSG
```json
{
    "cmd": "ROOM_SKIN_MSG",
    "current_time": 1671618166,
    "end_time": 1671618166,
    "only_local": false,
    "skin_id": 65,
    "status": 0
}
```

GUARD_HONOR_THOUSAND
```json
{
    "cmd": "GUARD_HONOR_THOUSAND",
    "data": {
        "add": [591892279],
        "del": []
    }
}
```

TRADING_SCORE
```json
{
    "cmd": "TRADING_SCORE",
    "data": {
        "bubble_show_time": 3,
        "num": 2,
        "score_id": 3,
        "uid": 1630494154,
        "update_time": 1671621015,
        "update_type": 1
    }
}
```

</details>