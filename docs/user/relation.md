# 用户关系相关

## 查询用户粉丝明细

<img src="../../assets/img/relation.svg" width="100" height="100" />

> https://api.bilibili.com/x/relation/followers

*请求方式：GET*

认证方式：Cookie(SESSDATA)或APP

登录可看自己前1000名，其他用户可查看前250名（网页端请求时ps为20，所以直接查看只能看到前100名）

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注                               |
| ---------- | ---- | ------------ | ----------- | ---------------------------------- |
| access_key | str  | APP登录Token | APP方式必要 |                                    |
| vmid       | num  | 目标用户mid  | 必要        |                                    |
| ps         | num  | 每页项数     | 非必要      | 默认为50                           |
| pn         | num  | 页码         | 非必要      | 默认为1<br />其他用户仅可查看前5页 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                |
| ------- | ---- | -------- | --------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />22007：访问超过5页 |
| message | str  | 错误信息 | 默认为0                                             |
| ttl     | num  | 1        |                                                     |
| data    | obj  | 信息本体 |                                                     |

`data`对象：

| 字段       | 类型  | 内容     | 备注         |
| ---------- | ----- | -------- | ------------ |
| list       | array | 明细列表 |              |
| re_version | num   | ？？？   | 作用尚不明确 |
| total      | num   | 粉丝总数 |              |

`data`中的`list`数组：

| 项   | 类型 | 内容      | 备注             |
| ---- | ---- | --------- | ---------------- |
| 0    | obj  | 粉丝1     |                  |
| n    | obj  | 粉丝(n+1) | 按照关注顺序排列 |
| ……   | obj  | ……        | ……               |

`list`中的对象：

| 字段            | 类型 | 内容         | 备注                                    |
| --------------- | ---- | ------------ | --------------------------------------- |
| mid             | num  | 用户mid      |                                         |
| attribute       | num  | 关注属性     | 0：未关注<br />2：已关注<br />6：已互粉 |
| mtime           | num  | 成为粉丝时间 | 时间戳<br />互关后刷新                  |
| tag             | null |              |                                         |
| special         | num  | 0            |                                         |
| uname           | str  | 用户昵称     |                                         |
| face            | str  | 用户头像url  |                                         |
| sign            | str  | 用户签名     |                                         |
| official_verify | obj  | 认证信息     |                                         |
| vip             | obj  | 会员信息     |                                         |

`list`中的对象中的`official_verify`对象：

| 字段 | 类型 | 内容         | 备注                |
| ---- | ---- | ------------ | ------------------- |
| type | num  | 用户认证类型 | -1：无<br />0：个人认证<br />1：机构认证 |
| desc | str  | 用户认证信息 | 无为空              |

`list`中的对象中的`vip`对象：

| 字段          | 类型 | 内容         | 备注                                            |
| ------------- | ---- | ------------ | ----------------------------------------------- |
| vipType       | num  | 会员类型     | 0：无<br />1：月度大会员<br />2：年度以上大会员 |
| vipDueDate    | num  | 会员到期时间 | 时间戳 毫秒                                     |
| dueRemark     | str  | 空           | 作用尚不明确                                    |
| accessStatus  | num  | 0            | 作用尚不明确                                    |
| vipStatus     | num  | 大会员状态   | 0：无<br />1：有                                |
| vipStatusWarn | str  | 空           | 作用尚不明确                                    |
| themeType     | num  | 0            | 作用尚不明确                                    |
| label         | obj  | ？？？       | 作用尚不明确                                    |

`vip`中的`label`对象：

| 字段 | 类型 | 内容 | 备注         |
| ---- | ---- | ---- | ------------ |
| path | str  | 空   | 作用尚不明确 |

**示例：**

获取用户`mid=293793435`的粉丝明细

```shell
curl -G 'https://api.bilibili.com/x/relation/followers' \
--data-urlencode 'vmid=293793435' \
--data-urlencode 'ps=2' \
--data-urlencode 'pn=1' \
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
		"list": [{
			"mid": 387195656,
			"attribute": 0,
			"mtime": 1583839793,
			"tag": null,
			"special": 0,
			"uname": "L_E_M_O_H_E",
			"face": "https://i1.hdslb.com/bfs/face/8ec537db75eeb292faa8dc85a9ff8aba83148c86.jpg",
			"sign": "暂时断更。。Back later",
			"official_verify": {
				"type": -1,
				"desc": ""
			},
			"vip": {
				"vipType": 0,
				"vipDueDate": 0,
				"dueRemark": "",
				"accessStatus": 0,
				"vipStatus": 0,
				"vipStatusWarn": "",
				"themeType": 0,
				"label": {
					"path": ""
				}
			}
		}, {
			"mid": 175989424,
			"attribute": 0,
			"mtime": 1583822019,
			"tag": null,
			"special": 0,
			"uname": "哥本哈根iii",
			"face": "https://i1.hdslb.com/bfs/face/e53c0fe9315176d48bd294b1f381f0da70131cd7.jpg",
			"sign": "",
			"official_verify": {
				"type": -1,
				"desc": ""
			},
			"vip": {
				"vipType": 0,
				"vipDueDate": 0,
				"dueRemark": "",
				"accessStatus": 0,
				"vipStatus": 0,
				"vipStatusWarn": "",
				"themeType": 0,
				"label": {
					"path": ""
				}
			}
		}],
		"re_version": 3857745402,
		"total": 365
	}
}
```

</details>

## 查询用户关注明细

<img src="../../assets/img/relation.svg" width="100" height="100" />

> https://api.bilibili.com/x/relation/followings

*请求方式：GET*

认证方式：Cookie(SESSDATA)或APP

登录可看自己全部，其他用户仅可查看前5页

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注                                                    |
| ---------- | ---- | ------------ | ----------- | ------------------------------------------------------- |
| access_key | str  | APP登录Token | APP方式必要 |                                                         |
| vmid       | num  | 目标用户mid  | 必要        |                                                         |
| order_type | str  | 排序方式     | 非必要      | 按照关注顺序排列：留空<br />按照最常访问排列：attention |
| ps         | num  | 每页项数     | 非必要      | 默认为50                                                |
| pn         | num  | 页码         | 非必要      | 默认为1<br />其他用户仅可查看前5页                      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />22007：访问超过5页<br />22115：用户已设置隐私，无法查看 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段       | 类型  | 内容     | 备注         |
| ---------- | ----- | -------- | ------------ |
| list       | array | 明细列表 |              |
| re_version | num   | ？？？   | 作用尚不明确 |
| total      | num   | 关注总数 |              |

`data`中的`list`数组：

| 项   | 类型 | 内容      | 备注             |
| ---- | ---- | --------- | ---------------- |
| 0    | obj  | 关注1     |                  |
| n    | obj  | 关注(n+1) | 按照关注顺序排列 |
| ……   | obj  | ……        | ……               |

数组`list`中的对象：

| 字段            | 类型                                     | 内容         | 备注                                    |
| --------------- | ---------------------------------------- | ------------ | --------------------------------------- |
| mid             | num                                      | 用户mid      |                                         |
| attribute       | num                                      | 关注属性     | 0：未关注<br />2：已关注<br />6：已互粉 |
| mtime           | num                                      | 关注对方时间 | 时间戳<br />互关后刷新                  |
| tag             | 默认分组：null<br />存在至少一个分组：array | 分组id       |                             |
| special         | num                                      | 特别关注标志 | 0：否<br />1：是                        |
| uname           | str                                      | 用户昵称     |                                         |
| face            | str                                      | 用户头像url  |                                         |
| sign            | str                                      | 用户签名     |                                         |
| official_verify | obj                                      | 认证信息     |                                         |
| vip             | obj                                      | 会员信息     |                                         |

数组`list`中的对象中的`tag`数组：

| 项   | 类型 | 内容                  | 备注 |
| ---- | ---- | --------------------- | ---- |
| 0    | num  | 位于分组1的分组id     |      |
| n    | num  | 位于分组(n+1)的分组id |      |
| ……   | num  | ……                    | ……   |

`list`中的对象中的`official_verify`对象：

| 字段 | 类型 | 内容         | 备注                |
| ---- | ---- | ------------ | ------------------- |
| type | num  | 用户认证类型 | -1：无<br />1：认证 |
| desc | str  | 用户认证信息 | 无为空              |

`list`中的对象中的`vip`对象：

