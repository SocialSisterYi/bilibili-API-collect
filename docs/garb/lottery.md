# 装扮/收藏集

由 [#1080](https://github.com/SocialSisterYi/bilibili-API-collect/issues/1080) 提供

## 装扮/收藏集搜索API

> https://api.bilibili.com/x/garb/v2/mall/home/search

*请求方式: GET*

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
|----- |--- |------- |----- |--- |
| key_word | str | 关键词 | 不必要 |  |
| ps | int | 每页返回数据的最大值 | 不必要 | |
| pn | int | 当前页数 | 不必要 | |

**JSON回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
|-- |-- |-- |-- |
| code | num | 返回值 | 0：成功 |
| message | str | 错误信息 | 默认为0 |
| ttl | num | 1 |  |
| data | obj | 返回数据 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
|-|---|--|--|
| list | array | 返回数据 | 若无则为 null |
| ps | int | 每页返回数据的最大值 | 默认为20 |
| pn | int | 当前页数 | 默认为1 |
| total | int | 查询到数据的总个数 |  |

`data` 中的 `list` 数组中的对象:

| 字段 | 类型 | 内容 | 备注 |
|-|---|--|--|
| item_id | int | 装扮对应的id | 收藏集均为0,需要在properties获取 |
| name | str | 装扮/收藏集名称 | |
| group_id | int | ?分类的id | |
| group_name | str | ?分类的名称 | |
| part_id | int | 类型id | 装扮为6 收藏集为0 |
| state | str | 当前状态 | 默认为“active” |
| properties | obj | 见下方 | |
| current_activity | obj | 见下方 | |
| next_activity | int | ?下次活动的时间 | |
| current_sources | int | ?活动开始时间 | |
| finish_sources | int | ?活动结束时间 | |
| sale_left_time | int | ?销售剩余时间 | |
| sale_time_end | int | ?销售结束时间 | |
| sale_surplus | int | 未知 | |
| sale_count_desc | str | 销售量显示文本 | |
| total_count_desc | str | 总量显示文本 | |
| tag | str | 当前状态标签 | |
| jump_link | str | 跳转链接 | |
| sales_mode | int | ?销售状态 | |

`list` 数组中的对象中的 `properties` 对象:

共有字段:

| 字段 | 类型 | 内容 | 备注|
|-|---|--|--|
| image_cover | str | 图片封面 | |
| sale_bp_forever_raw | str | 价格 | 以0.01B币为单位|
| type | str | 类型 | 收藏集为dlc_act, 装扮为ip|

装扮特有：

| 字段 | 类型 | 内容 | 备注|
| - | - | ---- | ----- |
| desc | str | 介绍文本 | 仅装扮|
| fan_desc | str | 装扮名称 | 仅装扮|
| fan_item_ids | str | 未知 | 仅装扮|
| fan_mid | str | 该up的uid | 仅装扮|
| fan_no_color | str | 十六进制颜色 | 仅装扮|
| fan_recommend_desc | str | 装备说明 | 仅装扮|
| fan_recommend_jump_type | str | 跳转类型 | 仅装扮|
| fan_recommend_jump_value | str | 跳转值 | 仅装扮|
| fan_share_image | str | 分享时的背景图 | 仅装扮|
| gray_rule | str | 未知 | 仅装扮|
| gray_rule_type | str | 未知 | 仅装扮|
| image_cover_color | str | ?图片封面纯色背景 | 仅装扮|
| is_hide | str | 是否隐藏 | 仅装扮|
| item_id_card | str | 装扮背景卡片id | 仅装扮|
| item_id_emoji | str | 装扮表情包id | 仅装扮|
| item_id_thumbup | str | 装扮点赞动画id | 仅装扮|
| open_platform_vip_discount | str | 是否有大会员减免 | 仅装扮|
| owner_uid | str | UID | 默认为虚拟主播衍生品小货架, 仅装扮|
| rank_investor_show | str | 未知 | 仅装扮|
| realname_auth | str | ?是否需要实名认证 | 仅装扮|
| sale_bp_pm_raw | str | 该装扮基础套餐价格 | 以0.01B币为单位, 仅装扮|
| sale_buy_num_limit | str | 购买限额 | 仅装扮|
| sale_quantity | str | 该装扮粉丝专属套餐限额 | 仅装扮|
| sale_quantity_limit | str | 该装扮粉丝专属套餐是否限额 | 仅装扮|
| sale_region_ip_limit | str | 该装扮限制购买地区 | 仅装扮|
| sale_reserve_switch | str | 未知 | 仅装扮|
| sale_time_begin | str | 开始售卖时的时间戳 | 仅装扮|
| sale_type | str | 售卖类型 | 默认为pay, 仅装扮|
| suit_card_type | str | 仅装扮 | |

收藏集特有:

| 字段 | 类型 | 内容 | 备注 |
| - | ---- | - | --------- |
| book_amount | str | 购买总数 | 仅收藏集 |
| dlc_act_id | str | 收藏集活动id | 仅收藏集 |
| dlc_act_status | str | 收藏集活动状态 | 仅收藏集 |
| dlc_is_free | str | 收藏集抽奖是否免费 | 仅收藏集 |
| dlc_lottery_id | str | 收藏集抽奖id | 仅收藏集 |
| dlc_lottery_sale_quantity | str | 购买总数 | 仅收藏集 |
| dlc_lottery_type | str | ?抽奖类型 | 仅收藏集 |
| dlc_sale_end_time | str | 收藏集抽奖结束时间 | 仅收藏集 |
| dlc_sale_mode | str | 未知 | 仅收藏集 |
| dlc_sale_start_time | str | 收藏集抽奖开始时间 | 仅收藏集 |
| dlc_surplus_stock | str | 未知 | 仅收藏集 |

`list` 数组中的对象中的 `current_activity` 对象:

| 字段 | 类型 | 内容 | 备注 |
| - | --- | --- | - |
| type | str | 当前永久价格活动类型 | 装扮一般是open_platform_vip_discount, 收藏集一般是first_draw_discount |
| time_limit | bool | 是否存在时间限制 |  |
| time_left | int | 剩余时间 |  |
| tag | str | 显示标签 |  |
| price_bp_forever | int | 永久价格 | 以0.01B币为单位 |
| price_bp_month | int | 一个月的价格 | 以0.01B币为单位 |
| type_month | str | 当前一个月的价格活动类型 | 仅装扮 |
| tag_month | str | 显示标签 | 仅装扮 |
| time_limit_month | bool | 是否存在时间限制 | 仅装扮 |
| time_left_month | int | 剩余时间 | 仅装扮 |

**示例:**

搜索关键词为 `2233`:

```shell
curl -G 'https://api.bilibili.com/x/garb/v2/mall/home/search' \
--data-urlencode 'key_word=2233' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "list": [
      {
        "item_id": 0,
        "name": "2024拜年纪-2233拜年画册",
        "group_id": 70,
        "group_name": "2024拜年纪-2233拜年画册",
        "part_id": 0,
        "state": "active",
        "properties": {
          "book_amount": "1395313",
          "dlc_act_id": "279",
          "dlc_act_status": "2",
          "dlc_is_free": "0",
          "dlc_lottery_id": "256",
          "dlc_lottery_sale_quantity": "313028",
          "dlc_lottery_type": "1",
          "dlc_sale_end_time": "2114406245",
          "dlc_sale_mode": "1",
          "dlc_sale_start_time": "1707458400",
          "dlc_surplus_stock": "0",
          "image_cover": "http://i0.hdslb.com/bfs/archive/f96a8cf6866ccef8f54de4773acf0cb07b915ac6.png",
          "sale_bp_forever_raw": "990",
          "type": "dlc_act"
        },
        "current_activity": null,
        "next_activity": {
          "type": "first_draw_discount",
          "time_limit": false,
          "time_left": -1728418723,
          "tag": "大会员首抽",
          "price_bp_month": 490,
          "price_bp_forever": 490,
          "type_month": "",
          "tag_month": "",
          "time_limit_month": false,
          "time_left_month": 0
        },
        "current_sources": null,
        "finish_sources": null,
        "sale_left_time": -1728418723,
        "sale_time_end": -1728418723,
        "sale_surplus": 0,
        "sale_count_desc": "31万+",
        "total_count_desc": "已售31万+份",
        "tag": "",
        "jump_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live\u0026act_id=279\u0026hybrid_set_header=2\u0026lottery_id=256",
        "sales_mode": 0
      },
      {
        "item_id": 0,
        "name": "2024 BML\u0026BW 2233收藏集-2233福利卡池",
        "group_id": 70,
        "group_name": "2024 BML\u0026BW 2233收藏集-2233福利卡池",
        "part_id": 0,
        "state": "active",
        "properties": {
          "book_amount": "4376",
          "dlc_act_id": "102962",
          "dlc_act_status": "2",
          "dlc_is_free": "1",
          "dlc_lottery_id": "102966",
          "dlc_lottery_sale_quantity": "2677",
          "dlc_lottery_type": "2",
          "dlc_sale_end_time": "1729828800",
          "dlc_sale_mode": "2",
          "dlc_sale_start_time": "1721876400",
          "dlc_surplus_stock": "0",
          "image_cover": "https://i0.hdslb.com/bfs/garb/4a374316b1e9a07cffeccbdeff585c472dcdcc26.png",
          "sale_bp_forever_raw": "0",
          "type": "dlc_act"
        },
        "current_activity": null,
        "next_activity": null,
        "current_sources": null,
        "finish_sources": null,
        "sale_left_time": -1728418723,
        "sale_time_end": -1728418723,
        "sale_surplus": 0,
        "sale_count_desc": "2千+",
        "total_count_desc": "已发放2千+份",
        "tag": "限时DLC",
        "jump_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live\u0026act_id=102962\u0026hybrid_set_header=2\u0026lottery_id=102966",
        "sales_mode": 0
      },
      {
        "item_id": 0,
        "name": "2233·幻境序曲-长夜",
        "group_id": 70,
        "group_name": "2233·幻境序曲-长夜",
        "part_id": 0,
        "state": "active",
        "properties": {
          "book_amount": "228065",
          "dlc_act_id": "102161",
          "dlc_act_status": "2",
          "dlc_is_free": "0",
          "dlc_lottery_id": "103087",
          "dlc_lottery_sale_quantity": "71200",
          "dlc_lottery_type": "2",
          "dlc_sale_end_time": "2114406245",
          "dlc_sale_mode": "1",
          "dlc_sale_start_time": "1722139200",
          "dlc_surplus_stock": "0",
          "image_cover": "https://i0.hdslb.com/bfs/garb/f7e4f434ba6b93434b9e60df3c57a07552af4ca1.png",
          "sale_bp_forever_raw": "990",
          "type": "dlc_act"
        },
        "current_activity": null,
        "next_activity": {
          "type": "first_draw_discount",
          "time_limit": false,
          "time_left": -1728418723,
          "tag": "大会员首抽",
          "price_bp_month": 490,
          "price_bp_forever": 490,
          "type_month": "",
          "tag_month": "",
          "time_limit_month": false,
          "time_left_month": 0
        },
        "current_sources": null,
        "finish_sources": null,
        "sale_left_time": -1728418723,
        "sale_time_end": -1728418723,
        "sale_surplus": 0,
        "sale_count_desc": "7万+",
        "total_count_desc": "已售7万+份",
        "tag": "DLC池",
        "jump_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live\u0026act_id=102161\u0026hybrid_set_header=2\u0026lottery_id=103087",
        "sales_mode": 0
      },
      {
        "item_id": 0,
        "name": "2233·群星闪耀时-双子座",
        "group_id": 70,
        "group_name": "2233·群星闪耀时-双子座",
        "part_id": 0,
        "state": "active",
        "properties": {
          "book_amount": "1164544",
          "dlc_act_id": "113",
          "dlc_act_status": "2",
          "dlc_is_free": "0",
          "dlc_lottery_id": "16",
          "dlc_lottery_sale_quantity": "572712",
          "dlc_lottery_type": "1",
          "dlc_sale_end_time": "2114406245",
          "dlc_sale_mode": "1",
          "dlc_sale_start_time": "1686196800",
          "dlc_surplus_stock": "0",
          "image_cover": "http://i0.hdslb.com/bfs/archive/ed35d12a3dce7764d6cb5b02cb4a459373472522.jpg",
          "sale_bp_forever_raw": "990",
          "type": "dlc_act"
        },
        "current_activity": null,
        "next_activity": {
          "type": "first_draw_discount",
          "time_limit": false,
          "time_left": -1728418723,
          "tag": "大会员首抽",
          "price_bp_month": 90,
          "price_bp_forever": 90,
          "type_month": "",
          "tag_month": "",
          "time_limit_month": false,
          "time_left_month": 0
        },
        "current_sources": null,
        "finish_sources": null,
        "sale_left_time": -1728418723,
        "sale_time_end": -1728418723,
        "sale_surplus": 0,
        "sale_count_desc": "57万+",
        "total_count_desc": "已售57万+份",
        "tag": "",
        "jump_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live\u0026act_id=113\u0026hybrid_set_header=2\u0026lottery_id=16",
        "sales_mode": 0
      },
      {
        "item_id": 39389,
        "name": "2233人生百戏-花木兰",
        "group_id": 70,
        "group_name": "2233人生百戏-花木兰",
        "part_id": 6,
        "state": "active",
        "properties": {
          "desc": "为从军设妙计女扮男装，涉千山越万水亲赴戎机。2233人生百戏·花木兰装扮上线啦！本套装包括动态卡片、点赞动效和表情包，永久购买还能成为认证粉丝，领取粉丝专属装扮！",
          "fan_desc": "人生百戏-花木兰",
          "fan_id": "人生百戏-花木兰",
          "fan_item_ids": "39335,39384,39353,39354",
          "fan_mid": "35365327",
          "fan_no_color": "#eb3d3e",
          "fan_recommend_desc": "为从军设妙计女扮男装，涉千山越万水亲赴戎机。",
          "fan_recommend_jump_type": "url",
          "fan_recommend_jump_value": "https://space.bilibili.com/35365327?spm_id_from=333.337.0.0",
          "fan_share_image": "https://i0.hdslb.com/bfs/garb/item/5ddd3f72ef2a938e9125851f488068012b841ad4.jpg",
          "gray_rule": "true",
          "gray_rule_type": "all",
          "image_cover": "https://i0.hdslb.com/bfs/garb/item/e21ec12047bcd93e6afb8e52a68eb9835cd54a23.jpg",
          "image_cover_color": "#d8b796",
          "is_hide": "false",
          "item_id_card": "39334",
          "item_id_emoji": "39352",
          "item_id_thumbup": "39336",
          "open_platform_vip_discount": "true",
          "owner_uid": "647193094",
          "rank_investor_show": "false",
          "realname_auth": "false",
          "sale_bp_forever_raw": "5000",
          "sale_bp_pm_raw": "800",
          "sale_buy_num_limit": "100",
          "sale_quantity": "20000",
          "sale_quantity_limit": "true",
          "sale_region_ip_limit": "全球",
          "sale_reserve_switch": "false",
          "sale_time_begin": "1666868400",
          "sale_type": "pay",
          "suit_card_type": "big_img",
          "type": "ip"
        },
        "current_activity": null,
        "next_activity": {
          "type": "open_platform_vip_discount",
          "time_limit": true,
          "time_left": 417469277,
          "tag": "大会员平台折扣",
          "price_bp_month": 640,
          "price_bp_forever": 4000,
          "type_month": "open_platform_vip_discount",
          "tag_month": "大会员平台折扣",
          "time_limit_month": true,
          "time_left_month": 417469277
        },
        "current_sources": null,
        "finish_sources": null,
        "sale_left_time": -61550323,
        "sale_time_end": -1728418723,
        "sale_surplus": 8650,
        "sale_count_desc": "1万+",
        "total_count_desc": "已售1万+份",
        "tag": "",
        "jump_link": "https://www.bilibili.com/h5/mall/suit/detail?navhide=1\u0026id=39389",
        "sales_mode": 0
      },
      {
        "item_id": 4259,
        "name": "2233白色情人节",
        "group_id": 70,
        "group_name": "2233白色情人节",
        "part_id": 6,
        "state": "active",
        "properties": {
          "desc": "shot你的心——无论是谁都拥有爱的权利，快换上白色情人节专属装扮来遇见心里的那个ta吧！本套装包括头像挂件、动态卡片、点赞动效和表情包，永久购买还能成为认证粉丝，领取粉丝专属装扮！",
          "fan_desc": "白色情人节",
          "fan_id": "2233白色情人节",
          "fan_item_ids": "4257,4230,4256,4255,4253,4254",
          "fan_mid": "174501086",
          "fan_no_color": "#f85574",
          "fan_recommend_desc": "平淡日常中迎来浪漫的节日，象征爱情的丘比特们悄悄来到少女们身边，用爱之箭觉醒了懵懂悸动的心。新鲜的玫瑰，闪耀光泽的草莓，白色情人节这天为你准备不一样的惊喜。",
          "fan_recommend_jump_type": "url",
          "fan_recommend_jump_value": "https://b23.tv/54WVWS",
          "fan_share_image": "https://i0.hdslb.com/bfs/garb/item/30e3f1b234dd33a2a5446dd7d05b31835ac74d4b.jpg",
          "gray_rule": "true",
          "gray_rule_type": "all",
          "image_cover": "https://i0.hdslb.com/bfs/garb/item/a8d60a7d4f1f5a5de667b307736f701cb39c0741.jpg",
          "image_cover_color": "#a3a8ec",
          "image_cover_long": "https://i0.hdslb.com/bfs/garb/item/5ac3bb024d42ff0f26de07ce974351d62587c6ea.jpg",
          "image_desc": "https://i0.hdslb.com/bfs/garb/item/cfe753a010d124a95fb311c372a5be69d82c8e13.jpg",
          "is_hide": "false",
          "item_id_card": "4231",
          "item_id_emoji": "4252",
          "item_id_pendant": "4229",
          "item_id_thumbup": "4232",
          "open_platform_vip_discount": "true",
          "owner_uid": "647193094",
          "rank_investor_show": "true",
          "realname_auth": "false",
          "sale_bp_forever_raw": "5900",
          "sale_bp_pm_raw": "800",
          "sale_buy_num_limit": "100",
          "sale_quantity": "52000",
          "sale_quantity_limit": "true",
          "sale_region_ip_limit": "全球",
          "sale_reserve_switch": "false",
          "sale_time_begin": "1615694400",
          "sale_type": "pay",
          "suit_card_type": "big_img",
          "type": "ip"
        },
        "current_activity": null,
        "next_activity": {
          "type": "open_platform_vip_discount",
          "time_limit": true,
          "time_left": 417469277,
          "tag": "大会员平台折扣",
          "price_bp_month": 640,
          "price_bp_forever": 4720,
          "type_month": "open_platform_vip_discount",
          "tag_month": "大会员平台折扣",
          "time_limit_month": true,
          "time_left_month": 417469277
        },
        "current_sources": null,
        "finish_sources": null,
        "sale_left_time": -112724323,
        "sale_time_end": -1728418723,
        "sale_surplus": 0,
        "sale_count_desc": "5万+",
        "total_count_desc": "已售5万+份",
        "tag": "粉丝套装已售罄",
        "jump_link": "https://www.bilibili.com/h5/mall/suit/detail?navhide=1\u0026id=4259",
        "sales_mode": 0
      },
      {
        "item_id": 0,
        "name": "2233·少女日记-蔚蓝幻想曲",
        "group_id": 70,
        "group_name": "2233·少女日记-蔚蓝幻想曲",
        "part_id": 0,
        "state": "active",
        "properties": {
          "book_amount": "100310",
          "dlc_act_id": "103244",
          "dlc_act_status": "2",
          "dlc_is_free": "0",
          "dlc_lottery_id": "103885",
          "dlc_lottery_sale_quantity": "16563",
          "dlc_lottery_type": "2",
          "dlc_sale_end_time": "2114406245",
          "dlc_sale_mode": "1",
          "dlc_sale_start_time": "1727236800",
          "dlc_surplus_stock": "0",
          "image_cover": "http://i0.hdslb.com/bfs/archive/a04b3e9ef354493a0890a9197412f1c77e01ba0f.jpg",
          "sale_bp_forever_raw": "990",
          "type": "dlc_act"
        },
        "current_activity": null,
        "next_activity": {
          "type": "first_draw_discount",
          "time_limit": false,
          "time_left": -1728418723,
          "tag": "大会员首抽",
          "price_bp_month": 490,
          "price_bp_forever": 490,
          "type_month": "",
          "tag_month": "",
          "time_limit_month": false,
          "time_left_month": 0
        },
        "current_sources": null,
        "finish_sources": null,
        "sale_left_time": -1728418723,
        "sale_time_end": -1728418723,
        "sale_surplus": 0,
        "sale_count_desc": "1万+",
        "total_count_desc": "已售1万+份",
        "tag": "DLC池",
        "jump_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live\u0026act_id=103244\u0026hybrid_set_header=2\u0026lottery_id=103885",
        "sales_mode": 0
      },
      {
        "item_id": 0,
        "name": "2233·少女日记-十四岁生日",
        "group_id": 70,
        "group_name": "2233·少女日记-十四岁生日",
        "part_id": 0,
        "state": "active",
        "properties": {
          "book_amount": "100310",
          "dlc_act_id": "103244",
          "dlc_act_status": "2",
          "dlc_is_free": "0",
          "dlc_lottery_id": "103247",
          "dlc_lottery_sale_quantity": "83747",
          "dlc_lottery_type": "1",
          "dlc_sale_end_time": "2114406245",
          "dlc_sale_mode": "1",
          "dlc_sale_start_time": "1723780800",
          "dlc_surplus_stock": "0",
          "image_cover": "https://i0.hdslb.com/bfs/garb/9c338eb4841cad917665140cc08c7d14b5c7e0bf.png",
          "sale_bp_forever_raw": "990",
          "type": "dlc_act"
        },
        "current_activity": null,
        "next_activity": {
          "type": "first_draw_discount",
          "time_limit": false,
          "time_left": -1728418723,
          "tag": "大会员首抽",
          "price_bp_month": 490,
          "price_bp_forever": 490,
          "type_month": "",
          "tag_month": "",
          "time_limit_month": false,
          "time_left_month": 0
        },
        "current_sources": null,
        "finish_sources": null,
        "sale_left_time": -1728418723,
        "sale_time_end": -1728418723,
        "sale_surplus": 0,
        "sale_count_desc": "8万+",
        "total_count_desc": "已售8万+份",
        "tag": "",
        "jump_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live\u0026act_id=103244\u0026hybrid_set_header=2\u0026lottery_id=103247",
        "sales_mode": 0
      },
      {
        "item_id": 0,
        "name": "2024 BML\u0026BW 2233收藏集-BML\u0026BW2024",
        "group_id": 70,
        "group_name": "2024 BML\u0026BW 2233收藏集-BML\u0026BW2024",
        "part_id": 0,
        "state": "active",
        "properties": {
          "book_amount": "4376",
          "dlc_act_id": "102962",
          "dlc_act_status": "2",
          "dlc_is_free": "0",
          "dlc_lottery_id": "102963",
          "dlc_lottery_sale_quantity": "1699",
          "dlc_lottery_type": "1",
          "dlc_sale_end_time": "2114406245",
          "dlc_sale_mode": "1",
          "dlc_sale_start_time": "1721876400",
          "dlc_surplus_stock": "0",
          "image_cover": "https://i0.hdslb.com/bfs/garb/6c2d68faf143c33b484b110e2221ab15a0a1f85c.png",
          "sale_bp_forever_raw": "990",
          "type": "dlc_act"
        },
        "current_activity": null,
        "next_activity": {
          "type": "first_draw_discount",
          "time_limit": false,
          "time_left": -1728418723,
          "tag": "大会员首抽",
          "price_bp_month": 490,
          "price_bp_forever": 490,
          "type_month": "",
          "tag_month": "",
          "time_limit_month": false,
          "time_left_month": 0
        },
        "current_sources": null,
        "finish_sources": null,
        "sale_left_time": -1728418723,
        "sale_time_end": -1728418723,
        "sale_surplus": 0,
        "sale_count_desc": "1千+",
        "total_count_desc": "已售1千+份",
        "tag": "",
        "jump_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live\u0026act_id=102962\u0026hybrid_set_header=2\u0026lottery_id=102963",
        "sales_mode": 0
      }
    ],
    "pn": 1,
    "ps": 20,
    "total": 187
  }
}
```

</details>

## 收藏集信息API

> https://api.bilibili.com/x/vas/dlc_act/lottery_home_detail

*请求方式: GET*

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | ---- | ---- | ---- | ---- |
| act_id | int | 收藏集活动id | 必要 |  |
| lottery_id | int | 收藏集抽奖id|不必要| 但缺了不返回数据 |

**JSON回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| code | num | 返回值 | 0：成功 |
| message | str | 错误信息 | 默认为 0 |
| ttl | num | 1 |  |
| data | obj | 返回数据 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
|-|-|-|-|
| lottery_id | int | 收藏集抽奖id |  |
| name | str | 收藏集抽奖名称 |  |
| item_list | array | 可抽出的物品列表 |  |
| collect_list | obj | 见下方 |  |
| button_bubble | null | 未知 |  |
| guide_info | null | 未知 |  |
| is_booked | int | 未知 |  |
| total_book_cnt | int | 未知 |  |
| is_fission | int | 未知 |  |
| physical_exchange | int | 未知 |  |

`data` 中的 `item_list` 数组中的对象:

|字段 | 类型 | 内容 | 备注|
|-|-|-|-|
|item_type | int | 物品类型 | 目前只拿到个1, 其他值未知|
|card_info | obj | 见下方 |  |

`item_list` 数组中的对象中的 `card_info` 对象:

|字段 | 类型 | 内容 | 备注 |
|-|-|-|-|
|card_type_id | int | 该卡片id |  |
|card_name | str | 该卡片名称 |  |
|card_img | str | 该卡片图片 | 无水印|
|card_type | int | int | 未知|
|video_list | array | 该卡片动态视频 | 无水印|
|is_physical_orientation | int | 该卡片旋转方向 |  |
|card_scarcity | int | 该卡片稀有度 |  |
|is_mute | int | 该卡片是否静音 |  |
|width | int | 该卡片像素宽度 |  |
|height | int | 该卡片像素高度 |  |
|card_ext_text | str | ?该卡片文件名字符串 |  |
|card_img_download | str | 该卡片图片 | 有水印|
|video_list_download | array | 该卡片动态视频 | 有水印|
|subtitles_url | 未知 |  | |
|play | null | 未知 |  |
|tag | null | 未知 |  |
|card_sub_type | int | 未知 |  |
|is_new_tag | int | 未知 |  |
|is_up_tag | int | 未知 |  |
|is_limited_card | int | 未知 |  |
|stock_info | null | 未知 |  |

`data` 中的 `collect_list` 对象:

| 字段 | 类型 | 内容 | 备注|
|-|-|-|-|
| collect_infos | array | 见下方 |  |
| collect_chain | null | 未知 |  |

`collect_list` 中的 `collect_infos` 数组中的对象：

| 字段 | 类型 | 内容 | 备注 |
|-|-|-|-|
| collect_id | int | 收集品id |  |
| start_time | int | 开始时间 |  |
| end_time | int | 结束时间 |  |
| redeem_text | str | 兑换条件 |  |
| redeem_item_type | int | 兑换物类型 |  |
| redeem_item_id | str | 兑换物id |  |
| redeem_item_name | str | 兑换物名称 |  |
| redeem_item_image | str | 兑换物预览图片 |  |
| owned_item_amount | int | 拥有的数量 |  |
| require_item_amount | int | 需要的数量 |  |
| has_redeemed_cnt | int | 兑换次数 |  |
| effective_forever | int | 是否永久有效 |  |
| redeem_item_image_download | str | 未知 | |
| card_item | obj | 见下方 | 有时为 null  |
| jump_url | str | ?跳转链接 |  |
| redeem_cond_type | str | 当前兑换状态 |  |
| remain_stock | int | 当前库存 |  |
| total_stock | int | 总库存 |  |
| lottery_id | int | 抽奖id |  |
| reward_tag | str | 奖励显示标签 |  |
| redeem_detail_image | str | 兑换详情图片 |  |
| redeem_detail_videos | null | 未知 |  |
| sort | int | 排序 |  |
| redeem_items_optional | null | 未知 |  |
| unlock_condition | obj | 见下方 |  |

`collect_infos` 数组中的对象中的 `card_item` 对象:

| 字段 | 类型 | 内容 | 备注|
|-|-|-|-|
| card_type_info | null |  |  |
| card_asset_info | null |  |  |
| play | null |  |  |
| tag | null |  |  |

`collect_infos` 数组中的对象中的 `unlock_condition` 对象:

|字段 | 类型 | 内容 | 备注|
|-|-|-|-|
|unlocked | bool | 是否解锁 |  |
|lock_type | int | 解锁类型 |  |
|expire_at | int | 过期与 |  |
|unlocked_at | int | 解锁于 |  |
|unlock_threshold | int | ?解锁起点 |  |
|current_threshold | int | ?当前起点 |  |

**示例:**

```shell
curl -G --url 'https://api.bilibili.com/x/vas/dlc_act/lottery_home_detail' \
--url-query 'act_id=111' \
--url-query 'lottery_id=15'
```

<details>
<summary>查看响应示例:</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "lottery_id": 15,
        "name": "夏日萌菜",
        "item_list": [
            {
                "item_type": 1,
                "card_info": {
                    "card_type_id": 700903,
                    "card_name": "水中嬉戏·隐藏",
                    "card_img": "https://i0.hdslb.com/bfs/baselabs/d41acfc3bfcc9032a9759fbd9e64147a6d9a24b0.png",
                    "card_type": 2,
                    "video_list": [
                        "https://upos-hz-mirrorakam.akamaized.net/panguxcodeboss/2b/y2/_000008vnv2ddoooah248hqoyz2gy22b-1-152111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1723459855&gen=playurlv2&os=akam&oi=1823807565&trid=400d9529a562468c8312c1f4c4beb2e3B&mid=0&platform=html5&og=cos&upsig=d22ca6102adb9ffe257f702047be6ef2&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&hdnts=exp=1723459855~hmac=753ff946c9e4b3813eb72c744ed3a399ba9a225fe4767a7a03835890fcbe4b8a&bvc=vod&nettype=0&orderid=0,1&logo=00000000&f=B_0_0"
                    ],
                    "is_physical_orientation": 0,
                    "card_scarcity": 40,
                    "is_mute": 0,
                    "width": 1242,
                    "height": 1862,
                    "card_ext_text": "",
                    "card_img_download": "https://i0.hdslb.com/bfs/garb/d38c42b6f1151298888da5902bca5a41e14f67e1.png",
                    "video_list_download": [
                        "https://upos-hz-mirrorakam.akamaized.net/panguxcodeboss/digital_watermark/ib/30/_00003d7cuie74gr9z2322d7js5b30ib-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1723459855&gen=playurlv2&os=akam&oi=1823807565&trid=400d9529a562468c8312c1f4c4beb2e3B&mid=0&platform=html5&og=hw&upsig=24512302cfa3b1f762f3ad08a0a2f5fe&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&hdnts=exp=1723459855~hmac=5dc3cdfca31fca94c29a2ec945589ff319e97c3291dec2685184ec4083616cc2&bvc=vod&nettype=0&orderid=0,1&logo=00000000&f=B_0_0"
                    ],
                    "subtitles_url": "",
                    "play": null,
                    "tag": null,
                    "card_sub_type": 0,
                    "is_new_tag": 0,
                    "is_up_tag": 0,
                    "is_limited_card": 0,
                    "stock_info": null
                }
            },
            {
                "item_type": 1,
                "card_info": {
                    "card_type_id": 700902,
                    "card_name": "轻纱花语·隐藏",
                    "card_img": "https://i0.hdslb.com/bfs/baselabs/e4721d06a5c435be216b5011f0604c9e07d5e4af.png",
                    "card_type": 2,
                    "video_list": [
                        "https://upos-hz-mirrorakam.akamaized.net/panguxcodeboss/jb/4u/_00001f04wekkvpmr92osvwpej1e4ujb-1-152111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1723459855&gen=playurlv2&os=akam&oi=1823807565&trid=400d9529a562468c8312c1f4c4beb2e3B&mid=0&platform=html5&og=cos&upsig=ad574839c71e5327783acf248b552b3d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&hdnts=exp=1723459855~hmac=49276ec1afce1a8f571e257fb6d2ab7488f623aa50c2c3b7252258be72315c5e&bvc=vod&nettype=0&orderid=0,1&logo=00000000&f=B_0_0"
                    ],
                    "is_physical_orientation": 0,
                    "card_scarcity": 30,
                    "is_mute": 0,
                    "width": 1242,
                    "height": 1862,
                    "card_ext_text": "",
                    "card_img_download": "https://i0.hdslb.com/bfs/garb/0e49e7c8108a98944a96bfa594cf7f74c72398cf.png",
                    "video_list_download": [
                        "https://upos-hz-mirrorakam.akamaized.net/panguxcodeboss/digital_watermark/nb/58/_000007ovzgblf574s1ywvm7inwx58nb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1723459855&gen=playurlv2&os=akam&oi=1823807565&trid=400d9529a562468c8312c1f4c4beb2e3B&mid=0&platform=html5&og=cos&upsig=ec9de21147240e94494d736f277dfb64&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&hdnts=exp=1723459855~hmac=2370473349a25fae0ea023f65f1e09c70b45d086831eef5f4727b8443acdf9f5&bvc=vod&nettype=0&orderid=0,1&logo=00000000&f=B_0_0"
                    ],
                    "subtitles_url": "",
                    "play": null,
                    "tag": null,
                    "card_sub_type": 0,
                    "is_new_tag": 0,
                    "is_up_tag": 0,
                    "is_limited_card": 0,
                    "stock_info": null
                }
            },
            {
                "item_type": 1,
                "card_info": {
                    "card_type_id": 700904,
                    "card_name": "甜心女仆",
                    "card_img": "https://i0.hdslb.com/bfs/baselabs/e1f9c56a8f49910d07852f2bd648fee910f36ff6.png",
                    "card_type": 2,
                    "video_list": [
                        "https://upos-hz-mirrorakam.akamaized.net/panguxcodeboss/gb/j6/_000015vmteklku8oj1ypmp1yjijj6gb-1-152111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1723459855&gen=playurlv2&os=akam&oi=1823807565&trid=400d9529a562468c8312c1f4c4beb2e3B&mid=0&platform=html5&og=cos&upsig=c7412fe7b155deecbfea939f7c3d1b21&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&hdnts=exp=1723459855~hmac=8989673c367aa0ffbe747cdc66129a6d1698f1c2b60ace24861ad62127cdd6da&bvc=vod&nettype=0&orderid=0,1&logo=00000000&f=B_0_0"
                    ],
                    "is_physical_orientation": 0,
                    "card_scarcity": 20,
                    "is_mute": 0,
                    "width": 1242,
                    "height": 1862,
                    "card_ext_text": "",
                    "card_img_download": "https://i0.hdslb.com/bfs/garb/e6c69329d843603166fac8d41682c3489fd137d4.png",
                    "video_list_download": [
                        "https://upos-hz-mirrorakam.akamaized.net/panguxcodeboss/digital_watermark/zb/eq/_000018oi0e68wv4id2vkrk9ovpteqzb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1723459855&gen=playurlv2&os=akam&oi=1823807565&trid=400d9529a562468c8312c1f4c4beb2e3B&mid=0&platform=html5&og=hw&upsig=f972e8cd996d058deb4e0ffb1d57671e&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&hdnts=exp=1723459855~hmac=99054c626717b4ba61c01bbb0fe59f67feac394b89e19e4bbf95290d3a425f94&bvc=vod&nettype=0&orderid=0,1&logo=00000000&f=B_0_0"
                    ],
                    "subtitles_url": "",
                    "play": null,
                    "tag": null,
                    "card_sub_type": 0,
                    "is_new_tag": 0,
                    "is_up_tag": 0,
                    "is_limited_card": 0,
                    "stock_info": null
                }
            },
            {
                "item_type": 1,
                "card_info": {
                    "card_type_id": 700901,
                    "card_name": "约会憧憬",
                    "card_img": "https://i0.hdslb.com/bfs/baselabs/924ef9a71bf39010935b4a43845bec13c8a2022c.png",
                    "card_type": 1,
                    "video_list": null,
                    "is_physical_orientation": 0,
                    "card_scarcity": 10,
                    "is_mute": 0,
                    "width": 1242,
                    "height": 1863,
                    "card_ext_text": "",
                    "card_img_download": "https://i0.hdslb.com/bfs/garb/40a9ff949ca7a50dbce146ad28fbb567c2583261.png",
                    "video_list_download": null,
                    "subtitles_url": "",
                    "play": null,
                    "tag": null,
                    "card_sub_type": 0,
                    "is_new_tag": 0,
                    "is_up_tag": 0,
                    "is_limited_card": 0,
                    "stock_info": null
                }
            },
            {
                "item_type": 1,
                "card_info": {
                    "card_type_id": 700900,
                    "card_name": "夏日小憩",
                    "card_img": "https://i0.hdslb.com/bfs/baselabs/0eddbfc70200f16bef06acc88ef132eb25ede52d.png",
                    "card_type": 1,
                    "video_list": null,
                    "is_physical_orientation": 0,
                    "card_scarcity": 10,
                    "is_mute": 0,
                    "width": 1242,
                    "height": 1863,
                    "card_ext_text": "",
                    "card_img_download": "https://i0.hdslb.com/bfs/garb/61e26e17705e06ecdfdb9ff97befb19c702cf81e.png",
                    "video_list_download": null,
                    "subtitles_url": "",
                    "play": null,
                    "tag": null,
                    "card_sub_type": 0,
                    "is_new_tag": 0,
                    "is_up_tag": 0,
                    "is_limited_card": 0,
                    "stock_info": null
                }
            },
            {
                "item_type": 1,
                "card_info": {
                    "card_type_id": 700899,
                    "card_name": "微风校园",
                    "card_img": "https://i0.hdslb.com/bfs/baselabs/bbeaf7993566684e328e74d8ef7c47e6242869a2.png",
                    "card_type": 1,
                    "video_list": null,
                    "is_physical_orientation": 0,
                    "card_scarcity": 10,
                    "is_mute": 0,
                    "width": 1242,
                    "height": 1863,
                    "card_ext_text": "",
                    "card_img_download": "https://i0.hdslb.com/bfs/garb/8ac61045334699d621363ccac87153a7128ef0c3.png",
                    "video_list_download": null,
                    "subtitles_url": "",
                    "play": null,
                    "tag": null,
                    "card_sub_type": 0,
                    "is_new_tag": 0,
                    "is_up_tag": 0,
                    "is_limited_card": 0,
                    "stock_info": null
                }
            },
            {
                "item_type": 1,
                "card_info": {
                    "card_type_id": 700898,
                    "card_name": "萌宠幻想",
                    "card_img": "https://i0.hdslb.com/bfs/baselabs/f93f200ec862b4520b30e8f03219fbaca91a2089.png",
                    "card_type": 1,
                    "video_list": null,
                    "is_physical_orientation": 0,
                    "card_scarcity": 10,
                    "is_mute": 0,
                    "width": 1242,
                    "height": 1863,
                    "card_ext_text": "",
                    "card_img_download": "https://i0.hdslb.com/bfs/garb/93e59f3080f6b8070b0d0621496e4ed6cb20cf8f.png",
                    "video_list_download": null,
                    "subtitles_url": "",
                    "play": null,
                    "tag": null,
                    "card_sub_type": 0,
                    "is_new_tag": 0,
                    "is_up_tag": 0,
                    "is_limited_card": 0,
                    "stock_info": null
                }
            },
            {
                "item_type": 1,
                "card_info": {
                    "card_type_id": 700897,
                    "card_name": "空中环游",
                    "card_img": "https://i0.hdslb.com/bfs/baselabs/fc0c020091c0a9fb1778c420bc4f9773a72ea7ba.png",
                    "card_type": 1,
                    "video_list": null,
                    "is_physical_orientation": 0,
                    "card_scarcity": 10,
                    "is_mute": 0,
                    "width": 1242,
                    "height": 1863,
                    "card_ext_text": "",
                    "card_img_download": "https://i0.hdslb.com/bfs/garb/c1c6c9ca84b584bf5f2b0e1ec7d239eb935e4d44.png",
                    "video_list_download": null,
                    "subtitles_url": "",
                    "play": null,
                    "tag": null,
                    "card_sub_type": 0,
                    "is_new_tag": 0,
                    "is_up_tag": 0,
                    "is_limited_card": 0,
                    "stock_info": null
                }
            }
        ],
        "collect_list": {
            "collect_infos": [
                {
                    "collect_id": 0,
                    "start_time": 1685372400,
                    "end_time": 2114406245,
                    "redeem_text": "1抽必得勋章，可应用为评论背景&动态卡片",
                    "redeem_item_type": 1001,
                    "redeem_item_id": "",
                    "redeem_item_name": "夏日萌菜勋章",
                    "redeem_item_image": "http://i0.hdslb.com/bfs/archive/b3d915c6ad88609fb658393585f018459a7e620d.png",
                    "owned_item_amount": 0,
                    "require_item_amount": 1,
                    "has_redeemed_cnt": 0,
                    "effective_forever": 1,
                    "redeem_item_image_download": "",
                    "card_item": null,
                    "jump_url": "",
                    "redeem_cond_type": "",
                    "remain_stock": 0,
                    "total_stock": -1,
                    "lottery_id": 0,
                    "reward_tag": "",
                    "redeem_detail_image": "",
                    "redeem_detail_videos": null,
                    "sort": 0,
                    "redeem_items_optional": null,
                    "unlock_condition": {
                        "unlocked": true,
                        "lock_type": 0,
                        "expire_at": 0,
                        "unlocked_at": 0,
                        "unlock_threshold": 0,
                        "current_threshold": 0
                    }
                },
                {
                    "collect_id": 172,
                    "start_time": 1691640000,
                    "end_time": 2114406245,
                    "redeem_text": "抽出任意5张不同卡牌，即可领取，单UID仅可领取一次",
                    "redeem_item_type": 5,
                    "redeem_item_id": "56658",
                    "redeem_item_name": "夏日萌菜个性主题",
                    "redeem_item_image": "https://i0.hdslb.com/bfs/garb/48f755d6d08d96bfebcadee0be4bc34ce42421de.jpg",
                    "owned_item_amount": 0,
                    "require_item_amount": 5,
                    "has_redeemed_cnt": 0,
                    "effective_forever": 1,
                    "redeem_item_image_download": "",
                    "card_item": {
                        "card_type_info": null,
                        "play": null,
                        "tag": null,
                        "card_asset_info": null
                    },
                    "jump_url": "",
                    "redeem_cond_type": "scarcity",
                    "remain_stock": -1,
                    "total_stock": -1,
                    "lottery_id": 0,
                    "reward_tag": "任务奖励限定",
                    "redeem_detail_image": "https://i0.hdslb.com/bfs/garb/48f755d6d08d96bfebcadee0be4bc34ce42421de.jpg",
                    "redeem_detail_videos": null,
                    "sort": 0,
                    "redeem_items_optional": null,
                    "unlock_condition": {
                        "unlocked": true,
                        "lock_type": 0,
                        "expire_at": 0,
                        "unlocked_at": 0,
                        "unlock_threshold": 0,
                        "current_threshold": 0
                    }
                },
                {
                    "collect_id": 51,
                    "start_time": 1685372400,
                    "end_time": 2114406245,
                    "redeem_text": "抽出任意1张隐藏卡牌，即可领取，单UID仅可领取一次",
                    "redeem_item_type": 3,
                    "redeem_item_id": "53199",
                    "redeem_item_name": "夏日萌菜头像框",
                    "redeem_item_image": "https://i0.hdslb.com/bfs/garb/item/9fcb99ccfd057c5eac165832d71fb63f07f26097.png",
                    "owned_item_amount": 0,
                    "require_item_amount": 1,
                    "has_redeemed_cnt": 0,
                    "effective_forever": 1,
                    "redeem_item_image_download": "",
                    "card_item": {
                        "card_type_info": null,
                        "play": null,
                        "tag": null,
                        "card_asset_info": null
                    },
                    "jump_url": "",
                    "redeem_cond_type": "scarcity",
                    "remain_stock": -1,
                    "total_stock": -1,
                    "lottery_id": 0,
                    "reward_tag": "任务奖励限定",
                    "redeem_detail_image": "https://i0.hdslb.com/bfs/garb/item/9fcb99ccfd057c5eac165832d71fb63f07f26097.png",
                    "redeem_detail_videos": null,
                    "sort": 0,
                    "redeem_items_optional": null,
                    "unlock_condition": {
                        "unlocked": true,
                        "lock_type": 0,
                        "expire_at": 0,
                        "unlocked_at": 0,
                        "unlock_threshold": 0,
                        "current_threshold": 0
                    }
                },
                {
                    "collect_id": 50,
                    "start_time": 1685372400,
                    "end_time": 2114406245,
                    "redeem_text": "抽出任意3张不同卡牌，即可领取，单UID仅可领取一次",
                    "redeem_item_type": 2,
                    "redeem_item_id": "53178",
                    "redeem_item_name": "夏日萌菜表情包",
                    "redeem_item_image": "https://i0.hdslb.com/bfs/garb/462ae9b5735fef4bb9ed87a6d6467a4768b06006.png",
                    "owned_item_amount": 0,
                    "require_item_amount": 3,
                    "has_redeemed_cnt": 0,
                    "effective_forever": 1,
                    "redeem_item_image_download": "",
                    "card_item": {
                        "card_type_info": null,
                        "play": null,
                        "tag": null,
                        "card_asset_info": null
                    },
                    "jump_url": "",
                    "redeem_cond_type": "scarcity",
                    "remain_stock": -1,
                    "total_stock": -1,
                    "lottery_id": 0,
                    "reward_tag": "任务奖励限定",
                    "redeem_detail_image": "https://i0.hdslb.com/bfs/garb/462ae9b5735fef4bb9ed87a6d6467a4768b06006.png",
                    "redeem_detail_videos": null,
                    "sort": 0,
                    "redeem_items_optional": null,
                    "unlock_condition": {
                        "unlocked": true,
                        "lock_type": 0,
                        "expire_at": 0,
                        "unlocked_at": 0,
                        "unlock_threshold": 0,
                        "current_threshold": 0
                    }
                },
                {
                    "collect_id": 366,
                    "start_time": 1694768400,
                    "end_time": 1696953600,
                    "redeem_text": "抽齐全部8张卡牌领取，直接获得全图鉴进度条标记，10月28日前人工发放头像",
                    "redeem_item_type": 5,
                    "redeem_item_id": "59374",
                    "redeem_item_name": "水中嬉戏·隐藏出框头像",
                    "redeem_item_image": "https://i0.hdslb.com/bfs/garb/ff981dbdca5c6b539e22596674265ef1cb110c9c.png",
                    "owned_item_amount": 0,
                    "require_item_amount": 8,
                    "has_redeemed_cnt": 0,
                    "effective_forever": 0,
                    "redeem_item_image_download": "",
                    "card_item": {
                        "card_type_info": null,
                        "play": null,
                        "tag": null,
                        "card_asset_info": null
                    },
                    "jump_url": "",
                    "redeem_cond_type": "scarcity",
                    "remain_stock": -1,
                    "total_stock": -1,
                    "lottery_id": 0,
                    "reward_tag": "任务奖励限定",
                    "redeem_detail_image": "https://i0.hdslb.com/bfs/garb/ff981dbdca5c6b539e22596674265ef1cb110c9c.png",
                    "redeem_detail_videos": null,
                    "sort": 0,
                    "redeem_items_optional": null,
                    "unlock_condition": {
                        "unlocked": true,
                        "lock_type": 0,
                        "expire_at": 0,
                        "unlocked_at": 0,
                        "unlock_threshold": 0,
                        "current_threshold": 0
                    }
                }
            ],
            "collect_chain": null
        },
        "button_bubble": null,
        "guide_info": null,
        "is_booked": 0,
        "total_book_cnt": 0,
        "is_fission": 0,
        "physical_exchange": 0
    }
}
```

</details>

## 主题装扮信息API

> https://api.bilibili.com/x/garb/v2/mall/suit/detail

*请求方式: GET*

**URL参数:**

| 参数名     | 类型  | 内容   | 必要性 | 备注 |
|---------|-----|------|----| ---- |
| buvid   | str | 设备唯一标识 | 不必要 |  |
| csrf    | str | 用户csrf | 不必要 |  |
| from    | str | 来源页面 | 不必要 |  |
| from_id | int | 来源页面id | 不必要 |  |
| item_id | int | 装扮id | 必要 |  |
| part    | str | ?分类  | 不必要 |  |

**JSON回复:**

根对象：

| 字段      | 类型  | 内容   | 备注              |
|---------|-----|------|-----------------|
| code    | num | 返回值  | `0`：成功<br />`-400`：错误 |
| message | str | 错误信息 |                 |
| ttl     | num | 1    |                     |
| data    | obj | 信息本体 |                |

`data` 对象：

| 字段    | 类型  | 内容     | 备注         |
|---------|-----|--------|------------|
| item_id | num | 装扮id   |            |
| name | str | 装扮名称   |            |
| group_id | num | 分组id   |            |
| group_name | str | 分组名称   |            |
| part_id | num | 分类id   |            |
| state | str | 状态     |            |
| properties | obj | 装扮具体属性 |            |
| current_activity | str | 当前活动   |            |
| next_activity | obj | 下一个活动  |            |
| current_sources | str |        | **作用尚不明确** |
| finish_sources | str |        | **作用尚不明确**   |
| sale_left_time | num |        | **作用尚不明确**           |
| sale_time_end | num |        | **作用尚不明确**           |
| sale_surplus | num | 商品剩余数量 |            |
| sale_count_desc | str | 促销销量说明 |            |
| total_count_desc | str | 总销量说明  |            |
| tag | str | 标签     |            |
| jump_link | str | 跳转链接   |            |
| sales_mode | num | 促销模式   |            |
| suit_items | obj | 装扮具体内容 |            |
| fan_user | obj | 装扮来源用户 |            |
| unlock_items | obj | 未解锁装扮  |            |
| activity_entrance | obj | 活动入口   |            |

`properties` 对象：

| 字段    | 类型  | 内容             | 备注                          |
|---------|-----|----------------|-----------------------------|
| desc | str | 说明             |                             |
| fan_desc | str | 用户说明           |                             |
| fan_id | str | 装扮id           | 获取到的数据，有时候是数字文本，有时候是普通文本    |
| fan_item_ids | str | 装扮id列表         |                             |
| fan_mid | str | 用户mid          |                             |
| fan_no_color | str |                | **为一串颜色16进制字符串，但作用尚不明确**    |
| fan_recommend_desc | str | 用户推荐说明         |                             |
| fan_recommend_jump_type | str | 跳转类型           |                             |
| fan_recommend_jump_value | str | 跳转的值           | 一般为该装扮所有者的个人空间链接            |
| fan_share_image | str |                |                             |
| gray_rule | str |                | **布尔型转换的字符串，作用尚不明确**          |
| gray_rule_type | str |                | **作用尚不明确**                  |
| image_cover | str | 图片封面链接         |                             |
| image_cover_color | str | 图片封面颜色         |                             |
| is_hide | str | 是否隐藏           | **布尔型转换的字符串，作用尚不明确**          |
| item_id_card | str | 动态卡片id         |                             |
| item_id_emoji | str | 表情包id          |                             |
| item_id_thumbup | str | 动态点赞特效id       |                             |
| open_platform_vip_discount | str | 是否开启平台VIP折扣    |                             |
| owner_uid | str | 装扮所有者的用户uid    |                             |
| rank_investor_show | str | ?显示投资者排名       | **布尔型转换的字符串，作用尚不明确**          |
| realname_auth | str |                | **布尔型转换的字符串，作用尚不明确**          |
| sale_bp_forever_raw | str |                |                             |
| sale_bp_pm_raw | str |                |                             |
| sale_buy_num_limit | str | 促销限制数量         |                             |
| sale_quantity | str | 促销质量           | 整数型转换的字符串，"10000"可能表示的是这张图的原画 |
| sale_quantity_limit | str | ?是否限制某些质量装扮的销售 | **布尔型转换的字符串，作用尚不明确**        |
| sale_region_ip_limit | str | 促销限制地区         |                             |
| sale_reserve_switch | str |                | **布尔型转换的字符串，作用尚不明确**          |
| sale_time_begin | str | 促销开始时间的时间戳     |                             |
| sale_type | str | 促销类型           |                             |
| suit_card_type | str | 装扮卡片类型         |                             |
| type | str | 类型             | **作用尚不明确**                  |

`suit_items` 对象（可能不全，会继续补充）：

| 字段    | 类型  | 内容     | 备注         |
|---------|-----|--------|------------|
| card | array | 动态卡片 |                             |
| emoji_package | array | 表情包    |                             |
| card_bg | array | 专属评论装扮 |                             |
| thumbup | array | 动态点赞特效 |                             |
| loading | array | 专属加载动画 |                             |
| play_icon | array | 专属进度条  |                             |
| skin | array | 专属个性主题 |                             |
| space_bg | array | 专属空间海报 |                             |

`suit_items` 中每个数组的对象：

**即上文中所列出的 `suit_items` 中的那些数组对象，对于这些数组，<br />它们其中的字段基本都是相同的，不同的地方会在后面继续说明。**

| 字段    | 类型  | 内容      | 备注                   |
|---------|-----|---------|----------------------|
| item_id | num | 装扮id    |                      |
| name | str | 装扮名称    |                      |
| state | str | 状态      |                      |
| tab_id | num | 分栏id    |                      |
| suit_item_id | num | 所属装扮的id |                      |
| properties | obj | 装扮具体属性  | **不同点主要集中在这个地方，下文将继续说明** |
| current_activity | str | 当前活动    |                      |
| next_activity | obj | 下一个活动   |                      |
| current_sources | str |         | **作用尚不明确**           |
| finish_sources | str |         | **作用尚不明确**           |
| sale_left_time | str |         | **作用尚不明确**           |
| sale_time_end | str |         | **作用尚不明确**           |
| sale_surplus | str | 商品剩余数量  |                      |
| items | str | 装扮的具体内容 |                      |

关于上述提到的 `properties` 对象中的共有字段：

| 字段    | 类型  | 内容   | 备注                   |
|---------|-----|------|----------------------|
| gray_rule | str |      | **布尔型转换的字符串，作用尚不明确**          |
| gray_rule_type | str |      | **作用尚不明确**                  |
| realname_auth | str |      | **布尔型转换的字符串，作用尚不明确**          |
| sale_type | str | 促销类型 |                             |
| image | str | 图片   |                             |
| image_preview_small | str | 预览图  |                             |

`emoji_package` 数组中的对象中 `properties` 对象中的额外字段：

| 字段    | 类型  | 内容    | 备注                   |
|---------|-----|-------|----------------------|
| addable | str |       | **布尔型转换的字符串，作用尚不明确**          |
| biz | str |       | **作用尚不明确**                  |
| is_symbol | str |       | **布尔型转换的字符串，作用尚不明确**          |
| permanent | str | 是否永久  |           |
| preview | str |       | **布尔型转换的字符串，作用尚不明确**          |
| recently_used | str |       | **布尔型转换的字符串，作用尚不明确**          |
| recommend | str | 是否推荐  |           |
| ref_mid | str |       |           |
| removable | str | 是否可移除 |           |
| setting_pannel_not_show | str |       | **布尔型转换的字符串，作用尚不明确**          |
| size | str | 尺寸    |           |
| sortable | str | 排序类型  |           |

`loading` 数组中的对象中 `properties` 对象中的额外字段：

| 字段    | 类型  | 内容         | 备注                   |
|---------|-----|------------|----------------------|
| loading_frame_url | str | 进度条动画的其中一帧 |  |
| loading_url | str | 进度条动画      |  |

`play_icon` 数组中的对象中 `properties` 对象中的额外字段：

| 字段    | 类型  | 内容          | 备注                   |
|---------|-----|-------------|----------------------|
| drag_left_png | str | 进度条向左拖动时的图片 |  |
| drag_right_png | str | 进度条向右拖动时的图片 |  |
| middle_png | str | 进度条暂停时的图片   |  |
| squared_image | str | 效果图         |  |
| static_icon_image | str | 静态图标        |  |

`skin` 数组中的对象中 `properties` 对象中的额外字段：

| 字段    | 类型  | 内容                  | 备注                   |
|---------|-----|---------------------|----------------------|
| head_bg | str | 首页顶部图片              |  |
| head_myself_mp4_play | str | 个人空间顶部视频动画的播放类型     |  |
| head_myself_squared_bg | str | 个人空间顶部图片            |  |
| head_tab_bg | str | 首页顶部标签栏背景图          |  |
| image_cover | str | 封面图                 |  |
| package_md5 | str | 装扮图包的md5值           |  |
| package_url | str | 装扮图包的压缩包链接          |  |
| skin_mode | str | 皮肤模式                |  |
| tail_bg | str | 首页底部图片              |  |
| tail_color | str | 首页底部颜色              |  |
| tail_color_selected | str | 首页底部被选中时的颜色         |  |
| tail_icon_ani | str | 首页底部是否播放动画          |  |
| tail_icon_ani_mode | str | 首页底部动画的播放类型         |  |
| tail_icon_channel | str | 首页底部“动态”按钮图片        |  |
| tail_icon_dynamic | str | 首页底部“发布动态”按钮图片      |  |
| tail_icon_main | str | 首页底部“首页”按钮图片        |  |
| tail_icon_mode | str | 首页底部图标模式            |  |
| tail_icon_myself | str | 首页底部“我的”按钮图片        |  |
| tail_icon_pub_btn_bg | str | 首页底部“发布动态”按钮图片      |  |
| tail_icon_selected_channel | str | 首页底部“动态”按钮被选中时的图片   |  |
| tail_icon_selected_dynamic | str | 首页底部“发布动态”按钮被选中时的图片 |  |
| tail_icon_selected_main | str | 首页底部“首页”按钮被选中时的图片   |  |
| tail_icon_selected_myself | str | 首页底部“我的”按钮被选中时的图片   |  |
| tail_icon_selected_pub_btn_bg | str | 首页底部“发布动态”按钮被选中时的图片 |  |
| tail_icon_selected_shop | str | 首页底部“会员购”按钮被选中时的图片  |  |
| tail_icon_shop | str | 首页底部“会员购”按钮图片       |  |

`space_bg` 数组中的对象中 `properties` 对象中的额外字段：

| 字段    | 类型  | 内容          | 备注                   |
|---------|-----|-------------|----------------------|
| image1_landscape | str | 第一张空间海报     |  |
| image1_portrait | str | 第一张空间海报（纵向） |  |

**如果是第二张图，则是`image2_xxx`，以此类推。**

**示例：**

```shell
curl -G 'https://api.bilibili.com/x/garb/v2/mall/suit/detail' \
     --data-urlencode 'buvid=xxx（非必须）' \
     --data-urlencode 'csrf=xxx（非必须）' \
     --data-urlencode 'item_id=42193' \
     --data-urlencode 'part=suit（非必须）'
