# 用户空间相关

## 查询相关

### 查询用户置顶视频

>http://api.bilibili.com/x/space/top/arc

*方式:GET*

粉丝在其主页上可见

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| vmid   | num  | 目标用户UID | 必要   |      |

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

| 字段        | 类型 | 内容                           | 备注                    |
| ----------- | ---- | ------------------------------ | ----------------------- |
| aid         | num  | 视频avID                       |                         |
| videos      | num  | 视频分P总数                    | 默认为1                 |
| tid         | num  | 分区ID                         |                         |
| tname       | str  | 子分区名称                     |                         |
| copyright   | num  | 版权标志                       | 1：自制<br />2：转载    |
| pic         | str  | 视频封面图片url                |                         |
| title       | str  | 视频标题                       |                         |
| pubdate     | num  | 视频上传时间                   | 时间戳                  |
| ctime       | num  | 视频审核通过时间               | 时间戳                  |
| desc        | str  | 视频简介                       |                         |
| state       | num  | 0                              | 作用尚不明确            |
| attribute   | num  |                                | 作用尚不明确            |
| duration    | num  | 视频总计持续时长（所有分P）    | 单位为秒                |
| rights      | obj  | 视频属性标志                   |                         |
| owner       | obj  | 视频UP主信息                   |                         |
| stat        | obj  | 视频状态数                     |                         |
| dynamic     | str  | 视频同步发布的的动态的文字内容 | 无为空                  |
| cid         | num  | 视频1P CID                     |                         |
| dimension   | obj  | 视频1P分辨率                   |                         |
| bvid        | str  | 视频bvID                       |                         |
| reason      | str  | 置顶视频备注                   |                         |
| inter_video | bool | 是否为合作视频                 | false：否<br />true：是 |

`data`中的`rights`对象：

| 字段            | 类型 | 内容             | 备注                                     |
| --------------- | ---- | ---------------- | ---------------------------------------- |
| bp              | num  | 0                | 作用尚不明确                             |
| elec            | num  | 0                | 作用尚不明确                             |
| download        | num  | 允许下载标志     | 0：不允许<br />1：允许                   |
| movie           | num  | 视频时电影标志   | 0：否<br />1：是                         |
| pay             | num  | 仅会员可观看标志 | 0：无<br />1：有                         |
| hd5             | num  | 有高码率标志     | 0：无<br />1：有                         |
| no_reprint      | num  | 禁止转载标志     | 0：无<br />1：禁止                       |
| autoplay        | num  | 可自动播放标志   | 0：无<br />1：有  区别影视番剧与普通视频 |
| ugc_pay         | num  | 0                | 作用尚不明确                             |
| is_cooperation  | num  | 视频合作标志     | 0：无<br />1：是                         |
| ugc_pay_preview | num  | 0                | 作用尚不明确                             |
| no_background   | num  | 0                | 作用尚不明确                             |

`data`中的`owner`对象：

| 字段 | 类型 | 内容     | 备注 |
| ---- | ---- | -------- | ---- |
| mid  | num  | UP主UID  |      |
| name | str  | UP主昵称 |      |
| face | str  | UP主头像 |      |

`data`中的`stat`对象：

| 字段       | 类型 | 内容                           | 备注         |
| ---------- | ---- | ------------------------------ | ------------ |
| aid        | num  | 视频avID                       |              |
| view       | num  | 普通：观看次数<br />屏蔽时：-1 |              |
| danmaku    | num  | 弹幕条数                       |              |
| reply      | num  | 评论条数                       |              |
| favorite   | num  | 收藏人数                       |              |
| coin       | num  | 投币枚数                       |              |
| share      | num  | 分享次数                       |              |
| now_rank   | num  | 0                              | 作用尚不明确 |
| his_rank   | num  | 历史最高排行                   |              |
| like       | num  | 获赞次数                       |              |
| dislike    | num  | 0                              | 作用尚不明确 |
| evaluation | str  | 视频评分                       | 默认为空     |

同`data`中的`dimension`对象

