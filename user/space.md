# 用户空间相关

## 查询相关

### 查询用户置顶视频

>http://api.bilibili.com/x/space/top/arc

*方式:GET*

粉丝在其主页上可见

参数：

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| vmid   | url  | 目标用户UID | 必要   |      |

**json回复：**

| 字段    | 类型 | 内容     | 备注                                                 |
| ------- | ---- | -------- | ---------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />53016：没有置顶视频 |
| message | str  | 错误信息 | 默认为0                                              |
| ttl     | num  | 1        | 作用尚不明确                                         |
| data    | obj  | 信息本体 |                                                      |

`data`对象：

基本同「[视频详细信息](\video\info.md#视频详细信息)」中的data对象

示例：

查询用户`UID=23215368`的置顶视频

http://api.bilibili.com/x/space/top/arc?vmid=23215368

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"aid": 37896701,
		"videos": 1,
		"tid": 28,
		"tname": "原创音乐",
		"copyright": 1,
		"pic": "http://i2.hdslb.com/bfs/archive/cc9e72822d68fffdd0406144f1b5348a13c89652.jpg",
		"title": "燃烧吧！铃声！把主流手机铃声编成一首曲子",
		"pubdate": 1544469671,
		"ctime": 1544469671,
		"desc": "各品牌的手机铃声大合奏，毫无违和感~",
		"state": 0,
		"attribute": 16768,
		"duration": 208,
		"rights": {
			"bp": 0,
			"elec": 0,
			"download": 0,
			"movie": 0,
			"pay": 0,
			"hd5": 1,
			"no_reprint": 1,
			"autoplay": 1,
			"ugc_pay": 0,
			"is_cooperation": 0,
			"ugc_pay_preview": 0,
			"no_background": 0
		},
		"owner": {
			"mid": 23215368,
			"name": "Wayjon冰冰酱",
			"face": "http://i2.hdslb.com/bfs/face/7c9715f1768191137eb7ebf91918ca0f99532012.jpg"
		},
		"stat": {
			"aid": 37896701,
			"view": 1058237,
			"danmaku": 16821,
			"reply": 3725,
			"favorite": 76888,
			"coin": 100694,
			"share": 17091,
			"now_rank": 0,
			"his_rank": 0,
			"like": 90521,
			"dislike": 0
		},
		"dynamic": "#编曲##FL##纯音乐#",
		"cid": 66621209,
		"dimension": {
			"width": 1920,
			"height": 1080,
			"rotate": 0
		},
		"bvid": "BV18t411q7zz",
		"reason": "",
		"inter_video": false
	}
}
```



### 查询用户代表作视频列表

> http://api.bilibili.com/x/space/masterpiece

*方式:GET*

新访客在其主页上可见

最多可以设置3个

参数：

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| vmid   | url  | 目标用户UID | 必要   |      |

**json回复：**

| 字段    | 类型   | 内容       | 备注                        |
| ------- | ------ | ---------- | --------------------------- |
| code    | num    | 返回值     | 0：成功<br />-400：请求错误 |
| message | str    | 错误信息   | 默认为0                     |
| ttl     | num    | 1          | 作用尚不明确                |
| data    | arrary | 代表作列表 |                             |

`data`数组：

| 项   | 类型 | 内容    | 备注                      |
| ---- | ---- | ------- | ------------------------- |
| 0    | obj  | 代表作1 | 无则为空                  |
| 1    | obj  | 代表作2 | 无则为空                  |
| 2    | obj  | 代表作3 | 无则为空<br />最多设置3个 |

`data`数组中的对象：

基本同「[视频详细信息](\video\info.md#视频详细信息)」中的data对象

示例：

查询用户`UID=23215368`的代表作视频列表

http://api.bilibili.com/x/space/masterpiece?vmid=23215368

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": [{
		"aid": 37896701,
		"videos": 1,
		"tid": 28,
		"tname": "原创音乐",
		"copyright": 1,
		"pic": "http://i2.hdslb.com/bfs/archive/cc9e72822d68fffdd0406144f1b5348a13c89652.jpg",
		"title": "燃烧吧！铃声！把主流手机铃声编成一首曲子",
		"pubdate": 1544469671,
		"ctime": 1544469671,
		"desc": "各品牌的手机铃声大合奏，毫无违和感~",
		"state": 0,
		"attribute": 16768,
		"duration": 208,
		"rights": {
			"bp": 0,
			"elec": 0,
			"download": 0,
			"movie": 0,
			"pay": 0,
			"hd5": 1,
			"no_reprint": 1,
			"autoplay": 1,
			"ugc_pay": 0,
			"is_cooperation": 0,
			"ugc_pay_preview": 0,
			"no_background": 0
		},
		"owner": {
			"mid": 23215368,
			"name": "Wayjon冰冰酱",
			"face": "http://i2.hdslb.com/bfs/face/7c9715f1768191137eb7ebf91918ca0f99532012.jpg"
		},
		"stat": {
			"aid": 37896701,
			"view": 1058241,
			"danmaku": 16821,
			"reply": 3725,
			"favorite": 76888,
			"coin": 100694,
			"share": 17091,
			"now_rank": 0,
			"his_rank": 0,
			"like": 90521,
			"dislike": 0
		},
		"dynamic": "#编曲##FL##纯音乐#",
		"cid": 66621209,
		"dimension": {
			"width": 1920,
			"height": 1080,
			"rotate": 0
		},
		"bvid": "BV18t411q7zz",
		"reason": "",
		"inter_video": false
	}, {
		"aid": 39596658,
		"videos": 1,
		"tid": 21,
		"tname": "日常",
		"copyright": 1,
		"pic": "http://i2.hdslb.com/bfs/archive/431e51d0e40e3461e1c1b0f59c755ae8843b1adb.jpg",
		"title": "MY2018 - 纪念我的2018年",
		"pubdate": 1546328392,
		"ctime": 1546328392,
		"desc": "",
		"state": 0,
		"attribute": 16768,
		"duration": 239,
		"mission_id": 10996,
		"rights": {
			"bp": 0,
			"elec": 0,
			"download": 0,
			"movie": 0,
			"pay": 0,
			"hd5": 1,
			"no_reprint": 1,
			"autoplay": 1,
			"ugc_pay": 0,
			"is_cooperation": 0,
			"ugc_pay_preview": 0,
			"no_background": 0
		},
		"owner": {
			"mid": 23215368,
			"name": "Wayjon冰冰酱",
			"face": "http://i2.hdslb.com/bfs/face/7c9715f1768191137eb7ebf91918ca0f99532012.jpg"
		},
		"stat": {
			"aid": 39596658,
			"view": 1518,
			"danmaku": 16,
			"reply": 40,
			"favorite": 22,
			"coin": 60,
			"share": 9,
			"now_rank": 0,
			"his_rank": 0,
			"like": 112,
			"dislike": 0
		},
		"dynamic": "#vlog##记录##生活记录#",
		"cid": 69561078,
		"dimension": {
			"width": 1920,
			"height": 1080,
			"rotate": 0
		},
		"bvid": "BV1Jt411B7La",
		"reason": "",
		"inter_video": false
	}, {
		"aid": 44721369,
		"videos": 1,
		"tid": 28,
		"tname": "原创音乐",
		"copyright": 1,
		"pic": "http://i0.hdslb.com/bfs/archive/9887797402599c42f74a7624f3db4a92a0ebf465.jpg",
		"title": "【铃声串烧系列】华米两开花；中华有为，国之荣耀！把主流手机铃声编成一首曲子",
		"pubdate": 1551128445,
		"ctime": 1551128445,
		"desc": "把主流手机铃声编成一首曲子，这一版用华为的铃声作为主旋律，毫无违和感~伴随着2019mwc的开幕，希望国产厂商能获得全世界的目光，并且将属于中国人的科技自信传递到全世界！",
		"state": 0,
		"attribute": 16768,
		"duration": 174,
		"rights": {
			"bp": 0,
			"elec": 0,
			"download": 0,
			"movie": 0,
			"pay": 0,
			"hd5": 1,
			"no_reprint": 1,
			"autoplay": 1,
			"ugc_pay": 0,
			"is_cooperation": 0,
			"ugc_pay_preview": 0,
			"no_background": 0
		},
		"owner": {
			"mid": 23215368,
			"name": "Wayjon冰冰酱",
			"face": "http://i2.hdslb.com/bfs/face/7c9715f1768191137eb7ebf91918ca0f99532012.jpg"
		},
		"stat": {
			"aid": 44721369,
			"view": 306757,
			"danmaku": 7713,
			"reply": 1520,
			"favorite": 17216,
			"coin": 16489,
			"share": 2917,
			"now_rank": 0,
			"his_rank": 0,
			"like": 21439,
			"dislike": 0
		},
		"dynamic": "#铃声##纯音乐##音乐#【铃声串烧】Mix Ringtones！船新的版本来啦！这一版用华为的铃声作为主旋律，毫无违和感~伴随着2019mwc的开幕，希望国产厂商能获得全世界的目光，并且将属于中国人的科技自信传递到全世界！",
		"cid": 78290138,
		"dimension": {
			"width": 1920,
			"height": 1080,
			"rotate": 0
		},
		"bvid": "BV1vb411879C",
		"reason": "",
		"inter_video": false
	}]
}
```



