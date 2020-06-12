# 用户关系相关

## 查询用户粉丝明细 

<img src="/imgs/relation.svg" width="100" height="100" />

> http://api.bilibili.com/x/relation/followers

*方式:GET*

登录(SESSDATA)可看自己全部

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注                             |
| ------ | ---- | ----------- | ------ | -------------------------------- |
| vmid   | num  | 目标用户UID | 必要   |                                  |
| ps     | num  | 每页项数    | 非必要 | 默认为50                         |
| pn     | num  | 页码        | 非必要 | 默认为1<br />非自己仅可查看前5页 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                |
| ------- | ---- | -------- | --------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />22007：访问超过5页 |
| message | str  | 错误信息 | 默认为0                                             |
| ttl     | num  | 1        | 作用尚不明确                                        |
| data    | obj  | 信息本体 |                                                     |

`data`对象：

| 字段       | 类型  | 内容     | 备注         |
| ---------- | ----- | -------- | ------------ |
| list       | array | 明细列表 |              |
| re_version | num   | ？？？   | 作用尚不明确 |
| total      | num   | 粉丝总数 |              |

`data`中的`list`数组：

| 项   | 类型 | 内容        | 备注             |
| ---- | ---- | ----------- | ---------------- |
| 0    | obj  | 粉丝1       |                  |
| n    | obj  | 粉丝（n+1） | 按照关注顺序排列 |
| ……   | obj  | ……          | ……               |

数组`list`中的对象：

| 字段            | 类型 | 内容         | 备注                                    |
| --------------- | ---- | ------------ | --------------------------------------- |
| mid             | num  | 用户UID      |                                         |
| attribute       | num  | 关注属性     | 0：未关注<br />2：已关注<br />6：已互粉 |
| mtime           | num  | 成为粉丝时间 | 时间戳<br />互关后刷新                  |
| tag             | null |              | 作用尚不明确                            |
| special         | num  | 0            | 作用尚不明确                            |
| uname           | str  | 用户昵称     |                                         |
| face            | str  | 用户头像url  |                                         |
| sign            | str  | 用户签名     |                                         |
| official_verify | obj  | 认证信息     |                                         |
| vip             | obj  | 会员信息     |                                         |

数组`list`中的对象中的`official_verify`对象：

| 字段 | 类型 | 内容         | 备注                |
| ---- | ---- | ------------ | ------------------- |
| type | num  | 用户认证类型 | -1：无<br />1：认证 |
| desc | str  | 用户认证信息 | 无为空              |

数组`list`中的对象中的`vip`对象：

| 字段          | 类型 | 内容         | 备注                                |
| ------------- | ---- | ------------ | ----------------------------------- |
| vipType       | num  | 大会员类型   | 0：无<br />1：月会员<br />2：年会员 |
| vipDueDate    | num  | 会员到期时间 | 时间戳 毫秒                         |
| dueRemark     | str  | 空           | 作用尚不明确                        |
| accessStatus  | num  | 0            | 作用尚不明确                        |
| vipStatus     | num  | 大会员状态   | 0：无<br />1：有                    |
| vipStatusWarn | str  | 空           | 作用尚不明确                        |
| themeType     | num  | 0            | 作用尚不明确                        |
| label         | obj  | ？？？       | 作用尚不明确                        |

`vip`中的`label`对象：

| 字段 | 类型 | 内容 | 备注         |
| ---- | ---- | ---- | ------------ |
| path | str  | 空   | 作用尚不明确 |

**示例：**

以每页2项的方式获取`UID=293793435`的用户的第1页的粉丝明细

http://api.bilibili.com/x/relation/followers?vmid=293793435&ps=2&pn=1

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
			"face": "http://i1.hdslb.com/bfs/face/8ec537db75eeb292faa8dc85a9ff8aba83148c86.jpg",
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
			"face": "http://i1.hdslb.com/bfs/face/e53c0fe9315176d48bd294b1f381f0da70131cd7.jpg",
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



## 查询用户关注明细 

<img src="/imgs/relation.svg" width="100" height="100" />

> http://api.bilibili.com/x/relation/followings

*方式:GET*

