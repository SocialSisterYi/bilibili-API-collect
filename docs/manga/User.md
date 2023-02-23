# 漫画用户信息

## 获取拥有的漫读券列表

> https://manga.bilibili.com/twirp/user.v1.User/GetCoupons

*请求方式：POST*

认证方式：Cookie（SESSDATA）/ APP

**URL参数：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注                                                         |
| ---------- | ---- | ------------------------ | -------------- | ------------------------------------------------------------ |
| access_key | str  |     APP登录凭证       | 必要    |   使用APP鉴权方式时必填                                                           |

**正文参数 (application/json)：**

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

## 获取已购漫画

> https://manga.bilibili.com/twirp/user.v1.User/GetAutoBuyComics

*请求方式：POST*

认证方式：Cookie（SESSDATA）/ APP

**URL参数：**

| 参数名   | 类型 | 内容 | 必要性 | 备注 |
| -------- | ---- | ---- | ------ | ---- |
| device   | str  | 设备 | 非必要 |      |
| platform | str  | 平台 | 非必要 |      |

**正文参数 (application/json)：**

| 参数名   | 类型 | 内容                     | 必要性 | 备注                                              |
| -------- | ---- | ------------------------ | ------ | ------------------------------------------------- |
| page_num | num  |     页数             |  必要  |                                 |
| page_size | num  |     分页大小             | 必要   |  默认15                            |

**json回复：**

根对象：

| 字段 | 类型       | 内容     | 备注    |
| ---- | ---------- | -------- | ------- |
| code | num        | 返回值   | 0：成功 |
| msg  | str        | 错误信息 |         |
| data | obj(array) |          |         |

`data`array中的对象

| 字段             | 类型 | 内容             | 备注 |
| ---------------- | ---- | ---------------- | ---- |
| id               | num  | 内部id           |      |
| comic_id         | str  | 漫画id           |      |
| comic_title      | str  | 漫画标题         |      |
| hcover           | str  | 横版头图         |      |
| scover           | str  | 方形头图         |      |
| vcover           | str  | 竖版封面图       |      |
| bought_ep_count  | num  | 已购章节数       |      |
| gold_status      | num  |                  |      |
| coupon_status    | num  |                  |      |
| comic_status     | num  | 漫画状态         |      |
| last_ord         | num  | 最后一话         |      |
| ctime            | str  | 获取时间         |      |
| last_short_title | str  | 最后一话的短标题 |      |
| bug_type         | num  | 购买类型         |      |
| ep_for_chapters  | num  |                  |      |
| orders           | obj  | 自动扣费顺序     |      |
| enable_auto_pay  | bool | 是否开启自动付费 |      |
| type  | num |  |      |

**示例：**

