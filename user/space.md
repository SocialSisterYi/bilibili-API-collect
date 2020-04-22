# 用户空间相关

## 查询相关

### 查询用户置顶视频

>http://api.bilibili.com/x/space/top/arc

*方式:GET*

粉丝在其主页上可见

**参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| vmid   | url  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                 |
| ------- | ---- | -------- | ---------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />53016：没有置顶视频 |
| message | str  | 错误信息 | 默认为0                                              |
| ttl     | num  | 1        | 作用尚不明确                                         |
| data    | obj  | 信息本体 |                                                      |

`data`对象：

基本同「[视频详细信息](https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/video/info.md#视频详细信息（avID/bvID互转）)」中的data对象

**示例：**

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

**参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| vmid   | url  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

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

基本同「[视频详细信息](https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/video/info.md#视频详细信息（avID/bvID互转）)」中的data对象

**示例：**

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

**参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | url  | 目标用户UID | 必要   |      |
| pn     | url  | 页码        | 必要   |      |
| ps     | url  | 每页项数    | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        | 作用尚不明确                |
| data    | obj  | 信息本体 |                             |

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
| pic            | str  | 视频封面       |                              |
| play           | num  | 视频播放次数   |                              |
| review         | num  | 0              | 作用尚不明确                 |
| subtitle       | str  | 空             | 作用尚不明确                 |
| title          | str  | 视频标题       |                              |
| typeid         | num  | 视频分区tID    |                              |
| video_review   | num  | 视频弹幕数     |                              |

`data`中的`page`对象：

| 字段  | 类型 | 内容       | 备注 |
| ----- | ---- | ---------- | ---- |
| count | num  | 总计稿件数 |      |
| pn    | num  | 当前页码   |      |
| ps    | num  | 每页项数   |      |

**示例：**

`pn`（页码）和`ps`（每页项数）只改变`vlist`中成员的多少与内容

以每页2项查询用户`UID=53456`的第1页投稿视频明细

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



### 查询用户追番预览列表

<img src="/imgs/bangumi_fav.svg" width="100" height="100" />

> http://space.bilibili.com/ajax/Bangumi/getList

*方式:GET*

带有转义，且只能获取最多15条

**参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | url  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段   | 类型                     | 内容                               | 备注                        |
| ------ | ------------------------ | ---------------------------------- | --------------------------- |
| status | bool                     | 状态                               | false：失败<br />true：成功 |
| data   | 失败：str<br />成功：obj | 失败：错误信息<br />成功：信息本体 |                             |

`data`对象：

| 字段   | 类型   | 内容         | 备注         |
| ------ | ------ | ------------ | ------------ |
| count  | num    | 总计追番数   |              |
| pages  | num    | 0            | 作用尚不明确 |
| result | arrary | 追番预览列表 |              |

`data`中的`result`数组：

| 项   | 类型 | 内容        | 备注                       |
| ---- | ---- | ----------- | -------------------------- |
| 0    | obj  | 追番1       |                            |
| n    | obj  | 追番（n+1） | 按照目标用户的关注顺序排列 |
| ……   | obj  | ……          |                            |
| 14   | obj  | 追番15      | 最后一项                   |

`data`中的`result`数组中的对象：

| 字段            | 类型 | 内容            | 备注                              |
| --------------- | ---- | --------------- | --------------------------------- |
| brief           | str  | 简介            |                                   |
| cover           | str  | 封面图片url     |                                   |
| evaluate        | str  | 空              |                                   |
| favorites       | num  | 追番数          |                                   |
| is_finish       | num  | 是否已完结      | 0：未完结<br />1：已完结          |
| last_ep_index   | num  | 0               | 作用尚不明确                      |
| newest_ep_index | num  | 最新一话        | 可能为0                           |
| season_id       | str  | 番剧ssID        |                                   |
| share_url       | str  | 播放页面链接url |                                   |
| title           | str  | 标题            |                                   |
| total_count     | num  | 总计集数        | 未完结：-1<br />已完结：非0正整数 |

**示例：**

查看用户`UID=14082`的追番预览列表

http://space.bilibili.com/ajax/Bangumi/getList?mid=14082

```json
{
	"status": true,
	"data": {
		"count": 25,
		"pages": 0,
		"result": [{
			"season_id": "29310",
			"share_url": "http:\/\/bangumi.bilibili.com\/anime\/29310\/",
			"title": "\u5f02\u5ea6\u4fb5\u5165 ID:INVADED",
			"is_finish": 1,
			"favorites": 3479220,
			"newest_ep_index": 13,
			"last_ep_index": 0,
			"total_count": 13,
			"cover": "http:\/\/i0.hdslb.com\/bfs\/bangumi\/image\/9bf9e66968f85b33ec3769a16c86b36dc984abbc.png",
			"evaluate": "",
			"brief": "\u672c\u7247\u8bb2\u8ff0\u5229\u7528\u80fd\u68c0\u6d4b\u51fa\u4eba\u4eec\u6740\u610f\u7684\u88c5\u7f6e\u4ee5\u53ca\u5229\u7528\u601d\u60f3\u7c92\u5b50\u505a\u51fa\u7684\u201c\u4e95\u201d\uff0c\u6765\u63a2\u77e5\u4e8b\u4ef6\u771f\u76f8\u7684\u79d1\u5e7b\u6545\u4e8b\u3002"
		}, {
			"season_id": "25739",
			"share_url": "http:\/\/bangumi.bilibili.com\/anime\/25739\/",
			"title": "\u5173\u4e8e\u6211\u8f6c\u751f\u53d8\u6210\u53f2\u83b1\u59c6\u8fd9\u6863\u4e8b",
			"is_finish": 1,
			"favorites": 5518829,
			"newest_ep_index": 0,
			"last_ep_index": 0,
			"total_count": 27,
			"cover": "http:\/\/i0.hdslb.com\/bfs\/bangumi\/a4c0e0ccc44fe3949a734f546cf5bb07da925bad.png",
			"evaluate": "",
			"brief": "\u53f2\u83b1\u59c6\u751f\u6d3b\uff0c\u5f00\u59cb\u4e86\u3002\n\u4e0a\u73ed\u65cf\u7684\u4e09\u4e0a\u609f\u5728\u9053\u8def\u4e0a\u88ab\u6b79\u5f92\u7ed9\u523a\u6740\u8eab\u4ea1\u540e\uff0c\u56de\u8fc7\u795e\u6765\u53d1\u73b0\u81ea\u5df1\u8f6c\u751f\u5230\u4e86\u5f02\u4e16\u754c\u3002\n\u4e0d..."
		}, 
		…………
		]
	}
}
```



### 查询用户追番（追剧）明细

<img src="/imgs/bangumi_fav.svg" width="100" height="100" />

> http://api.bilibili.com/x/space/bangumi/follow/list

*方式:GET*

**参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注                 |
| ------ | ---- | ----------- | ------ | -------------------- |
| vmid   | url  | 目标用户UID | 必要   |                      |
| pn     | url  | 页码        | 非必要 | 默认为1              |
| ps     | url  | 每页项数    | 非必要 | 默认为15             |
| type   | url  | 查询类型    | 必要   | 1：追番<br />2：追剧 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                       |
| ------- | ---- | -------- | ---------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />53013：用户隐私设置未公开 |
| message | str  | 错误信息 | 默认为0                                                    |
| ttl     | num  | 1        | 作用尚不明确                                               |
| data    | obj  | 信息本体 |                                                            |

`data`对象：

| 字段  | 类型   | 内容       | 备注 |
| ----- | ------ | ---------- | ---- |
| list  | arrary | 追番列表   |      |
| pn    | num    | 当前页码   |      |
| ps    | num    | 每页项数   |      |
| total | num    | 总计追番数 |      |

`data`中的`list`数组：

| 项   | 类型 | 内容        | 备注                       |
| ---- | ---- | ----------- | -------------------------- |
| 0    | obj  | 追番1       |                            |
| n    | obj  | 追番（n+1） | 按照目标用户的关注顺序排列 |
| ……   | obj  | ……          |                            |

`data`中的`list`数组中的对象：

基本同「番剧详细信息」中的result对象（未完工）

**示例：**

查看用户`UID=14082`的追番明细

http://api.bilibili.com/x/space/bangumi/follow/list?vmid=14082&pn=1&ps=2&type=1

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"list": [{
			"season_id": 29310,
			"media_id": 28224080,
			"season_type": 1,
			"season_type_name": "番剧",
			"title": "异度侵入 ID:INVADED",
			"cover": "http://i0.hdslb.com/bfs/bangumi/image/9bf9e66968f85b33ec3769a16c86b36dc984abbc.png",
			"total_count": 13,
			"is_finish": 1,
			"is_started": 1,
			"is_play": 1,
			"badge": "会员专享",
			"badge_type": 0,
			"rights": {
				"allow_review": 1,
				"is_selection": 1,
				"selection_style": 1
			},
			"stat": {
				"follow": 3475768,
				"view": 87500861,
				"danmaku": 1334654,
				"reply": 316632,
				"coin": 835150,
				"series_follow": 3475242,
				"series_view": 87500861
			},
			"new_ep": {
				"id": 307774,
				"index_show": "全13话",
				"cover": "http://i0.hdslb.com/bfs/archive/3dce2b856a7b0ea667aa288b51b7c0478fa56c4d.jpg",
				"title": "13",
				"long_title": "CHANNELEDⅡ",
				"pub_time": "2020-03-23 00:30:00",
				"duration": 1481000
			},
			"rating": {
				"score": 9.8,
				"count": 262589
			},
			"square_cover": "http://i0.hdslb.com/bfs/bangumi/image/664dbf039ec2da8dd982b697a108e28e87b9897e.jpg",
			"season_status": 13,
			"season_title": "TV",
			"badge_ep": "会员",
			"media_attr": 196608,
			"season_attr": 0,
			"evaluate": "本片讲述利用能检测出人们杀意的装置以及利用思想粒子做出的“井”，来探知事件真相的科幻故事。...",
			"areas": [{
				"id": 2,
				"name": "日本"
			}],
			"subtitle": "",
			"first_ep": 307446,
			"can_watch": 1,
			"series": {
				"series_id": 4760,
				"title": "ID:INVADED",
				"season_count": 1,
				"new_season_id": 29310
			},
			"publish": {
				"pub_time": "2020-01-06 00:30:00",
				"pub_time_show": "敬请期待",
				"release_date": "2020-01-06",
				"release_date_show": "2020年1月6日"
			},
			"mode": 2,
			"section": [{
				"section_id": 39327,
				"season_id": 29310,
				"limit_group": 328,
				"watch_platform": 15,
				"copyright": "dujia",
				"ban_area_show": 1
			}, {
				"section_id": 39633,
				"season_id": 29310,
				"limit_group": 328,
				"watch_platform": 15,
				"type": 1,
				"copyright": "dujia",
				"title": "其他",
				"ban_area_show": 1
			}, {
				"section_id": 44101,
				"season_id": 29310,
				"limit_group": 316,
				"watch_platform": 15,
				"type": 4,
				"copyright": "ugc",
				"ban_area_show": 1
			}],
			"url": "https://www.bilibili.com/bangumi/play/ss29310",
			"follow_status": 2,
			"is_new": 0,
			"progress": "",
			"both_follow": true
		}, {
			"season_id": 25739,
			"media_id": 139252,
			"season_type": 1,
			"season_type_name": "番剧",
			"title": "关于我转生变成史莱姆这档事",
			"cover": "http://i0.hdslb.com/bfs/bangumi/a4c0e0ccc44fe3949a734f546cf5bb07da925bad.png",
			"total_count": 27,
			"is_finish": 1,
			"is_started": 1,
			"is_play": 1,
			"badge": "会员专享",
			"badge_type": 0,
			"rights": {
				"allow_review": 1,
				"is_selection": 1,
				"selection_style": 1
			},
			"stat": {
				"follow": 5516519,
				"view": 246739631,
				"danmaku": 3802465,
				"reply": 460225,
				"coin": 1338958,
				"series_follow": 5516535,
				"series_view": 246739631
			},
			"new_ep": {
				"id": 316957,
				"index_show": "全27话",
				"cover": "http://i0.hdslb.com/bfs/archive/81d07d1a478ce3a6209b557e14df9b9c78c42abb.jpg",
				"title": "OAD03",
				"long_title": "外传：利姆鲁的华丽教师生活 其一",
				"pub_time": "2020-03-27 00:00:03",
				"duration": 1493000
			},
			"rating": {
				"score": 9.4,
				"count": 83354
			},
			"square_cover": "http://i0.hdslb.com/bfs/bangumi/8d9f5b4a566d0547bc2e3f6f733b732a09c0d3d4.jpg",
			"season_status": 13,
			"season_title": "TV",
			"badge_ep": "会员",
			"media_attr": 0,
			"season_attr": 0,
			"evaluate": "史莱姆生活，开始了。\n上班族的三上悟在道路上被歹徒给刺杀身亡后，回过神来发现自己转生到了异世界。\n不过，自己居然是“史莱姆”！\n他在得到利姆鲁这个名字后开始了自己的史莱姆人生，随着与各个种族相处交流的...",
			"areas": [{
				"id": 2,
				"name": "日本"
			}],
			"subtitle": "",
			"first_ep": 250460,
			"can_watch": 1,
			"series": {
				"series_id": 4188,
				"title": "关于我转生变成史莱姆这档事",
				"season_count": 1,
				"new_season_id": 25739
			},
			"publish": {
				"pub_time": "2018-10-02 00:30:00",
				"pub_time_show": "2018年10月02日00:30",
				"release_date": "2018-10-02",
				"release_date_show": "2018年10月2日"
			},
			"mode": 2,
			"section": [{
				"section_id": 34988,
				"season_id": 25739,
				"limit_group": 328,
				"watch_platform": 15,
				"copyright": "bilibili",
				"ban_area_show": 1
			}],
			"url": "https://www.bilibili.com/bangumi/play/ss25739",
			"follow_status": 2,
			"is_new": 0,
			"progress": "",
			"both_follow": true
		}],
		"pn": 1,
		"ps": 2,
		"total": 25
	}
}
```



### 查询用户投稿相簿预览

> http://api.bilibili.com/x/space/album/index

*方式:GET*

所有类型的相簿

**参数：**

| 参数名 | 类型 | 内容         | 必要性 | 备注    |
| ------ | ---- | ------------ | ------ | ------- |
| mid    | url  | 目标用户UID  | 必要   |         |
| ps     | url  | 获取的相簿量 | 非必要 | 默认为8 |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                        |
| ------- | ------ | -------- | --------------------------- |
| code    | num    | 返回值   | 0：成功<br />-400：请求错误 |
| message | str    | 错误信息 | 默认为0                     |
| ttl     | num    | 1        | 作用尚不明确                |
| data    | arrary | 相簿列表 |                             |

`data`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 相簿内容1       |      |
| n    | obj  | 相簿内容（n+1） |      |
| ……   | obj  | ……              | ……   |

`data`数组中的对象：

| 字段        | 类型   | 内容        | 备注           |
| ----------- | ------ | ----------- | -------------- |
| count       | num    | 总计图片数  |                |
| ctime       | num    | 发布时间    | 时间戳         |
| description | str    | 简介        |                |
| doc_id      | num    | 相册ID      | 非动态ID！！！ |
| like        | num    | 点赞数      |                |
| pictures    | arrary | 图片内容    |                |
| poster_uid  | num    | 上传用户UID |                |
| title       | str    | 标题        | 动态内容无     |
| view        | num    | 浏览数      |                |

`data`数组中的对象中的`pictures`数组：

| 项   | 类型 | 内容            | 备注                  |
| ---- | ---- | --------------- | --------------------- |
| 0    | obj  | 内容图片1       |                       |
| n    | obj  | 内容图片（n+1） | 项数取决于`count`的值 |
| ……   | obj  | ……              | ……                    |

`pictures`数组中的对象：

| 字段       | 类型 | 内容     | 备注        |
| ---------- | ---- | -------- | ----------- |
| img_height | num  | 图片高度 |             |
| img_size   | num  | 图片大小 | 单位为KByte |
| img_src    | str  | 图片url  |             |
| img_width  | num  | 图片宽度 |             |

**示例：**

查询用户`UID=53456`的投稿相簿预览

http://api.bilibili.com/x/space/album/index?mid=53456&ps=2

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": [{
		"doc_id": 60470424,
		"poster_uid": 53456,
		"title": "",
		"description": "你醒啦！[tv_大佬]\n之前说到过的百万粉纪念的视频已经定时在了今天下午七点，欢迎来看呀！",
		"pictures": [{
			"img_src": "https://i0.hdslb.com/bfs/album/2840366e30bf7c0aba9da5adde1a771255a57bc7.jpg",
			"img_width": 625,
			"img_height": 134,
			"img_size": 14
		}],
		"count": 1,
		"ctime": 1583444859,
		"view": 1677521,
		"like": 29974
	}, {
		"doc_id": 58962388,
		"poster_uid": 53456,
		"title": "",
		"description": "上次的那些写实儿童画发出来啦！可以打印下来辟邪[tv_大佬]",
		"pictures": [{
			"img_src": "https://i0.hdslb.com/bfs/album/8acaf7c7897cb858cccab36c33a5e875adfef177.jpg",
			"img_width": 2172,
			"img_height": 3258,
			"img_size": 2831
		}, {
			"img_src": "https://i0.hdslb.com/bfs/album/1611b6b56d3d4328889a62b9f9bdc92e9d065532.jpg",
			"img_width": 3456,
			"img_height": 5184,
			"img_size": 3024
		}, {
			"img_src": "https://i0.hdslb.com/bfs/album/f3a30a2ef5b39711af8b945d54d85ffd1e932b8a.jpg",
			"img_width": 1200,
			"img_height": 757,
			"img_size": 313
		}],
		"count": 3,
		"ctime": 1582881332,
		"view": 1176646,
		"like": 25734
	}]
}
```



