# 直播间基本信息

## 获取用户对应的直播间状态

> http://api.live.bilibili.com/room/v1/Room/getRoomInfoOld

*方式：GET*

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
| ttl     | num  | 1        | 作用尚不明确                |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段           | 类型 | 内容          | 备注                     |
| -------------- | ---- | ------------- | ------------------------ |
| roomStatus     | num  | 直播间状态    | 0：无房间<br />1：有房间 |
| roundStatus    | num  | 轮播状态      | 0：未轮播<br />1：轮播   |
| liveStatus     | num  | 直播状态      | 0：未开播<br />1：直播中 |
| url            | str  | 直播间网页url |                          |
| title          | str  | 直播间标题    |                          |
| cover          | str  | 直播间封面    |                          |
| online         | num  | 直播间人气    | 值为上次直播刷新         |
| roomid         | num  | 直播间ID      |                          |
| broadcast_type | num  | 0             |                          |
| online_hidden  | num  | 0             |                          |

**示例：**

查询用户`UID=322892`的直播间信息

http://api.live.bilibili.com/room/v1/Room/getRoomInfoOld?mid=322892

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

