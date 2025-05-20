# 充电列表

## 获取空间充电公示列表

> <https://api.bilibili.com/x/ugcpay-rank/elec/month/up>

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
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />88214：up主未开通充电 |
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

| 字段       | 类型 | 内容           | 备注  |
| ---------- | ---- | -------------- | ----- |
| vipDueMsec | num  | 大会员过期时间 | 恒为0 |
| vipStatus  | num  | 大会员状态     | 包月充电时恒为0<br />自定义充电：<br />0：无<br />1：有 |
| vipType    | num  | 大会员类型     | 包月充电时恒为0<br />自定义充电：<br />0：无<br />1：月大会员<br />2：年度及以上大会员 |

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
    "count": 8521,
    "list": [
      {
        "uname": "云梦澡堂",
        "avatar": "https://i1.hdslb.com/bfs/face/6589df5fdac0f80593f6a86e4d88dc08e25df3d2.jpg",
        "mid": 53456,
        "pay_mid": 1555775947,
        "rank": 1,
        "trend_type": 0,
        "vip_info": { "vipDueMsec": 0, "vipStatus": 0, "vipType": 0 },
        "message": "",
        "message_hidden": 0
      },
      {
        "uname": "在下小天子",
        "avatar": "https://i1.hdslb.com/bfs/face/a3bfbe6186889bb50dcd87c1156d07a70227a25b.jpg",
        "mid": 53456,
        "pay_mid": 508630801,
        "rank": 2,
        "trend_type": 0,
        "vip_info": { "vipDueMsec": 0, "vipStatus": 0, "vipType": 0 },
        "message": "",
        "message_hidden": 0
      }
    ],
    "total_count": 41919,
    "total": 41919,
    "special_day": 0
  }
}
```

</details>

## 获取视频充电鸣谢名单

> <https://api.bilibili.com/x/web-interface/elec/show>

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

| 字段          | 类型  | 内容             | 备注         |
| ------------- | ----- | ---------------- | ------------ |
| show_info     | obj   | 展示选项         |              |
| av_count      | num   | 目标视频充电人数 |              |
| count         | num   | 本月充电人数     |              |
| total_count   | num   | 总计充电人数     |              |
| special_day   | num   | 0                | 作用尚不明确 |
| display_num   | num   | 0                | 作用尚不明确 |
| cnt_priv_type | num   | 0                | 作用尚不明确 |
| list          | array | 本月充电用户列表 |              |

`data`中的`show_info`对象：

| 字段       | 类型 | 内容                     | 备注             |
| ---------- | ---- | ------------------------ | ---------------- |
| show       | bool | 是否展示视频充电鸣谢名单 |                  |
| state      | num  | 充电功能开启状态         | -1：未开通充电功能<br />1：已开通自定义充电<br />2：已开通包月、自定义充电<br />3：已开通包月高档、自定义充电 |
| title      | str  | 充电按钮显示文字         | 空字符串或 `充电` 或 `充电中` |
| jump_url   | str  | 跳转url                  |                  |
| icon       | str  | 充电图标                 |                  |
| high_level | obj  | 充电专属视频信息         |                  |
| with_qa_id | num  | 充电问答id               |                  |

`show_info`中的`high_level`对象：

| 字段           | 类型 | 内容                           | 备注             |
| -------------- | ---- | ------------------------------ | ---------------- |
| privilege_type | num  | 解锁视频所需最低定价档位的代码 | 见[充电档位代码与定价](../electric/monthly.md#充电档位代码privilege_type与定价) |
| title          | str  | 提示标题                       | `该视频为「{充电档位名称}」专属视频` |
| sub_title      | str  | 提示子标题                     | `开通「{充电档位定价}元档包月充电」即可观看` |
| show_button    | bool | 是否显示按钮                   |                  |
| button_text    | str  | 按钮文本                       | `去开通`         |
| jump_url       | obj  | 跳转url信息                    | 详细信息有待补充 |
| intro          | str  | 充电介绍语                     |                  |
| open           | bool | （？）                         |                  |
| new            | bool | （？）                         |                  |
| question_text  | str  | （？）                         |                  |
| qa_detail_link | str  | （？）                         |                  |

`high_level`中的`jump_url`对象：

| 字段            | 类型 | 内容                    | 备注 |
| --------------- | ---- | ----------------------- | ---- |
| up_link         | str  | UP主包月充电购买页面url |      |
| paywall_link    | str  | 视频试看后的提示页面url |      |
| previewbar_link | str  | 视频预览页面url         |      |

`data`中的`list`数组：

| 项   | 类型 | 内容          | 备注             |
| ---- | ---- | ------------- | ---------------- |
| 0    | obj  | 充电用户1     |                  |
| n    | obj  | 充电用户(n+1) | 按照充电排名排列 |
| ……   | obj  | ……            | ……               |

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

| 字段       | 类型 | 内容           | 备注  |
| ---------- | ---- | -------------- | ----- |
| vipType    | num  | 大会员类型     | 包月充电时恒为0<br />自定义充电：<br />0：无<br />1：月大会员<br />2：年度及以上大会员 |
| vipDueMsec | num  | 大会员过期时间 | 恒为0 |
| vipStatus  | num  | 大会员状态     | 包月充电时恒为0<br />自定义充电：<br />0：无<br />1：有 |

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
      "state": 2,
      "title": "充电",
      "jump_url": "https://www.bilibili.com/h5/upower/index?mid=53456&navhide=1&prePage=video&oid=967773538",
      "icon": "https://i0.hdslb.com/bfs/garb/item/33e2e72d9a0c855f036b4cb55448f44af67a0635.png",
      "high_level": {
        "privilege_type": 0,
        "title": "",
        "sub_title": "",
        "show_button": false,
        "button_text": "",
        "jump_url": { "up_link": "", "paywall_link": "", "previewbar_link": "" },
        "intro": "",
        "open": false,
        "new": false
      }
    },
    "av_count": 0,
    "count": 0,
    "total_count": 41919,
    "special_day": 0,
    "display_num": 0,
    "cnt_priv_type": 0,
    "list": [
      {
        "mid": 53456,
        "pay_mid": 1555775947,
        "rank": 1,
        "uname": "云梦澡堂",
        "avatar": "https://i1.hdslb.com/bfs/face/6589df5fdac0f80593f6a86e4d88dc08e25df3d2.jpg",
        "message": "",
        "msg_deleted": 0,
        "vip_info": { "vipType": 0, "vipDueMsec": 0, "vipStatus": 0 },
        "trend_type": 0
      },
      {
        "mid": 53456,
        "pay_mid": 508630801,
        "rank": 2,
        "uname": "在下小天子",
        "avatar": "https://i1.hdslb.com/bfs/face/a3bfbe6186889bb50dcd87c1156d07a70227a25b.jpg",
        "message": "",
        "msg_deleted": 0,
        "vip_info": { "vipType": 0, "vipDueMsec": 0, "vipStatus": 0 },
        "trend_type": 0
      }
    ]
  }
}
```

</details>

## 查询我收到的充电列表

> <https://pay.bilibili.com/bk/brokerage/listForCustomerRechargeRecord>

*请求方式：GET*

认证方式：Cookie（SESSDATA）

**url参数：**

| 参数名      | 类型 | 内容     | 必要性 | 备注                |
| ----------- | ---- | -------- | ------ | ------------------- |
| currentPage | num  | 页数     | 必要   |                     |
| pageSize    | num  | 分页大小 | 必要   | 取值范围\[1,50\]    |
| customerId  | num  | (?)      | 必要   | 目前为固定值：10026 |
| beginTime   | str  | 开始日期 | 非必要 | yyyy-MM-dd          |
| endTime     | str  | 结束日期 | 非必要 | yyyy-MM-dd          |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />800501007：user not login<br />800501008：内部错误<br />800501011：请求参数有误 |
| errno   | num  |          |                             |
| msg     | str  |          |                             |
| showMsg | str  |          |                             |
| data    | obj  | 信息本体 |                             |
| success | bool |          |                             |

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

> <https://member.bilibili.com/x/h5/elec/rank/recent>

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