### 查询用户投稿相簿明细

> http://api.vc.bilibili.com/link_draw/v1/doc/doc_list

*方式:GET*

**参数：**

| 参数名    | 类型 | 内容        | 必要性 | 备注                                                         |
| --------- | ---- | ----------- | ------ | ------------------------------------------------------------ |
| uid       | url  | 目标用户UID | 必要   |                                                              |
| page_num  | url  | 页码        | 非必要 | 默认为1                                                      |
| page_size | url  | 每页项数    | 非必要 | 默认为20                                                     |
| biz       | url  | 查询类型    | 非必要 | 全部：all<br />绘画：draw<br />摄影：photo<br />日常：daily<br />默认为all |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注          |
| ------- | ---- | -------- | ------------- |
| code    | num  | 返回值   | 0：成功       |
| msg     | str  | 错误信息 | 默认为success |
| message | str  | 错误信息 | 默认为success |
| data    | obj  | 信息本体 |               |

`data`对象：

| 字段  | 类型   | 内容     | 备注 |
| ----- | ------ | -------- | ---- |
| items | arrary | 相簿列表 |      |

`items`数组：

| 项   | 类型 | 内容            | 备注 |
| ---- | ---- | --------------- | ---- |
| 0    | obj  | 相簿内容1       |      |
| n    | obj  | 相簿内容（n+1） |      |
| ……   | obj  | ……              | ……   |

