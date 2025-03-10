# 直播推荐

## 主页获取直播推荐

> https://api.live.bilibili.com/xlive/web-interface/v1/webMain/getMoreRecList

*请求方法: GET*

**URL 参数:**

| 参数名       | 类型   | 内容       | 必要性 | 备注 |
| ------------ | ------ | ---------- | ------ | ---- |
| platform     | string | 平台类型   | 必要   | 默认为 `web`, 实测可为任意非空串 |
| web_location | string | `333.1007` | 非必要 |      |

**JSON 回复:**

根对象:

| 字段    | 类型   | 内容     | 备注 |
| ------- | ------ | -------- | ---- |
| code    | number | 返回值   | 0: 成功 |
| message | string | 错误信息 | 默认为 `0` |
| ttl     | number | 1        |      |

`data` 对象:

| 字段                | 类型   | 内容          | 备注     |
| ------------------- | ------ | ------------- | -------- |
| recommend_room_list | Array  | 推荐房间列表  | 套了个娃 |
| top_room_id         | number | 置顶直播间号? |          |

`data` 对象中 `recommend_room_list` 数组中的对象:

| 字段                   | 类型           | 内容             | 备注 |
| ---------------------- | -------------- | ---------------- | ---- |
| head_box               | object \| null | 头像框           | 无则为 `null` |
| area_v2_id             | number         | 分区 ID          |      |
| area_v2_parent_id      | number         | 父分区 ID        |      |
| area_v2_name           | string         | 分区名称         |      |
| area_v2_parent_name    | string         | 父分区名称       |      |
| broadcast_type         | number         | 广播类型?        |      |
| cover                  | string         | 封面 URL         |      |
| link                   | string         | 直播间链接       | 仅 `pathname` 与 `query` 部分 |
| online                 | number         | 观看人数         |      |
| pendant_Info           | object         | ???              | 作用尚不明确 |
| roomid                 | number         | 直播间 ID        |      |
| title                  | string         | 直播间标题       |      |
| uname                  | string         | 主播用户名       |      |
| face                   | string         | 主播头像 URL     |      |
| verify                 | object         | 认证信息         | 参见 [用户基本信息](../user/info.md) |
| uid                    | number         | 主播用户 mid     |      |
| keyframe               | string         | 关键帧 URL       |      |
| is_auto_play           | number         | 是否自动播放?    |      |
| head_box_type          | number         | 头像框类型?      |      |
| flag                   | number         | 标记?            | 作用尚不明确 |
| session_id             | string         | 会话 ID?         | 格式为: 本次请求相同的小写无分隔 UUID + 下划线 + 大写以连字符分隔的 UUID |
| show_callback          | string         | 展示回调 URL?    |      |
| click_callback         | string         | 点击回调 URL?    |      |
| special_id             | number         | 特殊 ID?         | 作用尚不明确 |
| watched_show           | object         | 观看展示         | 见下 |
| is_nft                 | number         | 是否为 NFT 头像? |      |
| nft_dmark              | string         | ???              | 作用尚不明确 |
| is_ad                  | boolean        | 是否为广告       |      |
| ad_transparent_content | unknown        | ???              | 作用尚不明确 |
| show_ad_icon           | boolean        | 显示广告图标     |      |
| status                 | boolean        | 状态?            | 作用尚不明确 |
| followers              | number         | 0                | 作用尚不明确 |

`recommend_room_list` 数组中的对象中的 `watched_show` 对象:

| 字段          | 类型    | 内容     | 备注 |
| ------------- | ------- | -------- | ---- |
| switch        | boolean | ???      | 作用尚不明确 |
| num           | number  | 看过人数 |      |
| text_small    | string  | 小文本   | xxx  |
| text_large    | string  | 大文本   | xxx人看过 |
| icon          | string  | 图标 URL | 浅色线条眼睛图标 |
| icon_location | number  | 0        |      |
| icon_web      | string  | 图标 URL | 深色线条眼睛图标 (Web 端) |

**示例:**

