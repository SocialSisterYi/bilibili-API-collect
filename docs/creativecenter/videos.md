# 视频相关杂项

## 获取稿件列表

> https://member.bilibili.com/x2/creative/web/archives/sp

*请求方式: GET*

认证方式: Cookie (SESSDATA)

注: 该接口返回内容大多为无实际意义的空值, 具体内容建议通过常规接口获取

**URL参数:**

| 参数名 | 类型 | 内容      | 必要性      | 备注              |
| ------ | ---- | --------- | ----------- | ----------------- |
| pn     | num  | 页码      | 必要        | 默认为 1           |
| ps     | num  | 每页数量  | 必要        | 默认为 10, 留空为 100 |

**JSON回复:**

根对象:

| 字段    | 类型 | 内容     | 备注 |
| ------- | ---- | -------- | ---- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 |      |
| ttl     | num  | 1        |      |
| data    | obj  | 信息本体 |      |

`data` 对象:

| 字段     | 类型 | 内容         | 备注 |
| -------- | ---- | ------------ | ---- |
| class    | null | 作用尚不明确 |      |
| arc_audits | array | 稿件列表 |      |
| page | obj | 分页信息 |      |
| play_type | num | 1 |      |

`arc_audits` 数组中的对象:

| 字段  | 类型 | 内容 | 备注 |
| - | - | - | - |
| Archive     | obj | 稿件信息 |   |
| Videos      | null |   |   |
| stat        | obj | 稿件统计信息 |   |
| state_panel | num | 0 |   |
| parent_tname | str | 空 |   |
| typename    | str | 空 |   |
| open_appeal | num | 0 |   |
| activity    | null |   |   |
| season_add_state | num | 是否可加入合集 | 0: 可以<br />1: 不可以 |

`Archive` 对象:

| 字段 | 类型 | 内容 | 备注 |
| - | - | - | - |
| aid | num | av 号 |   |
| bvid | str | bv 号 |   |
| mid | num | 0 |   |
| tid | num | 0 |   |
| tp_info | null |   |   |
| title | str | 稿件标题 |   |
| author | str | 空 |   |
| cover | str | 封面图 | 位于 bfs 需要自行拼接 URL  |
| reject_reason | str | 空 |   |
| reject_reason_url | str | 空 |   |
| tag | str | 空 |   |
| duration | num | 0 |   |
| copyright | num | 0 |   |
| no_reprint | num | 0 |   |
| ugcpay | num | 0 |   |
| order_id | num | 0 |   |
| order_name | str | 空 |   |
| adorder_id | num | 0 |   |
| adorder_name | str | 空 |   |
| adorder_no | str | 空 |   |
| online_time | num | 0 |   |
| new_adorder_info | null |   |   |
| desc | str | 稿件简介 |   |
| mission_id | num | 0 |   |
| mission_name | str | 空 |   |
| attribute | num | 0 |   |
| state | num | 0 |   |
| state_desc | str | 空 |   |
| state_panel | num | 0 |   |
| source | str | 空 |   |
| desc_format_id | num | 0 |   |
| attrs | null |   |   |
| porder | null |   |   |
| dynamic | str | 空 |   |
| poi_object | null |   |   |
| dtime | num | 0 |   |
| ptime | num | 0 |   |
| ctime | num | 0 |   |
| ugcpay_info | null |   |   |
| staffs | null |   |   |
| vote | null |   |   |
| activity | null |   |   |
| interactive | num | 0 |   |
| hl | null |   |   |
| no_background | num | 0 |   |
| dynamic_video | num | 0 |   |
| no_public | num | 0 |   |
| is_360 | num | 0 |   |
| is_dolby | num | 0 |   |
| lossless_music | num | 0 |   |
| bs_editor | num | 0 |   |
| up_from | num | 0 |   |
| desc_v2 | null |   |   |
| dynamic_v2 | null |   |   |
| topic_id | num | 0 |   |
| topic_name | str | 空 |   |
| topic_stat | num | 0 |   |
| premiere | num | 0 |   |
| is_ugcpay_v2 | num | 0 |   |
| recreate | null |   |   |
| charging_pay | num | 0 |   |
| neutral_mark | str | 空 |   |
| preview | null |   |   |
| upower_level | null |   |   |
| cover43 | str | 空 |   |
| had_passed | bool | false |   |
| is_staff | num | 0 |   |
| is_pugv | num | 0 |   |
| upower_mode | num | 0 |   |
| upower_unit_price | num | 0 |   |

`stat` 对象:

| 字段 | 类型 | 内容 | 备注 |
| - | - | - | - |
| aid | num | av 号 |   |
| view | num | 播放量 |   |
| danmaku | num | 弹幕数 |   |
| reply | num | 评论数 |   |
| favorite | num | 收藏数 |   |
| coin | num | 硬币数 |   |
| share | num | 分享数 |   |
| now_rank | num | 0 | 当前排名 |
| his_rank | num | 0 | 历史最高排名 |
| like | num | 点赞数 |   |
| dislike | num | 点踩数 | 恒为 0 |
| vt | num | 0 |   |
| vv | num | 播放量 |   |