`items`数组中的对象：

| 字段        | 类型   | 内容        | 备注           |
| ----------- | ------ | ----------- | -------------- |
| count       | num    | 总计图片数  |                |
| ctime       | num    | 发布时间    | 时间戳         |
| description | str    | 简介        |                |
| doc_id      | num    | 相册ID      | 非动态ID！！！ |
| like        | num    | 点赞数      |                |
| pictures    | arrary | 图片内容    |                |
| poster_uid  | num    | 上传用户UID |                |
| title       | str    | 标题        | 动态内容无     |
| view        | num    | 浏览数      |                |

`items`数组中的对象中的`pictures`数组：

| 项   | 类型 | 内容            | 备注                  |
| ---- | ---- | --------------- | --------------------- |
| 0    | obj  | 内容图片1       |                       |
| n    | obj  | 内容图片（n+1） | 项数取决于`count`的值 |
| ……   | obj  | ……              | ……                    |

`pictures`数组中的对象：

| 字段       | 类型 | 内容     | 备注        |
| ---------- | ---- | -------- | ----------- |
| img_height | num  | 图片高度 |             |
| img_size   | num  | 图片大小 | 单位为KByte |
| img_src    | str  | 图片url  |             |
| img_width  | num  | 图片宽度 |             |

**示例：**

