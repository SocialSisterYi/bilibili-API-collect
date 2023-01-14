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

## 数据包格式

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

*普通包可能包含多条命令，每个命令有一个头部，指示该条命令的长度等信息*

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

### 心跳包回复（人气值）

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

方式：（下行）

正文：

正文一般为普通JSON数据。

大多数普通包都经过zlib压缩或brotli压缩。

示例：

```
00000000: 0000 0086 0010 0003 0000 0005 0000 0000  ................
00000001: 8b38 8000 0000 7200 1000 0000 0000 0500  .8....r.........
00000002: 0000 007b 2263 6d64 223a 2257 4154 4348  ...{"cmd":"WATCH
00000003: 4544 5f43 4841 4e47 4522 2c22 6461 7461  ED_CHANGE","data
00000004: 223a 7b22 6e75 6d22 3a32 3230 3937 2c22  ":{"num":22097,"
00000005: 7465 7874 5f73 6d61 6c6c 223a 2232 2e32  text_small":"2.2
00000006: e4b8 8722 2c22 7465 7874 5f6c 6172 6765  ...","text_large
00000007: 223a 2232 2e32 e4b8 87e4 baba e79c 8be8  ":"2.2..........
00000008: bf87 227d 7d03                           .."}}.
```

#### 弹幕

当收到弹幕时接收到此条消息

json格式

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | str  | "DANMU_MSG" | 如果是弹幕消息，内容则是"DANMU_MSG" |
| info | array  | 这条弹幕的用户、内容与粉丝勋章等各种信息 | 待调查其中每个数据的含义 |

<details>
<summary>查看消息示例：</summary>

``` json
{
    "cmd": "DANMU_MSG",
    "info": [
        [
            0,
            4,
            25,
            5566168,
            1644559560263,
            1644558747,
            0,
            "998a531f",
            0,
            0,
            5,
            "#1453BAFF,#4C2263A2,#3353BAFF",
            0,
            "{}",
            "{}",
            {
                "mode": 0,
                "show_player_type": 0,
                "extra": ""
            }
        ],
        "测试文本",
        [
            1850091,
            "Jannchie见齐",
            0,
            0,
            0,
            10000,
            1,
            "#00D1F1"
        ],
        [
            21,
            "観測者",
            "Jannchie见齐",
            422915,
            1725515,
            "",
            0,
            6809855,
            1725515,
            5414290,
            3,
            1,
            1850091
        ],
        [
            20,
            0,
            6406234,
            "u003e50000",
            3
        ],
        [
            "",
            ""
        ],
        0,
        3,
        null,
        {
            "ts": 1644559560,
            "ct": "59DEA791"
        },
        0,
        0,
        null,
        null,
        0,
        210
    ]
}
```
</details>

#### 进场或关注消息

有用户进入直播间或关注主播时触发

json格式

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | str  | "INTERACT_WORD" | 如果是进入直播间或关注消息，内容则是"INTERACT_WORD" |
| data | obj  | 进入直播间的用户的信息 |  |

data字段

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| contribution | obj  | 待调查 |  |
| dmscore | num | 待调查 |  |
| fans_medal | obj | 粉丝勋章 |  |
| identities | num | 待调查 |  |
| is_spread | num | 待调查 |  |
| msg_type | num  | 1为进场，2为关注 |  |
| roomid | num | 房间号 |  |
| is_spread | num  | 待调查 |  |
| is_spread | num  | 待调查 |  |
| score | num | 待调查 |  |
| spread_desc | str  | 待调查 |  |
| spread_info | str  | 待调查 |  |
| tail_icon | num  | 待调查 |  |
| timestamp | num  | 时间戳 |  |
| trigger_time | num  | 触发时间 |  |
| uid | num | 用户ID |  |
| uname | str  | 用户名称 |  |
| uname_color | str  | 用户名称颜色 |  |

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

#### 送礼

json格式

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | str | "SEND_GIFT" | 投喂礼物等，内容则是"SEND_GIFT" |
| data | obj | 礼物投喂人、礼物信息、礼物数量等 |  |

data字段

| 字段 |    类型   |  内容  |    备注    |
| ---- | -------- | ------ | --------- |
| action | string | 礼物操作，一般为"投喂" | |
| batch_combo_id | string | 待调查 | 有时为空字符串 |
| batch_combo_send | obj | 待调查 | 有时为null |
| beatId | string | 待调查 | |
| biz_source | string | 待调查 | |
| blind_gift | | 待调查 | |
| broadcast_id | number | 待调查 | |
| coin_type | string | 待调查 | |
| combo_resources_id | number | 待调查 | |
| combo_send | | 待调查 | |
| comber_stay_time | number | 待调查 | |
| combo_total_coin | number | 待调查 | |
| crit_prob | number | 待调查 | |
| demarcation | number | 待调查 | |
| discount_price | number | 待调查 | |
| dmscore | number | 待调查 | |
| draw | number | 待调查 | |
| effect | number | 待调查 | |
| effect_block | number | 待调查 | |
| face | string | 一段URL | 礼物投喂者的头像URL |
| face_effect_id | number | | |
| face_effect_type | number | | |
| float_sc_resource_id | number | | |
| giftId | number | 待调查 | |
| giftName | string | 礼物名称 | |
| giftType | number | 待调查 | |
| gold | number | 待调查 | |
| guard_level | number | 待调查 | |
| is_first | bool | 待调查 | |
| is_join_receiver | bool | 待调查 | |
| is_naming | bool | 待调查 | |
| is_special_batch | number | 待调查 | |
| magnification | number | 待调查 | |
| medal_info | obj | 礼物投喂者粉丝奖牌信息 | |
| name_color | string | 待调查 | |
| num | number | 该次投喂的礼物数量 | |
| original_gift_name | string | 待调查 | |
| price | number | 待调查 | |
| rcost | number | 待调查 | |
| receive_user_info | obj | 礼物接收者信息，一般是主播 | |
| remain | number | 待调查 | |
| rnd | number | 礼物发送时的时间戳，以及后面9位未知数字 | |
| send_master | | 待调查 | |
| silver | number | 待调查 | |
| super | number | 待调查 | |
| super_batch_gift_num | number | 待调查 | |
| super_gift_num | number | 待调查 | |
| svga_block | number | 待调查 | |
| switch | bool | 待调查 | |
| tag_image | string | 待调查 | |
| tid | number | 礼物发送时的时间戳，以及后面9位未知数字 | 似乎与rnd字段相同 |
| timestamp | number | 礼物发送时的时间戳 | |
| top_list | | 待调查 | |
| total_coin | number | 待调查 | |
| uid | number | 礼物投喂者的UID | |
| uname | string | 礼物投喂者的名称 | |

