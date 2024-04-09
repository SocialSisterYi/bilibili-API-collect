# 充电列表

## 获取空间充电公示列表

> https://api.bilibili.com/x/ugcpay-rank/elec/month/up

*请求方式：GET*

本接口需要在请求标头中提供有效的浏览器 UA，如 `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36`

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| up_mid | num  | 目标用户mid | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                         |
| ------- | ---- | -------- | ---------------------------- |
| code    | num  | 返回值   | 0：成功 <br />-400：请求错误<br />88214：up主未开通充电 |
| message | str  | 错误信息 |                              |
| ttl     | num  | 0        |                              |
| data    | obj  | 数据本体 |                              |

`data`对象：

| 字段        | 类型  | 内容             | 备注            |
| ----------- | ----- | ---------------- | --------------- |
| count       | num   | 本月充电人数     |                 |
| list        | array | 本月充电用户列表 |                 |
| total_count | num   | 总计充电次数     |                 |
| total       | num   | 总计充电次数     | 同`total_count` |
| special_day | num   | 0                | 作用尚不明确    |

`data`中的`list`数组：

| 项   | 类型 | 内容          | 备注             |
| ---- | ---- | ------------- | ---------------- |
| 0    | obj  | 充电用户1     |                  |
| n    | obj  | 充电用户(n+1) | 按照充电排名排列 |
| ……   | obj  | ……            | ……               |
| 29   | obj  | 充电用户30    | 最后一项         |

`data`中的`list`数组中的对象：

| 字段       | 类型 | 内容             | 备注             |
| ---------- | ---- | ---------------- | ---------------- |
| uname      | str  | 充电用户昵称     |                  |
| avatar     | str  | 充电用户头像url  |                  |
| mid        | num  | 充电对象mid      |                  |
| pay_mid    | num  | 充电用户mid      |                  |
| rank       | num  | 充电用户排名     | 取决于充电的多少 |
| trend_type | num  | 0                | 作用尚不明确     |
| vip_info   | obj  | 充电用户会员信息 |                  |
| message    | str  | 充电留言         | 无为空           |
| msg_hidden | num  | 0                | 作用尚不明确     |

`list`数组中的对象中的`vip_info`对象：

| 字段       | 类型 | 内容                 | 备注                                      |
| ---------- | ---- | -------------------- | ----------------------------------------- |
| vipDueMsec | num  | 大会员过期时间（？） | 恒为0                                     |
| vipStatus  | num  | 大会员状态           | 0：无<br />1：有                          |
| vipType    | num  | 大会员类型           | 0：无<br />1：月会员<br />2：年会员及以上 |

**示例：**

查询用户`mid=53456`的充电公示列表

```shell
curl -G 'https://api.bilibili.com/x/ugcpay-rank/elec/month/up' \
-A 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' \
--data-urlencode 'up_mid=53456'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "",
    "ttl": 0,
    "data": {
        "count": 397,
        "list": [
            {
                "uname": "Mars韩笑",
                "avatar": "https://i1.hdslb.com/bfs/face/a46599fa41cac672eda677e334f0be93cca02f1f.jpg",
                "mid": 53456,
                "pay_mid": 5683462,
                "rank": 1,
                "trend_type": 0,
                "vip_info": {
                    "vipDueMsec": 0,
                    "vipStatus": 1,
                    "vipType": 2
                },
                "message": "你真棒，你是奇迹！（Warma真的是太棒了！",
                "message_hidden": 0
            },
            {
                "uname": "愚星-",
                "avatar": "https://i1.hdslb.com/bfs/face/7e4a8b150567a20a1b075aa3894dd3674a1e6ebe.jpg",
                "mid": 53456,
                "pay_mid": 382630072,
                "rank": 2,
                "trend_type": 0,
                "vip_info": {
                    "vipDueMsec": 0,
                    "vipStatus": 1,
                    "vipType": 1
                },
                "message": "感谢您给我带来的快乐！我的人生遇见你是我的荣幸！！",
                "message_hidden": 0
            },
            {
                "uname": "なか酱",
                "avatar": "https://i0.hdslb.com/bfs/face/d4b74091d7f1c336399625dc062ddc93d676bcdc.jpg",
                "mid": 53456,
                "pay_mid": 446080731,
                "rank": 3,
                "trend_type": 0,
                "vip_info": {
                    "vipDueMsec": 0,
                    "vipStatus": 1,
                    "vipType": 2
                },
                "message": "",
                "message_hidden": 0
            }
        ],
        "total_count": 27291,
        "total": 27291,
        "special_day": 0
    }
}
```

</details>

## 获取视频充电鸣谢名单

> https://api.bilibili.com/x/web-interface/elec/show 

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

| 字段        | 类型  | 内容             | 备注         |
| ----------- | ----- | ---------------- | ------------ |
| show_info   | obj   | 展示选项         |              |
| av_count    | num   | 目标视频充电人数 |              |
| count       | num   | 本月充电人数     |              |
| total_count | num   | 总计充电人数     |              |
| special_day | num   | 0                | 作用尚不明确 |
| display_num | num   | 0                | 作用尚不明确 |
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
curl -G 'https://api.bilibili.com/x/web-interface/elec/show' \
--data-urlencode 'mid=53456' \
--data-urlencode 'aid=967773538'
```

bvid方式：

```shell
curl -G 'https://api.bilibili.com/x/web-interface/elec/show' \
--data-urlencode 'mid=53456' \
--data-urlencode 'bvid=BV1up4y1y77i'
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

## 查询我收到的充电列表

