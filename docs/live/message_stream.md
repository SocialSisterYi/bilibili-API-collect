# 直播间信息流

## 获取信息流认证秘钥

> https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo

*请求方法: GET*

**URL参数：**

| 参数名 | 类型 | 内容         | 必要性 | 备注 |
| ------ | ---- | ------------ | ------ | ---- |
| id     | num  | 直播间真实id | 必要   |      |

**JSON回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0: 成功<br />65530: token 错误 (登录错误)<br />1: 错误<br />60009: 分区不存在<br />**（其他错误码有待补充）** |
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

获得直播间 `14047` 的信息流认证秘钥

```shell
curl -G 'https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo' \
--url-query 'id=14047'
```

<details>
<summary>查看响应示例:</summary>

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
    "token": "IFfrzJxUd-K6mBPLGCpu-Z9QAz1V3KzIxde_-tCzvah05fYgfXjBWyuqRywF8Ov2w-MGQWt7l80pLiZEsfx3OPEDsXSRaJlzihV0hTXYwkiJvRmzMH3JjfAjdzlvI8sytUCrIbezBgbr_grGPd4ENTEknvu165L-ocW_cyql1e-L_EE=",
    "host_list": [
      {
        "host": "hw-sg-live-comet-02.chat.bilibili.com",
        "port": 2243,
        "wss_port": 443,
        "ws_port": 2244
      },
      {
        "host": "hw-sg-live-comet-01.chat.bilibili.com",
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

数据包为 MQ (Message Queue, 消息队列) 使用 WebSocket 或 TCP 连接作为通道, 具体格式为 头部数据 + 正文数据

**注: 特别的**, WS 与 WSS 连接地址带有路径 `/sub`, 如 `wss://broadcastlv.chat.bilibili.com:443/sub`.

**再注:** B 站更新了隐私政策, 连接建立 5 分钟左右, 若该连接认证时传入信息来自未登录用户, 会提示 `为保护用户隐私，未注册登陆用户将无法查看他人昵称`, 随后所有发送弹幕的用户 mid 都为 `0`, 用户名部分也使用 `*` 保护, 参见 [#732](https://github.com/SocialSisterYi/bilibili-API-collect/issues/732)

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

`info[0[[15].extra` 表示的对象:

见下方 JSONC

```json
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

#### 连续弹幕消息 (DM_INTERACTION)

注: 连续多条相同弹幕时触发

**JSON正文:**

根对象:

| 字段 | 类型 | 内容             | 备注 |
| ---- | ---- | ---------------- | ---- |
| cmd  | str  | `DM_INTERACTION` |      |
| data | obj  | 信息本体         |      |

`data` 对象:

| 字段   | 类型 | 内容     | 备注 |
| ------ | ---- | -------- | ---- |
| id     | num  | 事件 ID  |      |
| status | num  | 状态     |      |
| type   | num  | 事件类型 |      |
| data   | str  | 事件数据 |      |

`data.data` 对象:

| 字段                 | 类型  | 内容                 | 备注 |
| -------------------- | ----- | -------------------- | ---- |
| combo                | array | 连续发送弹幕事件信息 |      |
| merge_interval       | num   | 合并弹幕时间间隔     |      |
| card_appear_interval | num   | 弹窗出现时间间隔     |      |
| send_interval        | num   | 发送时间间隔         |      |

`data.data.combo[n]` 对象:

| 字段          | 类型 | 内容           | 备注          |
| ------------- | ---- | -------------- | ------------- |
| id            | num  | 标识 ID        |               |
| status        | num  | 状态           |               |
| content       | str  | 重复的弹幕内容 |               |
| cnt           | num  | 重复数量       |               |
| guide         | str  | 标题词         | "他们都在说:" |
| left_duration | num  | 左移时长       |               |
| fade_duration | num  | 淡化时长       |               |

**示例:**

<details>
<summary>查看正文示例:</summary>

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

</details>

#### 进场或关注消息 (INTERACT_WORD)

注: 有用户进入直播间或关注主播时触发

**JSON消息:**

根对象:

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| cmd  | str  | `INTERACT_WORD`        |  |
| data | obj  | 进入直播间的用户的信息 |  |

`data` 对象:

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
| name | str | 通知名 | |
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
| round | num | 轮播状态:<br/>1正在轮播<br/>0未轮播 | |
| roomid | num | 直播间ID | 未知是真实ID还是短号 | |

**示例:**

<details>
<summary>查看消息示例:</summary>
  
```json
{
  "cmd": "PREPARING",
  "round": 1,
  "roomid": "8618057"
}
```

</details>

#### 直播开始 (LIVE)

**JSON消息:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| cmd | str | `LIVE` |  |
| live_key | str | ? |  |
| voice_background | str | ? |  |
| sub_session_key | str | ? |  |
| live_platform | str | 开播平台? |  |
| live_model | num | ? |  |
| live_time | num | 开播时间 | UNIX 秒级时间戳 |
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

#### 直播间高能榜 (ONLINE_RANK_V2)

注: 直播间高能用户数据刷新

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
| rank_type | str | 待调查 | |

`data.list[n]` 对象:

| 字段 | 类型 | 内容   | 备注      |
| ---- | ---- | ------ | --------- |
| uid | num | 用户 mid | |
| face | str | 用户头像 URL | |
| score | str | 该用户的贡献值 | |
| uname | str | 用户名称 | |
| rank | num | 该用户在高能榜中的排名 | |
| guard_level | num | 大航海等级? | |

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
| count | num | 直播间高能用户数量 | |

**示例:**

<details>
<summary>查看消息示例:</summary>
  
```json
{
  "cmd": "ONLINE_RANK_COUNT",
  "data": {
    "count": 4
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

**示例:**

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
| danmaku_style | obj | 文本样式信息 | |
| danmaku_url | str | 待调查 | |
| dmscore | num | 待调查 | |
| terminals | array | 待调查 | |

`data.content_segments[n]` 数组中的对象

|    字段    | 类型 |  内容  |    备注   |
| ---------- | --- | ------ | --------- |
| font_color | str | text 字段的十六进制颜色值 | |
| font_color_dark | str | text 字段的十六进制颜色值 | APP端设置为深色模式时使用 |
| text | str | 文本 | |
| type | num | 待调查 | |

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
| area_id | num | 当前直播间所属分区的ID | |
| parent_area_id | num | 待调查 | |
| area_name | str | 当前直播间所属分区的名称 | |
| parent_area_name | str | 待调查 | |
| live_key | str | 待调查 | |
| sub_session_key | str | 待调查 | |

**示例:**

<details>
<summary>查看消息示例:</summary>

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
  cmd: "ROOM_ADMINS",
  uids: [ 898424, 384203692, 1309513, 30816752, 23931549, 223134 ]
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
