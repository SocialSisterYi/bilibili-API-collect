# 登录基本信息

## 导航栏用户信息

> ~~https://api.bilibili.com/nav（带有转义）~~ (已失效)
>
> https://api.bilibili.com/x/web-interface/nav（原始数据）

*请求方式：GET*

认证方式：仅可Cookie（SESSDATA）

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        |                               |
| data    | obj  | 信息本体 |                               |

`data`对象：

| 字段                 | 类型 | 内容             | 备注                                              |
| -------------------- | ---- | ---------------- | ------------------------------------------------- |
| isLogin              | bool | 是否已登录       | false：未登录<br />true：已登录                   |
| email_verified       | num  | 是否验证邮箱地址 | 0：未验证<br />1：已验证                          |
| face                 | str  | 用户头像 url     |                                                   |
| level_info           | obj  | 等级信息         |                                                   |
| mid                  | num  | 用户 mid         |                                                   |
| mobile_verified      | num  | 是否验证手机号   | 0：未验证<br />1：已验证                          |
| money                | num  | 拥有硬币数       |                                                   |
| moral                | num  | 当前节操值       | 上限为70                                          |
| official             | obj  | 认证信息         |                                                   |
| officialVerify       | obj  | 认证信息 2       |                                                   |
| pendant              | obj  | 头像框信息       |                                                   |
| scores               | num  | （？）           |                                                   |
| uname                | str  | 用户昵称         |                                                   |
| vipDueDate           | num  | 会员到期时间     | 毫秒 时间戳                                       |
| vipStatus            | num  | 会员开通状态     | 0：无<br />1：有                                  |
| vipType              | num  | 会员类型         | 0：无<br />1：月度大会员<br />2：年度及以上大会员 |
| vip_pay_type         | num  | 会员开通状态     | 0：无<br />1：有                                  |
| vip_theme_type       | num  | （？）           |                                                   |
| vip_label            | obj  | 会员标签         |                                                   |
| vip_avatar_subscript | num  | 是否显示会员图标 | 0：不显示<br />1：显示                            |
| vip_nickname_color   | str  | 会员昵称颜色     | 颜色码                                            |
| wallet               | obj  | B币钱包信息      |                                                   |
| has_shop             | bool | 是否拥有推广商品 | false：无<br />true：有                           |
| shop_url             | str  | 商品推广页面 url |                                                   |
| allowance_count      | num  | （？）           |                                                   |
| answer_status        | num  | （？）           |                                                   |
| is_senior_member     | num  | 是否硬核会员     | 0：非硬核会员<br />1：硬核会员                    |
| wbi_img              | obj  | Wbi 签名实时口令 | 该字段即使用户未登录也存在                        |
| is_jury              | bool | 是否风纪委员     | true：风纪委员<br />false：非风纪委员             |

`data`中的`level_info`对象：

| 字段          | 类型 | 内容                     | 备注 |
| ------------- | ---- | ------------------------ | ---- |
| current_level | num  | 当前等级                 |      |
| current_min   | num  | 当前等级经验最低值       |      |
| current_exp   | num  | 当前经验                 |      |
| next_exp      | 小于6级时：num<br />6级时：str | 升级下一等级需达到的经验 |当用户等级为Lv6时，值为`--`，代表无穷大 |

`data`中的`official`对象：

| 字段  | 类型 | 内容     | 备注                                              |
| ----- | ---- | -------- | ------------------------------------------------- |
| role  | num  | 认证类型 | 见[用户认证类型一览](../user/official_role.md) |
| title | str  | 认证信息 | 无为空                                            |
| desc  | str  | 认证备注 | 无为空                                            |
| type  | num  | 是否认证 | -1：无<br />0：认证                               |

`data`中的`official_verify`对象：

| 字段 | 类型 | 内容     | 备注                |
| ---- | ---- | -------- | ------------------- |
| type | num  | 是否认证 | -1：无<br />0：认证 |
| desc | str  | 认证信息 | 无为空              |