**示例:**

```shell
curl -G "https://member.bilibili.com/x2/creative/web/archives/sp" \
--data-urlencode "pn=1" \
--data-urlencode "ps=3" \
-b "SESSDATA=xxx"
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "class": null,
    "arc_audits": [
      {
        "Archive": {
          "aid": 1906473802,
          "bvid": "BV1MU411S7iJ",
          "mid": 0,
          "tid": 0,
          "tp_info": null,
          "title": "Linux小寄巧: 原地卸载内核然后尝试救活!",
          "author": "",
          "cover": "/bfs/archive/b76c0b574862f5a8e8eb133f5f33fcbcd602401a.jpg",
          "reject_reason": "",
          "reject_reason_url": "",
          "tag": "",
          "duration": 0,
          "copyright": 0,
          "no_reprint": 0,
          "ugcpay": 0,
          "order_id": 0,
          "order_name": "",
          "adorder_id": 0,
          "adorder_name": "",
          "adorder_no": "",
          "online_time": 0,
          "new_adorder_info": null,
          "desc": "",
          "mission_id": 0,
          "mission_name": "",
          "attribute": 0,
          "state": 0,
          "state_desc": "",
          "state_panel": 0,
          "source": "",
          "desc_format_id": 0,
          "attrs": null,
          "porder": null,
          "dynamic": "",
          "poi_object": null,
          "dtime": 0,
          "ptime": 0,
          "ctime": 0,
          "ugcpay_info": null,
          "staffs": null,
          "vote": null,
          "activity": null,
          "interactive": 0,
          "hl": null,
          "no_background": 0,
          "dynamic_video": 0,
          "no_public": 0,
          "is_360": 0,
          "is_dolby": 0,
          "lossless_music": 0,
          "bs_editor": 0,
          "up_from": 0,
          "desc_v2": null,
          "dynamic_v2": null,
          "topic_id": 0,
          "topic_name": "",
          "topic_stat": 0,
          "premiere": 0,
          "is_ugcpay_v2": 0,
          "recreate": null,
          "political_media": 0,
          "political_editable": 0,
          "charging_pay": 0,
          "neutral_mark": "",
          "preview": null,
          "upower_level": null,
          "cover43": "",
          "had_passed": false,
          "is_staff": 0,
          "is_pugv": 0,
          "upower_mode": 0,
          "upower_unit_price": 0
        },
        "Videos": null,
        "stat": {
          "aid": 1906473802,
          "view": 4036,
          "danmaku": 8,
          "reply": 56,
          "favorite": 53,
          "coin": 12,
          "share": 8,
          "now_rank": 0,
          "his_rank": 0,
          "like": 99,
          "dislike": 0,
          "vt": 0,
          "vv": 4036
        },
        "state_panel": 0,
        "parent_tname": "",
        "typename": "",
        "open_appeal": 0,
        "activity": null,
        "season_add_state": 0
      },
      {
        "Archive": {
          "aid": 1956170305,
          "bvid": "BV1Ay411i7Ph",
          "mid": 0,
          "tid": 0,
          "tp_info": null,
          "title": "十多年前的电脑运行Debian12的启动过程",
          "author": "",
          "cover": "/bfs/archive/0bff6624fdfcbf3326fba1837fef093d455c846a.jpg",
          "reject_reason": "",
          "reject_reason_url": "",
          "tag": "",
          "duration": 0,
          "copyright": 0,
          "no_reprint": 0,
          "ugcpay": 0,
          "order_id": 0,
          "order_name": "",
          "adorder_id": 0,
          "adorder_name": "",
          "adorder_no": "",
          "online_time": 0,
          "new_adorder_info": null,
          "desc": "",
          "mission_id": 0,
          "mission_name": "",
          "attribute": 0,
          "state": 0,
          "state_desc": "",
          "state_panel": 0,
          "source": "",
          "desc_format_id": 0,
          "attrs": null,
          "porder": null,
          "dynamic": "",
          "poi_object": null,
          "dtime": 0,
          "ptime": 0,
          "ctime": 0,
          "ugcpay_info": null,
          "staffs": null,
          "vote": null,
          "activity": null,
          "interactive": 0,
          "hl": null,
          "no_background": 0,
          "dynamic_video": 0,
          "no_public": 0,
          "is_360": 0,
          "is_dolby": 0,
          "lossless_music": 0,
          "bs_editor": 0,
          "up_from": 0,
          "desc_v2": null,
          "dynamic_v2": null,
          "topic_id": 0,
          "topic_name": "",
          "topic_stat": 0,
          "premiere": 0,
          "is_ugcpay_v2": 0,
          "recreate": null,
          "political_media": 0,
          "political_editable": 0,
          "charging_pay": 0,
          "neutral_mark": "",
          "preview": null,
          "upower_level": null,
          "cover43": "",
          "had_passed": false,
          "is_staff": 0,
          "is_pugv": 0,
          "upower_mode": 0,
          "upower_unit_price": 0
        },
        "Videos": null,
        "stat": {
          "aid": 1956170305,
          "view": 2747,
          "danmaku": 13,
          "reply": 37,
          "favorite": 11,
          "coin": 14,
          "share": 4,
          "now_rank": 0,
          "his_rank": 0,
          "like": 42,
          "dislike": 0,
          "vt": 0,
          "vv": 2747
        },
        "state_panel": 0,
        "parent_tname": "",
        "typename": "",
        "open_appeal": 0,
        "activity": null,
        "season_add_state": 0
      },
      {
        "Archive": {
          "aid": 910326709,
          "bvid": "BV1GM4y1a7Vn",
          "mid": 0,
          "tid": 0,
          "tp_info": null,
          "title": "Minecraft终末之诗，但是谷歌翻译20遍",
          "author": "",
          "cover": "/bfs/archive/09b7f2542f3e66973ec7de1a3c806cdd45b95426.jpg",
          "reject_reason": "",
          "reject_reason_url": "",
          "tag": "",
          "duration": 0,
          "copyright": 0,
          "no_reprint": 0,
          "ugcpay": 0,
          "order_id": 0,
          "order_name": "",
          "adorder_id": 0,
          "adorder_name": "",
          "adorder_no": "",
          "online_time": 0,
          "new_adorder_info": null,
          "desc": "原内容来源：Minecraft Wiki\n使用的工具：Google Translate\n视频仅供娱乐，请勿当真",
          "mission_id": 0,
          "mission_name": "",
          "attribute": 0,
          "state": 0,
          "state_desc": "",
          "state_panel": 0,
          "source": "",
          "desc_format_id": 0,
          "attrs": null,
          "porder": null,
          "dynamic": "",
          "poi_object": null,
          "dtime": 0,
          "ptime": 0,
          "ctime": 0,
          "ugcpay_info": null,
          "staffs": null,
          "vote": null,
          "activity": null,
          "interactive": 0,
          "hl": null,
          "no_background": 0,
          "dynamic_video": 0,
          "no_public": 0,
          "is_360": 0,
          "is_dolby": 0,
          "lossless_music": 0,
          "bs_editor": 0,
          "up_from": 0,
          "desc_v2": null,
          "dynamic_v2": null,
          "topic_id": 0,
          "topic_name": "",
          "topic_stat": 0,
          "premiere": 0,
          "is_ugcpay_v2": 0,
          "recreate": null,
          "political_media": 0,
          "political_editable": 0,
          "charging_pay": 0,
          "neutral_mark": "",
          "preview": null,
          "upower_level": null,
          "cover43": "",
          "had_passed": false,
          "is_staff": 0,
          "is_pugv": 0,
          "upower_mode": 0,
          "upower_unit_price": 0
        },
        "Videos": null,
        "stat": {
          "aid": 910326709,
          "view": 533,
          "danmaku": 6,
          "reply": 4,
          "favorite": 15,
          "coin": 13,
          "share": 4,
          "now_rank": 0,
          "his_rank": 0,
          "like": 29,
          "dislike": 0,
          "vt": 0,
          "vv": 533
        },
        "state_panel": 0,
        "parent_tname": "",
        "typename": "",
        "open_appeal": 0,
        "activity": null,
        "season_add_state": 0
      }
    ],
    "page": {
      "pn": 1,
      "ps": 3,
      "count": 32
    },
    "play_type": 1
  }
}
```