| 字段          | 类型 | 内容         | 备注                                            |
| ------------- | ---- | ------------ | ----------------------------------------------- |
| vipType       | num  | 会员类型     | 0：无<br />1：月度大会员<br />2：年度以上大会员 |
| vipDueDate    | num  | 会员到期时间 | 时间戳 毫秒                                     |
| dueRemark     | str  | 空           | 作用尚不明确                                    |
| accessStatus  | num  | 0            | 作用尚不明确                                    |
| vipStatus     | num  | 大会员状态   | 0：无<br />1：有                                |
| vipStatusWarn | str  | 空           | 作用尚不明确                                    |
| themeType     | num  | 0            | 作用尚不明确                                    |
| label         | obj  | ？？？       | 作用尚不明确                                    |

`vip`中的`label`对象：

| 字段 | 类型 | 内容 | 备注         |
| ---- | ---- | ---- | ------------ |
| path | str  | 空   | 作用尚不明确 |

**示例：**

获取用户`mid=293793435`的关注明细，按照关注顺序

```shell
curl -G 'https://api.bilibili.com/x/relation/followings' \
--data-urlencode 'vmid=293793435' \
--data-urlencode 'order_type=' \
--data-urlencode 'ps=2' \
--data-urlencode 'pn=1' \
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
		"list": [{
			"mid": 14082,
			"attribute": 2,
			"mtime": 1584271945,
			"tag": null,
			"special": 0,
			"uname": "山新",
			"face": "https://i0.hdslb.com/bfs/face/74c82caee6d9eb623e56161ea8ed6d68afabfeae.jpg",
			"sign": "都说了是天依爹地，不是妈咪。\r私信有点多回复不过来～商业合作啥的请移步Weibo私信@山新 哦哦哦～",
			"official_verify": {
				"type": 0,
				"desc": "配音演员、声优。洛天依声源提供者。"
			},
			"vip": {
				"vipType": 2,
				"vipDueDate": 1601654400000,
				"dueRemark": "",
				"accessStatus": 0,
				"vipStatus": 1,
				"vipStatusWarn": "",
				"themeType": 0,
				"label": {
					"path": ""
				}
			}
		}, {
			"mid": 420831218,
			"attribute": 2,
			"mtime": 1584208169,
			"tag": [207542],
			"special": 0,
			"uname": "支付宝Alipay",
			"face": "https://i2.hdslb.com/bfs/face/aaf18aeb2d9822e28a590bd8d878572ca8c59e04.jpg",
			"sign": "阿支来了，关注点赞转发投币四连走起！",
			"official_verify": {
				"type": 1,
				"desc": "支付宝官方账号"
			},
			"vip": {
				"vipType": 1,
				"vipDueDate": 1585065600000,
				"dueRemark": "",
				"accessStatus": 0,
				"vipStatus": 1,
				"vipStatusWarn": "",
				"themeType": 0,
				"label": {
					"path": ""
				}
			}
		}],
		"re_version": 3228575555,
		"total": 699
	}
}
```

</details>

## 查询用户关注明细2

<img src="../../assets/img/relation.svg" width="100" height="100" />

> https://app.biliapi.net/x/v2/relation/followings

*请求方式：GET*

仅可查看前5页，可以获取已设置可见性隐私的关注列表

**url参数：**

| 参数名     | 类型 | 内容         | 必要性 | 备注                       |
| ---------- | ---- | ------------ | ------ | -------------------------- |
| vmid       | num  | 目标用户mid  | 必要   |                            |
| ps         | num  | 每页项数     | 非必要 | 默认为50                   |
| pn         | num  | 页码         | 非必要 | 默认为1<br />仅可查看前5页 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                |
| ------- | ---- | -------- | --------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />22007：访问超过5页 |
| message | str  | 错误信息 | 默认为0                                             |
| ttl     | num  | 1        |                                                     |
| data    | obj  | 信息本体 |                                                     |

`data`对象：

| 字段       | 类型  | 内容     | 备注         |
| ---------- | ----- | -------- | ------------ |
| list       | array | 明细列表 |              |
| re_version | num   | ？？？   | 作用尚不明确 |
| total      | num   | 关注总数 |              |

`data`中的`list`数组：

| 项   | 类型 | 内容      | 备注             |
| ---- | ---- | --------- | ---------------- |
| 0    | obj  | 关注1     |                  |
| n    | obj  | 关注(n+1) | 按照关注顺序排列 |
| ……   | obj  | ……        | ……               |

数组`list`中的对象：

| 字段            | 类型                                     | 内容         | 备注                                    |
| --------------- | ---------------------------------------- | ------------ | --------------------------------------- |
| mid             | num                                      | 用户mid      |                                         |
| attribute       | num                                      | 关注属性     | 0：未关注<br />2：已关注<br />6：已互粉 |
| mtime           | num                                      | 关注对方时间 | 时间戳<br />互关后刷新                  |
| tag             | 默认分组：null<br />存在至少一个分组：array | 分组id       |                             |
| special         | num                                      | 特别关注标志 | 0：否<br />1：是                        |
| uname           | str                                      | 用户昵称     |                                         |
| face            | str                                      | 用户头像url  |                                         |
| sign            | str                                      | 用户签名     |                                         |
| official_verify | obj                                      | 认证信息     |                                         |
| vip             | obj                                      | 会员信息     |                                         |

数组`list`中的对象中的`tag`数组：

| 项   | 类型 | 内容                  | 备注 |
| ---- | ---- | --------------------- | ---- |
| 0    | num  | 位于分组1的分组id     |      |
| n    | num  | 位于分组(n+1)的分组id |      |
| ……   | num  | ……                    | ……   |

`list`中的对象中的`official_verify`对象：

| 字段 | 类型 | 内容         | 备注                |
| ---- | ---- | ------------ | ------------------- |
| type | num  | 用户认证类型 | -1：无<br />1：认证 |
| desc | str  | 用户认证信息 | 无为空              |

`list`中的对象中的`vip`对象：

| 字段          | 类型 | 内容         | 备注                                            |
| ------------- | ---- | ------------ | ----------------------------------------------- |
| vipType       | num  | 会员类型     | 0：无<br />1：月度大会员<br />2：年度以上大会员 |
| vipDueDate    | num  | 会员到期时间 | 时间戳 毫秒                                     |
| dueRemark     | str  | 空           | 作用尚不明确                                    |
| accessStatus  | num  | 0            | 作用尚不明确                                    |
| vipStatus     | num  | 大会员状态   | 0：无<br />1：有                                |
| vipStatusWarn | str  | 空           | 作用尚不明确                                    |
| themeType     | num  | 0            | 作用尚不明确                                    |
| label         | obj  | ？？？       | 作用尚不明确                                    |

`vip`中的`label`对象：

| 字段 | 类型 | 内容 | 备注         |
| ---- | ---- | ---- | ------------ |
| path | str  | 空   | 作用尚不明确 |

**示例：**

获取用户`mid=293793435`的关注明细，按照关注顺序

```shell
curl -G 'https://app.biliapi.net/x/v2/relation/followings' \
--data-urlencode 'vmid=293793435' \
--data-urlencode 'ps=2' \
--data-urlencode 'pn=1' \
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"list": [{
			"mid": 14082,
			"attribute": 2,
			"mtime": 1584271945,
			"tag": null,
			"special": 0,
			"uname": "山新",
			"face": "https://i0.hdslb.com/bfs/face/74c82caee6d9eb623e56161ea8ed6d68afabfeae.jpg",
			"sign": "都说了是天依爹地，不是妈咪。\r私信有点多回复不过来～商业合作啥的请移步Weibo私信@山新 哦哦哦～",
			"official_verify": {
				"type": 0,
				"desc": "配音演员、声优。洛天依声源提供者。"
			},
			"vip": {
				"vipType": 2,
				"vipDueDate": 1601654400000,
				"dueRemark": "",
				"accessStatus": 0,
				"vipStatus": 1,
				"vipStatusWarn": "",
				"themeType": 0,
				"label": {
					"path": ""
				}
			}
		}, {
			"mid": 420831218,
			"attribute": 2,
			"mtime": 1584208169,
			"tag": [207542],
			"special": 0,
			"uname": "支付宝Alipay",
			"face": "https://i2.hdslb.com/bfs/face/aaf18aeb2d9822e28a590bd8d878572ca8c59e04.jpg",
			"sign": "阿支来了，关注点赞转发投币四连走起！",
			"official_verify": {
				"type": 1,
				"desc": "支付宝官方账号"
			},
			"vip": {
				"vipType": 1,
				"vipDueDate": 1585065600000,
				"dueRemark": "",
				"accessStatus": 0,
				"vipStatus": 1,
				"vipStatusWarn": "",
				"themeType": 0,
				"label": {
					"path": ""
				}
			}
		}],
		"re_version": 3228575555,
		"total": 699
	}
}
```

</details>

## 查询用户关注明细3

