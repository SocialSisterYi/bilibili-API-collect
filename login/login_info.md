# 登录基本信息

**本页所有操作均需登录（SESSDATA）**

## 登录用户信息1（完整）

> http://api.bilibili.com/nav (带有转义)
>
> http://api.bilibili.com/x/web-interface/nav (原始数据)

*方式:GET*

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        | **作用尚不明确**              |
| data    | obj  | 信息本体 |                               |

`data`对象：

| 字段                 | 类型 | 内容             | 备注                            |
| -------------------- | ---- | ---------------- | ------------------------------- |
| isLogin              | bool | 是否已登录       | false：未登录<br />true：已登录 |
| email_verified       | num  | 是否验证邮箱地址 | 0：未验证<br />1：已验证        |
| face                 | str  | 用户头像url      |                                 |
| level_info           | obj  | 等级信息         |                                 |
| mid                  | num  | 用户UID          |                                 |
| mobile_verified      | num  | 是否验证手机号   | 0：未验证<br />1：已验证        |
| money                | num  | 拥有硬币数       |                                 |
| moral                | num  | 当前节操值       | 上限70                          |
| official             | obj  | 认证信息         |                                 |
| officialVerify       | obj  | 认证信息2        |                                 |
| pendant              | obj  | 头像框信息       |                                 |
| scores               | num  | 0                | **作用尚不明确**                |
| uname                | str  | 用户昵称         |                                 |
| vipDueDate           | num  | 大会员到期时间   | 毫秒 时间戳                     |
| vipStatus            | num  | 会员开通状态     | 0：无<br />1：有                |
| vipType              | num  | 大会员类型       | 0：无<br />1：月度<br />2：年度 |
| vip_pay_type         | num  | 会员开通状态     | 0：无<br />1：有                |
| vip_theme_type       | num  | 0                | **作用尚不明确**                |
| vip_label            | obj  | 大会员信息       |                                 |
| vip_avatar_subscript | num  | 是否显示会员图标 | 0：不显示<br />1：显示          |
| vip_nickname_color   | str  | 会员昵称颜色     | 颜色码                          |
| wallet               | obj  | B币信息          |                                 |
| has_shop             | bool | false            | **作用尚不明确**                |
| shop_url             | str  | 空               | **作用尚不明确**                |
| allowance_count      | num  | 0                | **作用尚不明确**                |
| answer_status        | num  | 0                | **作用尚不明确**                |

`data`中的`level_info`对象：

| 字段          | 类型 | 内容                     | 备注 |
| ------------- | ---- | ------------------------ | ---- |
| current_level | num  | 当前等级                 |      |
| current_min   | num  | 当前等级经验最低值       |      |
| current_exp   | num  | 当前经验                 |      |
| next_exp      | num  | 升级下一等级需达到的经验 |      |

`data`中的`official`对象：

| 字段  | 类型 | 内容     | 备注                                            |
| ----- | ---- | -------- | ----------------------------------------------- |
| role  | num  | 认证类型 | 0：无<br />1 2：个人认证<br />3 4 5 6：机构认证 |
| title | str  | 认证信息 | 无为空                                          |
| desc  | str  | 认证备注 | 无为空                                          |
| type  | num  | 是否认证 | -1：无<br />0：认证                             |

`data`中的`official_verify`对象：

| 字段 | 类型 | 内容     | 备注                |
| ---- | ---- | -------- | ------------------- |
| type | num  | 是否认证 | -1：无<br />0：认证 |
| desc | str  | 认证信息 | 无为空              |

`data`中的`pendant`对象：

| 字段   | 类型 | 内容        | 备注             |
| ------ | ---- | ----------- | ---------------- |
| pid    | num  | 挂件id      |                  |
| name   | str  | 挂件名称    |                  |
| image  | str  | 挂件图片url |                  |
| expire | num  | 0           | **作用尚不明确** |

`data`中的`vip_label`对象：

| 字段        | 类型 | 内容         | 备注             |
| ----------- | ---- | ------------ | ---------------- |
| path        | str  | 空           | **作用尚不明确** |
| text        | str  | 会员类型文字 |                  |
| label_theme | str  | 会员类型     |                  |

`data`中的`wallet`对象：

| 字段            | 类型 | 内容          | 备注             |
| --------------- | ---- | ------------- | ---------------- |
| mid             | num  | 登录用户UID   |                  |
| bcoin_balance   | num  | 拥有B币数     |                  |
| coupon_balance  | num  | 每月奖励B币数 |                  |
| coupon_due_time | num  | 0             | **作用尚不明确** |

**示例：**

查询当前登录用户的信息

http://api.bilibili.com/x/web-interface/nav

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": {
        "isLogin": true,
        "email_verified": 1,
        "face": "http://i1.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg",
        "level_info": {
            "current_level": 5,
            "current_min": 10800,
            "current_exp": 16269,
            "next_exp": 28800
        },
        "mid": 293793435,
        "mobile_verified": 1,
        "money": 26.6,
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
            "pid": 1888,
            "name": "泠鸢yousa",
            "image": "http://i0.hdslb.com/bfs/garb/item/3e66e712b8e70c6b02393c54ad5fd8d993eb39f9.png",
            "expire": 0,
            "image_enhance": "http://i0.hdslb.com/bfs/garb/item/3e66e712b8e70c6b02393c54ad5fd8d993eb39f9.png"
        },
        "scores": 0,
        "uname": "社会易姐QwQ",
        "vipDueDate": 1612454400000,
        "vipStatus": 1,
        "vipType": 2,
        "vip_pay_type": 1,
        "vip_theme_type": 0,
        "vip_label": {
            "path": "",
            "text": "年度大会员",
            "label_theme": "annual_vip"
        },
        "vip_avatar_subscript": 1,
        "vip_nickname_color": "#FB7299",
        "wallet": {
            "mid": 293793435,
            "bcoin_balance": 8,
            "coupon_balance": 5,
            "coupon_due_time": 0
        },
        "has_shop": false,
        "shop_url": "",
        "allowance_count": 0,
        "answer_status": 0
    }
}
```



## 登录用户信息2（仅部分  带有转义）

> http://account.bilibili.com/home/userInfo

*方式:GET*

需要验证DedeUserID存在且不为0

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

查询当前登录用户的信息

http://account.bilibili.com/home/userInfo

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



## 登录用户状态数

> http://api.bilibili.com/x/web-interface/nav/stat

*方式：GET*

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        | 作用尚不明确                  |
| data    | obj  | 信息本体 |                               |

| 字段          | 类型 | 内容       | 备注 |
| ------------- | ---- | ---------- | ---- |
| following     | num  | 关注数     |      |
| follower      | num  | 粉丝数     |      |
| dynamic_count | num  | 发布动态数 |      |

**示例：**

查询当前登录用户的状态数

粉丝数为365，关注数为695，发送的动态数为162

http://api.bilibili.com/x/web-interface/nav/stat

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"following": 695,
		"follower": 365,
		"dynamic_count": 162
	}
}
```
