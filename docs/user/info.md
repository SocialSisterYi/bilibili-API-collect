# 用户基本信息

<img src="../../assets/img/akari.jpg" width="200" height="200"/>

## 用户空间详细信息

> https://api.bilibili.com/x/space/wbi/acc/info

*请求方式：GET*

认证方式：Cookie（SESSDATA）

鉴权方式：[Wbi 签名](../misc/sign/wbi.md), Cookie (对于某些 IP 地址，需要在 Cookie 中提供任意非空的 `buvid3` 字段)

~~该接口的旧版 API ：<https://api.bilibili.com/x/space/acc/info>~~（已废弃，不建议使用）

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注                                 |
| ------ | ---- | ----------- | ------ | ------------------------------------ |
| mid    | num  | 目标用户mid | 必要   |                                      |
| w_rid  | str  | Wbi 签名    | 必要   | 详见 [Wbi 签名](../misc/sign/wbi.md) |
| wts    | num  | 当前时间戳  | 必要   | 详见 [Wbi 签名](../misc/sign/wbi.md) |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-403：访问权限不足<br />-404：用户不存在（如注销账号） |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段             | 类型 | 内容             | 备注                                                         |
| ---------------- | ---- | ---------------- | ------------------------------------------------------------ |
| mid              | num  | mid              |                                                              |
| name             | str  | 昵称             |                                                              |
| sex              | str  | 性别             | 男/女/保密                                                   |
| face             | str  | 头像链接         |                                                              |
| face_nft         | num  | 是否为 NFT 头像  | 0：不是 NFT 头像<br />1：是 NFT 头像                         |
| face_nft_type    | num  | NFT 头像类型？   |                                                              |
| sign             | str  | 签名             |                                                              |
| rank             | num  | 用户权限等级     | 目前应该无任何作用<br/>5000：0级未答题<br/>10000：普通会员<br/>20000：字幕君<br/>25000：VIP<br/>30000：真·职人<br/>32000：管理员 |
| level            | num  | 当前等级         | 0-6 级                                                       |
| jointime         | num  | 注册时间         | 此接口返回恒为`0`                                            |
| moral            | num  | 节操值           | 此接口返回恒为`0`                                            |
| silence          | num  | 封禁状态         | 0：正常<br />1：被封                                         |
| coins            | num  | 硬币数           | 需要登录（Cookie） <br />只能查看自己的<br />默认为`0`       |
| fans_badge       | bool | 是否具有粉丝勋章 | false：无<br />true：有                                      |
| fans_medal       | obj  | 粉丝勋章信息     |                                                              |
| official         | obj  | 认证信息         |                                                              |
| vip              | obj  | 会员信息         |                                                              |
| pendant          | obj  | 头像框信息       |                                                              |
| nameplate        | obj  | 勋章信息         |                                                              |
| user_honour_info | obj  | （？）           |                                                              |
| is_followed      | bool | 是否关注此用户   | true：已关注<br />false：未关注<br />需要登录（Cookie） <br />未登录恒为`false` |
| top_photo        | str  | 主页头图链接     |                                                              |
| theme            | obj  | （？）           |                                                              |
| sys_notice       | obj  | 系统通知         | 无内容则为空对象<br />主要用于展示如用户争议、纪念账号等等的小黄条 |
| live_room        | obj  | 直播间信息       |                                                              |
| birthday         | str  | 生日             | MM-DD<br />如设置隐私为空                                    |
| school           | obj  | 学校             |                                                              |
| profession       | obj  | 专业资质信息     |                                                              |
| tags             | null | 个人标签         |                                                              |
| series           | obj  |                  |                                                              |
| is_senior_member | num  | 是否为硬核会员   | 0：否<br />1：是                                             |
| mcn_info         | null | （？）           |                                                              |
| gaia_res_type    | num  | （？）           |                                                              |
| gaia_data        | null | （？）           |                                                              |
| is_risk          | bool | （？）           |                                                              |
| elec             | obj  | 充电信息         |                                                              |
| contract         | obj  | 是否显示老粉计划 |                                                              |

`rank`示例

| UID       | rank  |
|-----------|-------|
| 2         | 20000 |
| 16765     | 20000 |
| 15773384  | 20000 |
| 124416    | 20000 |
| 429736362 | 25000 |
| 424261768 | 25000 |
| 41273726  | 25000 |
| 15080107  | 25000 |
| 9847497   | 25000 |
| 4856007   | 25000 |
| 928123    | 25000 |
| 132704    | 25000 |
| 70093     | 25000 |
| 47291     | 25000 |
| 27380     | 25000 |
| 22445     | 25000 |
| 3351      | 25000 |
| 1101      | 25000 |
| 93066     | 30000 |
| 2443068   | 30000 |
| 46368     | 30000 |
| 11167     | 30000 |

`profession`示例

| UID        |
|------------|
| 654391     |
| 1440295    |
| 1785155    |
| 2990100    |
| 3875803    |