<img src="../../assets/img/relation.svg" width="100" height="100" />

> https://line3-h5-mobile-api.biligame.com/game/center/h5/user/relationship/following_list

*请求方式：GET*

可获取用户所有关注列表，对于设置了可见性隐私的用户会返回空列表

**url参数：**

| 参数名 | 类型 | 内容         | 必要性      | 备注     |
| ------ | ---- | ------------ | ----------- | -------- |
| vmid   | num  | 目标用户mid  | 必要        |          |
| ps     | num  | 每页项数     | 非必要      | 默认为50 |
| pn     | num  | 页码         | 非必要      | 默认为1  |

**json回复：**

根对象：

| 字段       | 类型 | 内容       | 备注                        |
| ---------- | ---- | ---------- | --------------------------- |
| code       | num  | 返回值     | 0：成功<br />-400：请求错误 |
| message    | str  | 错误信息   | 成功时无此项                |
| data       | obj  | 信息本体   | 失败时无此项                |
| ts         | num  | 当前时间戳 | 单位为毫秒                  |
| request_id | str  | 请求id     |                             |

`data`对象：

| 字段       | 类型  | 内容     | 备注         |
| ---------- | ----- | -------- | ------------ |
| list       | array | 明细列表 |              |

`data`中的`list`数组：

| 项   | 类型 | 内容      | 备注             |
| ---- | ---- | --------- | ---------------- |
| 0    | obj  | 关注1     |                  |
| n    | obj  | 关注(n+1) | 按照关注顺序排列 |
| ……   | obj  | ……        | ……               |

数组`list`中的对象：

| 字段            | 类型 | 内容        | 备注                                    |
| --------------- | ---- | ----------- | --------------------------------------- |
| mid             | str  | 用户mid     |                                         |
| attribute       | num  | 关注属性    | 0：未关注<br />2：已关注<br />6：已互粉 |
| uname           | str  | 用户昵称    |                                         |
| face            | str  | 用户头像url |                                         |

**示例：**

获取用户`mid=293793435`的关注明细

```shell
curl -G 'https://line3-h5-mobile-api.biligame.com/game/center/h5/user/relationship/following_list' \
--data-urlencode 'vmid=293793435' \
--data-urlencode 'ps=2' \
--data-urlencode 'pn=1' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"data": {
		"list": [{
			"mid": "14082",
			"attribute": 2,
			"uname": "山新",
			"face": "https://i0.hdslb.com/bfs/face/74c82caee6d9eb623e56161ea8ed6d68afabfeae.jpg"
		}, {
			"mid": "420831218",
			"attribute": 2,
			"uname": "支付宝Alipay",
			"face": "https://i2.hdslb.com/bfs/face/aaf18aeb2d9822e28a590bd8d878572ca8c59e04.jpg"
		}]
	},
	"ts": 1677410818395,
	"request_id": "d9d541b9f2d24e21821e2d6d2d16c17d"
}
```

</details>

## 搜索关注明细

<img src="../../assets/img/relation.svg" width="100" height="100" />

>  https://api.bilibili.com/x/relation/followings/search

*请求方式：GET*

认证方式：Cookie(SESSDATA)或APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注     |
| ---------- | ---- | ------------ | ----------- | -------- |
| access_key | str  | APP登录Token | APP方式必要 |          |
| vmid       | str  | 目标用户mid  | 必要        |          |
| name       | str  | 搜索关键词   | 必要        |          |
| ps         | num  | 每页项数     | 非必要      | 默认为50 |
| pn         | num  | 页码         | 非必要      | 默认为1  |

data 对象：

| 字段       | 类型  | 内容     | 备注         |
| ---------- | ----- | -------- | ------------ |
| list       | array | 明细列表 |              |
| re_version | num   | ？？？   | 作用尚不明确 |
| total      | num   | 关注总数 |              |

`data`中的`list`数组：

| 项   | 类型 | 内容          | 备注             |
| ---- | ---- | ------------- | ---------------- |
| 0    | obj  | 共同关注1     |                  |
| n    | obj  | 共同关注(n+1) | 按照关注顺序排列 |
| ……   | obj  | ……            | ……               |

数组`list`中的对象：

| 字段            | 类型                                        | 内容         | 备注                                    |
| --------------- | ------------------------------------------- | ------------ | --------------------------------------- |
| mid             | num                                         | 用户mid      |                                         |
| attribute       | num                                         | 关注属性     | 0：未关注<br />2：已关注<br />6：已互粉 |
| mtime           | num                                         | 关注对方时间 | 时间戳<br />互关后刷新                  |
| tag             | 默认分组：null<br />存在至少一个分组：array | 分组id       |                                         |
| special         | num                                         | 特别关注标志 | 0：否<br />1：是                        |
| uname           | str                                         | 用户昵称     |                                         |
| face            | str                                         | 用户头像url  |                                         |
| sign            | str                                         | 用户签名     |                                         |
| official_verify | obj                                         | 认证信息     |                                         |
| vip             | obj                                         | 会员信息     |                                         |

数组`list`中的对象中的`tag`数组：

| 项   | 类型 | 内容                  | 备注 |
| ---- | ---- | --------------------- | ---- |
| 0    | num  | 位于分组1的分组id     |      |
| n    | num  | 位于分组(n+1)的分组id |      |
| ……   | num  | ……                    | ……   |

`list`中的对象中的`official_verify`对象：

| 字段 | 类型 | 内容         | 备注                |
| ---- | ---- | ------------ | ------------------- |
| type | num  | 用户认证类型 | -1：无<br />1：认证 |
| desc | str  | 用户认证信息 | 无为空              |

`list`中的对象中的`vip`对象：

| 字段          | 类型 | 内容         | 备注                                            |
| ------------- | ---- | ------------ | ----------------------------------------------- |
| vipType       | num  | 会员类型     | 0：无<br />1：月度大会员<br />2：年度以上大会员 |
| vipDueDate    | num  | 会员到期时间 | 时间戳 毫秒                                     |
| dueRemark     | str  | 空           | 作用尚不明确                                    |
| accessStatus  | num  | 0            | 作用尚不明确                                    |
| vipStatus     | num  | 大会员状态   | 0：无<br />1：有                                |
| vipStatusWarn | str  | 空           | 作用尚不明确                                    |
| themeType     | num  | 0            | 作用尚不明确                                    |
| label         | obj  | ？？？       | 作用尚不明确                                    |

`vip`中的`label`对象：

| 字段 | 类型 | 内容 | 备注         |
| ---- | ---- | ---- | ------------ |
| path | str  | 空   | 作用尚不明确 |

**示例：**

搜索我的关注列表中关键词`warma`

```shell
curl -G 'https://api.bilibili.com/x/relation/followings/search' \
--data-urlencode 'vmid=293793435' \
--data-urlencode 'name=warma' \
--data-urlencode 'ps=2' \
--data-urlencode 'pn=1' \
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
                "mid": 53456,
                "attribute": 2,
                "mtime": 1586415053,
                "tag": [
                    -10
                ],
                "special": 1,
                "uname": "Warma",
                "face": "https://i2.hdslb.com/bfs/face/c1bbee6d255f1e7fc434e9930f0f288c8b24293a.jpg",
                "sign": "我是沃玛，做点傻开心的视频。日常发在微博：@_warma_ ",
                "official_verify": {
                    "type": 0,
                    "desc": "bilibili 知名UP主"
                },
                "vip": {
                    "vipType": 2,
                    "vipDueDate": 1637424000000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 1,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                }
            }
        ],
        "total": 1
    }
}
```

</details>

## 查询共同关注明细

<img src="../../assets/img/relation.svg" width="100" height="100" />

> https://api.bilibili.com/x/relation/same/followings

*请求方式：GET*

认证方式：Cookie(SESSDATA)或APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注     |
| ---------- | ---- | ------------ | ----------- | -------- |
| access_key | str  | APP登录Token | APP方式必要 |          |
| vmid       | num  | 目标用户mid  | 必要        |          |
| ps         | num  | 每页项数     | 非必要      | 默认为50 |
| pn         | num  | 页码         | 非必要      | 默认为1  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

data 对象：

| 字段       | 类型  | 内容     | 备注         |
| ---------- | ----- | -------- | ------------ |
| list       | array | 明细列表 |              |
| re_version | num   | ？？？   | 作用尚不明确 |
| total      | num   | 关注总数 |              |

`data`中的`list`数组：

| 项   | 类型 | 内容          | 备注             |
| ---- | ---- | ------------- | ---------------- |
| 0    | obj  | 共同关注1     |                  |
| n    | obj  | 共同关注(n+1) | 按照关注顺序排列 |
| ……   | obj  | ……            | ……               |