### 查询用户投稿视频明细

<img src="/imgs/video_up.svg" width="100" height="100" />

> http://api.bilibili.com/x/space/arc/search

*方式:GET*

参数：

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | url  | 目标用户UID | 必要   |      |
| pn     | url  | 页码        | 必要   |      |
| ps     | url  | 每页项数    | 必要   |      |

**json回复：**

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        | 作用尚不明确                |
| data    | data | 信息本体 |                             |

`data`对象：

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| list | obj  | 列表信息 |      |
| page | obj  | 页面信息 |      |

`data`中的`list`对象：

| 字段  | 类型   | 内容             | 备注 |
| ----- | ------ | ---------------- | ---- |
| tlist | obj    | 投稿视频分区索引 |      |
| vlist | arrary | 投稿视频列表     |      |

`list`中的`tlist`对象：

| 字段  | 类型 | 内容         | 备注                  |
| ----- | ---- | ------------ | --------------------- |
| {tID} | obj  | 该分区的详情 | 字段名为存在的分区tID |
| ……    | obj  | ……           | 向下扩展              |

`tlist`中的`{tID}`对象：

| 字段  | 类型 | 内容                 | 备注 |
| ----- | ---- | -------------------- | ---- |
| count | num  | 投稿至该分区的视频数 |      |
| name  | str  | 该分区名称           |      |
| tid   | num  | 该分区tID            |      |