登录(SESSDATA)可看自己全部

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注                             |
| ------ | ---- | ----------- | ------ | -------------------------------- |
| vmid   | num  | 目标用户UID | 必要   |                                  |
| ps     | num  | 每页项数    | 非必要 | 默认为50                         |
| pn     | num  | 页码        | 非必要 | 默认为1<br />非自己仅可查看前5页 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                |
| ------- | ---- | -------- | --------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />22007：访问超过5页 |
| message | str  | 错误信息 | 默认为0                                             |
| ttl     | num  | 1        | 作用尚不明确                                        |
| data    | obj  | 信息本体 |                                                     |

data 对象：

| 字段       | 类型  | 内容     | 备注         |
| ---------- | ----- | -------- | ------------ |
| list       | array | 明细列表 |              |
| re_version | num   | ？？？   | 作用尚不明确 |
| total      | num   | 关注总数 |              |

`data`中的`list`数组：

| 项   | 类型 | 内容        | 备注             |
| ---- | ---- | ----------- | ---------------- |
| 0    | obj  | 关注1       |                  |
| n    | obj  | 关注（n+1） | 按照关注顺序排列 |
| ……   | obj  | ……          | ……               |

数组`list`中的对象：

| 字段            | 类型                                     | 内容         | 备注                                    |
| --------------- | ---------------------------------------- | ------------ | --------------------------------------- |
| mid             | num                                      | 用户UID      |                                         |
| attribute       | num                                      | 关注属性     | 0：未关注<br />2：已关注<br />6：已互粉 |
| mtime           | num                                      | 关注对方时间 | 时间戳<br />互关后刷新                  |
| tag             | null默认分组<br />array存在至少一个分组 | 分组ID       | 作用尚不明确                            |
| special         | num                                      | 特别关注标志 | 0：否<br />1：是                        |
| uname           | str                                      | 用户昵称     |                                         |
| face            | str                                      | 用户头像url  |                                         |
| sign            | str                                      | 用户签名     |                                         |
| official_verify | obj                                      | 认证信息     |                                         |
| vip             | obj                                      | 会员信息     |                                         |

数组`list`中的对象中的`tag`数组：

| 项   | 类型 | 内容                    | 备注 |
| ---- | ---- | ----------------------- | ---- |
| 0    | num  | 位于分组1的分组ID       |      |
| n    | num  | 位于分组（n+1）的分组ID |      |
| ……   | num  | ……                      | ……   |

数组`list`中的对象中的`official_verify`对象：

| 字段 | 类型 | 内容         | 备注                |
| ---- | ---- | ------------ | ------------------- |
| type | num  | 用户认证类型 | -1：无<br />0：认证 |
| desc | str  | 用户认证信息 | 无为空              |

数组`list`中的对象中的`vip`对象：

| 字段          | 类型 | 内容         | 备注                                |
| ------------- | ---- | ------------ | ----------------------------------- |
| vipType       | num  | 大会员类型   | 0：无<br />1：月会员<br />2：年会员 |
| vipDueDate    | num  | 会员到期时间 | 时间戳 毫秒                         |
| dueRemark     | str  | 空           | 作用尚不明确                        |
| accessStatus  | num  | 0            | 作用尚不明确                        |
| vipStatus     | num  | 大会员状态   | 0：无<br />1：有                    |
| vipStatusWarn | str  | 空           | 作用尚不明确                        |
| themeType     | num  | 0            | 作用尚不明确                        |
| label         | obj  | ？？？       | 作用尚不明确                        |

`vip`中的`label`对象：

| 字段 | 类型 | 内容 | 备注         |
| ---- | ---- | ---- | ------------ |
| path | str  | 空   | 作用尚不明确 |

**示例：**

以每页2项的方式获取`UID=293793435`的用户的第1页的关注明细

http://api.bilibili.com/x/relation/followings?vmid=293793435&ps=2&pn=1

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
			"face": "http://i0.hdslb.com/bfs/face/74c82caee6d9eb623e56161ea8ed6d68afabfeae.jpg",
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
			"face": "http://i2.hdslb.com/bfs/face/aaf18aeb2d9822e28a590bd8d878572ca8c59e04.jpg",
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



## 操作用户关系（关注/取关 等）

<img src="/imgs/follow.svg" width="200" height="100" />

> http://api.bilibili.com/x/relation/modify

*方式:POST*