数组`list`中的对象：

| 字段            | 类型                                        | 内容         | 备注                                    |
| --------------- | ------------------------------------------- | ------------ | --------------------------------------- |
| mid             | num                                         | 用户mid      |                                         |
| attribute       | num                                         | 关注属性     | 0：未关注<br />2：已关注<br />6：已互粉 |
| mtime           | num                                         | 关注对方时间 | 时间戳<br />互关后刷新                  |
| tag             | 默认分组：null<br />存在至少一个分组：array | 分组id       |                                         |
| special         | num                                         | 特别关注标志 | 0：否<br />1：是                        |
| uname           | str                                         | 用户昵称     |                                         |
| face            | str                                         | 用户头像url  |                                         |
| sign            | str                                         | 用户签名     |                                         |
| official_verify | obj                                         | 认证信息     |                                         |
| vip             | obj                                         | 会员信息     |                                         |

数组`list`中的对象中的`tag`数组：

| 项   | 类型 | 内容                  | 备注 |
| ---- | ---- | --------------------- | ---- |
| 0    | num  | 位于分组1的分组id     |      |
| n    | num  | 位于分组(n+1)的分组id |      |
| ……   | num  | ……                    | ……   |

`list`中的对象中的`official_verify`对象：

| 字段 | 类型 | 内容         | 备注                |
| ---- | ---- | ------------ | ------------------- |
| type | num  | 用户认证类型 | -1：无<br />1：认证 |
| desc | str  | 用户认证信息 | 无为空              |

`list`中的对象中的`vip`对象：

| 字段          | 类型 | 内容         | 备注                                            |
| ------------- | ---- | ------------ | ----------------------------------------------- |
| vipType       | num  | 会员类型     | 0：无<br />1：月度大会员<br />2：年度以上大会员 |
| vipDueDate    | num  | 会员到期时间 | 时间戳 毫秒                                     |
| dueRemark     | str  | 空           | 作用尚不明确                                    |
| accessStatus  | num  | 0            | 作用尚不明确                                    |
| vipStatus     | num  | 大会员状态   | 0：无<br />1：有                                |
| vipStatusWarn | str  | 空           | 作用尚不明确                                    |
| themeType     | num  | 0            | 作用尚不明确                                    |
| label         | obj  | ？？？       | 作用尚不明确                                    |

`vip`中的`label`对象：

| 字段 | 类型 | 内容 | 备注         |
| ---- | ---- | ---- | ------------ |
| path | str  | 空   | 作用尚不明确 |

**示例：**

获取自己与用户`mid=2`的共同关注明细

```shell
curl -G 'https://api.bilibili.com/x/relation/same/followings' \
--data-urlencode 'vmid=2' \
--data-urlencode 'ps=2' \
--data-urlencode 'pn=1' \
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
                "mid": 116683,
                "attribute": 2,
                "mtime": 1564627532,
                "tag": null,
                "special": 0,
                "uname": "=咬人猫=",
                "face": "https://i0.hdslb.com/bfs/face/8fad84a4470f3d894d8f0dc95555ab8f2cb10a83.jpg",
                "sign": "面瘫女仆酱~小粗腿~事业线什么的！！吐槽你就输了！喵~",
                "official_verify": {
                    "type": 0,
                    "desc": "bilibili 2019百大UP主、高能联盟成员"
                },
                "vip": {
                    "vipType": 2,
                    "vipDueDate": 1618934400000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 1,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                }
            },
            {
                "mid": 517717593,
                "attribute": 2,
                "mtime": 1592126052,
                "tag": [
                    207542
                ],
                "special": 0,
                "uname": "上海爱丽丝幻乐团",
                "face": "https://i0.hdslb.com/bfs/face/851a9191cbe93e66304d7577c0f6f83834e52109.jpg",
                "sign": "日本同人社团 上海爱丽丝幻乐团",
                "official_verify": {
                    "type": 0,
                    "desc": "上海爱丽丝幻乐团官方账号"
                },
                "vip": {
                    "vipType": 1,
                    "vipDueDate": 1593792000000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 0,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                }
            }
        ],
        "re_version": 2498273968,
        "total": 38
    }
}
```

</details>

## 查询悄悄关注明细

<img src="../../assets/img/relation.svg" width="100" height="100" />

> https://api.bilibili.com/x/relation/whispers 

*请求方式：GET*

认证方式：Cookie(SESSDATA)或APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注     |
| ---------- | ---- | ------------ | ----------- | -------- |
| access_key | str  | APP登录Token | APP方式必要 |          |
| ps         | num  | 每页项数     | 非必要      | 默认为50 |
| pn         | num  | 页码         | 非必要      | 默认为1  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

data 对象：

| 字段       | 类型  | 内容     | 备注         |
| ---------- | ----- | -------- | ------------ |
| list       | array | 明细列表 |              |
| re_version | num   | ？？？   | 作用尚不明确 |

`data`中的`list`数组：

| 项   | 类型 | 内容      | 备注             |
| ---- | ---- | --------- | ---------------- |
| 0    | obj  | 关注1     |                  |
| n    | obj  | 关注(n+1) | 按照关注顺序排列 |
| ……   | obj  | ……        | ……               |

数组`list`中的对象：

| 字段            | 类型                                        | 内容         | 备注                                    |
| --------------- | ------------------------------------------- | ------------ | --------------------------------------- |
| mid             | num                                         | 用户mid      |                                         |
| attribute       | num                                         | 关注属性     | 0：未关注<br />2：已关注<br />6：已互粉 |
| mtime           | num                                         | 关注对方时间 | 时间戳<br />互关后刷新                  |
| tag             | 默认分组：null<br />存在至少一个分组：array | 分组id       |                                         |
| special         | num                                         | 特别关注标志 | 0：否<br />1：是                        |
| uname           | str                                         | 用户昵称     |                                         |
| face            | str                                         | 用户头像url  |                                         |
| sign            | str                                         | 用户签名     |                                         |
| official_verify | obj                                         | 认证信息     |                                         |
| vip             | obj                                         | 会员信息     |                                         |

数组`list`中的对象中的`tag`数组：

| 项   | 类型 | 内容                  | 备注 |
| ---- | ---- | --------------------- | ---- |
| 0    | num  | 位于分组1的分组id     |      |
| n    | num  | 位于分组(n+1)的分组id |      |
| ……   | num  | ……                    | ……   |

`list`中的对象中的`official_verify`对象：

| 字段 | 类型 | 内容         | 备注                |
| ---- | ---- | ------------ | ------------------- |
| type | num  | 用户认证类型 | -1：无<br />1：认证 |
| desc | str  | 用户认证信息 | 无为空              |

`list`中的对象中的`vip`对象：

| 字段          | 类型 | 内容         | 备注                                            |
| ------------- | ---- | ------------ | ----------------------------------------------- |
| vipType       | num  | 会员类型     | 0：无<br />1：月度大会员<br />2：年度以上大会员 |
| vipDueDate    | num  | 会员到期时间 | 时间戳 毫秒                                     |
| dueRemark     | str  | 空           | 作用尚不明确                                    |
| accessStatus  | num  | 0            | 作用尚不明确                                    |
| vipStatus     | num  | 大会员状态   | 0：无<br />1：有                                |
| vipStatusWarn | str  | 空           | 作用尚不明确                                    |
| themeType     | num  | 0            | 作用尚不明确                                    |
| label         | obj  | ？？？       | 作用尚不明确                                    |

`vip`中的`label`对象：

| 字段 | 类型 | 内容 | 备注         |
| ---- | ---- | ---- | ------------ |
| path | str  | 空   | 作用尚不明确 |

**示例：**

获取悄悄关注明细

```shell
curl -G 'https://api.bilibili.com/x/relation/whispers' \
--data-urlencode 'ps=2' \
--data-urlencode 'pn=1' \
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
                "mid": 178429408,
                "attribute": 1,
                "mtime": 1605972105,
                "tag": null,
                "special": 0,
                "uname": "老弟一号",
                "face": "https://i2.hdslb.com/bfs/face/21426275f3d3149b96b88783275205ba574c09e3.jpg",
                "sign": "萌新硬件玩家，前垃圾佬～(◦˙▽˙◦某宝店 老弟一号 粉丝群679540094商务合作V13869651328",
                "official_verify": {
                    "type": 0,
                    "desc": "知识领域优质UP主"
                },
                "vip": {
                    "vipType": 2,
                    "vipDueDate": 1632499200000,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 1,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                }
            }
        ],
        "re_version": 2137574562
    }
}
```

</details>

## 查询互相关注明细

<img src="../../assets/img/relation.svg" width="100" height="100" />