```

<details>
<summary>查看响应示例:</summary>

```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":{
        "item_id":42193,
        "name":"装扮小姐姐·梦幻冬季",
        "group_id":69,
        "group_name":"装扮小姐姐·梦幻冬季",
        "part_id":6,
        "state":"active",
        "properties":{
            "desc":"扮扮糖集合啦！装扮小姐姐邀你共度梦幻冬季~",
            "fan_desc":"装扮小姐姐·梦幻冬季",
            "fan_id":"装扮小姐姐·梦幻冬季",
            "fan_item_ids":"42190,42124,42192,42191,42188,42189",
            "fan_mid":"647193094",
            "fan_no_color":"#3e52eb",
            "fan_recommend_desc":"扮扮糖集合啦！装扮小姐姐邀你共度梦幻冬季~",
            "fan_recommend_jump_type":"url",
            "fan_recommend_jump_value":"https://space.bilibili.com/647193094?spm_id_from=333.337.0.0",
            "fan_share_image":"https://i0.hdslb.com/bfs/garb/item/f9ad456fb74fc58896743eb393664e3c7622de0c.jpg",
            "gray_rule":"true",
            "gray_rule_type":"all",
            "image_cover":"https://i0.hdslb.com/bfs/garb/item/14072c2cb4f82c053d85dc92911da37583a17668.jpg",
            "image_cover_color":"#dcf0f9",
            "is_hide":"false",
            "item_id_card":"42123",
            "item_id_emoji":"42157",
            "item_id_thumbup":"42125",
            "open_platform_vip_discount":"true",
            "owner_uid":"647193094",
            "rank_investor_show":"false",
            "realname_auth":"false",
            "sale_bp_forever_raw":"5500",
            "sale_bp_pm_raw":"800",
            "sale_buy_num_limit":"100",
            "sale_quantity":"10000",
            "sale_quantity_limit":"true",
            "sale_region_ip_limit":"全球",
            "sale_reserve_switch":"false",
            "sale_time_begin":"1670410800",
            "sale_type":"pay",
            "suit_card_type":"big_img",
            "type":"ip"
        },
        "current_activity":null,
        "next_activity":{
            "type":"open_platform_vip_discount",
            "time_limit":true,
            "time_left":410175990,
            "tag":"大会员平台折扣",
            "price_bp_month":640,
            "price_bp_forever":4400,
            "type_month":"open_platform_vip_discount",
            "tag_month":"大会员平台折扣",
            "time_limit_month":true,
            "time_left_month":410175990
        },
        "current_sources":null,
        "finish_sources":null,
        "sale_left_time":-65301210,
        "sale_time_end":-1735712010,
        "sale_surplus":0,
        "sale_count_desc":"1万+",
        "total_count_desc":"",
        "tag":"粉丝套装已售罄",
        "jump_link":"",
        "sales_mode":0,
        "suit_items":{
            "card":[
                {
                    "item_id":42124,
                    "name":"装扮小姐姐梦幻冬季粉丝",
                    "state":"active",
                    "tab_id":35,
                    "suit_item_id":42193,
                    "properties":{
                        "gray_rule":"true",
                        "gray_rule_type":"all",
                        "hot":"false",
                        "image":"https://i0.hdslb.com/bfs/garb/item/3bebd46d5ac6eaa1d6c3f65854b184932fb6230b.png",
                        "image_preview_small":"https://i0.hdslb.com/bfs/garb/item/611fc0d3401623977f580f592747d721de330fc6.png",
                        "realname_auth":"false",
                        "sale_type":"other"
                    },
                    "current_activity":null,
                    "next_activity":null,
                    "current_sources":null,
                    "finish_sources":null,
                    "sale_left_time":-1735712010,
                    "sale_time_end":-1735712010,
                    "sale_surplus":0,
                    "items":null
                },
                {
                    "item_id":42123,
                    "name":"装扮小姐姐梦幻冬季",
                    "state":"active",
                    "tab_id":35,
                    "suit_item_id":42193,
                    "properties":{
                        "gray_rule":"true",
                        "gray_rule_type":"all",
                        "hot":"false",
                        "image":"https://i0.hdslb.com/bfs/garb/item/757320776561f6bf881b3c50bd59fc937cea3387.png",
                        "realname_auth":"false",
                        "sale_type":"other"
                    },
                    "current_activity":null,
                    "next_activity":null,
                    "current_sources":null,
                    "finish_sources":null,
                    "sale_left_time":-1735712010,
                    "sale_time_end":-1735712010,
                    "sale_surplus":0,
                    "items":null
                }
            ],
            "card_bg":[
                {
                    "item_id":42189,
                    "name":"装扮小姐姐梦幻冬季",
                    "state":"active",
                    "tab_id":44,
                    "suit_item_id":42193,
                    "properties":{
                        "gray_rule":"true",
                        "gray_rule_type":"all",
                        "image":"https://i0.hdslb.com/bfs/garb/item/38cbcb481923f6a3d7e724a3837324a8ab0f602e.png",
                        "image_preview_small":"https://i0.hdslb.com/bfs/garb/item/c9621eedabdc728d728158aafab2e271f152561e.png",
                        "realname_auth":"false",
                        "sale_type":"suit"
                    },
                    "current_activity":null,
                    "next_activity":null,
                    "current_sources":null,
                    "finish_sources":null,
                    "sale_left_time":-1735712010,
                    "sale_time_end":-1735712010,
                    "sale_surplus":0,
                    "items":null
                }
            ],
            "emoji_package":[
                {
                    "item_id":42157,
                    "name":"装扮小姐姐梦幻冬季",
                    "state":"active",
                    "tab_id":8,
                    "suit_item_id":42193,
                    "properties":{
                        "addable":"true",
                        "biz":"dynamic,reply,watch_full",
                        "gray_rule":"true",
                        "gray_rule_type":"all",
                        "image":"https://i0.hdslb.com/bfs/garb/item/0dd53dc27d401cad0a3bfc07d91dba3af3a5d6d0.png",
                        "is_symbol":"false",
                        "item_ids":"42158,42159,42160,42161,42162,42163,42164,42165,42166,42167,42168,42169,42170,42171,42172,42173,42174,42175,42176,42177,42178,42179,42180,42181,42182,42183,42184,42185,42186,42187",
                        "permanent":"false",
                        "preview":"false",
                        "realname_auth":"false",
                        "recently_used":"false",
                        "recommend":"false",
                        "ref_mid":"0",
                        "removable":"true",
                        "sale_type":"pay",
                        "setting_pannel_not_show":"false",
                        "size":"L",
                        "sortable":"true"
                    },
                    "current_activity":null,
                    "next_activity":null,
                    "current_sources":null,
                    "finish_sources":null,
                    "sale_left_time":-1735712010,
                    "sale_time_end":-1735712010,
                    "sale_surplus":0,
                    "items":[
                        {
                            "item_id":42158,
                            "name":"[装扮小姐姐梦幻冬季_揉脸]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/e47ad8b1c16ebaa780e0574f360c67f4c45e6325.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42159,
                            "name":"[装扮小姐姐梦幻冬季_啾咪]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/098619d6f2859966157dc0da4d3a24ae7a690781.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42160,
                            "name":"[装扮小姐姐梦幻冬季_下雪了]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/08a64a396b710f8670096c5f380f2839f973d218.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42161,
                            "name":"[装扮小姐姐梦幻冬季_圣诞老人]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/e86122e145000e00362d635c6ebe8ac4260de7f6.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42162,
                            "name":"[装扮小姐姐梦幻冬季_多喝热水]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/59fb78d3801682c94b126abc0fc1f1b7603dee06.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42163,
                            "name":"[装扮小姐姐梦幻冬季_扔]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/d762bb454bb2f4fc3827167749b3d61597657b3b.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42164,
                            "name":"[装扮小姐姐梦幻冬季_生气]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/47fc00a0f13ebd61237c4617a1e5485d0647e7f5.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42165,
                            "name":"[装扮小姐姐梦幻冬季_贴贴]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/3a7580978ee11f033860af2435bcef6fa282ee64.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42166,
                            "name":"[装扮小姐姐梦幻冬季_没米了]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/55b3660d73951fb394c6f0594c9fdbeca4f39bea.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42167,
                            "name":"[装扮小姐姐梦幻冬季_冲鸭]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/cb7c2fbc6ab19d3462d44cabf10b87458650bf28.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42168,
                            "name":"[装扮小姐姐梦幻冬季_累了]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/884f721618392a0efe6686c2c61fddf04c6f2d73.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42169,
                            "name":"[装扮小姐姐梦幻冬季_斯密马赛]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/1bbe9b564ee17701a22e848287a5f7983fdfcb34.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42170,
                            "name":"[装扮小姐姐梦幻冬季_告辞]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/264c9ab6a2503013e79eecdb86118f057762bae5.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42171,
                            "name":"[装扮小姐姐梦幻冬季_吃我一拳]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/2f7b233826fa0d0729619bbf3dc2220b4c534b3f.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42172,
                            "name":"[装扮小姐姐梦幻冬季_乌拉]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/23dca67aed7565a4f3e21d8d9d5337125b34d399.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42173,
                            "name":"[装扮小姐姐梦幻冬季_委屈]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/cec0b3ade7249740cee45f98100275fa7cf7320a.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42174,
                            "name":"[装扮小姐姐梦幻冬季_溜冰]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/3704984c68c867820103795c4b5313fea0c097e9.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42175,
                            "name":"[装扮小姐姐梦幻冬季_好耶]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/621d4683d492901c814c64ca3c7bb880ae818779.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42176,
                            "name":"[装扮小姐姐梦幻冬季_硬撑罢了]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/b4d10356d0ac483b29c875518e0c539809468ba9.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42177,
                            "name":"[装扮小姐姐梦幻冬季_摸鱼]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/da7205f6a8e7213cca2a06e71c819850cae28977.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42178,
                            "name":"[装扮小姐姐梦幻冬季_注意保暖]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/170df6f81c3f42defbc07192d19de02525b14348.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42179,
                            "name":"[装扮小姐姐梦幻冬季_抽我]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/45541e4471e57e59b4aa6b7bcc43e800e3cbde85.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42180,
                            "name":"[装扮小姐姐梦幻冬季_疑问]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/0d07fd66d3888ea55aa98fa8d520a6e759596e2b.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42181,
                            "name":"[装扮小姐姐梦幻冬季_抱抱]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/44481b886560e9e1300781ad8a1a4d1dfbbfd6fe.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42182,
                            "name":"[装扮小姐姐梦幻冬季_烤红薯]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/828555bbfa4dd8cadb9fdfa5868d3101c637945b.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42183,
                            "name":"[装扮小姐姐梦幻冬季_Power!]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/e4744b70edd5a271dcb6f1b1c62fa32dfa92c9fb.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42184,
                            "name":"[装扮小姐姐梦幻冬季_堆雪人]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/9407cb861173253f1a1206e3bda7497aebfd98ec.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42185,
                            "name":"[装扮小姐姐梦幻冬季_好的]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/d73bccf93a20c6eedeb81d975eba99ebc048a88e.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42186,
                            "name":"[装扮小姐姐梦幻冬季_滑雪]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/36af70fea3fc1636de990597c1a929fecba412db.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42187,
                            "name":"[装扮小姐姐梦幻冬季_吃火锅]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/bc234259d7971bd6255f9c464597285582e7ff82.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        }
                    ]
                }
            ],
            "loading":[
                {
                    "item_id":42191,
                    "name":"装扮小姐姐梦幻冬季",
                    "state":"active",
                    "tab_id":54,
                    "suit_item_id":42193,
                    "properties":{
                        "gray_rule":"true",
                        "gray_rule_type":"all",
                        "image_preview_small":"https://i0.hdslb.com/bfs/garb/item/32377c9cb1167e1e251c467f6a56ca2b59f130b0.png",
                        "loading_frame_url":"https://i0.hdslb.com/bfs/garb/item/f2121039298817318e9a10ef25cd802ef7a546f0.png",
                        "loading_url":"https://i0.hdslb.com/bfs/garb/item/e5ba77a4c2d21809e5f2e407e7bf03a7df635a2c.webp",
                        "realname_auth":"false",
                        "ver":"1670384406"
                    },
                    "current_activity":null,
                    "next_activity":null,
                    "current_sources":null,
                    "finish_sources":null,
                    "sale_left_time":-1735712010,
                    "sale_time_end":-1735712010,
                    "sale_surplus":0,
                    "items":null
                }
            ],
            "play_icon":[
                {
                    "item_id":42192,
                    "name":"装扮小姐姐梦幻冬季",
                    "state":"active",
                    "tab_id":56,
                    "suit_item_id":42193,
                    "properties":{
                        "drag_left_png":"https://i0.hdslb.com/bfs/garb/item/933cdf41a554ce65b2bac7cc2af578c065a01ff8.png",
                        "drag_right_png":"https://i0.hdslb.com/bfs/garb/item/1632ab1d853694d61fe170710b447f6bd9c9152b.png",
                        "gray_rule":"true",
                        "gray_rule_type":"all",
                        "middle_png":"https://i0.hdslb.com/bfs/garb/item/4e1eaa52e65da8e14bce321e7abab9e9a3a28b30.png",
                        "realname_auth":"false",
                        "squared_image":"https://i0.hdslb.com/bfs/garb/item/ca4d76d7e8384b18354709ac7e3a422a900f7e07.png",
                        "static_icon_image":"https://i0.hdslb.com/bfs/garb/item/a98ffc9a8871ded890959c22916f38aba61521fc.png",
                        "ver":"1670384416"
                    },
                    "current_activity":null,
                    "next_activity":null,
                    "current_sources":null,
                    "finish_sources":null,
                    "sale_left_time":-1735712010,
                    "sale_time_end":-1735712010,
                    "sale_surplus":0,
                    "items":null
                }
            ],
            "skin":[
                {
                    "item_id":42190,
                    "name":"装扮小姐姐梦幻冬季",
                    "state":"active",
                    "tab_id":45,
                    "suit_item_id":42193,
                    "properties":{
                        "color":"#ffffff",
                        "color_mode":"dark",
                        "color_second_page":"#5d85c0",
                        "gray_rule":"true",
                        "gray_rule_type":"all",
                        "head_bg":"https://i0.hdslb.com/bfs/garb/item/6c74dac067a429029befc787572b5b7bc83f50a1.jpg",
                        "head_myself_mp4_play":"once",
                        "head_myself_squared_bg":"https://i0.hdslb.com/bfs/garb/item/8cff6c83023c9523669e89fc28e1cd7600f196ff.jpg",
                        "head_tab_bg":"https://i0.hdslb.com/bfs/garb/item/1fe3d1b486ab50d6ffdf30b29bc063818ecde544.jpg",
                        "image_cover":"https://i0.hdslb.com/bfs/garb/item/14072c2cb4f82c053d85dc92911da37583a17668.jpg",
                        "image_preview":"https://i0.hdslb.com/bfs/garb/item/14072c2cb4f82c053d85dc92911da37583a17668.jpg",
                        "package_md5":"4ed60db32789eb79c3e96dc8d6a23ebb",
                        "package_url":"https://i0.hdslb.com/bfs/garb/zip/b3c95365b791bc58fd56bba7c14b43377d7af82d.zip",
                        "realname_auth":"false",
                        "skin_mode":"normal",
                        "tail_bg":"https://i0.hdslb.com/bfs/garb/item/fda401903a377d79afd576f9ba921c83091e6943.png",
                        "tail_color":"#f6f1fd",
                        "tail_color_selected":"#5af1ff",
                        "tail_icon_ani":"true",
                        "tail_icon_ani_mode":"once",
                        "tail_icon_channel":"https://i0.hdslb.com/bfs/garb/item/504a27e5227f30741e35b5817079974335f13d29.png",
                        "tail_icon_dynamic":"https://i0.hdslb.com/bfs/garb/item/4e0ef0c9540277694087f0aca8aca86b87dc9331.png",
                        "tail_icon_main":"https://i0.hdslb.com/bfs/garb/item/2a1a97c098bf0d2374a141d8da7fad1e0d1cee24.png",
                        "tail_icon_mode":"img",
                        "tail_icon_myself":"https://i0.hdslb.com/bfs/garb/item/20050ddbc0265828e42f068b74b8f5d947f8b7b8.png",
                        "tail_icon_pub_btn_bg":"https://i0.hdslb.com/bfs/garb/item/4e0ef0c9540277694087f0aca8aca86b87dc9331.png",
                        "tail_icon_selected_channel":"https://i0.hdslb.com/bfs/garb/item/d14d87016fa2e995917f40148239bc1fa5961ec5.png",
                        "tail_icon_selected_dynamic":"https://i0.hdslb.com/bfs/garb/item/1b0fb973534600990ad48058eff901643fe7e9fc.png",
                        "tail_icon_selected_main":"https://i0.hdslb.com/bfs/garb/item/ce1272d036f196ea90e08a433d0003246822aabf.png",
                        "tail_icon_selected_myself":"https://i0.hdslb.com/bfs/garb/item/a7bbb67de4f22c105529e57b2a1b27737fb6d9df.png",
                        "tail_icon_selected_pub_btn_bg":"https://i0.hdslb.com/bfs/garb/item/1b0fb973534600990ad48058eff901643fe7e9fc.png",
                        "tail_icon_selected_shop":"https://i0.hdslb.com/bfs/garb/item/e1622e9643b6ec2186e9f88ee6251334a842e3d0.png",
                        "tail_icon_shop":"https://i0.hdslb.com/bfs/garb/item/a2eaa41ae4aba160b8b8a9cdc7bc98fd47f2720d.png",
                        "ver":"1670384396"
                    },
                    "current_activity":null,
                    "next_activity":null,
                    "current_sources":null,
                    "finish_sources":null,
                    "sale_left_time":-1735712010,
                    "sale_time_end":-1735712010,
                    "sale_surplus":0,
                    "items":null
                }
            ],
            "space_bg":[
                {
                    "item_id":42188,
                    "name":"装扮小姐姐梦幻冬季",
                    "state":"active",
                    "tab_id":37,
                    "suit_item_id":42193,
                    "properties":{
                        "fan_no_color":"#3e52eb",
                        "fan_no_image":"https://i0.hdslb.com/bfs/garb/item/d4888365d80401c72fc34bcc1697c36eb2477a97.png",
                        "gray_rule":"true",
                        "gray_rule_type":"all",
                        "image1_landscape":"https://i0.hdslb.com/bfs/garb/item/971519888f96d2e3cd88e55cb2360ac087f1dde7.png",
                        "image1_portrait":"https://i0.hdslb.com/bfs/garb/item/78fb9e4a63a17854c7df1e3b1f5f9f48df723e2c.jpg",
                        "image2_landscape":"https://i0.hdslb.com/bfs/garb/item/90a99f2615ba34596b05cd2a268490cf0072f1e7.png",
                        "image2_portrait":"https://i0.hdslb.com/bfs/garb/item/11d1a96097ebe357c47277f6c0397a0323c316a5.jpg",
                        "image3_landscape":"https://i0.hdslb.com/bfs/garb/item/3d2e029d2f6d8c3a425377af5be47a4c8bf2d102.jpg",
                        "image3_portrait":"https://i0.hdslb.com/bfs/garb/item/3d1495d80211c07ab6773f7aa1d6cb198940907d.jpg",
                        "realname_auth":"false"
                    },
                    "current_activity":null,
                    "next_activity":null,
                    "current_sources":null,
                    "finish_sources":null,
                    "sale_left_time":-1735712010,
                    "sale_time_end":-1735712010,
                    "sale_surplus":0,
                    "items":null
                }
            ],
            "thumbup":[
                {
                    "item_id":42125,
                    "name":"装扮小姐姐梦幻冬季",
                    "state":"active",
                    "tab_id":36,
                    "suit_item_id":42193,
                    "properties":{
                        "gray_rule":"true",
                        "gray_rule_type":"all",
                        "image_ani":"https://i0.hdslb.com/bfs/garb/item/6a2ae0534879d765087c284c745b3e88340a7371.bin",
                        "image_ani_cut":"https://i0.hdslb.com/bfs/garb/item/6a2ae0534879d765087c284c745b3e88340a7371.bin",
                        "image_preview":"https://i0.hdslb.com/bfs/garb/item/0cbe14efc8d5397bb6edbd4adae5dcf0ce307c15.png",
                        "realname_auth":"false"
                    },
                    "current_activity":null,
                    "next_activity":null,
                    "current_sources":null,
                    "finish_sources":null,
                    "sale_left_time":-1735712010,
                    "sale_time_end":-1735712010,
                    "sale_surplus":0,
                    "items":null
                }
            ]
        },
        "fan_user":{
            "mid":647193094,
            "nickname":"装扮小姐姐",
            "avatar":"https://i1.hdslb.com/bfs/baselabs/523830e526a81001e4c3dcec9f317623a4f1dd2e.png"
        },
        "unlock_items":null,
        "activity_entrance":{
            "id":0,
            "item_id":0,
            "title":"",
            "image_cover":"",
            "jump_link":""
        }
    }
}
```

</details>

## 主题装扮列表API

> https://api.bilibili.com/x/garb/v2/mall/partition/item/list

*请求方式: GET*

**URL参数:**

| 参数名      | 类型  | 内容      | 必要性 | 备注                                                                        |
|----------|-----|---------|-----|---------------------------------------------------------------------------|
| csrf     | str | 用户csrf  | 非必要 |                                                                           |
| group_id | num | 分组id    | 非必要 | 建议加上，不填的时候为0，一般配合`part_id`使用。<br />`0`: 装扮<br />`22`: 头像挂件<br />`5`: 动态卡片 |
| location | str |         | 非必要 | **尚不明确**                                                                  |
| part_id  | num | 分类id    | 必要  | 一般配合`group_id`使用。<br />`6`: 装扮<br />`1`: 头像挂件<br />`2`: 动态卡片<br />        |
| pn       | num | 页码      | 非必要 | 不填为1                                                                      |
| ps       | num | 每页的数据数量 | 非必要 | 不填为20，默认值和最大值也都为20                                                        |
| sort_type   | num | 排序方式    | 非必要 | `0`: 默认排序<br />`1`: 按销量排序<br />`2`: 按最新上架时间排序                             |
| user_info   | str | 用户信息    | 非必要 | 为json对象，其中包含`buvid`和`buvid3`两个字段。                                         |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注                    |
|---------|-----|------|-----------------------|
| code    | num | 返回值  | `0`：成功<br />`-400`：错误 |
| message | str | 错误信息 |                       |
| ttl     | num | 1    |                       |
| data    | obj | 信息本体 |                       |

`data`对象：

| 字段   | 类型    | 内容   | 备注           |
|------|-------|------|--------------|
| page | obj   | 分页信息 | 包含装扮总数、页码和每页的数据数量 |
| list | array | 装扮列表 |              |
| offset_info | str   | 补偿信息 | **作用尚不明确**             |
| group | str   | 分组   | **作用尚不明确**             |

`list`对象：

| 字段           | 类型  | 内容  | 备注            |
|--------------|-----|-----|---------------|
| item_id | num | 装扮id   | 如果为0，则该装扮为收藏集 |
| name | str | 装扮名称   |               |
| group_id | num | 分组id   |               |
| group_name | str | 分组名称   |               |
| part_id | num | 分类id   |               |
| state | str | 状态     |               |
| properties | obj | 装扮具体属性 |               |
| current_activity | str | 当前活动   |               |
| next_activity | obj | 下一个活动  |               |
| current_sources | str |        | **作用尚不明确**    |
| finish_sources | str |        | **作用尚不明确**    |
| sale_left_time | num |        | **作用尚不明确**    |
| sale_time_end | num |        | **作用尚不明确**    |
| sale_surplus | num | 商品剩余数量 |               |
| sale_count_desc | str | 促销销量说明 |               |
| total_count_desc | str | 总销量说明  |               |
| tag | str | 标签     |               |
| jump_link | str | 跳转链接   |               |
| sales_mode | num | 促销模式   |               |

**示例：**

```shell
curl -G 'https://api.bilibili.com/x/garb/v2/mall/partition/item/list' \
     --data-urlencode 'group_id=0' \
     --data-urlencode 'part_id=6' \
     --data-urlencode 'pn=1' \
     --data-urlencode 'ps=20'