`list`中的`vlist`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 投稿视频1       |      |
| n    | obj  | 投稿视频（n+1） |      |
| ……   | obj  | ……              | ……   |

`list`中的`vlist`数组中的对象：

| 字段           | 类型 | 内容           | 备注                         |
| -------------- | ---- | -------------- | ---------------------------- |
| aid            | num  | 稿件avID       |                              |
| author         | str  | 视频UP主       | 不一定为目标用户（合作视频） |
| bvid           | str  | 稿件bvID       |                              |
| comment        | num  | 视频评论数     |                              |
| copyright      | str  | 空             | 作用尚不明确                 |
| created        | num  | 投稿时间       | 时间戳                       |
| description    | str  | 视频简介       |                              |
| hide_click     | bool | false          | 作用尚不明确                 |
| is_pay         | num  | 0              | 作用尚不明确                 |
| is_union_video | num  | 是否为合作视频 | 0：否<br />1：是             |
| length         | str  | 视频长度       | MM:SS                        |
| mid            | num  | 视频UP主UID    | 不一定为目标用户（合作视频） |
| pic            | str  | 视频封面       | jpg gif                      |
| play           | num  | 视频播放次数   |                              |
| review         | num  | 0              |                              |
| subtitle       | str  | 0              |                              |
| title          | str  | 视频标题       |                              |
| typeid         | num  | 视频分区tID    |                              |
| video_review   | num  | 视频弹幕数     |                              |

`data`中的`page`对象：

| 字段  | 类型 | 内容       | 备注 |
| ----- | ---- | ---------- | ---- |
| count | num  | 总计稿件数 |      |
| pn    | num  | 当前页码   |      |
| ps    | num  | 每页项数   |      |

示例：

`pn`（页码）和`ps`（每页项数）只改变`vlist`中成员的多少与内容

已每页2项查询用户`UID=53456`的第1页投稿视频明细

http://api.bilibili.com/x/space/arc/search?mid=53456&ps=2&pn=1

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"list": {
			"tlist": {
				"1": {
					"tid": 1,
					"count": 17,
					"name": "动画"
				},
				"160": {
					"tid": 160,
					"count": 43,
					"name": "生活"
				},
				"3": {
					"tid": 3,
					"count": 33,
					"name": "音乐"
				},
				"4": {
					"tid": 4,
					"count": 70,
					"name": "游戏"
				}
			},
			"vlist": [{
				"comment": 4626,
				"typeid": 17,
				"play": 954380,
				"pic": "//i0.hdslb.com/bfs/archive/b40edb19d3000763e1984f854f8f13d2159e13bc.jpg",
				"subtitle": "",
				"description": "游戏：动物森友会 平台：Switch\n封面画师：微博@HRDrifter \n终于盼来了动森的新作，和大家一起守夜等着游戏解锁，终于能在第一时间和大家一起分享这份喜悦~\n但是为什么这份高兴的心情最后会变成越来越多的房债呢……\n我的微博：@_warma_",
				"copyright": "",
				"title": "【warma】用水壶往海里浇水海平面会升高吗？《动物森友会》",
				"review": 0,
				"author": "Warma",
				"mid": 53456,
				"created": 1585311134,
				"length": "48:16",
				"video_review": 25064,
				"aid": 667551016,
				"bvid": "BV1na4y1t7Bf",
				"hide_click": false,
				"is_pay": 0,
				"is_union_video": 0
			}, {
				"comment": 3372,
				"typeid": 17,
				"play": 838204,
				"pic": "//i1.hdslb.com/bfs/archive/fc2bd95021e5c88a16b16a3bef803e0fc141d059.jpg",
				"subtitle": "",
				"description": "游戏：Rimworld\n上一期：av96139881\n点赞过8W会更新下一期的~\n录制这一期的时候嗓子炎症加剧了，所以说话有点点闷，不过现在已经好很多了~ 下一期要录的话，我会在嗓子完全康复后再录制的，大家放心~\n我的微博：@_warma_",
				"copyright": "",
				"title": "【warma实况】拿起狼牙棒去交朋友！《Rimworld》【第二期】",
				"review": 0,
				"author": "Warma",
				"mid": 53456,
				"created": 1584758891,
				"length": "21:40",
				"video_review": 12964,
				"aid": 98061972,
				"bvid": "BV1vE411c7Wu",
				"hide_click": false,
				"is_pay": 0,
				"is_union_video": 0
			}]
		},
		"page": {
			"count": 163,
			"pn": 1,
			"ps": 2
		}
	}
}
```

