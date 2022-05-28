# 获取拥有的漫读券列表

> https://manga.bilibili.com/twirp/user.v1.User/GetCoupons

*请求方式：POST*

认证方式：Cookie（SESSDATA）/ APP

**URL参数：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注                                                         |
| ---------- | ---- | ------------------------ | -------------- | ------------------------------------------------------------ |
| access_key | str  |     APP登录凭证       | 必要    |   使用APP鉴权方式时必填                                                           |
| appkey | str  |     cc8617fd6961e070       | 非必要    |                                                              |
| mobi_app | str  |     android_comic       | 非必要    |                                                              |
| version | str  |     4.13.0       | 非必要    |                                                              |
| build | str  |     36413002       | 非必要    |                                                              |
| channel | str  |     bilicomic       | 非必要    |                                                              |
| platform | str  |     android       | 非必要    |                                                              |
| device | str  |     android       | 非必要    |                                                              |
| buvid | str  |            | 非必要    |                                                              |
| machine | str  |     samsung+SM-G9730       | 非必要    |                                                              |
| is_teenager | num  |     0       | 非必要    |                                                              |
| no_recommend | num  |     0       | 非必要    |                                                              |
| ts | num  |    秒级时间戳       | 非必要    |                                                              |

**正文参数（ application/json ）：**

| 参数名   | 类型 | 内容                     | 必要性 | 备注                                              |
| -------- | ---- | ------------------------ | ------ | ------------------------------------------------- |
| pageNum   | num  |     页数             |  必要  |                                 |
| pageSize   | num  |     分页大小             | 必要   |  默认20，取值范围[1,100]                             |
| notExpired   | bool  |   true               |  非必要  |                                 |
| tabType   | num  |        1          |  非必要  |                                 |
| type   | num  |        0          |  非必要  |                                 |


**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num   | 返回值   | 0：成功 |
| msg | str  | 错误信息 |                                                       |
| data | obj  |  |      |


`data` 对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| total_remain_amount    | num  |    |  |
| user_coupons    | array  |    |  |
| coupon_info    | obj  |    |  |

`user_coupons` 数组中的对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
|  ID   | num  | 漫读券id   |  |
|  remain_amount   | num  | 漫读券剩余数   |  |
|  expire_time   | num  | 过期时间   |  |
|  reason   | num  | 获取方式   |  |
|  type   | num  | 类型   |  |
|  ctime   | num  | 获取时间   |  |
|  total_amount   | num  | 漫读券总数   |  |
|  limits   | array  | (?)   |  |
|  type_num   | num  |  7：福利券  |  |
|  will_expire   | num  | 是否即将过期？<br />0：否<br />1：是   |  |
|  discount   | num  | 0   |  |
|  discount_limit   | num  | 0   |  |
|  is_from_card   | num  | 0   |  |
|  valid_time   | str  | 0001-01-01   |  |
|  discount_base   | num  | 0   |  |

`coupon_info` 对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| new_coupon_num    | num  |    |  |
| coupon_will_expire    | num  |    |  |
| rent_will_expire    | num  |    |  |
| new_rent_num    | num  |    |  |
| discount_will_expire    | num  |    |  |
| new_discount_num    | num  |    |  |
| month_ticket_will_expire    | num  |    |  |
| new_month_ticket_num    | num  |    |  |
| silver_will_expire    | num  |    |  |
| new_silver_num    | num  |    |  |
| remain_item    | num  |    |  |
| remain_discount    | num  |    |  |
| remain_coupon    | num  |   拥有的漫读券数量 |  |
| remain_silver    | num  | 拥有的通用券数量   |  |
| remain_shop_coupon    | num  | 拥有的商城优惠券数量   |  |
| new_shop_num    | num  |    |  |
| shop_will_expire    | num  |    |  |
| new_suit_id    | num  |    |  |
| remain_suit_coupon    | num  |    |  |
| new_suit_num    | num  |    |  |
| suit_will_expire    | num  |    |  |
| vip_priv_coupon    | bool  |    |  |


**示例：**

```bash
curl -L -X POST 'https://manga.bilibili.com/twirp/user.v1.User/GetCoupons' \
-H 'Cookie: SESSDATA=xxx;' \
-H 'Content-Type: application/json' \
--data-raw '{
    "notExpired": true,
    "pageNum": 1,
    "pageSize": 20,
    "tabType": 1,
    "type": 0
}'
```

<details>
<summary>查看响应示例：</summary>


```json
{
  "code": 0,
  "msg": "",
  "data": {
    "total_remain_amount": 1,
    "user_coupons": [
      {
        "ID": 7473503,
        "remain_amount": 1,
        "expire_time": "2022-05-24 12:00:33",
        "reason": "积分兑换",
        "type": "福利券",
        "ctime": "2022-05-17 12:00:33",
        "total_amount": 1,
        "limits": [],
        "type_num": 7,
        "will_expire": 0,
        "discount": 0,
        "discount_limit": 0,
        "is_from_card": 0,
        "valid_time": "0001-01-01",
        "discount_base": 0
      }
    ],
    "coupon_info": {
      "new_coupon_num": 0,
      "coupon_will_expire": 0,
      "rent_will_expire": 0,
      "new_rent_num": 0,
      "discount_will_expire": 0,
      "new_discount_num": 0,
      "month_ticket_will_expire": 0,
      "new_month_ticket_num": 0,
      "silver_will_expire": 0,
      "new_silver_num": 0,
      "remain_item": 0,
      "remain_discount": 0,
      "remain_coupon": 1,
      "remain_silver": 8,
      "remain_shop_coupon": 1,
      "new_shop_num": 0,
      "shop_will_expire": 0,
      "new_suit_id": 60007,
      "remain_suit_coupon": 0,
      "new_suit_num": 0,
      "suit_will_expire": 0,
      "vip_priv_coupon": false
    }
  }
}
```

</details>