> https://api.bilibili.com/x/relation/friends

*请求方式：GET*

认证方式：Cookie(SESSDATA)或APP

查询与自己互关的用户明细，可看全部

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注     |
| ---------- | ---- | ------------ | ----------- | -------- |
| access_key | str  | APP登录Token | APP方式必要 |          |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

data 对象：

| 字段       | 类型  | 内容     | 备注         |
| ---------- | ----- | -------- | ------------ |
| list       | array | 明细列表 |              |
| re_version | num   | ？？？   | 作用尚不明确 |

`data`中的`list`数组：

| 项   | 类型 | 内容      | 备注             |
| ---- | ---- | --------- | ---------------- |
| 0    | obj  | 互关1     |                  |
| n    | obj  | 互关(n+1) | 按照关注顺序排列 |
| ……   | obj  | ……        | ……               |

数组`list`中的对象：

| 字段            | 类型                                        | 内容         | 备注                                    |
| --------------- | ------------------------------------------- | ------------ | --------------------------------------- |
| mid             | num                                         | 用户mid      |                                         |
| attribute       | num                                         | 关注属性     | 6：已互粉                               |
| mtime           | num                                         | 关注对方时间 | 时间戳<br />互关后刷新                  |
| tag             | 默认分组：null<br />存在至少一个分组：array | 分组id       |                                         |
| special         | num                                         | 特别关注标志 | 0：否<br />1：是                        |
| uname           | str                                         | 用户昵称     |                                         |
| face            | str                                         | 用户头像url  |                                         |
| sign            | str                                         | 用户签名     |                                         |
| official_verify | obj                                         | 认证信息     |                                         |
| vip             | obj                                         | 会员信息     |                                         |

数组`list`中的对象中的`tag`数组：

| 项   | 类型 | 内容                  | 备注 |
| ---- | ---- | --------------------- | ---- |
| 0    | num  | 位于分组1的分组id     |      |
| n    | num  | 位于分组(n+1)的分组id |      |
| ……   | num  | ……                    | ……   |

`list`中的对象中的`official_verify`对象：

| 字段 | 类型 | 内容         | 备注                |
| ---- | ---- | ------------ | ------------------- |
| type | num  | 用户认证类型 | -1：无<br />1：认证 |
| desc | str  | 用户认证信息 | 无为空              |

`list`中的对象中的`vip`对象：

| 字段          | 类型 | 内容         | 备注                                            |
| ------------- | ---- | ------------ | ----------------------------------------------- |
| vipType       | num  | 会员类型     | 0：无<br />1：月度大会员<br />2：年度以上大会员 |
| vipDueDate    | num  | 会员到期时间 | 时间戳 毫秒                                     |
| dueRemark     | str  | 空           | 作用尚不明确                                    |
| accessStatus  | num  | 0            | 作用尚不明确                                    |
| vipStatus     | num  | 大会员状态   | 0：无<br />1：有                                |
| vipStatusWarn | str  | 空           | 作用尚不明确                                    |
| themeType     | num  | 0            | 作用尚不明确                                    |
| label         | obj  | ？？？       | 作用尚不明确                                    |

`vip`中的`label`对象：

| 字段 | 类型 | 内容 | 备注         |
| ---- | ---- | ---- | ------------ |
| path | str  | 空   | 作用尚不明确 |

**示例：**

获取互相关注明细

```shell
curl -G 'https://api.bilibili.com/x/relation/friends' \
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
              "mid": 293793435,
              "attribute": 6,
              "mtime": 1583817598,
              "tag": [-10],
              "special": 1,
              "uname": "社会易姐QwQ",
              "face": "https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg",
              "sign": "BAC项目负责人 | 带砖技术宅 | MC 编程 电子 | 车万众\u0026术术人 | 粉丝群1136462265 博客shakaianee.top",
              "face_nft": 0,
              "official_verify": {
                "type": -1,
                "desc": ""
              },
              "vip": {
                "vipType": 2,
                "vipDueDate": 1675872000000,
                "dueRemark": "",
                "accessStatus" :0,
                "vipStatus": 1,
                "vipStatusWarn": "",
                "themeType": 0,
                "label": {
                  "path": "",
                  "text": "年度大会员",
                  "label_theme": "annual_vip",
                  "text_color": "#FFFFFF",
                  "bg_style": 1,
                  "bg_color": "#FB7299",
                  "border_color": ""
                },
                "avatar_subscript": 1,
                "nickname_color": "#FB7299",
                "avatar_subscript_url": ""
              },
              "nft_icon": "",
              "rec_reason": "",
              "track_id": ""
            }
        ],
        "re_version": 0
    }
}
```

</details>

## 查询黑名单明细

> https://api.bilibili.com/x/relation/blacks 

*请求方式：GET*

认证方式：Cookie(SESSDATA)或APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注     |
| ---------- | ---- | ------------ | ----------- | -------- |
| access_key | str  | APP登录Token | APP方式必要 |          |
| ps         | num  | 每页项数     | 非必要      | 默认为50 |
| pn         | num  | 页码         | 非必要      | 默认为1  |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

data 对象：

| 字段       | 类型  | 内容         | 备注         |
| ---------- | ----- | ------------ | ------------ |
| list       | array | 明细列表     |              |
| re_version | num   | ？？？       | 作用尚不明确 |
| total      | num   | 黑名单总计数 |              |

`data`中的`list`数组：

| 项   | 类型 | 内容      | 备注             |
| ---- | ---- | --------- | ---------------- |
| 0    | obj  | 关注1     |                  |
| n    | obj  | 关注(n+1) | 按照关注顺序排列 |
| ……   | obj  | ……        | ……               |

数组`list`中的对象：

| 字段            | 类型 | 内容         | 备注                   |
| --------------- | ---- | ------------ | ---------------------- |
| mid             | num  | 用户mid      |                        |
| attribute       | num  | 关注属性     | 128：已拉黑            |
| mtime           | num  | 关注对方时间 | 时间戳<br />互关后刷新 |
| tag             | null |              |                        |
| special         | num  | 0            |                        |
| uname           | str  | 用户昵称     |                        |
| face            | str  | 用户头像url  |                        |
| sign            | str  | 用户签名     |                        |
| official_verify | obj  | 认证信息     |                        |
| vip             | obj  | 会员信息     |                        |

`list`中的对象中的`official_verify`对象：

| 字段 | 类型 | 内容         | 备注                |
| ---- | ---- | ------------ | ------------------- |
| type | num  | 用户认证类型 | -1：无<br />1：认证 |
| desc | str  | 用户认证信息 | 无为空              |

`list`中的对象中的`vip`对象：

| 字段          | 类型 | 内容         | 备注                                            |
| ------------- | ---- | ------------ | ----------------------------------------------- |
| vipType       | num  | 会员类型     | 0：无<br />1：月度大会员<br />2：年度以上大会员 |
| vipDueDate    | num  | 会员到期时间 | 时间戳 毫秒                                     |
| dueRemark     | str  | 空           | 作用尚不明确                                    |
| accessStatus  | num  | 0            | 作用尚不明确                                    |
| vipStatus     | num  | 大会员状态   | 0：无<br />1：有                                |
| vipStatusWarn | str  | 空           | 作用尚不明确                                    |
| themeType     | num  | 0            | 作用尚不明确                                    |
| label         | obj  | ？？？       | 作用尚不明确                                    |

`vip`中的`label`对象：

| 字段 | 类型 | 内容 | 备注         |
| ---- | ---- | ---- | ------------ |
| path | str  | 空   | 作用尚不明确 |

**示例：**

获取黑名单明细

```shell
curl -G 'https://api.bilibili.com/x/relation/blacks' \
--data-urlencode 'ps=2' \
--data-urlencode 'pn=1' \
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
                "mid": 22179720,
                "attribute": 128,
                "mtime": 1603032789,
                "tag": null,
                "special": 0,
                "uname": "咩2016",
                "face": "https://i0.hdslb.com/bfs/face/41fe435a7e62eae605a5908652f32f3afff2ae74.jpg",
                "sign": "",
                "official_verify": {
                    "type": 0,
                    "desc": ""
                },
                "vip": {
                    "vipType": 0,
                    "vipDueDate": 0,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 0,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                }
            },
            {
                "mid": 16174624,
                "attribute": 128,
                "mtime": 1603026420,
                "tag": null,
                "special": 0,
                "uname": "其实死亡没有那么痛",
                "face": "https://i2.hdslb.com/bfs/face/79257f5a2e7194a71337ccca5927afba7706d316.jpg",
                "sign": "等我，我马上就来",
                "official_verify": {
                    "type": 0,
                    "desc": ""
                },
                "vip": {
                    "vipType": 0,
                    "vipDueDate": 0,
                    "dueRemark": "",
                    "accessStatus": 0,
                    "vipStatus": 0,
                    "vipStatusWarn": "",
                    "themeType": 0,
                    "label": {
                        "path": ""
                    }
                }
            }
        ],
        "re_version": 897205356,
        "total": 2
    }
}
```