</details>

## 视频基础信息

> https://member.bilibili.com/x/web/archive/videos

*请求方式: GET*

认证方式: Cookie (SESSDATA)

**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| aid | num | av 号 | 必要 |  |

**JSON回复:**

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| code | num | 返回值 | 0：成功 |
| message | str | 错误信息 |  |
| ttl | num | 1 |  |
| data | obj | 信息本体 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| archive | obj | 稿件信息 |  |
| videos | array | 视频信息 |  |

`archive` 对象:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | --- | --- |
| aid | num | av 号 |  |
| bvid | str | bvid |  |
| title | str | 标题 |  |

`videos` 数组:

| 字段 | 类型 | 内容 | 备注 |
| --- | --- | -- | --- |
| cid | num | 分P cid |  |
| index | num | 分P 序号 |  |
| title | str | 分P 标题 |  |
| duration | num | 0 |  |

**示例:**

```shell
curl -G "https://member.bilibili.com/x/web/archive/videos" \
--data-urlencode "aid=1906473802" \
-b "SESSDATA=xxx"
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "archive": {
      "aid": 1906473802,
      "bvid": "BV1MU411S7iJ",
      "title": "Linux小寄巧: 原地卸载内核然后尝试救活!"
    },
    "videos": [
      {
        "cid": 1625992822,
        "index": 1,
        "title": "Linux小寄巧: 原地卸载内核然后尝试救活!",
        "duration": 0
      }
    ]
  }
}
```

</details>