`data`中的`official`对象：

| 字段  | 类型 | 内容     | 备注                                     |
| ----- | ---- | -------- | ---------------------------------------- |
| role  | num  | 认证类型 | 见 [用户认证类型一览](official_role.md)  |
| title | str  | 认证信息 | 无为空                                   |
| desc  | str  | 认证备注 | 无为空                                   |
| type  | num  | 是否认证 | -1：无<br />0：个人认证<br />1：机构认证 |

`data`中的`vip`对象：

| 字段                 | 类型 | 内容               | 备注                                                         |
| -------------------- | ---- | ------------------ | ------------------------------------------------------------ |
| type                 | num  | 会员类型           | 0：无<br />1：月大会员<br />2：年度及以上大会员              |
| status               | num  | 会员状态           | 0：无<br />1：有                                             |
| due_date             | num  | 会员过期时间       | 毫秒时间戳                                                   |
| vip_pay_type         | num  | 支付类型           | 0：未支付（常见于官方账号）<br />1：已支付（以正常渠道获取的大会员均为此值） |
| theme_type           | num  | 0                  | 作用尚不明确                                                 |
| label                | obj  | 会员标签           |                                                              |
| avatar_subscript     | num  | 是否显示会员图标   | 0：不显示<br />1：显示                                       |
| nickname_color       | str  | 会员昵称颜色       | 颜色码，一般为`#FB7299`，曾用于愚人节改变大会员配色          |
| role                 | num  | 大角色类型         | 1：月度大会员<br/>3：年度大会员<br/>7：十年大会员<br/>15：百年大会员 |
| avatar_subscript_url | str  | 大会员角标地址     |                                                              |
| tv_vip_status        | num  | 电视大会员状态     | 0：未开通                                                    |
| tv_vip_pay_type      | num  | 电视大会员支付类型 |                                                              |

`vip`中的`label`对象：

| 字段                        | 类型   | 内容       | 备注                                                                                                                           |
|---------------------------|------|----------|------------------------------------------------------------------------------------------------------------------------------|
| path                      | str  | 空        | 作用尚不明确                                                                                                                       |
| text                      | str  | 会员类型文案   | `大会员` `年度大会员` `十年大会员` `百年大会员` `最强绿鲤鱼`                                                                                        |
| label_theme               | str  | 会员标签     | vip：大会员<br />annual_vip：年度大会员<br />ten_annual_vip：十年大会员<br />hundred_annual_vip：百年大会员<br/>fools_day_hundred_annual_vip：最强绿鲤鱼 |
| text_color                | str  | 会员标签     |                                                                                                                              |
| bg_style                  | num  | 1        |                                                                                                                              |
| bg_color                  | str  | 会员标签背景颜色 | 颜色码，一般为`#FB7299`，曾用于愚人节改变大会员配色                                                                                               |
| border_color              | str  | 会员标签边框颜色 | 未使用                                                                                                                          |
| use_img_label             | bool | `true`   |                                                                                                                              |
| img_label_uri_hans        | str  | `空串`     |                                                                                                                              |
| img_label_uri_hant        | str  | `空串`     |                                                                                                                              |
| img_label_uri_hans_static | str  | 大会员牌子图片  | 简体版                                                                                                                          |
| img_label_uri_hant_static | str  | 大会员牌子图片  | 繁体版                                                                                                                          |


`data`中的`pendant`对象：

**普通头像框的`image`与`image_enhance`内容相同**

**动态头像框的`image`为png静态图片，`image_enhance`为webp动态图片，`image_enhance_frame`为png逐帧序列**

| 字段                  | 类型  | 内容           | 备注         |
|---------------------|-----|--------------|------------|
| pid                 | num | 头像框id        |            |
| name                | str | 头像框名称        |            |
| image               | str | 头像框图片url     |            |
| expire              | num | 过期时间         | 此接口返回恒为`0` |
| image_enhance       | str | 头像框图片url     |            |
| image_enhance_frame | str | 头像框图片逐帧序列url |            |

`data`中的`nameplate`对象：

| 字段          | 类型  | 内容      | 备注  |
|-------------|-----|---------|-----|
| nid         | num | 勋章id    |     |
| name        | str | 勋章名称    |     |
| image       | str | 勋章图标    |     |
| image_small | str | 勋章图标（小） |     |
| level       | str | 勋章等级    |     |
| condition   | str | 获取条件    |     |

`data`中的`fans_medal`对象：

| 字段    | 类型   | 内容        | 备注  |
|-------|------|-----------|-----|
| show  | bool |           |     |
| wear  | bool | 是否佩戴了粉丝勋章 |     |
| medal | obj  | 粉丝勋章信息    |     |

`fans_medal`中的`medal`对象：