```

<details>
<summary>查看响应示例:</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "page": {
            "total": 0,
            "pn": 1,
            "ps": 10
        },
        "list": [
            {
                "item_id": 0,
                "name": "MyGO!!!!!收藏集",
                "group_id": 47,
                "group_name": "MyGO!!!!!收藏集",
                "part_id": 0,
                "state": "active",
                "properties": {
                    "book_amount": "59811",
                    "dlc_act_id": "102857",
                    "dlc_act_status": "2",
                    "dlc_is_free": "0",
                    "dlc_lottery_id": "102858",
                    "dlc_lottery_sale_quantity": "1418368",
                    "dlc_lottery_type": "1",
                    "dlc_sale_end_time": "0",
                    "dlc_sale_mode": "0",
                    "dlc_sale_start_time": "0",
                    "dlc_surplus_stock": "0",
                    "image_cover": "https://i0.hdslb.com/bfs/garb/c34fdba0b2a2aa31ff22bda77e217ca9c7e37344.jpg",
                    "sale_bp_forever_raw": "990",
                    "type": "dlc_act"
                },
                "current_activity": null,
                "next_activity": null,
                "current_sources": null,
                "finish_sources": null,
                "sale_left_time": -1735808611,
                "sale_time_end": -1735808611,
                "sale_surplus": 0,
                "sale_count_desc": "100万+",
                "total_count_desc": "已售100万+份",
                "tag": "",
                "jump_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=102857&hybrid_set_header=2&lottery_id=102858",
                "sales_mode": 0
            },
            {
                "item_id": 0,
                "name": "饿殍：明末千里行",
                "group_id": 49,
                "group_name": "饿殍：明末千里行",
                "part_id": 0,
                "state": "active",
                "properties": {
                    "book_amount": "21825",
                    "dlc_act_id": "102794",
                    "dlc_act_status": "2",
                    "dlc_is_free": "0",
                    "dlc_lottery_id": "102886",
                    "dlc_lottery_sale_quantity": "520677",
                    "dlc_lottery_type": "1",
                    "dlc_sale_end_time": "0",
                    "dlc_sale_mode": "0",
                    "dlc_sale_start_time": "0",
                    "dlc_surplus_stock": "0",
                    "image_cover": "https://i0.hdslb.com/bfs/garb/838639725c0c37f6ccc5e85b2a1ed6ff895baca2.jpg",
                    "sale_bp_forever_raw": "990",
                    "type": "dlc_act"
                },
                "current_activity": null,
                "next_activity": null,
                "current_sources": null,
                "finish_sources": null,
                "sale_left_time": -1735808611,
                "sale_time_end": -1735808611,
                "sale_surplus": 0,
                "sale_count_desc": "52万+",
                "total_count_desc": "已售52万+份",
                "tag": "",
                "jump_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=102794&hybrid_set_header=2&lottery_id=102886",
                "sales_mode": 0
            },
            {
                "item_id": 0,
                "name": "2024拜年纪",
                "group_id": 70,
                "group_name": "2024拜年纪",
                "part_id": 0,
                "state": "active",
                "properties": {
                    "book_amount": "30103",
                    "dlc_act_id": "279",
                    "dlc_act_status": "2",
                    "dlc_is_free": "0",
                    "dlc_lottery_id": "256",
                    "dlc_lottery_sale_quantity": "332544",
                    "dlc_lottery_type": "1",
                    "dlc_sale_end_time": "0",
                    "dlc_sale_mode": "0",
                    "dlc_sale_start_time": "0",
                    "dlc_surplus_stock": "0",
                    "image_cover": "http://i0.hdslb.com/bfs/archive/f96a8cf6866ccef8f54de4773acf0cb07b915ac6.png",
                    "sale_bp_forever_raw": "990",
                    "type": "dlc_act"
                },
                "current_activity": null,
                "next_activity": null,
                "current_sources": null,
                "finish_sources": null,
                "sale_left_time": -1735808611,
                "sale_time_end": -1735808611,
                "sale_surplus": 0,
                "sale_count_desc": "33万+",
                "total_count_desc": "已售33万+份",
                "tag": "",
                "jump_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=279&hybrid_set_header=2&lottery_id=256",
                "sales_mode": 0
            },
            {
                "item_id": 0,
                "name": "2233·十五周年站庆",
                "group_id": 70,
                "group_name": "2233·十五周年站庆",
                "part_id": 0,
                "state": "active",
                "properties": {
                    "book_amount": "38339",
                    "dlc_act_id": "293",
                    "dlc_act_status": "2",
                    "dlc_is_free": "0",
                    "dlc_lottery_id": "302",
                    "dlc_lottery_sale_quantity": "63336",
                    "dlc_lottery_type": "1",
                    "dlc_sale_end_time": "0",
                    "dlc_sale_mode": "0",
                    "dlc_sale_start_time": "0",
                    "dlc_surplus_stock": "0",
                    "image_cover": "http://i0.hdslb.com/bfs/archive/633174e11f3587166e31b37cc87feb184808408d.jpg",
                    "sale_bp_forever_raw": "990",
                    "type": "dlc_act"
                },
                "current_activity": null,
                "next_activity": null,
                "current_sources": null,
                "finish_sources": null,
                "sale_left_time": -1735808611,
                "sale_time_end": -1735808611,
                "sale_surplus": 0,
                "sale_count_desc": "6万+",
                "total_count_desc": "已售6万+份",
                "tag": "",
                "jump_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=293&hybrid_set_header=2&lottery_id=302",
                "sales_mode": 0
            },
            {
                "item_id": 0,
                "name": "奈姬niki收藏集",
                "group_id": 47,
                "group_name": "奈姬niki收藏集",
                "part_id": 0,
                "state": "active",
                "properties": {
                    "book_amount": "24158",
                    "dlc_act_id": "104783",
                    "dlc_act_status": "2",
                    "dlc_is_free": "0",
                    "dlc_lottery_id": "104784",
                    "dlc_lottery_sale_quantity": "120787",
                    "dlc_lottery_type": "1",
                    "dlc_sale_end_time": "0",
                    "dlc_sale_mode": "0",
                    "dlc_sale_start_time": "0",
                    "dlc_surplus_stock": "0",
                    "image_cover": "https://i0.hdslb.com/bfs/garb/6a2395d9be428ac09766deafbd8ead49503216ea.jpg",
                    "sale_bp_forever_raw": "990",
                    "type": "dlc_act"
                },
                "current_activity": null,
                "next_activity": null,
                "current_sources": null,
                "finish_sources": null,
                "sale_left_time": -1735808611,
                "sale_time_end": -1735808611,
                "sale_surplus": 0,
                "sale_count_desc": "12万+",
                "total_count_desc": "已售12万+份",
                "tag": "",
                "jump_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=104783&hybrid_set_header=2&lottery_id=104784",
                "sales_mode": 0
            },
            {
                "item_id": 0,
                "name": "黎歌Neeko收藏集-幻夏恋歌",
                "group_id": 47,
                "group_name": "黎歌Neeko收藏集-幻夏恋歌",
                "part_id": 0,
                "state": "active",
                "properties": {
                    "book_amount": "22125",
                    "dlc_act_id": "100858",
                    "dlc_act_status": "2",
                    "dlc_is_free": "0",
                    "dlc_lottery_id": "102305",
                    "dlc_lottery_sale_quantity": "528139",
                    "dlc_lottery_type": "2",
                    "dlc_sale_end_time": "0",
                    "dlc_sale_mode": "0",
                    "dlc_sale_start_time": "0",
                    "dlc_surplus_stock": "0",
                    "image_cover": "https://i0.hdslb.com/bfs/garb/ff57aba427ce4dd3608660233ba1d3ec518ff6aa.png",
                    "sale_bp_forever_raw": "990",
                    "type": "dlc_act"
                },
                "current_activity": null,
                "next_activity": null,
                "current_sources": null,
                "finish_sources": null,
                "sale_left_time": -1735808611,
                "sale_time_end": -1735808611,
                "sale_surplus": 0,
                "sale_count_desc": "52万+",
                "total_count_desc": "已售52万+份",
                "tag": "",
                "jump_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=100858&hybrid_set_header=2&lottery_id=102305",
                "sales_mode": 0
            },
            {
                "item_id": 0,
                "name": "2024明日方舟音律联觉",
                "group_id": 49,
                "group_name": "2024明日方舟音律联觉",
                "part_id": 0,
                "state": "active",
                "properties": {
                    "book_amount": "59594",
                    "dlc_act_id": "102942",
                    "dlc_act_status": "2",
                    "dlc_is_free": "0",
                    "dlc_lottery_id": "102943",
                    "dlc_lottery_sale_quantity": "1126215",
                    "dlc_lottery_type": "1",
                    "dlc_sale_end_time": "0",
                    "dlc_sale_mode": "0",
                    "dlc_sale_start_time": "0",
                    "dlc_surplus_stock": "0",
                    "image_cover": "https://i0.hdslb.com/bfs/garb/c59397dff6e6618058b7d943aa9614b0d74a9c17.jpg",
                    "sale_bp_forever_raw": "990",
                    "type": "dlc_act"
                },
                "current_activity": null,
                "next_activity": null,
                "current_sources": null,
                "finish_sources": null,
                "sale_left_time": -1735808611,
                "sale_time_end": -1735808611,
                "sale_surplus": 0,
                "sale_count_desc": "100万+",
                "total_count_desc": "已售100万+份",
                "tag": "",
                "jump_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=102942&hybrid_set_header=2&lottery_id=102943",
                "sales_mode": 0
            },
            {
                "item_id": 0,
                "name": "BLG·2023LPL出征收藏集",
                "group_id": 49,
                "group_name": "BLG·2023LPL出征收藏集",
                "part_id": 0,
                "state": "active",
                "properties": {
                    "book_amount": "18878",
                    "dlc_act_id": "228",
                    "dlc_act_status": "2",
                    "dlc_is_free": "0",
                    "dlc_lottery_id": "157",
                    "dlc_lottery_sale_quantity": "14537",
                    "dlc_lottery_type": "1",
                    "dlc_sale_end_time": "0",
                    "dlc_sale_mode": "0",
                    "dlc_sale_start_time": "0",
                    "dlc_surplus_stock": "0",
                    "image_cover": "http://i0.hdslb.com/bfs/archive/dc0af06ae0e5018cc24ecab1be76742ff1ad9fc2.png",
                    "sale_bp_forever_raw": "990",
                    "type": "dlc_act"
                },
                "current_activity": null,
                "next_activity": null,
                "current_sources": null,
                "finish_sources": null,
                "sale_left_time": -1735808611,
                "sale_time_end": -1735808611,
                "sale_surplus": 0,
                "sale_count_desc": "1万+",
                "total_count_desc": "已售1万+份",
                "tag": "",
                "jump_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=228&hybrid_set_header=2&lottery_id=157",
                "sales_mode": 0
            },
            {
                "item_id": 0,
                "name": "幻星乐园",
                "group_id": 107,
                "group_name": "幻星乐园",
                "part_id": 0,
                "state": "active",
                "properties": {
                    "book_amount": "22563",
                    "dlc_act_id": "103874",
                    "dlc_act_status": "2",
                    "dlc_is_free": "0",
                    "dlc_lottery_id": "103875",
                    "dlc_lottery_sale_quantity": "319104",
                    "dlc_lottery_type": "1",
                    "dlc_sale_end_time": "0",
                    "dlc_sale_mode": "0",
                    "dlc_sale_start_time": "0",
                    "dlc_surplus_stock": "0",
                    "image_cover": "https://i0.hdslb.com/bfs/garb/0f8eb52dfb0d3c7f89fb4d33749e4bf62544112e.jpg",
                    "sale_bp_forever_raw": "990",
                    "type": "dlc_act"
                },
                "current_activity": null,
                "next_activity": null,
                "current_sources": null,
                "finish_sources": null,
                "sale_left_time": -1735808611,
                "sale_time_end": -1735808611,
                "sale_surplus": 0,
                "sale_count_desc": "31万+",
                "total_count_desc": "已售31万+份",
                "tag": "",
                "jump_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=103874&hybrid_set_header=2&lottery_id=103875",
                "sales_mode": 0
            },
            {
                "item_id": 0,
                "name": "玉之けだま_毛玉收藏集",
                "group_id": 46,
                "group_name": "玉之けだま_毛玉收藏集",
                "part_id": 0,
                "state": "active",
                "properties": {
                    "book_amount": "30723",
                    "dlc_act_id": "104459",
                    "dlc_act_status": "2",
                    "dlc_is_free": "0",
                    "dlc_lottery_id": "104460",
                    "dlc_lottery_sale_quantity": "267724",
                    "dlc_lottery_type": "1",
                    "dlc_sale_end_time": "0",
                    "dlc_sale_mode": "0",
                    "dlc_sale_start_time": "0",
                    "dlc_surplus_stock": "0",
                    "image_cover": "https://i0.hdslb.com/bfs/garb/565bf9465865efdd28b07c40f8352e43091ff4da.png",
                    "sale_bp_forever_raw": "990",
                    "type": "dlc_act"
                },
                "current_activity": null,
                "next_activity": null,
                "current_sources": null,
                "finish_sources": null,
                "sale_left_time": -1735808611,
                "sale_time_end": -1735808611,
                "sale_surplus": 0,
                "sale_count_desc": "26万+",
                "total_count_desc": "已售26万+份",
                "tag": "",
                "jump_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=104459&hybrid_set_header=2&lottery_id=104460",
                "sales_mode": 0
            }
        ],
        "offset_info": "pool::10",
        "group": "garb_feed_recommend_rule_ab_key:1"
    }
}
```

