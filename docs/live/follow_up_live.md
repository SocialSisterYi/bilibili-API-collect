# 关注UP直播情况

## 用户关注的所有UP的直播情况

> https://api.live.bilibili.com/xlive/web-ucenter/user/following

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**URL参数：**

| 参数名     | 类型  | 内容   | 必要性 | 备注    |
|---------|-----|------|-----|-------|
| page | num | 页码     | 非必要 | 默认为`1` |
| page_size | num | 每页的数据数量 | 非必要  | 有效值`1`-`10`, 默认为`10` |
| ignoreRecord | num |  |   | **尚不明确**<br />一般为`1` |
| hit_ab | bool |  |  | **尚不明确**<br />建议用`true`, 不填为`false` |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注              |
|---------|-----|------|-----------------|
| code    | num | 返回值  | `0`：成功<br />`-101`：错误 |
| message | str | 错误信息 |                 |
| ttl     | num | 1    |                     |
| data    | obj | 信息本体 |                |

`data`对象：
| 字段    | 类型     | 内容   | 备注         |
|---------|-----|------|-----------------|
| title | str | 标题 |                 |
| pageSize | num | 每页的数据数量 |                 |
| totalPage | num | 分页数量 |                 |
| list | obj | UP直播情况列表 |                 |
| count | num | 曾直播过的UP数量 |                 |
| never_lived_count | num | 未直播过的UP数量 |                 |
| live_count | num | 正在直播的UP数量 |                 |
| never_lived_faces | list |  |       **尚不明确**          |

`list`对象：

| 字段           | 类型  | 内容  | 备注                |
|--------------|-----|-----|-----------|
| roomid | num | 房间号 |  |
| uid        | num | 主播uid |           |
| uname        | str | 主播名 |           |
| title        | str | 直播标题 |           |
| face        | str | 主播头像 |           |
| live_status        | num | 是否正在直播 | `0`: 未直播<br />`1`: 正在直播  |
| record_num        | num |  |   **尚不明确**<br />一般为0        |
| recent_record_id        | str |  |   **尚不明确**<br />一般为空       |
| is_attention        | num |  |  **尚不明确**<br />一般为1         |
| clipnum        | num |  |    **尚不明确**<br />一般为0       |
| fans_num        | num |  |    **尚不明确**<br />一般为0       |
| area_name        | str |  |    **尚不明确**<br />一般为空       |
| area_value        | str |  |    **尚不明确**<br />一般为空       |
| tags        | str |  |    **尚不明确**<br />一般为空       |
| recent_record_id_v2        | str |  |    **尚不明确**<br />一般为空       |
| record_num_v2        | num |  |     **尚不明确**<br />一般为0      |
| record_live_time        | num | 主播上一次直播结束的时间戳 |    正在直播时, 值为`0`       |
| area_name_v2        | str | 频道的名称 |           |
| room_news        | str | 房间公告 |           |
| switch        | bool |  |   **尚不明确**        |
| watch_icon        | str |  |    **尚不明确**       |
| text_small        | str |  |    **尚不明确**<br />当主播正在直播时, 为在线人数(可能)       |
| room_cover        | str | 房间封面图片的URL |           |
| parent_area_id        | num | 父分区id |           |
| area_id        | num | 分区id |           |

**示例：**

