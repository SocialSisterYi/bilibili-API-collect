# 用户基本信息

<img src="/imgs/akari.jpg" width="200" height="200"/>

## 用户详细信息1 (用于空间)
> http://api.bilibili.com/x/space/acc/info

*方式:GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        | **作用尚不明确**            |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段        | 类型 | 内容             | 备注                                                         |
| ----------- | ---- | ---------------- | ------------------------------------------------------------ |
| mid         | num  | UID              |                                                              |
| name        | str  | 昵称             |                                                              |
| sex         | str  | 性别             | 男 女 保密                                                   |
| face        | str  | 头像链接         |                                                              |
| sign        | str  | 签名             |                                                              |
| rank        | num  | 10000            | **作用尚不明确**                                             |
| level       | num  | 当前等级         | 0-6级                                                        |
| jointime    | num  | 0                | **作用尚不明确**                                             |
| moral       | num  | 0                | **作用尚不明确**                                             |
| silence     | num  | 封禁状态         | 0：正常<br />1：被封                                         |
| birthday    | str  | 生日             | MM-DD                                                        |
| coins       | num  | 硬币数           | 需要登录(SESSDATA) <br />只能查看自己的<br />默认为0         |
| fans_badge  | bool | 是否具有粉丝勋章 | false：无<br />true：有                                      |
| official    | obj  | 认证信息         |                                                              |
| vip         | obj  | 大会员信息       |                                                              |
| pendant     | obj  | 头像框信息       |                                                              |
| nameplate   | obj  | 勋章信息         |                                                              |
| is_followed | bool | 是否关注此用户   | true：已关注<br />false：未关注<br />需要登录(SESSDATA) <br />未登录恒为false |
| top_photo   | str  | 主页头图链接     |                                                              |
| theme       | obj  | 空               | **作用尚不明确**                                             |
| sys_notice  | obj  | 系统通知         | 无内容则为空                                                 |

`data`中的`official`对象：

| 字段  | 类型 | 内容     | 备注                                            |
| ----- | ---- | -------- | ----------------------------------------------- |
| role  | num  | 认证类型 | 0：无<br />1 2：个人认证<br />3 4 5 6：机构认证 |
| title | str  | 认证信息 | 无为空                                          |
| desc  | str  | 认证备注 | 无为空                                          |
| type  | num  | 是否认证 | -1：无<br />0：认证                             |

`data`中的`vip`对象：

| 字段       | 类型 | 内容       | 备注                                |
| ---------- | ---- | ---------- | ----------------------------------- |
| type       | num  | 大会员类型 | 0：无<br />1：月会员<br />2：年会员 |
| status     | num  | 大会员状态 | 0：无<br />1：有                    |
| theme_type | num  | 0          | 作用尚不明确                        |

`data`中的`pendant`对象：

| 字段   | 类型 | 内容          | 备注                 |
| ------ | ---- | ------------- | -------------------- |
| pid    | num  | 头像框id      | **详细说明有待补充** |
| name   | str  | 头像框名称    |                      |
| image  | str  | 头像框图片url |                      |
| expire | num  | 0             | **作用尚不明确**     |

`data`中的`nameplate`对象：

| 字段        | 类型 | 内容             | 备注                 |
| ----------- | ---- | ---------------- | -------------------- |
| nid         | num  | 勋章id           | **详细说明有待补充** |
| name        | str  | 勋章名称         |                      |
| image       | str  | 挂件图片url 正常 |                      |
| image_small | str  | 勋章图片url 小   |                      |
| level       | str  | 勋章等级         |                      |
| condition   | str  | 勋章条件         |                      |

`data`中的`sys_notice`对象：

| 字段    | 类型 | 内容            | 备注                 |
| ------- | ---- | --------------- | -------------------- |
| id      | num  | 系统提示类型ID  | **详细说明有待补充** |
| content | str  | 提示信息        |                      |
| url     | str  | 提示信息链接url |                      |

**示列：**

查询用户`UID=2`的详细信息

