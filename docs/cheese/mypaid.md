# 已购课程

## 获取已购课程

> https://api.bilibili.com/pugv/pay/web/my/paid

_请求方式：GET_

认证方式：Cookie（SESSDATA）

**请求参数：**

| 参数名 | 类型 | 内容           | 必要性 | 备注     |
| ------ | ---- | -------------- | ------ | -------- |
| ps     | num  | 获取课程的数量 | 必要   |          |
| pn     | num  |                | 必要   | 只能为 1 |

**json 回复：**

根对象:

| 字段    | 类型 | 内容     | 备注                       |
| ------- | ---- | -------- | -------------------------- |
| code    | num  | 返回值   | 0：成功<br/>-401：非法访问 |
| data    | obj  | 信息本体 |                            |
| message | str  | 验证信息 |                            |

`data`对象：

| 字段           | 类型   | 内容           | 备注                 |
| -------------- | ------ | -------------- | -------------------- |
| data           | arrary | 课程信息数组   | 数组中有多个课程对象 |
| is_enable_cash | bool   |                |                      |
| next           | bool   |                |                      |
| pn             | num    |                |                      |
| ps             | num    | 获取课程的数量 |                      |
| pt             | num    |                |                      |
| total          | num    | 课程购买总数   |                      |

`data`对象中的`data`数组：

| 字段          | 类型 | 内容             | 备注                       |
| ------------- | ---- | ---------------- | -------------------------- |
| cover         | str  | 课程封面 url     |                            |
| ep_count      | num  | 视频分 p 数量    |                            |
| expiry_day    | num  |                  | 默认 0                     |
| id            | num  | 课程 id          |                            |
| is_expired    | bool | 是否过期         |                            |
| pay_gid       | num  |                  | 默认 327                   |
| pay_status    | num  | 购买状态?        | 已购买为 0                 |
| platformPrice | num  | 课程价格         | 单位为 B 币（折扣后价格）  |
| price         | num  | 课程价格         | 单位为 B 币（折扣后价格）  |
| progress      | obj  | 课程进度         |                            |
| seasonStyle   | num  |                  | 默认 0                     |
| status        | num  | 分集权限属性     | 1：可观看<br />2：不可观看 |
| sub_title     | str  | 课程标题补充说明 |                            |
| title         | str  | 课程标题         |                            |
| up_id         | num  | 课程 up 主 id    |                            |
| update_info   | str  | 课程更新状态     |                            |
| url           | str  | 课程 url         |                            |

`data`数组中的`progress`对象：

| 字段          | 类型 | 内容               | 备注     |
| ------------- | ---- | ------------------ | -------- |
| last_ep_id    | num  | 最后观看的 epid    |          |
| last_ep_index | str  | 最后观看的标题     |          |
| last_time     | num  | 最后观看的时间进度 | 单位为秒 |

**示例：**

```bash
curl -G 'https://api.bilibili.com/pugv/pay/web/my/paid?ps=10&pn=1' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "data": {
    "data": [
      {
        "cover": "https://archive.biliimg.com/bfs/archive/ebc47a3705dc0dacd9fe83abd6f3cfcf1057817f.jpg",
        "ep_count": 10,
        "expiry_day": 0,
        "id": 3739,
        "is_expired": false,
        "pay_gid": 327,
        "pay_status": 0,
        "platformPrice": 0,
        "price": 9900,
        "progress": {
          "last_ep_id": 142768,
          "last_ep_index": "Python数据分析与AI应用",
          "last_time": 5451
        },
        "seasonStyle": 0,
        "status": -1,
        "sub_title": "报名后请及时添加班主任微信，领取配套资料、代码及相关福利~",
        "title": "3天Python数据分析+AI特训营（涨薪提效）",
        "up_id": 507961306,
        "update_info": "已更新8课时 | 共10课时，含3场直播",
        "url": "https://www.bilibili.com/cheese/play/ss3739"
      },
      {
        "cover": "https://archive.biliimg.com/bfs/archive/d633d51b103fef1c37c299dd321f4980b813ca87.jpg",
        "ep_count": 10,
        "expiry_day": 0,
        "id": 316,
        "is_expired": false,
        "pay_gid": 327,
        "pay_status": 0,
        "platformPrice": 0,
        "price": 3900,
        "progress": {
          "last_ep_id": 7605,
          "last_ep_index": "第5课   宏观经济政策",
          "last_time": 221
        },
        "seasonStyle": 0,
        "status": 10,
        "sub_title": "西方经济学宏观部分，考点浓缩精讲。4小时突破。\n适合期末、补考、重修。同时也适合专转本、自考、银行、事业单位等考试。\n樊士德教授带你轻松考高分。",
        "title": "《宏观经济学》期末4小时讲完附赠讲义",
        "up_id": 437356691,
        "update_info": "已完结 | 共10课时",
        "url": "https://www.bilibili.com/cheese/play/ss316"
      },
      {
        "cover": "http://i0.hdslb.com/bfs/archive/9324c16f5eaa57210bfac34e5e4f2d6e2b09b9f0.jpg",
        "ep_count": 26,
        "expiry_day": 0,
        "id": 183,
        "is_expired": false,
        "pay_gid": 327,
        "pay_status": 0,
        "platformPrice": 0,
        "price": 15800,
        "progress": {
          "last_ep_id": 6897,
          "last_ep_index": "避开作文失分陷阱，掌握诀窍提分不难",
          "last_time": 565
        },
        "seasonStyle": 0,
        "status": 10,
        "sub_title": "国家玮：高考语文名师、北大博士、满分作文学员缔造者\n\n解决满分作文政策和规则，用最简单、最高效、最容易上手的方式，教你快速提升视野、认知、逻辑，用更高的文章立意和思维角度缔造高考满分作文，快速提分。",
        "title": "国家玮：高考作文提分攻略",
        "up_id": 485578465,
        "update_info": "已完结 | 共26课时",
        "url": "https://www.bilibili.com/cheese/play/ss183"
      },
      {
        "cover": "https://archive.biliimg.com/bfs/archive/6a4abfc535139cc9dfbc6e7bf84a1cfa19b6d560.jpg",
        "ep_count": 7,
        "expiry_day": 0,
        "id": 3635,
        "is_expired": false,
        "pay_gid": 327,
        "pay_status": 0,
        "platformPrice": 0,
        "price": 9900,
        "progress": {
          "last_ep_id": 139570,
          "last_ep_index": "day1：头发&五官的结构",
          "last_time": 3633
        },
        "seasonStyle": 0,
        "status": -1,
        "sub_title": "3天学会日系头像，轻松画出属于自己的作品！",
        "title": "【加v私信班班+领福利包】3天学会日系头像体验营",
        "up_id": 517460337,
        "update_info": "已更新4课时 | 共7课时，含4场直播",
        "url": "https://www.bilibili.com/cheese/play/ss3635"
      }
    ],
    "is_enable_cash": false,
    "next": false,
    "pn": 1,
    "ps": 10,
    "pt": 1,
    "total": 4
  },
  "message": "success"
}
```

</details>