需要登录(SESSDATA)

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注               |
| ------ | ---- | ------------------- | ------ | ------------------ |
| fid    | num  | 目标用户UID         | 必要   |                    |
| act    | num  | 操作代码            | 必要   | **操作代码见下表** |
| re_src | num  | 必须为11            | 必要   |                    |
| csrf   | str  | cookies中的bili_jct | 必要   |                    |

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
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-102：账号被封停<br />-111：csrf校验失败<br />-400：请求错误<br />22003：用户位于黑名单 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

关注`UID=14082`的用户

curl -b SESSDATA=xxx -d "fid=14082&act=1&re_src=11&csrf=xxx" "http://api.bilibili.com/x/relation/modify"

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1
}
```



## 查询用户与自己关系1 (仅查关注)

> http://api.bilibili.com/x/relation

*方式:GET*

 需要登录(SESSDATA)

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| fid    | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        | 作用尚不明确                                      |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段      | 类型                                     | 内容         | 备注                                    |
| --------- | ---------------------------------------- | ------------ | --------------------------------------- |
| mid       | num                                      | 目标用户UID  |                                         |
| attribute | num                                      | 关注属性     | 0：未关注<br />2：已关注<br />6：已互粉 |
| mtime     | num                                      | 关注对方时间 | 时间戳<br />未关注为0                   |
| tag       | null默认分组<br />array存在至少一个分组 | 分组ID       |                                         |
| special   | num                                      | 特别关注标志 | 0：否<br />1：是                        |

`tag`数组：

| 项   | 类型 | 内容                    | 备注 |
| ---- | ---- | ----------------------- | ---- |
| 0    | num  | 位于分组1的分组ID       |      |
| n    | num  | 位于分组（n+1）的分组ID |      |
| ……   | num  | ……                      | ……   |

**示例：**

可得对于`UID=258150656`的用户，在`2018/10/28 0:51:41`时关注，且设为特别关注，并位于ID为`-10`分组中

http://api.bilibili.com/x/relation?fid=258150656

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



## 查询用户与自己关系2(互相)

> http://api.bilibili.com/x/space/acc/relation

*方式:GET*

需要登录(SESSDATA)

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        | 作用尚不明确                                      |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段        | 类型 | 内容                     | 备注 |
| ----------- | ---- | ------------------------ | ---- |
| relation    | obj  | 目标用户对于本用户的属性 |      |
| be_relation | obj  | 本用户对于目标用户的属性 |      |

`data`中的`relation`对象：

| 字段      | 类型                                     | 内容         | 备注           |
| --------- | ---------------------------------------- | ------------ | -------------- |
| mid       | num                                      | 对方用户UID  |                |
| attribute | num                                      |              |                |
| mtime     | num                                      | 关注对方时间 | 互关后刷新时间 |
| tag       | null默认分组<br />array存在至少一个分组 |              |                |
| special   | num                                      |              |                |

`data`中的`be_relation`对象：

| 字段      | 类型                                     | 内容         | 备注           |
| --------- | ---------------------------------------- | ------------ | -------------- |
| mid       | num                                      |              |                |
| attribute | num                                      |              |                |
| mtime     | num                                      | 成为粉丝时间 | 互关后刷新时间 |
| tag       | null默认分组<br />array存在至少一个分组 |              |                |
| special   | num                                      |              |                |

`be_relation`与`relation`中的`tag`数组：

| 项   | 类型 | 内容                    | 备注 |
| ---- | ---- | ----------------------- | ---- |
| 0    | num  | 位于分组1的分组ID       |      |
| n    | num  | 位于分组（n+1）的分组ID |      |
| ……   | num  | ……                      | ……   |

**示例：**

可得对于`UID=15858903`的用户，在`2019/1/24 14:24:19`时关注了对方，且互相关注，自己将对方特别关注，并同时位于ID为`-10`和`194110`的分组中，对方也将自己设为特别关注，并同时位于ID为`-10`和`56502`的分组中（虽然我看不到）

http://api.bilibili.com/x/space/acc/relation?mid=15858903

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



## 关注分组相关

### 查询关注分组列表

> http://api.bilibili.com/x/relation/tags

*方式:GET*

需要登录(SESSDATA)

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                          |
| ------- | ------ | -------- | ----------------------------- |
| code    | num    | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str    | 错误信息 | 默认为0                       |
| ttl     | num    | 1        | 作用尚不明确                  |
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
| tagid | num  | 分组ID     | 特别关注恒为-10<br />默认分组恒为0 |
| name  | str  | 分组名称   |                                    |
| count | num  | 分组成员数 |                                    |

**示例：**

查询所有的分组的名字以及ID

http://api.bilibili.com/x/relation/tags

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



### 查询关注分组明细

> http://api.bilibili.com/x/relation/tag

*方式:GET*

需要登录(SESSDATA)

**url参数：**

| 参数名 | 类型 | 内容     | 必要性 | 备注                               |
| ------ | ---- | -------- | ------ | ---------------------------------- |
| tagid  | num  | 分组ID   | 必要   | 特别关注恒为-10<br />默认分组恒为0 |
| ps     | num  | 每页项数 | 非必要 | 默认为50                           |
| pn     | num  | 页数     | 非必要 | 默认为1                            |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                                                         |
| ------- | ------ | -------- | ------------------------------------------------------------ |
| code    | num    | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误<br />22104：该分组不存在<br />-101：账号未登录 |
| message | str    | 错误信息 | 默认为0                                                      |
| ttl     | num    | 1        | 作用尚不明确                                                 |
| data    | array | 成员列表 |                                                              |

`data`数组：

| 项   | 类型 | 内容      | 备注             |
| ---- | ---- | --------- | ---------------- |
| 0    | obj  | 成员信息1 |                  |
| n    | obj  | 成员信息n | 按照添加顺序排序 |
| ……   | num  | ……        | ……               |

数组`data`中的对象：

| 字段            | 类型 | 内容        | 备注 |
| --------------- | ---- | ----------- | ---- |
| mid             | num  | 用户UID     |      |
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

以每页2项的方式获取了ID为`207542`分组的第1页的粉丝明细

http://api.bilibili.com/x/relation/tag?tagid=207542&ps=2&pn=1

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": [{
		"mid": 420831218,
		"uname": "支付宝Alipay",
		"face": "http://i2.hdslb.com/bfs/face/aaf18aeb2d9822e28a590bd8d878572ca8c59e04.jpg",
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
		"face": "http://i1.hdslb.com/bfs/face/a844760e4e491677615b39399bc761e74c579bb4.jpg",
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



### 查询目标用户所在的分组 

> http://api.bilibili.com/x/relation/tag/user

*方式:GET*

需要登录(SESSDATA)

**num参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| fid    | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                              |
| ------- | ---- | -------- | ------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                           |
| ttl     | num  | 1        | 作用尚不明确                                      |
| data    | obj  | 信息本体 |                                                   |

`data`对象：

| 字段                | 类型 | 内容      | 备注 |
| ------------------- | ---- | --------- | ---- |
| ｛加入的分组ID  1｝ | str  | 分组1名称 |      |
| ｛加入的分组ID  n｝ | str  | 分组n名称 |      |
| ……                  | str  | ……        |      |

**示例：**

查询用户`UID=319214221`存在的所有分组ID和名称

http://api.bilibili.com/x/relation/tag/user?fid=319214221

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



### 创建关注分组

<img src="/imgs/add.svg" width="100" height="100" />

> http://api.bilibili.com/x/relation/tag/create

*方式:POST*

需要登录(SESSDATA)

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注       |
| ------ | ---- | ------------------- | ------ | ---------- |
| tag    | str  | 分组名              | 必要   | 最长16字符 |
| csrf   | str  | cookies中的bili_jct | 必要   |            |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-111：csrf校验失败<br />-101：账号未登录<br />-400：请求错误<br />22106：该分组已经存在<br />22103：分组名过长 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段  | 类型 | 内容           | 备注 |
| ----- | ---- | -------------- | ---- |
| tagid | num  | 创建的分组的ID |      |

**示例：**

创建了名为`vUP`的分组，得到ID为`216677`

curl -b SESSDATA=xxx -d "tag=vUP&csrf=xxx" "http://api.bilibili.com/x/relation/tag/create"

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



### 重命名关注分组

> http://api.bilibili.com/x/relation/tag/update

*方式:POST*

需要登录(SESSDATA)

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注       |
| ------ | ---- | ------------------- | ------ | ---------- |
| tagid  | num  | 分组ID              | 必要   |            |
| name   | str  | 新名称              | 必要   | 最长16字符 |
| csrf   | str  | cookies中的bili_jct | 必要   |            |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-111：csrf校验失败<br />-101：账号未登录<br />-400：请求错误<br />22103：分组名过长<br />22104：该分组不存在 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

把ID为`194112`的分组更名为`膜法师`

curl -b SESSDATA=xxx -d "tagid=194112&name=%e8%86%9c%e6%b3%95%e5%b8%88&csrf=xxx" "http://api.bilibili.com/x/relation/tag/update"

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1
}
```