`data`中的`pendant`对象：

| 字段   | 类型 | 内容        | 备注 |
| ------ | ---- | ----------- | ---- |
| pid    | num  | 挂件id      |      |
| name   | str  | 挂件名称    |      |
| image  | str  | 挂件图片url |      |
| expire | num  | （？）      |      |

`data`中的`vip_label`对象：

| 字段        | 类型 | 内容     | 备注                                                         |
| ----------- | ---- | -------- | ------------------------------------------------------------ |
| path        | str  | （？）   |                                                              |
| text        | str  | 会员名称 |                                                              |
| label_theme | str  | 会员标签 | vip：大会员<br />annual_vip：年度大会员<br />ten_annual_vip：十年大会员<br />hundred_annual_vip：百年大会员 |

`data`中的`wallet`对象：

| 字段            | 类型 | 内容          | 备注 |
| --------------- | ---- | ------------- | ---- |
| mid             | num  | 登录用户mid   |      |
| bcoin_balance   | num  | 拥有B币数     |      |
| coupon_balance  | num  | 每月奖励B币数 |      |
| coupon_due_time | num  | （？）        |      |

`data`中的`wbi_img`对象：

| 字段    | 类型 | 内容                            | 备注                                     |
| ------- | ---- | ------------------------------- | ---------------------------------------- |
| img_url | str  | Wbi 签名参数 `imgKey`的伪装 url | 详见文档 [Wbi 签名](../misc/sign/wbi.md) |
| sub_url | str  | Wbi 签名参数 `subKey`的伪装 url | 详见文档 [Wbi 签名](../misc/sign/wbi.md) |

**示例：**

**登录状态：**

```shell
curl 'https://api.bilibili.com/x/web-interface/nav' \
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
        "isLogin": true,
        "email_verified": 1,
        "face": "https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg",
        "face_nft": 0,
        "face_nft_type": 0,
        "level_info": {
            "current_level": 6,
            "current_min": 28800,
            "current_exp": 52689,
            "next_exp": "--"
        },
        "mid": 293793435,
        "mobile_verified": 1,
        "money": 172.4,
        "moral": 70,
        "official": {
            "role": 0,
            "title": "",
            "desc": "",
            "type": -1
        },
        "officialVerify": {
            "type": -1,
            "desc": ""
        },
        "pendant": {
            "pid": 2511,
            "name": "初音未来13周年",
            "image": "https://i0.hdslb.com/bfs/garb/item/4f8f3f1f2d47f0dad84f66aa57acd4409ea46361.png",
            "expire": 0,
            "image_enhance": "https://i0.hdslb.com/bfs/garb/item/fe0b83b53e2342b16646f6e7a9370d8a867decdb.webp",
            "image_enhance_frame": "https://i0.hdslb.com/bfs/garb/item/127c507ec8448be30cf5f79500ecc6ef2fd32f2c.png"
        },
        "scores": 0,
        "uname": "社会易姐QwQ",
        "vipDueDate": 1707494400000,
        "vipStatus": 1,
        "vipType": 2,
        "vip_pay_type": 0,
        "vip_theme_type": 0,
        "vip_label": {
            "path": "",
            "text": "年度大会员",
            "label_theme": "annual_vip",
            "text_color": "#FFFFFF",
            "bg_style": 1,
            "bg_color": "#FB7299",
            "border_color": "",
            "use_img_label": true,
            "img_label_uri_hans": "",
            "img_label_uri_hant": "",
            "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
            "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png"
        },
        "vip_avatar_subscript": 1,
        "vip_nickname_color": "#FB7299",
        "vip": {
            "type": 2,
            "status": 1,
            "due_date": 1707494400000,
            "vip_pay_type": 0,
            "theme_type": 0,
            "label": {
                "path": "",
                "text": "年度大会员",
                "label_theme": "annual_vip",
                "text_color": "#FFFFFF",
                "bg_style": 1,
                "bg_color": "#FB7299",
                "border_color": "",
                "use_img_label": true,
                "img_label_uri_hans": "",
                "img_label_uri_hant": "",
                "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png",
                "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png"
            },
            "avatar_subscript": 1,
            "nickname_color": "#FB7299",
            "role": 3,
            "avatar_subscript_url": "",
            "tv_vip_status": 0,
            "tv_vip_pay_type": 0,
            "tv_due_date": 1640793600
        },
        "wallet": {
            "mid": 293793435,
            "bcoin_balance": 5,
            "coupon_balance": 5,
            "coupon_due_time": 0
        },
        "has_shop": true,
        "shop_url": "https://gf.bilibili.com?msource=main_station",
        "allowance_count": 0,
        "answer_status": 0,
        "is_senior_member": 1,
        "wbi_img": {
            "img_url": "https://i0.hdslb.com/bfs/wbi/653657f524a547ac981ded72ea172057.png",
            "sub_url": "https://i0.hdslb.com/bfs/wbi/6e4909c702f846728e64f6007736a338.png"
        },
        "is_jury": false
    }
}
```