</details>

## 收藏集列表API

> https://api.bilibili.com/x/vas/dlc_act/act/list

*请求方式: GET*

**URL参数:**

| 参数名   | 类型   | 内容     | 必要性 | 备注                        |
|-------|------|--------|-----|---------------------------|
| csrf  | str  | 用户csrf | 非必要 |                           |
| scene | num  |        | 非必要 | **作用尚不明确，默认为1，不填则获取到空数据** |
| site  | site | 位置     | 非必要 | 不填为20，但建议填上，会影响到后面的json数据 |

**json回复：**

根对象：

| 字段      | 类型   | 内容         | 备注                                                                                                                                                          |
|---------|------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| code    | num  | 返回值        | `0`：成功                                                                                                                                                      |
| message | str  | 错误信息       |                                                                                                                                                             |
| ttl     | num  | 1          |                                                                                                                                                             |
| data    | obj  | 信息本体       |                                                                                                                                                             |
| is_more | bool | 是否还有足够的收藏集 | 如果为true，则说明如果继续增加url参数中site的值，都还能从当前的位置往后列出20份收藏集；<br />如果为false，则说明如果继续增加url参数中site的值，将无法继续从当前位置列出20份收藏集（最多也是20份），<br />这表示页面已经拉到底了，可用于判断是否已经获取完了所有收藏集的数据。 |
| site    | num  | 位置         | **它的值为url参数中site的值的基础上再加20**，比如url参数中的site值为0，则此site的值为20，<br />表示这页的收藏集列表是从序号为0的收藏集开始列出，直到列出往后的20份。                                                            |