```shell
curl -G 'https://api.live.bilibili.com/xlive/web-ucenter/user/following' \
     -b 'SESSDATA=xxx' \
     --data-urlencode 'page=1' \
     --data-urlencode 'page_size=2' \
     --data-urlencode 'ignoreRecord=1' \
     --data-urlencode 'hit_ab=true'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "title": "哔哩哔哩直播 - 我的关注",
    "pageSize": 2,
    "totalPage": 26,
    "list": [
      {
        "roomid": 544853,
        "uid": 686127,
        "uname": "籽岷",
        "title": "尝试双机位",
        "face": "https://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp",
        "live_status": 0,
        "record_num": 0,
        "recent_record_id": "",
        "is_attention": 1,
        "clipnum": 0,
        "fans_num": 0,
        "area_name": "",
        "area_value": "",
        "tags": "",
        "recent_record_id_v2": "",
        "record_num_v2": 0,
        "record_live_time": 1720011626,
        "area_name_v2": "新游推荐",
        "room_news": "",
        "switch": true,
        "watch_icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png",
        "text_small": "10.9万",
        "room_cover": "http://i0.hdslb.com/bfs/live/new_room_cover/6c89c41d7695a080d31ae21c128f7759a7f419e5.jpg",
        "parent_area_id": 6,
        "area_id": 889
      },
      {
        "roomid": 21686237,
        "uid": 456664753,
        "uname": "央视新闻",
        "title": "央视新闻的直播间",
        "face": "https://i1.hdslb.com/bfs/face/38a8db1c187b64a1412fafffbf350f8a3f436371.jpg",
        "live_status": 0,
        "record_num": 0,
        "recent_record_id": "",
        "is_attention": 1,
        "clipnum": 0,
        "fans_num": 0,
        "area_name": "",
        "area_value": "",
        "tags": "",
        "recent_record_id_v2": "",
        "record_num_v2": 0,
        "record_live_time": 1720001717,
        "area_name_v2": "社科法律心理",
        "room_news": "",
        "switch": false,
        "watch_icon": "https://i0.hdslb.com/bfs/live/0b265af1af0a77abc47aa3b8f1a5c0769d8bd23b.png",
        "text_small": "0",
        "room_cover": "http://i0.hdslb.com/bfs/live/d650d0e6e49397ea71d630be0a0e686679df16d8.jpg",
        "parent_area_id": 11,
        "area_id": 376
      }
    ],
    "count": 52,
    "never_lived_count": 30,
    "live_count": 0,
    "never_lived_faces": []
  }
}

```

</details>

## 用户关注的所有UP且正在直播的列表（PC端）

> https://api.live.bilibili.com/xlive/web-ucenter/v1/xfetter/GetWebList

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名 | 类型   | 内容                               | 必要性 | 备注               |
|-----|------|----------------------------------|-----|------------------|
| hit_ab | bool | 会影响到json回复中部分字段的值，具体的影响效果会在下表列出。 | 非必要 | 默认为true，不填为false |

**json回复：**

根对象：

| 字段      | 类型  | 内容   | 备注               |
|---------|-----|------|------------------|
| code    | num | 返回值  | 0：成功<br />1：参数错误 |
| msg     | str | 错误信息 | 默认为空             |
| message | str | 错误信息 | 默认为空             |
| data    | obj | 信息本体 |                  |

`data`对象：

| 字段      | 类型   | 内容           | 备注                                                                 |
|---------|------|--------------|--------------------------------------------------------------------|
| rooms   | list | 正在直播的房间列表    | 受到url参数hit_ab的影响：<br />true时能够获取到全部正在开播的直播间列表，<br />false时只会获取到前10个。 |
| list    | list | 正在直播的房间列表    | 疑似与rooms字段的内容相同，并且同样受到url参数hit_ab的影响，受影响的效果同rooms字段。               |
| count | num  | 关注列表中正在直播的人数 | 受到url参数hit_ab的影响：hit_ab为true时为0                              |
| not_living_num    | num  | 关注列表中未开播的人数  | 受到url参数hit_ab的影响：hit_ab为false时为0                             |

`rooms`对象：

| 字段      | 类型   | 内容           | 备注                                                            |
|---------|------|--------------|---------------------------------------------------------------|
| title    | num  | 直播间标题        |                                                               |
| room_id     | num  | 直播间真实id      |                                                               |
| uid | num  | 目标用户mid      |                                                               |
| online    | num  | 观看人数         | 受url参数hit_ab的影响，hit_ab为true时为0                                |
| live_time    | num  | 已经直播的时长（单位为秒）      | 受url参数hit_ab的影响，hit_ab为true时为0                                |
| live_status    | num  | 开播状态         | 0：未开播<br />1：直播中<br />2：轮播中                                   |
| short_id    | num  | 直播间短id       | 受url参数hit_ab的影响，hit_ab为true时为0                                |
| area    | num  | 分区id         | 受url参数hit_ab的影响，hit_ab为true时为0                                |
| area_name    | str  | 分区名称         |                                                               |
| area_v2_id    | num  | 二级分区id       |                                                               |
| area_v2_name    | str  | 二级分区名        |                                                               |
| area_v2_parent_name    | str  | 二级父分区名       |                                                               |
| area_v2_parent_id    | num  | 二级父分区id      |                                                               |
| uname    | str  | 用户名          |                                                               |
| face    | str  | 用户头像图片链接     |                                                               |
| tag_name    | str  | 标签名          |                                                               |
| tags    | str  | 标签列表         |                                                               |
| cover_from_user    | str  | 直播间封面图片链接    | 受url参数hit_ab的影响，hit_ab为true时为0                                |
| keyframe    | str  | 关键帧图片链接      | 用于网页端悬浮展示。受url参数hit_ab的影响，hit_ab为true时为0                      |
| lock_till    | str  | 未知           | 时间日期格式为：yyyy-MM-dd hh-mm-ss。<br />受url参数hit_ab的影响，hit_ab为true时为空字符串 |
| hidden_till    | str  | 未知           | 时间日期格式为：yyyy-MM-dd hh-mm-ss。<br />受url参数hit_ab的影响，hit_ab为true时为空字符串                            |
| broadcast_type    | num  | 广播类型 |                                                               |
| is_encrypt    | bool | 直播间是否加密      |                                                               |
| link    | str  | 直播间链接        | 受url参数hit_ab的影响，hit_ab为true时为空字符串                             |
| nickname    | str  | 用户昵称         | 受url参数hit_ab的影响，hit_ab为true时为空字符串                             |
| roomname    | str  | 直播间名称        | 受url参数hit_ab的影响，hit_ab为true时为空字符串                             |
| roomid    | num  | 直播间真实id      | 受url参数hit_ab的影响，hit_ab为true时为0                                |
| liveTime    | num  | 开播时间         | 受url参数hit_ab的影响，hit_ab为true时为0                                |