http://api.bilibili.com/x/space/acc/info?mid=2
```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"mid": 2,
		"name": "碧诗",
		"sex": "男",
		"face": "http://i0.hdslb.com/bfs/app/3e60b20604b6fdc7d081eb6a1ec72aa47c5a3964.jpg",
		"sign": "kami.im 直男过气网红 # av362830 “We Are Star Dust”",
		"rank": 20000,
		"level": 6,
		"jointime": 0,
		"moral": 0,
		"silence": 0,
		"birthday": "09-19",
		"coins": 0,
		"fans_badge": true,
		"official": {
			"role": 2,
			"title": "bilibili创始人（站长）",
			"desc": "",
			"type": 0
		},
		"vip": {
			"type": 2,
			"status": 1,
			"theme_type": 0
		},
		"pendant": {
			"pid": 76,
			"name": "管理员",
			"image": "http://i2.hdslb.com/bfs/face/02a3b79edef0f0e682de7f5dca7b6b5fe36d5f65.png",
			"expire": 0
		},
		"nameplate": {
			"nid": 10,
			"name": "见习偶像",
			"image": "http://i1.hdslb.com/bfs/face/e93dd9edfa7b9e18bf46fd8d71862327a2350923.png",
			"image_small": "http://i2.hdslb.com/bfs/face/275b468b043ec246737ab8580a2075bee0b1263b.png",
			"level": "普通勋章",
			"condition": "所有自制视频总播放数\u003e=10万"
		},
		"is_followed": true,
		"top_photo": "http://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png",
		"theme": {},
		"sys_notice": {}
	}
}
```

**查询到的信息解析如下：**

**用户昵称为**：碧诗

**性别**：男

**用户的头像为**：

http://i1.hdslb.com/bfs/face/3e60b20604b6fdc7d081eb6a1ec72aa47c5a3964.jpg

<img src="http://i1.hdslb.com/bfs/face/3e60b20604b6fdc7d081eb6a1ec72aa47c5a3964.jpg" width="100" height="100" />

**等级**：6级

**生日**：09-19

**粉丝勋章状态**：拥有

**认证**：个人认证

**认证名称**： bilibili创始人（站长） 

**大会员类型**：年度

**大会员状态**：已开通

**头像框**：管理员 

 http://i2.hdslb.com/bfs/face/02a3b79edef0f0e682de7f5dca7b6b5fe36d5f65.png 

<img src="http://i2.hdslb.com/bfs/face/02a3b79edef0f0e682de7f5dca7b6b5fe36d5f65.png" width="100" height="100" />

**粉丝勋章**： 见习偶像 

 http://i1.hdslb.com/bfs/face/e93dd9edfa7b9e18bf46fd8d71862327a2350923.png 

<img src="http://i1.hdslb.com/bfs/face/e93dd9edfa7b9e18bf46fd8d71862327a2350923.png" width="100" height="100" />

**空间头图**：

http://i2.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png