batch_combo_send字段

| 字段 |    类型   |  内容  |    备注    |
| ---- | -------- | ------ | --------- |
| action | string | 礼物操作，一般为"投喂" | |
| batch_combo_id | string | 待调查 | |
| batch_combo_num | number | 待调查 | |
| blind_gift | | 待调查 | |
| gift_id | number | 待调查 | |
| gift_name | string | 投喂的礼物名称 | 待调查 |
| gift_num | number | 投喂礼物数量 | 待调查 |
| send_master | | 待调查 | |
| uid | number | 礼物投喂者的UID | |
| uname | string | 礼物投喂者的名称 | |

medal_info字段

| 字段 |    类型   |  内容  |    备注    |
| ---- | -------- | ------ | --------- |
| anchor_roomid | number | 待调查 | |
| anchor_uname | string | 待调查 | |
| guard_level | number | 待调查 | |
| icon_id | number | 待调查 | |
| is_lighted | number | 待调查 | |
| medal_color | number | 礼物投喂者的粉丝奖牌颜色 | 十六进制颜色值转为了十进制表示 |
| medal_border_color | number | 礼物投喂者的粉丝奖牌边框颜色 | 十六进制颜色值的十进制表示 |
| medal_color_end | number | 待调查 | |
| medal_color_start | number | 待调查 | |
| medal_level | number | 礼物投喂者的粉丝奖牌等级 | |
| medal_name | string | 礼物投喂者的粉丝奖牌名称 | |
| special | string | 待调查 | |
| target_id | number | 待调查 | |

receive_user_info字段

| 字段 |    类型   |  内容  |    备注    |
| ---- | -------- | ------ | --------- |
| uid | number | 礼物接收者的UID | 一般为主播的UID |
| uname | string | 礼物接收者的名称 | 一般为主播的名称 |

<details>
<summary>查看消息示例：</summary>

```json
{
    "cmd": "SEND_GIFT",
    "data": {
        "action": "投喂",
        "batch_combo_id": "batch:gift:combo_id:510149209:36047134:31036:1673622464.8445",
        "batch_combo_send": {
            "action": "投喂",
            "batch_combo_id": "batch:gift:combo_id:510149209:36047134:31036:1673622464.8445",
            "batch_combo_num": 1,
            "blind_gift": null,
            "gift_id": 31036,
            "gift_name": "小花花",
            "gift_num": 1,
            "send_master": null,
            "uid": 510149209,
            "uname": "12138额83121"
        },
        "beatId": "",
        "biz_source": "live",
        "blind_gift": null,
        "broadcast_id": 0,
        "coin_type": "gold",
        "combo_resources_id": 1,
        "combo_send": {
            "action": "投喂",
            "combo_id": "gift:combo_id:510149209:36047134:31036:1673622464.8434",
            "combo_num": 1,
            "gift_id": 31036,
            "gift_name": "小花花",
            "gift_num": 1,
            "send_master": null,
            "uid": 510149209,
            "uname": "12138额83121"
        },
        "combo_stay_time": 3,
        "combo_total_coin": 100,
        "crit_prob": 0,
        "demarcation": 1,
        "discount_price": 100,
        "dmscore": 8,
        "draw": 0,
        "effect": 0,
        "effect_block": 0,
        "face": "https://i1.hdslb.com/bfs/face/fb79103e8b33547023e2010030b6889bba2b49bf.jpg",
        "face_effect_id": 0,
        "face_effect_type": 0,
        "float_sc_resource_id": 0,
        "giftId": 31036,
        "giftName": "小花花",
        "giftType": 0,
        "gold": 0,
        "guard_level": 0,
        "is_first": true,
        "is_join_receiver": false,
        "is_naming": false,
        "is_special_batch": 0,
        "magnification": 1,
        "medal_info": {
            "anchor_roomid": 0,
            "anchor_uname": "",
            "guard_level": 0,
            "icon_id": 0,
            "is_lighted": 0,
            "medal_color": 0,
            "medal_color_border": 0,
            "medal_color_end": 0,
            "medal_color_start": 0,
            "medal_level": 0,
            "medal_name": "",
            "special": "",
            "target_id": 0
        },
        "name_color": "",
        "num": 1,
        "original_gift_name": "",
        "price": 100,
        "rcost": 164536872,
        "receive_user_info": {
            "uid": 36047134,
            "uname": "小霖QL"
        },
        "remain": 0,
        "rnd": "1673622464121900003",
        "send_master": null,
        "silver": 0,
        "super": 0,
        "super_batch_gift_num": 1,
        "super_gift_num": 1,
        "svga_block": 0,
        "switch": true,
        "tag_image": "",
        "tid": "1673622464121900003",
        "timestamp": 1673622464,
        "top_list": null,
        "total_coin": 100,
        "uid": 510149209,
        "uname": "12138额83121"
    }
}
```
</details>

#### 欢迎加入房间



#### 欢迎房管加入房间



#### 通知消息

json格式

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | str | "NOTICE_MSG" | 通知消息，内容则是"NOTICE_MSG" |
| id | num | 待调查 | |
| data | obj | 通知数据 | |

data字段

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| full | obj | 待调查 | |
| half | obj | 待调查 | |
| side | obj | 待调查 | |
| roomid | num | 目标直播间短号 | |
| real_roomid | num | 目标直播间真实ID | |
| msg_common | str | 显示的消息内容 | |
| msg_self | str | 消息内容本身 | 剔除额外文本 |
| link_rel | str | 通知消息跳转的URL | |
| msg_type | num | 待调查 | |
| shield_uid | num | 待调查 | |
| business_id | str | 待调查 | |
| scatter | obj | 待调查 | |
| marquee_id | str | 待调查 | |
| notice_type | num | 待调查 | |

