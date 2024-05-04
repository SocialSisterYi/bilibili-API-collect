# 包月充电

<img src="../../assets/img/battery-100.png" width="100" height="100"/>

## 获取包月充电列表

> https://api.live.bilibili.com/xlive/revenue/v1/guard/getChargeRecord

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

| 字段      | 类型  | 内容            | 备注   |
| --------- | ----- | --------------- | ------ |
| up_uid    | num   | 充电UP主mid     |        |
| user_name | str   | 充电UP主昵称    |        |
| user_face | str   | 充电UP主头像url |        |
| item      | array | 充电详情        |        |
| start     | num   | 开始充电时间    | 时间戳 |

数组`list`中的对象中的`item`数组：

| 项   | 类型 | 内容     | 备注     |
| ---- | ---- | -------- | -------- |
| 0    | obj  | 充电详情 | 套了个娃 |

数组`item`中的对象：

| 字段           | 类型                                          | 内容             | 备注             |
| -------------- | --------------------------------------------- | ---------------- | ---------------- |
| privilege_type | num                                           | 10（？）         | **作用尚不明确** |
| icon           | str                                           | 充电图标         |                  |
| name           | str                                           | `包月充电`       |                  |
| expire_time    | num                                           | 充电过期时间     | 时间戳           |
| renew          | 开启自动续费时：obj<br />关闭自动续费时：null | 充电自动续费详情 |                  |

数组`item`中的对象中的`renew`对象：

| 字段              | 类型 | 内容         | 备注                                              |
| ----------------- | ---- | ------------ | ------------------------------------------------- |
| uid               | num  | 自己的mid    |                                                   |
| ruid              | num  | UP主的mid    |                                                   |
| goods_id          | num  | 充电类型     | 172：一个月<br />173：连续包月<br />174：连续包年 |
| status            | num  | 充电状态     | 1                                                 |
| next_execute_time | num  | 下次续费时间 | 时间戳                                            |
| signed_time       | num  | 签约时间     | 时间戳                                            |
| signed_price      | num  | 下次续费金额 | 单位为千分之一元人民币                            |
| pay_channel       | num  | 签约平台     | 2：微信支付<br />4：支付宝                        |
| period            | num  | 下次充电天数 |                                                   |

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
                        "name": "包月充电",
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
                            "period": 366
                        }
                    }
                ],
                "start": 1669183804
            },
            {
                "up_uid": 293793435,
                "user_name": "社会易姐QwQ",
                "user_face": "https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg",
                "item": [
                    {
                        "privilege_type": 10,
                        "icon": "https://s1.hdslb.com/bfs/templar/york-static/lightning_icon@2x.png",
                        "name": "包月充电",
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
                            "period": 31
                        }
                    }
                ],
                "start": 1676033795
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

> https://api.bilibili.com/x/upower/item/detail

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| up_mid | num  | 目标用户mid | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                            |
| ------- | ---- | -------- | --------------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />203101：UP主未开通包月充电功能 |
| message | str  | 错误信息 | 默认为0                                                         |
| ttl     | num  | 1        |                                                                 |
| data    | obj  | 信息本体 |                                                                 |

`data`对象：

| 字段        | 类型 | 内容       | 备注 |
| ----------- | ---- | ---------- | ---- |
| upower_rank | obj  | 充电详情   |      |
| item        | obj  | 充电欢迎语 |      |
| user_card   | obj  | UP主信息   |      |

`data`中的`upower_rank`对象：

| 字段       | 类型  | 内容             | 备注         |
| ---------- | ----- | ---------------- | ------------ |
| total      | num   | 充电用户总数     |              |
| total_desc | str   | 充电总数文字说明 | 示例：“1+”   |
| list       | array | 充电用户列表     | 最多展示30个 |

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

**示例：**

获取`mid=293793435`的包月充电详情


```shell
curl 'https://api.bilibili.com/x/upower/item/detail' \
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
        "upower_rank": {
            "total": 1,
            "total_desc": "1+",
            "list": [
                {
                    "rank": 1,
                    "mid": 425503913,
                    "nickname": "wuziqian211",
                    "avatar": "https://i2.hdslb.com/bfs/face/390f4b18b8b15c1f2ecdb6ee44e572aa18b9b2d0.png"
                }
            ]
        },
        "item": {
            "intro_video_aid": "",
            "welcomes": "哈喽b站的小伙伴们，我的充电计划升级啦！ 感兴趣就多多支持我吧~(゜-゜)つロ"
        },
        "user_card": {
            "avatar": "https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg",
            "nickname": "社会易姐QwQ"
        }
    }
}
```

</details>

## 与UP主的包月充电关系

> https://api.bilibili.com/x/upower/charge/follow/info

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

