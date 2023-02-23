# 积分商城

**注**：积分商城由web页面提供功能，地址为 https://manga.bilibili.com/eden/credits-exchange.html

## 获取当前持有点数

> https://manga.bilibili.com/twirp/pointshop.v1.Pointshop/GetUserPoint

*请求方式：POST*

认证方式：Cookie（SESSDATA）/ APP

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   |  |
| msg | str  | 错误信息 |                                                       |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段     | 类型 | 内容     | 备注         |
| -------- | ---- | -------- | ------------ |
| point   | str  | 点数       | 不登录时为0 |

**示例：**

```bash
curl 'https://manga.bilibili.com/twirp/pointshop.v1.Pointshop/GetUserPoint' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>


```json
{
  "code": 0,
  "msg": "",
  "data": {
    "point": "66666"
  }
}
```

</details>

## 获取兑换奖品列表

> https://manga.bilibili.com/twirp/pointshop.v1.Pointshop/ListProduct

*请求方式：POST*

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | |
| msg | str  | 错误信息 |      |
| data    | array | 奖品列表 |                                                              |

`data`数组：

| 项   | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| 0    | obj  | 奖品1     |      |
| n    | obj  | 奖品(n+1) |      |
| ……   | obj  | ……        | ……   |

`data`数组中的对象：

| 字段     | 类型 | 内容     | 备注         |
| -------- | ---- | -------- | ------------ |
| id   | num  | 物品id       |  |
| type   | num  | 物品类型       | 0：商城相关<br />3：限免券<br />7：福利券 |
| title   | str  | 物品名       |  |
| image   | str  | 显示的图像       | 福利券为空 |
| amount   | num  | 库存总量       |  |
| cost   | num  |    兑换所需点数（原价）    |  |
| real_cost   | num  | 兑换所需点数（现价）       |  |
| remain_amount   | num  | 库存剩余数       |  |
| comic_id   | num  | 相关漫画id       |  |
| limits   | array  | 限定使用范围（漫画）       | 限免券所适用的漫画 |
| discount   | num  | (?)    | 目前恒为0 |
| product_type   | num  | 物品类型       | 1：限免券、福利券<br />4：商城满99立减10元券、商城5元无门槛券<br />5：商城5魔晶 |
| pendant_url   | str  | (?)    |  |
| pendant_expire   | num  | (?)    | 0：限免券、福利券<br />7：商城满99立减10元券、商城5元无门槛券、商城5魔晶 |
| exchange_limit   | num  | 兑换次数限制       |  |
| address_deadline   | str | (?)    |  |
| act_type   | num  | (?)    | 目前恒为0 |
| has_exchanged   | bool  | 是否兑换过该物品       |  |
| main_coupon_deadline   | str | 兑换后使用截止时间       |  |
| deadline   | str  | 兑换后使用截止时间       |  |
| point   | str  | (?)    | 目前恒为0 |

**示例：**

```bash
curl 'https://manga.bilibili.com/twirp/pointshop.v1.Pointshop/ListProduct'
```

<details>
<summary>查看响应示例：</summary>


```json
{
  "code": 0,
  "msg": "",
  "data": [
    {
      "id": 195,
      "type": 7,
      "title": "积分兑换",
      "image": "",
      "amount": 15999,
      "cost": 200,
      "real_cost": 100,
      "remain_amount": 0,
      "comic_id": 0,
      "limits": [],
      "discount": 0,
      "product_type": 1,
      "pendant_url": "",
      "pendant_expire": 7,
      "exchange_limit": 0,
      "address_deadline": "0001-01-01T00:00:00Z",
      "act_type": 0,
      "has_exchanged": false,
      "main_coupon_deadline": "0001-01-01T00:00:00Z",
      "deadline": "",
      "point": "0"
    },
    {
      "id": 1009,
      "type": 0,
      "title": "商城5魔晶",
      "image": "",
      "amount": 500,
      "cost": 260,
      "real_cost": 30,
      "remain_amount": 0,
      "comic_id": 0,
      "limits": [],
      "discount": 0,
      "product_type": 5,
      "pendant_url": "",
      "pendant_expire": 0,
      "exchange_limit": 1,
      "address_deadline": "0001-01-01T00:00:00Z",
      "act_type": 0,
      "has_exchanged": false,
      "main_coupon_deadline": "2022-03-22T23:59:59+08:00",
      "deadline": "2022-03-22T23:59:59+08:00",
      "point": "0"
    },
    {
      "id": 1008,
      "type": 0,
      "title": "商城满99立减10元券",
      "image": "",
      "amount": 400,
      "cost": 2000,
      "real_cost": 400,
      "remain_amount": 390,
      "comic_id": 0,
      "limits": [],
      "discount": 0,
      "product_type": 4,
      "pendant_url": "",
      "pendant_expire": 0,
      "exchange_limit": 1,
      "address_deadline": "0001-01-01T00:00:00Z",
      "act_type": 0,
      "has_exchanged": false,
      "main_coupon_deadline": "2022-03-22T23:59:59+08:00",
      "deadline": "2022-03-22T23:59:59+08:00",
      "point": "0"
    },
    {
      "id": 1007,
      "type": 0,
      "title": "商城5元无门槛券",
      "image": "",
      "amount": 200,
      "cost": 1000,
      "real_cost": 200,
      "remain_amount": 134,
      "comic_id": 0,
      "limits": [],
      "discount": 0,
      "product_type": 4,
      "pendant_url": "",
      "pendant_expire": 0,
      "exchange_limit": 1,
      "address_deadline": "0001-01-01T00:00:00Z",
      "act_type": 0,
      "has_exchanged": false,
      "main_coupon_deadline": "2022-03-22T23:59:59+08:00",
      "deadline": "2022-03-22T23:59:59+08:00",
      "point": "0"
    },
    {
      "id": 1536,
      "type": 3,
      "title": "白兔糖",
      "image": "http://i0.hdslb.com/bfs/manga-static/c3369754789a77b5d0b15cc31c75538ac035b3aa.jpg",
      "amount": 4000,
      "cost": 100,
      "real_cost": 75,
      "remain_amount": 3991,
      "comic_id": 27164,
      "limits": [
        {
          "type": 1,
          "id": 27164,
          "title": "白兔糖"
        }
      ],
      "discount": 0,
      "product_type": 1,
      "pendant_url": "",
      "pendant_expire": 7,
      "exchange_limit": 0,
      "address_deadline": "0001-01-01T00:00:00Z",
      "act_type": 0,
      "has_exchanged": false,
      "main_coupon_deadline": "0001-01-01T00:00:00Z",
      "deadline": "",
      "point": "0"
    }
  ]
}
```

</details>


## 兑换物品

> https://manga.bilibili.com/twirp/pointshop.v1.Pointshop/Exchange

*请求方式：POST*

认证方式：Cookie（SESSDATA）/ APP

**正文参数（ application/x-www-form-urlencoded 或 application/json）：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注                                                         |
| ---------- | ---- | ------------------------ | -------------- | ------------------------------------------------------------ |
| product_id | str  | 物品id             | 必要    |                                                              |
| product_num       | num  | 兑换个数               | 必要           |                                                 |
| point       | num  | 物品所需点数               | 必要        |                      现价（real_cost）                            |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：兑换成功<br />1：积分不足<br />1：您点的太快了~<br />2：库存不足<br />3：product point mismatch（point填写错误）<br />3：超过用户最大可兑换数量<br />4：现在抢票的人太多啦，再点一下有机会优先上车喔 ε=ε=(ノ≧∇≦)ノ |
| message | str  | 错误信息 |                                                              |

**示例：**

```bash
curl 'https://manga.bilibili.com/twirp/pointshop.v1.Pointshop/Exchange' \
--data-urlencode 'product_id=195' \
--data-urlencode 'product_num=1' \
--data-urlencode 'point=real_cost' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "msg": ""
}
```

</details>

## 获取兑换历史记录

> https://manga.bilibili.com/twirp/activity.v1.Activity/GetPrizeList

*请求方式：POST*

认证方式：Cookie（SESSDATA）/ APP

**正文参数（ application/x-www-form-urlencoded 或 application/json）：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注                                                         |
| ---------- | ---- | ------------------------ | -------------- | ------------------------------------------------------------ |
| act_id | num  | 固定值：90018             | 必要    |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | |
| msg | str  | 错误信息 |                                                       | |
| data    | obj  | 信息本体 |

`data`对象：

| 字段   | 类型 | 内容     | 备注 |
| ------ | ---- | -------- | ---- |
| prizes | obj  | 兑换记录 |      |
| addr   | obj  | (?)      |      |

`data`中的`prizes`对象：

| 字段     | 类型 | 内容     | 备注         |
| -------- | ---- | -------- | ------------ |
| user_prize_id   | str  | 兑换id? |  |
| prize_id   | num  | 兑换的物品id       |  |
| ctime   | str | 兑换时间       |  |
| addr   | null | (?)    |  |
| deadline   | str | 过期时间 |  |
| type   | num  | 类型     | 1：限免券、福利券<br />8：商城5魔晶 |
| name   | str  | 物品名       |  |

**示例：**

```bash
curl 'https://manga.bilibili.com/twirp/activity.v1.Activity/GetPrizeList' \
--data-urlencode 'act_id=90018' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
  "code": 0,
  "msg": "",
  "data": {
    "prizes": [
      {
        "user_prize_id": "55117444",
        "prize_id": 1009,
        "ctime": "2022-03-21T12:22:53+08:00",
        "addr": null,
        "deadline": "0001-01-01T00:00:00Z",
        "type": 8,
        "name": "商城5魔晶"
      },
      {
        "user_prize_id": "2594073385420523088",
        "prize_id": 1536,
        "ctime": "2022-03-21T12:07:24+08:00",
        "addr": null,
        "deadline": "0001-01-01T00:00:00Z",
        "type": 1,
        "name": "白兔糖限免卡"
      },
      {
        "user_prize_id": "4899916394614914913",
        "prize_id": 195,
        "ctime": "2021-12-24T12:01:08+08:00",
        "addr": null,
        "deadline": "0001-01-01T00:00:00Z",
        "type": 1,
        "name": "积分兑换"
      },
      {
        "user_prize_id": "1152921504636496551",
        "prize_id": 195,
        "ctime": "2021-12-13T12:05:13+08:00",
        "addr": null,
        "deadline": "0001-01-01T00:00:00Z",
        "type": 1,
        "name": "积分兑换"
      }
    ],
    "addr": {
      "name": "",
      "phone": "",
      "address": "",
      "id_card": ""
    }
  }
}
```

</details>

## 获取玩法说明

> https://manga.bilibili.com/twirp/pointshop.v1.Pointshop/GetExchangeRule

*请求方式：POST*

**json回复：**

根对象：

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| code | num  | 返回值   |      |
| msg  | str  | 错误信息 |      |
| data | obj  | 信息本体 |      |

`data`对象：

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| rule | str  | 玩法说明 |      |

**示例：**

```bash
curl 'https://manga.bilibili.com/twirp/pointshop.v1.Pointshop/GetExchangeRule'
```

<details>
<summary>查看响应示例：</summary>


```json
{
  "code": 0,
  "msg": "",
  "data": {
    "rule": "日常兑换说明：\n1、赛季积分达到一定数量可兑换积分商城内相应的商品；\n2、日常兑换奖品的刷新时间为每日中午12点，每天可兑换的奖品总数有限（具体可见商品页面展示），请尽快兑换。\n3、兑换的福利券＆限免卡奖品有效期详见兑换框内显示或卡券包内详情说明哦，请及时在有效期内使用。\n4、赛季积分有效期为当前赛季时长（每期赛季时长详见福利中心页面倒计时显示），请及时在有效期内进行使用。\n5、赛季积分可在福利中心完成特定任务获取，具体详情可至福利中心查看（部分活动也可获取赛季积分，可随时关注活动信息哦）。"
  }
}
```

</details>