`data` 对象中的 `list` 数组对象：

| 字段           | 类型  | 内容      | 备注            |
|--------------|-----|---------|---------------|
| act_id | num | 收藏集id   |  |
| act_name | num | 收藏集名称   |  |
| act_pic | num | 收藏集封面图片 |  |
| sale_price | num | 收藏集价格   | 以0.01B币为单位 |
| act_desc | num | 收藏集说明   |  |
| tag | num | 标签      |  |
| lottery_id | num | 抽奖id    |  |
| lottery_type | num | 抽奖类型    |  |
| act_link | num | 收藏集链接    |  |

**示例：**

```shell
curl -G 'https://api.bilibili.com/x/vas/dlc_act/act/list' \
     --data-urlencode 'csrf=xxx' \
     --data-urlencode 'scene=1' \
     --data-urlencode 'site=0'
```

<details>
<summary>查看响应示例:</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "list": [
            {
                "act_id": 105432,
                "act_name": "挚友的旅途·羽毛收藏集",
                "act_pic": "https://i0.hdslb.com/bfs/garb/b6a7314b6ad321b638c3d2270903c02c0d2d7b20.png",
                "sale_price": 9900,
                "act_desc": "已售份数6千+",
                "tag": "新奖励",
                "lottery_id": 105433,
                "lottery_type": 1,
                "act_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=105432&hybrid_set_header=2&lottery_id=105433"
            },
            {
                "act_id": 102054,
                "act_name": "兰音的衣柜奇缘-兰音·拾光幻梦",
                "act_pic": "https://i0.hdslb.com/bfs/garb/b7e5465ff80a3260cdc1c1255853730bfc6bd818.jpg",
                "sale_price": 9900,
                "act_desc": "已售份数3万+",
                "tag": "新卡池",
                "lottery_id": 105434,
                "lottery_type": 2,
                "act_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=102054&hybrid_set_header=2&lottery_id=105434"
            },
            {
                "act_id": 102550,
                "act_name": "洛天依·收藏集-戏游九州",
                "act_pic": "https://i0.hdslb.com/bfs/garb/74706a52bc08764828f9251439055b18646e98b3.png",
                "sale_price": 9900,
                "act_desc": "已售份数6万+",
                "tag": "新奖励",
                "lottery_id": 105269,
                "lottery_type": 2,
                "act_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=102550&hybrid_set_header=2&lottery_id=105269"
            },
            {
                "act_id": 105006,
                "act_name": "村村宇宙·小猫女仆降临",
                "act_pic": "https://i0.hdslb.com/bfs/garb/cfccce3c1520b828f02d7b4e009cc7d965133025.jpg",
                "sale_price": 9900,
                "act_desc": "已售份数1万+",
                "tag": "新奖励",
                "lottery_id": 105167,
                "lottery_type": 1,
                "act_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=105006&hybrid_set_header=2&lottery_id=105167"
            },
            {
                "act_id": 105435,
                "act_name": "东方收藏集·浮生若梦",
                "act_pic": "https://i0.hdslb.com/bfs/garb/27156281f59f774198f38b9a4a64d9a74efb9290.png",
                "sale_price": 9900,
                "act_desc": "已售份数6万+",
                "tag": "新奖励",
                "lottery_id": 105438,
                "lottery_type": 1,
                "act_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=105435&hybrid_set_header=2&lottery_id=105438"
            },
            {
                "act_id": 105407,
                "act_name": "紫罗兰永恒花园收藏集",
                "act_pic": "https://i0.hdslb.com/bfs/garb/9e54ae06dfd32625071153adc702eb7554b45af8.jpg",
                "sale_price": 9900,
                "act_desc": "已售份数1万+",
                "tag": "新奖励",
                "lottery_id": 105408,
                "lottery_type": 1,
                "act_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=105407&hybrid_set_header=2&lottery_id=105408"
            },
            {
                "act_id": 105461,
                "act_name": "Team Spirit 冠军收藏集",
                "act_pic": "https://i0.hdslb.com/bfs/garb/0a68dac1e2d37767c26930ad4d3121e2b7c56c44.jpg",
                "sale_price": 9900,
                "act_desc": "已售份数9千+",
                "tag": "新奖励",
                "lottery_id": 105462,
                "lottery_type": 1,
                "act_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=105461&hybrid_set_header=2&lottery_id=105462"
            },
            {
                "act_id": 105326,
                "act_name": "小神奈殿下收藏集",
                "act_pic": "https://i0.hdslb.com/bfs/garb/ed3b6e516ef05cf595cf9d24203e16205eea55e5.png",
                "sale_price": 9900,
                "act_desc": "已售份数1万+",
                "tag": "新奖励",
                "lottery_id": 105327,
                "lottery_type": 1,
                "act_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=105326&hybrid_set_header=2&lottery_id=105327"
            },
            {
                "act_id": 105444,
                "act_name": "yumekiii收藏集",
                "act_pic": "https://i0.hdslb.com/bfs/garb/afc2dd57c962244d8021b92752038714b7b3341e.png",
                "sale_price": 9900,
                "act_desc": "已售份数3千+",
                "tag": "新奖励",
                "lottery_id": 105445,
                "lottery_type": 1,
                "act_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=105444&hybrid_set_header=2&lottery_id=105445"
            },
            {
                "act_id": 101545,
                "act_name": "Sheya收藏集-月食梦-镜海之梦",
                "act_pic": "https://i0.hdslb.com/bfs/garb/262e59d60698d6797488f081826e172e6689c339.jpg",
                "sale_price": 9900,
                "act_desc": "已售份数3千+",
                "tag": "新卡池",
                "lottery_id": 105451,
                "lottery_type": 2,
                "act_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=101545&hybrid_set_header=2&lottery_id=105451"
            },
            {
                "act_id": 105388,
                "act_name": "LOOPY可爱计划",
                "act_pic": "https://i0.hdslb.com/bfs/garb/f24711f2f35cb9db7919bb888af3fe23f5c588ad.jpg",
                "sale_price": 9900,
                "act_desc": "",
                "tag": "限时卡池",
                "lottery_id": 105411,
                "lottery_type": 1,
                "act_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=105388&hybrid_set_header=2&lottery_id=105411"
            },
            {
                "act_id": 105413,
                "act_name": "范式起源",
                "act_pic": "https://i0.hdslb.com/bfs/garb/784d6073f5cc3110117449da018845443b9c484d.png",
                "sale_price": 9900,
                "act_desc": "已售份数1万+",
                "tag": "",
                "lottery_id": 105414,
                "lottery_type": 1,
                "act_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=105413&hybrid_set_header=2&lottery_id=105414"
            },
            {
                "act_id": 105409,
                "act_name": "VirtuaReal碧波澜影",
                "act_pic": "https://i0.hdslb.com/bfs/garb/63f57f0014e47d1302005a5c6ab0164e925c69ef.png",
                "sale_price": 9900,
                "act_desc": "已售份数3万+",
                "tag": "",
                "lottery_id": 105410,
                "lottery_type": 1,
                "act_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=105409&hybrid_set_header=2&lottery_id=105410"
            },
            {
                "act_id": 101388,
                "act_name": "寺田堤拉 TERADA TERA-白橙绘锦",
                "act_pic": "https://i0.hdslb.com/bfs/garb/8ec594c0a11706846f5394eaac78fd97065000b1.png",
                "sale_price": 9900,
                "act_desc": "已售份数5千+",
                "tag": "",
                "lottery_id": 104985,
                "lottery_type": 2,
                "act_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=101388&hybrid_set_header=2&lottery_id=104985"
            },
            {
                "act_id": 104978,
                "act_name": "少女乐队的呐喊",
                "act_pic": "https://i0.hdslb.com/bfs/garb/cdf0c00bd070ee77951e695355b3394be53b8288.jpg",
                "sale_price": 9900,
                "act_desc": "已售份数39万+",
                "tag": "",
                "lottery_id": 105056,
                "lottery_type": 1,
                "act_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=104978&hybrid_set_header=2&lottery_id=105056"
            },
            {
                "act_id": 104174,
                "act_name": "顾晓Khaos收藏集",
                "act_pic": "https://i0.hdslb.com/bfs/garb/52152a236bcd4e2829012eb8cc32d1e2f24490c9.png",
                "sale_price": 9900,
                "act_desc": "已售份数8千+",
                "tag": "",
                "lottery_id": 104181,
                "lottery_type": 1,
                "act_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=104174&hybrid_set_header=2&lottery_id=104181"
            },
            {
                "act_id": 105151,
                "act_name": "晴云-醒时晴空",
                "act_pic": "https://i0.hdslb.com/bfs/garb/1320dd55c13a11dfc7c714a75b56159d73c2feae.jpg",
                "sale_price": 9900,
                "act_desc": "已售份数3千+",
                "tag": "",
                "lottery_id": 105168,
                "lottery_type": 1,
                "act_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=105151&hybrid_set_header=2&lottery_id=105168"
            },
            {
                "act_id": 103966,
                "act_name": "礼拜六Liu收藏集",
                "act_pic": "https://i0.hdslb.com/bfs/garb/9c5b03a79074b1354ee4277d77c108441ac8ff35.jpg",
                "sale_price": 9900,
                "act_desc": "已售份数1万+",
                "tag": "",
                "lottery_id": 103967,
                "lottery_type": 1,
                "act_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=103966&hybrid_set_header=2&lottery_id=103967"
            }
        ],
        "is_more": true,
        "site": 20
    }
}
```

</details>