<details>
<summary>查看消息示例：</summary>

```json
{
    "cmd": "NOTICE_MSG",
    "id": 804,
    "name": "人气榜第一名",
    "full": {
        "head_icon": "https://i0.hdslb.com/bfs/live/f74b09c7fb83123a0dd66c536b6d5b143d271b08.png",
        "tail_icon": "https://i0.hdslb.com/bfs/live/822da481fdaba986d738db5d8fd469ffa95a8fa1.webp",
        "head_icon_fa": "https://i0.hdslb.com/bfs/live/f74b09c7fb83123a0dd66c536b6d5b143d271b08.png",
        "tail_icon_fa": "https://i0.hdslb.com/bfs/live/38cb2a9f1209b16c0f15162b0b553e3b28d9f16f.png",
        "head_icon_fan": 1,
        "tail_icon_fan": 4,
        "background": "#FFE6BD",
        "color": "#9D5412",
        "highlight": "#FF6933",
        "time": 20
    },
    "half": {
        "head_icon": "https://i0.hdslb.com/bfs/live/f74b09c7fb83123a0dd66c536b6d5b143d271b08.png",
        "tail_icon": "https://i0.hdslb.com/bfs/live/822da481fdaba986d738db5d8fd469ffa95a8fa1.webp",
        "background": "#FFE6BD",
        "color": "#9D5412",
        "highlight": "#FF6933",
        "time": 0
    },
    "side": {
        "head_icon": "",
        "background": "",
        "color": "",
        "highlight": "",
        "border": ""
    },
    "roomid": 23919301,
    "real_roomid": 23919301,
    "msg_common": "恭喜主播<%AG超玩会王者荣耀一诺%>荣获上小时人气榜第<%1%>名！点击传送查看精彩内容！",
    "msg_self": "恭喜主播<%AG超玩会王者荣耀一诺%>荣获上小时人气榜第<%1%>名！",
    "link_url": "https://live.bilibili.com/23919301?broadcast_type=0&is_room_feed=1&from=28003&extra_jump_from=28003",
    "msg_type": 1,
    "shield_uid": -1,
    "business_id": "",
    "scatter": {
        "min": 0,
        "max": 0
    },
    "marquee_id": "",
    "notice_type": 0
}
```
```json
{
    "cmd": "NOTICE_MSG",
    "id": 814,
    "name": "幻影飞船专用",
    "full": {
        "head_icon": "https://i0.hdslb.com/bfs/live/08978f1721200e11328d1f7d6231b21bcca20488.gif",
        "tail_icon": "https://i0.hdslb.com/bfs/live/822da481fdaba986d738db5d8fd469ffa95a8fa1.webp",
        "head_icon_fa": "https://i0.hdslb.com/bfs/live/08978f1721200e11328d1f7d6231b21bcca20488.gif",
        "tail_icon_fa": "https://i0.hdslb.com/bfs/live/38cb2a9f1209b16c0f15162b0b553e3b28d9f16f.png",
        "head_icon_fan": 1,
        "tail_icon_fan": 4,
        "background": "#F09153",
        "color": "#FFFFFF",
        "highlight": "#FFE600",
        "time": 15
    },
    "half": {
        "head_icon": "https://i0.hdslb.com/bfs/live/08978f1721200e11328d1f7d6231b21bcca20488.gif",
        "tail_icon": "",
        "background": "#F09153",
        "color": "#FFFFFFFF",
        "highlight": "#FFE600",
        "time": 15
    },
    "side": {
        "head_icon": "",
        "background": "",
        "color": "",
        "highlight": "",
        "border": ""
    },
    "roomid": 25207004,
    "real_roomid": 25207004,
    "msg_common": "<%咖啡_ミシェル%>投喂<%夜月瓜瓜sukuyi%>1个幻影飞船，向着浩瀚星辰出发！",
    "msg_self": "<%咖啡_ミシェル%>投喂<%夜月瓜瓜sukuyi%>1个幻影飞船，向着浩瀚星辰出发！",
    "link_url": "https://live.bilibili.com/25207004?broadcast_type=0&is_room_feed=1&from=28003&extra_jump_from=28003&live_lottery_type=1",
    "msg_type": 2,
    "shield_uid": -1,
    "business_id": "32356",
    "scatter": {
        "min": 0,
        "max": 0
    },
    "marquee_id": "",
    "notice_type": 0
}
```

</details>

#### 主播准备中



#### 直播开始



#### 直播状态更新



#### 直播间高能榜

json格式

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | str | "ONLINE_RANK_V2" | 直播间高能用户数据刷新，内容则是"ONLINE_RANK_V2" |
| data | obj | 直播间高能用户数据 | |

data字段

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| list | array | 在直播间高能用户中的用户信息 | |
| rank_type | str | 待调查 | |

list数组中的对象

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| uid | num | 用户UID | |
| face | str | 用户头像URL | |
| score | num | 该用户的贡献值 | |
| uname | str | 用户名称 | |
| rank | num | 该用户在高能榜中的排名 | |
| guard_level | num | 待调查 | |

<details>
<summary>查看消息示例：</summary>
  
```json
{
    "cmd": "ONLINE_RANK_V2",
    "data": {
        "list": [
            {
                "uid": 2082621455,
                "face": "https://i2.hdslb.com/bfs/face/9de6050277fa13d830eb97e3453d89843de46a31.jpg",
                "score": "20",
                "uname": "8级萌新_小华",
                "rank": 1,
                "guard_level": 0
            },
            {
                "uid": 50500335,
                "face": "https://i0.hdslb.com/bfs/face/ca722209251478ef0ffb45c3adeafb9dab283c57.jpg",
                "score": "20",
                "uname": "属官一号",
                "rank": 2,
                "guard_level": 0
            },
            {
                "uid": 29857468,
                "face": "https://i1.hdslb.com/bfs/face/7b4ae2e7e950f2dfb2bd969859c813487ce3b64c.jpg",
                "score": "12",
                "uname": "露萌不要雨草",
                "rank": 3,
                "guard_level": 0
            }
        ],
        "rank_type": "gold-rank"
    }
}
```
  
