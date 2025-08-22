# 直播间信息流

## 获取信息流认证秘钥

> https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo

*请求方法: GET*

认证方式: Cookie(SESSDATA)

鉴权方式：[Wbi 签名](../misc/sign/wbi.md), Cookie中的`buvid3`不为空

可以选择进行认证，若未认证视作未登录，将会受到限制，详见后续内容。

**URL参数：**

| 参数名 | 类型 | 内容         | 必要性 | 备注 |
| ------ | ---- | ------------ | ------ | ---- |
| id     | num  | 直播间真实id | 必要   |      |
| type   | num  | (?)          | 非必要 | 作用尚不明确 |
| web_location | str | (?)     | 非必要 | 作用尚不明确 |
| w_rid  | str | Wbi 签名 | 必要  | 详见 [Wbi 签名](../misc/sign/wbi.md) |
| wts    | num | 当前时间戳  | 必要  | 详见 [Wbi 签名](../misc/sign/wbi.md) |

注: 从2025年5月26日开始正式强制要求Wbi签名，2025年6月27日开始要求`buvid3`。见[#1295](https://github.com/SocialSisterYi/bilibili-API-collect/issues/1295)

**JSON回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0: 成功<br />1: 错误<br />65530: token 错误 (登录错误)<br />60009: 分区不存在<br />1002002: 房间号错误<br />**（其他错误码有待补充）** |
| message | str  | 错误信息 | 默认为空                                                     |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data` 对象：

| 字段               | 类型  | 内容                 | 备注 |
| ------------------ | ----- | -------------------- | ---- |
| group              | str   | live                 |      |
| business_id        | num   | 0                    |      |
| refresh_row_factor | num   | 0.125                |      |
| refresh_rate       | num   | 100                  |      |
| max_delay          | num   | 5000                 |      |
| token              | str   | 认证秘钥             |      |
| host_list          | array | 信息流服务器节点列表 |      |

`data.host_list[n]` 对象：

| 字段     | 类型 | 内容       | 备注 |
| -------- | ---- | ---------- | ---- |
| host     | str  | 服务器域名 |      |
| port     | num  | TCP 端口   |      |
| wss_port | num  | WSS 端口   |      |
| ws_port  | num  | WS 端口    |      |

**示例:**

获得直播间 `1017` 的信息流认证秘钥

```shell
curl 'https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo?id=1017&type=0&web_location=444.8&w_rid=cf24f88ea0cbb61e7b29aed0c070187d&wts=1748266797'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data":{
    "group": "live",
    "business_id": 0,
    "refresh_row_factor": 0.125,
    "refresh_rate": 100,
    "max_delay": 5000,
    "token": "gZ2Pp2T4rIc2HfD0e53FHhQAwKWjb6-QDD84AcxXi8sk3S89XcdvPWOgClZIMZ5mESr19-JKTOFxayX4IjeSQuckWqohE5Y0aHn-agpc2uU7aPXW3-Xmra3QEKljMZS5fM3q2vCf2XcAsjc8Xup7MVAc8SLWWXhQz0s7f1alCkaJBAIPA-i2nS39Ri4O",
    "host_list":[
      {
        "host": "zj-cn-live-comet.chat.bilibili.com",
        "port": 2243,
        "wss_port": 2245,
        "ws_port": 2244
      },
      {
        "host": "zj-cn-live-comet.chat.bilibili.com",
        "port": 2243,
        "wss_port": 2245,
        "ws_port": 2244
      },
      {
        "host": "bd-sz-live-comet-14.chat.bilibili.com",
        "port": 2243,
        "wss_port": 2245,
        "ws_port": 2244
      },
      {
        "host": "bd-bj-live-comet-09.chat.bilibili.com",
        "port": 2243,
        "wss_port": 2245,
        "ws_port": 2244
      },
      {
        "host": "broadcastlv.chat.bilibili.com",
        "port": 2243,
        "wss_port": 2245,
        "ws_port": 2244
      }
    ]
  }
}
```

</details>

## 数据包格式

数据包为 MQ (Message Queue, 消息队列) 使用 WebSocket 或 TCP 连接作为通道, 具体格式为 头部数据 + 正文数据

**注: 特别的**, WS 与 WSS 连接地址带有路径 `/sub`, 如 `wss://broadcastlv.chat.bilibili.com:443/sub`.

