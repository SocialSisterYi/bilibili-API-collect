## 获取直播间内礼物

> https://api.live.bilibili.com/xlive/web-room/v1/giftPanel/roomGiftList

*请求方式：GET*

认证方式：无 (无需添加Cookie)

**url参数：**

| 参数名         | 类型 | 内容       | 必要性 | 备注                             |
| -------------- | ---- | ---------- | ------ | -------------------------------- |
| platform       | str  | web        | 必要   |                                  |
| room_id        | num  | 主播房间号 | 必要   |                                  |
| area_parent_id | num  | 直播分区   | 非必要 | 不填写可能会获取不到部分活动礼物 |
| area_id        | num  | 直播子分区 | 非必要 | 不填写可能会获取不到部分活动礼物 |

**json回复：**



根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 |         |
| data    | obj  | 信息本体 |         |

`data.gift_config.base_config.list` 数组中的对象:

| 字段                | 类型 | 内容                | 备注                        |
| ------------------- | ---- | ------------------- | --------------------------- |
| id                  | num  | 礼物id              |                             |
| name                | str  | 礼物名字            |                             |
| price               | num  | 该值/1000的单位为元 |                             |
| type                | num  |                     |                             |
| coin_type           | str  | 一般为gold，即电池  |                             |
| effect              | num  | 特效类型？          | 观察到可能出现的值为0，2，3 |
| stay_time           | num  | 礼物展示的时间？    | 均为3                       |
| animation_frame_num | num  | 礼物动画帧数        |                             |
| desc                | str  | 礼物描述            |                             |
| img_basic           | str  | 礼物图片            |                             |
| gif                 | str  | 礼物gif动画         |                             |

**示例：**

查询`room_id=23375552`的直播间礼物信息

```shell
curl  'https://api.live.bilibili.com/xlive/web-room/v1/giftPanel/roomGiftList?platform=pc&room_id=23174842'
```

## 获取盲盒概率

> https://api.live.bilibili.com/xlive/general-interface/v1/blindFirstWin/getInfo

*请求方式：GET*

认证方式：无 (无需添加Cookie)

**url参数：**

| 参数名  | 类型 | 内容 | 必要性           | 备注 |
| ------- | ---- | ---- | ---------------- | ---- |
| gift_id | num  |      | 盲盒对应的礼物id |      |

**json回复：**



根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 |         |
| data    | obj  | 信息本体 |         |

`data`中的对象：

| 字段            | 类型  | 内容     | 备注 |
| --------------- | ----- | -------- | ---- |
| note_text       | str   | 描述     |      |
| blind_price     | num   | 盲盒价格 |      |
| blind_gift_name | str   | 盲盒名字 |      |
| gifts           | array | 盲盒价格 |      |

`gifts数组`中的对象：

| 字段      | 类型 | 内容           | 备注 |
| --------- | ---- | -------------- | ---- |
| gift_id   | num  | 爆出的礼物id   |      |
| price     | num  | 爆出的礼物价格 |      |
| gift_name | str  | 礼物名字       |      |
| gift_img  | str  | 礼物图片       |      |
| chance    | str  | 概率           |      |

**示例：**

查询`心动盲盒`的概率

```shell
curl  'https://api.live.bilibili.com/xlive/general-interface/v1/blindFirstWin/getInfo?gift_id=32251'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "note_text": "每日1次机会，首次投喂盲盒时享首抽福利！",
    "blind_price": 15000,
    "gifts": [
      {
        "gift_id": 32125,
        "price": 2000,
        "gift_name": "电影票",
        "gift_img": "https://s1.hdslb.com/bfs/live/20864a10beaea541c7dce264d5bbc56676d63e4f.png",
        "is_win_gift": 0,
        "chance": "6%"
      },
      {
        "gift_id": 32126,
        "price": 9000,
        "gift_name": "棉花糖",
        "gift_img": "https://s1.hdslb.com/bfs/live/b555682af41551c28f8ad19dc5c4ed87943c84f4.png",
        "is_win_gift": 0,
        "chance": "44.5%"
      },
      {
        "gift_id": 32128,
        "price": 16000,
        "gift_name": "爱心抱枕",
        "gift_img": "https://s1.hdslb.com/bfs/live/824714c830966d7bec381e35ef808b1f478e21ee.png",
        "is_win_gift": 1,
        "chance": "45.56%"
      },
      {
        "gift_id": 32281,
        "price": 40000,
        "gift_name": "绮彩权杖",
        "gift_img": "https://s1.hdslb.com/bfs/live/5cecbf274a4205ef76ed3f11c6540f0c6743363c.png",
        "is_win_gift": 1,
        "chance": "3.7%"
      },
      {
        "gift_id": 32282,
        "price": 100000,
        "gift_name": "时空之站",
        "gift_img": "https://s1.hdslb.com/bfs/live/9ee53aedda3c891fdf23d35c14b3bdc4e0504a97.png",
        "is_win_gift": 1,
        "chance": "0.12%"
      },
      {
        "gift_id": 34894,
        "price": 200000,
        "gift_name": "蛇形护符",
        "gift_img": "https://s1.hdslb.com/bfs/live/2127dd998083a8981ef4e31a4e6787ce5a4d0f9f.png",
        "is_win_gift": 1,
        "chance": "0.08%"
      },
      {
        "gift_id": 32132,
        "price": 2233000,
        "gift_name": "浪漫城堡",
        "gift_img": "https://s1.hdslb.com/bfs/live/216fac597b3c5619d56ed332bcf5f880ea657e8e.png",
        "is_win_gift": 1,
        "chance": "0.04%"
      }
    ],
    "friday_yq_id": 106472,
    "is_first": true,
    "ab_res": 1,
    "uid": 451537183,
    "conf_id": 51,
    "pre_imgs": [
      {
        "gift_id": 32132,
        "preview_url": "http://i0.hdslb.com/bfs/live/e40708d0c8ef9505027ac33ad2a17a23e8e01139.mp4"
      }
    ],
    "blind_gift_name": "心动盲盒"
  }
}
```
</details>