查询用户`UID=53456`的投稿明细中的全部类型

http://api.vc.bilibili.com/link_draw/v1/doc/doc_list?uid=2&page_num=1&page_size=2&biz=all

```json
{
	"code": 0,
	"msg": "success",
	"message": "success",
	"data": {
		"items": [{
			"doc_id": 59015720,
			"poster_uid": 2,
			"title": "",
			"description": "6影是真的无脑，2个宝石都护不住（设计师：这真是太酷了）",
			"pictures": [{
				"img_src": "http://i0.hdslb.com/bfs/album/8456f050ec8639c6e0cef36aba27bfdedc550590.jpg",
				"img_width": 1824,
				"img_height": 840,
				"img_size": 1024
			}],
			"count": 1,
			"ctime": 1582894607,
			"view": 707073,
			"like": 7055
		}, {
			"doc_id": 46853140,
			"poster_uid": 2,
			"title": "",
			"description": "#年度报告# #新年Flag# https://www.bilibili.com/blackboard/timemachine2019.html\n决定了，这就是我的新年Flag！今年我一定要…",
			"pictures": [{
				"img_src": "http://i0.hdslb.com/bfs/album/5b3ae76f79d7cf2501afc3ca7c7da509dcf0e38a.jpg",
				"img_width": 1125,
				"img_height": 2184,
				"img_size": 465
			}, {
				"img_src": "http://i0.hdslb.com/bfs/album/87789fe9644337a1f7e6a0655a32584705af8bda.jpg",
				"img_width": 1125,
				"img_height": 2184,
				"img_size": 421
			}, {
				"img_src": "http://i0.hdslb.com/bfs/album/f752d7f3bb7952f6c0013b3f48ddcb07060b4721.jpg",
				"img_width": 1125,
				"img_height": 2184,
				"img_size": 524
			}, {
				"img_src": "http://i0.hdslb.com/bfs/active/7a52a411bccb716c8e67fe70e6c330d5209346de.jpg",
				"img_width": 1125,
				"img_height": 2184,
				"img_size": 534
			}],
			"count": 4,
			"ctime": 1577966163,
			"view": 833193,
			"like": 5667
		}]
	}
}
```