### 删除关注分组

<img src="/imgs/delete.svg" width="100" height="100" />

> http://api.bilibili.com/x/relation/tag/del

*方式:POST*

需要登录(SESSDATA)

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注 |
| ------ | ---- | ------------------- | ------ | ---- |
| tagid  | num  | 分组ID              | 必要   |      |
| csrf   | str  | cookies中的bili_jct | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-111：csrf校验失败<br />-101：账号未登录<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

示例：

删除分组ID为`216699`的分组

curl -b SESSDATA=xxx -d "tagid=216699&csrf=xxx" "http://api.bilibili.com/x/relation/tag/del"

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1
}
```



### 修改用户分组关系（添加/删除）

<img src="/imgs/add.svg" width="100" height="100" />

> http://api.bilibili.com/x/relation/tags/addUsers

*方式:POST*

需要登录(SESSDATA)

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注                       |
| ------ | ---- | ------------------- | ------ | -------------------------- |
| fids   | nums | 目标用户UID         | 必要   | 每个ID之间用","（%2C）间隔 |
| tagids | nums | 分组ID              | 必要   | 每个ID之间用","（%2C）间隔 |
| csrf   | str  | cookies中的bili_jct | 必要   |                            |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-111：csrf校验失败<br />-101：账号未登录<br />-400：请求错误<br />22104：无权限<br />22105：未关注 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

把关注用户`UID=205631797`同时添加分组关系到ID为`-10`和`207542`的分组中

curl -b SESSDATA=xxx -d "fids=205631797&tagids=-10%2C207542&csrf=xxx" "http://api.bilibili.com/x/relation/tags/addUsers"

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1
}
```



