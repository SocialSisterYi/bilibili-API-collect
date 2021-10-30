# 充电列表

- [获取空间充电公示列表](#获取空间充电公示列表)
- [获取视频充电鸣谢名单](#获取视频充电鸣谢名单)

---

## 获取空间充电公示列表

> http://elec.bilibili.com/api/query.rank.do 

*请求方式:GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户mid | 必要   |      |

**json回复：**

根对象：

| 字段 | 类型 | 内容     | 备注                          |
| ---- | ---- | -------- | ----------------------------- |
| code | num  | 返回值   | 0：成功 <br />500011：mid错误 |
| msg  | str  | 错误信息 | 正确时无此项                  |
| data | obj  | 数据本体 |                               |

`data`对象：

| 字段        | 类型   | 内容             | 备注         |
| ----------- | ------ | ---------------- | ------------ |
| display_num | num    | 0                | 作用尚不明确 |
| count       | num    | 本月充电人数     |              |
| total_count | num    | 总计充电人数     |              |
| list        | array | 本月充电用户列表 |              |
| user        | null   |                  | 作用尚不明确 |

`data`中的`list`数组：

| 项   | 类型 | 内容          | 备注             |
| ---- | ---- | ------------- | ---------------- |
| 0    | obj  | 充电用户1     |                  |
| n    | obj  | 充电用户(n+1) | 按照充电排名排列 |
| ……   | obj  | ……            | ……               |
| 29   | obj  | 充电用户30    | 最后一项         |

`data`中的`list`数组中的对象：

| 字段        | 类型 | 内容             | 备注             |
| ----------- | ---- | ---------------- | ---------------- |
| mid         | num  | 充电对象mid      |                  |
| pay_mid     | num  | 充电用户mid      |                  |
| rank        | num  | 充电用户排名     | 取决于充电的多少 |
| uname       | str  | 充电用户昵称     |                  |
| avatar      | str  | 充电用户头像url  |                  |
| message     | str  | 充电留言         | 无为空           |
| msg_deleted | num  | 0                | 作用尚不明确     |
| vip_info    | obj  | 充电用户会员信息 |                  |
| trend_type  | num  | 0                | 作用尚不明确     |

`data`中的`list`数组中的对象中的`vip_info`对象：

| 字段       | 类型 | 内容       | 备注                                |
| ---------- | ---- | ---------- | ----------------------------------- |
| vipType    | num  | 大会员类型 | 0：无<br />1：月会员<br />2：年会员 |
| vipDueMsec | num  | 0          | 作用尚不明确                        |
| vipStatus  | num  | 大会员状态 | 0：无<br />1：有                    |

**示例：**

查询用户`mid=53456`的充电公示列表

```shell
curl -G 'http://elec.bilibili.com/api/query.rank.do' \
--data-urlencode 'mid=53456'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "data": {
        "display_num": 0,
        "count": 226,
        "total_count": 11528,
        "list": [
            {
                "mid": 53456,
                "pay_mid": 346545025,
                "rank": 1,
                "uname": "还有什么名字没人用",
                "avatar": "http://i1.hdslb.com/bfs/face/76d4b1ecd13e992a6c7303d77bf716dd922ab234.jpg",
                "message": "早日康复，五月快乐",
                "msg_deleted": 0,
                "vip_info": {
                    "vipType": 2,
                    "vipDueMsec": 0,
                    "vipStatus": 1
                },
                "trend_type": 0
            },
            {
                "mid": 53456,
                "pay_mid": 8826056,
                "rank": 2,
                "uname": "煋痕",
                "avatar": "http://i2.hdslb.com/bfs/face/35b7c752d0eb1bb7a924804f240b9bfd9199625f.jpg",
                "message": "",
                "msg_deleted": 0,
                "vip_info": {
                    "vipType": 2,
                    "vipDueMsec": 0,
                    "vipStatus": 1
                },
                "trend_type": 0
            },
            {
                "mid": 53456,
                "pay_mid": 356668487,
                "rank": 3,
                "uname": "舞象祥",
                "avatar": "http://i1.hdslb.com/bfs/face/574f6203ef5bd0d56b95ded6a2736676d9cc5307.jpg",
                "message": "warma  hayo",
                "msg_deleted": 0,
                "vip_info": {
                    "vipType": 1,
                    "vipDueMsec": 0,
                    "vipStatus": 1
                },
                "trend_type": 0
            },
            …………
        ],
        "user": null
    }
}
```

</details>

## 获取视频充电鸣谢名单

> http://api.bilibili.com/x/web-interface/elec/show 

*请求方式:GET*

**url参数：**

| 参数名 | 类型 | 内容         | 必要性       | 备注               |
| ------ | ---- | ------------ | ------------ | ------------------ |
| mid    | num  | 目标用户mid  | 必要         |                    |
| aid    | num  | 目标稿件avid | 必要（可选） | avid与bvid任选一个 |
| bvid   | str  | 目标稿件bvid | 必要（可选） | avid与bvid任选一个 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-404：无视频<br />62001：不需要展示充电信息 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段        | 类型   | 内容             | 备注         |
| ----------- | ------ | ---------------- | ------------ |
| show_info   | obj    | 展示选项         |              |
| av_count    | num    | 目标视频充电人数 |              |
| count       | num    | 本月充电人数     |              |
| total_count | num    | 总计充电人数     |              |
| special_day | num    | 0                | 作用尚不明确 |
| display_num | num    | 0                | 作用尚不明确 |
| list        | array | 本月充电用户列表 |              |

`data`中的`show_info`对象：

| 字段  | 类型 | 内容                     | 备注                          |
| ----- | ---- | ------------------------ | ----------------------------- |
| show  | bool | 是否展示视频充电鸣谢名单 | false：不展示<br />true：展示 |
| state | num  | 0                        |                               |

`data`中的`list`数组：

| 项   | 类型 | 内容          | 备注             |
| ---- | ---- | ------------- | ---------------- |
| 0    | obj  | 充电用户1     |                  |
| n    | obj  | 充电用户(n+1) | 按照充电排名排列 |
| ……   | obj  | ……            | ……               |
| 29   | obj  | 充电用户30    | 最后一项         |

`data`中的`list`数组中的对象：

| 字段        | 类型 | 内容             | 备注             |
| ----------- | ---- | ---------------- | ---------------- |
| mid         | num  | 充电对象mid      |                  |
| pay_mid     | num  | 充电用户mid      |                  |
| rank        | num  | 充电用户排名     | 取决于充电的多少 |
| uname       | str  | 充电用户昵称     |                  |
| avatar      | str  | 充电用户头像url  |                  |
| message     | str  | 充电留言         | 无为空           |
| msg_deleted | num  | 0                | 作用尚不明确     |
| vip_info    | obj  | 充电用户会员信息 |                  |
| trend_type  | num  | 0                | 作用尚不明确     |

`data`中的`list`数组中的`vip_info`对象：

| 字段       | 类型 | 内容       | 备注                                |
| ---------- | ---- | ---------- | ----------------------------------- |
| vipType    | num  | 大会员类型 | 0：无<br />1：月会员<br />2：年会员 |
| vipDueMsec | num  | 0          | 作用尚不明确                        |
| vipStatus  | num  | 大会员状态 | 0：无<br />1：有                    |

**示例：**

获取视频`av967773538`/` BV1up4y1y77i `，用户`mid=53456`的视频充电鸣谢名单

avid方式：

```shell
curl -G 'http://api.bilibili.com/x/web-interface/elec/show' \
--data-urlencode 'mid=53456' \
--data-urlencode 'aid=967773538'
```

bvid方式：

```shell
curl -G 'http://api.bilibili.com/x/web-interface/elec/show' \
--data-urlencode 'mid=53456' \
--data-urlencode 'bvid=BV1up4y1y77i '
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "show_info": {
      "show": true,
      "state": 0
    },
    "av_count": 0,
    "count": 0,
    "total_count": 19422,
    "special_day": 0,
    "display_num": 0,
    "list": [
      {
        "mid": 53456,
        "pay_mid": 1216085164,
        "rank": 1,
        "uname": "JZ72",
        "avatar": "http://i1.hdslb.com/bfs/face/3d741682fafc286999b5e8089a844ae4f46651fe.jpg",
        "message": "Warma YYDS ",
        "msg_deleted": 0,
        "vip_info": {
          "vipType": 2,
          "vipDueMsec": 0,
          "vipStatus": 1
        },
        "trend_type": 0
      },
      {
        "mid": 53456,
        "pay_mid": 305858373,
        "rank": 2,
        "uname": "适应性神经系统",
        "avatar": "http://i0.hdslb.com/bfs/face/2ad38dec879f66c32b5e5cb1750cb3f3e446bf91.jpg",
        "message": "",
        "msg_deleted": 0,
        "vip_info": {
          "vipType": 1,
          "vipDueMsec": 0,
          "vipStatus": 0
        },
        "trend_type": 0
      },
      ......
    ]
  }
}
```

</details>