| 字段                 | 类型  | 内容           | 备注               |
|--------------------|-----|--------------|------------------|
| uid                | num | 此用户mid       |                  |
| target_id          | num | 粉丝勋章所属UP的mid |                  |
| medal_id           | num | 粉丝勋章id       |                  |
| level              | num | 粉丝勋章等级       |                  |
| medal_name         | str | 粉丝勋章名称       |                  |
| medal_color        | num | 颜色           |                  |
| intimacy           | num | 当前亲密度        |                  |
| next_intimacy      | num | 下一等级所需亲密度    |                  |
| day_limit          | num | 每日亲密度获取上限    |                  |
| today_feed         | num | 今日已获得亲密度     |                  |
| medal_color_start  | num | 粉丝勋章颜色       | 十进制数，可转为十六进制颜色代码 |
| medal_color_end    | num | 粉丝勋章颜色       | 十进制数，可转为十六进制颜色代码 |
| medal_color_border | num | 粉丝勋章边框颜色     | 十进制数，可转为十六进制颜色代码 |
| is_lighted         | num |              |                  |
| light_status       | num |              |                  |
| wearing_status     | num | 当前是否佩戴       | 0：未佩戴<br />1：已佩戴 |
| score              | num |              |                  |

`data`中的`sys_notice`对象：

| 字段          | 类型  | 内容   | 备注  |
|-------------|-----|------|-----|
| id          | num | id   |     |
| content     | str | 显示文案 |     |
| url         | str | 跳转地址 |     |
| notice_type | num | 提示类型 | 1,2 |
| icon        | str | 前缀图标 |     |
| text_color  | str | 文字颜色 |     |
| bg_color    | str | 背景颜色 |     |

`sys_notice`示例