### 批量复制关注用户到分组

> http://api.bilibili.com/x/relation/tags/copyUsers 

*方式:POST*

需要登录(SESSDATA)

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注                       |
| ------ | ---- | ------------------- | ------ | -------------------------- |
| fids   | nums | 目标用户UID         | 必要   | 每个ID之间用","（%2C）间隔 |
| tagids | nums | 分组ID              | 必要   | 每个ID之间用","（%2C）间隔 |
| csrf   | str  | cookies中的bili_jct | 必要   |                            |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-111：csrf校验失败<br />-101：账号未登录<br />-400：请求错误<br />22104：无权限<br />22105：未关注 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

把关注用户`UID=4856007`和`UID=326499679`同时复制到ID为`231305`的分组中

curl -b SESSDATA=xxx -d "fids=4856007%2C326499679&tagids=231305&csrf=xxx" "http://api.bilibili.com/x/relation/tags/copyUsers"

```json
{
    "code":0,
    "message":"0",
    "ttl":1
}
```



### 批量移动关注用户到分组

> http://api.bilibili.com/x/relation/tags/moveUsers 

*方式:POST*

需要登录(SESSDATA)

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名       | 类型 | 内容                | 必要性 | 备注                       |
| ------------ | ---- | ------------------- | ------ | -------------------------- |
| beforeTagids | nums | 原分组ID            | 必要   | 每个ID之间用","（%2C）间隔 |
| afterTagids  | nums | 新分组ID            | 必要   | 每个ID之间用","（%2C）间隔 |
| fids         | nums | 目标用户UID         | 必要   | 每个ID之间用","（%2C）间隔 |
| csrf         | str  | cookies中的bili_jct | 必要   |                            |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-111：csrf校验失败<br />-101：账号未登录<br />-400：请求错误<br />22104：无权限<br />22105：未关注 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

把关注用户`UID=3211734
69`和`UID=327086920`同时从ID为`207542`的分组移动到ID为`231305`的分组中

curl -b SESSDATA=xxx -d "beforeTagids=207542&afterTagids=231305&fids=3211734
69%2C327086920&csrf=xxx" "http://api.bilibili.com/x/relation/tags/moveUsers"

```json
{
    "code":0,
    "message":"0",
    "ttl":1
}
```