| 字段   | 类型 | 内容         | 备注         |
| ------ | ---- | ------------ | ------------ |
| width  | num  | 当前分P 宽度 | 可能为0      |
| height | num  | 当前分P 高度 | 可能为0      |
| rotate | num  | 0            | 作用尚不明确 |

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

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| vmid   | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型   | 内容       | 备注                        |
| ------- | ------ | ---------- | --------------------------- |
| code    | num    | 返回值     | 0：成功<br />-400：请求错误 |
| message | str    | 错误信息   | 默认为0                     |
| ttl     | num    | 1          | 作用尚不明确                |
| data    | array | 代表作列表 |                             |

`data`数组：

| 项   | 类型 | 内容    | 备注                      |
| ---- | ---- | ------- | ------------------------- |
| 0    | obj  | 代表作1 | 无则为空                  |
| 1    | obj  | 代表作2 | 无则为空                  |
| 2    | obj  | 代表作3 | 无则为空<br />最多设置3个 |

`data`数组中的对象：

同查询用户置顶视频中的`data`对象

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

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户UID | 必要   |      |
| pn     | num  | 页码        | 必要   |      |
| ps     | num  | 每页项数    | 必要   |      |

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
| vlist | array | 投稿视频列表     |      |

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

如设置隐私查看自己的需要登录(SESSDATA)

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户UID | 必要   |      |

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
| result | array | 追番预览列表 |              |

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
			"title": "异度侵入 ID:INVADED",
			"is_finish": 1,
			"favorites": 3479220,
			"newest_ep_index": 13,
			"last_ep_index": 0,
			"total_count": 13,
			"cover": "http:\/\/i0.hdslb.com\/bfs\/bangumi\/image\/9bf9e66968f85b33ec3769a16c86b36dc984abbc.png",
			"evaluate": "",
			"brief": "本片讲述利用能检测出人们杀意的装置以及利用思想粒子做出的“井”，来探知事件真相的科幻故事。"
		}, {
			"season_id": "25739",
			"share_url": "http:\/\/bangumi.bilibili.com\/anime\/25739\/",
			"title": "关于我转生变成史莱姆这档事",
			"is_finish": 1,
			"favorites": 5518829,
			"newest_ep_index": 0,
			"last_ep_index": 0,
			"total_count": 27,
			"cover": "http:\/\/i0.hdslb.com\/bfs\/bangumi\/a4c0e0ccc44fe3949a734f546cf5bb07da925bad.png",
			"evaluate": "",
			"brief": "史莱姆生活，开始了。\n上班族的三上悟在道路上被歹徒给刺杀身亡后，回过神来发现自己转生到了异世界。\n不..."
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

如设置隐私查看自己的需要登录(SESSDATA)

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注                 |
| ------ | ---- | ----------- | ------ | -------------------- |
| vmid   | num  | 目标用户UID | 必要   |                      |
| pn     | num  | 页码        | 非必要 | 默认为1              |
| ps     | num  | 每页项数    | 非必要 | 默认为15             |
| type   | num  | 查询类型    | 必要   | 1：追番<br />2：追剧 |

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
| list  | array | 追番列表   |      |
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



### 查询用户关注的TAG（话题）

> http://space.bilibili.com/ajax/tags/getSubList

*方式:GET*

带有转义

只显示前100个

如设置隐私查看自己的需要登录(SESSDATA)

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段   | 类型                         | 内容                                   | 备注                        |
| ------ | ---------------------------- | -------------------------------------- | --------------------------- |
| ststus | bool                         | 返回值                                 | false：错误<br />true：正确 |
| data   | 错误时：str<br />正确时：obj | 错误时：错误信息<br />正确时：数据本体 | 正确时不返回错误信息        |

`data`对象：

| 字段  | 类型   | 内容        | 备注 |
| ----- | ------ | ----------- | ---- |
| tags  | array | 关注TAG列表 |      |
| count | num    | 关注TAG的数 |      |

`data`中的`tags`数组：

| 项   | 类型 | 内容           | 备注     |
| ---- | ---- | -------------- | -------- |
| 0    | obj  | 关注TAG1       |          |
| n    | obj  | 关注TAG（n+1） |          |
| ……   | obj  | ……             | ……       |
| 99   | obj  | 关注TAG100     | 最后一项 |

`data`中的`tags`数组中的对象：

| 字段          | 类型 | 内容                | 备注         |
| ------------- | ---- | ------------------- | ------------ |
| archive_count | num  | 0                   | 作用尚不明确 |
| cover         | str  | TAG图片url          | 无则为空     |
| name          | str  | TAG名               |              |
| notify        | num  | 1                   | 作用尚不明确 |
| tag_id        | num  | TAGID               |              |
| updated_ts    | str  | 1970-01-01 08:00:00 | 作用尚不明确 |

**示例：**

查询用户`UID=2`的关注TAG

http://space.bilibili.com/ajax/tags/getSubList?mid=2

```json
{
	"status": true,
	"data": {
		"tags": [{
			"name": "豪宅",
			"cover": "",
			"tag_id": 47637,
			"notify": 1,
			"archive_count": 0,
			"updated_ts": "1970-01-01 08:00:00"
		}, {
			"name": "死亡搁浅",
			"cover": "",
			"tag_id": 1737239,
			"notify": 1,
			"archive_count": 0,
			"updated_ts": "1970-01-01 08:00:00"
		},
		…………
		],
		"count": 58
	}
}
```





### 查询用户投稿相簿预览

> http://api.bilibili.com/x/space/album/index

*方式:GET*

所有类型的相簿

**url参数：**

| 参数名 | 类型 | 内容         | 必要性 | 备注    |
| ------ | ---- | ------------ | ------ | ------- |
| mid    | num  | 目标用户UID  | 必要   |         |
| ps     | num  | 获取的相簿量 | 非必要 | 默认为8 |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                        |
| ------- | ------ | -------- | --------------------------- |
| code    | num    | 返回值   | 0：成功<br />-400：请求错误 |
| message | str    | 错误信息 | 默认为0                     |
| ttl     | num    | 1        | 作用尚不明确                |
| data    | array | 相簿列表 |                             |

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
| pictures    | array | 图片内容    |                |
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

**url参数：**

| 参数名    | 类型 | 内容        | 必要性 | 备注                                                         |
| --------- | ---- | ----------- | ------ | ------------------------------------------------------------ |
| uid       | num  | 目标用户UID | 必要   |                                                              |
| page_num  | num  | 页码        | 非必要 | 默认为1                                                      |
| page_size | num  | 每页项数    | 非必要 | 默认为20                                                     |
| biz       | str  | 查询类型    | 非必要 | 全部：all<br />绘画：draw<br />摄影：photo<br />日常：daily<br />默认为all |

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
| items | array | 相簿列表 |      |

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
| pictures    | array | 图片内容    |                |
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

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户UID | 必要   |      |

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
| list  | array | 频道列表   |      |

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

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注      |
| ------ | ---- | ----------- | ------ | --------- |
| mid    | num  | 目标用户UID | 必要   |           |
| cid    | num  | 目标频道ID  | 必要   |           |
| pn     | num  | 页码        | 非必要 | 默认为1   |
| ps     | num  | 每页项数    | 非必要 | 默认为100 |

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
| archives | array | 包含的视频列表 |          |
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

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型   | 内容     | 备注                        |
| ------- | ------ | -------- | --------------------------- |
| code    | num    | 返回值   | 0：成功<br />-400：请求错误 |
| message | str    | 错误信息 | 默认为0                     |
| ttl     | num    | 1        | 作用尚不明确                |
| data    | array | 信息本体 |                             |

`data`数组：

| 项   | 类型 | 内容     | 备注          |
| ---- | ---- | -------- | ------------- |
| 0    | obj  | 信息本体 | 只有1项？？？ |

`data`数组中的对象：

| 字段 | 类型   | 内容        | 备注 |
| ---- | ------ | ----------- | ---- |
| mid  | num    | 目标用户UID |      |
| tags | array | TAG名称     |      |

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



### 查询用户最近玩过的游戏

> http://api.bilibili.com/x/space/lastplaygame 

*方式：GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| mid    | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型                            | 内容     | 备注                                                       |
| ------- | ------------------------------- | -------- | ---------------------------------------------------------- |
| code    | num                             | 返回值   | 0：成功<br />-400：请求错误<br />53013：用户隐私设置未公开 |
| message | str                             | 错误信息 | 默认为0                                                    |
| ttl     | num                             | 1        | 作用尚不明确                                               |
| data    | 隐藏时：null<br />公开时：array | 信息本体 |                                                            |

`data`数组：

| 项   | 类型 | 内容      | 备注             |
| ---- | ---- | --------- | ---------------- |
| 0    | obj  | 游戏1     |                  |
| n    | obj  | 游戏(n+1) | 项数为总计游戏数 |
| ……   | obj  | ……        | ……               |

`data`数组中的对象：

| 字段    | 类型 | 内容            | 备注 |
| ------- | ---- | --------------- | ---- |
| website | str  | 游戏主页链接url |      |
| image   | str  | 游戏图片url     |      |
| name    | str  | 游戏名          |      |

**示例：**

查询`UID=2`的最近玩过的游戏

 http://api.bilibili.com/x/space/lastplaygame?mid=2 

```json
{
    "code": 0,
    "message": "0",
    "ttl": 1,
    "data": [
        {
            "website": "https://game.bilibili.com/fgo/event_meihosou",
            "image": "http://i0.hdslb.com/bfs/game/f7d4ee0877089e4079b8f0b4f5c95dd4ceba512a.png",
            "name": "命运-冠位指定（Fate/GO）"
        },
        {
            "website": "https://game.bilibili.com/pcr/xxtix",
            "image": "http://i0.hdslb.com/bfs/game/7922ecea5cc76fe3c8c177e1d4a6c8cf1c36a700.jpg",
            "name": "公主连结Re:Dive"
        },
        {
            "website": "https://game.bilibili.com/dwbgx/",
            "image": "http://i0.hdslb.com/bfs/game/6d5b2df70dfa987408d8d09110cdc327949885e3.png",
            "name": "大王不高兴"
        },
        {
            "website": "https://game.bilibili.com/bangdream/1stanniversary-yxzx/",
            "image": "http://i0.hdslb.com/bfs/game/4a7d0b7272dffe5a489ee935b6bd2d4f7d5f1257.png",
            "name": "BanG Dream！"
        },
        {
            "website": "http://www.biligame.com/detail/?id=101772",
            "image": "http://i0.hdslb.com/bfs/game/8e8b04e7bd2170c2ba2c9f563a62c72bac2eba2c.jpg",
            "name": "明日方舟"
        }
    ]
}
```



### 查询用户创建的视频收藏夹列表

> http://api.bilibili.com/x/v3/fav/folder/created/list-all 

*方式：GET*

查看私有收藏夹时需要登录(SESSDATA)

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| up_mid | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                        |
| ------- | ----------------------------- | -------- | --------------------------- |
| code    | num                           | 返回值   | 0：成功<br />-400：请求错误 |
| message | str                           | 错误信息 | 默认为0                     |
| ttl     | num                           | 1        | 作用尚不明确                |
| data    | 隐藏时：null<br />公开时：obj | 信息本体 |                             |

`data`对象：

| 字段  | 类型                                     | 内容           | 备注 |
| ----- | ---------------------------------------- | -------------- | ---- |
| count | num                                      | 创建的收藏夹数 |      |
| list  | 无收藏夹时：null<br />有收藏夹时：array | 收藏夹列表     |      |

`data`中的`list`数组：

| 项   | 类型 | 内容        | 备注                  |
| ---- | ---- | ----------- | --------------------- |
| 0    | obj  | 收藏夹1     |                       |
| n    | obj  | 收藏夹(n+1) | 项数取决于`count`的值 |
| ……   | obj  | ……          |                       |

`data`中的`list`数组中的对象：

| 字段        | 类型 | 内容             | 备注                                      |
| ----------- | ---- | ---------------- | ----------------------------------------- |
| id          | num  | 收藏夹mlID       |                                           |
| fid         | num  | 原始收藏夹ID     | 去除两位UID尾号                           |
| mid         | num  | 创建用户UID      |                                           |
| attr        | num  | 收藏夹属性       | 转换成8-bit二进制处理<br />详细说明见下表 |
| title       | str  | 收藏夹标题       |                                           |
| fav_state   | num  | 0                | 作用尚不明确                              |
| media_count | num  | 收藏夹总计视频数 |                                           |

`attr`属性二进制值表：

| 其他有待补充... | 1：默认收藏夹                    | 0：公开性            |
| --------------- | -------------------------------- | -------------------- |
|                 | 0：默认收藏夹<br />1：其他收藏夹 | 0：公开<br />1：私有 |

**示例：**

查询用户`UID=7792521`的收藏夹列表

http://api.bilibili.com/x/v3/fav/folder/created/list-all?up_mid=7792521

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"count": 5,
		"list": [{
			"id": 44233921,
			"fid": 442339,
			"mid": 7792521,
			"attr": 0,
			"title": "默认收藏夹",
			"fav_state": 0,
			"media_count": 85
		}, {
			"id": 936347621,
			"fid": 9363476,
			"mid": 7792521,
			"attr": 22,
			"title": "放假君的鬼畜私房歌",
			"fav_state": 0,
			"media_count": 2
		}, {
			"id": 845218621,
			"fid": 8452186,
			"mid": 7792521,
			"attr": 22,
			"title": "♪一言不合就开唱♪",
			"fav_state": 0,
			"media_count": 4
		}, {
			"id": 844998121,
			"fid": 8449981,
			"mid": 7792521,
			"attr": 22,
			"title": "个人作品精选",
			"fav_state": 0,
			"media_count": 25
		}, {
			"id": 381779121,
			"fid": 3817791,
			"mid": 7792521,
			"attr": 22,
			"title": "鬼畜小课堂",
			"fav_state": 0,
			"media_count": 25
		}]
	}
}
```



### 查询用户收藏的收藏夹

> http://api.bilibili.com/x/v3/fav/folder/collected/list 

*方式：GET*

**url参数：**

| 参数名 | 类型 | 内容        | 必要性 | 备注 |
| ------ | ---- | ----------- | ------ | ---- |
| ps     | num  | 每页项数    | 必要   |      |
| pn     | num  | 页码        | 必要   |      |
| up_mid | num  | 目标用户UID | 必要   |      |

**json回复：**

根对象：

| 字段    | 类型                          | 内容     | 备注                                                         |
| ------- | ----------------------------- | -------- | ------------------------------------------------------------ |
| code    | num                           | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />40022：签名过长 |
| message | str                           | 错误信息 | 默认为0                                                      |
| ttl     | num                           | 1        | 作用尚不明确                                                 |
| data    | 隐藏时：null<br />公开时：obj | 信息本体 |                                                              |

`data`对象：

| 字段  | 类型                                     | 内容           | 备注 |
| ----- | ---------------------------------------- | -------------- | ---- |
| count | num                                      | 创建的收藏夹数 |      |
| list  | 无收藏夹时：null<br />有收藏夹时：array | 收藏夹列表     |      |

`data`中的`list`数组：

| 项   | 类型 | 内容        | 备注                  |
| ---- | ---- | ----------- | --------------------- |
| 0    | obj  | 收藏夹1     |                       |
| n    | obj  | 收藏夹(n+1) | 项数取决于`count`的值 |
| ……   | obj  | ……          |                       |

`data`中的`list`数组中的对象：

| 字段        | 类型 | 内容               | 备注                                      |
| ----------- | ---- | ------------------ | ----------------------------------------- |
| id          | num  | 收藏夹mlID         |                                           |
| fid         | num  | 原始收藏夹ID       | 去除两位UID尾号                           |
| mid         | num  | 创建用户UID        |                                           |
| attr        | num  | 收藏夹属性         | 转换成8-bit二进制处理<br />详细说明见下表 |
| title       | str  | 收藏夹标题         |                                           |
| cover       | str  | 收藏夹封面图片url  |                                           |
| upper       | obj  | 收藏夹创建用户信息 |                                           |
| cover_type  | num  | 2                  | 作用尚不明确                              |
| intro       | str  | 空                 | 作用尚不明确                              |
| ctime       | num  | 创建时间           | 时间戳                                    |
| mtime       | num  | 审核时间           | 时间戳                                    |
| state       | num  | 0                  | 作用尚不明确                              |
| fav_state   | num  | 0                  | 作用尚不明确                              |
| media_count | num  | 收藏夹总计视频数   |                                           |

`attr`属性二进制值表：

| 其他有待补充... | 1：默认收藏夹                    | 0：公开性            |
| --------------- | -------------------------------- | -------------------- |
|                 | 0：默认收藏夹<br />1：其他收藏夹 | 0：公开<br />1：私有 |

`data`中的`list`数组中的对象中的`upper`对象：

| 字段 | 类型 | 内容       | 备注         |
| ---- | ---- | ---------- | ------------ |
| mid  | num  | 创建人UID  |              |
| name | str  | 创建人昵称 |              |
| face | str  | 空         | 作用尚不明确 |

**示例：**

查询用户`UID=293793435`的收藏夹收藏列表

 http://api.bilibili.com/x/v3/fav/folder/collected/list?pn=1&ps=20&up_mid=293793435 

```json
{
	"code": 0,
	"message": "0",
	"ttl": 1,
	"data": {
		"count": 2,
		"list": [{
			"id": 496307088,
			"fid": 4963070,
			"mid": 412466388,
			"attr": 22,
			"title": "入站必刷",
			"cover": "http://i0.hdslb.com/bfs/archive/baae2b4050363c0ab45465b7cf696b8304fdaca8.jpg",
			"upper": {
				"mid": 412466388,
				"name": "热门菌",
				"face": ""
			},
			"cover_type": 2,
			"intro": "",
			"ctime": 1563394571,
			"mtime": 1563394571,
			"state": 0,
			"fav_state": 0,
			"media_count": 55
		}, {
			"id": 381779121,
			"fid": 3817791,
			"mid": 7792521,
			"attr": 22,
			"title": "鬼畜小课堂",
			"cover": "http://i2.hdslb.com/bfs/archive/09a668cfdb38fb3a85f905c10f48a2947e36a695.jpg",
			"upper": {
				"mid": 7792521,
				"name": "还有一天就放假了",
				"face": ""
			},
			"cover_type": 2,
			"intro": "",
			"ctime": 1553700224,
			"mtime": 1557291666,
			"state": 0,
			"fav_state": 0,
			"media_count": 25
		}]
	}
}
```





## 设置相关

### 修改个人签名

> http://api.bilibili.com/x/member/web/sign/update

*方式：POST*

签名最多支持70个字

修改签名不会立即生效，会等待审核队列稍后生效

需要登录(SESSDATA)

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名    | 类型 | 内容                | 必要性 | 备注                   |
| --------- | ---- | ------------------- | ------ | ---------------------- |
| user_sign | str  | 要设置的签名内容    | 非必要 | 删除签名留空或省去即可 |
| csrf      | str  | cookies中的bili_jct | 必要   |                        |

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

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注                                    |
| ------ | ---- | ------------------- | ------ | --------------------------------------- |
| notice | str  | 要设置的公告内容    | 非必要 | 删除公告留空或省去即可<br />少于150字符 |
| csrf   | str  | cookies中的bili_jct | 必要   |                                         |

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



### 修改空间隐私权限

> http://space.bilibili.com/ajax/settings/setPrivacy

*方式：POST*

需要登录(SESSDATA)

需要验证`DedeUserID`及`DedeUserID__ckMd5`存在且不为0

需要验证`referer`为 `http://.bilibili.com`或`https://.bilibili.com`域名下

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名      | 类型 | 内容                | 必要性 | 备注                           |
| ----------- | ---- | ------------------- | ------ | ------------------------------ |
| fav_video   | num  | 收藏视频            | 非必要 | 0：隐藏<br />1：公开<br />下同 |
| bangumi     | num  | 追番及追剧          | 非必要 |                                |
| tags        | num  | 关注的TAG           | 非必要 |                                |
| coins_video | num  | 投币的视频          | 非必要 |                                |
| user_info   | num  | 个人信息            | 非必要 |                                |
| played_game | num  | 玩过的游戏          | 非必要 |                                |
| csrf        | nstr | cookies中的bili_jct | 必要   |                                |