</details>

**未登录状态：**

```shell
curl 'https://api.bilibili.com/x/web-interface/nav'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": -101,
    "message": "账号未登录",
    "ttl": 1,
    "data": {
        "isLogin": false,
        "wbi_img": {
            "img_url": "https://i0.hdslb.com/bfs/wbi/653657f524a547ac981ded72ea172057.png",
            "sub_url": "https://i0.hdslb.com/bfs/wbi/6e4909c702f846728e64f6007736a338.png"
        },
    }
}
```

</details>

## ~~登录用户信息仅部分（已弃用）~~

<details>
<summary>查看折叠内容</summary>

> https://account.bilibili.com/home/userInfo

*请求方式：GET*

认证方式：仅可Cookie（SESSDATA）

鉴权方式：Cookie中`DedeUserID`存在且不为0

带有转义

**json回复：**

根对象：

| 字段   | 类型 | 内容     | 备注                          |
| ------ | ---- | -------- | ----------------------------- |
| code   | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| status | bool | true     | 作用尚不明确                  |
| data   | obj  | 信息本体 |                               |

`data`对象：

| 字段              | 类型 | 内容              | 备注                            |
| ----------------- | ---- | ----------------- | ------------------------------- |
| level_info        | obj  | 等级信息          |                                 |
| bCoins            | num  | 拥有B币数         |                                 |
| coins             | num  | 拥有硬币数        |                                 |
| face              | str  | 登录用户头像url   |                                 |
| nameplate_current | null | ???               | 作用尚不明确                    |
| nameplate_current | str  | 登录用户勋章url   |                                 |
| pendant_current   | str  | 登录用户头像框url |                                 |
| uname             | str  | 登录用户昵称      |                                 |
| userStatus        | str  | 登录用户状态      |                                 |
| vipType           | num  | 大会员类型        | 0：无<br />1：月度<br />2：年度 |
| vipStatus         | num  | 会员开通状态      | 0：无<br />1：有                |
| official_verify   | num  | 是否认证          | -1：无<br />0：认证             |
| pointBalance      | num  | 0                 | 作用尚不明确                    |

`data`中的`level_info`对象：

| 字段          | 类型 | 内容                     | 备注 |
| ------------- | ---- | ------------------------ | ---- |
| current_level | num  | 当前等级                 |      |
| current_min   | num  | 当前等级经验最低值       |      |
| current_exp   | num  | 当前经验                 |      |
| next_exp      | num  | 升级下一等级需达到的经验 |      |

**示例：**

