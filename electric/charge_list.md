# 充电列表

## 获取充电公示列表

> http://elec.bilibili.com/api/query.rank.do 

*方式:GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段 | 类型 | 内容     | 备注                          |
| ---- | ---- | -------- | ----------------------------- |
| code | num  | 返回值   | 0：成功 <br />500011：UID错误 |
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
| mid         | num  | 充电对象UID      |                  |
| pay_mid     | num  | 充电用户UID      |                  |
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

查询用户`UID=53456`的充电公示列表

 http://elec.bilibili.com/api/query.rank.do?mid=53456

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



## 获取视频充电鸣谢名单

> http://api.bilibili.com/x/web-interface/elec/show 

*方式:GET*

**url参数：**

| 参数名 | 类型 | 内容         | 必要性       | 备注               |
| ------ | ---- | ------------ | ------------ | ------------------ |
| mid    | num  | 目标用户UID  | 必要         |                    |
| aid    | num  | 目标视频avID | 必要（可选） | avID与bvID任选一个 |
| bvid   | str  | 目标视频bvID | 必要（可选） | avID与bvID任选一个 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-404：无视频<br />62001：不需要展示充电信息 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |
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
| av_list     | array | 目标视频充电列表 |              |
| list        | array | 本月充电用户列表 |              |

`data`中的`show_info`对象：

| 字段  | 类型 | 内容                     | 备注                          |
| ----- | ---- | ------------------------ | ----------------------------- |
| show  | bool | 是否展示视频充电鸣谢名单 | false：不展示<br />true：展示 |
| state | num  | 0                        |                               |

`data`中的`list`数组（`av_list`数组）：

| 项   | 类型 | 内容          | 备注             |
| ---- | ---- | ------------- | ---------------- |
| 0    | obj  | 充电用户1     |                  |
| n    | obj  | 充电用户(n+1) | 按照充电排名排列 |
| ……   | obj  | ……            | ……               |
| 29   | obj  | 充电用户30    | 最后一项         |

`data`中的`list`数组（`av_list`数组）中的对象：

| 字段        | 类型 | 内容             | 备注             |
| ----------- | ---- | ---------------- | ---------------- |
| mid         | num  | 充电对象UID      |                  |
| pay_mid     | num  | 充电用户UID      |                  |
| rank        | num  | 充电用户排名     | 取决于充电的多少 |
| uname       | str  | 充电用户昵称     |                  |
| avatar      | str  | 充电用户头像url  |                  |
| message     | str  | 充电留言         | 无为空           |
| msg_deleted | num  | 0                | 作用尚不明确     |
| vip_info    | obj  | 充电用户会员信息 |                  |
| trend_type  | num  | 0                | 作用尚不明确     |

`data`中的`list`数组（`av_list`数组）中的对象中的`vip_info`对象：

| 字段       | 类型 | 内容       | 备注                                |
| ---------- | ---- | ---------- | ----------------------------------- |
| vipType    | num  | 大会员类型 | 0：无<br />1：月会员<br />2：年会员 |
| vipDueMsec | num  | 0          | 作用尚不明确                        |
| vipStatus  | num  | 大会员状态 | 0：无<br />1：有                    |

**示例：**

获取视频`av967773538`/` BV1up4y1y77i `，用户`UID=53456`的视频充电鸣谢名单

 http://api.bilibili.com/x/web-interface/elec/show?aid=967773538&mid=53456 

同 http://api.bilibili.com/x/web-interface/elec/show?mid=53456&bvid=BV1up4y1y77i 

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
        "av_count": 4,
        "count": 226,
        "total_count": 11528,
        "special_day": 0,
        "display_num": 0,
        "av_list": [
            {
                "mid": 53456,
                "pay_mid": 326994943,
                "rank": 1,
                "uname": "此人不在线hhh",
                "avatar": "http://i0.hdslb.com/bfs/face/d2540c20f569554e62dd88cc78cbf2fe07268903.jpg",
                "message": "",
                "msg_deleted": 0,
                "vip_info": {
                    "vipType": 1,
                    "vipDueMsec": 0,
                    "vipStatus": 1
                },
                "trend_type": 0
            },
            {
                "mid": 53456,
                "pay_mid": 328473637,
                "rank": 2,
                "uname": "SkJ_17",
                "avatar": "http://i1.hdslb.com/bfs/face/42b50918e8b7288009e55332322f991dcbce960a.jpg",
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
                "pay_mid": 31345826,
                "rank": 3,
                "uname": "Aries梦落",
                "avatar": "http://i2.hdslb.com/bfs/face/206a58430c3e11675cacf3b7d7b4a8d9e44de3b2.jpg",
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
                "pay_mid": 349867059,
                "rank": 4,
                "uname": "铭月zsm",
                "avatar": "http://i0.hdslb.com/bfs/face/b8cd7533376d80a1d8b36092f433c39ba1761cbc.jpg",
                "message": "",
                "msg_deleted": 0,
                "vip_info": {
                    "vipType": 1,
                    "vipDueMsec": 0,
                    "vipStatus": 0
                },
                "trend_type": 0
            }
        ],
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
        ]
    }
}
```