```bash
curl -L -X POST 'https://manga.bilibili.com/twirp/user.v1.User/GetAutoBuyComics' \
-H "Cookie: xxxxx" \
-H 'Content-Type: application/json;charset=UTF-8' \
-H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36' \
-d '{"page_num": 1,"page_size": 15}'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "msg": "",
    "data": [
        {
            "id": 20276887,
            "comic_id": 26554,
            "comic_title": "擅长捉弄的（原）高木同学",
            "hcover": "http://i0.hdslb.com/bfs/manga-static/443b4a49be1e92cd204af1472e2a7f41c1df7336.png",
            "scover": "http://i0.hdslb.com/bfs/manga-static/e29eb39aed0971851efe5998d3b9c156ba52bb4e.jpg",
            "vcover": "http://i0.hdslb.com/bfs/manga-static/9536b3d6c6eaef5992986d6b06d35188c20f4366.jpg",
            "bought_ep_count": 13,
            "gold_status": 2,
            "coupon_status": 2,
            "comic_status": 0,
            "last_ord": 235,
            "ctime": "2022-01-26 21:39:33",
            "last_short_title": "235",
            "buy_type": 0,
            "ep_for_chapters": 0,
            "orders": [
                {
                    "id": 2,
                    "title": "漫读券"
                },
                {
                    "id": 3,
                    "title": "通用券"
                },
                {
                    "id": 1,
                    "title": "漫币"
                }
            ],
            "enable_auto_pay": false,
            "type": 0
        },
        {
            "id": 15129353,
            "comic_id": 29726,
            "comic_title": "NEW GAME!",
            "hcover": "https://i0.hdslb.com/bfs/manga-static/586df1c03978ef01eac9e6a670f26395f6495ead.jpg",
            "scover": "https://i0.hdslb.com/bfs/manga-static/7110c8751fef26b082b5452bd515736a78bf0670.jpg",
            "vcover": "https://i0.hdslb.com/bfs/manga-static/d3aa1477dcc9720f9bcee19c775849baad6b4e66.jpg",
            "bought_ep_count": 4,
            "gold_status": 2,
            "coupon_status": 2,
            "comic_status": 0,
            "last_ord": 180,
            "ctime": "2021-06-21 16:29:27",
            "last_short_title": "180",
            "buy_type": 0,
            "ep_for_chapters": 0,
            "orders": [
                {
                    "id": 2,
                    "title": "漫读券"
                },
                {
                    "id": 3,
                    "title": "通用券"
                },
                {
                    "id": 1,
                    "title": "漫币"
                }
            ],
            "enable_auto_pay": false,
            "type": 0
        },
        {
            "id": 13525712,
            "comic_id": 28080,
            "comic_title": "终将成为你",
            "hcover": "https://i0.hdslb.com/bfs/manga-static/bed69097d5fdc68bff87fce1e168b810448ee145.jpg",
            "scover": "https://i0.hdslb.com/bfs/manga-static/855e851b58c805b05b347fddb80a46dcb260afac.jpg",
            "vcover": "https://i0.hdslb.com/bfs/manga-static/10e8243b502bd19947cd49a6ac2ea0a9b8c5daa3.jpg",
            "bought_ep_count": 5,
            "gold_status": 2,
            "coupon_status": 2,
            "comic_status": 0,
            "last_ord": 45,
            "ctime": "2021-04-09 08:26:41",
            "last_short_title": "第45话",
            "buy_type": 9,
            "ep_for_chapters": 0,
            "orders": [],
            "enable_auto_pay": false,
            "type": 0
        },
        {
            "id": 13469083,
            "comic_id": 28198,
            "comic_title": "米诺斯的牛肉100%",
            "hcover": "http://i0.hdslb.com/bfs/manga-static/75931d991ddd40bc49c655ff3fca770d45eac9aa.jpg",
            "scover": "http://i0.hdslb.com/bfs/manga-static/ee37104f5d97bb486e69d660d9a93242a1c2817a.jpg",
            "vcover": "http://i0.hdslb.com/bfs/manga-static/be5400d37c1428ecc98a8e2d1772175991a262ed.jpg",
            "bought_ep_count": 1,
            "gold_status": 2,
            "coupon_status": 2,
            "comic_status": 0,
            "last_ord": 6,
            "ctime": "2021-04-06 12:21:20",
            "last_short_title": "6",
            "buy_type": 0,
            "ep_for_chapters": 0,
            "orders": [],
            "enable_auto_pay": false,
            "type": 0
        },
        {
            "id": 13436048,
            "comic_id": 27545,
            "comic_title": "宝石之国",
            "hcover": "http://i0.hdslb.com/bfs/manga-static/94637fff52eca04a8f32e19ed0c2f676b9bee96e.png",
            "scover": "http://i0.hdslb.com/bfs/manga-static/e538ce332a639809aea70c8e30a19645e9b2ae3e.jpg",
            "vcover": "http://i0.hdslb.com/bfs/manga-static/91e03718b03b7d3a2dca53c461b4b84953ce8cb0.jpg",
            "bought_ep_count": 11,
            "gold_status": 2,
            "coupon_status": 2,
            "comic_status": 0,
            "last_ord": 96,
            "ctime": "2021-04-05 00:09:17",
            "last_short_title": "96",
            "buy_type": 0,
            "ep_for_chapters": 0,
            "orders": [
                {
                    "id": 2,
                    "title": "漫读券"
                },
                {
                    "id": 3,
                    "title": "通用券"
                },
                {
                    "id": 1,
                    "title": "漫币"
                }
            ],
            "enable_auto_pay": false,
            "type": 0
        },
        {
            "id": 13237163,
            "comic_id": 27877,
            "comic_title": "极主夫道",
            "hcover": "https://i0.hdslb.com/bfs/manga-static/5a8b7bd678e2ae135415af31493417ae77bc83dd.png",
            "scover": "http://i0.hdslb.com/bfs/manga-static/aa36b8cff89e42c1820e43c483d483ed3eb8d938.png",
            "vcover": "http://i0.hdslb.com/bfs/manga-static/96a6b07bcea58955efed4df876bc8f1b5df9d5cc.jpg",
            "bought_ep_count": 6,
            "gold_status": 2,
            "coupon_status": 2,
            "comic_status": 0,
            "last_ord": 96,
            "ctime": "2021-03-27 12:28:27",
            "last_short_title": "96",
            "buy_type": 0,
            "ep_for_chapters": 0,
            "orders": [
                {
                    "id": 2,
                    "title": "漫读券"
                },
                {
                    "id": 3,
                    "title": "通用券"
                },
                {
                    "id": 1,
                    "title": "漫币"
                }
            ],
            "enable_auto_pay": false,
            "type": 0
        },
        {
            "id": 12913068,
            "comic_id": 25519,
            "comic_title": "四月是你的谎言",
            "hcover": "http://i0.hdslb.com/bfs/manga-static/33cda8ed8e6c89691d5397dc47f8c7c7945a54c4.png",
            "scover": "http://i0.hdslb.com/bfs/manga-static/a6ed17ddac9bb568cefeb4eda8f8f3298db6c8cd.jpg",
            "vcover": "http://i0.hdslb.com/bfs/manga-static/6d82d75a9a2817a18e16e2b82f76312d0fd02d06.jpg",
            "bought_ep_count": 36,
            "gold_status": 2,
            "coupon_status": 2,
            "comic_status": 0,
            "last_ord": 44,
            "ctime": "2021-03-11 23:58:50",
            "last_short_title": "44",
            "buy_type": 0,
            "ep_for_chapters": 0,
            "orders": [
                {
                    "id": 2,
                    "title": "漫读券"
                },
                {
                    "id": 3,
                    "title": "通用券"
                },
                {
                    "id": 1,
                    "title": "漫币"
                }
            ],
            "enable_auto_pay": false,
            "type": 0
        },
        {
            "id": 12793711,
            "comic_id": 28537,
            "comic_title": "前男友成为了那样的男子",
            "hcover": "https://i0.hdslb.com/bfs/manga-static/33440f7675a424dcce35459e2392e23e9d345531.jpg",
            "scover": "http://i0.hdslb.com/bfs/manga-static/3de961215ad2a96ccf5dbb45d85db88934b545cb.jpg",
            "vcover": "https://i0.hdslb.com/bfs/manga-static/77feff2a5f1aab93060e8ce5105e5616cb7313a7.jpg",
            "bought_ep_count": 3,
            "gold_status": 2,
            "coupon_status": 2,
            "comic_status": 0,
            "last_ord": 54,
            "ctime": "2021-03-06 19:20:03",
            "last_short_title": "44",
            "buy_type": 0,
            "ep_for_chapters": 0,
            "orders": [
                {
                    "id": 2,
                    "title": "漫读券"
                },
                {
                    "id": 3,
                    "title": "通用券"
                },
                {
                    "id": 1,
                    "title": "漫币"
                }
            ],
            "enable_auto_pay": false,
            "type": 0
        },
        {
            "id": 12751111,
            "comic_id": 26009,
            "comic_title": "辉夜大小姐想让我告白 ~天才们的恋爱头脑战~",
            "hcover": "https://i0.hdslb.com/bfs/manga-static/7fe349fd5a3d9522546e1582ad03604e82b1ff41.png",
            "scover": "http://i0.hdslb.com/bfs/manga-static/b0ac1e3379e940c47b31209edf016e32e8bcee37.jpg",
            "vcover": "https://i0.hdslb.com/bfs/manga-static/6188cad7ec7ac2b0555c0a815f9d2afbe7c0c5cb.jpg",
            "bought_ep_count": 2,
            "gold_status": 2,
            "coupon_status": 2,
            "comic_status": 0,
            "last_ord": 259,
            "ctime": "2021-03-05 00:16:13",
            "last_short_title": "269",
            "buy_type": 0,
            "ep_for_chapters": 0,
            "orders": [
                {
                    "id": 2,
                    "title": "漫读券"
                },
                {
                    "id": 3,
                    "title": "通用券"
                },
                {
                    "id": 1,
                    "title": "漫币"
                }
            ],
            "enable_auto_pay": false,
            "type": 0
        },
        {
            "id": 12479079,
            "comic_id": 27867,
            "comic_title": "邪神与厨二病少女",
            "hcover": "https://i0.hdslb.com/bfs/manga-static/96594b34528640f51ef5062648b55c871f4d4b1b.jpg",
            "scover": "https://i0.hdslb.com/bfs/manga-static/54a7f8d35024ef46dc270dc758d882bc98c4a1c5.jpg",
            "vcover": "https://i0.hdslb.com/bfs/manga-static/1b07c3be74d65cbb707934de190af10ca81588f3.jpg",
            "bought_ep_count": 194,
            "gold_status": 2,
            "coupon_status": 2,
            "comic_status": 0,
            "last_ord": 216.5,
            "ctime": "2021-02-23 00:18:06",
            "last_short_title": "216.5",
            "buy_type": 0,
            "ep_for_chapters": 0,
            "orders": [
                {
                    "id": 2,
                    "title": "漫读券"
                },
                {
                    "id": 3,
                    "title": "通用券"
                },
                {
                    "id": 1,
                    "title": "漫币"
                }
            ],
            "enable_auto_pay": false,
            "type": 0
        },
        {
            "id": 11749927,
            "comic_id": 29119,
            "comic_title": "足艺少女小村同学",
            "hcover": "https://i0.hdslb.com/bfs/manga-static/30b7917fd7d8b0afe6d913f09bab31e5eafae8b6.jpg",
            "scover": "https://i0.hdslb.com/bfs/manga-static/f4ec445bc209ad473cdf9127528c09e271535617.jpg",
            "vcover": "https://i0.hdslb.com/bfs/manga-static/8f83793c06dc0f59cab3a6acf4b978dc3c0a01f9.jpg",
            "bought_ep_count": 13,
            "gold_status": 2,
            "coupon_status": 2,
            "comic_status": 0,
            "last_ord": 58,
            "ctime": "2021-01-31 11:04:31",
            "last_short_title": "最终话",
            "buy_type": 0,
            "ep_for_chapters": 0,
            "orders": [
                {
                    "id": 2,
                    "title": "漫读券"
                },
                {
                    "id": 3,
                    "title": "通用券"
                },
                {
                    "id": 1,
                    "title": "漫币"
                }
            ],
            "enable_auto_pay": false,
            "type": 0
        },
        {
            "id": 11605399,
            "comic_id": 29053,
            "comic_title": "如果是理想中的女儿，就算是世界最强也能受到宠爱吗？",
            "hcover": "https://i0.hdslb.com/bfs/manga-static/5a7886e2b94515ea75a3ea34d9c77db3f2487b59.jpg",
            "scover": "https://i0.hdslb.com/bfs/manga-static/88f6d08fed2998aba96cedbfdffba555bef4d1c1.jpg",
            "vcover": "https://i0.hdslb.com/bfs/manga-static/517a155372e7de966cca2f5f42edabd31a90b169.jpg",
            "bought_ep_count": 5,
            "gold_status": 2,
            "coupon_status": 2,
            "comic_status": 0,
            "last_ord": 28,
            "ctime": "2021-01-25 19:40:15",
            "last_short_title": "28",
            "buy_type": 0,
            "ep_for_chapters": 0,
            "orders": [
                {
                    "id": 2,
                    "title": "漫读券"
                },
                {
                    "id": 3,
                    "title": "通用券"
                },
                {
                    "id": 1,
                    "title": "漫币"
                }
            ],
            "enable_auto_pay": false,
            "type": 0
        },
        {
            "id": 11386175,
            "comic_id": 28656,
            "comic_title": "就算这样，“步”还是靠了过来",
            "hcover": "http://i0.hdslb.com/bfs/manga-static/c95456b2d00f84293bda62b12539d19172b45db1.jpg",
            "scover": "http://i0.hdslb.com/bfs/manga-static/2601c1474cd214d28797381e70b2c19ac7d67869.jpg",
            "vcover": "https://i0.hdslb.com/bfs/manga-static/3a556ed655ddf84c7930b3ce180fbdbf8f1d8112.jpg",
            "bought_ep_count": 2,
            "gold_status": 2,
            "coupon_status": 2,
            "comic_status": 0,
            "last_ord": 160,
            "ctime": "2021-01-17 10:48:29",
            "last_short_title": "160",
            "buy_type": 0,
            "ep_for_chapters": 0,
            "orders": [
                {
                    "id": 2,
                    "title": "漫读券"
                },
                {
                    "id": 3,
                    "title": "通用券"
                },
                {
                    "id": 1,
                    "title": "漫币"
                }
            ],
            "enable_auto_pay": false,
            "type": 0
        },
        {
            "id": 11356706,
            "comic_id": 26731,
            "comic_title": "在魔王城说晚安",
            "hcover": "https://i0.hdslb.com/bfs/manga-static/061f63826f1aa24a5b9346f79b915999004b13da.jpg",
            "scover": "http://i0.hdslb.com/bfs/manga-static/94ae037dae4cc61d580c5c3c42702ccf10d977dc.jpg",
            "vcover": "https://i0.hdslb.com/bfs/manga-static/2958043a10024ddebfafc4fd47d3566043689300.jpg",
            "bought_ep_count": 148,
            "gold_status": 2,
            "coupon_status": 2,
            "comic_status": 0,
            "last_ord": 292,
            "ctime": "2021-01-16 11:25:47",
            "last_short_title": "292",
            "buy_type": 0,
            "ep_for_chapters": 0,
            "orders": [
                {
                    "id": 2,
                    "title": "漫读券"
                },
                {
                    "id": 3,
                    "title": "通用券"
                },
                {
                    "id": 1,
                    "title": "漫币"
                }
            ],
            "enable_auto_pay": false,
            "type": 0
        },
        {
            "id": 11079049,
            "comic_id": 27355,
            "comic_title": "堀与宫村",
            "hcover": "https://i0.hdslb.com/bfs/manga-static/b51b905707664415dab91cf81fb0373f970b54b5.jpg",
            "scover": "https://i0.hdslb.com/bfs/manga-static/6ac604dfd0ad6c486a520519983212d74c340f28.jpg",
            "vcover": "https://i0.hdslb.com/bfs/manga-static/c29ba3ce67613539666582d31d42b40fb48cc3c7.jpg",
            "bought_ep_count": 119,
            "gold_status": 2,
            "coupon_status": 2,
            "comic_status": 0,
            "last_ord": 126,
            "ctime": "2021-01-05 12:52:59",
            "last_short_title": "page.122",
            "buy_type": 0,
            "ep_for_chapters": 0,
            "orders": [
                {
                    "id": 2,
                    "title": "漫读券"
                },
                {
                    "id": 3,
                    "title": "通用券"
                },
                {
                    "id": 1,
                    "title": "漫币"
                }
            ],
            "enable_auto_pay": false,
            "type": 0
        }
    ]
}
```

</details>