</details>


#### 直播间高能用户数量

json格式

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | str | "ONLINE_RANK_COUNT" | 直播间高能用户数，内容是"ONLINE_RANK_COUNT" |
| data | obj | 直播间高能用户数量 | |

data字段

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| count | num | 直播间高能用户数量 | |


<details>
<summary>查看消息示例：</summary>
  
```json
{
    "cmd": "ONLINE_RANK_COUNT",
    "data": {
        "count": 4
    }
}
```
  
</details>

#### 用户到达直播间高能榜前三名的消息


json格式

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| cmd  | str | "ONLINE_RANK_TOP3" | |
| data | obj | 消息内容、高能榜排名等 | |

data字段

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| dmscore | num | 待调查 | |
| list | array | 消息内容和高能榜排名 | |

list数组中的对象

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| msg | str | 消息内容 | |
| rank | num | 该用户的高能榜排名 | |

<details>
<summary>查看消息示例：</summary>
  
```json
{
    "cmd": "ONLINE_RANK_TOP3",
    "data": {
        "dmscore": 112,
        "list": [
            {
                "msg": "恭喜 <%你干嘛哈哈哎哟%> 成为高能用户",
                "rank": 1
            }
        ]
    }
}
```

</details>

#### 直播间用户点赞

json格式

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| cmd  | str | "LIKE_INFO_V3_CLICK" | 若直播间被赞，则内容是"LIKE_INFO_V3_CLICK" |
| data | obj | 点赞的用户的信息 | |

data字段

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| show_area | num | 待调查 | |
| msg_type | num | 待调查 | |
| like_icon | str | 点赞图标的URL | |
| uid | num | 点赞的用户的UID | |
| like_text | str | 点赞文本 | |
| uname | str | 点赞的用户的名称 | |
| uname_color | str | 点赞的用户的名称颜色 | |
| identities | array | 待调查 | |
| fans_medal | obj | 点赞的用户的粉丝勋章信息 | |
| contribution_info | obj | 待调查 | |
| dmscore | num | 待调查 | |

<details>
<summary>查看消息示例：</summary>
  
```json
{
    "cmd": "LIKE_INFO_V3_CLICK",
    "data": {
        "show_area": 0,
        "msg_type": 6,
        "like_icon": "https://i0.hdslb.com/bfs/live/23678e3d90402bea6a65251b3e728044c21b1f0f.png",
        "uid": 32174213,
        "like_text": "为主播点赞了",
        "uname": "MeiDngS",
        "uname_color": "",
        "identities": [
            1
        ],
        "fans_medal": {
            "target_id": 0,
            "medal_level": 0,
            "medal_name": "",
            "medal_color": 0,
            "medal_color_start": 12632256,
            "medal_color_end": 12632256,
            "medal_color_border": 12632256,
            "is_lighted": 0,
            "guard_level": 0,
            "special": "",
            "icon_id": 0,
            "anchor_roomid": 0,
            "score": 0
        },
        "contribution_info": {
            "grade": 0
        },
        "dmscore": 20
    }
}
```

</details>

#### 直播间点赞数

json格式

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| cmd  | str | "LIKE_INFO_V3_UPDATE" | 若直播间点赞数更新，则内容是"LIKE_INFO_V3_UPDATE" |
| data | obj | 直播间点赞数 | |

data字段

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| click_count | num | 直播间点赞数 | |

<details>
<summary>查看消息示例：</summary>
  
```json
{
    "cmd": "LIKE_INFO_V3_UPDATE",
    "data": {
        "click_count": 3227
    }
}
```

</details>

#### 直播间发红包弹幕

json格式

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| cmd  | str | "POPULARITY_RED_POCKET_START" | |
| data | obj | 送红包的老板的信息、里面的礼物信息 | |

data字段

|    字段    | 类型 |  内容  |    备注   |
| ---------- | --- | ------ | --------- |
| lot_id | num | 发送的红包的ID | |
| sender_uid | num | 发送者的UID | |
| sender_name | str | 发送者的名称 | |
| sender_face | str | 发送者的头像的URL | |
| join_requirement | num | 待调查 | |
| danmu | str | 发送者在发红包之后会自动发送一条弹幕<br />这条弹幕的内容 | |
| current_time | num | 服务器发送数据包的Unix时间戳 | |
| start_time | num | 可以开始抢红包的Unix时间戳 | |
| end_time | num | 抢红包的结束时间Unix时间戳 | |
| last_time | num | 红包的持续时间Unix时间戳 | start_time - end_time |
| remove_time | num | 待调查 | |
| replace_time | num | 待调查 | |
| lot_status | num | 待调查 | |
| h5_url | str | 待调查 | |
| user_status | num | 待调查 | |
| awards | array | 红包内包含的礼物的信息 | |
| lot_config_id | num | 待调查 | |
| total_price | num | 待调查 | |
| wait_num | num | 待调查 | |

awards数组中的对象
  
|    字段    | 类型 |  内容  |    备注   |
| ---------- | --- | ------ | --------- |
| gift_id | num | 待调查 | |
| gift_name | str | 礼物名称 | |
| gift_pic | str | 礼物图标URL | |
| num | num | 该礼物的数量 | |


<details>
<summary>查看消息示例：</summary>
  