</details>

## 操作用户关系

<img src="../../assets/img/follow.svg" width="200" height="100" />

> https://api.bilibili.com/x/relation/modify

*请求方式：POST*

认证方式：Cookie(SESSDATA)或APP

**正文参数( application/x-www-form-urlencoded )：**

| 参数名     | 类型 | 内容                   | 必要性         | 备注                                                     |
| ---------- | ---- | ---------------------- | -------------- | -------------------------------------------------------- |
| access_key | str  | APP登录Token           | APP方式必要    |                                                          |
| fid        | num  | 目标用户mid            | 必要           |                                                          |
| act        | num  | 操作代码               | 必要           | **操作代码见下表**                                       |
| re_src     | num  | 关注来源代码           | 必要           | 空间：11<br />视频：14<br />文章：115<br />活动页面：222 |
| csrf       | str  | CSRF Token(位于cookie) | Cookie方式必要 |                                                          |

操作代码`act`：

| 代码 | 含义         |
| ---- | ------------ |
| 1    | 关注         |
| 2    | 取关         |
| 3    | 悄悄关注     |
| 4    | 取消悄悄关注 |
| 5    | 拉黑         |
| 6    | 取消拉黑     |
| 7    | 踢出粉丝     |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />22001：不能对自己进行此操作<br />22003：用户位于黑名单 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

关注`mid=14082`的用户

```shell
curl 'https://api.bilibili.com/x/relation/modify' \
--data-urlencode 'fid=14082' \
--data-urlencode 'act=1' \
--data-urlencode 're_src=11' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1
}
```

</details>

## 批量操作用户关系

> https://api.bilibili.com/x/relation/batch/modify

*请求方式：POST*

认证方式：Cookie(SESSDATA)或APP

此接口只支持关注和拉黑操作

**正文参数( application/x-www-form-urlencoded )：**

| 参数名     | 类型 | 内容                   | 必要性         | 备注                                           |
| ---------- | ---- | ---------------------- | -------------- | ---------------------------------------------- |
| access_key | str  | APP登录Token           | APP方式必要    |                                                |
| fids       | nums | 目标用户mid            | 必要           | 每个之间用`,`间隔                              |
| act        | num  | 操作代码               | 必要           | 同上<br />仅可为1或5，故只能进行批量关注和拉黑 |
| re_src     | num  | 关注来源代码           | 必要           | 同上                                           |
| csrf       | str  | CSRF Token(位于cookie) | Cookie方式必要 |                                                |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />22003：用户位于黑名单 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 数据本体 |                                                              |

`data`对象：

| 字段        | 类型  | 内容          | 备注 |
| ----------- | ----- | ------------- | ---- |
| failed_fids | array | 操作失败的mid |      |

`data`中的`failed_fids`数组：

| 项   | 类型 | 内容               | 备注 |
| ---- | ---- | ------------------ | ---- |
| 0    | num  | 操作失败的mid 1    |      |
| n    | num  | 操作失败的mid(n+1) |      |
| ……   | num  | ……                 | ……   |

**示例：**

批量关注`mid=1,2,3,4,5`的用户

```shell
curl 'https://api.bilibili.com/x/relation/batch/modify' \
--data-urlencode 'fid=1,2,3,4,5' \
--data-urlencode 'act=1' \
--data-urlencode 're_src=11' \
--data-urlencode 'csrf=xxx' \
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
        "failed_fids": []
    }
}
```

</details>

## 查询用户与自己关系_仅查关注

> https://api.bilibili.com/x/relation

*请求方式：GET*

认证方式：Cookie(SESSDATA)或APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注 |
| ---------- | ---- | ------------ | ----------- | ---- |
| access_key | str  | APP登录Token | APP方式必要 |      |
| fid        | num  | 目标用户mid  | 必要        |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段      | 类型                                     | 内容         | 备注                                    |
| --------- | ---------------------------------------- | ------------ | --------------------------------------- |
| mid       | num                                      | 目标用户mid  |                                         |
| attribute | num                                      | 关注属性     | 0：未关注<br />2：已关注<br />6：已互粉<br />128：拉黑 |
| mtime     | num                                      | 关注对方时间 | 时间戳<br />未关注为0                   |
| tag       | null默认分组<br />array存在至少一个分组 | 分组id       |                                         |
| special   | num                                      | 特别关注标志 | 0：否<br />1：是                        |

`tag`数组：

| 项   | 类型 | 内容                    | 备注 |
| ---- | ---- | ----------------------- | ---- |
| 0    | num  | 位于分组1的分组       |      |
| n    | num  | 位于分组(n+1)的分组 |      |
| ……   | num  | ……                      | ……   |

**示例：**

可得对于`mid=258150656`的用户，在`2018/10/28 0:51:41`时关注，且设为特别关注，并位于为`-10`分组中

```shell
curl -G 'https://api.bilibili.com/x/relation' \
--data-urlencode 'fid=258150656' \
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
		"mid": 258150656,
		"attribute": 2,
		"mtime": 1540659101,
		"tag": [-10],
		"special": 1
	}
}
```

</details>

## 查询用户与自己关系_互相

> https://api.bilibili.com/x/space/acc/relation

*请求方式：GET*

认证方式：Cookie(SESSDATA)或APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注 |
| ---------- | ---- | ------------ | ----------- | ---- |
| access_key | str  | APP登录Token | APP方式必要 |      |
| mid        | num  | 目标用户mid  | 必要        |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段        | 类型 | 内容                     | 备注 |
| ----------- | ---- | ------------------------ | ---- |
| relation    | obj  | 目标用户对于本用户的属性 |      |
| be_relation | obj  | 本用户对于目标用户的属性 |      |

`data`中的`relation`对象：

| 字段      | 类型                                     | 内容         | 备注           |
| --------- | ---------------------------------------- | ------------ | -------------- |
| mid       | num                                      | 对方用户mid  |                |
| attribute | num                                      | 关注属性 | 0：未关注<br />1：悄悄关注<br />2：已关注<br />6：已互粉<br />128：拉黑 |
| mtime     | num                                      | 关注对方时间 | 互关后刷新时间 |
| tag       | null默认分组<br />array存在至少一个分组 | 分组id |                |
| special   | num                                      | 特别关注标志 | 0：否<br />1：是 |

`data`中的`be_relation`对象：

| 字段      | 类型                                     | 内容         | 备注           |
| --------- | ---------------------------------------- | ------------ | -------------- |
| mid       | num                                      | 自己的mid |                |
| attribute | num                                      | 关注属性 | 0：未关注<br />1：悄悄关注<br />2：已关注<br />6：已互粉<br />128：拉黑 |
| mtime     | num                                      | 成为粉丝时间 | 互关后刷新时间 |
| tag       | null默认分组<br />array存在至少一个分组 | 分组id |                |
| special   | num                                      | 特别关注标志 | 0：否<br />1：是 |

`be_relation`与`relation`中的`tag`数组：

| 项   | 类型 | 内容                  | 备注 |
| ---- | ---- | --------------------- | ---- |
| 0    | num  | 位于分组1的分组id     |      |
| n    | num  | 位于分组(n+1)的分组id |      |
| ……   | num  | ……                    | ……   |

**示例：**

可得对于`mid=15858903`的用户，在`2019/1/24 14:24:19`时关注了对方，且互相关注，自己将对方特别关注，并同时位于为`-10`和`194110`的分组中，对方也将自己设为特别关注，并同时位于为`-10`和`56502`的分组中(虽然我看不到)

```shell
curl -G 'https://api.bilibili.com/x/space/acc/relation' \
--data-urlencode 'mid=15858903' \
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
		"relation": {
			"mid": 15858903,
			"attribute": 6,
			"mtime": 1548311059,
			"tag": [-10, 194110],
			"special": 1,
			"is_followed": false
		},
		"be_relation": {
			"mid": 293793435,
			"attribute": 6,
			"mtime": 1548311059,
			"tag": [56502, -10],
			"special": 1,
			"is_followed": false
		}
	}
}
```

</details>

## 批量查询用户与自己关系

> https://api.bilibili.com/x/relation/relations

*请求方式：GET*