### 查询用户频道列表

<img src="/imgs/channel.svg" width="100" height="100" />

> http://api.bilibili.com/x/space/channel/list

*方式:GET*

**参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | url  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注         |
| ------- | ---- | -------- | ------------ |
| code    | num  | 返回值   | 0：成功      |
| message | str  | 错误信息 | 默认为0      |
| ttl     | num  | 1        | 作用尚不明确 |
| data    | obj  | 信息本体 | 无则为空     |

`data`对象：

| 字段  | 类型   | 内容       | 备注 |
| ----- | ------ | ---------- | ---- |
| count | num    | 总计频道数 |      |
| list  | arrary | 频道列表   |      |

`data`中的`list`数组：

| 项   | 类型 | 内容        | 备注                  |
| ---- | ---- | ----------- | --------------------- |
| 0    | obj  | 频道1       |                       |
| n    | obj  | 频道（n+1） | 项数取决于`count`的值 |
| ……   | obj  | ……          | ……                    |

`data`中的`list`数组中的对象：

| 字段  | 类型 | 内容           | 备注     |
| ----- | ---- | -------------- | -------- |
| cid   | num  | 频道ID         |          |
| count | num  | 频道内含视频数 |          |
| cover | str  | 封面图片url    |          |
| intro | str  | 简介           | 无则为空 |
| mid   | num  | 创建用户UID    |          |
| mtime | num  | 创建时间       | 时间戳   |
| name  | str  | 标题           |          |

**示例：**

查询用户`UID=53456`的频道列表