```json
{
    "cmd": "POPULARITY_RED_POCKET_START",
    "data": {
        "lot_id": 8445764,
        "sender_uid": 38554435,
        "sender_name": "我的0019",
        "sender_face": "https://i1.hdslb.com/bfs/face/282c3055de94c74d69094fad91a56f9ed73a270a.jpg",
        "join_requirement": 1,
        "danmu": "点点红包，关注主播抽礼物～",
        "current_time": 1673684632,
        "start_time": 1673684631,
        "end_time": 1673684811,
        "last_time": 180,
        "remove_time": 1673684826,
        "replace_time": 1673684821,
        "lot_status": 1,
        "h5_url": "https://live.bilibili.com/p/html/live-app-red-envelope/popularity.html?is_live_half_webview=1&hybrid_half_ui=1,5,100p,100p,000000,0,50,0,0,1;2,5,100p,100p,000000,0,50,0,0,1;3,5,100p,100p,000000,0,50,0,0,1;4,5,100p,100p,000000,0,50,0,0,1;5,5,100p,100p,000000,0,50,0,0,1;6,5,100p,100p,000000,0,50,0,0,1;7,5,100p,100p,000000,0,50,0,0,1;8,5,100p,100p,000000,0,50,0,0,1\&hybrid_rotate_d=1&hybrid_biz=popularityRedPacket&lotteryId=8445764",
        "user_status": 2,
        "awards": [
            {
                "gift_id": 31212,
                "gift_name": "打call",
                "gift_pic": "https://s1.hdslb.com/bfs/live/461be640f60788c1d159ec8d6c5d5cf1ef3d1830.png",
                "num": 2
            },
            {
                "gift_id": 31214,
                "gift_name": "牛哇",
                "gift_pic": "https://s1.hdslb.com/bfs/live/91ac8e35dd93a7196325f1e2052356e71d135afb.png",
                "num": 3
            },
            {
                "gift_id": 31216,
                "gift_name": "i了i了",
                "gift_pic": "https://s1.hdslb.com/bfs/live/1157a445487b39c0b7368d91b22290c60fa665b2.png",
                "num": 3
            }
        ],
        "lot_config_id": 3,
        "total_price": 1600,
        "wait_num": 0
    }
}
```

</details>
  

#### 直播间红包

json格式

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| cmd  | str | "POPULARITY_RED_POCKET_NEW" | 与“直播间发红包弹幕”不同<br />那个是发红包的弹幕信息<br />这个则和“送礼”的信息相似，但也有前者的一些字段 |
| data | obj | 发送者信息和红包（礼物）信息 | |

data字段

|    字段    | 类型 |  内容  |    备注   |
| ---------- | --- | ------ | --------- |
| lot_id | num | 发送的红包的ID | |
| start_time | num | 开始抢红包的Unix时间戳 | |
| current_time | num | 服务器发送数据包的Unix时间戳 | |
| wait_num | num | 待调查 | |
| uname | str | 发送者的名称 | |
| uid | num | 发送者的UID | |
| action | str | 礼物操作 | |
| num | num | 礼物数量 | |
| gift_name | str | "红包" | |
| gift_id | num | 待调查 | |
| price | num | 待调查 | |
| name_color | str | 发送者的名称的颜色 | |
| medal_info | obj | 发送者的粉丝勋章信息 | |
  
  
<details>
<summary>查看消息示例：</summary>
  
```json
{
    "cmd": "POPULARITY_RED_POCKET_NEW",
    "data": {
        "lot_id": 8445764,
        "start_time": 1673684631,
        "current_time": 1673684631,
        "wait_num": 0,
        "uname": "我的0019",
        "uid": 38554435,
        "action": "送出",
        "num": 1,
        "gift_name": "红包",
        "gift_id": 13000,
        "price": 20,
        "name_color": "",
        "medal_info": {
            "target_id": 400963649,
            "special": "",
            "icon_id": 0,
            "anchor_uname": "",
            "anchor_roomid": 0,
            "medal_level": 21,
            "medal_name": "憨憨酥",
            "medal_color": 1725515,
            "medal_color_start": 12632256,
            "medal_color_end": 12632256,
            "medal_color_border": 12632256,
            "is_lighted": 0,
            "guard_level": 0
        }
    }
}
```
</details>


#### 直播间抢到红包的用户

json格式

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| cmd  | str | "POPULARITY_RED_POCKET_WINNER_LIST" | |
| data | obj | 抢到红包的用户信息、红包内的礼物信息 | |

data字段

|    字段    | 类型 |  内容  |    备注   |
| ---------- | --- | ------ | --------- |
| lot_id | num | 该红包的ID | |
| total_num | num | 该红包内所有礼物的总数 | |
| winner_info | array | 抢到红包的用户的信息<br />抢到的礼物ID等 | |
| awards | obj | 该红包内的礼物信息 | |
| version | num | 待调查 | |

winner_info数组中的数组

| 索引 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| 0 | num | 该抢到红包的用户的UID | |
| 1 | str | 该抢到红包的用户的名称 | |
| 2 | num | 待调查 | |
| 3 | num | 该用户抢到的礼物的ID | |

awards字段

|    字段    | 类型 |  内容  |    备注   |
| ---------- | --- | ------ | --------- |
| 礼物ID | obj | 礼物信息 | |
| ... | obj | | |

礼物ID对象

|    字段    | 类型 |  内容  |    备注   |
| ---------- | --- | ------ | --------- |
| award_type | num | 待调查 | |
| award_name | str | 该礼物的名称 | |
| award_pic | str | 该礼物的图标URL | |
| award_big_pic | str | 该礼物的高分辨率图标URL | |
| award_price | num | 待调查 | |
  
<details>
<summary>查看消息示例：</summary>
  
```json
{
    "cmd": "POPULARITY_RED_POCKET_WINNER_LIST",
    "data": {
        "lot_id": 8445764,
        "total_num": 8,
        "winner_info": [
            [
                38554435,
                "我的0019",
                4581509,
                31212
            ],
            [
                516174930,
                "云来海遛鸟大爷",
                4606389,
                31212
            ]
        ],
        "awards": {
            "31212": {
                "award_type": 1,
                "award_name": "打call",
                "award_pic": "https://s1.hdslb.com/bfs/live/461be640f60788c1d159ec8d6c5d5cf1ef3d1830.png",
                "award_big_pic": "https://i0.hdslb.com/bfs/live/9e6521c57f24c7149c054d265818d4b82059f2ef.png",
                "award_price": 500
            },
            "31214": {
                "award_type": 1,
                "award_name": "牛哇",
                "award_pic": "https://s1.hdslb.com/bfs/live/91ac8e35dd93a7196325f1e2052356e71d135afb.png",
                "award_big_pic": "https://i0.hdslb.com/bfs/live/3b74c117b4f265edcea261bc5608a58d3a7c300a.png",
                "award_price": 100
            },
            "31216": {
                "award_type": 1,
                "award_name": "i了i了",
                "award_pic": "https://s1.hdslb.com/bfs/live/1157a445487b39c0b7368d91b22290c60fa665b2.png",
                "award_big_pic": "https://i0.hdslb.com/bfs/live/cfb9c3d9bdd2c25c95b7d859ebaa590ca9362adb.png",
                "award_price": 100
            }
        },
        "version": 1
    }
}
```
</details>



