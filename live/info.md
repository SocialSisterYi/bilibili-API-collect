# 直播间基本信息

- [直播间基本信息](#直播间基本信息)
	- [获取用户对应的直播间状态](#获取用户对应的直播间状态)
	- [获取房间页初始化信息](#获取房间页初始化信息)
	- [获取主播信息](#获取主播信息)
	- [批量查询直播间状态](#批量查询直播间状态)

---

## 获取用户对应的直播间状态

> http://api.live.bilibili.com/room/v1/Room/getRoomInfoOld

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户mid | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                             |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段           | 类型 | 内容             | 备注                     |
| -------------- | ---- | ---------------- | ------------------------ |
| roomStatus     | num  | 直播间状态       | 0：无房间<br />1：有房间 |
| roundStatus    | num  | 轮播状态         | 0：未轮播<br />1：轮播   |
| liveStatus     | num  | 直播状态         | 0：未开播<br />1：直播中 |
| url            | str  | 直播间网页url    |                          |
| title          | str  | 直播间标题       |                          |
| cover          | str  | 直播间封面url    |                          |
| online         | num  | 直播间人气       | 值为上次直播时刷新       |
| roomid         | num  | 直播间id（短号） |                          |
| broadcast_type | num  | 0                |                          |
| online_hidden  | num  | 0                |                          |

**示例：**

查询用户`mid=322892`的直播间信息

```shell
curl -G 'http://api.live.bilibili.com/room/v1/Room/getRoomInfoOld' \
--data-urlencode 'mid=322892'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"roomStatus": 1,
		"roundStatus": 0,
		"liveStatus": 1,
		"url": "https://live.bilibili.com/5441",
		"title": "好久没当黑铁主播了",
		"cover": "http://i0.hdslb.com/bfs/live/room_cover/833f7ff506bac17c06010e8834922993657505b2.jpg",
		"online": 268602,
		"roomid": 5441,
		"broadcast_type": 0,
		"online_hidden": 0
	}
}
```

</details>

## 获取房间页初始化信息

> http://api.live.bilibili.com/room/v1/Room/room_init

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| id    | num  | 目标直播间号（短号） | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />60004：直播间不存在 |
| msg | str  | 错误信息 | 默认为ok                     |
| message | str  | 错误信息 | 默认为ok                     |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段           | 类型 | 内容          | 备注                     |
| -------------- | ---- | ------------- | ------------------------ |
| room_id         | num  | 直播间真实id      |                          |
| short_id         | num  | 直播间id（短号） |                          |
| uid         | num  | 主播用户mid    |                          |
| need_p2p         | num  | 是否p2p |                          |
| is_hidden         | bool   | 是否隐藏  |                          |
| is_locked         | bool   | 是否锁定  |                          |
| is_portrait         | bool   | 是否竖屏  |                          |
| live_status     | num  | 直播状态      | 0：未开播<br />1：直播中<br />2：轮播中 |
| hidden_till     | num  | 隐藏时间戳 |      	 |
| lock_till     | num  | 锁定时间戳 |   		 |
| encrypted     | bool   | 是否加密  |   		 |
| pwd_verified     | bool   | 加密房间是否通过密码验证 | `encrypted`=true时才有意义 |
| live_time     | num  | 开播时间     | 未开播时为`-62170012800` |
| room_shield     | num  | 未知    |  |
| is_sp    | num  | 是否为特殊直播间 | 0：普通直播间<br />1：付费直播间 |
| special_type      | num  | 特殊直播间标志 | 0：普通直播间<br />1：付费直播间<br />2：拜年祭直播间 |

**示例：**

查询直播间`id=76`的直播间信息

```shell
curl -G 'http://api.live.bilibili.com/room/v1/Room/room_init' \
--data-urlencode 'id=76'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code":0,
	"msg":"ok",
	"message":"ok",
	"data":{
		"room_id":14073662,
		"short_id":76,
		"uid":50333369,
		"need_p2p":0,
		"is_hidden":false,
		"is_locked":false,
		"is_portrait":false,
		"live_status":1,
		"hidden_till":0,
		"lock_till":0,
		"encrypted":false,
		"pwd_verified":false,
		"live_time":1602151186,
		"room_shield":1,
		"is_sp":0,
		"special_type":0
	}
}
```

</details>

## 获取主播信息

> http://api.live.bilibili.com/live_user/v1/Master/info

*请求方式：GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| uid    | num  | 目标用户mid | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                     |
| ------- | ---- | -------- | ------------------------ |
| code    | num  | 返回值   | 0：成功<br />1：参数错误 |
| msg     | str  | 错误信息 | 默认为空                 |
| message | str  | 错误信息 | 默认为空                 |
| data    | obj  | 信息本体 |                          |

`data`对象：

| 字段           | 类型 | 内容             | 备注             |
| -------------- | ---- | ---------------- | ---------------- |
| info           | obj  | 主播信息         |                  |
| exp            | obj  | 经验等级         |                  |
| follower_num   | num  | 主播粉丝数       |                  |
| room_id        | num  | 直播间id（短号） |                  |
| medal_name     | str  | 粉丝勋章名       |                  |
| glory_count    | int  | 主播荣誉数       |                  |
| pendant        | str  | 直播间头像框url  |                  |
| link_group_num | int  | 0                | **作用尚不明确** |
| room_news      | obj  | 主播公告         |                  |

`info`对象：

| 字段            | 类型 | 内容        | 备注                           |
| --------------- | ---- | ----------- | ------------------------------ |
| uid             | num  | 主播mid     |                                |
| uname           | str  | 主播用户名  |                                |
| face            | str  | 主播头像url |                                |
| official_verify | obj  | 认证信息    |                                |
| gender          | num  | 主播性别    | -1：保密<br />0：女<br />1：男 |

`info`中的`official_verify`对象：
| 字段 | 类型 | 内容         | 备注                                     |
| ---- | ---- | ------------ | ---------------------------------------- |
| type | num  | 主播认证类型 | -1：无<br />0：个人认证<br />1：机构认证 |
| desc | str  | 主播认证信息 |                                          |

`exp`对象：

| 字段         | 类型 | 内容     | 备注 |
| ------------ | ---- | -------- | ---- |
| master_level | obj  | 主播等级 |      |

`exp`中的`master_level`对象：

| 字段    | 类型  | 内容         | 备注 |
| ------- | ----- | ------------ | ---- |
| level   | num   | 当前等级     |      |
| color   | num   | 等级框颜色   |      |
| current | array | 当前等级信息 |      |
| next    | array | 下一等级信息 |      |

`master_level`中的`current`数组：

| 项   | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| 0    | num  | 升级积分 |      |
| 1    | num  | 总积分   |      |

`master_level`中的`next`数组：

| 项   | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| 0    | num  | 升级积分 |      |
| 1    | num  | 总积分   |      |

`room_news`对象：

| 字段       | 类型 | 内容     | 备注 |
| ---------- | ---- | -------- | ---- |
| content    | str  | 公告内容 |      |
| ctime      | str  | 公告时间 |      |
| ctime_text | str  | 公告日期 |      |

**示例：**

查询直播间`mid=76`的主播信息

```shell
curl -G 'http://api.live.bilibili.com/live_user/v1/Master/info' \
--data-urlencode 'uid=2'
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"msg": "",
	"message": "",
	"data": {
		"info": {
			"uid": 2,
			"uname": "碧诗",
			"face": "https://i0.hdslb.com/bfs/face/ef0457addb24141e15dfac6fbf45293ccf1e32ab.jpg",
			"official_verify": {
				"type": 0,
				"desc": "bilibili个人认证:bilibili创始人（站长）"
			},
			"gender": 1
		},
		"exp": {
			"master_level": {
				"level": 30,
				"color": 10512625,
				"current": [
					2870000,
					11883810
				],
				"next": [
					3730000,
					15613810
				]
			}
		},
		"follower_num": 926624,
		"room_id": 1024,
		"medal_name": "逸国",
		"glory_count": 0,
		"pendant": "",
		"link_group_num": 0,
		"room_news": {
			"content": "",
			"ctime": "",
			"ctime_text": ""
		}
	}
}
```

</details>

## 批量查询直播间状态

> http://api.live.bilibili.com/room/v1/Room/get_status_info_by_uids

*请求方式：POST*

认证方式：无，请不要在标头中添加cookie。


**正文参数：**

| 参数名     | 类型 | 内容                     | 必要性         | 备注                                                         |
| ---------- | ---- | ------------------------ | -------------- | ------------------------------------------------------------ |
| uids       | array  | 要查询的主播mid         | 必要          |                                                              |


**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-111：csrf校验失败 |
| message | str  | 错误信息 | 默认为success                                                  |
| msg     | str  | 错误信息 | 默认为success                                                  |
| ttl     | num  | 1        |                                                              |
| data    | obj  | 信息本体 |                                                              |

`data`对象：

| 字段     | 类型 | 内容     | 备注         |
| -------- | ---- | -------- | ------------ |
| uid      | str  | 直播间信息  | 实际字段为主播mid  |

`uid`对象：

| 字段     | 类型 | 内容     | 备注         |
| -------- | ---- | -------- | ------------ |
| area      | num  | 直播间分区id  |            |
| area_name | str  | 直播间分区名  |            |
| area_v2_id | num  | 直播间新版分区id  |            |
| area_v2_name | str  | 直播间新版分区名  |            |
| area_v2_parent_id | num  | 直播间父分区id  |            |
| area_v2_parent_name | str  | 直播间父分区名  |            |
| broadcast_type | num  | 直播类型  |  0:普通直播，1：手机直播       |
| cover_from_user | str  | 直播间封面url  |            |
| face      | str  | 主播头像url  |            |
| hidden_till | str  | 直播间隐藏信息  |            |
| keyframe  | str  | 直播间关键帧url  |            |
| live_status | num  | 直播间开播状态  |  0：未开播，1：正在直播，2：轮播中          |
| live_time      | num  | 直播持续时长  |            |
| lock_till | str  | 直播间封禁信息  |            |
| online    | num  | 直播间在线人数  |            |
| room_id   | num  | 直播间房间号    | 直播间实际房间号   |
| short_id  | num  | 直播间房间号    | 直播间短房间号，常见于签约主播   |
| tag_name  | str  | 直播间标签      |            |
| tags      | str  | 直播间自定标签   |            |
| title     | str  | 直播间标题      |            |
| uid       | num  | 主播mid        |            |
| uname     | str  | 主播用户名     |            |

**示例：**

查询用户`mid=194484313`的直播间信息

```shell
curl https://api.live.bilibili.com/room/v1/Room/get_status_info_by_uids \
-H "Content-Type: application/json" \
-d "{\"uids\": [194484313]}" 
```

<details>
<summary>查看响应示例：</summary>

```json
{
	"code": 0,
	"msg": "success",
	"message": "success",
	"data": {
		"194484313": {
			"title": "中元节可爱鬼来喽！",
			"room_id": 6154037,
			"uid": 194484313,
			"online": 955261,
			"live_time": 0,
			"live_status": 2,
			"short_id": 732,
			"area": 1,
			"area_name": "单机联机",
			"area_v2_id": 236,
			"area_v2_name": "主机游戏",
			"area_v2_parent_name": "单机游戏",
			"area_v2_parent_id": 6,
			"uname": "Asaki大人",
			"face": "https://i1.hdslb.com/bfs/face/e8f57fd6992f7d2ef6e6bcee957fb6cf6bca3d80.jpg",
			"tag_name": "以撒,minecraft,饥荒,彩虹六号,东方",
			"tags": "",
			"cover_from_user": "https://i0.hdslb.com/bfs/live/new_room_cover/0a0a8eb5bd7fb64a036b55c748f02ad79a210ec9.jpg",
			"keyframe": "https://i0.hdslb.com/bfs/live-key-frame/keyframe0823020500000615403721k8sp.jpg",
			"lock_till": "0000-00-00 00:00:00",
			"hidden_till": "0000-00-00 00:00:00",
			"broadcast_type": 0
		}
	}
}

```

</details>
