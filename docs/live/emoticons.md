# 直播间表情

## 获取直播间的表情包

> https://api.live.bilibili.com/xlive/web-ucenter/v2/emoticon/GetEmoticons

*请求方法: GET*

认证方式: Cookie (SESSDATA)

**URL 参数:**

| 参数名   | 类型   | 内容       | 必要性 | 备注 |
| -------- | ------ | ---------- | ------ | ---- |
| platform | string | 平台       | 必要   | 已知: `pc``android` `ios` |
| room_id  | number | 直播间长号 | 必要   | 只支持 `room_id` 不支持 `short_id` |

**JSON 回复:**

根对象:

| 字段    | 类型   | 内容     | 备注 |
| ------- | ------ | -------- | ---- |
| code    | number | 返回值   | 0: 成功 |
| message | string | 错误消息 | 默认为 0 |
| ttl     | number | 1        |      |
| data    | object | 信息本体 | 见下 |

`data` 对象:

| 字段         | 类型     | 内容       | 备注 |
| ------------ | -------- | ---------- | ---- |
| data         | object[] | 表情包数据 | 套了个娃 |
| fans_brand   | number   | 品牌标识?  |      |
| purchase_url | null?    | 购买链接?  |      |

`data.data[]` 对象:

| 字段                  | 类型     | 内容      | 备注 |
| --------------------- | -------- | --------- | ---- |
| current_cover         | string   | 封面 URL  |      |
| emoticons             | object[] | 表情列表  |      |
| pkg_descript          | string   | 文字描述  |      |
| pkg_id                | number   | 包 ID     |      |
| pkg_name              | string   | 包名称    |      |
| pkg_perm              | number   | 使用权限? |      |
| pkg_type              | number   | 包类型    |      |
| recently_used_emoticons | unknown[] | 最近使用的表情 |  |
| top_show              | object   | 顶部展示信息? |  |
| top_show_recent       | object   | 最近使用的顶部展示信息? |  |
| unlock_identity       | number   | 解锁所需身份标识? |  |
| unlock_need_gift      | number   | 解锁所需礼物? |  |

`data.data[].emoticons[]` 对象:

| 字段          | 类型   | 内容 | 备注 |
| ------------- | ------ | ---- | ---- |
| bulge_display | number | 突出展示? |  |
| descript      | string | 描述 |  |
| emoji         | string | 触发关键词? |  |
| emoticon_id   | number | 表情 ID |  |
| emoticon_unique | string | 表情唯一标识 |  |
| emoticon_value_type | number | 表情值类型? |  |
| height        | number | 表情图片高度 |  |
| identity      | number | 身份限制标识? |  |
| in_player_area | number | 播放器区域内展示? |  |
| is_dynamic    | number | 是否为动态表情? |  |
| perm          | number | 使用权限? |  |
| unlock_need_gift | number | 解锁需求礼物? |  |
| unlock_need_level | number | 解锁需求等级? |  |
| unlock_show_color | string | 解锁展示颜色? |  |
| unlock_show_image | string | 解锁展示图片? |  |
| unlock_show_text | string  | 解锁展示文字? |  |
| url           | string | 表情图片 URL |  |
| width         | number | 表情图片宽度 |  |

`data.data[].top_show` 对象:

| 字段      | 类型   | 内容 | 备注 |
| --------- | ------ | ---- | ---- |
| top_left  | object |      | 左上 |
| top_right | object |      | 右上 |

`data.data[].top_show.top_left` 对象:

| 字段  | 类型   | 内容  | 备注 |
| ----- | ------ | ----- | ---- |
| image | string | 图片? |      |
| text  | string | 文字  |      |

`data.data[].top_show.top_right` 对象:

同 `data.data[].top_show.top_left` 对象

`data.data[].top_show_recent` 对象:

同 `data.data[].top_show` 对象

`data.data[].top_show_recent.top_left` 对象:

同 `data.data[].top_show.top_left` 对象

`data.data[].top_show_recent.top_right` 对象:

同 `data.data[].top_show.top_left` 对象

**示例:**

获取直播间 `14047` 的表情包, 平台为 `android`