#### 直播间看过人数

该数据包的正文中，前19位的信息未知。
  
前19位信息示例：
```
00000001: 8b38 8000 0000 7200 1000 0000 0000 0500  .8....r.........
00000002: 0000 00                                  ...
```
  
json格式

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| cmd  | str | "WATCHED_CHANGE" | 若直播间看过人数更新，则内容是"WATCHED_CHANGE" |
| data | obj | 直播间看过人数 | |

data字段

|    字段    | 类型 |  内容  |    备注   |
| ---------- | --- | ------ | --------- |
| num        | num  | | |
| text_small | str | | |
| text_large | str | | |

<details>
<summary>查看消息示例：</summary>
  
```json
{
    "cmd": "WATCHED_CHANGE",
    "data": {
        "num": 17903,
        "text_small": "1.7万",
        "text_large": "1.7万人看过"
    }
}
```

</details>

#### 用户进场特效

json格式

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| cmd  | str | "ENTRY_EFFECT" | 有进场特效的用户进入直播间，则内容是"ENTRY_EFFECT" |
| data | obj | 进场用户、进场特效信息 | |

data字段

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| id | num | 待调查 | |
| uid | num | 进场用户的UID | |
| target_id | num | 主播的UID？ | |
| mock_effect | num | 待调查 | |
| face | str | 进场用户的头像URL | |
| privilege_type | num | 待调查 | |
| copy_writing | str | 进场欢迎文本 | |
| copy_color | str | 进场欢迎文本的十六进制颜色值 | |
| highlight_color | str | 待调查 | |
| priority | num | 待调查 | |
| basemap_url | str | 进场特效背景图片URL | APP端使用该URL |
| show_avatar | num | 是否显示用户头像 | 1显示<br/>0不显示 |
| web_basemap_url | str | 进场特效背景图片URL | 网页端使用该URL |
| web_effective_time | num | 进场特效生存时间 | 网页端 |
| web_effect_close | num | 待调查 | |
| web_close_time | num | 待调查 | |
| business | num | 待调查 | |
| copy_writing_v2 | str | 进场欢迎文本的复制？ | |
| icon_list | array | 待调查 | |
| max_delay_time | num | 待调查 | |
| trigger_time | num | 触发的Unix时间戳，以及后面9位未知数字 | |
| identities | num | 待调查 | |
| effect_silent_time | num | 待调查 | |
| effective_time_new | num | 待调查 | |
| web_dynamic_url_webp | str | 待调查 | |
| web_dynamic_url_apng | str | 待调查 | |
| mobile_dynamic_url_webp | str | 待调查 | |

<details>
<summary>查看消息示例：</summary>
  
```json
{
    "cmd": "ENTRY_EFFECT",
    "data": {
        "id": 4,
        "uid": 489893482,
        "target_id": 27717502,
        "mock_effect": 0,
        "face": "https://i0.hdslb.com/bfs/face/member/noface.jpg",
        "privilege_type": 3,
        "copy_writing": "欢迎舰长 <%天使雨晰%> 进入直播间",
        "copy_color": "#ffffff",
        "highlight_color": "#E6FF00",
        "priority": 1,
        "basemap_url": "https://i0.hdslb.com/bfs/live/mlive/11a6e8eb061c3e715d0a6a2ac0ddea2faa15c15e.png",
        "show_avatar": 1,
        "effective_time": 2,
        "web_basemap_url": "https://i0.hdslb.com/bfs/live/mlive/11a6e8eb061c3e715d0a6a2ac0ddea2faa15c15e.png",
        "web_effective_time": 2,
        "web_effect_close": 0,
        "web_close_time": 0,
        "business": 1,
        "copy_writing_v2": "欢迎舰长 <%天使雨晰%> 进入直播间",
        "icon_list": [],
        "max_delay_time": 7,
        "trigger_time": 1673625604373633300,
        "identities": 6,
        "effect_silent_time": 0,
        "effective_time_new": 0,
        "web_dynamic_url_webp": "",
        "web_dynamic_url_apng": "",
        "mobile_dynamic_url_webp": ""
    }
}
```

</details>


#### 直播间在所属分区的排名改变

json格式

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| cmd  | str | "AREA_RANK_CHANGED" | 若直播间在所属分区的排名改变，则内容是"AREA_RANK_CHANGED" |
| data | obj | 直播间在所属分区的排名信息 | |

data字段

|    字段    | 类型 |  内容  |    备注   |
| ---------- | --- | ------ | --------- |
| conf_id | num | 待调查 | |
| rank_name | str | 排行榜名称 | |
| uid | num | 主播的UID | |
| rank | num | 直播间在分区的排名 | |
| icon_url_blue | str | 蓝色排名图标URL | |
| icon_url_pink | str | 粉色排名图标URL | |
| icon_url_grey | str | 灰色排名图标URL | |
| action_type | num | 待调查 | |
| timestamp | num | 触发时的Unix时间戳 | |
| msg_id | str | 待调查 | |
| jump_url_link | str | 排行榜跳转链接 | APP端页面 |
| jump_url_pc | str | 排行榜跳转链接 | APP端页面 |
| jump_url_pink | str | 排行榜跳转链接 | APP端页面 |
| jump_url_web | str | 排行榜跳转链接 | APP端页面 |

<details>
<summary>查看消息示例：</summary>
  