> https://pay.bilibili.com/bk/brokerage/listForCustomerRechargeRecord

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名      | 类型 | 内容     | 必要性 | 备注                |
| ----------- | ---- | -------- | ------ | ------------------- |
| currentPage | num  | 页数     | 必要   |                     |
| pageSize    | num  | 分页大小 | 必要   | 取值范围[1,50]      |
| customerId  | num  | (?)      | 必要   | 目前为固定值：10026 |
| beginTime   | str  | 开始日期 | 非必要 | yyyy-MM-dd          |
| endTime     | str  | 结束日期 | 非必要 | yyyy-MM-dd          |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />800501007：user not login<br />800501008：内部错误<br /> 800501011：请求参数有误 |
| errno   | num  |          |                             |
| msg     | str  |          |                             |
| showMsg | str  |          |                             |
| success | bool |          |                             |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段   | 类型  | 内容         | 备注 |
| ------ | ----- | ------------ | ---- |
| page   | obj   | 分页信息     |      |
| result | array | 充电信息本体 |      |
| config | array | (?)          |      |

`page`对象：

| 字段        | 类型 | 内容         | 备注 |
| ----------- | ---- | ------------ | ---- |
| currentPage | num  | 当前页数     |      |
| pageSize    | num  | 当前分页大小 |      |
| totalCount  | num  | 记录总数     |      |
| totalPage   | num  | 总页数       |      |

`config`数组中的对象：

| 字段              | 类型 | 内容 | 备注       |
| ----------------- | ---- | ---- | ---------- |
| mid               | null |      | 总是为null |
| name              | null |      | 总是为null |
| avatar            | null |      | 总是为null |
| originalThirdCoin | null |      | 总是为null |
| brokerage         | null |      | 总是为null |
| remark            | null |      | 总是为null |
| ctime             | null |      | 总是为null |

`result`数组中的对象：

| 字段              | 类型 | 内容             | 备注                |
| ----------------- | ---- | ---------------- | ------------------- |
| mid               | num  | 充电人mid        |                     |
| name              | str  | 充电人昵称       |                     |
| avatar            | str  | 充电人头像       |                     |
| originalThirdCoin | num  | 原始B币数        |                     |
| brokerage         | num  | 实际收到的贝壳数 |                     |
| remark            | str  | 充电渠道         | Web/安卓/iOS        |
| ctime             | str  | 充电时间         | yyyy-MM-dd HH:mm:ss |

**示例：**

```shell
curl -G 'https://pay.bilibili.com/bk/brokerage/listForCustomerRechargeRecord' \
--data-urlencode 'currentPage=1' \
--data-urlencode 'pageSize=2' \
--data-urlencode 'customerId=10026' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "errno": 0,
  "msg": "SUCCESS",
  "showMsg": "交易成功",
  "data": {
    "page": {
      "currentPage": 1,
      "pageSize": 2,
      "totalCount": 311,
      "totalPage": 156
    },
    "result": [
      {
        "mid": 2233,
        "name": "2233",
        "avatar": "http://i2.hdslb.com/bfs/face/f42b7f47c80648d2ee1231f2435b527c60302289.jpg",
        "originalThirdCoin": 2,
        "brokerage": 1.34,
        "remark": "Web",
        "ctime": "2022-04-12 17:34:47"
      },
      {
        "mid": 2233,
        "name": "2233",
        "avatar": "http://i0.hdslb.com/bfs/face/member/noface.jpg",
        "originalThirdCoin": 2,
        "brokerage": 0.68,
        "remark": "iOS",
        "ctime": "2022-04-10 03:41:10"
      }
    ],
    "config": [
      {
        "mid": null,
        "name": null,
        "avatar": null,
        "originalThirdCoin": null,
        "brokerage": null,
        "remark": null,
        "ctime": null
      }
    ]
  },
  "success": true
}
```

</details>

## 查询历史充电数据

> https://member.bilibili.com/x/h5/elec/rank/recent

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名   | 类型 | 内容     | 必要性 | 备注             |
| -------- | ---- | -------- | ------ | ---------------- |
| pn       | num  | 页数     | 非必要 |                  |
| ps       | num  | 分页大小 | 非必要 | 取值范围\[1,20\] |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注    |
| ------- | ---- | -------- | ------- |
| code    | num  | 返回值   | 0：成功 |
| message | str  | 错误信息 |         |
| ttl     | num  | 1        |         |
| data    | obj  | 信息本体 |         |

`data`对象：

| 字段  | 类型  | 内容         | 备注 |
| ----- | ----- | ------------ | ---- |
| list  | array | 充电信息本体 |      |
| pager | obj   | 分页信息     |      |

`list`数组中的对象：

| 字段     | 类型 | 内容       | 备注                |
| -------- | ---- | ---------- | ------------------- |
| aid      | num  | 0          |                     |
| bvid     | str  | 空         |                     |
| elec_num | num  | 充电电池数 |                     |               
| title    | str  | 空         |                     |
| uname    | str  | 空         |                     |
| avatar   | str  | 空         |                     |
| ctime    | str  | 充电时间   | yyyy-MM-dd HH:mm:ss |

`pager`对象：

| 字段    | 类型 | 内容         | 备注 |
| ------- | ---- | ------------ | ---- |
| current | num  | 当前页数     |      |
| size    | num  | 当前分页大小 |      |
| total   | num  | 记录总数     |      |

**示例：**

```shell
curl -G 'https://member.bilibili.com/x/h5/elec/rank/recent' \
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
                "aid": 0,
                "bvid": "",
                "elec_num": 50,
                "title": "",
                "uname": "",
                "avatar": "",
                "ctime": "2020-04-02 03:12:22"
            },
            {
                "aid": 0,
                "bvid": "",
                "elec_num": 20,
                "title": "",
                "uname": "",
                "avatar": "",
                "ctime": "2020-04-02 03:12:00"
            }
        ],
        "pager": {
            "current": 1,
            "size": 20,
            "total": 38
        }
    }
}
```

</details>