**json回复：**

根对象：

| 字段   | 类型 | 内容     | 备注                                |
| ------ | ---- | -------- | ----------------------------------- |
| ststus | bool | 操作结果 | true：操作成功<br />false：操作失败 |
| data   | str  | 错误信息 | 正确时无此项                        |

**示例：**

设置`关注的TAG`为隐藏

curl --referer "http://.bilibili.com" -b "SESSDATA=xxx;DedeUserID=1;DedeUserID__ckMd5=1;" -d "csrf=xxx&tags=0" "http://space.bilibili.com/ajax/settings/setPrivacy"

```json
{
    "status": true
}
```



### 调整空间板块布局

> http://space.bilibili.com/ajax/settings/setIndexOrder

*方式：POST*

需要登录(SESSDATA)

需要验证`DedeUserID`及`DedeUserID__ckMd5`存在且不为0

需要验证`referer`为 `http://.bilibili.com`或`https://.bilibili.com`域名下

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名      | 类型 | 内容                | 必要性 | 备注                                                         |
| ----------- | ---- | ------------------- | ------ | ------------------------------------------------------------ |
| index_order | nums | 布局列表            | 必要   | 每个值之间用","（%2C）分隔<br />先左侧布局再右侧布局<br />值的意义见下表 |
| csrf        | str  | cookies中的bili_jct | 必要   |                                                              |