```json
{
    "cmd": "AREA_RANK_CHANGED",
    "data": {
        "conf_id": 23,
        "rank_name": "手游航海",
        "uid": 27717502,
        "rank": 4,
        "icon_url_blue": "https://i0.hdslb.com/bfs/live/18e2990a546d33368200f9058f3d9dbc4038eb5c.png",
        "icon_url_pink": "https://i0.hdslb.com/bfs/live/a6c490c36e88c7b191a04883a5ec15aed187a8f7.png",
        "icon_url_grey": "https://i0.hdslb.com/bfs/live/cb7444b1faf1d785df6265bfdc1fcfc993419b76.png",
        "action_type": 1,
        "timestamp": 1673625610,
        "msg_id": "e93c7860-b901-41ca-aad8-fe538a5fac9c",
        "jump_url_link": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=3&ruid=27717502&conf_id=23&is_live_half_webview=1&hybrid_rotate_d=1&is_cling_player=1&hybrid_half_ui=1,3,100p,70p,f4eefa,0,30,100,0,0;2,2,375,100p,f4eefa,0,30,100,0,0;3,3,100p,70p,f4eefa,0,30,100,0,0;4,2,375,100p,f4eefa,0,30,100,0,0;5,3,100p,70p,f4eefa,0,30,100,0,0;6,3,100p,70p,f4eefa,0,30,100,0,0;7,3,100p,70p,f4eefa,0,30,100,0,0;8,3,100p,70p,f4eefa,0,30,100,0,0#/area-rank",
        "jump_url_pc": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=4&ruid=27717502&conf_id=23&pc_ui=338,465,f4eefa,0#/area-rank",
        "jump_url_pink": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=1&ruid=27717502&conf_id=23&is_live_half_webview=1&hybrid_rotate_d=1&is_cling_player=1&hybrid_half_ui=1,3,100p,70p,f4eefa,0,30,100,0,0;2,2,375,100p,f4eefa,0,30,100,0,0;3,3,100p,70p,f4eefa,0,30,100,0,0;4,2,375,100p,f4eefa,0,30,100,0,0;5,3,100p,70p,f4eefa,0,30,100,0,0;6,3,100p,70p,f4eefa,0,30,100,0,0;7,3,100p,70p,f4eefa,0,30,100,0,0;8,3,100p,70p,f4eefa,0,30,100,0,0#/area-rank",
        "jump_url_web": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=2&ruid=27717502&conf_id=23#/area-rank"
    }
}
```

</details>


#### 直播间在所属分区排名提升的祝福

会分多个普通包发送

json格式

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| cmd  | str | "COMMON_NOTICE_DANMAKU" | 例如提示“恭喜主播 时雨ioo 成为手游航海当前第5名”，<br/>，则内容是"COMMON_NOTICE_DANMAKU" |
| data | obj | 直播间在所属分区排名提升的祝福的信息 | |

data字段

|    字段    | 类型 |  内容  |    备注   |
| ---------- | --- | ------ | --------- |
| biz_id | num | 待调查 | |
| content_segments | array | 文本分段 | |
| danmaku_style | obj | 文本样式信息 | |
| danmaku_url | str | 待调查 | |
| dmscore | num | 待调查 | |
| terminals | array | 待调查 | |

content_segments数组中的对象

|    字段    | 类型 |  内容  |    备注   |
| ---------- | --- | ------ | --------- |
| font_color | str | text字段的十六进制颜色值 | |
| font_color_dark | str | text字段的十六进制颜色值 | APP端设置为深色模式时使用 |
| text | str | 祝贺文本 | |
| type | num | 待调查 | |

danmaku_style字段

|    字段    | 类型 |  内容  |    备注   |
| ---------- | --- | ------ | --------- |
| background_color | str | 文本背景颜色的十六进制颜色值 | |
| background_color_dark | str | 文本背景颜色的十六进制颜色值 | APP端设置为深色模式时使用 |

<details>
<summary>查看消息示例：</summary>

第一条数据：
```json
{
    "cmd": "COMMON_NOTICE_DANMAKU",
    "data": {
        "biz_id": 0,
        "content_segments": [
            {
                "font_color": "#CCCCCC",
                "font_color_dark": "#CCCCCC",
                "text": "恭喜主播 时雨ioo ",
                "type": 1
            },
            {
                "font_color": "#F494AF",
                "font_color_dark": "#F494AF",
                "text": "成为手游航海当前第5名",
                "type": 1
            }
        ],
        "danmaku_style": {
            "background_color": null,
            "background_color_dark": null
        },
        "danmaku_uri": "",
        "dmscore": 144,
        "terminals": [
            1,
            2,
            3
        ]
    }
}
```
第二条数据：
```json
{
    "cmd": "COMMON_NOTICE_DANMAKU",
    "data": {
        "biz_id": 0,
        "content_segments": [
            {
                "font_color": "#99A5AE",
                "font_color_dark": "#99A5AE",
                "text": "恭喜主播 时雨ioo 成为手游航海当前第5名",
                "type": 1
            }
        ],
        "danmaku_style": {
            "background_color": null,
            "background_color_dark": null
        },
        "danmaku_uri": "",
        "dmscore": 144,
        "terminals": [
            5
        ]
    }
}
```
第三条数据：
```json
{
    "cmd": "COMMON_NOTICE_DANMAKU",
    "data": {
        "biz_id": 0,
        "content_segments": [
            {
                "font_color": "#998EFF",
                "font_color_dark": "#998EFF",
                "text": "恭喜主播 时雨ioo 成为手游航海第5名",
                "type": 1
            }
        ],
        "danmaku_style": {
            "background_color": null,
            "background_color_dark": null
        },
        "danmaku_uri": "",
        "dmscore": 144,
        "terminals": [
            4
        ]
    }
}
```

</details>


#### 直播间信息更改

json格式

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| cmd  | str | "ROOM_CHANGE" | 例如直播间标题更改、直播间分区更改 |
| data | obj | | |

data字段

|    字段    | 类型 |  内容  |    备注   |
| ---------- | --- | ------ | --------- |
| title | str | 直播间标题 | |
| area_id | num | 当前直播间所属分区的ID | |
| parent_area_id | num | 待调查 | |
| area_name | str | 当前直播间所属分区的名称 | |
| parent_area_name | str | 待调查 | |
| live_key | str | 待调查 | |
| sub_session_key | str | 待调查 | |

<details>
<summary>查看消息示例：</summary>

```json
{
    "cmd": "ROOM_CHANGE",
    "data": {
        "title": "开始白给CS",
        "area_id": 371,
        "parent_area_id": 9,
        "area_name": "虚拟主播",
        "parent_area_name": "虚拟主播",
        "live_key": "320830629635915849",
        "sub_session_key": "320830629635915849sub_time:1673690546"
    }
}
```
</details>


