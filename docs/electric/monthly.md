# 包月充电

<img src="../../assets/img/battery-100.png" width="100" height="100"/>

## UP主包月充电详情

> https://api.bilibili.com/x/upower/item/detail

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
| n    | obj  | 用户(n+1) |                  |
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
| upower_icon      | str  | 充电图标url              |                                             |

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
| n    | obj  | 用户(n+1) |                  |
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

## 包月充电用户排名

> https://api.bilibili.com/x/upower/up/member/rank/v2

*请求方式：GET*

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

| 字段      | 类型 | 内容             | 备注  |
| --------- | ---- | ---------------- | ----- |
| mid       | num  | 充电用户mid      |       |
| nickname  | str  | 充电用户昵称     |       |
| avatar    | str  | 充电用户头像url  |       |
| rank      | num  | 充电用户排名     |       |
| day       | num  | 包月充电天数     |       |
| expire_at | num  | 包月充电过期时间 | 恒为0 |

`data`中的`user_info`对象：

| 字段      | 类型 | 内容             | 备注                            |
| --------- | ---- | ---------------- | ------------------------------- |
| mid       | num  | 用户mid          |                                 |
| nickname  | str  | 用户昵称         |                                 |
| avatar    | str  | 用户头像url      |                                 |
| rank      | num  | 包月充电排名     | 不在包月充电用户列表里为-1      |
| day       | num  | 包月充电天数     |                                 |
| expire_at | num  | 包月充电过期时间 | 单位为秒，未处于包月充电状态为0 |

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
                "expire_at": 0
            }
        ],
        "user_info": {
            "mid": 425503913,
            "nickname": "wuziqian211",
            "avatar": "https://i2.hdslb.com/bfs/face/390f4b18b8b15c1f2ecdb6ee44e572aa18b9b2d0.png",
            "rank": 1,
            "day": 31,
            "expire_at": 1678723199
        },
        "member_total": 1
    }
}
```

</details>