认证方式：Cookie(SESSDATA)或APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注                |
| ---------- | ---- | ------------ | ----------- | ------------------- |
| access_key | str  | APP登录Token | APP方式必要 |                     |
| fids       | nums | 目标用户mid  | 必要        | 每个之间用`,`间隔 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段      | 类型 | 内容       | 备注 |
| --------- | ---- | ---------- | ---- |
| {用户mid} | obj  | 关注的用户 | 下同 |
| ……        | obj  | ……         |      |

`{用户mid}`对象：

| 字段      | 类型                                    | 内容         | 备注                                                         |
| --------- | --------------------------------------- | ------------ | ------------------------------------------------------------ |
| mid       | num                                     | 目标用户mid  |                                                              |
| attribute | num                                     | 关注属性     | 0：未关注<br />1：悄悄关注<br />2：已关注<br />6：已互粉<br />128：拉黑 |
| mtime     | num                                     | 关注对方时间 | 时间戳<br />未关注为0                                        |
| tag       | null默认分组<br />array存在至少一个分组 | 分组id       |                                                              |
| special   | num                                     | 特别关注标志 | 0：否<br />1：是                                             |

`tag`数组：

| 项   | 类型 | 内容                  | 备注 |
| ---- | ---- | --------------------- | ---- |
| 0    | num  | 位于分组1的分组id     |      |
| n    | num  | 位于分组(n+1)的分组id |      |
| ……   | num  | ……                    | ……   |

**示例：**

批量查询`mid=1,2,3,4,5`的关系

```shell
curl -G 'https://api.bilibili.com/x/relation/relations' \
--data-urlencode 'fid=258150656' \
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
        "1": {
            "mid": 1,
            "attribute": 2,
            "mtime": 1601654227,
            "tag": null,
            "special": 0
        },
        "2": {
            "mid": 2,
            "attribute": 2,
            "mtime": 1601654225,
            "tag": null,
            "special": 0
        }
    }
}
```

</details>

## 关注分组相关

### 查询关注分组列表

> https://api.bilibili.com/x/relation/tags

*请求方式：GET*

认证方式：Cookie(SESSDATA)或APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注 |
| ---------- | ---- | ------------ | ----------- | ---- |
| access_key | str  | APP登录Token | APP方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                          |
| ------- | ------ | -------- | ----------------------------- |
| code    | num    | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str    | 错误信息 | 默认为0                       |
| ttl     | num    | 1        |                   |
| data    | array | 分组列表 |                               |

`data`数组：

| 项   | 类型 | 内容         | 备注 |
| ---- | ---- | ------------ | ---- |
| 0    | obj  | 特别关注分组 |      |
| 1    | obj  | 默认分组     |      |
| n    | obj  | 其他分组     |      |
| ……   | num  | ……           | ……   |

数组`data`中的对象：

| 字段  | 类型 | 内容       | 备注                               |
| ----- | ---- | ---------- | ---------------------------------- |
| tagid | num  | 分组id     | 特别关注恒为-10<br />默认分组恒为0 |
| name  | str  | 分组名称   |                                    |
| count | num  | 分组成员数 |                                    |

**示例：**

查询所有的分组的名字以及id

```shell
curl 'https://api.bilibili.com/x/relation/tags' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": [{
		"tagid": -10,
		"name": "特别关注",
		"count": 16
	}, {
		"tagid": 0,
		"name": "默认分组",
		"count": 536
	},{
		"tagid": 194111,
		"name": "我的同学",
		"count": 16
	},
	…………
	]
}
```

</details>

### 查询关注分组明细

> https://api.bilibili.com/x/relation/tag

*请求方式：GET*

认证方式：Cookie(SESSDATA)或APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注                                                    |
| ---------- | ---- | ------------ | ----------- | ------------------------------------------------------- |
| access_key | str  | APP登录Token | APP方式必要 |                                                         |
| tagid      | num  | 分组id       | 必要        | 特别关注恒为-10<br />默认分组恒为0                      |
| order_type | str  | 排序方式     | 非必要      | 按照关注顺序排列：留空<br />按照最常访问排列：attention |
| ps         | num  | 每页项数     | 非必要      | 默认为50                                                |
| pn         | num  | 页数         | 非必要      | 默认为1                                                 |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                                                         |
| ------- | ------ | -------- | ------------------------------------------------------------ |
| code    | num    | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误<br />22104：该分组不存在 |
| message | str    | 错误信息 | 默认为0                                                      |
| ttl     | num    | 1        |                                                  |
| data    | array | 成员列表 |                                                              |

`data`数组：

| 项   | 类型 | 内容          | 备注             |
| ---- | ---- | ------------- | ---------------- |
| 0    | obj  | 成员信息1     |                  |
| n    | obj  | 成员信息(n+1) | 按照添加顺序排序 |
| ……   | obj  | ……            | ……               |

数组`data`中的对象：

| 字段            | 类型 | 内容        | 备注 |
| --------------- | ---- | ----------- | ---- |
| mid             | num  | 用户mid     |      |
| uname           | str  | 用户昵称    |      |
| face            | str  | 用户头像url |      |
| sign            | str  | 用户签名    |      |
| official_verify | obj  | 认证信息    |      |
| vip             | obj  | 会员信息    |      |

数组`data`中的对象中的`official_verify`对象：

| 字段 | 类型 | 内容         | 备注                |
| ---- | ---- | ------------ | ------------------- |
| type | num  | 用户认证类型 | -1：无<br />1：认证 |
| desc | str  | 用户认证信息 | 无为空              |

数组`data`中的对象中的`vip`对象：

| 字段          | 类型 | 内容         | 备注                                |
| ------------- | ---- | ------------ | ----------------------------------- |
| vipType       | num  | 大会员类型   | 0：无<br />1：月会员<br />2：年会员 |
| vipDueDate    | num  | 会员到期时间 | 毫秒 时间戳                         |
| dueRemark     | str  | 空           | 作用尚不明确                        |
| accessStatus  | num  | 0            | 作用尚不明确                        |
| vipStatus     | num  | 大会员状态   | 0无<br />1有                        |
| vipStatusWarn | str  | 空           | 作用尚不明确                        |
| themeType     | num  | 0            | 作用尚不明确                        |
| label         | obj  | ？？？       | 作用尚不明确                        |

数组`data`中的对象中的`label`对象：

| 字段 | 类型 | 内容 | 备注         |
| ---- | ---- | ---- | ------------ |
| path | str  | 空   | 作用尚不明确 |

**示例：**

以每页2项的方式获取了id为`207542`分组的第1页的粉丝明细，按照关注顺序

```shell
curl -G 'https://api.bilibili.com/x/relation/tag' \
--data-urlencode 'tagid=207542' \
--data-urlencode 'order_type=' \
--data-urlencode 'ps=2' \
--data-urlencode 'pn=1' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": [{
		"mid": 420831218,
		"uname": "支付宝Alipay",
		"face": "https://i2.hdslb.com/bfs/face/aaf18aeb2d9822e28a590bd8d878572ca8c59e04.jpg",
		"sign": "阿支来了，关注点赞转发投币四连走起！",
		"official_verify": {
			"type": 1,
			"desc": "支付宝官方账号"
		},
		"vip": {
			"vipType": 1,
			"vipDueDate": 1585065600000,
			"dueRemark": "",
			"accessStatus": 0,
			"vipStatus": 1,
			"vipStatusWarn": "",
			"themeType": 0,
			"label": {
				"path": ""
			}
		}
	}, {
		"mid": 125086406,
		"uname": "MSI微星科技",
		"face": "https://i1.hdslb.com/bfs/face/a844760e4e491677615b39399bc761e74c579bb4.jpg",
		"sign": "你好，这里是微星显卡官方！专注显卡三十年，欢迎私信咨询或提问MSI",
		"official_verify": {
			"type": 1,
			"desc": "微星科技官方账号"
		},
		"vip": {
			"vipType": 1,
			"vipDueDate": 1540656000000,
			"dueRemark": "",
			"accessStatus": 0,
			"vipStatus": 0,
			"vipStatusWarn": "",
			"themeType": 0,
			"label": {
				"path": ""
			}
		}
	}]
}
```

</details>

### 查询目标用户所在的分组 

> https://api.bilibili.com/x/relation/tag/user

*请求方式：GET*

认证方式：Cookie(SESSDATA)或APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注 |
| ---------- | ---- | ------------ | ----------- | ---- |
| access_key | str  | APP登录Token | APP方式必要 |      |
| fid        | num  | 目标用户mid  | 必要        |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        |                                                   |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段                | 类型 | 内容      | 备注 |
| ------------------- | ---- | --------- | ---- |
| {加入的分组id  1} | str  | 分组1名称 |      |
| {加入的分组id  n} | str  | 分组n名称 |      |
| ……                  | str  | ……        |      |