| 字段             | 类型 | 内容                     | 备注                                        |
| ---------------- | ---- | ------------------------ | ------------------------------------------- |
| days             | num  | 已保持多少天包月充电状态 |                                             |
| up_card          | obj  | UP主信息                 |                                             |
| user_card        | obj  | 自己的信息               |                                             |
| remain_days      | num  | 剩余天数                 | 未处于包月充电状态为-1                      |
| remain_less_1day | num  | 剩余的天数小于1天        | 0：否<br />1：是<br />未处于包月充电状态为0 |
| upower_rank      | obj  | 充电详情                 |                                             |
| upower_icon      | str  | 充电图标url              | 仅在处于包月充电状态时有内容                |

`data`中的`up_card`对象：

| 字段           | 类型 | 内容         | 备注 |
| -------------- | ---- | ------------ | ---- |
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
            "nickname": "社会易姐QwQ",
            "official_title": "",
            "avatar": "https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg"
        },
        "user_card": {
            "avatar": "https://i2.hdslb.com/bfs/face/390f4b18b8b15c1f2ecdb6ee44e572aa18b9b2d0.png",
            "nickname": "wuziqian211"
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
                    "nickname": "wuziqian211",
                    "avatar": "https://i2.hdslb.com/bfs/face/390f4b18b8b15c1f2ecdb6ee44e572aa18b9b2d0.png"
                }
            ]
        },
        "upower_icon": "https://i0.hdslb.com/bfs/garb/item/33e2e72d9a0c855f036b4cb55448f44af67a0635.png"
    }
}
```

</details>

表示自己已保持17天对“社会易姐QwQ”的包月充电，剩余15天过期。

## 包月充电用户排名

> https://api.bilibili.com/x/upower/up/member/rank/v2

*请求方式：GET*

认证方式：Cookie(SESSDATA)或APP

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注     |
| ------ | ---- | ----------- | ------ | -------- |
| up_mid | num  | 目标用户mid | 必要   |          |
| ps     | num  | 每页项数    | 非必要 | 默认为20 |
| pn     | num  | 页码        | 非必要 | 默认为1  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                             |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段         | 类型  | 内容         | 备注 |
| ------------ | ----- | ------------ | ---- |
| up_info      | obj   | UP主信息     |      |
| rank_info    | array | 充电用户排名 |      |
| user_info    | obj   | 自己的信息   |      |
| member_total | num   | 充电用户总数 |      |

`data`中的`up_info`对象：

| 字段     | 类型 | 内容         | 备注                                     |
| -------- | ---- | ------------ | ---------------------------------------- |
| mid      | num  | UP主mid      |                                          |
| nickname | str  | UP主昵称     |                                          |
| avatar   | str  | UP主头像url  |                                          |
| type     | num  | UP主认证类型 | -1：无<br />0：UP主认证<br />1：机构认证 |
| title    | str  | UP主认证信息 |                                          |

`data`中的`rank_info`数组：

| 项   | 类型 | 内容      | 备注             |
| ---- | ---- | --------- | ---------------- |
| 0    | obj  | 用户1     |                  |
| n    | obj  | 用户(n+1) | 按照充电排名排列 |
| ……   | obj  | ……        | ……               |

数组`rank_info`中的对象：

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
| rank        | num  | 包月充电排名     | 不在包月充电用户列表里为-1      |
| day         | num  | 包月充电天数     |                                 |
| expire_at   | num  | 包月充电过期时间 | 时间戳，若从未给UP主包月充电为0 |
| remain_days | num  | 未过期时：剩余天数<br />已过期且之前给UP主包月充电过：自过期以来的天数 | |

**示例：**

获取给`mid=293793435`包月充电的用户排名


```shell
curl 'https://api.bilibili.com/x/upower/up/member/rank/v2' \
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
        "up_info": {
            "mid": 293793435,
            "nickname": "社会易姐QwQ",
            "avatar": "https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg",
            "type": -1,
            "title": ""
        },
        "rank_info": [
            {
                "mid": 425503913,
                "nickname": "wuziqian211",
                "avatar": "https://i2.hdslb.com/bfs/face/390f4b18b8b15c1f2ecdb6ee44e572aa18b9b2d0.png",
                "rank": 1,
                "day": 31,
                "expire_at": 0,
                "remain_days": 0
            }
        ],
        "user_info": {
            "mid": 425503913,
            "nickname": "wuziqian211",
            "avatar": "https://i2.hdslb.com/bfs/face/390f4b18b8b15c1f2ecdb6ee44e572aa18b9b2d0.png",
            "rank": 1,
            "day": 31,
            "expire_at": 1678723199,
            "remain_days": 15
        },
        "member_total": 1
    }
}
```

</details>