#### 醒目留言按钮

json格式

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| cmd  | str | "SUPER_CHAT_ENTRANCE" | 不知道有什么意义 |
| data | obj | | |
| roomid | num | 直播间ID | 未知是短号还是真实ID |

data字段

|    字段    | 类型 |  内容  |    备注   |
| ---------- | --- | ------ | --------- |
| status | num | 待调查 | |
| jump_url | str | 按下“醒目留言”按钮后弹出小窗的页面 | |
| icon | str | “醒目留言”按钮图标的URL | |
| broadcast_type | num | 待调查 | |

<details>
<summary>查看消息示例：</summary>

```json
{
    "cmd": "SUPER_CHAT_ENTRANCE",
    "data": {
        "status": 1,
        "jump_url": "https://live.bilibili.com/p/html/live-app-superchat2/index.html?is_live_half_webview=1&hybrid_half_ui=1,3,100p,70p,ffffff,0,30,100;2,2,375,100p,ffffff,0,30,100;3,3,100p,70p,ffffff,0,30,100;4,2,375,100p,ffffff,0,30,100;5,3,100p,60p,ffffff,0,30,100;6,3,100p,60p,ffffff,0,30,100;7,3,100p,60p,ffffff,0,30,100",
        "icon": "https://i0.hdslb.com/bfs/live/0a9ebd72c76e9cbede9547386dd453475d4af6fe.png",
        "broadcast_type": 1
    },
    "roomid": "8618057"
}
```
</details>


#### 下播的直播间

json格式


| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | str | "STOP_LIVE_ROOM_LIST" | |
| data | obj | 下播的直播间ID列表 | |

data字段

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| room_id_list | array | 下播的直播间ID | |

room_id_list数组中的数字

| 内容  | 备注 |
| ---- | ---- |
| 下播的直播间ID | 未知是真实ID还是短号 |


<details>
<summary>查看消息示例：</summary>
  
```json
{
    "cmd": "STOP_LIVE_ROOM_LIST",
    "data": {
        "room_id_list": [
            22629205,
            23130005,
            25963791,
            5532805,
            668631,
            21409011,
            21559541,
            23499952,
            26700301,
            26785971,
            11673798,
            13766041,
            22980849,
            23719726,
            23865141,
            24984476,
            6134501,
            13782552,
            22276717,
            24107587,
            25023546,
            25404621,
            25516925,
            26527626,
            3392341,
            34027,
            502153,
            6479194,
            7636554,
            12237172,
            22821330,
            24484883,
            25641623,
            26230536,
            26792222,
            3642143,
            21774100,
            22797418,
            23698420,
            24020165,
            23969235,
            24207417,
            24541492,
            24900566,
            25385044,
            4484938,
            11113452,
            21442530,
            22046176,
            22184897,
            22386835,
            23499007,
            26129631,
            26866037,
            5971876,
            22779750,
            24132482,
            25789722,
            26251362,
            26822052,
            26835655,
            5122088,
            6668191,
            12439052,
            23690850,
            24458365,
            26189089,
            26676322,
            26872742,
            4917898,
            826723,
            22886872,
            24752347,
            25108137,
            5796786,
            6176498,
            6208022,
            7578115,
            14218725,
            22659435,
            23774701,
            24804876,
            25081572,
            25275744,
            26430916,
            730392,
            9505076,
            25467274,
            3015372,
            5764087,
            9407015,
            21356836,
            24302940,
            25469360,
            25666252,
            26564899,
            26574306,
            9391864,
            136707,
            15163029,
            22001560,
            22642183,
            24168773,
            24197349,
            26750190,
            59670,
            6545138,
            7538431,
            12568128,
            22865116,
            26566675,
            26658222,
            26778289,
            26856746,
            3386215,
            1270737,
            1856866,
            22371951,
            22953580,
            23026533,
            9316759,
            13628231,
            25166176,
            6736476,
            7745491,
            893989,
            25349228,
            25684996,
            26835833,
            763132,
            1282353,
            14333573,
            26677056,
            5553188,
            1549629,
            22807502,
            25633167,
            26062956,
            26558451,
            9312947,
            14366742,
            1864809,
            25581444,
            26656406,
            11454847,
            13507879,
            187331,
            22626880,
            23187177,
            23481929,
            24042533,
            24501754,
            26776408,
            2315619,
            24320832,
            24708829,
            26236176,
            26575516,
            3105045,
            6164089,
            21145740,
            21258252,
            23211964,
            23610573,
            26873451,
            10452273,
            21300836,
            26076163,
            26510266,
            933508,
            21751571,
            24043374,
            26045578,
            26784723,
            26811618,
            22836140,
            23558501,
            24429614,
            24476599,
            2681976,
            26867816,
            7802886,
            13617926,
            2049112,
            26233820,
            6868338,
            23458654,
            24370731,
            26126954,
            5070119,
            24416075
        ]
    }
}
```
  
</details>
  
#### 未知消息

`ROOM_REAL_TIME_MESSAGE_UPDATE`
`PLAY_TOGETHER`
<details>
<summary>查看消息示例：</summary>

示例1：
```json
{
    "cmd": "PLAY_TOGETHER",
    "data": {
        "ruid": 29857468,
        "roomid": 8618057,
        "action": "switch_off",
        "uid": 0,
        "timestamp": 1673690546,
        "message": "",
        "message_type": 0,
        "jump_url": "",
        "web_url": "",
        "apply_number": 0,
        "refresh_tool": false,
        "cur_fleet_num": 0,
        "max_fleet_num": 0
    }
}
```
示例2
```json
{
    "cmd": "PLAY_TOGETHER",
    "data": {
        "ruid": 29857468,
        "roomid": 8618057,
        "action": "switch_off",
        "uid": 0,
        "timestamp": 1673690549,
        "message": "系统提示：主播已切换分区",
        "message_type": 3,
        "jump_url": "",
        "web_url": "",
        "apply_number": 0,
        "refresh_tool": true,
        "cur_fleet_num": 0,
        "max_fleet_num": 0
    }
}
```
</details>
  
  
