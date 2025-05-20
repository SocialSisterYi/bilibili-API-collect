# 包月充电

<img src="../../assets/img/battery-100.png" width="100" height="100"/>

## 常量说明

### 充电档位代码（`privilege_type`）与定价

| 代码 | 定价（单位：元人民币） |
| :--: | :--------------------: |
| 10   | 6    |
| 20   | 30   |
| 30   | 50   |
| 40   | 88   |
| 50   | 128  |
| 60   | 288  |
| 70   | 588  |
| 80   | 998  |
| 100  | 18   |
| 110  | 238  |
| 130  | 68   |

## 获取包月充电列表

> <https://api.live.bilibili.com/xlive/revenue/v1/guard/getChargeRecord>

*请求方式：GET*

认证方式：Cookie(SESSDATA)或APP

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注                     |
| ------ | ---- | -------- | ------ | ------------------------ |
| page   | num  | 页码     | 必要   |                          |
| type   | num  | 充电状态 | 必要   | 1：使用中<br />2：已过期 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                                      |
| ------- | ---- | -------- | ------------------------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误<br />25100004：参数错误 |
| message | str  | 错误信息 | 默认为0                                                                   |
| ttl     | num  | 1        |                                                                           |
| data    | obj  | 信息本体 |                                                                           |

`data`对象：

| 字段       | 类型  | 内容             | 备注             |
| ---------- | ----- | ---------------- | ---------------- |
| list       | 有内容时：array<br />无内容时：null | 包月充电UP主列表 | 最多10个         |
| page       | num   | 当前页数         |                  |
| page_size  | num   | 当前分页大小     | 一般为10         |
| total_page | num   | 总页数           |                  |
| total_num  | num   | 用户总数         |                  |
| is_more    | num   | 是否有更多用户   | 0：否<br />1：是 |

`data`中的`list`数组：

| 项   | 类型 | 内容      | 备注             |
| ---- | ---- | --------- | ---------------- |
| 0    | obj  | 用户1     |                  |
| n    | obj  | 用户(n+1) |                  |
| ……   | obj  | ……        | ……               |

数组`list`中的对象：

| 字段             | 类型  | 内容                     | 备注       |
| ---------------- | ----- | ------------------------ | ---------- |
| up_uid           | num   | 充电UP主mid              |            |
| user_name        | str   | 充电UP主昵称             |            |
| user_face        | str   | 充电UP主头像url          |            |
| item             | array | 充电详情                 |            |
| start            | num   | 开始充电时间             | 秒级时间戳 |
| high_level_state | num   | 是否可对UP主进行高档充电 |            |
| elec_reply_state | num   | 是否可对UP主进行专属问答 | 0：否<br />1：是<br />2：状态未知 |

数组`list`中的对象中的`item`数组：

| 项   | 类型 | 内容          | 备注     |
| ---- | ---- | ------------- | -------- |
| 0    | obj  | 充电档位1     |          |
| n    | obj  | 充电档位(n+1) |          |
| ……   | obj  | ……        | ……       |

数组`item`中的对象：