**再注:** B 站更新了隐私政策, 连接建立后, 若该连接认证时传入信息来自未登录用户, 会提示 `为保护用户隐私，未注册登陆用户将无法查看他人昵称`, 随后部分数据包（如“弹幕”、“用户交互消息”）的用户 mid 都为 `0`, 用户名部分也使用 `*` 保护, 部分房间受到豁免, 参见 [#732](https://github.com/SocialSisterYi/bilibili-API-collect/issues/732)

操作流程 (伪代码):

```javascript
const s = new Socket(uri);
// 认证包
s.send('verify_hello');
s.receive('verfiy_reply');
// 心跳包
setInterval(() => {
  s.send('heartbeat');
  s.receive('heartbeat_reply');
}, 30000);
// 接收普通包
while (!s.isclosed()) {
  s.receive('normal_package');
}
```

头部格式:

| 偏移量 | 长度 | 类型   | 含义                                 |
| ------ | ---- | ------ | ------------------------------------ |
| 0      | 4    | uint32 | 封包总大小 (头部大小 + 正文大小)     |
| 4      | 2    | uint16 | 头部大小 (一般为 0x0010, 即 16 字节) |
| 6      | 2    | uint16 | 协议版本:<br />0: 普通包 (正文不使用压缩)<br />1: 心跳及认证包 (正文不使用压缩)<br />2: 普通包 (正文使用 zlib 压缩)<br/>3: 普通包 (使用 brotli 压缩的多个带文件头的普通包) |
| 8      | 4    | uint32 | 操作码 (封包类型)                    |
| 12     | 4    | uint32 | sequence, 每次发包时向上递增         |

操作码:

| 代码 | 含义                |
| ---- | ------------------- |
| 2    | 心跳包              |
| 3    | 心跳包回复 (人气值) |
| 5    | 普通包 (命令)       |
| 7    | 认证包              |
| 8    | 认证包回复          |

*普通包可能包含多条命令, 每个命令有一个头部, 指示该条命令的长度等信息*

## 数据包

### 认证包

*方向: 上行*

注: 连接成功后 5 秒内发送, 否则强制断开连接

再注: 若`uid`字段填写的是用户mid，则通过`获取信息流认证密钥`接口使用的认证信息所属用户mid必须与`uid`字段相同，并正确传递认证密钥，否则强制断开连接。

**JSON正文:**

根对象:

| 字段     | 类型 | 内容         | 必要性 | 备注                        |
| -------- | ---- | ------------ | ------ | --------------------------- |
| uid      | num  | 用户mid      | 非必要 | 0 即为游客登录              |
| roomid   | num  | 加入房间的id | 必要   | 直播间真实id                |
| protover | num  | 协议版本     | 非必要 | 3, 与数据包头部协议版本无关 |
| platform | str  | 平台标识     | 非必要 | `web`                       |
| type     | num  | 2            | 非必要 |                             |
| key      | str  | 认证秘钥     | 非必要 |                             |

**示例:**

```text
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

*方向: 下行*

注: 在认证包发送成功后就会收到 JSON 正文, 若失败则返回 HTTP/0.9 的 403

**JSON正文:**

根对象:

| 字段 | 类型 | 内容   | 备注        |
| ---- | ---- | ------ | ----------- |
| code | num  | 返回值 | 0: 认证成功 |

**示例:**

```text
00000000: 0000 001a 0010 0001 0000 0008 0000 0001  ................
00000001: 7b22 636f 6465 223a 307d                 {"code":0}
```

### 心跳包

*方向: 上行*

注: 30 秒左右发送一次, 否则 60 秒后会被强制断开连接

**正文:**

可以为空或任意字符

**示例:**

```text
00000000: 0000 001f 0010 0001 0000 0002 0000 0001  ................
00000001: 5b6f 626a 6563 7420 4f62 6a65 6374 5d    [object Object]
```

### 心跳包回复 (人气值)

*方向: 下行*

注: 在心跳包发送成功后就会收到

**正文:**

正文分为两个部分

- 第一部分: uint32 整数代表的房间当前的人气值

- 第二部分: 心跳包正文内容

**示例:**

示例房间内人气值为 2466 (0x000009a2)

```text
00000000: 0000 0014 0010 0001 0000 0003 0000 0000  ................
00000001: 0000 09a2 5b6f 626a 6563 7420 4f62 6a65  ....[object Obje
00000002: 6374 5d                                  ct]
```

### 普通包

*方向: 下行*

**正文:**

一般为普通 JSON 数据

大多数普通包都经过 zlib 或 brotli 压缩

**示例:**

```text
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

<!-- 2 年前的索引, 留作纪念, 不会增加新的内容

- [弹幕](#弹幕)
- [进场或关注消息](#进场或关注消息)
- [送礼](#送礼)
- [礼物星球点亮](#礼物星球点亮)
- [礼物连击](#礼物连击)
- [通知消息](#通知消息)
- [主播准备中](#主播准备中)
- [直播开始](#直播开始)
- [主播信息更新](#主播信息更新)
- [直播间高能榜](#直播间高能榜)
- [直播间高能用户数量](#直播间高能用户数量)
- [用户到达直播间高能榜前三名的消息](#用户到达直播间高能榜前三名的消息)
- [直播间用户点赞](#直播间用户点赞)
- [直播间点赞数](#直播间点赞数)
- [直播间发红包弹幕](#直播间发红包弹幕)
- [直播间红包](#直播间红包)
- [直播间抢到红包的用户](#直播间抢到红包的用户)
- [直播间看过人数](#直播间看过人数)
- [用户进场特效](#用户进场特效)
- [直播间在所属分区的排名改变](#直播间在所属分区的排名改变)
- [直播间在所属分区排名提升的祝福](#直播间在所属分区排名提升的祝福)
- [直播间信息更改](#直播间信息更改)
- [醒目留言按钮](#醒目留言按钮)
- [顶部横幅](#顶部横幅)
- [下播的直播间](#下播的直播间)
- [未知消息](#未知消息)

-->

#### 弹幕 (DANMU_MSG)

注: 当收到弹幕时接收到此条消息, 10 进制转 16 进制若位数不足则在左侧补 `0`

**JSON消息:**

根对象:

| 字段  | 类型  | 内容        | 备注 |
| ----- | ----- | ----------- | ---- |
| cmd   | str   | `DANMU_MSG` |      |
| dm_v2 | str   | 空串?       |      |
| info  | array | 弹幕信息    | 感谢 [#1084](https://github.com/SocialSisterYi/bilibili-API-collect/issues/1084) 补充 |
| msg_id | str | 弹幕id?      | 极低概率存在 |
| p_is_ack | bool |          | 极低概率存在 |
| p_msg_type | num |         | 极低概率存在 |
| send_time | num | 发送时间戳 | Unix 毫秒时间戳，极低概率存在 |

`info` 数组:

| 项 | 类型  | 内容               | 备注 |
| -- | ----- | ------------------ | ---- |
| 0  | array | 弹幕信息           | 大部分信息可从 `info[0][15].extra` 获取 |
| 1  | str   | 弹幕文本           |      |
| 2  | array | 发送者信息         | 大部分信息可从 `info[0][15].user` 获取  |
| 3  | array | 发送者粉丝勋章信息 | 若无则为空 |
| 4  | array | 发送者UL等级信息   |      |
| 5  | array | ?                  |      |
| 6  | num   | 0?                 |      |
| 7  | num   | 0?                 |      |
| 8  | null  |                    |      |
| 9  | obj   | 发送时间戳         |      |
| 10 | num   | 0?                 |      |
| 11 | num   | 0?                 |      |
| 12 | null  |                    |      |
| 13 | null  |                    |      |
| 14 | num   | 0?                 |      |
| 15 | num   | ?                  |      |
| 16 | array | ?                  |      |

`info[0]` 数组:

| 项 | 类型 | 内容                     | 备注 |
| -- | ---- | ------------------------ | ---- |
| 0  | num  |                          |      |
| 1  | num  | 弹幕模式                 | 弹幕的 mode 字段 |
| 2  | num  | 弹幕字体大小             | 弹幕的 fontsize 字段 |
| 3  | num  | 弹幕颜色                 | 弹幕的 color 字段<br />十六进制颜色值的十进制数字 |
| 4  | num  | 发送时的 UNIX 毫秒时间戳 | 弹幕的 rnd 字段 |
| 5  | num  |                          | 一个负整数 |
| 6  | num  | 0?                       |      |
| 7  | str  | 可能为颜色?              | 一个 16 进制数 |
| 8  | num  | 0?                       |      |
| 9  | num  | 0?                       |      |
| 10 | num  | 0?                       |      |
| 11 | str  | 空串?                    |      |
| 12 | num  | 0?                       |      |
| 13 | str  | 字符串表示的 JSON Object | 空?  |
| 14 | str  | 字符串表示的 JSON Object | 空?  |
| 15 | obj  | 弹幕补充信息             |      |
| 16 | obj  | 活动相关信息?            |      |
| 17 | num  | 0?                       |      |
| 18 | null |                          |      |

`info[0][15]` 对象:

| 字段             | 类型 | 内容         | 备注 |
| ---------------- | ---- | ------------ | ---- |
| extra            | str  | 弹幕信息     | 字符串表示的 JSON |
| mode             | num  | 弹幕模式?    |      |
| show_player_type | num  | 0?           |      |
| user             | obj  | 用户相关信息 |      |

`info[0][15].extra` 表示的对象:

见下方 JSONC

```jsonc
{
  "send_from_me": false,      // 是否由该接收消息的用户发送
  "mode": 0,                  // 弹幕模式 (info[0][1])
  "color": 9920249,           // 弹幕颜色 (info[0][3])
  "dm_type": 0,
  "font_size": 25,            // 弹幕字体大小 (info[0][2])
  "player_mode": 1,
  "show_player_type": 0,
  "content": "白花300块[热]", // 弹幕文本 (info[1])
  "user_hash": "197700816",
  "emoticon_unique": "",
  "bulge_display": 0,
  "recommend_score": 3,
  "main_state_dm_color": "",
  "objective_state_dm_color": "",
  "direction": 0,             // 弹幕方向?
  "pk_direction": 0,
  "quartet_direction": 0,
  "anniversary_crowd": 0,
  "yeah_space_type": "",
  "yeah_space_url": "",
  "jump_to_url": "",
  "space_type": "",
  "space_url": "",
  "animation": {},
  "emots": {                  // 表情相关信息 (用于文本替换)
    "[热]": {
      "count": 1,
      "descript": "[热]",
      "emoji": "[热]",
      "emoticon_id": 278,
      "emoticon_unique": "emoji_278",
      "height": 20,
      "url": "http://i0.hdslb.com/bfs/live/6df760280b17a6cbac8c1874d357298f982ba4cf.png",
      "width": 20
    }
  },
  "is_audited": false,
  "id_str": "364b06e3c561af3d5921f1253d66c1d575",
  "icon": {
    "prefix": {
      "type": 1,
      "resource": "ChronosWealth_4.png"
    }
  },
  "show_reply": true,         // 显示回复?
  "reply_mid": 0,
  "reply_uname": "",
  "reply_uname_color": "",
  "reply_is_mystery": false,
  "hit_combo": 0
}
```

`info[0][15].user` 对象:

| 字段         | 类型 | 内容       | 备注 |
| ------------ | ---- | ---------- | ---- |
| base         | obj  | 基本信息   |      |
| guard        | null |            |      |
| guard_leader | obj  | ?          |      |
| medal        | obj  | 粉丝排信息 | 参见 [指定用户的所有粉丝勋章信息](../user/medals.md#指定用户的所有粉丝勋章信息) `data.list[n].uinfo_medal` |
| title        | obj  | ?          |      |
| uhead_frame  | null |            |      |
| uid          | num  | 发送者 mid |      |
| wealth       | null |            |      |

`info[0][15].user.base` 对象:

| 字段           | 类型 | 内容             | 备注    |
| -------------- | ---- | ---------------- | ------- |
| face           | str  | 发送者头像 URL   |         |
| is_mystery     | bool | 是否是神秘用户?  |         |
| name           | str  | 发送者用户名     |         |
| name_color     | num  | 用户名颜色       | 10 进制 |
| name_color_str | num  | 字符串表示的颜色 |         |
| offical_info   | obj  | 认证信息         | 参见 [用户空间详细信息](../user/info.md#用户空间详细信息) `data.official` |
| origin_info    | obj  | 同 `face` `name` |         |
| risk_ctrl_info | null |                  |         |

`info[0][15].user.title` 对象:

| 字段             | 类型 | 内容  | 备注 |
| ---------------- | ---- | ----- | ---- |
| old_title_css_id | str  | 空串? |      |
| title_css_id     | str  | 空串? |      |

`info[0][16]` 对象:

| 字段              | 类型 | 内容  | 备注 |
| ----------------- | ---- | ----- | ---- |
| activity_identity | str  | 空串? |      |
| activity_source   | num  | 0?    |      |
| not_show          | num  | 0?    |      |

`info[2]` 数组:

| 项 | 类型 | 内容          | 备注 |
| -- | ---- | ------------- | ---- |
| 0  | num  | 发送者 mid    | 同 `info[0][15].user.uid` |
| 1  | str  | 发送者用户名  | 同 `info[0][15].user.base.name` |
| 2  | num  | 0?            |      |
| 3  | num  | 0?            |      |
| 4  | num  | 0?            |      |
| 5  | num  | 用户权限等级? | 参见 [用户空间详细信息](../user/info.md#用户空间详细信息) `data.rank` |
| 6  | num  | ?             |      |

`info[3]` 数组:

| 项 | 类型 | 内容                                     | 备注 |
| -- | ---- | ---------------------------------------- | ---- |
| 0  | num  | 同 `info[0][15].user.medal.level`        |      |
| 1  | str  | 同 `info[0][15].user.medal.name`         |      |
| 2  | str  | 粉丝牌创建主播名称                       |      |
| 3  | num  | ?                                        |      |
| 4  | num  | 同 `info[0][15].user.medal.color`        |      |
| 5  | str  | 空串?                                    |      |
| 6  | num  | 0?                                       |      |
| 7  | num  | 同 `info[0][15].user.medal.color_border` |      |
| 8  | num  | 同 `info[0][15].user.medal.color_start`  |      |
| 9  | num  | 同 `info[0][15].user.medal.color_end`    |      |
| 10 | num  | 同 `info[0][15].user.medal.guard_level`  |      |
| 11 | num  | 同 `info[0][15].user.medal.is_light`     |      |
| 12 | num  | 同 `info[0][15].user.medal.ruid`         |      |

`info[4]` 数组:

| 项 | 类型 | 内容 | 备注 |
| -- | ---- | ---- | ---- |
| 0  | num  | ?    |      |
| 1  | num  | ?    |      |
| 2  | num  | ?    |      |
| 3  | num  | ?    |      |
| 4  | num  | ?    |      |

`info[5]` 数组:

| 项 | 类型 | 内容  | 备注 |
| -- | ---- | ----- | ---- |
| 0  | str  | 空串? |      |
| 1  | str  | 空串? |      |

`info[9]` 对象:

| 字段 | 类型 | 内容     | 备注            |
| ---- | ---- | -------- | --------------- |
| ct   | str  | ?        | 16 进制         |
| ts   | num  | 发送时间 | UNIX 秒级时间戳 |

`info[16]` 数组:

| 项 | 类型 | 内容 | 备注 |
| -- | ---- | ---- | ---- |
| 0  | num  | ?    |      |

**示例:**

<details>
<summary>查看消息示例(带注释):</summary>

```jsonc
{
  "cmd": "DANMU_MSG",
  "dm_v2": "",
  "info": [
    [
      0,
      1,
      25, //字体大小
      9920249, //弹幕颜色代码(10进制)#975ef9
      1723979200649,
      -1312973962,
      0,
      "0bc8acd0",
      0,
      0,
      0,
      "",
      0,
      "{}",
      "{}",
      {
        "extra": "{\"send_from_me\":false,\"mode\":0,\"color\":9920249,\"dm_type\":0,\"font_size\":25,\"player_mode\":1,\"show_player_type\":0,\"content\":\"白花300块[热]\",\"user_hash\":\"197700816\",\"emoticon_unique\":\"\",\"bulge_display\":0,\"recommend_score\":3,\"main_state_dm_color\":\"\",\"objective_state_dm_color\":\"\",\"direction\":0,\"pk_direction\":0,\"quartet_direction\":0,\"anniversary_crowd\":0,\"yeah_space_type\":\"\",\"yeah_space_url\":\"\",\"jump_to_url\":\"\",\"space_type\":\"\",\"space_url\":\"\",\"animation\":{},\"emots\":{\"[热]\":{\"count\":1,\"descript\":\"[热]\",\"emoji\":\"[热]\",\"emoticon_id\":278,\"emoticon_unique\":\"emoji_278\",\"height\":20,\"url\":\"http://i0.hdslb.com/bfs/live/6df760280b17a6cbac8c1874d357298f982ba4cf.png\",\"width\":20}},\"is_audited\":false,\"id_str\":\"364b06e3c561af3d5921f1253d66c1d575\",\"icon\":{\"prefix\":{\"type\":1,\"resource\":\"ChronosWealth_4.png\"}},\"show_reply\":true,\"reply_mid\":0,\"reply_uname\":\"\",\"reply_uname_color\":\"\",\"reply_is_mystery\":false,\"hit_combo\":0}",
        "mode": 0,
        "show_player_type": 0,
        "user": {
          "base": {
            "face": "https://i1.hdslb.com/bfs/face/5a9bb9cac3afbb58347c808ae76aaa41ca967d07.jpg", //弹幕发送用户头像
            "is_mystery": false,
            "name": "tim1997", //弹幕发送用户名称
            "name_color": 0,
            "name_color_str": "",
            "official_info": {
              "desc": "",
              "role": 0,
              "title": "",
              "type": -1
            },
            "origin_info": {
              "face": "https://i1.hdslb.com/bfs/face/5a9bb9cac3afbb58347c808ae76aaa41ca967d07.jpg",
              "name": "tim1997"
            },
            "risk_ctrl_info": null
          },
          "guard": null,
          "guard_leader": {
            "is_guard_leader": false
          },
          "medal": {
            "color": 2951253, //粉丝牌颜色(10进制)#2d0855
            "color_border": 16771156, //粉丝牌边框颜色(10进制)#ffe854
            "color_end": 10329087, //粉丝牌渐变颜色结束(10进制)#9d9bff
            "color_start": 2951253, //粉丝牌渐变颜色开始(10进制)#2d0855
            "guard_icon": "https://i0.hdslb.com/bfs/live/1d16bf0fcc3b1b768d1179d60f1fdbabe6ab4489.png", //粉丝牌左边的图标
            "guard_level": 1, //类型 1.总督 2.提督 3，舰长
            "honor_icon": "",
            "id": 1279130,
            "is_light": 1,
            "level": 29, //粉丝牌等级
            "name": "果咩吖", //粉丝牌名称
            "ruid": 3546569288714792, //粉丝牌创建者UID
            "score": 50427312,
            "typ": 0,
            "user_receive_count": 0,
            "v2_medal_color_border": "#D47AFFFF", //粉丝牌边框颜色(APP)
            "v2_medal_color_end": "#9660E5CC", //粉丝牌渐变颜色结束(APP)
            "v2_medal_color_level": "#6C00A099", //粉丝牌右边等级数字颜色(APP)
            "v2_medal_color_start": "#9660E5CC", //粉丝牌渐变颜色开始(APP)
            "v2_medal_color_text": "#FFFFFFFF" //粉丝牌右边圆形颜色(APP)
          },
          "title": {
            "old_title_css_id": "",
            "title_css_id": ""
          },
          "uhead_frame": null,
          "uid": 6088969, //弹幕发送用户UID
          "wealth": null
        }
      },
      {
        "activity_identity": "",
        "activity_source": 0,
        "not_show": 0
      },
      0
    ],
    "白花300块[热]", //弹幕内容
    [
      6088969, //同info[0][15].user.uid
      "tim1997", //同info[0][15].user.base.name
      0,
      0,
      0,
      10000,
      1,
      ""
    ],
    [
      29, //同info[0][15].user.medal.level
      "果咩吖", //同info[0][15].user.medal.name
      "果宝Official", //粉丝牌创建主播名称
      31180317,
      2951253, //同info[0][15].user.medal.color
      "",
      0,
      16771156, //同info[0][15].user.medal.color_border
      2951253, //同info[0][15].user.medal.color_start
      10329087, //同info[0][15].user.medal.color_end
      1, //同info[0][15].user.medal.guard_level
      1, //同info[0][15].user.medal.is_light
      3546569288714792 //同info[0][15].user.medal.ruid
    ],
    [
      39,
      0,
      10512625,
      42523,
      2
    ],
    [
      "",
      ""
    ],
    0,
    0,
    null,
    {
      "ct": "AFFF4206",
      "ts": 1723979200 //时间戳(秒级)
    },
    0,
    0,
    null,
    null,
    0,
    1040,
    [
      49
    ],
    null
  ]
}
```

</details>

#### 交互信息合并 (DM_INTERACTION)

注: 连续多条相同弹幕时触发

**JSON正文:**

根对象:

| 字段 | 类型 | 内容             | 备注 |
| ---- | ---- | ---------------- | ---- |
| cmd  | str  | `DM_INTERACTION` |      |
| data | obj  | 信息本体         |      |

`data` 对象:

| 字段     | 类型 | 内容     | 备注 |
| -------- | ---- | -------- | ---- |
| id       | num  | 事件 ID  |      |
| status   | num  | 状态     |      |
| type     | num  | 事件类型 | 101:投票<br />102:弹幕<br />103:关注<br />104:送礼<br />105:分享<br />106:点赞 |
| data     | str  | 事件数据 | 一个JSON字符串 |
| dmsource | num  |          |      |

`data.data` 字符串对象:

内容格式取决于`data.type`的类型，下面将按照`data.data(类型)`进行区分标记。

温馨提示: 要记得先解析`data.data`内的JSON字符串，不要直接使用哦。

`data.data(101)` 对象: (投票)

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| question | str | 投票问题 |  |
| options | obj | 投票详细选项 |  |
| vote_id | num | 投票id |  |
| cnt | num | 弹幕计数 |  |
| duration | num | 持续时间 | 单位毫秒 |
| left_duration | num | 剩余时间 | 单位毫秒 |
| fade_duration | num | (?) |  |
| waiting_duration | num | (?) |  |
| result | num | 投票倾向状态 |  |
| result_text | str | 投票倾向提示 |  |
| component | str | 投票链接 |  |
| natural_die_duration | num | (?) |  |
| my_vote | num | (?) |  |
| component_anchor | str | 投票控制链接 |  |
| audit_reason | str | 审核结果 |  |
| combo | obj | 投票状态展示 |  |

`data.data(101).options` 数组中对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| idx | num | 选项索引 |  |
| desc | str | 选项内容 |  |
| cnt | num | 票数 |  |
| percent | num | 显示占比 |  |

`data.data(101).combo` 数组中对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| id | num | 标识id | 同`data.data.options`数组中对象的`idx` |
| status | num | 状态 | 同`data.status` |
| content | str | 投票选项内容 |  |
| cnt | str | 弹幕计数 |  |
| guide | str | (?) | 空字符串 |
| left_duration | num | 剩余时间 |  |
| fade_duration | num | (?) |  |
| prefix_icon | str | 投票选项图标 |  |

`data.data(102)` 对象: (弹幕)

| 字段                 | 类型  | 内容                 | 备注 |
| -------------------- | ----- | -------------------- | ---- |
| combo                | array | 连续发送弹幕事件信息 |      |
| merge_interval       | num   | 合并弹幕时间间隔     |      |
| card_appear_interval | num   | 弹窗出现时间间隔     |      |
| send_interval        | num   | 发送时间间隔         |      |

`data.data(102).combo[n]` 对象:

| 字段          | 类型 | 内容           | 备注          |
| ------------- | ---- | -------------- | ------------- |
| id            | num  | 标识 ID        |               |
| status        | num  | 状态           |               |
| content       | str  | 重复的弹幕内容 |               |
| cnt           | num  | 重复数量       |               |
| guide         | str  | 标题词         | "他们都在说:" |
| left_duration | num  | 左移时长       |               |
| fade_duration | num  | 淡化时长       |               |

`data.data(103)` 对象: (关注)

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| fade\_duration | num |  |  |
| cnt | num | 关注计数 |  |
| card_appear_interval | num |  |  |
| suffix\_text | str | 提示文本 | `人关注了主播` |
| reset\_cnt | num |  |  |
| display\_flag | num |  |  |

`data.data(104)` 对象: (送礼)

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| fade\_duration | num |  |  |
| cnt | num | 投喂计数 |  |
| card_appear_interval | num |  |  |
| suffix\_text | str | 提示文本 | `人在投喂` |
| reset\_cnt | num |  |  |
| display\_flag | num |  |  |
| gift\_id | num | 礼物 ID |  |
| gift_alert_message | str |  |  |

`data.data(105)` 对象: (分享)

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| fade\_duration | num |  |  |
| cnt | num | 分享计数 |  |
| card_appear_interval | num |  |  |
| suffix\_text | str | 提示文本 | `人分享了直播间` |
| reset\_cnt | num |  |  |
| display\_flag | num |  |  |

`data.data(106)` 对象: (点赞)

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| fade\_duration | num |  |  |
| cnt | num | 点赞计数 |  |
| card_appear_interval | num |  |  |
| suffix\_text | str | 提示文本 | `人正在点赞` |
| reset\_cnt | num |  |  |
| display\_flag | num |  |  |

**示例:**

<details>
<summary>查看正文示例:</summary>

type===101

```json
{
	"cmd": "DM_INTERACTION",
	"data": {
		"data": "{\"question\":\"投票\",\"options\":[{\"idx\":1,\"desc\":\"赞成\",\"cnt\":0,\"percent\":0.5},{\"idx\":2,\"desc\":\"弃权\",\"cnt\":0,\"percent\":0.5}],\"vote_id\":98014370742272,\"cnt\":0,\"duration\":60000,\"left_duration\":60000,\"fade_duration\":1000,\"waiting_duration\":-1,\"result\":1,\"result_text\":\"平局\",\"component\":\"https://live.bilibili.com/p/html/live-app-guessing-game/vote.html?is_live_half_webview=1\\u0026hybrid_half_ui=1,3,100p,245,0,0,30,100,12,0;2,2,375,100p,0,0,30,100,12,0;3,3,100p,245,0,0,30,100,12,0;4,2,375,100p,0,0,30,100,12,0;5,3,100p,70p,0,0,30,100,12,0;6,3,100p,70p,0,0,30,100,12,0;7,3,100p,70p,0,0,30,100,12,0;8,3,100p,70p,0,0,30,100,12,0\",\"natural_die_duration\":30000,\"my_vote\":0,\"component_anchor\":\"https://live.bilibili.com/p/html/live-app-guessing-game/anchor_vote.html?pc_ui=390,428,0,3\\u0026is_live_half_webview=1\\u0026hybrid_half_ui=1,3,100p,448,0,0,30,0,12,0;2,2,375,100p,0,0,30,0,12,0;3,3,100p,448,0,0,30,0,12,0;4,2,375,100p,0,0,30,0,12,0;5,3,100p,448,0,0,30,0,12,0;6,2,320,100p,0,0,30,0,12,0;7,2,320,100p,0,0,30,0,12,0;8,2,320,100p,0,0,30,0,12,0#/\",\"audit_reason\":\"您提交的弹幕投票未审核通过，请修改\",\"combo\":[{\"id\":1,\"status\":2,\"content\":\"赞成\",\"cnt\":0,\"guide\":\"\",\"left_duration\":60000,\"fade_duration\":0,\"prefix_icon\":\"http://i0.hdslb.com/bfs/dm/7d7e3682c9116aa3503418abe3cde6b45ed2e91e.png\"},{\"id\":2,\"status\":2,\"content\":\"弃权\",\"cnt\":0,\"guide\":\"\",\"left_duration\":60000,\"fade_duration\":0,\"prefix_icon\":\"http://i0.hdslb.com/bfs/dm/f83c7280b2a90b4f58a68fd8c594ea7d5667e3cb.png\"}]}",
		"dmscore": 36,
		"id": 98014370742272,
		"status": 2,
		"type": 101
	}
}
```

type===102

```json
{
  "cmd": "DM_INTERACTION",
  "data": {
    "id": 6785480089600,
    "status": 4,
    "type": 102,
    "data": {
      "combo": [
        {
          "id": 6785480089600,
          "status": 4,
          "content": "晚安",
          "cnt": 3,
          "guide": "他们都在说:",
          "left_duration": 20000,
          "fade_duration": 60000
        }
      ],
      "merge_interval": 1000,
      "card_appear_interval": 1000,
      "send_interval": 1000
    }
  }
}
```

type===103

```json
{
	"cmd": "DM_INTERACTION",
	"data": {
		"data": "{\"fade_duration\":10000,\"cnt\":6,\"card_appear_interval\":0,\"suffix_text\":\"人关注了主播\",\"reset_cnt\":0,\"display_flag\":1}",
		"dmscore": 36,
		"id": 94362402889728,
		"status": 4,
		"type": 103
	}
}
```

type===104

```json
{
	"cmd": "DM_INTERACTION",
	"data": {
		"data": "{\"fade_duration\":10000,\"cnt\":5,\"card_appear_interval\":0,\"suffix_text\":\"人在投喂\",\"reset_cnt\":0,\"display_flag\":1,\"gift_id\":33988,\"gift_alert_message\":\"投喂一个%s支持主播\"}",
		"dmscore": 36,
		"id": 85744481752576,
		"status": 5,
		"type": 104
	}
}
```

type===105

```json
{
	"cmd": "DM_INTERACTION",
	"data": {
		"data": "{\"fade_duration\":10000,\"cnt\":1,\"card_appear_interval\":0,\"suffix_text\":\"人分享了直播间\",\"reset_cnt\":0,\"display_flag\":1}",
		"dmscore": 36,
		"id": 85743053669888,
		"status": 4,
		"type": 105
	}
}
```

type===106

```json
{
	"cmd": "DM_INTERACTION",
	"data": {
		"data": "{\"fade_duration\":10000,\"cnt\":11,\"card_appear_interval\":0,\"suffix_text\":\"人正在点赞\",\"reset_cnt\":1,\"display_flag\":1}",
		"dmscore": 36,
		"id": 66159395305984,
		"status": 5,
		"type": 106
	}
}
```

</details>

#### 用户交互消息 (INTERACT_WORD)

注: 有用户进入直播间、关注主播、分享直播间时触发

已被`INTERACT_WORD_V2`替换。

**JSON消息:**

根对象:

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd  | str  | `INTERACT_WORD`        |  |
| data | obj  | 用户交互信息 |  |

`data` 对象:

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| contribution | obj  | 待调查 |  |
| dmscore | num | 待调查 |  |
| fans_medal | obj | 粉丝勋章 |  |
| identities | num | 待调查 |  |
| is_spread | num | 待调查 |  |
| msg_type | num  | 1为进场，2为关注，3为分享 |  |
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

**示例:**

<details>
<summary>查看消息示例:</summary>

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

#### 用户交互消息V2 (INTERACT_WORD_V2)

注: 该cmd已将`INTERACT_WORD`替换

**JSON消息:**

根对象:

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd  | str  | `INTERACT_WORD_V2` |  |
| data | obj  | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| dmscore | num |  |  |
| pb | str | 使用 base64 编码 protobuf 后的数据 | 解析后数据基本与`INTERACT_WORD`的`data`相同 |

用于解析protobuf数据的proto文件: [#1332(comment)](https://github.com/SocialSisterYi/bilibili-API-collect/issues/1332#issuecomment-3047237367)

注: 先用 base64 解码 `data.pb` 内的字符串为字节数据pb，再使用proto文件解码pb数据。

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "INTERACT_WORD_V2",
	"data": {
		"dmscore": 3,
		"pb": "CJTwwNEBEgpTdGFyU2VhMjQ2IgIDASgBMNWgITispaTDBkDUubHe/jJKLAiv8CkQEhoG55Sf5oCBIKS6ngYopLqeBjCkup4GOKS6ngZAAWDVoCFo9JQRYgB4gZ/v1tmc1qcYmgEAsgHPAQiU8MDRARJYCgpTdGFyU2VhMjQ2EkpodHRwczovL2kwLmhkc2xiLmNvbS9iZnMvZmFjZS8xMDliNzg3YzVmMTEzYzRhM2M3NDE1YmI5YmY2YjgyYmMzM2JjNGUyLmpwZxpnCgbnlJ/mgIEQEhikup4GIKS6ngYopLqeBjCkup4GOP/hAUgBUK/wKWD0lBF6CSNEQzZCNkI5OYIBCSNEQzZCNkI5OYoBCSNEQzZCNkI5OZIBCSNGRkZGRkZGRpoBCSM4MTAwMUY5OSICCAkyALoBAA=="
	}
}
```

</details>

#### 上舰通知 (GUARD_BUY)

注: 当有用户购买 舰长 / 提督 / 总督 时

**JSON消息:**

| 字段 | 类型 | 内容        | 备注 |
| ---- | ---- | ----------- | ---- |
| cmd  | str  | `GUARD_BUY` |      |
| data | obj  | 信息本体    |      |

`data` 对象:

| 字段 | 类型  | 内容                       | 备注  |
| ---- |-----|--------------------------|-----|
| uid | num | 用户ID                     |     |
| username | str | 用户名称                     |     |
| guard_level | num | 大航海等级  |  1: 总督<br />2: 提督<br />3:舰长     |
| num | num | 数量                       |     |
| price | num | 原金瓜子标价                      | 即 CNY\*1000 |
| gift_id | num | 礼物id                     |     |
| gift_name | str | 礼物名称                     |     |
| start_time | num | 待调查                      |     |
| end_time | num | 待调查                      |     |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "GUARD_BUY",
  "data": {
    "uid": 14225357,
    "username": "妙妙喵喵妙妙喵O_O",
    "guard_level": 3,
    "num": 1,
    "price": 198000,
    "gift_id": 10003,
    "gift_name": "舰长",
    "start_time": 1677069316,
    "end_time": 1677069316
  }
}
```

</details>

#### 用户庆祝消息 (USER_TOAST_MSG)

注: 用户购买 舰长 / 提督 / 总督 后的庆祝消息, 内容包含用户陪伴天数

**JSON消息:**

根对象:

| 字段 | 类型 | 内容             | 备注 |
| ---- | ---- | ---------------- | ---- |
| cmd  | str  | `USER_TOAST_MSG` |      |
| data | obj  | 信息本体         |      |

`data` 对象:

| 字段 | 类型  | 内容                       | 备注  |
| ---- |-----|--------------------------|-----|
| anchor_show | bool | 是否显示 |     |
| color | str | 颜色 |     |
| dmscore | num | 待调查  |     |
| effect_id | num | 待调查 |     |
| face_effect_id | num | 待调查  |     |
| gift_id | num | 礼物id |     |
| group_name | str | 待调查  |     |
| group_op_type | num | 待调查   |     |
| group_role_name | str | 待调查  |     |
| guard_level | num | 大航海等级       | 1: 总督<br />2:<br />提督<br />3:舰长 |
| is_group | num | 待调查 |     |
| is_show | num | 待调查 |     |
| num | num | 上舰个数  |     |
| op_type | num | 待调查 |     |
| payflow_id | str | 待调查 |     |
| price | num | 实际金瓜子标价 | 即 CNY\*1000 |
| role_name | str | 身份名称 |     |
| room_effect_id | num | 待调查 |     |
| room_group_effect_id | num | 待调查 |     |
| start_time | num | 待调查 |     |
| svga_block | num | 待调查 |     |
| target_guard_count | str | 庆祝消息正文 |     |
| toast_msg | num | 待调查 |     |
| uid | num | 上舰人UID |     |
| unit | str | 购买身份时间单位 |     |
| user_show | bool | 待调查 |     |
| username | str | 上舰人用户名 |     |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "USER_TOAST_MSG",
  "data": {
    "anchor_show": true,
    "color": "#00D1F1",
    "dmscore": 90,
    "effect_id": 397,
    "end_time": 1702580687,
    "face_effect_id": 44,
    "gift_id": 10003,
    "group_name": "",
    "group_op_type": 0,
    "group_role_name": "",
    "guard_level": 3,
    "is_group": 0,
    "is_show": 0,
    "num": 1,
    "op_type": 1,
    "payflow_id": "2312150304155852173446521",
    "price": 138000,
    "role_name": "舰长",
    "room_effect_id": 590,
    "room_group_effect_id": 1337,
    "start_time": 1702580687,
    "svga_block": 0,
    "target_guard_count": 146,
    "toast_msg": "<%无光之日%> 在主播Mia米娅-的直播间开通了舰长，今天是TA陪伴主播的第1天",
    "uid": 79667344,
    "unit": "月",
    "user_show": true,
    "username": "无光之日"
  }
}
```

</details>

#### 醒目留言 (SUPER_CHAT_MESSAGE)

**JSON消息:**

根对象:

| 字段   | 类型 | 内容                  | 备注 |
| ------ | ---- | --------------------- | ---- |
| cmd    | str  | `SUPER_CHAT_MESSAGE`  |      |
| data   | obj  | 信息本体              |      |
| roomid | num  | 直播间房间号 (非短号) |      |

`data` 对象:

| 字段 | 类型  | 内容             |    备注    |
| ---- |-----|----------------| --------- |
| background_bottom_color | str | 待调查            | |
| background_color | str | 待调查            | |
| background_color_end | str | 待调查            | |
| background_color_start | str | 待调查            | |
| background_icon | str | 待调查            | |
| background_image | str | 待调查            | |
| background_price_color | str | 待调查            | |
| color_point | num | 待调查            | |
| dmscore | num | 待调查            | |
| end_time | num | 待调查            | |
| gift | obj | 礼物信息           | |
| id | num | 醒目留言 ID            | |
| is_ranked | num | 待调查            | |
| is_send_audit | num | 待调查            | |
| medal_info | obj | SC发送用户佩戴的粉丝牌信息 | |
| message | str | sc内容           | |
| message_font_color | str | SC文本颜色         | |
| message_trans | str | 机翻sc内容  | |
| price | num | sc金额           | 为 CNY 价值 |
| rate | num | 待调查            | |
| start_time | num | 待调查            | |
| time | num | sc持续时间         | |
| token | num | 待调查            | |
| trans_mark | num | 待调查            | |
| ts | num | 待调查            | |
| uid | num | 发送用户uid        | |
| user_info | obj | 发送用户信息         | |

`data.gift` 对象:

| 字段 | 类型  | 内容   | 备注   |
| ---- |-----|------|------|
| gift_id | num | 礼物id |      |
| gift_name | str | 礼物名称 | 一般均为"醒目留言" |
| num | num | 数量   |      |

`data.medal_info` 对象:

| 字段 | 类型  | 内容          | 备注   |
| ---- |-----|-------------|------|
| anchor_roomid | num | 房间号         | 包含短号 |
| anchor_uname | str | 主播昵称        |  |
| guard_level | num | 大航海等级       | 1: 总督<br/>2: 提督<br />3: 舰长 |
| icon_id | num | 待调查         |  |
| is_lighted | num | 待调查         |  |
| medal_color | str | 待调查         |  |
| medal_color_border | num | 待调查         |  |
| medal_color_end | num | 待调查         |  |
| medal_color_start | num | 待调查         |  |
| medal_level | num | 粉丝牌等级       |  |
| medal_name | str | 粉丝牌名称       |  |
| special | str | 待调查         |  |
| target_id | num | 粉丝牌对应的主播mid |  |

`data.user_info` 对象:

| 字段 | 类型  | 内容    | 备注   |
| ---- |-----|-------|------|
| face | num | 用户头像  |  |
| face_frame | num | 头像边框  |  |
| guard_level | num | 大航海等级 | 1: 总督<br />2: 提督<br />3: 舰长 |
| is_main_vip | num | 待调查   |  |
| is_svip | num | 待调查   |  |
| is_vip | num | 待调查   |  |
| level_color | str | 待调查   |  |
| manager | num | 待调查   |  |
| name_color | str | 待调查   |  |
| title | str | 待调查   |  |
| uname | str | 用户名称  |  |
| user_level | num | 待调查   |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

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
    "end_time": 1677069095,
    "gift": {
      "gift_id": 12000,
      "gift_name": "醒目留言",
      "num": 1
    },
    "id": 6522809,
    "is_ranked": 1,
    "is_send_audit": 0,
    "medal_info": {
      "anchor_roomid": 732,
      "anchor_uname": "Asaki大人",
      "guard_level": 3,
      "icon_id": 0,
      "is_lighted": 1,
      "medal_color": "#1a544b",
      "medal_color_border": 6809855,
      "medal_color_end": 5414290,
      "medal_color_start": 1725515,
      "medal_level": 21,
      "medal_name": "ASAKI",
      "special": "",
      "target_id": 194484313
    },
    "message": "猪播完美预测自己第一个死，这就是鹅鸭杀高玩吗",
    "message_font_color": "#A3F6FF",
    "message_trans": "",
    "price": 30,
    "rate": 1000,
    "start_time": 1677069035,
    "time": 60,
    "token": "7BED5681",
    "trans_mark": 0,
    "ts": 1677069035,
    "uid": 294094150,
    "user_info": {
      "face": "https://i1.hdslb.com/bfs/face/7a11b48e0a3055e220fa8b4c7d938cd4bcac2577.jpg",
      "face_frame": "https://i0.hdslb.com/bfs/live/80f732943cc3367029df65e267960d56736a82ee.png",
      "guard_level": 3,
      "is_main_vip": 1,
      "is_svip": 0,
      "is_vip": 0,
      "level_color": "#969696",
      "manager": 0,
      "name_color": "#00D1F1",
      "title": "0",
      "uname": "界原虚",
      "user_level": 6
    }
  },
  "roomid": 6154037
}
```

</details>

#### 醒目留言日语 (SUPER_CHAT_MESSAGE_JPN)

基本同 [醒目留言 (SUPER_CHAT_MESSAGE)](#醒目留言-super_chat_message), 但多了 `message_jpn` 字段

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "SUPER_CHAT_MESSAGE_JPN",
  "data": {
    "id": "3790747",
    "uid": "394060741",
    "price": 30,
    "rate": 1000,
    "message": "棉花！！转盘中了武器后，上号30抽3武器，救命！！！",
    "message_jpn": "",
    "is_ranked": 1,
    "background_image": "https://i0.hdslb.com/bfs/live/a712efa5c6ebc67bafbe8352d3e74b820a00c13e.png",
    "background_color": "#EDF5FF",
    "background_icon": "",
    "background_price_color": "#7497CD",
    "background_bottom_color": "#2A60B2",
    "ts": 1650363318,
    "token": "24655ABF",
    "medal_info": {
      "icon_id": 0,
      "target_id": 1871001,
      "special": "",
      "anchor_uname": "棉花大哥哥",
      "anchor_roomid": 103,
      "medal_level": 24,
      "medal_name": "棉花花",
      "medal_color": "#1a544b"
    },
    "user_info": {
      "uname": "改了名真的能中吗",
      "face": "http://i1.hdslb.com/bfs/face/e2391f132cd981fb70468a8ce9418513e959eb10.jpg",
      "face_frame": "https://i0.hdslb.com/bfs/live/80f732943cc3367029df65e267960d56736a82ee.png",
      "guard_level": 3,
      "user_level": 11,
      "level_color": "#61c05a",
      "is_vip": 0,
      "is_svip": 0,
      "is_main_vip": 1,
      "title": "0",
      "manager": 0
    },
    "time": 60,
    "start_time": 1650363318,
    "end_time": 1650363378,
    "gift": {
      "num": 1,
      "gift_id": 12000,
      "gift_name": "醒目留言"
    }
  },
  "roomid": "34348"
}
```

</details>

#### 醒目留言删除 (SUPER_CHAT_MESSAGE_DELETE)

<!--{
  "gh": [360]
}-->

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `SUPER_CHAT_MESSAGE_DELETE` | |
| data | obj | 消息本体 | |
| roomid | num | 直播间号 | |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| ids | arr | 待删除的醒目留言 ID 列表 | |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "SUPER_CHAT_MESSAGE_DELETE",
  "data": {
    "ids": [
      3897503
    ]
  },
  "roomid": 23708804
}
```

</details>

#### 送礼 (SEND_GIFT)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容        | 备注 |
| ---- | ---- | ----------- | ---- |
| cmd  | str  | `SEND_GIFT` |      |
| data | obj  | 消息本体    |      |

`data` 对象:

| 字段 |    类型   |  内容  |    备注    |
| ---- | -------- | ------ | --------- |
| action | str | 礼物操作，一般为"投喂" | |
| batch_combo_id | str | 待调查 | 有时为空字符串 |
| batch_combo_send | obj | 待调查 | 有时为null |
| beatId | str | 待调查 | |
| biz_source | str | 待调查 | |
| blind_gift | | 待调查 | |
| broadcast_id | num | 待调查 | |
| coin_type | str | 标识金银瓜子礼物对应是否付费? | |
| combo_resources_id | num | 待调查 | |
| combo_send | | 待调查 | |
| comber_stay_time | num | 待调查 | |
| combo_total_coin | num | 待调查 | |
| crit_prob | num | 待调查 | |
| demarcation | num | 待调查 | |
| discount_price | num | 待调查 | |
| dmscore | num | 待调查 | |
| draw | num | 待调查 | |
| effect | num | 待调查 | |
| effect_block | num | 待调查 | |
| face | str | 礼物投喂者的头像URL | |
| face_effect_id | num | 待调查 | |
| face_effect_type | num | 待调查 | |
| float_sc_resource_id | num | 待调查 | |
| giftId | num | 礼物ID | |
| giftName | str | 礼物名称 | |
| giftType | num | 待调查 | |
| gold | number | 待调查 | |
| guard_level | num | 待调查 | |
| is_first | bool | 待调查 | |
| is_join_receiver | bool | 待调查 | |
| is_naming | bool | 待调查 | |
| is_special_batch | num | 待调查 | |
| magnification | num | 待调查 | |
| medal_info | obj | 礼物投喂者粉丝奖牌信息 | |
| name_color | str | 待调查 | |
| num | num | 该次投喂的礼物数量 | |
| original_gift_name | str | 待调查 | |
| price | num | 价值 | |
| rcost | num | 待调查 | |
| receive_user_info | obj | 礼物接收者信息，一般是主播 | |
| remain | num | 待调查 | |
| rnd | num | 礼物发送时的时间戳，以及后面9位未知数字 | |
| send_master | | 待调查 | |
| silver | num | 待调查 | |
| super | num | 待调查 | |
| super_batch_gift_num | num | 待调查 | |
| super_gift_num | num | 待调查 | |
| svga_block | num | 待调查 | |
| switch | bool | 待调查 | |
| tag_image | str | 待调查 | |
| tid | num | 礼物发送时的时间戳，以及后面9位未知数字 | 似乎与rnd字段相同 |
| timestamp | num | 礼物发送时的时间戳 | |
| top_list | | 待调查 | |
| total_coin | num | 实际金银瓜子总价值 | 不是总等于 num*price |
| uid | num | 礼物投喂者的UID | |
| uname | str | 礼物投喂者的名称 | |

`data.batch_combo_send` 对象:

| 字段 |    类型   |  内容  |    备注    |
| ---- | -------- | ------ | --------- |
| action | str | 礼物操作，一般为"投喂" | |
| batch_combo_id | str | 待调查 | |
| batch_combo_num | num | 待调查 | |
| blind_gift | | 待调查 | |
| gift_id | num | 待调查 | |
| gift_name | str | 投喂的礼物名称 | 待调查 |
| gift_num | num | 投喂礼物数量 | 待调查 |
| send_master | | 待调查 | |
| uid | num | 礼物投喂者的UID | |
| uname | str | 礼物投喂者的名称 | |

`data.medal_info` 对象:

| 字段 |    类型   |  内容  |    备注    |
| ---- | -------- | ------ | --------- |
| anchor_roomid | num | 待调查 | |
| anchor_uname | str | 待调查 | |
| guard_level | num | 待调查 | |
| icon_id | num | 待调查 | |
| is_lighted | num | 待调查 | |
| medal_color | num | 礼物投喂者的粉丝奖牌颜色 | 十六进制颜色值转为了十进制表示 |
| medal_border_color | num | 礼物投喂者的粉丝奖牌边框颜色 | 十六进制颜色值的十进制表示 |
| medal_color_end | num | 待调查 | |
| medal_color_start | num | 待调查 | |
| medal_level | num | 礼物投喂者的粉丝奖牌等级 | |
| medal_name | str | 礼物投喂者的粉丝奖牌名称 | |
| special | str | 待调查 | |
| target_id | num | 待调查 | |

`data.receive_user_info` 对象:

| 字段 |    类型   |  内容  |    备注    |
| ---- | -------- | ------ | --------- |
| uid | num | 礼物接收者的UID | 一般为主播的UID |
| uname | str | 礼物接收者的名称 | 一般为主播的名称 |

**示例:**

<details>
<summary>查看消息示例:</summary>

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

#### 礼物星球点亮 (GIFT_STAR_PROCESS)

注: 主播的礼物星球其一点亮之后

**JSON消息:**

根对象:

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | str | `GIFT_STAR_PROCESS` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 |    类型   |  内容  |    备注    |
| ---- | -------- | ------ | --------- |
| status | num | 待调查 | |
| tip | str | 点亮礼物星球的消息文本 | |

**示例:**

<details>
<summary>查看消息示例：</summary>

```json
{
    "cmd": "GIFT_STAR_PROCESS",
    "data": {
        "status": 1,
        "tip": "情书已点亮"
    }
}
```

</details>

#### 礼物星球进度更新 (WIDGET_GIFT_STAR_PROCESS)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `WIDGET_GIFT_STAR_PROCESS` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| start_date | num | 开始时间? | 一个年月日数字，格式 `Number(String(年) + String(月) + String(日))`，详见消息示例 |
| process_list | arr | 礼物进度列表 |  |
| finished | bool | 是否完成? |  |
| ddl_timestamp | num | 截止时间? | Unix 秒时间戳 |
| version | num | 更新时间 | Unix 毫秒时间戳 |
| reward_gift | num |  |  |
| reward_gift_img | str |  |  |
| reward_gift_name | str |  |  |
| level_info | null | (?) |  |

`data.process_list` 数组:

| 索引 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| 0 | obj | 礼物需求1 |  |
| 1 | obj | 礼物需求2 |  |
| 2 | obj | 礼物需求3 |  |

`data.process_list` 数组中对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| gift_id | num | 礼物id |  |
| gift_img | str | 礼物图片 |  |
| gift_name | str | 礼物名称 | `礼物星球` |
| completed_num | num | 当前数量 |  |
| target_num | num | 目标数量 |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "WIDGET_GIFT_STAR_PROCESS",
	"data": {
		"start_date": 20250728,
		"process_list": [
			{
				"gift_id": 33988,
				"gift_img": "https://s1.hdslb.com/bfs/live/7164c955ec0ed7537491d189b821cc68f1bea20d.png",
				"gift_name": "礼物星球",
				"completed_num": 155,
				"target_num": 1000
			},
			{
				"gift_id": 31036,
				"gift_img": "https://s1.hdslb.com/bfs/live/8b40d0470890e7d573995383af8a8ae074d485d9.png",
				"gift_name": "礼物星球",
				"completed_num": 123,
				"target_num": 500
			},
			{
				"gift_id": 34382,
				"gift_img": "https://s1.hdslb.com/bfs/live/3a1cc7ca50da48670d9f7aa6c8d3cd874228f7b0.png",
				"gift_name": "礼物星球",
				"completed_num": 0,
				"target_num": 1
			}
		],
		"finished": false,
		"ddl_timestamp": 1754236800,
		"version": 1754030237877,
		"reward_gift": 0,
		"reward_gift_img": "",
		"reward_gift_name": "",
		"level_info": null
	}
}
```

</details>

#### 礼物连击 (COMBO_SEND)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | str | `COMBO_SEND` | |
| data | obj | 信息本体 | |

`data` 对象:

| 字段 |    类型   |  内容  |    备注    |
| ---- | -------- | ------ | --------- |
| action | str | 礼物操作，一般为"投喂" | |
| batch_combo_id | str | 待调查 | |
| batch_combo_num | num | 连击礼物数量 | |
| combo_id | str | 待调查 | |
| combo_num | str | 连击礼物数量 | |
| combo_total_coin | num | 待调查 | |
| dmscore | num | 待调查 | |
| gift_id | num | 待调查 | |
| gift_name | str | 连击礼物的名称 | |
| gift_num | num | 0 | |
| is_join_receiver | bool | 待调查 | |
| is_naming | bool | 待调查 | |
| is_show | num | 待调查 | |
| medal_info | obj | 礼物投喂者的粉丝勋章信息 | |
| name_color | str | 待调查 | |
| r_uname | str | 主播的名称 | |
| receive_user_info | obj | 主播的UID和名称 | |
| ruid | num | 主播的UID | |
| send_master | | 待调查 | |
| total_num | num | 连击礼物数量 | |
| uid | num | 礼物投喂者的UID | |
| uname | str | 礼物投喂者的名称 | |

`data.receive_user_info` 对象:

| 字段 |    类型   |  内容  |    备注    |
| ---- | -------- | ------ | --------- |
| uid | number | 礼物接收者的UID | 一般为主播的UID |
| uname | string | 礼物接收者的名称 | 一般为主播的名称 |

**示例:**

<details>
<summary>查看消息示例：</summary>

```json
{
  "cmd": "COMBO_SEND",
  "data": {
    "action": "投喂",
    "batch_combo_id": "batch:gift:combo_id:3493090830584635:29857468:31036:1673774515.6190",
    "batch_combo_num": 2,
    "combo_id": "gift:combo_id:3493090830584635:29857468:31036:1673774515.6180",
    "combo_num": 2,
    "combo_total_coin": 200,
    "dmscore": 112,
    "gift_id": 31036,
    "gift_name": "小花花",
    "gift_num": 0,
    "is_join_receiver": false,
    "is_naming": false,
    "is_show": 1,
    "medal_info": {
      "anchor_roomid": 0,
      "anchor_uname": "",
      "guard_level": 0,
      "icon_id": 0,
      "is_lighted": 1,
      "medal_color": 6067854,
      "medal_color_border": 6067854,
      "medal_color_end": 6067854,
      "medal_color_start": 6067854,
      "medal_level": 3,
      "medal_name": "爱珞珞",
      "special": "",
      "target_id": 3493076559465366
    },
    "name_color": "",
    "r_uname": "露萌不要雨草",
    "receive_user_info": {
      "uid": 29857468,
      "uname": "露萌不要雨草"
    },
    "ruid": 29857468,
    "send_master": null,
    "total_num": 2,
    "uid": 3493090830584635,
    "uname": "DOC-Neo"
  }
}
```

</details>

#### 特殊礼物 (SPECIAL_GIFT)

<!--{
  "gh": [360]
}-->

**JSON消息:**

根对象:

| 字段 | 类型 | 内容           | 备注 |
| ---- | ---- | -------------- | ---- |
| cmd  | str  | `SPECIAL_GIFT` |      |
| data | obj  | 信息本体       |      |

`data` 对象:

以 数字 为键, JSON Object 为值的表

`data['?']` 对象:

| 字段      | 类型 | 内容         | 备注 |
| --------- | ---- | ------------ | ---- |
| action    | str  | 操作?        |      |
| content   | str  | 内容         |      |
| hadJoin   | num  | 是否加入?    |      |
| id        | str  | ?            | 字符串表示的数字 |
| num       | str  | 数量         |      |
| storm_gif | str  | GIF 动画 URL |      |
| time      | str  | 持续时间?    |      |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "SPECIAL_GIFT",
  "data": {
    "39": {
      "action": "start",
      "content": "可爱即正义~~",
      "hadJoin": 0,
      "id": "3306976431489",
      "num": 1,
      "storm_gif": "http://static.hdslb.com/live-static/live-room/images/gift-section/mobilegift/2/jiezou.gif?2017011901",
      "time": 90
    }
  }
}
```

</details>

<!--
#### 欢迎加入房间

#### 欢迎房管加入房间
-->

#### 通知消息 (NOTICE_MSG)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | str | `NOTICE_MSG` |  |
| id | num | 待调查 | |
| name | str | 通知名 |  |
| full | obj | 完整显示信息? | |
| half | obj | 半部显示信息? | | |
| side | obj | 边缘显示信息? | |
| roomid | num | 目标直播间短号 | |
| real_roomid | num | 目标直播间真实ID | |
| msg_common | str | 显示的消息内容 | |
| msg_self | str | 消息内容本身 | 剔除额外文本 |
| link_url | str | 通知消息跳转的URL | |
| msg_type | num | 待调查 | |
| shield_uid | num | 待调查 | |
| business_id | str | 待调查 | |
| scatter | obj | 待调查 | |
| marquee_id | str | 待调查 | |
| notice_type | num | 待调查 | |

**示例:**

<details>
<summary>查看消息示例:</summary>

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

#### 主播准备中 (PREPARING)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | str | `PREPARING` | |
| round | num | 轮播状态:<br/>1正在轮播<br/>0未轮播 | 开启轮播时存在 |
| roomid | str | 直播间ID | 未知是真实ID还是短号 | 类型似乎从num改为str |
| msg\_id | str | 信息id? |  |
| p\_is\_ack | bool |  | 未知 |
| p\_msg\_type | num | `1` | 未知 |
| send\_time | num | 发送时间 | UNIX 毫秒时间戳 |

**示例:**

<details>
<summary>查看消息示例:</summary>

有启用轮播:

```json
{
  "cmd": "PREPARING",
  "msg_id": "26964930181741056:1000:1000",
  "p_is_ack": true,
  "p_msg_type": 1,
  "roomid": "1899237171",
  "round": 1,
  "send_time": 1739985402716
}
```

未启用轮播:

```json
{
  "cmd": "PREPARING",
  "msg_id": "27040425357932032:1000:1000",
  "p_is_ack": true,
  "p_msg_type": 1,
  "roomid": "1017",
  "send_time": 1740129398337
}
```

</details>

#### 直播开始 (LIVE)

注：请求了开始直播接口、开始向服务器推流时下发。

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `LIVE` |  |
| live_key | str | 标记直播场次的key | 与开始直播接口获得的live_key相同 |
| voice_background | str | ? |  |
| sub_session_key | str | ? |  |
| live_platform | str | 开播平台? | 推测由开播接口决定 |
| live_model | num | ? |  |
| live_time | num | 开播时间 | UNIX 秒级时间戳，只有请求了开始直播后立刻下发的那个数据包里存在 |
| roomid | num | 直播间号 |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "LIVE",
  "live_key": "234304209915761953",
  "voice_background": "",
  "sub_session_key": "234304209915761953sub_time:1651036923",
  "live_platform": "pc",
  "live_model": 0,
  "live_time": 1651036923,
  "roomid": 23614753
}
```

</details>

#### 主播信息更新 (ROOM_REAL_TIME_MESSAGE_UPDATE)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | str | `ROOM_REAL_TIME_MESSAGE_UPDATE` | |
| data | obj | 信息本体 | |

`data` 对象:

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| roomid | num | 直播间ID | 未知是真实ID还是短号 |
| fans | num | 主播当前粉丝数 | |
| red_notice | num | 待调查 | |
| fans_club | num | 主播粉丝团人数 | |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "ROOM_REAL_TIME_MESSAGE_UPDATE",
  "data": {
    "roomid": 8618057,
    "fans": 136,
    "red_notice": -1,
    "fans_club": 8
  }
}
```

</details>

#### 播放链接刷新 (PLAYURL_RELOAD)

注: 该cmd通常不提供播放链接。

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| cmd | str | `PLAYURL_RELOAD` | |
| data | obj | 信息本体 | |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| reload_option | obj | 刷新选项? |  |
| playurl | obj | 播放链接信息 |  |

`data.reload_option` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| reload_stream_name | arr | 空数组? |  |
| reload_format | arr | 空数组? |  |
| scatter | num |  |  |

`data.playurl` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| cid | num | 直播间真实id |  |
| g_qn_desc | arr | 画质描述 |  |
| stream | arr | 直播流信息 |  |
| p2p_data | obj | P2P信息 |  |
| dolby_qn | null | dolby画质信息? |  |

`data.playurl.g_qn_desc` 数组:

| 索引 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| 0 | obj | 首个画质信息 |  |
| … | obj | 多个画质信息 |  |
| i | obj | 最后画质信息 |  |

`data.playurl.g_qn_desc` 数组中对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| qn | num | 画质代码 |  |
| desc | str | 画质描述 |  |
| hdr_desc | str |  |  |
| attr_desc | null |  |  |
| hdr_type | num |  |  |
| media_base_desc | null 或 obj | 媒体描述 |

`data.playurl.g_qn_desc[i].media_base_desc` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| detail_desc | obj | 详细? |  |
| brief_desc | obj | 简洁? |  |

`data.playurl.g_qn_desc[i].media_base_desc.detail_desc` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| desc | str | 画质描述 |  |
| tag | arr | 画质标签 | 字符串数组，部分画质存在 |

`data.playurl.g_qn_desc[i].media_base_desc.brief_desc` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| desc | str | 画质描述 |  |
| badge | str | 画质描述 | 部分画质存在 |

`data.stream` 数组中对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| protocol_name | str | 协议名称 |  |
| format | arr | 封装格式列表 |  |

`data.stream[i].format` 数组中对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| format_name | str | 视频封装格式名称 |  |
| codec | arr | 编码列表 |  |
| master_url | str |  |  |

`data.stream[i].format[i].codec` 数组中对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| codec_name | str | 视频编码名称 |  |
| current_qn | num | 当前画质代码? |  |
| accept_qn | arr | 允许的画质代码? | 数字数组 |
| base_url | str |  |  |
| url_info | arr |  |  |
| hdr_qn | null |  |  |
| dolby_type | num |  |  |
| attr_name | str |  |  |
| hdr_type | num |  |  |
| drm | bool |  |  |
| drm_key_systems | null |  |  |
| video_codecs | obj | 视频编码信息 | 不一定存在 |
| audio_codecs | obj | 音频编码信息 | 不一定存在 |

`data.stream[i].format[i].codec[i].video_codecs` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| base | str | 编码格式 |  |

`data.stream[i].format[i].codec[i].audio_codecs` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| base | str | 编码格式 |  |

`data.playurl.p2p_data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| p2p | bool |  |  |
| p2p_type | num |  |  |
| m_p2p | bool |  |  |
| m_servers | null |  |  |

**示例:**

<details>
<summary>查看消息示例：</summary>

```json
{
	"cmd": "PLAYURL_RELOAD",
	"data": {
		"reload_option": {
			"reload_stream_name": [],
			"reload_format": [],
			"scatter": 3000
		},
		"playurl": {
			"cid": 41682,
			"g_qn_desc": [
				{
					"qn": 30000,
					"desc": "杜比",
					"hdr_desc": "",
					"attr_desc": null,
					"hdr_type": 0,
					"media_base_desc": null
				},
				{
					"qn": 20000,
					"desc": "4K",
					"hdr_desc": "",
					"attr_desc": null,
					"hdr_type": 0,
					"media_base_desc": null
				},
				{
					"qn": 10000,
					"desc": "原画",
					"hdr_desc": "",
					"attr_desc": null,
					"hdr_type": 0,
					"media_base_desc": {
						"detail_desc": {
							"desc": "1080P 原画",
							"tag": [
								"高帧率"
							]
						},
						"brief_desc": {
							"desc": "1080P",
							"badge": "原画"
						}
					}
				},
				{
					"qn": 400,
					"desc": "蓝光",
					"hdr_desc": "",
					"attr_desc": null,
					"hdr_type": 0,
					"media_base_desc": null
				},
				{
					"qn": 250,
					"desc": "超清",
					"hdr_desc": "",
					"attr_desc": null,
					"hdr_type": 0,
					"media_base_desc": {
						"detail_desc": {
							"desc": "720P 超清"
						},
						"brief_desc": {
							"desc": "720P"
						}
					}
				},
				{
					"qn": 150,
					"desc": "高清",
					"hdr_desc": "",
					"attr_desc": null,
					"hdr_type": 0,
					"media_base_desc": null
				},
				{
					"qn": 80,
					"desc": "流畅",
					"hdr_desc": "",
					"attr_desc": null,
					"hdr_type": 0,
					"media_base_desc": null
				}
			],
			"stream": [
				{
					"protocol_name": "http_stream",
					"format": [
						{
							"format_name": "flv",
							"codec": [
								{
									"codec_name": "avc",
									"current_qn": 10000,
									"accept_qn": [
										10000
									],
									"base_url": "",
									"url_info": [],
									"hdr_qn": null,
									"dolby_type": 0,
									"attr_name": "",
									"hdr_type": 0,
									"drm": false,
									"drm_key_systems": null,
									"video_codecs": {
										"base": "avc1.64002a"
									},
									"audio_codecs": {
										"base": "mp4a.40.2"
									}
								},
								{
									"codec_name": "hevc",
									"current_qn": 250,
									"accept_qn": [
										250
									],
									"base_url": "",
									"url_info": [],
									"hdr_qn": null,
									"dolby_type": 0,
									"attr_name": "",
									"hdr_type": 0,
									"drm": false,
									"drm_key_systems": null,
									"video_codecs": {
										"base": "hvc1.1.6.L120"
									},
									"audio_codecs": {
										"base": "mp4a.40.2"
									}
								}
							],
							"master_url": ""
						}
					]
				},
				{
					"protocol_name": "http_hls",
					"format": [
						{
							"format_name": "ts",
							"codec": [
								{
									"codec_name": "avc",
									"current_qn": 10000,
									"accept_qn": [
										10000
									],
									"base_url": "",
									"url_info": [],
									"hdr_qn": null,
									"dolby_type": 0,
									"attr_name": "",
									"hdr_type": 0,
									"drm": false,
									"drm_key_systems": null,
									"video_codecs": {
										"base": "avc1.64002a"
									},
									"audio_codecs": {
										"base": "mp4a.40.2"
									}
								},
								{
									"codec_name": "hevc",
									"current_qn": 250,
									"accept_qn": [
										250
									],
									"base_url": "",
									"url_info": [],
									"hdr_qn": null,
									"dolby_type": 0,
									"attr_name": "",
									"hdr_type": 0,
									"drm": false,
									"drm_key_systems": null,
									"video_codecs": {
										"base": "hvc1.1.6.L120"
									},
									"audio_codecs": {
										"base": "mp4a.40.2"
									}
								}
							],
							"master_url": ""
						},
						{
							"format_name": "fmp4",
							"codec": [
								{
									"codec_name": "avc",
									"current_qn": 10000,
									"accept_qn": [
										10000
									],
									"base_url": "",
									"url_info": [],
									"hdr_qn": null,
									"dolby_type": 0,
									"attr_name": "",
									"hdr_type": 0,
									"drm": false,
									"drm_key_systems": null,
									"video_codecs": {
										"base": "avc1.64002a"
									},
									"audio_codecs": {
										"base": "mp4a.40.2"
									}
								},
								{
									"codec_name": "hevc",
									"current_qn": 250,
									"accept_qn": [
										250
									],
									"base_url": "",
									"url_info": [],
									"hdr_qn": null,
									"dolby_type": 0,
									"attr_name": "",
									"hdr_type": 0,
									"drm": false,
									"drm_key_systems": null,
									"video_codecs": {
										"base": "hvc1.1.6.L120"
									},
									"audio_codecs": {
										"base": "mp4a.40.2"
									}
								}
							],
							"master_url": ""
						}
					]
				}
			],
			"p2p_data": {
				"p2p": false,
				"p2p_type": 0,
				"m_p2p": false,
				"m_servers": null
			},
			"dolby_qn": null
		}
	}
}
```

</details>

#### 直播间高能榜 (ONLINE_RANK_V2)

注: 直播间高能用户数据刷新

在线榜已被 `ONLINE_RANK_V3` 替换

**JSON消息:**

根对象:

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | str | `ONLINE_RANK_V2` |  |
| data | obj | 直播间高能用户数据 | |

`data` 对象:

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| list | array | 在直播间高能用户中的用户信息 | |
| rank_type | str | 榜单类型 |  |

`data.list[n]` 对象:

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| uid | num | 用户 mid | |
| face | str | 用户头像 URL | |
| score | str | 该用户的贡献值 | |
| uname | str | 用户名称 | |
| rank | num | 该用户在高能榜中的排名 | |
| guard_level | num | 大航海等级? | |
| is_mystery | bool |  |  |
| uinfo | obj | 用户信息 |  |

**示例:**

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

#### 直播间高能榜V3 (ONLINE_RANK_V3)

注: 直播间高能用户数据刷新

替换 `ONLINE_RANK_V2`

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| cmd | str | `ONLINE_RANK_V3` |  |
| data | obj | 数据本体 | |

`data` 对象:

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| pb | str | 使用 base64 编码 protobuf 后的数据 | 解析后数据基本与`ONLINE_RANK_V2`的`data`相同 |

用于解析protobuf数据的proto文件: [#1332(comment)](https://github.com/SocialSisterYi/bilibili-API-collect/issues/1332#issuecomment-3055621742)

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "ONLINE_RANK_V3",
	"data": {
		"pb": "CgtvbmxpbmVfcmFuaxqqAwi8jscKEkpodHRwczovL2kyLmhkc2xiLmNvbS9iZnMvZmFjZS9iODM3MGMzMGM3ZDg5NDg4YjRjOWYyNWZmMTgyNjc4OTEyYTRiOTA3LmpwZxoCMTIiDOW4jOWwlOWonOWonCgBMAFCwAIIvI7HChKfAgoM5biM5bCU5aic5aicEkpodHRwczovL2kyLmhkc2xiLmNvbS9iZnMvZmFjZS9iODM3MGMzMGM3ZDg5NDg4YjRjOWYyNWZmMTgyNjc4OTEyYTRiOTA3LmpwZypaCgzluIzlsJTlqJzlqJwSSmh0dHBzOi8vaTIuaGRzbGIuY29tL2Jmcy9mYWNlL2I4MzcwYzMwYzdkODk0ODhiNGM5ZjI1ZmYxODI2Nzg5MTJhNGI5MDcuanBnMloKDOW4jOWwlOWonOWonBJKaHR0cHM6Ly9pMi5oZHNsYi5jb20vYmZzL2ZhY2UvYjgzNzBjMzBjN2Q4OTQ4OGI0YzlmMjVmZjE4MjY3ODkxMmE0YjkwNy5qcGc6CyD///////////8BMhcIARITMjAyNS0wNy0yOSAyMzo1OTo1ORrNAwjnyMIDEkpodHRwczovL2kxLmhkc2xiLmNvbS9iZnMvZmFjZS9mZWNhYTQ3ZTQ2ODljOWVmYTg0MzBiNmViNzRmNTM2ZTMxN2ZmODYwLmpwZxoBOCIV5byl6IC26IC26IC26IC26IC26IC2KAIwAkLbAgjnyMIDEroCChXlvKXogLbogLbogLbogLbogLbogLYSSmh0dHBzOi8vaTEuaGRzbGIuY29tL2Jmcy9mYWNlL2ZlY2FhNDdlNDY4OWM5ZWZhODQzMGI2ZWI3NGY1MzZlMzE3ZmY4NjAuanBnKmMKFeW8peiAtuiAtuiAtuiAtuiAtuiAthJKaHR0cHM6Ly9pMS5oZHNsYi5jb20vYmZzL2ZhY2UvZmVjYWE0N2U0Njg5YzllZmE4NDMwYjZlYjc0ZjUzNmUzMTdmZjg2MC5qcGcyYwoV5byl6IC26IC26IC26IC26IC26IC2EkpodHRwczovL2kxLmhkc2xiLmNvbS9iZnMvZmFjZS9mZWNhYTQ3ZTQ2ODljOWVmYTg0MzBiNmViNzRmNTM2ZTMxN2ZmODYwLmpwZzoLIP///////////wEyFwgCEhMyMDI1LTA4LTAzIDIzOjU5OjU5GvUDCMTF4wQSS2h0dHBzOi8vaTEuaGRzbGIuY29tL2Jmcy9mYWNlLzcxMmMzNjExMzg1ZTJlMGRjYmU4MDc2YmRkM2ViNmYwZWNjNmZkYWYud2VicBoBNiIe5oKg5ZOJ55qE6buR5ZCs5aSn546L5aSq5Zuw6L69KAMwA0L5AgjExeMEEtgCCh7mgqDlk4nnmoTpu5HlkKzlpKfnjovlpKrlm7Dovr0SS2h0dHBzOi8vaTEuaGRzbGIuY29tL2Jmcy9mYWNlLzcxMmMzNjExMzg1ZTJlMGRjYmU4MDc2YmRkM2ViNmYwZWNjNmZkYWYud2VicCptCh7mgqDlk4nnmoTpu5HlkKzlpKfnjovlpKrlm7Dovr0SS2h0dHBzOi8vaTEuaGRzbGIuY29tL2Jmcy9mYWNlLzcxMmMzNjExMzg1ZTJlMGRjYmU4MDc2YmRkM2ViNmYwZWNjNmZkYWYud2VicDJtCh7mgqDlk4nnmoTpu5HlkKzlpKfnjovlpKrlm7Dovr0SS2h0dHBzOi8vaTEuaGRzbGIuY29tL2Jmcy9mYWNlLzcxMmMzNjExMzg1ZTJlMGRjYmU4MDc2YmRkM2ViNmYwZWNjNmZkYWYud2VicDoLIP///////////wEyFwgDEhMyMDI1LTA3LTI2IDIzOjU5OjU5GtkDCLzSxwkSSmh0dHBzOi8vaTEuaGRzbGIuY29tL2Jmcy9mYWNlLzAyMGYxOWEwNTNjZDBkNGZjNGMyYmQzOTlmYWNjMTk3YWJiZWY5N2EuanBnGgE2IhjmuLjmiYvlpb3pl7LnmoTmtYXogIHluIgoBDADQuQCCLzSxwkSwwIKGOa4uOaJi+WlvemXsueahOa1heiAgeW4iBJKaHR0cHM6Ly9pMS5oZHNsYi5jb20vYmZzL2ZhY2UvMDIwZjE5YTA1M2NkMGQ0ZmM0YzJiZDM5OWZhY2MxOTdhYmJlZjk3YS5qcGcqZgoY5ri45omL5aW96Zey55qE5rWF6ICB5biIEkpodHRwczovL2kxLmhkc2xiLmNvbS9iZnMvZmFjZS8wMjBmMTlhMDUzY2QwZDRmYzRjMmJkMzk5ZmFjYzE5N2FiYmVmOTdhLmpwZzJmChjmuLjmiYvlpb3pl7LnmoTmtYXogIHluIgSSmh0dHBzOi8vaTEuaGRzbGIuY29tL2Jmcy9mYWNlLzAyMGYxOWEwNTNjZDBkNGZjNGMyYmQzOTlmYWNjMTk3YWJiZWY5N2EuanBnOgsg////////////ATIXCAMSEzIwMjUtMDgtMDQgMjM6NTk6NTkakAMIp9P+CRJKaHR0cHM6Ly9pMS5oZHNsYi5jb20vYmZzL2ZhY2UvZTJkYmM4ZTQ5NzA3NzFiNjlhNWEyYzYzMDI0YTg5NzhjMjc3YWNmMi5qcGcaATYiDOmaj+WFieaykOW9sSgFQqkCCKfT/gkSnwIKDOmaj+WFieaykOW9sRJKaHR0cHM6Ly9pMS5oZHNsYi5jb20vYmZzL2ZhY2UvZTJkYmM4ZTQ5NzA3NzFiNjlhNWEyYzYzMDI0YTg5NzhjMjc3YWNmMi5qcGcqWgoM6ZqP5YWJ5rKQ5b2xEkpodHRwczovL2kxLmhkc2xiLmNvbS9iZnMvZmFjZS9lMmRiYzhlNDk3MDc3MWI2OWE1YTJjNjMwMjRhODk3OGMyNzdhY2YyLmpwZzJaCgzpmo/lhYnmspDlvbESSmh0dHBzOi8vaTEuaGRzbGIuY29tL2Jmcy9mYWNlL2UyZGJjOGU0OTcwNzcxYjY5YTVhMmM2MzAyNGE4OTc4YzI3N2FjZjIuanBnOgsg////////////ATIAGrYDCPWvn4sBEkpodHRwczovL2kxLmhkc2xiLmNvbS9iZnMvZmFjZS80ZTNkYTdmYWJiOWZlMTkyNzRhYmQ0ZTdlYWMyNmQ3MjI4OGQyNmEwLmpwZxoBNiIV5pKS5qyi5YS/55qE5rCU5rOh5YS/KAZCxQII9a+fiwESugIKFeaSkuasouWEv+eahOawlOazoeWEvxJKaHR0cHM6Ly9pMS5oZHNsYi5jb20vYmZzL2ZhY2UvNGUzZGE3ZmFiYjlmZTE5Mjc0YWJkNGU3ZWFjMjZkNzIyODhkMjZhMC5qcGcqYwoV5pKS5qyi5YS/55qE5rCU5rOh5YS/EkpodHRwczovL2kxLmhkc2xiLmNvbS9iZnMvZmFjZS80ZTNkYTdmYWJiOWZlMTkyNzRhYmQ0ZTdlYWMyNmQ3MjI4OGQyNmEwLmpwZzJjChXmkpLmrKLlhL/nmoTmsJTms6HlhL8SSmh0dHBzOi8vaTEuaGRzbGIuY29tL2Jmcy9mYWNlLzRlM2RhN2ZhYmI5ZmUxOTI3NGFiZDRlN2VhYzI2ZDcyMjg4ZDI2YTAuanBnOgsg////////////ATIAGusDCPTXwbEBEkpodHRwczovL2kxLmhkc2xiLmNvbS9iZnMvZmFjZS8yN2RiOGQ5MTY3ZDRhMmUyMDg0NjUzNDJkOGVmZjQzZWUzMGJiOGNlLmpwZxoBNiIc57OW5b+D6JuL6JuLLeWNg+WNg+azoue6r+WGoCgHMANC8QII9NfBsQESzwIKHOezluW/g+ibi+ibiy3ljYPljYPms6Lnuq/lhqASSmh0dHBzOi8vaTEuaGRzbGIuY29tL2Jmcy9mYWNlLzI3ZGI4ZDkxNjdkNGEyZTIwODQ2NTM0MmQ4ZWZmNDNlZTMwYmI4Y2UuanBnKmoKHOezluW/g+ibi+ibiy3ljYPljYPms6Lnuq/lhqASSmh0dHBzOi8vaTEuaGRzbGIuY29tL2Jmcy9mYWNlLzI3ZGI4ZDkxNjdkNGEyZTIwODQ2NTM0MmQ4ZWZmNDNlZTMwYmI4Y2UuanBnMmoKHOezluW/g+ibi+ibiy3ljYPljYPms6Lnuq/lhqASSmh0dHBzOi8vaTEuaGRzbGIuY29tL2Jmcy9mYWNlLzI3ZGI4ZDkxNjdkNGEyZTIwODQ2NTM0MmQ4ZWZmNDNlZTMwYmI4Y2UuanBnOgsg////////////ATIXCAMSEzIwMjUtMDctMjUgMjM6NTk6NTk="
	}
}
```

</details>

#### 直播间高能用户数量 (ONLINE_RANK_COUNT)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | str | `ONLINE_RANK_COUNT` |  |
| data | obj | 信息本体 | |

`data` 对象:

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| count | num | 直播间高能用户数量 | 存在上限 |
| count_text | str | 直播间高能用户数量文本 |  |
| online_count | num | 直播间在线用户数量 | 存在上限 |
| online_count_text | str | 直播间在线用户数量文本 |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "ONLINE_RANK_COUNT",
	"data": {
		"count": 1084,
		"count_text": "1084",
		"online_count": 1084,
		"online_count_text": "1084"
	}
}
```

</details>

#### 未登录通知 (LOG_IN_NOTICE)

注：未使用认证信息进行登录将会下发此数据包，通常于认证包回复后下发，在后续时间里也有可能会下发；部分受到豁免的直播间不会下发。

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `LOG_IN_NOTICE` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| notice\_msg | str | 通知内容 |  |
| image\_web | str | 在网页端使用的通知图片 |  |
| image\_app | str | 在app端使用的图片 | (未确认) |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "LOG_IN_NOTICE",
	"data": {
		"notice_msg": "为保护用户隐私，未登录无法查看他人昵称",
		"image_web": "http://i0.hdslb.com/bfs/dm/75e7c16b99208df259fe0a93354fd3440cbab412.png",
		"image_app": "http://i0.hdslb.com/bfs/dm/b632f7dcd3acf47deffb5f9ccc9546ae97a3415b.png"
	}
}
```

</details>

#### 用户到达直播间高能榜前三名的消息 (ONLINE_RANK_TOP3)

**JSON消息:**

根对象:

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| cmd  | str | `ONLINE_RANK_TOP3` | |
| data | obj | 信息本体 | |

`data` 对象:

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| dmscore | num | 待调查 | |
| list | array | 消息内容和高能榜排名 | |

`data.list[n]` 对象:

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| msg | str | 消息内容 | |
| rank | num | 该用户的高能榜排名 | |

**示例:**

<details>
<summary>查看消息示例:</summary>

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

#### 直播间在人气榜的排名改变 (POPULAR_RANK_CHANGED)

**JSON消息:**

根对象:

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| cmd  | str | `POPULAR_RANK_CHANGED` | |
| data | obj | 直播间的人气榜排名信息 | |

`data` 对象:

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| uid | num | 主播 mid | |
| rank | num | 人气榜排名 | |
| countdown | num | 人气榜下轮结算剩余时长 | |
| timestamp | num | 触发时的Unix时间戳 | |
| cache_key | str | 待调查 | |

**示例:**

<details>
<summary>查看消息示例：</summary>

```json
{
  "cmd": "POPULAR_RANK_CHANGED",
  "data": {
    "uid": 780791,
    "rank": 36,
    "countdown": 1927,
    "timestamp": 1702578474,
    "cache_key": "rank_change:91a4e81ba3034ae894d61e432aa13081"
  }
}
```

</details>

#### 直播间限时热门榜排名改变 (HOT_RANK_CHANGED)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `HOT_RANK_CHANGED` | |
| data | obj | 信息本体 | |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| rank | num | 排名 |   |
| trend | num | 趋势? |   |
| countdown | num | 剩余时间? |  |
| timestamp | num | 当前时间? | UNIX 秒级时间戳 |
| web_url | str | 排行榜 URL |  |
| live_url | str | 排行榜 URL |  |
| blink_url | str | 排行榜 URL |  |
| live_link_url | str | 排行榜 URL |  |
| pc_link_url | str | 排行榜 URL |  |
| icon | str | 图标 URL |  |
| area_name | str | 分区名称 |  |
| rank_desc | str | 空? |  |

**示例:**

<details>
<summary>查看消息示例：</summary>

```json
{
  "cmd": "HOT_RANK_CHANGED",
  "data": {
    "rank": 31,
    "trend": 1,
    "countdown": 1440,
    "timestamp": 1651037760,
    "web_url": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=2&area_id=9&parent_area_id=9&second_area_id=0",
    "live_url": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=1&area_id=9&parent_area_id=9&second_area_id=0&is_live_half_webview=1&hybrid_rotate_d=1&hybrid_half_ui=1,3,100p,70p,f4eefa,0,30,100,12,0;2,2,375,100p,f4eefa,0,30,100,0,0;3,3,100p,70p,f4eefa,0,30,100,12,0;4,2,375,100p,f4eefa,0,30,100,0,0;5,3,100p,70p,f4eefa,0,30,100,0,0;6,3,100p,70p,f4eefa,0,30,100,0,0;7,3,100p,70p,f4eefa,0,30,100,0,0;8,3,100p,70p,f4eefa,0,30,100,0,0",
    "blink_url": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=3&area_id=9&parent_area_id=9&second_area_id=0&is_live_half_webview=1&hybrid_rotate_d=1&is_cling_player=1&hybrid_half_ui=1,3,100p,70p,f4eefa,0,30,100,0,0;2,2,375,100p,f4eefa,0,30,100,0,0;3,3,100p,70p,f4eefa,0,30,100,0,0;4,2,375,100p,f4eefa,0,30,100,0,0;5,3,100p,70p,f4eefa,0,30,100,0,0;6,3,100p,70p,f4eefa,0,30,100,0,0;7,3,100p,70p,f4eefa,0,30,100,0,0;8,3,100p,70p,f4eefa,0,30,100,0,0",
    "live_link_url": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=5&area_id=9&parent_area_id=9&second_area_id=0&is_live_half_webview=1&hybrid_rotate_d=1&is_cling_player=1&hybrid_half_ui=1,3,100p,70p,f4eefa,0,30,100,0,0;2,2,375,100p,f4eefa,0,30,100,0,0;3,3,100p,70p,f4eefa,0,30,100,0,0;4,2,375,100p,f4eefa,0,30,100,0,0;5,3,100p,70p,f4eefa,0,30,100,0,0;6,3,100p,70p,f4eefa,0,30,100,0,0;7,3,100p,70p,f4eefa,0,30,100,0,0;8,3,100p,70p,f4eefa,0,30,100,0,0",
    "pc_link_url": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=4&is_live_half_webview=1&area_id=9&parent_area_id=9&second_area_id=0&pc_ui=338,465,f4eefa,0",
    "icon": "https://i0.hdslb.com/bfs/live/63217712edb588864b2c714225992e7f46b0b917.png",
    "area_name": "虚拟",
    "rank_desc": ""
  }
}
```

</details>

#### 当前直播间限时热门榜排名改变V2 (HOT_RANK_CHANGED_V2)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `HOT_RANK_CHANGED_V2` | |
| data | obj | 信息本体 | |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| rank | num | 排名 |   |
| trend | num | 趋势? |   |
| countdown | num | 剩余时间? |  |
| timestamp | num | 当前时间? | UNIX 秒级时间戳 |
| web_url | str | 排行榜 URL |  |
| live_url | str | 排行榜 URL |  |
| blink_url | str | 排行榜 URL |  |
| live_link_url | str | 排行榜 URL |  |
| pc_link_url | str | 排行榜 URL |  |
| icon | str | 图标 URL |  |
| area_name | str | 分区名称 |  |
| rank_desc | str | 排行榜说明 |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "HOT_RANK_CHANGED_V2",
  "data": {
    "rank": 31,
    "trend": 0,
    "countdown": 1440,
    "timestamp": 1651037760,
    "web_url": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=2&area_id=9&parent_area_id=9&second_area_id=371",
    "live_url": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=1&area_id=9&parent_area_id=9&second_area_id=371&is_live_half_webview=1&hybrid_rotate_d=1&hybrid_half_ui=1,3,100p,70p,f4eefa,0,30,100,12,0;2,2,375,100p,f4eefa,0,30,100,0,0;3,3,100p,70p,f4eefa,0,30,100,12,0;4,2,375,100p,f4eefa,0,30,100,0,0;5,3,100p,70p,f4eefa,0,30,100,0,0;6,3,100p,70p,f4eefa,0,30,100,0,0;7,3,100p,70p,f4eefa,0,30,100,0,0;8,3,100p,70p,f4eefa,0,30,100,0,0",
    "blink_url": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=3&area_id=9&parent_area_id=9&second_area_id=371&is_live_half_webview=1&hybrid_rotate_d=1&is_cling_player=1&hybrid_half_ui=1,3,100p,70p,f4eefa,0,30,100,0,0;2,2,375,100p,f4eefa,0,30,100,0,0;3,3,100p,70p,f4eefa,0,30,100,0,0;4,2,375,100p,f4eefa,0,30,100,0,0;5,3,100p,70p,f4eefa,0,30,100,0,0;6,3,100p,70p,f4eefa,0,30,100,0,0;7,3,100p,70p,f4eefa,0,30,100,0,0;8,3,100p,70p,f4eefa,0,30,100,0,0",
    "live_link_url": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=5&area_id=9&parent_area_id=9&second_area_id=371&is_live_half_webview=1&hybrid_rotate_d=1&is_cling_player=1&hybrid_half_ui=1,3,100p,70p,f4eefa,0,30,100,0,0;2,2,375,100p,f4eefa,0,30,100,0,0;3,3,100p,70p,f4eefa,0,30,100,0,0;4,2,375,100p,f4eefa,0,30,100,0,0;5,3,100p,70p,f4eefa,0,30,100,0,0;6,3,100p,70p,f4eefa,0,30,100,0,0;7,3,100p,70p,f4eefa,0,30,100,0,0;8,3,100p,70p,f4eefa,0,30,100,0,0",
    "pc_link_url": "https://live.bilibili.com/p/html/live-app-hotrank/index.html?clientType=4&is_live_half_webview=1&area_id=9&parent_area_id=9&second_area_id=371&pc_ui=338,465,f4eefa,0",
    "icon": "https://i0.hdslb.com/bfs/live/cb2e160ac4f562b347bb5ae6e635688ebc69580f.png",
    "area_name": "虚拟主播",
    "rank_desc": "虚拟主播top50"
  }
}
```

</details>

#### 限时热门榜上榜信息 (HOT_RANK_SETTLEMENT)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `HOT_RANK_SETTLEMENT` | |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| area_name | str | 分区名称 |  |
| cache_key | str | ? |  |
| dm_msg | str | 弹幕提示信息 |  |
| dmscore | num | ? |  |
| face | str | 主播头像 URL |  |
| icon | str | 图标 URL |  |
| rank | num | 排名 |  |
| timestamp | num | 时间 | UNIX 秒级时间戳 |
| uname | str | 主播用户名 |  |
| url | str | 排行榜 URL |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "HOT_RANK_SETTLEMENT",
  "data": {
    "area_name": "虚拟主播",
    "cache_key": "2f8baf923a6b7df5a045df6c7181984c",
    "dm_msg": "恭喜主播 <% 白黑卡扣 %> 荣登限时热门榜虚拟主播榜top9! 即将获得热门流量推荐哦！",
    "dmscore": 144,
    "face": "http://i0.hdslb.com/bfs/face/ddfcd696213e07884ce227c6ba6d23a007a08c02.jpg",
    "icon": "https://i0.hdslb.com/bfs/live/63217712edb588864b2c714225992e7f46b0b917.png",
    "rank": 9,
    "timestamp": 1651041000,
    "uname": "白黑卡扣",
    "url": "https://live.bilibili.com/p/html/live-app-hotrank/result.html?is_live_half_webview=1&hybrid_half_ui=1,5,250,200,f4eefa,0,30,0,0,0;2,5,250,200,f4eefa,0,30,0,0,0;3,5,250,200,f4eefa,0,30,0,0,0;4,5,250,200,f4eefa,0,30,0,0,0;5,5,250,200,f4eefa,0,30,0,0,0;6,5,250,200,f4eefa,0,30,0,0,0;7,5,250,200,f4eefa,0,30,0,0,0;8,5,250,200,f4eefa,0,30,0,0,0&areaId=9&cache_key=2f8baf923a6b7df5a045df6c7181984c"
  }
}
```

</details>

#### 限时热门榜上榜信息V2 (HOT_RANK_SETTLEMENT_V2)

**JSON消息:**

基本同 [限时热门榜上榜信息](#限时热门榜上榜信息-hot_rank_settlement), 但没有 `data.dmscore` 字段

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "HOT_RANK_SETTLEMENT_V2",
  "data": {
    "rank": 9,
    "uname": "白黑卡扣",
    "face": "http://i0.hdslb.com/bfs/face/ddfcd696213e07884ce227c6ba6d23a007a08c02.jpg",
    "timestamp": 1651040700,
    "icon": "https://i0.hdslb.com/bfs/live/cb2e160ac4f562b347bb5ae6e635688ebc69580f.png",
    "area_name": "虚拟主播",
    "url": "https://live.bilibili.com/p/html/live-app-hotrank/result.html?is_live_half_webview=1&hybrid_half_ui=1,5,250,200,f4eefa,0,30,0,0,0;2,5,250,200,f4eefa,0,30,0,0,0;3,5,250,200,f4eefa,0,30,0,0,0;4,5,250,200,f4eefa,0,30,0,0,0;5,5,250,200,f4eefa,0,30,0,0,0;6,5,250,200,f4eefa,0,30,0,0,0;7,5,250,200,f4eefa,0,30,0,0,0;8,5,250,200,f4eefa,0,30,0,0,0&areaId=371&cache_key=693b7b029b66976a399cf4e3485d265a",
    "cache_key": "693b7b029b66976a399cf4e3485d265a",
    "dm_msg": "恭喜主播 <% 白黑卡扣 %> 荣登限时热门榜虚拟主播榜top9! 即将获得热门流量推荐哦！"
  }
}
```

</details>

#### 直播间用户点赞 (LIKE_INFO_V3_CLICK)

**JSON消息:**

根对象:

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| cmd  | str | `LIKE_INFO_V3_CLICK` |  |
| data | obj | 信息本体 | |

`data` 对象:

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

**示例:**

<details>
<summary>查看消息示例:</summary>

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

#### 直播间点赞数更新 (LIKE_INFO_V3_UPDATE)

**JSON消息:**

根对象:

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| cmd  | str | `LIKE_INFO_V3_UPDATE` |  |
| data | obj | 直播间点赞数 | |

`data` 对象:

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| click_count | num | 直播间点赞数 | |

**示例:**

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

#### 直播间发红包弹幕 (POPULARITY_RED_POCKET_START)

注: 开始抽取红包

**JSON消息:**

根对象:

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| cmd  | str | `POPULARITY_RED_POCKET_START` | |
| data | obj | 信息本体 | |

`data` 对象:

|    字段    | 类型 |  内容  |    备注   |
| ---------- | --- | ------ | --------- |
| lot_id | num | 发送的红包的ID | |
| sender_uid | num | 发送者的UID | |
| sender_name | str | 发送者的名称 | |
| sender_face | str | 发送者的头像的URL | |
| join_requirement | num | 待调查 | |
| danmu | str | 用户参与红包时自动发送的弹幕内容 | |
| current_time | num | 服务器发送数据包的Unix时间戳 | |
| start_time | num | 可以开始抢红包的Unix时间戳 | |
| end_time | num | 抢红包的结束时间Unix时间戳 | |
| last_time | num | 红包的持续时间（秒） | start_time - end_time |
| remove_time | num | 待调查 | |
| replace_time | num | 待调查 | |
| lot_status | num | 待调查 | |
| h5_url | str | 红包页面的URL | |
| user_status | num | 用户参与状态，但是不知道是哪个用户 | 1已参与<br />2未参与 |
| awards | array | 红包内包含的礼物的信息 | |
| lot_config_id | num | 待调查 | |
| total_price | num | 内含抽取奖品金瓜子总价值 | 目前红包的 20% 会直接交给主播, 所以 20 电池 (2 CNY) 对应 2000 金瓜子的 80% 是 1600 金瓜子 |
| wait_num | num | 待调查 | |

`data.awards[n]` 对象:

|    字段    | 类型 |  内容  |    备注   |
| ---------- | --- | ------ | --------- |
| gift_id | num | 礼物ID | |
| gift_name | str | 礼物名称 | |
| gift_pic | str | 礼物图标URL | |
| num | num | 该礼物的数量 | |

**示例:**

<details>
<summary>查看消息示例：</summary>

```json
{
  "cmd": "POPULARITY_RED_POCKET_START",
  "data": {
    "lot_id": 2062329,
    "sender_uid": 181851309,
    "sender_name": "毒瘤老肥仔",
    "sender_face": "http://i0.hdslb.com/bfs/face/fed3871b01976ddd35fd3f772ffc2d4949f1391d.jpg",
    "join_requirement": 1,
    "danmu": "老板大气！点点红包抽礼物！",
    "current_time": 1650425344,
    "start_time": 1650425343,
    "end_time": 1650425523,
    "last_time": 180,
    "remove_time": 1650425538,
    "replace_time": 1650425533,
    "lot_status": 1,
    "h5_url": "https://live.bilibili.com/p/html/live-app-red-envelope/popularity.html?is_live_half_webview=1&hybrid_half_ui=1,5,100p,100p,000000,0,50,0,0,1;2,5,100p,100p,000000,0,50,0,0,1;3,5,100p,100p,000000,0,50,0,0,1;4,5,100p,100p,000000,0,50,0,0,1;5,5,100p,100p,000000,0,50,0,0,1;6,5,100p,100p,000000,0,50,0,0,1;7,5,100p,100p,000000,0,50,0,0,1;8,5,100p,100p,000000,0,50,0,0,1&hybrid_rotate_d=1&hybrid_biz=popularityRedPacket&lotteryId=2062329",
    "user_status": 2,
    "awards": [
      {
        "gift_id": 31212,
        "gift_name": "打call",
        "gift_pic": "https://s1.hdslb.com/bfs/live/f75291a0e267425c41e1ce31b5ffd6bfedc6f0b6.png",
        "num": 2
      },
      {
        "gift_id": 31214,
        "gift_name": "牛哇",
        "gift_pic": "https://s1.hdslb.com/bfs/live/b8a38b4bd3be120becddfb92650786f00dffad48.png",
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

#### 直播间红包 (POPULARITY_RED_POCKET_NEW)

注: 与 [直播间发红包弹幕](#直播间发红包弹幕-popularity_red_pocket_start) 不同, 那个是发红包的弹幕信息, 这个则和 [送礼](#送礼-send_gift) 的信息相似, 但也有前者的一些字段

**JSON消息:**

根对象:

| 字段 | 类型 | 内容                        | 备注 |
| ---- | ---- | --------------------------- | ---- |
| cmd  | str  | `POPULARITY_RED_POCKET_NEW` |      |
| data | obj  | 信息本体                    |      |

`data` 对象:

| 字段         | 类型 | 内容         | 备注 |
| ------------ | ---- | ------------ | ---- |
| lot_id       | num  | 红包 ID      |      |
| start_time   | num  | 开抢时间     | UNIX 秒级时间戳 |
| current_time | num  | 当前时间     | UNIX 秒级时间戳 |
| wait_num     | num  | 0?           |      |
| uname        | str  | 发送者用户名 |      |
| uid          | num  | 发送者的 mid |      |
| action       | str  | 礼物操作     |      |
| num          | num  | 礼物数量     |      |
| gift_name    | str  | `红包`       |      |
| gift_id      | num  | 礼物 ID?     |      |
| price        | num  | 电池标价     |      |
| name_color   | str  | 用户名颜色   |      |
| medal_info   | obj  | 发送者粉丝牌 |      |

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "POPULARITY_RED_POCKET_NEW",
  "data": {
    "lot_id": 2062329,
    "start_time": 1650425343,
    "current_time": 1650425343,
    "wait_num": 0,
    "uname": "毒瘤老肥仔",
    "uid": 181851309,
    "action": "送出",
    "num": 1,
    "gift_name": "红包",
    "gift_id": 13000,
    "price": 20,
    "name_color": "#00D1F1",
    "medal_info": {
      "target_id": 11909915,
      "special": "",
      "icon_id": 0,
      "anchor_uname": "",
      "anchor_roomid": 0,
      "medal_level": 22,
      "medal_name": "伊克拉",
      "medal_color": 1725515,
      "medal_color_start": 1725515,
      "medal_color_end": 5414290,
      "medal_color_border": 6809855,
      "is_lighted": 1,
      "guard_level": 3
    }
  }
}
```

</details>

#### 直播间抢到红包的用户 (POPULARITY_RED_POCKET_WINNER_LIST)

注: 红包中奖列表

**JSON消息:**

根对象:

| 字段 | 类型 | 内容                                | 备注 |
| ---- | ---- | ----------------------------------- | ---- |
| cmd  | str  | `POPULARITY_RED_POCKET_WINNER_LIST` |      |
| data | obj  | 信息本体                            |      |

`data` 对象:

| 字段        | 类型  | 内容     | 备注 |
| ----------- | ----- | -------- | ---- |
| lot_id      | num   | 红包 ID  |      |
| total_num   | num   | 礼物总数 |      |
| winner_info | array | 中奖信息 |      |
| awards      | obj   | 礼物信息 |      |
| version     | num   |          |      |

`data.winner_info` 数组:

| 项 | 类型  | 内容         | 备注 |
| -- | ----- | ------------ | ---- |
| 0  | array | 中奖者 1     |      |
| …… | array | ……           |      |
| n  | array | 中奖者 (n+1) |      |

`data.winner_info[n]` 数组:

| 项 | 类型 | 内容                   | 备注 |
| -- | ---- | ---------------------- | ---- |
| 0  | num  | 该抢到红包的用户的 mid |      |
| 1  | str  | 该抢到红包的用户的名称 |      |
| 2  | num  | bag_id?                |      |
| 3  | num  | 该用户抢到的礼物的 ID  |      |

`data.awards` 对象:

以 礼物 ID 为键, JSON Object 为值的表

`data.awards['?']` 对象:

| 字段          | 类型 | 内容         | 备注 |
| ------------- | ---- | ------------ | ---- |
| award_type    | num  | 奖品类型?    |      |
| award_name    | str  | 礼物名称     |      |
| award_pic     | str  | 礼物图标 URL |      |
| award_big_pic | str  | 礼物大图 URL |      |
| award_price   | num  | 礼物价值     |      |

<details>
<summary>查看消息示例:</summary>

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

#### 直播间看过人数 (WATCHED_CHANGE)

注: 当前直播历史观众数量, 可替代人气

**正文:**

数据包的正文, 前19字节的信息未知:

```text
00000001: 8b38 8000 0000 7200 1000 0000 0000 0500  .8....r.........
00000002: 0000 00                                  ...
```

**JSON消息:**

根对象:

| 字段 | 类型 | 内容             | 备注 |
| ---- | ---- | ---------------- | ---- |
| cmd  | str  | `WATCHED_CHANGE` |      |
| data | obj  | 信息本体         |      |

`data` 对象:

| 字段       | 类型 | 内容          | 备注 |
| ---------- | ---- | ------------- | ---- |
| num        | num  | 看过人数      |      |
| text_small | str  | 显示文字 (小) |      |
| text_large | str  | 显示文字 (大) |      |

**示例:**

<details>
<summary>查看消息示例:</summary>

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

#### 用户进场特效 (ENTRY_EFFECT)

注: 有进场特效的用户进入直播间

**JSON消息:**

根对象:

| 字段 | 类型 | 内容           | 备注 |
| ---- | ---- | -------------- | ---- |
| cmd  | str  | `ENTRY_EFFECT` |      |
| data | obj  | 信息本体       |      |

`data` 对象:

| 字段                    | 类型  | 内容             | 备注 |
| ----------------------- | ----- | ---------------- | ---- |
| id                      | num   | ?                |      |
| uid                     | num   | 进场用户 mid     |      |
| target_id               | num   | 主播 mid?        |      |
| mock_effect             | num   | ?                |      |
| face                    | str   | 进场用户头像 URL |      |
| privilege_type          | num   | ?                |      |
| copy_writing            | str   | 进场欢迎文本     |      |
| copy_color              | str   | 进场欢迎文本颜色 | 16 进制 |
| highlight_color         | str   | 高亮颜色?        | 16 进制 |
| priority                | num   | 优先级?          |      |
| basemap_url             | str   | 进场特效背景 URL | APP 端 |
| show_avatar             | num   | 是否显示用户头像 | 1: 显示<br/>0: 不显示 |
| effective_time          | num   | ?                |      |
| web_basemap_url         | str   | 进场特效背景 URL | 网页端 |
| web_effective_time      | num   | 进场特效生存时间 | 网页端 |
| web_effect_close        | num   | ?                |      |
| web_close_time          | num   | ?                |      |
| business                | num   | ?                |      |
| copy_writing_v2         | str   | 进场欢迎文本     | APP 端? |
| icon_list               | array | 空?              |      |
| max_delay_time          | num   | 最大等待时间?    |      |
| trigger_time            | num   | 触发时间戳       | UNIX 纳秒时间戳 |
| identities              | num   | 标识符?          |      |
| effect_silent_time      | num   | ?                |      |
| effective_time_new      | num   | ?                |      |
| web_dynamic_url_webp    | str   | ?                |      |
| web_dynamic_url_apng    | str   | ?                |      |
| mobile_dynamic_url_webp | str   | ?                |      |
| wealthy_info            | obj   | 荣耀等级信息       |      |
| new_style               | num   | ?                |      |
| is_mystery              | bool  | ?                |      |
| uinfo                   | obj   | 用户信息          |      |
| full_cartoon_id         | num   | ?                |      |
| priority_level          | num   | ?                |      |
| wealth_style_info       | obj   | 荣耀等级样式信息    |      |

**示例:**

<details>
<summary>查看消息示例：</summary>

```json
{
	"cmd": "ENTRY_EFFECT",
	"data": {
		"id": 380,
		"uid": 31382283,
		"target_id": 12892411,
		"mock_effect": 0,
		"face": "https://i0.hdslb.com/bfs/face/876e30e89faa5672858cc17bdb357362ec96bc29.jpg",
		"privilege_type": 0,
		"copy_writing": "<%WYCBat%> 来了",
		"copy_color": "#F7F7F7",
		"highlight_color": "#FFFFFF",
		"priority": 1,
		"basemap_url": "",
		"show_avatar": 0,
		"effective_time": 0,
		"web_basemap_url": "https://i0.hdslb.com/bfs/live/mlive/19e7564ed9d466b02f341abfa979c6e38c2ffffb.png",
		"web_effective_time": 4,
		"web_effect_close": 1,
		"web_close_time": 900,
		"business": 6,
		"copy_writing_v2": "<%WYCBat%> 来了",
		"icon_list": [],
		"max_delay_time": 7,
		"trigger_time": 1748545763327647435,
		"identities": 1,
		"effect_silent_time": 0,
		"effective_time_new": 0,
		"web_dynamic_url_webp": "",
		"web_dynamic_url_apng": "",
		"mobile_dynamic_url_webp": "",
		"wealthy_info": {
			"uid": 0,
			"level": 17,
			"level_total_score": 0,
			"cur_score": 0,
			"upgrade_need_score": 0,
			"status": 0,
			"dm_icon_key": ""
		},
		"new_style": 1,
		"is_mystery": false,
		"uinfo": {
			"uid": 31382283,
			"base": {
				"name": "WYCBat",
				"face": "https://i0.hdslb.com/bfs/face/876e30e89faa5672858cc17bdb357362ec96bc29.jpg",
				"name_color": 0,
				"is_mystery": false,
				"risk_ctrl_info": null,
				"origin_info": null,
				"official_info": null,
				"name_color_str": ""
			},
			"medal": null,
			"wealth": {
				"level": 17,
				"dm_icon_key": ""
			},
			"title": null,
			"guard": {
				"level": 0,
				"expired_str": ""
			},
			"uhead_frame": null,
			"guard_leader": null
		},
		"full_cartoon_id": 1802,
		"priority_level": 0,
		"wealth_style_info": {
			"url": "https://i0.hdslb.com/bfs/live/b6f2bf3e27f22b3039594842f0005b05a0dc5dae.png"
		}
	}
}
```

</details>

#### 必须接受的用户进场特效 (ENTRY_EFFECT_MUST_RECEIVE)

注: 在部分主播进入自己的直播间时下发。

结构与 [用户进场特效 (ENTRY_EFFECT)](#用户进场特效-ENTRY_EFFECT) 完全相同。

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "ENTRY_EFFECT_MUST_RECEIVE",
	"data": {
		"id": 135,
		"uid": 438160221,
		"target_id": 438160221,
		"mock_effect": 0,
		"face": "https://i0.hdslb.com/bfs/face/member/noface.jpg",
		"privilege_type": 0,
		"copy_writing": "<%weatfe%> 来了",
		"copy_color": "#000000",
		"highlight_color": "#FFF100",
		"priority": 1,
		"basemap_url": "https://i0.hdslb.com/bfs/live/mlive/da6933ea70f31c4df63f4b68b735891284888357.png",
		"show_avatar": 1,
		"effective_time": 1,
		"web_basemap_url": "https://i0.hdslb.com/bfs/live/mlive/da6933ea70f31c4df63f4b68b735891284888357.png",
		"web_effective_time": 2,
		"web_effect_close": 0,
		"web_close_time": 900,
		"business": 3,
		"copy_writing_v2": "<%weatfe%> 来了",
		"icon_list": [],
		"max_delay_time": 7,
		"trigger_time": 1746031259272981482,
		"identities": 1,
		"effect_silent_time": 0,
		"effective_time_new": 0,
		"web_dynamic_url_webp": "",
		"web_dynamic_url_apng": "",
		"mobile_dynamic_url_webp": "",
		"wealthy_info": null,
		"new_style": 0,
		"is_mystery": false,
		"uinfo": {
			"uid": 438160221,
			"base": {
				"name": "weatfe",
				"face": "https://i0.hdslb.com/bfs/face/member/noface.jpg",
				"name_color": 0,
				"is_mystery": false,
				"risk_ctrl_info": null,
				"origin_info": null,
				"official_info": null,
				"name_color_str": ""
			},
			"medal": {
				"name": "粉丝团",
				"level": 11,
				"color_start": 9272486,
				"color_end": 9272486,
				"color_border": 9272486,
				"color": 9272486,
				"id": 2956282,
				"typ": 0,
				"is_light": 1,
				"ruid": 438160221,
				"guard_level": 0,
				"score": 16000,
				"guard_icon": "",
				"honor_icon": "",
				"v2_medal_color_start": "#596FE099",
				"v2_medal_color_end": "#596FE099",
				"v2_medal_color_border": "#596FE099",
				"v2_medal_color_text": "#FFFFFFFF",
				"v2_medal_color_level": "#000B7099",
				"user_receive_count": 0
			},
			"wealth": {
				"level": 5,
				"dm_icon_key": ""
			},
			"title": null,
			"guard": {
				"level": 0,
				"expired_str": ""
			},
			"uhead_frame": null,
			"guard_leader": null
		},
		"full_cartoon_id": 0,
		"priority_level": 0,
		"wealth_style_info": {
			"url": "https://i0.hdslb.com/bfs/live/24f6ef867c3905064136f5c4e33a8d423d41ebdd.png"
		}
	}
}
```

</details>

#### 全屏特效 (FULL_SCREEN_SPECIAL_EFFECT)

**示例:**

<details>
<summary>查看响应示例:</summary>

```json
{
  "cmd": "FULL_SCREEN_SPECIAL_EFFECT",
  "data": {
    "type": 2,
    "ids": [
      514
    ],
    "queue": 2,
    "platform_in": [
      1,
      2
    ]
  }
}
```

</details>

#### 直播间在所属分区的排名改变 (AREA_RANK_CHANGED)

**JSON消息:**

根对象:

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| cmd  | str | `AREA_RANK_CHANGED` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段          | 类型 | 内容               | 备注 |
| ------------- | ---- | ------------------ | ---- |
| conf_id       | num  | 配置 ID?           |      |
| rank_name     | str  | 排行榜名称         |      |
| uid           | num  | 主播 mid           |      |
| rank          | num  | 直播间在分区的排名 | 没有上榜则为 0 |
| icon_url_blue | str  | 蓝色排名图标 URL   |      |
| icon_url_pink | str  | 粉色排名图标 URL   |      |
| icon_url_grey | str  | 灰色排名图标 URL   |      |
| action_type   | num  | ?                  |      |
| timestamp     | num  | 当前时间           | UNIX 秒级时间戳 |
| msg_id        | str  | ?                  | 一串 UUID |
| jump_url_link | str  | 排行榜跳转链接     |      |
| jump_url_pc   | str  | 排行榜跳转链接     |      |
| jump_url_pink | str  | 排行榜跳转链接     |      |
| jump_url_web  | str  | 排行榜跳转链接     |      |

**示例:**

<details>
<summary>查看消息示例:</summary>

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

#### 广播通知弹幕信息 (COMMON_NOTICE_DANMAKU)

**JSON消息:**

根对象:

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| cmd  | str | `COMMON_NOTICE_DANMAKU` | |
| data | obj | 信息本体 | |

`data` 对象:

|    字段    | 类型 |  内容  |    备注   |
| ---------- | --- | ------ | --------- |
| biz_id | num | 待调查 | |
| content_segments | array | 文本分段 | |
| danmaku_style | obj | 文本样式信息 | 可能不存在 |
| danmaku_url | str | 待调查 | |
| dmscore | num | 待调查 | |
| terminals | array | 指定显示的终端 | 数字数组 |

`data.content_segments[n]` 数组中的对象

|    字段    | 类型 |  内容  |    备注   |
| ---------- | --- | ------ | --------- |
| background_color | arr 或 null | 背景颜色? | 字符串数组，可能不存在 |
| background_color_dark | arr 或 null | 深色模式背景颜色? | 可能不存在 |
| font_bold | bool | text 字段是否加粗? | 可能不存在 |
| font_color | str | text 字段的十六进制颜色值 |  |
| font_color_dark | str | text 字段的十六进制颜色值 | APP端设置为深色模式时使用，可能不存在 |
| highlight_font_color | str | text 字段高亮部分的十六进制颜色值? | 可能不存在 |
| highlight_font_color_dark | str | text 字段高亮部分的十六进制颜色值? | 深色模式时使用，可能不存在 |
| img_height | num | 图片高度 | 可能不存在 |
| img_url | str | 图片链接 | 可能不存在 |
| img_width | str | 图片宽度 | 可能不存在 |
| text | str | 文本 |  |
| type | num | 文本组件类型 | 1：普通文本<br />2：图片<br />3：链接 |
| uri | str | 链接 | 文本组件类型为 `3` 时存在 |

`data.danmaku_style` 对象:

|    字段    | 类型 |  内容  |    备注   |
| ---------- | --- | ------ | --------- |
| background_color | str | 文本背景颜色的十六进制颜色值 | |
| background_color_dark | str | 文本背景颜色的十六进制颜色值 | APP端设置为深色模式时使用 |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "COMMON_NOTICE_DANMAKU",
  "data": {
    "content_segments": [
      {
        "font_color": "#FB7299",
        "text": "春日限时任务：任务即将结束，抓紧完成获取3元红包奖励吧！未完成任务进度将重置",
        "type": 1
      }
    ],
    "dmscore": 144,
    "terminals": [
      1,
      2,
      3,
      4,
      5
    ]
  }
}
```

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

```json
{
	"cmd": "COMMON_NOTICE_DANMAKU",
	"data": {
		"content_segments": [
			{
				"background_color": null,
				"background_color_dark": null,
				"font_bold": false,
				"font_color": "#F294AE",
				"font_color_dark": "",
				"highlight_font_color": "",
				"highlight_font_color_dark": "",
				"img_height": 0,
				"img_url": "",
				"img_width": 0,
				"text": "疯狂星期五：疯狂任务今日24点结束，请关注任务完成情况~",
				"type": 1
			},
			{
				"background_color": [
					"#FA729A"
				],
				"background_color_dark": null,
				"font_bold": false,
				"font_color": "#FFFFFF",
				"font_color_dark": "",
				"highlight_font_color": "",
				"highlight_font_color_dark": "",
				"img_height": 0,
				"img_url": "",
				"img_width": 0,
				"text": "立即查看",
				"type": 3,
				"uri": "https://live.bilibili.com/p/html/bilili-page-gift-intro-container/index.html?is_live_half_webview=1&hybrid_rotate_d=1&hybrid_half_ui=1,3,100p,70p,0,0,30,100,12;2,2,375,100p,0,0,30,100,0;3,3,100p,544,0,0,30,100,12;4,2,375,100p,0,0,30,100,0;5,3,100p,70p,0,0,30,100,0;6,3,100p,70p,0,0,30,100,0;7,3,100p,70p,0,0,30,100,0;8,3,100p,70p,0,0,30,100,0&gift_id=32251&roomId=6154037&anchorId=194484313&sendTargetUid=194484313&active_tab=1"
			}
		],
		"danmaku_style": {
			"background_color": null,
			"background_color_dark": null
		},
		"dmscore": 1008,
		"terminals": [
			1,
			2,
			3,
			4,
			5
		]
	}
}
```

</details>

#### 直播间信息更改 (ROOM_CHANGE)

注: 例如直播间标题更改、直播间分区更改

**JSON消息:**

根对象:

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| cmd  | str | `ROOM_CHANGE` |  |
| data | obj | | |

`data` 对象:

|    字段    | 类型 |  内容  |    备注   |
| ---------- | --- | ------ | --------- |
| title | str | 直播间标题 | |
| area_id | num | 当前直播间所属二级分区的ID | |
| parent_area_id | num |  当前直播间所属一级分区的ID | |
| area_name | str | 当前直播间所属二级分区的名称 | |
| parent_area_name | str |  当前直播间所属一级分区名称 | |
| live_key | str | 标记直播场次的key | 未开播更新直播间信息时为`"0"` |
| sub_session_key | str | 待调查 | 未开播更新直播间信息时为`""`(空字符串) |

**示例:**

<details>
<summary>查看消息示例:</summary>

已开播:

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

未开播:

```json
{
  "cmd": "ROOM_CHANGE",
  "data": {
    "title": "随缘",
    "area_id": 216,
    "parent_area_id": 6,
    "area_name": "我的世界",
    "parent_area_name": "单机游戏",
    "live_key": "0",
    "sub_session_key": ""
  }
}
```

</details>

#### 直播间内容审核报告 (ROOM_CONTENT_AUDIT_REPORT)

注：这个数据包需要更新直播间标题且使用主播的登录信息才会下发，更新直播间标题后一般不会立刻下发。

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `ROOM_CONTENT_AUDIT_REPORT` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| audit_content_type | num | 审核内容类型? |  |
| room\_id | num | 直播间ID | 未知是真实ID还是短号 |
| anchor\_uid | num | 主播的用户mid |  |
| audit\_status | num | 审核状态? |  |
| audit\_title | str | 被审核的直播间标题 |  |
| audit\_reason | str | 审核结果 |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "ROOM_CONTENT_AUDIT_REPORT",
	"data": {
		"audit_content_type": 1,
		"room_id": 1899237171,
		"anchor_uid": 438160221,
		"audit_status": 2,
		"audit_title": "崩坏学园2",
		"audit_reason": "一审通过"
	}
}
```

</details>

#### 醒目留言按钮 (SUPER_CHAT_ENTRANCE)

**JSON消息:**

根对象:

| 字段 | 类型 |   内容  |    备注   |
| ---- | ---- | ------ | --------- |
| cmd  | str | `SUPER_CHAT_ENTRANCE` |  |
| data | obj | 醒目留言按钮的信息 | |
| roomid | num | 直播间ID | 未知是短号还是真实ID |

`data` 对象:

|    字段    | 类型 |  内容  |    备注   |
| ---------- | --- | ------ | --------- |
| status | num | 待调查 | |
| jump_url | str | 按下“醒目留言”按钮后弹出小窗的页面URL | |
| icon | str | “醒目留言”按钮图标的URL | |
| broadcast_type | num | 待调查 | |

**示例:**

<details>
<summary>查看消息示例:</summary>

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

#### 顶部横幅 (WIDGET_BANNER)

注: 网页端在直播间标题下面的横幅, 例如 限时任务 等

**JSON消息:**

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | str | `WIDGET_BANNER` | |
| data | obj | 横幅信息 | |

`data` 对象:

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| timestamp | num | 服务器发送数据包时的Unix时间戳 | |
| widget_list | obj | 横幅信息 | 待调查 |

`data.widget_list` 对象:

以 横幅 ID 为键, JSON Object 为值的表

`data.widget_list['?']` 对象:

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| id | num | 横幅ID | |
| title | str | 待调查 | |
| cover | str | 待调查 | |
| web_cover | str | 待调查 | |
| tip_text | str | 待调查 | |
| tip_text_color | str | 待调查 | |
| tip_bottom_color | str | 待调查 | |
| jump_url | str | 点击横幅后出现小窗的页面的URL | |
| url | str | 待调查 | |
| stay_time | num | 待调查 | |
| site | num | 待调查 | |
| platform_in | array | 待调查 | |
| type | num | 待调查 | |
| band_id | num | 待调查 | |
| sub_key | str | 待调查 | |
| sub_data | str | 横幅数据 | |
| is_add | bool | 待调查 | |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "WIDGET_BANNER",
  "data": {
    "timestamp": 1673684868,
    "widget_list": {
      "308": {
        "id": 308,
        "title": "一月限时任务",
        "cover": "",
        "web_cover": "",
        "tip_text": "限时任务",
        "tip_text_color": "",
        "tip_bottom_color": "",
        "jump_url": "https://live.bilibili.com/activity/live-activity-battle/index.html?app_name=time_limited_task_jan_2023&is_live_half_webview=1&hybrid_rotate_d=1&hybrid_half_ui=1,3,100p,70p,0,0,0,0,12,0;2,2,375,100p,0,0,0,0,12,0;3,3,100p,70p,0,0,0,0,12,0;4,2,375,100p,0,0,0,0,12,0;5,3,100p,70p,0,0,0,0,12,0;6,3,100p,70p,0,0,0,0,12,0;7,3,100p,70p,0,0,0,0,12,0;8,3,100p,70p,0,0,0,0,12,0&room_id=8618057&uid=29857468#/",
        "url": "",
        "stay_time": 5,
        "site": 1,
        "platform_in": [
          "live",
          "blink",
          "live_link",
          "web",
          "pc_link"
        ],
        "type": 1,
        "band_id": 101558,
        "sub_key": "",
        "sub_data": "%7B%22task_status%22%3A0%2C%22current_val%22%3A10%2C%22target_val%22%3A1200%2C%22timeout%22%3A1673687024%2C%22reward_price%22%3A8%2C%22reward_type%22%3A1%7D",
        "is_add": true
      }
    }
  }
}
```

</details>

#### 礼物心愿单进度 (WIDGET_WISH_LIST)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `WIDGET_WISH_LIST` | |
| data | obj | 信息本体 | |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| wish | array | 礼物心愿单信息 | |
| wish_status | num | ? | |
| sid | num | ? | |
| wish_status_info | array | ? | |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "WIDGET_WISH_LIST",
  "data": {
    "wish": [
      {
        "type": 3,
        "gift_id": 10003,
        "gift_name": "舰长",
        "gift_img": "https://i0.hdslb.com/bfs/live/f1be2a2d5b227ce72641de1ad64bcc7f9e4111c3.png",
        "gift_price": 198000,
        "target_num": 5,
        "current_num": 0
      },
      {
        "type": 2,
        "gift_id": 3,
        "gift_name": "B坷垃",
        "gift_img": "https://s1.hdslb.com/bfs/live/cc8bfcbc24c8b65937f62ce0d16b31ab987dce47.png",
        "gift_price": 9900,
        "target_num": 5,
        "current_num": 0
      },
      {
        "type": 2,
        "gift_id": 31039,
        "gift_name": "牛哇牛哇",
        "gift_img": "https://s1.hdslb.com/bfs/live/b8a38b4bd3be120becddfb92650786f00dffad48.png",
        "gift_price": 100,
        "target_num": 10,
        "current_num": 0
      }
    ],
    "wish_status": 1,
    "sid": 477,
    "wish_status_info": [
      {
        "wish_status_msg": "设定心 愿",
        "wish_status_img": "https://i0.hdslb.com/bfs/live/38f82bac32794e79776f7371269453652bd58a87.png",
        "wish_status": 0
      },
      {
        "wish_status_msg": "达成",
        "wish_status_img": "https://i0.hdslb.com/bfs/live/1dae635924437239fc69e561a1a9467508521249.png",
        "wish_status": 2
      },
      {
        "wish_status_msg": "收集失败",
        "wish_status_img": "https://i0.hdslb.com/bfs/live/3bbd30fdd32d085cc90e9ccd98c65a886dca9a8f.png",
        "wish_status": 3
      }
    ],
    "wish_name": "心愿"
  }
}
```

</details>

#### 礼物星球信息 (WIDGET_WISH_INFO)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `WIDGET_WISH_INFO` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| sid | num | (?) |  |
| wish | arr | 礼物需求信息 |  |
| jump_url | str | 用户端礼物星球界面 |  |
| wish_status | num | 礼物星球状态 |  |
| card_text | str | 卡片提示文本 |  |
| modal_text | str | 需求标题 |  |
| button_text | str | 按钮文本 |  |
| show_time | num | 显示时间 | 单位秒 |
| ts | num | 发送时间戳 | Unix秒时间戳 |
| tid | num | (?) |  |
| wish_status_info | arr | 状态对照信息 |  |
| wish_name | str | 礼物星球名称 |  |

`data.wish` 数组中的对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| gift_id | num | 礼物id |  |
| target_num | num | 需求数量 |  |
| gift_img | str | 礼物图片URL |  |
| gift_price | num | 礼物金瓜子标价 | CNY×1000 |
| gift_name | str | 礼物名称 |  |
| wish_status | num | 该礼物达成状态 |  |

`data.wish_status_info` 数组中的对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| wish_status_msg | str | 状态提示信息 |  |
| wish_status_img | str | 状态图片URL |  |
| wish_status | str | 状态 |  |
| wish_status_desc | str | 状态描述 | 不一定存在 |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "WIDGET_WISH_INFO",
	"data": {
		"sid": 658537,
		"wish": [
			{
				"gift_id": 31036,
				"target_num": 1,
				"gift_img": "https://s1.hdslb.com/bfs/live/8b40d0470890e7d573995383af8a8ae074d485d9.png",
				"gift_price": 100,
				"gift_name": "小花花",
				"wish_status": 1
			},
			{
				"gift_id": 30758,
				"target_num": 1,
				"gift_img": "https://s1.hdslb.com/bfs/live/3ddb10b055b9d1826829ec0fad93ab56484d4a90.png",
				"gift_price": 100,
				"gift_name": "这个好诶",
				"wish_status": 1
			},
			{
				"gift_id": 31039,
				"target_num": 1,
				"gift_img": "https://s1.hdslb.com/bfs/live/91ac8e35dd93a7196325f1e2052356e71d135afb.png",
				"gift_price": 100,
				"gift_name": "牛哇牛哇",
				"wish_status": 1
			}
		],
		"jump_url": "https://live.bilibili.com/p/html/bilili-page-gift-wishes-mix-planet/user.html?is_live_half_webview=1&hybrid_half_ui=1,3,100p,70p,0,0,30,100,15,0;2,2,375,100p,0,0,30,100,15,0;3,3,100p,70p,0,0,30,100,15,0;4,2,375,100p,0,0,30,100,15,0;5,3,100p,70p,0,0,30,100,15,0;6,3,100p,70p,0,0,30,100,15,0;7,3,100p,70p,0,0,30,100,15,0;8,3,100p,70p,0,0,30,100,15,0",
		"wish_status": 1,
		"card_text": "主播今日心愿还未完成",
		"modal_text": "今日心愿礼物",
		"button_text": "去助力",
		"show_time": 5,
		"ts": 1746257134,
		"tid": 6585370000,
		"wish_status_info": [
			{
				"wish_status_msg": "礼物星球待点亮",
				"wish_status_img": "https://i0.hdslb.com/bfs/live/e507f8b101289b2ce6741880a28304215a65f5bf.png",
				"wish_status": -1
			},
			{
				"wish_status_msg": "今日心愿暂未达成",
				"wish_status_img": "https://i0.hdslb.com/bfs/live/e507f8b101289b2ce6741880a28304215a65f5bf.png",
				"wish_status": 1
			},
			{
				"wish_status_msg": "今日心愿已达成",
				"wish_status_img": "https://i0.hdslb.com/bfs/live/e507f8b101289b2ce6741880a28304215a65f5bf.png",
				"wish_status": 2,
				"wish_status_desc": "已完成"
			}
		],
		"wish_name": "心愿礼物"
	}
}
```

</details>

#### 下播的直播间 (STOP_LIVE_ROOM_LIST)

注: 估计是更新关注的主播直播状态的

**JSON消息:**

根对象:

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd | str | `STOP_LIVE_ROOM_LIST` | |
| data | obj | 信息本体 | |

`data` 对象:

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| room_id_list | array | 下播的直播间ID | |

`data.room_id_list` 数组:

| 项 | 类型 | 内容 | 备注 |
| -- | ---- | ---- | ---- |
| 0 | num | 第 1 个下播的直播间 ID | |
| 1 | num | 第 2 个下播的直播间 ID | |
| …… | num | …… |  |
| n | num | 第 (n+1) 个下播的直播间 ID |  |

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "STOP_LIVE_ROOM_LIST",
  "data": {
    "room_id_list": [
      14507570, 23963084, 24370437, 24380902, 24889494,
      22735090, 24268758, 24668544,    38325, 24762357,
       3222966,  6684395, 24199566, 24864470, 10224194,
      14953052,  6198131,   898214, 10412034, 22506883,
      23932516,  6768714, 24392281,  1799500, 22392518,
      22976729, 21557043, 24896092, 11718936, 21612704,
      21778117, 24145539, 23178318, 23575414, 24842462,
      22245210, 24895499,  3133873,  1298898, 22175308,
       3600684,  2053035,   270652, 24877480,  3854611,
      21512488, 24393104, 24756457,  4630683,  6955412,
      23199465,  2880481, 23868339,   717791, 24068307,
      24875243, 22777819, 24896061, 24619665
    ]
  }
}
```

</details>

#### 系统信息 (SYS_MSG)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `SYS_MSG` |  |
| msg | str | 提示信息 |  |
| url | str | 跳转 URL |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "SYS_MSG",
  "msg": "争夺开启，时间周五20点至周日20点，逾期不候哟！",
  "url": ""
}
```

</details>

#### 警告 (WARNING)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `WARNING` | |
| msg | str | 警告信息 | |
| roomid | num | 直播间 ID | |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "WARNING",
  "msg": "图片内容不适宜，请立即调整",
  "roomid": 22195814
}
```

</details>

#### 切断 (CUT_OFF)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `CUT_OFF` |  |
| msg | str | 切断原因 |  |
| roomid | num | 直播间 ID |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "CUT_OFF",
  "msg": "违反直播言论规范，请立即调整",
  "roomid": 23993070
}
```

</details>

#### 切断V2 (CUT_OFF_V2)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `CUT_OFF_V2` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cut_off_scene | num |  |  |
| timestamp | num | 操作时间戳 | UNIX 秒时间戳 |
| cut_off_version | num | 切断提示信息版本? |  |
| cut_off_data | obj | 切断提示信息 |  |

`data.cut_off_data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cut_off_title | str | 对话框窗口标题 |  |
| cut\_off\_message\_list | array | 对话框正文列表 |  |
| cut\_off\_tip\_list | array | 对话框提示信息列表 |  |
| cut\_off\_button\_list | array | 对话框按钮列表 |  |

`data.cut_off_data.cut_off_message_list` 数组:

| 索引 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| 0 | obj | 首个正文信息 |  |
| … | obj | 单个正文信息 |  |
| i | obj | 最后正文信息 |  |

`data.cut_off_data.cut_off_message_list[i]` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| type | num | 显示类别 | `1`:一个“`label`：`content`”格式的信息 |
| label | str | 标签 |  |
| content | str | 内容 |  |

`data.cut_off_data.cut_off_tip_list` 数组:

| 索引 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| 0 | obj | 首个提示行信息 |  |
| … | obj | 单个提示行信息 |  |
| i | obj | 最后提示行信息 |  |

`data.cut_off_data.cut_off_tip_list[i]` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| show\_platform | array | 要在哪个客户端显示的指代 |  |
| message_list | array | 提示信息列表 |  |

`data.cut_off_data.cut_off_tip_list[i].message_list` 数组:

| 索引 | 类型 | 内容 | 备注 |
|:---:| --- | --- | --- |
| 0 | obj | 首个提示组件信息 |  |
| … | obj | 单个提示组件信息 |  |
| i1 | obj | 最后提示组件信息 |  |

`data.cut_off_data.cut_off_tip_list[i].message_list[i1]` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| type | num | 显示类型 | `1`:纯文本<br />`2`:链接 |
| content | str | 显示文本 |  |
| link_url | str | 链接 | type为2时有内容 |

`data.cut_off_data.cut_off_button_list` 数组:

| 索引 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| 0 | obj | 首个按钮信息 |  |
| … | obj | 单个按钮信息 |  |
| i | obj | 最后按钮信息 |  |

`data.cut_off_data.cut_off_button_list[i]` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| show_platform | array | 要在那个客户端显示的指代 | `1`和`2`可能是手机直播姬<br />`3`和`4`可能是pc直播姬或网页直播姬 |
| button\_text | str | 按钮文本 |  |
| button\_action | num | 按钮操作 | `1`:关闭窗口?<br />`2`:跳转到链接? |
| button_link_url | str | 跳转链接 |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "CUT_OFF_V2",
	"data": {
		"cut_off_scene": 1,
		"timestamp": 1731590280,
		"cut_off_version": 1,
		"cut_off_data": {
			"cut_off_title": "违规提示",
			"cut_off_message_list": [
				{
					"type": 1,
					"label": "处罚结果",
					"content": "切断本场直播"
				},
				{
					"type": 1,
					"label": "违规原因",
					"content": "您本场直播存在挂机、录播等消极直播行为，因此直播被切断，请您及时整改"
				},
				{
					"type": 1,
					"label": "处罚时间",
					"content": "2024年11月14日21时17分"
				}
			],
			"cut_off_tip_list": [
				{
					"show_platform": [
						3,
						4
					],
					"message_list": [
						{
							"type": 1,
							"content": "请在",
							"link_url": ""
						},
						{
							"type": 2,
							"content": "【处罚中心】",
							"link_url": "https://link.bilibili.com/p/center/index?my-room/violation-records#/my-room/violation-records"
						},
						{
							"type": 1,
							"content": "查看你的违规记录",
							"link_url": ""
						}
					]
				}
			],
			"cut_off_button_list": [
				{
					"show_platform": [
						1,
						2
					],
					"button_text": "了解详情",
					"button_action": 2,
					"button_link_url": "https://live.bilibili.com/p/html/live-anchor-galaxy/violation_records/mobile.html?-Abrowser=live&is_live_webview=1"
				},
				{
					"show_platform": [
						3,
						4
					],
					"button_text": "我知道了",
					"button_action": 1,
					"button_link_url": ""
				}
			]
		}
	}
}
```

</details>

#### 直播对话框 (ANCHOR_ECOLOGY_LIVING_DIALOG)

注：推测在自动检测到画面不怎么变化且没人聊天时警告下发，见[#1139(issue正文)](https://github.com/SocialSisterYi/bilibili-API-collect/issues/1139#issue-2657488653)。

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `ANCHOR_ECOLOGY_LIVING_DIALOG` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| dialog\_scene | num |  |  |
| timestamp | num | 触发时间戳 | UNIX 秒时间戳 |
| valid_timestamp | num |  |  |
| dialog\_top\_vertical\_img | str |  |  |
| dialog\_top\_landscape_img | str |  |  |
| dialog\_title | str | 对话框标题 |  |
| dialog_message_list | array | 对话框正文列表 | 参见`CUT_OFF_V2` |
| dialog_tip_list | array | 对话框提示信息列表 | 参见`CUT_OFF_V2` |
| dialog_button_list | array | 对话框按钮列表 | 参见`CUT_OFF_V2` |

`data.dialog_message_list` 数组:

同`CUT_OFF_V2`的`data.cut_off_data.cut_off_message_list`数组。

`data.dialog_tip_list` 数组:

同`CUT_OFF_V2`的`data.cut_off_data.cut_off_tip_list`数组。

`data.dialog_button_list` 数组:

同`CUT_OFF_V2`的`data.cut_off_data.cut_off_button_list`数组。

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "ANCHOR_ECOLOGY_LIVING_DIALOG",
	"data": {
		"dialog_scene": 1,
		"timestamp": 1731504845,
		"valid_timestamp": 0,
		"dialog_top_vertical_img": "https://i0.hdslb.com/bfs/live/ee359d3e89bb044914f72a557a4ac2d3b5ba4004.png",
		"dialog_top_landscape_img": "https://i0.hdslb.com/bfs/live/ee359d3e89bb044914f72a557a4ac2d3b5ba4004.png",
		"dialog_title": "直播间违规",
		"dialog_message_list": [
			{
				"type": 1,
				"label": "处罚结果",
				"content": "警告"
			},
			{
				"type": 1,
				"label": "违规原因",
				"content": "您本场直播存在挂机、录播等消极直播行为，请及时整改"
			},
			{
				"type": 1,
				"label": "处罚时间",
				"content": "2024年11月13日21时34分"
			}
		],
		"dialog_tip_list": [
			{
				"show_platform": [
					1,
					2
				],
				"message_list": [
					{
						"type": 1,
						"content": "请在",
						"link_url": ""
					},
					{
						"type": 2,
						"content": "【处罚中心】",
						"link_url": "https://live.bilibili.com/p/html/live-anchor-galaxy/violation_records/mobile.html?is_live_half_webview=1u0026hybrid_rotate_d=1u0026is_cling_player=1u0026hybrid_half_ui=1,3,100p,70p,0,1,30,100;2,2,375,100p,0,1,30,100;3,3,100p,70p,0,1,30,100;4,2,375,100p,0,1,30,100;5,3,100p,70p,0,1,30,100;6,3,100p,70p,0,1,30,100;7,3,100p,70p,0,1,30,100;8,3,100p,70p,0,1,30,100#/"
					},
					{
						"type": 1,
						"content": "查看你的违规记录",
						"link_url": ""
					}
				]
			},
			{
				"show_platform": [
					3,
					4
				],
				"message_list": [
					{
						"type": 1,
						"content": "请在",
						"link_url": ""
					},
					{
						"type": 2,
						"content": "【处罚中心】",
						"link_url": "https://link.bilibili.com/#/my-room/violation-records?jump_type=browser&app_common=open"
					},
					{
						"type": 1,
						"content": "查看你的违规记录",
						"link_url": ""
					}
				]
			}
		],
		"dialog_button_list": [
			{
				"show_platform": [
					1,
					2,
					3,
					4
				],
				"button_text": "我知道了",
				"button_action": 1,
				"button_link_url": ""
			}
		]
	}
}
```

</details>

#### 直播间背景图片修改 (CHANGE_ROOM_INFO)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `CHANGE_ROOM_INFO` |  |
| background | str | 背景图 URL |  |
| roomid | num | 直播间 ID |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "CHANGE_ROOM_INFO",
  "background": "https://i0.hdslb.com/bfs/live/2388faed3728f3396052273ad4c3c9af21c411fc.jpg",
  "roomid": 23993070
}
```

</details>

#### 直播间皮肤变更 (ROOM_SKIN_MSG)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `ROOM_SKIN_MSG` |  |
| skin_id | num | 皮肤 ID |  |
| status | num | 状态? |  |
| end_time | num | 皮肤结束时间? | UNIX 秒级时间戳 |
| current_time | num | 当前时间 | UNIX 秒级时间戳 |
| only_local | bool | 仅在本地显示? |  |
| scatter | obj | ? |  |
| skin_config | obj | 皮肤配置 |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "ROOM_SKIN_MSG",
  "skin_id": 353,
  "status": 1,
  "end_time": 1652620669,
  "current_time": 1652015870,
  "only_local": false,
  "scatter": {
    "min": 1,
    "max": 200
  },
  "skin_config": {
    "android": {
      "1": {
        "zip": "https://i0.hdslb.com/bfs/live/fab943a5d7eeb871ecf06413283d17536e67ab91.zip",
        "md5": "011EBB3E14192212FD50852245DC74FA"
      }
    },
    "ios": {
      "1": {
        "zip": "https://i0.hdslb.com/bfs/live/e7d8768dcb3975d82d794fe6b39756317916a7fe.zip",
        "md5": "B1223577FE9C5C248EC1326CDACF8379"
      }
    },
    "ipad": {
      "1": {
        "zip": "https://i0.hdslb.com/bfs/live/0856e17be073d75b70098609ae26572ba1534605.zip",
        "md5": "481AE75FFD0E0DE91EAFB5B6E0F8936B"
      }
    },
    "web": {
      "1": {
        "zip": "https://i0.hdslb.com/bfs/live/0b3770980e600f23629c8445fd211d4a12ec4b6f.zip",
        "md5": "8F98F79F02DEFE8B69EE2F6DE7416DFF",
        "platform": "web",
        "version": "1",
        "headInfoBgPic": "https://i0.hdslb.com/bfs/live/d293e69b70af34df0fef086a86552b1761a33a75.jpg",
        "giftControlBgPic": "https://i0.hdslb.com/bfs/live/1a124c5547c784f41dc3d7f65f446c56c4cbb73e.jpg",
        "rankListBgPic": "https://i0.hdslb.com/bfs/live/af8580a956d0eac6ea1d2cc97ea743d435a86874.jpg",
        "mainText": "#FFffffff",
        "normalText": "#FFffffff",
        "highlightContent": "#FFffd119",
        "border": "#FFaec2ff",
        "buttonText": "#FF123ab2"
      }
    }
  }
}
```

</details>

#### 开启等级禁言 (ROOM_SILENT_ON)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| data | obj | 信息本体 |  |
| cmd | str | `ROOM_SILENT_ON` |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| type | str | 类型? |  |
| level | num | 等级? |  |
| second | num | 时间? | UNIX 秒级时间戳 |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "data": {
    "type": "member",
    "level": 1,
    "second": 1651000426
  },
  "cmd": "ROOM_SILENT_ON"
}
```

</details>

#### 关闭等级禁言 (ROOM_SILENT_OFF)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| data | obj | 信息本体 |  |
| cmd | str | `ROOM_SILENT_OFF` |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| type | str | 空 |  |
| level | num | 0 |  |
| second | num | 0 |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "data": {
    "type": "",
    "level": 0,
    "second": 0
  },
  "cmd": "ROOM_SILENT_OFF"
}
```

</details>

#### 指定观众禁言 (ROOM_BLOCK_MSG)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `ROOM_BLOCK_MSG` |  |
| data | obj | 详细信息 |  |
| uid | num | 禁言用户 mid |  |
| uname | str | 禁言用户名 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| dmscore | num | 弹幕分数? |  |
| operator | num | 操作者? |  |
| uid | num | 禁言用户 mid |  |
| uname | str | 禁言用户名 |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "ROOM_BLOCK_MSG",
  "data": {
    "dmscore": 30,
    "operator": 2,
    "uid": 37903025,
    "uname": "玉麟珑"
  },
  "uid": "37903025",
  "uname": "玉麟珑"
}
```

</details>

#### 房管列表 (ROOM_ADMINS)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `ROOM_ADMINS` |  |
| uids | array | 房管 mid 列表 |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "ROOM_ADMINS",
  "uids": [ 898424, 384203692, 1309513, 30816752, 23931549, 223134 ]
}
```

</details>

#### 设立房管 (room_admin_entrance)

注: 此处 cmd 内容为小写

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `room_admin_entrance` |  |
| dmscore | num | 弹幕分数? |  |
| level | num | 等级? |  |
| msg | str | 提示信息 |  |
| uid | num | 用户 mid |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "room_admin_entrance",
  "dmscore": 45,
  "level": 1,
  "msg": "系统提示：你已被主播设为房管",
  "uid": 223134
}
```

</details>

#### 撤销房管 (ROOM_ADMIN_REVOKE)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `ROOM_ADMIN_REVOKE` |  |
| msg | str | 提示信息 |  |
| uid | num | 用户 mid |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "ROOM_ADMIN_REVOKE",
  "msg": "撤销房管",
  "uid": 6791627
}
```

</details>

#### 多个直播视角信息 (LIVE_MULTI_VIEW_NEW_INFO)

部分活动直播间会下发。

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `LIVE_MULTI_VIEW_NEW_INFO` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| title | str | 活动标题 | 活动结束后为`""` |
| room_id | num | 主直播间id | 活动结束后为`0` |
| copy_writing | str | 提示文本 | 活动结束后为`""` |
| bg_image | str | 背景图片 | 活动结束后为`""` |
| sub_slt_color | str | 切换按钮颜色? | 活动结束后为`""` |
| sub_bg_color | str | 切换按钮背景颜色? | 活动结束后为`""` |
| sub_text_color | str | 切换按钮文本颜色? | 活动结束后为`""` |
| view_type | num |  |  |
| room_list | arr | 房间列表 | 不包括“未直播”状态的直播间，活动结束后为`null` |
| relation_view | arr | 详细关系? | 不包括“未直播”状态的直播间，活动结束后为`null` |
| view_pattern | num |  |  |
| gather_room_list | arr | 空数组? | 活动结束后为`null` |

`data.room_list` 数组中对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| order_id | num | 顺序id |  |
| room_id | num | 直播间id | 似乎是长号 |
| room_name | str | 主播名称 |  |
| live_status | num | 直播状态 | 1：直播中<br />2：轮播中 |
| jump_url | str | 加入直播间的链接 |  |

`data.relation_view` 数组中对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| order_id | num | 顺序id |  |
| view_type | num |  |  |
| view_id | num | 直播间id |  |
| view_name | str | 主播名称 |  |
| title | str | 直播间标题 |  |
| cover | str | 直播间封面 |  |
| jump_url | str | 加入直播间的链接 |  |
| switch | bool |  |  |
| num | num | 看过人数 |  |
| watch_icon | str | 看过图标 |  |
| live_status | num | 直播状态 | 同`data.room_list[i].live_status` |
| text_small | str | 看过人数文本 |  |
| use_view_vt | bool |  |  |
| anchor_face | str | 主播头像 |  |
| match_live_room | bool |  |  |
| match_info | null |  |  |
| duration | num |  |  |
| up_name | str | `""` |  |
| pub_date | str |  |  |
| gather_id | num |  |  |
| sub_name | str |  |  |

**示例:**

<details>
<summary>查看响应示例:</summary>

```json
{
	"cmd": "LIVE_MULTI_VIEW_NEW_INFO",
	"data": {
		"title": "战地风云6公开测试",
		"room_id": 5050,
		"copy_writing": "更多视角",
		"bg_image": "https://i0.hdslb.com/bfs/live/edaa9477a1d8325dd0c36c419b6fd5f9646b2419.png",
		"sub_slt_color": "#FFFFFF",
		"sub_bg_color": "#333333",
		"sub_text_color": "#FFFFFF",
		"view_type": 0,
		"room_list": [
			{
				"order_id": 2,
				"room_id": 6154037,
				"room_name": "Asaki大人",
				"live_status": 2,
				"jump_url": "https://live.bilibili.com/6154037?broadcast_type=0&is_room_feed=1&live_from=28022"
			},
			{
				"order_id": 4,
				"room_id": 1521765,
				"room_name": "南云鸟羽",
				"live_status": 1,
				"jump_url": "https://live.bilibili.com/1521765?broadcast_type=0&is_room_feed=1&live_from=28022"
			},
			{
				"order_id": 8,
				"room_id": 24065,
				"room_name": "闻香识",
				"live_status": 1,
				"jump_url": "https://live.bilibili.com/24065?broadcast_type=0&is_room_feed=1&live_from=28022"
			},
			{
				"order_id": 14,
				"room_id": 38528,
				"room_name": "乔伊奥斯托雷",
				"live_status": 1,
				"jump_url": "https://live.bilibili.com/38528?broadcast_type=0&is_room_feed=1&live_from=28022"
			},
			{
				"order_id": 15,
				"room_id": 21263282,
				"room_name": "Yommyko",
				"live_status": 2,
				"jump_url": "https://live.bilibili.com/21263282?broadcast_type=0&is_room_feed=1&live_from=28022"
			},
			{
				"order_id": 16,
				"room_id": 5513659,
				"room_name": "狙佬-zuener",
				"live_status": 1,
				"jump_url": "https://live.bilibili.com/5513659?broadcast_type=0&is_room_feed=1&live_from=28022"
			},
			{
				"order_id": 18,
				"room_id": 146007,
				"room_name": "Kisflow",
				"live_status": 1,
				"jump_url": "https://live.bilibili.com/146007?broadcast_type=0&is_room_feed=1&live_from=28022"
			},
			{
				"order_id": 19,
				"room_id": 1163043,
				"room_name": "人形鹿头自走炮",
				"live_status": 1,
				"jump_url": "https://live.bilibili.com/1163043?broadcast_type=0&is_room_feed=1&live_from=28022"
			},
			{
				"order_id": 20,
				"room_id": 3343118,
				"room_name": "版尤黑紫",
				"live_status": 1,
				"jump_url": "https://live.bilibili.com/3343118?broadcast_type=0&is_room_feed=1&live_from=28022"
			},
			{
				"order_id": 21,
				"room_id": 25212992,
				"room_name": "贝施汀",
				"live_status": 1,
				"jump_url": "https://live.bilibili.com/25212992?broadcast_type=0&is_room_feed=1&live_from=28022"
			},
			{
				"order_id": 22,
				"room_id": 11313,
				"room_name": "丧心病狂的魔笑",
				"live_status": 1,
				"jump_url": "https://live.bilibili.com/11313?broadcast_type=0&is_room_feed=1&live_from=28022"
			},
			{
				"order_id": 24,
				"room_id": 902302,
				"room_name": "LF叶绿",
				"live_status": 1,
				"jump_url": "https://live.bilibili.com/902302?broadcast_type=0&is_room_feed=1&live_from=28022"
			}
		],
		"relation_view": [
			{
				"order_id": 2,
				"view_type": 0,
				"view_id": 6154037,
				"view_name": "Asaki大人",
				"title": "猪猪猪",
				"cover": "https://i0.hdslb.com/bfs/live/new_room_cover/87e0332a5c3c8cd73fa7616045111b90b0199087.jpg",
				"jump_url": "https://live.bilibili.com/6154037?broadcast_type=0&is_room_feed=1&live_from=28022",
				"switch": true,
				"num": 2305,
				"watch_icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
				"live_status": 2,
				"text_small": "2305",
				"use_view_vt": false,
				"anchor_face": "https://i1.hdslb.com/bfs/face/84a861facfa041b46f7a30897e9ed3f2e05e0519.jpg",
				"match_live_room": false,
				"match_info": null,
				"duration": 0,
				"up_name": "",
				"pub_date": "",
				"gather_id": 0,
				"sub_name": ""
			},
			{
				"order_id": 4,
				"view_type": 0,
				"view_id": 1521765,
				"view_name": "南云鸟羽",
				"title": "【战地6B测】下午四点开！聊天摸鱼",
				"cover": "https://i0.hdslb.com/bfs/live/new_room_cover/a8216e0b5469949fcbcc72458c7955b562838a89.jpg",
				"jump_url": "https://live.bilibili.com/1521765?broadcast_type=0&is_room_feed=1&live_from=28022",
				"switch": true,
				"num": 36987,
				"watch_icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
				"live_status": 1,
				"text_small": "3.6万",
				"use_view_vt": false,
				"anchor_face": "https://i1.hdslb.com/bfs/face/f4744b6346ddaccb4642a0f05f25d798fb5d8474.jpg",
				"match_live_room": false,
				"match_info": null,
				"duration": 0,
				"up_name": "",
				"pub_date": "",
				"gather_id": 0,
				"sub_name": ""
			},
			{
				"order_id": 8,
				"view_type": 0,
				"view_id": 24065,
				"view_name": "闻香识",
				"title": "4点战地6！！",
				"cover": "https://i0.hdslb.com/bfs/live/new_room_cover/6e309306fcb7bdeeb5e72f8b4c2d1ed7ba7e1e29.jpg",
				"jump_url": "https://live.bilibili.com/24065?broadcast_type=0&is_room_feed=1&live_from=28022",
				"switch": true,
				"num": 32408,
				"watch_icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
				"live_status": 1,
				"text_small": "3.2万",
				"use_view_vt": false,
				"anchor_face": "https://i0.hdslb.com/bfs/face/df21869b067816e03c517bc774f6ebf5a86563de.jpg",
				"match_live_room": false,
				"match_info": null,
				"duration": 0,
				"up_name": "",
				"pub_date": "",
				"gather_id": 0,
				"sub_name": ""
			},
			{
				"order_id": 14,
				"view_type": 0,
				"view_id": 38528,
				"view_name": "乔伊奥斯托雷",
				"title": "[战地六B测]捞薯条，吃薯条，谁是薯条？",
				"cover": "https://i0.hdslb.com/bfs/live/new_room_cover/a89ebcd8b4f3e841ddb7cb53fbdc6013a9956013.jpg",
				"jump_url": "https://live.bilibili.com/38528?broadcast_type=0&is_room_feed=1&live_from=28022",
				"switch": true,
				"num": 3660,
				"watch_icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
				"live_status": 1,
				"text_small": "3660",
				"use_view_vt": false,
				"anchor_face": "https://i1.hdslb.com/bfs/face/82ef4b09c26751649da2a48960d23fd87baa6db5.jpg",
				"match_live_room": false,
				"match_info": null,
				"duration": 0,
				"up_name": "",
				"pub_date": "",
				"gather_id": 0,
				"sub_name": ""
			},
			{
				"order_id": 15,
				"view_type": 0,
				"view_id": 21263282,
				"view_name": "Yommyko",
				"title": "和广东双马尾搏斗！禁闭求生2",
				"cover": "https://i0.hdslb.com/bfs/live/new_room_cover/86ac43cf0c1db277b92a5e83324558ceab2bb108.jpg",
				"jump_url": "https://live.bilibili.com/21263282?broadcast_type=0&is_room_feed=1&live_from=28022",
				"switch": true,
				"num": 1583,
				"watch_icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
				"live_status": 2,
				"text_small": "1583",
				"use_view_vt": false,
				"anchor_face": "https://i2.hdslb.com/bfs/face/9718e4c59c2cfcc9f8b747ad8ea5006fad78a76a.jpg",
				"match_live_room": false,
				"match_info": null,
				"duration": 0,
				"up_name": "",
				"pub_date": "",
				"gather_id": 0,
				"sub_name": ""
			},
			{
				"order_id": 16,
				"view_type": 0,
				"view_id": 5513659,
				"view_name": "狙佬-zuener",
				"title": "战地6！开玩！七年之约已到！",
				"cover": "https://i0.hdslb.com/bfs/live/new_room_cover/b1779156686031460633d31362205456d1bb53df.jpg",
				"jump_url": "https://live.bilibili.com/5513659?broadcast_type=0&is_room_feed=1&live_from=28022",
				"switch": true,
				"num": 30035,
				"watch_icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
				"live_status": 1,
				"text_small": "3.0万",
				"use_view_vt": false,
				"anchor_face": "https://i0.hdslb.com/bfs/face/bdb4b214d3446aca7c11b408ae6f35c89f52a5cc.jpg",
				"match_live_room": false,
				"match_info": null,
				"duration": 0,
				"up_name": "",
				"pub_date": "",
				"gather_id": 0,
				"sub_name": ""
			},
			{
				"order_id": 18,
				"view_type": 0,
				"view_id": 146007,
				"view_name": "Kisflow",
				"title": "战地6 BETA 战场老登职业哥",
				"cover": "https://i0.hdslb.com/bfs/live/new_room_cover/0007988a93c06215f0ffd96f7a4e3834d1396408.jpg",
				"jump_url": "https://live.bilibili.com/146007?broadcast_type=0&is_room_feed=1&live_from=28022",
				"switch": true,
				"num": 7839,
				"watch_icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
				"live_status": 1,
				"text_small": "7839",
				"use_view_vt": false,
				"anchor_face": "https://i1.hdslb.com/bfs/face/5761dbf3f03b1a31ad8a6aec01452c97e93c16c0.jpg",
				"match_live_room": false,
				"match_info": null,
				"duration": 0,
				"up_name": "",
				"pub_date": "",
				"gather_id": 0,
				"sub_name": ""
			},
			{
				"order_id": 19,
				"view_type": 0,
				"view_id": 1163043,
				"view_name": "人形鹿头自走炮",
				"title": "神秘远光84男",
				"cover": "https://i0.hdslb.com/bfs/live/new_room_cover/cea622fe174d8c3fd26e58ea5a7e3b709fd8aee4.jpg",
				"jump_url": "https://live.bilibili.com/1163043?broadcast_type=0&is_room_feed=1&live_from=28022",
				"switch": true,
				"num": 20796,
				"watch_icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
				"live_status": 1,
				"text_small": "2.0万",
				"use_view_vt": false,
				"anchor_face": "https://i2.hdslb.com/bfs/face/259c1f3b485ad5e2182446246fccb87114701ed8.jpg",
				"match_live_room": false,
				"match_info": null,
				"duration": 0,
				"up_name": "",
				"pub_date": "",
				"gather_id": 0,
				"sub_name": ""
			},
			{
				"order_id": 20,
				"view_type": 0,
				"view_id": 3343118,
				"view_name": "版尤黑紫",
				"title": "爽玩！战地6B测",
				"cover": "https://i0.hdslb.com/bfs/live/user_cover/039be5f223d26d4108941f1f056ee5842e3e5720.jpg",
				"jump_url": "https://live.bilibili.com/3343118?broadcast_type=0&is_room_feed=1&live_from=28022",
				"switch": true,
				"num": 1704,
				"watch_icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
				"live_status": 1,
				"text_small": "1704",
				"use_view_vt": false,
				"anchor_face": "https://i2.hdslb.com/bfs/face/3cdcbc8945d18575279ac55c75f4da9f0a7dbc9e.jpg",
				"match_live_room": false,
				"match_info": null,
				"duration": 0,
				"up_name": "",
				"pub_date": "",
				"gather_id": 0,
				"sub_name": ""
			},
			{
				"order_id": 21,
				"view_type": 0,
				"view_id": 25212992,
				"view_name": "贝施汀",
				"title": "战地6还没开服，先直播剪会儿视频聊聊天",
				"cover": "https://i0.hdslb.com/bfs/live/new_room_cover/fb0227b71dca8555588c9c6c0af329cf250123a9.jpg",
				"jump_url": "https://live.bilibili.com/25212992?broadcast_type=0&is_room_feed=1&live_from=28022",
				"switch": true,
				"num": 2207,
				"watch_icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
				"live_status": 1,
				"text_small": "2207",
				"use_view_vt": false,
				"anchor_face": "https://i0.hdslb.com/bfs/face/7242e856562166a27e8be4a184e4cddbaed8177f.jpg",
				"match_live_room": false,
				"match_info": null,
				"duration": 0,
				"up_name": "",
				"pub_date": "",
				"gather_id": 0,
				"sub_name": ""
			},
			{
				"order_id": 22,
				"view_type": 0,
				"view_id": 11313,
				"view_name": "丧心病狂的魔笑",
				"title": "等待测试开启！但是先直播周边开箱！",
				"cover": "https://i0.hdslb.com/bfs/live/new_room_cover/48fb912da0f665427eb230ef3273defdb1a33fa4.jpg",
				"jump_url": "https://live.bilibili.com/11313?broadcast_type=0&is_room_feed=1&live_from=28022",
				"switch": true,
				"num": 2924,
				"watch_icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
				"live_status": 1,
				"text_small": "2924",
				"use_view_vt": false,
				"anchor_face": "https://i2.hdslb.com/bfs/face/e672848bc2718b79ca2f44eb447e84282c6f806d.jpg",
				"match_live_room": false,
				"match_info": null,
				"duration": 0,
				"up_name": "",
				"pub_date": "",
				"gather_id": 0,
				"sub_name": ""
			},
			{
				"order_id": 24,
				"view_type": 0,
				"view_id": 902302,
				"view_name": "LF叶绿",
				"title": "《田 野 打 架 6》",
				"cover": "https://i0.hdslb.com/bfs/live/new_room_cover/3b18086f9e70f719917c5d4561c25defdd13cd82.jpg",
				"jump_url": "https://live.bilibili.com/902302?broadcast_type=0&is_room_feed=1&live_from=28022",
				"switch": true,
				"num": 1897,
				"watch_icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
				"live_status": 1,
				"text_small": "1897",
				"use_view_vt": false,
				"anchor_face": "https://i2.hdslb.com/bfs/face/5e3570095f5af77d20188ea45d45da216a31e52d.jpg",
				"match_live_room": false,
				"match_info": null,
				"duration": 0,
				"up_name": "",
				"pub_date": "",
				"gather_id": 0,
				"sub_name": ""
			}
		],
		"view_pattern": 1,
		"gather_room_list": []
	}
}
```

</details>

#### 天选时刻合法检查 (ANCHOR_LOT_CHECKSTATUS)

**示例:**

<details>
<summary>查看响应示例:</summary>

```json
{
  "cmd": "ANCHOR_LOT_CHECKSTATUS",
  "data": {
    "id": 2553641,
    "reject_reason": "由于奖品格式不合格,请仔细检查后再提交哦",
    "status": 5,
    "uid": 1827176970
  }
}
```

</details>

#### 天选时刻开始 (ANCHOR_LOT_START)

**示例:**

<details>
<summary>查看响应示例:</summary>

```json
{
  "cmd": "ANCHOR_LOT_START",
  "data": {
    "asset_icon": "https://i0.hdslb.com/bfs/live/627ee2d9e71c682810e7dc4400d5ae2713442c02.png",
    "award_image": "",
    "award_name": "艺术头像绘制",
    "award_num": 1,
    "cur_gift_num": 0,
    "current_time": 1651037946,
    "danmu": "卡宝下午好",
    "gift_id": 3,
    "gift_name": "B坷垃",
    "gift_num": 1,
    "gift_price": 9900,
    "goaway_time": 180,
    "goods_id": 15,
    "id": 2553648,
    "is_broadcast": 1,
    "join_type": 1,
    "lot_status": 0,
    "max_time": 600,
    "require_text": "当前主播粉丝勋章至少1级",
    "require_type": 2,
    "require_value": 1,
    "room_id": 23614753,
    "send_gift_ensure": 0,
    "show_panel": 1,
    "start_dont_popup": 0,
    "status": 1,
    "time": 599,
    "url": "https://live.bilibili.com/p/html/live-lottery/anchor-join.html?is_live_half_webview=1&hybrid_biz=live-lottery-anchor&hybrid_half_ui=1,5,100p,100p,000000,0,30,0,0,1;2,5,100p,100p,000000,0,30,0,0,1;3,5,100p,100p,000000,0,30,0,0,1;4,5,100p,100p,000000,0,30,0,0,1;5,5,100p,100p,000000,0,30,0,0,1;6,5,100p,100p,000000,0,30,0,0,1;7,5,100p,100p,000000,0,30,0,0,1;8,5,100p,100p,000000,0,30,0,0,1",
    "web_url": "https://live.bilibili.com/p/html/live-lottery/anchor-join.html"
  }
}
```

</details>

#### 天选时刻结束 (ANCHOR_LOT_END)

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "ANCHOR_LOT_END",
  "data": {
    "id": 2553648
  }
}
```

</details>

#### 天选时刻中奖者 (ANCHOR_LOT_AWARD)

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "ANCHOR_LOT_AWARD",
  "data": {
    "award_dont_popup": 1,
    "award_image": "",
    "award_name": "艺术头像绘制",
    "award_num": 1,
    "award_users": [
      {
        "uid": 8318700,
        "uname": "桥下念喬",
        "face": "http://i0.hdslb.com/bfs/face/dfde2ffc6286c2c5189592cc84fd70bcf977b143.jpg",
        "level": 21,
        "color": 5805790
      }
    ],
    "id": 2553648,
    "lot_status": 2,
    "url": "https://live.bilibili.com/p/html/live-lottery/anchor-join.html?is_live_half_webview=1&hybrid_biz=live-lottery-anchor&hybrid_half_ui=1,5,100p,100p,000000,0,30,0,0,1;2,5,100p,100p,000000,0,30,0,0,1;3,5,100p,100p,000000,0,30,0,0,1;4,5,100p,100p,000000,0,30,0,0,1;5,5,100p,100p,000000,0,30,0,0,1;6,5,100p,100p,000000,0,30,0,0,1;7,5,100p,100p,000000,0,30,0,0,1;8,5,100p,100p,000000,0,30,0,0,1",
    "web_url": "https://live.bilibili.com/p/html/live-lottery/anchor-join.html"
  }
}
```

</details>

#### 天选时刻通知 (ANCHOR_LOT_NOTICE)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `ANCHOR_LOT_NOTICE` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| notice\_type | num | 通知卡片类型? |  |
| lottery\_card | obj | 通知卡片内容 |  |

`data.lottery_card` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| show\_time | num | 显示时间? |  |
| button\_text | str | 按钮文本? |  |
| icon | str | 图标 |  |
| title | str | 标题? |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"data": {
		"notice_type": 1,
		"lottery_card": {
			"show_time": 30,
			"button_text": "去发奖",
			"icon": "https://i0.hdslb.com/bfs/live/95970204111233f181fc28622502aaf1a9359b9a.png",
			"title": "发天选有助于人气累积"
		}
	},
	"cmd": "ANCHOR_LOT_NOTICE"
}
```

</details>

#### 语音连麦开关 (VOICE_JOIN_SWITCH)

在直播姬开关连麦功能时下发。

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `VOICE_JOIN_SWITCH` |  |
| data | obj | 信息本体 |  |
| room_id | num | 直播间id |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| room_id | num | 直播间id |  |
| room_status | num | 连麦开关状态 |  |
| root_status | num | 连麦开关状态 |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

开:

```json
{
	"cmd": "VOICE_JOIN_SWITCH",
	"data": {
		"room_id": 1899237171,
		"room_status": 1,
		"root_status": 1
	},
	"room_id": 1899237171
}
```

关:

```json
{
	"cmd": "VOICE_JOIN_SWITCH",
	"data": {
		"room_id": 1899237171,
		"room_status": 0,
		"root_status": 0
	},
	"room_id": 1899237171
}
```

</details>

#### 邀请视频连线 (VIDEO_CONNECTION_JOIN_START)

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "VIDEO_CONNECTION_JOIN_START",
  "data": {
    "status": 1,
    "invited_uid": 351686170,
    "channel_id": "72057594038132685",
    "invited_uname": "小妹睡不醒",
    "invited_face": "http://i1.hdslb.com/bfs/face/828562203e620f711fb4c786f05996357857ed4d.jpg",
    "start_at": 1651237440,
    "current_time": 1651237440
  },
  "roomid": 12401854
}
```

</details>

#### 视频连线信息 (VIDEO_CONNECTION_MSG)

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "VIDEO_CONNECTION_MSG",
  "data": {
    "channel_id": "72057594038132685",
    "current_time": 1651237440,
    "dmscore": 4,
    "toast": "主播发起了视频连线"
  }
}
```

</details>

#### 结束视频连线 (VIDEO_CONNECTION_JOIN_END)

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "VIDEO_CONNECTION_JOIN_END",
  "data": {
    "channel_id": "72057594038132685",
    "start_at": 1651238384,
    "toast": "主播 结束了与小妹睡不醒的连线.",
    "current_time": 1651238384
  },
  "roomid": 22195814
}
```

</details>

#### 重连直播间? (REENTER_LIVE_ROOM)

<details>
<summary>查看消息示例:</summary>

```json
{
  "cmd": "REENTER_LIVE_ROOM",
  "data": {
    "room_id": 22195814,
    "request_random_sec_range": 10,
    "reason": 1
  },
  "roomid": 22195814
}
```

</details>

#### 连线礼物信息 (UNIVERSAL_EVENT_GIFT)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `UNIVERSAL_EVENT_GIFT` |  |
| data | obj | 信息本体 |  |
| msg_id | str |  |  |
| p_is_ack | bool |  |  |
| p_msg_type | num |  |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| anchor_uid | num | 主播uid |  |
| info | obj | 连线信息 |  |
| room_id | num | 直播间id |  |

`data.info` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| biz_session_id | str | 连线会话id? |  |
| business_label | str |  |  |
| interact_channel_id | str | 频道id? |  |
| interact_connect_type | num |  |  |
| interact_max_users | num | 最大连线数? |  |
| interact_mode | obj |  |  |
| interact_template | obj | 展示模板 |  |
| invoking_time | num |  |  |
| members | arr | 连线成员 | 参见 `UNIVERSAL_EVENT_GIFT_V2` 的 `data.members` ，缺少部分字段 |
| members_version | num |  |  |
| multi_conn_info | obj | 连线信息 |  |
| room_owner | num | 发起者uid |  |
| room_start_at | str |  |  |
| room_start_at_ts | num |  |  |
| room_status | num |  |  |
| session_start_at | str |  |  |
| session_start_at_ts | num |  |  |
| session_status | num |  |  |
| system_time_unix | num | 服务器时间戳 | Unix 秒时间戳 |
| trace_id | str |  |  |
| version | num | 数据版本 | Unix 毫秒时间戳 |

`data.info.interact_mode` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| apply_timeout | num | 超时? |  |
| interact_mode_type | num |  |  |
| invite_timeout | num | 邀请超时? |  |
| join_types | arr | 加入类型? | 数字数组 |
| position_mode | num |  |  |

`data.info.interact_template` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| is_variable_layout | bool | 布局是否可变? |  |
| layout_data | obj | 布局信息 |  |
| layout_id | str | 布局id |  |
| layout_list | null | ? |  |
| show_interact_ui | bool | 显示交互UI? |  |
| template_id | str | 模板id? |  |

`data.info.interact_template.layout_data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| best_area_show_pos | num |  |  |
| cells | arr | 具体布局信息 |  |
| default_cell | obj |  |  |
| height | num |  |  |
| rtc_resolution | obj |  |  |
| width | num |  |  |

`data.info.interact_template.layout_data.cells` 数组中对象:

与 `data.info.interact_template.layout_data.default_cell` 对象相同

`data.info.interact_template.layout_data.default_cell` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| can_zoom | num |  |  |
| default_open | num |  |  |
| height | num |  |  |
| mobile_avatar_size | num |  |  |
| mobile_font_size | num |  |  |
| pc_web_avatar_size | num |  |  |
| pc_web_font_size | num |  |  |
| position | num | 定位? |  |
| width | num |  |  |
| x | num |  |  |
| y | num |  |  |
| z_index | num |  |  |

`data.info.interact_template.layout_data.rtc_resolution` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code_rate_init | num |  |  |
| code_rate_max | num |  |  |
| code_rate_min | num |  |  |
| horizontal_height | num |  |  |
| horizontal_width | num |  |  |
| vertical_height | num |  |  |
| vertical_width | num |  |  |

`data.info.members` 数组中对象:

参见 [`UNIVERSAL_EVENT_GIFT_V2`](#连线礼物信息v2-universal_event_gift_v2) 的 `data.members` 数组中对象，本cmd缺少部分字段。

`data.info.multi_conn_info` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| room_owner | num | 发起人uid |  |
| scores | arr | 礼物信息 |  |
| show_score | num | 是否显示? |  |

`data.info.multi_conn_info.scores` 数组中对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| price | num | 礼物累计价值 | CNY × 100 |
| price_text | str | 礼物累计价值文本 |  |
| uid | num | 对应主播uid |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "UNIVERSAL_EVENT_GIFT",
	"data": {
		"anchor_uid": 1950658,
		"info": {
			"biz_session_id": "17545643420522077733317",
			"business_label": "universal_multi_conn",
			"interact_channel_id": "4679025140177408",
			"interact_connect_type": 0,
			"interact_max_users": 9,
			"interact_mode": {
				"apply_timeout": 20,
				"interact_mode_type": 0,
				"invite_timeout": 30,
				"join_types": [
					1,
					2
				],
				"position_mode": 0
			},
			"interact_template": {
				"is_variable_layout": true,
				"layout_data": {
					"best_area_show_pos": 0,
					"cells": [
						{
							"can_zoom": 2,
							"default_open": 0,
							"height": 48,
							"mobile_avatar_size": 64,
							"mobile_font_size": 0,
							"pc_web_avatar_size": 112,
							"pc_web_font_size": 0,
							"position": 0,
							"width": 30,
							"x": 0,
							"y": 0,
							"z_index": 0
						},
						{
							"can_zoom": 1,
							"default_open": 0,
							"height": 0,
							"mobile_avatar_size": 0,
							"mobile_font_size": 0,
							"pc_web_avatar_size": 0,
							"pc_web_font_size": 0,
							"position": 1,
							"width": 0,
							"x": 30,
							"y": 0,
							"z_index": 0
						},
						{
							"can_zoom": 1,
							"default_open": 0,
							"height": 0,
							"mobile_avatar_size": 0,
							"mobile_font_size": 0,
							"pc_web_avatar_size": 0,
							"pc_web_font_size": 0,
							"position": 2,
							"width": 0,
							"x": 45,
							"y": 0,
							"z_index": 0
						},
						{
							"can_zoom": 1,
							"default_open": 0,
							"height": 0,
							"mobile_avatar_size": 0,
							"mobile_font_size": 0,
							"pc_web_avatar_size": 0,
							"pc_web_font_size": 0,
							"position": 3,
							"width": 0,
							"x": 30,
							"y": 16,
							"z_index": 0
						},
						{
							"can_zoom": 1,
							"default_open": 0,
							"height": 0,
							"mobile_avatar_size": 0,
							"mobile_font_size": 0,
							"pc_web_avatar_size": 0,
							"pc_web_font_size": 0,
							"position": 4,
							"width": 0,
							"x": 45,
							"y": 16,
							"z_index": 0
						},
						{
							"can_zoom": 1,
							"default_open": 0,
							"height": 0,
							"mobile_avatar_size": 0,
							"mobile_font_size": 0,
							"pc_web_avatar_size": 0,
							"pc_web_font_size": 0,
							"position": 5,
							"width": 0,
							"x": 30,
							"y": 32,
							"z_index": 0
						},
						{
							"can_zoom": 1,
							"default_open": 0,
							"height": 0,
							"mobile_avatar_size": 0,
							"mobile_font_size": 0,
							"pc_web_avatar_size": 0,
							"pc_web_font_size": 0,
							"position": 6,
							"width": 0,
							"x": 45,
							"y": 32,
							"z_index": 0
						}
					],
					"default_cell": {
						"can_zoom": 0,
						"default_open": 1,
						"height": 16,
						"mobile_avatar_size": 40,
						"mobile_font_size": 10,
						"pc_web_avatar_size": 72,
						"pc_web_font_size": 14,
						"position": 0,
						"width": 15,
						"x": 0,
						"y": 0,
						"z_index": 0
					},
					"height": 48,
					"rtc_resolution": {
						"code_rate_init": 500,
						"code_rate_max": 700,
						"code_rate_min": 375,
						"horizontal_height": 400,
						"horizontal_width": 500,
						"vertical_height": 576,
						"vertical_width": 360
					},
					"width": 60
				},
				"layout_id": "left1_right6",
				"layout_list": null,
				"show_interact_ui": true,
				"template_id": "multi_conn_grid"
			},
			"invoking_time": 1,
			"members": [
				{
					"face": "https://i1.hdslb.com/bfs/face/2ddb513f600c203f21aefb9725ab0eb84f093943.jpg",
					"gender": 0,
					"join_time": 1754564992,
					"link_id": "44479117",
					"position": 0,
					"room_id": 41682,
					"uid": 1950658,
					"uname": "早稻叽"
				},
				{
					"face": "https://i1.hdslb.com/bfs/face/5958bb6814f25d832775ca37043d38f893b4a478.jpg",
					"gender": -1,
					"join_time": 1754564347,
					"link_id": "44478459",
					"position": 1,
					"room_id": 26376408,
					"uid": 2077733317,
					"uname": "烛不遥"
				},
				{
					"face": "https://i0.hdslb.com/bfs/face/7c862b4ad1a29cdd2b849bcea3c3812b67770d21.jpg",
					"gender": 0,
					"join_time": 1754564347,
					"link_id": "44478460",
					"position": 2,
					"room_id": 1774970222,
					"uid": 1035559935,
					"uname": "新砂Athia"
				},
				{
					"face": "https://i0.hdslb.com/bfs/face/81c1f45b45958c19523bb7cbae7fc3fa99b4aae1.jpg",
					"gender": -1,
					"join_time": 1754564361,
					"link_id": "44478500",
					"position": 3,
					"room_id": 31361500,
					"uid": 3546581471070432,
					"uname": "颂温暖_Swanna"
				},
				{
					"face": "https://i2.hdslb.com/bfs/face/eceb8fa58c41b7cd733bebafcd7c1f3e33b37b07.jpg",
					"gender": 0,
					"join_time": 1754564385,
					"link_id": "44478528",
					"position": 4,
					"room_id": 1937830041,
					"uid": 3546768203582225,
					"uname": "暴躁小辣jo"
				},
				{
					"face": "https://i0.hdslb.com/bfs/face/12c1cd0df2ee6e6bb09b279b0553cdc9ae4af4f0.jpg",
					"gender": -1,
					"join_time": 1754564774,
					"link_id": "44478875",
					"position": 5,
					"room_id": 23090250,
					"uid": 475912512,
					"uname": "抵抗Resistance"
				}
			],
			"members_version": 3974722551,
			"multi_conn_info": {
				"room_owner": 2077733317,
				"scores": [
					{
						"price": 82900,
						"price_text": "829",
						"uid": 1950658
					},
					{
						"price": 21200,
						"price_text": "212",
						"uid": 2077733317
					},
					{
						"price": 30400,
						"price_text": "304",
						"uid": 1035559935
					},
					{
						"price": 675600,
						"price_text": "6756",
						"uid": 3546581471070432
					},
					{
						"price": 96800,
						"price_text": "968",
						"uid": 3546768203582225
					},
					{
						"price": 79200,
						"price_text": "792",
						"uid": 475912512
					}
				],
				"show_score": 1
			},
			"room_owner": 2077733317,
			"room_start_at": "",
			"room_start_at_ts": 0,
			"room_status": 1,
			"session_start_at": "",
			"session_start_at_ts": 0,
			"session_status": 1,
			"system_time_unix": 1754568295,
			"trace_id": "",
			"version": 1754568295428
		},
		"room_id": 41682
	},
	"msg_id": "34610565842749442:1000:1000",
	"p_is_ack": true,
	"p_msg_type": 1,
	"send_time": 1754568295441
}
```

</details>

#### 连线礼物信息V2 (UNIVERSAL_EVENT_GIFT_V2)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `UNIVERSAL_EVENT_GIFT_V2` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| biz_session_id | str | 连线会话id? |  |
| interact_channel_id | str | 频道id? |  |
| interact_template | obj | 交互模板信息 |  |
| members | arr | 连线成员 |  |
| stream_control | null |  |  |
| version | num | 数据版本 | Unix 毫秒时间戳 |
| session_status | num |  |  |
| business_label | str |  |  |
| invoking_time | num |  |  |
| members_version | num |  |  |
| room_status | num |  |  |
| system_time_unix | num | 服务器时间戳 | Unix 秒时间戳 |
| room_owner | num | 发起人uid |  |
| session_start_at | str | 会话开始时间 |  |
| session_start_at_ts | num | 会话经过时间 |  |
| room_start_at | str | 当前直播间加入会话时间 |  |
| room_start_at_ts | num | 当前直播间自加入会话开始经过的时间 |  |
| trace_id | str | 追踪id? |  |
| biz_extra_data | obj |  |  |
| channel_users | arr | 当前连线频道内uid列表 |  |

`data.interact_template` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| template_id | str | 模板id? |  |
| show_interact_ui | bool | 显示交互UI? |  |
| layout_id | str | 样式id? |  |

`data.members` 数组中对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| uid | num | 连线主播uid |  |
| uname | str | 连线主播名称 |  |
| face | str | 连线主播头像 |  |
| position | num | 位置? |  |
| join_time | num | 加入时间 | Unix 秒时间戳 |
| link_id | str |  |  |
| gender | num |  |  |
| room_id | num | 连线主播直播间id |  |
| fans_num | num |  |  |
| display_name | str | 显示名称 |  |
| biz_extra_data | obj |  |  |
| join_time_ts | num |  |  |

`data.members[i].biz_extra_data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| multi_conn | obj |  |  |

`data.members[i].biz_extra_data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| price | num | 礼物累计价值 | CNY × 100 |
| price_text | str | 礼物累计价值文本 |  |

`data.biz_extra_data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| multi_conn | obj |  |  |

`data.biz_extra_data.multi_conn` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| show_score | num |  |  |
| support_full_zoom | num |  |  |

`data.channel_users` 数组:

| 索引 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| 0 | num | 主播uid |  |
| … | num | 主播uid |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "UNIVERSAL_EVENT_GIFT_V2",
	"data": {
		"biz_session_id": "17545643420522077733317",
		"interact_channel_id": "4679025140177408",
		"interact_template": {
			"template_id": "multi_conn_grid",
			"show_interact_ui": true,
			"layout_id": "left1_right6"
		},
		"members": [
			{
				"uid": 1950658,
				"uname": "早稻叽",
				"face": "https://i1.hdslb.com/bfs/face/2ddb513f600c203f21aefb9725ab0eb84f093943.jpg",
				"position": 0,
				"join_time": 1754564992,
				"link_id": "44479117",
				"gender": 0,
				"room_id": 41682,
				"fans_num": 0,
				"display_name": "本房主播",
				"biz_extra_data": {
					"multi_conn": {
						"price": 82900,
						"price_text": "829"
					}
				},
				"join_time_ts": 0
			},
			{
				"uid": 2077733317,
				"uname": "烛不遥",
				"face": "https://i1.hdslb.com/bfs/face/5958bb6814f25d832775ca37043d38f893b4a478.jpg",
				"position": 1,
				"join_time": 1754564347,
				"link_id": "44478459",
				"gender": -1,
				"room_id": 26376408,
				"fans_num": 0,
				"display_name": "烛不遥",
				"biz_extra_data": {
					"multi_conn": {
						"price": 21200,
						"price_text": "212"
					}
				},
				"join_time_ts": 0
			},
			{
				"uid": 1035559935,
				"uname": "新砂Athia",
				"face": "https://i0.hdslb.com/bfs/face/7c862b4ad1a29cdd2b849bcea3c3812b67770d21.jpg",
				"position": 2,
				"join_time": 1754564347,
				"link_id": "44478460",
				"gender": 0,
				"room_id": 1774970222,
				"fans_num": 0,
				"display_name": "新砂Athia",
				"biz_extra_data": {
					"multi_conn": {
						"price": 30400,
						"price_text": "304"
					}
				},
				"join_time_ts": 0
			},
			{
				"uid": 3546581471070432,
				"uname": "颂温暖_Swanna",
				"face": "https://i0.hdslb.com/bfs/face/81c1f45b45958c19523bb7cbae7fc3fa99b4aae1.jpg",
				"position": 3,
				"join_time": 1754564361,
				"link_id": "44478500",
				"gender": -1,
				"room_id": 31361500,
				"fans_num": 0,
				"display_name": "颂温暖_Swanna",
				"biz_extra_data": {
					"multi_conn": {
						"price": 675600,
						"price_text": "6756"
					}
				},
				"join_time_ts": 0
			},
			{
				"uid": 3546768203582225,
				"uname": "暴躁小辣jo",
				"face": "https://i2.hdslb.com/bfs/face/eceb8fa58c41b7cd733bebafcd7c1f3e33b37b07.jpg",
				"position": 4,
				"join_time": 1754564385,
				"link_id": "44478528",
				"gender": 0,
				"room_id": 1937830041,
				"fans_num": 0,
				"display_name": "暴躁小辣jo",
				"biz_extra_data": {
					"multi_conn": {
						"price": 96800,
						"price_text": "968"
					}
				},
				"join_time_ts": 0
			},
			{
				"uid": 475912512,
				"uname": "抵抗Resistance",
				"face": "https://i0.hdslb.com/bfs/face/12c1cd0df2ee6e6bb09b279b0553cdc9ae4af4f0.jpg",
				"position": 5,
				"join_time": 1754564774,
				"link_id": "44478875",
				"gender": -1,
				"room_id": 23090250,
				"fans_num": 0,
				"display_name": "抵抗Resistance",
				"biz_extra_data": {
					"multi_conn": {
						"price": 79200,
						"price_text": "792"
					}
				},
				"join_time_ts": 0
			}
		],
		"stream_control": null,
		"version": 1754568295421,
		"session_status": 1,
		"business_label": "universal_multi_conn",
		"invoking_time": 2,
		"members_version": 1262102210,
		"room_status": 1,
		"system_time_unix": 1754568295,
		"room_owner": 2077733317,
		"session_start_at": "2025-08-07 18:59:06",
		"session_start_at_ts": 3949,
		"room_start_at": "2025-08-07 19:09:52",
		"room_start_at_ts": 3303,
		"trace_id": "55df19c042f09f5c625d7b8b60689496",
		"biz_extra_data": {
			"multi_conn": {
				"show_score": 1,
				"support_full_zoom": 2
			}
		},
		"channel_users": [
			1950658,
			2077733317,
			1035559935,
			3546581471070432,
			3546768203582225,
			475912512
		]
	}
}
```

</details>

#### ??? (PLAY_TOGETHER)

**示例:**

<details>
<summary>查看消息示例:</summary>

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

#### ??? (PLAYTOGETHER_ICON_CHANGE)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `PLAYTOGETHER_ICON_CHANGE` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| area_id | num | 直播分区id |  |
| has_perm | num |  |  |
| show_count | num |  |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "PLAYTOGETHER_ICON_CHANGE",
	"data": {
		"area_id": 40,
		"has_perm": 0,
		"show_count": 0
	}
}
```

</details>

#### 直播小助手? (ANCHOR_BROADCAST)

第一次达到了某种条件下发。

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `ANCHOR_BROADCAST` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| sender | str | 标题? | `直播小助手` |
| msg | str | 提示消息 |  |
| platform | num | 平台标识? | `0` |
| button\_info | obj | 按钮信息? |  |
| milestone\_type | str | 里程碑类型? | `session_livetime`，`first_share`，`session_share` |
| milestone\_value | num | 里程值? |  |
| milestone\_index | num | 里程碑类型的索引? | `1`，`5`，`6`，`7` |

`data.button_info` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| button\_name | str |  |  |
| blink_button_type | str |  |  |
| blink_button_target | str |  |  |
| blink_button_extra | str |  |  |
| blink_button_label | num |  |  |
| hime_button_type | str |  |  |
| hime_button_target | str |  |  |
| hime_button_extra | str |  |  |
| hime\_button\_h5\_type | str |  |  |
| hime_button_label | num |  |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "ANCHOR_BROADCAST",
	"data": {
		"sender": "直播小助手",
		"msg": "恭喜你，开播时长达到180分钟！",
		"platform": 0,
		"button_info": {
			"button_name": "",
			"blink_button_type": "",
			"blink_button_target": "",
			"blink_button_extra": "",
			"blink_button_label": 0,
			"hime_button_type": "",
			"hime_button_target": "",
			"hime_button_extra": "",
			"hime_button_h5_type": "",
			"hime_button_label": 0
		},
		"milestone_type": "session_livetime",
		"milestone_value": 10800,
		"milestone_index": 6
	}
}
```

</details>

#### 直播小助手? (ANCHOR_HELPER_DANMU)

几乎与`ANCHOR_BROADCAST`一同下发。

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `ANCHOR_HELPER_DANMU` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| sender | str | 标题? | `直播小助手` |
| msg | str | 提示消息 |  |
| platform | num | 平台标识? |  |
| button\_platform | num |  |  |
| button\_name | str |  |  |
| button\_target | str |  |  |
| button\_label | num |  |  |
| report\_type | str | 上报类型? |  |
| report | str |  |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "ANCHOR_HELPER_DANMU",
	"data": {
		"sender": "直播小助手",
		"msg": "恭喜你，开播时长达到150分钟！",
		"platform": 3,
		"button_platform": 0,
		"button_name": "",
		"button_target": "",
		"button_label": 0,
		"report_type": "milestone",
		"report": "session_livetime:5:9000"
	}
}
```

</details>

#### 直播进度条节点标签 (PLAY_TAG)

注: 在特定直播间的特定情况下发。

例如: 在[直播间6](https://live.bilibili.com/6)内，有人打出了某种操作。

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `PLAY_TAG` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| tag\_id | num | 标签 ID |  |
| pic | str | 标签图标 | 通常显示于进度条之上 |
| timestamp | num | UNIX 秒时间戳 |  |
| type | str | 操作类型 | `ADD`:添加 |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "PLAY_TAG",
	"data": {
		"tag_id": 367751,
		"pic": "https://i0.hdslb.com/bfs/live/0e04525fee9ea6ea6973e8bd1116d9f1f6501d37.png",
		"timestamp": 1740319807,
		"type": "ADD"
	}
}
```

</details>

#### 冲榜提示卡 (POPULAR_RANK_GUIDE_CARD)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `POPULAR_RANK_GUIDE_CARD` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| ruid | num | 主播uid |  |
| title | str | 提示标题 |  |
| sub_text | str | 提示副标题 |  |
| icon_img | str | 提示卡图标 | 主播头像 |
| gift_id | num | 礼物id |  |
| countdown | num | 显示时间 |  |
| popup_title | str | 提示文本 |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "POPULAR_RANK_GUIDE_CARD",
	"data": {
		"ruid": 194484313,
		"title": "目前人气榜NO.1",
		"sub_text": "帮我投喂人气票冲榜吧~",
		"icon_img": "https://i1.hdslb.com/bfs/face/84a861facfa041b46f7a30897e9ed3f2e05e0519.jpg",
		"gift_id": 33988,
		"countdown": 10,
		"popup_title": "投喂一个人气票帮助主播打榜~"
	}
}
```

</details>

#### ??? (RECALL_DANMU_MSG)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `RECALL_DANMU_MSG` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| recall_type | num | 类型? | `2` |
| target_id | num |  |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "RECALL_DANMU_MSG",
	"data": {
		"recall_type": 2,
		"target_id": 525503743
	}
}
```

</details>

#### 直播剪辑 (OTHER_SLICE_LOADING_RESULT)

注: 点击剪辑按钮后的几秒内下发，目前只有网页端有这个按钮，且部分直播间可用(2025-02-20记录)。

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `OTHER_SLICE_LOADING_RESULT` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| data | array | 剪辑片段数据 |  |
| live_key | str | 标记直播场次的key | 未验证真实性 |

`data.data` 数组:

| 索引 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| 0 | obj | 单个片段数据 |  |

`data.data[i]` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| start\_time | num | 片段开始时间时间戳 | UNIX 秒时间戳 |
| end\_time | num | 片段结束时间时间戳 | UNIX 秒时间戳 |
| stream | str | 从开始时间到结束时间内的直播视频片段 | 需要使用浏览器用户代理字符串，特别是m3u文件内的视频链接 |
| type | num | 类型? |  |
| ban\_ec | bool | ? |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "OTHER_SLICE_LOADING_RESULT",
	"data": {
		"data": [
			{
				"start_time": 1740037738,
				"end_time": 1740038916,
				"stream": "https://jssz-boss.hdslb.com/live2arc_anchor_video/vod_579433011406177273.m3u?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=y4zI4XTQzlOkmSKg%2F20250220%2Fjssz%2Fs3%2Faws4_request&X-Amz-Date=20250220T080858Z&X-Amz-Expires=7200&X-Amz-SignedHeaders=host&X-Amz-Signature=52be315e8e7def8e11f86d3c6d4952362725c3c087a433780926bc0e8c88c2e1",
				"type": 0,
				"ban_ec": false
			}
		],
		"live_key": "579433011406177273"
	}
}
```

</details>

#### 有人购买主播推荐商品 (GOTO_BUY_FLOW)

用户昵称会打星号(`*`)显示。

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `GOTO_BUY_FLOW` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| text | str | 去购买提示 |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "GOTO_BUY_FLOW",
	"data": {
		"text": "回**正在去买"
	}
}
```

</details>

#### 热抢提示 (HOT_BUY_NUM)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `HOT_BUY_NUM` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| num | num | 热抢数量 |  |
| goods_id | str | 商品id |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "HOT_BUY_NUM",
	"data": {
		"num": 81,
		"goods_id": "1817875296579985408"
	}
}
```

</details>

#### 荣耀等级通知 (WEALTH_NOTIFY)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `WEALTH_NOTIFY` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| flag | num | 标志? |  |
| info | obj | 信息 |  |

`data.info`:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| effect_key | num | (?) |  |
| has_items_changed | num | (?) |  |
| level | num | 达到的等级 |  |
| send_time | num | 发送时间 | UNIX 毫秒时间戳 |
| status | num | 状态? |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "WEALTH_NOTIFY",
	"data": {
		"flag": 3,
		"info": {
			"effect_key": 1073,
			"has_items_changed": 1,
			"level": 5,
			"send_time": 1743337942833,
			"status": 1
		}
	}
}
```

</details>

#### ??? (USER_PANEL_RED_ALARM)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `USER_PANEL_RED_ALARM` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| module | str | (?) |  |
| alarm_num | num | (?) |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "USER_PANEL_RED_ALARM",
	"data": {
		"module": "user_head_dot",
		"alarm_num": 1
	}
}
```

</details>

#### ??? (GIFT_BOARD_RED_DOT)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `GIFT_BOARD_RED_DOT` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| categoryL1 | str | (?) | 作用尚不明确 |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "GIFT_BOARD_RED_DOT",
	"data": {
		"categoryL1": "3"
	}
}
```

</details>

#### 粉丝勋章更新 (MESSAGEBOX_USER_MEDAL_CHANGE)

升级或点亮时下发。

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `MESSAGEBOX_USER_MEDAL_CHANGE` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| type | num | 提示类型 | 1：升级<br />2：点亮 |
| uid | num | 用户mid |  |
| up_uid | num | 主播mid |  |
| medal_level | num | 粉丝勋章等级 |  |
| medal_name | str | 粉丝勋章名称 |  |
| medal_color_start | num | 十进制粉丝勋章起始颜色 |  |
| medal_color_end | num | 十进制粉丝勋章结束颜色 |  |
| medal_color_border | num | 十进制粉丝勋章边框颜色 |  |
| is_lighted | num | 是否点亮? | 1：点亮? |
| is_lighted_v2 | bool | 是否点亮v2? |  |
| guard_level | num | 大航海等级 |  |
| unlock | num | (?) |  |
| unlock_level | num | (?) |  |
| multi_unlock_level | str | (?) |  |
| upper_bound_content | str | 提示内容 |  |
| uinfo_medal | obj | 粉丝勋章信息 | 参见 [指定用户的所有粉丝勋章信息](../user/medals.md#指定用户的所有粉丝勋章信息) `data.list[n].uinfo_medal` 对象 |
| effect_id | num | (?) |  |

`data.uinfo_medal` 对象:

参见 [指定用户的所有粉丝勋章信息](../user/medals.md#指定用户的所有粉丝勋章信息) json回复的 `data.list[n].uinfo_medal` 对象。

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "MESSAGEBOX_USER_MEDAL_CHANGE",
	"data": {
		"type": 2,
		"uid": 438160221,
		"up_uid": 407045223,
		"medal_level": 3,
		"medal_name": "研究猿",
		"medal_color_start": 6067854,
		"medal_color_end": 6067854,
		"medal_color_border": 6067854,
		"is_lighted": 1,
		"is_lighted_v2": true,
		"guard_level": 0,
		"unlock": 0,
		"unlock_level": 0,
		"multi_unlock_level": "",
		"upper_bound_content": "",
		"uinfo_medal": {
			"name": "研究猿",
			"level": 3,
			"color_start": 6067854,
			"color_end": 6067854,
			"color_border": 6067854,
			"color": 0,
			"id": 0,
			"typ": 0,
			"is_light": 1,
			"ruid": 407045223,
			"guard_level": 0,
			"score": 0,
			"guard_icon": "",
			"honor_icon": "",
			"v2_medal_color_start": "#5762A799",
			"v2_medal_color_end": "#5762A799",
			"v2_medal_color_border": "#5762A799",
			"v2_medal_color_text": "#FFFFFFFF",
			"v2_medal_color_level": "#000B7099",
			"user_receive_count": 0
		},
		"effect_id": 1861
	}
}
```

</details>

#### 获得粉丝勋章 (MESSAGEBOX_USER_GAIN_MEDAL)

获得时下发。

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `MESSAGEBOX_USER_GAIN_MEDAL` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| type | num | 类型 | 0 |
| uid | num | 用户mid |  |
| up_uid | num | 主播uid |  |
| medal_id | num | 勋章id |  |
| medal_name | str | 勋章名称 |  |
| medal_level | num | 勋章等级 |  |
| medal_color | num | 勋章颜色 |  |
| medal_color_start | num | 十进制勋章起始颜色 |  |
| medal_color_end | num | 十进制勋章结束颜色 |  |
| medal_color_border | num | 十进制勋章边框颜色 |  |
| msg_title | str | 消息标题 |  |
| msg_content | str | 消息内容 |  |
| normal_color | num | (?) |  |
| highlight_color | num | (?) |  |
| intimacy | num | 当前亲密度 |  |
| next_intimacy | num | 升级所需亲密度 |  |
| today_feed | num | 今日亲密度 |  |
| day_limit | num | 今日亲密度上限 |  |
| is_wear | num | (?) |  |
| guard_level | num | 大航海等级 |  |
| is_received | num | (?) |  |
| is_lighted | num | 是否点亮? | 1：点亮? |
| is_lighted_v2 | bool | 是否点亮v2? |  |
| toast | str | 提示 |  |
| fan_name | str | 粉丝名称 |  |
| uinfo_medal | obj | 粉丝勋章信息 | 参见 [指定用户的所有粉丝勋章信息](../user/medals.md#指定用户的所有粉丝勋章信息) `data.list[n].uinfo_medal` 对象 |

`data.uinfo_medal` 对象:

参见 [指定用户的所有粉丝勋章信息](../user/medals.md#指定用户的所有粉丝勋章信息) json回复的 `data.list[n].uinfo_medal` 对象。

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "MESSAGEBOX_USER_GAIN_MEDAL",
	"data": {
		"type": 0,
		"uid": 438160221,
		"up_uid": 11602644,
		"medal_id": 19252517,
		"medal_name": "广药",
		"medal_level": 1,
		"medal_color": 6067854,
		"medal_color_start": 6067854,
		"medal_color_end": 6067854,
		"medal_color_border": 6067854,
		"msg_title": "恭喜你获得【WuGuangYao】的粉丝勋章~",
		"msg_content": "获得100点亲密度\n你的粉丝勋章达到1级",
		"normal_color": 7697781,
		"highlight_color": 16478873,
		"intimacy": 100,
		"next_intimacy": 201,
		"today_feed": 100,
		"day_limit": 2000,
		"is_wear": 0,
		"guard_level": 0,
		"is_received": 1,
		"is_lighted": 1,
		"is_lighted_v2": true,
		"toast": "成功入团并关注主播，得1级大礼包",
		"fan_name": "weatfe",
		"uinfo_medal": {
			"name": "广药",
			"level": 1,
			"color_start": 6067854,
			"color_end": 6067854,
			"color_border": 6067854,
			"color": 6067854,
			"id": 19252517,
			"typ": 0,
			"is_light": 1,
			"ruid": 11602644,
			"guard_level": 0,
			"score": 0,
			"guard_icon": "",
			"honor_icon": "",
			"v2_medal_color_start": "#5762A799",
			"v2_medal_color_end": "#5762A799",
			"v2_medal_color_border": "#5762A799",
			"v2_medal_color_text": "#FFFFFFFF",
			"v2_medal_color_level": "#000B7099",
			"user_receive_count": 0
		}
	}
}
```

</details>

#### 粉丝团戳一戳礼物通知 (FANS_CLUB_POKE_GIFT_NOTICE)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `FANS_CLUB_POKE_GIFT_NOTICE` |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| icon | str | 图标 |  |
| uface | str | 头像 |  |
| bg_img_url | str | 背景图片 |  |
| text | str | 提示文本 |  |
| highlight_text | str | 高亮文本? |  |
| button_text | str | 按钮文本 |  |
| display_duration | num | 显示时间? |  |
| room_id | num | 房间号 |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "FANS_CLUB_POKE_GIFT_NOTICE",
	"data": {
		"icon": "https://i0.hdslb.com/bfs/live/37a2fe03f2af95928c67cbac889e10dab6f7d42a.png",
		"uface": "https://i0.hdslb.com/bfs/face/member/noface.jpg",
		"bg_img_url": "https://i0.hdslb.com/bfs/live/fbe99002b5914157d783f8e07f021e2fd6ba5c1b.png",
		"text": "主播戳了戳你~投喂礼物获5倍亲密度加成",
		"highlight_text": "5倍亲密度加成",
		"button_text": "去投喂",
		"display_duration": 8,
		"room_id": 1899237171
	}
}
```

</details>

#### ??? (master_qn_strategy_chg)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `master_qn_strategy_chg` |  |
| data | str | 信息本体 | JSON文本 |

`data` JSON解析后对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| mtime | num | (?) | Unix秒时间戳 |
| scatter | arr | (?) |  |

**示例:**

<details>
<summary>查看消息示例:</summary>

```json
{
	"cmd": "master_qn_strategy_chg",
	"data": "{\"mtime\":1744380444,\"scatter\":[0,300]}"
}
```

</details>