![](http://i2.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png)



## 用户详细信息2 (用于名片)

> http://api.bilibili.com/x/web-interface/card

*方式:GET*

**url参数：**

| 参数名 | 类型 | 内容                 | 必要性 | 备注                    |
| ------ | ---- | -------------------- | ------ | ----------------------- |
| mid    | num  | 目标用户UID          | 必要   |                         |
| photo  | bool | 是否请求用户主页头图 | 非必要 | true：是<br />false：否 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        | 作用尚不明确                |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段 | 类型  | 内容     | 备注 |
| ---- | ----- | -------- | ---- |
| card | obj   | 卡片信息 |      |

`data`中的`card`对象：

| 字段            | 类型  | 内容           | 备注                                                         |
| --------------- | ----- | -------------- | ------------------------------------------------------------ |
| mid             | num   | 用户UID        |                                                              |
| approve         | bool  | false          | **作用尚不明确**                                             |
| name            | str   | 用户昵称       |                                                              |
| sex             | str   | 用户性别       | 男 女 保密                                                   |
| face            | str   | 用户头像链接   |                                                              |
| DisplayRank     | str   | 0              | **作用尚不明确**                                             |
| regtime         | num   | 0              | **作用尚不明确**                                             |
| spacesta        | num   | 0              | **作用尚不明确**                                             |
| birthday        | str   | 空             | **作用尚不明确**                                             |
| place           | str   | 空             | **作用尚不明确**                                             |
| description     | str   | 空             | **作用尚不明确**                                             |
| article         | num   | 0              | **作用尚不明确**                                             |
| attentions      | array | 空             | **作用尚不明确**                                             |
| fans            | num   | 粉丝数         |                                                              |
| friend          | num   | 关注数         |                                                              |
| attention       | num   | 关注数         |                                                              |
| level_info      | obj   | 等级           |                                                              |
| pendant         | obj   | 挂件           |                                                              |
| nameplate       | obj   | 勋章           |                                                              |
| Official        | obj   | 认证信息       |                                                              |
| official_verify | obj   | 认证信息2      |                                                              |
| vip             | obj   | 大会员状态     |                                                              |
| space           | obj   | 主页头图       |                                                              |
| following       | bool  | 是否关注此用户 | true：已关注<br />false：未关注<br />需要登录(SESSDATA) <br />未登录为false |
| archive_count   | num   | 用户稿件数     |                                                              |
| article_count   | num   | 0              | **作用尚不明确**                                             |
| follower        | num   | 粉丝数         |                                                              |

`card`中的`level_info`对象：

| 字段          | 类型 | 内容     | 备注             |
| ------------- | ---- | -------- | ---------------- |
| current_level | num  | 当前等级 | 0-6级            |
| current_min   | num  | 0        | 作用尚不明确     |
| current_exp   | num  | 0        | **作用尚不明确** |
| next_exp      | num  | 0        | **作用尚不明确** |

`card`中的`pendant`对象：

| 字段   | 类型 | 内容        | 备注             |
| ------ | ---- | ----------- | ---------------- |
| pid    | num  | 挂件id      |                  |
| name   | str  | 挂件名称    |                  |
| image  | str  | 挂件图片url |                  |
| expire | num  | 0           | **作用尚不明确** |

`card`中的`nameplate`对象：

| 字段        | 类型 | 内容             | 备注                 |
| ----------- | ---- | ---------------- | -------------------- |
| nid         | num  | 勋章id           | **详细说明有待补充** |
| name        | str  | 勋章名称         |                      |
| image       | str  | 挂件图片url 正常 |                      |
| image_small | str  | 勋章图片url 小   |                      |
| level       | str  | 勋章等级         |                      |
| condition   | str  | 勋章条件         |                      |

`card`中的`Official`对象：

| 字段  | 类型 | 内容     | 备注                                            |
| ----- | ---- | -------- | ----------------------------------------------- |
| role  | num  | 认证类型 | 0：无<br />1 2：个人认证<br />3 4 5 6：机构认证 |
| title | str  | 认证信息 | 无为空                                          |
| desc  | str  | 认证备注 | 无为空                                          |
| type  | num  | 是否认证 | -1：无<br />0：认证                             |

`card`中的`official_verify`对象：

| 字段 | 类型 | 内容     | 备注                |
| ---- | ---- | -------- | ------------------- |
| type | num  | 是否认证 | -1：无<br />0：认证 |
| desc | str  | 认证信息 | 无为空              |

`card`中的`vip`对象：

| 字段          | 类型 | 内容       | 备注                                |
| ------------- | ---- | ---------- | ----------------------------------- |
| vipType       | num  | 大会员类型 | 0：无<br />1：月会员<br />2：年会员 |
| dueRemark     | str  | 空         | **作用尚不明确**                    |
| accessStatus  | num  | 0          | **作用尚不明确**                    |
| vipStatus     | num  | 大会员状态 | 0：无<br />1：有                    |
| vipStatusWarn | str  | 空         | **作用尚不明确**                    |
| theme_type    | num  | 0          | **作用尚不明确**                    |

`card`中的`space`对象：

| 字段  | 类型 | 内容             | 备注 |
| ----- | ---- | ---------------- | ---- |
| s_img | str  | 主页头图url 小图 |      |
| l_img | str  | 主页头图url 正常 |      |

**示列：**

http://api.bilibili.com/x/web-interface/card?mid=2&photo=true
```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"card": {
			"mid": "2",
			"name": "碧诗",
			"approve": false,
			"sex": "男",
			"rank": "20000",
			"face": "http://i1.hdslb.com/bfs/face/3e60b20604b6fdc7d081eb6a1ec72aa47c5a3964.jpg",
			"DisplayRank": "0",
			"regtime": 0,
			"spacesta": 0,
			"birthday": "",
			"place": "",
			"description": "",
			"article": 0,
			"attentions": [],
			"fans": 810968,
			"friend": 192,
			"attention": 192,
			"sign": "kami.im 直男过气网红 # av362830 “We Are Star Dust”",
			"level_info": {
				"current_level": 6,
				"current_min": 0,
				"current_exp": 0,
				"next_exp": 0
			},
			"pendant": {
				"pid": 76,
				"name": "管理员",
				"image": "http://i2.hdslb.com/bfs/face/02a3b79edef0f0e682de7f5dca7b6b5fe36d5f65.png",
				"expire": 0
			},
			"nameplate": {
				"nid": 10,
				"name": "见习偶像",
				"image": "http://i0.hdslb.com/bfs/face/e93dd9edfa7b9e18bf46fd8d71862327a2350923.png",
				"image_small": "http://i1.hdslb.com/bfs/face/275b468b043ec246737ab8580a2075bee0b1263b.png",
				"level": "普通勋章",
				"condition": "所有自制视频总播放数\u003e=10万"
			},
			"Official": {
				"role": 2,
				"title": "bilibili创始人（站长）",
				"desc": "",
				"type": 0
			},
			"official_verify": {
				"type": 0,
				"desc": "bilibili创始人（站长）"
			},
			"vip": {
				"vipType": 2,
				"dueRemark": "",
				"accessStatus": 0,
				"vipStatus": 1,
				"vipStatusWarn": "",
				"theme_type": 0
			}
		},
		"space": {
			"s_img": "http://i2.hdslb.com/bfs/space/768cc4fd97618cf589d23c2711a1d1a729f42235.png",
			"l_img": "http://i2.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png"
		},
		"following": true,
		"archive_count": 35,
		"article_count": 0,
		"follower": 810968
	}
}
```



## 本用户详细信息

> http://api.bilibili.com/x/space/myinfo

*方式:GET*

需要登录(SESSDATA)

功能同「[登录用户信息1](../login/login_info.md#登录用户信息1（完整）)」

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                      |
| ------- | ---- | -------- | ------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：未登录 |
| message | str  | 错误信息 | 默认为0                   |
| ttl     | num  | 1        | **作用尚不明确**          |
| data    | obj  | 信息本体 |                           |

`data`对象：

| 字段            | 类型 | 内容         | 备注                     |
| --------------- | ---- | ------------ | ------------------------ |
| mid             | num  | UID          |                          |
| name            | str  | 昵称         |                          |
| sex             | str  | 性别         | 男 女 保密               |
| face            | str  | 头像图片url  |                          |
| sign            | str  | 签名         |                          |
| rank            | num  | 10000        | **作用尚不明确**         |
| level           | num  | 当前等级     | 0-6级                    |
| jointime        | num  | 0            | **作用尚不明确**         |
| moral           | num  | 节操         | 默认70                   |
| silence         | num  | 封禁状态     | 0：正常<br />1：被封     |
| email_status    | num  | 已验证邮箱   | 0：未验证<br />1：已验证 |
| tel_status      | num  | 已验证手机号 | 0：未验证<br />1：已验证 |
| identification  | num  | 1            | **作用尚不明确**         |
| vip             | obj  | 大会员状态   |                          |
| birthday        | num  | 生日         | 时间戳                   |
| is_tourist      | num  | 0            | **作用尚不明确**         |
| is_fake_account | num  | 0            | **作用尚不明确**         |
| pin_prompting   | num  | 0            | **作用尚不明确**         |
| is_deleted      | num  | 0            | **作用尚不明确**         |
| coins           | num  | 硬币数       |                          |
| following       | num  | 粉丝数       |                          |
| follower        | num  | 粉丝数       |                          |

`data`中的`vip`对象：

| 字段         | 类型 | 内容           | 备注                                |
| ------------ | ---- | -------------- | ----------------------------------- |
| type         | num  | 大会员类型     | 0：无<br />1：月会员<br />2：年会员 |
| status       | num  | 大会员状态     | 0：无<br />1：有                    |
| due_date     | num  | 大会员到期时间 | 毫秒 时间戳                         |
| vip_pay_type | num  | 1              | **作用尚不明确**                    |
| theme_type   | num  | 0              | **作用尚不明确**                    |
| label        | obj  | ？？？         |                                     |

`vip`中的`label`对象:

| 字段 | 类型 | 内容 | 备注             |
| ---- | ---- | ---- | ---------------- |
| path | str  | 空   | **作用尚不明确** |

`data`中的`pendant`对象：

| 字段   | 类型 | 内容        | 备注                 |
| ------ | ---- | ----------- | -------------------- |
| pid    | num  | 挂件id      | **详细说明有待补充** |
| name   | str  | 挂件名称    |                      |
| image  | str  | 挂件图片url |                      |
| expire | num  | 0           | **作用尚不明确**     |

`data`中的`nameplate`对象：

| 字段        | 类型 | 内容             | 备注                 |
| ----------- | ---- | ---------------- | -------------------- |
| nid         | num  | 勋章id           | **详细说明有待补充** |
| name        | str  | 勋章名称         |                      |
| image       | str  | 挂件图片url 正常 |                      |
| image_small | str  | 勋章图片url 小   |                      |
| level       | str  | 勋章等级         |                      |
| condition   | str  | 勋章条件         |                      |

`data`中的`Official`对象：

| 字段  | 类型 | 内容     | 备注                                            |
| ----- | ---- | -------- | ----------------------------------------------- |
| role  | num  | 认证类型 | 0：无<br />1 2：个人认证<br />3 4 5 6：机构认证 |
| title | str  | 认证信息 | 无为空                                          |
| desc  | str  | 认证备注 | 无为空                                          |
| type  | num  | 是否认证 | -1：无<br />0：认证                             |

`data`中的`level_exp`对象：

| 字段          | 类型 | 内容     | 备注             |
| ------------- | ---- | -------- | ---------------- |
| current_level | num  | 当前等级 | 0-6级            |
| current_min   | num  | 0        | **作用尚不明确** |
| current_exp   | num  | 0        | **作用尚不明确** |
| next_exp      | num  | 0        | **作用尚不明确** |

**示例：**

http://api.bilibili.com/x/space/myinfo
```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"mid": 293793435,
		"name": "社会易姐QwQ",
		"sex": "男",
		"face": "http://i2.hdslb.com/bfs/face/480e2e98513aaeb65d2f2c76dbae750c4de722e9.jpg",
		"sign": "咕咕咕咕咕",
		"rank": 10000,
		"level": 5,
		"jointime": 0,
		"moral": 70,
		"silence": 0,
		"email_status": 1,
		"tel_status": 1,
		"identification": 1,
		"vip": {
			"type": 2,
			"status": 1,
			"due_date": 1612454400000,
			"vip_pay_type": 1,
			"theme_type": 0,
			"label": {
				"path": ""
			}
		},
		"pendant": {
			"pid": 294,
			"name": "茶啊二中",
			"image": "http://i0.hdslb.com/bfs/face/5bb7bef5107e448892ab54539298d50eb678de05.png",
			"expire": 0
		},
		"nameplate": {
			"nid": 0,
			"name": "",
			"image": "",
			"image_small": "",
			"level": "",
			"condition": ""
		},
		"official": {
			"role": 0,
			"title": "",
			"desc": "",
			"type": -1
		},
		"birthday": 1015257600,
		"is_tourist": 0,
		"is_fake_account": 0,
		"pin_prompting": 0,
		"is_deleted": 0,
		"level_exp": {
			"current_level": 5,
			"current_min": 10800,
			"current_exp": 13985,
			"next_exp": 28800
		},
		"coins": 10.4,
		"following": 358,
		"follower": 358
	}
}
```