http://api.bilibili.com/x/space/channel/list?mid=53456

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"count": 6,
		"list": [{
			"cid": 100249,
			"mid": 53456,
			"name": "【实况】动物之森",
			"intro": "",
			"mtime": 1579898830,
			"count": 2,
			"cover": "http://i1.hdslb.com/bfs/archive/6a7ed9483c34e839dfca981b9e2b94cd4c4efa0a.jpg"
		}, {
			"cid": 79323,
			"mid": 53456,
			"name": "忆雨",
			"intro": "忆雨出现过的视频",
			"mtime": 1562535222,
			"count": 7,
			"cover": "http://i2.hdslb.com/bfs/archive/1783e4f03042b282495799adda1cb56270cea647.jpg"
		}, {
			"cid": 79322,
			"mid": 53456,
			"name": "大画家",
			"intro": "",
			"mtime": 1562535122,
			"count": 6,
			"cover": "http://i0.hdslb.com/bfs/archive/9c85a14e805c6c23cb7a42e1dbef97821bb68960.jpg"
		}, {
			"cid": 77758,
			"mid": 53456,
			"name": "灭火器",
			"intro": "",
			"mtime": 1561270856,
			"count": 4,
			"cover": "http://i2.hdslb.com/bfs/archive/0073208d086b4ebe9cdc540e7664aa74b483aeb6.jpg"
		}, {
			"cid": 75696,
			"mid": 53456,
			"name": "沃玛小剧场",
			"intro": "",
			"mtime": 1559129460,
			"count": 5,
			"cover": "http://i2.hdslb.com/bfs/archive/db2b20ecdb6ed013fc3780b0e741ea88d46b5b40.jpg"
		}, {
			"cid": 170,
			"mid": 53456,
			"name": "爆炸电台",
			"intro": "闲聊的电台",
			"mtime": 1503298893,
			"count": 7,
			"cover": "http://i2.hdslb.com/bfs/archive/73d77bc6bb0d44b239fd4f5a2682fe3144e81692.jpg"
		}]
	}
}
```



### 查询用户频道中的视频

> http://api.bilibili.com/x/space/channel/video

*方式:GET*

**参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注      |
| ------ | ---- | ----------- | ------ | --------- |
| mid    | url  | 目标用户UID | 必要   |           |
| cid    | url  | 目标频道ID  | 必要   |           |
| pn     | url  | 页码        | 非必要 | 默认为1   |
| ps     | url  | 每页项数    | 非必要 | 默认为100 |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                    |
| ------- | ---- | -------- | ------------------------------------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误<br />-404：无用户对应的频道 |
| message | str  | 错误信息 | 默认为0                                                 |
| ttl     | num  | 1        | 作用尚不明确                                            |
| data    | obj  | 信息本体 |                                                         |

`data`对象：

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| list | obj  | 频道信息 |      |
| page | obj  | 页面信息 |      |

`data`中的`list`对象：

| 字段     | 类型   | 内容           | 备注     |
| -------- | ------ | -------------- | -------- |
| archives | arrary | 包含的视频列表 |          |
| cid      | num    | 频道ID         |          |
| count    | num    | 频道内含视频数 |          |
| cover    | str    | 封面图片url    |          |
| intro    | str    | 简介           | 无则为空 |
| mid      | num    | 创建用户UID    |          |
| mtime    | num    | 创建时间       | 时间戳   |
| name     | str    | 标题           |          |

`list`中的`archives`数组：

| 项   | 类型 | 内容        | 备注                  |
| ---- | ---- | ----------- | --------------------- |
| 0    | obj  | 视频1       |                       |
| n    | obj  | 视频（n+1） | 项数取决于`count`的值 |
| ……   | obj  | ……          | ……                    |

`list`中的`archives`数组中的对象：

基本同「[视频详细信息](https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/video/info.md#视频详细信息（avID/bvID互转）)」中的data对象

`data`中的`page`对象：

| 字段  | 类型 | 内容       | 备注 |
| ----- | ---- | ---------- | ---- |
| count | num  | 总计视频数 |      |
| num   | num  | 当前页码   |      |
| size  | num  | 每页项数   |      |

**示例：**

查询用户`UID=53456`的频道`170`中的视频

http://api.bilibili.com/x/space/channel/video?mid=53456&cid=170&ps=2&pn=1

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"list": {
			"cid": 170,
			"mid": 53456,
			"name": "爆炸电台",
			"intro": "闲聊的电台",
			"mtime": 1503298893,
			"count": 7,
			"cover": "http://i2.hdslb.com/bfs/archive/73d77bc6bb0d44b239fd4f5a2682fe3144e81692.jpg",
			"archives": [{
				"aid": 87673204,
				"videos": 1,
				"tid": 21,
				"tname": "日常",
				"copyright": 1,
				"pic": "http://i0.hdslb.com/bfs/archive/5387bdcbbe4d5551adbf0ee2e607e4b7d3d8f2f0.jpg",
				"title": "【warma爆炸电台】迟来的自我介绍【第八期】",
				"pubdate": 1581244539,
				"ctime": 1581244540,
				"desc": "时隔半年的新的一期爆炸电台来啦，这是我的一系列杂谈聊天电台，这次因为多了很多新关注的朋友们，所以来做个自我介绍吧！\n画师：Dr-H_喵_   动画：K_Lacid\n结尾提到的壁纸稍后在动态发原图，动态壁纸在steam那个壁纸软件的创意工坊里搜warma能找到\n\n往期的电台：\n第一期：av6786024 \n第三期：av13619263\n第四期：av18862091\n第五期：av25092410\n第六期：av42492515\n第七期：av62910468",
				"state": 0,
				"attribute": 16512,
				"duration": 2388,
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
					"mid": 53456,
					"name": "Warma",
					"face": "http://i1.hdslb.com/bfs/face/c1bbee6d255f1e7fc434e9930f0f288c8b24293a.jpg"
				},
				"stat": {
					"aid": 87673204,
					"view": 1383542,
					"danmaku": 88908,
					"reply": 9237,
					"favorite": 32929,
					"coin": 68849,
					"share": 5140,
					"now_rank": 0,
					"his_rank": 52,
					"like": 116164,
					"dislike": 0
				},
				"dynamic": "来做个自我介绍吧！ #warma##沃玛##爆炸电台#",
				"cid": 149793525,
				"dimension": {
					"width": 1920,
					"height": 1080,
					"rotate": 0
				},
				"bvid": "BV1D7411t7Be",
				"inter_video": false
			}, {
				"aid": 62910468,
				"videos": 1,
				"tid": 21,
				"tname": "日常",
				"copyright": 1,
				"pic": "http://i2.hdslb.com/bfs/archive/4bd598f71a144d4505e259b143c0de0bf27968b2.jpg",
				"title": "【warma爆炸电台】居然收到了几千条问题！【第七期】",
				"pubdate": 1565345410,
				"ctime": 1565338559,
				"desc": "时隔半年的爆炸电台第七期终于来啦！在这一期里回答了很多问题，祝看得开心！此外，就在昨天，50万订阅了…真的谢谢大家！\n也欢迎来看往期的电台：\n第一期：av6786024 （2016年10月）\n第二期：av10373352（2017年5月）\n第三期：av13619263（2017年8月）\n第四期：av18862091（2018年1月）\n第五期：av25092410（2018年6月）\n第六期：av42492515（2019年2月）",
				"state": 0,
				"attribute": 16512,
				"duration": 1987,
				"mission_id": 11740,
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
					"mid": 53456,
					"name": "Warma",
					"face": "http://i1.hdslb.com/bfs/face/c1bbee6d255f1e7fc434e9930f0f288c8b24293a.jpg"
				},
				"stat": {
					"aid": 62910468,
					"view": 455277,
					"danmaku": 19383,
					"reply": 2108,
					"favorite": 10507,
					"coin": 19422,
					"share": 1208,
					"now_rank": 0,
					"his_rank": 0,
					"like": 31515,
					"dislike": 0
				},
				"dynamic": "爆炸电台 第七期 来啦！",
				"cid": 109284065,
				"dimension": {
					"width": 1920,
					"height": 1080,
					"rotate": 0
				},
				"bvid": "BV1gt411K7Ga",
				"inter_video": false
			}]
		},
		"page": {
			"count": 7,
			"num": 1,
			"size": 2
		}
	}
}
```