布局参数`index_order`：

| 值   | 含义                   |
| ---- | ---------------------- |
| 1    | （左侧）我的稿件       |
| 2    | （左侧）我的收藏夹     |
| 3    | （左侧）订阅番剧       |
| 4    | （左侧）订阅标签       |
| 5    | （左侧）最近投币的视频 |
| 6    | **作用尚不明确**       |
| 7    | （左侧）我的频道       |
| 8    | （左侧）我的专栏       |
| 9    | （左侧）我的相簿       |
| 21   | （右侧）公告           |
| 22   | （右侧）直播间         |
| 23   | （右侧）个人资料       |
| 24   | （右侧）官方活动       |
| 25   | （右侧）最近玩的游戏   |

**json回复：**

根对象：

| 字段   | 类型 | 内容     | 备注                                |
| ------ | ---- | -------- | ----------------------------------- |
| ststus | bool | 操作结果 | true：操作成功<br />false：操作失败 |
| data   | str  | 错误信息 | 正确时无此项                        |

**示例：**

调整空间布局为：

>我的稿件            直播间
>我的专栏            个人资料
>订阅番剧            公告
>我的收藏夹        官方活动
>我的相簿            最近玩的游戏
>最近投币的视频
>订阅标签
>我的频道

curl --referer "http://.bilibili.com" -b "SESSDATA=xxx;DedeUserID=1;DedeUserID__ckMd5=1;" -d "csrf=xxx&index_order=1%2C8%2C3%2C2%2C9%2C5%2C4%2C7%2C22%2C23%2C21%2C24%2C25%2C6" "http://space.bilibili.com/ajax/settings/setIndexOrder"