**示例：**

查询用户`mid=319214221`存在的所有分组和名称

```shell
curl -G 'https://api.bilibili.com/x/relation/tag/user' \
--data-urlencode 'fid=319214221' \
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
		"-10": "特别关注",
		"194111": "我的同学"
	}
}
```

</details>

### 查询所有特别关注的mid

> https://api.bilibili.com/x/relation/tag/special

*请求方式：GET*

认证方式：Cookie(SESSDATA)或APP

**url参数：**

| 参数名     | 类型 | 内容         | 必要性      | 备注 |
| ---------- | ---- | ------------ | ----------- | ---- |
| access_key | str  | APP登录Token | APP方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型  | 内容     | 备注                          |
| ------- | ----- | -------- | ----------------------------- |
| code    | num   | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str   | 错误信息 | 默认为0                       |
| ttl     | num   | 1        |                               |
| data    | array | 成员列表 |                               |

`data`数组：

| 项   | 类型 | 内容         | 备注 |
| ---- | ---- | ------------ | ---- |
| 0    | num  | 成员1mid     |      |
| n    | num  | 成员(n+1)mid |      |
| ……   | num  | ……           | ……   |

**示例：**

```shell
curl 'https://api.bilibili.com/x/relation/tag/special' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": [
        500716647,
        32832243,
        53456,
        25944552,
        301839556,
        427494870,
        319214221,
        31949159,
        382666849,
        258318451,
        15858903,
        54992199,
        3379951,
        392279807,
        23215368,
        258150656,
        20165629,
        22179720
    ]
}
```

</details>

### 创建分组

<img src="../../assets/img/add.svg" width="100" height="100" />

> https://api.bilibili.com/x/relation/tag/create

*请求方式：POST*

认证方式：Cookie(SESSDATA)或APP

**正文参数( application/x-www-form-urlencoded )：**

| 参数名     | 类型 | 内容                   | 必要性         | 备注       |
| ---------- | ---- | ---------------------- | -------------- | ---------- |
| access_key | str  | APP登录Token           | APP方式必要    |            |
| tag        | str  | 分组名                 | 必要           | 最长16字符 |
| csrf       | str  | CSRF Token(位于cookie) | Cookie方式必要 |            |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-111：csrf校验失败<br />-101：账号未登录<br />-400：请求错误<br />22106：该分组已经存在<br />22103：分组名过长 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段  | 类型 | 内容           | 备注 |
| ----- | ---- | -------------- | ---- |
| tagid | num  | 创建的分组的id |      |

**示例：**

创建了名为`测试`的分组，得到id为`216677`

```shell
curl 'https://api.bilibili.com/x/relation/tag/create' \
--data-urlencode 'tag=测试' \
--data-urlencode 'csrf=xxx' \
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
		"tagid": 216677
	}
}
```

</details>

### 重命名分组

> https://api.bilibili.com/x/relation/tag/update

*请求方式：POST*

认证方式：Cookie(SESSDATA)或APP

**正文参数( application/x-www-form-urlencoded )：**

| 参数名     | 类型 | 内容                   | 必要性         | 备注       |
| ---------- | ---- | ---------------------- | -------------- | ---------- |
| access_key | str  | APP登录Token           | APP方式必要    |            |
| tagid      | num  | 分组id                 | 必要           |            |
| name       | str  | 新名称                 | 必要           | 最长16字符 |
| csrf       | str  | CSRF Token(位于cookie) | Cookie方式必要 |            |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-111：csrf校验失败<br />-101：账号未登录<br />-400：请求错误<br />22103：分组名过长<br />22104：该分组不存在 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

把id为`194112`的分组更名为`膜法师`

```shell
curl 'https://api.bilibili.com/x/relation/tag/update' \
--data-urlencode 'tagid=194112' \
--data-urlencode 'name=膜法师' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1
}
```

</details>

### 删除分组

<img src="../../assets/img/delete.svg" width="100" height="100" />

> https://api.bilibili.com/x/relation/tag/del

*请求方式：POST*

认证方式：Cookie(SESSDATA)或APP

**正文参数( application/x-www-form-urlencoded )：**

| 参数名     | 类型 | 内容                   | 必要性         | 备注 |
| ---------- | ---- | ---------------------- | -------------- | ---- |
| access_key | str  | APP登录Token           | APP方式必要    |      |
| tagid      | num  | 分组id                 | 必要           |      |
| csrf       | str  | CSRF Token(位于cookie) | Cookie方式必要 |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-111：csrf校验失败<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

示例：

删除分组id为`216699`的分组

```shell
curl 'https://api.bilibili.com/x/relation/tag/del' \
--data-urlencode 'tagid=216699' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1
}
```

</details>

### 修改分组成员

<img src="../../assets/img/add.svg" width="100" height="100" />

> https://api.bilibili.com/x/relation/tags/addUsers

*请求方式：POST*

认证方式：Cookie(SESSDATA)或APP

如需删除分组中的成员，请将`tagids`设为0，即移动至默认分组，而不是取关

**正文参数( application/x-www-form-urlencoded )：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注                |
| ---------- | ---- | ------------------------ | -------------- | ------------------- |
| access_key | str  | APP登录Token             | APP方式必要    |                     |
| fids       | nums | 目标用户mid              | 必要           | 每个之间用`,`间隔 |
| tagids     | nums | 分组id                   | 必要           | 每个之间用`,`间隔 |
| csrf       | str  | CSRF Token(位于cookie) | Cookie方式必要 |                     |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-111：csrf校验失败<br />-101：账号未登录<br />-400：请求错误<br />22104：无权限<br />22105：未关注 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

把关注用户`mid=205631797`同时添加分组关系到id为`-10`和`207542`的分组中

```shell
curl 'https://api.bilibili.com/x/relation/tags/addUsers' \
--data-urlencode 'fids=205631797' \
--data-urlencode 'tagids=-10,207542' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1
}
```

</details>

### 复制关注到分组

> https://api.bilibili.com/x/relation/tags/copyUsers 

*请求方式：POST*

认证方式：Cookie(SESSDATA)或APP

**正文参数( application/x-www-form-urlencoded )：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注                |
| ---------- | ---- | ------------------------ | -------------- | ------------------- |
| access_key | str  | APP登录Token             | APP方式必要    |                     |
| fids       | nums | 待复制的用户mid          | 必要           | 每个之间用`,`间隔 |
| tagids     | nums | 目标分组id               | 必要           | 每个之间用`,`间隔 |
| csrf       | str  | CSRF Token(位于cookie) | Cookie方式必要 |                     |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-111：csrf校验失败<br />-101：账号未登录<br />-400：请求错误<br />22104：无权限<br />22105：未关注 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

把关注用户`mid=4856007`和`mid=326499679`同时复制到为`231305`的分组id中

```shell
curl 'https://api.bilibili.com/x/relation/tags/copyUsers' \
--data-urlencode 'fids=4856007,326499679' \
--data-urlencode 'tagids=231305' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code":0,
    "message":"0",
    "ttl":1
}
```

</details>

### 移动关注到分组

> https://api.bilibili.com/x/relation/tags/moveUsers 

*请求方式：POST*

认证方式：Cookie(SESSDATA)或APP

**正文参数( application/x-www-form-urlencoded )：**

| 参数名       | 类型 | 内容                     | 必要性         | 备注                |
| ------------ | ---- | ------------------------ | -------------- | ------------------- |
| access_key   | str  | APP登录Token             | APP方式必要    |                     |
| beforeTagids | nums | 原分组id                 | 必要           | 每个之间用`,`间隔 |
| afterTagids  | nums | 新分组id                 | 必要           | 每个之间用`,`间隔 |
| fids         | nums | 待移动的用户mid          | 必要           | 每个之间用`,`间隔 |
| csrf         | str  | CSRF Token(位于cookie) | Cookie方式必要 |                     |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-111：csrf校验失败<br />-101：账号未登录<br />-400：请求错误<br />22104：无权限<br />22105：未关注 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |

**示例：**

把关注用户`mid=321173469`和`mid=327086920`同时从id为`207542`的分组移动到为`231305`的分组中

```shell
curl 'https://api.bilibili.com/x/relation/tags/moveUsers' \
--data-urlencode 'beforeTagids=207542' \
--data-urlencode 'afterTagids=23130' \
--data-urlencode 'fids=321173469,327086920' \
--data-urlencode 'csrf=xxx' \
-b 'SESSDATA=xxx'
```

<details>
<summary>查看响应示例：</summary>

```json
{
    "code":0,
    "message":"0",
    "ttl":1
}
```

</details>