### 查看用户空间公告

> http://api.bilibili.com/x/space/notice

*方式:GET*

**参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | url  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        | 作用尚不明确                |
| data    | str  | 公告信息 | 无则为空                    |

**示例：**

查看用户`UID=53456`的空间公告

http://api.bilibili.com/x/space/notice?mid=53456

```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":"我的微博 @_warma_\n直播录像上传到：warma养鸽场\n头像画师是：微博@Dr-H_喵_\n横幅画师：@薬屋"
}
```



### 查看用户个人TAG

> http://api.bilibili.com/x/space/acc/tags

*方式:GET*

上限5条，且内容由用户自定义

带有转义

**参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | url  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                        |
| ------- | ------ | -------- | --------------------------- |
| code    | num    | 返回值   | 0：成功<br />-400：请求错误 |
| message | str    | 错误信息 | 默认为0                     |
| ttl     | num    | 1        | 作用尚不明确                |
| data    | arrary | 信息本体 |                             |

`data`数组：

| 项   | 类型 | 内容     | 备注          |
| ---- | ---- | -------- | ------------- |
| 0    | obj  | 信息本体 | 只有1项？？？ |

`data`数组中的对象：

| 字段 | 类型   | 内容        | 备注 |
| ---- | ------ | ----------- | ---- |
| mid  | num    | 目标用户UID |      |
| tags | arrary | TAG名称     |      |

`data`数组中的对象中的`tags`数组：

| 项   | 类型 | 内容     | 备注    |
| ---- | ---- | -------- | ------- |
| 0    | str  | TAG1     |         |
| n    | str  | TAG(n+1) |         |
| ……   | str  | ……       |         |
| 4    | str  | TAG5     | 上限5条 |

**示例：**

查看用户`UID=53456`的个人TAG

http://api.bilibili.com/x/space/acc/tags?mid=53456

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": [{
		"mid": 53456,
		"tags": ["\u6e38\u620f", "\u97f3\u4e50", "warma", "\u641e\u7b11", "\u52a8\u753b"]
	}]
}
```



## 设置相关

### 修改个人签名

> http://api.bilibili.com/x/member/web/sign/update

*方式：POST*

签名最多支持70个字

修改签名不会立即生效，会等待审核队列稍后生效

需要登录(SESSDATA)

**参数（ application/x-www-form-urlencoded ）：**

| 参数名    | 类型 | 内容                | 必要性 | 备注                   |
| --------- | ---- | ------------------- | ------ | ---------------------- |
| user_sign | data | 要设置的签名内容    | 非必要 | 删除签名留空或省去即可 |
| csrf      | data | cookies中的bili_jct | 必要   |                        |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />40022：签名过长 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

更新个人标签为`高中技术宅一枚，爱好MC&电子&音乐&数码&编程，资深猿厨`

curl -b "SESSDATA=xxx" -d "user_sign=%E9%AB%98%E4%B8%AD%E6%8A%80%E6%9C%AF%E5%AE%85%E4%B8%80%E6%9E%9A%EF%BC%8C%E7%88%B1%E5%A5%BDMC&%E7%94%B5%E5%AD%90&%E9%9F%B3%E4%B9%90&%E6%95%B0%E7%A0%81&%E7%BC%96%E7%A8%8B%EF%BC%8C%E8%B5%84%E6%B7%B1%E7%8C%BF%E5%8E%A8&csrf=xxx" "http://api.bilibili.com/x/member/web/sign/update"

```json
{
    "code":0,
    "message":"0",
    "ttl":1
}
```



### 修改用户空间公告

> http://api.bilibili.com/x/space/notice/set

*方式：POST*

需要登录(SESSDATA)

**参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注                                        |
| ------ | ---- | ------------------- | ------ | ------------------------------------------- |
| notice | data | 要设置的公告内容    | 非必要 | 删除公告留空或省去即可<br />公告最多150字符 |
| csrf   | data | cookies中的bili_jct | 必要   |                                             |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-304：未修改<br />-400：请求错误（超出长度限制） |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

修改个人空间公告为`鸽子`

curl -b "sessdata=xxx" -d "csrf=xxx&notice=%E9%B8%BD%E5%AD%90" "http://api.bilibili.com/x/space/notice/set"

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```