| 字段           | 类型                                          | 内容             | 备注             |
| -------------- | --------------------------------------------- | ---------------- | ---------------- |
| privilege_type | num                                           | 充电档位代码     | 详见[充电档位代码与定价](#充电档位代码privilege_type与定价) |
| icon           | str                                           | 充电图标         |                  |
| name           | str                                           | 充电档位名称     |                  |
| expire_time    | num                                           | 该档位过期时间   | 秒级时间戳       |
| renew          | 开启自动续费时：obj<br />关闭自动续费时：null | 充电自动续费详情 |                  |
| start_time     | num                                           | 该档位生效时间   | 秒级时间戳       |
| renew_list     | 开启自动续费时：array<br />关闭自动续费时：null | 充电自动续费列表 |                  |

`renew`对象、`renew_list`数组中的对象：

| 字段              | 类型 | 内容         | 备注                                              |
| ----------------- | ---- | ------------ | ------------------------------------------------- |
| uid               | num  | 自己的mid    |                                                   |
| ruid              | num  | UP主的mid    |                                                   |
| goods_id          | num  | 充电类型     | 172：一个月<br />173：连续包月<br />174：连续包年 |
| status            | num  | 充电状态     | 1                                                 |
| next_execute_time | num  | 下次续费时间 | 秒级时间戳                                        |
| signed_time       | num  | 签约时间     | 秒级时间戳                                        |
| signed_price      | num  | 下次续费金额 | 单位为千分之一元人民币                            |
| pay_channel       | num  | 签约平台     | 2：微信支付<br />4：支付宝                        |
| period            | num  | 下次充电天数 |                                                   |
| mobile_app        | str  | 充电渠道     | 可为`android`等                                   |

**示例：**

获取自己正在使用的包月充电的列表

```shell
curl 'https://api.live.bilibili.com/xlive/revenue/v1/guard/getChargeRecord' \
  --data-urlencode 'page=1' \
  --data-urlencode 'type=1' \
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
    "list": [
      {
        "up_uid": 2233,
        "user_name": "2233",
        "user_face": "https://i0.hdslb.com/bfs/face/noface.jpg",
        "item": [
          {
            "privilege_type": 10,
            "icon": "https://s1.hdslb.com/bfs/templar/york-static/lightning_icon@2x.png",
            "name": "为TA充电",
            "expire_time": 1703519999,
            "renew": {
              "uid": 425503913,
              "ruid": 2233,
              "goods_id": 174,
              "status": 1,
              "next_execute_time": 1703174400,
              "signed_time": 1671618921,
              "signed_price": 36000,
              "pay_channel": 2,
              "period": 366,
              "mobile_app": "android"
            },
            "start_time": 1671618921,
            "renew_list": [
              {
                "uid": 425503913,
                "ruid": 2233,
                "goods_id": 174,
                "status": 1,
                "next_execute_time": 1703174400,
                "signed_time": 1671618921,
                "signed_price": 36000,
                "pay_channel": 2,
                "period": 366,
                "mobile_app": "android"
              }
            ]
          }
        ],
        "start": 1669183804,
        "high_level_state": 1,
        "elec_reply_state": 1
      },
      {
        "up_uid": 293793435,
        "user_name": "社会易姐QwQ",
        "user_face": "https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg",
        "item": [
          {
            "privilege_type": 10,
            "icon": "https://s1.hdslb.com/bfs/templar/york-static/lightning_icon@2x.png",
            "name": "为TA充电",
            "expire_time": 1681401599,
            "renew": {
              "uid": 425503913,
              "ruid": 293793435,
              "goods_id": 173,
              "status": 1,
              "next_execute_time": 1680364800,
              "signed_time": 1677760921,
              "signed_price": 5000,
              "pay_channel": 4,
              "period": 31,
              "mobile_app": "android"
            },
            "start_time": 1677760921,
            "renew_list": [
              {
                "uid": 425503913,
                "ruid": 293793435,
                "goods_id": 173,
                "status": 1,
                "next_execute_time": 1680364800,
                "signed_time": 1677760921,
                "signed_price": 5000,
                "pay_channel": 4,
                "period": 31,
                "mobile_app": "android"
              }
            ]
          }
        ],
        "start": 1676033795,
        "high_level_state": 1,
        "elec_reply_state": 1
      }
    ],
    "page": 1,
    "page_size": 10,
    "total_page": 3,
    "total_num": 22,
    "is_more": 1
  }
}
```

</details>

表示自己从2022-11-23 14:10:04开始给“2233”包月充电，并且在2022-12-21 18:35:21在微信开通了连续包年充电，在2023-12-22 00:00:00的时候会自动续费36元，并继续充电366天；

自己从2023-02-10 20:56:35开始给“社会易姐QwQ”包月充电，并且在2023-03-02 20:42:01在支付宝开通了连续包月充电，在2023-04-02 00:00:00的时候会自动续费5元，并继续充电31天。

## UP主包月充电详情

> <https://api.bilibili.com/x/upower/item/detail>

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| up_mid | num  | 目标用户mid | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                             |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段               | 类型 | 内容                       | 备注                           |
| ------------------ | ---- | -------------------------- | ------------------------------ |
| upower_rank        | obj  | 充电详情                   |                                |
| item               | obj  | 充电欢迎语信息             |                                |
| user_card          | obj  | UP主信息                   |                                |
| upower_level       | num  | UP主开通的充电等级         | 1：非高档充电<br />2：高档充电 |
| elec_reply_state   | num  | 是否可对UP主进行专属问答   |                                |
| voucher_state      | obj  | 包月充电券信息             | **详细信息有待补充**           |
| upower_right_count | obj  | 不同充电档位下的充电权益数 |                                |
| only_contain_medal | bool | 享有的权益仅为粉丝勋章     |                                |
| privilege_type     | num  | 当前给该UP主包月充电的档位 | 见[充电档位代码与定价](#充电档位代码privilege_type与定价)，若从未给该UP主包月充电过则为0  |

`data`中的`upower_rank`对象：

| 字段       | 类型  | 内容             | 备注         |
| ---------- | ----- | ---------------- | ------------ |
| total      | num   | 充电用户总数     |              |
| total_desc | str   | 充电总数文字说明 | 示例：“1+”   |
| list       | array | 充电用户列表     | 最多展示30个 |

`upower_rank`中的`list`数组：

| 项   | 类型 | 内容      | 备注                       |
| ---- | ---- | --------- | -------------------------- |
| 0    | obj  | 用户1     |                            |
| n    | obj  | 用户(n+1) | 按照最初充电时间排序（？） |
| ……   | obj  | ……        | ……                         |

`list`数组中的对象：

| 字段     | 类型 | 内容            | 备注 |
| -------- | ---- | --------------- | ---- |
| rank     | num  | 充电用户索引    |      |
| mid      | num  | 充电用户mid     |      |
| nickname | str  | 充电用户昵称    |      |
| avatar   | str  | 充电用户头像url |      |

`data`中的`item`对象：

| 字段            | 类型 | 内容             | 备注 |
| --------------- | ---- | ---------------- | ---- |
| intro_video_aid | str  | 充电介绍视频AV号 |      |
| welcomes        | str  | 充电介绍语       |      |

`data`中的`user_card`对象：

| 字段     | 类型 | 内容        | 备注 |
| -------- | ---- | ----------- | ---- |
| avatar   | str  | UP主头像url |      |
| nickname | str  | UP主昵称    |      |

`data`中的`upower_right_count`对象：

| 字段           | 类型 | 内容                 | 备注 |
| -------------- | ---- | -------------------- | ---- |
| {充电档位代码} | num  | 该档位下的充电权益数 |      |

**示例：**

获取`mid=1265680561`的包月充电详情

```shell
curl 'https://api.bilibili.com/x/upower/item/detail' \
  --data-urlencode 'up_mid=1265680561' \
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
    "upower_rank": {
      "total": 5082,
      "total_desc": "5000+",
      "list": [
        {
          "rank": 1,
          "mid": 1476475459,
          "nickname": "一只屑椒",
          "avatar": "https://i1.hdslb.com/bfs/face/dc721da215f4651e0472d566b146ee8fdf198dbe.jpg"
        },
        {
          "rank": 2,
          "mid": 275365317,
          "nickname": "-陪我去看海吧i",
          "avatar": "https://i0.hdslb.com/bfs/face/dd7547b13020e7f47549ad7908fd3fc58efadefc.jpg"
        },
        {
          "rank": 3,
          "mid": 401909111,
          "nickname": "Vege5able",
          "avatar": "https://i2.hdslb.com/bfs/face/46b1fdc94c7851ec0c47817adeec13e3225da559.jpg"
        }
      ]
    },
    "item": {
      "intro_video_aid": "",
      "welcomes": "哈喽b站的小伙伴们，我的充电计划升级啦！ 感兴趣就多多支持我吧~(゜-゜)つロ"
    },
    "user_card": {
      "avatar": "https://i1.hdslb.com/bfs/face/5ddddba98f0265265662a8f7d5383e528a98412b.jpg",
      "nickname": "永雏塔菲"
    },
    "upower_level": 1,
    "elec_reply_state": 1,
    "voucher_state": {
      "voucher_order_id": "95843e812210c455d1ea6e4714bf105a00",
      "user_voucher_state": 2,
      "vip_action": 0,
      "voucher_name": "包月充电券（6元档）",
      "validate_price": 0,
      "validate_level": 0,
      "activity": "",
      "common_time": 0,
      "high_level_time": 0,
      "specify_up": 0,
      "specify_level": 0
    },
    "upower_right_count": {
      "10": 3
    },
    "only_contain_medal": false,
    "privilege_type": 0
  }
}
```

</details>

## 与UP主的包月充电关系

> <https://api.bilibili.com/x/upower/charge/follow/info>

*请求方式：GET*

认证方式：Cookie(SESSDATA)或APP

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| up_mid | num  | 目标用户mid | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段               | 类型 | 内容                           | 备注                                        |
| ------------------ | ---- | ------------------------------ | ------------------------------------------- |
| days               | num  | 已保持多少天包月充电状态       |                                             |
| up_card            | obj  | UP主信息                       |                                             |
| user_card          | obj  | 自己的信息                     |                                             |
| remain_days        | num  | 剩余天数                       | 未处于包月充电状态为-1                      |
| remain_less_1day   | num  | 剩余的天数是否小于1天          | 0：否<br />1：是<br />未处于包月充电状态为0 |
| upower_rank        | obj  | 充电详情                       |                                             |
| upower_icon        | str  | 充电图标url                    | 仅在处于包月充电状态时有内容                |
| upower_right_count | obj  | 当前自己享有该UP主的充电权益数 |                                             |
| only_contain_medal | bool | 享有的权益仅为粉丝勋章         |                                             |
| privilege_type     | num  | 当前给该UP主包月充电的档位代码 | 见[充电档位代码与定价](#充电档位代码privilege_type与定价)，若未处于包月充电状态为0  |
| challenge_info     | obj  | 充电挑战信息                   | **详细信息有待补充**                        |

`data`中的`up_card`对象：

| 字段           | 类型 | 内容         | 备注 |
| -------------- | ---- | ------------ | ---- |
| mid            | num  | UP主mid      |      |
| nickname       | str  | UP主昵称     |      |
| official_title | str  | UP主认证信息 |      |
| avatar         | str  | UP主头像url  |      |

`data`中的`user_card`对象：

| 字段     | 类型 | 内容        | 备注 |
| -------- | ---- | ----------- | ---- |
| avatar   | str  | 用户头像url |      |
| nickname | str  | 用户昵称    |      |

`data`中的`upower_rank`对象：

| 字段       | 类型  | 内容             | 备注        |
| ---------- | ----- | ---------------- | ----------- |
| total      | num   | 充电用户总数     |             |
| total_desc | str   | 充电总数文字说明 | 示例：“1+”  |
| list       | array | 充电用户列表     | 最多展示6个 |

`upower_rank`中的`list`数组：

| 项   | 类型 | 内容      | 备注             |
| ---- | ---- | --------- | ---------------- |
| 0    | obj  | 用户1     |                  |
| n    | obj  | 用户(n+1) | 按照充电时间排序 |
| ……   | obj  | ……        | ……               |

数组`list`中的对象：

| 字段     | 类型 | 内容            | 备注 |
| -------- | ---- | --------------- | ---- |
| rank     | num  | 充电用户索引    |      |
| mid      | num  | 充电用户mid     |      |
| nickname | str  | 充电用户昵称    |      |
| avatar   | str  | 充电用户头像url |      |

**示例：**

获取与`mid=293793435`的包月充电关系

```shell
curl 'https://api.bilibili.com/x/upower/charge/follow/info' \
  --data-urlencode 'up_mid=293793435' \
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
    "days": 17,
    "up_card": {
      "mid": 293793435,
      "nickname": "社会易姐QwQ",
      "official_title": "",
      "avatar": "https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg"
    },
    "user_card": {
      "avatar": "https://i2.hdslb.com/bfs/face/540ed71e2fb2ddd8967c21b392026c34fc15673e.jpg",
      "nickname": "晨叶梦春"
    },
    "remain_days": 15,
    "remain_less_1day": 0,
    "upower_rank": {
      "total": 1,
      "total_desc": "1+",
      "list": [
        {
          "rank": 1,
          "mid": 425503913,
          "nickname": "晨叶梦春",
          "avatar": "https://i2.hdslb.com/bfs/face/540ed71e2fb2ddd8967c21b392026c34fc15673e.jpg"
        }
      ]
    },
    "upower_icon": "https://i0.hdslb.com/bfs/garb/item/33e2e72d9a0c855f036b4cb55448f44af67a0635.png",
    "upower_right_count": 2,
    "only_contain_medal": false,
    "privilege_type": 10,
    "challenge_info": {
      "challenge_id": "",
      "description": "",
      "challenge_type": 0,
      "remaining_days": 0,
      "end_time": "",
      "progress": 0,
      "targets": [],
      "state": 0,
      "end_time_unix": 0,
      "pub_dyn": 0,
      "dyn_content": ""
    }
  }
}
```

</details>

表示自己已保持17天对“社会易姐QwQ”的包月充电，剩余15天过期。

## 包月充电用户排名

> <https://api.bilibili.com/x/upower/up/member/rank/v2>

*请求方式：GET*

认证方式：Cookie(SESSDATA)或APP

**url参数：**

| 参数名         | 类型 | 内容         | 必要性 | 备注      |
| -------------- | ---- | ------------ | ------ | --------- |
| up_mid         | num  | 目标用户mid  | 必要   |           |
| ps             | num  | 每页项数     | 必要   | 最大为101 |
| pn             | num  | 页码         | 必要   |           |
| privilege_type | num  | 充电档位代码 | 非必要 | 见[充电档位代码与定价](#充电档位代码privilege_type与定价)，默认为可以显示排名的档位中**最高定价**的档位 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                             |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段           | 类型  | 内容                           | 备注     |
| -------------- | ----- | ------------------------------ | -------- |
| up_info        | obj   | UP主信息                       |          |
| rank_info      | array | 当前档位的充电用户排名         |          |
| user_info      | obj   | 自己在该档位下与UP主的充电关系 |          |
| member_total   | num   | 当前档位的充电用户总数         |          |
| privilege_type | num   | 当前充电档位代码               | 见[充电档位代码与定价](#充电档位代码privilege_type与定价) |
| is_charge      | bool  | 自己是否给该UP主包月充电过     | 无论档位 |
| tabs           | array | 可显示排名的充电档位代码列表   |          |
| level_info     | array | 可显示排名的充电档位信息       |          |

`data`中的`up_info`对象：

| 字段         | 类型 | 内容                 | 备注                                     |
| ------------ | ---- | -------------------- | ---------------------------------------- |
| mid          | num  | UP主mid              |                                          |
| nickname     | str  | UP主昵称             |                                          |
| avatar       | str  | UP主头像url          |                                          |
| type         | num  | UP主认证类型         | -1：无<br />0：UP主认证<br />1：机构认证 |
| title        | str  | UP主认证文字         |                                          |
| upower_state | num  | UP主充电功能开启状态 | 0：未开通充电功能<br />1：已开通自定义充电<br />2：已开通包月、自定义充电<br />3：已开通包月高档、自定义充电 |

`data`中的`rank_info`数组：

| 项   | 类型 | 内容      | 备注             |
| ---- | ---- | --------- | ---------------- |
| 0    | obj  | 用户1     |                  |
| n    | obj  | 用户(n+1) | 按照充电排名排列 |
| ……   | obj  | ……        | ……               |

`rank_info`数组中的对象：

| 字段        | 类型 | 内容             | 备注  |
| ----------- | ---- | ---------------- | ----- |
| mid         | num  | 充电用户mid      |       |
| nickname    | str  | 充电用户昵称     |       |
| avatar      | str  | 充电用户头像url  |       |
| rank        | num  | 充电用户排名     |       |
| day         | num  | 包月充电天数     |       |
| expire_at   | num  | 包月充电过期时间 | 恒为0 |
| remain_days | num  | 剩余天数         | 恒为0 |

`data`中的`user_info`对象：

| 字段        | 类型 | 内容             | 备注                            |
| ----------- | ---- | ---------------- | ------------------------------- |
| mid         | num  | 用户mid          |                                 |
| nickname    | str  | 用户昵称         |                                 |
| avatar      | str  | 用户头像url      |                                 |
| rank        | num  | 包月充电排名     | 不在该充电档位用户列表里为-1    |
| day         | num  | 包月充电天数     |                                 |
| expire_at   | num  | 包月充电过期时间 | 秒级时间戳，若从未给UP主在该档位下包月充电过为0 |
| remain_days | num  | 剩余天数         | 若该档位充电状态已失效为0       |

`data`中的`tabs`数组：

| 项   | 类型 | 内容          | 备注             |
| ---- | ---- | ------------- | ---------------- |
| 0    | num  | 档位代码1     |                  |
| n    | num  | 档位代码(n+1) |                  |
| ……   | num  | ……        | ……               |

`data`中的`level_info`数组：

| 项   | 类型 | 内容      | 备注             |
| ---- | ---- | --------- | ---------------- |
| 0    | obj  | 档位1     |                  |
| n    | obj  | 档位(n+1) |                  |
| ……   | obj  | ……        | ……               |

`level_info`数组中的对象：

| 字段           | 类型 | 内容                 | 备注                   |
| -------------- | ---- | -------------------- | ---------------------- |
| privilege_type | num  | 当前充电档位代码     | 见[充电档位代码与定价](#充电档位代码privilege_type与定价) |
| name           | str  | 档位名称             |                        |
| price          | num  | 档位价格             | 单位为百分之一元人民币 |
| member_total   | num  | 当前档位的用户总数   |                        |

**示例：**

获取给`mid=686127`包月充电的用户排名

```shell
curl 'https://api.bilibili.com/x/upower/up/member/rank/v2' \
  --data-urlencode 'up_mid=686127' \
  --data-urlencode 'ps=3' \
  --data-urlencode 'pn=1' \
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
    "up_info": {
      "mid": 686127,
      "nickname": "籽岷",
      "avatar": "https://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp",
      "type": 0,
      "title": "2024百大UP主、知名游戏UP主",
      "upower_state": 3
    },
    "rank_info": [
      {
        "mid": 187012867,
        "nickname": "是我灬不配",
        "avatar": "https://i1.hdslb.com/bfs/face/ad4d2ce0705fd766a0ade315f5a6a5984ce479f4.jpg",
        "rank": 1,
        "day": 682,
        "expire_at": 0,
        "remain_days": 0
      },
      {
        "mid": 20135495,
        "nickname": "和平时一样鸽",
        "avatar": "https://i2.hdslb.com/bfs/face/0eef725964105f39b1f000a59f232d9094017544.jpg",
        "rank": 2,
        "day": 620,
        "expire_at": 0,
        "remain_days": 0
      },
      {
        "mid": 490065730,
        "nickname": "乔治Y-GYhaha",
        "avatar": "https://i1.hdslb.com/bfs/face/e1753e1e43d7a7df5333c5a2f4d3ec1d0334ebe6.jpg",
        "rank": 3,
        "day": 527,
        "expire_at": 0,
        "remain_days": 0
      }
    ],
    "user_info": {
      "mid": 425503913,
      "nickname": "晨叶梦春",
      "avatar": "https://i2.hdslb.com/bfs/face/540ed71e2fb2ddd8967c21b392026c34fc15673e.jpg",
      "rank": -1,
      "day": 0,
      "expire_at": 0,
      "remain_days": 0
    },
    "member_total": 46881,
    "privilege_type": 50,
    "is_charge": false,
    "tabs": [50, 10],
    "level_info": [
      {
        "privilege_type": 50,
        "name": "审稿",
        "price": 12800,
        "member_total": 1082
      },
      {
        "privilege_type": 10,
        "name": "石粒",
        "price": 600,
        "member_total": 46158
      }
    ]
  }
}
```

</details>
