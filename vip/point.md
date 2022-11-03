# 商品类型

| id  | name | state |
|-----|------|-------|
| 1   | 大会员  | 2     |
| 2   | 会员购  | 2     |
| 3   | 生活服务 | 2     |
| 4   | 漫画   | 2     |
| 5   | 装扮   | 2     |

# 任务列表

| module_title | task_code   | title      |
|--------------|-------------|------------|
| 福利任务         | bonus       | 大会员福利大积分   |
| 体验任务         | privilege   | 浏览大会员权益页面  |
| 日常任务         | animatetab  | 浏览追番频道页10秒 |
| 日常任务         | filmtab     | 浏览影视频道页10秒 |
| 日常任务         | vipmallview | 浏览会员购页面10秒 |
| 日常任务         | ogvwatch    | 观看任意正片内容   |
| 日常任务         | tvodbuy     | 购买单点付费影片   |
| 日常任务         | vipmallbuy  | 购买指定会员购商品  |

# 大积分中心首页

> https://api.biliapi.com/x/vip_point/homepage/combine

请求方式：`GET`

是否需要登录：`是`

鉴权方式：`SESSDATA`/`access_key`

## URL参数

| 参数名          | 类型  | 必填  | 内容             | 备注              |
|--------------|-----|-----|----------------|-----------------|
| access_key   | str | √   | 登录`access_key` | 与`SESSDATA`二选其一 |
| appkey       | str |     |                |                 |
| csrf         | str |     |                |                 |
| disable_rcmd | num |     |                |                 |
| statistics   | str |     |                |                 |
| ts           | num |     | 当前时间戳          | 单位：秒            |
| sign         | str |     |                |                 |

## Json回复

### 根对象

| 字段名     | 类型  | 内容   | 备注   |
|---------|-----|------|------|
| code    | num | 响应码  | 0：成功 |
| message | str | 0    |      |
| ttl     | num | 1    |      |
| data    | obj | 信息本体 |      |

### `data`对象