```shell
curl -G 'https://api.live.bilibili.com/xlive/web-interface/v1/webMain/getMoreRecList' \
--url-query 'platform=web'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "recommend_room_list": [
      {
        "head_box": null,
        "area_v2_id": 237,
        "area_v2_parent_id": 6,
        "area_v2_name": "怀旧游戏",
        "area_v2_parent_name": "单机游戏",
        "broadcast_type": 0,
        "cover": "https://i0.hdslb.com/bfs/live/new_room_cover/34aedc9409c0abaf622fdb9c6137896b8a9f95d0.jpg",
        "link": "/923833?hotRank=0",
        "online": 262700,
        "pendant_Info": {},
        "roomid": 923833,
        "title": "融合版斗蛐蛐s3.5赛季！",
        "uname": "沉默寡言白河愁",
        "face": "https://i0.hdslb.com/bfs/face/14169798ca31108e4441e790c14b24706def67a3.jpg",
        "verify": {
          "role": 1,
          "desc": "bilibili 知名游戏UP主、直播高能主播",
          "type": 0
        },
        "uid": 34646754,
        "keyframe": "https://i0.hdslb.com/bfs/live-key-frame/keyframe02071535000000923833okbn8y.jpg",
        "is_auto_play": 1,
        "head_box_type": 0,
        "flag": 0,
        "session_id": "4b58e9bf85ef0539525f1c7b1467a5b8_9A44BEBD-CAEB-46AD-8FD7-B91BA8471EAA",
        "group_id": 1000217,
        "show_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_9A44BEBD-CAEB-46AD-8FD7-B91BA8471EAA&group_id=1000217&biz=live&event_id=live_card_show&rule_key=&special_id=0&roomid=923833&parent_id=6&area_id=237&page=0&position=1&platform=web",
        "click_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_9A44BEBD-CAEB-46AD-8FD7-B91BA8471EAA&group_id=1000217&biz=live&event_id=live_card_click&rule_key=&special_id=0&roomid=923833&parent_id=6&area_id=237&page=0&position=1&platform=web",
        "special_id": 0,
        "watched_show": {
          "switch": true,
          "num": 30460,
          "text_small": "3.0万",
          "text_large": "3.0万人看过",
          "icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
          "icon_location": 0,
          "icon_web": "https://i0.hdslb.com/bfs/live/8d9d0f33ef8bf6f308742752d13dd0df731df19c.png"
        },
        "is_nft": 0,
        "nft_dmark": "",
        "is_ad": false,
        "ad_transparent_content": null,
        "show_ad_icon": false,
        "status": false,
        "followers": 0
      },
      {
        "head_box": {
          "name": "大乱斗乱斗之王",
          "value": "https://i0.hdslb.com/bfs/live/fc28a2a4123154012e0ce3da1273de5f17e81b24.png",
          "desc": ""
        },
        "area_v2_id": 817,
        "area_v2_parent_id": 5,
        "area_v2_name": "男声电台",
        "area_v2_parent_name": "电台",
        "broadcast_type": 0,
        "cover": "https://i0.hdslb.com/bfs/live/new_room_cover/b15e3a1045321a7ffa7da08a47a276ca37557ef1.jpg",
        "link": "/32190922?hotRank=0",
        "online": 45487,
        "pendant_Info": {
          "2": {
            "type": "mobile_index_badge",
            "name": "福佑嘉年",
            "position": 2,
            "text": "省级亚军",
            "bg_color": "#FB9E60",
            "bg_pic": "http://i0.hdslb.com/bfs/live/13819a59895263cb25cc2ead3fecfaa3e864aac8.png",
            "pendant_id": 1750,
            "priority": 200,
            "created_at": 1738512313
          }
        },
        "roomid": 32190922,
        "title": "我想我们会幸福美满",
        "uname": "黑羊Klein",
        "face": "https://i2.hdslb.com/bfs/face/307c62a8b30a6dcfc02e9670e5dc10d0ecec6921.jpg",
        "verify": {
          "role": 0,
          "desc": "",
          "type": -1
        },
        "uid": 1989648419,
        "keyframe": "https://i0.hdslb.com/bfs/live-key-frame/keyframe02071536000032190922ma6cnx.jpg",
        "is_auto_play": 0,
        "head_box_type": 1,
        "flag": 0,
        "session_id": "4b58e9bf85ef0539525f1c7b1467a5b8_178A3B8F-86C1-4831-9DBB-9788C2445752",
        "group_id": 1000217,
        "show_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_178A3B8F-86C1-4831-9DBB-9788C2445752&group_id=1000217&biz=live&event_id=live_card_show&rule_key=&special_id=0&roomid=32190922&parent_id=5&area_id=817&page=0&position=2&platform=web",
        "click_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_178A3B8F-86C1-4831-9DBB-9788C2445752&group_id=1000217&biz=live&event_id=live_card_click&rule_key=&special_id=0&roomid=32190922&parent_id=5&area_id=817&page=0&position=2&platform=web",
        "special_id": 0,
        "watched_show": {
          "switch": true,
          "num": 491,
          "text_small": "491",
          "text_large": "491人看过",
          "icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
          "icon_location": 0,
          "icon_web": "https://i0.hdslb.com/bfs/live/8d9d0f33ef8bf6f308742752d13dd0df731df19c.png"
        },
        "is_nft": 0,
        "nft_dmark": "",
        "is_ad": false,
        "ad_transparent_content": null,
        "show_ad_icon": false,
        "status": false,
        "followers": 0
      },
      {
        "head_box": null,
        "area_v2_id": 654,
        "area_v2_parent_id": 2,
        "area_v2_name": "诛仙世界",
        "area_v2_parent_name": "网游",
        "broadcast_type": 0,
        "cover": "https://i0.hdslb.com/bfs/live/new_room_cover/fdad2cfb408510df56a01af66254f630ee4b86b8.jpg",
        "link": "/25959685?hotRank=0",
        "online": 2151,
        "pendant_Info": {},
        "roomid": 25959685,
        "title": "免费接所有职业，死灵渊！只要收益",
        "uname": "哦-是大一啊",
        "face": "https://i1.hdslb.com/bfs/face/f83290ab5667f9c1ed778fb9c7c9cf6bf7624d4e.jpg",
        "verify": {
          "role": 0,
          "desc": "",
          "type": -1
        },
        "uid": 361517464,
        "keyframe": "https://i0.hdslb.com/bfs/live-key-frame/keyframe02071535000025959685tx1grb.jpg",
        "is_auto_play": 1,
        "head_box_type": 0,
        "flag": 0,
        "session_id": "4b58e9bf85ef0539525f1c7b1467a5b8_FB0DABE2-6A09-4EB7-8D2B-A4F892243A96",
        "group_id": 1000217,
        "show_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_FB0DABE2-6A09-4EB7-8D2B-A4F892243A96&group_id=1000217&biz=live&event_id=live_card_show&rule_key=&special_id=0&roomid=25959685&parent_id=2&area_id=654&page=0&position=3&platform=web",
        "click_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_FB0DABE2-6A09-4EB7-8D2B-A4F892243A96&group_id=1000217&biz=live&event_id=live_card_click&rule_key=&special_id=0&roomid=25959685&parent_id=2&area_id=654&page=0&position=3&platform=web",
        "special_id": 0,
        "watched_show": {
          "switch": true,
          "num": 269,
          "text_small": "269",
          "text_large": "269人看过",
          "icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
          "icon_location": 0,
          "icon_web": "https://i0.hdslb.com/bfs/live/8d9d0f33ef8bf6f308742752d13dd0df731df19c.png"
        },
        "is_nft": 0,
        "nft_dmark": "",
        "is_ad": false,
        "ad_transparent_content": null,
        "show_ad_icon": false,
        "status": false,
        "followers": 0
      },
      {
        "head_box": {
          "name": "钻石传说",
          "value": "https://i0.hdslb.com/bfs/live/2007dc239982e909a3c9971c27968e5c0a872917.png",
          "desc": ""
        },
        "area_v2_id": 192,
        "area_v2_parent_id": 5,
        "area_v2_name": "聊天电台",
        "area_v2_parent_name": "电台",
        "broadcast_type": 0,
        "cover": "https://i0.hdslb.com/bfs/live/new_room_cover/22f1fcac8d9764901005ae5867a8c6b589b93ac5.jpg",
        "link": "/31169918?hotRank=0",
        "online": 27764,
        "pendant_Info": {},
        "roomid": 31169918,
        "title": "东北最后的温柔",
        "uname": "关关-苏苏冠",
        "face": "https://i2.hdslb.com/bfs/face/14f5102417107a6535c11ec9ad99050f7d712a17.jpg",
        "verify": {
          "role": 0,
          "desc": "",
          "type": -1
        },
        "uid": 3537120278874479,
        "keyframe": "https://i0.hdslb.com/bfs/live-key-frame/keyframe02071532000031169918qep44l.jpg",
        "is_auto_play": 0,
        "head_box_type": 1,
        "flag": 0,
        "session_id": "4b58e9bf85ef0539525f1c7b1467a5b8_3E272538-AA76-4953-BF21-5BB19ECFEE28",
        "group_id": 1000217,
        "show_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_3E272538-AA76-4953-BF21-5BB19ECFEE28&group_id=1000217&biz=live&event_id=live_card_show&rule_key=&special_id=0&roomid=31169918&parent_id=5&area_id=192&page=0&position=4&platform=web",
        "click_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_3E272538-AA76-4953-BF21-5BB19ECFEE28&group_id=1000217&biz=live&event_id=live_card_click&rule_key=&special_id=0&roomid=31169918&parent_id=5&area_id=192&page=0&position=4&platform=web",
        "special_id": 0,
        "watched_show": {
          "switch": true,
          "num": 297,
          "text_small": "297",
          "text_large": "297人看过",
          "icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
          "icon_location": 0,
          "icon_web": "https://i0.hdslb.com/bfs/live/8d9d0f33ef8bf6f308742752d13dd0df731df19c.png"
        },
        "is_nft": 0,
        "nft_dmark": "",
        "is_ad": false,
        "ad_transparent_content": null,
        "show_ad_icon": false,
        "status": false,
        "followers": 0
      },
      {
        "head_box": null,
        "area_v2_id": 82,
        "area_v2_parent_id": 2,
        "area_v2_name": "剑网3",
        "area_v2_parent_name": "网游",
        "broadcast_type": 0,
        "cover": "https://i0.hdslb.com/bfs/live/user_cover/9551fbb571b35bac3702c47e955177f17cab5cd2.jpg",
        "link": "/2849730?hotRank=0",
        "online": 4008,
        "pendant_Info": {},
        "roomid": 2849730,
        "title": "午间陪伴花间刷币",
        "uname": "o诡墨o",
        "face": "https://i1.hdslb.com/bfs/face/43ab308f836eb352aa4d541b55aafab2fa4435aa.jpg",
        "verify": {
          "role": 0,
          "desc": "",
          "type": -1
        },
        "uid": 71574442,
        "keyframe": "https://i0.hdslb.com/bfs/live-key-frame/keyframe02071535000002849730qo0792.jpg",
        "is_auto_play": 1,
        "head_box_type": 0,
        "flag": 0,
        "session_id": "4b58e9bf85ef0539525f1c7b1467a5b8_4BAFD91A-DDED-4655-BE47-064A6152BF9B",
        "group_id": 1000217,
        "show_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_4BAFD91A-DDED-4655-BE47-064A6152BF9B&group_id=1000217&biz=live&event_id=live_card_show&rule_key=&special_id=0&roomid=2849730&parent_id=2&area_id=82&page=0&position=5&platform=web",
        "click_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_4BAFD91A-DDED-4655-BE47-064A6152BF9B&group_id=1000217&biz=live&event_id=live_card_click&rule_key=&special_id=0&roomid=2849730&parent_id=2&area_id=82&page=0&position=5&platform=web",
        "special_id": 0,
        "watched_show": {
          "switch": true,
          "num": 204,
          "text_small": "204",
          "text_large": "204人看过",
          "icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
          "icon_location": 0,
          "icon_web": "https://i0.hdslb.com/bfs/live/8d9d0f33ef8bf6f308742752d13dd0df731df19c.png"
        },
        "is_nft": 0,
        "nft_dmark": "",
        "is_ad": false,
        "ad_transparent_content": null,
        "show_ad_icon": false,
        "status": false,
        "followers": 0
      },
      {
        "head_box": {
          "name": "迷梦幻境头像框",
          "value": "https://i0.hdslb.com/bfs/garb/open/d272c8cdb2ab737f5aa3c1cf5a27db274e0ce034.png",
          "desc": ""
        },
        "area_v2_id": 744,
        "area_v2_parent_id": 9,
        "area_v2_name": "虚拟Singer",
        "area_v2_parent_name": "虚拟主播",
        "broadcast_type": 0,
        "cover": "https://i0.hdslb.com/bfs/live/new_room_cover/6e68e5c4f3d720e6f14952174be848383b879dad.jpg",
        "link": "/21603945?hotRank=0",
        "online": 10606,
        "pendant_Info": {},
        "roomid": 21603945,
        "title": "听歌碎碎念！~",
        "uname": "Minicatty",
        "face": "https://i0.hdslb.com/bfs/face/812d9ea6f3420d5c58ff455408275563f03fb861.jpg",
        "verify": {
          "role": 7,
          "desc": "bilibili 直播高能主播",
          "type": 0
        },
        "uid": 423902976,
        "keyframe": "https://i0.hdslb.com/bfs/live-key-frame/keyframe02071535000021603945pekr70.jpg",
        "is_auto_play": 0,
        "head_box_type": 2,
        "flag": 0,
        "session_id": "4b58e9bf85ef0539525f1c7b1467a5b8_56778C3F-4B14-4C78-8DF8-53721196E8D8",
        "group_id": 1000217,
        "show_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_56778C3F-4B14-4C78-8DF8-53721196E8D8&group_id=1000217&biz=live&event_id=live_card_show&rule_key=&special_id=0&roomid=21603945&parent_id=9&area_id=744&page=0&position=6&platform=web",
        "click_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_56778C3F-4B14-4C78-8DF8-53721196E8D8&group_id=1000217&biz=live&event_id=live_card_click&rule_key=&special_id=0&roomid=21603945&parent_id=9&area_id=744&page=0&position=6&platform=web",
        "special_id": 0,
        "watched_show": {
          "switch": true,
          "num": 235,
          "text_small": "235",
          "text_large": "235人看过",
          "icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
          "icon_location": 0,
          "icon_web": "https://i0.hdslb.com/bfs/live/8d9d0f33ef8bf6f308742752d13dd0df731df19c.png"
        },
        "is_nft": 0,
        "nft_dmark": "",
        "is_ad": false,
        "ad_transparent_content": null,
        "show_ad_icon": false,
        "status": false,
        "followers": 0
      },
      {
        "head_box": null,
        "area_v2_id": 80,
        "area_v2_parent_id": 2,
        "area_v2_name": "吃鸡行动",
        "area_v2_parent_name": "网游",
        "broadcast_type": 0,
        "cover": "https://i0.hdslb.com/bfs/live/new_room_cover/fa7292a8741a40a612a1c466da58b7f9cc08f363.jpg",
        "link": "/22976905?hotRank=0",
        "online": 8536,
        "pendant_Info": {},
        "roomid": 22976905,
        "title": "全是细节！",
        "uname": "菠萝鸽",
        "face": "https://i1.hdslb.com/bfs/face/f073d24cbb992b4589825896de3fb9bc559ba180.jpg",
        "verify": {
          "role": 1,
          "desc": "bilibili 知名游戏UP主、直播高能主播",
          "type": 0
        },
        "uid": 1849164526,
        "keyframe": "https://i0.hdslb.com/bfs/live-key-frame/keyframe020715350000229769056wy0mu.jpg",
        "is_auto_play": 1,
        "head_box_type": 0,
        "flag": 0,
        "session_id": "4b58e9bf85ef0539525f1c7b1467a5b8_CE3B32EC-E84D-4545-A693-97882454E0ED",
        "group_id": 1000217,
        "show_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_CE3B32EC-E84D-4545-A693-97882454E0ED&group_id=1000217&biz=live&event_id=live_card_show&rule_key=&special_id=0&roomid=22976905&parent_id=2&area_id=80&page=0&position=7&platform=web",
        "click_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_CE3B32EC-E84D-4545-A693-97882454E0ED&group_id=1000217&biz=live&event_id=live_card_click&rule_key=&special_id=0&roomid=22976905&parent_id=2&area_id=80&page=0&position=7&platform=web",
        "special_id": 0,
        "watched_show": {
          "switch": true,
          "num": 919,
          "text_small": "919",
          "text_large": "919人看过",
          "icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
          "icon_location": 0,
          "icon_web": "https://i0.hdslb.com/bfs/live/8d9d0f33ef8bf6f308742752d13dd0df731df19c.png"
        },
        "is_nft": 0,
        "nft_dmark": "",
        "is_ad": false,
        "ad_transparent_content": null,
        "show_ad_icon": false,
        "status": false,
        "followers": 0
      },
      {
        "head_box": null,
        "area_v2_id": 646,
        "area_v2_parent_id": 10,
        "area_v2_name": "生活杂谈",
        "area_v2_parent_name": "生活",
        "broadcast_type": 0,
        "cover": "https://i0.hdslb.com/bfs/live/new_room_cover/833e4d5449bcb4e425eb6399e0ef71f06903d083.jpg",
        "link": "/21291747?hotRank=0",
        "online": 38125,
        "pendant_Info": {},
        "roomid": 21291747,
        "title": "哪吒抢了封神票房？",
        "uname": "陈哥惜命天涯",
        "face": "https://i1.hdslb.com/bfs/face/d2c7e9c9b918ec969b2e15a5f2194bae3acd966e.jpg",
        "verify": {
          "role": 0,
          "desc": "",
          "type": -1
        },
        "uid": 286563388,
        "keyframe": "https://i0.hdslb.com/bfs/live-key-frame/keyframe0207153000002129174742tpke.jpg",
        "is_auto_play": 0,
        "head_box_type": 0,
        "flag": 0,
        "session_id": "4b58e9bf85ef0539525f1c7b1467a5b8_63BEC7F6-172E-46FC-BBAD-8CD3547AE6C1",
        "group_id": 1000217,
        "show_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_63BEC7F6-172E-46FC-BBAD-8CD3547AE6C1&group_id=1000217&biz=live&event_id=live_card_show&rule_key=&special_id=0&roomid=21291747&parent_id=10&area_id=646&page=0&position=8&platform=web",
        "click_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_63BEC7F6-172E-46FC-BBAD-8CD3547AE6C1&group_id=1000217&biz=live&event_id=live_card_click&rule_key=&special_id=0&roomid=21291747&parent_id=10&area_id=646&page=0&position=8&platform=web",
        "special_id": 0,
        "watched_show": {
          "switch": true,
          "num": 3107,
          "text_small": "3107",
          "text_large": "3107人看过",
          "icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
          "icon_location": 0,
          "icon_web": "https://i0.hdslb.com/bfs/live/8d9d0f33ef8bf6f308742752d13dd0df731df19c.png"
        },
        "is_nft": 0,
        "nft_dmark": "",
        "is_ad": false,
        "ad_transparent_content": null,
        "show_ad_icon": false,
        "status": false,
        "followers": 0
      },
      {
        "head_box": {
          "name": "Lirin兔耳娘 收藏集",
          "value": "https://i2.hdslb.com/bfs/garb/open/41e2a2e3693f49e0b721c443fd784aa533456c49.png",
          "desc": ""
        },
        "area_v2_id": 745,
        "area_v2_parent_id": 9,
        "area_v2_name": "虚拟Gamer",
        "area_v2_parent_name": "虚拟主播",
        "broadcast_type": 0,
        "cover": "https://i0.hdslb.com/bfs/live/new_room_cover/b444bc87fbe1b346184f061efaffff21b24371f1.jpg",
        "link": "/23797026?hotRank=0",
        "online": 13294,
        "pendant_Info": {},
        "roomid": 23797026,
        "title": "日v 萌新玩玩三角洲♡",
        "uname": "樱咲奈央_Official",
        "face": "https://i2.hdslb.com/bfs/face/163330968a4a5fc8f31e9da9e919bbc258ecf40c.jpg",
        "verify": {
          "role": 7,
          "desc": "bilibili直播高能主播",
          "type": 0
        },
        "uid": 1880188304,
        "keyframe": "https://i0.hdslb.com/bfs/live-key-frame/keyframe020715310000237970260gnmn1.jpg",
        "is_auto_play": 0,
        "head_box_type": 2,
        "flag": 0,
        "session_id": "4b58e9bf85ef0539525f1c7b1467a5b8_691E1F11-4960-4707-92EF-0F0D996E434C",
        "group_id": 1000217,
        "show_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_691E1F11-4960-4707-92EF-0F0D996E434C&group_id=1000217&biz=live&event_id=live_card_show&rule_key=&special_id=0&roomid=23797026&parent_id=9&area_id=745&page=0&position=9&platform=web",
        "click_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_691E1F11-4960-4707-92EF-0F0D996E434C&group_id=1000217&biz=live&event_id=live_card_click&rule_key=&special_id=0&roomid=23797026&parent_id=9&area_id=745&page=0&position=9&platform=web",
        "special_id": 0,
        "watched_show": {
          "switch": true,
          "num": 999,
          "text_small": "999",
          "text_large": "999人看过",
          "icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
          "icon_location": 0,
          "icon_web": "https://i0.hdslb.com/bfs/live/8d9d0f33ef8bf6f308742752d13dd0df731df19c.png"
        },
        "is_nft": 0,
        "nft_dmark": "",
        "is_ad": false,
        "ad_transparent_content": null,
        "show_ad_icon": false,
        "status": false,
        "followers": 0
      },
      {
        "head_box": null,
        "area_v2_id": 624,
        "area_v2_parent_id": 10,
        "area_v2_name": "电子榨菜",
        "area_v2_parent_name": "生活",
        "broadcast_type": 0,
        "cover": "https://i0.hdslb.com/bfs/live/user_cover/a8a7681eaf20e43e16444e502106a436eb0e454c.jpg",
        "link": "/1831473323?hotRank=0",
        "online": 6510,
        "pendant_Info": {},
        "roomid": 1831473323,
        "title": "粤语片-法证1",
        "uname": "曦曦每天都开心呀",
        "face": "https://i1.hdslb.com/bfs/face/aa2112252080ec2298ea51b129c842fea7ed58f5.jpg",
        "verify": {
          "role": 0,
          "desc": "",
          "type": -1
        },
        "uid": 1434707683,
        "keyframe": "https://i0.hdslb.com/bfs/live-key-frame/keyframe020715350018314733230k1dhu.jpg",
        "is_auto_play": 0,
        "head_box_type": 0,
        "flag": 0,
        "session_id": "4b58e9bf85ef0539525f1c7b1467a5b8_947BC1A4-E0F4-4ECE-AE40-9D9817848F9A",
        "group_id": 1000217,
        "show_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_947BC1A4-E0F4-4ECE-AE40-9D9817848F9A&group_id=1000217&biz=live&event_id=live_card_show&rule_key=&special_id=0&roomid=1831473323&parent_id=10&area_id=624&page=0&position=10&platform=web",
        "click_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_947BC1A4-E0F4-4ECE-AE40-9D9817848F9A&group_id=1000217&biz=live&event_id=live_card_click&rule_key=&special_id=0&roomid=1831473323&parent_id=10&area_id=624&page=0&position=10&platform=web",
        "special_id": 0,
        "watched_show": {
          "switch": true,
          "num": 1446,
          "text_small": "1446",
          "text_large": "1446人看过",
          "icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
          "icon_location": 0,
          "icon_web": "https://i0.hdslb.com/bfs/live/8d9d0f33ef8bf6f308742752d13dd0df731df19c.png"
        },
        "is_nft": 0,
        "nft_dmark": "",
        "is_ad": false,
        "ad_transparent_content": null,
        "show_ad_icon": false,
        "status": false,
        "followers": 0
      },
      {
        "head_box": {
          "name": "帕里",
          "value": "https://i0.hdslb.com/bfs/garb/item/7c9cd30bfab66e9490d8a03fc48754cdb12b4901.png",
          "desc": ""
        },
        "area_v2_id": 745,
        "area_v2_parent_id": 9,
        "area_v2_name": "虚拟Gamer",
        "area_v2_parent_name": "虚拟主播",
        "broadcast_type": 0,
        "cover": "https://i0.hdslb.com/bfs/live/new_room_cover/bd898138564a7e892e05dd1ff9cf9c34bdd9cb5b.jpg",
        "link": "/42512?hotRank=0",
        "online": 11612,
        "pendant_Info": {},
        "roomid": 42512,
        "title": "【文明7】使臣，你去死一下，然后我发兵",
        "uname": "优礼子Ghaast",
        "face": "https://i0.hdslb.com/bfs/face/e3f05d5b7bf56c57f55026676da71cc487d93988.jpg",
        "verify": {
          "role": 7,
          "desc": "bilibili直播高能主播",
          "type": 0
        },
        "uid": 6141432,
        "keyframe": "https://i0.hdslb.com/bfs/live-key-frame/keyframe020715350000000425126wxphk.jpg",
        "is_auto_play": 0,
        "head_box_type": 2,
        "flag": 0,
        "session_id": "4b58e9bf85ef0539525f1c7b1467a5b8_0517EBF3-EE5C-4967-A77A-9DB3F89A58A8",
        "group_id": 1000217,
        "show_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_0517EBF3-EE5C-4967-A77A-9DB3F89A58A8&group_id=1000217&biz=live&event_id=live_card_show&rule_key=&special_id=0&roomid=42512&parent_id=9&area_id=745&page=0&position=11&platform=web",
        "click_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_0517EBF3-EE5C-4967-A77A-9DB3F89A58A8&group_id=1000217&biz=live&event_id=live_card_click&rule_key=&special_id=0&roomid=42512&parent_id=9&area_id=745&page=0&position=11&platform=web",
        "special_id": 0,
        "watched_show": {
          "switch": true,
          "num": 1998,
          "text_small": "1998",
          "text_large": "1998人看过",
          "icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
          "icon_location": 0,
          "icon_web": "https://i0.hdslb.com/bfs/live/8d9d0f33ef8bf6f308742752d13dd0df731df19c.png"
        },
        "is_nft": 0,
        "nft_dmark": "",
        "is_ad": false,
        "ad_transparent_content": null,
        "show_ad_icon": false,
        "status": false,
        "followers": 0
      },
      {
        "head_box": {
          "name": "百人舰队主播头像",
          "value": "https://i0.hdslb.com/bfs/vc/071eb10548fe9bc482ff69331983d94192ce9507.png",
          "desc": ""
        },
        "area_v2_id": 102,
        "area_v2_parent_id": 2,
        "area_v2_name": "最终幻想14",
        "area_v2_parent_name": "网游",
        "broadcast_type": 0,
        "cover": "https://i0.hdslb.com/bfs/live/new_room_cover/9370e1bbda854c8ac3b9a2a9a6e960106f307580.jpg",
        "link": "/1897222?hotRank=0",
        "online": 80052,
        "pendant_Info": {
          "1": {
            "type": "mobile_index_badge",
            "name": "百人成就",
            "position": 1,
            "text": "",
            "bg_color": "#FB9E60",
            "bg_pic": "https://i0.hdslb.com/bfs/live/539ce26c45cd4019f55b64cfbcedc3c01820e539.png",
            "pendant_id": 426,
            "priority": 1,
            "created_at": 1738857680
          }
        },
        "roomid": 1897222,
        "title": "鸟区pvp",
        "uname": "猫姐姐nya",
        "face": "https://i1.hdslb.com/bfs/face/acc5559db9494af780b05fbf05c158995c48d023.jpg",
        "verify": {
          "role": 1,
          "desc": "bilibili 知名游戏UP主",
          "type": 0
        },
        "uid": 41377819,
        "keyframe": "https://i0.hdslb.com/bfs/live-key-frame/keyframe020715360000018972225sqtbh.jpg",
        "is_auto_play": 1,
        "head_box_type": 1,
        "flag": 0,
        "session_id": "4b58e9bf85ef0539525f1c7b1467a5b8_93F5FBE6-4F84-40C9-AEA1-149E9D5D366E",
        "group_id": 1000217,
        "show_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_93F5FBE6-4F84-40C9-AEA1-149E9D5D366E&group_id=1000217&biz=live&event_id=live_card_show&rule_key=&special_id=0&roomid=1897222&parent_id=2&area_id=102&page=0&position=12&platform=web",
        "click_callback": "https://live-trace.bilibili.com/xlive/data-interface/v1/index/log?sessionID=4b58e9bf85ef0539525f1c7b1467a5b8_93F5FBE6-4F84-40C9-AEA1-149E9D5D366E&group_id=1000217&biz=live&event_id=live_card_click&rule_key=&special_id=0&roomid=1897222&parent_id=2&area_id=102&page=0&position=12&platform=web",
        "special_id": 0,
        "watched_show": {
          "switch": true,
          "num": 2930,
          "text_small": "2930",
          "text_large": "2930人看过",
          "icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
          "icon_location": 0,
          "icon_web": "https://i0.hdslb.com/bfs/live/8d9d0f33ef8bf6f308742752d13dd0df731df19c.png"
        },
        "is_nft": 0,
        "nft_dmark": "",
        "is_ad": false,
        "ad_transparent_content": null,
        "show_ad_icon": false,
        "status": false,
        "followers": 0
      }
    ],
    "top_room_id": 0
  }
}
```

</details>
