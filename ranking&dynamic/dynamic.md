# 视频最新动态

## 获取分区最新动态视频列表

> http://api.bilibili.com/x/web-interface/dynamic/region

*方式：GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注    |
| ------ | ---- | ----------- | ------ | ------- |
| pn     | num  | 页码        | 非必要 | 默认为1 |
| ps     | num  | 每页项数    | 非必要 | 默认为5 |
| rid    | num  | 目标分区tID | 必要   |         |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        | 作用尚不明确                |
| data    | obj  | 信息本体 |                             |

`data`对象：

| 字段     | 类型   | 内容     | 备注 |
| -------- | ------ | -------- | ---- |
| archives | array | 视频列表 |      |
| page     | obj    | 页面信息 |      |

`data`中的`archives`数组：

| 项   | 类型 | 内容      | 备注 |
| ---- | ---- | --------- | ---- |
| 0    | obj  | 视频1     |      |
| n    | obj  | 视频(n+1) |      |
| ……   | obj  | ……        | ……   |

`data`中的`archives`数组中的对象：

基本同「[视频详细信息](https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/video/info.md#视频详细信息（avID/bvID互转）)」中的data对象

`data`中的`page`对象：

| 字段  | 类型 | 内容       | 备注 |
| ----- | ---- | ---------- | ---- |
| count | num  | 总计视频数 |      |
| num   | num  | 当前页码   |      |
| size  | num  | 每页项数   |      |

**示例：**

获取`tID=21`（生活->日常）分区中的2条最新动态视频信息

https://api.bilibili.com/x/web-interface/dynamic/region?pn=1&ps=2&rid=21

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"page": {
			"num": 1,
			"size": 2,
			"count": 189
		},
		"archives": [{
			"aid": 56998612,
			"videos": 24,
			"tid": 21,
			"tname": "日常",
			"copyright": 1,
			"pic": "http://i2.hdslb.com/bfs/archive/76536be425ed98ba1f1b9aef1ada3a09f94c9f04.jpg",
			"title": "操控百万UP主的一天！",
			"pubdate": 1562568733,
			"ctime": 1561624175,
			"desc": "拍这个视频还挺辛苦的，希望大家喜欢的话给个三连叭！",
			"state": 0,
			"attribute": 536887424,
			"duration": 1864,
			"rights": {
				"bp": 0,
				"elec": 0,
				"download": 0,
				"movie": 0,
				"pay": 0,
				"hd5": 0,
				"no_reprint": 1,
				"autoplay": 0,
				"ugc_pay": 0,
				"is_cooperation": 0,
				"ugc_pay_preview": 0,
				"no_background": 0
			},
			"owner": {
				"mid": 2206456,
				"name": "花少北丶",
				"face": "http://i1.hdslb.com/bfs/face/86ef6895a8f88c80f2885e7eb9ba7989db437b93.jpg"
			},
			"stat": {
				"aid": 56998612,
				"view": 2863604,
				"danmaku": 82588,
				"reply": 5502,
				"favorite": 65471,
				"coin": 104905,
				"share": 5815,
				"now_rank": 0,
				"his_rank": 12,
				"like": 165638,
				"dislike": 0
			},
			"dynamic": "你想看的这里都有！",
			"cid": 99548502,
			"dimension": {
				"width": 1920,
				"height": 1080,
				"rotate": 0
			},
			"bvid": "BV1Wx411d7jX"
		}, {
			"aid": 837503204,
			"videos": 1,
			"tid": 21,
			"tname": "日常",
			"copyright": 1,
			"pic": "http://i1.hdslb.com/bfs/archive/7025827d8dbfc6139a2d066daa51a08897282534.jpg",
			"title": "“都是小人物，就别说什么大话了，活着就行”",
			"pubdate": 1585264054,
			"ctime": 1585264054,
			"desc": "每一位用心生活的小人物，都是各自生活中不平凡的英雄！",
			"state": 0,
			"attribute": 16512,
			"duration": 295,
			"mission_id": 12868,
			"rights": {
				"bp": 0,
				"elec": 0,
				"download": 0,
				"movie": 0,
				"pay": 0,
				"hd5": 0,
				"no_reprint": 1,
				"autoplay": 1,
				"ugc_pay": 0,
				"is_cooperation": 0,
				"ugc_pay_preview": 0,
				"no_background": 0
			},
			"owner": {
				"mid": 350928606,
				"name": "彼岸的岛",
				"face": "http://i2.hdslb.com/bfs/face/9814b8b6defc045aa07c3bb08e8a30e63afd9f3e.jpg"
			},
			"stat": {
				"aid": 837503204,
				"view": 142239,
				"danmaku": 602,
				"reply": 702,
				"favorite": 4728,
				"coin": 4712,
				"share": 917,
				"now_rank": 0,
				"his_rank": 0,
				"like": 7700,
				"dislike": 0
			},
			"dynamic": "#全能打卡挑战##正能量##感人#",
			"cid": 169901162,
			"dimension": {
				"width": 1280,
				"height": 720,
				"rotate": 0
			},
			"bvid": "BV1cg4y1a7tB"
		}]
	}
}
```