```json
{
    "status": true
}
```



### 修改个人TAG

> http://api.bilibili.com/x/space/acc/tags/set

*方式：POST*

需要登录(SESSDATA)

需要验证`DedeUserID`存在且不为0

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注                                                         |
| ------ | ---- | ------------------- | ------ | ------------------------------------------------------------ |
| tags   | strs | 要设置的TAG内容     | 非必要 | 删除公告留空或省去即可<br />各TAG长度小于10字符<br />最多5个TAG<br />各TAG之间用","(%2C)分隔<br />重复TAG无效 |
| csrf   | str  | cookies中的bili_jct | 必要   |                                                              |

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

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性       | 备注                             |
| ------ | ---- | ------------------- | ------------ | -------------------------------- |
| aid    | num  | 置顶目标视频avID    | 必要（可选） | avID与bvID任选一个               |
| bvid   | str  | 置顶目标视频bvID    | 必要（可选） | avID与bvID任选一个               |
| reason | str  | 置顶视频备注        | 非必要       | 置顶备注最大40字符<br />默认为空 |
| csrf   | str  | cookies中的bili_jct | 必要         |                                  |

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

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性 | 备注 |
| ------ | ---- | ------------------- | ------ | ---- |
| csrf   | str  | cookies中的bili_jct | 必要   |      |

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

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                | 必要性       | 备注                             |
| ------ | ---- | ------------------- | ------------ | -------------------------------- |
| aid    | num  | 置顶目标视频avID    | 必要（可选） | avID与bvID任选一个               |
| bvid   | str  | 置顶目标视频bvID    | 必要（可选） | avID与bvID任选一个               |
| reason | str  | 代表作备注          | 非必要       | 置顶备注最大40字符<br />默认为空 |
| csrf   | str  | cookies中的bili_jct | 必要         |                                  |

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

**正文参数（ application/x-www-form-urlencoded ）：**

| 参数名 | 类型 | 内容                 | 必要性       | 备注               |
| ------ | ---- | -------------------- | ------------ | ------------------ |
| aid    | num  | 要删除的目标视频avID | 必要（可选） | avID与bvID任选一个 |
| bvid   | str  | 要删除的目标视频bvID | 必要（可选） | avID与bvID任选一个 |
| csrf   | str  | cookies中的bili_jct  | 必要         |                    |

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