```shell
curl -G 'https://api.live.bilibili.com/xlive/web-ucenter/v2/emoticon/GetEmoticons' \
--url-query 'room_id=14047' \
--url-query 'platform=android' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "data": {
    "data": [
      {
        "current_cover": "http://i0.hdslb.com/bfs/live/39b7667c2601e4da8019472f5e3df1f2278278b6.png",
        "emoticons": [
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "啊",
            "emoticon_id": 331,
            "emoticon_unique": "official_331",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/cbf2746062242e77bdcb9eb08edbf9b151fe0c2e.png",
            "width": 200
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "冲鸭",
            "emoticon_id": 332,
            "emoticon_unique": "official_332",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/dea7fbbc1c3d3c80f4c7b27263e13460f21874e4.png",
            "width": 200
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "upup",
            "emoticon_id": 348,
            "emoticon_unique": "official_348",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/38d84a4cd2f40069202ee13bbdca5b23d29710fb.png",
            "width": 200
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "星星向龙",
            "emoticon_id": 343,
            "emoticon_unique": "official_343",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/a69423be39b0f2a87dc74f2e44ead70de0eb0d4f.png",
            "width": 200
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "欧皇驾到",
            "emoticon_id": 335,
            "emoticon_unique": "official_335",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/650399e68d0d93df4b3f9e95e7437e83be7fbb1a.png",
            "width": 200
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "这个好耶",
            "emoticon_id": 345,
            "emoticon_unique": "official_345",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/2ce08b31618d3ad0d34877bf949ef0089a0438b7.png",
            "width": 200
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "泰裤辣",
            "emoticon_id": 339,
            "emoticon_unique": "official_339",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/82c38fc930ae764b4c6215f544bf8e1dba73b51c.png",
            "width": 200
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "闪避技能",
            "emoticon_id": 337,
            "emoticon_unique": "official_337",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/fa3febe6c62f3bcd042953141930d96fb8451e60.png",
            "width": 200
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "稳住能赢",
            "emoticon_id": 342,
            "emoticon_unique": "official_342",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/b3495aaa935b045bfc2e1d52738ea7b124e0d552.png",
            "width": 200
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "中奖喷雾",
            "emoticon_id": 346,
            "emoticon_unique": "official_346",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/c3cfa182d16564301d39e4c7e4c186dfb9fabf96.png",
            "width": 200
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "赞",
            "emoticon_id": 147,
            "emoticon_unique": "official_147",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/bbd9045570d0c022a984c637e406cb0e1f208aa9.png",
            "width": 150
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "妙啊",
            "emoticon_id": 109,
            "emoticon_unique": "official_109",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/7b7a2567ad1520f962ee226df777eaf3ca368fbc.png",
            "width": 138
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "有点东西",
            "emoticon_id": 113,
            "emoticon_unique": "official_113",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/39e518474a3673c35245bf6ef8ebfff2c003fdc3.png",
            "width": 186
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "很有精神",
            "emoticon_id": 150,
            "emoticon_unique": "official_150",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/e91cbe30b2db1e624bd964ad1f949661501f42f8.png",
            "width": 201
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "泪目",
            "emoticon_id": 103,
            "emoticon_unique": "official_103",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/aa93b9af7ba03b50df23b64e9afd0d271955cd71.png",
            "width": 144
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "赢麻了",
            "emoticon_id": 128,
            "emoticon_unique": "official_128",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/1d4c71243548a1241f422e90cd8ba2b75c282f6b.png",
            "width": 156
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "钝角",
            "emoticon_id": 133,
            "emoticon_unique": "official_133",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/38cf68c25d9ff5d364468a062fc79571db942ff3.png",
            "width": 153
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "干杯",
            "emoticon_id": 149,
            "emoticon_unique": "official_149",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/8fedede4028a72e71dae31270eedff5f706f7d18.png",
            "width": 162
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "2333",
            "emoticon_id": 124,
            "emoticon_unique": "official_124",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/a98e35996545509188fe4d24bd1a56518ea5af48.png",
            "width": 183
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "打call",
            "emoticon_id": 146,
            "emoticon_unique": "official_146",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/fa1eb4dce3ad198bb8650499830560886ce1116c.png",
            "width": 195
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "多谢款待",
            "emoticon_id": 148,
            "emoticon_unique": "official_148",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/4609dad97c0dfa61f8da0b52ab6fff98e0cf1e58.png",
            "width": 207
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "awsl",
            "emoticon_id": 102,
            "emoticon_unique": "official_102",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/328e93ce9304090f4035e3aa7ef031d015bbc915.png",
            "width": 162
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "鸡汤来咯",
            "emoticon_id": 137,
            "emoticon_unique": "official_137",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/b371151503978177b237afb85185b0f5431d0106.png",
            "width": 198
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "雀食",
            "emoticon_id": 118,
            "emoticon_unique": "official_118",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/7251dc7df587388a3933743bf38394d12a922cd7.png",
            "width": 159
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "禁止套娃",
            "emoticon_id": 108,
            "emoticon_unique": "official_108",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/6a644577437d0bd8a314990dd8ccbec0f3b30c92.png",
            "width": 204
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "暗中观察",
            "emoticon_id": 104,
            "emoticon_unique": "official_104",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/18af5576a4582535a3c828c3ae46a7855d9c6070.png",
            "width": 156
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "保熟吗",
            "emoticon_id": 105,
            "emoticon_unique": "official_105",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/0e28444c8e2faef3169e98e1a41c487144d877d4.png",
            "width": 162
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "比心",
            "emoticon_id": 106,
            "emoticon_unique": "official_106",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/1ba5126b10e5efe3e4e29509d033a37f128beab2.png",
            "width": 132
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "咸鱼翻身",
            "emoticon_id": 110,
            "emoticon_unique": "official_110",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/7db4188c050f55ec59a1629fbc5a53661e4ba780.png",
            "width": 180
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "mua",
            "emoticon_id": 111,
            "emoticon_unique": "official_111",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/08f1aebaa4d9c170aa79cbafe521ef0891bdf2b5.png",
            "width": 165
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "来了来了",
            "emoticon_id": 115,
            "emoticon_unique": "official_115",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/61e790813c51eab55ebe0699df1e9834c90b68ba.png",
            "width": 168
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "贴贴",
            "emoticon_id": 116,
            "emoticon_unique": "official_116",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/88b49dac03bfd5d4cb49672956f78beb2ebd0d0b.png",
            "width": 162
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "牛牛牛",
            "emoticon_id": 117,
            "emoticon_unique": "official_117",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/343f7f7e87fa8a07df63f9cba6b776196d9066f0.png",
            "width": 168
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "颠个勺",
            "emoticon_id": 119,
            "emoticon_unique": "official_119",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/625989e78079e3dc38d75cb9ac392fe8c1aa4a75.png",
            "width": 195
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "好家伙",
            "emoticon_id": 122,
            "emoticon_unique": "official_122",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/c2650bf9bbc79b682a4b67b24df067fdd3e5e9ca.png",
            "width": 165
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "下次一定",
            "emoticon_id": 125,
            "emoticon_unique": "official_125",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/cc2652cef69b22117f1911391567bd2957f27e08.png",
            "width": 177
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "不上Ban",
            "emoticon_id": 126,
            "emoticon_unique": "official_126",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/eff44c1fc03311573e8817ca8010aca72404f65c.png",
            "width": 231
          },
          {
            "bulge_display": 0,
            "descript": "",
            "emoji": "上热榜",
            "emoticon_id": 134,
            "emoticon_unique": "official_134",
            "emoticon_value_type": 0,
            "height": 60,
            "identity": 99,
            "in_player_area": 1,
            "is_dynamic": 1,
            "perm": 1,
            "unlock_need_gift": 0,
            "unlock_need_level": 0,
            "unlock_show_color": "",
            "unlock_show_image": "",
            "unlock_show_text": "",
            "url": "http://i0.hdslb.com/bfs/live/83d5b9cdaaa820c2756c013031d34dac1fd4156b.png",
            "width": 168
          }
        ],
        "pkg_descript": "官方表情(系统)",
        "pkg_id": 1,
        "pkg_name": "通用表情",
        "pkg_perm": 1,
        "pkg_type": 1,
        "recently_used_emoticons": [],
        "top_show": {
          "top_left": {
            "image": "",
            "text": "通用表情"
          },
          "top_right": {
            "image": "",
            "text": ""
          }
        },
        "top_show_recent": {
          "top_left": {
            "image": "",
            "text": ""
          },
          "top_right": {
            "image": "",
            "text": ""
          }
        },
        "unlock_identity": 0,
        "unlock_need_gift": 0
      }
    ],
    "fans_brand": 1,
    "purchase_url": null
  },
  "message": "0",
  "ttl": 1
}
```
</details>