```shell
curl 'https://account.bilibili.com/home/userInfo' \
-b 'SESSDATA=xxx;DedeUserID=1;'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"status": true,
	"data": {
		"level_info": {
			"current_level": 5,
			"current_min": 10800,
			"current_exp": 14270,
			"next_exp": 28800
		},
		"bCoins": 10,
		"coins": 2.5,
		"face": "http:\/\/i2.hdslb.com\/bfs\/face\/480e2e98513aaeb65d2f2c76dbae750c4de722e9.jpg",
		"nameplate_current": null,
		"pendant_current": "http:\/\/i0.hdslb.com\/bfs\/face\/6550f53324c330f201a528e70ef305cb10ac2c01.png",
		"uname": "\u793e\u4f1a\u6613\u59d0QwQ",
		"userStatus": "\u6b63\u5f0f\u4f1a\u5458",
		"vipType": 2,
		"vipStatus": 1,
		"official_verify": -1,
		"pointBalance": 0
	}
}
```

</details>

</details>

## 登录用户信息（APP端）

> https://app.bilibili.com/x/v2/account/myinfo 

*请求方式：GET*

认证方式：仅可APP

鉴权方式：appkey

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注 |
| ---------- | ---- | ------------ | ----------- | ---- |
| access_key | str  | APP登录Token | APP方式必要 |      |
| appkey     | str  | APP密钥      | APP方式必要 |      |
| ts         | num  | 当前时间戳   | APP方式必要 |      |
| sign       | str  | APP签名      | APP方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-3：API校验密匙错误<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段           | 类型 | 内容             | 备注                          |
| -------------- | ---- | ---------------- | ----------------------------- |
| mid            | num  | 用户mid          |                               |
| name           | str  | 用户昵称         |                               |
| sign           | str  | 用户签名         |                               |
| coins          | num  | 拥有硬币数       |                               |
| birthday       | str  | 用户生日         | YYYY-MM-DD                    |
| face           | str  | 用户头像url      |                               |
| sex            | num  | 用户性别         | 0：私密<br />1：男<br />2：女 |
| level          | num  | 用户等级         | 0-6                           |
| rank           | num  | 1000             | **作用尚不明确**              |
| silence        | num  | 用户是否被封禁   | 0：正常<br />1：封禁          |
| vip            | obj  | 会员信息         |                               |
| email_status   | num  | 是否验证邮箱地址 | 0：未验证<br />1：已验证      |
| tel_status     | num  | 是否验证手机号   | 0：未验证<br />1：已验证      |
| official       | obj  | 认证信息         |                               |
| identification | num  | 1                | **作用尚不明确**              |
| invite         | obj  |                  |                               |
| is_tourist     | num  | 0                | **作用尚不明确**              |
| pin_prompting  | num  | 0                | **作用尚不明确**              |

`data`中的`vip`对象：

| 字段             | 类型 | 内容             | 备注                            |
| ---------------- | ---- | ---------------- | ------------------------------- |
| type             | num  | 大会员类型       | 0：无<br />1：月度<br />2：年度 |
| status           | num  | 会员开通状态     | 0：无<br />1：有                |
| due_date         | num  | 大会员到期时间   | 毫秒 时间戳                     |
| vip_pay_type     | num  | 会员开通状态     | 0：无<br />1：有                |
| theme_type       | num  | 会员开通状态     | 0：无<br />1：有                |
| label            | obj  | 大会员信息       |                                 |
| avatar_subscript | num  | 是否显示会员图标 | 0：不显示<br />1：显示          |
| nickname_color   | str  | 会员昵称颜色     | 颜色码                          |

`vip`中的`label`对象：

| 字段        | 类型 | 内容         | 备注             |
| ----------- | ---- | ------------ | ---------------- |
| path        | str  | 空           | **作用尚不明确** |
| text        | str  | 会员类型文字 |                  |
| label_theme | str  | 会员类型     |                  |

`data`中的`official`对象：

| 字段  | 类型 | 内容     | 备注                                              |
| ----- | ---- | -------- | ------------------------------------------------- |
| role  | num  | 认证类型 | 0：无<br />1 2 7：个人认证<br />3 4 5 6：机构认证 |
| title | str  | 认证信息 | 无为空                                            |
| desc  | str  | 认证备注 | 无为空                                            |
| type  | num  | 认证备注 | 无为空                                            |