**示例：**

```shell
curl -G 'https://api.live.bilibili.com/xlive/web-ucenter/v1/xfetter/GetWebList' \
--header 'Cookie: SESSDATA=xxx' \
--data-urlencode 'hit_ab=false'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "rooms": [
            {
                "title": "虚拟区优质跨年直播展演",
                "room_id": 21496316,
                "uid": 441666939,
                "online": 2308,
                "live_time": 17313,
                "live_status": 1,
                "short_id": 36,
                "area": 6,
                "area_name": "生活娱乐",
                "area_v2_id": 744,
                "area_v2_name": "虚拟Singer",
                "area_v2_parent_name": "虚拟主播",
                "area_v2_parent_id": 9,
                "uname": "虚拟区官方频道",
                "face": "https://i0.hdslb.com/bfs/face/a26b52bc7837ce6867802575d300ed70d5e6f2d5.jpg",
                "tag_name": "",
                "tags": "",
                "cover_from_user": "https://i0.hdslb.com/bfs/live/new_room_cover/5d7a4526062cf1dc4e88e016638a856c1ac7db03.jpg",
                "keyframe": "https://i0.hdslb.com/bfs/live-key-frame/keyframe12311645000021496316pkuk08.jpg",
                "lock_till": "0000-00-00 00:00:00",
                "hidden_till": "0000-00-00 00:00:00",
                "broadcast_type": 0,
                "is_encrypt": false,
                "link": "https://live.bilibili.com/21496316?broadcast_type=0",
                "nickname": "虚拟区官方频道",
                "roomname": "虚拟区优质跨年直播展演",
                "roomid": 21496316,
                "liveTime": 1735617438
            }
        ],
        "list": [
            {
                "title": "虚拟区优质跨年直播展演",
                "room_id": 21496316,
                "uid": 441666939,
                "online": 2308,
                "live_time": 17313,
                "live_status": 1,
                "short_id": 36,
                "area": 6,
                "area_name": "生活娱乐",
                "area_v2_id": 744,
                "area_v2_name": "虚拟Singer",
                "area_v2_parent_name": "虚拟主播",
                "area_v2_parent_id": 9,
                "uname": "虚拟区官方频道",
                "face": "https://i0.hdslb.com/bfs/face/a26b52bc7837ce6867802575d300ed70d5e6f2d5.jpg",
                "tag_name": "",
                "tags": "",
                "cover_from_user": "https://i0.hdslb.com/bfs/live/new_room_cover/5d7a4526062cf1dc4e88e016638a856c1ac7db03.jpg",
                "keyframe": "https://i0.hdslb.com/bfs/live-key-frame/keyframe12311645000021496316pkuk08.jpg",
                "lock_till": "0000-00-00 00:00:00",
                "hidden_till": "0000-00-00 00:00:00",
                "broadcast_type": 0,
                "is_encrypt": false,
                "link": "https://live.bilibili.com/21496316?broadcast_type=0",
                "nickname": "虚拟区官方频道",
                "roomname": "虚拟区优质跨年直播展演",
                "roomid": 21496316,
                "liveTime": 1735617438
            }
        ],
        "count": 1,
        "not_living_num": 0
    }
}
```

</details>