### 修改个人TAG

> http://api.bilibili.com/x/space/acc/tags/set

*方式：POST*

需要登录(SESSDATA)

需要验证`DedeUserID`存在且不为0

**参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注                                                         |
| ------ | ---- | ------------------- | ------ | ------------------------------------------------------------ |
| tags   | data | 要设置的TAG内容     | 非必要 | 删除公告留空或省去即可<br />各TAG长度小于10字符<br />最多5个TAG<br />各TAG之间用","(%2C)分隔<br />重复TAG无效 |
| csrf   | data | cookies中的bili_jct | 必要   |                                                              |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误（超出长度限制） |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

修改个人TAG为`minecraft,技术宅,大佬,小哥哥,可爱`

curl -b "SESSDATA=xxx;DedeUserID=1" -d "csrf=xxx&tags=minecraft%2C%E6%8A%80%E6%9C%AF%E5%AE%85%2C%E5%A4%A7%E4%BD%AC%2C%E5%B0%8F%E5%93%A5%E5%93%A5%2C%E5%8F%AF%E7%88%B1" "http://api.bilibili.com/x/space/acc/tags/set"

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```



### 修改（添加）置顶视频

> http://api.bilibili.com/x/space/top/arc/set

*方式：POST*

需要登录(SESSDATA)

**参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注               |
| ------ | ---- | ------------------- | ------ | ------------------ |
| aid    | data | 置顶目标视频avID    | 非必要 | avID与bvID任选一个 |
| bvid   | data | 置顶目标视频bvID    | 非必要 | avID与bvID任选一个 |
| reason | data | 置顶视频备注        | 非必要 | 置顶备注最大40字符 |
| csrf   | data | cookies中的bili_jct | 必要   |                    |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-304：未修改<br />-400：请求错误<br />53014：稿件已失效<br />53015：备注过长<br />53017：置顶非自己的稿件 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

置顶视频`av98948772`/`BV1n741127LD`

curl -b "SESSDATA=xxx" -b "aid=98948772&csrf=xxx" "http://api.bilibili.com/x/space/top/arc/set"

同curl -b "SESSDATA=xxx" -b "bvid=BV1n741127LD&csrf=xxx" "http://api.bilibili.com/x/space/top/arc/set"

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```



### 取消置顶视频

> http://api.bilibili.com/x/space/top/arc/cancel

*方式：POST*

需要登录(SESSDATA)

**参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注 |
| ------ | ---- | ------------------- | ------ | ---- |
| csrf   | data | cookies中的bili_jct | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误（重复取消） |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

curl -b "SESSDATA=xxx" -d "csrf=xxx" "http://api.bilibili.com/x/space/top/arc/cancel"

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```



### 添加代表作视频

> http://api.bilibili.com/x/space/masterpiece/add

*方式：POST*

需要登录(SESSDATA)

代表作上限为3个稿件

**参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注               |
| ------ | ---- | ------------------- | ------ | ------------------ |
| aid    | data | 置顶目标视频avID    | 非必要 | avID与bvID任选一个 |
| bvid   | data | 置顶目标视频bvID    | 非必要 | avID与bvID任选一个 |
| reason | data | 代表作备注          | 非必要 | 置顶备注最大40字符 |
| csrf   | data | cookies中的bili_jct | 必要   |                    |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />53014：稿件已失效<br />53015：备注过长<br />53017：置顶非自己的稿件<br />53019：达到上限<br />53020：已经存在该稿件 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

添加视频`av94916552`/`BV1ZE411K7ux`到代表作列表

curl -b "SESSDATA=xxx" -d "csrf=xxx&aid=94916552" "http://api.bilibili.com/x/space/masterpiece/add"

同curl -b "SESSDATA=xxx" -d "csrf=xxx&bvid=BV1ZE411K7ux" "http://api.bilibili.com/x/space/masterpiece/add"

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1
}
```



### 删除代表作视频

> http://api.bilibili.com/x/space/masterpiece/cancel

*方式：POST*

需要登录(SESSDATA)

**参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                 | 必要性 | 备注               |
| ------ | ---- | -------------------- | ------ | ------------------ |
| aid    | data | 要删除的目标视频avID | 非必要 | avID与bvID任选一个 |
| bvid   | data | 要删除的目标视频bvID | 非必要 | avID与bvID任选一个 |
| csrf   | data | cookies中的bili_jct  | 必要   |                    |

**json回复：**

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误<br />53021：置顶列表中没有该视频 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        | 作用尚不明确                                                 |

**示例：**

删除置顶视频`av59765630`/`BV1Yt41137T6`

curl -b "SESSDATA=xxx" -d "csrf=xxx&aid=59765630" "http://api.bilibili.com/x/space/masterpiece/cancel"

同curl -b "SESSDATA=xxx" -d "csrf=xxx&bvid=BV1Yt41137T6" "http://api.bilibili.com/x/space/masterpiece/cancel"