`data`中的`invite`对象：

| 字段          | 类型 | 内容 | 备注             |
| ------------- | ---- | ---- | ---------------- |
| invite_remind | num  | 1    | **作用尚不明确** |
| display       | bool | true | **作用尚不明确** |

**示例：**

```shell
curl -G 'https://app.bilibili.com/x/v2/account/myinfo' \
--data-urlencode 'access_key=xxx' \
--data-urlencode 'appkey=4409e2ce8ffd12b8' \
--data-urlencode 'ts=0' \
--data-urlencode 'sign=b8fb8480049c525994be6507a97ae0b6'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "mid": 293793435,
        "name": "社会易姐QwQ",
        "sign": "高中技术宅一枚，爱好MC&电子&8-bit音乐&数码&编程，资深猿厨，粉丝群：1136462265",
        "coins": 33.4,
        "birthday": "2002-03-05",
        "face": "http://i1.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg",
        "sex": 1,
        "level": 5,
        "rank": 10000,
        "silence": 0,
        "vip": {
            "type": 2,
            "status": 1,
            "due_date": 1612454400000,
            "vip_pay_type": 1,
            "theme_type": 0,
            "label": {
                "path": "",
                "text": "年度大会员",
                "label_theme": "annual_vip"
            },
            "avatar_subscript": 1,
            "nickname_color": "#FB7299"
        },
        "email_status": 1,
        "tel_status": 1,
        "official": {
            "role": 0,
            "title": "",
            "desc": "",
            "type": -1
        },
        "identification": 1,
        "invite": {
            "invite_remind": 1,
            "display": true
        },
        "is_tourist": 0,
        "pin_prompting": 0
    }
}
```

</details>


## 登录用户状态数（双端）

> https://api.bilibili.com/x/web-interface/nav/stat

*请求方式：GET*

认证方式：Cookie（SESSDATA）或APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注 |
| ---------- | ---- | ------------ | ----------- | ---- |
| access_key | str  | APP登录Token | APP方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        |                               |
| data    | obj  | 信息本体 |                               |

| 字段          | 类型 | 内容       | 备注 |
| ------------- | ---- | ---------- | ---- |
| following     | num  | 关注数     |      |
| follower      | num  | 粉丝数     |      |
| dynamic_count | num  | 发布动态数 |      |

**示例：**

当前登录用户的状态数为粉丝596，关注754，发送的动态252

Cookie方式：

```shell
curl 'https://api.bilibili.com/x/web-interface/nav/stat' \
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
        "following": 754,
        "follower": 596,
        "dynamic_count": 252
    }
}
```

</details>

APP方式：

```shell
curl -G 'https://api.bilibili.com/x/web-interface/nav/stat' \
--data-urlencode 'access_key=d907f51122c59599d580ade2315af971'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "following": 754,
        "follower": 596,
        "dynamic_count": 252
    }
}
```

</details>

## 获取硬币数

>  https://account.bilibili.com/site/getCoin

*请求方式：GET*

认证方式：仅可Cookie（SESSDATA）

鉴权方式：Cookie中` DedeUserID `存在且不为0

**json回复：**

根对象：

| 字段   | 类型 | 内容     | 备注                          |
| ------ | ---- | -------- | ----------------------------- |
| code   | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| status | bool | true     | 作用尚不明确                  |
| data   | obj  | 信息本体 |                               |

`data`对象：

| 字段  | 类型                                   | 内容       | 备注 |
| ----- | -------------------------------------- | ---------- | ---- |
| money | 硬币为正数时：num<br />硬币为0时：null | 当前硬币数 |      |

**示例：**

```shell
curl 'https://account.bilibili.com/site/getCoin' \
-b 'SESSDATA=xxx;DedeUserID=1;'
```

<details>
<summary>查看响应示例：</summary>


```json
{
    "code": 0,
    "status": true,
    "data": {
        "money": 42.4
    }
}
```

</details>
