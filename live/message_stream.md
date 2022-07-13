# 直播间信息流

- [获取信息流认证秘钥](#获取信息流认证秘钥)

---

## 获取信息流认证秘钥

> http://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo

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

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| code | num  | 返回值 | 0认证成功 |

方式：（下行）

#### 弹幕

方式：（下行）

当收到弹幕时接收到此条消息

json格式

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | string  | "DANMU_MSG" | 如果是弹幕消息，内容则是"DANMU_MSG" |
| info | list  | 单条弹幕的用户、内容、粉丝勋章等各种信息 | 待补 |

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

</detail>


json格式

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | string  | "DANMU_MSG" | 如果是弹幕消息，内容则是"DANMU_MSG" |
| info | list  | 单条弹幕的用户、内容、粉丝勋章等各种信息 | 待补 |

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

#### 送礼



#### 欢迎加入房间



#### 欢迎房管加入房间



#### 系统消息



#### 主播准备中



#### 直播开始



#### 直播状态更新