| id  | content                                         | notice_type | 示例用户                                                                                            |
|-----|-------------------------------------------------|-------------|-------------------------------------------------------------------------------------------------|
| 5   | 该用户存在争议行为，已冻结其帐号功能的使用                           | 1           | [82385070](https://space.bilibili.com/82385070)                                                 |
| 8   | 该用户存在较大争议，请谨慎甄别其内容                              | 1           | [28062215](https://space.bilibili.com/28062215)                                                 |
| 11  | 该账号涉及合约争议，暂冻结其账号功能使用。详见公告->                     | 1           ||
| 16  | 该UP主内容存在争议，请注意甄别视频内信息                           | 1           | [382534165](https://space.bilibili.com/382534165)                                               |
| 20  | 请允许我们在此献上最后的告别，以此纪念其在哔哩哔哩留下的回忆与足迹。请点此查看纪念账号相关说明 | 2           |[212535360](https://space.bilibili.com/212535360)|
|22| 该账号涉及合约诉讼，封禁其账号使用 |     ||
| 24  | 该账号涉及合约争议，暂冻结其账号功能使用                           | 1           | [291229008](https://space.bilibili.com/291229008)                                               |
| 25  | 该用户涉及严重指控，暂冻结其账号功能使用                            | 1           | [81447581](https://space.bilibili.com/81447581)                                                 |
| 31  | 该用户涉及严重指控，暂冻结其账号功能使用                            | 1           | [22439273](https://space.bilibili.com/22439273)                                                 |
| 34  | 该用户涉及严重指控，暂冻结其账号功能使用                            | 1           | [1640486775](https://space.bilibili.com/1640486775)                                             |
| 36  | 该账户存在争议，请谨慎甄别                                   | 1           | [198297](https://space.bilibili.com/198297)<br/>[18149131](https://space.bilibili.com/18149131) |

`data`中的`live_room`对象：

| 字段             | 类型  | 内容         | 备注               |
|----------------|-----|------------|------------------|
| roomStatus     | num | 直播间状态      | 0：无房间<br />1：有房间 |
| liveStatus     | num | 直播状态       | 0：未开播<br />1：直播中 |
| url            | str | 直播间网页 url  |                  |
| title          | str | 直播间标题      |                  |
| cover          | str | 直播间封面 url  |                  |
| watched_show   | obj |            |                  |
| roomid         | num | 直播间 id(短号) |                  |
| roundStatus    | num | 轮播状态       | 0：未轮播<br />1：轮播  |
| broadcast_type | num | 0          |                  |

`live_room`中的`watched_show`对象：

| 字段            | 类型   | 内容                  | 备注  |
|---------------|------|---------------------|-----|
| switch        | bool | ?                   |     |
| num           | num  | total watched users |     |
| text_small    | str  |                     |     |
| text_large    | str  |                     |     |
| icon          | str  | watched icon url    |     |
| icon_location | str  | ?                   |     |
| icon_web      | str  | watched icon url    |     |

`data`中的`school`对象：

| 字段   | 类型  | 内容     | 备注    |
|------|-----|--------|-------|
| name | str | 就读大学名称 | 没有则为空 |

`data`中的`profession`对象：

| 字段         | 类型  | 内容   | 备注             |
|------------|-----|------|----------------|
| name       | str | 资质名称 |                |
| department | str | 职位   |                |
| title      | str | 所属机构 |                |
| is_show    | num | 是否显示 | 0：不显示<br/>1：显示 |

`data`中的`user_honour_info`对象：

| 字段     | 类型    | 内容   | 备注  |
|--------|-------|------|-----|
| mid    | num   | 0    |     |
| colour | str   | null |     |
| tags   | array | null |     |

`data`中的`series`对象：

| 字段                  | 类型   | 内容  | 备注  |
|---------------------|------|-----|-----|
| user_upgrade_status | num  | (?) |     |
| show_upgrade_window | bool | (?) |     |

`data`中的`elec`对象：

| 字段        | 类型  | 内容  | 备注  |
|-----------|-----|-----|-----|
| show_info | obj |     |     |

`elec`中的`show_info`对象：

| 字段       | 类型   | 内容      | 备注               |
|----------|------|---------|------------------|
| show     | bool | 是否开通了充电 |                  |
| state    | num  | 状态      | -1：未开通<br/>1：已开通 |
| title    | str  | `空串`    |                  |
| icon     | str  | `空串`    |                  |
| jump_url | str  | `空串`    |                  |

`data`中的`contract`对象：

| 字段名               | 类型   | 内容        | 备注                        |
|-------------------|------|-----------|---------------------------|
| is_display        | bool |           | true/false<br/>在页面中未使用此字段 |
| is_follow_display | bool | 是否在显示老粉计划 | true：显示<br/>false：不显示     |

**示例：**

查询用户`mid=2`的详细信息，Wbi 签名的 `wts`、`w_rid`生成方式详见 [Wbi 签名](../misc/sign/wbi.md) 文档

```shell
curl -G 'https://api.bilibili.com/x/space/wbi/acc/info' \
	--data-urlencode 'mid=2' \
	--data-urlencode 'wts=1685070149' \
	--data-urlencode 'w_rid=f7b376124782ae8cb42c56fdd69144ed' \
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
        "mid": 2,
        "name": "碧诗",
        "sex": "男",
        "face": "https://i2.hdslb.com/bfs/face/ef0457addb24141e15dfac6fbf45293ccf1e32ab.jpg",
        "face_nft": 0,
        "face_nft_type": 0,
        "sign": "https://kami.im 直男过气网红 #  We Are Star Dust",
        "rank": 20000,
        "level": 6,
        "jointime": 0,
        "moral": 0,
        "silence": 0,
        "coins": 0,
        "fans_badge": true,
        "fans_medal": {
            "show": true,
            "wear": true,
            "medal": {
                "uid": 2,
                "target_id": 335115,
                "medal_id": 45408,
                "level": 21,
                "medal_name": "伍千万",
                "medal_color": 1725515,
                "intimacy": 1980,
                "next_intimacy": 2000,
                "day_limit": 250000,
                "medal_color_start": 1725515,
                "medal_color_end": 5414290,
                "medal_color_border": 1725515,
                "is_lighted": 1,
                "light_status": 1,
                "wearing_status": 1,
                "score": 50001980
            }
        },
        "official": {
            "role": 2,
            "title": "bilibili创始人（站长）",
            "desc": "",
            "type": 0
        },
        "vip": {
            "type": 2,
            "status": 1,
            "due_date": 3931344000000,
            "vip_pay_type": 0,
            "theme_type": 0,
            "label": {
                "path": "",
                "text": "十年大会员",
                "label_theme": "ten_annual_vip",
                "text_color": "#FFFFFF",
                "bg_style": 1,
                "bg_color": "#FB7299",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "https://i0.hdslb.com/bfs/activity-plat/static/20220608/e369244d0b14644f5e1a06431e22a4d5/wltavwHAkL.gif",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/802418ff03911645648b63aa193ba67997b5a0bc.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/8u7iRTPE7N.png"
            },
            "avatar_subscript": 1,
            "nickname_color": "#FB7299",
            "role": 7,
            "avatar_subscript_url": "",
            "tv_vip_status": 1,
            "tv_vip_pay_type": 0,
            "tv_due_date": 2000822400
        },
        "pendant": {
            "pid": 32257,
            "name": "EveOneCat2",
            "image": "https://i2.hdslb.com/bfs/garb/item/488870931b1bba66da36d22848f0720480d3d79a.png",
            "expire": 0,
            "image_enhance": "https://i2.hdslb.com/bfs/garb/item/5974f17f9d96a88bafba2f6d18d647a486e88312.webp",
            "image_enhance_frame": "https://i2.hdslb.com/bfs/garb/item/4316a3910bb0bd6f2f1c267a3e9187f0b9fe5bd0.png"
        },
        "nameplate": {
            "nid": 10,
            "name": "见习偶像",
            "image": "https://i2.hdslb.com/bfs/face/e93dd9edfa7b9e18bf46fd8d71862327a2350923.png",
            "image_small": "https://i2.hdslb.com/bfs/face/275b468b043ec246737ab8580a2075bee0b1263b.png",
            "level": "普通勋章",
            "condition": "所有自制视频总播放数>=10万"
        },
        "user_honour_info": {
            "mid": 0,
            "colour": null,
            "tags": []
        },
        "is_followed": true,
        "top_photo": "http://i2.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png",
        "theme": {},
        "sys_notice": {},
        "live_room": {
            "roomStatus": 1,
            "liveStatus": 0,
            "url": "https://live.bilibili.com/1024?broadcast_type=0&is_room_feed=0",
            "title": "试图恰鸡",
            "cover": "http://i0.hdslb.com/bfs/live/new_room_cover/96ee5bfd0279a0f18b190340334f43f473038288.jpg",
            "roomid": 1024,
            "roundStatus": 0,
            "broadcast_type": 0,
            "watched_show": {
                "switch": true,
                "num": 19,
                "text_small": "19",
                "text_large": "19人看过",
                "icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
                "icon_location": "",
                "icon_web": "https://i0.hdslb.com/bfs/live/8d9d0f33ef8bf6f308742752d13dd0df731df19c.png"
            }
        },
        "birthday": "09-19",
        "school": {
            "name": ""
        },
        "profession": {
            "name": "",
            "department": "",
            "title": "",
            "is_show": 0
        },
        "tags": null,
        "series": {
            "user_upgrade_status": 3,
            "show_upgrade_window": false
        },
        "is_senior_member": 0,
        "mcn_info": null,
        "gaia_res_type": 0,
        "gaia_data": null,
        "is_risk": false,
        "elec": {
            "show_info": {
                "show": true,
                "state": 1,
                "title": "",
                "icon": "",
                "jump_url": "?oid=2"
            }
        },
        "contract": {
            "is_display": false,
            "is_follow_display": false
        }
    }
}
```

</details>

## 用户名片信息

> https://api.bilibili.com/x/web-interface/card

*请求方式：GET*

认证方式：Cookie(SESSDATA)

**url参数：**

| 参数名 | 类型 | 内容                 | 必要性 | 备注                    |
| ------ | ---- | -------------------- | ------ | ----------------------- |
| mid    | num  | 目标用户mid          | 必要   |                         |
| photo  | bool | 是否请求用户主页头图 | 非必要 | true：是<br />false：否 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                             |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段          | 类型  | 内容           | 备注                                                         |
| ------------- | ----- | -------------- | ------------------------------------------------------------ |
| card          | obj   | 卡片信息       |                                                              |
| following     | bool  | 是否关注此用户 | true：已关注<br />false：未关注<br />需要登录(Cookie)<br />未登录为false |
| archive_count | num   | 用户稿件数     |                                                              |
| article_count | num   | 0              | **作用尚不明确**                                             |
| follower      | num   | 粉丝数         |                                                              |
| like_num      | num   | 点赞数         |                                                              |

`data`中的`card`对象：

| 字段            | 类型  | 内容           | 备注                                                         |
| --------------- | ----- | -------------- | ------------------------------------------------------------ |
| mid             | str   | 用户mid        |                                                              |
| approve         | bool  | false          | **作用尚不明确**                                             |
| name            | str   | 用户昵称       |                                                              |
| sex             | str   | 用户性别       | 男 女 保密                                                   |
| face            | str   | 用户头像链接   |                                                              |
| DisplayRank     | str   | 0              | **作用尚不明确**                                             |
| regtime         | num   | 0              | **作用尚不明确**                                             |
| spacesta        | num   | 用户状态       | 0：正常<br />-2：被封禁                                      |
| birthday        | str   | 空             | **作用尚不明确**                                             |
| place           | str   | 空             | **作用尚不明确**                                             |
| description     | str   | 空             | **作用尚不明确**                                             |
| article         | num   | 0              | **作用尚不明确**                                             |
| attentions      | array | 空             | **作用尚不明确**                                             |
| fans            | num   | 粉丝数         |                                                              |
| friend          | num   | 关注数         |                                                              |
| attention       | num   | 关注数         |                                                              |
| sign            | str   | 签名           |                                                              |
| level_info      | obj   | 等级           |                                                              |
| pendant         | obj   | 挂件           |                                                              |
| nameplate       | obj   | 勋章           |                                                              |
| Official        | obj   | 认证信息       |                                                              |
| official_verify | obj   | 认证信息2      |                                                              |
| vip             | obj   | 大会员状态     |                                                              |
| space           | obj   | 主页头图       |                                                              |

`card`中的`level_info`对象：

| 字段          | 类型 | 内容     | 备注             |
| ------------- | ---- | -------- | ---------------- |
| current_level | num  | 当前等级 | 0-6级            |
| current_min   | num  | 0        | **作用尚不明确** |
| current_exp   | num  | 0        | **作用尚不明确** |
| next_exp      | num  | 0        | **作用尚不明确** |

`card`中的`pendant`对象：

| 字段   | 类型 | 内容        | 备注             |
| ------ | ---- | ----------- | ---------------- |
| pid    | num  | 挂件id      |                  |
| name   | str  | 挂件名称    |                  |
| image  | str  | 挂件图片url |                  |
| expire | num  | 0           | **作用尚不明确** |

`card`中的`nameplate`对象：

| 字段        | 类型 | 内容             | 备注                 |
| ----------- | ---- | ---------------- | -------------------- |
| nid         | num  | 勋章id           | **详细说明有待补充** |
| name        | str  | 勋章名称         |                      |
| image       | str  | 挂件图片url 正常 |                      |
| image_small | str  | 勋章图片url 小   |                      |
| level       | str  | 勋章等级         |                      |
| condition   | str  | 勋章条件         |                      |

`card`中的`Official`对象：

| 字段  | 类型 | 内容     | 备注                                     |
| ----- | ---- | -------- | ---------------------------------------- |
| role  | num  | 认证类型 | 见[用户认证类型一览](official_role.md)   |
| title | str  | 认证信息 | 无为空                                   |
| desc  | str  | 认证备注 | 无为空                                   |
| type  | num  | 是否认证 | -1：无<br />0：UP主认证<br />1：机构认证 |

`card`中的`official_verify`对象：

| 字段 | 类型 | 内容     | 备注                                     |
| ---- | ---- | -------- | ---------------------------------------- |
| type | num  | 是否认证 | -1：无<br />0：UP主认证<br />1：机构认证 |
| desc | str  | 认证信息 | 无为空                                   |

`card`中的`vip`对象：

| 字段          | 类型 | 内容       | 备注                                              |
| ------------- | ---- | ---------- | ------------------------------------------------- |
| vipType       | num  | 大会员类型 | 0：无<br />1：月度大会员<br />2：年度及以上大会员 |
| dueRemark     | str  | 空         | **作用尚不明确**                                  |
| accessStatus  | num  | 0          | **作用尚不明确**                                  |
| vipStatus     | num  | 大会员状态 | 0：无<br />1：有                                  |
| vipStatusWarn | str  | 空         | **作用尚不明确**                                  |
| theme_type    | num  | 0          | **作用尚不明确**                                  |

`card`中的`space`对象：

| 字段  | 类型 | 内容             | 备注 |
| ----- | ---- | ---------------- | ---- |
| s_img | str  | 主页头图url 小图 |      |
| l_img | str  | 主页头图url 正常 |      |

**示例：**

```shell
curl -G 'https://api.bilibili.com/x/web-interface/card' \
--data-urlencode 'mid=2' \
--data-urlencode 'photo=true' \
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
        "card": {
            "mid": "2",
            "name": "碧诗",
            "approve": false,
            "sex": "男",
            "rank": "20000",
            "face": "http://i2.hdslb.com/bfs/face/ef0457addb24141e15dfac6fbf45293ccf1e32ab.jpg",
            "DisplayRank": "0",
            "regtime": 0,
            "spacesta": 0,
            "birthday": "",
            "place": "",
            "description": "",
            "article": 0,
            "attentions": [],
            "fans": 969999,
            "friend": 234,
            "attention": 234,
            "sign": "kami.im 直男过气网红 # av362830 “We Are Star Dust”",
            "level_info": {
                "current_level": 6,
                "current_min": 0,
                "current_exp": 0,
                "next_exp": 0
            },
            "pendant": {
                "pid": 0,
                "name": "",
                "image": "",
                "expire": 0,
                "image_enhance": "",
                "image_enhance_frame": ""
            },
            "nameplate": {
                "nid": 10,
                "name": "见习偶像",
                "image": "http://i2.hdslb.com/bfs/face/e93dd9edfa7b9e18bf46fd8d71862327a2350923.png",
                "image_small": "http://i2.hdslb.com/bfs/face/275b468b043ec246737ab8580a2075bee0b1263b.png",
                "level": "普通勋章",
                "condition": "所有自制视频总播放数\u003e=10万"
            },
            "Official": {
                "role": 2,
                "title": "bilibili创始人（站长）",
                "desc": "",
                "type": 0
            },
            "official_verify": {
                "type": 0,
                "desc": "bilibili创始人（站长）"
            },
            "vip": {
                "type": 2,
                "status": 1,
                "due_date": 3896524800000,
                "vip_pay_type": 0,
                "theme_type": 0,
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
                "avatar_subscript_url": "http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png",
                "vipType": 2,
                "vipStatus": 1
            }
        },
        "space": {
            "s_img": "http://i1.hdslb.com/bfs/space/768cc4fd97618cf589d23c2711a1d1a729f42235.png",
            "l_img": "http://i1.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png"
        },
        "following": true,
        "archive_count": 37,
        "article_count": 0,
        "follower": 969999,
        "like_num": 3547978
    }
}
```

</details>

## 登录用户空间详细信息

> https://api.bilibili.com/x/space/myinfo

*请求方式：GET*

认证方式：Cookie(SESSDATA)

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                      |
| ------- | ---- | -------- | ------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：未登录 |
| message | str  | 错误信息 | 默认为0                   |
| ttl     | num  | 1        |                           |
| data    | obj  | 信息本体 |                           |

`data`对象：

| 字段            | 类型 | 内容         | 备注                     |
| --------------- | ---- | ------------ | ------------------------ |
| mid             | num  | mid          |                          |
| name            | str  | 昵称         |                          |
| sex             | str  | 性别         | 男 女 保密               |
| face            | str  | 头像图片url  |                          |
| sign            | str  | 签名         |                          |
| rank            | num  | 10000        | **作用尚不明确**         |
| level           | num  | 当前等级     | 0-6级                    |
| jointime        | num  | 0            | **作用尚不明确**         |
| moral           | num  | 节操         | 默认70                   |
| silence         | num  | 封禁状态     | 0：正常<br />1：被封     |
| email_status    | num  | 已验证邮箱   | 0：未验证<br />1：已验证 |
| tel_status      | num  | 已验证手机号 | 0：未验证<br />1：已验证 |
| identification  | num  | 1            | **作用尚不明确**         |
| vip             | obj  | 大会员状态   |                          |
| birthday        | num  | 生日         | 时间戳                   |
| is_tourist      | num  | 0            | **作用尚不明确**         |
| is_fake_account | num  | 0            | **作用尚不明确**         |
| pin_prompting   | num  | 0            | **作用尚不明确**         |
| is_deleted      | num  | 0            | **作用尚不明确**         |
| coins           | num  | 硬币数       |                          |
| following       | num  | 粉丝数       |                          |
| follower        | num  | 粉丝数       |                          |

`data`中的`vip`对象：

| 字段             | 类型 | 内容             | 备注                                            |
| ---------------- | ---- | ---------------- | ----------------------------------------------- |
| type             | num  | 会员类型         | 0：无<br />1：月大会员<br />2：年度及以上大会员 |
| status           | num  | 会员状态         | 0：无<br />1：有                                |
| due_date         | num  | 会员过期时间      | Unix时间戳(毫秒) |
| theme_type       | num  | 0                | 作用尚不明确                                    |
| label            | obj  | 会员标签         |                                                 |
| avatar_subscript | num  | 是否显示会员图标 | 0：不显示<br />1：显示                          |
| nickname_color   | str  | 会员昵称颜色     | 颜色码                                          |

`vip`中的`label`对象：

| 字段        | 类型 | 内容     | 备注                                                         |
| ----------- | ---- | -------- | ------------------------------------------------------------ |
| path        | str  | 空       | 作用尚不明确                                                 |
| text        | str  | 会员名称 |                                                              |
| label_theme | str  | 会员标签 | vip：大会员<br />annual_vip：年度大会员<br />ten_annual_vip：十年大会员<br />hundred_annual_vip：百年大会员 |

`data`中的`pendant`对象：

| 字段   | 类型 | 内容        | 备注                 |
| ------ | ---- | ----------- | -------------------- |
| pid    | num  | 挂件id      | **详细说明有待补充** |
| name   | str  | 挂件名称    |                      |
| image  | str  | 挂件图片url |                      |
| expire | num  | 0           | **作用尚不明确**     |

`data`中的`nameplate`对象：

| 字段        | 类型 | 内容             | 备注                 |
| ----------- | ---- | ---------------- | -------------------- |
| nid         | num  | 勋章id           | **详细说明有待补充** |
| name        | str  | 勋章名称         |                      |
| image       | str  | 挂件图片url 正常 |                      |
| image_small | str  | 勋章图片url 小   |                      |
| level       | str  | 勋章等级         |                      |
| condition   | str  | 勋章条件         |                      |

`data`中的`Official`对象：

| 字段  | 类型 | 内容     | 备注                                              |
| ----- | ---- | -------- | ------------------------------------------------- |
| role  | num  | 认证类型 | 见[用户认证类型一览](official_role.md) |
| title | str  | 认证信息 | 无为空                                            |
| desc  | str  | 认证备注 | 无为空                                            |
| type  | num  | 是否认证 | -1：无<br />0：认证                               |

`data`中的`level_exp`对象：

| 字段          | 类型 | 内容     | 备注             |
| ------------- | ---- | -------- | ---------------- |
| current_level | num  | 当前等级 | 0-6级            |
| current_min   | num  | 0        | 指当前等级从多少经验值开始 |
| current_exp   | num  | 0        | 当前账户的经验值 |
| next_exp      | num  | 0        | 下一个等级所需的经验值**(不是还需要多少)** |

**示例：**

```shell
curl -G 'https://api.bilibili.com/x/space/myinfo' \
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
        "mid": 293793435,
        "name": "社会易姐QwQ",
        "sex": "男",
        "face": "http://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg",
        "sign": "高考刚结束的普通技术宅一枚，喜欢MC和编程以及电子，是车车人也是术术人，粉丝群:1136462265",
        "rank": 10000,
        "level": 5,
        "jointime": 0,
        "moral": 70,
        "silence": 0,
        "email_status": 1,
        "tel_status": 1,
        "identification": 1,
        "vip": {
            "type": 2,
            "status": 1,
            "due_date": 1644163200000,
            "vip_pay_type": 0,
            "theme_type": 0,
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
            "pid": 2511,
            "name": "初音未来13周年",
            "image": "http://i0.hdslb.com/bfs/garb/item/4f8f3f1f2d47f0dad84f66aa57acd4409ea46361.png",
            "expire": 0,
            "image_enhance": "http://i0.hdslb.com/bfs/garb/item/fe0b83b53e2342b16646f6e7a9370d8a867decdb.webp",
            "image_enhance_frame": "http://i0.hdslb.com/bfs/garb/item/127c507ec8448be30cf5f79500ecc6ef2fd32f2c.png"
        },
        "nameplate": {
            "nid": 4,
            "name": "青铜殿堂",
            "image": "http://i0.hdslb.com/bfs/face/2879cd5fb8518f7c6da75887994c1b2a7fe670bd.png",
            "image_small": "http://i0.hdslb.com/bfs/face/6707c120e00a3445933308fd9b7bd9fad99e9ec4.png",
            "level": "普通勋章",
            "condition": "单个自制视频总播放数\u003e=1万"
        },
        "official": {
            "role": 0,
            "title": "",
            "desc": "",
            "type": -1
        },
        "birthday": 1015257600,
        "is_tourist": 0,
        "is_fake_account": 0,
        "pin_prompting": 0,
        "is_deleted": 0,
        "in_reg_audit": 0,
        "is_rip_user": false,
        "profession": {
            "id": 0,
            "name": "",
            "show_name": ""
        },
        "level_exp": {
            "current_level": 5,
            "current_min": 10800,
            "current_exp": 27125,
            "next_exp": 28800
        },
        "coins": 9,
        "following": 1122,
        "follower": 1122
    }
}
```

</details>

## 多用户详细信息

> https://api.vc.bilibili.com/account/v1/user/cards

*请求方式：GET*

认证方式：Cookie(SESSDATA)

本接口较其他接口相比，只会返回非常有限的信息，但可以同时获取较多的用户信息（据测试可以同时获取 40000 多个用户的信息）

**url参数：**

| 参数名 | 类型 | 内容              | 必要性 | 备注                              |
| ------ | ---- | ----------------- | ------ | --------------------------------- |
| uids   | nums | 目标用户的UID列表 | 必要   | 每个成员间用`,`分隔 |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                        |
| ------- | ----- | -------- | --------------------------- |
| code    | num   | 返回值   | 0：成功<br />-400：请求错误 |
| msg     | str   | 错误信息 | 默认为空                    |
| message | str   | 错误信息 | 默认为空                    |
| data    | array | 信息本体 | 用户信息随机排序            |

`data`数组：

| 项   | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| 0    | obj  | 用户1     |      |
| n    | obj  | 用户(n+1) |      |
| ……   | obj  | ……        | ……   |

`data`数组中的对象：

| 字段    | 类型 | 内容         | 备注                 |
| ------- | ---- | ------------ | -------------------- |
| mid     | num  | mid          |                      |
| name    | str  | 昵称         |                      |
| sex     | str  | 性别         | 男/女/保密           |
| face    | str  | 头像链接     |                      |
| sign    | str  | 签名         |                      |
| rank    | num  | 用户权限等级 |                      |
| level   | num  | 当前等级     | 0-6 级               |
| silence | num  | 封禁状态     | 0：正常<br />1：被封 |

**示例：**

查询用户`uids=1,2,3`的详细信息

```shell
curl -G 'https://api.vc.bilibili.com/account/v1/user/cards' \
--data-urlencode 'uids=1,2,3' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "",
    "message": "",
    "data": [{
        "mid": 1,
        "name": "bishi",
        "sex": "男",
        "face": "https://i1.hdslb.com/bfs/face/34c5b30a990c7ce4a809626d8153fa7895ec7b63.gif",
        "sign": "",
        "rank": 10000,
        "level": 4,
        "silence": 0
    }, {
        "mid": 2,
        "name": "碧诗",
        "sex": "男",
        "face": "https://i2.hdslb.com/bfs/face/ef0457addb24141e15dfac6fbf45293ccf1e32ab.jpg",
        "sign": "https://kami.im 直男过气网红 # av362830 “We Are Star Dust”",
        "rank": 20000,
        "level": 6,
        "silence": 0
    }, {
        "mid": 3,
        "name": "囧囧倉",
        "sex": "男",
        "face": "https://i0.hdslb.com/bfs/face/d4de6a84557eea8f18510a3f61115d96832aa071.jpg",
        "sign": "富强、民主、文明、和谐、自由、平等、公正、法治、爱国、敬业、诚信、友善。",
        "rank": 10000,
        "level": 5,
        "silence": 0
    }]
}
```

</details>