| 字段名            | 类型    | 内容       | 备注            |
|----------------|-------|----------|---------------|
| vip_info       | obj   | 大会员信息    |               |
| content        | str   | `空串`     |               |
| point_info     | obj   | 点数信息     |               |
| task           | obj   | 任务信息     | [任务列表](#任务列表) |
| banner         | array | banner信息 |               |
| goods_category | array | 商品类型     |               |
| goods_skus     | array |          |               |
| current_ts     | num   | 本次请求的时间戳 |               |

### `data`对象 -> `vip_info`对象

| 字段名             | 类型  | 内容         | 备注                                           |
|-----------------|-----|------------|----------------------------------------------|
| type            | num | 大会员类型      | 0：无<br />1：月大会员<br />2：年度及以上大会员              |
| status          | num | 大会员状态      | 0：无<br />1：有                                 |
| due_date        | num | 大会员过期时间时间戳 | 单位：毫秒                                        |
| vip_pay_type    | num | 支付类型       |                                              |
| start_time      | num | 首次大会员开通时间戳 | 单位：秒                                         |
| paid_type       | num | `0`        |                                              |
| mid             | num | 当前用户uid    |                                              |
| role            | num | 大角色类型      | 1：月度大会员<br/>3：年度大会员<br/>7：十年大会员<br/>15：百年大会员 |
| tv_vip_status   | num | 电视大会员状态    |                                              |
| tv_vip_pay_type | num | 电视大会员支付类型  |                                              |
| tv_due_date     | num | 电视大会员过期时间  |                                              |

### `data`对象 -> `point_info`对象

| 字段名          | 类型  | 内容        | 备注  |
|--------------|-----|-----------|-----|
| point        | num | 当前拥有大积分数量 |     |
| expire_point | num |           |     |
| expire_time  | num |           |     |
| expire_days  | num |           |     |

### `data`对象 -> `task`对象

| 字段名        | 类型    | 内容        | 备注            |
|------------|-------|-----------|---------------|
| task_item  | array | 当前页面显示的任务 | [任务列表](#任务列表) |
| task_count | num   | 任务总数      |               |
| signed     | bool  | `false`   |               |
| score      | num   | `5`       |               |

### `data`对象 -> `task`对象 -> `task_item` 数组中的对象

| 字段名            | 类型  | 内容         | 备注                             |
|----------------|-----|------------|--------------------------------|
| task_code      | str | 任务代码       |                                |
| state          | num | 任务状态       | 0：未领取<br/>1：未完成<br/> 3：已完成/已领取 |
| title          | str | 任务标题       |                                |
| icon           | str | 任务图标       |                                |
| subtitle       | str | 任务副标题      |                                |
| explain        | str | 任务详情说明     |                                |
| link           | str | 任务跳转url    |                                |
| vip_limit      | num | 是否为大会员专享任务 | 0：否<br/>1：是                    |
| complete_times | num | 已完成次数      |                                |
| max_times      | num | 最大完成次数     |                                |
| recall_num     | num | `0`        |                                |

### `data`对象 -> `banner`数组中的对象

| 字段名       | 类型  | 内容       | 备注  |
|-----------|-----|----------|-----|
| link      | str | 跳转地址     |     |
| image_url | str | 显示的图片url |     |

### `data`对象 -> `goods_category`数组中的对象

| 字段名   | 类型  | 内容     | 备注            |
|-------|-----|--------|---------------|
| id    | num | 商品类型id | [商品类型](#商品类型) |
| name  | str | 商品类型名称 |               |
| state | num | `2`    |               |

### `data`对象 -> `goods_skus`数组中的对象

| 字段名  | 类型  | 内容  | 备注  |
|------|-----|-----|-----|
| base | obj |     |     |

### `data`对象 -> `goods_skus`数组中的对象 -> `base`对象

| 字段名                 | 类型    | 内容          | 备注   |
|---------------------|-------|-------------|------|
| token               | str   |             |      |
| title               | str   | 商品标题        |      |
| picture             | str   | 商品图片        |      |
| rotation_pictures   | array | 商品图片        |      |
| price               | obj   | 价格信息        |      |
| inventory           | obj   | 库存信息        |      |
| user_type           | num   | `2`         |      |
| exchange_limit_type | num   | `2` `3` `4` |      |
| exchange_limit_num  | num   | 限购数量        |      |
| start_time          | num   | 起售时间戳       | 单位：秒 |
| end_time            | num   | 止售时间戳       | 单位：秒 |
| state               | num   | `2`         |      |

### `data`对象 -> `goods_skus`数组中的对象 -> `base`对象 -> `price`对象

| 字段名       | 类型  | 内容   | 备注           |
|-----------|-----|------|--------------|
| origin    | num | 原价   |              |
| promotion | obj | 折扣信息 | 如无折扣则为`null` |

### `data`对象 -> `goods_skus`数组中的对象 -> `base`对象 -> `price`对象 -> `promotion`对象

| 字段名      | 类型  | 内容   | 备注                          |
|----------|-----|------|-----------------------------|
| price    | num | 现价   |                             |
| type     | num | 折扣类型 | 1：普通折扣<br/>2：秒杀             |
| discount | num | 折扣力度 |                             |
| label    | str | 显示标签 | type = 1：x折<br/>type = 2：秒杀 |

### `data`对象 -> `goods_skus`数组中的对象 -> `base`对象 -> `inventory`对象

| 字段名           | 类型  | 内容   | 备注  |
|---------------|-----|------|-----|
| available_num | num | 库存总量 |     |
| used_num      | num | 已售数量 |     |
| surplus_num   | num | 剩余数量 |     |

## 请求示例

### `SESSDATA`方式

```shell
curl -L -X GET 'https://api.biliapi.com/x/vip_point/homepage/combine' \
-H 'Cookie: SESSDATA=xxx'
```

### `access_key`方式

```shell
curl -L -X GET 'https://api.biliapi.com/x/vip_point/homepage/combine?access_key=xxx'
```

## 响应示例

<details>
<summary>点击查看</summary>

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "vip_info": {
      "type": 2,
      "status": 1,
      "due_date": 1678723200000,
      "vip_pay_type": 0,
      "start_time": 1475986259,
      "paid_type": 0,
      "mid": 10086,
      "role": 3,
      "tv_vip_status": 0,
      "tv_vip_pay_type": 0,
      "tv_due_date": 0
    },
    "content": "",
    "point_info": {
      "point": 355,
      "expire_point": 0,
      "expire_time": 0,
      "expire_days": 0
    },
    "task": {
      "task_item": [
        {
          "task_code": "animatetab",
          "state": 1,
          "title": "浏览追番频道页10秒",
          "icon": "https://i0.hdslb.com/bfs/activity-plat/static/20220607/b66bfe4ccfd6bed05bdb54008ff5c7aa/uOwc1tuJwm.png",
          "subtitle": "<span class=\"active\">+10大积分</span>",
          "explain": "从本任务入口跳转至追番频道页，并连续浏览页面达10秒可得10大积分，每天可完成1次。如浏览过程中离开追番频道页则中断计时，任务判定失败，需重新从本任务入口再次跳转。",
          "link": "bilibili://home?bottom_tab_name=首页&tab_name=追番&tab_id=bangumi&vip_task_countdown=10000",
          "vip_limit": 1,
          "complete_times": 0,
          "max_times": 1,
          "recall_num": 0
        },
        {
          "task_code": "filmtab",
          "state": 1,
          "title": "浏览影视频道页10秒",
          "icon": "https://i0.hdslb.com/bfs/activity-plat/static/20220607/b66bfe4ccfd6bed05bdb54008ff5c7aa/bWPJRBuMh3.png",
          "subtitle": "<span class=\"active\">+10大积分</span>",
          "explain": "从本任务入口跳转至影视频道页，并连续浏览页面达10秒可得10大积分，每天可完成1次。如浏览过程中离开影视频道页则中断计时，任务判定失败，需重新从本任务入口再次跳转。",
          "link": "bilibili://home?bottom_tab_name=首页&tab_name=影视&tab_id=film&vip_task_countdown=10000",
          "vip_limit": 1,
          "complete_times": 0,
          "max_times": 1,
          "recall_num": 0
        }
      ],
      "task_count": 8,
      "signed": false,
      "score": 5
    },
    "banner": [
      {
        "link": "https://www.bilibili.com/blackboard/activity-0sjbGf3IJt.html?msource=jifen_banner",
        "image_url": "https://i0.hdslb.com/bfs/activity-plat/static/20220819/b88c479976ac33162f658d12959a2111/KS1XfLBuk7.png"
      }
    ],
    "goods_category": [
      {
        "id": 1,
        "name": "大会员",
        "state": 2
      },
      {
        "id": 2,
        "name": "会员购",
        "state": 2
      },
      {
        "id": 5,
        "name": "装扮",
        "state": 2
      },
      {
        "id": 4,
        "name": "漫画",
        "state": 2
      },
      {
        "id": 3,
        "name": "生活服务",
        "state": 2
      }
    ],
    "goods_skus": [
      {
        "base": {
          "token": "610208400319545734",
          "title": "大会员1天卡",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/UMsNkcRz1z.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/UMsNkcRz1z.png"
          ],
          "price": {
            "origin": 240,
            "promotion": {
              "price": 120,
              "type": 1,
              "discount": 5,
              "label": "5折"
            }
          },
          "inventory": {
            "available_num": 1000000,
            "used_num": 552427,
            "surplus_num": 447573
          },
          "user_type": 2,
          "exchange_limit_type": 3,
          "exchange_limit_num": 3,
          "start_time": 1658224800,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "650284831896337625",
          "title": "克鲁苏手办-会员购7.2折券",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220923/b88c479976ac33162f658d12959a2111/W8QR1HfVP2.jpg",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220923/b88c479976ac33162f658d12959a2111/W8QR1HfVP2.jpg"
          ],
          "price": {
            "origin": 500,
            "promotion": {
              "price": 10,
              "type": 2,
              "discount": 0,
              "label": "秒杀"
            }
          },
          "inventory": {
            "available_num": 6459,
            "used_num": 1662,
            "surplus_num": 4797
          },
          "user_type": 2,
          "exchange_limit_type": 4,
          "exchange_limit_num": 1,
          "start_time": 1664193600,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "652569526596107481",
          "title": "个性装扮8折券",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220930/b88c479976ac33162f658d12959a2111/d5McccHzaX.jpg",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220930/b88c479976ac33162f658d12959a2111/d5McccHzaX.jpg"
          ],
          "price": {
            "origin": 500,
            "promotion": {
              "price": 10,
              "type": 2,
              "discount": 0,
              "label": "秒杀"
            }
          },
          "inventory": {
            "available_num": 50000,
            "used_num": 4486,
            "surplus_num": 45514
          },
          "user_type": 2,
          "exchange_limit_type": 2,
          "exchange_limit_num": 10,
          "start_time": 1664522420,
          "end_time": 1667145599,
          "state": 2
        }
      },
      {
        "base": {
          "token": "652569526663216345",
          "title": "大会员6周年3天试用装扮",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220930/b88c479976ac33162f658d12959a2111/0AgpMilH81.jpeg",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220930/b88c479976ac33162f658d12959a2111/0AgpMilH81.jpeg",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220930/b88c479976ac33162f658d12959a2111/umgPkNfHVr.jpeg",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220930/b88c479976ac33162f658d12959a2111/2q5F0uSp7j.jpeg",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220930/b88c479976ac33162f658d12959a2111/CHAvcqXip3.jpeg"
          ],
          "price": {
            "origin": 200,
            "promotion": {
              "price": 140,
              "type": 1,
              "discount": 7,
              "label": "7折"
            }
          },
          "inventory": {
            "available_num": 5000,
            "used_num": 1553,
            "surplus_num": 3447
          },
          "user_type": 2,
          "exchange_limit_type": 2,
          "exchange_limit_num": 3,
          "start_time": 1664522420,
          "end_time": 1667145599,
          "state": 2
        }
      },
      {
        "base": {
          "token": "617703254146515334",
          "title": "元龙-哔哩哔哩漫画专属限免卡",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220801/b88c479976ac33162f658d12959a2111/ZvgHCqUX8z.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/IYmEC7WhRg.png"
          ],
          "price": {
            "origin": 120,
            "promotion": null
          },
          "inventory": {
            "available_num": 2500,
            "used_num": 676,
            "surplus_num": 1824
          },
          "user_type": 2,
          "exchange_limit_type": 3,
          "exchange_limit_num": 5,
          "start_time": 1659337200,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "593959019090116167",
          "title": "网易严选Pro纯享会员季卡",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/MmiTOh3B0r.jpg",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/MmiTOh3B0r.jpg"
          ],
          "price": {
            "origin": 500,
            "promotion": {
              "price": 10,
              "type": 2,
              "discount": 0,
              "label": "秒杀"
            }
          },
          "inventory": {
            "available_num": 110000,
            "used_num": 36254,
            "surplus_num": 73746
          },
          "user_type": 2,
          "exchange_limit_type": 2,
          "exchange_limit_num": 1,
          "start_time": 1655802000,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "610739183048294790",
          "title": "大会员3天卡",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/sxDsdSnSPc.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/sxDsdSnSPc.png"
          ],
          "price": {
            "origin": 720,
            "promotion": {
              "price": 360,
              "type": 1,
              "discount": 5,
              "label": "5折"
            }
          },
          "inventory": {
            "available_num": 250000,
            "used_num": 75968,
            "surplus_num": 174032
          },
          "user_type": 2,
          "exchange_limit_type": 3,
          "exchange_limit_num": 1,
          "start_time": 1658246400,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "639706098068193670",
          "title": "会员购8魔晶券",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/yPGHN7xESw.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/yPGHN7xESw.png"
          ],
          "price": {
            "origin": 500,
            "promotion": {
              "price": 300,
              "type": 1,
              "discount": 6,
              "label": "6折"
            }
          },
          "inventory": {
            "available_num": 28224,
            "used_num": 8274,
            "surplus_num": 19950
          },
          "user_type": 2,
          "exchange_limit_type": 4,
          "exchange_limit_num": 1,
          "start_time": 1662616800,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "617703254280733062",
          "title": "入间同学入魔了！-哔哩哔哩漫画专属限免卡",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220801/b88c479976ac33162f658d12959a2111/OT3LOXSnJN.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/c6RPOSe9Mn.png"
          ],
          "price": {
            "origin": 120,
            "promotion": null
          },
          "inventory": {
            "available_num": 2500,
            "used_num": 820,
            "surplus_num": 1680
          },
          "user_type": 2,
          "exchange_limit_type": 3,
          "exchange_limit_num": 5,
          "start_time": 1659337200,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "643171124875723142",
          "title": "会员购 5 元无门槛优惠券",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/aFmXluGivH.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/aFmXluGivH.png"
          ],
          "price": {
            "origin": 1200,
            "promotion": null
          },
          "inventory": {
            "available_num": 5097,
            "used_num": 102,
            "surplus_num": 4995
          },
          "user_type": 2,
          "exchange_limit_type": 3,
          "exchange_limit_num": 1,
          "start_time": 1663135200,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "643171125009940870",
          "title": "会员购10元运费券",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/Tgki97iGuT.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/Tgki97iGuT.png"
          ],
          "price": {
            "origin": 2400,
            "promotion": null
          },
          "inventory": {
            "available_num": 1347,
            "used_num": 104,
            "surplus_num": 1243
          },
          "user_type": 2,
          "exchange_limit_type": 3,
          "exchange_limit_num": 1,
          "start_time": 1663135200,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "589270953100440487",
          "title": "大会员周卡",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/0veyfxh8pw.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/0veyfxh8pw.png"
          ],
          "price": {
            "origin": 2880,
            "promotion": {
              "price": 1440,
              "type": 1,
              "discount": 5,
              "label": "5折"
            }
          },
          "inventory": {
            "available_num": 25000,
            "used_num": 23303,
            "surplus_num": 1697
          },
          "user_type": 2,
          "exchange_limit_type": 3,
          "exchange_limit_num": 1,
          "start_time": 1655049600,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "617703254012297606",
          "title": "凡人修仙传-哔哩哔哩漫画专属限免卡",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220801/b88c479976ac33162f658d12959a2111/6ggYDOHmaI.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/Dgw0KcexF4.png"
          ],
          "price": {
            "origin": 120,
            "promotion": null
          },
          "inventory": {
            "available_num": 2500,
            "used_num": 525,
            "surplus_num": 1975
          },
          "user_type": 2,
          "exchange_limit_type": 3,
          "exchange_limit_num": 5,
          "start_time": 1659337200,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "615454955335156102",
          "title": "0元辣翅-麦当劳券",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/nRJUBwY08K.jpg",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/nRJUBwY08K.jpg"
          ],
          "price": {
            "origin": 2880,
            "promotion": null
          },
          "inventory": {
            "available_num": 1000,
            "used_num": 13,
            "surplus_num": 987
          },
          "user_type": 2,
          "exchange_limit_type": 2,
          "exchange_limit_num": 1,
          "start_time": 1659006000,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "634599326722654598",
          "title": "会员购6.7折优惠券",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220830/b88c479976ac33162f658d12959a2111/UsBxJtHwuE.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220830/b88c479976ac33162f658d12959a2111/UsBxJtHwuE.png"
          ],
          "price": {
            "origin": 500,
            "promotion": null
          },
          "inventory": {
            "available_num": 200000,
            "used_num": 30051,
            "surplus_num": 169949
          },
          "user_type": 2,
          "exchange_limit_type": 2,
          "exchange_limit_num": 10,
          "start_time": 1661857200,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "589270952362242983",
          "title": "QQ音乐豪华绿钻7天卡",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/5ffuc5gpsE.jpg",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/5ffuc5gpsE.jpg"
          ],
          "price": {
            "origin": 2880,
            "promotion": null
          },
          "inventory": {
            "available_num": 1267,
            "used_num": 17,
            "surplus_num": 1250
          },
          "user_type": 2,
          "exchange_limit_type": 3,
          "exchange_limit_num": 1,
          "start_time": 1655049600,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "640378711354474886",
          "title": "BEMOE 咒术回战 角色立绘徽章 官方首发版",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/hgziHzH19f.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/hgziHzH19f.png",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/NHOJmvbEAI.jpg",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/mcBJhmyd1q.jpg",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/9BpHMBjUnV.jpg",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/ZoJSeBHQ49.png",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/NtVKcx2rlk.png",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/DIElnpB6oa.png",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/UCjfV1tJZy.png",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/RoXnjbx7pv.png",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/ENZ9CWhZPs.png",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220529/b88c479976ac33162f658d12959a2111/Q5XFivyjX7.png"
          ],
          "price": {
            "origin": 6000,
            "promotion": null
          },
          "inventory": {
            "available_num": 8,
            "used_num": 2,
            "surplus_num": 6
          },
          "user_type": 2,
          "exchange_limit_type": 2,
          "exchange_limit_num": 1,
          "start_time": 1662703200,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "640378708804338054",
          "title": "世嘉 VOCALOID 初音未来 ∞礼服Ver. 景品手办 再版 独家首发",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220530/b88c479976ac33162f658d12959a2111/MKe5xDCKOy.jpg",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220530/b88c479976ac33162f658d12959a2111/WIzEBSkANE.png",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220530/b88c479976ac33162f658d12959a2111/R0PT8fvVsu.jpg",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220530/b88c479976ac33162f658d12959a2111/bfaauwzc0F.jpg",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220530/b88c479976ac33162f658d12959a2111/9UDyJkhjaA.jpg",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220530/b88c479976ac33162f658d12959a2111/ZFkov947WL.jpg",
            "https://i0.hdslb.com/bfs/activity-plat/static/20220530/b88c479976ac33162f658d12959a2111/MKe5xDCKOy.jpg"
          ],
          "price": {
            "origin": 26160,
            "promotion": null
          },
          "inventory": {
            "available_num": 1,
            "used_num": 0,
            "surplus_num": 1
          },
          "user_type": 2,
          "exchange_limit_type": 2,
          "exchange_limit_num": 1,
          "start_time": 1662703200,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "650284831695011033",
          "title": "初音手办-会员购7.2折券",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220923/b88c479976ac33162f658d12959a2111/KAeQDqSGMy.jpg",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220923/b88c479976ac33162f658d12959a2111/KAeQDqSGMy.jpg"
          ],
          "price": {
            "origin": 500,
            "promotion": {
              "price": 10,
              "type": 2,
              "discount": 0,
              "label": "秒杀"
            }
          },
          "inventory": {
            "available_num": 7387,
            "used_num": 2431,
            "surplus_num": 4956
          },
          "user_type": 2,
          "exchange_limit_type": 4,
          "exchange_limit_num": 1,
          "start_time": 1664193600,
          "end_time": 1672502399,
          "state": 2
        }
      },
      {
        "base": {
          "token": "589270952563569575",
          "title": "QQ超级会员7天卡",
          "picture": "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/nTB809PW5i.png",
          "rotation_pictures": [
            "https://i0.hdslb.com/bfs/activity-plat/static/20220809/b88c479976ac33162f658d12959a2111/nTB809PW5i.png"
          ],
          "price": {
            "origin": 2880,
            "promotion": null
          },
          "inventory": {
            "available_num": 1279,
            "used_num": 29,
            "surplus_num": 1250
          },
          "user_type": 2,
          "exchange_limit_type": 3,
          "exchange_limit_num": 1,
          "start_time": 1655049600,
          "end_time": 1672502399,
          "state": 2
        }
      }
    ],
    "current_ts": 1665149272
  }
}
```

</details>